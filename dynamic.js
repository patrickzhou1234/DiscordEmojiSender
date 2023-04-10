// ==UserScript==
// @name         Discord Emoji Sender Dynamic
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://discord.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

setTimeout(() => {
    document.querySelectorAll(".sprite-2lxwfc")[0].onclick = () => {
        setTimeout(() => {
            document.querySelectorAll("button.emojiItem-277VFM").forEach((el) => {
                el.onclick = () => {
                    fetch("https://discord.com/api/v9/channels/"+window.location.href.split("/")[5]+"/messages", {
                        "headers": {
                            "accept": "*/*",
                            "accept-language": "en-US,en;q=0.9",
                            "authorization": (webpackChunkdiscord_app.push([
                                [""], {},
                                t => {
                                    for (let e in m = [], t.c) m.push(t.c[e])
                                }
                            ]), m).find(t => t?.exports?.default?.getToken !== void 0).exports.default.getToken(),
                            "content-type": "application/json",
                            "sec-ch-ua": "\"Google Chrome\";v=\"111\", \"Not(A:Brand\";v=\"8\", \"Chromium\";v=\"111\"",
                            "sec-ch-ua-mobile": "?0",
                            "sec-ch-ua-platform": "\"Windows\"",
                            "sec-fetch-dest": "empty",
                            "sec-fetch-mode": "cors",
                            "sec-fetch-site": "same-origin",
                            "x-debug-options": "bugReporterEnabled",
                            "x-discord-locale": "en-US",
                            "x-super-properties": ""
                        },
                        "referrer": "https://discord.com/channels/@me/",
                        "referrerPolicy": "strict-origin-when-cross-origin",
                        "body": `{\"content\":\"<a:${el.getAttribute("data-name")}:${el.getAttribute("data-id")}>\",\"tts\":false,\"flags\":0}`,
                        "method": "POST",
                        "mode": "cors",
                        "credentials": "include"
                    });
                }
            });
        }, 500);
    }
}, 6000);
