// Jeg laver variablen btn der indeholder bindeled til classen .toggle-btn
const btn = document.querySelector(".toggle-btn");
// Jeg laver variablen menu der indeholder bindeled til classen .main-menu
const menu = document.querySelector(".main-menu");

function toggleMenu() {
  // jeg tilføjer classen shown med en toggle funktion på variablen menu.
  menu.classList.toggle("shown");

  // Jeg laver en ny variabel der tjekker om shown er på menu
  const menuShown = menu.classList.contains("shown");

  // Hvis shown er på menu sæt teksten til Luk
  if (menuShown) {
    btn.textContent = "Luk";
  } else {
    // i andre tilfælde sæt teksten til Menu
    btn.textContent = "Menu";
  }
}

// Til sidste tilføjer jeg et click event til btn der starter funktionen toggleMenu
btn.addEventListener("click", toggleMenu);
