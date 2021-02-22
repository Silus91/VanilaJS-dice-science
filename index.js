    var arr = [];

const value = form.addEventListener('submit', (e) => {
    e.preventDefault();
    const myForm = document.getElementById('countTimes');
    const countValue = myForm.value;



    var result;
    var text = "";
    var i;

    for(var i=0; i < countValue; i++)
    {
        result  = Math.floor(Math.random() * 20) +1;
        arr.push(result);
        text += arr[i] + "<br>";
    }
    document.getElementById("demo").innerHTML = text;

    function getSum(total, num) {
        return total + num;
      }

    function getAvg() {
        document.getElementById("demo1").innerHTML = arr.reduce(getSum,0) / countValue;
    }

    getAvg();


//   const wholeArr =  arr.sort(function(a, b){
//       if(a == b) {
//           console.log("ten sam wynik");
//       } else if( a - b) {
//           console.log("poprawny")
//       }
//     });
//  console.log("consol",wholeArr);




function count_duplicate(arr){
 let counts = {}

 for(let i =0; i < arr.length; i++){ 
     if (counts[arr[i]]){
     counts[arr[i]] += 1
     } else {
     counts[arr[i]] = 1
     }
    }  
  console.log(counts)
}

count_duplicate(arr);

// arrItem = { value: number, times: number}
// wholeArr = [{arrItem},{arrItem]

  })

