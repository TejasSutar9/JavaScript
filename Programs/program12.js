function PrintEvenFactor(iNo)
{
    let iCnt = 0;

    if(iNo <= 0)
    {
        iNo = -iNo;
    }

    for(iCnt = 1; iCnt < iNo; iCnt++)
    {
        if(iCnt == 1 || (iNo % iCnt == 0)&&(iCnt % 2 == 0))      
        {
            console.log(iCnt);
        }
    }
}

function main()
{
    let iValue = 28;

    PrintEvenFactor(iValue);

}

main();