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


function count_duplicate(arr){
 let counts = {}

 for(let i =0; i < arr.length; i++){ 
     if (counts[arr[i]]){
     counts[arr[i]] += 1
     } else {
     counts[arr[i]] = 1
     }
    }  
  console.log(counts);
  var result = Object.keys(counts).map((key) => [Number(key), counts[key]]);

console.log(result);
// document.getElementById("demo2").innerHTML = result.map(res => { return`V${res[0]} T ${res[1]}  %${( 100 / arr.length * res[1]).toFixed(2)}`});
makeUl(result);
document.getElementById('demo2').appendChild(makeUl(result))

}

function makeUl(arr) {
    var list = document.createElement('ul');

    function countPerCent(arrVal) {
        return (100 / countValue * arrVal).toFixed((2))
    }

    for (var i = 0; i < arr.length; i++){
        var item = document.createElement('li');
        console.log(arr.length)
        item.appendChild(document.createTextNode(`V${arr[i][0]} T${arr[i][1]}  %${countPerCent(arr[i][1])}`));
        list.appendChild(item);
    }i
    return list;
}
count_duplicate(arr);


  })

