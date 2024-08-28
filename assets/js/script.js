/*
CASO DER ERRO DE CORS COLOCAR O LINK ABAIXO ANTES DO LINK DO FECH TUDO JUNTO MESMO
https://cors-anywhere.herokuapp.com/
*/

document.getElementById('fetchButton').addEventListener('click', (event) => {
    event.preventDefault();
    fetch('https://api.exchangerate-api.com/v4/latest/USD')
        .then(response => response.json())
        .then(data => {
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = `
                <p><strong>Base:</strong> ${data.base}</p>
                <p><strong>Data:</strong> ${data.date}</p>
                <p><strong>Taxa de câmbio (USD para BRL):</strong> ${data.rates.BRL}</p>
                <p><strong>Taxa de câmbio (USD para ZAR):</strong> ${data.rates.ZAR}</p>
            `;
        })
        .catch(error => {
            console.error('Erro ao buscar os dados:', error);
        });
});
