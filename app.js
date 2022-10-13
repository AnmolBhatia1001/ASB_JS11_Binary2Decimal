const binaryValue = document.getElementById("binary");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click",(event)=>{
    let valueArray = (String(binaryValue.value)).split("")
    let reverseArray = valueArray.reverse();
    let sum = 0;

    // Positional Notation Method
    for(let i=0; i<reverseArray.length; i++){
        sum = sum + (reverseArray[i] * (2**i))
    }

    result.innerHTML += sum
    event.preventDefault()
})