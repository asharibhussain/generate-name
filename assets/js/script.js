function generateBusinessName() {
    const adjectives = "Quick Bright Smart Dynamic Innovative";
    const nouns = "Solutions Technologies Enterprises Ideas Systems";
    const adjArray = adjectives.split(" ");
    const nounArray = nouns.split(" ");
    const randomAdjective = adjArray[Math.floor(Math.random() * adjArray.length)];
    const randomNoun = nounArray[Math.floor(Math.random() * nounArray.length)];
    document.getElementById("businessName").innerText = `${randomAdjective} ${randomNoun}`;
}