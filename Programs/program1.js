function DivideTwoNos(iNo1, iNo2)
{
    let iAns = 0;

    if(iNo2 > iNo1)
    {
        return -1;
    }

    iAns = iNo1 / iNo2;
    
    return iAns;
}

function main()
{
    let iValue1 = 17, iValue2 = 3;
    let iRet = 0;

    iRet = DivideTwoNos(iValue1, iValue2);

    console.log(`${iValue1} is divided by ${iValue2} = ${iRet}`);

}

main();