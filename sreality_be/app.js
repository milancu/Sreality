const express = require('express');
const cors = require('cors');
const db = require('./db');
const origin = process.env.ORIGIN || 'http://localhost:5173';

const port = process.env.PORT || 3000;
const perPage = 25;

const app = express();
app.use(cors({
    origin: origin, credentials: true,
}));

app.get('/api/estates', async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const offset = (page - 1) * perPage;

    try {
        const items = await getPagedData(perPage, offset);
        res.send(items);
    } catch (err) {
        res.status(500).json({error: 'Internal Server Error'});
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port} and origin ${origin}`);
});

async function getPagedData(perPage, offset) {
    const rows = await db.any(`SELECT * FROM scraped_data ORDER BY id LIMIT ${perPage} OFFSET ${offset}`);

    return rows.map(row => ({
        id: row.id, title: row.title, imageUrl: row.image_url
    }));
}
