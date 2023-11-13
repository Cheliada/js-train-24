console.log("Завдання: 7 ==============================");

// Створюємо функцію task7, яка використовує setInterval та проміси.
function task7() {
    // Створюємо новий проміс.
    let result = new Promise((resolve, reject) => {
        // Використовуємо функцію setInterval, щоб виконати функцію кожну секунду.
        let intervalID = setInterval(() => {
            // Отримаємо поточну дату та час
            const date = new Date();
            // Отримуємо секунди з поточної дати
            const seconds = date.getSeconds();
            // Виводимо в консоль повідомлення `Поточні секунди: ${seconds}`
            console.log(`Поточні секунди: ${seconds}`);
            // Якщо поточні секунди кратні 10, очищуємо інтервал та резолвимо проміс з рядком "Поточні секунди кратні 10!".
            if (seconds % 10 == 0) {
                clearInterval(intervalID);
                resolve("Поточні секунди кратні 10!");
            }
            // Якщо поточні секунди кратні 3, очищуємо інтервал та відхиляємо проміс з рядком "Поточні секунди кратні 3!".
            if (seconds % 3 == 0) {
                clearInterval(intervalID);
                reject("Поточні секунди кратні 3!");
            }
        }, 1000);
    });

    // Використовуємо then для обробки зарезолвленого проміса, та виводимо в консоль `Проміс зарезолвився з значенням: ${value}` .
    // Якщо проміс відхилено, обробляємо помилку за допомогою catch, та виводимо в консоль `Проміс відхилився з помилкою: ${error}`.
    // Використовуємо finally для виконання дій після завершення проміса, незалежно від його статусу, та виводимо в консоль "Проміс завершено".
    result
        .then((value) => {
            console.log(`Проміс зарезолвився з значенням: ${value}`);
        })
        .catch((error) => {
            console.log(`Проміс відхилився з помилкою: ${error}`);
        })
        .finally(() => {
            console.log("Проміс завершено");
        });
}

// Викликаємо функцію task7
task7();