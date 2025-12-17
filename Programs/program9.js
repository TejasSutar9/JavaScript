function Display(iNo, frequency)
{
    let iCnt = 0;                                   //To store result
    //Write updater

    if(frequency < 0)                               //updater
    {
        frequency = -frequency;
    }
    for(iCnt = 1; iCnt <= frequency; iCnt++)
    {
        console.log(iNo);
    }
}

function main()
{
    let iValue = 12;
    let iCount = 5;

    Display(iValue, iCount);
}

main();