$(document).ready(function(){

   console.log('script added...')

   const request = window.indexedDB.open("Dev_GMSK_Test_DB", 1);
   request.onerror = (e) => {
      console.error(e)
   }
  
   request.onupgradeneeded = (e) => {
      const db = e.target.result;

      const objectStore = db.createObjectStore("customers", { keyPath: "ssn" });
                     objectStore.createIndex("name", "name", { unique: false });
                    objectStore.createIndex("email", "email", { unique: true });

      objectStore.transaction.oncomplete = (e) => {

      const customerObjectStore =  db.transaction("customers", "readwrite").objectStore("customers");
   
      customerData.forEach((customer) => {
         customerObjectStore.add(customer);
         });
      }

      const transaction = db.transaction(["customers"], "readwrite");
   }

});

