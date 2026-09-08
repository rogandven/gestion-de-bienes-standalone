<?php
    if (!defined('IS_PUBLIC')) {
        header("Location: /");
        die();
    }

    require_once __DIR__ . '/../classes/SQLHelper.php';   
    require_once __DIR__ . '/../classes/ServiceResponse.php'; 

    abstract class MaterialService {
        public static function getMateriales($conn, $bodegaId) {
            $response = NULL;

            try {
                $bodegaId = (int)$bodegaId;

                $materiales = SQLHelper::fetchQuery($conn, "SELECT 
                    m.ano_pdp, 
                    m.bodega,
                    m.nombre_material,
                    m.sbo_stock_disponible,
                    m.ume_descripcion,
                    m.ume_codigo,
                    m.sbo_valor,
                    m.fla_correlativo,
                    m.rub_correlativo,
                    m.tma_correlativo,
                    m.mte_correlativo,
                    m.dme_correlativo
                FROM material m WHERE m.bodega = " . $bodegaId . ";");

                if ($materiales && is_array($materiales)) {
                    $response = new ServiceResponse(200, "Material encontrado con éxito", $materiales);   
                } else throw new Exception("Los materiales no son un arreglo");
            } catch (Exception $e) {
                error_log(json_encode($e), 0);
                $response = new ServiceResponse(500, "Error interno del servidor", NULL); 
            }

            return $response;
        }
    }    
?>