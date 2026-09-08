<?php
    if (!defined('IS_PUBLIC')) {
        header("Location: /");
        die();
    }    

    abstract class SQLHelper {
        private static function dummy() {
            return true;
        }

        public static function fetchQuery($conn, $query) {
            $formattedQuery = ( sqlsrv_query($conn, $query) );
            $formattedQuery ? SQLHelper::dummy() : die(error_log(json_encode(sqlsrv_errors()), 0));

            $array = array();
            $i = 0;

            while ($current = sqlsrv_fetch_object($formattedQuery)) {
                ($array[$i] = $current) && $i+=1;
            }

            sqlsrv_free_stmt($formattedQuery);
            return $array;
        }

        public static function executeQuery($conn, $query, $expectedRowAmount) {
            sqlsrv_begin_transaction($conn);

            $formattedQuery = ( sqlsrv_query($conn, $query) );
            $formattedQuery ? SQLHelper::dummy() : die(error_log(json_encode(sqlsrv_errors()), 0));

            $returnValue = (int)(sqlsrv_rows_affected($formattedQuery));

            if ( ($expectedRowAmount !== NULL) && (((int)$expectedRowAmount) !== $returnValue) ) {
                sqlsrv_rollback($conn);
                return -1;
            }

            sqlsrv_commit($conn);
            return $returnValue;
        }

        public static function closeConnection($conn) {
            return sqlsrv_close($conn);
        }
    }
?>