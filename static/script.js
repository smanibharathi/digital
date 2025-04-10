const textElement = document.querySelector(".text");
const words = ["Web", "Digital", "Mobile"];
let index = 0;

function changeText() {
    index = (index + 1) % words.length;
    textElement.textContent = words[index];
}

setInterval(changeText, 3000); // Change text every 3 seconds

function goToHowCanIHelp() {
    window.location.href = "/how-can-i-help"; 
}

document.addEventListener("DOMContentLoaded", function () {
    const continueBtn = document.querySelector(".continue-btn");
    const navHoverText = document.getElementById("navHoverText");

    // Show the full navbar text on hover
    continueBtn.addEventListener("mouseenter", function () {
        navHoverText.style.opacity = "1";
    });

    // Hide the navbar text when not hovering
    continueBtn.addEventListener("mouseleave", function () {
        navHoverText.style.opacity = "0";
    });
});



function showIframe() {
    const iframe = document.getElementById('helpFrame');
    iframe.src = "{{ url_for('how_can_i_help') }}";

    iframe.style.display = 'block';
}

function showIframe() {
    const iframe = document.getElementById('helpFrame');
    const btn = document.querySelector('.continue-btn');
    const url = btn.getAttribute('data-url');
    const container = document.getElementById('iframeContainer');
    iframe.src = url;
    container.style.display = 'flex';
}

function closeIframe() {
    const container = document.getElementById('iframeContainer');
    const iframe = document.getElementById('helpFrame');
    iframe.src = ''; // Optional: clear src
    container.style.display = 'none';
}