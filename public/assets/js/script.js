var counteValue = 0;
const id = (name) => document.getElementById(name);
const change = function(delta) {
    counteValue += parseInt(delta);
    counteValue = counteValue >= 0 ? counteValue : 0;
    id('count').innerText = counteValue;
}

id('plus').addEventListener('click', () => change(1));
id('minus').addEventListener('click', () => change(-1));

