//Query Selector
const p4 = document.querySelector('#b p')
p4.style.color = 'green'
p4.style.fontSize = '30px'
const li2 = document.querySelector('section#b ul li:nth-child(2)')
li2.style.backgroundColor = 'Green'

//Query Selector All
const p = document.querySelectorAll('p')
p[2].style.backgroundColor = 'lightblue'
p[2].innerHTML = '118140087'

// Membuat teks kedalam id html
const judul = document.getElementById('judul')
judul.innerHTML = 'Tugas 3 - Manipulasi DOM'

//set Attribute
const judul2 = document.getElementById('judul')
judul2.setAttribute('class', 'name')