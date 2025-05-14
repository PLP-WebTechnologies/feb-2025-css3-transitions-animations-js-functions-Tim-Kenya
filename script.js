const animatedButton = document.getElementById('animatedButton');
const animatedImage = document.getElementById('animatedImage');
const themeSelect = document.getElementById('theme');
const preferenceDisplay = document.getElementById('preferenceDisplay');

// Function to store user preference in localStorage
function storePreference(key, value) {
    try {
        localStorage.setItem(key, value);
        console.log(`Stored ${key}: ${value}`);
    } catch (error) {
        console.error("Error storing in localStorage:", error);
    }
}

// Function to retrieve user preference from localStorage
function getPreference(key) {
    try {
        const value = localStorage.getItem(key);
        console.log(`Retrieved ${key}: ${value}`);
        return value;
    } catch (error) {
        console.error("Error retrieving from localStorage:", error);
        return null;
    }
}

// Function to trigger the button animation on click
function triggerButtonAnimation() {
    animatedButton.classList.add('pulsing');
    // Remove the class after the animation duration (adjust as needed)
    setTimeout(() => {
        animatedButton.classList.remove('pulsing');
    }, 1000);
}

// Function to trigger the image fade-in animation
function triggerImageAnimation() {
    animatedImage.classList.add('fadeIn');
}

// Event listener to trigger button animation
animatedButton.addEventListener('click', triggerButtonAnimation);

// Load and apply theme preference on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = getPreference('theme');
    if (savedTheme) {
        themeSelect.value = savedTheme;
        document.body.className = savedTheme + '-theme'; // Apply theme class to body
        preferenceDisplay.textContent = `Theme preference loaded: ${savedTheme}`;
    } else {
        preferenceDisplay.textContent = 'No theme preference saved.';
    }
    // Trigger image animation after a delay on load
    setTimeout(triggerImageAnimation, 500);
});

// Event listener to store theme preference on change
themeSelect.addEventListener('change', (event) => {
    const selectedTheme = event.target.value;
    storePreference('theme', selectedTheme);
    document.body.className = selectedTheme + '-theme'; // Apply theme class to body
    preferenceDisplay.textContent = `Theme preference saved: ${selectedTheme}`;
});
