function CheckNumberType(iNo)
{
    if(iNo > 0)
    {
        console.log("Positive Number");
    }
    else if(iNo == 0)
    {
        console.log("Zero");
    }
    else
    {
        console.log("Negative Number");
    }
}

function main()
{
    let iValue = 11;

    CheckNumberType(iValue);
}

main();