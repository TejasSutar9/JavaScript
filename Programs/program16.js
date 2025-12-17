function MultiFact(iNo)
{
    let iCnt = 0;
    let iMulti = 1;

    console.log("Factors is : ");    
    for(iCnt = 1; iCnt < iNo; iCnt++)
    {
        if((iNo % iCnt == 0))      
        {
            console.log(iCnt);
            iMulti = iMulti * iCnt;
        }
    }
    return iMulti
}

function main()
{
    let iValue = 12;
    let iRet = 0;

    iRet = MultiFact(iValue);           //Function Call

    console.log(`Multiplication of factors is : ${iRet}`);

}
main();