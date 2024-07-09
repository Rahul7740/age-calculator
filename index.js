let date = document.querySelector(".date");
let month = document.querySelector(".month");
let year = document.querySelector("#year");
let calculate = document.querySelector(".calculate-btn");
let realTime = new Date();

calculate.addEventListener("click", (event) => {
  event.preventDefault();
  d = new Date(year.value,month.value -1,date.value)
  asdf(d, realTime);
});
function asdf(d, realTime) {  
  // years-----------------------------------------------
  y_year = realTime.getFullYear() - d.getFullYear() ;
  // months----------------------------------------------
  if (d.getMonth() > realTime.getMonth()) {

    y_months = 12 - d.getMonth() + realTime.getMonth();
    y_year--
  } else {
    y_months = realTime.getMonth() - d.getMonth()
  }
  // date---------------------------------------------
  if (d.getDate() > realTime.getDate()) {
    let total_Dates = new Date(d.getFullYear(),d.getMonth()+1,0).getDate();
    y_Date = total_Dates - d.getDate() + realTime.getDate();
    y_months--
  } else {
    y_Date = realTime.getDate() - d.getDate();
  }
  // print-----------------------------------------------
  let age = "Your age➡ "+"days: " +y_Date+" | months: "+ y_months+" | year: " + y_year
  document.getElementById("para").innerHTML = age;
}