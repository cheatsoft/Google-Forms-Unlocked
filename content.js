const insertButton = document.createElement('button');
insertButton.innerText = 'Insert';
insertButton.className = 'unlock--iButton';
// TODO: Future refactoring should convert some of those code into classes

function createIframe() {
  const iframeDiv = document.createElement('div');
  iframeDiv.className = 'unlock--iCenter unlock--iDiv';
  const customIframe = document.createElement('iframe');
  customIframe.className = 'unlock--iFrame';
  customIframe.src = 'https://www.google.com/search?igu=1';
  customIframe.width = '500';
  customIframe.height = '300';
  customIframe.sandbox =
    'allow-scripts allow-same-origin+allow-forms allow-popups allow-downloads allow-top-navigation allow-top-navigation-to-custom-protocols';
  customIframe.referrerPolicy = 'no-referrer';
  customIframe.style.display = 'flex';
  customIframe.style.flexDirection = 'column';

  const iframeRemove = document.createElement('button');
  iframeRemove.className = 'unlock--iButton unlock--iCenter';
  iframeRemove.innerText = 'Remove Iframe';
  iframeRemove.addEventListener('click', () => {
    iframeDiv.remove();
  });

  iframeDiv.appendChild(iframeRemove);
  iframeDiv.appendChild(customIframe);
  return iframeDiv;
}

function init() {
  const mainBox = document.createElement('div');
  mainBox.className = 'unlock--iCenter';
  mainBox.style.width = 'max-content';

  insertButton.addEventListener('click', () => {
    mainBox.appendChild(createIframe());
  });

  mainBox.appendChild(insertButton);
  mainBox.appendChild(createIframe());
  document.body.appendChild(mainBox);
}
document.onload = init();
