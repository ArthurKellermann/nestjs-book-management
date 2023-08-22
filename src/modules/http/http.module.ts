import { Module } from '@nestjs/common';
import { CreateBook } from 'src/app/use-cases/create-book';
import { BookController } from './controllers/book.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [BookController],
  providers: [CreateBook],
})
export class HttpModule {}
