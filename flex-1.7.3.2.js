// ==UserScript==
// @name         Flex
// @version      1.7.3.2
// @description  Client
// @author       jti
// @match        https://starblast.io/
// @run-at       document-start
// @grant        none
// ==/UserScript==

const M = (() => {
    const nig = "[FLEX]";
    const ctil = "color: #8a2be2; font-weight: bold;";
    return (ger) => console.log(`%c${nig} ${ger}`, ctil);
})();

console.clear();
document.open();
document.write(`<!DOCTYPE html><body style="background:#000;margin:0;height:100%;width:100%;position:fixed;top:0;left:0;display:flex;align-items:center;justify-content:center;font-size:100px;font-weight:bold;color:#8a2be2;">LOADING</body>`);
document.close();
(function(){
    const a=alert;
    const e=console.error;
    console.error=function(){
        e.apply(console,arguments);
        const m=Array.from(arguments).map(x=>x instanceof Error?x.stack:x).join(' ');
        a('[ERROR] '+m.substring(0,300));
    };
    window.onerror=function(m,s,l,c,err){
        a('[UNCAUGHT] '+m+'\n'+s+':'+l);
        return false;
    };
    window.onunhandledrejection=function(e){
        a('[PROMISE] '+(e.reason?.stack||e.reason));
    };
    setTimeout(()=>M('ERROR CATCHER ON'),500);
})();
function seks() {
    const url = "https://starblast.io";
    M("loading...");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let Q = xhr.responseText;
            const alloymap = Q.match(/buildAlloyMaterial.*?map:(\w+)/)?.[1];
            const alloyemmap = Q.match(/buildAlloyMaterial.*?emissiveMap:(\w+)/)?.[1];
            const alloyem = Q.match(/buildAlloyMaterial.*?emissive:(\w+)/)?.[1];
            const carbmap = Q.match(/buildCarbonMaterial.*?map:(\w+)/)?.[1];
            const carbemmap = Q.match(/buildCarbonMaterial.*?emissiveMap:(\w+)/)?.[1];
            const carbem = Q.match(/buildCarbonMaterial.*?emissive:(\w+)/)?.[1];
            const stm1 = Q.match(/this\.(\w+)=new Stars\(/)?.[1];
            const stm2 = Q.match(/this\.random\.(\w+)\(4500,2\)/)?.[1];
            const gamee = Q.match(/null!=t\.([iI10OlL]{3,6})\.mode/)[1];
            const shippy = Q.match(/t\.ship\.([iI10OlL]{3,6})\.strafe_left/)[1];
            const meth0d = Q.match(/t\.ship\.([iI10OlL]{3,6})\(\)/)[1];
            const shfrm = Q.match(/o=2\.5\*(\w+)\.types_by_code/)?.[1];
            const respm = Q.match(/this\.([iI10OlL]{3,6})\.(?:killers|names)/)[1];
            Q = Q.replace(`t.prototype.buildAlloyMaterial=function(){return this.material=new THREE.MeshPhongMaterial({map:${alloymap},bumpMap:${alloymap},specularMap:${alloymap},specular:8413264,shininess:30,bumpScale:.1,color:10531008,emissive:${alloyem}.hsvToRgbHex(this.hue,.5,1),emissiveMap:${alloyemmap}})},`,`t.prototype.buildAlloyMaterial=function(){return this.material=new THREE.MeshPhongMaterial({map:${alloymap},bumpMap:${alloymap},specularMap:${alloymap},specular:8413264,shininess:30,bumpScale:.1,color:10531008,emissive:${alloyem}.hsvToRgbHex(this.hue,.5,1),emissiveMap:${alloyemmap}})},t.prototype.buildGemMaterial=function(){return this.material=new THREE.MeshPhongMaterial({map:${alloymap},bumpMap:${alloymap},specularMap:${alloymap},specular:12779471,shininess:70,bumpScale:.1,color:196685,transparent:true,opacity:0.6,side:THREE.DoubleSide,emissive:${alloyem}.hsvToRgbHex(this.hue,.5,1),emissiveMap:${alloyemmap}})},t.prototype.buildBloodMaterial=function(){return this.material=new THREE.MeshPhongMaterial({map:${carbmap},bumpMap:${carbmap},specularMap:${carbmap},specular:0,shininess:10,bumpScale:.1,color:16711680,emissive:0,emissiveMap:${carbemmap}})},t.prototype.buildToxicMaterial=function(){return this.material=new THREE.MeshPhongMaterial({map:${alloymap},bumpMap:${alloymap},specularMap:${alloymap},specular:16777215,shininess:50,bumpScale:.1,color:4100893,transparent:true,opacity:0.9,side:THREE.DoubleSide,emissive:16777215,emissiveMap:${alloyemmap}})},t.prototype.buildBwMaterial=function(){return this.material=new THREE.MeshPhongMaterial({map:${alloymap},bumpMap:${alloymap},specularMap:${alloymap},specular:0,shininess:5,bumpScale:.1,color:0,emissive:16777215,emissiveMap:${alloyemmap}})},t.prototype.buildFireMaterial=function(){return this.material=new THREE.MeshPhongMaterial({map:${alloymap},bumpMap:${alloymap},specularMap:${alloymap},specular:16776960,shininess:40,bumpScale:.1,color:16711680,emissive:16776960,emissiveMap:${alloyemmap}})},t.prototype.buildSwampMaterial=function(){return this.material=new THREE.MeshPhongMaterial({map:${alloymap},bumpMap:${alloymap},specularMap:${alloymap},specular:16777215,shininess:50,bumpScale:.1,color:42519,transparent:true,opacity:0.2,side:THREE.DoubleSide,emissive:42519,emissiveMap:${alloyemmap}})},t.prototype.buildIceMaterial=function(){var t;return t=${alloyem}.hsvToRgbHex(this.hue,1,1),this.material=new THREE.MeshPhongMaterial({map:${alloymap},bumpMap:${alloymap},specularMap:${alloymap},specular:12632256,shininess:50,bumpScale:.1,color:t,emissive:${alloyem}.hsvToRgbHex(this.hue,.5,1),emissiveMap:${alloyemmap}})},t.prototype.buildTelMaterial=function(){return this.material=new THREE.MeshPhongMaterial({map:${alloymap},bumpMap:${alloymap},specularMap:${alloymap},specular:255,shininess:70,bumpScale:.1,color:255,transparent:true,opacity:0.6,side:THREE.DoubleSide,emissive:255,wireframe:true,emissiveMap:${alloyemmap}})},`);
            Q = Q.replace('case"alloy":this.buildAlloyMaterial();break;','case"alloy":this.buildAlloyMaterial();break;case"gem":this.buildGemMaterial;break;case"blood":this.buildBloodMaterial();break;case"toxic":this.buildToxicMaterial();break;case"bw":this.buildBwMaterial();break;case"fire":this.buildFireMaterial();break;case"swamp":this.buildSwampMaterial();break;case"ice":this.buildIceMaterial();break;case"tel":this.buildTelMaterial();break;');
            Q = Q.replace('s=["zinc","gold","alloy","carbon","titanium"]','s=["zinc","gold","alloy","blood","toxic","bw","fire","swamp","ice","tel","carbon","titanium"]');
            Q = Q.replace('for(u=["zinc","gold","alloy","carbon","titanium"]','for(u=["zinc","gold","alloy","blood","toxic","bw","fire","swamp","ice","tel","carbon","titanium"]');
            Q = Q.replace('finish:{zinc:"Zinc",alloy:"Alloy",gold:"Gold",titanium:"Titanium",carbon:"Carbon"}','finish:{zinc:"Zinc",alloy:"Alloy",gold:"Gold",blood:"Blood",toxic:"Toxic",bw:"Black & White",fire:"Fire",swamp:"Swamp",ice:"Fullcolor",tel:"Tel",titanium:"Titanium",carbon:"Carbon"}');
            Q = Q.replace(/hsla\(200/g, 'hsla(260');
            Q = Q.replace(/hsl\(200/g, 'hsl(260');
            Q = Q.replace(/#00f3ff/g, '#8a2be2');
            Q = Q.replace(/#ff00ff/g, '#9370db');
            Q = Q.replace(/hsl\(200,50%,70%\)/g, 'hsl(260,50%,70%)');
            Q = Q.replace(/hsl\(200,60%,60%\)/g, 'hsl(260,60%,60%)');
            Q = Q.replace(/hsl\(200,90%,70%\)/g, 'hsl(260,90%,70%)');
            Q = Q.replace(/hsla\(20/g, 'hsla(260');
            Q = Q.replace(/hsl\(20/g, 'hsl(260');
            Q = Q.replace('<div id="logo"></div>','<img src="https://raw.githubusercontent.com/sbjstest/filesclient/refs/heads/main/flex-26-02-2026.png" style="width: 40%; height: auto;">');
            Q = Q.replace('<title>STARBLAST.IO</title>','<title>Flex</title>');
            Q = Q.replace(/case"discord":this\.icon="https:\/\/starblast\.io\/ecp\/discord\.png";break;case"twitch":this\.icon="https:\/\/starblast\.io\/ecp\/twitch\.png";break;/g,'case"discord":this.icon="https://starblast.io/ecp/discord.png";break;case"voidrose":this.icon="https://raw.githubusercontent.com/sbjstest/filesclient/refs/heads/main/orig.jpg";break;case"twitch":this.icon="https://starblast.io/ecp/twitch.png";break;');
            Q = Q.replace(/reddit:"Reddit",pirate:"Pirate"/g,'reddit:"Reddit",voidrose:"Void Rose",pirate:"Pirate"');
            Q = Q.replace('case"alloy":s=t.createLinearGradient(0,0,0,i),s.addColorStop(0,"#68A"),s.addColorStop(.5,"#FFF"),s.addColorStop(.5,"#765"),s.addColorStop(1,"#CCC");break;','case"alloy":s=t.createLinearGradient(0,0,i,0),s.addColorStop(0,"#FF0000"),s.addColorStop(.16,"#FF7F00"),s.addColorStop(.33,"#FFFF00"),s.addColorStop(.5,"#00FF00"),s.addColorStop(.66,"#0000FF"),s.addColorStop(.83,"#4B0082"),s.addColorStop(1,"#8F00FF");break;');
            Q = Q.replace('name:"Missile",id:1,size:1,bodies:{main:{section_segments:10,offset:{x:0,y:0,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0],y:[-100,-85,-60,-45,-40,-5,0,25,90,100,90]},width:[0,20,30,30,24,22,26,20,20,20,0],height:[0,20,30,30,24,22,26,20,20,20,0],propeller:!0,texture:[13,63,3,4,10,4,63,4,3,17]}},wings:{main1:{length:[25,25],width:[60,40,30],angle:[45,45],position:[0,0,20],doubleside:!0,offset:{x:0,y:60,z:0},bump:{position:30,size:15},texture:[0]},main2:{length:[25,25],width:[60,40,30],angle:[-45,-45],position:[0,0,20],doubleside:!0,offset:{x:0,y:60,z:0},bump:{position:30,size:15},texture:[0]}}','name:"Missile",id:1,size:0.7,bodies:{main:{section_segments:10,offset:{x:0,y:0,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0],y:[-150,-127.5,-90,-67.5,-60,-7.5,0,37.5,135,150,135]},width:[0,30,45,45,30,30,30,30,30,30,0],height:[0,30,45,45,36,30,30,30,30,30,0],propeller:!1,texture:[62,6]},ball1:{section_segments:12,offset:{x:50,y:120,z:0},position:{x:[0,0,0,0,0,0,0,0],y:[-45,-44,-30,0,30,44,0,0]},width:[10,20,50,60,50,3,0,0],height:[10,20,50,60,50,34,0,0],texture:[6]}},wings:{main1:{length:[0,0],width:[0,0,0],angle:[0,0],position:[0,0,20],doubleside:!0,offset:{x:0,y:60,z:0},bump:{position:30,size:15},texture:[0]},main2:{length:[0,0],width:[0,0,0],angle:[-0,-0],position:[0,0,20],doubleside:!0,offset:{x:0,y:60,z:0},bump:{position:30,size:15},texture:[0]}}');
            Q = Q.replace('.message(t("You killed %s!").replace("%s",S),"#F88")','.message(t("You killed %s!").replace("%s",S),"#8a2be2")');
            Q = Q.replace('"Warning: Shield disabled"),"#8FF','"Warning: Shield disabled"),"#8a2be2');
            Q = Q.replace('.message(l,"#F88"','.message(l,"#8a2be2"');
            Q = Q.replace('("Upgrades unlocked"),"#F88"','("Upgrades unlocked"),"#8a2be2"');
            Q = Q.replace('t("Ship Upgrade"),"#8a2be2")','t("Ship Upgrade"),"#8a2be2")');
            Q = Q.replace('t("Warning: Repulsive gravity field detected"),"#F62")','t("Warning: Repulsive gravity field detected"),"#8a2be2")');
            Q = Q.replace('message(t("New target assigned"),"#F88")','message(t("New target assigned"),"#8a2be2")');
            Q = Q.replace('*2,this.rotation_period=200','*2000,this.rotation_period=20000');
            Q = Q.replace('{text:"Hello",icon:"E",key:"O"},{text:"Bye",icon:"F",key:"B"},','{text:"Hello",icon:"E",key:"O"},{text:"Bye",icon:"F",key:"B"},{text:"skill",icon:"À",key:"J"},{text:"Watesigma",icon:"🗿",key:"D"},{text:"Love",icon:"$",key:"I"},{text:"",icon:"🤓",key:"E"},');
            Q = Q.replace('16711680,opacity:.7,specular:16744576,shininess:30,transparent:!0,side:THREE.DoubleSide,shading:THREE.FlatShading,depthWrite:!1','16711680,specular:16744576,shininess:2,transparent:!1,side:THREE.FrontSide,shading:THREE.FlatShading,depthWrite:!1');
            Q = Q.replace(/IcosahedronGeometry\(\s*1\s*,\s*([^)]*)\s*\)/,'IcosahedronGeometry(1,4)');
            Q = Q.replace(/procedurality\.mp3|argon\.mp3|crystals\.mp3/g,'https://raw.githubusercontent.com/sbjstest/filesclient/main/rammstein-du-hast.mp3');
            Q = Q.replace('Audio("https://starblast.data.neuronality.com/music/','Audio("');
            Q = Q.replace(/return t\.alert_sound\.play\([iIlL1!oO]{5}\.settings\.getVolume\("sounds"\)\);/,'return;');
            Q = Q.replace('<script>(function','<script>window.aaa=function() { return };</script><script>(function');
            Q = Q.replace(/\+\=0\.02\*\([^;]+\);/g, '=0;');
            Q = Q.replace(/\*\=0\.7;/g, '=0;');
            Q = Q.replace(/1\+Math\.floor\(5\*Math\.pow/g,'50+Math.floor(5*Math.pow');
            Q = Q.replaceAll(`o=2.5*${shfrm}.types_by_code`, `o=6*${shfrm}.types_by_code`);
            Q = Q.replace('&this.lvl<6','&this.lvl<8');
            Q = Q.replace('e.prototype.shipCanUpgrade=function(){', 'e.prototype.shipCanUpgrade=function(){return !0;');
            let customIcons = [];
            try {
                const savedIcons = localStorage.getItem('customicons');
                if (savedIcons) {
                    const parsedIcons = JSON.parse(savedIcons);
                    if (Array.isArray(parsedIcons)) {
                        customIcons = parsedIcons;
                    }
                }
            } catch (e) {
                console.error('Error loading custom icons:', e);
            }

            if (customIcons.length > 0) {
                let customCases = '';
                let customBadges = '';
                customIcons.forEach((icon, index) => {
                    if (icon.displayName && icon.url) {
                        const iconId = `badge${index + 1}`;
                        customCases += `case"${iconId}":this.icon="${icon.url}";break;`;
                        customBadges += `${iconId}:"${icon.displayName}",`;
                    }
                });
                if (customCases) {
                    Q = Q.replace(/case"discord":this\.icon="https:\/\/starblast\.io\/ecp\/discord\.png";break;case"voidrose":this\.icon="https:\/\/raw\.githubusercontent\.com\/sbjstest\/filesclient\/refs\/heads\/main\/orig\.jpg";break;case"twitch":this\.icon="https:\/\/starblast\.io\/ecp\/twitch\.png";break;/g,`case"discord":this.icon="https://starblast.io/ecp/discord.png";break;case"voidrose":this.icon="https://raw.githubusercontent.com/sbjstest/filesclient/refs/heads/main/orig.jpg";break;${customCases}case"twitch":this.icon="https://starblast.io/ecp/twitch.png";break;`);
                }
                if (customBadges) {
                    Q = Q.replace(/reddit:"Reddit",voidrose:"Void Rose",pirate:"Pirate"/g,`reddit:"Reddit",voidrose:"Void Rose",${customBadges}pirate:"Pirate"`);
                }
                M(`${customIcons.length} badges added`);
            }

            Q = Q.replace(/this\.icon\.startsWith\("https:\/\/starblast\.io\/"\)\|\|this\.icon\.startsWith\("https:\/\/starblast\.data\.neuronality\.com\/"\)/g,'this.icon.startsWith("https://starblast.io/")||this.icon.startsWith("https://starblast.data.neuronality.com/")||this.icon.startsWith("https://")');
            M("fixed done");

            Q = Q.replace(/<div class="social">\s*<div id="cgbottom"><\/div><br>\s*<i class="sbg sbg-info"><\/i>\s*<i class="sbg sbg-gears"><\/i>\s*<i class="sbg sbg-facebook"><span class="sbg sbg-diamond"><\/span><\/i>\s*<i class="sbg sbg-twitter"><span class="sbg sbg-diamond"><\/span><\/i>\s*<\/div>/g,
                `<div class="social">
                    <div id="cgbottom"></div><br>
                    <i class="sbg sbg-gears"></i>
                    <i id="cp-btn" class="sbg sbg-sigma" title="Control Panel"></i>
                </div>`);

            Q = Q.replace(/<\/style>/g,
                `.sbg-sigma:before {
                	content: "\u0057"
                }
                .cp-modal {
                    display: none;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.85);
                    z-index: 10000;
                    align-items: center;
                    justify-content: center;
                }

                .cp-modal-content {
                    width: 600px;
                    max-height: 85vh;
                    background: linear-gradient(135deg, hsla(260,30%,10%,1) 0, hsla(260,30%,30%,1) 150%);
                    box-shadow: 0 0 6px hsla(260,100%,80%,1);
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                    color: hsla(260,80%,100%,.8);
                    text-shadow: 0 0 6px hsla(260,100%,60%,.75);
                }

                .cp-modal-header {
                    margin: 5px 0;
                    padding: 5px 40px;
                    font-size: 2em;
                    background: hsla(260,70%,70%,.1);
                    border-bottom: 5px solid hsla(260,50%,70%,.5);
                }

                .cp-modal-title {
                    display: inline-block;
                }

                .cp-modal-close {
                    cursor: pointer;
                    width: 40px;
                    text-align: center;
                    float: right;
                    background: none;
                    border: none;
                    color: inherit;
                    font-size: inherit;
                }

                .cp-modal-close:hover {
                    color: #FFF;
                    background: rgba(240,250,255,.1);
                }

                .cp-modal-body {
                    overflow: auto;
                    padding: 20px 40px;
                    font-size: 1.5em;
                    flex: 1;
                }

                .cp-modal-footer {
                    padding: 15px 40px;
                    background: rgba(0,0,0,.3);
                    border-top: 1px solid hsla(260,60%,60%,.2);
                    display: flex;
                    gap: 20px;
                    justify-content: center;
                }

                .cp-modal-btn {
                    padding: 8px 25px;
                    font-size: 1em;
                    cursor: pointer;
                    text-align: center;
                    background: radial-gradient(ellipse at center, hsla(260,50%,0%,1) 0, hsla(260,100%,70%,.5) 150%);
                    box-shadow: 0 0 6px hsla(260,100%,80%,1);
                    text-shadow: 0 0 7px hsla(260,100%,80%,1);
                    color: hsla(260,100%,90%,.8);
                    font-family: Play, Verdana;
                    border: 0;
                    min-width: 120px;
                }

                .cp-modal-btn:hover {
                    background: radial-gradient(ellipse at center, hsla(260,50%,0%,1) 0, hsla(260,100%,70%,.5) 100%);
                    box-shadow: 0 0 8px hsla(260,100%,90%,1);
                    color: #FFF;
                }

                .cp-apply {
                    background: radial-gradient(ellipse at center, hsla(120,50%,0%,1) 0, hsla(120,100%,70%,.5) 150%);
                    box-shadow: 0 0 6px hsla(120,100%,80%,1);
                    color: hsla(120,100%,90%,.8);
                }

                .cp-apply:hover {
                    background: radial-gradient(ellipse at center, hsla(120,50%,0%,1) 0, hsla(120,100%,70%,.5) 100%);
                    box-shadow: 0 0 8px hsla(120,100%,90%,1);
                }

                .cp-setting {
                    height: 50px;
                    line-height: 50px;
                    padding: 0 20px;
                    border-bottom: 1px solid hsla(260,50%,55%);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .cp-setting:last-child {
                    border-bottom: 0;
                }

                .cp-label {
                    float: left;
                }

                .cp-value {
                    float: right;
                }

                .cp-switch {
                    position: relative;
                    display: inline-block;
                    width: 60px;
                    height: 34px;
                }

                .cp-switch input {
                    display: none;
                }

                .cp-slider {
                    position: absolute;
                    cursor: pointer;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: #ccc;
                    transition: .4s;
                }

                .cp-slider:before {
                    position: absolute;
                    content: "";
                    height: 26px;
                    width: 26px;
                    left: 4px;
                    bottom: 4px;
                    background-color: white;
                    transition: .4s;
                }

                input:checked + .cp-slider {
                    background-color: hsl(260,50%,10%);
                }

                input:focus + .cp-slider {
                    box-shadow: 0 0 1px hsl(260,60%,30%);
                }

                input:checked + .cp-slider:before {
                    transform: translateX(26px);
                }

                .cp-color-pickers {
                    display: flex;
                    gap: 15px;
                    align-items: center;
                }

                .cp-color-input {
                    width: 40px;
                    height: 40px;
                    border: 2px solid hsla(260,50%,70%,.5);
                    border-radius: 4px;
                    background: hsl(260,60%,15%);
                    cursor: pointer;
                    padding: 2px;
                }

                .cp-color-input:hover {
                    border-color: hsla(260,50%,70%,1);
                    box-shadow: 0 0 5px hsla(260,100%,80%,1);
                }

                .cp-color-input:disabled {
                    opacity: 0.3;
                    cursor: not-allowed;
                }

                .cp-small-btn {
                    padding: 5px 15px;
                    background: linear-gradient(-45deg, hsla(260,30%,30%,.5) 0, hsla(260,50%,50%,.75) 100%);
                    border: 0;
                    border-radius: 4px;
                    color: rgba(255,255,255,.8);
                    cursor: pointer;
                    font-size: 0.9em;
                }

                .cp-small-btn:hover {
                    background: linear-gradient(-45deg, hsla(260,50%,50%,.75) 0, hsla(260,70%,70%,1) 100%);
                    color: rgba(255,255,255,1);
                }

                .cp-badges-section {
                    margin: 20px 0;
                    max-height: 200px;
                    overflow-y: auto;
                    background: rgba(0,0,0,.2);
                    border-radius: 4px;
                    padding: 10px;
                }

                .cp-badge-item {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 8px 12px;
                    border-bottom: 1px solid hsla(260,50%,55%,.3);
                    font-size: 0.9em;
                }

                .cp-badge-item:last-child {
                    border-bottom: none;
                }

                .cp-badge-name {
                    color: hsla(260,50%,80%,1);
                }

                .cp-badge-id {
                    color: hsla(260,30%,60%,1);
                    font-size: 0.8em;
                    margin-right: 10px;
                }

                .cp-badge-remove {
                    padding: 3px 8px;
                    background: hsla(0,50%,40%,.5);
                    border: 1px solid hsla(0,50%,50%,.5);
                    border-radius: 3px;
                    color: white;
                    cursor: pointer;
                    font-size: 0.8em;
                }

                .cp-badge-remove:hover {
                    background: hsla(0,50%,50%,.7);
                }

                .cp-modal-body::-webkit-scrollbar-track {
                    box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
                    border-radius: 0;
                    background-color: transparent;
                }

                .cp-modal-body::-webkit-scrollbar {
                    width: 10px;
                }

                .cp-modal-body::-webkit-scrollbar-thumb {
                    border-radius: 0;
                    box-shadow: inset 0 0 6px rgba(0,0,0,.5);
                    background-color: hsla(260,50%,70%,.5);
                }
                </style>`);

            if (localStorage.getItem('squaresun') === 'yes') {
                Q = Q.replace(/float lg = length\(d\);/g, 'float lg = max(abs(d.x), abs(d.y));');
                M("square sun done");
            } else {
                M("square sun disabled");
            }

            if (localStorage.getItem('pdmcustomships') === 'yes') {
                Q = Q.replace(/this\.anonymous_ships\s*=\s*!0/g,"this.anonymous_ships=!1");
                M("PDM custom ships done");
            } else {
                M("PDM custom ships disabled");
            }

            if (localStorage.getItem('sunColor') === null) {
                localStorage.setItem('sunColor', JSON.stringify({r: 5, g: 0, b: 0}));
            }

            window.csarray = window.csarray || {};
            window.csarray.sunColor = function() {
                try {
                    return JSON.parse(localStorage.getItem('sunColor'));
                } catch (_) {
                    const fallback = {r: 5, g: 0, b: 0};
                    localStorage.setItem('sunColor', JSON.stringify(fallback));
                    return fallback;
                }
            };

            if (localStorage.getItem('customsunColor') === 'yes') {
                const color = window.csarray.sunColor();
                Q = Q.replace("i=1.5*(40+60*this.random.next()),", "i=300,");
                Q = Q.replace(
                    "this.r=4*this.random.next()+1,this.g=4*this.random.next()+1,this.b=4*this.random.next()+1",
                    `this.r=${color.r},this.g=${color.g},this.b=${color.b}`
                );
                M("sun color done");
            } else {
                M("sun color disabled");
            }

            if (localStorage.getItem('killmessage') === 'yes') {
                window.killmsg = function () {
                    Object.values(Object.values(window.module.exports.settings).find(e => e.mode)).find(e => e.socket).socket.send(JSON.stringify({name: "say",data: "GQ"}))
                };
                try {
                    let r = Q.match(/\(this\.[iI10OlL]{3,6}\.[iI10OlL]{3,6}\.status\.kills\+\+,/)[0].match(/[iI10OlL]{4,6}/g);
                    if (r && r.length >= 2) {
                        Q = Q.replace("(this." + r[0] + "." + r[1] + ".status.kills++,", "(this." + r[0] + "." + r[1] + ".status.kills++, window.killmsg(),");
                        M("kill message done");
                    } else {
                        M("kill message error");
                    }
                } catch (e) {
                    M("kill message error");
                }
            } else {
                M("kill message disabled");
            }
            if (localStorage.getItem('starsdisable') === 'yes') {
                Q = Q.replace(
                    `this.${stm1}=new Stars(500+this.random.${stm2}(4500,2)`,
                    `this.${stm1}=new Stars(0+this.random.${stm2}(0,0)`
                );
                M("stars disabled done");
            } else {
                M("stars disable disabled");
            }
            if (localStorage.getItem('forceecp') === 'yes') {
                Q = Q.replace(/ecp_key:.*?,/g, "ecp_key:null,");
                Q = Q.replace(/steamid:.*?,/g, 'steamid:"76561198442153311",');
                Q = Q.replace("return 0===t.timeout?(window.onbeforeunload=null,t.reloadGame()):t.countdown()", "return 0===1?(window.onbeforeunload=null,t.reloadGame()):t.countdown()");
                localStorage.ECPVerified = "yes";
                localStorage.ECPKey = "client key";
                M("force ecp done");
            } else {
                M("force ecp disabled");
            }

            if (localStorage.getItem('lowercasename') === 'yes') {
                Q = Q.replace(/\.toUpperCase\(\)/g, '');
                Q = Q.replace(/text-transform:\s*uppercase;/gim, '');
                M("lowercase done");
            } else {
                M("lowercase disabled");
            }

            if (localStorage.getItem('highhue') === 'yes') {
                Q = Q.replace(/this\.hue,\.5,1/g, 'this.hue,1,1');
                M("hue done");
            } else {
                M("hue disabled");
            }

            if (localStorage.getItem('radarzoom') === 'yes') {
                Q = Q.replace(/this\.radar_zoom=([+-]?(?=\.\d|\d)(?:\d+)?(?:\.?\d*))(?:[eE]([+-]?\d+))?/g, 'this.radar_zoom=1');
                M("radar done");
            } else {
                M("radar disabled");
            }

              if (localStorage.getItem('fastrespawn') === 'yes') {
                Q = Q.replace(/respawn_delay = ([+-]?(?=\.\d|\d)(?:\d+)?(?:\.?\d*))(?:[eE]([+-]?\d+))?/g, 'respawn_delay = 1');
                Q = Q.replace(/<span id = "menucountdown"><\/span>\s*\(<span id = "menucountdown"><\/span>\)\s*/, '');
            }

            if (localStorage.getItem('bypassteamlock') === 'yes') {
                Q = Q.replace(/this\.displayed=!0,this\.enabled=this\.start&&this\.team\.open,this\.force_ratio/g,'this.displayed=!0,this.enabled=this.start,this.force_ratio');
                Q = Q.replace(/if\(this\.enabled=this\.start&&this\.team\.open,this\.background=/g,'if(this.enabled=this.start,this.background=');
                M("bypass team lock done");
            } else {
                M("bypass team lock disabled");
            }

            if (localStorage.getItem('fpsunlock') === 'yes') {
Q = Q.replace(/requestAnimationFrame\(function\((.*?)\){return function\(\){return t\.([iI10OlL]{3,6})\(\)}}\(this\)\),this\.([iI10OlL]{3,6})\.paused\)/, "setTimeout(function($1){return function(){return $1.$2()}}(this), 0),this.$3.paused)");
                M("fps done");
            } else {
                M("fps disabled");
            }

if (localStorage.getItem('explosionsdisable') === 'yes') {
                            Q = Q.replace(/t\.prototype\.blast\s*=\s*function\([^)]*\)\s*{/,'t.prototype.blast=function(t,e,i,s){return;');
            Q = Q.replace('t.prototype.explode=function(t,e,i,s,l){','t.prototype.explode=function(t,e,i,s,l){return;');
                M("explosions done");
            } else {
                M("explosions enabled");
            }
            
            if (localStorage.getItem('radaricons') === 'yes') {
                Q = Q.replace('=["","","","","","","",','=["","","","","","","",');
                M("radar icons done");
            } else {
                M("radar icons disabled");
            }
            
            if (localStorage.getItem('crosshair') === 'yes') {
                Q = Q.replace('fillStyle="#EEE",e.textAlign="center",e.textBaseline="middle",e.fillText("",0,0),','fillStyle="#ff0000",e.textAlign="center",e.textBaseline="middle",e.fillText("\uf10c",0,0),');
                M("crosshair done");
            } else {
                M("crosshair disabled");
            }
            
            document.open();
            document.write(Q);
            document.close();
            M("Client loaded");

            setTimeout(() => {
                addControlPanel();
                M("control panel added");

                const cpBtn = document.getElementById('cp-btn');
                if (cpBtn) {
                    cpBtn.addEventListener('click', function() {
                        const modal = document.getElementById('cp-modal');
                        if (modal) {
                            modal.style.display = 'flex';
                            updateCPSettings();
                        }
                    });
                }
            }, 1000);

            if (localStorage.getItem('snagindicator') === 'yes') {
                setTimeout(() => {
                    let s = setInterval(function () {
                        let e = Object.values(window.module.exports.settings).find(e => e.mode);
                        ((e || {}).mode || {}).game_info && (ModdingMode.prototype.setUIComponent.call(e.mode, {
                            id: "radar_background",
                            components: [{
                                type: "box",
                                position: [0, 0, 100, 100],
                                stroke: "#FF0000",
                                width: 3
                            }]
                        }), clearInterval(s))
                    }, 500);
                    M("snagind done");
                }, 3000);
            } else {
                M("snagind disabled");
            }

            if (localStorage.getItem('survivaltimer') === 'yes') {
                setTimeout(() => {
                    let gameState = window;
                    let timerInterval = setInterval(() => {
                        const settings = Object.values(window.module.exports.settings).find(e => e && e.mode);
                        if (settings?.mode?.id === "survival") {
                            if (gameState.serverMin == null) {
                                gameState.serverMin = settings.mode.game_info.servertime / 60000;
                                gameState.serverJoinStamp = Date.now();
                            }
                            let timerElement = document.getElementById("survival-timer");
                            if (!timerElement) {
                                timerElement = document.createElement("div");
                                timerElement.id = "survival-timer";
                                timerElement.style.cssText = `
                                    position: absolute;
right: 50px;
top: 47%;
transform: translateY(-50%);
color: #8a2be2;
font-size: 13px;
font-family: Arial, sans-serif;
pointer-events: none;
z-index: 1000;
padding: 0;
margin: 0;
background: none;
border: none;
                                `;
                                document.body.appendChild(timerElement);
                            }
                            const elapsedMinutes = (Date.now() - gameState.serverJoinStamp) / 60000;
                            const timeLeft = 30 - gameState.serverMin - elapsedMinutes;
                            if (timeLeft <= 0) {
                                timerElement.innerHTML = "SURVIVAL STARTED";
                                timerElement.style.color = "#9370db";
                                clearInterval(timerInterval);
                            } else {
                                const minutesLeft = Math.floor(timeLeft);
                                const secondsLeft = Math.floor((timeLeft - minutesLeft) * 60);
                                const formattedSeconds = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft.toString();
                                timerElement.innerHTML = "Survival in: " + minutesLeft + ":" + formattedSeconds;
                            }
                        }
                    }, 1000);
                    M("surv timer done");
                }, 3000);
            } else {
                M("surv timer disabled");
            }

            if (localStorage.getItem('fov') === 'yes') {
                setTimeout(() => {
                    function fovv() {
                        let intervalId, scrollOffsets = [];
                        document.body.addEventListener("wheel", function(event) {
                            event.preventDefault();
                            if (Object.values(window.module.exports.settings).find(e => e && e.mode).mode.id === "welcome") return;
                            let scrollDirection;
                            if (event.deltaY < 1) {
                                scrollDirection = -5;
                            } else if (event.deltaY > 1) {
                                scrollDirection = 5;
                            }
                            scrollOffsets.push(scrollDirection);
                            smoothScroll();
                        });
                        function smoothScroll() {
                            if (scrollOffsets.length === 0 || intervalId) return;
                            let t = Object.values(Object.values(Object.values(window.module.exports.settings).find(e => e && e.mode)).find(e => e && e.seed)).find(e => e && e.fov);
                            let currentPosition = t.position.z;
                            let newPosition = currentPosition + scrollOffsets.shift();
                            let step = (newPosition - currentPosition) / 12;
                            intervalId = setInterval(() => {
                                if (Math.abs(currentPosition - newPosition) <= 1 || currentPosition === newPosition) {
                                    t.translateZ(newPosition - currentPosition);
                                    clearInterval(intervalId);
                                    intervalId = null;
                                    smoothScroll();
                                } else {
                                    currentPosition += step;
                                    t.translateZ(step);
                                }
                            }, 1);
                        }
                    }
                    fovv();
                    M("fov done");
                }, 5000);
 } else {
                M("fov disabled");
            }

if (localStorage.getItem('strafe') === 'yes') {
    setTimeout(() => {
        function streif() {
            if (Object.values(window.module.exports.settings).find(e => e && e.mode).mode.id === "welcome") return;
            const eo = Object.values(window.module.exports.settings).find(e => e?.mode);
            if (eo?.mode) {
                const so = Object.values(eo.mode).find(m => typeof m?.strafe !== 'undefined');
                if (so) so.strafe = so.strafe === 1 ? 0 : 1;
            }
        }

        document.addEventListener('keydown', (e) => {
            if (e.altKey && e.key.toLowerCase() === 'i') {
                e.preventDefault();
                streif();
            }
        });

        M("strafe done");
    }, 5000);
} else {
    M("strafe disabled");
}            if (localStorage.getItem('emotes') === null) {
                localStorage.setItem('emotes', '4');
            }
            

            let emotesInterval = setInterval(() => {
                if (window.ChatPanel != null) {
                    clearInterval(emotesInterval);
                    ChatPanel.prototype.typed = new Function("return " +
                        ChatPanel.prototype.typed.toString().replace(
                            ">=4",
                            ">=csarray.emotes()"
                        )
                    )();
                    M("emotes done");
                }
            }, 100);

            window.csarray = window.csarray || {};
            window.csarray.emotes = function () {
                try {
                    return parseInt(localStorage.getItem('emotes')) || 4;
                } catch (_) {
                    const fallback = 4;
                    localStorage.setItem('emotes', fallback.toString());
                    return fallback;
                }
            };

            if (localStorage.getItem('gem1') === null) localStorage.setItem('gem1', '"#8a2be2"');
            if (localStorage.getItem('gem2') === null) localStorage.setItem('gem2', '"#9370db"');

            window.csarray.gem1 = function () {
                try {
                    return JSON.parse(localStorage.getItem('gem1'));
                } catch (_) {
                    const fallback = '#8a2be2';
                    localStorage.setItem('gem1', JSON.stringify(fallback));
                    return fallback;
                }
            };

            window.csarray.gem2 = function () {
                try {
                    const data = localStorage.getItem('gem2');
                    return JSON.parse(data);
                } catch (_) {
                    const fallback = '#9370db';
                    localStorage.setItem('gem2', JSON.stringify(fallback));
                    return fallback;
                }
            };

            let gemcolorInterval = setInterval(() => {
                let gemobj;
                for (let i in window) {
                    try {
                        let val = window[i];
                        if ('function' == typeof val.prototype.createModel && val.prototype.createModel.toString().includes('Crystal')) {
                            gemobj = val;
                            clearInterval(gemcolorInterval);
                            break;
                        }
                    } catch (e) {}
                }
                if (gemobj != null) {
                    let oldModel = gemobj.prototype.getModelInstance;
                    gemobj.prototype.getModelInstance = function () {
                        let res = oldModel.apply(this, arguments);
                        let color = csarray.gem1();
                        let specular = csarray.gem2();
                        this.material.color.set(color);
                        this.material.specular.set(specular);
                        return res;
                    };
                    M("gem colors done");
                }
            }, 100);

        } else if (xhr.readyState === 4) {
            M(`error ${xhr.status}`);
        }
    };
    xhr.send();
}

function addControlPanel() {
    if (document.getElementById('cp-modal')) return;

    const modal = document.createElement('div');
    modal.id = 'cp-modal';
    modal.className = 'cp-modal';
    modal.style.display = 'none';

    modal.innerHTML = `
        <div class="cp-modal-content">
            <div class="cp-modal-header">
                <span class="cp-modal-title">CONTROL PANEL</span>
                <span class="cp-modal-close">&times;</span>
            </div>
            <div class="cp-modal-body" id="cp-settings"></div>
            <div class="cp-modal-footer">
                <button class="cp-modal-btn" id="cp-toggle-all">TOGGLE ALL</button>
                <button class="cp-modal-btn cp-apply" id="cp-apply">APPLY</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    modal.querySelector('.cp-modal-close').addEventListener('click', function() {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    document.getElementById('cp-toggle-all').addEventListener('click', function() {
        const mods = [
            'killmessage',
            'forceecp',
            'radarzoom',
            'fastrespawn',
            'bypassteamlock',
            'lowercasename',
            'highhue',
            'fov',
            'snagindicator',
            'fpsunlock',
            'survivaltimer',
            'squaresun',
            'pdmcustomships',
            'customsunColor',
            'starsdisable',
            'explosionsdisable',
            'strafe',
            'radaricons',
            'crosshair'
        ];

        const allEnabled = mods.every(mod => localStorage.getItem(mod) === 'yes');
        const newState = !allEnabled ? 'yes' : 'no';

        mods.forEach(mod => {
            localStorage.setItem(mod, newState);
        });

        localStorage.setItem('emotes', '4');
        localStorage.setItem('gem1', '"#8a2be2"');
        localStorage.setItem('gem2', '"#9370db"');

        M(`all mods ${newState === 'yes' ? 'ENABLED' : 'DISABLED'}`);
        updateCPSettings();
    });

    document.getElementById('cp-apply').addEventListener('click', function() {
        location.reload();
    });

    updateCPSettings();
}

function rgbToHex(r, g, b) {
    r = Math.min(255, Math.max(0, Math.round(r * 51)));
    g = Math.min(255, Math.max(0, Math.round(g * 51)));
    b = Math.min(255, Math.max(0, Math.round(b * 51)));
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
        return {
            r: Math.min(5, Math.max(0, Math.round(parseInt(result[1], 16) / 51))),
            g: Math.min(5, Math.max(0, Math.round(parseInt(result[2], 16) / 51))),
            b: Math.min(5, Math.max(0, Math.round(parseInt(result[3], 16) / 51)))
        };
    }
    return {r: 5, g: 0, b: 0};
}

function updateCPSettings() {
    const container = document.getElementById('cp-settings');
    if (!container) return;

    const settings = [
        {id: 'killmessage', name: 'kill message'},
        {id: 'forceecp', name: 'force ECP'},
        {id: 'fastrespawn', name: 'fast respawn'},
        {id: 'bypassteamlock', name: 'bypass team lock'},
        {id: 'lowercasename', name: 'lowercase name'},
        {id: 'highhue', name: 'high hue'},
        {id: 'fov', name: 'FOV zoom'},
        {id: 'snagindicator', name: 'snag indicator'},
        {id: 'fpsunlock', name: 'FPS unlock'},
        {id: 'survivaltimer', name: 'survival timer'},
        {id: 'radarzoom', name: 'radar zoom'},
        {id: 'squaresun', name: 'square sun'},
        {id: 'pdmcustomships', name: 'PDM custom ships'},
        {id: 'starsdisable', name: 'disable stars'},
        {id: 'explosionsdisable', name: 'disable explosions'},
        {id: 'strafe', name: 'strafe'},
        {id: 'radaricons', name: 'custom radar icons'},
        {id: 'crosshair', name: 'custom crosshair'}
    ];

    let html = '';

    settings.forEach(setting => {
        const value = localStorage.getItem(setting.id) === 'yes';
        html += `
            <div class="cp-setting">
                <div class="cp-label">${setting.name}</div>
                <label class="cp-switch">
                    <input type="checkbox" id="cp-toggle-${setting.id}" ${value ? 'checked' : ''}>
                    <span class="cp-slider"></span>
                </label>
            </div>
        `;
    });

    const emotesValue = localStorage.getItem('emotes') || '4';
    html += `
        <div class="cp-setting">
            <div class="cp-label">Emote Capacity: ${emotesValue}</div>
            <button class="cp-small-btn" id="cp-emotes-btn">SET</button>
        </div>
    `;

    const color1 = window.csarray.gem1 ? window.csarray.gem1() : '#8a2be2';
    const color2 = window.csarray.gem2 ? window.csarray.gem2() : '#9370db';

    html += `
        <div class="cp-setting">
            <div class="cp-label">Crystal Colors</div>
            <div class="cp-color-pickers">
                <input type="color" class="cp-color-input" id="cp-color1" value="${color1}" title="Primary color">
                <input type="color" class="cp-color-input" id="cp-color2" value="${color2}" title="Secondary color">
            </div>
        </div>
    `;

    const starEnabled = localStorage.getItem('customsunColor') === 'yes';
    const sunColor = window.csarray.sunColor ? window.csarray.sunColor() : {r: 5, g: 0, b: 0};
    const starHex = rgbToHex(sunColor.r, sunColor.g, sunColor.b);

    html += `
        <div class="cp-setting">
            <div class="cp-label">sun color</div>
            <div style="display: flex; align-items: center; gap: 10px;">
                <div class="cp-color-pickers">
                    <input type="color" class="cp-color-input" id="cp-sun-color" value="${starHex}" ${!starEnabled ? 'disabled' : ''}>
                </div>
                <label class="cp-switch" style="transform: scale(0.8);">
                    <input type="checkbox" id="cp-toggle-star" ${starEnabled ? 'checked' : ''}>
                    <span class="cp-slider"></span>
                </label>
            </div>
        </div>
    `;

    let customIcons = [];
    try {
        const savedIcons = localStorage.getItem('customicons');
        if (savedIcons) {
            customIcons = JSON.parse(savedIcons);
        }
    } catch (e) {
        console.error('Error loading custom icons:', e);
    }

    if (customIcons.length > 0) {
        html += `
            <div class="cp-badges-section">
                <div style="color: hsla(260,50%,70%,1); margin-bottom: 10px; font-size: 0.9em;">
                    CUSTOM BADGES (${customIcons.length})
                </div>
        `;

        customIcons.forEach((icon, index) => {
            html += `
                <div class="cp-badge-item">
                    <div>
                        <span class="cp-badge-id">${icon.id}</span>
                        <span class="cp-badge-name">${icon.displayName}</span>
                    </div>
                    <button class="cp-badge-remove" data-index="${index}">REMOVE</button>
                </div>
            `;
        });

        html += `</div>`;
    }

    html += `
        <div class="cp-setting" id="cp-add-badge-row" style="cursor: pointer; background: rgba(157, 78, 221, 0.1);">
            <div class="cp-label">＋ ADD NEW BADGE</div>
            <div></div>
        </div>
    `;

    container.innerHTML = html;

    settings.forEach(setting => {
        const toggle = document.getElementById(`cp-toggle-${setting.id}`);
        if (toggle) {
            toggle.addEventListener('change', function(e) {
                localStorage.setItem(setting.id, e.target.checked ? 'yes' : 'no');
                M(`${setting.name}: ${e.target.checked ? 'ON' : 'OFF'}`);
            });
        }
    });

    const emotesBtn = document.getElementById('cp-emotes-btn');
    if (emotesBtn) {
        emotesBtn.addEventListener('click', function() {
            const current = localStorage.getItem('emotes') || '4';
            const result = prompt('Enter emote capacity (1-5):', current);
            if (result !== null) {
                let value = parseInt(result);
                if (isNaN(value) || value < 1) value = 1;
                if (value > 5) value = 5;
                localStorage.setItem('emotes', value.toString());
                M(`emotes: ${value}`);
                updateCPSettings();
            }
        });
    }

    const color1Input = document.getElementById('cp-color1');
    const color2Input = document.getElementById('cp-color2');

    if (color1Input) {
        color1Input.addEventListener('input', function(e) {
            localStorage.setItem('gem1', JSON.stringify(e.target.value));
            if (window.csarray && window.csarray.gem1) {
                M(`primary color: ${e.target.value}`);
            }
        });
    }

    if (color2Input) {
        color2Input.addEventListener('input', function(e) {
            localStorage.setItem('gem2', JSON.stringify(e.target.value));
            if (window.csarray && window.csarray.gem2) {
                M(`secondary color: ${e.target.value}`);
            }
        });
    }

    const starToggle = document.getElementById('cp-toggle-star');
    const sunColorInput = document.getElementById('cp-sun-color');

    if (starToggle) {
        starToggle.addEventListener('change', function(e) {
            localStorage.setItem('customsunColor', e.target.checked ? 'yes' : 'no');
            if (sunColorInput) {
                sunColorInput.disabled = !e.target.checked;
            }
            M(`sun color: ${e.target.checked ? 'ON' : 'OFF'}`);
        });
    }

    if (sunColorInput) {
        sunColorInput.addEventListener('input', function(e) {
            if (starToggle && !starToggle.checked) return;

            const rgb = hexToRgb(e.target.value);
            localStorage.setItem('sunColor', JSON.stringify(rgb));

            if (window.csarray && window.csarray.sunColor) {
                M(`sun color: rgb(${rgb.r},${rgb.g},${rgb.b})`);
            }
        });
    }

    const removeBtns = document.querySelectorAll('.cp-badge-remove');
    removeBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const index = parseInt(this.getAttribute('data-index'));

            let customIcons = [];
            try {
                const savedIcons = localStorage.getItem('customicons');
                if (savedIcons) {
                    customIcons = JSON.parse(savedIcons);
                }
            } catch (e) {
                console.error('Error loading custom icons:', e);
            }

            if (index >= 0 && index < customIcons.length) {
                const badgeName = customIcons[index].displayName;
                customIcons.splice(index, 1);
                localStorage.setItem('customicons', JSON.stringify(customIcons));
                M(`badge removed: ${badgeName}`);
                updateCPSettings();
            }
        });
    });

    const addBadgeRow = document.getElementById('cp-add-badge-row');
    if (addBadgeRow) {
        addBadgeRow.addEventListener('click', function() {
            const name = prompt('Enter badge name:');
            if (!name || name.trim() === '') return;

            const url = prompt('Enter icon URL (must start with https://):');
            if (!url || url.trim() === '') return;

            if (!url.startsWith('https://')) {
                alert('URL must start with https://');
                return;
            }

            let customIcons = [];
            try {
                const savedIcons = localStorage.getItem('customicons');
                if (savedIcons) {
                    customIcons = JSON.parse(savedIcons);
                }
            } catch (e) {
                console.error('Error loading custom icons:', e);
            }

            const nextId = `badge${customIcons.length + 1}`;
            customIcons.push({
                id: nextId,
                displayName: name,
                url: url
            });

            localStorage.setItem('customicons', JSON.stringify(customIcons));
            M(`custom badge added: ${nextId} -> "${name}"`);
            updateCPSettings();
        });

        addBadgeRow.addEventListener('mouseenter', function() {
            this.style.background = 'rgba(157, 78, 221, 0.2)';
        });

        addBadgeRow.addEventListener('mouseleave', function() {
            this.style.background = 'rgba(157, 78, 221, 0.1)';
        });
    }
}

// чат
(function() {
    const chatConfig = {
        url: 'https://sbchattest.onrender.com',
        name: localStorage.getItem('lastNickname') || 'Player_' + Math.floor(Math.random() * 9000 + 1000)
    };

    let chatSocket = null;
    let chatOpen = false;
    let members = new Map(); // id -> { name, typing }
    let typingTimeout = null;
    let unreadCount = 0;
    let myUserId = null;

    function loadSocketIO() {
        return new Promise((done, fail) => {
            if (window.io) {
                done(window.io);
                return;
            }
            const s = document.createElement('script');
            s.src = 'https://cdn.socket.io/4.5.4/socket.io.min.js';
            s.onload = () => done(window.io);
            s.onerror = fail;
            document.head.appendChild(s);
        });
    }

    function createChatUI() {
        const id = 'chat-' + Math.random().toString(36).substr(2, 9);

        // Кнопка чата с бейджем непрочитанных
        const btn = document.createElement('div');
        btn.id = id + '-btn';
        btn.innerHTML = 'CHAT <span id="unread-badge" style="display:none;background:#ff4444;color:white;border-radius:10px;padding:0 6px;margin-left:4px;font-size:8px;font-weight:bold;">0</span>';
        btn.style.cssText = `
            position: fixed;
            top: 5px;
            left: 240px;
            width: auto;
            min-width: 38px;
            height: 16px;
            background: linear-gradient(135deg, #8a2be2, #9370db);
            color: white;
            font-size: 9px;
            font-weight: bold;
            letter-spacing: 0.5px;
            text-align: center;
            line-height: 16px;
            border-radius: 3px;
            cursor: pointer;
            z-index: 999999;
            box-shadow: 0 2px 8px rgba(138, 43, 226, 0.4);
            border: 1px solid rgba(255,255,255,0.2);
            transition: all 0.2s;
            user-select: none;
            font-family: 'Play', 'Segoe UI', sans-serif;
            padding: 0 4px;
        `;

        btn.onmouseenter = () => {
            btn.style.background = 'linear-gradient(135deg, #9b4deb, #a47fdb)';
            btn.style.boxShadow = '0 4px 12px rgba(138, 43, 226, 0.7)';
        };

        btn.onmouseleave = () => {
            btn.style.background = 'linear-gradient(135deg, #8a2be2, #9370db)';
            btn.style.boxShadow = '0 2px 8px rgba(138, 43, 226, 0.4)';
        };

        btn.onclick = toggleChat;

        const box = document.createElement('div');
        box.id = id + '-box';
        box.style.cssText = `
            position: fixed;
            top: 30px;
            left: 240px;
            width: 350px;
            height: 400px;
            background: linear-gradient(135deg, rgba(20, 10, 30, 0.98), rgba(30, 15, 40, 0.98));
            backdrop-filter: blur(8px);
            border-radius: 12px;
            border: 2px solid #8a2be2;
            box-shadow: 0 10px 40px rgba(138, 43, 226, 0.5);
            display: flex;
            flex-direction: column;
            z-index: 999998;
            font-family: 'Play', 'Segoe UI', sans-serif;
            overflow: hidden;
            transition: opacity 0.3s, transform 0.3s;
            opacity: 0;
            transform: translateY(-20px);
            pointer-events: none;
        `;

        const head = document.createElement('div');
        head.style.cssText = `
            padding: 8px 12px;
            background: linear-gradient(135deg, rgba(138, 43, 226, 0.3), rgba(147, 112, 219, 0.3));
            border-bottom: 2px solid #8a2be2;
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: move;
            user-select: none;
            color: white;
            font-weight: bold;
            letter-spacing: 1px;
        `;

        const title = document.createElement('span');
        title.innerHTML = 'CHAT <span id="chat-members-count" style="font-size:10px;color:#9370db;margin-left:5px;">0</span>';
        title.style.textShadow = '0 0 8px rgba(138, 43, 226, 0.8)';

        const closeBtn = document.createElement('span');
        closeBtn.innerHTML = '✕';
        closeBtn.style.cssText = `
            cursor: pointer;
            font-size: 16px;
            color: rgba(255,255,255,0.7);
            transition: all 0.2s;
            padding: 0 5px;
        `;
        closeBtn.onmouseenter = () => closeBtn.style.color = '#fff';
        closeBtn.onmouseleave = () => closeBtn.style.color = 'rgba(255,255,255,0.7)';
        closeBtn.onclick = toggleChat;

        head.appendChild(title);
        head.appendChild(closeBtn);

        // Основной контент - разделенный на чат и список пользователей
        const mainContent = document.createElement('div');
        mainContent.style.cssText = `
            display: flex;
            flex: 1;
            min-height: 0;
        `;

        // Область сообщений
        const area = document.createElement('div');
        area.id = id + '-msgs';
        area.style.cssText = `
            flex: 3;
            overflow-y: auto;
            padding: 10px;
            display: flex;
            flex-direction: column;
            gap: 5px;
            background: rgba(0,0,0,0.3);
            font-size: 12px;
            border-right: 1px solid #8a2be2;
        `;

        // Список пользователей
        const userList = document.createElement('div');
        userList.id = 'user-list';
        userList.style.cssText = `
            flex: 1;
            overflow-y: auto;
            padding: 8px;
            background: rgba(0,0,0,0.5);
            font-size: 10px;
            color: white;
        `;

        const userListTitle = document.createElement('div');
        userListTitle.style.cssText = `
            font-weight: bold;
            color: #9370db;
            margin-bottom: 8px;
            text-align: center;
            font-size: 9px;
            letter-spacing: 1px;
            border-bottom: 1px solid #8a2be2;
            padding-bottom: 4px;
        `;
        userListTitle.textContent = 'ONLINE';
        userList.appendChild(userListTitle);

        const userListContent = document.createElement('div');
        userListContent.id = 'user-list-content';
        userListContent.style.cssText = `
            display: flex;
            flex-direction: column;
            gap: 4px;
        `;
        userList.appendChild(userListContent);

        mainContent.appendChild(area);
        mainContent.appendChild(userList);

        // Индикатор печатания
        const typingIndicator = document.createElement('div');
        typingIndicator.id = 'typing-indicator';
        typingIndicator.style.cssText = `
            padding: 2px 8px;
            font-size: 9px;
            color: #9370db;
            font-style: italic;
            background: rgba(0,0,0,0.3);
            border-top: 1px solid #8a2be2;
            min-height: 16px;
        `;

        const inpArea = document.createElement('div');
        inpArea.style.cssText = `
            padding: 8px;
            background: rgba(0,0,0,0.5);
            border-top: 1px solid #8a2be2;
            display: flex;
            gap: 5px;
        `;

        const inp = document.createElement('input');
        inp.type = 'text';
        inp.placeholder = 'msg';
        inp.style.cssText = `
            flex: 1;
            padding: 6px;
            background: rgba(0,0,0,0.7);
            border: 1px solid #8a2be2;
            border-radius: 4px;
            color: white;
            font-size: 12px;
            outline: none;
            font-family: 'Play', sans-serif;
        `;
        inp.onfocus = () => inp.style.borderColor = '#9370db';
        inp.onblur = () => inp.style.borderColor = '#8a2be2';

        const send = document.createElement('button');
        send.innerHTML = '➤';
        send.style.cssText = `
            width: 30px;
            background: linear-gradient(135deg, #8a2be2, #9370db);
            border: none;
            border-radius: 4px;
            color: white;
            font-size: 14px;
            cursor: pointer;
            transition: all 0.2s;
        `;
        send.onmouseenter = () => send.style.background = 'linear-gradient(135deg, #9b4deb, #a47fdb)';
        send.onmouseleave = () => send.style.background = 'linear-gradient(135deg, #8a2be2, #9370db)';

        inpArea.appendChild(inp);
        inpArea.appendChild(send);

        box.appendChild(head);
        box.appendChild(mainContent);
        box.appendChild(typingIndicator);
        box.appendChild(inpArea);

        document.body.appendChild(btn);
        document.body.appendChild(box);

        let drag = false;
        let offX, offY;

        head.onmousedown = (e) => {
            if (e.target === closeBtn) return;
            drag = true;
            offX = e.clientX - box.offsetLeft;
            offY = e.clientY - box.offsetTop;
            box.style.transition = 'none';
        };

        document.onmousemove = (e) => {
            if (drag) {
                box.style.left = (e.clientX - offX) + 'px';
                box.style.top = (e.clientY - offY) + 'px';
            }
        };

        document.onmouseup = () => {
            drag = false;
            box.style.transition = '';
        };

        return { box, area, inp, send, btn, id, head, typingIndicator, userListContent };
    }

    function addSystemMessage(ui, text) {
        const el = document.createElement('div');
        el.style.cssText = `
            padding: 2px 8px;
            color: #9370db;
            font-size: 9px;
            font-style: italic;
            text-align: center;
            opacity: 0.7;
            margin: 2px 0;
        `;
        el.textContent = '• ' + text + ' •';
        ui.area.appendChild(el);
        ui.area.scrollTop = ui.area.scrollHeight;
    }

    function addChatMessage(ui, d, isMine = false) {
    if (d.username === 'system') return;

    const msgId = d.id || Date.now();
    const el = document.createElement('div');
    el.setAttribute('data-message-id', msgId);
    el.setAttribute('data-user-id', d.userId);
    el.style.cssText = `
        padding: 4px 8px;
        background: ${isMine ? 'rgba(138, 43, 226, 0.2)' : 'rgba(255,255,255,0.05)'};
        border-radius: 6px;
        border-left: 2px solid ${isMine ? '#ff44aa' : '#9370db'};
        animation: ${ui.id}-in 0.2s;
        word-wrap: break-word;
        position: relative;
        display: flex;
        flex-direction: column;
    `;

    const time = new Date(d.timestamp || Date.now()).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
    });

    const h = document.createElement('div');
    h.style.cssText = `
        display: flex;
        justify-content: space-between;
        margin-bottom: 2px;
        font-size: 9px;
        color: rgba(255,255,255,0.5);
    `;

    const nameSpan = document.createElement('span');
    nameSpan.style.color = isMine ? '#ff88cc' : '#9370db';
    nameSpan.style.fontWeight = 'bold';
    nameSpan.textContent = d.username;

    const timeSpan = document.createElement('span');
    timeSpan.textContent = time;

    h.appendChild(nameSpan);
    h.appendChild(timeSpan);

    const contentRow = document.createElement('div');
    contentRow.style.cssText = `
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 8px;
    `;

    const txt = document.createElement('div');
    txt.style.cssText = `
        color: white;
        font-size: 11px;
        flex: 1;
        word-break: break-word;
    `;
    txt.textContent = d.text;

    contentRow.appendChild(txt);

    if (isMine) {
        const deleteBtn = document.createElement('span');
        deleteBtn.innerHTML = '🗑️';
        deleteBtn.style.cssText = `
            font-size: 14px;
            cursor: pointer;
            opacity: 0.6;
            transition: opacity 0.2s;
            padding: 4px 6px;
            border-radius: 4px;
            user-select: none;
            flex-shrink: 0;
            -webkit-tap-highlight-color: transparent;
        `;
        deleteBtn.onmouseenter = () => deleteBtn.style.opacity = '1';
        deleteBtn.onmouseleave = () => deleteBtn.style.opacity = '0.6';
        
        deleteBtn.onclick = (e) => {
            e.stopPropagation();
            if (confirm('Delete this message?')) {
                deleteMessage(msgId, d.userId);
            }
        };
        
        contentRow.appendChild(deleteBtn);
    }

    el.appendChild(h);
    el.appendChild(contentRow);

    ui.area.appendChild(el);
    ui.area.scrollTop = ui.area.scrollHeight;
}

    function deleteMessage(messageId, userId) {
        if (chatSocket?.connected) {
            chatSocket.emit('delete_message', {
                messageId: messageId,
                userId: userId
            });
        }
    }

    function updateUserList() {
        const container = document.getElementById('user-list-content');
        if (!container) return;

        container.innerHTML = '';
        const sortedMembers = Array.from(members.entries()).sort((a, b) => 
            a[1].name.localeCompare(b[1].name)
        );

        sortedMembers.forEach(([id, data]) => {
            const userEl = document.createElement('div');
            userEl.style.cssText = `
                display: flex;
                align-items: center;
                gap: 4px;
                padding: 2px 4px;
                border-radius: 3px;
                background: ${data.typing ? 'rgba(147, 112, 219, 0.3)' : 'transparent'};
                transition: background 0.2s;
            `;

            const statusDot = document.createElement('span');
            statusDot.style.cssText = `
                width: 6px;
                height: 6px;
                border-radius: 50%;
                background: ${data.typing ? '#ffaa00' : '#44ff44'};
                box-shadow: 0 0 5px ${data.typing ? '#ffaa00' : '#44ff44'};
            `;

            const nameSpan = document.createElement('span');
            nameSpan.style.cssText = `
                color: ${id === myUserId ? '#ff88cc' : 'white'};
                font-size: 9px;
                font-weight: ${id === myUserId ? 'bold' : 'normal'};
                flex: 1;
                overflow: hidden;
                text-overflow: ellipsis;
            `;
            nameSpan.textContent = data.name + (data.typing ? ' ✎' : '');

            userEl.appendChild(statusDot);
            userEl.appendChild(nameSpan);
            container.appendChild(userEl);
        });

        const countEl = document.getElementById('chat-members-count');
        if (countEl) {
            countEl.textContent = members.size;
        }
    }

    function updateTypingIndicator(ui) {
        const typingUsers = Array.from(members.entries())
            .filter(([id, data]) => data.typing && id !== myUserId)
            .map(([id, data]) => data.name);

        if (typingUsers.length > 0) {
            if (typingUsers.length === 1) {
                ui.typingIndicator.textContent = `✎ ${typingUsers[0]} is typing...`;
            } else if (typingUsers.length === 2) {
                ui.typingIndicator.textContent = `✎ ${typingUsers[0]} and ${typingUsers[1]} are typing...`;
            } else {
                ui.typingIndicator.textContent = `✎ ${typingUsers.length} people are typing...`;
            }
        } else {
            ui.typingIndicator.textContent = '';
        }
    }

    function updateUnreadBadge() {
        const badge = document.getElementById('unread-badge');
        if (badge) {
            if (unreadCount > 0 && !chatOpen) {
                badge.style.display = 'inline';
                badge.textContent = unreadCount > 9 ? '9+' : unreadCount;
            } else {
                badge.style.display = 'none';
            }
        }
    }

    function toggleChat() {
        const ui = window.__chatUi;
        if (!ui) return;

        chatOpen = !chatOpen;

        if (chatOpen) {
            ui.box.style.opacity = '1';
            ui.box.style.transform = 'translateY(0)';
            ui.box.style.pointerEvents = 'all';
            ui.btn.style.opacity = '0.7';
            unreadCount = 0;
            updateUnreadBadge();
            ui.inp.focus();

            if (!chatSocket?.connected) {
                connectChat(ui);
            }
        } else {
            ui.box.style.opacity = '0';
            ui.box.style.transform = 'translateY(-20px)';
            ui.box.style.pointerEvents = 'none';
            ui.btn.style.opacity = '1';
        }
    }

    async function connectChat(ui) {
        try {
            const io = await loadSocketIO();

            chatSocket = io(chatConfig.url, {
                reconnection: true,
                reconnectionAttempts: 10,
                reconnectionDelay: 1000
            });

            chatSocket.on('connect', () => {
                myUserId = chatSocket.id;
                chatSocket.emit('register_name', { name: chatConfig.name });
                addSystemMessage(ui, 'Connected to chat');
            });

            chatSocket.on('users_online', (userList) => {
                members.clear();
                userList.forEach(u => {
                    members.set(u.id, { name: u.name, typing: false });
                });
                updateUserList();
            });

            chatSocket.on('history', (h) => {
                ui.area.innerHTML = '';
                if (h?.length) {
                    h.forEach(m => {
                        const isMine = m.userId === myUserId;
                        addChatMessage(ui, m, isMine);
                    });
                }
            });

            chatSocket.on('message', (d) => {
                const isMine = d.userId === myUserId;
                if (!isMine && !chatOpen) {
                    unreadCount++;
                    updateUnreadBadge();
                }
                addChatMessage(ui, d, isMine);
            });

            chatSocket.on('message_deleted', (messageId) => {
                const msgEl = document.querySelector(`[data-message-id="${messageId}"]`);
                if (msgEl) {
                    msgEl.style.opacity = '0.3';
                    msgEl.style.textDecoration = 'line-through';
                    setTimeout(() => msgEl.remove(), 300);
                }
            });

            chatSocket.on('user_joined', (d) => {
                members.set(d.id, { name: d.name, typing: false });
                updateUserList();
                if (d.id !== myUserId) {
                    addSystemMessage(ui, `${d.name} joined`);
                }
            });

            chatSocket.on('user_left', (d) => {
                const user = members.get(d.id);
                if (user) {
                    members.delete(d.id);
                    updateUserList();
                    addSystemMessage(ui, `${user.name} left`);
                }
            });

            chatSocket.on('user_typing', (d) => {
                const user = members.get(d.userId);
                if (user) {
                    user.typing = d.isTyping;
                    members.set(d.userId, user);
                    updateUserList();
                    updateTypingIndicator(ui);
                }
            });

            chatSocket.on('disconnect', () => {
                members.clear();
                updateUserList();
                ui.typingIndicator.textContent = '⚠ Disconnected';
            });

        } catch (e) {
            M('chat error', e);
            ui.typingIndicator.textContent = '⚠ Connection failed';
        }
    }

    function sendChatMessage(ui) {
        const txt = ui.inp.value.trim();
        if (!txt || !chatSocket?.connected) return;

        chatSocket.emit('message', {
            username: chatConfig.name,
            text: txt
        });

        ui.inp.value = '';

        // Отправляем остановку печатания
        chatSocket.emit('typing', { isTyping: false });
    }

    function initChat() {
        const ui = createChatUI();
        window.__chatUi = ui;

        const style = document.createElement('style');
        style.textContent = `
            @keyframes ${ui.id}-in {
                from { opacity: 0; transform: translateY(5px); }
                to { opacity: 1; transform: translateY(0); }
            }

            #${ui.id}-msgs::-webkit-scrollbar,
            #user-list::-webkit-scrollbar {
                width: 4px;
            }

            #${ui.id}-msgs::-webkit-scrollbar-track,
            #user-list::-webkit-scrollbar-track {
                background: rgba(0,0,0,0.3);
            }

            #${ui.id}-msgs::-webkit-scrollbar-thumb,
            #user-list::-webkit-scrollbar-thumb {
                background: #8a2be2;
                border-radius: 2px;
            }
        `;
        document.head.appendChild(style);

        ui.inp.onkeydown = (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                sendChatMessage(ui);
                return;
            }

            // Отправляем статус печатания
            if (chatSocket?.connected) {
                if (typingTimeout) clearTimeout(typingTimeout);
                chatSocket.emit('typing', { isTyping: true });
                
                typingTimeout = setTimeout(() => {
                    chatSocket.emit('typing', { isTyping: false });
                }, 1000);
            }
        };

        ui.inp.onblur = () => {
            if (chatSocket?.connected) {
                chatSocket.emit('typing', { isTyping: false });
            }
        };

        ui.send.onclick = () => sendChatMessage(ui);

        document.addEventListener('mousedown', (e) => {
            if (!chatOpen || !window.__chatUi) return;

            const box = window.__chatUi.box;
            const btn = window.__chatUi.btn;

            if (!box.contains(e.target) && !btn.contains(e.target)) {
                toggleChat();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (!chatOpen) return;

            const target = e.target;
            const ourInput = target === ui.inp;

            if (ourInput) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    e.stopPropagation();
                    sendChatMessage(ui);
                    return;
                }
                if (e.key === 'Escape') {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleChat();
                    return;
                }
                e.stopPropagation();
            } else if (chatOpen) {
                e.stopPropagation();
            }
        }, true);

        M('Chat module loaded');
    }

    setTimeout(initChat, 2000);
})();

// эмсим
(function() {
    function sendMsg(msg) {
        try {
            const socket = Object.values(Object.values(window.module?.exports?.settings).find(e => e?.mode)).find(e => e?.socket)?.socket;
            if (socket) socket.send(JSON.stringify({name: "say", data: msg}));
        } catch (e) {}
    }

    const presets = {
        sorry: {
            msgs: ['SQooo', 'oSQoo', 'ooSQo', 'oooSQ', 'ooSQo', 'oSQoo']
        },
        hmthx: {
            msgs: ['XQQQQ', 'QXQQQ', 'QQXQQ', 'QQQXQ', 'QQQQX']
        },
        gg: {
            msgs: ['GYYYY', 'YGYYY', 'YYGYY', 'YYYGY', 'YYYYG']
        }
    };

    let intervals = {};

    function togglePreset(id) {
        if (intervals[id]) {
            clearInterval(intervals[id]);
            delete intervals[id];
            M(`⏹ ${id} off`);
        } else {
            let i = 0;
            sendMsg(presets[id].msgs[0]);
            intervals[id] = setInterval(() => {
                i = (i + 1) % presets[id].msgs.length;
                sendMsg(presets[id].msgs[i]);
            }, 400);
            M(`▶ ${id} on`);
        }
    }

    setTimeout(() => {
        if (document.getElementById('msg-btn')) return;

        const btn = document.createElement('div');
        btn.id = 'msg-btn';
        btn.innerHTML = 'EM';
        btn.style.cssText = `
            position: fixed;
            top: 5px;
            left: 300px;
            width: 38px;
            height: 16px;
            background: linear-gradient(135deg, #8a2be2, #9370db);
            color: white;
            font-size: 9px;
            font-weight: bold;
            letter-spacing: 0.5px;
            text-align: center;
            line-height: 16px;
            border-radius: 3px;
            cursor: pointer;
            z-index: 999999;
            box-shadow: 0 2px 8px rgba(138, 43, 226, 0.4);
            border: 1px solid rgba(255,255,255,0.2);
            transition: all 0.2s;
            user-select: none;
            font-family: 'Play', 'Segoe UI', sans-serif;
        `;

        btn.onmouseenter = () => {
            btn.style.background = 'linear-gradient(135deg, #9b4deb, #a47fdb)';
            btn.style.boxShadow = '0 4px 12px rgba(138, 43, 226, 0.7)';
        };

        btn.onmouseleave = () => {
            btn.style.background = 'linear-gradient(135deg, #8a2be2, #9370db)';
            btn.style.boxShadow = '0 2px 8px rgba(138, 43, 226, 0.4)';
        };

        const panel = document.createElement('div');
        panel.id = 'msg-panel';
        panel.style.cssText = `
            display: none;
            position: fixed;
            top: 30px;
            left: 300px;
            background: linear-gradient(135deg, #1a0b2e, #2a1a3a);
            border: 2px solid #8a2be2;
            border-radius: 8px;
            padding: 4px;
            box-shadow: 0 0 20px #8a2be2;
            z-index: 1000000;
            flex-direction: column;
            gap: 2px;
        `;

        panel.innerHTML = `
            <button id="msg-sorry" style="width:80px;padding:4px;background:#2a1a3a;color:#8a2be2;border:1px solid #8a2be2;border-radius:4px;cursor:pointer;font-family:'Play',sans-serif;font-size:11px;">Sorry Hmm</button>
            <button id="msg-hmthx" style="width:80px;padding:4px;background:#2a1a3a;color:#8a2be2;border:1px solid #8a2be2;border-radius:4px;cursor:pointer;font-family:'Play',sans-serif;font-size:11px;">Hm Thx</button>
            <button id="msg-gg" style="width:80px;padding:4px;background:#2a1a3a;color:#8a2be2;border:1px solid #8a2be2;border-radius:4px;cursor:pointer;font-family:'Play',sans-serif;font-size:11px;">GG</button>
        `;

        document.body.appendChild(btn);
        document.body.appendChild(panel);

        btn.onclick = () => {
            panel.style.display = panel.style.display === 'none' ? 'flex' : 'none';
        };

        document.getElementById('msg-sorry').onclick = () => togglePreset('sorry');
        document.getElementById('msg-gg').onclick = () => togglePreset('gg');
        document.getElementById('msg-hmthx').onclick = () => togglePreset('hmthx');

        document.addEventListener('click', (e) => {
            if (!panel.contains(e.target) && !btn.contains(e.target)) {
                panel.style.display = 'none';
            }
        });

        M('Message panel loaded');
    }, 800);
})();

seks();
