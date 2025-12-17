function MultiFact(iNo)
{
    let iCnt = 0;
    let iMulti = 1;

    console.log("Factors is : ");    
    for(iCnt = (iNo - 1); iCnt >= 1; iCnt--)
    {
        if((iNo % iCnt == 0))      
        {
            console.log(iCnt);
        }
    }
}

function main()
{
    let iValue = 12;

    MultiFact(iValue);           //Function Call

}
main();