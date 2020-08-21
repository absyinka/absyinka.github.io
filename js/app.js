function add(x,y) {

	let sum = parseFloat(x) + parseFloat(y);

	return sum;
}

function substract(x,y) {

	let diff = parseFloat(x) - parseFloat(y);

	return diff;
}


function multiply(x,y) {

	let multi = parseFloat(x) * parseFloat(y);

	return multi;
}

function division(x,y) {

	let divide = parseFloat(x) / parseFloat(y);

	return divide;
}


function modulus(x,y) {

	let modu = parseFloat(x) % parseFloat(y);

	return modu;
}


function getNum1() {

	let x = document.getElementById('num1');

	return x.value;

}

function getNum2() {

	let y = document.getElementById('num2');

	return y.value;
}

function addClick() {

	let x = getNum1();

	let y = getNum2();

	let result = add(x,y);

	document.getElementById('result').value = result;
}

function subClick() {

	let x = getNum1();

	let y = getNum2();

	let result = substract(x,y);

	document.getElementById('result').value = result;
}

function mulClick() {

	let x = getNum1();

	let y = getNum2();

	let result = multiply(x,y);

	document.getElementById('result').value = result;
}

function divClick() {

	let x = getNum1();

	let y = getNum2();

	let result = division(x,y);

	document.getElementById('result').value = result;
}

function modClick() {

	let x = getNum1();

	let y = getNum2();

	let result = modulus(x,y);

	document.getElementById('result').value = result;
}
