script.js

document.addEventListener('DOMContentLoaded', function() {
    const catImage = document.querySelector('.cat-image');
    const changeCatButton = document.querySelector('.change-cat-button');

    function getRandomCatImage() {
        const width = Math.floor(Math.random() * 200) + 300;
        const height = Math.floor(Math.random() * 200) + 300;
        return `https://placekitten.com/${width}/${height}`;
    }

    changeCatButton.addEventListener('click', function() {
        catImage.src = getRandomCatImage();
    });
});
