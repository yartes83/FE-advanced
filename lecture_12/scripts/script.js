 setTimeout(() => {}, 1000); //дозволяє нам запускати функцію ОДИН РАЗ через певний інтервал часу.

 //Виклик setTimeout повертає “ідентифікатор таймера” timerId, який ми можемо використовувати для скасування виконання.
 //Синтаксис для скасування:
 // let timerId = setTimeout();
 // clearTimeout(timerId);
 // let timerId = setTimeout(() => alert("ніколи не відбувається"), 10000);
 // alert(timerId);
 // clearTimeout(timerId);
 // alert(timerId);

 // setTimeout(() => {
 //  console.log('hello');
 // }, 5000);
 //
//  let timerId = setInterval(() => {
//   console.log('a');
//  }, 1000);
//
//  console.log({timerId});
//
//  const button1 = document.getElementById('enable');
//  const button2 = document.getElementById('disable');
//
// button1.onclick = () => {
//  let timerId = setInterval(() => {
//   console.log('б');
//  }, 1000);
// }
//
// button2.onclick = () => {
//  clearInterval(timerId);
// }
function sayHi(phrase, who) {
  alert(phrase + ', ' + who);
}
//setTimeout(sayHi, 3000, 'Hello', 'amigo');

//setTimeout(alert ('кукуся'), 5000) говнокод

// let timerId = setTimeout(sayHi, 3000, 'hello', 'amigo');
// clearTimeout(timerId);

let timerId = setTimeout(() => alert('Hello, amigo'), 1000);
// alert(timerId);

clearTimeout(timerId);
//alert(timerId);

let timerIdOne = setInterval(() => alert('tic'), 5000);

setTimeout(() => {clearInterval(timerIdOne); console.log('stop')}, 10000);
clearInterval(timerIdOne);


let timerIdTwo = setTimeout(() => {
  alert('tic1');
  timerIdTwo = setTimeout(() => {
    alert('tic2');
  }, 2000)
}, 2000)
 clearTimeout(timerIdTwo);


let timerIdThree = setTimeout(function tick() {
  alert('tic3');
  timerIdThree = setTimeout(tick, 3000);
}, 5000)
 clearTimeout(timerIdThree);


// let delay = 5000;
//
// let timerIdFour = setTimeout(function request () {
//   let result = prompt('Print something');
//   alert(result);
//
//   if (result !== 'test') {
//     delay * 2;
//   }
//   timerIdFour = setTimeout(request, delay);
// }, delay);

 let i = 1;
 // setInterval(function () {
 //   func(i++);
 // },100);
 // console.log(i)

 // setTimeout(function run() {
 //    func(i++);
 //   setTimeout(run, 100);
 // }, 100);
 //
 //
 // console.log(i)


// setTimeout(() => (alert('hello')));
// alert('amigo')

//  let start = Date.now();
// let times = [];
//
// setTimeout(function run() {
//     times.push(Date.now() - start);
//
//     if (start - 100 < Date.now()) alert(times);
//     else setTimeout(run);
// });
//  console.log(times)

 // Напишіть функцію printNumbers(from, to) яка виводить число кожну секунду, починаючи від from і закінчуючи to.
 //
 //     Зробіть два варіанти рішення.
 //
 //     Використовуючи setInterval.
 //     Використовуючи вкладений setTimeout.

// function printNumbers(from, to) {
//      let current = from;
//
//      let timerId = setInterval(function (){
//          alert(current);
//          if (current == to) {
//              clearInterval(timerId);
//          }
//          current++;
//      },1000)
// }
// //printNumbers(10, 15);
//
// function printN(from, to) {
//     let current = from;
//
//     let timerId = setTimeout(function go () {
//         alert(current);
//         if (current < to) {
//             setTimeout(go, 1000)
//         }
//         current++
//     }, 1000)
// }
// printN(10, 15)

 const row = document.querySelector('.row');
let counter = 1;

let timerId1 = setTimeout(function tick() {
    counter++;
    row.textContent = `Current value: ${counter}`
    timerId1 = setTimeout(tick, 1000);

    }, 1000
)
const ourDate = new Date('Sun Oct 10 2022');
 console.log(ourDate)
 console.log('-----------------------------------------');


 let second = 0;
 let timerId2;

 const logSecond = () => {
     console.log(second);
 }
const start = () => {
    timerId2 = setInterval(() => {
        second += 1;
        logSecond();
    }, 1 * 1000)
};

 const stop = () => {
    clearInterval(timerId2);
 };

 const reset = () => {
     stop();
    second = 0;
    logSecond();
 };

 document.getElementById('start').onclick = start;
 document.getElementById('stop').onclick = stop;
 document.getElementById('reset').onclick = reset;

 console.log('---------------------------------------------');

const clock = () => {
    const dateTime = new Date();
    const hours = dateTime.getHours();
    const minutes = dateTime.getMinutes();
    const seconds = dateTime.getSeconds();

    const time = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').innerHTML = time;
}

clock();
setInterval(clock, 1000);
 console.log('----------------------------------------------');

 console.log(1);
 let karamba = new Promise((resolve, reject) => {
    // resolve('resolved, dont worry, bro');
     reject('error')
 });
 karamba.then((data) => {
     console.log(data);
 })
     .catch((error) => {
     console.log('error, fuckin shit');
 })
     .finally((data) => {
         console.log('anyway, its OK');
     })
 console.log(3);

 console.log('-----------------------------------');

 const promise1 = new Promise((resolve) => {
     setTimeout(() => {
         resolve ('Return after 1 second');
     }, 1000)
 });

 const promise2 = new Promise((resolve) => {
     setTimeout(() => {
         resolve ('Return after 2 second');
     }, 2000)
 });

 const promise3 = new Promise((resolve) => {
     setTimeout(() => {
         resolve ('Return after 3 second');
     }, 3000)
 });


 const exampleAsunc = async () => {
     try {
         const data1 = await promise1;
         console.log('1', data1);
     } catch (err) {
         console.log('error', err);
     }

     try {
         const data2 = await promise2;
         console.log('2', data2);
     } catch (err) {
         console.log('error', err);
     }

     try {
         const data3 = await promise3;
         console.log('3', data3);
     } catch (err) {
         console.log('error', err);
     }
 }
exampleAsunc();

const callApi = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        const arr = data.slice(0, 5);

        console.log('Resolved: ', arr);
    } catch (error) {
        console.log('Failed', error);
    }
};
callApi();



































