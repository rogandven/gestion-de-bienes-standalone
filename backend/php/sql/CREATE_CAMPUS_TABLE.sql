IF OBJECT_ID('campus') IS NULL {
    CREATE TABLE campus (
        cmp_codigo int NOT NULL PRIMARY KEY,
        campus int NOT NULL,
        cmp_nombre char(30) NOT NULL,
    );

    INSERT INTO campus (cmp_codigo,campus,cmp_nombre) VALUES
        (1,1,N'Concepción'),
        (2,2,N'Chillán'),
        (3,3,N'Los Ángeles');
}



