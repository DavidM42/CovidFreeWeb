const cleanseHeadlines = () => {
    const headlineCards = document.querySelectorAll('g-inner-card');

    for (let card of headlineCards){
        let searchHtml = card.firstChild.lastChild.firstChild.innerHTML;
        const lowerHtml = searchHtml.toLowerCase();

        // eslint-disable-next-line no-undef
        for (let word of filterWords) {
            const wordLow = word.toLowerCase();

            if (lowerHtml.includes(wordLow)) {
                // removeElement(card);
                // debugHighLight(card);
                // eslint-disable-next-line no-undef
                blurElement(card);
                break;
            }
        }
    }
};

const cleanseResults = () => {
    const results = document.getElementsByClassName('rc');

    for (let result of results){
        const headlineText = result.querySelector('h3:first-of-type').innerHTML.toLowerCase();
        const infoText = result.querySelector('span.st').innerHTML.toLowerCase();

        // eslint-disable-next-line no-undef
        for (let word of filterWords) {
            const wordLow = word.toLowerCase();

            if (headlineText.includes(wordLow) || infoText.includes(wordLow)) {
                // removeElement(wholeTweetToDelete);
                // debugHighLight(wholeTweetToDelete);
                // eslint-disable-next-line no-undef
                blurElement(result);
                break;
            }
        }
    }
};

const cleanse = () => {
    cleanseHeadlines();
    cleanseResults();
};


document.body.onscroll = cleanse;
document.body.onload = cleanse;