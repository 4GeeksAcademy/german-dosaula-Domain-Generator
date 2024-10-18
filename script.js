function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateDomains() {
    const DomainName = [];
    const numberOfDomains = 15;

    for (let i = 0; i < numberOfDomains; i++) {
        const p = getRandomElement(pronoun);
        const a = getRandomElement(adj);
        const n = getRandomElement(noun);
        const e = getRandomElement(extension);
        
        DomainName.push(p + a + n + e);
        
        const ext = e.slice(1);
        if (n.toLowerCase().endsWith(ext)) {
            const domainHack = p + a + n.slice(0, n.length - ext.length) + "." + ext;
            DomainName.push(domainHack);
        }
    }

    const resultDiv = document.getElementById('result');
    
    resultDiv.innerHTML = '';

    DomainName.forEach(domain => {
        resultDiv.innerHTML += domain + '<br>';
    });
}
