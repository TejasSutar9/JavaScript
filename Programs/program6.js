function Display(iNo)
{
    let iCnt = 0;
    let stars = "";

    if(iNo < 0)                     //updater
    {
        iNo = -iNo;
    }

    while (iCnt < iNo)
    {
        stars = stars + "* "; 
        iCnt++;
    }
    console.log(stars.trim());  
}

function main()
{
    let iValue = -7;

    Display(iValue);
}

main();