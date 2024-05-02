
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
// Login Page Script Ends Here 