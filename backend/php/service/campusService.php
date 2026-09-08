<?php
    if (!defined('IS_PUBLIC')) {
        header("Location: /");
        die();
    }

    require __DIR__ . '/../classes/SQLHelper.php';   
    
    abstract class CampusService {
        public static function getCampuses($conn) {
            $response = NULL;

            try {
                $campuses = SQLHelper::fetchQuery($conn, "SELECT cmp_codigo, campus, cmp_nombre FROM campus");

                if ($campuses && is_array($campuses)) {
                    $response = new ServiceResponse(200, "Campus encontrado con éxito", $campuses);   
                } else throw new Exception("Los campus no son un arreglo");
            } catch (Exception $e) {
                error_log(json_encode($e), 0);
                $response = new ServiceResponse(500, "Error interno del servidor", NULL); 
            }

            return $response;
        }
    }    
?>