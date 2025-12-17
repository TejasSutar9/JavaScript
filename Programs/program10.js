function CheckEvenOdd(iNo)
{
    if((iNo % 2) == 0)
    {
        return true;
    }
    else
    {
        return false;
    }     
}

function main()
{
    let iValue = 10;
    let bRet = false;

    iRet = CheckEvenOdd(iValue);

    if(iRet == true)
    {
        console.log(`${iValue} is a even number`);
    }
    else
    {
        console.log(`${iValue} is a odd number`);
    }
}

main();