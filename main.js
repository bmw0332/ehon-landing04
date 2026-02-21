/* ============================================
   絵本メモリアルLP (2026.02.21) — main.js
   FAQ Accordion + Scroll Reveal
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ---------- FAQ Accordion ----------
    const faqItems = document.querySelectorAll('.faq__item');

    faqItems.forEach(item => {
        const btn = item.querySelector('.faq__question');
        const answer = item.querySelector('.faq__answer');

        btn.addEventListener('click', () => {
            const isOpen = item.classList.contains('is-open');

            // Close all
            faqItems.forEach(other => {
                other.classList.remove('is-open');
                other.querySelector('.faq__answer').style.maxHeight = null;
            });

            // Toggle current
            if (!isOpen) {
                item.classList.add('is-open');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });

    // ---------- Scroll Reveal ----------
    const reveals = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -40px 0px'
        });

        reveals.forEach(el => observer.observe(el));
    } else {
        // Fallback: show all immediately
        reveals.forEach(el => el.classList.add('is-visible'));
    }

});
