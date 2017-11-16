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
			$crud->set_table('dojo');
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
			$crud->set_table('competencia');
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
			$crud->set_table('categoria');
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
			$crud->set_table('equipo');
			$crud->columns('id_Equipo','nombre_equipo');
			$crud->set_theme('datatables');
			$crud->required_fields('nombre_equipo');
			$crud->display_as('nombre_equipo','Equipo');
			$this->load->view('head');
			$output = $crud->render();
			$this->_example_output($output);
		}catch(Exception $e){
			show_error($e->getMessage().' --- '.$e->getTraceAsString());
		}
	}

	public function personas(){
		try{
			$crud = new grocery_crud();
			$crud->set_table('persona');
			$crud->columns('id_Persona','nombre_persona',"f_nacimiento", "sexo", "edad", "grado", "peso","estatura","id_Dojo");
			$crud->set_theme('datatables');
			$crud->required_fields('nombre_persona',"f_nacimiento", "sexo", "edad", "grado", "peso","estatura","id_Dojo");
			$crud->display_as('nombre_persona',"persona","f_nacimiento","fecha", "sexo","sexo", "edad","edad", "grado","grado", "peso","peso","estatura","estatura","id_Dojo","Dojo");
			$this->load->view('head');
			$output = $crud->render();
			$this->_example_output($output);
		}catch(Exception $e){
			show_error($e->getMessage().' --- '.$e->getTraceAsString());
		}
	}

	public function equipoCategoria(){
		try{
			$crud = new grocery_crud();
			$crud->set_table('equipo_has_categoria');
			$crud->columns('id_Equipo',"id_Categoria","id_Competencia");
			$crud->set_theme('datatables');
			$crud->required_fields('id_Equipo',"id_Categoria","id_Competencia");
			$crud->display_as('id_Equipo',"id equipo","id_Categoria","id categoria","id_Competencia","id competencia");
			$this->load->view('head');
			$output = $crud->render();
			$this->_example_output($output);
		}catch(Exception $e){
			show_error($e->getMessage().' --- '.$e->getTraceAsString());
		}
	}

	public function personaCategoria(){
		try{
			$crud = new grocery_crud();
			$crud->set_table('persona_has_categoria');
			$crud->columns('id_Persona',"id_Categoria","id_Competencia");
			$crud->set_theme('datatables');
			$crud->required_fields('id_Persona',"id_Categoria","id_Competencia");
			$crud->display_as('id_Persona',"id persona","id_Categoria","id categoria","id_Competencia","id competencia");
			$this->load->view('head');
			$output = $crud->render();
			$this->_example_output($output);
		}catch(Exception $e){
			show_error($e->getMessage().' --- '.$e->getTraceAsString());
		}
	}
	public function individual(){
		try{
			$crud = new grocery_crud();
			$crud->set_table('persona_has_categoria');
			$crud->columns('id_Persona','id_Categoria','id_Competencia');
			$crud->set_theme('datatables');
			$crud->required_fields('id_Persona','id_Categoria','id_Competencia');
			$this->load->view('head');
			$output = $crud->render();
			$this->_example_output($output);
		}catch(Exception $e){
			show_error($e->getMessage().' --- '.$e->getTraceAsString());
		}
	}
	public function insertaEquipo(){
		$data['data'] = array(
			'nombre' => $this->input->post('nombre'),
			'dojo' => $this->input->post('dojo')
		);      
		//echo var_dump($data['data']);
		$this->bases_model->insertaEquipo($data['data']);	
		redirect('/Welcome/registro/', 'refresh');
	}
	public function insertaEC(){
		$data['data'] = array(
			'equipo' => $this->input->post('equipo'),
			'competencia' => $this->input->post('competencia'),
			'categoria' => $this->input->post('categoria1')
		);   
		echo var_dump($data['data']);
		$this->bases_model->insertaEC($data['data']);	
		redirect('/Welcome/equipoCategoria/', 'refresh');
	}

	public function consultas(){
		$this->load->view('head');
		$this->load->view('header');
		$this->load->view('encabezado');
		$cadena = "select * from competencia where id_Competencia<3";
		$data['competenciaI']=$this->bases_model->getQuery($cadena);
		$cadena = "select * from competencia where id_Competencia>2";
		$data['competenciaE']=$this->bases_model->getQuery($cadena);
		$this->load->view('consultas',$data);
		$this->load->view('footer');
	}

	public function llenaCategoriaI(){//esta funcion llena el div de la consulta
		$options = "";
      	if($this->input->post('competenciaI')){
      		$competencia = $this->input->post('competenciaI');
      		$cadena="select * from categoria where id_Competencia='".$competencia."'";
       		$categoria = $this->bases_model->getQuery($cadena);?>
         	<div name="categoriaI" id="categoriaI">
          		<label for="categoriaI">Selecciona una Categoria:</label>
             	<select class="form-control" id="categoriaI1" name="categoriaI1">
             		<option value="" disabled selected>click aquí</option>
             		<?php foreach($categoria->result() as $fila){?>
             			<option value="<?=$fila->id_Categoria?>"><?=$fila ->nombre_categoria?></option> 
             		<?php }?>
             	</select>
          	</div>
         	<?php 
       	}
	}
	public function llenaCategoriaE(){//esta funcion llena el div de la consulta
		$options = "";
      	if($this->input->post('competenciaE')){
      		$competencia = $this->input->post('competenciaE');
      		$cadena="select * from categoria where id_Competencia='".$competencia."'";
       		$categoria = $this->bases_model->getQuery($cadena);?>
         	<div name="categoriaE" id="categoriaE">
          		<label for="categoriaE">Selecciona una Categoria:</label>
             	<select class="form-control" id="categoriaE1" name="categoriaE1">
             		<option value="" disabled selected>click aquí</option>
             		<?php foreach($categoria->result() as $fila){?>
             			<option value="<?=$fila->id_Categoria?>"><?=$fila ->nombre_categoria?></option> 
             		<?php }?>
             	</select>
          	</div>
         	<?php 
       	}
	}
	public function llenaCompetidoresI(){//esta funcion da la consulta
		
		$data['data'] = array(
			'categoria' => $this->input->post('categoriaI1'),
			'competencia' => $this->input->post('competenciaI')
		);      
		//echo var_dump($data['data']);
		
       	$competidores = $this->bases_model->getCompetidores($data['data']);
		
		
		if ($competidores!=FALSE){ 
			$i=1;
			foreach($competidores->result() as $row) { ?>
			  <form id="form<?php echo $i;?>" name="form<?php echo $i;?>" class="form-inline alert alert-info">
			    <div class="form-group">
			     <label for="nombre_persona<?php echo $i;?>">nombre:</label>
			     <input type="text" class="form-control" readonly id="nombre_persona<?php echo $i;?>" name="nombre_persona<?php echo $i;?>" value="<?php echo $row->nombre_persona;?>">
			     <label for="dojo<?php echo $i;?>">dojo:</label>
			     <input type="text" class="form-control" readonly id="dojo<?php echo $i;?>" name="dojo<?php echo $i;?>" value="<?php echo $row->nombre_dojo;?>">
			     <label for="edad<?php echo $i;?>">edad:</label>
			     <input type="text" class="form-control" readonly id="edad<?php echo $i;?>" name="edad<?php echo $i;?>" value="<?php echo $row->edad;?>">
			    </div>			    
			  </form>
			  <?php  $i++;}
		}
    }
    public function llenaCompetidoresE(){//esta funcion da la consulta
		
		$data['data'] = array(
			'categoria' => $this->input->post('categoriaE1'),
			'competencia' => $this->input->post('competenciaE')
		);      
		//echo var_dump($data['data']);
		
       	$competidores = $this->bases_model->getCompetidoresE($data['data']);
		
		
		if ($competidores!=FALSE){ 
			$i=1;
			foreach($competidores->result() as $row) { ?>
			  <form id="form<?php echo $i;?>" name="form<?php echo $i;?>" class="form-inline alert alert-info">
			    <div class="form-group">
			     <label for="id_Equipo<?php echo $i;?>">nombre:</label>
			     <input type="text" class="form-control" readonly id="nombre_equipo<?php echo $i;?>" name="nombre_equipo<?php echo $i;?>" value="<?php echo $row->nombre_equipo;?>">
			     <label for="dojo<?php echo $i;?>">dojo:</label>
			     <input type="text" class="form-control" readonly id="dojo<?php echo $i;?>" name="dojo<?php echo $i;?>" value="<?php echo $row->nombre_dojo;?>">
			    </div>
			  </form>
			  <?php  $i++;}
		}
    }
	
	public function llenaCategorias(){//esta funcion solo es para dar de alta en el registro
      	$options = "";
      	if($this->input->post('competencia')){
      		$competencia = $this->input->post('competencia');
      		$cadena="select * from categoria where id_Competencia='".$competencia."'";
       		$categoria = $this->bases_model->getQuery($cadena);?>
         	<div name="categoria" id="categoria">
          		<label for="categoria">Selecciona una Categoria:</label>
             	<select class="form-control" id="categoria1" name="categoria1">
             		<?php foreach($categoria->result() as $fila){?>
             			<option value="<?=$fila->id_Categoria?>"><?=$fila ->nombre_categoria?></option> 
             		<?php }?>
             	</select>
          	</div>
         	<?php 
       	}
    }


	public function equipoCategoria(){
		$this->load->view('header');
		$cadena = "select * from equipo where id_equipo>76 order by id_Equipo";
		$data['equipos']=$this->bases_model->getQuery($cadena);
		$cadena = "select * from competencia order by id_Competencia";
		$data['competencias']=$this->bases_model->getQuery($cadena);
		$this->load->view('equipoCategoria',$data);
	}
	public function registro(){
		$cadena = "select * from dojo order by nombre_dojo";
		$data['dojos']=$this->bases_model->getQuery($cadena);
		$this->load->view('registro',$data);
	}

}
