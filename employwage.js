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

        console.log(empHrs * WAGE_PER_HOUR);
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
    let totalempwage = caLCDailywage(totalEmpHrs);
    console.log(" Total Hours : " +totalEmpHrs +"    "+ "EMP WAGE IS : " +totalempwage+"   "+"total_day_month :" +totalworkingdays);

    //UC7Aa
    let totalempwages=0;
    function sum(dailywage) {

        //console.log(dailywage);
        totalempwages += dailywage;
    }
    empDailywageArr.forEach(sum);
    console.log("UC7A(a) Total Hours : " +totalEmpHrs +"    "+ "EMP WAGE IS : " +totalempwages+"   "+"total_day_month :" +totalworkingdays);

    //UC7Ab
    function totalempwagess(totalempwages, dailywage) {

        //console.log( totalempwages + dailywage);
        return(totalempwages + dailywage);
    }
    console.log("UC7A(b) empwage with reduse  :" + empDailywageArr.reduce(totalempwagess));

    //UC7B
    let dailycounter=0;
    function mapdaywithwage(dailywage) {

        dailycounter++;
        return  "\n " + dailycounter + ' " ' + dailywage ; 
    }
    let mapdaywithwagearr = empDailywageArr.map(mapdaywithwage);
    console.log("UC7B daily wage map : " + mapdaywithwagearr);

    //UC7C
    function fulltimewage(dailywage) {

        return dailywage.includes("160");
    }
    let fulldaywagearr = mapdaywithwagearr.filter(fulltimewage);
    console.log(" \n UC7C daily wage filter when fulltime wage earned  :" +fulldaywagearr);

    //UC7D
    function findfulltimewage(dailywage) {

        return dailywage.includes("160");
    }
    console.log(" \n UC7D first daily wage filter when fulltime wage earned  :" + mapdaywithwagearr.find(findfulltimewage));

    //UC7E
    function isallfulltimewage(dailywage) {

        return dailywage.includes("160");
    }
    console.log(" \n UC7E check all element have full time wage  : " + fulldaywagearr.every(isallfulltimewage));

    //UC7F
    function isanyparttimewage(dailywage) {

        return dailywage.includes("80");
    }
    console.log(" \n UC7F check any  parttime wage earned  : " + mapdaywithwagearr.some(isanyparttimewage));

    // UC7G find number of day employee worked
    function totaldayworked(numofdays, dailywage) {

        if(dailywage > 0)
            return numofdays + 1;
        return numofdays;
    }
    console.log("\n UC7G num of day emp worked : " + empDailywageArr.reduce(totaldayworked, 0));

    //UC8
    //console.log("\n UC8A empwage map total Hrs : " + Array.from(empDailywageMap.values()).reduce(totalempwage, 0));
