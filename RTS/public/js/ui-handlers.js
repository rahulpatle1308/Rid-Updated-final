/* ==================== UI HANDLERS - FIXED VERSION ==================== */

class UIHandlers {
    constructor() {
        this.menuToggle = document.getElementById('menuToggle');
        this.mobileNav = document.getElementById('mobileNav');
        this.sidebarToggle = document.querySelector('.sidebar-toggle');
        this.sidebar = document.querySelector('.sidebar');
        this.isMenuOpen = false;
        this.isSidebarOpen = false;
    }

    init() {
        this.setupMobileMenu();
        this.setupSidebar();
        this.setupClickOutside();
        this.setupAccessibility();
    }

    setupMobileMenu() {
        if (!this.menuToggle || !this.mobileNav) return;

        this.menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleMobileMenu();
        });

        // Close menu when clicking links
        document.querySelectorAll('.mobile-menu-link').forEach(link => {
            link.addEventListener('click', () => {
                this.closeMobileMenu();
            });
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isMenuOpen) {
                this.closeMobileMenu();
            }
        });
    }

    toggleMobileMenu() {
        this.isMenuOpen = !this.isMenuOpen;
        this.mobileNav.classList.toggle('active');
        this.menuToggle.setAttribute('aria-expanded', this.isMenuOpen);
        
        // Toggle icon
        const icon = this.menuToggle.querySelector('i');
        if (icon) {
            icon.className = this.isMenuOpen ? 'fas fa-times' : 'fas fa-bars';
        }
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
    }

    closeMobileMenu() {
        this.isMenuOpen = false;
        this.mobileNav.classList.remove('active');
        this.menuToggle.setAttribute('aria-expanded', 'false');
        
        const icon = this.menuToggle.querySelector('i');
        if (icon) {
            icon.className = 'fas fa-bars';
        }
        
        document.body.style.overflow = '';
    }

    setupSidebar() {
        if (!this.sidebarToggle || !this.sidebar) return;

        this.sidebarToggle.addEventListener('click', () => {
            this.isSidebarOpen = !this.isSidebarOpen;
            this.sidebar.classList.toggle('open');
        });

        // Close sidebar on mobile when link clicked
        document.querySelectorAll('.sidebar a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 992 && this.sidebar) {
                    this.sidebar.classList.remove('open');
                    this.isSidebarOpen = false;
                }
            });
        });
    }

    setupClickOutside() {
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (this.isMenuOpen && 
                !this.mobileNav.contains(e.target) && 
                !this.menuToggle.contains(e.target)) {
                this.closeMobileMenu();
            }
            
            // Close sidebar when clicking outside on mobile
            if (window.innerWidth <= 992 && 
                this.isSidebarOpen && 
                this.sidebar && 
                !this.sidebar.contains(e.target) && 
                !this.sidebarToggle.contains(e.target)) {
                this.sidebar.classList.remove('open');
                this.isSidebarOpen = false;
            }
        });
    }

    setupAccessibility() {
        // Font size controls
        const increaseBtn = document.getElementById('increaseFont');
        const decreaseBtn = document.getElementById('decreaseFont');
        const resetBtn = document.getElementById('resetFont');

        if (increaseBtn) {
            increaseBtn.addEventListener('click', () => this.changeFontSize(1));
        }
        if (decreaseBtn) {
            decreaseBtn.addEventListener('click', () => this.changeFontSize(-1));
        }
        if (resetBtn) {
            resetBtn.addEventListener('click', () => this.resetFontSize());
        }
    }

    changeFontSize(direction) {
        const html = document.documentElement;
        let currentSize = parseFloat(getComputedStyle(html).fontSize) || 16;
        
        if (direction > 0) {
            currentSize = Math.min(currentSize + 2, 24); // Max 24px
        } else {
            currentSize = Math.max(currentSize - 2, 12); // Min 12px
        }
        
        html.style.fontSize = currentSize + 'px';
        localStorage.setItem('fontSize', currentSize);
    }

    resetFontSize() {
        document.documentElement.style.fontSize = '16px';
        localStorage.removeItem('fontSize');
    }
}

// Initialize globally
window.uiHandlers = new UIHandlers();