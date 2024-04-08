/* SQL and ER maded on diagram.io */

CREATE TABLE "users" (
  "id" bigserial PRIMARY KEY,
  "username" varchar UNIQUE NOT NULL,
  "email" varchar UNIQUE NOT NULL,
  "phone" varchar,
  "password" varchar NOT NULL,
  "affiliated" bool DEFAULT false,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp
);

CREATE TABLE "user_balance" (
  "user_id" bigint,
  "balance" decimal,
  "total_bets" decimal,
  "updated_at" timestamp
);

CREATE TABLE "user_info" (
  "user_id" bigint,
  "birtdate" date,
  "cpf" varchar,
  "country" varchar,
  "uf" varchar,
  "cep" varchar,
  "address" varcar,
  "updated_at" timestamp
);

CREATE TABLE "user_affiliate" (
  "sponsor_id" bigint,
  "associate_id" bigint,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "games" (
  "id" integer PRIMARY KEY,
  "title" varchar,
  "description" varchar(1000),
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp
);

CREATE TABLE "bets" (
  "user_id" bigint,
  "game_id" bigint,
  "amount" decimal,
  "user_lost" bool,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "transactions" (
  "id" bigserial PRIMARY KEY,
  "user_id" bigint,
  "transaction_type" varchar NOT NULL,
  "amount" decimal NOT NULL,
  "transaction_date" timestamp DEFAULT (now())
);

CREATE TABLE "promotions" (
  "id" varchar NOT NULL,
  "bonus" decimal NOT NULL,
  "quantity" int NOT NULL,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "promotions_claimed" (
  "id_user" bigint,
  "id_promotion" bigint,
  "created_at" timestamp DEFAULT (now())
);

CREATE INDEX ON "users" ("email");

CREATE INDEX ON "users" ("username");

CREATE INDEX ON "user_balance" ("user_id");

CREATE INDEX ON "user_info" ("user_id");

CREATE INDEX ON "bets" ("user_id");

CREATE INDEX ON "bets" ("game_id");

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
