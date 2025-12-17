function Check(iNo)
{
    if((iNo % 5) == 0)
    {
        return true;
    }
    else
    {
        return false;
    }     
}

function main()
{
    let iValue = 15;
    let bRet = false;

    iRet = Check(iValue);

    console.log(`${iValue} is divided by 5 = ${iRet}`);

}

main();