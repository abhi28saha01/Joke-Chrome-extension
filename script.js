async function fetchJokes() {
    return await fetch("https://icanhazdadjoke.com/slack")
        .then((res) => res.json())
        .then(data => {
            console.log(data)
            document.getElementById('title').innerHTML = data.attachments[0].text
        })
}

fetchJokes()