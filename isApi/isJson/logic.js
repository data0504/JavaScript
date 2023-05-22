const jsonUrl="https://www.boredapi.com/api/activity"

function callJsonAPI() {
  fetch(jsonUrl)
    .then(response => response.json())
    .then(data => {
      const activity = document.getElementById("json")
      activity.textContent = `行為: ${data.activity}`
    })
    .catch(error => console.error(error));
}