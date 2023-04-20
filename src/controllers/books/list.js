const list = (req, res) => {
  const { Book } = req;
  const books = Book.list();
  res.status(200).send(books);
};

module.exports = list;