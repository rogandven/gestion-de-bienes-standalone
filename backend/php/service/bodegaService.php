<?php
    if (!defined('IS_PUBLIC')) {
        header("Location: /");
        die();
    }

    require_once __DIR__ . '/../classes/SQLHelper.php';
    require_once __DIR__ . '/../classes/ServiceResponse.php'; 
    
    abstract class BodegaService {
        public static function getBodegas($conn, $campusId) {
            $response = NULL;
        
            try {
                $campusId = (int)$campusId;

                $bodegas = SQLHelper::fetchQuery($conn, "SELECT 
                    b.bod_codigo,
                    c.cmp_codigo,
                    b.cmp_codigo,
                    b.bod_descripcion,
                    b.mae_rut,
                    b.bod_direccion,
                    b.bod_fono,
                    b.bod_fax,
                    b.bod_mail,
                    b.cco_codigo,
                    b.cco_codigo_baja,
                    b.bod_fecha_registro,
                    b.bod_fecha_actualizacion,
                    b.bod_login_actualizacion
                    FROM bodega b JOIN campus c ON c.cmp_codigo = b.cmp_codigo 
                    WHERE c.cmp_codigo = " . $campusId . ";"
                );
                
                if (is_array($bodegas)) {
                    $response = new ServiceResponse(200, "Bodegas encontradas con éxito", $bodegas);
                } else throw new Exception("Las bodegas no son un arreglo");
            } catch (Exception $e) {
                error_log(print_r($e, true), 0);
                $response = new ServiceResponse(500, "Error interno del servidor", NULL);
            }

            return $response;
        }
    }    
?>