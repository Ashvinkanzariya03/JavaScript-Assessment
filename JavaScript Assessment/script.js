function change() {
    const dayBooking = document.querySelector("#day-booking").value;
    const slot = document.querySelector(".slot");
    const time = document.querySelector(".time");

    slot.style.display = "none";
    time.style.display = "none";



    if (dayBooking === "full-day") {
      slot.style.display = "none";
      time.style.display = "none";
    } else if (dayBooking === "half-day") {
      slot.style.display = "block";
      time.style.display = "none";
    } else if (dayBooking === "hourly-day") {
      slot.style.display = "none";
      time.style.display = "block";
    }
    else{
        slot.style.border="2px solid red"

    }
  }

  let username = document.querySelector("#username");
  let user = document.querySelector("#user");

  let mobile = document.querySelector("#mobile")
  let inpt_mobile = document.querySelector("#inpt-mobile")

  let inpt_email = document.querySelector("#inpt_email")
  let email = document.querySelector("#email")

  let no_Persons = document.querySelector("#no-Persons")
  let Persons = document.querySelector("#Persons")


  let inpt_date = document.querySelector("#inpt-date")
  let date = document.querySelector("#date")

  let inpt_time = document.querySelector("#inpt-time")
  let time = document.querySelector("#time")


  function err() {
    if (username.value == "") {
        user.innerHTML = "Enter your Name"
        user.style.color ="red"
        username.style.border="2px solid red"
        
    }else{
      user.innerHTML = ""
    }
    if (inpt_mobile.value == "") {
        mobile.innerHTML = "Enter your Mobile"
        mobile.style.color ="red"
        inpt_mobile.style.border="2px solid red"

    }else{
    mobile.innerHTML = ""
    }
    if (inpt_email.value == "") {
        email.innerHTML = "Enter your Email"
        email.style.color ="red"
        inpt_email.style.border="2px solid red"

    }else{
      email.innerHTML = ""
    }
    if (no_Persons.value == "") {
        Persons.innerHTML = "Enter your Number of Persons"
        Persons.style.color ="red"
        no_Persons.style.border="2px solid red"
        
    }else{
      Persons.innerHTML = ""
    }
    if (inpt_date.value == "") {
        date.innerHTML = "Enter your Date"
        date.style.color ="red"
        inpt_date.style.border="2px solid red"

    }else{
      date.innerHTML = ""
    }
    if (inpt_time.value == "") {
        time.innerHTML = "Enter your Time"
        time.style.color ="red"
        inpt_time.style.border="2px solid red"

    }else{
      time.innerHTML = ""
    } 
    return false
  }
