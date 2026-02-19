const express = require('express');
const router = express.Router();

// Mock Data
const movies = [
    { id: 1, title: 'Stranger Things', thumbnail: 'https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg', genre: 'Sci-Fi' },
    { id: 2, title: 'The Witcher', thumbnail: 'https://image.tmdb.org/t/p/w500/7vjaCdMW15FEbXy92xjosCwhVD.jpg', genre: 'Fantasy' },
    { id: 3, title: 'Money Heist', thumbnail: 'https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg', genre: 'Crime' },
    { id: 4, title: 'Breaking Bad', thumbnail: 'https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg', genre: 'Drama' },
    { id: 5, title: 'Dark', thumbnail: 'https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXkFbk1Z8.jpg', genre: 'Sci-Fi' },
    { id: 6, title: 'Narcos', thumbnail: 'https://image.tmdb.org/t/p/w500/rTjDoLo2eTggYVBPhUqUIBKwzwI.jpg', genre: 'Crime' },
    { id: 7, title: 'Black Mirror', thumbnail: 'https://image.tmdb.org/t/p/w500/7RumId59YFSo9flU5QpU5N59W09.jpg', genre: 'Sci-Fi' },
    { id: 8, title: 'The Crown', thumbnail: 'https://image.tmdb.org/t/p/w500/mbm8k3GFhXS0ROd9AD1gqYbIFbM.jpg', genre: 'Drama' },
];

router.get('/', (req, res) => {
    res.json(movies);
});

module.exports = router;
