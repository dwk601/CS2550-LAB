// when document loaded than call domLoaded.
window.addEventListener("DOMContentLoaded", domLoaded);

//function to conver CtoF and return result.
function convertCtoF(i) {
  return (i * 9) / 5 + 32;
}

//function to conver FtoC and return result.
function convertFtoC(i) {
  return ((i - 32) * 5) / 9;
}

function domLoaded() {
  //fetch convert btutton using id using getElementById
  var btn = document.getElementById("convertButton");

  //fetch Error Msg displayer using id using getElementById
  var msg = document.getElementById("errorMessage");

  //fetch Error cin input using id using getElementById
  var cin = document.getElementById("cInput");

  //fetch Error fin input using id using getElementById
  var fin = document.getElementById("fInput");

  //fetch Error image using id using getElementById
  var img = document.getElementById("weatherImage");

  //add evenetlistener on button
  btn.addEventListener("click", function () {
    // get value of both input in c and f
    var c = cin.value;
    var f = fin.value;
    //make empty msg div
    msg.innerHTML = "";
    // f less than 32 than set img src to ice
    if (f < 32) {
      img.setAttribute("src", "cold.png");
    }
    // f geater than 32 than and less than 50  set img src to rain
    else if (f >= 32 && f <= 50) {
      img.setAttribute("src", "cool.png");
    } // f geater than 50 set img src to sun
    else if (f > 50) {
      img.setAttribute("src", "warm.png");
    } else {
      console.log("non");
    }

    // c not 0
    if (c != 0) {
      //cheack input is valid or not
      if (Math.sign(c) == 1 || Math.sign(c) == -1) {
        //conver value in integer format
        ans = convertCtoF(parseInt(c));
        // ans less than 32 than set img src to ice
        if (ans < 32) {
          img.setAttribute("src", "cold.png");
        } // ans geater than 32 than and less than 50  set img src to rain
        else if (ans >= 32 && ans <= 50) {
          img.setAttribute("src", "cool.png");
        } // ans geater than 50 set img src to sun
        else if (ans > 50) {
          img.setAttribute("src", "warm.png");
        } else {
          console.log("non");
        }

        // put fin input value to ans
        fin.value = ans;
      } else {
        //otherwise set src  empty and display error msg
        img.setAttribute("src", "");
        msg.innerHTML = c + " is not a number";
      }
    } else if (f != 0) {
      //if f notqual to 0
      if (Math.sign(f) == 1 || Math.sign(f) == -1) {
        //cheack f input is valid or not
        //conver f in to integer
        ans = convertFtoC(parseInt(f));
        //put c input value to ans
        cin.value = ans;
      } else {
        //otherwise empty img and display error
        img.setAttribute("src", "");
        msg.innerHTML = f + " is not a number";
      }
    } else {
      //cheack if input value is empty than display error
      msg.innerHTML = "Please Enter Any Value";
    }
  });

  //add cin on input evenetlistener
  cin.addEventListener("input", function () {
    fin.value = "";
  });

  //add fin on input evenetlistener
  fin.addEventListener("input", function () {
    cin.value = "";
  });
}
