// ==UserScript==
// @name         JUST STRAFE
// @namespace    http://tampermonkey.net/
// @author       HMXD
// @version      1.0
// @description  Adds strafe toggle panel (Ctrl+J) to the client
// @match        https://starblast.io/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function initStrafePanel() {
        if (!window.module || !window.module.exports || !window.module.exports.settings) {
            setTimeout(initStrafePanel, 200);
            return;
        }

        // ----- Strafe toggle function -----
        function toggleStrafe() {
            try {
                const entry = Object.values(window.module.exports.settings)
                    .find(e => e && e.mode);
                if (!entry || !entry.mode) return;

                const settingObj = Object.values(entry.mode)
                    .find(m => typeof m.strafe !== "undefined");
                if (!settingObj) return;

                settingObj.strafe = settingObj.strafe === 1 ? 0 : 1;
                const enabled = settingObj.strafe === 1;

                console.log("%c[Strafe]%c " + (enabled ? "ENABLED" : "DISABLED"),
                    "color:#c4bf9f", "color:" + (enabled ? "#00ff00" : "#ff4444"));

                const btn = document.getElementById("strafe-btn");
                if (btn) {
                    btn.textContent = "Strafe: " + (enabled ? "ON" : "OFF");
                    btn.style.background = enabled
                        ? "linear-gradient(90deg, #007a00, #00b000)"
                        : "radial-gradient(ellipse at center,hsla(200,50%,0%,1) 0,hsla(200,100%,80%,.5) 150%)";
                }

            } catch (err) {
                console.error("[Strafe] Error:", err);
            }
        }

        window.toggleStrafe = toggleStrafe;

        // ----- Create panel -----
        const panel = document.createElement("div");
        panel.id = "strafe-client-panel";
        panel.style.position = "fixed";
        panel.style.bottom = "20px";
        panel.style.right = "20px";
        panel.style.width = "160px";
        panel.style.padding = "12px";
        panel.style.background = "rgba(0,0,0,0.8)";
        panel.style.border = "2px solid #00bcd4";
        panel.style.borderRadius = "10px";
        panel.style.zIndex = "9999";
        panel.style.display = "none";
        panel.style.flexDirection = "column";
        panel.style.alignItems = "center";
        panel.style.fontFamily = "Arial, sans-serif";
        panel.style.color = "#fff";

        const title = document.createElement("div");
        title.textContent = "HMXD Strafe";
        title.style.textAlign = "center";
        title.style.fontWeight = "bold";
        title.style.marginBottom = "8px";
        panel.appendChild(title);

        const btn = document.createElement("button");
        btn.id = "strafe-btn";
        btn.textContent = "Strafe: OFF";
        btn.style.width = "100%";
        btn.style.padding = "6px 0";
        btn.style.border = "none";
        btn.style.borderRadius = "6px";
        btn.style.cursor = "pointer";
        btn.style.fontWeight = "bold";
        btn.style.background =
            "radial-gradient(ellipse at center,hsla(200,50%,0%,1) 0,hsla(200,100%,80%,.5) 150%)";
        btn.style.color = "#fff";
        btn.onclick = toggleStrafe;
        panel.appendChild(btn);

        document.body.appendChild(panel);

        // ----- Ctrl+J toggle -----
        document.addEventListener("keydown", function(e) {
            if (e.ctrlKey && e.key.toLowerCase() === "j") {
                e.preventDefault();
                panel.style.display = panel.style.display === "none" ? "flex" : "none";
            }
        });
    }

    // Start
    initStrafePanel();

})();