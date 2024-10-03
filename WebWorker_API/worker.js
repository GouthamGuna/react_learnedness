onmessage = function (e) {
    //console.log('Message received from main script:', e.data);
    const result = e.data + ' - Processed by Worker.js';
    postMessage(result); // Send a message back to the main script
};
