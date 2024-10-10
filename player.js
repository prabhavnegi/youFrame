const urlParams = new URLSearchParams(window.location.search);
const videoId = urlParams.get('v');

if (videoId) {
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    document.getElementById('player').src = embedUrl;
    document.title = 'youFrame';
}
