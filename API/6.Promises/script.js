/*Promises - Promises are used to avoid callback from normal xhr,
Multiple callbacks leads to call back hell which  can be avoided by using Promises  

calling as a constructor*/

let ajax = new Promise((reslove, reject) => {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "./example.json", true);
  xhr.onload = () => {
    if (xhr.status == 200) {
      reslove(xhr.responseText);
    } else {
      reject(Error(xhr.statusText));
    }
  };
  xhr.send();
});

ajax
  .then(d => {
    let data = JSON.parse(d);
    let write = document.querySelector(".write");

    write.innerHTML += `<p> Name :${data.name} <br> Age: ${data.age} </p>`;
  })
  .catch(e => {
    console.log(e);
  });

/*A promise constructor is called which accepts a function as argument this function has two built in parameters know as resolve and reject 
if(condition){
    true is passed in resolve
}else{
    passed in reject
}

while calling the promise we can either use function or function expression

after calling the promise we will use .then() - it accepts a function which holds the value which resolve sends

.catch() - it also accepts a function with parameter which holds the value which reject sends

calling as a function
*/

function prom(v) {
  return new Promise((resolve, reject) => {
    if (v) {
      reject("false");
    } else {
      resolve("true");
    }
  });
}

prom(false)
  .then(d => {
    console.log(`resolve:`, d);
  })
  .catch(d => {
    console.log(`reject:`, d);
  });
