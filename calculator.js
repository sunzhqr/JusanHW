const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Введите первое число: ", function(num1) {
    rl.question("Введите операцию : ", function(operation) {
        rl.question("Введите второе число: ", function(num2) {
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
            let result;
            switch (operation) {
                case "+":
                    result = num1 + num2;
                    break;
                case "-":
                    result = num1 - num2;
                    break;
                case "*":
                    result = num1 * num2;
                    break;
                case "/":
                    if (num2 !== 0) {
                        result = num1 / num2;
                    } else {
                        result = "Ошибка: деление на ноль";
                    }
                    break;
                default:
                    result = "Некорректная операция";
            }

            console.log("Результат:", result);

            rl.close();
        });
    });
});
