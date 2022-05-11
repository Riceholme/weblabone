
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

  //test to see that you reach function
  console.log('insideFunc')

  let index = 0;
  var arrOfKeys = new Array;

  document.addEventListener(
    "keyup",
    (event) => {

      if(index === 4){
        return;
      }

      // test of listening to key "m".
      if(event.key === 'm'){
        console.log('test');
      }

      if(event.key != 'undefined'){
        arrOfKeys[index] = event.key
      }

      //Overview for testing to see array
      console.log(arrOfKeys)
      
      arrOfKeys.forEach(element => {
        if(arrOfKeys[0] === 'e' && arrOfKeys[1] === 'r' && arrOfKeys[2] === 'i' && arrOfKeys[3] === 'k'){
          alert('Den var kanske inte för klurig...');
          arrOfKeys= [];
        }
      });
      index++;
    },
    false
  );
}
///////////////////////////////////////////////////////////////////////////////////////
// function easterEggentest() {

//   document.addEventListener(
//     "keyup",
//     (event) => {

//       var name = event.key;
//       var code = event.code;

//       if (event.key === "e") {
//         let one = "e";
//       }
//       if (event.key === "r") {
//         let two = "r";
//       }
//       if (event.key === "i") {
//         let three = "i";
//       }
//       if (event.key === "k") {
//         let four = "k";
//       }
//       if (one === "e" && two === "r" && three === "i" && four === "k") {
//         alert("GOOD JOB");
//       }

//       console.log(one + two + three + four)

//       console.log(event);

//       if (name === "e" + "r" + "i" + "k") {
//         alert("NICE ONE");
//       }
//     },
//     false
//   );
// }
///////////////////////////////////////////////////////////////////////////////////////////
// function easterCode() {
//   Keyboard.addEventListener("keydown", (e) => {
//     // console.log(e);
//     if (e.key === 50) {
//       alert("GOOD JOB MATE");
//     }
//   });
// }
//////////////////////////////////////////////////////////////////////////////////////////
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
