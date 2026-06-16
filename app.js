const searchBox = document.getElementById('search-box')
const osrsWikiSearch = document.getElementById('osrs-wiki-search');

searchBox.addEventListener('keypress', function(e) {
    const query = searchBox.value.replaceAll(" ", "+");
    const website = "https://www.google.com/search?q=";
    const searchURL = website + query + "&tbs=1";

    if (e.key === "Enter") {
        window.open(searchURL, '_blank').focus();
        searchBox.value = "";
    }
})

osrsWikiSearch.addEventListener('keypress', function(e) {
    const query = osrsWikiSearch.value.replaceAll(" ", "+");
    const website = "https://oldschool.runescape.wiki/?search=";
    const searchURL = website + query;

    if (e.key === "Enter") {
        window.open(searchURL, '_blank').focus();
        osrsWikiSearch.value = "";
    } 
});
