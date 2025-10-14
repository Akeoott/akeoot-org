// Collapsible section functionality
document.addEventListener('DOMContentLoaded', function () {
    const coll = document.querySelectorAll('.collapsible');

    coll.forEach(item => {
        item.addEventListener('click', function () {
            // Close all other collapsible sections
            coll.forEach(otherItem => {
                if (otherItem !== this && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    const otherContent = otherItem.nextElementSibling;

                    // Update aria-expanded attribute
                    otherItem.setAttribute('aria-expanded', 'false');

                    // Collapse other sections
                    otherContent.style.maxHeight = null;
                    otherContent.style.padding = '0 1.2rem';
                }
            });

            // Toggle the clicked section
            this.classList.toggle('active');
            const content = this.nextElementSibling;

            // Update aria-expanded attribute based on active state
            this.setAttribute('aria-expanded', this.classList.contains('active'));

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