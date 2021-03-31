    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const IS_PART_TIME_HOURS = 4;
    const IS_FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20;
    const NUM_WORKING_DAY = 20;
    const MAX_HRS_IN_MONTH = 160;
    let empHrs=0;
    let totalworkingdays=0;
    let totalEmpHrs=0;
    let empDailywageArr= new Array();

    function caLCDailywage(empHrs) {

        return empHrs * WAGE_PER_HOUR;
    }
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
    while( empHrs < MAX_HRS_IN_MONTH && totalworkingdays < NUM_WORKING_DAY) { 
    
    totalworkingdays++;
    let empcheck = Math.floor(Math.random() * 10) % 3;
    empHrs = getWorkingHours(empcheck); 
    totalEmpHrs += empHrs;
    empDailywageArr.push(caLCDailywage(empHrs));
    }
    let empwage = caLCDailywage(totalEmpHrs);
    console.log("Total Hours : " +totalEmpHrs +"    "+ "EMP WAGE IS : " +empwage+"   "+"total_day_month :" +totalworkingdays);