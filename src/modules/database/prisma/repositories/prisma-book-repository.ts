import { Book } from 'src/app/entities/book';
import { BookRepository } from 'src/app/repositories/book-repository';
import { PrismaService } from 'src/modules/database/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { BookAlreadyExists } from 'src/app/use-cases/errors/book-already-exists';
import { PrismaBookMapper } from '../mappers/prisma-book-mapper';

@Injectable()
export class PrismaBookRepository implements BookRepository {
  constructor(private prisma: PrismaService) {}

  async create(book: Book): Promise<void> {
    const bookExists = await this.prisma.book.findFirst({
      where: {
        bar_code: book.bar_code,
      },
    });

    if (bookExists) {
      throw new BookAlreadyExists();
    }

    const raw = PrismaBookMapper.toPrisma(book);

    await this.prisma.book.create({
      data: raw,
    });
  }
}
