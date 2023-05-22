function makeTimesTables(numbers)
{
    let str = ""
    numbers.filter((number)=>
    {
        for(let i = 1; i < numbers.length + 1 ; i++ )
        {
            str += (`${i} x ${number} = ${number*i}\t\t`)
        }
        str += "\n"
    });
    return str
}
function print(str)
{
    console.log(str)
}

function timesTables(numbers)
{
    print(makeTimesTables(numbers))
}

const numbers = [1,2,3,4,5,6,7,8,9]
timesTables(numbers)