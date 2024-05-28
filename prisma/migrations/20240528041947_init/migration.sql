-- CreateTable
CREATE TABLE "Role" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "full_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role_id" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "User_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "Role" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Option" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "sort" INTEGER NOT NULL DEFAULT 1
);

-- CreateTable
CREATE TABLE "OptionValue" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "option_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "sort" INTEGER NOT NULL DEFAULT 1,
    CONSTRAINT "OptionValue_option_id_fkey" FOREIGN KEY ("option_id") REFERENCES "Option" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "code" TEXT,
    "regular_price" DECIMAL NOT NULL,
    "sale_price" DECIMAL NOT NULL,
    "photo" TEXT,
    "desc" TEXT,
    "content" TEXT,
    "display" BOOLEAN NOT NULL DEFAULT true
);

-- CreateTable
CREATE TABLE "Variant" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "product_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "regular_price" DECIMAL NOT NULL,
    "sale_price" DECIMAL NOT NULL,
    "photo" TEXT NOT NULL,
    "sort" INTEGER NOT NULL,
    CONSTRAINT "Variant_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "VariantOptionValue" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "option_value_id" INTEGER NOT NULL,
    "variant_id" INTEGER NOT NULL,
    CONSTRAINT "VariantOptionValue_option_value_id_fkey" FOREIGN KEY ("option_value_id") REFERENCES "OptionValue" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "VariantOptionValue_variant_id_fkey" FOREIGN KEY ("variant_id") REFERENCES "Variant" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_slug_key" ON "Product"("slug");
