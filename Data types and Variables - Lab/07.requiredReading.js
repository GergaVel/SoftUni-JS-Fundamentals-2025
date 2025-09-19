function requiredReading(bookPages, pagesReadPerHour, daysToRead){
    let dailyReadingHours = bookPages / pagesReadPerHour / daysToRead;
    console.log(dailyReadingHours);
}

requiredReading(212, 20, 2);