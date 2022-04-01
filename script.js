document.getElementById("quoteSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  var url = "https://api.quotable.io/random";
  fetch(url, {
      mode: 'cors'
    })
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";
      results += "<blockquote>&ldquo;" + json.content + "&rdquo;";
      results += "<footer>&mdash; " + json.author + "</footer></blockquote>";
      document.getElementById("quoteResults").innerHTML = results;
    });
});