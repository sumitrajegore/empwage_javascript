    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const IS_PART_TIME_HOURS = 4;
    const IS_FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20;
function getWorkingHours(empcheck){

    switch(empcheck) {

        case IS_PART_TIME :
             return IS_PART_TIME_HOURS;
         
        case IS_FULL_TIME :
             return IS_FULL_TIME_HOURS; 
             
        default:
            return 0;
    }
}

    let empHrs=0;
    let empcheck = Math.floor(Math.random() * 10) % 3;
    empHrs = getWorkingHours(empcheck);    
    let empwage = empHrs * WAGE_PER_HOUR;
    console.log("EMP WAGE IS : " +empwage);