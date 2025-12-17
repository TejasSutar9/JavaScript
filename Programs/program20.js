function FactDiff(iNo)
{
    let iCnt = 0;
    let iSumFact = 0, iNonSumFact = 0;

    for(iCnt = 1; iCnt < iNo; iCnt++)
    {
        if((iNo % iCnt == 0))      
        {
            iSumFact = iSumFact + iCnt;
        }
        else
        {
            iNonSumFact = iNonSumFact + iCnt;       //sum of non factorial
        }
    }
    return iSumFact - iNonSumFact;
}

function main()
{
    let iValue = 12;
    let iRet = 0;

    iRet = FactDiff(iValue);           //Function Call

    console.log(`Difference between Factors and Non-factors = ${iRet}`);

}
main();