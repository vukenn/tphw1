/*function currentDate(){
    var today = new Date();

    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var date = today.getDate();

    document.getElementById('todaysDate').innerHTML = month + "/" + date + "/" + year;
}*/

function currentDate(){
    var today = new Date();

    var day = today.getDay();
    var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var monthName = month[today.getMonth()];
    var dateNumber = today.getDate();
    var dateYear = today.getFullYear();

    document.getElementById('todaysDate').innerHTML = (daylist[day]) + ", " + monthName + " " + dateNumber + ", " + dateYear;
}