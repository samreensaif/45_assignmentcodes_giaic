var fav_Transprt = ["car", "cycle", "sportsbike", "ship"];
var message = " i would like to own a";
fav_Transprt.forEach(function (mode) { return console.log(message, mode); });
fav_Transprt.forEach(function (mode) { return console.log("wow ".concat(message, " "), mode); });
