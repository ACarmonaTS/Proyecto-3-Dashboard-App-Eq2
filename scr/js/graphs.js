import * as apiFunctions from "./callApi.js";
import * as theDates from "./record.js"

const urlPart1 = "https://api.coingecko.com/api/v3/coins/bitcoin/history?date=";
const urlPart2 = "&localization=mxn";

var labelsDates = [];

async function dataGraph(){
    let labelsDays = theDates.labelsDays;
    let arrayDate = [];
    for( let sevenDays = 5; sevenDays > -1; sevenDays--)
        arrayDate[sevenDays] = await coinsPast(labelsDays[sevenDays])
    arrayDate.push(await coinsPast(labelsDays[6]));
    labelsDates = arrayDate;
    console.log(labelsDates);
}

async function coinsPast(date){
    const urlDate = urlPart1 + date + urlPart2; 
    let res = await fetch(urlDate);
    let data = await res.json();
    let dato = data.market_data.current_price.mxn;
    return dato;
}

function graph(label, labelCurrent){
    dataGraph()
    console.log(label)
    console.log(labelCurrent);
    const ctx = document.getElementById('graph');

    new Chart(ctx, {
    type: 'bar',
    data: {
        labels: label,
        datasets: [{
        label: '# of Votes',
        data: labelCurrent,
        borderWidth: 1
        }]
    },
    options: {
        scales: {
        y: {
            beginAtZero: true
        }
        }
    }
    });
}

graph(theDates.labelsDays, labelsDates);