use testing_ali_fullstack;

drop table if EXISTs users_test_Aaron_Juarez_Terrazas;

CREATE TABLE users_test_Aaron_Juarez_Terrazas (
	id INT(11) NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(60) NOT NULL,
	segundo_nombre VARCHAR(60) DEFAULT NULL,
	apellido_paterno VARCHAR(60) NOT NULL,
	apellido_materno VARCHAR(60) DEFAULT NULL,

	fecha_nacimiento DATE NOT NULL,

	email VARCHAR(100) NOT NULL,
	telefono VARCHAR(20) NOT NULL,

	PRIMARY KEY (`id`)
);

-- Generando datos de prueba
INSERT INTO users_test_Aaron_Juarez_Terrazas (nombre, segundo_nombre, apellido_paterno, apellido_materno, fecha_nacimiento, email, telefono) VALUES
('Aarón', NULL, 'Juárez', 'Terrazas', '1996-01-26', 'aaronjt@outlook.com', '5544582659'),
('Pedro', 'Navajas', 'Terrazas', 'Reyes', '2000-05-12', 'pedro@outlook.com', '555568952'),
('Eduardo', 'Juan', 'Téllez', 'Valverde', '1995-01-01', 'eduardo@outlook.com', '5512345678');