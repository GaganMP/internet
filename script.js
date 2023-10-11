let message =document.getElementById("message");
let messageOnline=()=>{
    message.textContent="Internet Connection Available";
    message.style.cssText="background-color:#e7f6d5;color:#689f38";
    alert("you are online");
};

let messageOffline=()=>{
    message.textContent="Internet Connection not Available";
    message.style.cssText="background-color:#ffdde0";
    alert("you are offline");
    message.style.cssText="background-color:#ffdde0;color:#d32f2f";
};

if(window.navigator.onLine)
{
    messageOnline();
}
else{
    messageOffline();
}

window.addEventListener("online",messageOnline);
window.addEventListener("offline",messageOffline);