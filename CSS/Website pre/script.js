const translations = {
  en: {
    heading: "Welcome to Our E-Commerce Store",
    paragraph: "Please browse our collection of amazing products."
  },
  es: {
    heading: "Bienvenido a nuestra tienda en línea",
    paragraph: "Por favor, explore nuestra colección de productos increíbles."
  },
  fr: {
    heading: "Bienvenue dans notre boutique en ligne",
    paragraph: "Veuillez parcourir notre collection de produits incroyables."
  },
  de: {
    heading: "Willkommen in unserem Online-Shop",
    paragraph: "Bitte stöbern Sie in unserer erstaunlichen Produktauswahl."
  },
  hi: {
    heading: "हमारे ई-कॉमर्स स्टोर में आपका स्वागत है",
    paragraph: "कृपया हमारे अद्भुत उत्पाद संग्रह को ब्राउज़ करें।"
  }
};

function changeLanguage() {
  const selectedLanguage = document.getElementById('languageDropdown').value;
  document.getElementById('main-heading').textContent = translations[selectedLanguage].heading;
  document.getElementById('main-paragraph').textContent = translations[selectedLanguage].paragraph;
}
const themeButton = document.querySelector('button');
const contentBlock = document.getElementById('contentBlock');

// Initial theme is set to light (false = light, true = dark)
let isDarkTheme = false;

themeButton.addEventListener('click', () => {
  // Toggle theme button colors (Light to Dark and vice versa)
  if (isDarkTheme) {
    themeButton.style.backgroundColor = '#d4d4d4';  // New color for light theme button
    themeButton.style.color = 'black';            // Light theme button text color
  } else {
    themeButton.style.backgroundColor = '#000000';  // Dark theme button color
    themeButton.style.color = 'white';            // Dark theme button text color
  }

  // Toggle content block background color (Light to Dark and vice versa)
  if (isDarkTheme) {
    contentBlock.style.backgroundColor = '#ffffff'; // Light theme block background
    contentBlock.style.color = '#000000';           // Light theme block text color
  } else {
    contentBlock.style.backgroundColor = '#000000'; // Dark theme block background
    contentBlock.style.color = '#ffffff';           // Dark theme block text color
  }

  // Switch the theme state between dark and light
  isDarkTheme = !isDarkTheme;
});
