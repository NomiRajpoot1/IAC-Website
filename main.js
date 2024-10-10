document.addEventListener("DOMContentLoaded", () => {
    const loadHTML = (path, elementId) => {
        fetch(path)
            .then(response => response.text())
            .then(data => {
                document.getElementById(elementId).innerHTML = data;
            })
            .catch(error => console.error(`Error loading ${path}: `, error));
    };

    loadHTML('header.html', 'header');
    loadHTML('footer.html', 'footer');
});
