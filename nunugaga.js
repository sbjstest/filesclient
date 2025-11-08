// ===== НАСТРАИВАЕМАЯ ГРАДИЕНТНАЯ ТЕМА =====
let customGradientColors = {
    color1: '#ffffff',
    color2: '#00ff00'
};

// Функция для сохранения всех настроек в localStorage
function saveAllSettings() {
    // Сохраняем настройки градиента
    localStorage.setItem('gradientColor1', customGradientColors.color1);
    localStorage.setItem('gradientColor2', customGradientColors.color2);
    
    // Сохраняем настройки шрифта
    localStorage.setItem('currentFont', currentFont);
    
    // Сохраняем настройки значков
    localStorage.setItem('badgesEnabled', badgesEnabled.toString());
    
    // Сохраняем настройки lowercase name
    localStorage.setItem('lowercaseNameEnabled', lowercaseNameEnabled.toString());
    
    // Сохраняем язык
    localStorage.setItem('currentLanguage', Object.keys(languages).find(key => languages[key] === currentLanguage) || 'ru');
    
    // Сохраняем цвета кристаллов
    const gemColor1 = JSON.parse(localStorage.getItem('gemindeed') || '"#ff0000"');
    const gemColor2 = JSON.parse(localStorage.getItem('gemindeed1') || '"#ff8080"');
    localStorage.setItem('gemindeed', JSON.stringify(gemColor1));
    localStorage.setItem('gemindeed1', JSON.stringify(gemColor2));
}

// Функция для загрузки всех настроек из localStorage
function loadAllSettings() {
    // Загружаем настройки градиента
    const savedColor1 = localStorage.getItem('gradientColor1') || '#ffffff';
    const savedColor2 = localStorage.getItem('gradientColor2') || '#00ff00';
    customGradientColors.color1 = savedColor1;
    customGradientColors.color2 = savedColor2;
    
    // Загружаем настройки шрифта
    currentFont = localStorage.getItem('currentFont') || 'default';
    
    // Загружаем настройки значков
    badgesEnabled = localStorage.getItem('badgesEnabled') === 'true';
    if (badgesEnabled) {
        enableBadges();
    }
    
    // Загружаем настройки lowercase name
    lowercaseNameEnabled = localStorage.getItem('lowercaseNameEnabled') === 'true';
    if (lowercaseNameEnabled) {
        enableLowercaseName();
    }
    
    // Загружаем язык
    const savedLang = localStorage.getItem('currentLanguage') || 'ru';
    currentLanguage = languages[savedLang];
    
    // Применяем сохраненный шрифт
    applySavedFont();
}

// Функция для применения сохраненного шрифта
function applySavedFont() {
    removeFont();
    switch(currentFont) {
        case 'cyberpunk':
            applyCyberpunkFont();
            break;
        case 'futuristic':
            applyFuturisticFont();
            break;
        case 'mysterious':
            applyMysteriousFont();
            break;
        case 'elegant':
            applyElegantFont();
            break;
        case 'minimalist':
            applyMinimalistFont();
            break;
        case 'retro':
            applyRetroFont();
            break;
        default:
            applyDefaultFont();
    }
}

function applyCustomGradientTheme() {
    removeAllThemes();
    
    const style = document.createElement('style');
    style.id = 'custom-gradient-theme';
    style.textContent = `
        .inputwrapper, .stats, #player button, .modal, .followtools a, 
        .stats input, .ecpinput, .donate-btn, .gameloaderwrapper,
        .changelog-new, .extrabutton, .schedule,
        #respawn, #connection_lost, #game_over,
        .statinfo, .gameloader,
        .pricechoice span, .customtable i,
        .loadwrapper, .progress,
        .modal .mod, .modal .modecp,
        #ranks .rankings th, #ranks .rankings td,
        .modal .modalbody .gmodes span,
        .switch, .slider,
        #customEventable,
        .bottom-left > * {
            border: 2px solid transparent !important;
            background: linear-gradient(45deg, ${customGradientColors.color1}, ${customGradientColors.color2}, ${customGradientColors.color1}) !important;
            background-size: 400% 400% !important;
            animation: custom-gradient 3s ease infinite !important;
            box-shadow: 0 0 15px ${customGradientColors.color1} !important;
            border-radius: 12px !important;
            opacity: 0.85 !important;
        }
        
        /* ИСКЛЮЧЕНИЯ - элементы которые не должны иметь градиент */
        .tutorial, .desktop, .mobile, .joystick-container,
        .mobile-fire, .keyboard, .mouse, .mouse-container,
        .keyboard .top, .keyboard .bottom,
        [class^="mobile-"], [class^="kb-"],
        #home, #home_mobile,
        #menuToggle, #settings-btn, #messagePanel, #settings-menu {
            border: none !important;
            box-shadow: none !important;
            background: transparent !important;
            border-radius: 0 !important;
            animation: none !important;
            opacity: 1 !important;
        }
        
        /* Специальные стили для кнопки настроек и Emote Simulator */
        #menuToggle, #settings-btn {
            background: rgba(0, 0, 0, 0.7) !important;
            backdrop-filter: blur(20px) !important;
            border: 2px solid rgba(255,255,255,0.3) !important;
            border-radius: 0 12px 12px 0 !important;
            opacity: 0.9 !important;
        }
        
        /* Панели Emote Simulator и настроек - ПРОЗРАЧНЫЙ фон БЕЗ ГРАНИЦ */
        #messagePanel, #settings-menu {
            background: transparent !important;
            backdrop-filter: none !important;
            border: none !important;
            opacity: 1 !important;
        }
        
        #messagePanel {
            border-radius: 0 15px 15px 0 !important;
        }
        
        #settings-menu {
            border-radius: 0 15px 15px 0 !important;
            border-left: none !important;
        }
        
        /* Кнопки внутри панелей сохраняют свой стиль */
        #messagePanel button {
            color: #fff;
            padding: 12px 15px;
            border-radius: 8px;
            cursor: pointer;
            font-family: Arial, sans-serif;
            font-size: 12px;
            font-weight: bold;
            transition: all 0.2s ease;
            width: 100%;
            text-align: center;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(10px);
            background: rgba(255, 255, 255, 0.1) !important;
            border: 1px solid rgba(255,255,255,0.2) !important;
            opacity: 0.9 !important;
        }

        #messagePanel button:hover {
            transform: translateY(-2px);
            background: rgba(255, 255, 255, 0.2) !important;
        }

        #messagePanel button:active {
            transform: none;
        }

        #messagePanel button.active {
            background: rgba(255, 255, 255, 0.3) !important;
            box-shadow: 0 0 15px rgba(255,255,255,0.5) !important;
        }
        
        /* Кнопки в меню настроек */
        #settings-menu button {
            padding: 8px 12px;
            color: #ffffff;
            border-radius: 8px;
            cursor: pointer;
            font-family: Arial, sans-serif;
            font-size: 12px;
            font-weight: bold;
            transition: all 0.2s ease;
            width: 100%;
            text-align: left;
            text-shadow: 0 0 5px rgba(255,255,255,0.8);
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.2);
            opacity: 0.9 !important;
        }
        
        #settings-menu button:hover {
            transform: scale(1.02);
            background: rgba(255, 255, 255, 0.2);
        }
        
        #settings-menu button:active {
            transform: scale(1);
            background: rgba(255, 255, 255, 0.1);
        }
        
        #player button, #respawn_actions button, .donate-btn,
        .social i, .mobile-social i, .mobile-tools i, .stats i,
        .followtools a,
        .modal .modalbody span.region.active,
        .modal .modalbody .gmodes span.selected,
        .pricechoice span.active {
            background: linear-gradient(45deg, ${customGradientColors.color1}, ${customGradientColors.color2}, ${customGradientColors.color1}) !important;
            background-size: 400% 400% !important;
            animation: custom-pulse 2s ease infinite !important;
            color: black !important;
            font-weight: bold !important;
            text-shadow: 0 0 5px rgba(255,255,255,0.8) !important;
            border: 2px solid ${customGradientColors.color2} !important;
            box-shadow: 0 0 20px ${customGradientColors.color1} !important;
            border-radius: 10px !important;
            opacity: 0.9 !important;
        }
        
        .loaderprogress, .progress {
            background: linear-gradient(90deg, ${customGradientColors.color1}, ${customGradientColors.color2}, ${customGradientColors.color1}) !important;
            background-size: 400% 100% !important;
            animation: custom-progress 1.5s linear infinite !important;
            border-radius: 8px !important;
            opacity: 0.9 !important;
        }
        
        @keyframes custom-gradient {
            0% { background-position: 0% 50% !important; }
            50% { background-position: 100% 50% !important; }
            100% { background-position: 0% 50% !important; }
        }
        
        @keyframes custom-pulse {
            0% { 
                background-position: 0% 50% !important;
                box-shadow: 0 0 20px ${customGradientColors.color1} !important;
            }
            50% { 
                background-position: 100% 50% !important;
                box-shadow: 0 0 30px ${customGradientColors.color2} !important;
            }
            100% { 
                background-position: 0% 50% !important;
                box-shadow: 0 0 20px ${customGradientColors.color1} !important;
            }
        }
        
        @keyframes custom-progress {
            0% { background-position: 0% 0% !important; }
            100% { background-position: 400% 0% !important; }
        }
    `;
    
    document.head.appendChild(style);
    showNotification(currentLanguage.notifications.customGradient);
    closeAllMenus();
    saveAllSettings(); // Сохраняем настройки
}

// ===== EMOTE SIMULATOR SYSTEM =====
(function() {
    'use strict';
    
    let hideTimeout;
    let isMenuOpen = false;
    let intervalId;
    let isSending = false;
    let activeSet = null;

    function createPanel() {
        const toggleButton = document.createElement('div');
        toggleButton.id = 'menuToggle';
        toggleButton.title = 'Emote Simulator Menu';

        const panel = document.createElement('div');
        panel.id = 'messagePanel';

        const sendButton1 = document.createElement('button');
        sendButton1.id = 'sendButton1';
        sendButton1.textContent = 'Hmmm';

        const sendButton2 = document.createElement('button');
        sendButton2.id = 'sendButton2';
        sendButton2.textContent = 'No GG';

        const sendButton3 = document.createElement('button');
        sendButton3.id = 'sendButton3';
        sendButton3.textContent = 'GGs';

        const sendButton4 = document.createElement('button');
        sendButton4.id = 'sendButton4';
        sendButton4.textContent = 'Thanks';

        const sendButton5 = document.createElement('button');
        sendButton5.id = 'sendButton5';
        sendButton5.textContent = 'Bye Hmm?';

        const sendButton6 = document.createElement('button');
        sendButton6.id = 'sendButton6';
        sendButton6.textContent = 'Sorry Hmm?';

        panel.appendChild(sendButton1);
        panel.appendChild(sendButton2);
        panel.appendChild(sendButton3);
        panel.appendChild(sendButton4);
        panel.appendChild(sendButton5);
        panel.appendChild(sendButton6);
        
        document.body.appendChild(toggleButton);
        document.body.appendChild(panel);

        const style = document.createElement('style');
        style.textContent = `
            #menuToggle {
                position: fixed;
                left: 0;
                top: 20px;
                width: 20px;
                height: 60px;
                cursor: pointer;
                transition: all 0.3s ease;
                z-index: 1001;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 0 12px 12px 0;
                background: rgba(0, 0, 0, 0.7) !important;
                backdrop-filter: blur(20px) !important;
                border: 2px solid rgba(255,255,255,0.3) !important;
            }

            #menuToggle::before {
                content: '›';
                color: rgba(255, 255, 255, 0.8);
                font-size: 16px;
                font-weight: bold;
                transition: all 0.3s ease;
            }

            #menuToggle:hover::before {
                transform: translateX(2px);
                color: rgba(255, 255, 255, 1);
            }

            .menu-open #menuToggle::before {
                content: '‹';
                transform: translateX(-2px);
            }

            #messagePanel {
                position: fixed;
                left: -200px;
                top: 20px;
                color: #fff;
                padding: 15px;
                border-radius: 0 15px 15px 0;
                display: flex;
                flex-direction: column;
                gap: 10px;
                z-index: 1000;
                min-width: 120px;
                transition: all 0.3s ease;
                opacity: 0;
                visibility: hidden;
                background: transparent !important;
                backdrop-filter: none !important;
                border: none !important;
            }

            .menu-open #messagePanel {
                left: 20px;
                opacity: 1;
                visibility: visible;
            }

            #messagePanel button {
                color: #fff;
                padding: 12px 15px;
                border-radius: 8px;
                cursor: pointer;
                font-family: Arial, sans-serif;
                font-size: 12px;
                font-weight: bold;
                transition: all 0.2s ease;
                width: 100%;
                text-align: center;
                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
                backdrop-filter: blur(10px);
                background: rgba(255, 255, 255, 0.1) !important;
                border: 1px solid rgba(255,255,255,0.2) !important;
            }

            #messagePanel button:hover {
                transform: translateY(-2px);
                background: rgba(255, 255, 255, 0.2) !important;
            }

            #messagePanel button:active {
                transform: none;
            }

            #messagePanel button.active {
                background: rgba(255, 255, 255, 0.3) !important;
                box-shadow: 0 0 15px rgba(255,255,255,0.5) !important;
            }
        `;
        document.head.appendChild(style);

        sendButton1.addEventListener('click', () => handleButtonClick('set1'));
        sendButton2.addEventListener('click', () => handleButtonClick('set2'));
        sendButton3.addEventListener('click', () => handleButtonClick('set3'));
        sendButton4.addEventListener('click', () => handleButtonClick('set4'));
        sendButton5.addEventListener('click', () => handleButtonClick('set5'));
        sendButton6.addEventListener('click', () => handleButtonClick('set6'));

        toggleButton.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMenu();
        });

        document.addEventListener('click', function(e) {
            if (!panel.contains(e.target) && !toggleButton.contains(e.target)) {
                closeMenu();
            }
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeMenu();
            }
        });

        panel.addEventListener('mouseenter', resetHideTimeout);
        panel.addEventListener('click', resetHideTimeout);
        toggleButton.addEventListener('mouseenter', resetHideTimeout);
    }

    function toggleMenu() {
        if (isMenuOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    function openMenu() {
        document.body.classList.add('menu-open');
        isMenuOpen = true;
        resetHideTimeout();
    }

    function closeMenu() {
        document.body.classList.remove('menu-open');
        isMenuOpen = false;
        clearTimeout(hideTimeout);
    }

    function resetHideTimeout() {
        clearTimeout(hideTimeout);
        if (isMenuOpen) {
            hideTimeout = setTimeout(closeMenu, 6000);
        }
    }

    function fetchObjval(callback) {
        const settings = window.module.exports.settings;
        const objval = Object.values(Object.values(settings).find(item => item.mode)).find(item => item.socket)?.socket;

        if (objval && objval.readyState === WebSocket.OPEN) {
            callback(objval);
        } else {
            console.error("Objval not found or WebSocket is not open.");
        }
    }

    function sendMessage(objval, message) {
        if (objval && objval.readyState === WebSocket.OPEN) {
            objval.send(JSON.stringify({ name: "say", data: message }));
            console.log("Message sent:", message);
        } else {
            console.error("WebSocket connection is not open or closed.");
        }
    }

    function startSendingMessages(objval, messages) {
        let messageIndex = 0;
        isSending = true;
        intervalId = setInterval(() => {
            if (!isSending) return;
            sendMessage(objval, messages[messageIndex]);
            messageIndex = (messageIndex + 1) % messages.length;
        }, 300);
    }

    function stopSendingMessages() {
        clearInterval(intervalId);
        isSending = false;
        console.log("Message sending stopped.");
        
        document.querySelectorAll('#messagePanel button').forEach(btn => {
            btn.classList.remove('active');
        });
    }

    function handleButtonClick(set) {
        document.querySelectorAll('#messagePanel button').forEach(btn => {
            btn.classList.remove('active');
        });

        if (isSending) {
            stopSendingMessages();
            if (activeSet === set) {
                activeSet = null;
                return;
            }
        }

        activeSet = set;
        fetchObjval((objval) => {
            const activeButton = document.querySelector(`#sendButton${set.slice(-1)}`);
            if (activeButton) {
                activeButton.classList.add('active');
            }

            if (set === 'set1') {
                startSendingMessages(objval, ["wQQQQ", "QwQQQ", "QQwQQ", "QQQwQ", "QQQQw"]);
            } else if (set === 'set2') {
                startSendingMessages(objval, ["NGwww", "wNGww", "wwNGw", "wwwNG"]);
            } else if (set === 'set3') {
                startSendingMessages(objval, ["wwwww", "GwwwG", "GGwGG", "GGGGG", "wGGGw", "wwGww"]);
            } else if (set === 'set4') {
                startSendingMessages(objval, ["Xwwww", "wXwww", "wwXww", "wwwXw", "wwwwX"]);
            } else if (set === 'set5') {
                startSendingMessages(objval, ["QBBBB", "BQBBB", "BBQBB", "BBBQB", "BBBBQ"]);
            } else if (set === 'set6') {
                startSendingMessages(objval, ["QSSSS", "SQSSS", "SSQSS", "SSSQS", "SSSSQ"]);
            }
        });
    }

    createPanel();
})();

// ===== НАСТРОЙКИ - КНОПКА И МЕНЮ =====
function createSettingsButton() {
    const oldButton = document.getElementById('settings-btn');
    if (oldButton) {
        oldButton.remove();
    }
    
    const settingsButton = document.createElement('div');
    settingsButton.id = 'settings-btn';
    settingsButton.title = 'Настройки';
    settingsButton.style.position = 'fixed';
    settingsButton.style.left = '0';
    settingsButton.style.top = '90px'; // Располагаем ниже Emote Simulator
    settingsButton.style.width = '20px';
    settingsButton.style.height = '60px';
    settingsButton.style.cursor = 'pointer';
    settingsButton.style.transition = 'all 0.3s ease';
    settingsButton.style.zIndex = '1001';
    settingsButton.style.display = 'flex';
    settingsButton.style.alignItems = 'center';
    settingsButton.style.justifyContent = 'center';
    settingsButton.style.borderRadius = '0 12px 12px 0';
    settingsButton.style.background = 'rgba(0, 0, 0, 0.7) !important';
    settingsButton.style.backdropFilter = 'blur(20px) !important';
    settingsButton.style.border = '2px solid rgba(255,255,255,0.3) !important';
    settingsButton.style.fontSize = '16px';
    settingsButton.style.fontWeight = 'bold';
    settingsButton.style.color = 'rgba(255, 255, 255, 0.8)';

    settingsButton.innerHTML = '⚙️';

    settingsButton.onmouseover = function() {
        this.style.background = 'rgba(0, 0, 0, 0.9) !important';
        this.style.color = 'rgba(255, 255, 255, 1)';
        this.style.transform = 'translateX(2px)';
        this.style.border = '2px solid rgba(255,255,255,0.5) !important';
    };

    settingsButton.onmouseout = function() {
        this.style.background = 'rgba(0, 0, 0, 0.7) !important';
        this.style.color = 'rgba(255, 255, 255, 0.8)';
        this.style.transform = 'translateX(0)';
        this.style.border = '2px solid rgba(255,255,255,0.3) !important';
    };

    settingsButton.onclick = function(event) {
        event.stopPropagation();
        toggleSettingsMenu();
    };

    document.body.appendChild(settingsButton);
}

function createSettingsMenu() {
    const oldMenu = document.getElementById('settings-menu');
    if (oldMenu) {
        oldMenu.remove();
    }

    const menu = document.createElement('div');
    menu.id = 'settings-menu';
    menu.style.position = 'fixed';
    menu.style.left = '20px';
    menu.style.top = '90px';
    menu.style.zIndex = '1000';
    menu.style.borderRadius = '0 15px 15px 0';
    menu.style.padding = '15px';
    menu.style.display = 'none';
    menu.style.flexDirection = 'column';
    menu.style.gap = '8px';
    menu.style.width = '200px';
    menu.style.maxHeight = '70vh';
    menu.style.overflowY = 'auto';
    menu.style.background = 'transparent !important';
    menu.style.backdropFilter = 'none !important';
    menu.style.border = 'none !important';
    menu.style.borderLeft = 'none !important';
    menu.style.boxShadow = '0 0 30px rgba(0,0,0,0.8)';
    
    const scrollStyle = document.createElement('style');
    scrollStyle.textContent = `
        #settings-menu::-webkit-scrollbar {
            width: 6px;
        }
        #settings-menu::-webkit-scrollbar-track {
            background: rgba(0,0,0,0.5);
            border-radius: 3px;
        }
        #settings-menu::-webkit-scrollbar-thumb {
            background: rgba(255,255,255,0.3);
            border-radius: 3px;
        }
        #settings-menu::-webkit-scrollbar-thumb:hover {
            background: rgba(255,255,255,0.5);
        }
    `;
    document.head.appendChild(scrollStyle);
    
    document.body.appendChild(menu);
    updateMenu();
}

// ===== ОСНОВНЫЕ ФУНКЦИИ ТЕМ =====
function resetToOriginal() {
    removeAllThemes();
    removeFont();
    currentFont = 'default';
    showNotification(currentLanguage.notifications.reset);
    closeAllMenus();
    saveAllSettings(); // Сохраняем настройки
}

function removeAllThemes() {
    const themes = [
        'custom-gradient-theme'
    ];
    themes.forEach(themeId => {
        const theme = document.getElementById(themeId);
        if (theme) {
            theme.remove();
        }
    });
}

// ===== СИСТЕМА ШРИФТОВ =====
let currentFont = 'default';

function applyDefaultFont() {
    removeFont();
    currentFont = 'default';
    showNotification(currentLanguage.notifications.defaultFont);
    closeAllMenus();
    saveAllSettings(); // Сохраняем настройки
}

function applyCyberpunkFont() {
    removeFont();
    
    const style = document.createElement('style');
    style.id = 'cyberpunk-font';
    style.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');
        
        body, 
        .stats:not(.sbglyphs):not([class*="sbglyphs"]), 
        .modal:not(.sbglyphs):not([class*="sbglyphs"]),
        #player button:not(.sbglyphs):not([class*="sbglyphs"]),
        .donate-btn:not(.sbglyphs):not([class*="sbglyphs"]),
        .inputwrapper:not(.sbglyphs):not([class*="sbglyphs"]),
        .stats input:not(.sbglyphs):not([class*="sbglyphs"]),
        .ecpinput:not(.sbglyphs):not([class*="sbglyphs"]),
        .changelog-new:not(.sbglyphs):not([class*="sbglyphs"]),
        .modal h2:not(.sbglyphs):not([class*="sbglyphs"]),
        .modal .modalbody span:not(.sbglyphs):not([class*="sbglyphs"]),
        .pricechoice span:not(.sbglyphs):not([class*="sbglyphs"]),
        .bottom-left:not(.sbglyphs):not([class*="sbglyphs"]),
        .bottom-left div:not(.sbglyphs):not([class*="sbglyphs"]),
        .bottom-left span:not(.sbglyphs):not([class*="sbglyphs"]),
        .bottom-left p:not(.sbglyphs):not([class*="sbglyphs"]),
        .chat-container:not(.sbglyphs):not([class*="sbglyphs"]),
        .chat-message:not(.sbglyphs):not([class*="sbglyphs"]),
        .system-message:not(.sbglyphs):not([class*="sbglyphs"]),
        .info-panel:not(.sbglyphs):not([class*="sbglyphs"]),
        .status-panel:not(.sbglyphs):not([class*="sbglyphs"]),
        .followtools:not(.sbglyphs):not([class*="sbglyphs"]),
        .followtools a:not(.sbglyphs):not([class*="sbglyphs"]),
        .followtools span:not(.sbglyphs):not([class*="sbglyphs"]),
        .followtools div:not(.sbglyphs):not([class*="sbglyphs"]) {
            font-family: 'Orbitron', monospace !important;
            letter-spacing: 1px !important;
        }
        
        .stats span:not(.sbglyphs):not([class*="sbglyphs"]), 
        .modal h2:not(.sbglyphs):not([class*="sbglyphs"]), 
        .changelog-new h3:not(.sbglyphs):not([class*="sbglyphs"]),
        .bottom-left span:not(.sbglyphs):not([class*="sbglyphs"]),
        .bottom-left div:not(.sbglyphs):not([class*="sbglyphs"]),
        .chat-message:not(.sbglyphs):not([class*="sbglyphs"]),
        .system-message:not(.sbglyphs):not([class*="sbglyphs"]),
        .followtools a:not(.sbglyphs):not([class*="sbglyphs"]),
        .followtools span:not(.sbglyphs):not([class*="sbglyphs"]) {
            font-family: 'Orbitron', monospace !important;
            font-weight: 700 !important;
            letter-spacing: 1.5px !important;
            text-shadow: 
                0 0 10px rgba(0, 255, 255, 0.7),
                0 0 20px rgba(0, 255, 255, 0.5) !important;
        }
        
        #player button:not(.sbglyphs):not([class*="sbglyphs"]), 
        #respawn_actions button:not(.sbglyphs):not([class*="sbglyphs"]), 
        .donate-btn:not(.sbglyphs):not([class*="sbglyphs"]) {
            font-family: 'Orbitron', monospace !important;
            font-weight: 900 !important;
            text-shadow: 
                0 0 10px rgba(0, 255, 255, 0.9),
                0 0 20px rgba(0, 255, 255, 0.7),
                0 0 30px rgba(0, 255, 255, 0.5) !important;
        }
        
        .stats input:not(.sbglyphs):not([class*="sbglyphs"]), 
        .ecpinput:not(.sbglyphs):not([class*="sbglyphs"]) {
            font-family: 'Orbitron', monospace !important;
            text-shadow: 
                0 0 5px rgba(0, 255, 255, 0.5) !important;
        }
        
        .sbglyphs, [class*="sbglyphs"], [class*="SBGlyphs"],
        .glyph, [class*="glyph"], [class*="Glyph"],
        .icon, [class*="icon"], [class*="Icon"] {
            font-family: inherit !important;
        }
    `;
    
    document.head.appendChild(style);
    currentFont = 'cyberpunk';
    showNotification(currentLanguage.notifications.cyberpunkFont);
    closeAllMenus();
    saveAllSettings(); // Сохраняем настройки
}

function applyFuturisticFont() {
    removeFont();
    
    const style = document.createElement('style');
    style.id = 'futuristic-font';
    style.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;600;700&display=swap');
        
        body, 
        .stats:not(.sbglyphs):not([class*="sbglyphs"]), 
        .modal:not(.sbglyphs):not([class*="sbglyphs"]),
        #player button:not(.sbglyphs):not([class*="sbglyphs"]),
        .donate-btn:not(.sbglyphs):not([class*="sbglyphs"]),
        .inputwrapper:not(.sbglyphs):not([class*="sbglyphs"]),
        .stats input:not(.sbglyphs):not([class*="sbglyphs"]),
        .ecpinput:not(.sbglyphs):not([class*="sbglyphs"]),
        .changelog-new:not(.sbglyphs):not([class*="sbglyphs"]),
        .modal h2:not(.sbglyphs):not([class*="sbglyphs"]),
        .modal .modalbody span:not(.sbglyphs):not([class*="sbglyphs"]),
        .pricechoice span:not(.sbglyphs):not([class*="sbglyphs"]),
        .bottom-left:not(.sbglyphs):not([class*="sbglyphs"]),
        .bottom-left div:not(.sbglyphs):not([class*="sbglyphs"]),
        .bottom-left span:not(.sbglyphs):not([class*="sbglyphs"]),
        .bottom-left p:not(.sbglyphs):not([class*="sbglyphs"]),
        .chat-container:not(.sbglyphs):not([class*="sbglyphs"]),
        .chat-message:not(.sbglyphs):not([class*="sbglyphs"]),
        .system-message:not(.sbglyphs):not([class*="sbglyphs"]),
        .info-panel:not(.sbglyphs):not([class*="sbglyphs"]),
        .status-panel:not(.sbglyphs):not([class*="sbglyphs"]),
        .followtools:not(.sbglyphs):not([class*="sbglyphs"]),
        .followtools a:not(.sbglyphs):not([class*="sbglyphs"]),
        .followtools span:not(.sbglyphs):not([class*="sbglyphs"]),
        .followtools div:not(.sbglyphs):not([class*="sbglyphs"]) {
            font-family: 'Exo 2', sans-serif !important;
            letter-spacing: 0.5px !important;
        }
        
        .stats span:not(.sbglyphs):not([class*="sbglyphs"]), 
        .modal h2:not(.sbglyphs):not([class*="sbglyphs"]), 
        .changelog-new h3:not(.sbglyphs):not([class*="sbglyphs"]),
        .bottom-left span:not(.sbglyphs):not([class*="sbglyphs"]),
        .bottom-left div:not(.sbglyphs):not([class*="sbglyphs"]),
        .chat-message:not(.sbglyphs):not([class*="sbglyphs"]),
        .system-message:not(.sbglyphs):not([class*="sbglyphs"]),
        .followtools a:not(.sbglyphs):not([class*="sbglyphs"]),
        .followtools span:not(.sbglyphs):not([class*="sbglyphs"]) {
            font-family: 'Exo 2', sans-serif !important;
            font-weight: 600 !important;
            letter-spacing: 1px !important;
            text-shadow: 
                0 0 8px rgba(100, 255, 218, 0.6),
                0 0 16px rgba(100, 255, 218, 0.4) !important;
        }
        
        #player button:not(.sbglyphs):not([class*="sbglyphs"]), 
        #respawn_actions button:not(.sbglyphs):not([class*="sbglyphs"]), 
        .donate-btn:not(.sbglyphs):not([class*="sbglyphs"]) {
            font-family: 'Exo 2', sans-serif !important;
            font-weight: 700 !important;
            text-shadow: 
                0 0 8px rgba(100, 255, 218, 0.8),
                0 0 16px rgba(100, 255, 218, 0.6),
                0 0 24px rgba(100, 255, 218, 0.4) !important;
        }
        
        .sbglyphs, [class*="sbglyphs"], [class*="SBGlyphs"],
        .glyph, [class*="glyph"], [class*="Glyph"],
        .icon, [class*="icon"], [class*="Icon"] {
            font-family: inherit !important;
        }
    `;
    
    document.head.appendChild(style);
    currentFont = 'futuristic';
    showNotification(currentLanguage.notifications.futuristicFont);
    closeAllMenus();
    saveAllSettings(); // Сохраняем настройки
}

function applyMysteriousFont() {
    removeFont();
    
    const style = document.createElement('style');
    style.id = 'mysterious-font';
    style.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&display=swap');
        
        body, 
        .stats:not(.sbglyphs):not([class*="sbglyphs"]), 
        .modal:not(.sbglyphs):not([class*="sbglyphs"]),
        #player button:not(.sbglyphs):not([class*="sbglyphs"]),
        .donate-btn:not(.sbglyphs):not([class*="sbglyphs"]),
        .inputwrapper:not(.sbglyphs):not([class*="sbglyphs"]),
        .stats input:not(.sbglyphs):not([class*="sbglyphs"]),
        .ecpinput:not(.sbglyphs):not([class*="sbglyphs"]),
        .changelog-new:not(.sbglyphs):not([class*="sbglyphs"]),
        .modal h2:not(.sbglyphs):not([class*="sbglyphs"]),
        .modal .modalbody span:not(.sbglyphs):not([class*="sbglyphs"]),
        .pricechoice span:not(.sbglyphs):not([class*="sbglyphs"]),
        .bottom-left:not(.sbglyphs):not([class*="sbglyphs"]),
        .bottom-left div:not(.sbglyphs):not([class*="sbglyphs"]),
        .bottom-left span:not(.sbglyphs):not([class*="sbglyphs"]),
        .bottom-left p:not(.sbglyphs):not([class*="sbglyphs"]),
        .chat-container:not(.sbglyphs):not([class*="sbglyphs"]),
        .chat-message:not(.sbglyphs):not([class*="sbglyphs"]),
        .system-message:not(.sbglyphs):not([class*="sbglyphs"]),
        .info-panel:not(.sbglyphs):not([class*="sbglyphs"]),
        .status-panel:not(.sbglyphs):not([class*="sbglyphs"]),
        .followtools:not(.sbglyphs):not([class*="sbglyphs"]),
        .followtools a:not(.sbglyphs):not([class*="sbglyphs"]),
        .followtools span:not(.sbglyphs):not([class*="sbglyphs"]),
        .followtools div:not(.sbglyphs):not([class*="sbglyphs"]) {
            font-family: 'Cinzel', serif !important;
            letter-spacing: 0.5px !important;
        }
        
        .stats span:not(.sbglyphs):not([class*="sbglyphs"]), 
        .modal h2:not(.sbglyphs):not([class*="sbglyphs"]), 
        .changelog-new h3:not(.sbglyphs):not([class*="sbglyphs"]),
        .bottom-left span:not(.sbglyphs):not([class*="sbglyphs"]),
        .bottom-left div:not(.sbglyphs):not([class*="sbglyphs"]),
        .chat-message:not(.sbglyphs):not([class*="sbglyphs"]),
        .system-message:not(.sbglyphs):not([class*="sbglyphs"]),
        .followtools a:not(.sbglyphs):not([class*="sbglyphs"]),
        .followtools span:not(.sbglyphs):not([class*="sbglyphs"]) {
            font-family: 'Cinzel', serif !important;
            font-weight: 600 !important;
            text-shadow: 
                1px 1px 2px rgba(0, 0, 0, 0.8),
                0 0 5px rgba(139, 0, 139, 0.5) !important;
        }
        
        #player button:not(.sbglyphs):not([class*="sbglyphs"]), 
        #respawn_actions button:not(.sbglyphs):not([class*="sbglyphs"]), 
        .donate-btn:not(.sbglyphs):not([class*="sbglyphs"]) {
            font-family: 'Cinzel', serif !important;
            text-shadow: 
                2px 2px 3px rgba(0, 0, 0, 0.9),
                0 0 8px rgba(75, 0, 130, 0.7),
                0 0 12px rgba(148, 0, 211, 0.5) !important;
        }
        
        .modal h2:not(.sbglyphs):not([class*="sbglyphs"]), 
        .changelog-new h3:not(.sbglyphs):not([class*="sbglyphs"]) {
            font-family: 'Cinzel', serif !important;
            text-shadow: 
                2px 2px 3px rgba(0, 0, 0, 0.9),
                0 0 10px rgba(75, 0, 130, 0.6) !important;
        }
        
        .sbglyphs, [class*="sbglyphs"], [class*="SBGlyphs"],
        .glyph, [class*="glyph"], [class*="Glyph"],
        .icon, [class*="icon"], [class*="Icon"] {
            font-family: inherit !important;
        }
    `;
    
    document.head.appendChild(style);
    currentFont = 'mysterious';
    showNotification(currentLanguage.notifications.mysteriousFont);
    closeAllMenus();
    saveAllSettings(); // Сохраняем настройки
}

function applyElegantFont() {
    removeFont();
    
    const style = document.createElement('style');
    style.id = 'elegant-font';
    style.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');
        
        body, 
        .stats:not(.sbglyphs):not([class*="sbglyphs"]), 
        .modal:not(.sbglyphs):not([class*="sbglyphs"]),
        #player button:not(.sbglyphs):not([class*="sbglyphs"]),
        .donate-btn:not(.sbglyphs):not([class*="sbglyphs"]),
        .inputwrapper:not(.sbglyphs):not([class*="sbglyphs"]),
        .stats input:not(.sbglyphs):not([class*="sbglyphs"]),
        .ecpinput:not(.sbglyphs):not([class*="sbglyphs"]),
        .changelog-new:not(.sbglyphs):not([class*="sbglyphs"]),
        .modal h2:not(.sbglyphs):not([class*="sbglyphs"]),
        .modal .modalbody span:not(.sbglyphs):not([class*="sbglyphs"]),
        .pricechoice span:not(.sbglyphs):not([class*="sbglyphs"]),
        .bottom-left:not(.sbglyphs):not([class*="sbglyphs"]),
        .bottom-left div:not(.sbglyphs):not([class*="sbglyphs"]),
        .bottom-left span:not(.sbglyphs):not([class*="sbglyphs"]),
        .bottom-left p:not(.sbglyphs):not([class*="sbglyphs"]),
        .chat-container:not(.sbglyphs):not([class*="sbglyphs"]),
        .chat-message:not(.sbglyphs):not([class*="sbglyphs"]),
        .system-message:not(.sbglyphs):not([class*="sbglyphs"]),
        .info-panel:not(.sbglyphs):not([class*="sbglyphs"]),
        .status-panel:not(.sbglyphs):not([class*="sbglyphs"]),
        .followtools:not(.sbglyphs):not([class*="sbglyphs"]),
        .followtools a:not(.sbglyphs):not([class*="sbglyphs"]),
        .followtools span:not(.sbglyphs):not([class*="sbglyphs"]),
        .followtools div:not(.sbglyphs):not([class*="sbglyphs"]) {
            font-family: 'Playfair Display', serif !important;
            letter-spacing: 0.3px !important;
        }
        
        .stats span:not(.sbglyphs):not([class*="sbglyphs"]), 
        .modal h2:not(.sbglyphs):not([class*="sbglyphs"]), 
        .changelog-new h3:not(.sbglyphs):not([class*="sbglyphs"]),
        .bottom-left span:not(.sbglyphs):not([class*="sbglyphs"]),
        .bottom-left div:not(.sbglyphs):not([class*="sbglyphs"]),
        .chat-message:not(.sbglyphs):not([class*="sbglyphs"]),
        .system-message:not(.sbglyphs):not([class*="sbglyphs"]),
        .followtools a:not(.sbglyphs):not([class*="sbglyphs"]),
        .followtools span:not(.sbglyphs):not([class*="sbglyphs"]) {
            font-family: 'Playfair Display', serif !important;
            font-weight: 500 !important;
            text-shadow: 
                1px 1px 2px rgba(0, 0, 0, 0.6),
                0 0 4px rgba(192, 192, 192, 0.4) !important;
        }
        
        #player button:not(.sbglyphs):not([class*="sbglyphs"]), 
        #respawn_actions button:not(.sbglyphs):not([class*="sbglyphs"]), 
        .donate-btn:not(.sbglyphs):not([class*="sbglyphs"]) {
            font-family: 'Playfair Display', serif !important;
            font-weight: 600 !important;
            text-shadow: 
                1px 1px 3px rgba(0, 0, 0, 0.7),
                0 0 6px rgba(192, 192, 192, 0.5) !important;
        }
        
        .sbglyphs, [class*="sbglyphs"], [class*="SBGlyphs"],
        .glyph, [class*="glyph"], [class*="Glyph"],
        .icon, [class*="icon"], [class*="Icon"] {
            font-family: inherit !important;
        }
    `;
    
    document.head.appendChild(style);
    currentFont = 'elegant';
    showNotification(currentLanguage.notifications.elegantFont);
    closeAllMenus();
    saveAllSettings(); // Сохраняем настройки
}

function applyMinimalistFont() {
    removeFont();
    
    const style = document.createElement('style');
    style.id = 'minimalist-font';
    style.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
        
        body, 
        .stats:not(.sbglyphs):not([class*="sbglyphs"]), 
        .modal:not(.sbglyphs):not([class*="sbglyphs"]),
        #player button:not(.sbglyphs):not([class*="sbglyphs"]),
        .donate-btn:not(.sbglyphs):not([class*="sbglyphs"]),
        .inputwrapper:not(.sbglyphs):not([class*="sbglyphs"]),
        .stats input:not(.sbglyphs):not([class*="sbglyphs"]),
        .ecpinput:not(.sbglyphs):not([class*="sbglyphs"]),
        .changelog-new:not(.sbglyphs):not([class*="sbglyphs"]),
        .modal h2:not(.sbglyphs):not([class*="sbglyphs"]),
        .modal .modalbody span:not(.sbglyphs):not([class*="sbglyphs"]),
        .pricechoice span:not(.sbglyphs):not([class*="sbglyphs"]),
        .bottom-left:not(.sbglyphs):not([class*="sbglyphs"]),
        .bottom-left div:not(.sbglyphs):not([class*="sbglyphs"]),
        .bottom-left span:not(.sbglyphs):not([class*="sbglyphs"]),
        .bottom-left p:not(.sbglyphs):not([class*="sbglyphs"]),
        .chat-container:not(.sbglyphs):not([class*="sbglyphs"]),
        .chat-message:not(.sbglyphs):not([class*="sbglyphs"]),
        .system-message:not(.sbglyphs):not([class*="sbglyphs"]),
        .info-panel:not(.sbglyphs):not([class*="sbglyphs"]),
        .status-panel:not(.sbglyphs):not([class*="sbglyphs"]),
        .followtools:not(.sbglyphs):not([class*="sbglyphs"]),
        .followtools a:not(.sbglyphs):not([class*="sbglyphs"]),
        .followtools span:not(.sbglyphs):not([class*="sbglyphs"]),
        .followtools div:not(.sbglyphs):not([class*="sbglyphs"]) {
            font-family: 'Inter', sans-serif !important;
            letter-spacing: 0.2px !important;
        }
        
        .stats span:not(.sbglyphs):not([class*="sbglyphs"]), 
        .modal h2:not(.sbglyphs):not([class*="sbglyphs"]), 
        .changelog-new h3:not(.sbglyphs):not([class*="sbglyphs"]),
        .bottom-left span:not(.sbglyphs):not([class*="sbglyphs"]),
        .bottom-left div:not(.sbglyphs):not([class*="sbglyphs"]),
        .chat-message:not(.sbglyphs):not([class*="sbglyphs"]),
        .system-message:not(.sbglyphs):not([class*="sbglyphs"]),
        .followtools a:not(.sbglyphs):not([class*="sbglyphs"]),
        .followtools span:not(.sbglyphs):not([class*="sbglyphs"]) {
            font-family: 'Inter', sans-serif !important;
            font-weight: 500 !important;
            text-shadow: 
                0 1px 2px rgba(0, 0, 0, 0.4) !important;
        }
        
        #player button:not(.sbglyphs):not([class*="sbglyphs"]), 
        #respawn_actions button:not(.sbglyphs):not([class*="sbglyphs"]), 
        .donate-btn:not(.sbglyphs):not([class*="sbglyphs"]) {
            font-family: 'Inter', sans-serif !important;
            font-weight: 600 !important;
            text-shadow: 
                0 1px 3px rgba(0, 0, 0, 0.5) !important;
        }
        
        .sbglyphs, [class*="sbglyphs"], [class*="SBGlyphs"],
        .glyph, [class*="glyph"], [class*="Glyph"],
        .icon, [class*="icon"], [class*="Icon"] {
            font-family: inherit !important;
        }
    `;
    
    document.head.appendChild(style);
    currentFont = 'minimalist';
    showNotification(currentLanguage.notifications.minimalistFont);
    closeAllMenus();
    saveAllSettings(); // Сохраняем настройки
}

function applyRetroFont() {
    removeFont();
    
    const style = document.createElement('style');
    style.id = 'retro-font';
    style.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        
        body, 
        .stats:not(.sbglyphs):not([class*="sbglyphs"]), 
        .modal:not(.sbglyphs):not([class*="sbglyphs"]),
        #player button:not(.sbglyphs):not([class*="sbglyphs"]),
        .donate-btn:not(.sbglyphs):not([class*="sbglyphs"]),
        .inputwrapper:not(.sbglyphs):not([class*="sbglyphs"]),
        .stats input:not(.sbglyphs):not([class*="sbglyphs"]),
        .ecpinput:not(.sbglyphs):not([class*="sbglyphs"]),
        .changelog-new:not(.sbglyphs):not([class*="sbglyphs"]),
        .modal h2:not(.sbglyphs):not([class*="sbglyphs"]),
        .modal .modalbody span:not(.sbglyphs):not([class*="sbglyphs"]),
        .pricechoice span:not(.sbglyphs):not([class*="sbglyphs"]),
        .bottom-left:not(.sbglyphs):not([class*="sbglyphs"]),
        .bottom-left div:not(.sbglyphs):not([class*="sbglyphs"]),
        .bottom-left span:not(.sbglyphs):not([class*="sbglyphs"]),
        .bottom-left p:not(.sbglyphs):not([class*="sbglyphs"]),
        .chat-container:not(.sbglyphs):not([class*="sbglyphs"]),
        .chat-message:not(.sbglyphs):not([class*="sbglyphs"]),
        .system-message:not(.sbglyphs):not([class*="sbglyphs"]),
        .info-panel:not(.sbglyphs):not([class*="sbglyphs"]),
        .status-panel:not(.sbglyphs):not([class*="sbglyphs"]),
        .followtools:not(.sbglyphs):not([class*="sbglyphs"]),
        .followtools a:not(.sbglyphs):not([class*="sbglyphs"]),
        .followtools span:not(.sbglyphs):not([class*="sbglyphs"]),
        .followtools div:not(.sbglyphs):not([class*="sbglyphs"]) {
            font-family: 'Press Start 2P', cursive !important;
            letter-spacing: 0 !important;
            line-height: 1.4 !important;
        }
        
        .stats span:not(.sbglyphs):not([class*="sbglyphs"]), 
        .modal h2:not(.sbglyphs):not([class*="sbglyphs"]), 
        .changelog-new h3:not(.sbglyphs):not([class*="sbglyphs"]),
        .bottom-left span:not(.sbglyphs):not([class*="sbglyphs"]),
        .bottom-left div:not(.sbglyphs):not([class*="sbglyphs"]),
        .chat-message:not(.sbglyphs):not([class*="sbglyphs"]),
        .system-message:not(.sbglyphs):not([class*="sbglyphs"]),
        .followtools a:not(.sbglyphs):not([class*="sbglyphs"]),
        .followtools span:not(.sbglyphs):not([class*="sbglyphs"]) {
            font-family: 'Press Start 2P', cursive !important;
            text-shadow: 
                2px 2px 0px rgba(0, 0, 0, 0.8),
                0 0 4px rgba(255, 215, 0, 0.6) !important;
        }
        
        #player button:not(.sbglyphs):not([class*="sbglyphs"]), 
        #respawn_actions button:not(.sbglyphs):not([class*="sbglyphs"]), 
        .donate-btn:not(.sbglyphs):not([class*="sbglyphs"]) {
            font-family: 'Press Start 2P', cursive !important;
            text-shadow: 
                2px 2px 0px rgba(0, 0, 0, 0.9),
                0 0 6px rgba(255, 215, 0, 0.8) !important;
        }
        
        .stats input:not(.sbglyphs):not([class*="sbglyphs"]), 
        .ecpinput:not(.sbglyphs):not([class*="sbglyphs"]) {
            font-family: 'Press Start 2P', cursive !important;
            font-size: 10px !important;
        }
        
        .sbglyphs, [class*="sbglyphs"], [class*="SBGlyphs"],
        .glyph, [class*="glyph"], [class*="Glyph"],
        .icon, [class*="icon"], [class*="Icon"] {
            font-family: inherit !important;
        }
    `;
    
    document.head.appendChild(style);
    currentFont = 'retro';
    showNotification(currentLanguage.notifications.retroFont);
    closeAllMenus();
    saveAllSettings(); // Сохраняем настройки
}

function removeFont() {
    const fonts = ['cyberpunk-font', 'futuristic-font', 'mysterious-font', 'elegant-font', 'minimalist-font', 'retro-font'];
    fonts.forEach(fontId => {
        const font = document.getElementById(fontId);
        if (font) {
            font.remove();
        }
    });
}

let badgesEnabled = false;

function toggleBadges() {
    badgesEnabled = !badgesEnabled;
    
    if (badgesEnabled) {
        enableBadges();
        showNotification(currentLanguage.notifications.badgesEnabled);
    } else {
        disableBadges();
        showNotification(currentLanguage.notifications.badgesDisabled);
    }
    updateBadgesButton();
}

function enableBadges() {
    // Добавляем новые значки в список доступных бейджей
    (function() {
        // Ищем объект t в глобальной области
        let targetObj = window.t || window.T;
        
        if (!targetObj) {
            // Пробуем найти среди глобальных переменных
            for (let key in window) {
                if (window[key] && window[key].options && window[key].options.badge) {
                    targetObj = window[key];
                    break;
                }
            }
        }
        
        if (targetObj && targetObj.options && targetObj.options.badge) {
            const badges = targetObj.options.badge;
            // Проверяем, не добавлены ли уже наши бейджи
            if (!badges.srcchamp) {
                const badgeEntries = Object.entries(badges);
                const blankIndex = badgeEntries.findIndex(([key]) => key === 'blank');
                
                if (blankIndex !== -1) {
                    const newBadges = {};
                    badgeEntries.forEach(([key, value], index) => {
                        newBadges[key] = value;
                        if (index === blankIndex) {
                            newBadges.srcchamp = "SRC Champ";
                            newBadges.sdcchamp = "SDC Champ";
                            newBadges.developer = "Developer";
                            newBadges.translator = "Translator";
                            newBadges.x27 = "X-27";
                            newBadges.loveship = "Loveship";
                            newBadges.mikr = "5470p3_";
                            newBadges.schk = "Alien";
                            newBadges.vali = "Time";
                        }
                    });
                    targetObj.options.badge = newBadges;
                }
            }
        }
    })();

    // Добавляем обработку новых значков в метод drawIcon
    (function() {
        // Ищем прототип с методом drawIcon
        let prototypeWithDrawIcon = null;
        
        for (let key in window) {
            const obj = window[key];
            if (obj && obj.prototype && obj.prototype.drawIcon) {
                prototypeWithDrawIcon = obj.prototype;
                break;
            }
        }
        
        if (prototypeWithDrawIcon && prototypeWithDrawIcon.drawIcon) {
            // Сохраняем оригинальный метод, если еще не сохранили
            if (!prototypeWithDrawIcon.originalDrawIcon) {
                prototypeWithDrawIcon.originalDrawIcon = prototypeWithDrawIcon.drawIcon;
            }
            
            prototypeWithDrawIcon.drawIcon = function(t, e, i) {
                // Добавляем новые case в существующий switch
                if (this.icon === "srcchamp") {
                    this.icon = "https://starblast.io/ecp/srcchamp.png";
                } else if (this.icon === "sdcchamp") {
                    this.icon = "https://starblast.io/ecp/sdcchamp.png";
                } else if (this.icon === "developer") {
                    this.icon = "https://starblast.io/ecp/dev.png";
                } else if (this.icon === "translator") {
                    this.icon = "https://starblast.io/ecp/translator.png";
                } else if (this.icon === "x27") {
                    this.icon = "https://starblast.io/ecp/x27.png";
                } else if (this.icon === "loveship") {
                    this.icon = "https://starblast.io/ecp/loveship.png";
                } else if (this.icon === "mikr") {
                    this.icon = "https://starblast.io/ecp/mikr.jpg";
                } else if (this.icon === "schk") {
                    this.icon = "https://starblast.io/ecp/schickenman.png";
                } else if (this.icon === "vali") {
                    this.icon = "https://starblast.io/ecp/valiant.jpg";
                }
                
                // Вызываем оригинальный метод
                return prototypeWithDrawIcon.originalDrawIcon.call(this, t, e, i);
            };
        }
    })();
}

function disableBadges() {
    // Восстанавливаем оригинальный метод drawIcon
    (function() {
        let prototypeWithDrawIcon = null;
        
        for (let key in window) {
            const obj = window[key];
            if (obj && obj.prototype && obj.prototype.drawIcon && obj.prototype.originalDrawIcon) {
                prototypeWithDrawIcon = obj.prototype;
                break;
            }
        }
        
        if (prototypeWithDrawIcon && prototypeWithDrawIcon.originalDrawIcon) {
            prototypeWithDrawIcon.drawIcon = prototypeWithDrawIcon.originalDrawIcon;
        }
    })();
}
// ===== СИСТЕМА КАСТОМНЫХ ЦВЕТОВ КРИСТАЛЛОВ =====
function applyCrystalColorsUpdate() {
    function getGemColor1() {
        try {
            return JSON.parse(localStorage.getItem('gemindeed')) || "#ff0000";
        } catch (_) {
            return "#ff0000";
        }
    }
    
    function getGemColor2() {
        try {
            return JSON.parse(localStorage.getItem('gemindeed1') || "#ff8080");
        } catch (_) {
            return "#ff8080";
        }
    }
    
    const color1 = getGemColor1();
    const color2 = getGemColor2();
    
    if (!window.game || !window.game.scene) return;
    
    function updateSceneObjects(scene) {
        scene.children.forEach(child => {
            if (child.type && (child.type === 'Crystal' || child.type.includes('Crystal'))) {
                if (child.material) {
                    child.material.color.set(color1);
                    child.material.specular.set(color2);
                }
            }
            
            if (child.children && child.children.length > 0) {
                updateSceneObjects(child);
            }
        });
    }
    
    updateSceneObjects(window.game.scene);
    saveAllSettings(); // Сохраняем настройки
}

// ===== CHANGELOG ФУНКЦИОНАЛЬНОСТЬ =====
function showChangelog() {
    createChangelogModal();
    closeAllMenus();
}

function createChangelogModal() {
    const existingModal = document.getElementById('changelog-modal');
    if (existingModal) {
        existingModal.remove();
    }

    const existingOverlay = document.querySelector('#changelog-overlay');
    if (existingOverlay) {
        existingOverlay.remove();
    }

    const modal = document.createElement('div');
    modal.id = 'changelog-modal';
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.zIndex = '10002';
    modal.style.background = 'rgba(0, 0, 0, 0.8)';
    modal.style.border = '2px solid rgba(255,255,255,0.3)';
    modal.style.borderRadius = '15px';
    modal.style.boxShadow = '0 0 30px rgba(0,0,0,0.8)';
    modal.style.width = '80%';
    modal.style.maxWidth = '600px';
    modal.style.maxHeight = '80vh';
    modal.style.overflow = 'hidden';
    modal.style.fontFamily = 'Arial, sans-serif';
    modal.style.backdropFilter = 'blur(20px)';

    const header = document.createElement('div');
    header.style.background = 'rgba(255, 255, 255, 0.1)';
    header.style.padding = '15px 20px';
    header.style.borderBottom = '2px solid rgba(255,255,255,0.3)';
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center';
    header.style.borderRadius = '15px 15px 0 0';

    const title = document.createElement('h2');
    title.textContent = currentLanguage.changelog.title;
    title.style.margin = '0';
    title.style.color = '#ffffff';
    title.style.fontSize = '20px';
    title.style.fontWeight = 'bold';
    title.style.textShadow = '0 0 10px rgba(255,255,255,0.5)';

    const closeButton = document.createElement('button');
    closeButton.innerHTML = '×';
    closeButton.style.background = 'transparent';
    closeButton.style.border = 'none';
    closeButton.style.color = '#ffffff';
    closeButton.style.fontSize = '24px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.padding = '0';
    closeButton.style.width = '30px';
    closeButton.style.height = '30px';
    closeButton.style.borderRadius = '50%';
    closeButton.style.display = 'flex';
    closeButton.style.alignItems = 'center';
    closeButton.style.justifyContent = 'center';
    closeButton.style.transition = 'all 0.3s ease';

    closeButton.onmouseover = function() {
        this.style.background = 'rgba(255,255,255,0.2)';
        this.style.transform = 'scale(1.1)';
    };

    closeButton.onmouseout = function() {
        this.style.background = 'transparent';
        this.style.transform = 'scale(1)';
    };

    closeButton.onclick = function() {
        modal.remove();
        if (overlay && overlay.parentNode) {
            overlay.remove();
        }
    };

    header.appendChild(title);
    header.appendChild(closeButton);

    const content = document.createElement('div');
    content.style.padding = '20px';
    content.style.maxHeight = '60vh';
    content.style.overflowY = 'auto';
    content.style.color = '#ffffff';

    content.style.scrollbarWidth = 'thin';
    content.style.scrollbarColor = 'rgba(255,255,255,0.3) rgba(0,0,0,0.5)';

    const scrollStyle = document.createElement('style');
    scrollStyle.textContent = `
        #changelog-modal div::-webkit-scrollbar {
            width: 8px;
        }
        #changelog-modal div::-webkit-scrollbar-track {
            background: rgba(0,0,0,0.5);
            border-radius: 4px;
        }
        #changelog-modal div::-webkit-scrollbar-thumb {
            background: rgba(255,255,255,0.3);
            border-radius: 4px;
        }
        #changelog-modal div::-webkit-scrollbar-thumb:hover {
            background: rgba(255,255,255,0.5);
        }
    `;
    document.head.appendChild(scrollStyle);

    const changelogContent = document.createElement('div');
    changelogContent.id = 'changelog-content';
    changelogContent.style.lineHeight = '1.6';
    changelogContent.innerHTML = currentLanguage.changelog.content;

    content.appendChild(changelogContent);

    modal.appendChild(header);
    modal.appendChild(content);

    const overlay = document.createElement('div');
    overlay.id = 'changelog-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.background = 'rgba(0,0,0,0.7)';
    overlay.style.zIndex = '10001';
    overlay.style.backdropFilter = 'blur(5px)';

    overlay.onclick = function() {
        modal.remove();
        if (overlay.parentNode) {
            overlay.remove();
        }
    };

    document.body.appendChild(overlay);
    document.body.appendChild(modal);

    modal.style.opacity = '0';
    modal.style.transform = 'translate(-50%, -50%) scale(0.8)';
    overlay.style.opacity = '0';

    setTimeout(() => {
        modal.style.transition = 'all 0.3s ease';
        overlay.style.transition = 'opacity 0.3s ease';
        modal.style.opacity = '1';
        modal.style.transform = 'translate(-50%, -50%) scale(1)';
        overlay.style.opacity = '1';
    }, 10);
}

// ===== СИСТЕМА LOWERCASE NAME =====
let lowercaseNameEnabled = false;

function toggleLowercaseName() {
    lowercaseNameEnabled = !lowercaseNameEnabled;
    
    if (lowercaseNameEnabled) {
        enableLowercaseName();
        showNotification(currentLanguage.notifications.lowercaseNameEnabled);
    } else {
        disableLowercaseName();
        showNotification(currentLanguage.notifications.lowercaseNameDisabled);
    }
    updateLowercaseNameButton();
    saveAllSettings(); // Сохраняем настройки
}

function enableLowercaseName() {
    (function() {
        'use strict';
        
        const originalToUpperCase = String.prototype.toUpperCase;
        
        String.prototype.toUpperCase = function() {
            return this.toString();
        };
        
        String.prototype.toLocaleUpperCase = function() {
            return this.toString();
        };
        
        const style = document.createElement('style');
        style.textContent = `
            * {
                text-transform: none !important;
            }
        `;
        document.head.appendChild(style);
        
        console.log('Nuclear toUpperCase disable activated!');
        console.log('Все вызовы .toUpperCase() теперь возвращают оригинальную строку');
        
        setInterval(() => {
            document.querySelectorAll('*').forEach(el => {
                el.style.textTransform = 'none';
            });
        }, 1000);
    })();
}

function disableLowercaseName() {
    (function() {
        if (String.prototype.originalToUpperCase) {
            String.prototype.toUpperCase = String.prototype.originalToUpperCase;
            String.prototype.toLocaleUpperCase = String.prototype.originalToLocaleUpperCase;
        }
        
        const style = document.querySelector('style');
        if (style && style.textContent.includes('text-transform: none')) {
            style.remove();
        }
        
        console.log('Nuclear toUpperCase disable deactivated!');
    })();
}

function updateLowercaseNameButton() {
    if (currentMenu === 'lowercase-name') {
        updateMenu();
    }
}

// ===== ЯЗЫКОВЫЕ НАСТРОЙКИ =====
const languages = {
    ru: {
        mainMenu: {
            language: 'Язык',
            themes: 'Градиентная тема',
            badges: 'Значки',
            fonts: 'Шрифты',
            changelog: 'Список изменений',
            crystalColors: 'Crystal Colors',
            lowercaseName: 'Lowercase Name'
        },
        themes: [
            { text: 'Исходная тема', onClick: resetToOriginal }
        ],
        fonts: [
            { text: 'Стандартный', onClick: applyDefaultFont },
            { text: 'Киберпанк', onClick: applyCyberpunkFont },
            { text: 'Футуристичный', onClick: applyFuturisticFont },
            { text: 'Загадочный', onClick: applyMysteriousFont },
            { text: 'Элегантный', onClick: applyElegantFont },
            { text: 'Минималистичный', onClick: applyMinimalistFont },
            { text: 'Ретро', onClick: applyRetroFont }
        ],
        languageOptions: [
            { code: 'ru', name: 'Русский' },
            { code: 'en', name: 'English' },
            { code: 'tr', name: 'Türkçe' }
        ],
        notifications: {
            customGradient: 'Градиентная тема применена!',
            reset: 'Возврат к исходному стилю!',
            language: 'Язык изменен на Русский',
            badgesEnabled: 'Значки включены!',
            badgesDisabled: 'Значки выключены!',
            defaultFont: 'Стандартный шрифт применен!',
            cyberpunkFont: 'Киберпанк шрифт применен!',
            futuristicFont: 'Футуристичный шрифт применен!',
            mysteriousFont: 'Загадочный шрифт применен!',
            elegantFont: 'Элегантный шрифт применен!',
            minimalistFont: 'Минималистичный шрифт применен!',
            retroFont: 'Ретро шрифт применен!',
            changelog: 'Открыт список изменений',
            crystalColorsUpdated: 'Цвета кристаллов применены!',
            lowercaseNameEnabled: 'Lowercase Name включен! Все имена в нижнем регистре',
            lowercaseNameDisabled: 'Lowercase Name выключен!'
        },
        gradientPicker: {
            title: 'Настройка градиентной темы',
            color1: 'Цвет 1',
            color2: 'Цвет 2',
            preview: 'Предпросмотр',
            apply: 'Применить',
            reset: 'Сброс',
            close: 'Закрыть'
        },
        changelog: {
            title: 'Список изменений',
            content: `
                <div style="text-align: center; margin-bottom: 20px; padding: 15px; background: rgba(255,255,255,0.1); border-radius: 10px;">
                    <h3 style="margin: 0 0 10px 0; color: #fff;">Starblast Function Customizer</h3>
                    <p style="margin: 0; font-size: 14px; opacity: 0.8;">Версия 1.0.2</p>
                </div>
                
                <div style="margin-bottom: 20px;">
                    <h4 style="color: #fff; margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.3); padding-bottom: 5px;">Новые функции</h4>
                    <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 8px; border-left: 4px solid rgba(255,255,255,0.3);">
                        <ul style="margin: 0; padding-left: 20px; font-size: 14px;">
                            <li><strong>Полная переработка UI системы</strong> - кардинально новые стили</li>
                            <li><strong>Интегрированная кнопка настроек</strong> - теперь использует градиентную тему</li>
                            <li><strong>Новое расположение меню</strong> - настройки выводятся над панелью Emote Simulator</li>
                            <li><strong>Упрощенный выбор цветов</strong> - цвет выбирается прямо в меню без отдельных окон</li>
                            <li><strong>Кнопка "Применить"</strong> - мгновенное применение выбранных цветов</li>
                        </ul>
                    </div>
                </div>

                <div style="margin-bottom: 20px;">
                    <h4 style="color: #fff; margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.3); padding-bottom: 5px;">Улучшения интерфейса</h4>
                    <ul style="margin: 0; padding-left: 20px; font-size: 14px;">
                        <li>Кнопка настроек теперь имеет такой же градиент как и остальной интерфейс</li>
                        <li>Меню настроек позиционируется над панелью Emote Simulator</li>
                        <li>Убраны отдельные окна выбора цветов для градиента и кристаллов</li>
                        <li>Цвета теперь выбираются напрямую в меню с мгновенным предпросмотром</li>
                        <li>Добавлена кнопка "Применить" для немедленного применения изменений</li>
                    </ul>
                </div>

                <div style="margin-bottom: 20px;">
                    <h4 style="color: #fff; margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.3); padding-bottom: 5px;">Доступные функции</h4>
                    <ul style="margin: 0; padding-left: 20px; font-size: 14px;">
                        <li>Настраиваемая градиентная тема с упрощенным выбором цветов</li>
                        <li>6 стилей шрифтов с мгновенным применением</li>
                        <li>Система пользовательских значков</li>
                        <li>Система кастомных цветов кристаллов</li>
                        <li>Система Emote Simulator</li>
                        <li>Многоязычная поддержка</li>
                        <li>Анимированные элементы интерфейса</li>
                    </ul>
                </div>

                <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 8px; border-left: 4px solid rgba(255,255,255,0.3); margin-top: 20px;">
                    <p style="margin: 0; font-size: 13px; text-align: center; opacity: 0.8;">
                        Обновленный интерфейс делает настройку быстрее и удобнее!
                    </p>
                </div>
            `
        },
        back: 'Назад',
        badgesToggle: 'Переключатель значков',
        badgesInfoEnabled: 'SRC Champ, SDC Champ, Developer и Halloween значки доступны',
        badgesInfoDisabled: 'Значки отключены',
        currentFont: 'Текущий шрифт',
        crystalColorsInfo: 'Выберите цвета кристаллов',
        lowercaseNameToggle: 'Lowercase Name',
        lowercaseNameInfoEnabled: 'Все имена отображаются в нижнем регистре',
        lowercaseNameInfoDisabled: 'Lowercase Name отключен'
    },
    en: {
        mainMenu: {
            language: 'Language',
            themes: 'Gradient Theme',
            badges: 'Badges',
            fonts: 'Fonts',
            changelog: 'Changelog',
            crystalColors: 'Crystal Colors',
            lowercaseName: 'Lowercase Name'
        },
        themes: [
            { text: 'Original Theme', onClick: resetToOriginal }
        ],
        fonts: [
            { text: 'Default', onClick: applyDefaultFont },
            { text: 'Cyberpunk', onClick: applyCyberpunkFont },
            { text: 'Futuristic', onClick: applyFuturisticFont },
            { text: 'Mysterious', onClick: applyMysteriousFont },
            { text: 'Elegant', onClick: applyElegantFont },
            { text: 'Minimalist', onClick: applyMinimalistFont },
            { text: 'Retro', onClick: applyRetroFont }
        ],
        languageOptions: [
            { code: 'ru', name: 'Russian' },
            { code: 'en', name: 'English' },
            { code: 'tr', name: 'Turkish' }
        ],
        notifications: {
            customGradient: 'Gradient theme applied!',
            reset: 'Return to original style!',
            language: 'Language changed to English',
            badgesEnabled: 'Badges enabled!',
            badgesDisabled: 'Badges disabled!',
            defaultFont: 'Default font applied!',
            cyberpunkFont: 'Cyberpunk font applied!',
            futuristicFont: 'Futuristic font applied!',
            mysteriousFont: 'Mysterious font applied!',
            elegantFont: 'Elegant font applied!',
            minimalistFont: 'Minimalist font applied!',
            retroFont: 'Retro font applied!',
            changelog: 'Changelog opened',
            crystalColorsUpdated: 'Crystal colors applied!',
            lowercaseNameEnabled: 'Lowercase Name enabled! All names in lowercase',
            lowercaseNameDisabled: 'Lowercase Name disabled!'
        },
        gradientPicker: {
            title: 'Gradient Theme Settings',
            color1: 'Color 1',
            color2: 'Color 2',
            preview: 'Preview',
            apply: 'Apply',
            reset: 'Reset',
            close: 'Close'
        },
        changelog: {
            title: 'Changelog',
            content: `
                <div style="text-align: center; margin-bottom: 20px; padding: 15px; background: rgba(255,255,255,0.1); border-radius: 10px;">
                    <h3 style="margin: 0 0 10px 0; color: #fff;">Starblast Function Customizer</h3>
                    <p style="margin: 0; font-size: 14px; opacity: 0.8;">Version 1.0.2</p>
                </div>
                
                <div style="margin-bottom: 20px;">
                    <h4 style="color: #fff; margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.3); padding-bottom: 5px;">New Features</h4>
                    <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 8px; border-left: 4px solid rgba(255,255,255,0.3);">
                        <ul style="margin: 0; padding-left: 20px; font-size: 14px;">
                            <li><strong>Complete UI system overhaul</strong> - radically new styles</li>
                            <li><strong>Integrated settings button</strong> - now uses gradient theme</li>
                            <li><strong>New menu positioning</strong> - settings appear above Emote Simulator panel</li>
                            <li><strong>Simplified color selection</strong> - colors chosen directly in menu</li>
                            <li><strong>"Apply" button</strong> - instant application of selected colors</li>
                        </ul>
                    </div>
                </div>

                <div style="margin-bottom: 20px;">
                    <h4 style="color: #fff; margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.3); padding-bottom: 5px;">Interface Improvements</h4>
                    <ul style="margin: 0; padding-left: 20px; font-size: 14px;">
                        <li>Settings button now has the same gradient as the rest of the interface</li>
                        <li>Settings menu positioned above Emote Simulator panel</li>
                        <li>Removed separate color picker windows for gradient and crystals</li>
                        <li>Colors now selected directly in menu with instant preview</li>
                        <li>Added "Apply" button for immediate changes</li>
                    </ul>
                </div>

                <div style="margin-bottom: 20px;">
                    <h4 style="color: #fff; margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.3); padding-bottom: 5px;">Available Features</h4>
                    <ul style="margin: 0; padding-left: 20px; font-size: 14px;">
                        <li>Customizable gradient theme with simplified color selection</li>
                        <li>6 font styles with instant application</li>
                        <li>Custom badges system</li>
                        <li>Custom crystal colors system</li>
                        <li>Emote Simulator system</li>
                        <li>Multi-language support</li>
                        <li>Animated interface elements</li>
                    </ul>
                </div>

                <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 8px; border-left: 4px solid rgba(255,255,255,0.3); margin-top: 20px;">
                    <p style="margin: 0; font-size: 13px; text-align: center; opacity: 0.8;">
                        Updated interface makes configuration faster and more convenient!
                    </p>
                </div>
            `
        },
        back: 'Back',
        badgesToggle: 'Badges toggle',
        badgesInfoEnabled: 'SRC Champ, SDC Champ, Developer and Halloween badges available',
        badgesInfoDisabled: 'Badges disabled',
        currentFont: 'Current font',
        crystalColorsInfo: 'Choose crystal colors',
        lowercaseNameToggle: 'Lowercase Name',
        lowercaseNameInfoEnabled: 'All names displayed in lowercase',
        lowercaseNameInfoDisabled: 'Lowercase Name disabled'
    },
    tr: {
        mainMenu: {
            language: 'Dil',
            themes: 'Gradyan Teması',
            badges: 'Rozetler',
            fonts: 'Yazı Tipleri',
            changelog: 'Değişiklik Listesi',
            crystalColors: 'Crystal Colors',
            lowercaseName: 'Lowercase Name'
        },
        themes: [
            { text: 'Orijinal Tema', onClick: resetToOriginal }
        ],
        fonts: [
            { text: 'Varsayılan', onClick: applyDefaultFont },
            { text: 'Cyberpunk', onClick: applyCyberpunkFont },
            { text: 'Fütüristik', onClick: applyFuturisticFont },
            { text: 'Gizemli', onClick: applyMysteriousFont },
            { text: 'Zarif', onClick: applyElegantFont },
            { text: 'Minimalist', onClick: applyMinimalistFont },
            { text: 'Retro', onClick: applyRetroFont }
        ],
        languageOptions: [
            { code: 'ru', name: 'Rusça' },
            { code: 'en', name: 'İngilizce' },
            { code: 'tr', name: 'Türkçe' }
        ],
        notifications: {
            customGradient: 'Gradyan teması uygulandı!',
            reset: 'Orijinal stile dönüldü!',
            language: 'Dil Türkçe olarak değiştirildi',
            badgesEnabled: 'Rozetler etkin!',
            badgesDisabled: 'Rozetler devre dışı!',
            defaultFont: 'Varsayılan yazı tipi uygulandı!',
            cyberpunkFont: 'Cyberpunk yazı tipi uygulandı!',
            futuristicFont: 'Fütüristik yazı tipi uygulandı!',
            mysteriousFont: 'Gizemli yazı tipi uygulandı!',
            elegantFont: 'Zarif yazı tipi uygulandı!',
            minimalistFont: 'Minimalist yazı tipi uygulandı!',
            retroFont: 'Retro yazı tipi uygulandı!',
            changelog: 'Değişiklik listesi açıldı',
            crystalColorsUpdated: 'Kristal renkleri uygulandı!',
            lowercaseNameEnabled: 'Lowercase Name etkin! Tüm isimler küçük harfle',
            lowercaseNameDisabled: 'Lowercase Name devre dışı!'
        },
        gradientPicker: {
            title: 'Gradyan Tema Ayarları',
            color1: 'Renk 1',
            color2: 'Renk 2',
            preview: 'Önizleme',
            apply: 'Uygula',
            reset: 'Sıfırla',
            close: 'Kapat'
        },
        changelog: {
            title: 'Değişiklik Listesi',
            content: `
                <div style="text-align: center; margin-bottom: 20px; padding: 15px; background: rgba(255,255,255,0.1); border-radius: 10px;">
                    <h3 style="margin: 0 0 10px 0; color: #fff;">Starblast Function Customizer</h3>
                    <p style="margin: 0; font-size: 14px; opacity: 0.8;">Sürüm 1.0.2</p>
                </div>
                
                <div style="margin-bottom: 20px;">
                    <h4 style="color: #fff; margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.3); padding-bottom: 5px;">Yeni Özellikler</h4>
                    <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 8px; border-left: 4px solid rgba(255,255,255,0.3);">
                        <ul style="margin: 0; padding-left: 20px; font-size: 14px;">
                            <li><strong>Tamamen yenilenen UI sistemi</strong> - radikal yeni stiller</li>
                            <li><strong>Entegre ayar butonu</strong> - artık gradyan temasını kullanıyor</li>
                            <li><strong>Yeni menü konumlandırması</strong> - ayarlar Emote Simulator panelinin üstünde görünüyor</li>
                            <li><strong>Basitleştirilmiş renk seçimi</strong> - renkler doğrudan menüden seçiliyor</li>
                            <li><strong>"Uygula" butonu</strong> - seçilen renklerin anında uygulanması</li>
                        </ul>
                    </div>
                </div>

                <div style="margin-bottom: 20px;">
                    <h4 style="color: #fff; margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.3); padding-bottom: 5px;">Arayüz İyileştirmeleri</h4>
                    <ul style="margin: 0; padding-left: 20px; font-size: 14px;">
                        <li>Ayar butonu artık arayüzün geri kalanıyla aynı gradyana sahip</li>
                        <li>Ayar menüsü Emote Simulator panelinin üstünde konumlandırıldı</li>
                        <li>Gradyan ve kristaller için ayrı renk seçici pencereleri kaldırıldı</li>
                        <li>Renkler artık anında önizlemeyle doğrudan menüden seçiliyor</li>
                        <li>Anında değişiklikler için "Uygula" butonu eklendi</li>
                    </ul>
                </div>

                <div style="margin-bottom: 20px;">
                    <h4 style="color: #fff; margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.3); padding-bottom: 5px;">Mevcut Özellikler</h4>
                    <ul style="margin: 0; padding-left: 20px; font-size: 14px;">
                        <li>Basitleştirilmiş renk seçimi ile özelleştirilebilir gradyan teması</li>
                        <li>Anında uygulama ile 6 yazı tipi stili</li>
                        <li>Özel rozet sistemi</li>
                        <li>Özel kristal renkleri sistemi</li>
                        <li>Emote Simulator sistemi</li>
                        <li>Çok dilli destek</li>
                        <li>Animasyonlu arayüz öğeleri</li>
                    </ul>
                </div>

                <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 8px; border-left: 4px solid rgba(255,255,255,0.3); margin-top: 20px;">
                    <p style="margin: 0; font-size: 13px; text-align: center; opacity: 0.8;">
                        Yenilenen arayüz yapılandırmayı daha hızlı ve kullanışlı hale getirir!
                    </p>
                </div>
            `
        },
        back: 'Geri',
        badgesToggle: 'Rozet anahtarı',
        badgesInfoEnabled: 'SRC Champ, SDC Champ, Developer ve Halloween rozetleri mevcut',
        badgesInfoDisabled: 'Rozetler devre dışı',
        currentFont: 'Mevcut yazı tipi',
        crystalColorsInfo: 'Kristal renklerini seçin',
        lowercaseNameToggle: 'Lowercase Name',
        lowercaseNameInfoEnabled: 'Tüm isimler küçük harfle görüntüleniyor',
        lowercaseNameInfoDisabled: 'Lowercase Name devre dışı'
    }
};

let currentLanguage = languages.ru;
let currentMenu = 'main';

function changeLanguage(lang) {
    currentLanguage = languages[lang];
    showNotification(currentLanguage.notifications.language);
    updateMenu();
    saveAllSettings(); // Сохраняем настройки
}

function showNotification(message) {
    const oldNotification = document.getElementById('theme-notification');
    if (oldNotification) {
        oldNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.id = 'theme-notification';
    notification.textContent = message;
    notification.style.position = 'fixed';
    notification.style.top = '60px';
    notification.style.right = '90px';
    notification.style.background = 'rgba(0, 0, 0, 0.8)';
    notification.style.color = 'white';
    notification.style.padding = '8px 12px';
    notification.style.borderRadius = '10px';
    notification.style.zIndex = '10001';
    notification.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
    notification.style.fontFamily = 'Arial, sans-serif';
    notification.style.fontSize = '11px';
    notification.style.fontWeight = 'bold';
    notification.style.backdropFilter = 'blur(20px)';
    notification.style.border = '1px solid rgba(255,255,255,0.3)';
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 2000);
}

function updateMenu() {
    const menu = document.getElementById('settings-menu');
    if (!menu) return;
    
    menu.innerHTML = '';
    
    if (currentMenu === 'main') {
        createMainMenu(menu);
    } else if (currentMenu === 'language') {
        createLanguageMenu(menu);
    } else if (currentMenu === 'themes') {
        createThemesMenu(menu);
    } else if (currentMenu === 'badges') {
        createBadgesMenu(menu);
    } else if (currentMenu === 'fonts') {
        createFontsMenu(menu);
    } else if (currentMenu === 'crystal-colors') {
        createCrystalColorsMenu(menu);
    } else if (currentMenu === 'lowercase-name') {
        createLowercaseNameMenu(menu);
    }
}

function createMainMenu(menu) {
    const languageButton = createMenuButton(currentLanguage.mainMenu.language, (event) => {
        event.stopPropagation();
        currentMenu = 'language';
        updateMenu();
    });
    menu.appendChild(languageButton);
    
    const themesButton = createMenuButton(currentLanguage.mainMenu.themes, (event) => {
        event.stopPropagation();
        currentMenu = 'themes';
        updateMenu();
    });
    menu.appendChild(themesButton);
    
    const badgesButton = createMenuButton(currentLanguage.mainMenu.badges, (event) => {
        event.stopPropagation();
        currentMenu = 'badges';
        updateMenu();
    });
    menu.appendChild(badgesButton);
    
    const fontsButton = createMenuButton(currentLanguage.mainMenu.fonts, (event) => {
        event.stopPropagation();
        currentMenu = 'fonts';
        updateMenu();
    });
    menu.appendChild(fontsButton);
    
    const crystalColorsButton = createMenuButton(currentLanguage.mainMenu.crystalColors, (event) => {
        event.stopPropagation();
        currentMenu = 'crystal-colors';
        updateMenu();
    });
    menu.appendChild(crystalColorsButton);
    
    const lowercaseNameButton = createMenuButton(currentLanguage.mainMenu.lowercaseName, (event) => {
        event.stopPropagation();
        currentMenu = 'lowercase-name';
        updateMenu();
    });
    menu.appendChild(lowercaseNameButton);
    
    const changelogButton = createMenuButton(currentLanguage.mainMenu.changelog, (event) => {
        event.stopPropagation();
        showChangelog();
    });
    menu.appendChild(changelogButton);
}

function createLanguageMenu(menu) {
    const backButton = createMenuButton(currentLanguage.back, (event) => {
        event.stopPropagation();
        currentMenu = 'main';
        updateMenu();
    });
    menu.appendChild(backButton);
    
    menu.appendChild(createSeparator());
    
    currentLanguage.languageOptions.forEach(lang => {
        const langButton = createMenuButton(lang.name, (event) => {
            event.stopPropagation();
            changeLanguage(lang.code);
        });
        menu.appendChild(langButton);
    });
}

function createThemesMenu(menu) {
    const backButton = createMenuButton(currentLanguage.back, (event) => {
        event.stopPropagation();
        currentMenu = 'main';
        updateMenu();
    });
    menu.appendChild(backButton);
    
    menu.appendChild(createSeparator());
    
    const color1Container = document.createElement('div');
    color1Container.style.display = 'flex';
    color1Container.style.alignItems = 'center';
    color1Container.style.justifyContent = 'space-between';
    color1Container.style.marginBottom = '8px';
    
    const color1Label = document.createElement('span');
    color1Label.textContent = 'Цвет 1:';
    color1Label.style.color = '#ffffff';
    color1Label.style.fontSize = '12px';
    color1Label.style.fontWeight = 'bold';
    color1Label.style.textShadow = '0 0 5px rgba(255,255,255,0.8)';
    
    const color1Input = document.createElement('input');
    color1Input.type = 'color';
    color1Input.value = customGradientColors.color1;
    color1Input.style.width = '30px';
    color1Input.style.height = '30px';
    color1Input.style.cursor = 'pointer';
    color1Input.style.border = 'none';
    color1Input.style.borderRadius = '6px';
    
    color1Container.appendChild(color1Label);
    color1Container.appendChild(color1Input);
    menu.appendChild(color1Container);
    
    const color2Container = document.createElement('div');
    color2Container.style.display = 'flex';
    color2Container.style.alignItems = 'center';
    color2Container.style.justifyContent = 'space-between';
    color2Container.style.marginBottom = '8px';
    
    const color2Label = document.createElement('span');
    color2Label.textContent = 'Цвет 2:';
    color2Label.style.color = '#ffffff';
    color2Label.style.fontSize = '12px';
    color2Label.style.fontWeight = 'bold';
    color2Label.style.textShadow = '0 0 5px rgba(255,255,255,0.8)';
    
    const color2Input = document.createElement('input');
    color2Input.type = 'color';
    color2Input.value = customGradientColors.color2;
    color2Input.style.width = '30px';
    color2Input.style.height = '30px';
    color2Input.style.cursor = 'pointer';
    color2Input.style.border = 'none';
    color2Input.style.borderRadius = '6px';
    
    color2Container.appendChild(color2Label);
    color2Container.appendChild(color2Input);
    menu.appendChild(color2Container);
    
    const applyButton = createMenuButton('Применить', (event) => {
        event.stopPropagation();
        customGradientColors.color1 = color1Input.value;
        customGradientColors.color2 = color2Input.value;
        localStorage.setItem('gradientColor1', color1Input.value);
        localStorage.setItem('gradientColor2', color2Input.value);
        applyCustomGradientTheme();
    });
    menu.appendChild(applyButton);
    
    menu.appendChild(createSeparator());
    
    currentLanguage.themes.forEach(theme => {
        const themeButton = createMenuButton(theme.text, (event) => {
            event.stopPropagation();
            theme.onClick();
        });
        menu.appendChild(themeButton);
    });
}

function createFontsMenu(menu) {
    const backButton = createMenuButton(currentLanguage.back, (event) => {
        event.stopPropagation();
        currentMenu = 'main';
        updateMenu();
    });
    menu.appendChild(backButton);
    
    menu.appendChild(createSeparator());
    
    const fontInfo = document.createElement('div');
    fontInfo.style.color = '#ffffff';
    fontInfo.style.fontFamily = 'Arial, sans-serif';
    fontInfo.style.fontSize = '10px';
    fontInfo.style.marginBottom = '5px';
    fontInfo.style.fontWeight = 'bold';
    fontInfo.style.textShadow = '0 0 5px rgba(255,255,255,0.8)';
    fontInfo.textContent = `${currentLanguage.currentFont}: ${getCurrentFontName()}`;
    menu.appendChild(fontInfo);
    
    currentLanguage.fonts.forEach(font => {
        const fontButton = createMenuButton(font.text, (event) => {
            event.stopPropagation();
            font.onClick();
        });
        menu.appendChild(fontButton);
    });
}

function getCurrentFontName() {
    switch(currentFont) {
        case 'default': return currentLanguage.fonts[0].text;
        case 'cyberpunk': return currentLanguage.fonts[1].text;
        case 'futuristic': return currentLanguage.fonts[2].text;
        case 'mysterious': return currentLanguage.fonts[3].text;
        case 'elegant': return currentLanguage.fonts[4].text;
        case 'minimalist': return currentLanguage.fonts[5].text;
        case 'retro': return currentLanguage.fonts[6].text;
        default: return currentLanguage.fonts[0].text;
    }
}

function createBadgesMenu(menu) {
    const backButton = createMenuButton(currentLanguage.back, (event) => {
        event.stopPropagation();
        currentMenu = 'main';
        updateMenu();
    });
    menu.appendChild(backButton);
    
    menu.appendChild(createSeparator());
    
    const toggleContainer = document.createElement('div');
    toggleContainer.style.display = 'flex';
    toggleContainer.style.alignItems = 'center';
    toggleContainer.style.justifyContent = 'space-between';
    toggleContainer.style.marginBottom = '10px';
    
    const toggleLabel = document.createElement('span');
    toggleLabel.textContent = currentLanguage.badgesToggle;
    toggleLabel.style.color = '#ffffff';
    toggleLabel.style.fontFamily = 'Arial, sans-serif';
    toggleLabel.style.fontSize = '12px';
    toggleLabel.style.fontWeight = 'bold';
    toggleLabel.style.textShadow = '0 0 5px rgba(255,255,255,0.8)';
    
    const toggleSwitch = document.createElement('div');
    toggleSwitch.style.width = '50px';
    toggleSwitch.style.height = '24px';
    toggleSwitch.style.background = badgesEnabled ? 'rgba(76, 175, 80, 0.8)' : 'rgba(255,255,255,0.2)';
    toggleSwitch.style.borderRadius = '12px';
    toggleSwitch.style.position = 'relative';
    toggleSwitch.style.cursor = 'pointer';
    toggleSwitch.style.transition = 'all 0.3s ease';
    toggleSwitch.style.border = '2px solid rgba(255,255,255,0.3)';
    
    const toggleSlider = document.createElement('div');
    toggleSlider.style.width = '20px';
    toggleSlider.style.height = '20px';
    toggleSlider.style.background = 'white';
    toggleSlider.style.borderRadius = '50%';
    toggleSlider.style.position = 'absolute';
    toggleSlider.style.top = '2px';
    toggleSlider.style.left = badgesEnabled ? '26px' : '2px';
    toggleSlider.style.transition = 'all 0.3s ease';
    
    toggleSwitch.appendChild(toggleSlider);
    
    toggleSwitch.onclick = function(event) {
        event.stopPropagation();
        toggleBadges();
    };
    
    toggleContainer.appendChild(toggleLabel);
    toggleContainer.appendChild(toggleSwitch);
    menu.appendChild(toggleContainer);
    
    const badgesInfo = document.createElement('div');
    badgesInfo.style.color = '#ffffff';
    badgesInfo.style.fontFamily = 'Arial, sans-serif';
    badgesInfo.style.fontSize = '10px';
    badgesInfo.style.marginTop = '5px';
    badgesInfo.style.fontWeight = 'bold';
    badgesInfo.style.textShadow = '0 0 5px rgba(255,255,255,0.8)';
    badgesInfo.textContent = badgesEnabled ? 
        currentLanguage.badgesInfoEnabled : 
        currentLanguage.badgesInfoDisabled;
    menu.appendChild(badgesInfo);
}

function updateBadgesButton() {
    if (currentMenu === 'badges') {
        updateMenu();
    }
}

function createCrystalColorsMenu(menu) {
    const backButton = createMenuButton(currentLanguage.back, (event) => {
        event.stopPropagation();
        currentMenu = 'main';
        updateMenu();
    });
    menu.appendChild(backButton);
    
    menu.appendChild(createSeparator());
    
    const crystalColorsInfo = document.createElement('div');
    crystalColorsInfo.style.color = '#ffffff';
    crystalColorsInfo.style.fontFamily = 'Arial, sans-serif';
    crystalColorsInfo.style.fontSize = '10px';
    crystalColorsInfo.style.marginBottom = '10px';
    crystalColorsInfo.style.lineHeight = '1.4';
    crystalColorsInfo.style.fontWeight = 'bold';
    crystalColorsInfo.style.textShadow = '0 0 5px rgba(255,255,255,0.8)';
    crystalColorsInfo.textContent = currentLanguage.crystalColorsInfo;
    menu.appendChild(crystalColorsInfo);
    
    const color1Container = document.createElement('div');
    color1Container.style.display = 'flex';
    color1Container.style.alignItems = 'center';
    color1Container.style.justifyContent = 'space-between';
    color1Container.style.marginBottom = '8px';
    
    const color1Label = document.createElement('span');
    color1Label.textContent = 'Основной цвет:';
    color1Label.style.color = '#ffffff';
    color1Label.style.fontSize = '12px';
    color1Label.style.fontWeight = 'bold';
    color1Label.style.textShadow = '0 0 5px rgba(255,255,255,0.8)';
    
    const color1Input = document.createElement('input');
    color1Input.type = 'color';
    color1Input.value = JSON.parse(localStorage.getItem('gemindeed') || '"#ff0000"');
    color1Input.style.width = '30px';
    color1Input.style.height = '30px';
    color1Input.style.cursor = 'pointer';
    color1Input.style.border = 'none';
    color1Input.style.borderRadius = '6px';
    
    color1Container.appendChild(color1Label);
    color1Container.appendChild(color1Input);
    menu.appendChild(color1Container);
    
    const color2Container = document.createElement('div');
    color2Container.style.display = 'flex';
    color2Container.style.alignItems = 'center';
    color2Container.style.justifyContent = 'space-between';
    color2Container.style.marginBottom = '8px';
    
    const color2Label = document.createElement('span');
    color2Label.textContent = 'Цвет бликов:';
    color2Label.style.color = '#ffffff';
    color2Label.style.fontSize = '12px';
    color2Label.style.fontWeight = 'bold';
    color2Label.style.textShadow = '0 0 5px rgba(255,255,255,0.8)';
    
    const color2Input = document.createElement('input');
    color2Input.type = 'color';
    color2Input.value = JSON.parse(localStorage.getItem('gemindeed1') || '"#ff8080"');
    color2Input.style.width = '30px';
    color2Input.style.height = '30px';
    color2Input.style.cursor = 'pointer';
    color2Input.style.border = 'none';
    color2Input.style.borderRadius = '6px';
    
    color2Container.appendChild(color2Label);
    color2Container.appendChild(color2Input);
    menu.appendChild(color2Container);
    
    const applyButton = createMenuButton('Применить', (event) => {
        event.stopPropagation();
        localStorage.setItem('gemindeed', JSON.stringify(color1Input.value));
        localStorage.setItem('gemindeed1', JSON.stringify(color2Input.value));
        applyCrystalColorsUpdate();
        showNotification(currentLanguage.notifications.crystalColorsUpdated);
    });
    menu.appendChild(applyButton);
}

function createLowercaseNameMenu(menu) {
    const backButton = createMenuButton(currentLanguage.back, (event) => {
        event.stopPropagation();
        currentMenu = 'main';
        updateMenu();
    });
    menu.appendChild(backButton);
    
    menu.appendChild(createSeparator());
    
    const toggleContainer = document.createElement('div');
    toggleContainer.style.display = 'flex';
    toggleContainer.style.alignItems = 'center';
    toggleContainer.style.justifyContent = 'space-between';
    toggleContainer.style.marginBottom = '10px';
    
    const toggleLabel = document.createElement('span');
    toggleLabel.textContent = currentLanguage.lowercaseNameToggle;
    toggleLabel.style.color = '#ffffff';
    toggleLabel.style.fontFamily = 'Arial, sans-serif';
    toggleLabel.style.fontSize = '12px';
    toggleLabel.style.fontWeight = 'bold';
    toggleLabel.style.textShadow = '0 0 5px rgba(255,255,255,0.8)';
    
    const toggleSwitch = document.createElement('div');
    toggleSwitch.style.width = '50px';
    toggleSwitch.style.height = '24px';
    toggleSwitch.style.background = lowercaseNameEnabled ? 'rgba(76, 175, 80, 0.8)' : 'rgba(255,255,255,0.2)';
    toggleSwitch.style.borderRadius = '12px';
    toggleSwitch.style.position = 'relative';
    toggleSwitch.style.cursor = 'pointer';
    toggleSwitch.style.transition = 'all 0.3s ease';
    toggleSwitch.style.border = '2px solid rgba(255,255,255,0.3)';
    
    const toggleSlider = document.createElement('div');
    toggleSlider.style.width = '20px';
    toggleSlider.style.height = '20px';
    toggleSlider.style.background = 'white';
    toggleSlider.style.borderRadius = '50%';
    toggleSlider.style.position = 'absolute';
    toggleSlider.style.top = '2px';
    toggleSlider.style.left = lowercaseNameEnabled ? '26px' : '2px';
    toggleSlider.style.transition = 'all 0.3s ease';
    
    toggleSwitch.appendChild(toggleSlider);
    
    toggleSwitch.onclick = function(event) {
        event.stopPropagation();
        toggleLowercaseName();
    };
    
    toggleContainer.appendChild(toggleLabel);
    toggleContainer.appendChild(toggleSwitch);
    menu.appendChild(toggleContainer);
    
    const lowercaseNameInfo = document.createElement('div');
    lowercaseNameInfo.style.color = '#ffffff';
    lowercaseNameInfo.style.fontFamily = 'Arial, sans-serif';
    lowercaseNameInfo.style.fontSize = '10px';
    lowercaseNameInfo.style.marginTop = '5px';
    lowercaseNameInfo.style.lineHeight = '1.4';
    lowercaseNameInfo.style.fontWeight = 'bold';
    lowercaseNameInfo.style.textShadow = '0 0 5px rgba(255,255,255,0.8)';
    lowercaseNameInfo.textContent = lowercaseNameEnabled ? 
        currentLanguage.lowercaseNameInfoEnabled : 
        currentLanguage.lowercaseNameInfoDisabled;
    menu.appendChild(lowercaseNameInfo);
}

function createMenuButton(text, onClick) {
    const button = document.createElement('button');
    button.textContent = text;
    button.style.padding = '8px 12px';
    button.style.color = '#ffffff';
    button.style.borderRadius = '8px';
    button.style.cursor = 'pointer';
    button.style.fontFamily = 'Arial, sans-serif';
    button.style.fontSize = '12px';
    button.style.fontWeight = 'bold';
    button.style.transition = 'all 0.2s ease';
    button.style.width = '100%';
    button.style.textAlign = 'left';
    button.style.textShadow = '0 0 5px rgba(255,255,255,0.8)';
    button.style.background = 'rgba(255, 255, 255, 0.1)';
    button.style.backdropFilter = 'blur(10px)';
    button.style.border = '1px solid rgba(255,255,255,0.2)';
    
    button.onmouseover = function() {
        this.style.transform = 'scale(1.02)';
        this.style.background = 'rgba(255, 255, 255, 0.2)';
    };
    
    button.onmouseout = function() {
        this.style.transform = 'scale(1)';
        this.style.background = 'rgba(255, 255, 255, 0.1)';
    };
    
    button.onclick = onClick;
    
    return button;
}

function createSeparator() {
    const separator = document.createElement('div');
    separator.style.height = '1px';
    separator.style.background = 'rgba(255,255,255,0.3)';
    separator.style.margin = '5px 0';
    separator.style.borderRadius = '1px';
    return separator;
}

function toggleSettingsMenu() {
    const menu = document.getElementById('settings-menu');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
        currentMenu = 'main';
    } else {
        menu.style.display = 'flex';
        updateMenu();
    }
}

function closeAllMenus() {
    const menu = document.getElementById('settings-menu');
    if (menu) {
        menu.style.display = 'none';
    }
    currentMenu = 'main';
}

document.addEventListener('click', function(event) {
    const settingsBtn = document.getElementById('settings-btn');
    const settingsMenu = document.getElementById('settings-menu');
    
    if (settingsMenu && settingsBtn && settingsMenu.style.display === 'flex') {
        if (!settingsBtn.contains(event.target) && !settingsMenu.contains(event.target)) {
            closeAllMenus();
        }
    }
});

document.addEventListener('click', function(event) {
    const settingsMenu = document.getElementById('settings-menu');
    if (settingsMenu && settingsMenu.contains(event.target)) {
        event.stopPropagation();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        createSettingsButton();
        createSettingsMenu();
        loadAllSettings(); // Загружаем настройки при запуске
        applyCustomGradientTheme();
    }, 1000);
});

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createSettingsButton);
    document.addEventListener('DOMContentLoaded', createSettingsMenu);
    document.addEventListener('DOMContentLoaded', loadAllSettings);
    document.addEventListener('DOMContentLoaded', applyCustomGradientTheme);
} else {
    createSettingsButton();
    createSettingsMenu();
    loadAllSettings();
    applyCustomGradientTheme();
}

window.applyCustomGradientTheme = applyCustomGradientTheme;
window.applyDefaultFont = applyDefaultFont;
window.applyCyberpunkFont = applyCyberpunkFont;
window.applyFuturisticFont = applyFuturisticFont;
window.applyMysteriousFont = applyMysteriousFont;
window.applyElegantFont = applyElegantFont;
window.applyMinimalistFont = applyMinimalistFont;
window.applyRetroFont = applyRetroFont;
window.resetToOriginal = resetToOriginal;
window.changeLanguage = changeLanguage;
window.toggleBadges = toggleBadges;
window.showChangelog = showChangelog;
window.applyCrystalColorsUpdate = applyCrystalColorsUpdate;
window.toggleLowercaseName = toggleLowercaseName;
window.enableLowercaseName = enableLowercaseName;
window.disableLowercaseName = disableLowercaseName;
window.saveAllSettings = saveAllSettings;
window.loadAllSettings = loadAllSettings;