import { Book } from 'src/application/entities/book';
import { BookRepository } from 'src/application/repositories/book-repository';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { BookAlreadyExists } from 'src/application/use-cases/errors/book-already-exists';
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

  async findMany(): Promise<Book[]> {
    const books = await this.prisma.book.findMany();
    return books.map(PrismaBookMapper.toDomain);
  }

  async findById(bookId: string): Promise<Book> {
    const book = await this.prisma.book.findUnique({
      where: {
        id: bookId,
      },
    });

    if (!book) {
      return null;
    }
    return PrismaBookMapper.toDomain(book);
  }
}
