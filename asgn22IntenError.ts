//Intentional Error: If you haven’t received an array index error in one of your programs yet,
// try to make one happen. Change an index in one of your programs 
// produce an index error. Make sure you correct the error before closing the program.

let fruitsName: string[]= ["banana","pineapple","apple", "orange", "pear"];

// intetional error
//fruitsName.forEach((abc   => console.log(`fruits name:${abc} \t\tindex: ${index}`)));
// correction

fruitsName.forEach((abc,index)  => {console.log(`fruits name:${abc} \t\tindex: ${index}`)});
 console.log(fruitsName[3]);

 fruitsName.forEach((abc, index) => { console.log (`fruitsName: ${abc}, is at index: ${index}`)});
