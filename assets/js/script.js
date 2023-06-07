console.log('Static file is loaded');

let weeksContainer = document.querySelectorAll(".weekly__container");
let dly = document.querySelectorAll(".dly");
let wly = document.querySelectorAll(".wly");


// var element = document.getElementById(element_id);
// element.className += " " + newClassName;
// console.log(dly);

// activeBtn

function showWeeklyData() {
    for (letsingleClass of weeksContainer) {
        letsingleClass.style.display = "flex";
    }



    for (letsingleClass of wly) {
        console.log(letsingleClass.className += " " + "activeBtn");
    }
    for (letsingleClass of dly) {
        letsingleClass.className = "weekly-daily-btn";
        // letsingleClass.className += "dly";

    }

}

function showDailyData() {
    for (letsingleClass of weeksContainer) {
        letsingleClass.style.display = "none";
    }

    for (letsingleClass of dly) {
        console.log(letsingleClass.className += " " + "activeBtn");
    }
    for (letsingleClass of wly) {
        letsingleClass.className = "weekly-daily-btn";
        // letsingleClass.className += "wly";

    }
}


function hideFlash() {
    document.getElementById('flash-msg').style.display = 'none'
}