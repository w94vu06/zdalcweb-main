-- CreateTable
CREATE TABLE "Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "summary" TEXT,
    "keypoints" TEXT,
    "description" TEXT,
    "content" TEXT,
    "categories" TEXT,
    "picture" TEXT,
    "author" TEXT,
    "youtubeLink" TEXT,
    "SDGsNum" TEXT,
    "SDGsDes" TEXT,
    "ZhongDaoNum" TEXT,
    "ZhongDaoDes" TEXT,
    "date" DATETIME DEFAULT CURRENT_TIMESTAMP
);
