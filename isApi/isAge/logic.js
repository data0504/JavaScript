function getText()
{
    const input = document.getElementById("myInput");
    const text = input.value;
    return parseInt(text); 
}
function check(ageClient, ageServer, result)
{
    if (isNaN(ageClient) || isNaN(ageServer))
    {
        result.textContent = `結果: 參數為 ${ageClient}，請重新輸入有效的數字`;
        return false
    }

    let parseResult = ageClient === ageServer
    if(!parseResult)
    {
        if (ageClient > ageServer)
        {
            result.textContent = "結果: 再猜小點"
        }
        if (ageClient < ageServer)
        {
            result.textContent = "結果: 再猜大點"
        }
        return false
    }
    return true
}

function parseAge(ageClient, ageServer, result)
{
    result.textContent = "結果: 比較中"
    if (!check(ageClient, ageServer, result)) return;
    result.textContent = "結果: 答對了"
}

function callAgeAPI() {
    const ageUrl="https://api.agify.io/?name=danny"
    fetch(ageUrl)
    .then(response => response.json())
    .then(data => {
        const ageClient =getText()
                ,ageServer = parseInt(data.age)
                    ,result = document.getElementById("json")
        parseAge(ageClient, ageServer, result)
    })
    .catch(error => {
        console.error(error);
        console.log(error);
      });
}