const create = (req, res) => {
  // extracting data from the request object
  const { Book, body } = req;
  // const Book = req.Book;
  // const body = req.body;
  // const title = body.title;
  const newBook = new Book(body); // adding data to the model
  res.status(201).send(newBook); // sending data back
}

module.exports = create;