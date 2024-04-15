/* SQL and ER maded on diagram.io */

CREATE TABLE IF NOT EXISTS "users" (
  "id" bigserial PRIMARY KEY,
  "username" varchar UNIQUE NOT NULL,
  "email" varchar(200) UNIQUE NOT NULL,
  "phone" varchar(16),
  "password" varchar(50) NOT NULL,
  "affiliated" bool DEFAULT false,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp
);

CREATE TABLE IF NOT EXISTS "user_balance" (
  "user_id" bigint,
  "balance" decimal,
  "total_bets" decimal,
  "updated_at" timestamp
);

CREATE TABLE IF NOT EXISTS "user_info" (
  "user_id" bigint,
  "birthdate" date,
  "cpf" varchar,
  "country" varchar,
  "uf" varchar,
  "cep" varchar,
  "address" varchar,
  "updated_at" timestamp
);

CREATE TABLE IF NOT EXISTS "user_affiliate" (
  "sponsor_id" bigint,
  "associate_id" bigint,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE IF NOT EXISTS "games" (
  "id" integer PRIMARY KEY,
  "title" varchar,
  "description" varchar(1000),
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp
);

CREATE TABLE IF NOT EXISTS "bets" (
  "user_id" bigint,
  "game_id" bigint,
  "amount" decimal,
  "user_lost" bool,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE IF NOT EXISTS "transactions" (
  "id" bigserial PRIMARY KEY,
  "user_id" bigint,
  "transaction_type" varchar NOT NULL,
  "amount" decimal NOT NULL,
  "transaction_date" timestamp DEFAULT (now())
);

CREATE TABLE IF NOT EXISTS "promotions" (
  "id" bigserial NOT NULL UNIQUE,
  "bonus" decimal NOT NULL,
  "quantity" int NOT NULL,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE IF NOT EXISTS "promotions_claimed" (
  "id_user" bigint,
  "id_promotion" bigint,
  "created_at" timestamp DEFAULT (now())
);

CREATE INDEX ON "user_balance" ("user_id");

CREATE INDEX ON "user_info" ("user_id");

CREATE INDEX ON "transactions" ("user_id");

ALTER TABLE "user_balance" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "user_info" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "user_affiliate" ADD FOREIGN KEY ("sponsor_id") REFERENCES "users" ("id");

ALTER TABLE "user_affiliate" ADD FOREIGN KEY ("associate_id") REFERENCES "users" ("id");

ALTER TABLE "bets" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "bets" ADD FOREIGN KEY ("game_id") REFERENCES "games" ("id");

ALTER TABLE "transactions" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "promotions_claimed" ADD FOREIGN KEY ("id_user") REFERENCES "users" ("id");

ALTER TABLE "promotions_claimed" ADD FOREIGN KEY ("id_promotion") REFERENCES "promotions" ("id");
