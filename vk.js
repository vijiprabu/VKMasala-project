function shop(event) {
  event.preventDefault();

  document.getElementById("button").addEventListener("click", function () {
    window.location.href = "vkpro.html";
  });
}
document.addEventListener("DOMContentLoaded", function () {
  const loginlink = document.getElementById("loginlink");
  const loginoptions = document.getElementById("loginoptions");
  const loginText = document.getElementById("loginText");
  const user = JSON.parse(sessionStorage.getItem("loggedInUser"));

  //if sign in name will get display
  if (user && user.username) {
    loginText.textContent = user.username;
  } else {
    loginText.textContent = "Login";
  }
  //to create logout function//and for sign in option
  loginlink.addEventListener("click", function (e) {
    e.preventDefault(); // prevent the default link action
    const user = JSON.parse(sessionStorage.getItem("loggedInUser"));
    loginoptions.innerHTML = "";
    if (user && user.username) {
      //Already login in-->show logout
      const logoutlink = document.createElement("a");
      logoutlink.href = "#";
      logoutlink.textContent = "Logout";
      logoutlink.addEventListener("click", function () {
        sessionStorage.removeItem("loggedInUser");
        alert("Logged out Successfully.");
        location.reload();
      });
      loginoptions.appendChild(logoutlink);
    } else {
      //not logged in-->Show Sign In and Register
      const signInLink = document.createElement("a");
      signInLink.href = "login.html";
      signInLink.textContent = "SignIn / Newuser";

      /*const registerLink = document.createElement("a");
      registerLink.href = "register.html";
      registerLink.textContent = "New User";*/

      loginoptions.appendChild(signInLink);
      //loginoptions.appendChild(registerLink);
    }

    //show th dropdown
    loginoptions.style.display =
      loginoptions.style.display === "block" ? "none" : "block";
  });

  //hide options when clicking elsewhere
  document.addEventListener("click", function (e) {
    if (!e.target.closest("#loginlink") && !e.target.closest("#loginoptions")) {
      loginoptions.style.display = "none";
    }
  });
});
/* window.location.href = "login.html"; // navigate to login.html
  });
});*/
/*---------------------------*/
document.getElementById("contactlink").addEventListener("click", function (e) {
  e.preventDefault();
  const message = `<h3>contact us</h3>
  <p>Email:support@vkmasala.com</p>
  <p>Phone: +1 234 567 890</p>
  <p>123,MainStreet, Erode</p>`;
  console.log(message);
  document.getElementById("contactMessage").innerHTML = message;
});

const menu = document.querySelector(".menu");
const menulist = document.querySelector("nav ul");
menu.addEventListener("click", () => {
  menulist.classList.toggle("showmenu");
  //showmenu is the classname which get added in ul classname
  //instead of toggle if we give add..when we click it will display
  //but it will remove when we click onceagian ..so use toggle
  //means toggling..meand adding and removing
});
/*let spices = [];
let addproducts = document.getElementById("cartitem");*/

/*updated version*/
function viewcart() {
  const user = sessionStorage.getItem("loggedInUser");
  if (!user) {
    //it returns
    //null--true
    //nonempty string "viji"--false
    alert("Please log in to view  cart.");
    window.location.href = "login.html";
    return;
  }
  //this code makes the data safety ..without
  //try and catch also code is correct..but its safer
  //anyone can edit the details in session storage and create fake
  //only for local purpose ..we chould use session and local storage
  try {
    const userdetails = JSON.parse(user);
    if (!userdetails.email || !userdetails.username) {
      //it does not means email is not equal to viji.tecg@gmail.com
      //it means..if user.email is missing,empty,null,or undefined..refer below the code
      throw new Error("Invalid User");
    }
    window.location.href = "addcart.html";
  } catch (e) {
    sessionStorage.removeItem("loggedInUser");
    alert("Invalid Session,Please log in again");
    window.location.href = "login.html";
  }
}
/* event.stopPropagation();
  spices = JSON.parse(localStorage.getItem("spices"));
  spices.forEach((item) => {
    addproducts.innerHTML += `<h3>${item.name}</h3>${item.price}`;
  });*/
//without += ..overwriting the content every time in the loop,
// so only the last item remains in the container.
// Fix: Append instead of overwrite
//-------------------------
//or we can use create element..which is safer
// each time when we add new div created and added
//  addproducts.innerHTML = ""; // clear existing content

/*spices.forEach((item) => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${item.name}</h3><p>${item.price}</p>`;
    addproducts.appendChild(div);
  });
  });/*--------------------------*/
/* ✅ Final Clarification
if (!userObj.email) → checks if email is missing or empty.

if (userObj.email !== "viji.tech@gmail.com") → checks for specific mismatch.
*/

/*✅ Example Values and Results:
userObj.email	!userObj.email is…
"viji.tech@gmail.com"	false
"" (empty string)	true
null	true
undefined	true
not present at all	true*/
/*function viewcart() {
  const user = sessionStorage.getItem("loggedInUser");
  if (!user) {
    // it returns
    // null -- true
    // nonempty string like "viji" -- false
    alert("Please log in to view cart.");
    window.location.href = "login.html";
  } else {
    window.location.href = "addcart.html";
  }
}*/
