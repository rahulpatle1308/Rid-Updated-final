/* ==================== BANNER FUNCTIONALITY ==================== */

class BannerSlider {
    constructor() {
        this.bannerTrack = document.querySelector('.banner-track');
        this.slides = document.querySelectorAll('.banner-slide');
        this.dots = document.querySelectorAll('.banner-dot');
        this.prevArrow = document.querySelector('.prev-arrow');
        this.nextArrow = document.querySelector('.next-arrow');
        
        this.currentIndex = 0;
        this.slideCount = this.slides.length;
        this.slideInterval = null;
        this.intervalTime = CONFIG.BANNER_AUTO_SLIDE_INTERVAL || 3000;
    }

    init() {
        if (this.slides.length === 0) return;
        this.updateBannerPosition();
        this.setupEventListeners();
        this.startAutoSlide();
    }

    updateBannerPosition() {
        const slideWidth = this.slides[0].clientWidth;
        if (slideWidth > 0) {
            this.bannerTrack.style.transform = `translateX(-${this.currentIndex * slideWidth}px)`;
        }

        this.dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentIndex);
        });
    }

    goToSlide(index) {
        this.currentIndex = (index < 0) ? this.slideCount - 1 :
            (index >= this.slideCount) ? 0 : index;
        this.updateBannerPosition();
        this.resetInterval();
    }

    handleSlideClick() {
        const link = this.slides[this.currentIndex].getAttribute('data-link');
        if (link) {
            window.location.href = link;
        }
    }

    setupEventListeners() {
        if (this.prevArrow) {
            this.prevArrow.addEventListener('click', (e) => {
                e.stopPropagation();
                this.goToSlide(this.currentIndex - 1);
            });
        }

        if (this.nextArrow) {
            this.nextArrow.addEventListener('click', (e) => {
                e.stopPropagation();
                this.goToSlide(this.currentIndex + 1);
            });
        }

        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', (e) => {
                e.stopPropagation();
                this.goToSlide(index);
            });
        });

        if (this.bannerTrack) {
            this.bannerTrack.addEventListener('click', () => this.handleSlideClick());
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.goToSlide(this.currentIndex - 1);
            if (e.key === 'ArrowRight') this.goToSlide(this.currentIndex + 1);
        });

        const banner = document.querySelector('.banner-main');
        if (banner) {
            banner.addEventListener('mouseenter', () => this.pauseSlider());
            banner.addEventListener('mouseleave', () => this.startAutoSlide());
        }
    }

    startAutoSlide() {
        this.slideInterval = setInterval(() => 
            this.goToSlide(this.currentIndex + 1), this.intervalTime);
    }

    pauseSlider() {
        clearInterval(this.slideInterval);
    }

    resetInterval() {
        this.pauseSlider();
        this.startAutoSlide();
    }
}

// Initialize globally
window.bannerSlider = new BannerSlider();