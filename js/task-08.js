/* <form class="login-form">
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Login</button>
    </form>
 */

const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    alert("All fields must be filled");
    return;
  }

  const formData = {
    email: email.value,
    password: password.value,
  };

  console.log(formData);
  formRef.reset();
}
