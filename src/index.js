module.exports = function multiply(first, second) {
  // your solution
  let result=[];
  let a=first.split('').reverse();
  let b=second.split('').reverse();
  // console.log(a)
  // console.log(b)
  for(let i=0; i<a.length; i++){
    for(let j=0; j<b.length; j++){
      let mult=a[i]*b[j];
      if(result[i+j]){
        result[i+j]+=mult;
      }
      else{
        result[i+j]=mult;
      }
    }
  }
  for(let i=0; i<result.length; i++){
    let num=result[i]%10;
    let dec=Math.floor(result[i]/10);
    result[i]=num;

    if(result[i+1]){
      result[i+1]+=dec;
    }
    else if(dec!=0){
      result[i+1]=dec;
    }
  }
  return result.reverse().join('');
}
