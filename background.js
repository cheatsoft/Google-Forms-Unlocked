// This background page requires Manifest Version 2 (without which it doesn't work)
// It's primary goal is a context-menu-integration
chrome.contextMenus.create({
  title: 'Display Google',
  documentUrlPatterns: ['https://docs.google.com/forms/d/e/*'],
  id: 'displayGoogle',
  contexts: ['all'],
});

chrome.contextMenus.create({
  title: 'Change Button Display',
  id: 'modifyButtonDisplay',
  documentUrlPatterns: ['https://docs.google.com/forms/d/e/*'],
  contexts: ['all'],
});

chrome.contextMenus.create({
  title: 'Destroy All',
  id: 'emergencyDestroy',
  documentUrlPatterns: ['https://docs.google.com/forms/d/e/*'],
  contexts: ['all'],
});

chrome.contextMenus.create({
  title: 'Restart Extension (After Destroy)',
  id: 'restartExt',
  documentUrlPatterns: ['https://docs.google.com/forms/d/e/*'],
  contexts: ['all'],
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  chrome.tabs.sendMessage(tab.id, {
    message: info.menuItemId,
  });
});
