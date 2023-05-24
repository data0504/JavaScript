var limitBig = 100, limitSmall = 1

function getText()
{
    const input = document.getElementById("myInput");
    const text = input.value;
    return parseInt(text);
}
function saveInterval(ageClient, ageServer)
{
    if(ageClient < ageServer)
    {
        limitSmall = ageClient
    }
    if(ageClient > ageServer)
    {
        limitBig = ageClient
    }
}
function checkoutText(ageClient, ageServer, result)
{
    if (isNaN(ageClient) || isNaN(ageServer))
    {
        result.textContent = `結果: 參數為 ${ageClient}，請重新輸入有效的數字`;
        return false
    }
    if (ageClient<limitSmall || ageClient>limitBig)
    {
        result.textContent = `結果: 請輸入 ${limitSmall} ~ ${limitBig} 數字, 謝謝。`;
        return false
    }
    return true
}
function checkoutReslut(ageClient, ageServer, result)
{
    let parseResult = ageClient === ageServer
    if(!parseResult)
    {
        if(ageClient < ageServer && ageServer< limitBig)
        {
            saveInterval(ageClient, ageServer)
            result.textContent = `結果: ${limitSmall} ~ ${limitBig}`
        }

        if(ageClient > ageServer && ageServer < limitBig)
        {
            saveInterval(ageClient, ageServer)
            result.textContent = `結果: ${limitSmall} ~ ${limitBig}`
        }
        return false
    }
    return true
}

function check(ageClient, ageServer, result)
{
    if (!checkoutText(ageClient, ageServer, result)) return false;
    if (!checkoutReslut(ageClient, ageServer, result)) return false;
    return true
}
async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function parseAge(ageClient, ageServer, result)
{
    result.textContent = "結果: 比較中"

    await delay(500);
    if (!check(ageClient, ageServer, result))return;

    result.textContent = "結果: 答對了";
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