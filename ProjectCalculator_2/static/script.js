const btn = document.getElementById('btn');
const inp1 = document.getElementById('inp1');
const inp2 = document.getElementById('inp2');

const sumVal = document.querySelector('.sumVal');
const productVal = document.querySelector('.productVal');
const divisionVal = document.querySelector('.divisionVal');

btn.addEventListener('click', () => {
    const num1 = parseFloat(inp1.value);
    const num2 = parseFloat(inp2.value);

    if (!isNaN(num1) && !isNaN(num2)) {
        sumVal.innerText = num1 + num2;
        productVal.innerText = num1 * num2;
        divisionVal.innerText = num2 !== 0 ? (num1 / num2).toFixed(2) : 'Infinity';
    } else {
        sumVal.innerText = productVal.innerText = divisionVal.innerText = 'Invalid input';
    }
});
