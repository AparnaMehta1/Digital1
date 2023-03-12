setInterval(()=>{
    let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let ampm= document.getElementById("ampm");
// STYLING
let hh = document.getElementById("hh");
let mm = document.getElementById("mm");
let ss= document.getElementById("ss");
// calling in-built function
let day = new Date();
let hr = day.getHours();
let min = day.getMinutes();
let sc = day.getSeconds();
let am = hr >= 12 ?"PM" : "AM";
// converting 24 hr in 12 hr
if(hr>12){
    hr = hr-12;
}
// adding zero before single digit
hr = hr<10 ? "0" + hr : hr;
min = min<10 ? "0" + min : min; 
sc = sc<10 ? "0" + sc : sc;
 // storing function into variable
hour.innerHTML = hr + "<br><span>HOURS</span>";
minute.innerHTML = min + "<br><span>MINUTES</span>";
second.innerHTML = sc + "<br><span>SECONDS</span>";
ampm.innerHTML = am;
// Styling circle
hh.style.strokeDashoffset = 440 - (440 * hr) /12 ;
mm.style.strokeDashoffset = 440 - (440 * min) /60 ;
ss.style.strokeDashoffset = 440 - (440 * sc) /60 ;
}, 1000)