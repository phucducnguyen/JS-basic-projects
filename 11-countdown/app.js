const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "FrfutureDateay",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate =new Date(2020,9,19,17,30,0);
//console.log(futureDate);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();
let day = futureDate.getDay();
day = weekdays[day];
giveaway.textContent = `giveaway ends on ${day}, ${date} ${month} ${year} ${hours}:${minutes}`;


// future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime(){
    const today = new Date().getTime();
    const timeLeft = futureDate - today;
    // convert ms 
    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;
    const oneSecond = 1000;
    // calculate 
    let days = Math.floor(timeLeft/oneDay);
    let hours = Math.floor((timeLeft%oneDay)/oneHour);
    let minutes = Math.floor((timeLeft%oneHour)/oneMinute);
    let seconds = Math.floor((timeLeft%oneMinute)/oneSecond);
    //console.log(days);
    //console.log(hours);
    //console.log(minutes);
    //console.log(seconds);
    
    const values = [days,hours,minutes,seconds];
    items.forEach(function(item,index){
        item.innerHTML = format(values[index]);
    });
    if(timeLeft<0){
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">sorry, this giveway has expired</h4>`;
    }
};
function format(item){
        if(item <10){
            return item = `0${item}`;
        }
        return item;
    };


// countdown

let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();