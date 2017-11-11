<?php
header('Access-Control-Allow-Origin: *');
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	function __construct(){
		parent::__construct();
		$this->load->library('grocery_CRUD');
		$this->load->model('Bases_model');
	}

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
	public function index()
	{ //$this->load->helper('url');
		$this->load->view('head');
		$this->load->view('encabezado');
		$this->load->view('main');
		$this->load->view('footer');

	}





	public function _example_output($output = null){
		$this->load->view('head');
		$this->load->view('encabezado');
		$this->load->view('example.php',(array)$output);
		$this->load->view('footer');
	}

	public function dojos(){
		try{
			$crud = new grocery_crud();
			$crud->set_table('Dojo');
			$crud->columns('id_Dojo','nombre_dojo','estado', "maestro");
			$crud->set_theme('datatables');
			$crud->required_fields('nombre_dojo', 'estado');
			$crud->display_as('nombre_dojo','Nombre Dojo');
			$this->load->view('head');
			$output = $crud->render();
			$this->_example_output($output);
		}catch(Exception $e){
			show_error($e->getMessage().' --- '.$e->getTraceAsString());
		}
	}

	public function competencias(){
		try{
			$crud = new grocery_crud();
			$crud->set_table('Competencia');
			$crud->columns('id_Competencia','nombre_competencia');
			$crud->set_theme('datatables');
			$crud->required_fields('nombre_competencia');
			$crud->display_as('nombre_competencia','Competencia');
			$this->load->view('head');
			$output = $crud->render();
			$this->_example_output($output);
		}catch(Exception $e){
			show_error($e->getMessage().' --- '.$e->getTraceAsString());
		}
	}

	public function categorias(){
		try{
			$crud = new grocery_crud();
			$crud->set_table('Categoria');
			$crud->columns('id_Categoria','nombre_categoria');
			$crud->set_theme('datatables');
			$crud->required_fields('nombre_categoria',"id_Competencia");
			$crud->display_as('nombre_categoria','Categoria');
			$this->load->view('head');
			$output = $crud->render();
			$this->_example_output($output);
		}catch(Exception $e){
			show_error($e->getMessage().' --- '.$e->getTraceAsString());
		}
	}

	public function equipos(){
		try{
			$crud = new grocery_crud();
			$crud->set_table('Equipo');
			$crud->columns('id_Categoria','nombre_categoria');
			$crud->set_theme('datatables');
			$crud->required_fields('nombre_categoria');
			$crud->display_as('nombre_categoria','Categoria');
			$this->load->view('head');
			$output = $crud->render();
			$this->_example_output($output);
		}catch(Exception $e){
			show_error($e->getMessage().' --- '.$e->getTraceAsString());
		}
	}



}
