// ===== НАСТРАИВАЕМАЯ ГРАДИЕНТНАЯ ТЕМА =====
let customGradientColors = {
    color1: '#ff0000',
    color2: '#ff4444'
};

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
        }
        
        .tutorial, .desktop, .mobile, .joystick-container,
        .mobile-fire, .keyboard, .mouse, .mouse-container,
        .keyboard .top, .keyboard .bottom,
        [class^="mobile-"], [class^="kb-"],
        #home, #home_mobile {
            border: none !important;
            box-shadow: none !important;
            background: transparent !important;
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
            color: white !important;
            font-weight: bold !important;
            text-shadow: 0 0 5px rgba(0,0,0,0.8) !important;
            border: 2px solid ${customGradientColors.color2} !important;
            box-shadow: 0 0 20px ${customGradientColors.color1} !important;
        }
        
        .loaderprogress, .progress {
            background: linear-gradient(90deg, ${customGradientColors.color1}, ${customGradientColors.color2}, ${customGradientColors.color1}) !important;
            background-size: 400% 100% !important;
            animation: custom-progress 1.5s linear infinite !important;
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
}

function openGradientColorPicker() {
    createGradientColorPicker();
    closeAllMenus();
}

function createGradientColorPicker() {
    const picker = document.createElement('div');
    picker.id = 'gradient-color-picker';
    picker.innerHTML = `
        <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: rgba(0,0,0,0.9); padding: 20px; border-radius: 10px; z-index: 10002; border: 2px solid #444; font-family: Arial; color: white; min-width: 300px; backdrop-filter: blur(5px); box-shadow: 0 0 30px rgba(0,0,0,0.8);">
            <div style="font-weight: bold; margin-bottom: 15px; font-size: 16px; text-align: center; color: #4fc3f7;">${currentLanguage.gradientPicker.title}</div>
            
            <div style="margin-bottom: 15px; display: flex; align-items: center; justify-content: space-between;">
                <span style="font-size: 14px; color: #ccc;">${currentLanguage.gradientPicker.color1}:</span>
                <div style="display: flex; align-items: center;">
                    <input type="color" id="gradient-color-1" style="width: 50px; height: 30px; margin-right: 10px; cursor: pointer; border: none; border-radius: 4px;">
                    <span id="gradient-color-1-value" style="font-size: 12px; font-family: monospace; min-width: 80px;"></span>
                </div>
            </div>
            
            <div style="margin-bottom: 15px; display: flex; align-items: center; justify-content: space-between;">
                <span style="font-size: 14px; color: #ccc;">${currentLanguage.gradientPicker.color2}:</span>
                <div style="display: flex; align-items: center;">
                    <input type="color" id="gradient-color-2" style="width: 50px; height: 30px; margin-right: 10px; cursor: pointer; border: none; border-radius: 4px;">
                    <span id="gradient-color-2-value" style="font-size: 12px; font-family: monospace; min-width: 80px;"></span>
                </div>
            </div>

            <div style="margin-bottom: 15px; padding: 10px; background: rgba(255,255,255,0.1); border-radius: 5px; text-align: center;">
                <div style="font-size: 12px; color: #ccc; margin-bottom: 5px;">${currentLanguage.gradientPicker.preview}</div>
                <div id="gradient-preview" style="width: 100%; height: 40px; border-radius: 5px; border: 1px solid #666;"></div>
            </div>
            
            <div style="display: flex; gap: 10px; margin-top: 15px;">
                <button id="gradient-apply" style="flex: 1; background: #4CAF50; color: white; border: none; padding: 8px; border-radius: 5px; cursor: pointer; font-size: 12px;">${currentLanguage.gradientPicker.apply}</button>
                <button id="gradient-reset" style="flex: 1; background: #e74c3c; color: white; border: none; padding: 8px; border-radius: 5px; cursor: pointer; font-size: 12px;">${currentLanguage.gradientPicker.reset}</button>
                <button id="gradient-close" style="flex: 1; background: #34495e; color: white; border: none; padding: 8px; border-radius: 5px; cursor: pointer; font-size: 12px;">${currentLanguage.gradientPicker.close}</button>
            </div>
        </div>
        <div id="gradient-color-overlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); z-index: 10001; backdrop-filter: blur(3px);"></div>
    `;
    
    document.body.appendChild(picker);
    initializeGradientPickerValues();
    setupGradientEventListeners();
}

function initializeGradientPickerValues() {
    // Загружаем сохраненные цвета или используем значения по умолчанию
    const savedColor1 = localStorage.getItem('gradientColor1') || '#ff0000';
    const savedColor2 = localStorage.getItem('gradientColor2') || '#ff4444';
    
    customGradientColors.color1 = savedColor1;
    customGradientColors.color2 = savedColor2;
    
    document.getElementById('gradient-color-1').value = savedColor1;
    document.getElementById('gradient-color-2').value = savedColor2;
    document.getElementById('gradient-color-1-value').textContent = savedColor1;
    document.getElementById('gradient-color-2-value').textContent = savedColor2;
    
    updateGradientPreview();
}

function setupGradientEventListeners() {
    // Цвет 1
    document.getElementById('gradient-color-1').addEventListener('input', function(e) {
        const color = e.target.value;
        customGradientColors.color1 = color;
        document.getElementById('gradient-color-1-value').textContent = color;
        localStorage.setItem('gradientColor1', color);
        updateGradientPreview();
    });
    
    // Цвет 2
    document.getElementById('gradient-color-2').addEventListener('input', function(e) {
        const color = e.target.value;
        customGradientColors.color2 = color;
        document.getElementById('gradient-color-2-value').textContent = color;
        localStorage.setItem('gradientColor2', color);
        updateGradientPreview();
    });
    
    // Применить
    document.getElementById('gradient-apply').addEventListener('click', function() {
        applyCustomGradientTheme();
        const picker = document.getElementById('gradient-color-picker');
        if (picker) {
            picker.remove();
        }
    });
    
    // Сброс
    document.getElementById('gradient-reset').addEventListener('click', function() {
        const defaultColor1 = "#ff0000";
        const defaultColor2 = "#ff4444";
        
        customGradientColors.color1 = defaultColor1;
        customGradientColors.color2 = defaultColor2;
        
        localStorage.setItem('gradientColor1', defaultColor1);
        localStorage.setItem('gradientColor2', defaultColor2);
        
        document.getElementById('gradient-color-1').value = defaultColor1;
        document.getElementById('gradient-color-2').value = defaultColor2;
        document.getElementById('gradient-color-1-value').textContent = defaultColor1;
        document.getElementById('gradient-color-2-value').textContent = defaultColor2;
        
        updateGradientPreview();
        applyCustomGradientTheme();
    });
    
    // Закрыть
    document.getElementById('gradient-close').addEventListener('click', function() {
        const picker = document.getElementById('gradient-color-picker');
        if (picker) {
            picker.remove();
        }
    });
    
    // Закрытие по клику на оверлей
    document.getElementById('gradient-color-overlay').addEventListener('click', function() {
        const picker = document.getElementById('gradient-color-picker');
        if (picker) {
            picker.remove();
        }
    });
}

function updateGradientPreview() {
    const preview = document.getElementById('gradient-preview');
    if (preview) {
        preview.style.background = `linear-gradient(45deg, ${customGradientColors.color1}, ${customGradientColors.color2})`;
    }
}

// ===== ОСНОВНЫЕ ФУНКЦИИ ТЕМ =====
function resetToOriginal() {
    removeAllThemes();
    removeFont();
    currentFont = 'default';
    showNotification(currentLanguage.notifications.reset);
    closeAllMenus();
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
}

function applyHalloweenFont() {
    removeFont();
    
    const style = document.createElement('style');
    style.id = 'halloween-font';
    style.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Creepster&display=swap');
        
        /* Применяем шрифт только к текстовым элементам, исключая SBGlyphs */
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
        /* Правые нижние контейнеры */
        .bottom-left:not(.sbglyphs):not([class*="sbglyphs"]),
        .bottom-left div:not(.sbglyphs):not([class*="sbglyphs"]),
        .bottom-left span:not(.sbglyphs):not([class*="sbglyphs"]),
        .bottom-left p:not(.sbglyphs):not([class*="sbglyphs"]),
        .chat-container:not(.sbglyphs):not([class*="sbglyphs"]),
        .chat-message:not(.sbglyphs):not([class*="sbglyphs"]),
        .system-message:not(.sbglyphs):not([class*="sbglyphs"]),
        .info-panel:not(.sbglyphs):not([class*="sbglyphs"]),
        .status-panel:not(.sbglyphs):not([class*="sbglyphs"]),
        /* Followtools элементы */
        .followtools:not(.sbglyphs):not([class*="sbglyphs"]),
        .followtools a:not(.sbglyphs):not([class*="sbglyphs"]),
        .followtools span:not(.sbglyphs):not([class*="sbglyphs"]),
        .followtools div:not(.sbglyphs):not([class*="sbglyphs"]) {
            font-family: 'Creepster', cursive !important;
            letter-spacing: 1px !important;
        }
        
        /* Специфичные стили для элементов */
        .stats span:not(.sbglyphs):not([class*="sbglyphs"]), 
        .modal h2:not(.sbglyphs):not([class*="sbglyphs"]), 
        .changelog-new h3:not(.sbglyphs):not([class*="sbglyphs"]),
        /* Текст в правых нижних контейнерах */
        .bottom-left span:not(.sbglyphs):not([class*="sbglyphs"]),
        .bottom-left div:not(.sbglyphs):not([class*="sbglyphs"]),
        .chat-message:not(.sbglyphs):not([class*="sbglyphs"]),
        .system-message:not(.sbglyphs):not([class*="sbglyphs"]),
        /* Followtools текст */
        .followtools a:not(.sbglyphs):not([class*="sbglyphs"]),
        .followtools span:not(.sbglyphs):not([class*="sbglyphs"]) {
            font-family: 'Creepster', cursive !important;
            text-transform: uppercase !important;
            letter-spacing: 2px !important;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7) !important;
        }
        
        #player button:not(.sbglyphs):not([class*="sbglyphs"]), 
        #respawn_actions button:not(.sbglyphs):not([class*="sbglyphs"]), 
        .donate-btn:not(.sbglyphs):not([class*="sbglyphs"]) {
            font-family: 'Creepster', cursive !important;
            text-shadow: 
                2px 2px 4px rgba(0, 0, 0, 0.8),
                0 0 10px rgba(255, 140, 0, 0.7) !important;
        }
        
        /* Явно исключаем SBGlyphs из применения шрифтов */
        .sbglyphs, [class*="sbglyphs"], [class*="SBGlyphs"],
        .glyph, [class*="glyph"], [class*="Glyph"],
        .icon, [class*="icon"], [class*="Icon"] {
            font-family: inherit !important;
        }
    `;
    
    document.head.appendChild(style);
    currentFont = 'halloween';
    showNotification(currentLanguage.notifications.halloweenFont);
    closeAllMenus();
}

function applyFuturisticFont() {
    removeFont();
    
    const style = document.createElement('style');
    style.id = 'futuristic-font';
    style.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');
        
        /* Применяем шрифт только к текстовым элементам, исключая SBGlyphs */
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
        /* Правые нижние контейнеры */
        .bottom-left:not(.sbglyphs):not([class*="sbglyphs"]),
        .bottom-left div:not(.sbglyphs):not([class*="sbglyphs"]),
        .bottom-left span:not(.sbglyphs):not([class*="sbglyphs"]),
        .bottom-left p:not(.sbglyphs):not([class*="sbglyphs"]),
        .chat-container:not(.sbglyphs):not([class*="sbglyphs"]),
        .chat-message:not(.sbglyphs):not([class*="sbglyphs"]),
        .system-message:not(.sbglyphs):not([class*="sbglyphs"]),
        .info-panel:not(.sbglyphs):not([class*="sbglyphs"]),
        .status-panel:not(.sbglyphs):not([class*="sbglyphs"]),
        /* Followtools элементы */
        .followtools:not(.sbglyphs):not([class*="sbglyphs"]),
        .followtools a:not(.sbglyphs):not([class*="sbglyphs"]),
        .followtools span:not(.sbglyphs):not([class*="sbglyphs"]),
        .followtools div:not(.sbglyphs):not([class*="sbglyphs"]) {
            font-family: 'Orbitron', monospace !important;
            letter-spacing: 1px !important;
        }
        
        /* Специфичные стили для элементов */
        .stats span:not(.sbglyphs):not([class*="sbglyphs"]), 
        .modal h2:not(.sbglyphs):not([class*="sbglyphs"]), 
        .changelog-new h3:not(.sbglyphs):not([class*="sbglyphs"]),
        /* Текст в правых нижних контейнерах */
        .bottom-left span:not(.sbglyphs):not([class*="sbglyphs"]),
        .bottom-left div:not(.sbglyphs):not([class*="sbglyphs"]),
        .chat-message:not(.sbglyphs):not([class*="sbglyphs"]),
        .system-message:not(.sbglyphs):not([class*="sbglyphs"]),
        /* Followtools текст */
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
        
        /* Явно исключаем SBGlyphs из применения шрифтов */
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
}

function applyMysteriousFont() {
    removeFont();
    
    const style = document.createElement('style');
    style.id = 'mysterious-font';
    style.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=MedievalSharp&display=swap');
        
        /* Применяем шрифт только к текстовым элементам, исключая SBGlyphs */
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
        /* Правые нижние контейнеры */
        .bottom-left:not(.sbglyphs):not([class*="sbglyphs"]),
        .bottom-left div:not(.sbglyphs):not([class*="sbglyphs"]),
        .bottom-left span:not(.sbglyphs):not([class*="sbglyphs"]),
        .bottom-left p:not(.sbglyphs):not([class*="sbglyphs"]),
        .chat-container:not(.sbglyphs):not([class*="sbglyphs"]),
        .chat-message:not(.sbglyphs):not([class*="sbglyphs"]),
        .system-message:not(.sbglyphs):not([class*="sbglyphs"]),
        .info-panel:not(.sbglyphs):not([class*="sbglyphs"]),
        .status-panel:not(.sbglyphs):not([class*="sbglyphs"]),
        /* Followtools элементы */
        .followtools:not(.sbglyphs):not([class*="sbglyphs"]),
        .followtools a:not(.sbglyphs):not([class*="sbglyphs"]),
        .followtools span:not(.sbglyphs):not([class*="sbglyphs"]),
        .followtools div:not(.sbglyphs):not([class*="sbglyphs"]) {
            font-family: 'MedievalSharp', cursive !important;
            letter-spacing: 0.5px !important;
        }
        
        /* Специфичные стили для элементов */
        .stats span:not(.sbglyphs):not([class*="sbglyphs"]), 
        .modal h2:not(.sbglyphs):not([class*="sbglyphs"]), 
        .changelog-new h3:not(.sbglyphs):not([class*="sbglyphs"]),
        /* Текст в правых нижних контейнерах */
        .bottom-left span:not(.sbglyphs):not([class*="sbglyphs"]),
        .bottom-left div:not(.sbglyphs):not([class*="sbglyphs"]),
        .chat-message:not(.sbglyphs):not([class*="sbglyphs"]),
        .system-message:not(.sbglyphs):not([class*="sbglyphs"]),
        /* Followtools текст */
        .followtools a:not(.sbglyphs):not([class*="sbglyphs"]),
        .followtools span:not(.sbglyphs):not([class*="sbglyphs"]) {
            font-family: 'MedievalSharp', cursive !important;
            font-weight: bold !important;
            text-shadow: 
                1px 1px 2px rgba(0, 0, 0, 0.8),
                0 0 5px rgba(139, 0, 139, 0.5) !important;
        }
        
        #player button:not(.sbglyphs):not([class*="sbglyphs"]), 
        #respawn_actions button:not(.sbglyphs):not([class*="sbglyphs"]), 
        .donate-btn:not(.sbglyphs):not([class*="sbglyphs"]) {
            font-family: 'MedievalSharp', cursive !important;
            text-shadow: 
                2px 2px 3px rgba(0, 0, 0, 0.9),
                0 0 8px rgba(75, 0, 130, 0.7),
                0 0 12px rgba(148, 0, 211, 0.5) !important;
        }
        
        .modal h2:not(.sbglyphs):not([class*="sbglyphs"]), 
        .changelog-new h3:not(.sbglyphs):not([class*="sbglyphs"]) {
            font-family: 'MedievalSharp', cursive !important;
            text-shadow: 
                2px 2px 3px rgba(0, 0, 0, 0.9),
                0 0 10px rgba(75, 0, 130, 0.6) !important;
        }
        
        /* Явно исключаем SBGlyphs из применения шрифтов */
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
}

function removeFont() {
    const fonts = ['halloween-font', 'futuristic-font', 'mysterious-font'];
    fonts.forEach(fontId => {
        const font = document.getElementById(fontId);
        if (font) {
            font.remove();
        }
    });
}

// ===== СИСТЕМА ЗНАЧКОВ (BADGES) =====
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
                            newBadges.notus = "123 Notus";
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
                } else if (this.icon === "notus") {
                    this.icon = "https://starblast.io/ecp/notus.png";
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
let crystalColorsEnabled = false;

function toggleCrystalColors() {
    crystalColorsEnabled = !crystalColorsEnabled;
    
    if (crystalColorsEnabled) {
        enableCrystalColors();
        showNotification(currentLanguage.notifications.crystalColorsEnabled);
    } else {
        disableCrystalColors();
        showNotification(currentLanguage.notifications.crystalColorsDisabled);
    }
    updateCrystalColorsButton();
}

function enableCrystalColors() {
    // Инициализация хранилища
    function initializeStorage() {
        if (localStorage.getItem('gemindeed') === null) {
            localStorage.setItem('gemindeed', JSON.stringify("#ff0000"));
        }
        if (localStorage.getItem('gemindeed1') === null) {
            localStorage.setItem('gemindeed1', JSON.stringify("#ff8080"));
        }
    }
    
    // Получение цветов из localStorage
    function getGemColor1() {
        try {
            return JSON.parse(localStorage.getItem('gemindeed')) || "#ff0000";
        } catch (_) {
            return "#ff0000";
        }
    }
    
    function getGemColor2() {
        try {
            return JSON.parse(localStorage.getItem('gemindeed1')) || "#ff8080";
        } catch (_) {
            return "#ff8080";
        }
    }
    
    // Применение цветов к кристаллам
    function applyCrystalColors() {
        const color1 = getGemColor1();
        const color2 = getGemColor2();
        
        // Поиск класса кристаллов
        let CrystalClass = findCrystalClass();
        if (!CrystalClass) return;
        
        // Переопределение метода получения экземпляра модели
        const originalGetModelInstance = CrystalClass.prototype.getModelInstance;
        if (originalGetModelInstance) {
            CrystalClass.prototype.getModelInstance = function() {
                const result = originalGetModelInstance.apply(this, arguments);
                if (this.material) {
                    this.material.color.set(color1);
                    this.material.specular.set(color2);
                }
                return result;
            };
        }
        
        // Обновление существующих кристаллов в сцене
        updateExistingCrystals(color1, color2);
    }
    
    // Поиск класса кристаллов в глобальной области видимости
    function findCrystalClass() {
        for (let key in window) {
            try {
                const obj = window[key];
                if (obj && obj.prototype && typeof obj.prototype.createModel === 'function') {
                    const source = obj.prototype.createModel.toString();
                    if (source.includes('Crystal') || source.includes('crystal')) {
                        return obj;
                    }
                }
            } catch (e) {
                // Игнорируем ошибки доступа
            }
        }
        return null;
    }
    
    // Обновление существующих кристаллов в сцене
    function updateExistingCrystals(color1, color2) {
        if (!window.game || !window.game.scene) return;
        
        function updateSceneObjects(scene) {
            scene.children.forEach(child => {
                if (child.type && (child.type === 'Crystal' || child.type.includes('Crystal'))) {
                    if (child.material) {
                        child.material.color.set(color1);
                        child.material.specular.set(color2);
                    }
                }
                
                // Рекурсивно обходим дочерние объекты
                if (child.children && child.children.length > 0) {
                    updateSceneObjects(child);
                }
            });
        }
        
        updateSceneObjects(window.game.scene);
    }
    
    // Автоматическое применение цветов при появлении новых кристаллов
    function setupCrystalMonitoring() {
        let lastCrystalCount = 0;
        
        setInterval(() => {
            if (!window.game || !window.game.scene) return;
            
            let crystalCount = 0;
            function countCrystals(scene) {
                scene.children.forEach(child => {
                    if (child.type && (child.type === 'Crystal' || child.type.includes('Crystal'))) {
                        crystalCount++;
                    }
                    if (child.children && child.children.length > 0) {
                        countCrystals(child);
                    }
                });
            }
            
            countCrystals(window.game.scene);
            
            if (crystalCount !== lastCrystalCount) {
                lastCrystalCount = crystalCount;
                applyCrystalColors(); // Переприменяем цвета при изменении количества кристаллов
            }
        }, 1000);
    }
    
    // Инициализация
    initializeStorage();
    applyCrystalColors();
    setupCrystalMonitoring();
    
    // Создание интерфейса выбора цвета
    createCrystalColorPicker();
}

function disableCrystalColors() {
    // Удаляем пикер цветов
    const picker = document.getElementById('crystal-color-picker');
    if (picker) {
        picker.remove();
    }
    
    // Восстанавливаем оригинальные цвета кристаллов
    if (window.game && window.game.scene) {
        function restoreOriginalColors(scene) {
            scene.children.forEach(child => {
                if (child.type && (child.type === 'Crystal' || child.type.includes('Crystal'))) {
                    if (child.material) {
                        child.material.color.set("#ff0000");
                        child.material.specular.set("#ff8080");
                    }
                }
                
                if (child.children && child.children.length > 0) {
                    restoreOriginalColors(child);
                }
            });
        }
        
        restoreOriginalColors(window.game.scene);
    }
}

function createCrystalColorPicker() {
    const picker = document.createElement('div');
    picker.id = 'crystal-color-picker';
    picker.innerHTML = `
        <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: rgba(0,0,0,0.9); padding: 20px; border-radius: 10px; z-index: 10002; border: 2px solid #444; font-family: Arial; color: white; min-width: 280px; backdrop-filter: blur(5px); box-shadow: 0 0 30px rgba(0,0,0,0.8);">
            <div style="font-weight: bold; margin-bottom: 15px; font-size: 16px; text-align: center; color: #4fc3f7;">${currentLanguage.crystalPicker.title}</div>
            
            <div style="margin-bottom: 15px; display: flex; align-items: center; justify-content: space-between;">
                <span style="font-size: 14px; color: #ccc;">${currentLanguage.crystalPicker.color1}:</span>
                <div style="display: flex; align-items: center;">
                    <input type="color" id="crystal-color-main" style="width: 50px; height: 30px; margin-right: 10px; cursor: pointer; border: none; border-radius: 4px;">
                    <span id="crystal-color-main-value" style="font-size: 12px; font-family: monospace; min-width: 80px;"></span>
                </div>
            </div>
            
            <div style="margin-bottom: 15px; display: flex; align-items: center; justify-content: space-between;">
                <span style="font-size: 14px; color: #ccc;">${currentLanguage.crystalPicker.color2}:</span>
                <div style="display: flex; align-items: center;">
                    <input type="color" id="crystal-color-glow" style="width: 50px; height: 30px; margin-right: 10px; cursor: pointer; border: none; border-radius: 4px;">
                    <span id="crystal-color-glow-value" style="font-size: 12px; font-family: monospace; min-width: 80px;"></span>
                </div>
            </div>
            
            <div style="display: flex; gap: 10px; margin-top: 15px;">
                <button id="crystal-color-reset" style="flex: 1; background: #e74c3c; color: white; border: none; padding: 8px; border-radius: 5px; cursor: pointer; font-size: 12px;">${currentLanguage.crystalPicker.reset}</button>
                <button id="crystal-color-close" style="flex: 1; background: #34495e; color: white; border: none; padding: 8px; border-radius: 5px; cursor: pointer; font-size: 12px;">${currentLanguage.crystalPicker.close}</button>
            </div>
        </div>
        <div id="crystal-color-overlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); z-index: 10001; backdrop-filter: blur(3px);"></div>
    `;
    
    document.body.appendChild(picker);
    initializeCrystalPickerValues();
    setupCrystalEventListeners();
}

function initializeCrystalPickerValues() {
    function getGemColor1() {
        try {
            return JSON.parse(localStorage.getItem('gemindeed')) || "#ff0000";
        } catch (_) {
            return "#ff0000";
        }
    }
    
    function getGemColor2() {
        try {
            return JSON.parse(localStorage.getItem('gemindeed1')) || "#ff8080";
        } catch (_) {
            return "#ff8080";
        }
    }
    
    const color1 = getGemColor1();
    const color2 = getGemColor2();
    
    document.getElementById('crystal-color-main').value = color1;
    document.getElementById('crystal-color-glow').value = color2;
    document.getElementById('crystal-color-main-value').textContent = color1;
    document.getElementById('crystal-color-glow-value').textContent = color2;
}

function setupCrystalEventListeners() {
    // Основной цвет
    document.getElementById('crystal-color-main').addEventListener('input', function(e) {
        const color = e.target.value;
        document.getElementById('crystal-color-main-value').textContent = color;
        localStorage.setItem('gemindeed', JSON.stringify(color));
        applyCrystalColorsUpdate();
    });
    
    // Цвет бликов
    document.getElementById('crystal-color-glow').addEventListener('input', function(e) {
        const color = e.target.value;
        document.getElementById('crystal-color-glow-value').textContent = color;
        localStorage.setItem('gemindeed1', JSON.stringify(color));
        applyCrystalColorsUpdate();
    });
    
    // Сброс
    document.getElementById('crystal-color-reset').addEventListener('click', function() {
        const defaultColor1 = "#ff0000";
        const defaultColor2 = "#ff8080";
        
        localStorage.setItem('gemindeed', JSON.stringify(defaultColor1));
        localStorage.setItem('gemindeed1', JSON.stringify(defaultColor2));
        
        document.getElementById('crystal-color-main').value = defaultColor1;
        document.getElementById('crystal-color-glow').value = defaultColor2;
        document.getElementById('crystal-color-main-value').textContent = defaultColor1;
        document.getElementById('crystal-color-glow-value').textContent = defaultColor2;
        
        applyCrystalColorsUpdate();
    });
    
    // Закрыть
    document.getElementById('crystal-color-close').addEventListener('click', function() {
        const picker = document.getElementById('crystal-color-picker');
        if (picker) {
            picker.remove();
        }
    });
    
    // Закрытие по клику на оверлей
    document.getElementById('crystal-color-overlay').addEventListener('click', function() {
        const picker = document.getElementById('crystal-color-picker');
        if (picker) {
            picker.remove();
        }
    });
}

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
            return JSON.parse(localStorage.getItem('gemindeed1')) || "#ff8080";
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
}

function updateCrystalColorsButton() {
    if (currentMenu === 'crystal-colors') {
        updateMenu();
    }
}

// ===== CHANGELOG ФУНКЦИОНАЛЬНОСТЬ =====
function showChangelog() {
    createChangelogModal();
    closeAllMenus();
}

function createChangelogModal() {
    // Удаляем существующее модальное окно, если есть
    const existingModal = document.getElementById('changelog-modal');
    if (existingModal) {
        existingModal.remove();
    }

    // Удаляем существующий оверлей, если есть
    const existingOverlay = document.querySelector('#changelog-overlay');
    if (existingOverlay) {
        existingOverlay.remove();
    }

    // Создаем модальное окно
    const modal = document.createElement('div');
    modal.id = 'changelog-modal';
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.zIndex = '10002';
    modal.style.background = 'linear-gradient(135deg, #1a1a1a, #2d2d2d)';
    modal.style.border = '3px solid #ffffff';
    modal.style.borderRadius = '15px';
    modal.style.boxShadow = '0 0 30px rgba(255,255,255,0.3), 0 0 60px rgba(0,0,0,0.8)';
    modal.style.width = '80%';
    modal.style.maxWidth = '600px';
    modal.style.maxHeight = '80vh';
    modal.style.overflow = 'hidden';
    modal.style.fontFamily = 'Arial, sans-serif';

    // Заголовок
    const header = document.createElement('div');
    header.style.background = 'linear-gradient(135deg, #333333, #555555)';
    header.style.padding = '15px 20px';
    header.style.borderBottom = '2px solid #ffffff';
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center';

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

    // Контент
    const content = document.createElement('div');
    content.style.padding = '20px';
    content.style.maxHeight = '60vh';
    content.style.overflowY = 'auto';
    content.style.color = '#ffffff';

    // Стили для скроллбара
    content.style.scrollbarWidth = 'thin';
    content.style.scrollbarColor = '#555555 #2d2d2d';

    const scrollStyle = document.createElement('style');
    scrollStyle.textContent = `
        #changelog-modal div::-webkit-scrollbar {
            width: 8px;
        }
        #changelog-modal div::-webkit-scrollbar-track {
            background: #2d2d2d;
            border-radius: 4px;
        }
        #changelog-modal div::-webkit-scrollbar-thumb {
            background: #555555;
            border-radius: 4px;
        }
        #changelog-modal div::-webkit-scrollbar-thumb:hover {
            background: #777777;
        }
    `;
    document.head.appendChild(scrollStyle);

    // Место для текста changelog
    const changelogContent = document.createElement('div');
    changelogContent.id = 'changelog-content';
    changelogContent.style.lineHeight = '1.6';
    changelogContent.innerHTML = currentLanguage.changelog.content;

    content.appendChild(changelogContent);

    // Собираем модальное окно
    modal.appendChild(header);
    modal.appendChild(content);

    // Затемнение фона
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

    // Анимация появления
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

// ===== СИСТЕМА АВТОМАТИЧЕСКОГО ВВОДА ЭМОДЗИ =====
let emojiAutoPressEnabled = false;
let emojiAutoPressInterval = null;

function toggleEmojiAutoPress() {
    emojiAutoPressEnabled = !emojiAutoPressEnabled;
    
    if (emojiAutoPressEnabled) {
        startEmojiAutoPress();
        showNotification(currentLanguage.notifications.emojiAutoPressEnabled);
    } else {
        stopEmojiAutoPress();
        showNotification(currentLanguage.notifications.emojiAutoPressDisabled);
    }
    updateEmojiAutoPressButton();
}

function startEmojiAutoPress() {
    if (emojiAutoPressInterval) {
        clearInterval(emojiAutoPressInterval);
    }
    
    const sequence = [
        { key: 'N', delay: 100 },    // 0.1 сек
        { key: 'G', delay: 100 },    // 0.1 сек
        { key: 'G', delay: 100 },    // 0.1 сек
        { key: 'N', delay: 10 },     // 0.01 сек!
        { key: 'C', delay: 10 },     // 0.01 сек
        { key: 'S', delay: 100 },    // 0.1 сек!
        { key: 'Q', delay: 100 },    // 0.1 сек
        { key: 'Q', delay: 100 },    // 0.1 сек
        { key: 'S', delay: 10 },     // 0.01 сек!
        { key: 'C', delay: 10 }      // 0.01 сек
    ];
    
    let currentStep = 0;
    
    function executeStep() {
        if (currentStep >= sequence.length) {
            currentStep = 0; // Зацикливание
        }
        
        const step = sequence[currentStep];
        simulateKeyPress(step.key);
        
        currentStep++;
        
        if (emojiAutoPressEnabled && currentStep < sequence.length) {
            setTimeout(executeStep, step.delay);
        } else if (emojiAutoPressEnabled) {
            // Перезапуск последовательности
            setTimeout(() => {
                currentStep = 0;
                executeStep();
            }, sequence[sequence.length - 1].delay);
        }
    }
    
    // Запускаем последовательность
    executeStep();
}

function stopEmojiAutoPress() {
    if (emojiAutoPressInterval) {
        clearInterval(emojiAutoPressInterval);
        emojiAutoPressInterval = null;
    }
}

function simulateKeyPress(key) {
    // Создаем события для симуляции нажатия клавиши
    const keyDownEvent = new KeyboardEvent('keydown', {
        key: key,
        code: `Key${key}`,
        keyCode: key.charCodeAt(0),
        which: key.charCodeAt(0),
        bubbles: true,
        cancelable: true
    });
    
    const keyUpEvent = new KeyboardEvent('keyup', {
        key: key,
        code: `Key${key}`,
        keyCode: key.charCodeAt(0),
        which: key.charCodeAt(0),
        bubbles: true,
        cancelable: true
    });
    
    const keyPressEvent = new KeyboardEvent('keypress', {
        key: key,
        code: `Key${key}`,
        keyCode: key.charCodeAt(0),
        which: key.charCodeAt(0),
        bubbles: true,
        cancelable: true
    });
    
    // Отправляем события
    document.dispatchEvent(keyDownEvent);
    document.dispatchEvent(keyPressEvent);
    document.dispatchEvent(keyUpEvent);
    
    // Дополнительно пытаемся отправить события в активный элемент
    if (document.activeElement) {
        document.activeElement.dispatchEvent(keyDownEvent);
        document.activeElement.dispatchEvent(keyPressEvent);
        document.activeElement.dispatchEvent(keyUpEvent);
    }
}

function updateEmojiAutoPressButton() {
    if (currentMenu === 'emote-sim') {
        updateMenu();
    }
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
}

function enableLowercaseName() {
    (function() {
        'use strict';
        
        // Сохраняем оригинальную функцию на случай если понадобится
        const originalToUpperCase = String.prototype.toUpperCase;
        
        // Полностью отключаем toUpperCase для ВСЕХ строк
        String.prototype.toUpperCase = function() {
            return this.toString(); // Всегда возвращаем оригинальную строку
        };
        
        // Также отключаем для String объектов
        String.prototype.toLocaleUpperCase = function() {
            return this.toString();
        };
        
        // Добавляем CSS фикс на всякий случай
        const style = document.createElement('style');
        style.textContent = `
            * {
                text-transform: none !important;
            }
        `;
        document.head.appendChild(style);
        
        console.log('Nuclear toUpperCase disable activated!');
        console.log('Все вызовы .toUpperCase() теперь возвращают оригинальную строку');
        
        // Периодически применяем CSS фикс для новых элементов
        setInterval(() => {
            document.querySelectorAll('*').forEach(el => {
                el.style.textTransform = 'none';
            });
        }, 1000);
    })();
}

function disableLowercaseName() {
    // Восстанавливаем оригинальные функции
    (function() {
        // Восстанавливаем оригинальные методы String
        if (String.prototype.originalToUpperCase) {
            String.prototype.toUpperCase = String.prototype.originalToUpperCase;
            String.prototype.toLocaleUpperCase = String.prototype.originalToLocaleUpperCase;
        }
        
        // Удаляем CSS фикс
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
            language: '🌐 Язык',
            themes: '🎨 Градиентная тема',
            badges: '🏅 Значки',
            fonts: '🔤 Шрифты',
            changelog: '📋 Список изменений',
            emoteSim: '🎮 Emote-Sim',
            crystalColors: '💎 Crystal Colors',
            lowercaseName: '🔤 Lowercase Name'
        },
        themes: [
            { text: '🎨 Настроить градиент', onClick: openGradientColorPicker },
            { text: '↩️ Исходная тема', onClick: resetToOriginal }
        ],
        fonts: [
            { text: '🔤 Стандартный', onClick: applyDefaultFont },
            { text: '🎃 Хэллоуин', onClick: applyHalloweenFont },
            { text: '🚀 Футуристичный', onClick: applyFuturisticFont },
            { text: '🔮 Загадочный', onClick: applyMysteriousFont }
        ],
        languageOptions: [
            { code: 'ru', name: '🇷🇺 Русский' },
            { code: 'en', name: '🇺🇸 English' },
            { code: 'tr', name: '🇹🇷 Türkçe' }
        ],
        notifications: {
            customGradient: '🎨 Градиентная тема применена!',
            reset: '↩️ Возврат к исходному стилю!',
            language: '🌐 Язык изменен на Русский',
            badgesEnabled: '🏅 Значки включены!',
            badgesDisabled: '🏅 Значки выключены!',
            defaultFont: '🔤 Стандартный шрифт применен!',
            halloweenFont: '🎃 Хэллоуинский шрифт применен!',
            futuristicFont: '🚀 Футуристичный шрифт применен!',
            mysteriousFont: '🔮 Загадочный шрифт применен!',
            changelog: '📋 Открыт список изменений',
            emojiAutoPressEnabled: '🎮 Crazy эмодзи включено! Спец-последовательность запущена',
            emojiAutoPressDisabled: '🎮 Crazy эмодзи выключено!',
            crystalColorsEnabled: '💎 Crystal Colors включены! Выберите цвета в меню',
            crystalColorsDisabled: '💎 Crystal Colors выключены!',
            lowercaseNameEnabled: '🔤 Lowercase Name включен! Все имена в нижнем регистре',
            lowercaseNameDisabled: '🔤 Lowercase Name выключен!'
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
        crystalPicker: {
            title: 'Crystal Colors',
            color1: 'Основной цвет',
            color2: 'Цвет бликов',
            reset: 'Сброс',
            close: 'Закрыть'
        },
        changelog: {
            title: '📋 Список изменений',
            content: `
                <div style="text-align: center; margin-bottom: 20px; padding: 15px; background: rgba(255,255,255,0.1); border-radius: 10px;">
                    <h3 style="margin: 0 0 10px 0; color: #4CAF50;">🚀 Starblast Function Customizer</h3>
                    <p style="margin: 0; font-size: 14px; opacity: 0.8;">Версия 2.0.0</p>
                </div>
                
                <div style="margin-bottom: 20px;">
                    <h4 style="color: #ff9800; margin-bottom: 10px; border-bottom: 1px solid #ff9800; padding-bottom: 5px;">🎉 Новые функции</h4>
                    <div style="background: rgba(255,152,0,0.1); padding: 15px; border-radius: 8px; border-left: 4px solid #ff9800;">
                        <ul style="margin: 0; padding-left: 20px; font-size: 14px;">
                            <li>Добавлена настраиваемая градиентная тема</li>
                            <li>Выбор двух цветов для создания собственного градиента</li>
                            <li>Предпросмотр градиента перед применением</li>
                            <li>Сохранение выбранных цветов в localStorage</li>
                        </ul>
                    </div>
                </div>

                <div style="margin-bottom: 20px;">
                    <h4 style="color: #2196F3; margin-bottom: 10px; border-bottom: 1px solid #2196F3; padding-bottom: 5px;">🎨 Доступные функции</h4>
                    <ul style="margin: 0; padding-left: 20px; font-size: 14px;">
                        <li>Настраиваемая градиентная тема</li>
                        <li>4 стиля шрифтов</li>
                        <li>Система пользовательских значков</li>
                        <li>Система кастомных цветов кристаллов</li>
                        <li>Система симуляторов эмодзи</li>
                        <li>Многоязычная поддержка</li>
                        <li>Анимированные элементы интерфейса</li>
                    </ul>
                </div>

                <div style="background: rgba(76,175,80,0.1); padding: 15px; border-radius: 8px; border-left: 4px solid #4CAF50; margin-top: 20px;">
                    <p style="margin: 0; font-size: 13px; text-align: center; opacity: 0.8;">
                        💡 Следите за обновлениями! Новые функции добавляются регулярно.
                    </p>
                </div>
            `
        },
        back: '⬅️ Назад',
        badgesToggle: 'Переключатель значков',
        badgesInfoEnabled: '✓ SRC Champ, SDC Champ, Developer и Halloween значки доступны',
        badgesInfoDisabled: '❌ Значки отключены',
        currentFont: 'Текущий шрифт',
        emojiToggle: 'Crazy',
        emojiInfo: 'Специальная последовательность',
        crystalColorsToggle: 'Crystal Colors',
        crystalColorsInfoEnabled: '✓ Нажмите для выбора цветов кристаллов',
        crystalColorsInfoDisabled: '❌ Crystal Colors отключены',
        lowercaseNameToggle: 'Lowercase Name',
        lowercaseNameInfoEnabled: '✓ Все имена отображаются в нижнем регистре',
        lowercaseNameInfoDisabled: '❌ Lowercase Name отключен'
    },
    en: {
        mainMenu: {
            language: '🌐 Language',
            themes: '🎨 Gradient Theme',
            badges: '🏅 Badges',
            fonts: '🔤 Fonts',
            changelog: '📋 Changelog',
            emoteSim: '🎮 Emote-Sim',
            crystalColors: '💎 Crystal Colors',
            lowercaseName: '🔤 Lowercase Name'
        },
        themes: [
            { text: '🎨 Customize Gradient', onClick: openGradientColorPicker },
            { text: '↩️ Original Theme', onClick: resetToOriginal }
        ],
        fonts: [
            { text: '🔤 Default', onClick: applyDefaultFont },
            { text: '🎃 Halloween', onClick: applyHalloweenFont },
            { text: '🚀 Futuristic', onClick: applyFuturisticFont },
            { text: '🔮 Mysterious', onClick: applyMysteriousFont }
        ],
        languageOptions: [
            { code: 'ru', name: '🇷🇺 Russian' },
            { code: 'en', name: '🇺🇸 English' },
            { code: 'tr', name: '🇹🇷 Turkish' }
        ],
        notifications: {
            customGradient: '🎨 Gradient theme applied!',
            reset: '↩️ Return to original style!',
            language: '🌐 Language changed to English',
            badgesEnabled: '🏅 Badges enabled!',
            badgesDisabled: '🏅 Badges disabled!',
            defaultFont: '🔤 Default font applied!',
            halloweenFont: '🎃 Halloween font applied!',
            futuristicFont: '🚀 Futuristic font applied!',
            mysteriousFont: '🔮 Mysterious font applied!',
            changelog: '📋 Changelog opened',
            emojiAutoPressEnabled: '🎮 Crazy emoji enabled! Special sequence started',
            emojiAutoPressDisabled: '🎮 Crazy emoji disabled!',
            crystalColorsEnabled: '💎 Crystal Colors enabled! Choose colors in menu',
            crystalColorsDisabled: '💎 Crystal Colors disabled!',
            lowercaseNameEnabled: '🔤 Lowercase Name enabled! All names in lowercase',
            lowercaseNameDisabled: '🔤 Lowercase Name disabled!'
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
        crystalPicker: {
            title: 'Crystal Colors',
            color1: 'Main Color',
            color2: 'Glow Color',
            reset: 'Reset',
            close: 'Close'
        },
        changelog: {
            title: '📋 Changelog',
            content: `
                <div style="text-align: center; margin-bottom: 20px; padding: 15px; background: rgba(255,255,255,0.1); border-radius: 10px;">
                    <h3 style="margin: 0 0 10px 0; color: #4CAF50;">🚀 Starblast Function Customizer</h3>
                    <p style="margin: 0; font-size: 14px; opacity: 0.8;">Version 2.0.0</p>
                </div>
                
                <div style="margin-bottom: 20px;">
                    <h4 style="color: #ff9800; margin-bottom: 10px; border-bottom: 1px solid #ff9800; padding-bottom: 5px;">🎉 New Features</h4>
                    <div style="background: rgba(255,152,0,0.1); padding: 15px; border-radius: 8px; border-left: 4px solid #ff9800;">
                        <ul style="margin: 0; padding-left: 20px; font-size: 14px;">
                            <li>Added customizable gradient theme</li>
                            <li>Choose two colors to create your own gradient</li>
                            <li>Gradient preview before applying</li>
                            <li>Save selected colors in localStorage</li>
                        </ul>
                    </div>
                </div>

                <div style="margin-bottom: 20px;">
                    <h4 style="color: #2196F3; margin-bottom: 10px; border-bottom: 1px solid #2196F3; padding-bottom: 5px;">🎨 Available Features</h4>
                    <ul style="margin: 0; padding-left: 20px; font-size: 14px;">
                        <li>Customizable gradient theme</li>
                        <li>4 font styles</li>
                        <li>Custom badges system</li>
                        <li>Custom crystal colors system</li>
                        <li>Emoji simulator system</li>
                        <li>Multi-language support</li>
                        <li>Animated interface elements</li>
                    </ul>
                </div>

                <div style="background: rgba(76,175,80,0.1); padding: 15px; border-radius: 8px; border-left: 4px solid #4CAF50; margin-top: 20px;">
                    <p style="margin: 0; font-size: 13px; text-align: center; opacity: 0.8;">
                        💡 Stay tuned for updates! New features are added regularly.
                    </p>
                </div>
            `
        },
        back: '⬅️ Back',
        badgesToggle: 'Badges toggle',
        badgesInfoEnabled: '✓ SRC Champ, SDC Champ, Developer and Halloween badges available',
        badgesInfoDisabled: '❌ Badges disabled',
        currentFont: 'Current font',
        emojiToggle: 'Crazy',
        emojiInfo: 'Special sequence',
        crystalColorsToggle: 'Crystal Colors',
        crystalColorsInfoEnabled: '✓ Click to choose crystal colors',
        crystalColorsInfoDisabled: '❌ Crystal Colors disabled',
        lowercaseNameToggle: 'Lowercase Name',
        lowercaseNameInfoEnabled: '✓ All names displayed in lowercase',
        lowercaseNameInfoDisabled: '❌ Lowercase Name disabled'
    },
    tr: {
        mainMenu: {
            language: '🌐 Dil',
            themes: '🎨 Gradyan Teması',
            badges: '🏅 Rozetler',
            fonts: '🔤 Yazı Tipleri',
            changelog: '📋 Değişiklik Listesi',
            emoteSim: '🎮 Emote-Sim',
            crystalColors: '💎 Crystal Colors',
            lowercaseName: '🔤 Lowercase Name'
        },
        themes: [
            { text: '🎨 Gradyanı Özelleştir', onClick: openGradientColorPicker },
            { text: '↩️ Orijinal Tema', onClick: resetToOriginal }
        ],
        fonts: [
            { text: '🔤 Varsayılan', onClick: applyDefaultFont },
            { text: '🎃 Cadılar Bayramı', onClick: applyHalloweenFont },
            { text: '🚀 Fütüristik', onClick: applyFuturisticFont },
            { text: '🔮 Gizemli', onClick: applyMysteriousFont }
        ],
        languageOptions: [
            { code: 'ru', name: '🇷🇺 Rusça' },
            { code: 'en', name: '🇺🇸 İngilizce' },
            { code: 'tr', name: '🇹🇷 Türkçe' }
        ],
        notifications: {
            customGradient: '🎨 Gradyan teması uygulandı!',
            reset: '↩️ Orijinal stile dönüldü!',
            language: '🌐 Dil Türkçe olarak değiştirildi',
            badgesEnabled: '🏅 Rozetler etkin!',
            badgesDisabled: '🏅 Rozetler devre dışı!',
            defaultFont: '🔤 Varsayılan yazı tipi uygulandı!',
            halloweenFont: '🎃 Cadılar Bayramı yazı tipi uygulandı!',
            futuristicFont: '🚀 Fütüristik yazı tipi uygulandı!',
            mysteriousFont: '🔮 Gizemli yazı tipi uygulandı!',
            changelog: '📋 Değişiklik listesi açıldı',
            emojiAutoPressEnabled: '🎮 Crazy emoji etkin! Özel sıra başlatıldı',
            emojiAutoPressDisabled: '🎮 Crazy emoji devre dışı!',
            crystalColorsEnabled: '💎 Crystal Colors etkin! Menüden renkleri seçin',
            crystalColorsDisabled: '💎 Crystal Colors devre dışı!',
            lowercaseNameEnabled: '🔤 Lowercase Name etkin! Tüm isimler küçük harfle',
            lowercaseNameDisabled: '🔤 Lowercase Name devre dışı!'
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
        crystalPicker: {
            title: 'Crystal Colors',
            color1: 'Ana Renk',
            color2: 'Parlaklık Rengi',
            reset: 'Sıfırla',
            close: 'Kapat'
        },
        changelog: {
            title: '📋 Değişiklik Listesi',
            content: `
                <div style="text-align: center; margin-bottom: 20px; padding: 15px; background: rgba(255,255,255,0.1); border-radius: 10px;">
                    <h3 style="margin: 0 0 10px 0; color: #4CAF50;">🚀 Starblast Function Customizer</h3>
                    <p style="margin: 0; font-size: 14px; opacity: 0.8;">Sürüm 2.0.0</p>
                </div>
                
                <div style="margin-bottom: 20px;">
                    <h4 style="color: #ff9800; margin-bottom: 10px; border-bottom: 1px solid #ff9800; padding-bottom: 5px;">🎉 Yeni Özellikler</h4>
                    <div style="background: rgba(255,152,0,0.1); padding: 15px; border-radius: 8px; border-left: 4px solid #ff9800;">
                        <ul style="margin: 0; padding-left: 20px; font-size: 14px;">
                            <li>Özelleştirilebilir gradyan teması eklendi</li>
                            <li>Kendi gradyanınızı oluşturmak için iki renk seçin</li>
                            <li>Uygulamadan önce gradyan önizleme</li>
                            <li>Seçilen renkleri localStorage\'a kaydetme</li>
                        </ul>
                    </div>
                </div>

                <div style="margin-bottom: 20px;">
                    <h4 style="color: #2196F3; margin-bottom: 10px; border-bottom: 1px solid #2196F3; padding-bottom: 5px;">🎨 Mevcut Özellikler</h4>
                    <ul style="margin: 0; padding-left: 20px; font-size: 14px;">
                        <li>Özelleştirilebilir gradyan teması</li>
                        <li>4 yazı tipi stili</li>
                        <li>Özel rozet sistemi</li>
                        <li>Özel kristal renkleri sistemi</li>
                        <li>Emoji simülatörü sistemi</li>
                        <li>Çok dilli destek</li>
                        <li>Animasyonlu arayüz öğeleri</li>
                    </ul>
                </div>

                <div style="background: rgba(76,175,80,0.1); padding: 15px; border-radius: 8px; border-left: 4px solid #4CAF50; margin-top: 20px;">
                    <p style="margin: 0; font-size: 13px; text-align: center; opacity: 0.8;">
                        💡 Güncellemeler için takipte kalın! Yeni özellikler düzenli olarak eklenir.
                    </p>
                </div>
            `
        },
        back: '⬅️ Geri',
        badgesToggle: 'Rozet anahtarı',
        badgesInfoEnabled: '✓ SRC Champ, SDC Champ, Developer ve Halloween rozetleri mevcut',
        badgesInfoDisabled: '❌ Rozetler devre dışı',
        currentFont: 'Mevcut yazı tipi',
        emojiToggle: 'Crazy',
        emojiInfo: 'Özel sıra',
        crystalColorsToggle: 'Crystal Colors',
        crystalColorsInfoEnabled: '✓ Kristal renklerini seçmek için tıklayın',
        crystalColorsInfoDisabled: '❌ Crystal Colors devre dışı',
        lowercaseNameToggle: 'Lowercase Name',
        lowercaseNameInfoEnabled: '✓ Tüm isimler küçük harfle görüntüleniyor',
        lowercaseNameInfoDisabled: '❌ Lowercase Name devre dışı'
    }
};

let currentLanguage = languages.ru;
let currentMenu = 'main';

function changeLanguage(lang) {
    currentLanguage = languages[lang];
    showNotification(currentLanguage.notifications.language);
    updateMenu();
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
    notification.style.left = '10px';
    notification.style.background = 'rgba(0, 0, 0, 0.9)';
    notification.style.color = 'white';
    notification.style.padding = '8px 12px';
    notification.style.borderRadius = '10px';
    notification.style.zIndex = '10001';
    notification.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
    notification.style.fontFamily = 'Arial, sans-serif';
    notification.style.fontSize = '11px';
    notification.style.fontWeight = 'bold';
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 2000);
}

function createSettingsButton() {
    const oldButton = document.getElementById('settings-btn');
    if (oldButton) {
        oldButton.remove();
    }
    
    const settingsButton = document.createElement('button');
    settingsButton.id = 'settings-btn';
    settingsButton.innerHTML = '⚙️';
    settingsButton.style.position = 'fixed';
    settingsButton.style.top = '10px';
    settingsButton.style.left = '10px';
    settingsButton.style.zIndex = '10000';
    settingsButton.style.width = '40px';
    settingsButton.style.height = '40px';
    settingsButton.style.borderRadius = '50%';
    settingsButton.style.background = 'linear-gradient(135deg, #666666, #999999, #666666)';
    settingsButton.style.color = 'white';
    settingsButton.style.border = '2px solid #ffffff';
    settingsButton.style.cursor = 'pointer';
    settingsButton.style.boxShadow = '0 0 15px rgba(255,255,255,0.5)';
    settingsButton.style.fontFamily = 'Arial, sans-serif';
    settingsButton.style.fontSize = '18px';
    settingsButton.style.fontWeight = 'bold';
    settingsButton.style.transition = 'all 0.3s ease';
    settingsButton.style.display = 'flex';
    settingsButton.style.alignItems = 'center';
    settingsButton.style.justifyContent = 'center';
    
    settingsButton.onmouseover = function() {
        this.style.transform = 'scale(1.1) rotate(90deg)';
        this.style.boxShadow = '0 0 20px rgba(255,255,255,0.7)';
    };
    
    settingsButton.onmouseout = function() {
        this.style.transform = 'scale(1) rotate(0deg)';
        this.style.boxShadow = '0 0 15px rgba(255,255,255,0.5)';
    };
    
    settingsButton.onclick = function(event) {
        event.stopPropagation();
        toggleSettingsMenu();
    };
    
    document.body.appendChild(settingsButton);
}

function createSettingsMenu() {
    const menu = document.createElement('div');
    menu.id = 'settings-menu';
    menu.style.position = 'fixed';
    menu.style.top = '60px';
    menu.style.left = '10px';
    menu.style.zIndex = '10000';
    menu.style.background = 'rgba(0, 0, 0, 0.95)';
    menu.style.border = '2px solid #ffffff';
    menu.style.borderRadius = '10px';
    menu.style.boxShadow = '0 0 20px rgba(255,255,255,0.5)';
    menu.style.padding = '10px';
    menu.style.display = 'none';
    menu.style.flexDirection = 'column';
    menu.style.gap = '8px';
    menu.style.width = '180px';
    menu.style.maxHeight = '40vh';
    menu.style.overflowY = 'auto';
    
    // Стили для скроллбара
    const scrollStyle = document.createElement('style');
    scrollStyle.textContent = `
        #settings-menu::-webkit-scrollbar {
            width: 6px;
        }
        #settings-menu::-webkit-scrollbar-track {
            background: #333;
            border-radius: 3px;
        }
        #settings-menu::-webkit-scrollbar-thumb {
            background: #666;
            border-radius: 3px;
        }
        #settings-menu::-webkit-scrollbar-thumb:hover {
            background: #888;
        }
    `;
    document.head.appendChild(scrollStyle);
    
    document.body.appendChild(menu);
    updateMenu();
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
    } else if (currentMenu === 'emote-sim') {
        createEmoteSimMenu(menu);
    } else if (currentMenu === 'crystal-colors') {
        createCrystalColorsMenu(menu);
    } else if (currentMenu === 'lowercase-name') {
        createLowercaseNameMenu(menu);
    }
}

function createMainMenu(menu) {
    // Кнопка выбора языка
    const languageButton = createMenuButton(currentLanguage.mainMenu.language, (event) => {
        event.stopPropagation();
        currentMenu = 'language';
        updateMenu();
    });
    menu.appendChild(languageButton);
    
    // Кнопка выбора тем
    const themesButton = createMenuButton(currentLanguage.mainMenu.themes, (event) => {
        event.stopPropagation();
        currentMenu = 'themes';
        updateMenu();
    });
    menu.appendChild(themesButton);
    
    // Кнопка управления значками
    const badgesButton = createMenuButton(currentLanguage.mainMenu.badges, (event) => {
        event.stopPropagation();
        currentMenu = 'badges';
        updateMenu();
    });
    menu.appendChild(badgesButton);
    
    // Кнопка выбора шрифтов
    const fontsButton = createMenuButton(currentLanguage.mainMenu.fonts, (event) => {
        event.stopPropagation();
        currentMenu = 'fonts';
        updateMenu();
    });
    menu.appendChild(fontsButton);
    
    // Кнопка Emote-Sim
    const emoteSimButton = createMenuButton(currentLanguage.mainMenu.emoteSim, (event) => {
        event.stopPropagation();
        currentMenu = 'emote-sim';
        updateMenu();
    });
    menu.appendChild(emoteSimButton);
    
    // Кнопка Crystal Colors
    const crystalColorsButton = createMenuButton(currentLanguage.mainMenu.crystalColors, (event) => {
        event.stopPropagation();
        currentMenu = 'crystal-colors';
        updateMenu();
    });
    menu.appendChild(crystalColorsButton);
    
    // Кнопка Lowercase Name
    const lowercaseNameButton = createMenuButton(currentLanguage.mainMenu.lowercaseName, (event) => {
        event.stopPropagation();
        currentMenu = 'lowercase-name';
        updateMenu();
    });
    menu.appendChild(lowercaseNameButton);
    
    // Кнопка Changelog
    const changelogButton = createMenuButton(currentLanguage.mainMenu.changelog, (event) => {
        event.stopPropagation();
        showChangelog();
    });
    menu.appendChild(changelogButton);
}

function createLanguageMenu(menu) {
    // Кнопка "Назад"
    const backButton = createMenuButton(currentLanguage.back, (event) => {
        event.stopPropagation();
        currentMenu = 'main';
        updateMenu();
    });
    menu.appendChild(backButton);
    
    // Разделитель
    menu.appendChild(createSeparator());
    
    // Кнопки выбора языка
    currentLanguage.languageOptions.forEach(lang => {
        const langButton = createMenuButton(lang.name, (event) => {
            event.stopPropagation();
            changeLanguage(lang.code);
        });
        menu.appendChild(langButton);
    });
}

function createThemesMenu(menu) {
    // Кнопка "Назад"
    const backButton = createMenuButton(currentLanguage.back, (event) => {
        event.stopPropagation();
        currentMenu = 'main';
        updateMenu();
    });
    menu.appendChild(backButton);
    
    // Разделитель
    menu.appendChild(createSeparator());
    
    // Кнопки выбора тем
    currentLanguage.themes.forEach(theme => {
        const themeButton = createMenuButton(theme.text, (event) => {
            event.stopPropagation();
            theme.onClick();
        });
        menu.appendChild(themeButton);
    });
}

function createFontsMenu(menu) {
    // Кнопка "Назад"
    const backButton = createMenuButton(currentLanguage.back, (event) => {
        event.stopPropagation();
        currentMenu = 'main';
        updateMenu();
    });
    menu.appendChild(backButton);
    
    // Разделитель
    menu.appendChild(createSeparator());
    
    // Информация о текущем шрифте
    const fontInfo = document.createElement('div');
    fontInfo.style.color = '#cccccc';
    fontInfo.style.fontFamily = 'Arial, sans-serif';
    fontInfo.style.fontSize = '10px';
    fontInfo.style.marginBottom = '5px';
    fontInfo.textContent = `${currentLanguage.currentFont}: ${getCurrentFontName()}`;
    menu.appendChild(fontInfo);
    
    // Кнопки выбора шрифтов
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
        case 'halloween': return currentLanguage.fonts[1].text;
        case 'futuristic': return currentLanguage.fonts[2].text;
        case 'mysterious': return currentLanguage.fonts[3].text;
        default: return currentLanguage.fonts[0].text;
    }
}

function createBadgesMenu(menu) {
    // Кнопка "Назад"
    const backButton = createMenuButton(currentLanguage.back, (event) => {
        event.stopPropagation();
        currentMenu = 'main';
        updateMenu();
    });
    menu.appendChild(backButton);
    
    // Разделитель
    menu.appendChild(createSeparator());
    
    // Переключатель значков
    const toggleContainer = document.createElement('div');
    toggleContainer.style.display = 'flex';
    toggleContainer.style.alignItems = 'center';
    toggleContainer.style.justifyContent = 'space-between';
    toggleContainer.style.marginBottom = '10px';
    
    const toggleLabel = document.createElement('span');
    toggleLabel.textContent = currentLanguage.badgesToggle;
    toggleLabel.style.color = 'white';
    toggleLabel.style.fontFamily = 'Arial, sans-serif';
    toggleLabel.style.fontSize = '12px';
    toggleLabel.style.fontWeight = 'bold';
    
    const toggleSwitch = document.createElement('div');
    toggleSwitch.style.width = '50px';
    toggleSwitch.style.height = '24px';
    toggleSwitch.style.background = badgesEnabled ? '#4CAF50' : '#666666';
    toggleSwitch.style.borderRadius = '12px';
    toggleSwitch.style.position = 'relative';
    toggleSwitch.style.cursor = 'pointer';
    toggleSwitch.style.transition = 'all 0.3s ease';
    toggleSwitch.style.border = '2px solid #ffffff';
    
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
    
    // Описание значков
    const badgesInfo = document.createElement('div');
    badgesInfo.style.color = '#cccccc';
    badgesInfo.style.fontFamily = 'Arial, sans-serif';
    badgesInfo.style.fontSize = '10px';
    badgesInfo.style.marginTop = '5px';
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

function createEmoteSimMenu(menu) {
    // Кнопка "Назад"
    const backButton = createMenuButton(currentLanguage.back, (event) => {
        event.stopPropagation();
        currentMenu = 'main';
        updateMenu();
    });
    menu.appendChild(backButton);
    
    // Разделитель
    menu.appendChild(createSeparator());
    
    // Переключатель Crazy эмодзи
    const toggleContainer = document.createElement('div');
    toggleContainer.style.display = 'flex';
    toggleContainer.style.alignItems = 'center';
    toggleContainer.style.justifyContent = 'space-between';
    toggleContainer.style.marginBottom = '10px';
    
    const toggleLabel = document.createElement('span');
    toggleLabel.textContent = currentLanguage.emojiToggle;
    toggleLabel.style.color = 'white';
    toggleLabel.style.fontFamily = 'Arial, sans-serif';
    toggleLabel.style.fontSize = '12px';
    toggleLabel.style.fontWeight = 'bold';
    
    const toggleSwitch = document.createElement('div');
    toggleSwitch.style.width = '50px';
    toggleSwitch.style.height = '24px';
    toggleSwitch.style.background = emojiAutoPressEnabled ? '#4CAF50' : '#666666';
    toggleSwitch.style.borderRadius = '12px';
    toggleSwitch.style.position = 'relative';
    toggleSwitch.style.cursor = 'pointer';
    toggleSwitch.style.transition = 'all 0.3s ease';
    toggleSwitch.style.border = '2px solid #ffffff';
    
    const toggleSlider = document.createElement('div');
    toggleSlider.style.width = '20px';
    toggleSlider.style.height = '20px';
    toggleSlider.style.background = 'white';
    toggleSlider.style.borderRadius = '50%';
    toggleSlider.style.position = 'absolute';
    toggleSlider.style.top = '2px';
    toggleSlider.style.left = emojiAutoPressEnabled ? '26px' : '2px';
    toggleSlider.style.transition = 'all 0.3s ease';
    
    toggleSwitch.appendChild(toggleSlider);
    
    toggleSwitch.onclick = function(event) {
        event.stopPropagation();
        toggleEmojiAutoPress();
    };
    
    toggleContainer.appendChild(toggleLabel);
    toggleContainer.appendChild(toggleSwitch);
    menu.appendChild(toggleContainer);
    
    // Описание функции
    const emojiInfo = document.createElement('div');
    emojiInfo.style.color = '#cccccc';
    emojiInfo.style.fontFamily = 'Arial, sans-serif';
    emojiInfo.style.fontSize = '10px';
    emojiInfo.style.marginTop = '5px';
    emojiInfo.style.lineHeight = '1.4';
    emojiInfo.textContent = currentLanguage.emojiInfo;
    menu.appendChild(emojiInfo);
}

function createCrystalColorsMenu(menu) {
    // Кнопка "Назад"
    const backButton = createMenuButton(currentLanguage.back, (event) => {
        event.stopPropagation();
        currentMenu = 'main';
        updateMenu();
    });
    menu.appendChild(backButton);
    
    // Разделитель
    menu.appendChild(createSeparator());
    
    // Переключатель Crystal Colors
    const toggleContainer = document.createElement('div');
    toggleContainer.style.display = 'flex';
    toggleContainer.style.alignItems = 'center';
    toggleContainer.style.justifyContent = 'space-between';
    toggleContainer.style.marginBottom = '10px';
    
    const toggleLabel = document.createElement('span');
    toggleLabel.textContent = currentLanguage.crystalColorsToggle;
    toggleLabel.style.color = 'white';
    toggleLabel.style.fontFamily = 'Arial, sans-serif';
    toggleLabel.style.fontSize = '12px';
    toggleLabel.style.fontWeight = 'bold';
    
    const toggleSwitch = document.createElement('div');
    toggleSwitch.style.width = '50px';
    toggleSwitch.style.height = '24px';
    toggleSwitch.style.background = crystalColorsEnabled ? '#4CAF50' : '#666666';
    toggleSwitch.style.borderRadius = '12px';
    toggleSwitch.style.position = 'relative';
    toggleSwitch.style.cursor = 'pointer';
    toggleSwitch.style.transition = 'all 0.3s ease';
    toggleSwitch.style.border = '2px solid #ffffff';
    
    const toggleSlider = document.createElement('div');
    toggleSlider.style.width = '20px';
    toggleSlider.style.height = '20px';
    toggleSlider.style.background = 'white';
    toggleSlider.style.borderRadius = '50%';
    toggleSlider.style.position = 'absolute';
    toggleSlider.style.top = '2px';
    toggleSlider.style.left = crystalColorsEnabled ? '26px' : '2px';
    toggleSlider.style.transition = 'all 0.3s ease';
    
    toggleSwitch.appendChild(toggleSlider);
    
    toggleSwitch.onclick = function(event) {
        event.stopPropagation();
        toggleCrystalColors();
    };
    
    toggleContainer.appendChild(toggleLabel);
    toggleContainer.appendChild(toggleSwitch);
    menu.appendChild(toggleContainer);
    
    // Кнопка выбора цветов (только если включено)
    if (crystalColorsEnabled) {
        const colorPickerButton = createMenuButton('🎨 ' + currentLanguage.crystalPicker.title, (event) => {
            event.stopPropagation();
            enableCrystalColors(); // Это откроет пикер цветов
        });
        menu.appendChild(colorPickerButton);
    }
    
    // Описание функции
    const crystalColorsInfo = document.createElement('div');
    crystalColorsInfo.style.color = '#cccccc';
    crystalColorsInfo.style.fontFamily = 'Arial, sans-serif';
    crystalColorsInfo.style.fontSize = '10px';
    crystalColorsInfo.style.marginTop = '5px';
    crystalColorsInfo.style.lineHeight = '1.4';
    crystalColorsInfo.textContent = crystalColorsEnabled ? 
        currentLanguage.crystalColorsInfoEnabled : 
        currentLanguage.crystalColorsInfoDisabled;
    menu.appendChild(crystalColorsInfo);
}

function createLowercaseNameMenu(menu) {
    // Кнопка "Назад"
    const backButton = createMenuButton(currentLanguage.back, (event) => {
        event.stopPropagation();
        currentMenu = 'main';
        updateMenu();
    });
    menu.appendChild(backButton);
    
    // Разделитель
    menu.appendChild(createSeparator());
    
    // Переключатель Lowercase Name
    const toggleContainer = document.createElement('div');
    toggleContainer.style.display = 'flex';
    toggleContainer.style.alignItems = 'center';
    toggleContainer.style.justifyContent = 'space-between';
    toggleContainer.style.marginBottom = '10px';
    
    const toggleLabel = document.createElement('span');
    toggleLabel.textContent = currentLanguage.lowercaseNameToggle;
    toggleLabel.style.color = 'white';
    toggleLabel.style.fontFamily = 'Arial, sans-serif';
    toggleLabel.style.fontSize = '12px';
    toggleLabel.style.fontWeight = 'bold';
    
    const toggleSwitch = document.createElement('div');
    toggleSwitch.style.width = '50px';
    toggleSwitch.style.height = '24px';
    toggleSwitch.style.background = lowercaseNameEnabled ? '#4CAF50' : '#666666';
    toggleSwitch.style.borderRadius = '12px';
    toggleSwitch.style.position = 'relative';
    toggleSwitch.style.cursor = 'pointer';
    toggleSwitch.style.transition = 'all 0.3s ease';
    toggleSwitch.style.border = '2px solid #ffffff';
    
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
    
    // Описание функции
    const lowercaseNameInfo = document.createElement('div');
    lowercaseNameInfo.style.color = '#cccccc';
    lowercaseNameInfo.style.fontFamily = 'Arial, sans-serif';
    lowercaseNameInfo.style.fontSize = '10px';
    lowercaseNameInfo.style.marginTop = '5px';
    lowercaseNameInfo.style.lineHeight = '1.4';
    lowercaseNameInfo.textContent = lowercaseNameEnabled ? 
        currentLanguage.lowercaseNameInfoEnabled : 
        currentLanguage.lowercaseNameInfoDisabled;
    menu.appendChild(lowercaseNameInfo);
}

function createMenuButton(text, onClick) {
    const button = document.createElement('button');
    button.textContent = text;
    button.style.padding = '8px 12px';
    button.style.background = 'linear-gradient(45deg, #333333, #555555)';
    button.style.color = 'white';
    button.style.border = '1px solid #ffffff';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    button.style.fontFamily = 'Arial, sans-serif';
    button.style.fontSize = '12px';
    button.style.fontWeight = 'bold';
    button.style.transition = 'all 0.2s ease';
    button.style.width = '100%';
    button.style.textAlign = 'left';
    
    button.onmouseover = function() {
        this.style.transform = 'scale(1.02)';
        this.style.boxShadow = '0 0 8px rgba(255,255,255,0.3)';
    };
    
    button.onmouseout = function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = 'none';
    };
    
    button.onclick = onClick;
    
    return button;
}

function createSeparator() {
    const separator = document.createElement('div');
    separator.style.height = '1px';
    separator.style.background = '#666';
    separator.style.margin = '5px 0';
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

// Обработчик клика вне меню
document.addEventListener('click', function(event) {
    const settingsBtn = document.getElementById('settings-btn');
    const settingsMenu = document.getElementById('settings-menu');
    
    if (settingsMenu && settingsBtn && settingsMenu.style.display === 'flex') {
        if (!settingsBtn.contains(event.target) && !settingsMenu.contains(event.target)) {
            closeAllMenus();
        }
    }
});

// Предотвращаем закрытие меню при клике внутри него
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
    }, 1000);
});

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createSettingsButton);
    document.addEventListener('DOMContentLoaded', createSettingsMenu);
} else {
    createSettingsButton();
    createSettingsMenu();
}

// Очистка при перезагрузке
window.addEventListener('beforeunload', function() {
    stopEmojiAutoPress();
});

// Экспорт функций для глобального доступа
window.applyCustomGradientTheme = applyCustomGradientTheme;
window.openGradientColorPicker = openGradientColorPicker;
window.applyDefaultFont = applyDefaultFont;
window.applyHalloweenFont = applyHalloweenFont;
window.applyFuturisticFont = applyFuturisticFont;
window.applyMysteriousFont = applyMysteriousFont;
window.resetToOriginal = resetToOriginal;
window.changeLanguage = changeLanguage;
window.toggleBadges = toggleBadges;
window.showChangelog = showChangelog;
window.toggleEmojiAutoPress = toggleEmojiAutoPress;
window.startEmojiAutoPress = startEmojiAutoPress;
window.stopEmojiAutoPress = stopEmojiAutoPress;
window.toggleCrystalColors = toggleCrystalColors;
window.enableCrystalColors = enableCrystalColors;
window.disableCrystalColors = disableCrystalColors;
window.toggleLowercaseName = toggleLowercaseName;
window.enableLowercaseName = enableLowercaseName;
window.disableLowercaseName = disableLowercaseName;