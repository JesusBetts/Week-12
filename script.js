function start() {
    startBase = document.getElementById("paragraph");
    startBase.innerHTML = "Hello World!";
    startBase.style.backgroundColor = "green";
    startBase.style.color = "white";
    startBase.style.padding = "20px";
    randNum();
    userNum();
    compNumb();
}

function randNum() {
    let ran = Math.floor(Math.random() + 10);
    let x = document.getElementById("random");
    x.innerHTML = ran;
    x.style.backgroundColor = "#280cc1";
    x.style.color = "white";
    x.style.padding = "20px";
    x.style.textAlign = "center";
    return ran;
}

function userNum() {
    let user = document.getElementById("getNumber").nodeValue;
    let y = document.getElementById("userNumber");
    y.innerHTML = user;
    y.style.color = "white";
    y.style.backgroundColor = "#ff00e2";
    y.style.padding = "20px";
    y.style.textAlign = "center";
    return user;
}

function compNum() {
    let a = userNum();
    let b = randNum();
    let z = document.getElementById("compare");

    if (a != b) {
        z.innerHTML = "Numbers are not the same. Computer got " + b + ", and user got " + a;
        z.style.color = "white";
        z.style.backgroundColor = "#ff0000";
        z.style.padding = "20px";
        z.style.textAlign = "center";
    } else if ( a == b) {
        z.innerHTML = "Numbers are the same. Computer got " + b + ", and user got " + a;
        z.style.color = "white";
        z.style.backgroundColor = "#00ff00";
        z.style.padding = "20px";
        z.style.textAlign = "center";
    }
}