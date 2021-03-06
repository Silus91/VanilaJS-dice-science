   
   const form = document.getElementById('form');
   const dice = document.getElementById('diceValue');
   const amount = document.getElementById('amountValue');
   const arr = [];
   
   form.addEventListener('submit',setValues);
   
   function setValues(e){
       e.preventDefault();
       countValue = parseInt(amount.value);
       diceValue = parseInt(dice.value);
       const parent = document.getElementById('demo');
       while (parent.firstChild) {
        parent.firstChild.remove()
    }

    generateRandomValues(countValue,diceValue);

    renderAvgValue(arr);
    countDuplicate(arr);
    renderValues(arr);
    document.getElementById('form').reset();

   }

   function renderValues(arr) {
     return document.getElementById('demo').appendChild(setUlVal(arr));
   }

   function generateRandomValues(countValue, diceValue) {
    for (let i = 0; i < countValue; i++) {
        const randomValue = Math.floor(Math.random() * diceValue) +1;
        arr.push(randomValue);
    }
    console.log(arr)
    return arr;
   }
   
function sumValues(total, num) {
    return total + num;
  }

function renderAvgValue(arr){
    document.getElementById("demo1").innerHTML = arr.reduce(sumValues,0) / countValue;
}

function countDuplicate(arr){
    let counts = {}
   
    for(let i =0; i < arr.length; i++){ 
        if (counts[arr[i]]){
        counts[arr[i]] += 1
        } else {
        counts[arr[i]] = 1
        }
       }  
     var result = Object.keys(counts).map((key) => [Number(key), counts[key]]);
    result.sort(function(a, b) { return b[1] - a[1]})
   document.getElementById('demo2').appendChild(renderDuplicateValues(result));
   
}

function renderDuplicateValues(arr) {
    var list = document.createElement('ul');

    function countPerCent(arrVal) {
        return (100 / countValue * arrVal).toFixed((2))
    }

    for (var i = 0; i < arr.length; i++){
        var item = document.createElement('li');
        item.appendChild(document.createTextNode(`V${arr[i][0]} T${arr[i][1]}  %${countPerCent(arr[i][1])}`));
        list.appendChild(item);
    }
    return list;
}

function setUlVal(arr) {
    var list = document.createElement('ul');

    for (var i = 0; i < arr.length; i++){
        var item = document.createElement('li');
        console.log(arr[i])
        item.appendChild(document.createTextNode(arr[i]));
        list.appendChild(item);
    }
    return list;
}