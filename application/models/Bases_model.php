<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class bases_model extends CI_Model {

    function __construct(){
        parent::__construct();
    }

    public function getQuery($cadena){
    	return $query = $this->db->query($cadena);
    }

    public function getCompetidores($data){
		$cadena="select pc.id_Persona,d.estado,d.nombre_dojo,c.nombre_categoria,p.nombre_persona,p.sexo,p.edad,p.grado,p.peso,p.estatura,co.nombre_competencia,d.maestro
		from persona_has_categoria as pc inner join persona as p on pc.id_Persona=p.id_Persona
		inner join categoria as c on pc.id_Categoria=c.id_Categoria
		inner join competencia as co on pc.id_Competencia=co.id_Competencia
		inner join dojo as d on d.id_Dojo=p.id_Dojo
		where pc.id_Competencia='".$data['competencia']."' and pc.id_Categoria='".$data['categoria']."'";
		return $this->db->query($cadena);
	}
	public function getCompetidoresE($data){
		$cadena="select ec.id_Equipo,d.estado,d.nombre_dojo,c.nombre_categoria,e.nombre_equipo,co.nombre_competencia,d.maestro
		FROM equipo_has_categoria as ec inner join equipo as e on ec.id_Equipo=e.id_Equipo
		inner join categoria as c on ec.id_Categoria=c.id_Categoria
		inner join competencia as co on c.id_Competencia=co.id_Competencia
		inner join dojo as d on e.id_Dojo=d.id_Dojo
		where ec.id_Competencia='".$data['competencia']."' and ec.id_Categoria='".$data['categoria']."'";
		return $this->db->query($cadena);
	}

    public function insertaEquipo($data){
		$cadena = "insert into equipo(nombre_equipo,id_Dojo) values('".$data['nombre']."', '".$data['dojo']."')";
		//echo var_dump($cadena);
		$this->db->trans_begin();
		$this->db->query($cadena);
		if($this->db->trans_status() === FALSE){
			echo "fallo";
			$this->db->trans_rollback();
		}else{
			echo "listo";
			$this->db->trans_commit();
		}
	}

	public function insertaEC($data){
		$cadena = "insert into equipo_has_categoria(id_Equipo,id_Categoria,id_Competencia) values('".$data['equipo']."', '".$data['categoria']."', '".$data['competencia']."')";
		//echo var_dump($cadena);
		$this->db->trans_begin();
		$this->db->query($cadena);
		if($this->db->trans_status() === FALSE){
			echo "fallo";
			$this->db->trans_rollback();
		}else{
			echo "listo";
			$this->db->trans_commit();
		}
	}
    
}
