// Collapsible section functionality
document.addEventListener('DOMContentLoaded', function () {
    const coll = document.querySelectorAll('.collapsible');

    coll.forEach(item => {
        item.addEventListener('click', function () {
            this.classList.toggle('active');
            const content = this.nextElementSibling;

            // Update aria-expanded attribute based on active state
            item.setAttribute('aria-expanded', item.classList.contains('active'));

            if (content.style.maxHeight) {
                // Collapsing
                content.style.maxHeight = null;
                content.style.padding = '0 1.2rem';
            } else {
                // Expanding
                content.style.maxHeight = content.scrollHeight + 'px';
                content.style.padding = '1.2rem';

                // Smooth scroll to the expanded content
                content.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
    });
});