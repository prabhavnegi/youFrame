chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'openVideo') {
        const playerUrl = chrome.runtime.getURL('player.html') + '?v=' + message.videoId;
        chrome.tabs.create({ url: playerUrl });
    }
});