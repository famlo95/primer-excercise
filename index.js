let favoriteTitles = [];

function addFavoriteBook (bookTitle) {
    const notValidWord = 'Great';
    if (!bookTitle.includes(notValidWord)) {
        favoriteTitles.push(bookTitle);
    } else {
        return;
    }
}

function printFavoriteBooks () {
    console.log(`My favorite books are:`);
    for (const title of favoriteTitles) {
        console.log(`-> ${title}`);
    }
}

addFavoriteBook('The 48 Laws of Power');
addFavoriteBook('1984');
addFavoriteBook('Leonardo Da Vinci');
addFavoriteBook('Steve Jobs');
addFavoriteBook('Einstein: His Life and His Universe');
addFavoriteBook('Meditations by Marcus Aurelius');
addFavoriteBook('Great Expectations');
addFavoriteBook('The Great Gatsby');

printFavoriteBooks();