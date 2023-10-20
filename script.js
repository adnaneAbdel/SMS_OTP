const allInpute = document.querySelectorAll(".inputForm input");

window.onload = function(){
    allInpute[0].focus();
}
allInpute.forEach((input, index1) => {
    input.addEventListener("keyup" , (e) =>{
        const currentInput = input,
        nextInput = input.nextElementSibling,
        prevInput = input.previousElementSibling;

        
        if (nextInput && nextInput.hasAttribute("disabled") && currentInput.value ==! "") {
            nextInput.removeAttribute("disabled");
            nextInput.focus();
        }

        if (e.key === "Backspace") {
            allInpute.forEach((input, index2) => {
            if (index1 <= index2 && prevInput) {
            input.setAttribute("disabled", true);
            prevInput.focus();
    
}
            });
            
        }

    })
});


