-- CreateTable
CREATE TABLE "Monster" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Monster_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Record" (
    "id" SERIAL NOT NULL,
    "monster_id" INTEGER NOT NULL,
    "weapon_category" TEXT NOT NULL,
    "weapon_name" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "skill" TEXT NOT NULL,
    "food" TEXT NOT NULL,
    "handle_name" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Record_pkey" PRIMARY KEY ("id")
);
