const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000; // Port lokal server proxy

// Middleware untuk mengatasi CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Ganti dengan asal yang diizinkan
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Endpoint proxy untuk meneruskan permintaan ke TMDb
app.get('/tmdb-proxy/movie/popular', async (req, res) => {
  try {
    const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
      params: {
        api_key: 'e275a2c0c0212bdb0755d2593ccf17d4', // Ganti dengan kunci API TMDb Anda
        // tambahkan parameter lain jika diperlukan
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error from TMDb:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Jalankan server proxy
app.listen(port, () => {
  console.log(`Server proxy berjalan di http://localhost:${port}`);
});
