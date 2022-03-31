document.getElementById("quoteSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  var url = "https://cors-anywhere.herokuapp.com";
  url += "/zenquotes.io/api/random";
  fetch(url, {
      mode: 'cors'
    })
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";
      results += "<blockquote>&ldquo;" + json[0].q + "&rdquo;";
      results += "<footer>&mdash; " + json[0].a + "</footer></blockquote>";
      document.getElementById("quoteResults").innerHTML = results;
    });
});