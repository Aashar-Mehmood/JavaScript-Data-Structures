function checkBracketsMatching(data) {
  var input = data.split('');
  console.log(input);
  var stack = [];
  var msg = '';
  input.forEach(element => {
    if (element == '[' || element == '{' || element == '(') {
      stack.push(element);
      console.log(stack);
    } 
    else if (element == ']' || element == '}' || element == ')') {
      if (element !== getInverse(stack[stack.length-1]) || stack.length == 0) {
        msg = 'brackets are not balanced';
      }
      else{
        stack.pop();
        msg = 'brackets are balanced';
      }
      
    }
  });
  if(stack.length>0){
    msg = 'brackets are not balanced';
  }
  console.log(stack);
  return msg;
}

function getInverse(item) {
  var elem = '';
  switch (item) {
    case '[':
      elem = ']';
      break;
    case '{':
      elem = '}';
      break;
    case '(':
      elem = ')';
      break;
  }
  return elem;
}
console.log(checkBracketsMatching(")"));
