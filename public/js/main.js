const dotenv = require('dotenv');
dotenv.config();

const form = document.querySelector('form');
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const response = await fetch(process.env.HOSTNAME, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            prompt: data.get('prompt')
        }),
    })

    if (response.ok) {
        const { image } = await response.json();

        const result = document.getElementById('result');
        result.innerHTML = `<img src="${image}" />`;
    }
    else {
        const err = await response.text();
        alert(err);
        console.error(err);
    }

});