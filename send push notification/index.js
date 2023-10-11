/* const button = document.querySelector("button");

button.addEventListener("click", () => {
  Notification.requestPermission().then((perm) => {
    if (perm == "granted") {
       // alert('granted')
      const notification = new Notification("Example notification...", {
        body: "This is more text...",
       // data: { hello: "world" },
      });

      notification.addEventListener("close", (e) => {
        console.log(e);
      });
    }
  });
}); */


function strToBin(str) {
    return Uint8Array.from(atob(str), function (c) {
        return c.charCodeAt(0);
    });
}

//strToBin('http://sms.cerpsoft.in/pearl/adminmenu.do?method=allStudentsList');

function show_blur_screen() {
    $(".blur").css({ "z-index": 3, opacity: 0.6 }), $("html, body").css({ overflow: "hidden" });
}