<?php
    header('Access-Control-Allow-Origin:*');
    $input = file_get_contents('php://input');
    $json = json_decode($input, true);
    $userid = isset($json["userid"]) ? $json["userid"] : null;
    $password = isset($json["password"]) ? $json["password"] : null;
    if (!$userid || !$password) {
        echo '{"code": 1}';
        exit(0);
    }
    class MyDB extends SQLite3
    {
        function __construct()
        {
            $this->open('./database/data.db');
        }
    }
    $db = new MyDB();
    if(!$db){
        echo $db->lastErrorMsg();
    }

    $sql =<<<EOF
        SELECT * from User;
EOF;
    $isOK = false;
    $ret = $db->query($sql);
    while($row = $ret->fetchArray(SQLITE3_ASSOC) ){
        $dbuserid = $row['userid'];
        $dbpassword = $row['password'];
        if ($dbuserid == $userid) {
            if ($password == $dbpassword) {
                echo '{"code": 0}';
                $isOK = true;
            }
            else {
                echo '{"code": 2}';
                $isOK = true;
            }
            break;
        }
    }
    if (!$isOK) {
        echo '{"code": 3}';
    }
    $db->close();
?>