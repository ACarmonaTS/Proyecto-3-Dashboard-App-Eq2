const urlPart1 = "https://api.coingecko.com/api/v3/coins/bitcoin/history?date=";
const urlPart2 = "&localization=mxn";

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

// export var labelsDates = [];

// export async function dataGraph(){
//     let labelsDays = arrayDates();
//     let arrayDate = [];
//     for( let sevenDays = 5; sevenDays > -1; sevenDays--)
//         arrayDate[sevenDays] = await coinsPast(labelsDays[sevenDays])
//     arrayDate.push(await coinsPast(labelsDays[6]));
//     labelsDates = arrayDate;
//     console.log(labelsDates);
// }

// async function coinsPast(date){
//     const urlDate = urlPart1 + date + urlPart2; 
//     let res = await fetch(urlDate);
//     let data = await res.json();
//     let dato = data.market_data.current_price.mxn;
//     return dato;
// }

// dataGraph();