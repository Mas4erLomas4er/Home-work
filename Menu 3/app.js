let mainBlock = document.querySelector('body');
let table = document.createElement('table');
let tr;
let td;
let myColor;
mainBlock.appendChild(table);

for (let i = 0; i < 10; i++) {
	tr = document.createElement('tr');
	table.appendChild(tr);
	for (let j = 0; j < 10; j++) {
		myColor = 'rgb(' + GetRandomInt() + ', ' + GetRandomInt() + ', ' + GetRandomInt() + ')';
		td = document.createElement('td');
		td.style.backgroundColor = myColor;
		tr.appendChild(td);
	}
}

function GetRandomInt() {
	return Math.floor(Math.random() * 255);
}