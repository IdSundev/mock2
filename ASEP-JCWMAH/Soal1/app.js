var row = 5
function showType1(){
  let result = ''
  for(let i = 0; i < row; i++){
    result += '* # * # * #<br>'
  }
  document.getElementById('result').innerHTML = result
  row+=1
}
function showType2(){
  let result = ''
  for(let i = row; i > 0; i--){
    for(let j = i; j > 0; j--){
      if(i % 2 === 0){
        result += '# '
      }else{
        result += '* '
      }
    }
    result += '<br>'
  }
  document.getElementById('result').innerHTML = result
  row+=1
}