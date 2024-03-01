/*
* Name: Assignement1
* Course Code: SODV1201
* Class: Software Development Diploma program.
* Author: Gary Simwawa.
*/

$(document).ready(function () {
    // click event handler to the Convert button using jQuery
    $('#convertBtn').click(function () {
        // Get the Fahrenheit input value using jQuery
        var fahrenheitInput = $('#fahrenheitInput').val();

        // Validate the input
        if (isNaN(fahrenheitInput)) {
            alert('Please enter a valid temperature in Fahrenheit.');
            return;
        }

        // Convert Fahrenheit to Celsius using a function
        var celsiusResult = (function (fahrenheit) {
            return (fahrenheit - 32) * 5 / 9;
        })(parseFloat(fahrenheitInput));

        // Convert Celsius to Kelvin using a function
        var kelvinResult = celsiusToKelvin(celsiusResult);

        // Display the results using jQuery
        $('#result').html(
            'Result: ' +
            fahrenheitInput + '°F is ' +
            celsiusResult.toFixed(2) + '°C and ' +
            kelvinResult.toFixed(2) + 'K.'
        );
    });
});

// Named function for converting Celsius to Kelvin
function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}
