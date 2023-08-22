import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { BookRepository } from 'src/app/repositories/book-repository';
import { PrismaBookRepository } from './prisma/repositories/prisma-book-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: BookRepository,
      useClass: PrismaBookRepository,
    },
  ],
  exports: [BookRepository],
})
export class DatabaseModule {}
