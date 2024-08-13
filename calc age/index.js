const age_input = document.getElementById("date");

const Calc_Age_Btn = document.getElementById("calc-age-button");

const year = document.getElementById("years")
const month = document.getElementById("months")
const day = document.getElementById("days")

Calc_Age_Btn.addEventListener("click", function () {
     
     var age = age_input.value;


     var current_date = new Date();

     var birth_date = new Date(age);

     y1 = birth_date.getFullYear();
     m1 = birth_date.getMonth();
     d1 = birth_date.getDate();

     y2 = current_date.getFullYear();
     m2 = current_date.getMonth();
     d2 = current_date.getDate();

     console.log(y1 + " " + m1 + " " + d1);

     console.log(y2 + " " + m2 + " " + d2);

     var y3 = y2 - y1;

     console.log(y3)

     if (m2 >= m1) {
          m3 = m2 - m1;
     } else {
          console.log("month else")
          y3--;
          m3 = 12 + m2-m1;
     }
     if (d2 >= d1) {
       d3 = d2 - d1;
     } else {
          m3--;
          d3 = 31 + d2 - d1;
  }

  

     if (m3 < 0) {
          m3 += 12;
          y3--;
     }

        console.log(y3);
        
       console.log(m3);
     
     console.log(d3);

     year.innerHTML = y3;
     month.innerHTML = m3;
     day.innerHTML = d3;


})
