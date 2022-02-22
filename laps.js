window.onload=function(){
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");
    const tens = document.getElementById("tens");

    const startButton = document.getElementById("start-btn");
    const stopButton = document.getElementById("stop-btn");
    const resetButton = document.getElementById("reset-btn");

    let minutesSet = "00";
    let secondsSet = "00";
    let tensSet = "00";
    let Interval;

    // Start Button
    startButton.onclick=function(){
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
        dimEffect();

    };

    // Stop Button
    stopButton.onclick=function(){
        if(Interval) {
            clearInterval(Interval);
            dimEffect();
            Interval = false;

            const lap = document.getElementById("laps");
            const li = document.createElement("li");
            li.innerHTML = `lap : <span>${minutes.innerHTML}:${seconds.innerHTML}:${tens.innerText}</span>`;
            lap.appendChild(li);
        }

    }

    // Reset Button
    resetButton.onclick=function(){
        clearInterval(Interval);
        dimEffect();
        Interval = false;
        minutesSet = "00";
        secondsSet = "00";
        tensSet = "00";
        minutes.innerHTML=minutesSet;
        seconds.innerHTML=secondsSet;
        tens.innerHTML=tensSet;

        document.getElementById("laps").innerHTML = "";
    }

    function startTimer(){
        tensSet++;
        console.log(tensSet);

        tens.innerHTML = tensSet;
        if (tensSet > 99){
            secondsSet++;
            seconds.innerHTML = "0" + secondsSet;
            tensSet = 0;
            tens.innerHtml = "0" + 0;
        }

        if (secondsSet > 9){
            seconds.innerHTML = secondsSet;
        }
        if(secondsSet === 60){
            minutesSet++;
            minutes.innerHTML = "0" + minutesSet;
            secondsSet = 0;
        }

        if (minutesSet > 9){
            minutes.innerHTML = minutesSet;
        }
    }

    // Dimming Effect function
    function dimEffect(){
        const lapTime=document.querySelector(".lap-time");
        lapTime.classList.toggle("diming-effect");
    }
};


