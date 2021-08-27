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

const $sendButton = document.querySelector(".send-button");
$sendButton.addEventListener("click", sendUser);
