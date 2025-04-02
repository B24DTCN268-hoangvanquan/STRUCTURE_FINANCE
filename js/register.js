function register() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    const message = validateRegistration(email, password, confirmPassword);

    if (message === "Đăng ký thành công!") {
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        alert(" Đăng ký thành công!");

        window.location.href = "login.html";
    } else {
        alert(message);
    }
}

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function isValidPassword(password) {
    return password.length >= 6;
}

function validateRegistration(email, password, confirmPassword) {
    if (!email) return " Email không được để trống.";
    if (!isValidEmail(email)) return " Email phải đúng định dạng.";
    if (!password) return " Mật khẩu không được để trống.";
    if (!isValidPassword(password)) return " Mật khẩu tối thiểu 6 ký tự trở lên.";
    if (!confirmPassword) return " Mật khẩu xác nhận không được để trống.";
    if (password !== confirmPassword) return " Mật khẩu xác nhận phải trùng khớp.";

    return "Đăng ký thành công!";
}
function register() {
    window.location.href = "login.html";
}