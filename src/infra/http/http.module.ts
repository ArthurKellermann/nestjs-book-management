import { Module } from '@nestjs/common';
import { CreateBook } from 'src/application/use-cases/create-book';
import { BookController } from './controllers/book.controller';
import { DatabaseModule } from '../database/database.module';
import { ListBooks } from 'src/application/use-cases/list-books';
import { GetBookById } from 'src/application/use-cases/get-book-by-id';
import { UpdateBookById } from 'src/application/use-cases/update-book-by-id';

@Module({
  imports: [DatabaseModule],
  controllers: [BookController],
  providers: [CreateBook, ListBooks, GetBookById, UpdateBookById],
})
export class HttpModule {}
