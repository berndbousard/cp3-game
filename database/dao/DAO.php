<?php
class DAO {
	// private static $dbHost = "localhost";
	// private static $dbName = "cityflip";
	// private static $dbUser = "cityflipuser";
	// private static $dbPass = "cityflippass";
	// private static $sharedPDO;
	private static $dbHost = "mysqlstudent";
	private static $dbName = "berndbousaquoo4i";
	private static $dbUser = "berndbousaquoo4i";
	private static $dbPass = "oosieth7Ue7i";
	private static $sharedPDO;

	protected $pdo;

	function __construct() {
		if(empty(self::$sharedPDO)) {
			self::$sharedPDO = new PDO("mysql:host=" . self::$dbHost . ";dbname=" . self::$dbName, self::$dbUser, self::$dbPass);
			self::$sharedPDO->exec("SET CHARACTER SET utf8");
			self::$sharedPDO->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			self::$sharedPDO->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
		}
		$this->pdo =& self::$sharedPDO;
	}
}