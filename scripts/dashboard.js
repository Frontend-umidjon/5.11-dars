const logoutEl = document.querySelector(".logout-btn")
const loadEl = document.querySelector(".loading-screen")

logoutEl.addEventListener("click", ()=>{
    localStorage.removeItem("accessToken")
    open("/pages/login.html", "_self")
})


function checkToken(){
   /* providing accessToken in bearer */
fetch('https://dummyjson.com/auth/me', {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${localStorage.getItem("accessToken")}`, // Pass JWT via Authorization header
  }, 
})
.then(res => {
    if(!res.ok){
        throw new Error ("Invalid Token")

    }
    return res.json
})
.then(res => {
    console.log(res);
    removeLoadingScreen()
    
    
})
.catch(err => {
    localStorage.removeItem("accessToken")
  window.location.replace("/pages/login.html" , "_self")
})

}



window.onload = ()=>{
    checkToken()
}
 function removeLoadingScreen(){
    loadEl.style.display = "none"
 }