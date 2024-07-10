//   here start of get dom elements
var Amout = document.querySelector("#amount");

var fromCurrency = document.querySelector("#fromCurrency");

var toCurrency = document.querySelector("#toCurrency");

var result = document.querySelector("#result");

var form = document.querySelector("form");

//   here end of get dom elements

//   here start of form event listener
form.addEventListener("submit", function (e) {
  e.preventDefault();

  var amount = parseFloat(Amout.value);
  var from = fromCurrency.value;
  var to = toCurrency.value;

  const to_currency_code = to;

  console.log(amount, from, to);

  fetch(
    "https://api.currencyfreaks.com/latest?apikey=1eef9b1b121e4ecc97b75d4b2527ad1f"
  )
    .then((result) => {
      let myData = result.json();
      return myData;
    })
    .then((currency) => {
      //    start of currency calculate converter
      if (from == "USD") {
        from = amount * currency.rates[from];
        console.log(from);
        to = from * currency.rates[to];
        console.log(to);
      } else {
        from = amount / currency.rates[from];
        console.log(from);
        to = from * currency.rates[to];
        console.log(to);
      }
      result.innerHTML = "Result: " + to_currency_code + " " + to.toFixed(2);
      //    end of currency calculate converter
    });
});

//   here end of form event listener
