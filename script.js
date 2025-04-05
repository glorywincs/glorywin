document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('.about-card, .sponsor-card').forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            element.style.setProperty('--x', `${x}px`);
            element.style.setProperty('--y', `${y}px`);
        });
    });


    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        const scrollIndicator = document.querySelector('.scroll-indicator');
        
        if (currentScroll > lastScroll) {
            scrollIndicator.style.opacity = '0';
        } else {
            scrollIndicator.style.opacity = '1';
        }
        lastScroll = currentScroll;
    });


    tippy('[data-tippy-content]', {
        theme: 'gwin',
        animation: 'scale',
        duration: 200,
    });
});

document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.closest('.faq-item');
        const isActive = faqItem.classList.contains('active');
        

        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });


        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});