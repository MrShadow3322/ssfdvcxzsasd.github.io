document.addEventListener('DOMContentLoaded', () => {
    const balanceElement = document.getElementById('balance');
    const minBalance = 1000;
    const maxBalance = 10000;

    // Генерация случайного баланса
    const randomBalance = Math.floor(Math.random() * (maxBalance - minBalance + 1)) + minBalance;
    balanceElement.textContent = `${randomBalance.toLocaleString()} RATC`;

    // Пример сохранения баланса в localStorage
    if (!localStorage.getItem('userBalance')) {
        localStorage.setItem('userBalance', randomBalance);
    } else {
        balanceElement.textContent = `${localStorage.getItem('userBalance')} RATC`;
    }
});

function showPage(page) {
    if (page === 'main') {
        document.querySelector('.main-page').style.display = 'block';
        document.querySelector('.tasks-page').style.display = 'none';
    } else if (page === 'tasks') {
        document.querySelector('.main-page').style.display = 'none';
        document.querySelector('.tasks-page').style.display = 'block';
    }
}

function completeTask() {
    let currentBalance = parseInt(localStorage.getItem('userBalance')) || 0;
    localStorage.setItem('userBalance', currentBalance + 500);
}
