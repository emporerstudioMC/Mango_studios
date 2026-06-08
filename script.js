// Interactive JavaScript for Ad-Rich Website

// ==================== Floating Ad Management ====================

// Close floating ad
document.addEventListener('DOMContentLoaded', function() {
    const closeAdBtn = document.querySelector('.close-ad');
    const floatingAd = document.querySelector('.floating-ad');

    if (closeAdBtn) {
        closeAdBtn.addEventListener('click', function() {
            floatingAd.style.animation = 'popOut 0.4s ease forwards';
            setTimeout(() => {
                floatingAd.style.display = 'none';
            }, 400);
        });
    }

    // Reshow floating ad after 30 seconds if closed
    setTimeout(() => {
        if (floatingAd && floatingAd.style.display === 'none') {
            floatingAd.style.display = 'block';
            floatingAd.style.animation = 'popIn 0.4s ease';
        }
    }, 30000);

    // ==================== Newsletter Form ====================
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            showNotification(`Thanks for subscribing with ${email}! 🎉`);
            this.reset();
        });
    }

    // ==================== Contact Form ====================
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = this.querySelector('input[type="text"]').value;
            showNotification(`Thanks for reaching out, ${name}! We'll be in touch soon! 📧`);
            this.reset();
        });
    }

    // ==================== Ad Button Actions ====================
    const adButtons = document.querySelectorAll('.ad-button');
    adButtons.forEach(button => {
        button.addEventListener('click', function() {
            const adText = this.parentElement.textContent;
            if (adText.includes('Shop')) {
                showNotification('Redirecting to shop... 🛍️');
            } else if (adText.includes('Subscribe')) {
                showNotification('Starting subscription setup... 💳');
            } else if (adText.includes('Enroll')) {
                showNotification('Enrolling in course... 📚');
            } else if (adText.includes('Quote')) {
                showNotification('Sending quote request... 📬');
            } else if (adText.includes('Patron')) {
                showNotification('Opening patron page... 💜');
            } else if (adText.includes('Info')) {
                showNotification('Advertising info page loading... 📢');
            } else {
                showNotification('Ad action triggered! 🎯');
            }
        });
    });

    // ==================== CTA Button ====================
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // ==================== Project Buttons ====================
    const projectButtons = document.querySelectorAll('.project-button');
    projectButtons.forEach(button => {
        button.addEventListener('click', function() {
            const projectName = this.parentElement.querySelector('h3').textContent;
            showNotification(`Loading ${projectName}... 🎬`);
        });
    });

    // ==================== Smooth Scrolling ====================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // ==================== Notification System ====================
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(135deg, #FF6B6B, #FFE66D);
            color: white;
            padding: 15px 30px;
            border-radius: 8px;
            z-index: 10000;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            font-weight: bold;
            animation: slideDown 0.4s ease;
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideUp 0.4s ease';
            setTimeout(() => notification.remove(), 400);
        }, 3000);
    }

    // ==================== Ad Carousel Auto-Scroll ====================
    const adCarousel = document.querySelector('.ad-carousel');
    if (adCarousel) {
        let index = 0;
        setInterval(() => {
            index = (index + 1) % 3;
            adCarousel.style.transform = `translateX(-${index * 100}%)`;
        }, 5000);
    }

    // ==================== Stats Animation ====================
    const stats = document.querySelectorAll('.stat');
    const statsSection = document.querySelector('.stats-section');
    
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'countUp 1s ease';
                    observer.unobserve(entry.target);
                }
            });
        });

        stats.forEach(stat => observer.observe(stat));
    }

    // ==================== Lazy Loading for Images ====================
    const lazyImages = document.querySelectorAll('img[data-lazy]');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.lazy;
                    img.removeAttribute('data-lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    }

    // ==================== Ad View Tracking ====================
    const adElements = document.querySelectorAll('[class*="ad-"]');
    adElements.forEach((ad, index) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log(`Ad ${index} viewed`);
                }
            });
        });
        observer.observe(ad);
    });

    // ==================== Keyboard Navigation ====================
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const floatingAd = document.querySelector('.floating-ad');
            if (floatingAd && floatingAd.style.display !== 'none') {
                floatingAd.style.display = 'none';
            }
        }
    });

    // ==================== Particle Effects on Ad Hover ====================
    document.querySelectorAll('.ad-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            createConfetti(this);
        });
    });

    function createConfetti(element) {
        for (let i = 0; i < 5; i++) {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: absolute;
                width: 10px;
                height: 10px;
                background: ${['#FF6B6B', '#FFE66D', '#4ECDC4'][Math.floor(Math.random() * 3)]};
                border-radius: 50%;
                pointer-events: none;
                z-index: 1001;
            `;
            
            const rect = element.getBoundingClientRect();
            confetti.style.left = (rect.left + Math.random() * rect.width) + 'px';
            confetti.style.top = (rect.top + Math.random() * rect.height) + 'px';
            
            document.body.appendChild(confetti);

            const duration = Math.random() * 1 + 0.5;
            const xMove = (Math.random() - 0.5) * 200;
            const yMove = Math.random() * 200;

            confetti.animate([
                { 
                    transform: 'translate(0, 0)', 
                    opacity: 1 
                },
                { 
                    transform: `translate(${xMove}px, ${yMove}px)`, 
                    opacity: 0 
                }
            ], {
                duration: duration * 1000,
                easing: 'ease-out'
            }).onfinish = () => confetti.remove();
        }
    }

    // ==================== Dynamic Ad Refresh ====================
    setInterval(() => {
        const randomAdCard = document.querySelectorAll('.ad-card')[
            Math.floor(Math.random() * document.querySelectorAll('.ad-card').length)
        ];
        if (randomAdCard) {
            randomAdCard.style.animation = 'none';
            setTimeout(() => {
                randomAdCard.style.animation = 'pulse 0.6s ease';
            }, 10);
        }
    }, 15000);

    // ==================== Click Tracking ====================
    document.addEventListener('click', function(e) {
        if (e.target.closest('.ad-button') || e.target.closest('.ad-card')) {
            trackAdClick(e.target);
        }
    });

    function trackAdClick(element) {
        const adText = element.textContent.substring(0, 20);
        console.log(`Ad clicked: ${adText}`);
        
        // Create analytics ping
        const analyticsData = {
            timestamp: new Date().toISOString(),
            adText: adText,
            userAgent: navigator.userAgent
        };
        console.log('Analytics:', analyticsData);
    }

    // ==================== Keyframe Animations ====================
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideDown {
            from {
                transform: translateX(-50%) translateY(-100px);
                opacity: 0;
            }
            to {
                transform: translateX(-50%) translateY(0);
                opacity: 1;
            }
        }

        @keyframes slideUp {
            from {
                transform: translateX(-50%) translateY(0);
                opacity: 1;
            }
            to {
                transform: translateX(-50%) translateY(-100px);
                opacity: 0;
            }
        }

        @keyframes popOut {
            from {
                transform: scale(1);
                opacity: 1;
            }
            to {
                transform: scale(0);
                opacity: 0;
            }
        }

        @keyframes countUp {
            from {
                transform: scale(0.8);
                opacity: 0;
            }
            to {
                transform: scale(1);
                opacity: 1;
            }
        }

        @keyframes pulse {
            0%, 100% {
                box-shadow: 0 8px 16px rgba(255, 152, 0, 0.3);
            }
            50% {
                box-shadow: 0 12px 24px rgba(255, 152, 0, 0.5);
            }
        }
    `;
    document.head.appendChild(style);

    // ==================== Ad Impression Counter ====================
    const impressionCounter = sessionStorage.getItem('adImpressions') || 0;
    sessionStorage.setItem('adImpressions', parseInt(impressionCounter) + 1);
    console.log(`Total ad impressions this session: ${parseInt(impressionCounter) + 1}`);
});

// ==================== Page Load Animation ====================
window.addEventListener('load', function() {
    document.body.style.animation = 'fadeIn 0.5s ease';
});

// Fade in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(style);
