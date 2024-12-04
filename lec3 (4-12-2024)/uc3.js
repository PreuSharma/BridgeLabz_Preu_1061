const noTime=0;
const partTime=1;
const fullTime=2;
const wagePerHour=20;

function working_Hours2()
{
    let randomWorkingStatus=Math.floor(Math.random()*3);
    let working_Hours=0;
    switch(randomWorkingStatus)
    {
        case noTime:
            working_Hours=0;
            console.log("Employee didn't work today");
            return working_Hours;
        
        case partTime:
            working_Hours=4;
            console.log("Employee worked Part-time today");
            return working_Hours;

        case fullTime:
            working_Hours=8;
            console.log("Employee worked Full-time today");
            return working_Hours;
            
        default:
            console.log("Invalid working Status");  
            return working_Hours;     
    }
}

function calculate_DailyWage()
{
    let workHours=working_Hours2();
    console.log("WorkHours: "+workHours);
    let daily_Wage=workHours*wagePerHour;
    console.log("Daily Wage: "+daily_Wage);
}
calculate_DailyWage();


