arr = ["a", "ab", "ed", "da", "a", "ed", "b"];
var result = []
 for (var value of arr){
    if(!result.includes(value)){
        result.push(value)
    }
  }

  var res = []
   for (var value of result){
        if(arr.filter((e)=>{
            return e === value
            }).length !== 1){
            res.push(value);
        }
    }

console.log(res);
  