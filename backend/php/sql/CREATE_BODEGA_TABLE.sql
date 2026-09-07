IF OBJECT_ID('bodega') IS NULL BEGIN
	CREATE TABLE bodega (
		bod_codigo numeric(9, 0) NOT NULL PRIMARY KEY,
		cmp_codigo int NOT NULL,
		bod_descripcion varchar(50) NOT NULL,
		mae_rut numeric(9, 0) NOT NULL,
		bod_direccion varchar(100) NOT NULL,
		bod_fax varchar(15) NOT NULL,
		bod_mail varchar(50),
		cco_codigo numeric(9, 0) NOT NULL,
		cco_codigo_baja numeric(9, 0),
		bod_fecha_registro datetime NOT NULL,
		bod_fecha_actualizacion datetime NOT NULL,
		bod_login_actualizacion varchar(50) NOT NULL,
		CONSTRAINT FK_cmp_bodega FOREIGN KEY (cmp_codigo)
			REFERENCES campus(cmp_codigo)
		ON DELETE CASCADE
		ON UPDATE CASCADE
	);

	INSERT INTO bodega (bod_codigo,cmp_codigo,bod_descripcion,mae_rut,bod_direccion,bod_fono,bod_fax,bod_mail,cco_codigo,cco_codigo_baja,bod_fecha_registro,bod_fecha_actualizacion,bod_login_actualizacion) VALUES
		(2,2,N'BODEGA CENTRAL CHILLAN',1234567,N'CAMPUS ROGER VENEGAS',N'2468101',N'',N'roger@uficticia.cl',123,456,'2001-01-01 00:00:00.000','2001-02-02 00:00:00.000',N'ABASTECIMIENTO/abastecimiento/rvenegas/PRUEB'),
		(7,1,N'BODEGA CENTRAL CONCEPCION',7654321,N'EDIFICIO RODRIGO ALARCON',N'1018542',N'1231231',N'rodrigo@uficticia.cl',7890,123,'2002-01-01 00:00:00.000','2002-02-02 00:00:00.000',N'RALARCON/rvenegas/rvenegas/PRUEB');
END;