/**
 * Push data in dataLayer.
 * @param data
 */
const pushDataTag = (data) => {
    dataLayer.push(data);
};

/**
 * Binds all [data-tag] elements to sends tags with data-label and data-href.
 */
const elements = document.querySelectorAll('[data-tag]');
elements && [...elements].forEach(element => {
    element.addEventListener('click', () => {
        const data = {
            action: element.dataset.href,
            label: element.dataset.label
        };
        pushDataTag(data);
    });
});
