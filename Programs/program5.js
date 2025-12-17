function Display(iNo)
{
    //This both method allowed using for loop. Depends on which is required
    // let iCnt = 0;
    // let stars = ' ';

    /*for(iCnt = 1; iCnt <= iNo; iCnt++)      
    {
        stars = stars + '* ';
    }
      console.log(stars.trim());   
      */

    console.log("* ".repeat(iNo).trim());         //trim -  trim() method removes whitespace from both the beginning and the end of a string. 
}

function main()
{
    let iValue = 5;

    Display(iValue);
}

main();