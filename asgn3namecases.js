var personName = " Samreen Saif ";
console.log("lower case:", personName.toLowerCase());
console.log("upper case:", personName.toUpperCase());
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
