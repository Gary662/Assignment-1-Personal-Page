/*
* Name: Assignement1
* Course Code: SODV1201
* Class: Software Development Diploma program.
* Author: Gary Simwawa.
*/

// Function to convert a numeric mark into a grade and display the result
function convertMark() {
    try {
        // Convert the mark input value to a number
        var mark = parseInt(document.getElementById('markInput').value);

        // Validate the entered mark
        validateMark(mark);
        
        // Calculate the grade based on the mark
        var grade = calculateGrade(mark);

        // Set the color of the grade text based on the calculated grade
        var gradeColor = getGradeColor(grade);

        // Display the result with the calculated grade and its color
        document.getElementById('result').innerHTML = 'Your Grade: <span style="color: ' + gradeColor + ';">' + grade + '</span>';

        // Clear any previous validation error messages
        clearValidationMessage();
    } catch (error) {
        // If an error occurs during the conversion, display the validation error message
        displayValidationMessage(error.message, mark);
    }
}

// Function to validate the entered mark
function validateMark(mark) {
    // Check if the mark is not a number or is outside the valid range
    if (isNaN(mark) || mark < 0 || mark >= 101) {
        throw new Error('Please enter a valid mark between 0 and 100.');
    }
}

// Function to calculate the grade based on the given mark
function calculateGrade(mark) {
    // Determine the grade based on specified mark ranges
    if (mark >= 90) {
        return 'A';
    } else if (mark >= 80) {
        return 'B';
    } else if (mark >= 70) {
        return 'C';
    } else if (mark >= 50) {
        return 'D';
    } else {
        return 'F';
    }
}

// Function to get the color associated with each grade
function getGradeColor(grade) {
    switch (grade) {
        case 'A':
            return 'green';
        case 'B':
            return 'green';
        case 'C':
            return 'blue';
        case 'D':
            return 'blue';
        case 'F':
            return 'red';
        default:
            return 'black';
    }
}

// Function to display a validation error message with appropriate color
function displayValidationMessage(message, mark) {
    // Get the validation message element
    var validationMessageElement = document.getElementById('validation-message');
    
    // Set the color of the validation message based on the mark
    if (mark < 50) {
        validationMessageElement.style.color = 'red';
    } else {
        validationMessageElement.style.color = 'green';
    }
    
    // Display the error message
    validationMessageElement.innerHTML = message;
}

// Function to clear any existing validation error message
function clearValidationMessage() {
    // Clear the content of the validation message element
    document.getElementById('validation-message').innerHTML = '';
}
