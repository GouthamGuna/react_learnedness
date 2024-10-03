function t() {
    // Check if the browser supports Web Workers
    if (window.Worker) {
        const myWorker = new Worker('worker.js');
       
        myWorker.postMessage('Hello, Worker!'); // Send a message to the worker

        myWorker.onmessage = function (e) {
            console.log('Message received from worker:', e.data);
        };
    }
}

t();