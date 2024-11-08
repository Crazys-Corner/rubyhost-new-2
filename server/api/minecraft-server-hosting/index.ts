import { defineEventHandler, sendError } from 'h3';

const WHMCS_API_URL = 'https://billing.rubyhost.net/hosting/includes/api.php';
const WHMCS_USERNAME = 'rubyapi';
const WHMCS_PASSWORD = '669a44d6f9198386d37f78da03cf301e';

// Helper function to perform a WHMCS API request
async function fetchProductsByGid(gid: any) {
  const params = new URLSearchParams();
  params.append('identifier', "Ov9iOHdFpyHStFsRufgnnWf1ouOT9kt4");
  params.append('secret', '6OU3gXNXQ3eOuumtx6aPofa2aQozgacj');
  params.append('action', 'GetProducts');
  params.append('responsetype', 'json');
  params.append('gid', gid.toString());

  const response = await fetch(WHMCS_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params.toString(),
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch products for gid ${gid}: ${response.statusText}`);
  }

  const data = await response.json();

  if (data.result !== 'success') {
    throw new Error(`WHMCS API error: ${data.message}`);
  }

  return data.products.product || [];
}

// Handle GET request to fetch products from different tiers
export default defineEventHandler(async (event) => {
  try {
    // Fetch products for Budget (gid 2), Pro (gid 4), Premium (gid 3) concurrently
    const [budgetProducts, proProducts, premiumProducts] = await Promise.all([
      fetchProductsByGid(2),
      fetchProductsByGid(4),
      fetchProductsByGid(3),
    ]);

    return {
      budget: budgetProducts,
      pro: proProducts,
      premium: premiumProducts,
    };
  } catch (error: any) {
    console.error(error);
    sendError(event, createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch data from WHMCS: ' + error.message,
    }));
  }
});
