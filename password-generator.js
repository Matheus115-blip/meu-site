const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const copyEl = document.getElementById('copy');

const randomFunc = {
    lower: () => String.fromCharCode(Math.floor(Math.random() * 26) + 97),
    upper: () => String.fromCharCode(Math.floor(Math.random() * 26) + 65),
    number: () => String.fromCharCode(Math.floor(Math.random() * 10) + 48),
    symbol: () => '!@#$%^&*(){}[]=<>/,.'.charAt(Math.floor(Math.random() * 18))
};

function generatePassword(length, upper, lower, number, symbol) {
    let password = '';
    const typesCount = upper + lower + number + symbol;
    const typesArr = [{upper}, {lower}, {number}, {symbol}].filter(item => Object.values(item)[0]);
    if(typesCount === 0) return '';
    for(let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            password += randomFunc[funcName]();
        });
    }
    return password.slice(0, length);
}

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasUpper = uppercaseEl.checked;
    const hasLower = lowercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;
    resultEl.value = generatePassword(length, hasUpper, hasLower, hasNumber, hasSymbol);
});
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        display.value += btn.dataset.num || btn.dataset.op;

        // MUDANDO COR DO DISPLAY
        const cores = ['#e0f7fa','#b2ebf2','#80deea','#4dd0e1']; // cores que quiser
        const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
        display.style.backgroundColor = corAleatoria;
    });
});
copyEl.addEventListener('click', () => {
    if(resultEl.value) navigator.clipboard.writeText(resultEl.value).then(()=>alert('Senha copiada!'));
});