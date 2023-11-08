const body = document.querySelector("body")
const mins = document.querySelector(".mins")
const hours = document.querySelector(".hour")
const secs = document.querySelector(".secs")
const switchBtn = document.querySelector(".switch-btn")
const alarm = document.querySelector(".audio")
const testing = document.querySelector(".testing")
const eyes = document.querySelector(".eyes")
const alarmMain = document.querySelector(".alarm-main")
const clock = document.querySelector(".clock")
const changeClockColor = document.querySelectorAll(".clock label span")


// for backgroundc-color
const clr1 = document.querySelector(".clr-1").addEventListener("click", () => {clock.style.backgroundColor = "var(--white-color)"})
const clr2 = document.querySelector(".clr-2").addEventListener("click", () => {clock.style.backgroundColor = "#e7155b"})
const clr3 = document.querySelector(".clr-3").addEventListener("click", () => {clock.style.backgroundColor = "#29eb0f"})
const clr4 = document.querySelector(".clr-4").addEventListener("click", () => {clock.style.backgroundColor = "#eb0deb"})
const clr5 = document.querySelector(".clr-5").addEventListener("click", () => {clock.style.backgroundColor = "cyan"})

// for color
changeClockColor.forEach((colors) => {
    document.querySelector(".c-clr-1").addEventListener("click", () => {colors.style.color = "var(--black-color)"})
    document.querySelector(".c-clr-2").addEventListener("click", () => {colors.style.color = "#f50a93"})
    document.querySelector(".c-clr-3").addEventListener("click", () => {colors.style.color = "#f3a806"})
    document.querySelector(".c-clr-4").addEventListener("click", () => {colors.style.color = "#eb0d1f"})
    document.querySelector(".c-clr-5").addEventListener("click", () => {colors.style.color = "#0011ff"})
})


// Function to toggle dark mode
function toggleDarkMode() {
  body.classList.toggle("darkMode");
  if (body.classList.contains("darkMode")) {
    switchBtn.innerHTML = "Light Mode";
    // Save the dark mode state in local storage
    localStorage.setItem("darkMode", "on");
  } else {
    switchBtn.innerHTML = "Dark Mode";
    // Remove the dark mode state from local storage
    localStorage.removeItem("darkMode");
  }
}

// Add a click event listener to the switch button
switchBtn.addEventListener("click", toggleDarkMode);

// Check if dark mode is enabled in local storage and set it accordingly
const darkModeState = localStorage.getItem("darkMode");
if (darkModeState === "on") {
  toggleDarkMode();
}




testing.addEventListener("click", () => {
    testing.classList.toggle("red")
    if(testing.classList.contains("red")){
        alarm.play()
    }else{
        alarm.pause()
    }
    eyes.classList.toggle("eyes-green")
    alarmMain.classList.toggle("upDown")
})


const updateTime = () => {
    let date = new Date()
    let secToDeg = (date.getSeconds() / 60) * 360
    let minToDeg = (date.getMinutes() / 60) * 360
    let hourToDeg = (date.getHours() / 12) * 360

    let degitalSecs = Math.floor((date.getSeconds() / 60) * 60)
    let degitalMins = Math.floor((date.getMinutes() / 60) * 60)
    let degitalHours = (date.getHours() / 12) * 12
    
    secs.style.transform = `rotate(${secToDeg}deg)`
    mins.style.transform = `rotate(${minToDeg}deg)`
    hours.style.transform = `rotate(${hourToDeg}deg)`

    let finalSecs = degitalSecs.toString()
    let finalMins = degitalMins.toString()

    if(finalSecs.length <= 1){
        document.querySelector(".digital-secs").innerHTML = `0${degitalSecs}`
    }else {
        document.querySelector(".digital-secs").innerHTML = `${degitalSecs}`
    }

    if(finalMins.length <= 1){
        document.querySelector(".digital-mins").innerHTML = `0${degitalMins}`
    }else {
        document.querySelector(".digital-mins").innerHTML = `${degitalMins}`
    }

    document.querySelector(".digital-hours").innerHTML = degitalHours   
}
setInterval(updateTime, 1000)

updateTime()
