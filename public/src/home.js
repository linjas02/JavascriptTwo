function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let total = 0;
  books.forEach((book) => {
    if (!book.borrows[0].returned) {
      total++;
    }
  });
  return total;
}

function sortTopFive(books) {
  books.sort((a,b) => b.count - a.count)
  books.splice(5)
  return books
}

function getMostCommonGenres(books) {
  let mostCommonGenres = [];
  books.forEach((book) => {
    const genreHasBeenReduced = mostCommonGenres.some((genre) => genre.name === book.genre)
     if(!genreHasBeenReduced) {
       const totalOfGenre = books.reduce((acc, currentBook) => {
         return (currentBook.genre === book.genre) ? acc + 1 : acc
       }, 0 )
       mostCommonGenres.push({
         name: book.genre,
         count: totalOfGenre
       })
     }
  })
  return sortTopFive(mostCommonGenres)
}

function getMostPopularBooks(books) {
  let mostPopularBooks = books.map((book) => (
    {
      name: book.title,
      count: book.borrows.length
    }
  ))
  return sortTopFive(mostPopularBooks)
}

function getMostPopularAuthors(books, authors) {
  const popularAuthors = [];

  for (let author of authors) {
    const authorName = `${author.name.first} ${author.name.last}`;
    let count = 0;
    for (let book of books) {
      if (author.id === book.authorId) {
        count += book.borrows.length;
      }
    }
    const authorObject = { name: authorName, count: count };
    popularAuthors.push(authorObject);
  }

  return sortTopFive(popularAuthors);
}




module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
