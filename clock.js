let myName = prompt("Adınızı Giriniz...")
if (myName != null) {
    document.getElementById("myName").innerHTML = myName;
}


function showTime(){
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var dayNum = date.getDate();
    var day = date.getDay();
    var hours = date.getHours(); // 0 - 23
    var minute = date.getMinutes(); // 0 - 59
    var sec = date.getSeconds(); // 0 - 59

    
    if(day==0){
        day="Pazar"
    } 
    else if (day == 1)
    {
        day="Pazartesi"
    }
    else if (day == 2)
    {
        day="Salı"
    }
    else if (day == 3)
    {
        day="Çarşamba"
    }
    else if (day == 4)
    {
        day="Perşembe"
    }
    else if (day == 5)
    {
        day="Cuma"
    }
    else if (day == 6)
    {
        day="Cumartesi"
    }

    
    hours = (hours < 10) ? "0" + hours : hours;
    minute = (minute < 10) ? "0" + minute : minute;
    sec = (sec < 10) ? "0" + sec : sec;
    
    var time = dayNum +"."+month+"."+year +" "+ day + " tarihinde saat "+hours + ":" + minute + ":" + sec + " "  ;
    document.getElementById("myClock").innerHTML = time;

    
    setTimeout(showTime, 1000); // 1000 milisecond = 1 saniyede bir fonk.nu çalıştırır.
    
}

showTime();


    

