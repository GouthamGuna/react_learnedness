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

console.log('grouped by type : ', typeGroup)