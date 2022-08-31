// ==UserScript==
// @name         Twitter Declutter
// @namespace    https://github.com/fraserreilly
// @version      1.0
// @license      GNU General Public License v3.0
// @description  Removes the sidebar column from twitter (right sidebar) and dm drawer.
// @author       fraserreilly
// @match        *://twitter.com/*
// @exclude      *//twitter.com/i/flow/login
// @grant        none
// @homepageURL  https://github.com/fraserreilly/twitter-declutterer
// @supportURL   https://github.com/fraserreilly/twitter-declutterer/issues
// @downloadURL  https://raw.githubusercontent.com/fraserreilly/twitter-declutterer/declutter.user.js
// @updateURL    https://raw.githubusercontent.com/fraserreilly/twitter-declutterer/declutter.user.js
// ==/UserScript==

function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

waitForElm('[data-testid="DMDrawer"]').then((elm) => {
    if (elm.style.display !== "none") {
        elm.style.display = "none";
    }
});

waitForElm('[data-testid="sidebarColumn"]').then((elm) => {
    if (elm.style.display !== "none") {
        elm.style.display = "none";
    }
});
