# Axel Springer Blocker (ABS)
Axel Springer Blocker is a practical browser extension for Chromium based browsers such as Google Chrome, Opera, Yandex, Vivaldi etc.

## Easy installation guide for Chromium based browsers 
The easiest way is to download this extension directly from the Chrome Web Store.  
This version updates itself after each change.  
[Install over Chrome Web Store](https://chrome.google.com/webstore/detail/axel-springer-blocker-asb/cbnipbdpgcncaghphljjicfgmkonflee)
## Advanced installation guide for Chromium based browsers 
You can easily create your own version of this extension.  
All you need is time and some understanding of browser extension development.  
-  Read the developer documentation from your browser manufacturer
-  Create a manifest document (mostly a .json document)  
Here is an example for Google Chrome:
```sh
{
   "background": {
      "scripts": [ "" ]
   },
   "default_locale": "",
   "icons": {},
   "manifest_version": 2,
   "name": "Axel Springer Blocker (ASB)",
   "offline_enabled": false,
   "options_page": "",
   "permissions": [ "webRequest", "webRequestBlocking", "http://*/*", "https://*/*" ],
   "update_url": "https://clients2.google.com/service/update2/crx",
   "version": ""
}
```
-  Validate the files and have fun blocking some websites
