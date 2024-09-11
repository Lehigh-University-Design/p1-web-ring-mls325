/* script.js */

document.querySelectorAll('.genre-box').forEach(item => {
    item.addEventListener('click', event => {
        const genre = event.target.getAttribute('data-genre');
        const genreInfo = document.getElementById('genre-info');
        if (genre === 'Jazz') {
            genreInfo.textContent = "Masego blends smooth Jazz elements with modern Trap beats.";
        } else if (genre === 'R&B') {
            genreInfo.textContent = "His soulful R&B melodies reflect his romantic, introspective vibe.";
        } else if (genre === 'Hip-Hop') {
            genreInfo.textContent = "Hip-Hop flows and rhythms are essential to Masego's genre-defying sound.";
        }
    });
});