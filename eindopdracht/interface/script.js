function joyStatusRead() {

    fetch('../joyStatusRead.php')
        .then(response => response.json())
        .then(data => {
            var ballie = document.getElementById("ball")

            var posLeft = ballie.offsetLeft;
            var posTop = ballie.offsetTop;

            if(data.joy1Direction == "S"){
                console.log(ballie.offsetTop);
                ballie.style.marginTop = (posTop+10)+"px";
            }else  if(data.joy1Direction == "N"){
                console.log(ballie.offsetTop);
                ballie.style.marginTop = (posTop-10)+"px";
            }else if(data.joy1Direction == "E"){
                console.log(ballie.offsetTop);
                ballie.style.marginLeft = (posLeft+10)+"px";
            }else if(data.joy1Direction == "W"){
                console.log(ballie.offsetTop);
                ballie.style.marginLeft = (posLeft-10)+"px";
            }
            console.log(data.joy1Direction);
            // if (data.lightStatus == 1) {
            //     document.getElementById("switch").checked = true;
            // } else {
            //     document.getElementById("switch").checked = false;
            // }
            setTimeout(joyStatusRead, 500);
        });
}
joyStatusRead();

function bnameStatusRead() {
    fetch('../bnameStatusRead.php')
        .then(response => response.json())
        .then(data => {
            console.log(data.bnamestatus);
            document.getElementById("ball").innerHTML = data.bnamestatus;
            // if (data.lightStatus == 1) {
            //     document.getElementById("switch").checked = true;
            // } else {
            //     document.getElementById("switch").checked = false;
            // }
            setTimeout(bnameStatusRead, 500);

        });
}
bnameStatusRead();


function sliderStatusRead() {

    fetch('../sliderStatusread.php')
        .then(response => response.json())
        .then(data => {
            console.log(data.sliderstatus);
            if (data.sliderstatus == "true"){
                document.getElementById("ball").style.backgroundColor = 'green' ;
            }else if (data.sliderstatus == "false"){
                document.getElementById("ball").style.backgroundColor = 'red' ;
            }
            // if (data.lightStatus == 1) {
            //     document.getElementById("switch").checked = true;
            // } else {
            //     document.getElementById("switch").checked = false;
            // }
            setTimeout(sliderStatusRead, 500);

        });
}
sliderStatusRead();