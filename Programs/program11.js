function PrintEven(iNo)
{
    if(iNo <= 0)
    {
        return;
    }
    let iCnt = 0;
    for(iCnt = 1; iCnt <= iNo; iCnt++)
    {
        console.log(2*iCnt);
    }
}

function main()
{
    let iValue = 7;

    PrintEven(iValue);

}

main();