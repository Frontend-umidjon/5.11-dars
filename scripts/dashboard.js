const logoutEl = document.querySelector(".logout-btn")

logoutEl.addEventListener("click", ()=>{
    localStorage.removeItem("accessToken")
    open("/pages/login.html", "_self")
})


function checkToken(){
    const token = localStorage.getItem('accessToken')
    if(!token){
        window.location.replace("/pages/login.html")
    }
}



window.onload = ()=>{
    checkToken()
}