const now = new Date();

const calculateDate = (toDay, days) => {
    let date = new Date(toDay.setDate(toDay.getDate() + days));
    let month = date.getMonth().toString().length === 1 ? "0" + (date.getMonth()+1).toString() : (date.getMonth()+1).toString();
    let day = date.getDate().toString().length === 1 ? "0" + date.getDate().toString() : date.getDate().toString();
    let year = date.getFullYear().toString();
    return (day + "-" + month + "-" + year);
}

const arrayDates = () => {
    let arrayDate = []
    for( let sevenDays = 5; sevenDays > -1; sevenDays--)
        arrayDate[sevenDays] = calculateDate(now, -1)
    arrayDate.push(calculateDate(now, 6));
    return arrayDate
}

export let labelsDays = arrayDates();
console.log(labelsDays);