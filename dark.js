window.addEventListener("load", (event) => {
    const theme = localStorage.getItem('theme')
    if (theme == 'light') {
        changeTheme()
    }
})

function changeTheme() {
    document.body.classList.toggle("light-mode")
    if(document.body.classList.contains("light-mode")){
        document.getElementById("icon").src = "icons/moon.png";
        localStorage.setItem('theme', 'light')
    }
    else {
        document.getElementById("icon").src = "icons/sun.png";
        localStorage.setItem('theme', 'dark')
    }
}