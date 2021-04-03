import haversine from "./haversine.js";

var initial_point = [-43.5277437,-46.3723508];
var final_point = [-43.5288566,-46.3690734];

console.log(haversine.getDistance(initial_point, final_point));