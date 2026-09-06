export function useLoader() {
    const getLoader = () => document.getElementById('page-loader');
    const getTextEl = () => document.querySelector('#page-loader p');

    const showLoader = (text?: string) => {
        const loader = getLoader();
        if (loader) {
            loader.classList.add('show');
            loader.style.display = '';
        }
        if (text) setLoaderText(text);
    };

    const hideLoader = () => {
        const loader = getLoader();
        if (loader) {
            loader.classList.remove('show');
            setTimeout(() => {
                if (loader.parentNode) loader.remove();
            }, 500);
        }
    };

    const setLoaderText = (text: string) => {
        const p = getTextEl();
        if (p) p.textContent = text;
    };

    return { showLoader, hideLoader, setLoaderText };
}