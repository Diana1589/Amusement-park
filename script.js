function changeFontSize(step) {
    let body = document.body;
    let currentSize=parseFloat(window.getComputedStyle(body,null).getPropertyValue("font-size"));

body.style.fonSize=(currentSize + step)+"px";
}



document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("themeToggle");
    const increaseText = document.getElementById("increaseText");
    const decreaseText = document.getElementById("decreaseText");
    
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
    
    function changeFontSize(step) {
        let body = document.body;
        let currentSize = parseFloat(window.getComputedStyle(body, null).getPropertyValue("font-size"));
        body.style.fontSize = (currentSize + step) + "px";
    }
    
    increaseText.addEventListener("click", function () {
        changeFontSize(2);
    });
    
    decreaseText.addEventListener("click", function () {
        changeFontSize(-2);
    });
});
