document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.seo-growth-item');

    accordionItems.forEach(function (item) {
        const trigger = item.querySelector('.seo-growth-trigger');
        const content = item.querySelector('.seo-growth-content');

        if (!trigger || !content) {
            return;
        }

        const setState = function (isOpen) {
            item.classList.toggle('is-open', isOpen);
            trigger.setAttribute('aria-expanded', String(isOpen));
            content.style.maxHeight = isOpen ? content.scrollHeight + 'px' : '0px';
        };

        trigger.addEventListener('click', function () {
            const isOpen = item.classList.contains('is-open');

            accordionItems.forEach(function (otherItem) {
                const otherTrigger = otherItem.querySelector('.seo-growth-trigger');
                const otherContent = otherItem.querySelector('.seo-growth-content');

                if (!otherTrigger || !otherContent) {
                    return;
                }

                otherItem.classList.remove('is-open');
                otherTrigger.setAttribute('aria-expanded', 'false');
                otherContent.style.maxHeight = '0px';
            });

            setState(!isOpen);
        });

        setState(false);
    });

    const faqItems = document.querySelectorAll('.seo-faq-item');

    faqItems.forEach(function (item) {
        const trigger = item.querySelector('.seo-faq-question');
        const answer = item.querySelector('.seo-faq-answer');

        if (!trigger || !answer) {
            return;
        }

        const setFaqState = function (isOpen) {
            item.classList.toggle('is-open', isOpen);
            trigger.setAttribute('aria-expanded', String(isOpen));
            answer.style.maxHeight = isOpen ? answer.scrollHeight + 'px' : '0px';
        };

        trigger.addEventListener('click', function () {
            const isOpen = item.classList.contains('is-open');

            faqItems.forEach(function (otherItem) {
                const otherTrigger = otherItem.querySelector('.seo-faq-question');
                const otherAnswer = otherItem.querySelector('.seo-faq-answer');

                if (!otherTrigger || !otherAnswer) {
                    return;
                }

                otherItem.classList.remove('is-open');
                otherTrigger.setAttribute('aria-expanded', 'false');
                otherAnswer.style.maxHeight = '0px';
            });

            setFaqState(!isOpen);
        });

        setFaqState(item.classList.contains('is-open'));
    });
});