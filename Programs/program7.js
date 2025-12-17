function Display(iNo)
{
    
    let stars = "";

    if(iNo < 0)                     //updater
    {
        iNo = -iNo;
    }

    while (iNo > 0)
    {
        stars = stars + "* "; 
        iNo--;
    }
    console.log(stars.trim());  
}

function main()
{
    let iValue = -7;

    Display(iValue);
}

main();