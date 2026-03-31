function calcDigits() {

    var num = document.getElementById("num").value;

    if (num === "" || isNaN(num) || num < 0) {
        document.getElementById("out").textContent =
        "Помилка: введіть натуральне число.";
        return;
    }

    var n = Math.floor(Math.abs(num));
    var sum = 0;
    var prod = 1;

    while (n > 0) {
        var digit = n % 10;
        sum += digit;
        prod *= digit;
        n = Math.floor(n / 10);
    }

    document.getElementById("out").textContent =
    "Сума цифр: " + sum + "\n" +
    "Добуток цифр: " + prod;
}