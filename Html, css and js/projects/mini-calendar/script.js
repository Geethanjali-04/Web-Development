var monthEle = document.getElementById('month-name');
var dateEle = document.getElementById('date');
var yearEle = document.getElementById('year');
var dayEle = document.getElementById('day-name');
var currDate = new Date();
var date = currDate.getDate();
var year = currDate.getFullYear();
// Get month as a string
var month = currDate.toLocaleString('default', { month: 'long' });

// Get day as a string
var day = currDate.toLocaleString('default', { weekday: 'long' })
yearEle.innerText = year;
dayEle.innerHTML = day;
monthEle.innerText = month;
dateEle.innerText = date;
