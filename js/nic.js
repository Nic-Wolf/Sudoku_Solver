window.onload = init;
function init() {

  var m1 = document.getElementById('m1');
  // var m2 = document.getElementById('m2');
  // var m3 = document.getElementById('m3');
  // var m4 = document.getElementById('m4');
  // var m5 = document.getElementById('m5');
  // var m6 = document.getElementById('m6');
  // var m7 = document.getElementById('m7');
  // var m8 = document.getElementById('m8');
  // var m9 = document.getElementById('m9');

  var matrix = [];

  function Matrix() {
    return [ ".", ".", ".", 
             ".", ".", ".", 
             ".", ".", "." ];
  }

  //testing
    // matrix[0] = new Matrix();
    // m1.innerHTML = matrix[0];

    // matrix 

  for (var i = 0; i < 10; i++) {
    matrix[i] = new Matrix();
    
    for (var row = 0; row < 3; row++) {
      matrix[i][row] = row;
      m1.innerHTML += matrix[0][row];
      
      // for (var col = 0; col < 2; col++) {
      //   matrix[i][col] = col;
      //   m1.innerHTML += matrix[i][col];
      // }
      m1.innerHTML += "<br>"; 
    }
    m1.innerHTML += "<br>";
  }

}//end init()
