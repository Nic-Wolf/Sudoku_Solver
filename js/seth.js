  function parseBoard () {

    //var container = document.getElementByClassName('container');
    var string = "158 2  6 2   8  9  3  7 8 2 6 74      4 6 7      19 5 4 9 3  2  2  5   8 7  9 413";
    var times = string.length / 9;
    //var arr = [];
    var newArr = [];
    var arr = [[1,2,3,4,5,6,7,8,9], [1,2,3,4,5,6,7,8,9], [1,2,3,4,5,6,7,8,9], [1,2,3,4,5,6,7,8,9], [1,2,3,4,5,6,7,8,9], [1,2,3,4,5,6,7,8,9], [1,2,3,4,5,6,7,8,9], [1,2,3,4,5,6,7,8,9], [1,2,3,4,5,6,7,8,9]];

    // var start = 0;
    
    // for (var i = 0; i < times; i++) {
    //   var slice = string.slice(start, start + 9);
    //   newArr.push(slice.split(""));
    //   //arr.push(newArr);
    //   //console.log(arr);
    //   start += 9;
    //   console.log(newArr);
    // } 

    // arr.push(newArr);
    // console.log(arr);
    // // for (var i = 0; i <= 8; i ++) {

    // //   container.children[0].children[i].innerHTML = arr[i][i];

    // // }
    return arr;
  }


  function buildBoard() {

    var board = parseBoard();
    var container = document.getElementById('container');
    //var block = 0;
    for ( var block = 0; block <= 8; block++ ) {
      for ( var i = 0; i <= 8; i++ ) {

        container.children[block].children[i].innerHTML = board[block][i];

      }
      //block++;
    }

  }

  buildBoard();

  // function testing () {

  //   var rowValues = [1,2,3,4,0,6,0,8,9];
  //   var blanks = [4,6];
  //   console.log(blanks);

  //   for ( var i = 0; i < .length; i++ ) {

  //     if ( rowValues[i] = 0 ) {

  //     }
  //     else {

  //     }
  //     // var str = blanks.toString();
  //     // var patt = new RegExp("");
  //     // var res = patt.test(str);

  //   }


  // }

  // testing();