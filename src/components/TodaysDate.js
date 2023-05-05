import React from "react";

const date = new Date();
// console.log(date);
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let name = date.getDay();
let ordinal = day;


if (name === 7){
  name = "Sunday"
}else if (name === 6){
  name = "Saturday"
}else if (name === 5 ){
  name = "Friday"
}else if (name === 4){
  name = "Thursday"
}else if (name === 3){
  name = "Wednesday"
}else if (name === 2 ){
  name = "Tuesday"
}else{
  name = "Monday"
}

if (month === 12){
  month = "December"
}else if (month === 11){
  month = "November"
}else if (month === 10 ){
  month = "October"
}else if (month === 9){
  month = "September"
}else if (month === 8){
  month = "August"
}else if (month === 7 ){
  month = "July"
}else if (month === 6 ){
  month = "June"
}else if (month === 5 ){
  month = "May"
}else if (month === 4 ){
  month = "April"
}else if (month === 3 ){
  month = "March"
}else if (month === 2 ){
  month = "February"
}else{
  month = "January"
}

if (day === 1 || day === 21 || day === 31 ){
  ordinal = "st"
} else if (day === 2 || day === 22){
  ordinal = "nd"
} else if (day === 3 || day === 23){
  ordinal = "rd"
} else if ((day >= 4 && day <= 20)|| (day >= 24 && day <= 30)){
  ordinal = "th"
}

let currentDate = `${name}, ${month} ${day}${ordinal}, ${year}`;

function TodaysDate () {
return (
<>
<h3 style ={{
  position: "absolute", 
  auto: "left",
  border: "1px",
  backgroundColor: "white",
  opacity: "0.4"
  }}>Today is {currentDate}</h3> 

</>
)
}
 
export default TodaysDate;