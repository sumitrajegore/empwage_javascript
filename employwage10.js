const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;

function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArray = new Array();
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();

//Refactored for UC 10
let empObjArray = new Array();
console.log("UC 10");

while ((totalEmpHrs <= MAX_HRS_IN_MONTH) &&
    (totalWorkingDays < NUM_OF_WORKING_DAYS)) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs = totalEmpHrs + empHrs;
    empDailyWageArray.push(calcDailyWage(empHrs));
    empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
    empDailyHrsMap.set(totalWorkingDays, empHrs);

    empObjArray.push(
        {
            dayNum: totalWorkingDays,
            dailyHours: empHrs,
            dailyWage: calcDailyWage(empHrs),
            toString() {
                return "Day=" + this.dayNum + " : Working Hours=" + this.dailyHours
                    + " : Wage earned=" + this.dailyWage + "\n"
            },
        });
}
console.log("Printing All Objects:");
console.log(empObjArray);
console.log("---------------------------------------------------");
console.log("Daily Wage Array: " + empDailyWageArray);
console.log("Daily Wage Map:");
console.log(empDailyWageMap);
console.log("---------------------------------------------------");

//Array Helper Function
//UC 7A
console.log("UC 7A");
let totEmpWage = 0;
function sum(dailyWage) {
    totEmpWage = totEmpWage + dailyWage;
}

empDailyWageArray.forEach(sum);
console.log("Total hrs: " + totalEmpHrs);
console.log("Total Emp Wage: " + totEmpWage);
console.log("Total Days: " + totalWorkingDays);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}


//UC 7B
console.log("UC 7B");
let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
}

let mapDayWithWageArr = empDailyWageArray.map(mapDayWithWage);
console.log("Daily Wage Map:");
console.log(mapDayWithWageArr);
console.log("---------------------------------------------------");

//UC 7C
console.log("UC 7C");
function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("Days With Full Time Wage Earned Using Filter:");
console.log(fullDayWageArr);
console.log("---------------------------------------------------");

//UC 7D
console.log("UC 7D");
function findFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("First time Full Time Wage earned on day: " +
    mapDayWithWageArr.find(findFullTimeWage));
console.log("---------------------------------------------------");

//UC 7E
console.log("UC 7E");
function isAllFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("Check all Element have Full Time Wage: " +
    fullDayWageArr.every(findFullTimeWage));
console.log("---------------------------------------------------");

//UC 7F
console.log("UC 7F");
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}

console.log("Check if any have Part Time Wage: " +
    mapDayWithWageArr.some(isAnyPartTimeWage));
console.log("---------------------------------------------------");

//UC 7G
console.log("UC 7G");
function totalDaysWorked(noOfDays, dailyWage) {
    if (dailyWage > 0) return noOfDays + 1;
    return noOfDays;
}
console.log("Number of Days Emp Worked: " +
    empDailyWageArray.reduce(totalDaysWorked, 0));
console.log("---------------------------------------------------");

//UC8
console.log("Emp Wage with reduce: " + Array.from(empDailyWageMap.values()).reduce(totalWages, 0));
console.log("---------------------------------------------------");


//UC 9
console.log("UC 9");

const findTotal = (TotalVal, dailyVal) => { return TotalVal + dailyVal };
let count = 0;
let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0);
let totalSalary = empDailyWageArray.filter(dailyWage => dailyWage > 0)
    .reduce(findTotal, 0);
console.log("Total Wage Comp Using Arrow Func: " + totalSalary);

let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empDailyHrsMap.forEach((value, key, map) => {
    if (value == 8) fullWorkingDays.push(key);
    else if (value == 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});
console.log("Full working days: " + fullWorkingDays);
console.log("Part working days: " + partWorkingDays);
console.log("Non working days: " + nonWorkingDays);

//UC 11
console.log("UC 11A to D");

let totalEmpWages = empObjArray
    .filter(obj => obj.dailyWage > 0)
    .reduce((totalWage, obj) =>
        totalWage = totalWage + obj.dailyWage, 0);


let totalEmpHours = empObjArray
    .filter(obj => obj.dailyHours > 0)
    .reduce((totalHours, obj) =>
        totalHours = totalHours + obj.dailyHours, 0);
console.log("Total hours: " + totalEmpHours);
console.log("Total wage: " + totalEmpWages);

process.stdout.write("Logging Full Work Days:\n");
empObjArray
    .filter(obj => obj.dailyHours == 8)
    .forEach(obj => process.stdout.write(obj.toString()));

let partWorkingDayStrArr = empObjArray
    .filter(obj => obj.dailyHours == 4)
    .map(obj => obj.toString());
process.stdout.write("Logging Part Working Days:\n");
console.log(partWorkingDayStrArr);

let nonWorkingDayStrArr = empObjArray
    .filter(obj => obj.dailyHours == 0)
    .map(obj => obj.dayNum);
process.stdout.write("Logging Non Working Days:\n");
console.log(nonWorkingDayStrArr);