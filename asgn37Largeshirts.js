//Large Shirts: Modify the make_shirt() function so that shirts are large by default with 
//a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message,
//and a shirt of any size with a different message.
function make_shirt(size, msg) {
    if (size === void 0) { size = "L"; }
    if (msg === void 0) { msg = "I Love TypeScript"; }
    console.log("creating a ".concat(size, " size shirt with a msg ").concat(msg));
}
make_shirt();
make_shirt("M");
make_shirt("S", "I am Pakistani");
