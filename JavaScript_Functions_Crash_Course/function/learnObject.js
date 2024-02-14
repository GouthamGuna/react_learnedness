console.log("object js init...");

const pencil = {
    length: "7.5 inches",
    shape: "hexagonal",
    diameter: "1/4 inch",
    write: function(){return 'writing...'},
    erase: function(){return 'eraseing...'},
    sharpen: () => {return 'sharpening...'},
}

console.log('pencil : ', pencil)

console.log('pencil.write() : ', pencil.write())
console.log('pencil.sharpen() : ', pencil.sharpen())

const newPencil = {...pencil};

console.log('newPencil : ', newPencil)