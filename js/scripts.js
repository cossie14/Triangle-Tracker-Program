function tracktriangle() {
  var a = parseInt(document.getElementById("sidea").value);
  var b = parseInt(document.getElementById("sideb").value);
  var c = parseInt(document.getElementById("sidec").value);

  var result = '';

  if (a + b <= c || a + c <= b || b + c <= a) {
    result = 'Not a Triangle';
  } else {
    if (a === b && b === c) {
      result = 'Equilateral';
    } else if (a === b || b === c || a === c) {
      result = 'Isosceles';
    } else if (a != b && b != c && a != c) {
      result = 'Scalene';
    }
  }


  alert('The Triangle is: ' + result);

}
