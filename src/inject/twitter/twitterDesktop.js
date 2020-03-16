// only works for video tweets
// const tweetText = document.querySelectorAll('#tweet-text');

// eslint-disable-next-line no-unused-vars
const cleanseTweets = () => {
    const tweetTimesAs = document.body.querySelectorAll('[href*="/status/"]');

    for (let tweet of tweetTimesAs){
        let relevantParent = tweet.parentElement.parentElement.parentElement.parentElement.parentElement;
        const lastChild = relevantParent.lastChild;

        let elementContainingAllText;
        if (lastChild.children.length == 4) {
            // replies cause got one div extra at top with who addressed
            elementContainingAllText = lastChild.children[1];
        } else {
            // tweet on timeline
            elementContainingAllText = lastChild.firstChild;
        }

        const toSearchHtml = elementContainingAllText.innerHTML;
        const wholeTweetToDelete = relevantParent.parentElement.parentElement.parentElement.parentElement;
    
        // eslint-disable-next-line no-undef
        for (let word of filterWords) {
            const lowerHtml = toSearchHtml.toLowerCase();
            const wordLow = word.toLowerCase();

            const isFullList = wholeTweetToDelete.querySelectorAll('h1#accessible-list-1').length > 0;
            if (lowerHtml.includes(wordLow) && !isFullList) {
                // removeElement(wholeTweetToDelete);
                // debugHighLight(wholeTweetToDelete);
                // eslint-disable-next-line no-undef
                blurElement(wholeTweetToDelete);
                break;
            }
        }
    }
};