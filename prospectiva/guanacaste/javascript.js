const express = require('express');
const { OAuth2Client } = require('google-auth-library');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Reemplaza con tu CLIENT_ID
const CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID';
const client = new OAuth2Client(CLIENT_ID);

app.use(bodyParser.json());

// Ruta para manejar el token ID
app.post('/auth/google', async (req, res) => {
    const { id_token } = req.body;

    try {
        const ticket = await client.verifyIdToken({
            idToken: id_token,
            audience: CLIENT_ID,
        });

        const payload = ticket.getPayload();
        const userid = payload['sub'];
        const email = payload['email'];

        // Puedes guardar el usuario en tu base de datos si es necesario
        console.log(`Usuario autenticado: ${email}`);

        res.json({ success: true, message: 'Authenticated successfully', email });
    } catch (error) {
        console.error('Error verifying token:', error);
        res.status(401).json({ success: false, message: 'Authentication failed' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
