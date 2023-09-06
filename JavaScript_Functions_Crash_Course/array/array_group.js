console.log("Alive...");

const MY_EATABLES = [
  { food: "🍆", type: "Vegetables", count: 1 },
  { food: "🥝", type: "Fruits", count: 1 },
  { food: "🍅", type: "Vegetables", count: 3 },
  { food: "🍗", type: "Non-Vegs", count: 4 },
  { food: "🍳", type: "Non-Vegs", count: 5 },
  { food: "🍍", type: "Fruits", count: 1 },
  { food: "🍏", type: "Fruits", count: 7 },
  { food: "🦀", type: "Non-Vegs", count: 1 },
  { food: "🥑", type: "Fruits", count: 2 },
]

const grouped = MY_EATABLES.group((item) => {
  return item.type;
})


const groupByMap = MY_EATABLES.groupToMap((item) => {
  return item.type;
})

const groupByCount = MY_EATABLES.group((item) => {
 return item.count > 1 ? 'On-Track' : 'Needs-Improvements';
})

console.log('grouped by type : ', grouped);

//console.log('grouped by map : ', groupByMap);

//console.log('grouped by count : ', groupByCount);