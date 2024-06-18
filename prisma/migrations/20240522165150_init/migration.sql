/*
  Warnings:

  - You are about to drop the `Role` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Users_Roles` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Users_Roles" DROP CONSTRAINT "Users_Roles_roleId_fkey";

-- DropForeignKey
ALTER TABLE "Users_Roles" DROP CONSTRAINT "Users_Roles_userId_fkey";

-- DropTable
DROP TABLE "Role";

-- DropTable
DROP TABLE "Users_Roles";

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
