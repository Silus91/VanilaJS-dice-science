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


  })

