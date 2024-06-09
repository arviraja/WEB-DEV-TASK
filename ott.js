document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('searchBar');
    searchBar.addEventListener('input', filterContent);
    
    // Load initial content
    loadContent();

    function loadContent() {
        // Dummy data for illustration purposes
        /*const movies = [
            { title: "Jumanji", imgSrc: "jumanji.webp", link: "movies1.html" },
            { title: "Oppenheimer", imgSrc: "oppenheimer.jpg", link: "movies2.html" },
        ];*/

        const trendingContainer = document.getElementById('trending-container');
        const recommendedContainer = document.getElementById('recommended-container');

       /* movies.forEach(movie => {
            const img = document.createElement('img');
            img.src = movie.imgSrc;
            img.alt = movie.title;
            img.addEventListener('click', () => {
                window.location.href = movie.link;
            });*/

            // Append to trending and recommended sections for demo purposes
            trendingContainer.appendChild(img.cloneNode(true));
            recommendedContainer.appendChild(img.cloneNode(true));
        });
    }

    function filterContent(event) {
        const query = event.target.value.toLowerCase();
        const images = document.querySelectorAll('.content-container img');

        images.forEach(img => {
            const title = img.alt.toLowerCase();
            if (title.includes(query)) {
                img.style.display = 'block';
            } else {
                img.style.display = 'none';
            }
        });
    }
});
