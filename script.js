document.getElementById('serviceForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    if (validateForm()) {
        // Handle form data here
        console.log("Form data is valid.");

        // Show a confirmation message or handle the form data
        alert("Your service registration has been successfully submitted!");

        // Optionally, you can reset the form
        this.reset();
    } else {
        console.log("Form validation failed."); // Log if validation fails
    }
});

function validateForm() {
    let isValid = true;

    // Type of Service Validation
    const serviceType = document.getElementById('serviceType');
    const serviceTypeError = document.getElementById('serviceTypeError');
    if (serviceType.value === '') {
        serviceTypeError.textContent = 'Please select a service type.';
        serviceTypeError.style.display = 'block';
        isValid = false;
    } else {
        serviceTypeError.style.display = 'none';
    }

    // Royal Enfield Model Validation
    const bikeModel = document.getElementById('bikeModel');
    const bikeModelError = document.getElementById('bikeModelError');
    if (bikeModel.value === '') {
        bikeModelError.textContent = 'Please select your bike model.';
        bikeModelError.style.display = 'block';
        isValid = false;
    } else {
        bikeModelError.style.display = 'none';
    }

    // Year of Manufacture Validation
    const yearOfManufacture = document.getElementById('yearOfManufacture');
    const yearOfManufactureError = document.getElementById('yearOfManufactureError');
    if (yearOfManufacture.value === '' || yearOfManufacture.value < 1980 || yearOfManufacture.value > new Date().getFullYear()) {
        yearOfManufactureError.textContent = 'Please enter a valid year of manufacture.';
        yearOfManufactureError.style.display = 'block';
        isValid = false;
    } else {
        yearOfManufactureError.style.display = 'none';
    }

    // Odometer Reading Validation
    const odometerReading = document.getElementById('odometerReading');
    const odometerReadingError = document.getElementById('odometerReadingError');
    if (odometerReading.value === '' || odometerReading.value <= 0) {
        odometerReadingError.textContent = 'Please enter a valid odometer reading.';
        odometerReadingError.style.display = 'block';
        isValid = false;
    } else {
        odometerReadingError.style.display = 'none';
    }

    // Owner's Name Validation (Only Alphabets)
    const ownerName = document.getElementById('ownerName');
    const ownerNameError = document.getElementById('ownerNameError');
    const namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(ownerName.value.trim())) {
        ownerNameError.textContent = 'Please enter a valid name (only alphabets).';
        ownerNameError.style.display = 'block';
        isValid = false;
    } else {
        ownerNameError.style.display = 'none';
    }

    // Contact Number Validation (10 Digits with Country Code)
    const contactNumber = document.getElementById('contactNumber');
    const contactNumberError = document.getElementById('contactNumberError');
    const phonePattern = /^\+\d{1,3}\d{10}$/; // +CountryCode followed by 10 digits
    if (!phonePattern.test(contactNumber.value)) {
        contactNumberError.textContent = 'Please enter a valid phone number with country code (e.g., +919876543210).';
        contactNumberError.style.display = 'block';
        isValid = false;
    } else {
        contactNumberError.style.display = 'none';
    }

    // Email Address Validation
    const emailAddress = document.getElementById('emailAddress');
    const emailAddressError = document.getElementById('emailAddressError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailAddress.value)) {
        emailAddressError.textContent = 'Please enter a valid email address.';
        emailAddressError.style.display = 'block';
        isValid = false;
    } else {
        emailAddressError.style.display = 'none';
    }

    // Preferred Date Validation
    const preferredDate = document.getElementById('preferredDate');
    const preferredDateError = document.getElementById('preferredDateError');
    if (preferredDate.value === '') {
        preferredDateError.textContent = 'Please select a preferred date.';
        preferredDateError.style.display = 'block';
        isValid = false;
    } else {
        preferredDateError.style.display = 'none';
    }

    console.log("Form validation result:", isValid); // Log validation result
    return isValid;
}

document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    const elementsToObserve = document.querySelectorAll('.container, header h1, header p');
    elementsToObserve.forEach(element => {
        observer.observe(element);
    });
});
