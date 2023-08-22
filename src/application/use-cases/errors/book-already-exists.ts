export class BookAlreadyExists extends Error {
  constructor() {
    super('Book already exists');
  }
}
