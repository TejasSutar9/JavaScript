function DisplayConvert(CValue)
{
    if(CValue == 'a')
    {
        console.log("A");
    }
    else if(CValue == 'D')
    {
        console.log("d");
    }
}

function main()
{
    let cValue = 'D';

    DisplayConvert(cValue);
}

main();