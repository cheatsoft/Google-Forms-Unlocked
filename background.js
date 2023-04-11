chrome.contextMenus.create({
  title: 'Display Google',
  id: 'displayGoogle',
  contexts: ['all'],
});
chrome.contextMenus.create({
  title: 'Change Button Display',
  id: 'modifyButtonDisplay',
  contexts: ['all'],
});
chrome.contextMenus.create({
  title: 'Destroy All',
  id: 'emergencyDestroy',
  contexts: ['all'],
});
chrome.contextMenus.create({
  title: 'Restart Extension (After Destroy)',
  id: 'restartExt',
  contexts: ['all'],
});
chrome.contextMenus.onClicked.addListener(function (info, tab) {
  chrome.tabs.sendMessage(tab.id, {
    message: info.menuItemId,
  });
});
