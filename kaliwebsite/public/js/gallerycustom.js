const screenHeight = window.innerHeight;
console.log(screenHeight);
const screenWidth = window.innerWidth;
console.log(screenWidth);

/* item input variables */
const navBlockHeightPercentage = (1/6);
const titleBlockHeightPercentage = (1/6);
const spaceBlockHeightPercentage = (1/12);
const endSpaceWidthPercentage = (1/12);
const itemSpaceWidthPercentage = (1/24);
const numColumns = 3;

/* nav variables */
const navItemCount = 4;
const navSpaceSize = (screenWidth / 24);
const x = screenWidth;
const y = screenHeight;
const n = navItemCount;
const s = navSpaceSize;

function calculateSizes() {
    calculateNavSizes();
    calculateItemSizes();
}
function calculateNavSizes() {
    const navBlockSizeHeight = (1/6)*y;
    const navBlockSizeWidth = x;

        const logoSizeHeight = (1/6)*y;
        const logoSizeWidth = (1/6)*x;

        const navBarSizeHeight = (1/6)*y;
        const navBarSizeWidth = (5/6)*x;

            const navSpaceSizeHeight = (1/6)*y;
            const navSpaceSizeWidth = s;

            const navItemSizeHeight = (1/6)*y;
            const navItemSizeWidth = ((((5/6)*x)-(s*(n+1)))/n);

    //update CSS variables
    //update nav-block
    document.documentElement.style.setProperty('--nav-block-size-height', `${navBlockSizeHeight}px`);
    document.documentElement.style.setProperty('--nav-block-size-width', `${navBlockSizeWidth}px`);
        //update logo
        document.documentElement.style.setProperty('--logo-size-height', `${logoSizeHeight}px`);
        document.documentElement.style.setProperty('--logo-size-width', `${logoSizeWidth}px`);
        //update nav-bar
        document.documentElement.style.setProperty('--nav-bar-size-height', `${navBarSizeHeight}px`);
        document.documentElement.style.setProperty('--nav-bar-size-width', `${navBarSizeWidth}px`);
            //update nav-space
            document.documentElement.style.setProperty('--nav-space-size-height', `${navSpaceSizeHeight}px`);
            document.documentElement.style.setProperty('--nav-space-size-width', `${navSpaceSizeWidth}px`);
            //update nav-item
            document.documentElement.style.setProperty('--nav-item-size-height', `${navItemSizeHeight}px`);
            document.documentElement.style.setProperty('--nav-item-size-width', `${navItemSizeWidth}px`);
}

function calculateItemSizes() {
    const endSpaceWidth = endSpaceWidthPercentage * screenWidth;
    const itemSpaceWidth = itemSpaceWidthPercentage * screenWidth;

    const itemWidth = (((screenWidth-(2*endSpaceWidth))-((numColumns+1)*itemSpaceWidth))/numColumns);

    const itemHeight = itemWidth;
    const endSpaceHeight = itemWidth;
    const itemSpaceHeight = itemWidth;

    const navBlockHeight = navBlockHeightPercentage * screenHeight;
    const navBlockWidth = screenWidth;

    const titleBlockHeight = titleBlockHeightPercentage * screenHeight;
    const titleBlockWidth = screenWidth;

    const spaceBlockHeight = spaceBlockHeightPercentage * screenHeight;
    const spaceBlockWidth = screenWidth;

    const itemsBlockHeight = itemWidth;
    const itemsBlockWidth = screenWidth;

    //update block css variables

    //update nav-block
    document.documentElement.style.setProperty('--nav-block-height', `${navBlockHeight}px`);
    document.documentElement.style.setProperty('--nav-block-width', `${navBlockWidth}px`);
    //update title-block
    document.documentElement.style.setProperty('--title-block-height', `${titleBlockHeight}px`);
    document.documentElement.style.setProperty('--title-block-width', `${titleBlockWidth}px`);
    //update space-block
    document.documentElement.style.setProperty('--space-block-height', `${spaceBlockHeight}px`);
    document.documentElement.style.setProperty('--space-block-width', `${spaceBlockWidth}px`);
    //update items-block
    document.documentElement.style.setProperty('--items-block-height', `${itemsBlockHeight}px`);
    document.documentElement.style.setProperty('--items-block-width', `${itemsBlockWidth}px`);

    //update items css variables
    //update end-space
    document.documentElement.style.setProperty('--end-space-height', `${endSpaceHeight}px`);
    document.documentElement.style.setProperty('--end-space-width', `${endSpaceWidth}px`);
    //update item-space
    document.documentElement.style.setProperty('--item-space-height', `${itemSpaceHeight}px`);
    document.documentElement.style.setProperty('--item-space-width', `${itemSpaceWidth}px`);
    //update item
    document.documentElement.style.setProperty('--item-height', `${itemHeight}px`);
    document.documentElement.style.setProperty('--item-width', `${itemWidth}px`);
}

// Calculate sizes on initial load and on window resize
calculateSizes();
window.addEventListener('resize', calculateSizes);