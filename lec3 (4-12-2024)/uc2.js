const noTime=0;
const partTime=1;
const fullTime=2;
const wagePerHour=20;

function workingHours()
{
    let randomWorkingStatus=Math.floor(Math.random()*3);
    let working_Hours=0;
    switch(randomWorkingStatus)
    {
        case noTime:
            working_Hours=0;
            console.log("Employee didn't work today");
            break;
        
        case partTime:
            working_Hours=4;
            console.log("Employee worked Part-time today");
            break;

        case fullTime:
            working_Hours=8;
            console.log("Employee worked Full-time today");
            break;
            
        default:
            console.log("Invalid working Status");  
            break;      
    }

    let dailyWage=working_Hours*wagePerHour;
    console.log("Daily Working Wage: "+dailyWage);
}
workingHours();
