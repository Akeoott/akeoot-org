document.addEventListener('DOMContentLoaded', function () {
    const coll = document.querySelectorAll('.collapsible');

    coll.forEach(item => {
        item.addEventListener('click', function () {
            coll.forEach(otherItem => {
                if (otherItem !== this && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    const otherContent = otherItem.nextElementSibling;

                    otherItem.setAttribute('aria-expanded', 'false');

                    otherContent.style.maxHeight = null;

                    setTimeout(() => {
                        otherItem.style.borderRadius = '15px';
                        if (otherContent.style.borderRadius !== undefined) {
                            otherContent.style.borderRadius = '0 0 15px 15px';
                        }
                    }, 250);
                }
            });

            this.classList.toggle('active');
            const content = this.nextElementSibling;

            this.setAttribute('aria-expanded', this.classList.contains('active'));

            if (content.style.maxHeight) {
                content.style.maxHeight = null;

                setTimeout(() => {
                    this.style.borderRadius = '15px';
                    content.style.borderRadius = '0 0 15px 15px';
                }, 250);
            } else {
                this.style.borderRadius = '15px 15px 0 0';
                content.style.borderRadius = '0 0 15px 15px';

                setTimeout(() => {
                    content.style.maxHeight = content.scrollHeight + 'px';

                    content.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 125);
            }
        });
    });
});