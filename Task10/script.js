const token = localStorage.getItem("token")
if(token) {
    window.location.href = "./home.html"
}

document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault()
    
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    if(IsAuthorised(username,password)){
        const token = Math.random().toString(36).substr(2)
        console.log(token)
        localStorage.setItem("token",token)
        window.location.href = "./home.html"
    } else {
        alert("wrong username or password")
    }
})


users = [
    {
        username: "nika@gmail.com",
        password: "nika1234",
    },
    {
        username: "gio@gmail.com",
        password: "gio1234",
    },
    {
        username: "sandro@gmail.com",
        password: "sandro1234",
    },
]

function IsAuthorised(username, password) {
    return users.some((user) => user.username === username && user.password === password);
}