// Definition of the user object
class User {
  constructor(name, lastName, tel, email, address, observations) {
    this.name = name;
    this.lastName = lastName;
    this.tel = tel;
    this.email = email;
    this.address = address;
    this.observations = observations;
  }
}

// Creates a user object based on the information in the form and sends it
// to the localstorage, checks the previous users and updates the information
// with the new data.
const sendUser = () => {
  const $formElements = document.querySelectorAll(".simple-text-box");
  console.log($formElements.length);
  const userData = [];
  $formElements.forEach((i) => {
    userData.push(i.value);
  });
  const savedData = JSON.parse(localStorage.getItem("register"));
  const userObject = new User(
    userData[0],
    userData[1],
    userData[2],
    userData[3],
    userData[4],
    userData[5]
  );
  console.log(userObject);
  if (savedData) {
    savedData.push(userObject);
    localStorage.setItem("register", JSON.stringify(savedData));
  } else {
    localStorage.setItem("register", JSON.stringify([userObject]));
  }
};

// Select the submit button of the form and add the event listener
const $sendButton = document.querySelector(".send-button");
$sendButton.addEventListener("click", sendUser);
