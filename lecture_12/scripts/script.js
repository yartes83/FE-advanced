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

let timerId = setTimeout(sayHi, 3000, 'hello', 'amigo');


























































