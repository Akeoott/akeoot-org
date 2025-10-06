// Collapsible section functionality
document.addEventListener('DOMContentLoaded', function () {
    const coll = document.querySelectorAll('.collapsible');

    coll.forEach(item => {
        item.addEventListener('click', function () {
            this.classList.toggle('active');
            const content = this.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                content.style.padding = '0 1.2rem';
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
                content.style.padding = '1.2rem';
            }
        });
    });
});