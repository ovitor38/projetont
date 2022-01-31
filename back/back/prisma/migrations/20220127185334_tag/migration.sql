-- DropForeignKey
ALTER TABLE "Tag" DROP CONSTRAINT "Tag_name_fkey";

-- AlterTable
ALTER TABLE "Tag" ADD COLUMN     "taskId" TEXT;

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE SET NULL ON UPDATE CASCADE;
