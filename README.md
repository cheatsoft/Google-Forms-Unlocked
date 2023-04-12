# Lockpick - Google Form Lockpicker

This extension is designed to add Google (in an **iFrame**) to the bottom of a locked Google Form in locked mode.The primary goal is to overcome Google Forms Locked/Kiosk mode. It features keybindings for power users to open, close and hide parts of the extension as well as an emergency destroy function. For ease of access, a context-menu integration replicates the keybindings. 

## Keybindings
For power users the following keybindings exist:
- `Alt + L` - Close an iFrame 
- `Alt + O` - Open a new iFrame
- `Alt + B` - Hide/display all buttons
- `Ctrl + Shift + Alt + Q` **EMERGENCY BUTTON** - Completely destroys all evidence of the extension (except for Context Menu Integration)
  - In order to undo this, the Context Menu (right click) has an option: `Restart Ext` which will re-add the extension
## Installation
- Start by downloading and unzipping this repository
- Open chrome://extensions and enable `Developer Mode`
- Proceed to click `Load Unpacked` and choose the folder with this extension
- Visit a locked Google Form and use this extension!

Note: Once added it will show up as `Browser Safety` in your extensions list, in order to obfuscate it.

## Coming Soon
- Support for ChatGPT

## Notes
- This extension uses Manifest Version 2, for which support will be dropped soon (Manifest Version 2 is only required for the Context Menu Integration)
- Support for this type of current application (Legacy Packaged App) [will finish in 2025](https://blog.chromium.org/2021/10/extending-chrome-app-support-on-chrome.html)
- Modern PWA solution is planned but dependent upon [`kiosk_enabled`](https://developer.chrome.com/docs/apps/manifest/kiosk_enabled/) [support for PWA's](https://www.chromium.org/chrome-apps/)
- This app is not necessarily meant to be used in non-Kiosk mode (already unlocked) Google Forms, but can be used there too