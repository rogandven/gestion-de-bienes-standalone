IF OBJECT_ID('material') IS NULL BEGIN
    CREATE TABLE material (
        ano_pdp	int NOT NULL,
        bodega int NOT NULL,
        nombre_material varchar(560) NOT NULL,
        sbo_stock_disponible numeric(18, 0) NOT NULL,
        ume_descripcion varchar(50) NOT NULL,
        ume_codigo int NOT NULL,
        sbo_valor numeric(18,2) NOT NULL,
        fla_correlativo numeric(9, 0) NOT NULL,
        rub_correlativo numeric(9, 0) NOT NULL,
        tma_correlativo numeric(9, 0) NOT NULL,
        mte_correlativo numeric(9, 0) NOT NULL,
        dme_correlativo numeric(9, 0) NOT NULL,
        CONSTRAINT FK_material_bodega FOREIGN KEY (bodega)
        REFERENCES bodega(bod_codigo)
        ON DELETE CASCADE
        ON UPDATE CASCADE
    );

    INSERT INTO material    
        (ano_pdp,
        bodega,
        nombre_material,
        sbo_stock_disponible,
        ume_descripcion,
        ume_codigo,sbo_valor,
        fla_correlativo,
        rub_correlativo,
        tma_correlativo,
        mte_correlativo,
        dme_correlativo
        ) VALUES
        (2026,2,'HOJA DE PAPEL',500,'A4, ARTEL',1234,20,0,0,0,0,0),
        (2026,2,'LÁPIz DE MINA',200,'MEDIANOS, ARTEL',2453,40,0,0,0,0,0),
        (2026,7,'NOTEBOOK',300,'HP, HPG50G5, 2017',6424,50,0,0,0,0,0),
        (2026,7,'CUADERNO',800,'TORRE, COLLEGE',5432,60,0,0,0,0,0),
        (2026,7,'REGLA',100,'PROARTE, 20 CM',2020,800,0,0,0,0,0),
        (2026,7,'COLA FRÍA',100,'ARTEL',2019,720,0,0,0,0,0),
        (2026,7,'PLUMON',500,'SHARPIE, NEGRO',2021,900,0,0,0,0,0),
        (2026,7,'LINTERNA',10,'TRUPER EXPERT',8888,69,0,0,0,0,0),
        (2026,7,'DESTORNILLADOR',666,'INGCO',5362,256,0,0,0,0,0),
        (2026,7,'TABLET',560,'SAMSUNG, GALAXY TAB A4',6767,420,0,0,0,0,0);
END;