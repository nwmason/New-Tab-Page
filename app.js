const searchBox = document.getElementById('search-box')
const osrsWikiSearch = document.getElementById('osrs-wiki-search');

searchBox.addEventListener('keypress', function(e) {
    const query = searchBox.value.replaceAll(" ", "+");
    const website = "https://www.google.com/search?q=";
    const searchUrl = website + query;

    if (e.key === "Enter") {
        window.open(searchUrl, '_blank').focus();
    }
})

osrsWikiSearch.addEventListener('keypress', function(e) {
    const query = osrsWikiSearch.value.replaceAll(" ", "+");
    const website = "https://oldschool.runescape.wiki/?search=";
    const searchUrl = website + query;

    if (e.key === "Enter") {
        window.open(searchUrl, '_blank').focus();
    } 
});
