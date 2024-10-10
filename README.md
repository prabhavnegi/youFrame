# YouTube Embedder Extension

## Overview
YouTube Embedder is a Chrome extension that enhances your YouTube browsing experience by opening videos in a clean, distraction-free, ad-free player. Simply Alt+Ctrl+Click (Option+Ctrl+Click on Mac) any YouTube video link to open it in a new tab with a simplified, full-screen embedded player without any advertisements.

## Important Limitations
- ⚠️ **Age-Restricted Videos**: Cannot play age-restricted content due to YouTube's embed restrictions
- ⚠️ **Premium Content**: May not work with certain premium or restricted videos

## How to Use
1. Navigate to any YouTube page
2. Hold Alt+Ctrl (Option+Ctrl on Mac)
3. Click on any video link or thumbnail
4. The video opens in a new tab, ad-free and distraction-free

## Features
- ⌨️ Simple Alt+Ctrl+Click to activate
- 🚫 less adds
- 🎥 Opens YouTube videos in a distraction-free environment
- 🔲 Full-screen, responsive video player
- 🚀 Fast and lightweight
- 🎯 Works with all types of YouTube video links
- 🔄 Preserves original video quality

## Why Use YouTube Embedder?
- **Keyboard Shortcut**: Alt+Ctrl+Click makes it easy to choose when to use the extension
- **Less Interruptions**: Say goodbye to disruptive ads during your video watching
- **Faster Video Starts**: Videos load instantly without waiting for ads to play
- **Cleaner Interface**: No suggested videos, comments, or other distractions
- **Better Focus**: Enjoy content without the clutter and advertising

## Installation

### From Source
1. Clone this repository or download the source code:
   ```
   git clone https://github.com/yourusername/youtube-embedder.git
   ```
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the extension directory

## How It Works
The extension uses content scripts to detect Alt+Ctrl+Click on YouTube video links. When a video link is clicked with Alt+Ctrl:
1. The extension extracts the video ID from the URL
2. Opens a new tab with a custom HTML page
3. Embeds the YouTube video using the official YouTube iframe API
4. Bypasses the normal YouTube page, avoiding ads and other distractions

### Key Components
- `manifest.json`: Extension configuration
- `content.js`: Handles link detection and Alt+Ctrl+Click interception
- `background.js`: Manages tab creation and communication
- `player.html`: Provides the ad-free, distraction-free video player interface

## Technical Details

### Content Script
```javascript
document.addEventListener('click', function(e) {
    // Check if Alt and Ctrl keys are pressed
    if (!(e.altKey && e.ctrlKey)) return;
    
    let videoLink = e.target.closest('a');
    if (!videoLink) return;

    let href = videoLink.href;
    if (!href.includes('/watch?v=')) return;

    e.preventDefault();

    let videoId = new URL(href).searchParams.get('v');
    if (!videoId) return;

    chrome.runtime.sendMessage({
        action: 'openVideo',
        videoId: videoId
    });
}, true);
```
## Acknowledgments
- Inspired by the need for a distraction-free, ad-free YouTube experience
- Thanks to the Chrome Extensions documentation and community

## Version History
- 1.0.0 (2024-03-14)
  - Initial release
  - Ad-free video embedding functionality
  - Full-screen responsive player

---

Made with ❤️ by [Your Name]
