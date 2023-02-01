/*
  Warnings:

  - A unique constraint covering the columns `[episode]` on the table `Episode` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Episode_episode_key" ON "Episode"("episode");
