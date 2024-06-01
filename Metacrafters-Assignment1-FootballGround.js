/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your createNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your displayNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getNFTCount() should return the number of NFT's you have created
*/

// Project by: akashlakhwan2329@gmail.com
// Metacrafters-JS-Assignment 1

// Create an array to hold the NFTs
let footballNFTCollection = [];

// This function will take parameters to define the NFT's metadata,
// create an NFT object, and add it to the footballNFTCollection array
function createNFT(playerName, teamName, position, goalsScored, assists) {
    const nft = {
        playerName,
        teamName,
        position,
        goalsScored,
        assists
    };
    
    footballNFTCollection.push(nft);
    console.log(`Created NFT for: ${playerName} from ${teamName}`);
}

// This function will iterate through the footballNFTCollection array
// and log the metadata of each NFT to the console
function displayNFTs() {
    console.log("\nAll Football Player NFTs in the Collection:\n");
    footballNFTCollection.forEach(nft => {
        console.log(`Player Name: ${nft.playerName}`);
        console.log(`Team Name: ${nft.teamName}`);
        console.log(`Position: ${nft.position}`);
        console.log(`Goals Scored: ${nft.goalsScored}`);
        console.log(`Assists: ${nft.assists}`);
        console.log("\n");
    });
}

// This function will return the total number of NFTs created
function getNFTCount() {
    return footballNFTCollection.length;
}

// Call the functions below to create NFTs, display them, and get the count

createNFT("Lionel Messi", "Paris Saint-Germain", "Forward", 672, 268);
createNFT("Cristiano Ronaldo", "Manchester United", "Forward", 674, 223);
createNFT("Neymar Jr", "Paris Saint-Germain", "Forward", 354, 177);
createNFT("Luka Modrić", "Real Madrid", "Midfielder", 68, 122);
createNFT("Virgil van Dijk", "Liverpool", "Defender", 25, 18);

displayNFTs();

const totalNFTs = getNFTCount();
console.log(`Total Number of NFTs: ${totalNFTs}`);

// End of Project by: akashlakhwan2329@gmail.com
// Metacrafters-JS-Assignment 1
