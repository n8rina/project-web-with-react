import axios from "axios"

const apiKey = process.env.REACT_APP_APIKEY;
// Ganti baseUrl dengan proxyUrl
const proxyUrl = 'http://localhost:3000/tmdb-proxy';

export const getMovieList = async () => {
    const movie = await axios.get(`${proxyUrl}?/movie/popular?page=1&api_key=${apiKey}`)
    console.log({ movieList: movie })
    return movie.data.results; // Mengembalikan data movie untuk digunakan di aplikasi Anda
}

export const searchMovie = async (q) => {
    // Gunakan proxyUrl sebagai base URL
    const search = await axios.get(`${proxyUrl}/search/movie?query=${q}&page=1&api_key=${apiKey}`, {
        params: {
            api_key: apiKey,
            query: q,
        },
    });
    return search.data; // Mengembalikan data pencarian untuk digunakan di aplikasi Anda
}
