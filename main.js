const value = document.querySelector(".value");


let startValue = 0;


value.innerHTML = startValue;


function loadingPercent() {
    startValue++;

    value.innerHTML = startValue;

    if(startValue === 100) {
        clearInterval(interval)
    }
    
}

const interval = setInterval(loadingPercent, 60000)


