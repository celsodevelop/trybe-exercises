const asterisk = '*';

squareAsterisks(7);
triangleAsterisks(7);
invertTriangle(7);
pyramidBase(7);
pyramidEmptyBase(7);

function squareAsterisks(number) {
    let array = [];
    let output = '';
    for (let line = 0; line < number; line +=1){
      for (let index = 0; index < number; index += 1){
        array[index] = asterisk;
        output = array.join('');
      }
      console.log(output);
    }
  }

  function triangleAsterisks(number) {
    let array = [];
    let output = '';
    for (let index = 0; index < number; index += 1){
      array[index] = asterisk;
      output = array.join('');
      console.log(output);
    }
  }
  
  function invertTriangle(number){;
    let array = [];
    let output = ''
    for (let index = 0; index < number; index += 1){
      if (index < number-1){
        array[index] = ' ';
      } else {
        array[number-1] = asterisk
      }
      output = array.join('')
    }
    console.log(output);
    for (let index = number-1; index > 0; index -=1){
      array[index-1] = '*';   
      output = array.join('');
      console.log(output);
    }
  }

  function pyramidBase(number){
    let array = [];
    let firstRow = Math.round(number/2) ;
    let controlLeft = firstRow;
    let controlRight = firstRow;
    let output = '';
    if (number%2 == 0) {
      console.log ('Even number. You need odd number PyramidBase');
    } else {
      for (let line=0; line < firstRow; line += 1){
        if (controlLeft == controlRight){
          for (let stringPos=0; stringPos < number; stringPos +=1){
            if (stringPos == firstRow-1){
              array[stringPos] = asterisk;
              controlLeft -= 1;
            } else {
              array[stringPos] = ' ';
            }
          }
          output = array.join('')
          console.log(output);
          controlLeft -= 1;
        } else if (controlLeft > 0 && controlRight != number-1) {
          for (let stringPos=0; stringPos < number; stringPos +=1){
            if (stringPos < controlLeft || stringPos > controlRight){
              array[stringPos] = ' ';
            } else {
              array[stringPos] = '*';
            }
          }
          output = array.join('')
          console.log(output);
          controlLeft -= 1;
          controlRight += 1;
        } else if (controlLeft == 0 && controlRight == number-1) {
          for (let stringPos=0; stringPos < number; stringPos +=1){
            array[stringPos] = asterisk;
          }
          output = array.join('')
          console.log(output);   
        } else {
          console.log('Invalid pathway sir!');
        }
      }
     }
    }

function pyramidEmptyBase(number){
  let array = [];
  let firstRow = Math.round(number/2) ;
  let controlLeft = firstRow;
  let controlRight = firstRow;
  let output = '';
  if (number%2 == 0) {
    console.log ('Even number. You need odd number PyramidBase');
  } else {
    for (let line=0; line < firstRow; line += 1){
      if (controlLeft == controlRight){
        for (let stringPos=0; stringPos < number; stringPos +=1){
          if (stringPos == firstRow-1){
            array[stringPos] = asterisk;
            controlLeft -= 1;
          } else {
            array[stringPos] = ' ';
          }
        }
        output = array.join('')
        console.log(output);
        controlLeft -= 1;
      } else if (controlLeft > 0 && controlRight != number-1) {
        for (let stringPos=0; stringPos < number; stringPos +=1){
          if (stringPos == controlLeft || stringPos == controlRight){
            array[stringPos] = asterisk;
          } else {
            array[stringPos] = ' ';
          }
        }
        output = array.join('')
        console.log(output);
        controlLeft -= 1;
        controlRight += 1;
      } else if (controlLeft == 0 && controlRight == number-1) {
        for (let stringPos=0; stringPos < number; stringPos +=1){
          array[stringPos] = asterisk;
        }
        output = array.join('')
        console.log(output);   
      } else {
        console.log('Invalid pathway sir!');
      }
    }
   }
  }
