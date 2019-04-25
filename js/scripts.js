function tracktriangle() {
  var a = parseInt(document.getElementById("sidea").value);
  var b = parseInt(document.getElementById("sideb").value);
  var c = parseInt(document.getElementById("sidec").value);

  if(a === 0 || b === 0 || c===0){
    alert('FILL ALL FIELDS CORRECTLY');
    return;
  }

  var result = '';
  var imgPath = '';

  if (a + b <= c || a + c <= b || b + c <= a) {
    result = 'Not a Triangle';
    imgPath = 'https://cdn4.iconfinder.com/data/icons/smiley-2-1/32/197-512.png';
  } else {
    if (a === b && b === c) {
      result = 'Equilateral';
      imgPath = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0R6o0AJvFM1KGyV_oITJz8MqDIczgdVgQkngLODDLf4w2QZvh5g';
    } else if (a === b || b === c || a === c) {
      result = 'Isosceles';
      imgPath = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNYlZKivapap9fcXNlBmXCK46spk5FpJcjdpKE_yiiu9bzbZZBKQ';
    } else if (a != b && b != c && a != c) {
      result = 'Scalene';
      imgPath = 'https://image.shutterstock.com/image-vector/obtuse-scalene-triangle-abc-isolated-260nw-1225898266.jpg';
    }
  }



  document.getElementById('result').innerText = 'The Triangle is: '+ result;
  document.getElementById("img").src= imgPath;


}
