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
    document.body.focus();
  });

  document.addEventListener('keydown', function (event) {
    if (event.altKey && event.keyCode === 79) {
      mainBox.appendChild(createIframe());
      document.body.focus();
    } else if (event.altKey && event.keyCode === 76) {
      let iframeDivs = document.getElementsByClassName('unlock--iDiv');
      for (let i = 0; i < iframeDivs.length; i++) {
        iframeDivs[i].remove();
      }
      document.body.focus();
    } else if (event.altKey && event.keyCode === 66) {
      let buttons = document.querySelectorAll('.unlock--iButton');
      if (insertButton.classList.contains('hidden')) {
        for (let i = 0; i < buttons.length; i++) {
          buttons[i].classList.remove('hidden');
        }
      } else {
        for (let i = 0; i < buttons.length; i++) {
          buttons[i].classList.add('hidden');
        }
        document.body.focus();
      }
    } else if (
      event.altKey &&
      event.keyCode === 81 &&
      event.ctrlKey &&
      event.shiftKey
    ) {
      mainBox.remove();
    }
  });

  mainBox.appendChild(insertButton);
  document.body.appendChild(mainBox);
  document.body.focus();
}
document.onload = init();
