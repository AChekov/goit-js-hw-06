// const form = document.querySelector(".login-form");

// form.addEventListener("submit", onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();

//   const {
//     elements: { email, password },
//   } = event.currentTarget;

//   if (email.value === "" || password.value === "") {
//     return console.log("Please fill in all the fields!");   // выводит сообщение в консоль
//   }
//   console.log(`Email: ${email.value}, Password: ${password.value}`);
//   event.currentTarget.reset();
// }

const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  const {
    elements: { email, password },
  } = evt.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!"); // выводит сообщение во всплывающем окне
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  evt.currentTarget.reset();
}
