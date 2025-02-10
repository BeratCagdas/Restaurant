document.addEventListener("DOMContentLoaded", function () {
    let countdownTime = 5 * 60; // 5 dakika (saniye cinsinden)
    const timerElement = document.getElementById("timer");
    const discountBox = document.getElementById("discount-timer");

    function updateTimerDisplay() {
        let minutes = Math.floor(countdownTime / 60);
        let seconds = countdownTime % 60;
        timerElement.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }

    const countdownInterval = setInterval(() => {
        if (countdownTime > 0) {
            countdownTime--;
            updateTimerDisplay();
        } else {
            clearInterval(countdownInterval);
            discountBox.innerHTML = "<p><strong>Süre doldu! İndirim fırsatını kaçırdınız.</strong></p>";
        }
    }, 1000);

    updateTimerDisplay();
});
