<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class bases_model extends CI_Model {

    function __construct(){
        parent::__construct();
    }

    public function getQuery($cadena){
    	return $query = $this->db->query($cadena);
    }

    
}
