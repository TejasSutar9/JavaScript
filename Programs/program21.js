function CheckEvenOdd(iNo)
{
    if(iNo < 0)                             //updater
    {
        iNo = -iNo;
    }
    if(iNo % 2 == 0)
    {
        console.log(`${iNo} is Even Number`);
    }
    else
    {
        console.log(`${iNo} is Odd Number`);
    }
}

function main()
{
    let iValue = 21;

    CheckEvenOdd(iValue);
}

main();