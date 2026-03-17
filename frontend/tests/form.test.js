const { validateForm } = require("../script.js");

describe("Registration Form Validation", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <form id="registrationForm"></form>

      <input id="name" value="" />
      <div id="nameError"></div>

      <input id="mobile" value="" />
      <div id="mobileError"></div>

      <select id="gender">
        <option value=""></option>
        <option value="male">Male</option>
      </select>
      <div id="genderError"></div>

      <input id="password" value="" />
      <div id="passwordError"></div>
    `;
  });

  test("should show error if name is empty", () => {
    document.getElementById("name").value = "";
    validateForm();
    expect(document.getElementById("nameError").innerText).toBe(
      "Name is required"
    );
  });

  test("should show error if password is less than 8 characters", () => {
    document.getElementById("password").value = "123";
    validateForm();
    expect(document.getElementById("passwordError").innerText).toBe(
      "Password must be at least 8 characters"
    );
  });

  test("should return true if all fields are valid", () => {
    document.getElementById("name").value = "John Doe";
    document.getElementById("mobile").value = "1234567890";
    document.getElementById("gender").value = "male";
    document.getElementById("password").value = "password123";

    const result = validateForm();
    expect(result).toBe(false);
  });
});