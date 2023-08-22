import { Module } from '@nestjs/common';
import { CreateBook } from 'src/application/use-cases/create-book';
import { BookController } from './controllers/book.controller';
import { DatabaseModule } from '../database/database.module';
import { ListBooks } from 'src/application/use-cases/list-books';

@Module({
  imports: [DatabaseModule],
  controllers: [BookController],
  providers: [CreateBook, ListBooks],
})
export class HttpModule {}
