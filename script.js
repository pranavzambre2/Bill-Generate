let counter = document.querySelector('#counter');
let btns = document.querySelectorAll('.btn');
let count = 0;
btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList
        if (styles.contains('increase')) {
            count++;
        } else if (styles.contains('decrease')) {
            count--;
        }


        else {
            count = 0;
        }
        counter.textContent = count;

    })
})
document.getElementById("num").value = "";
function fun1() {

    const mark1 = document.getElementById("num").value;

    const percentage = (mark1 * 5) / 100;
    document.getElementById("percentage").innerHTML = percentage;
    // alert(percentage);
}
document.getElementById("num").value = "";
function fun2() {
    const mark2 = document.getElementById("num").value;
    const percentage = (mark2 * 10) / 100;
    document.getElementById("percentage").innerHTML = percentage;
    // alert(percentage);
}
document.getElementById("num").value = "";
function fun3() {
    const mark3 = document.getElementById("num").value;
    const percentage = (mark3 * 15) / 100;
    document.getElementById("percentage").innerHTML = percentage;
    // alert(percentage);
}
document.getElementById("num").value = "";
function fun4() {
    const mark4 = document.getElementById("num").value;
    const percentage = (mark4 * 25) / 100;
    document.getElementById("percentage").innerHTML = percentage;
    // alert(percentage);
}
document.getElementById("num").value = "";
function fun5() {
    const mark5 = document.getElementById("num").value;
    const percentage = (mark5 * 50) / 100;
    document.getElementById("percentage").innerHTML = percentage;
    // alert(percentage);
}
document.getElementById("num").value = "";
function fun6() {
    const mark6 = document.getElementById("num").value;
    const percentage = (mark6 * 75) / 100;
    document.getElementById("percentage").innerHTML = percentage;
    // alert(percentage);
}
const gnrt = document.getElementById("billGenerate");
document.getElementById("num").value = "";

function funG() {
    const mark7 = document.getElementById("num").value;
    document.getElementById("mark7").innerHTML = mark7;

}

