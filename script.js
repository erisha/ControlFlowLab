console.log('///////=== Part: 1 Growing Pains===///////');

const PI = 3.1415;
const radius = 5;
const area = Math.round(PI * radius * radius);
console.log(` Max Capacity = ${area} sqft`);//79 rounded

// the area is starting off w/ 20 plants
// each plant requires minimum of 0.8 sq meters
// plants double in # every week
const maxCapacity = area;
const startPlants = 20
const eachPlant = .8
const startArea = startPlants * eachPlant;// week 0
console.log(`Week 0// Start area = ${startArea}`);// 16
let week = 3;// current week
let plantGrowth = (startArea * 2) * (week) ;
console.log(`The plant growth for week ${week} is ${plantGrowth} sqft`);

// needs to be PRUNED max 80% of area- 79 sq
// Monitored 50-80 % of max cap.
// Planted less than 50 % after give # of weeks

/// include results for weeks 1-3
//  const pruned = maxCapacity / weekArea > .8
if (plantGrowth / maxCapacity >= .8){
    console.log(`Week ${week}: plants needs to be PRUNED`);
} else if (plantGrowth / maxCapacity > .5 && plantGrowth / maxCapacity < .8){
    console.log(`Week ${week}: plants need to be MONITORED`);
} else if (plantGrowth / maxCapacity < .5){
    console.log(`Week ${week}: plants need to be PLANTED`);
}




console.log('///////====Thinking Bigger====//////');

const startPlants2 = 100;
const eachPlant2 = .8;
const startArea2 = startPlants2 * eachPlant2;// week 0
weekNum = 10;
console.log(`Week 0// Start area for phase 2 = ${startArea2}`);//80
const weeklyGrowth = (startArea * 2 ) * week;
 
if (weekNum >= 10){
    console.log(`It is week ${week} time to prune! The garden has now grown to ${weeklyGrowth} sqft`);
};