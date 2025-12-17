function SummationOfNonFactors(iNo)
{
    let iCnt = 0;
    let iSum = 0;

    console.log("Non Factors is : ");    
    for(iCnt = 1; iCnt < iNo; iCnt++)
    {
        if((iNo % iCnt != 0))      
        {
            console.log(iCnt);
            iSum = iSum + iCnt;
        }
    }
    return iSum;
}

function main()
{
    let iValue = 12;
    let iRet = 0;

    iRet = SummationOfNonFactors(iValue);           //Function Call

    console.log(`Summation of Non factors = ${iRet}`);

}
main();