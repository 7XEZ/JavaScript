let workers = [
    {"name":"John",
    "salary":500},

    {"name":"Mike",
    "salary":1300},

    {"name":"Linda",
    "salary":1500}
];

function salary(arr){
    for (let i = 0; i < arr.length; i++){
        if (arr[i].salary > 1000){
            console.log(arr[i].name)
        }
    }
}

salary(workers)