function convertToPreFix(inFixString) {
  var result = '';
  var stack = [];
  var inFixArr = inFixString.split(',');
  inFixArr.forEach(element => {
    if (element.match(/[a-zA-Z0-9]/)) {
      result = result + element + ',';
    }
    else if (element.match(/[\*/%+-]/)) {
      while (stack.length !== 0 && hasHigherPrecedence(element, stack[stack.length - 1])) {
        result = result + stack[stack.length - 1] + ',';
        stack.pop();
      }
      stack.push(element);
    }
  });
  while (stack.length !== 0) {
    result = result + stack[stack.length - 1];
    stack.pop();
  }

  console.log(result);
  return result;
}
function hasHigherPrecedence(elem, stackTop) {
  if (elem == stackTop) {
    return true;
  }
  else if (stackTop == '*' || stackTop == '/') {
    if (elem == '*' || elem == '/' || elem == '+' || elem == '-') {
      return true;
    }
  }
  else if (stackTop == '-' || stackTop == '+') {
    if (elem == '+' || elem == '-') {
      return true;
    }
    else if (elem == '*' || elem == '/') {
      return false;
    }
  }
}
function evaluatePreFix(exp) {
  var expArr = exp.split(',');
  console.log(expArr);
  var stack = [];
  var result = '';
  var operator = '';
  expArr.forEach(element => {
    if (element.match(/[0-9]+/)) {
      stack.push(element);
    }
    else if (element.match(/[\+-/*%]/)) {
      operator = element;
      result = eval(
        ''.concat(stack[stack.length - 2])
          .concat(operator)
          .concat(stack[stack.length - 1])
      );
      stack.pop();
      stack.pop();
      stack.push(result);
    }
  });
  console.log(stack[0]);
}




convertToPreFix('A,*,B,+,C,*,D,-,E'); // (A*B+C*D-E) 
// , is used when operand has two or more digits
// if we siplt on basis of '' than our two digit number will be converted to two operands
var preFix = convertToPreFix('30,*,5,+,10,*,1,-,2');
evaluatePreFix(preFix);
