let pronoun = ["the", "our", "my", "your", "their", "a", "some", "his", "her", "its"];
let adj = ["wild", "dangerous", "brutal", "hostile", "desolate", "violent", "unforgiving"];
let noun = [
    "Grub", "Naked", "Hazzy", "Boom", "Doomed", "Oil", 
    "FullHQ", "Scrappy", "Sulfur", "AK47", "Bandit", "Outpost"
];
let extension = [".com", ".net", ".org", ".io", ".gg", ".tv", ".es", ".uk", ".us", ".eu", ".ru", ".it"];

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


document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('generateButton').addEventListener('click', generateDomains);
});
