function leapYear(year) {
    if (year % 400 === 0) {
        console.log("yes");
    } else if (year % 100 === 0) {
        console.log("no");
    } else if (year % 4 === 0) {
        console.log("yes");
    } else {
        console.log("no");
    }
}

leapYear(2003);  // no
leapYear(2000);  // yes
leapYear(1900);  // no
leapYear(2024);  // yes
