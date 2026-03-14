/* ==================== SEARCH FUNCTIONALITY ==================== */

class SearchFilter {
    constructor() {
        this.searchInput = document.getElementById("searchInput");
        this.mobileSearchInput = document.getElementById("mainMobileSearchInput");
        this.courseCards = document.querySelectorAll(".course-card");
    }

    init() {
        if (this.searchInput) {
            this.searchInput.addEventListener("keyup", () => 
                this.filterCourses(this.searchInput.value));
        }

        if (this.mobileSearchInput) {
            this.mobileSearchInput.addEventListener("keyup", () => 
                this.filterCourses(this.mobileSearchInput.value));
        }
    }

    filterCourses(value) {
        value = value.toLowerCase().trim();
        let visibleCount = 0;

        this.courseCards.forEach(card => {
            const title = card.querySelector("h3").innerText.toLowerCase();
            const courseName = card.getAttribute('data-course-name').toLowerCase();

            if (value === '' || title.includes(value) || courseName.includes(value)) {
                card.style.display = "flex";
                visibleCount++;
            } else {
                card.style.display = "none";
            }
        });

        // Show message if no courses found
        const coursesSection = document.querySelector('.courses-section');
        if (coursesSection) {
            let noResultsMsg = coursesSection.querySelector('.no-results-message');
            
            if (visibleCount === 0 && value !== '') {
                if (!noResultsMsg) {
                    noResultsMsg = document.createElement('div');
                    noResultsMsg.className = 'no-results-message';
                    noResultsMsg.innerHTML = `<p>No courses found for "<strong>${value}</strong>"</p>`;
                    noResultsMsg.style.textAlign = 'center';
                    noResultsMsg.style.padding = '40px';
                    noResultsMsg.style.color = '#666';
                    coursesSection.appendChild(noResultsMsg);
                }
            } else if (noResultsMsg) {
                noResultsMsg.remove();
            }
        }
    }
}

// Initialize globally
window.searchFilter = new SearchFilter();