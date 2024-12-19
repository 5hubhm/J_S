function generate() {
    let x = document.getElementById("Enter-length").value;
    let y = "";
    let pass = "";

    if (document.getElementById("Upper-case").checked) {
        y += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (document.getElementById("Lower-case").checked) {
        y += "abcdefghijklmnopqrstuvwxyz";
    }
    if (document.getElementById("special").checked) {
        y += "!@#$%^&()-_=+\\|[]{};:/?.>";
    }
    if (document.getElementById("numbers").checked) {
        y += "0123456789";
    }

    if (y === "") {
        document.getElementById("output").textContent =
            "Please select at least one option for generating a valid password.";
        return;
    }

    for (let i = 0; i < Number(x); i++) {
        pass += y.charAt(Math.floor(Math.random() * y.length));
    }

    document.getElementById("output").textContent = pass;
}
