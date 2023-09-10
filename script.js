document.getElementById("submitbutton").addEventListener("click", function () {
    const dropdownlist = document.getElementById("dropdownlist").value;
    const textbox = parseFloat(document.getElementById("textbox").value);
    const planetimg = document.querySelector(".planetimg");
    // const planetInfo = document.getElementsByClassName("planetInfo");
    const planetcontent = document.querySelector(".planetcontent");
    const surfaceGravity = {
        mercury: { mass: 0.38, imgsrc: "mercury.png" },
        venus: { mass: 0.91, imgsrc: "venus.png" },
        jupiter: { mass: 2.36, imgsrc: "jupiter.png" },
        saturn: { mass: 0.92, imgsrc: " saturn.png" },
        uranus: { mass: 0.89, imgsrc: "uranus.png" },
        neptune: { mass: 1.12, imgsrc: "neptune.png" },
        pluto: { mass: 0.06, imgsrc: "pluto.png" },
        moon: { mass: 0.17, imgsrc: "moon.png" },
        mars: { mass: 0.38, imgsrc: "mars.png" },
    };

    if (!textbox) {
        planetimg.style.display = "none";
        planetcontent.innerHTML =
            `<h2 style="background-color:gray;color:white;text-align:center">Mass is required.</h2>`
    }

    else if (!dropdownlist) {
        planetimg.style.display = "none";
        planetcontent.innerHTML =
            "<h2 style=\"background-color:gray;color:white;;text-align:center;font-size:16;\">You did not choose a planet yet.</h2>"
    }

    else if (surfaceGravity.hasOwnProperty(dropdownlist)) {
        planetimg.style.display = "flex";//to make planetimg division visible
        const weightOnSelectedPlanet = textbox * surfaceGravity[dropdownlist].mass;
        planetcontent.innerHTML = 
        `<div style="color:white;padding:40px 130px;flex:1">Your Weight on <b> ${dropdownlist}</b> is: <br><div style="border-radius:100%;background-color:rgba(128, 128, 128, 0.4);
          padding: 35px;margin:10px;text-align:center"><b>${weightOnSelectedPlanet.toFixed(
            2)} kg</b></div></div>`;
        planetimg.innerHTML = `<img src="${surfaceGravity[dropdownlist].imgsrc}" height:100px;width:100px;>`;
    }
});