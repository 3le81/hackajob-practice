function run(student_list) {
    // Variable to store the team occurrences
    const teamOccurrences = {};

    // Iterate through the student_list to count the occurrences of each team number
    for (let i = 0; i < student_list.length; i++) {
        const teamNumber = student_list[i];

        // If the team number is not in the occurrences object, add it with a count of 1
        if (!teamOccurrences.hasOwnProperty(teamNumber)) {
            teamOccurrences[teamNumber] = 1;
        } else {
            // If the team number is already in the occurrences object, increment the count
            teamOccurrences[teamNumber]++;
        }
    }

    // Iterate through the teamOccurrences object to find the team number with only one occurrence
    for (const teamNumber in teamOccurrences) {
        // Check if the team number has only one occurrence
        if (teamOccurrences[teamNumber] === 1) {
            // If yes, convert the team number to an integer and return it
            const single_student_number = parseInt(teamNumber);
            return single_student_number;
        }
    }

    // Return null if no single student is found
    const single_student_number = null;
    return single_student_number;
}
