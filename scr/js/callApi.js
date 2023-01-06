const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=mxn&order=market_cap_desc&per_page=100&page=1&sparkline=false";
const urlPart1 = "https://api.coingecko.com/api/v3/coins/bitcoin/history?date=";
const urlPart2 = "&localization=mxn";
const coins = async() => {
     //NO MOVER
    //Para url (HOY)
    // const res = await fetch(url);
    // const data = await res.json();
    // console.log(data);
    // const dato = data[0].current_price;
    // document.getElementById("showValue").value = "$" + dato + " M.N.";

    //NO MOVER
    //Para url2 (BUSCAR POR FECHA)
    day = document.getElementById("daysInput").value;
    month = document.getElementById("monthsInput").value;
    year = document.getElementById("yearsInput").value;
    const urlDate = urlPart1 + day + "-" + month + "-" + year + urlPart2; 
    const res = await fetch(urlDate);
    const data = await res.json();
    console.log(data);
    console.log(data.market_data.current_price.mxn);
    const dato = data.market_data.current_price.mxn;
    document.getElementById("showValue").value = "$" + Number.parseFloat(dato).toFixed(2).toString() + " M.N.";
}

// coins(); NO MOVER