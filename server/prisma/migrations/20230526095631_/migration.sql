-- AlterTable
ALTER TABLE "Document" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "name" SET DEFAULT 'untitled-document.md';
