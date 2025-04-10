function setRandomRotation() {
    document.documentElement.style.setProperty('--random-x', Math.random().toFixed(2));
    document.documentElement.style.setProperty('--random-y', Math.random().toFixed(2));
    document.documentElement.style.setProperty('--random-z', Math.random().toFixed(2));
}

setInterval(setRandomRotation, 3000); // Change rotation every 3 seconds
setRandomRotation(); // Set initial rotation
