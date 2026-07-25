// console.log("Hi");
// localStorage.setItem("name","Nimal");
// localStorage.setItem("name1","Kamal");
// localStorage.setItem("name2","Ruwan");
// localStorage.setItem("name3","A");
// localStorage.setItem("name4","B");

// localStorage.removeItem("name3");

// // localStorage.clear();

// let custName = localStorage.getItem("name");

// console.log(custName);

let customer = {

      name: "Kamal",
    age: 12,
    isActive: true
}

let stringCustomer = JSON.stringify(customer);



localStorage.setItem("customer" ,stringCustomer);

let retCustomer = localStorage.getItem("customer");

let jsonCustomer = JSON.parse(retCustomer);

console.log(jsonCustomer);