(function () {
    // based on: https://jec.fyi/blog/supporting-dark-mode
    const bodyEl = document.body;
    const toggleEl = document.getElementById('color-scheme-toggle');

    const DARK = 'dark';
    const LIGHT = 'light';
    const COLOR_SCHEME_CHANGED = 'colorSchemeChanged';
    const STORAGE_KEY = 'color-scheme';

    toggleEl.addEventListener('click', () => {
        const isDark = bodyEl.classList.toggle('dark-mode');
        const mode = isDark ? DARK : LIGHT;
        localStorage.setItem(STORAGE_KEY, mode);

        if (isDark) {
            toggleEl.src = toggleEl.src.replace(DARK, LIGHT);
            toggleEl.alt = toggleEl.alt.replace(DARK, LIGHT);
        } else {
            toggleEl.src = toggleEl.src.replace(LIGHT, DARK);
            toggleEl.alt = toggleEl.alt.replace(LIGHT, DARK);
        }

        toggleEl.dispatchEvent(new CustomEvent(
            COLOR_SCHEME_CHANGED, { detail: mode }
        ));
    });

    function init() {
        const isSystemDarkMode = matchMedia &&
            matchMedia('(prefers-color-scheme: dark)').matches;

        let mode = localStorage.getItem(STORAGE_KEY);

        if (!mode && isSystemDarkMode) {
            mode = DARK;
        } else {
            mode = mode || LIGHT;
        }

        if (mode === DARK) {
            toggleEl.click();
        }
    }

    init();
}())