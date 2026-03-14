/* ==================== RESPONSIVE MANAGER ==================== */
class ResponsiveManager {
    constructor() {
        this.isMobile = false;
        this.isTablet = false;
        this.isDesktop = false;
        this.init();
    }

    init() {
        this.detectDevice();
        this.setupResponsiveClasses();
        this.setupResizeHandler();
        this.setupTouchSupport();
        this.setupPrintStyles();
    }

    detectDevice() {
        const width = window.innerWidth;
        this.isMobile = width < 768;
        this.isTablet = width >= 768 && width < 992;
        this.isDesktop = width >= 992;
    }

    setupResponsiveClasses() {
        document.body.classList.remove('is-mobile', 'is-tablet', 'is-desktop');
        
        if (this.isMobile) {
            document.body.classList.add('is-mobile');
        } else if (this.isTablet) {
            document.body.classList.add('is-tablet');
        } else {
            document.body.classList.add('is-desktop');
        }
    }

    setupResizeHandler() {
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.detectDevice();
                this.setupResponsiveClasses();
                this.emitResizeEvent();
            }, 250);
        });
    }

    setupTouchSupport() {
        if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
            document.body.classList.add('touch-device');
            
            // Prevent double tap zoom
            let lastTouchEnd = 0;
            document.addEventListener('touchend', (e) => {
                const now = Date.now();
                if (now - lastTouchEnd <= 300) {
                    e.preventDefault();
                }
                lastTouchEnd = now;
            }, { passive: false });
        } else {
            document.body.classList.add('no-touch');
        }
    }

    setupPrintStyles() {
        // Add print button
        const printButton = document.createElement('button');
        printButton.className = 'print-button sr-only';
        printButton.innerHTML = '🖨️';
        printButton.title = 'Print Page';
        printButton.addEventListener('click', () => window.print());
        document.body.appendChild(printButton);
    }

    emitResizeEvent() {
        window.dispatchEvent(new CustomEvent('responsiveChange', {
            detail: {
                isMobile: this.isMobile,
                isTablet: this.isTablet,
                isDesktop: this.isDesktop,
                width: window.innerWidth,
                height: window.innerHeight
            }
        }));
    }
}

/* ==================== RESPONSIVE SIDEBAR ==================== */
class ResponsiveSidebar {
    constructor() {
        this.sidebar = document.querySelector('.sidebar');
        this.sidebarToggle = document.querySelector('.sidebar-toggle');
        this.sidebarClose = document.querySelector('.sidebar-close');
        this.mainContent = document.querySelector('.main-content');
        this.init();
    }

    init() {
        if (!this.sidebar) return;
        
        this.setupEventListeners();
        this.handleResponsiveState();
        this.setupKeyboardNavigation();
    }

    setupEventListeners() {
        if (this.sidebarToggle) {
            this.sidebarToggle.addEventListener('click', () => this.toggle());
        }

        if (this.sidebarClose) {
            this.sidebarClose.addEventListener('click', () => this.close());
        }

        // Close sidebar when clicking outside on mobile
        document.addEventListener('click', (e) => {
            if (window.innerWidth < 992 && 
                this.sidebar.classList.contains('open') &&
                !this.sidebar.contains(e.target) && 
                !this.sidebarToggle.contains(e.target)) {
                this.close();
            }
        });

        // Close sidebar on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.sidebar.classList.contains('open')) {
                this.close();
            }
        });

        // Listen for responsive changes
        window.addEventListener('responsiveChange', (e) => {
            this.handleResponsiveState(e.detail);
        });
    }

    toggle() {
        const isOpen = this.sidebar.classList.toggle('open');
        this.updateAriaAttributes(isOpen);
        this.toggleBodyScroll(isOpen);
    }

    open() {
        this.sidebar.classList.add('open');
        this.updateAriaAttributes(true);
        this.toggleBodyScroll(true);
    }

    close() {
        this.sidebar.classList.remove('open');
        this.updateAriaAttributes(false);
        this.toggleBodyScroll(false);
    }

    updateAriaAttributes(isOpen) {
        if (this.sidebarToggle) {
            this.sidebarToggle.setAttribute('aria-expanded', isOpen);
            this.sidebarToggle.setAttribute('aria-label', 
                isOpen ? 'Close sidebar' : 'Open sidebar');
        }
        
        this.sidebar.setAttribute('aria-hidden', !isOpen);
        
        // Announce state change for screen readers
        this.announceState(`Sidebar ${isOpen ? 'opened' : 'closed'}`);
    }

    announceState(message) {
        const announcement = document.getElementById('aria-announcement') || 
            this.createAnnouncementElement();
        announcement.textContent = message;
        
        // Clear after announcement
        setTimeout(() => {
            announcement.textContent = '';
        }, 1000);
    }

    createAnnouncementElement() {
        const announcement = document.createElement('div');
        announcement.id = 'aria-announcement';
        announcement.className = 'sr-only';
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        document.body.appendChild(announcement);
        return announcement;
    }

    toggleBodyScroll(isOpen) {
        if (window.innerWidth < 992) {
            document.body.style.overflow = isOpen ? 'hidden' : '';
        }
    }

    handleResponsiveState(detail) {
        if (!detail) {
            detail = {
                isMobile: window.innerWidth < 768,
                isTablet: window.innerWidth >= 768 && window.innerWidth < 992,
                isDesktop: window.innerWidth >= 992
            };
        }

        if (detail.isDesktop) {
            this.mainContent?.classList.add('has-sidebar');
            this.close(); // Close mobile sidebar if open
        } else {
            this.mainContent?.classList.remove('has-sidebar');
        }
    }

    setupKeyboardNavigation() {
        // Trap focus inside sidebar when open on mobile
        document.addEventListener('keydown', (e) => {
            if (window.innerWidth < 992 && 
                this.sidebar.classList.contains('open') && 
                e.key === 'Tab') {
                
                const focusableElements = this.sidebar.querySelectorAll(
                    'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
                );
                
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];
                
                if (e.shiftKey) {
                    if (document.activeElement === firstElement) {
                        e.preventDefault();
                        lastElement.focus();
                    }
                } else {
                    if (document.activeElement === lastElement) {
                        e.preventDefault();
                        firstElement.focus();
                    }
                }
            }
        });
    }
}

/* ==================== RESPONSIVE NAVIGATION ==================== */
class ResponsiveNavigation {
    constructor() {
        this.menuToggle = document.querySelector('.menu-toggle');
        this.navMenu = document.querySelector('.nav-menu');
        this.mobileNav = document.querySelector('.mobile-nav');
        this.init();
    }

    init() {
        if (!this.menuToggle || !this.navMenu) return;
        
        this.setupEventListeners();
        this.setupDropdowns();
        this.handleResponsiveState();
    }

    setupEventListeners() {
        this.menuToggle.addEventListener('click', () => this.toggleMenu());
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (this.navMenu.classList.contains('active') &&
                !this.navMenu.contains(e.target) &&
                !this.menuToggle.contains(e.target)) {
                this.closeMenu();
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.navMenu.classList.contains('active')) {
                this.closeMenu();
            }
        });

        // Close menu on resize to desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 992) {
                this.closeMenu();
            }
        });
    }

    toggleMenu() {
        const isOpen = this.navMenu.classList.toggle('active');
        this.menuToggle.setAttribute('aria-expanded', isOpen);
        this.menuToggle.setAttribute('aria-label', 
            isOpen ? 'Close navigation menu' : 'Open navigation menu');
        
        if (this.mobileNav) {
            this.mobileNav.classList.toggle('active');
        }
        
        // Toggle body scroll
        if (window.innerWidth < 992) {
            document.body.style.overflow = isOpen ? 'hidden' : '';
        }
    }

    openMenu() {
        this.navMenu.classList.add('active');
        this.menuToggle.setAttribute('aria-expanded', 'true');
        
        if (this.mobileNav) {
            this.mobileNav.classList.add('active');
        }
    }

    closeMenu() {
        this.navMenu.classList.remove('active');
        this.menuToggle.setAttribute('aria-expanded', 'false');
        
        if (this.mobileNav) {
            this.mobileNav.classList.remove('active');
        }
        
        document.body.style.overflow = '';
    }

    setupDropdowns() {
        const dropdownToggles = document.querySelectorAll('.has-dropdown > a');
        
        dropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                if (window.innerWidth < 992) {
                    e.preventDefault();
                    const parent = toggle.parentElement;
                    parent.classList.toggle('active');
                }
            });
        });
    }

    handleResponsiveState() {
        if (window.innerWidth >= 992) {
            this.closeMenu();
        }
    }
}

/* ==================== RESPONSIVE BANNER ==================== */
class ResponsiveBanner {
    constructor() {
        this.banner = document.querySelector('.banner-main');
        this.init();
    }

    init() {
        if (!this.banner) return;
        
        this.setupResponsiveBehavior();
        this.setupTouchGestures();
    }

    setupResponsiveBehavior() {
        // Adjust banner height based on viewport
        this.adjustBannerHeight();
        window.addEventListener('resize', () => this.adjustBannerHeight());
    }

    adjustBannerHeight() {
        if (!this.banner) return;
        
        const width = window.innerWidth;
        let height;
        
        if (width < 480) {
            height = 180;
        } else if (width < 768) {
            height = 200;
        } else if (width < 1024) {
            height = 250;
        } else {
            height = 300;
        }
        
        this.banner.style.height = `${height}px`;
    }

    setupTouchGestures() {
        if (!('ontouchstart' in window)) return;
        
        let touchStartX = 0;
        let touchEndX = 0;
        
        this.banner.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        this.banner.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe(touchStartX, touchEndX);
        }, { passive: true });
    }

    handleSwipe(startX, endX) {
        const swipeThreshold = 50;
        const diff = startX - endX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - next slide
                window.bannerSlider?.goToSlide(window.bannerSlider.currentIndex + 1);
            } else {
                // Swipe right - previous slide
                window.bannerSlider?.goToSlide(window.bannerSlider.currentIndex - 1);
            }
        }
    }
}

/* ==================== RESPONSIVE COURSES GRID ==================== */
class ResponsiveCourses {
    constructor() {
        this.coursesContainer = document.querySelector('.courses-container');
        this.init();
    }

    init() {
        if (!this.coursesContainer) return;
        
        this.setupResponsiveGrid();
        this.setupLazyLoading();
        this.setupIntersectionObserver();
    }

    setupResponsiveGrid() {
        this.adjustGridColumns();
        window.addEventListener('resize', () => this.adjustGridColumns());
    }

    adjustGridColumns() {
        if (!this.coursesContainer) return;
        
        const width = window.innerWidth;
        let columns;
        
        if (width < 480) {
            columns = 1;
        } else if (width < 768) {
            columns = 2;
        } else if (width < 1024) {
            columns = 3;
        } else if (width < 1200) {
            columns = 4;
        } else {
            columns = 5;
        }
        
        this.coursesContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    }

    setupLazyLoading() {
        const images = document.querySelectorAll('.course-card img[loading="lazy"]');
        
        images.forEach(img => {
            if (img.complete) {
                this.handleImageLoad(img);
            } else {
                img.addEventListener('load', () => this.handleImageLoad(img));
                img.addEventListener('error', () => this.handleImageError(img));
            }
        });
    }

    handleImageLoad(img) {
        img.style.opacity = '1';
        img.parentElement?.classList.add('loaded');
    }

    handleImageError(img) {
        console.error('Failed to load image:', img.src);
        img.src = '/img/placeholder.jpg'; // Fallback image
    }

    setupIntersectionObserver() {
        if (!('IntersectionObserver' in window)) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const card = entry.target;
                    card.classList.add('in-view');
                    observer.unobserve(card);
                }
            });
        }, {
            rootMargin: '50px',
            threshold: 0.1
        });
        
        document.querySelectorAll('.course-card').forEach(card => {
            observer.observe(card);
        });
    }
}

/* ==================== BACK TO TOP BUTTON ==================== */
class BackToTop {
    constructor() {
        this.button = this.createButton();
        this.init();
    }

    createButton() {
        const button = document.createElement('button');
        button.className = 'back-to-top';
        button.innerHTML = '↑';
        button.setAttribute('aria-label', 'Back to top');
        button.setAttribute('title', 'Back to top');
        document.body.appendChild(button);
        return button;
    }

    init() {
        this.setupEventListeners();
        this.toggleVisibility();
    }

    setupEventListeners() {
        this.button.addEventListener('click', () => this.scrollToTop());
        
        window.addEventListener('scroll', () => {
            this.toggleVisibility();
            this.button.classList.toggle('scrolled', window.scrollY > 100);
        });
        
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href === '#') return;
                
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    this.smoothScrollTo(target);
                }
            });
        });
    }

    toggleVisibility() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        
        if (scrollPosition > 300 && 
            scrollPosition < documentHeight - windowHeight - 100) {
            this.button.classList.add('visible');
        } else {
            this.button.classList.remove('visible');
        }
    }

    scrollToTop() {
        this.smoothScrollTo(document.body);
    }

    smoothScrollTo(element) {
        const targetPosition = element.getBoundingClientRect().top + window.scrollY;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 500;
        let start = null;
        
        const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const percentage = Math.min(progress / duration, 1);
            
            // Easing function
            const ease = percentage < 0.5 
                ? 2 * percentage * percentage 
                : -1 + (4 - 2 * percentage) * percentage;
            
            window.scrollTo(0, startPosition + distance * ease);
            
            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        };
        
        window.requestAnimationFrame(step);
    }
}

/* ==================== DARK MODE TOGGLE ==================== */
class DarkModeToggle {
    constructor() {
        this.toggleButton = document.querySelector('.theme-toggle');
        this.init();
    }

    init() {
        if (!this.toggleButton) return;
        
        this.loadPreference();
        this.setupEventListeners();
        this.updateButton();
    }

    loadPreference() {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const savedMode = localStorage.getItem('darkMode');
        
        if (savedMode === 'true' || (savedMode === null && prefersDark)) {
            this.enableDarkMode();
        }
    }

    setupEventListeners() {
        this.toggleButton.addEventListener('click', () => this.toggle());
        
        // Listen for system preference changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('darkMode')) {
                if (e.matches) {
                    this.enableDarkMode();
                } else {
                    this.disableDarkMode();
                }
            }
        });
    }

    toggle() {
        if (document.body.classList.contains('dark-mode')) {
            this.disableDarkMode();
        } else {
            this.enableDarkMode();
        }
    }

    enableDarkMode() {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'true');
        this.updateButton();
    }

    disableDarkMode() {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'false');
        this.updateButton();
    }

    updateButton() {
        const isDark = document.body.classList.contains('dark-mode');
        this.toggleButton.innerHTML = isDark ? '☀️' : '🌙';
        this.toggleButton.setAttribute('aria-label', 
            isDark ? 'Switch to light mode' : 'Switch to dark mode');
        this.toggleButton.title = isDark ? 'Light Mode' : 'Dark Mode';
    }
}

/* ==================== MAIN INITIALIZATION ==================== */
document.addEventListener('DOMContentLoaded', () => {
    // Initialize responsive manager first
    const responsiveManager = new ResponsiveManager();
    
    // Initialize all responsive components
    const responsiveSidebar = new ResponsiveSidebar();
    const responsiveNavigation = new ResponsiveNavigation();
    const responsiveBanner = new ResponsiveBanner();
    const responsiveCourses = new ResponsiveCourses();
    const backToTop = new BackToTop();
    const darkModeToggle = new DarkModeToggle();
    
    // Initialize existing components
    if (typeof Dashboard !== 'undefined') {
        const dashboard = new Dashboard();
        dashboard.init();
    }
    
    // Set initial CSS variables
    updateCSSVariables();
    window.addEventListener('resize', updateCSSVariables);
    
    // Performance optimization: Load non-critical resources
    setTimeout(() => {
        loadNonCriticalResources();
    }, 1000);
});

function updateCSSVariables() {
    const root = document.documentElement;
    const header = document.querySelector('.main-header');
    const sidebar = document.querySelector('.sidebar');
    
    if (header) {
        root.style.setProperty('--header-height', `${header.offsetHeight}px`);
    }
    
    if (sidebar && window.innerWidth >= 992) {
        root.style.setProperty('--sidebar-width', `${sidebar.offsetWidth}px`);
    }
    
    root.style.setProperty('--viewport-height', `${window.innerHeight}px`);
    root.style.setProperty('--viewport-width', `${window.innerWidth}px`);
}

function loadNonCriticalResources() {
    // Lazy load images that are below the fold
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
    });
    
    // Load external fonts if needed
    if (!sessionStorage.getItem('fontsLoaded')) {
        const fontLink = document.createElement('link');
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap';
        fontLink.rel = 'stylesheet';
        document.head.appendChild(fontLink);
        sessionStorage.setItem('fontsLoaded', 'true');
    }
}

/* ==================== PERFORMANCE OPTIMIZATIONS ==================== */
// Debounce function for resize events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function executedFunction(...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause animations and videos when page is not visible
        document.querySelectorAll('video, audio').forEach(media => media.pause());
    }
});

/* ==================== ERROR HANDLING ==================== */
window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
    // You can send errors to your analytics service here
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
});

/* ==================== SERVICE WORKER REGISTRATION ==================== */
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(error => {
            console.log('ServiceWorker registration failed:', error);
        });
    });
}