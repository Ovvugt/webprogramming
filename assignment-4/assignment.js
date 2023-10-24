const table = document.getElementById('table');
const b250 = document.getElementById('b250');
const b400 = document.getElementById('b400');

b250.onclick = function() {
    table.style.width = '250px';
}

b400.onclick = function() {
    table.style.width = '400px';
}

const b1 = document.getElementById('b1');
const b10 = document.getElementById('b10');
const b20 = document.getElementById('b20');

b1.onclick = function() {
    table.style.border = '1px solid black';
    table.style.borderSpacing = '1px';
}

b10.onclick = function() {
    table.style.border = '10px solid black';
    table.style.borderSpacing = '10px';
}

b20.onclick = function() {
    table.style.border = '20px solid black';
    table.style.borderSpacing = '20px';
}

const bTeal = document.getElementById('bTeal');
const bGray =  document.getElementById('bGray');
const bRed = document.getElementById('bRed');
const bBlack = document.getElementById('bBlack');

bTeal.onclick = function() {
    for (let i = 1; i < table.children[0].children.length; i++) {
        for (let j = 0; j < table.children[0].children[i].children.length; j++) {
            table.children[0].children[i].children[j].style.backgroundColor = 'teal';
        }
    }
}

bGray.onclick = function() {
    for (let i = 1; i < table.children[0].children.length; i++) {
        for (let j = 0; j < table.children[0].children[i].children.length; j++) {
            table.children[0].children[i].children[j].style.backgroundColor = 'gray';
        }
    }
}

bRed.onclick = function() {
    for (let i = 1; i < table.children[0].children.length; i++) {
        for (let j = 0; j < table.children[0].children[i].children.length; j++) {
            table.children[0].children[i].children[j].style.backgroundColor = 'red';
        }
    }
}

bBlack.onclick = function() {
    for (let i = 1; i < table.children[0].children.length; i++) {
        for (let j = 0; j < table.children[0].children[i].children.length; j++) {
            table.children[0].children[i].children[j].style.backgroundColor = 'black';
        }
    }
}

const bReset = document.getElementById('bReset');
bReset.onclick = function() {
    table.style.width = '250px';
    table.style.border = '1px solid black';
    table.style.borderSpacing = '2px';
    for (let i = 1; i < table.children[0].children.length; i++) {
        for (let j = 0; j < table.children[0].children[i].children.length; j++) {
            table.children[0].children[i].children[j].style.backgroundColor = 'teal';
        }
    }
}