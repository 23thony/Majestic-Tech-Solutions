
// Home Page Script Starts Here 
$(document).ready(function () {
    // Toggle the navbar menu on smaller screens
    $('#menu-toggle').click(function () {
        $('.navbar').toggleClass('active');
    });

    // Change the text when hovering over the welcome section
    $('#Welcome-Main-Section').hover(
        function () {
            $('#Welcome-Text').text('Explore the Latest in Technology!');
        },
        function () {
            $('#Welcome-Text').text('Welcome to Majestic Tech Solutions');
        }
    );

    // Toggle footer visibility
    $('#footer-toggle').click(function () {
        $('.footer-distributed').toggle();
    });

    // Slide down effect for content on page load
    $('#Content-Pages').hide().slideDown(1000);

    // Change footer background on mouseover
    $('.footer-distributed').hover(
        function () {
            $(this).css('background-color', '#333');
        },
        function () {
            $(this).css('background-color', '#222');
        }
    );
});
// Home Page Script Ends Starts

// About Page Script Starts Here 
// About Page Script Ends Here 

// Gallery Page Script Starts Here 
// Gallery Page Script Ends Here 

// Content Pages Script Starts Here 
// Content Pages Script Ends Here

// Offering Page Script Starts Here
// JavaScript to Control Popup

// Function to open the popup
function openPopup() {
    var popupContainer = document.getElementById('popupContainer');
    popupContainer.style.display = 'block';
    setTimeout(function () {
        popupContainer.style.height = '100%';
    }, 100);
}

// Function to close the popup
function closePopup() {
    var popupContainer = document.getElementById('popupContainer');
    popupContainer.style.height = '0'; // Collapsing the height to hide the popup
    setTimeout(function () {
        popupContainer.style.display = 'none';
    }, 500); // Delay for transition completion
}

// Event listeners for form submission
document.getElementById('add_to_cart_1').addEventListener('submit', function (event) {
    // Prevent default form submission
    event.preventDefault();

    // Show the popup on successful form submission
    openPopup();
});
document.getElementById('add_to_cart_2').addEventListener('submit', function (event) {
    // Prevent default form submission
    event.preventDefault();

// Show the popup on successful form submission
openPopup();
});
document.getElementById('add_to_cart_3').addEventListener('submit', function (event) {
    // Prevent default form submission
    event.preventDefault();

    // Show the popup on successful form submission
    openPopup();
});
document.getElementById('add_to_cart_4').addEventListener('submit', function (event) {
    // Prevent default form submission
    event.preventDefault();

    // Show the popup on successful form submission
    openPopup();
});
// Offering Page Script Ends Here

// Login Page Script Starts Here 
    // Function to handle form submission
document.getElementById('loginForm').addEventListener('submit', function (event) {
    // Prevent default form submission
    event.preventDefault();

    // Show the popup on successful form submission
    openLoginPopup();

    // Optional: Reset the form after submission
    this.reset(); // Reset the form fields
});

// Function to open the login popup
function openLoginPopup() {
    var loginPopupContainer = document.getElementById('loginPopupContainer');
    loginPopupContainer.style.display = 'block';
    setTimeout(function () {
        loginPopupContainer.style.height = '100%';
    }, 100);
}

// Function to close the login popup
function closeLoginPopup() {
    var loginPopupContainer = document.getElementById('loginPopupContainer');
    loginPopupContainer.style.height = '0'; // Collapsing the height to hide the popup
    setTimeout(function () {
        loginPopupContainer.style.display = 'none';
    }, 500); // Delay for transition completion
}
// Function to close any popup
    function closePopup() {
        var popupContainer = document.querySelector('.popup-container.show-popup');
        if (popupContainer) {
            popupContainer.classList.remove('show-popup');
            setTimeout(function () {
                popupContainer.style.display = 'none';
            }, 500); // Delay for transition completion
        }
    }

    // Event listener for login form submission
    document.getElementById('loginForm').addEventListener('submit', function (event) {
        // Prevent default form submission
        event.preventDefault();

        // Show the login popup on successful form submission
        openLoginPopup();

        // Optional: Reset the form after submission
        this.reset(); // Reset the form fields
    });
// Login Page Script Ends Here 

// contact us form starts here

(function(){
    emailjs.init({
      publicKey: "Obbmk7Wvy22ITrUT4",
    });
 })();
 
function sendMail() {
    // Get sender information from form fields
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Check if any of the required fields are empty
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert("Please fill out all required fields (Name, Email, Message).");
        return; // Stop execution if fields are empty
    }

    // Prepare email parameters including sender information
    let params = {
        from_name: name,
        from_email: email,
        message: message
    };


    // Send email using EmailJS
    emailjs.send("service_pxtn9pa", "template_u41sns6", params)
        .then(function(response) {
            console.log("Email sent:", response);
            alert("Message sent successfully!");
        }, function(error) {
            console.error("Email sending failed:", error);
            alert("Message sending failed. Please try again later.");
        });
}

// contact us form ends here





