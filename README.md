# Book Inventory Management

This project is designed for the management of book stock. It offers comprehensive functionalities such as adding books, listing all books, fetching details of a specific book by its ID, updating book details, deleting a book, and finding books by their categories. This project is ideal for libraries, bookstores, and any institution looking to digitally manage their book inventory.
## Installation

```bash
npm install nestjs-book-management
cd /nestjs-book-management
```
    
## Lessons Learned

Developing this project helped me delve deep into Clean Architecture and the SOLID principles. I faced challenges with implementing the architecture patterns, but it made me understand the importance of decoupling and creating scalable code.

## Tech Stack

  - TypeScript
  - NestJS
  - Prisma
  - SQLite
  - Jest

## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## API Reference

**Add a Book**

```http
POST /books
```
Body Parameters: 
- title (string)
- description (string)
- category (string)
- bar_code (string)

**List all Books**

```http
GET /books
```

**Get Book by ID**

```http
GET /books/{bookId}
```

**Find Book by Category**

```http
POST /books/categories
```
Body Parameter:
- category (string)

**Update Book Details by ID**

```http
PATCH /books/{bookId}
```
Body Parameters:
- title (string)
- description (string)
- category (string)
- bar_code (string)

**Delete a Book by ID**

```http
DELETE /books/{bookId}
```

## Features

- CRUD operations for books.
- Ability to find books based on their categories.
- Clean architecture ensuring maintainability.
- Following SOLID principles for scalability and robustness.

## Contributing

Contributions are always welcome!

Please adhere to this project's `code of conduct`.


## License

[MIT](https://choosealicense.com/licenses/mit/)

