function FindMax(iNo1, iNo2)
{
    if(iNo1 > iNo2)
    {
        return iNo1;
    }
    else
    {
        return iNo2;
    }
}

function main()
{
    let iValue1 = 11, iValue2 = 21;
    let iRet = 0;

    iRet = FindMax(iValue1, iValue2);

    if(iRet == true)
    {
        console.log(`${iRet} is Maximum Number`);
    }
    else
    {
        console.log(`${iRet} is Maximum Number`);
    }
}

main();