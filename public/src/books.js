function findAuthorById(authors, id) {
  let result = authors.find((author) => author.id === id)
  return result
}

function findBookById(books, id) {
  let result = books.find((author) => author.id === id)
  return result
}

function partitionBooksByBorrowedStatus(books) {
  let result = []
  const returned = books.filter((book) => book.borrows[0].returned )
  const borrowed = books.filter((book) => !book.borrows[0].returned)
  result.push(borrowed, returned)
  return result
}

function getBorrowersForBook(book, accounts) {
 return book.borrows.map((borrow) => {
   const account = accounts.find((account) => account.id === borrow.id);
   return { ...borrow, ...account };
  })
  .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
