let globalIsSubmitted = false;

function validate(isSubmitted = false) {
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let email = document.getElementById("email").value;
  let phoneNumber = document.getElementById("phone-number").value;
  let date = document.getElementById("date").value;
  let profession = document.getElementById("profession").value;
  let male = document.getElementById("male").checked;
  let female = document.getElementById("female").checked;
  let others = document.getElementById("others").checked;
  let country = document.getElementById("country").value;
  let error = false;

  if (isSubmitted) {
    ``;
    globalIsSubmitted = true;
  }

  if (globalIsSubmitted) {
    // First Name validation
    var letters = /^[a-zA-Z]*$/;

    if (firstName.length >= 3 && isNaN(firstName) && firstName.match(letters)) {
      document.getElementById("first-name-valid").style.display = "block";
      document.getElementById("first-name-invalid").style.display = "none";
    } else {
      document.getElementById("first-name-invalid").style.display = "block";
      document.getElementById("first-name-valid").style.display = "none";
      error = true;
    }

    // Last Name validation
    if (lastName.length >= 3 && isNaN(lastName) && lastName.match(letters)) {
      document.getElementById("last-name-valid").style.display = "block";
      document.getElementById("last-name-invalid").style.display = "none";
    } else {
      document.getElementById("last-name-invalid").style.display = "block";
      document.getElementById("last-name-valid").style.display = "none";
      error = true;
    }

    // Email validation
    if (
      email.includes("@") &&
      email.includes(".") &&
      email.indexOf("@") !== 0 &&
      email.lastIndexOf(".") < email.length - 2 &&
      email.lastIndexOf(".") >= email.length - 4
    ) {
      document.getElementById("email-valid").style.display = "block";
      document.getElementById("email-invalid").style.display = "none";
    } else {
      document.getElementById("email-invalid").style.display = "block";
      document.getElementById("email-valid").style.display = "none";
      error = true;
    }

    // Phone Number validation

    var getNum = String(phoneNumber).charAt(0);
    var firstNum = Number(getNum);

    if (phoneNumber.length === 10 && !isNaN(phoneNumber) && firstNum > 5) {
      document.getElementById("phone-number-valid").style.display = "block";
      document.getElementById("phone-number-invalid").style.display = "none";
    } else {
      document.getElementById("phone-number-invalid").style.display = "block";
      document.getElementById("phone-number-valid").style.display = "none";
      error = true;
    }

    // Date of Birth validation
    
    if (date !== "") {
      const isValidDate = /^\d{4}-\d{2}-\d{2}$/.test(date);
      if (!isValidDate) {
        document.getElementById("date-invalid").style.display = "block";
        document.getElementById("date-valid").style.display = "none";
        error = true;
      } else {
        const enteredDate = new Date(date);
        const currentDate = new Date();
        const minAge = 18; 

        if (enteredDate > currentDate) {
          document.getElementById("date-valid").style.display = "none";
          document.getElementById("date-invalid").style.display = "block";
          document.getElementById("date-invalid").innerText =
            "Date of birth cannot be in the future";
          error = true;
        } else {
          const userAge = currentDate.getFullYear() - enteredDate.getFullYear();
          const monthDiff = currentDate.getMonth() - enteredDate.getMonth();
          if (
            monthDiff < 0 ||
            (monthDiff === 0 && currentDate.getDate() < enteredDate.getDate())
          ) {
            userAge--;
          }

          if (userAge < minAge) {
            document.getElementById("date-valid").style.display = "none";
            document.getElementById("date-invalid").style.display = "block";
            document.getElementById("date-invalid").innerText =
              "You must be at least 18 years old";
            error = true;
          } else {
            document.getElementById("date-valid").style.display = "block";
            document.getElementById("date-invalid").style.display = "none";
          }
        }
      }
    } else {
      document.getElementById("date-invalid").style.display = "block";
      document.getElementById("date-valid").style.display = "none";
      error = true;
    }

    // Profession validation

    if (profession != "None") {
      document.getElementById("profession-valid").style.display = "block";
      document.getElementById("profession-invalid").style.display = "none";
    } else {
      document.getElementById("profession-invalid").style.display = "block";
      document.getElementById("profession-valid").style.display = "none";
      error = true;
    }

    // Gender validation
    if (male || female || others) {
      document.getElementById("valid-gender").style.display = "block";
      document.getElementById("invalid-gender").style.display = "none";
    } else {
      document.getElementById("invalid-gender").style.display = "block";
      document.getElementById("valid-gender").style.display = "none";
      error = true;
    }

    // Country validation
    if (country != "None") {
      document.getElementById("country-valid").style.display = "block";
      document.getElementById("country-invalid").style.display = "none";
    } else {
      document.getElementById("country-invalid").style.display = "block";
      document.getElementById("country-valid").style.display = "none";
      error = true;
    }

    // Submission and reset

    if (!error && isSubmitted) {
      alert("Your details have been saved successfully!");

      document.getElementById("survey-form").reset();

      let validFeedbacks = document.getElementsByClassName("valid-feedback");
      for (i = 0; i < validFeedbacks.length; i++) {
        validFeedbacks[i].style.display = "none";
      }
      let invalidFeedbacks =
        document.getElementsByClassName("invalid-feedback");
      for (i = 0; i < invalidFeedbacks.length; i++) {
        invalidFeedbacks[i].style.display = "none";
      }
    }

    // Reset using reset button

    document
      .getElementById("reset-button")
      .addEventListener("click", function () {
        reset();
      });

    function reset() {
      document.getElementById("survey-form").reset();

      let validFeedbacks = document.getElementsByClassName("valid-feedback");
      for (i = 0; i < validFeedbacks.length; i++) {
        validFeedbacks[i].style.display = "none";
      }
      let invalidFeedbacks =
        document.getElementsByClassName("invalid-feedback");
      for (i = 0; i < invalidFeedbacks.length; i++) {
        invalidFeedbacks[i].style.display = "none";
      }
    }
  }
}
