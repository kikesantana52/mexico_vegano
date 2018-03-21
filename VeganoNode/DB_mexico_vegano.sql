-- DB MEXICO VEGANO

CREATE DATABASE Mexico_Vegano;
USE Mexico_Vegano;


CREATE TABLE mex_argumentos{
  id INT(6) AUTO_INCREMENT PRIMARY KEY NOT NULL,
  titulo NVARCHAR(64) NOT NULL,
  contenido TEXT,
  icono NVARCHAR(255)
}

CREATE TABLE mex_clientes{
  id NVARCHAR(64) PRIMARY KEY NOT NULL,
  titulo NVARCHAR(64) NOT NULL,
  calle NVARCHAR(32),
  noext NVARCHAR(32),
  noint NVARCHAR(32),
  telefono NVARCHAR(32),
  slogan NVARCHAR(255),
}


CREATE TABLE mex_recetas{
  id NVARCHAR(64) PRIMARY KEY NOT NULL,
  titulo NVARCHAR(64) NOT NULL,
  tiempo NVARCHAR(64) NOT NULL,
  proceso TEXT,


}
