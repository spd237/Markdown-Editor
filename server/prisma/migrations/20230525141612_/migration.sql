/*
  Warnings:

  - A unique constraint covering the columns `[id,authorID]` on the table `Document` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Document_authorID_key";

-- CreateIndex
CREATE UNIQUE INDEX "Document_id_authorID_key" ON "Document"("id", "authorID");
