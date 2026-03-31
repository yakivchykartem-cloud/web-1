function genPassword(){

    var len = parseInt(document.getElementById("len").value);

    if (isNaN(len) || len <= 0) {
        document.getElementById("out").textContent =
        "Помилка: введіть довжину пароля.";
        return;
    }

    if (len > 32) {
        document.getElementById("out").textContent =
        "Помилка: максимальна довжина пароля — 32 символи.";
        return;
    }

    var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-";

    var pass = "";

    for (var i = 0; i < len; i++) {

        var r = Math.floor(Math.random() * chars.length);

        pass += chars[r];
    }

    document.getElementById("out").textContent =
    "Згенерований пароль: " + pass;
}