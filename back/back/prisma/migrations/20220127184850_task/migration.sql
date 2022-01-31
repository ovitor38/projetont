-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_title_fkey";

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "taskId" TEXT;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
