 setTimeout(() => {}, 1000); //дозволяє нам запускати функцію ОДИН РАЗ через певний інтервал часу.

 //Виклик setTimeout повертає “ідентифікатор таймера” timerId, який ми можемо використовувати для скасування виконання.
 //Синтаксис для скасування:
 // let timerId = setTimeout();
 // clearTimeout(timerId);
 let timerId = setTimeout(() => alert("ніколи не відбувається"), 10000);
 alert(timerId);
 clearTimeout(timerId);
 alert(timerId);