function findAccountById(accounts, id) {
  const found = accounts.find((account) => account.id === id)
  return found
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) =>
   accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1
  );
  return accounts;
 }

function getTotalNumberOfBorrows(account, books) {
  let sum = 0;
  for (let i = 0; i < books.length; i++){
    for (let p = 0; p < books[i].borrows.length; p++)
    if (account.id === books[i].borrows[p].id)
    sum ++
  }
  return sum
}

function getBooksPossessedByAccount(account, books, authors) {
  let result = [];
  const authors = books.authors
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
