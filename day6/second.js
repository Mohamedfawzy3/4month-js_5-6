let visits_num = parseInt(getCookie("visits")) + 1;
setCookie("visits", visits_num);
function setCookie(cookieName, cookieValue, expiryDate) {
  let cookie = `${cookieName}=${cookieValue}; expires=${expiryDate}`;
  document.cookie = cookie;
  console.log();
}
function getCookie(cookieName) {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [name, value] = cookie.split("=");
    if (name === cookieName) {
      return value;
    }
  }
  return null;
}
let name = document.querySelector(".name");
let visits = document.querySelector(".visits");
let gender = getCookie("gender");
let img_handle;
if (gender == "male") img_handle = 1;
else img_handle = 2;
document.querySelector("img").src = `./images/ (${img_handle}).jpg`;
name.style.color = getCookie("color");
visits.style.color = getCookie("color");
name.innerHTML = getCookie("name");
visits.innerHTML = getCookie("visits");
