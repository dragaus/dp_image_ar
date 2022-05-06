const loading = document.querySelector('#loading');

let numberOfNftsToLoad = 2;

const audio = new Audio('test.mp3');
// console.log(audio);
// audio.play();

window.addEventListener("arjs-nft-loaded", (event) => {
    numberOfNftsToLoad--;
    if(numberOfNftsToLoad <= 0){
        loading.style.display = 'none';
    }
});

window.addEventListener('markerFound', (event) => {
    audio.play();
});