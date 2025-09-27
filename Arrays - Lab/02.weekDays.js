function weekDays (arr) {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    

    if (arr >= 1 && arr <= 7){
        console.log(days[arr - 1]);
    } else {
        console.log('Invalid day!');
    }
}

weekDays([8]); 