
// const Present=1;
// const Absent=0;
// let isPresent=false;    //add1
// function checkAttendence()
// {
//     let randomValue=Math.floor(Math.random()*2);
//     console.log("Random Value Selected: "+randomValue)
//     if(randomValue==Present)
//     {
//         console.log("Employee is present");
//         isPresent=true;                        //add2
//     }
//     else{
//         console.log("employee is absent");
//     }
//     console.log(isPresent)         //add3
//     return isPresent;          //add4
// }
// checkAttendence();
console.log("==========uc1==========");
// uc1 - Check Attendance

const Present = 1;   
function checkAttendence() {
    let randomValue = Math.floor(Math.random() * 2); // Generates 0 or 1
    console.log("Random Value Selected: " + randomValue);
    let isPresent = randomValue === Present; // Determines attendance
    console.log("Employee is Present: " + isPresent); // Logs the result
    return isPresent; // Returns true or false
}

//checkAttendence();  // Call the function to test it
console.log("============uc2==========");
// uc2 - Calculate Working Hours
const noTime = 0;
const partTime = 1;
const fullTime = 2;
const wagePerHour = 20;

function workingHours(isPresent) {
    if (!isPresent) {
        console.log("Employee is absent today");
        return 0;
    } else {
        let randomWorkingStatus = Math.floor(Math.random() * 3);
        let working_Hours = 0;
        switch (randomWorkingStatus) {
            case noTime:
                working_Hours = 0;
                console.log("Employee didn't work today");
                return 0;

            case partTime:
                working_Hours = 4;
                console.log("Employee worked Part-time today");
                return 4;

            case fullTime:
                working_Hours = 8;
                console.log("Employee worked Full-time today");
                return 8;

            default:
                console.log("Invalid working Status");
                return 0;
        }
    }
}

// Test workingHours with a sample value
let isPresent = checkAttendence();  // Use the result of checkAttendence()
let hoursWorked = workingHours(isPresent);
console.log("Total Hours Worked: " + hoursWorked);


console.log("=================uc3=================")
// uc3 - Calculate Daily Wage

function calculate_DailyWage(isPresent) {
    let workHours = workingHours(isPresent);
    let daily_Wage = workHours * wagePerHour;
    console.log("Daily Wage: " + daily_Wage);
    return daily_Wage;
}
calculate_DailyWage(isPresent)
//console.log("now wagge"+calculate_DailyWage(isPresent))
// Test Daily Wage Calculation
//let dailyWage = calculate_DailyWage(isPresent);


console.log("===================uc4==============");
// uc4 - Calculate Monthly Wages (20 Working Days)

let WorkingDays = 20;

function calculate_MonthlyWages() {
    let totalWorkingHours = 0;
    let total_MonthlyWage = 0;
    for (let day = 1; day <= WorkingDays; day++) {
        console.log("Day: " + day);
        let PresentOrNot = checkAttendence();
        let dailyHours = workingHours(PresentOrNot);
        let dailyWage = dailyHours * wagePerHour;

        totalWorkingHours += dailyHours;
        total_MonthlyWage += dailyWage;
    }
    console.log("Total monthly wage: " + total_MonthlyWage);
    return total_MonthlyWage;
}

// Test Monthly Wage Calculation
let monthlyWage = calculate_MonthlyWages();
