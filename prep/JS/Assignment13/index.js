//A callback function is a function passed into another function as an argument

function greeting(name) {
  console.log(`Hello, ${name}`);
}

function f1(callback) {
  const name = 'John';
  callback(name);
}

f1(greeting);


//2
const PrintNumbers = () => {
  setTimeout(() => {
    console.log("1")

    setTimeout(() => {
      console.log("2");

      setTimeout(() => {
        console.log("3");

        setTimeout(() => {

          console.log("4");

          setTimeout(() => {
            console.log("5");

            setTimeout(() => {
              console.log("6");

              setTimeout(() => {
                console.log("7");
              }, 1000);

            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);

  }, 1000);
}
PrintNumbers();

//3

let numbers = new Promise((resolve, reject) => {
  resolve();
})

numbers.then(() => {
  setTimeout(() => {
    console.log("1")
  }, 1000);
}).then(() => {
  setTimeout(() => {
    console.log("2")
  }, 2000);
}).then(() => {
  setTimeout(() => {
    console.log("3")
  }, 3000);
}).then(() => {
  setTimeout(() => {
    console.log("4")
  }, 4000);
}).then(() => {
  setTimeout(() => {
    console.log("5")
  }, 5000);
}).then(() => {
  setTimeout(() => {
    console.log("6")
  }, 6000);
}).then(() => {
  setTimeout(() => {
    console.log("7")
  }, 7000);
})
//4
let id = "yes";

const Argument = new Promise((resolve,reject)=>{
        if(id=="yes"){
        resolve(id);}
        else{
        reject()};
    });
Argument
    .then((id)=>{
        console.log("Promise Resolved");

    })
    .catch(()=>{
        console.log("Promise Rejected");

    })
    .finally(()=>{
        console.log("END");
    })
//5
function greet(name, callback) {
  console.log('Hi' + ' ' + name);
  callback();
}
function callMe() {
  console.log('I am callback function');
}
greet('Smith', callMe);
//6
function getEmployeeID1() {

  setTimeout(() => {
      console.log("Fetching the Employee details");
      let id = [1, 2, 3, 4, 5];
      console.log(id);

      setTimeout(() => {
          let employeeDetails = {
              name: "John Smith",
              age: 34,
          };
          console.log(`The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age}`);

          setTimeout(() => {
              employeeDetails.gender = "Male",
                  console.log(`The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age} and the gender is ${employeeDetails.gender}`);

              setTimeout(() => {
                  employeeDetails.salary = 21000;
                  console.log(`The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age} and the gender is ${employeeDetails.gender} and the salary is ${employeeDetails.salary}`);
              }, 2000);

          }, 2000);

      }, 2000);

  }, 2000);
}
getEmployeeID1()
//7
let countValue = new Promise(function (resolve, reject) {
  resolve('Promise resolved'); 
});

countValue.then(
   function successValue(result) {
       console.log(result);
   },
)

.catch(
   function errorValue(result) {
       console.log(result);
   }
);
// 8
let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
  resolve('Promise resolved')}, 4000); 
});

async function asyncFunc() { 
      let result = await promise; 
      console.log(result);
}
asyncFunc();

//9
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The first promise has resolved');
    resolve(10);
  }, 1 * 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The second promise has resolved');
    resolve(20);
  }, 2 * 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The third promise has resolved');
    resolve(30);
  }, 3 * 1000);
});

Promise.all([p1, p2, p3]).then((results) => {
  console.log('End of Promises');
});