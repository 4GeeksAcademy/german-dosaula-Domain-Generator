let pronoun = [
  "the",
  "our",
  "my",
  "your",
  "their",
  "a",
  "some",
  "his",
  "her",
  "its",
];
let adj = [
  "wild",
  "dangerous",
  "survivor",
  "brutal",
  "wasteland",
  "hostile",
  "desolate",
  "resourceful",
  "violent",
  "unforgiving",
];
let noun = [
  "base",
  "raid",
  "loot",
  "scrap",
  "survival",
  "rust",
  "bandit",
  "outpost",
  "campfire",
  "blueprint",
  "gunfight",
  "airdrop",
  "tool",
  "weapon",
  "clan",
];
let extension = [
  ".com",
  ".net",
  ".org",
  ".io",
  ".gg",
  ".tv",
  ".co",
  ".us",
  ".es",
  ".uk",
  ".eu",
  ".ru",
  ".au",
];

function DomainGenerator(pronoun, adj, noun, extension) {
  const Domain = [];

  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        for (let e of extension) {
          Domain.push(p + a + n + e);
          //DomainHack//
          let ext = e.slice(1);
          if (n.toLowerCase().endsWith(ext)) {
            let domainHack =
              p + a + n.slice(0, n.length - ext.length) + "." + ext;
            Domain.push(domainHack);
          }
        }
      }
    }
  }

  return Domain;
}

const DomainName = DomainGenerator(pronoun, adj, noun, extension);

console.log(DomainName);
