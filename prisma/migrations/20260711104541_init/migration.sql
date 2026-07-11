/*
  Warnings:

  - You are about to drop the column `category` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `followers` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `fullName` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `instagram` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `youtube` on the `Application` table. All the data in the column will be lost.
  - Added the required column `acceptedTerms` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contentNiche` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `creatorHandle` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `followersRange` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `interestedIn` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mediaConsent` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `newsletter` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `primaryPlatforms` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `primaryProfileLink` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Made the column `about` on table `Application` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Application" DROP COLUMN "category",
DROP COLUMN "followers",
DROP COLUMN "fullName",
DROP COLUMN "instagram",
DROP COLUMN "youtube",
ADD COLUMN     "acceptedTerms" BOOLEAN NOT NULL,
ADD COLUMN     "averageViews" TEXT,
ADD COLUMN     "city" TEXT,
ADD COLUMN     "contentNiche" TEXT NOT NULL,
ADD COLUMN     "country" TEXT NOT NULL,
ADD COLUMN     "creatorHandle" TEXT NOT NULL,
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "followersRange" TEXT NOT NULL,
ADD COLUMN     "heardFrom" TEXT,
ADD COLUMN     "interestedIn" JSONB NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL,
ADD COLUMN     "mediaConsent" BOOLEAN NOT NULL,
ADD COLUMN     "newsletter" BOOLEAN NOT NULL,
ADD COLUMN     "otherSocialLinks" TEXT,
ADD COLUMN     "previousExperience" TEXT,
ADD COLUMN     "primaryPlatforms" JSONB NOT NULL,
ADD COLUMN     "primaryProfileLink" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "phone" DROP NOT NULL,
ALTER COLUMN "about" SET NOT NULL;
