incomeAmount = prompt('please enter your income amount');

if (parseInt(incomeAmount) <= 250000)
{
    alert("No Tax");
}
else if (parseInt(incomeAmount) > 250000 && parseInt(incomeAmount) <= 500000 ) {
    tax = parseInt(incomeAmount) * 0.05
    alert("income tax owed = " + tax)
}

else if (parseInt(incomeAmount) > 500000 && parseInt(incomeAmount) <= 1000000 ) {
    tax = parseInt(incomeAmount) * 0.2
    alert("income tax owed = " + tax)
}
else if (parseInt(incomeAmount) < 1000000 ) {
    tax = parseInt(incomeAmount) * 0.3
    alert("income tax owed = " + tax)
}
else{
    alert("Invalid input")
}