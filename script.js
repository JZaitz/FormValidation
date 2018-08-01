function myFunction() {
    var txt = "";
    if (document.getElementById("id1").validity.rangeOverflow) {
       txt = "Value too large";
    }
    else if (document.getElementById("id1").validity.rangeUnderflow) {
      txt = "Value too small";
   }

    document.getElementById("demo").innerHTML = txt;
}
