document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("staffForm");
  const taskInput = document.getElementById("taskname");
  const nameError = document.getElementById("nameError");

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
});
