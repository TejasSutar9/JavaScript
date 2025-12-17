function DisplayNonFact(iNo)
{
    let iCnt = 0;

    console.log("Non Factors is : ");    
    for(iCnt = 1; iCnt < iNo; iCnt++)
    {
        if((iNo % iCnt != 0))      
        {
            console.log(iCnt);
        }
    }
}

function main()
{
    let iValue = 12;

    DisplayNonFact(iValue);           //Function Call

}
main();