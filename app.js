const osrsWikiSearch = document.getElementById('osrs-wiki-search');

osrsWikiSearch.addEventListener('keypress', function(e) {
    const query = osrsWikiSearch.value;
    const website = "https://oldschool.runescape.wiki/?search=";
    const searchUrl = website + query;

    // window.location.href = searchUrl;
    if (e.key === "Enter") {
        window.open(searchUrl, '_blank').focus();
    } 
});
