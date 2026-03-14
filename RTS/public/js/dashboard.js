/* ==================== MAIN DASHBOARD INITIALIZATION ==================== */

class Dashboard {
    constructor() {
        this.visitCounter = window.visitCounter;
        this.bannerSlider = window.bannerSlider;
        this.searchFilter = window.searchFilter;
        this.uiHandlers = window.uiHandlers;
    }

    async init() {
        // Initialize all components
        if (this.visitCounter) {
            this.visitCounter.initializeBadges();
            await this.visitCounter.loadAllVisitCounts();
        }
        
        if (this.bannerSlider) {
            this.bannerSlider.init();
        }
        
        if (this.searchFilter) {
            this.searchFilter.init();
        }
        
        if (this.uiHandlers) {
            this.uiHandlers.init();
        }

        // Setup visit tracking
        this.setupVisitTracking();

        // Auto refresh visit count every 30 sec
        if (this.visitCounter) {
            setInterval(() => this.visitCounter.loadAllVisitCounts(), 30000);
        }
    }

    setupVisitTracking() {
        document.querySelectorAll(".track-visit").forEach(btn => {
            btn.addEventListener("click", async (e) => {
                e.preventDefault();

                const card = btn.closest(".course-card");
                if (!card) return;

                const courseId = card.dataset.courseId;
                const courseName = card.dataset.courseName;
                const redirectUrl = btn.getAttribute("href");

                if (this.visitCounter && courseId) {
                    try {
                        await this.visitCounter.trackVisit(courseId, courseName);
                    } catch (error) {
                        console.error("Visit tracking failed:", error);
                    }
                }

                if (redirectUrl) {
                    window.location.href = redirectUrl;
                }
            });
        });
    }
}

// Start when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    const dashboard = new Dashboard();
    dashboard.init();
});