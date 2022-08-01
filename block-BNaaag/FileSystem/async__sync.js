// synchronized code
function sync() {
    
    console.log("Hey welcome to the journey if BACKEND")
    console.time("task1")
    function sayHello(user) {
        return "Hello, " + user;
    }
    var greet = sayHello("Joey");
    console.log(greet);
    console.timeEnd("task1")
    console.log("Thanks for joining");
}
// asynchronzed code
function async(){
    console.log("Hey welcome to the journey if BACKEND");
    setTimeout(() => {
        function sayHello(user) {
            return "Hello, " + user;
        }
        var greet = sayHello("Joey");
        console.log(greet);
        console.timeEnd("task1")
    }, 1000);
    console.log("Thanks for joining")
}

module.exports =  {
    "sync":sync,
    "async":async,
}

