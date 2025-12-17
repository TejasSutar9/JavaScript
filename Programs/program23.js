function CheckLeapYear(year)
{
    if(((year % 4 == 0)&&(year % 100 != 0)) || (year % 400 == 0))
    {
        console.log(`${year} is Leap Year`);
    }
    else
    {
        console.log(`${year} is not a Leap Year`);
    }
}

function main()
{
    let iValue = 2021;

    CheckLeapYear(iValue);
}

main();