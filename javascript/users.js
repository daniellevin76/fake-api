let usersList = document.querySelector("#users-list");
const getUsersBtn = document.querySelector("#get-users-btn");
const userList = document.querySelector("#users-list");
let imageWrapper = document.querySelector("#image-wrapper");
let textP = document.querySelector(".left-side p")

let usersUrl = "https://reqres.in/api/users?page=2";

getUsersBtn.addEventListener("click", (e) => {
  e.preventDefault();
  fetchUsers(usersUrl);
});

function fetchUsers(url) {
  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      let dataArray = result.data;
      getUsersFirstName(dataArray);
    });
}

function getUsersFirstName(inData) {
  inData.forEach((user) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.innerHTML = user.first_name;
    a.addEventListener("click", (e) => {
      getUserInfo(user);
    });
    li.appendChild(a);
    userList.appendChild(li);
  });
  getUsersBtn.style.display = "none";
  textP.innerHTML = "Click on name to get more information"

}

function getUserInfo(user) {
  const image = document.createElement("img");
  const p = document.createElement("p");
  const h4 = document.createElement("h4")
 

  console.log(image.src);
  if (imageWrapper.getElementsByTagName("img").length > 0) {
    imageWrapper.innerHTML = "";
  }
  image.src = user.avatar;
  h4.innerHTML = `${user.first_name} ${user.last_name}`
  p.innerHTML= `Email: ${user.email}`

  imageWrapper.appendChild(h4);
  imageWrapper.appendChild(image);
  imageWrapper.appendChild(p)


  console.log(user);
}

