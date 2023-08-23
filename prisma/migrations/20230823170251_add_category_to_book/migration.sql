/*
  Warnings:

  - Added the required column `category` to the `books` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_books" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "bar_code" TEXT NOT NULL
);
INSERT INTO "new_books" ("bar_code", "description", "id", "title") SELECT "bar_code", "description", "id", "title" FROM "books";
DROP TABLE "books";
ALTER TABLE "new_books" RENAME TO "books";
CREATE UNIQUE INDEX "books_bar_code_key" ON "books"("bar_code");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
