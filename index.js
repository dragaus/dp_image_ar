const loading = document.querySelector('#loading');
let numberOfNftsToLoad = 2;

window.addEventListener("arjs-nft-loaded", (event) => {
    numberOfNftsToLoad--;
    if(numberOfNftsToLoad <= 0){
        loading.style.display = 'none';
    }
});