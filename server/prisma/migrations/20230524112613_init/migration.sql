-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Document" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "content" TEXT NOT NULL,
    "authorID" TEXT NOT NULL,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Document_name_key" ON "Document"("name");

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_authorID_fkey" FOREIGN KEY ("authorID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
