IF OBJECT_ID('material') IS NULL {
    CREATE TABLE material (
        ano_pdp	int NOT NULL,
        bodega	int NOT NULL,
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
        (2026,1,"HOJAS DE PAPEL",500,"A4, ARTEL",1234,20,0,0,0,0,0),
        (2026,1,"LAPICES DE MINA",200,"MEDIANOS, ARTEL",2453,20,0,0,0,0,0),
        (2026,2,"NOTEBOOKS",300,"HP, HPG50G5, 2017",6424,20,0,0,0,0,0),
        (2026,2,"TABLETS",500,"SAMSUNG, GALAXY TAB A4",6767,20,0,0,0,0,0);
}