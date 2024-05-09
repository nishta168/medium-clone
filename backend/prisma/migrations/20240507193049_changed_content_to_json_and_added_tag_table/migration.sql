/*
  Warnings:

  - You are about to drop the column `tag` on the `Blog` table. All the data in the column will be lost.
  - Added the required column `description` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `content` on the `Blog` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Blog" DROP COLUMN "tag",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "tagId" TEXT,
DROP COLUMN "content",
ADD COLUMN     "content" JSONB NOT NULL;

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Blog" ADD CONSTRAINT "Blog_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE SET NULL ON UPDATE CASCADE;
