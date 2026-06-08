function loginUser() {

    const loginId = document.getElementById("loginId").value.trim();
    const password = document.getElementById("password").value.trim();

    const users = {
        "Rajat Sharma": {
            password: "14042006",
            name: "Rajat Sharma",
            email: "hellorajatsharma@gmail.com",
            roll: "23CS34"
        },
        "Ravinder Yadav": {
            password: "09122004",
            name: "Ravinder Yadav",
            email: "yravinder818@gmail.com",
            roll: "23CS35"
        },
        "Vishal Bhardwaj": {
            password: "21102006",
            name: "Vishal Bhardwaj",
            email: "vishal4bhardwaj@gmail.com",
            roll: "23CS55"
        }
    };

    if (users[loginId] && users[loginId].password === password) {
        localStorage.setItem("currentUser", JSON.stringify(users[loginId]));
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid Login ID or Password");
    }
}