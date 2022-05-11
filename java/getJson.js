function appendData(data) {
    var mainContainer = document.getElementById("workData");
    for (var i = 0; i < data.length; i++) {
      var div = document.createElement("div");
      div.innerHTML = data[i].Roll + ', ' + data[i].Fokus + '<br>' + data[i].Arbetsgivare + '<br> ' + data[i].Start + ' - ' + data[i].Slut + '<br> Praktik: ' + data[i].Praktik + '<br><br>';
      mainContainer.appendChild(div);
    }
  }

function myWorkXp(data){
  var mainContainer = document.getElementById("schoolData");
  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.innerHTML = data[i].skola + ', ' + data[i].program + '<br>' + data[i].start + ' - ' + data[i].slut + '<br><br>';
    mainContainer.appendChild(div);
  }
}

