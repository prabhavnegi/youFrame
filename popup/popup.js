document.getElementById('openVideo').addEventListener('click', function() {
    const url = document.getElementById('videoUrl').value;
    const videoId = new URL(url).searchParams.get('v'); // Extract video ID
    if (videoId) {
        chrome.tabs.create({ url: `https://www.youtube.com/embed/${videoId}` });
    } else {
        alert('Please enter a valid YouTube video URL.');
    }
});