function calcDur(startDate, endDate) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const week = day * 7;
    const month = week * 4 + 2;
    const year = month * 12;

    // console.log(day)
    
    let distance = new Date(endDate) - new Date(startDate);
    

    let distanceYear = Math.floor(distance / year);
    let distanceMonth = Math.floor(distance / month);
    let distanceWeek = Math.floor(distance / week);
    let distanceDay = Math.floor(distance / day);
    let distanceHour = Math.floor(distance / hour);
    let distanceMinute = Math.floor(distance / minute);
    let distanceSecond = Math.floor(distance / second);

    if(distanceYear > 0) {
        return `${distanceYear} Year`;
    } else if(distanceMonth > 0) {
        return `${distanceMonth} Month`;
    } else if(distanceWeek > 0) {
        return `${distanceWeek} Week`;
    } else if(distanceDay > 0) {
        return `${distanceDay} Day`;
    } else if(distanceHour > 0) {
        return `${distanceHour} Hour`;
    } else if(distanceMinute > 0) {
        return `${distanceMinute} Minute`;
    } else if(distanceSecond > 0) {
        return `${distanceSecond} Second`;
    }
}

