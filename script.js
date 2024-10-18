let pronoun = ["the", "our", "my", "your", "their", "a", "some", "his", "her", "its"];
let adj = ["wild", "dangerous", "survivor", "brutal", "wasteland", "hostile", "desolate", "resourceful", "violent", "unforgiving"];
let noun = [
    "comet", "internet", "forgot", "studio", "egg", "survi", 
    "profes", "luck", "bon", "contin", "bru", "prof"
];
let extension = [".com", ".net", ".org", ".io", ".gg", ".tv", ".es", ".uk", ".us", ".eu", ".ru", ".it"];

function DomainGenerator(pronoun, adj, noun, extension) {
    const Domain = [];
    
    for (let p of pronoun) {
        for (let a of adj) {
            for (let n of noun) {
                for (let e of extension) {
                    
                    Domain.push(p + a + n + e);
                    
                    
                    let ext = e.slice(1); 
                    if (n.toLowerCase().endsWith(ext)) {
                        
                        let domainHack = p + a + n.slice(0, n.length - ext.length) + "." + ext;
                        Domain.push(domainHack);
                    }
                }
            }
        }
    }
    
    return Domain;
}

function generateDomains() {
    const DomainName = DomainGenerator(pronoun, adj, noun, extension);
    const resultDiv = document.getElementById('result');
    
    
    resultDiv.innerHTML = '';
    
    
    const limit = 50; 
    const limitedDomains = DomainName.slice(0, limit);
    
    limitedDomains.forEach(domain => {
        resultDiv.innerHTML += domain + '<br>';
    });
}
