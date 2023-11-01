function findAccountById(accounts, id) {
  const result = accounts.find((account) => account.id === id)
  return result
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) => 
    accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1
  )
  return accounts
}

function getTotalNumberOfBorrows(account, books) {
  let sum = 0;
  for (let i = 0; i <books.length; i++){
    for (let p = 0; p < books[i].borrows.length; p++){
      if (books[i].borrows[p].id === account.id){
        sum++
      }
    }
  }
  return sum
}

function getBooksPossessedByAccount(account, books, authors) {
  const result = [];
  books.map((book) => {
    book.borrows.map((borrow) => {
      authors.map((author) => {
        if (author.id === book.authorId) book["author"] = author;
      });
      if (borrow.returned === false && borrow.id === account.id) {
        result.push(book);
      }
    });
  });
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
