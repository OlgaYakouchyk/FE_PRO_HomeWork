const toggleBtn = document.querySelector("#toggleBtn");
const mainbody = document.body;

function toggleDarkMode() {
  mainbody.classList.toggle("darkMode");
  const isDarkMode = mainbody.classList.contains("darkMode");
  localStorage.setItem("darkMode", isDarkMode)
}
const savedDarkMode = localStorage.getItem('darkMode')
if(savedDarkMode === 'true'){
    mainbody.classList.add("darkMode")
}

toggleBtn.addEventListener("click", toggleDarkMode);
