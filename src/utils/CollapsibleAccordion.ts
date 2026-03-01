type AccordionItem = HTMLElement;
type AccordionContent = HTMLElement;

interface AccordionOptions {
    selector?: string;
    closeDelay?: number;
    openDelay?: number;
    allowMultipleOpen?: boolean;
}

export class CollapsibleAccordion {
    private items: AccordionItem[] = [];
    private options: Required<AccordionOptions>;
    private animating = new WeakSet<HTMLElement>();

    constructor(options: AccordionOptions = {}) {
        this.options = {
            selector: options.selector ?? '.collapsible',
            closeDelay: options.closeDelay ?? 300,
            openDelay: options.openDelay ?? 125,
            allowMultipleOpen: options.allowMultipleOpen ?? false
        };

        this.init();
        this.addResizeListener();
    }

    private init(): void {
        this.items = Array.from(
            document.querySelectorAll<AccordionItem>(this.options.selector)
        );

        this.items.forEach(item => {
            item.setAttribute(
                'aria-expanded',
                String(item.classList.contains('active'))
            );

            item.addEventListener('click', () => this.onItemClick(item));
        });
    }

    private onItemClick(item: AccordionItem): void {
        if (this.animating.has(item)) return;

        const content = this.getContent(item);
        if (!content) return;

        const isActive = item.classList.contains('active');

        if (!this.options.allowMultipleOpen) {
            this.closeOthers(item);
        }

        if (isActive) {
            this.collapse(item, content);
        } else {
            this.expand(item, content);
        }
    }

    private closeOthers(current: AccordionItem): void {
        this.items.forEach(item => {
            if (item === current) return;
            if (!item.classList.contains('active')) return;

            const content = this.getContent(item);
            if (!content) return;

            this.collapse(item, content);
        });
    }

    private expand(item: AccordionItem, content: AccordionContent): void {
        this.animating.add(item);

        item.classList.add('active');
        item.setAttribute('aria-expanded', 'true');

        item.style.borderRadius = '15px 15px 0 0';
        content.style.borderRadius = '0 0 15px 15px';

        content.style.maxHeight = '0px';

        setTimeout(() => {
            content.style.maxHeight = `${content.scrollHeight}px`;

            content.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            });

            setTimeout(() => {
                this.animating.delete(item);
            }, this.options.closeDelay);
        }, this.options.openDelay);
    }

    private collapse(item: AccordionItem, content: AccordionContent): void {
        this.animating.add(item);

        item.classList.remove('active');
        item.setAttribute('aria-expanded', 'false');

        content.style.maxHeight = `${content.scrollHeight}px`;

        content.getBoundingClientRect(); // force reflow

        content.style.maxHeight = '0px';

        setTimeout(() => {
            item.style.borderRadius = '15px';
            content.style.borderRadius = '0 0 15px 15px';
            this.animating.delete(item);
        }, this.options.closeDelay);
    }

    private getContent(item: AccordionItem): AccordionContent | null {
        const el = item.nextElementSibling;
        if (!el || !(el instanceof HTMLElement)) return null;
        return el;
    }

    private addResizeListener(): void {
        window.addEventListener('resize', () => {
            this.items.forEach(item => {
                if (!item.classList.contains('active')) return;
                const content = this.getContent(item);
                if (!content) return;

                const prevTransition = content.style.transition;
                content.style.transition = 'none';
                content.style.maxHeight = `${content.scrollHeight}px`;
                content.getBoundingClientRect();
                content.style.transition = prevTransition;
            });
        });
    }
}