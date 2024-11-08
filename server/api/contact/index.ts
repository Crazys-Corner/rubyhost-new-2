// server/api/contact
import { defineEventHandler, readBody } from 'h3';
import axios from 'axios';

export default defineEventHandler(async (event) => {
  // Replace with your Discord Webhook URL
  const webhookUrl = 'https://discord.com/api/webhooks/1304466591525765172/1LO_qDl597Dc7Pp078Cw3eNw5wEvYSbd4Pj2WqiF4sJrvQ7vNbx6OzSr7gzrhA1tiwUp';

  try {
    const body = await readBody(event);

    if (!body.name || !body.email || !body.message) {   
      return { status: 400, message: 'All fields are required.' };
    }

    // Construct the message payload for Discord with enhanced formatting
    const discordPayload = {
      embeds: [
        {
          title: 'Contact Form Submission',
          color: 3447003, // Hex color code for a blue shade
          fields: [
            {
              name: 'Name',
              value: body.name,
              inline: true
            },
            {
              name: 'Email',
              value: body.email,
              inline: true
            },
            {
              name: 'Message',
              value: body.message
            }
          ],
          footer: {
            text: 'Contact Form Bot',
            icon_url: 'https://rubyhost.net/logo.svg' // Replace with a relevant icon URL
          },
          timestamp: new Date().toISOString()
        }
      ]
    };

    // Send the data to the Discord webhook
    await axios.post(webhookUrl, discordPayload);

    return { status: 200, message: 'Message sent successfully!' };
  } catch (error) {
    console.error('Error sending message to Discord:', error);
    return { status: 500, message: 'An error occurred while sending your message.' };
  }
}); 