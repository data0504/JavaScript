function parsePrimes(number)
{
    if (number <= 1)  return false; 
    for  (let i = 2 ; i <number; i++)
    {
        if (number % i ===0 ) return false; 
    }
    return true
}

function mapNumbers(value, numbers)
{
    return numbers.filter((number) =>{
        if(value)
        {
        return parsePrimes(number) ? true : false;
        }
        return parsePrimes(number) ? false : true;
    });
}

function print(value, isPrimes)
{
    value ? isPrimes.push("是質數") : isPrimes.push("不是質數");
    return isPrimes
}

function prime(value ,numbers)
{
    return print(value, mapNumbers(value, numbers))
}

const numbers = [1,2,3,4,5,6,7,8,9,10]
console.log(prime(1, numbers));
