/*
  Warnings:

  - You are about to drop the column `taskId` on the `Tag` table. All the data in the column will be lost.
  - Added the required column `tagId` to the `Tag` table without a default value. This is not possible if the table is not empty.
  - Made the column `taskId` on table `Task` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Tag" DROP CONSTRAINT "Tag_taskId_fkey";

-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_taskId_fkey";

-- AlterTable
ALTER TABLE "Tag" DROP COLUMN "taskId",
ADD COLUMN     "tagId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Task" ALTER COLUMN "taskId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
