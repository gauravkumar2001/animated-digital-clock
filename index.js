const hoursElement = document.getElementById("hours-text");
const minutesElement = document.getElementById("mins");
const secondsElement = document.getElementById("secs");
const ampmElement = document.getElementById("ampm");
const hhCircle = document.getElementById("hh");
const mmCircle = document.getElementById("mm");
const ssCircle = document.getElementById("ss");

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert 24-hour format to 12-hour format
    hours = hours % 12 || 12;

    // Update text values
    hoursElement.textContent = hours.toString().padStart(2, "0");
    minutesElement.textContent = minutes.toString().padStart(2, "0");
    secondsElement.textContent = seconds.toString().padStart(2, "0");
    ampmElement.textContent = ampm;

    // Update circle animations
    hhCircle.style.strokeDashoffset = 440 - (440 * hours) / 12; // 12 hours
    mmCircle.style.strokeDashoffset = 440 - (440 * minutes) / 60; // 60 minutes
    ssCircle.style.strokeDashoffset = 440 - (440 * seconds) / 60; // 60 seconds

    // Rotate dots
    document.querySelector(".h_dot").style.transform = `rotate(${30 * hours}deg)`; // 360° / 12
    document.querySelector(".m_dot").style.transform = `rotate(${6 * minutes}deg)`; // 360° / 60
    document.querySelector(".s_dot").style.transform = `rotate(${6 * seconds}deg)`; // 360° / 60
}

// Update the clock every second
setInterval(updateClock, 1000);
updateClock();
