let name, email, pass, gender, sports, county,form;
form = document.querySelector('.form' )
name = document.querySelector('.form  [type="text"]');
email = document.querySelector(".form [type='email']");
pass = document.querySelector(".form [type='password']");
gender = document.querySelectorAll(".form [type='radio']");
sports = document.querySelectorAll(".form [type='checkbox']");
county = document.querySelector(".form select");
let email_regx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
function check_inputs(e) {
  e.preventDefault();
  console.log("name", name);
  if (name.value == "")
    document.querySelector(".name-msg").style.display = "block";
  else document.querySelector(".name-msg").style.display = "none";
  if (email_regx.test(email.value))
    document.querySelector(".email-msg").style.display = "none";
  else document.querySelector(".email-msg").style.display = "block";
  if (pass.value.length < 8)
    document.querySelector(".pass-msg").style.display = "block";
  else document.querySelector(".pass-msg").style.display = "none";
  if (county.value == "select")
    document.querySelector(".country-msg").style.display = "block";
  else document.querySelector(".country-msg").style.display = "none";
  function check_sports() {
    let checkSports = 0;
    console.log("decond", sports[1].checked);
    for (let i = 0; i < sports.length; i++) {
      if (sports[i].checked) {
        checkSports++;
      }
    }
    return checkSports;
  }
  if (check_sports() < 2)
    document.querySelector(".sports-msg").style.display = "block";
  else document.querySelector(".sports-msg").style.display = "none";
  if (gender[1].checked || gender[0].checked)
    document.querySelector(".gender-msg").style.display = "none";
  else document.querySelector(".gender-msg").style.display = "block";
}
// =========== reset form ==========
function reset_form(){
  console.log("form",form)
form.reset()
}
// ========== traffic =============
let spans=document.querySelectorAll(".traffic span")
let title=document.querySelector(".container p")
let i=0
setInterval(()=>{
spans.forEach(el => {
  el.style.background="transparent"
});
spans[i].style.background=spans[i].className
title.innerHTML=spans[i].getAttribute("state")
i++
if(i==3)
  i=0
},2000)
// ===== Prevent context menu ======
document.addEventListener("contextmenu", function (event) {
  event.preventDefault(); 
});
// ======= asci code ==========
document.addEventListener("keydown", function (event) {
  const asciiCode = event.keyCode || event.which
  let keyType = "Other Key";

  if (event.altKey) keyType = "Alt Key";
  else if (event.ctrlKey) keyType = "Ctrl Key";
  else if (event.shiftKey) keyType = "Shift Key";

  document.querySelector(".asci").innerHTML=`Key code: ${asciiCode}, Key type: ${keyType}`;
});