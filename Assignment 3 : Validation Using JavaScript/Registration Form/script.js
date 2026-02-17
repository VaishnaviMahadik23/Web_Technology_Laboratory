document.getElementById("regForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    // NAME
    let name = document.getElementById("name");
    let nameError = document.getElementById("nameError");
    if (name.value.trim() === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    } else if (!/^[A-Za-z ]+$/.test(name.value)) {
        nameError.textContent = "Only letters allowed";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    // EMAIL
    let email = document.getElementById("email");
    let emailError = document.getElementById("emailError");
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "") {
        emailError.textContent = "Email is required";
        isValid = false;
    } else if (!emailPattern.test(email.value)) {
        emailError.textContent = "Invalid email format";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // GENDER
    let genderError = document.getElementById("genderError");
    let gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        genderError.textContent = "Please select gender";
        isValid = false;
    } else {
        genderError.textContent = "";
    }

    // DOB
    let dob = document.getElementById("dob");
    let dobError = document.getElementById("dobError");
    if (dob.value === "") {
        dobError.textContent = "Date of birth is required";
        isValid = false;
    } else {
        dobError.textContent = "";
    }

    // PHONE
    let phone = document.getElementById("phone");
    let phoneError = document.getElementById("phoneError");
    if (!/^\d{10}$/.test(phone.value)) {
        phoneError.textContent = "Enter valid 10-digit phone number";
        isValid = false;
    } else {
        phoneError.textContent = "";
    }

    // ADDRESS
    let address = document.getElementById("address");
    let addressError = document.getElementById("addressError");
    if (address.value.trim().length < 10) {
        addressError.textContent = "Address must be at least 10 characters";
        isValid = false;
    } else {
        addressError.textContent = "";
    }

    // PINCODE
    let pincode = document.getElementById("pincode");
    let pincodeError = document.getElementById("pincodeError");
    if (!/^\d{6}$/.test(pincode.value)) {
        pincodeError.textContent = "Enter valid 6-digit pin code";
        isValid = false;
    } else {
        pincodeError.textContent = "";
    }

    // FINAL
    if (isValid) {
        alert("Registration Successful!");
        document.getElementById("regForm").reset();
    }
});
