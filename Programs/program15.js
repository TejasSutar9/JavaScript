function CheckVowel(CValue)
{
    if(CValue == 'a' || CValue == 'e' || CValue == 'i' || CValue == 'o' || CValue == 'u' ||
        CValue == 'A' || CValue == 'E' || CValue == 'I' || CValue == 'O'|| CValue == 'U')
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
    let cValue = 'I';
    let bRet = false;

    bRet = CheckVowel(cValue);
    if(bRet == true)
    {
        console.log(`${cValue} is a Vowel`);
    }
    else
    {
        console.log(`${cValue} is not a Vowel`);
    }
}

main();