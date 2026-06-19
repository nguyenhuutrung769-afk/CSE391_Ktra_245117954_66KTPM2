document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("staffForm");
  const taskInput = document.getElementById("taskname");
  const nameError = document.getElementById("nameError");

  if (form && taskInput && nameError) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const taskValue = taskInput.value.trim();

      if (taskValue.length === 0) {
        nameError.textContent = "Tên task không được để trống!";
        return;
      }
      if (taskValue.length > 100) {
        nameError.textContent = "Tên task không được vượt quá 100 ký tự!";
        return;
      }

      nameError.textContent = "";
      alert("Task hợp lệ: " + taskValue);
    });
  }
});

const progressCircles = document.querySelectorAll(".progress-circle");
if (progressCircles.length > 0) {
  progressCircles.forEach(circle => {
    const status = (circle.dataset.status || "").toLowerCase();
    let percent = 0;

    if (status === "to do") percent = 0;
    else if (status === "in progress") percent = 50;
    else if (status === "done") percent = 100;

    circle.style.background = `conic-gradient(#0d6efd ${percent}%, #e0e0e0 ${percent}%)`;

    const text = document.createElement("span");
    text.textContent = `${percent}%`;
    text.style.position = "absolute";
    text.style.zIndex = "1";
    circle.appendChild(text);
  });
}
