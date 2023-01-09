const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=mxn&order=market_cap_desc&per_page=100&page=1&sparkline=false";
const urlPart1 = "https://api.coingecko.com/api/v3/coins/bitcoin/history?date=";
const urlPart2 = "&localization=mxn";

async function coinsPast(){
    const day = document.getElementById("daysInput").value;
    const month = document.getElementById("monthsInput").value;
    const year = document.getElementById("yearsInput").value;
    const urlDate = urlPart1 + day + "-" + month + "-" + year + urlPart2; 
    let res = await fetch(urlDate);
    let data = await res.json();
    let dato = data.market_data.current_price.mxn;
    document.getElementById("showValuePast").value = "$" + Number.parseFloat(dato).toFixed(2).toString() + " M.N.";
}

const coinsNow = async() => {
    //Current value of coins
    let res = await fetch(url);
    let data = await res.json();
    let dato = data[0].current_price;
    console.log(dato)
    document.getElementById("showValueNow").value = "$" + Number.parseFloat(dato).toFixed(2).toString() + " M.N.";
}

coinsNow();
setInterval(coinsNow, 60000);