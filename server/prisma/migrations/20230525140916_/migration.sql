/*
  Warnings:

  - A unique constraint covering the columns `[authorID]` on the table `Document` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Document_authorID_key" ON "Document"("authorID");
