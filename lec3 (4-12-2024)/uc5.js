function calculateWagesWithCondition() {
    let totalWorkingHours = 0;
    let totalWage = 0;
    let day = 0;

    while (day < maxWorkingDays && totalWorkingHours < maxWorkingHours) {
        day++;
        console.log(`Day: ${day}`);
        
        let isPresent = checkAttendence();
        let dailyHours = workingHours(isPresent);
        let dailyWage = dailyHours * wagePerHour;

        totalWorkingHours += dailyHours;
        totalWage += dailyWage;

        console.log(`Day ${day} - Hours Worked: ${dailyHours}, Daily Wage: ${dailyWage}`);
    }
}

