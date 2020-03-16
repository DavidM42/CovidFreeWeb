// only works for video tweets
// eslint-disable-next-line no-unused-vars
const cleanseTweetsMobile = () => {
    const tweetBodies = document.querySelectorAll('.css-901oao.r-hkyrab.r-1qd0xha.r-1b43r93.r-16dba41.r-ad9z0x.r-bcqeeo.r-bnwqim.r-qvutc0');

    for (let textElem of tweetBodies){
        const toSearchHtml = textElem.innerHTML;
        const wholeTweetToDelete = textElem.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
        // const wholeTweetToDelete = textElem.parentElement;
    
        // eslint-disable-next-line no-undef
        for (let word of filterWords) {
            const lowerHtml = toSearchHtml.toLowerCase();
            const wordLow = word.toLowerCase();

            if (lowerHtml.includes(wordLow)) {
                // removeElement(wholeTweetToDelete);
                // debugHighLight(wholeTweetToDelete);
                // eslint-disable-next-line no-undef
                blurElement(wholeTweetToDelete);
                break;
            }
        }
    }
};