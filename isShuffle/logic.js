const cardsList = [];
function createCards()
{
    for (let i = 0; i < cardsList.length; i++)
    {
        const cardContainer = document.getElementById("cardContainer");
        const cardElement = document.createElement("span");
        cardElement.textContent = `${cardsList[i]},`;
        cardContainer.appendChild(cardElement);
    }
}

function createOffList()
{
    for (let i = 1; i < 53; i++)
    {
        cardsList.push(0);
    }
}
function createOnList()
{
    for (let i = 1; i < 53; i++)
    {
        cardsList.push(i);
    }
}
function random()
{
    cardsList.sort(function()
    {
        return (0.5-Math.random());
    });
}
function init()
{
    cardContainer.innerHTML = ""
    cardsList.length = 0;
}

function randomCards()
{
    init()
    createOnList()
    random()
    createCards()
}