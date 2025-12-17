function FindLargest(iNo1, iNo2, iNo3)
{
    if((iNo1 > iNo2) && (iNo1 > iNo3))
    {
        return iNo1;
    }
    else if(iNo2 > iNo3)
    {
        return iNo2;
    }
    
    else
    {
        return iNo3;
    }
}

function main()
{
    let iValue1 = 1111, iValue2 = 121 , iValue3 = 51;
    let iRet = 0;

    iRet = FindLargest(iValue1, iValue2, iValue3);

    console.log(`${iRet} is Largest Number`);

}

main();