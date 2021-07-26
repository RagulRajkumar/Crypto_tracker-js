
function button(){

    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    .then((res) => res.json())
    .then((data) => 
    {
        console.log(data)
       let card=""

       data.forEach(function(user) {
           card += `<div class="list">
           
           <img class="img" src=${user.image}/> 
           <h2 class="name">${user.name}</h2>
           <p class="symbol">SYMBOL : ${user.symbol}</p>
           <p class="currentprice">${"$" + user.current_price}</p>
           <h2>Market Capital<h2>
           <p class="marketcapital">${user.market_cap}</p>
           <p class="price">${user.price_change_percentage_24h + "%"}</p>
           
           </div>
           
           
           `;
       });
       
       document.getElementById("cards").innerHTML = card ;
    })
}
button();