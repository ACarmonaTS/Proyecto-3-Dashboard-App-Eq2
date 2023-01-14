const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=mxn&order=market_cap_desc&per_page=100&page=1&sparkline=false";
const urlPart1 = "https://api.coingecko.com/api/v3/coins/bitcoin/history?date=";
const urlPart2 = "&localization=mxn";

document.getElementById("search").addEventListener("click", coinsPast);

async function coinsPast() {
  let date = document.getElementById("date").value;
  let res = await fetch(urlPart1 + date.split("-").reverse().join('-') + urlPart2);
  let data = await res.json();
  let dato = data.market_data.current_price.mxn;
  document.getElementById("showValuePast").value = "$" + Number.parseFloat(dato).toFixed(2).toString() + " M.N.";
}

const coinsNow = async () => {
  //Current value of coins
  let res = await fetch(url);
  let data = await res.json();
  let dato = data[0].current_price;
  document.getElementById("showValueNow").value = "$" + Number.parseFloat(dato).toFixed(2).toString() + " M.N.";
};

coinsNow();
setInterval(coinsNow, 1800000);