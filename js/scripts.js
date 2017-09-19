$(function() {

$("#formone").submit(function(event) {
  event.preventDefault();

  var sent = $("input#sent").val().split("");
  var newArray = [];
  var arrVowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  // var newArray = [];
  // for (var i = 0; i < arrVowel.length; i++) {
  //   for (var ind = 0; ind < str.length; ind++) {
  //
  //   if (arrVowel[i] == str[ind]) {
  //     newArray.push(" - ");
  //   }
  //   }
  //   else if (str[ind] != str[ind+1]) {
  //     newArray.push(str[ind]);
  //   }
  //
  // };
  // $("#output").text(newArray);
  // $("#output").show();
var vowelFound = false;
sent.forEach(function(letter) {
      for (var i = 0; i <= arrVowel.length; i++) {
        if (letter == arrVowel[i]) {
          newArray.push("-");
          vowelFound = true;
        }
      }
        if (!vowelFound) {
        newArray.push(letter);
      }
      vowelFound = false;

    });

    $("h2").text(newArray.join(""));
    $("h2").show();


});



});
