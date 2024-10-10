console.log('YouTube Embedder extension loaded');

document.addEventListener('click', function(e) {
    if (!e.ctrlKey || !e.altKey) {
        return; // If either key is not pressed, do nothing
    }
    console.log('Click detected on element:', e.target);
    
    const videoLink = e.target.closest('a');
    console.log('Closest anchor element:', videoLink);
    
    if (!videoLink) {
        console.log('No anchor element found');
        return;
    }

    const href = videoLink.href;
    console.log('Link href:', href);
    
    if (!href || !href.includes('/watch?v=')) {
        console.log('Not a video link');
        return;
    }

    try {
        const videoId = new URL(href).searchParams.get('v');
        console.log('Video ID:', videoId);
        
        if (!videoId) {
            console.log('No video ID found');
            return;
        }

        console.log('Valid video link clicked, preventing default behavior');
        e.preventDefault();
        e.stopPropagation();

        console.log('Sending message to open video:', videoId);
        chrome.runtime.sendMessage({
            action: 'openVideo',
            videoId: videoId
        });
    } catch (error) {
        console.error('Error processing video link:', error);
    }
}, true);  // Use capture phase to intercept events before YouTube's handlers