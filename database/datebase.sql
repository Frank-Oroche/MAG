DROP DATABASE IF EXISTS ng_games_test;
CREATE DATABASE ng_games_test;
USE ng_games_test;
SET NAMES 'utf8';

CREATE TABLE usuario (
	int_usercodigo       INT(8) NOT NULL AUTO_INCREMENT,
	vch_userpaterno      VARCHAR(25) NOT NULL,
	vch_usermaterno      VARCHAR(25) NOT NULL,
	vch_usernombre       VARCHAR(30) NOT NULL,
	vch_userciudad       VARCHAR(30) NOT NULL,
	vch_userdireccion    VARCHAR(50) NOT NULL,
	vch_usertelefono     VARCHAR(20) NULL,
    vch_userusuario      VARCHAR(50) NOT NULL,
	vch_userclave        VARCHAR(50) NOT NULL,
	CONSTRAINT PK_Usuario PRIMARY KEY (int_usercodigo),
    CONSTRAINT U_Usuario_vch_userusuario UNIQUE (vch_userusuario)
) ENGINE = INNODB ;


CREATE TABLE games (
	int_usercodigo       INT(8) NOT NULL,
    id               INT(11) NOT NULL AUTO_INCREMENT,
    title            VARCHAR(180),
    description      VARCHAR(255),
    image            VARCHAR(200),
    created_at           TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT PK_Game 
		PRIMARY KEY (id), 
	KEY idx_Game01 (int_usercodigo),
	CONSTRAINT fk_Game_Usuario
		FOREIGN KEY (int_usercodigo)
		REFERENCES usuario (int_usercodigo)
		ON DELETE RESTRICT
		ON UPDATE RESTRICT
) ENGINE = INNODB ;

INSERT INTO usuario (vch_userpaterno,vch_usermaterno,vch_usernombre,vch_userciudad,vch_userdireccion,vch_usertelefono,vch_userusuario,vch_userclave)
VALUES ('Oroche','Quispe','Frank Anthony','Lima','Jr. Guillermo Zuñiga 971 - SMP','961809487','admin@mag.com',SHA('admin'));

INSERT INTO games (int_usercodigo,title,description,image)
VALUES (1,'God of War','God of War es una serie de videojuegos','https://image.api.playstation.com/vulcan/img/rnd/202010/2217/k1laGX3Ita2N6Jlb7BbkHYAr.png');