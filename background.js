chrome.runtime.onInstalled.addListener((details) => {
  const reason = details.reason;
  switch (reason) {
    case 'install':
      chrome.tabs.create({
        url: './install.html',
      });
      break;
    case 'update':
      //detect extension update
      break;
    case 'chrome_update':
      //detect browser update
      break;
  }
  chrome.storage.sync.set({ hello: 'world' });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'test') {
    console.log('Received message from content script');
    sendResponse('Service worker running.');
  }
});
