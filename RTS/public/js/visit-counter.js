document.addEventListener("DOMContentLoaded", () => {

  function formatNumber(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1).replace(".0", "") + "M";
    if (num >= 1000) return (num / 1000).toFixed(1).replace(".0", "") + "K";
    return num;
  }

  // load existing counts
  fetch("/api/visits")
    .then(res => res.json())
    .then(data => {
      data.forEach(item => {
        const card = document.querySelector(`[data-course-id="${item.courseId}"]`);
        if (card) {
          const countEl = card.querySelector(".count");
          if (countEl) countEl.textContent = formatNumber(item.visits);
        }
      });
    });

  // click event
  document.querySelectorAll(".track-visit").forEach(btn => {
    btn.addEventListener("click", function (e) {

      const card = this.closest(".course-card");
      const id = card.dataset.courseId;

      fetch(`/api/visit/${id}`, { method: "POST" })
        .then(res => res.json())
        .then(data => {
          const countEl = card.querySelector(".count");

          if (countEl) {
            countEl.textContent = formatNumber(data.visits);

            countEl.classList.add("updated");
            setTimeout(() => countEl.classList.remove("updated"), 800);
          }
        });

    });
  });

});
