chrome.tabs.onUpdated.addListener(function(tabId, change, tab) {
    if (change.status == "complete" && !tab.incognito) {
             
    }
});

chrome.tabs.onRemoved.addListener(function(tabId, removeInfo) {
    // Update tab information...

});

