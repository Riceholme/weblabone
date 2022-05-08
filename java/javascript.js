// let test = ["A", "B", "C"]

// console.log(Math.random(test))

// console.log(Math.random())

// console.log(Math.random()) * test.length

// console.log(test[Math.floor(Math.random() * test.length)])

//#F2F2F2

// let hexColor = [0,1,2,3,4,5,7,8,9,"A","B","C","D","E","F"]

// console.log(hexColor[Math.floor(Math.random() * hexColor.length)])

// let colorParts=[]

// for(let i = 0; i < 6; i++)
// {
//     colorParts.push(hexColor[Math.floor(Math.random() * hexColor.length)])
// }
// console.log(colorParts)

////////// console.log(colorParts.join(""))

////////// console.log(`#${colorParts.join("")}`)

// let finalColor = `#${colorParts.join("")}`;

// document.body.append(finalColor);

// document.body.style.backgroundColor = finalColor;

///////////////////////////////////////////////////////////////

// var randomColor = Math.floor(Math.random()*16777215).toString(16);
//   document.getElementById("mainButton").style.backgroundColor = '#' + randomColor;

////////////////////////////////////////////////////////////////////////////////////

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor() {
  console.log("text bgcol change");
  $("#colorpad").css("background-color", getRandomColor());
}

function easterEggen() {
  console.log('insideFunc')
  let index = 0;
  var arrOfKeys = new Array;

  document.addEventListener(
    "keyup",
    (event) => {

      // arrOfKeys = arrOfKeys[3];
      if(event.key === 'm'){
        console.log('test');
      }
      if(event.key != 'undefined'){
        arrOfKeys[index] = event.key
      }
      if(index>3){
        index = 0;
      }
      console.log(arrOfKeys)
      
      arrOfKeys.forEach(element => {
        if(arrOfKeys[0] === 'e' && arrOfKeys[1] === 'r' && arrOfKeys[2] === 'i' && arrOfKeys[3] === 'k'){
          alert('Den var kanske inte för klurig...')
        }

      });

      // if(arrOfKeys === ['e','r','i','k'])
      // {
      //   alert('Well played mate!')
      //   index = 0;
      // }
      index++;
    },
    false
  );
}

function easterEggentest() {

  document.addEventListener(
    "keyup",
    (event) => {

      var name = event.key;
      var code = event.code;

      if (event.key === "e") {
        let one = "e";
      }
      if (event.key === "r") {
        let two = "r";
      }
      if (event.key === "i") {
        let three = "i";
      }
      if (event.key === "k") {
        let four = "k";
      }
      if (one === "e" && two === "r" && three === "i" && four === "k") {
        alert("GOOD JOB");
      }

      // console.log(one + two + three + four)

      // console.log(event);

      if (name === "e" + "r" + "i" + "k") {
        alert("NICE ONE");
      }

      // alert(`Key pressed ${name} \r\n Key code value: ${code}`);
    },
    false
  );
}
function easterCode() {
  Keyboard.addEventListener("keydown", (e) => {
    // console.log(e);
    if (e.key === 50) {
      alert("GOOD JOB MATE");
    }
  });
}

// let insert = document.getElementsById('insert');

// window.addEventListener('keydown', (e)=> {
//   console.log(e);
//   const { key, keyCode, code } = e;

//   insert.innerHTML = `
//   <div class="key">
//     ${key}
//   </div>
//   <div class="key">
//   ${keyCode}
// </div>
// <div class="key">
//     ${code}
//   </div>
//   `;
// });
