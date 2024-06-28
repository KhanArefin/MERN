
function calculateSum(a,b)
{
    return a+b;
}

function isEven(a)
{
    if(a%2 == 0)
    return true;
    else
    return false;
}

function findMax(arr1) 
{
    let max = arr1[0];
    for(let i = 0; i < arr1.length; i++) 
    {
        if(arr1[i] > max) 
        {
            max = arr1[i];
        }
    }
    return max;
}

function reverseString(str)
{
    let newstr = "";
    for(let i=str.length - 1; i>=0; i-- )
    {
        newstr += str[i];
    }
    return newstr;
}

function filterOddNumbers(arr2)
{
    let newarr = "";
    for(let i=0; i<arr2.length; i++)
    {
        if(arr2[i] % 2 != 0)
        {
            newarr += arr2[i] + " ";
        }
    }
    return newarr;
}
function sumArray(arr3)
{
    let s = 0;
    for(let i=0; i<arr3.length; i++)
    {
        s += arr3[i];
    }
    return s;
}

function sortArray(arr4)
{
   return arr4.sort((a,b)=>a-b);
}

function capitalizeFirstLetter(str3)
{
    return str3.charAt(0).toUpperCase() + str3.slice(1);
}

let x = 10.5;
let y = 20;
let result = calculateSum(x,y);
document.write(result + "<br>");
let even = isEven(y);
document.write(even + "<br>");

let arr1 = [1,2,3]
let max = findMax(arr1)
document.write(max + "<br>");

let str = "Hello";
let reverse = reverseString(str);
document.write(reverse + "<br>");

let arr2 = [1,2,3,4,5,6]
let filter = filterOddNumbers(arr2)
document.write(filter + "<br>");

let arr3 = [1,2,3,4,5,6]
let sum = sumArray(arr3);
document.write(sum + "<br>");

let arr4 = [1,7,9,5,2,3]
let sorted = sortArray(arr4);
document.write(sorted + "<br>");

let str3 = "hello";
let capital = capitalizeFirstLetter(str3);
document.write(capital + "<br>");