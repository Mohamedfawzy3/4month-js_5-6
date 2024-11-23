function parameters_num_check(x, y) {
  if (arguments.length < 2 || arguments.length > 2)
    throw "The arguments must be 2";
}
parameters_num_check(6, 7);
// ==============================
function nums(...nums) {
  let args = arguments;
  if (arguments.length == 0)
    throw "Must entered arguments for the nums Function";

  for (let arg in args) {
    if (typeof args[arg] != "number") throw "the data type must be number";
  }
}
nums(99, 9);
// ========================
function setCookie(cookieName, cookieValue, expiryDate) {
  let cookie = `${cookieName}=${cookieValue}; expires=${expiryDate}`;
  document.cookie = cookie;
}
function deleteCookie(cookieName) {
  document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
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

function cash() {
  let gender;
  let name = document.querySelector(".form [type='text']").value;
  let age = document.querySelector(".form [type='number']").value;
  document.querySelectorAll(".form [type='radio']").forEach((el) => {
    if (el.checked) {
      console.log("kjoo");
      gender = el.value;
    }
  });
  let color = document.querySelector(".form select").value;
  setCookie("name", name, new Date(Date.now() + 7));
  setCookie("age", age, new Date(Date.now() + 7));
  setCookie("gender", gender, new Date(Date.now() + 7));
  setCookie("color", color, new Date(Date.now() + 7));

  if (getCookie("visits") == null)
    setCookie("visits", "0", new Date(Date.now() + 7));
  window.location.replace("second.html");
}
// ========================
let data;
function getAll() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      data.forEach((user) => {
        document.querySelector("tbody").innerHTML += `  <tr id="${user.id}">
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td><span onClick="user_data(this)">View Details</span></td>
       </tr>`;
      });
    }
  };
  xhr.send();
}
// get one user
let dataOfUser;
function get_specified_user(id, myFun) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", `https://jsonplaceholder.typicode.com/users/${id}`, true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      dataOfUser = JSON.parse(xhr.responseText);
      myFun(dataOfUser);
    }
  };
  xhr.send();
}
function user_data(el) {
  console.log(el.closest("tr").id);
  get_specified_user(el.closest("tr").id, function (data) {
    console.log(data);
    display_data(data);
  });
}
function display_data(data) {
  for (let key in data) {
    console.log("key", key);
    if (typeof data[key] == "object" && data[key] != null) {
      display_data(data[key]);
    }
    const element = document.createElement("div");
    element.innerHTML = `${key} : ${data[key]}`;
    document.querySelector(".data").append(element);
  }
}
