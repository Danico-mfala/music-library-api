/* Initialize DB with some seed data */
USE `musci_library_api_file_db`;

-- DONT MODIFY THIS MIGRATION
-- it is used by Xest local development pipeline
INSERT INTO `migrations` (
  name,
  run_on
) VALUES (
  "/20211107064324-seed-data",
  "20211107064324"
);

-- YOU CAN MODIFY BELOW THIS LINE
INSERT INTO user_types (user_type_id, user_type)
VALUES (1, "admin");
INSERT INTO user_types (user_type_id, user_type)
VALUES (2, "user");

INSERT INTO users (user_id, first_name, last_name, email, password, user_type_id, created_at)
VALUES (1, "Ahmet", "Akinsql", "ahmet@akinsql.com", SHA2(CONCAT("password","SUPER_DUPER_SECRET"), 224), 1, "2020-11-20 12:00:00");
INSERT INTO users (user_id, first_name, last_name, email, password, user_type_id, created_at)
VALUES (2, "Joe", "Bloggs","joebloggs@gmail.com", SHA2(CONCAT("password","SUPER_DUPER_SECRET"), 224), 2, "2020-11-20 12:00:00");
INSERT INTO users (user_id, first_name, last_name, email, password, user_type_id, created_at)
VALUES (3, "Jim", "Bloggs" , "jimbloggs@yahoo.com", SHA2(CONCAT("password","SUPER_DUPER_SECRET"), 224), 2, "2020-11-20 12:00:00");

-- Artists
INSERT INTO Artists (name, genre) VALUES ("Tauren Wells", "Christian");
INSERT INTO Artists (name, genre) VALUES ("Hillsongs", "Christian");
INSERT INTO Artists (name, genre) VALUES ("kari Jobe", "Christian");

-- Albums
INSERT INTO Albums (Album_name, years, Artist_id) VALUES ("Zion (Deluxe Edition)", "2013", 2);
INSERT INTO Albums (Album_name, years, Artist_id) VALUES ("First Love (Live)", "2020", 3);
INSERT INTO Albums (Album_name, years, Artist_id) VALUES ("Hills and Valleys (Deluxe Edition)", "2017", 1);


-- Songs
INSERT INTO Songs (song_name, Album_id, Artist_id) VALUES ("Relentless", 1, 2);
INSERT INTO Songs (song_name, Album_id, Artist_id) VALUES ("First Love - Live", 2, 3);
INSERT INTO Songs (song_name, Album_id, Artist_id) VALUES ("Hills & valleys", 3, 1);