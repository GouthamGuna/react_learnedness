console.log('JS Connected Successfully')

fetch('https://emojihub.yurace.pro/api/random')
.then(data => {return data.json();})
.then(post => {document.getElementById('greeting').innerHTML = '<span>Hello World </span>' + post.htmlCode;});
