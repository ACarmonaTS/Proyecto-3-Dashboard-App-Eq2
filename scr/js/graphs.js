import * as apiFunctions from "./callApi.js";
import * as theDates from "./record.js"

const urlPart1 = "https://api.coingecko.com/api/v3/coins/bitcoin/history?date=";
const urlPart2 = "&localization=mxn";
const dataCoins = theDates.labelsDays;
let datasCoins = [];

async function coinsHistory() {
    const urlDate = [] 
    for( let day = 0; day < 7; day++){
        urlDate[day] = urlPart1 + dataCoins[day] + urlPart2;
        let res = await fetch(urlDate[day]);
        let data = await res.json();
        let dato = data.market_data.current_price.mxn;
        datasCoins[day] = dato;
        datasCoins[day] = Number.parseFloat(datasCoins[day]).toFixed(2);
    }
    datas();
}

coinsHistory();

function datas(){
    const ctx = document.getElementById('graph');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: theDates.labelsDays,
            datasets: [{
            label: 'Valor del Bitcoin',
            data: datasCoins,
            borderWidth: 1
            }]
        },
    });
}