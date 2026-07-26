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

// let customer = {

//       name: "Kamal",
//     age: 12,
//     isActive: true
// }

// let stringCustomer = JSON.stringify(customer);



// localStorage.setItem("customer" ,stringCustomer);

// let retCustomer = localStorage.getItem("customer");

// let jsonCustomer = JSON.parse(retCustomer);

// console.log(jsonCustomer);



const customerList = JSON.parse(localStorage.getItem("customerList"));

function btnAddCustomerOnAction() {
    //  let customerList = JSON.parse(localStorage.getItem("customerList"));
    let customer = {
        id: document.getElementById("txtCustomerId").value,
        name: document.getElementById("txtCustomerName").value,
        age: document.getElementById("txtCustomerAge").value,
        address: document.getElementById("txtCustomerAddress").value
    }
    console.log(customer);

    customerList.push(customer);

    localStorage.setItem("customerList", JSON.stringify(customerList));
    btnLoadTableOnAction();

    // alert("add customer")
}

function btnSearchByIdOnAction() {
    let customerList = JSON.parse(localStorage.getItem("customerList"));

    let customer = customerList.find(customer => {
        return customer.id === document.getElementById("txtCustomerId").value
    });


    document.getElementById("txtCustomerName").value = customer.name;
    document.getElementById("txtCustomerAge").value = customer.age;
    document.getElementById("txtCustomerAddress").value = customer.address;


    // alert("search customer")
}

function btnDeleteByIdOnAction() {
    let customerList = JSON.parse(localStorage.getItem("customerList"));

    let customerId = document.getElementById("txtCustomerId").value;

    let index = customerList.findIndex(customer =>{
        return customer.id === customerId;
    })

    customerList.splice(index,1);

    localStorage.setItem("customerList", JSON.stringify(customerList));

    console.log(customerList);
}


