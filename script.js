/*
* Name: Assignement1
* Course Code: SODV1201
* Class: Software Development Diploma program.
* Author: Gary Simwawa.
*/

// Get tab links and tab contents elements
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

// Function to open a specific tab
function opentab(tabname) {

    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    // Remove 'active-tab' class from all tab contents
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Function to open the side menu
function openmenu() {
    sidemenu.style.right = "0";
}

// Function to close the side menu
function closemenu() {
    sidemenu.style.right = "-200px";
}



$(document).ready(function () {
    // Set a timeout to show the picture name after 10 seconds
    setTimeout(function () {
        // Get the element with id 'profileImageName'
        var profileImageNameElement = document.getElementById('profileImageName');
        
        // Set the inner text to the desired picture name
        profileImageNameElement.innerText = 'Gary Simwawa';
        
        // Show the LinkedIn link after setting the text
        var linkedinLinkElement = document.getElementById('linkedinLink');
        linkedinLinkElement.style.visibility = 'visible';
    }, 10000); // 10000 milliseconds = 10 seconds
});




