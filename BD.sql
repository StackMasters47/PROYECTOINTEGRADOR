-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`usuario` (
  `id_usuario` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(80) NULL,
  `apellido` VARCHAR(80) NULL,
  `correo` VARCHAR(80) NULL,
  `contraseña` VARCHAR(80) NULL,
  PRIMARY KEY (`id_usuario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`preferencias_usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`preferencias_usuario` (
  `id_prefrencia` INT NOT NULL AUTO_INCREMENT,
  `id_usuario` INT NULL,
  `tipo_prefrencia` VARCHAR(80) NULL,
  `id_categoria` INT NULL,
  PRIMARY KEY (`id_prefrencia`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`pedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`pedidos` (
  `id_pedido` INT NOT NULL AUTO_INCREMENT,
  `id_usuario` INT NULL,
  `fecha_pedido` DATE NULL,
  `total` DECIMAL NULL,
  `estado_pedido` TEXT NULL,
  `usuario_id_usuario` INT NOT NULL,
  `descripcion` TEXT NULL,
  `pedidoscol` VARCHAR(45) NULL,
  PRIMARY KEY (`id_pedido`),
  INDEX `fk_pedidos_usuario1_idx` (`usuario_id_usuario` ASC) VISIBLE,
  CONSTRAINT `fk_pedidos_usuario1`
    FOREIGN KEY (`usuario_id_usuario`)
    REFERENCES `mydb`.`usuario` (`id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`categorias` (
  `id_categoria` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(80) NULL,
  `descripcion` TEXT NULL,
  `preferencias_usuario_id_prefrencia` INT NOT NULL,
  PRIMARY KEY (`id_categoria`),
  INDEX `fk_categorias_preferencias_usuario1_idx` (`preferencias_usuario_id_prefrencia` ASC) VISIBLE,
  CONSTRAINT `fk_categorias_preferencias_usuario1`
    FOREIGN KEY (`preferencias_usuario_id_prefrencia`)
    REFERENCES `mydb`.`preferencias_usuario` (`id_prefrencia`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`productos` (
  `id_productos` INT NOT NULL AUTO_INCREMENT,
  `id_categoria` INT NULL,
  `descripcion` TEXT NULL,
  `precio` DECIMAL NULL,
  `nombre` VARCHAR(80) NULL,
  `stock` INT NULL,
  `categorias_id_categoria` INT NOT NULL,
  PRIMARY KEY (`id_productos`, `categorias_id_categoria`),
  INDEX `fk_productos_categorias1_idx` (`categorias_id_categoria` ASC) VISIBLE,
  CONSTRAINT `fk_productos_categorias1`
    FOREIGN KEY (`categorias_id_categoria`)
    REFERENCES `mydb`.`categorias` (`id_categoria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`reseñas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`reseñas` (
  `id_reseña` INT NOT NULL AUTO_INCREMENT,
  `id_producto` INT NULL,
  `id_usuario` INT NULL,
  `fecha_reseña` DATE NULL,
  `comentario` TEXT NULL,
  `calificacion` DECIMAL NULL,
  `reseñascol` VARCHAR(45) NULL,
  `pedidos_id_pedido` INT NOT NULL,
  PRIMARY KEY (`id_reseña`),
  INDEX `fk_reseñas_pedidos1_idx` (`pedidos_id_pedido` ASC) VISIBLE,
  CONSTRAINT `fk_reseñas_pedidos1`
    FOREIGN KEY (`pedidos_id_pedido`)
    REFERENCES `mydb`.`pedidos` (`id_pedido`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`pedidos_has_productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`pedidos_has_productos` (
  `pedidos_id_pedido` INT NOT NULL,
  `productos_id_productos` INT NOT NULL,
  PRIMARY KEY (`pedidos_id_pedido`, `productos_id_productos`),
  INDEX `fk_pedidos_has_productos_productos1_idx` (`productos_id_productos` ASC) VISIBLE,
  INDEX `fk_pedidos_has_productos_pedidos1_idx` (`pedidos_id_pedido` ASC) VISIBLE,
  CONSTRAINT `fk_pedidos_has_productos_pedidos1`
    FOREIGN KEY (`pedidos_id_pedido`)
    REFERENCES `mydb`.`pedidos` (`id_pedido`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedidos_has_productos_productos1`
    FOREIGN KEY (`productos_id_productos`)
    REFERENCES `mydb`.`productos` (`id_productos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
