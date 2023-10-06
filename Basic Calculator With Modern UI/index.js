let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));

buttons.forEach(eachBtn => {
    eachBtn.addEventListener("click", (e) => {

        let val = e.target.innerText;
console.log(val);
        switch (val) {
            case "C":
                display.innerText = "";
                break;

            case "BackSpace":
                if (display.innerText) {
                    display.innerText = display.innerText.substring(0, display.innerText.length - 1);
                }
                break;

            case "=":
                if (display.innerText == "") {
                    alert("No value entered");
                } else {
                    display.innerText = eval(display.innerText);
                } break;

            default:
                display.innerText += val;
        }
    })
})