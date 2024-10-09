document.addEventListener("DOMContentLoaded", function() {
    const element = document.getElementById("typed-name");
    const text = "Aditya";
    let index = 0;
    
    function typeWriter() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 150);
        }
    }
    
    typeWriter();
});