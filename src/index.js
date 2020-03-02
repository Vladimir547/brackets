module.exports = function check(str, bracketsConfig) {
  let arr = str.split('');
  let result = [];
  let open = {};
  let close = {};
  let same = {};
  if(str.length % 2 != 0){
    return false;
  }
  for(let i = 0; i < bracketsConfig.length; i++){
    if(bracketsConfig[i][0] === bracketsConfig[i][1]){
      same[bracketsConfig[i][0]] = 'same';
    } else {
      open[bracketsConfig[i][0]] = bracketsConfig[i][1];
      close[bracketsConfig[i][1]] = bracketsConfig[i][0];
    }
  }
  for(let i = 0; i < arr.length; i++){
    if(arr[i] in open){
      result.push(open[arr[i]]);
    }
    if(arr[i] in close){
      if(arr[i] === result[result.length - 1]){
        result.pop();
      }
    }
    if(arr[i] in same){
      if(arr[i] !== result.pop()){
        result.push(arr[i]);
      } else{
        result.pop();
      }
    } 
  }
  if(result.length <= 0){
    return true;
  } else {
    return false;
  }

}
