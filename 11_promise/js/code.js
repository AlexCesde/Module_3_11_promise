const dialogAboutMe = function (msg) {

    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (msg.length > 0) {
                resolve(msg);
            }
            else {
                reject(Error("Msg not valid"));
            }
        }, 1000);
    });
}

function example() {
    let out = "";

    dialogAboutMe("¡Hello!").then(function (msg) {
        out += `<h1>Promise ok: ${msg}</h1>`;
        document.getElementById("root").innerHTML = out;
    }, function (error) {
        out += `<h1>Promise error: ${error}</h1>`;
        document.getElementById("root").innerHTML = out;
    });
}

window.addEventListener("load", example);