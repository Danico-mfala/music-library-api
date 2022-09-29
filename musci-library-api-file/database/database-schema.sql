USE `musci_library_api_file_db`;

-- DONT MODIFY THIS MIGRATION
-- it is used by Xest local development pipeline
DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `run_on` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_unicode_ci;

INSERT INTO `migrations` (
  name,
  run_on
) VALUES (
  "/20211107064324-database-schema",
  "20211107064324"
);

-- YOU CAN MODIFY BELOW THIS LINE
DROP TABLE IF EXISTS user_types;
CREATE TABLE user_types(
  user_type_id int AUTO_INCREMENT PRIMARY KEY,
  user_type VARCHAR(50) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_unicode_ci;

DROP TABLE IF EXISTS users;
CREATE TABLE users(
  user_id int AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(500) NOT NULL,
  user_type_id int NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_type_id) REFERENCES user_types(user_type_id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_unicode_ci;


-- Artists table

DROP TABLE IF EXISTS Artists;
CREATE TABLE Artists(
  Artist_id int AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  genre VARCHAR(50) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Album table

DROP TABLE IF EXISTS Albums;
CREATE TABLE Albums(
  Album_id int AUTO_INCREMENT  PRIMARY KEY,
  Album_name VARCHAR(50) NOT NULL,
  years int NOT NULL,
  Artist_id int NOT NULL,
  FOREIGN KEY (Artist_id) REFERENCES Artists(Artist_id) ON DELETE CASCADE
)ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Songs table

DROP TABLE IF EXISTS Songs;
CREATE TABLE Songs(
  song_id int AUTO_INCREMENT PRIMARY KEY,
  song_name VARCHAR(50) NOT NULL,
  Album_id int NOT NULL,
  Artist_id int NOT NULL,
  FOREIGN KEY (Album_id)
  REFERENCES Albums(Album_id) ON UPDATE CASCADE ON DELETE CASCADE,
  FOREIGN KEY (Artist_id)
  REFERENCES Artists(Artist_id) ON UPDATE CASCADE ON DELETE CASCADE
)ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_unicode_ci;