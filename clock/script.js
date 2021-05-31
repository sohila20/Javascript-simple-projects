function currentTime() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var meridiem;
    if(hour>=12){
        meridiem="PM";
        if(hour>12)
            hour-=12;
    }
    else{
        if(hour == 0)
            hour=12;
        meridiem="AM";
    }
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    
    document.getElementById("digitalClock").innerText = hour + " : " + min + " : " + sec + " " +  meridiem;
    var t = setTimeout(currentTime, 1000); 
  }
// to add 0 before the digit if it's < 10
function updateTime(d) {
    if (d < 10) {
      return "0" + d;
    }
    else {
      return d;
    }
}

currentTime();