  function board () {

    //var container = document.getElementByClassName('container');
    var string = "123456789123456789";
    var times = string.length / 9;
    var arr = [];
    var newArr = [];
    //var arr = [[1,2,3,4,5,6,7,8,9], [1,2,3,4,5,6,7,8,9], [1,2,3,4,5,6,7,8,9], [1,2,3,4,5,6,7,8,9], [1,2,3,4,5,6,7,8,9], [1,2,3,4,5,6,7,8,9], [1,2,3,4,5,6,7,8,9], [1,2,3,4,5,6,7,8,9], [1,2,3,4,5,6,7,8,9]];

    var start = 0;
    
    for (var i = 0; i < times; i++) {
      var slice = string.slice(start, start + 9);
      newArr.push(slice);
      //arr.push(newArr);
      //console.log(arr);
      start += 9;
      console.log(newArr);
    } 

    arr.push(newArr);
    console.log(arr);
    // for (var i = 0; i <= 8; i ++) {

    //   container.children[0].children[i].innerHTML = arr[i][i];

    // } 
  }

  board()