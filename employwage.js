const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const IS_PART_TIME_HOURS = 4;
const IS_FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_WORKING_DAY = 20;
const MAX_HRS_IN_MONTH = 160;
let empHrs = 0;
let totalworkingdays = 0;
let totalEmpHrs = 0;
let empDailywageArr = new Array();
let empDailyWageMap = new Map();
let empDailyHrMap = new Map();

function caLCDailywage(empHrs) {

    //console.log(empHrs * WAGE_PER_HOUR);
    return empHrs * WAGE_PER_HOUR;
}
function getWorkingHours(empcheck) {

    switch (empcheck) {

        case IS_PART_TIME:
            return IS_PART_TIME_HOURS;

        case IS_FULL_TIME:
            return IS_FULL_TIME_HOURS;

        default:
            return 0;
    }
}
//refactor uc10
let empObjArray = new Array();
console.log("UC 10");

while (empHrs < MAX_HRS_IN_MONTH && totalworkingdays < NUM_WORKING_DAY) {

    totalworkingdays++;
    let empcheck = Math.floor(Math.random() * 10) % 3;
    empHrs = getWorkingHours(empcheck);
    totalEmpHrs += empHrs;
    empDailywageArr.push(caLCDailywage(empHrs));
    empDailyHrMap.set(totalworkingdays, empHrs);
    empDailyWageMap.set(totalworkingdays, caLCDailywage(empHrs));
    empObjArray.push(
        {
            dayNum: totalworkingdays,
            dailyHours: empHrs,
            dailyWage: caLCDailywage(empHrs),
            toString() {
                return "Day=" + this.dayNum + " : Working Hours=" + this.dailyHours
                    + " : Wage earned=" + this.dailyWage + "\n"
            },
        });
}
console.log("Printing All Objects:");
console.log(empObjArray);
console.log("---------------------------------------------------");
console.log("Daily Wage Array: " + empDailywageArr);
console.log("Daily Wage Map:");
console.log(empDailyWageMap);
console.log("---------------------------------------------------");
// let totalempwage = caLCDailywage(totalEmpHrs);
//console.log(" Total Hours : " +totalEmpHrs +"    "+ "EMP WAGE IS : " +totalempwage+"   "+"total_day_month :" +totalworkingdays);

//UC7Aa
let totalempwages = 0;
function sum(dailywage) {

    //console.log(dailywage);
    totalempwages += dailywage;
}
empDailywageArr.forEach(sum);
console.log("UC7A(a) Total Hours : " + totalEmpHrs + "    " + "EMP WAGE IS : " + totalempwages + "   " + "total_day_month :" + totalworkingdays);
console.log("---------------------------------------------------");

//UC7Ab
function totalempwagess(totalempwages, dailywage) {

    //console.log( totalempwages + dailywage);
    return totalempwages + dailywage;
}
console.log("UC7A(b) empwage with reduse  :" + empDailywageArr.reduce(totalempwagess));
console.log("---------------------------------------------------");

//UC7B
let dailycounter = 0;
function mapdaywithwage(dailywage) {

    dailycounter++;
    return "\n " + dailycounter + ' " ' + dailywage;
}
let mapdaywithwagearr = empDailywageArr.map(mapdaywithwage);
console.log("UC7B Daily Wage Map : " + mapdaywithwagearr);
console.log("---------------------------------------------------");

//UC7C
function fulltimewage(dailywage) {

    return dailywage.includes("160");
}
let fulldaywagearr = mapdaywithwagearr.filter(fulltimewage);
console.log(" \n UC-7-C Days With Full Time Wage Earned Using Filter :" + fulldaywagearr);
console.log("---------------------------------------------------");

//UC7D
function findfulltimewage(dailywage) {

    return dailywage.includes("160");
}
console.log(" \n UC-7-D First time Full Time Wage earned on day  :" + mapdaywithwagearr.find(findfulltimewage));
console.log("---------------------------------------------------");

//UC7E
function isallfulltimewage(dailywage) {

    return dailywage.includes("160");
}
console.log(" \n UC-7-E Check all Element have Full Time Wage  : " + fulldaywagearr.every(isallfulltimewage));
console.log("---------------------------------------------------");

//UC7F
function isanyparttimewage(dailywage) {

    return dailywage.includes("80");
}
console.log(" \n UC-7-F Check if any have Part Time Wage : " + mapdaywithwagearr.some(isanyparttimewage));
console.log("---------------------------------------------------");

// UC7G find number of day employee worked
function totaldayworked(numofdays, dailywage) {

    if (dailywage > 0)
        return numofdays + 1;
    return numofdays;
}
console.log("\n UC-7-G Number of Days Emp Worked : " + empDailywageArr.reduce(totaldayworked, 0));
console.log("---------------------------------------------------");

//UC8
console.log("Emp Wage with reduce: " + Array.from(empDailyWageMap.values()).reduce(totalempwagess, 0));
console.log("---------------------------------------------------");

//UC9A
const findtotal = (totalval, dailyval) => {

    return totalval + dailyval;
}
let count = 0;
let totalHours = Array.from(empDailyHrMap.values()).reduce(findtotal, 0);
let totalSalary = empDailywageArr.filter(dailywage => dailywage > 0)
    .reduce(findtotal, 0);
console.log("\n UC9A - Emp wage with arrow : " + "Total Hours : " + totalHours + " TotalSalary : " + totalSalary + "\n");
console.log("---------------------------------------------------");

//UC9B
let nonWorkingdays = new Array();
let partWorkingdays = new Array();
let fullWorkingdays = new Array();
empDailyHrMap.forEach((value, key, map) => {

    if (value == 8) fullWorkingdays.push(key);
    else if (value == 4) partWorkingdays.push(key);
    else nonWorkingdays.push(key);
});
console.log(" UC9-B Full working days : " + fullWorkingdays);
console.log(" part working days : " + partWorkingdays);
console.log(" Non working days : " + nonWorkingdays);
console.log("\n");
console.log("---------------------------------------------------");
//UC 11
console.log("UC 11A to D");

let totalEmpWages = empObjArray.filter(obj => obj.dailyWage > 0)
    .reduce((totalWage, obj) =>
        totalWage = totalWage + obj.dailyWage, 0);

let totalEmpHours = empObjArray.filter(obj => obj.dailyHours > 0)
    .reduce((totalHours, obj) =>
        totalHours = totalHours + obj.dailyHours, 0);
console.log("Total hours: " + totalEmpHours);
console.log("Total wage: " + totalEmpWages);
console.log("---------------------------------------------------");

process.stdout.write("Logging Full Work Days:\n");
empObjArray.filter(obj => obj.dailyHours == 8)
    .forEach(obj => process.stdout.write(obj.toString()));
console.log("---------------------------------------------------");

let partWorkingDayStrArr = empObjArray.filter(obj => obj.dailyHours == 4)
    .map(obj => obj.toString());
process.stdout.write("Logging Part Working Days:\n");
console.log(partWorkingDayStrArr);
console.log("---------------------------------------------------");

let nonWorkingDayStrArr = empObjArray.filter(obj => obj.dailyHours == 0)
    .map(obj => obj.dayNum);
process.stdout.write("Logging Non Working Days:\n");
console.log(nonWorkingDayStrArr);
console.log("---------------------------------------------------");


