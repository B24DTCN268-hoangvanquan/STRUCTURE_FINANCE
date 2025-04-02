// function login() {
//     window.location.href = "login.html";
// }
function login() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    
    if (!email) {
        alert(" Email không được để trống!");
        return;
    }
    if (!password) {
        alert(" Mật khẩu không được để trống!");
        return;
    }

    
    if (email === storedEmail && password === storedPassword) {
        alert(" Đăng nhập thành công! Đang chuyển hướng...");
        window.location.href = "home.html"; 
    } else {
        alert(" Email hoặc Mật khẩu không đúng!");
    }
}


function register() {
    window.location.href = "register.html";
}
