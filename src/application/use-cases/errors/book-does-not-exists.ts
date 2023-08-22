export class BookDoesNotExist extends Error {
  constructor() {
    super('Book does not exist');
  }
}
