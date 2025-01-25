const searchBox = document.getElementById('search-box');

searchBox.addEventListener('keypress', function(e) {
    const query = searchBox.value;
    const website = "https://oldschool.runescape.wiki/?search=";
    const searchUrl = website + query;

    // window.location.href = searchUrl;
    if (e.key === "Enter") {
        window.open(searchUrl, '_blank').focus();
    } 
});
