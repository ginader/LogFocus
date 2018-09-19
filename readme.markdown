LogFocus - handy Bookmarklet for Keyboard Accessibility testing
===============================================================

read all info about it and install the bookmarklet in the blogpost [in english](http://blog.ginader.de/archives/2008/11/19/LogFocus-handy-Bookmarklet-for-Keyboard-Accessibility-testing.php) or [in german](http://blog.ginader.de/archives/2008/11/19/archives/2008/11/19/LogFocus-hilfreiches-Bookmarklet-beim-Testen-von-Keyboard-Accessibility.php)

compiled into an actual bookmarklet using the very handy: [bookmarklet builder](http://subsimple.com/bookmarklets/jsbuilder.htm)

For modern Browsers you can simply use the following snippet instead:
```javascript
window.addEventListener('focus',function(e){
    window.console.info('focus',e.target);
},true);
```

How to add the snippet in Chrome:
![LogFocus Snippet howto](http://pic.dir.kg/logfocus-howto.gif)
