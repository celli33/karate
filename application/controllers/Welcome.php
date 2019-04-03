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
		$this->load->view('encabezadoExterno');
		$this->load->view('login');
		$this->load->view('footer');

	}

	public function indexAdmin()
	{
		$this->load->view('head');
		$this->load->view('encabezado');
		$this->load->view('footer');
	}

	public function indexMaestro()
	{
		$this->load->view('head');
		$this->load->view('encabezadoMaestros');
		$this->load->view('footer');
	}


  public function iniciarSesion()
  {
		$this->form_validation->set_rules('email','email','required');
		$this->form_validation->set_rules('contraseña','contraseña','required');
		$this->form_validation->set_message('required','<div class="red-text" >El campo %s es obligatorio</div>');
		if ($this->form_validation->run() != FALSE){
			$data["data"] = array(
			'email' => $this->input->post('email'),
			'contraseña' => $this->input->post('contraseña')
			);
			$data["data"]=$this->Bases_model->iniciarSesion($data["data"]);
			//comprobar si existe el usuario con el password correcto
			//inicialmente solo se logea el alumno :3
			if($data["data"]==FALSE){
				redirect('/Welcome/index/', 'location');
			}else{
				foreach ($data["data"]-> result() as $row) {
					$datasession = array(
							'idUsuario' => $row->id_usuario,
							'usuario' => $row->user,
							'contraseña' => $row->contra,
							'nivel' => 0
						);
				}
				if($datasession['usuario']=='Admin'){//nivel 1
					$datasession['nivel']=1;
					$this->session->set_userdata($datasession);
					redirect('/Welcome/indexAdmin/', 'location');
				}else{
					$datasession['nivel']=2;
					$this->session->set_userdata($datasession);
					redirect('/Welcome/indexMaestro/', 'location');
				}
			}
		}else{
			$this->index();
		}
  }

	public function cerrarSesion(){
		$datasession = array('nivel' => '');
		$this->session->unset_userdata($datasession);
		$this->session->sess_destroy();
		redirect('/Welcome/index/', 'refresh');
	}



	public function _example_output($output = null){
		$this->load->view('head');
		$this->load->view('encabezado');
		$this->load->view('example.php',(array)$output);
		$this->load->view('footer');
	}

	public function _example_outputMaestros($output = null){
		$this->load->view('head');
		$this->load->view('encabezadoMaestros');
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
			$crud->columns('id_Categoria','nombre_categoria', 'id_Competencia');
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
			$crud->unset_add();
			$this->load->view('head');
			$output = $crud->render();
			if($this->session->userdata('nivel')==1)
				$this->_example_output($output);
			if($this->session->userdata('nivel')==2)
				$this->_example_outputMaestros($output);
		}catch(Exception $e){
			show_error($e->getMessage().' --- '.$e->getTraceAsString());
		}
	}

	public function personas(){
		try{
			$this->load->view('head');
			if($this->session->userdata('nivel')==1)
				$this->load->view('encabezado');
			if($this->session->userdata('nivel')==2)
				$this->load->view('encabezadoMaestros');
			$cadena="select id_Dojo, nombre_dojo from dojo;";
			$data['dojos']=$this->Bases_model->getQuery($cadena);
		  $this->load->view('agregarCompetidor',$data);
			$this->load->view('footer');
		}catch(Exception $e){
			show_error($e->getMessage().' --- '.$e->getTraceAsString());
		}
	}

	public function modificarPersona()
	{
		try {
			//$this->load->view('head');
			//$this->load->view('encabezado');
			$crud = new grocery_crud();
			$crud->set_table('persona');
			$crud->columns('id_Persona','nombre_persona',"f_nacimiento", "sexo", "edad", "grado", "peso","estatura","id_Dojo");
			$crud->set_theme('datatables');
			$crud->required_fields('nombre_persona',"f_nacimiento", "sexo", "edad", "grado", "peso","estatura","id_Dojo");
			$crud->display_as('nombre_persona',"persona","f_nacimiento","fecha", "sexo","sexo", "edad","edad", "grado","grado", "peso","peso","estatura","estatura","id_Dojo","Dojo");
			$crud->unset_add();
			$output = $crud->render();
			if($this->session->userdata('nivel')==1)
				$this->_example_output($output);
			if($this->session->userdata('nivel')==2)
				$this->_example_outputMaestros($output);
			} catch (\Exception $e) {
				show_error($e->getMessage().' --- '.$e->getTraceAsString());
		}
	}

	public function equipoCategoria1(){
		try{
			$crud = new grocery_crud();
			$crud->set_table('equipo_has_categoria');
			//$crud->set_relation_n_n('categoria', 'equipo_has_categoria', 'categoria', 'id_Equipo', 'id_Categoria', 'nombre_categoria');
			//$crud->unset_columns('id_Dojo');
			//$crud->field_type('id_Equipo', 'readonly');
			//$crud->set_relation('id_Categoria', 'equipo_has_categoria', 'nombre_categoria');
			//$crud->fields('id_Equipo', 'nombre_equipo' , 'categoria');
			$crud->set_theme('datatables');
			$crud->set_relation('id_Categoria','categoria','nombre_categoria','categoria.id_Competencia>3','categoria.nombre_categoria');
			$crud->set_relation('id_Equipo','equipo','nombre_equipo');
			$crud->set_relation('id_Competencia','competencia','nombre_competencia','competencia.id_Competencia>3');
			$crud->columns('id_Equipo',"id_Categoria","id_Competencia");
			$crud->set_theme('datatables');
			$crud->required_fields('id_Equipo',"id_Categoria","id_Competencia");
			$crud->display_as('id_Equipo',"id equipo","id_Categoria","id categoria","id_Competencia","id competencia");

			$this->load->view('head');
			$output = $crud->render();
			if($this->session->userdata('nivel')==1)
				$this->_example_output($output);
			if($this->session->userdata('nivel')==2)
				$this->_example_outputMaestros($output);
		}catch(Exception $e){
			show_error($e->getMessage().' --- '.$e->getTraceAsString());
		}
	}

	public function personaCategoria(){
		try{
			$crud = new grocery_crud();
			$crud->set_table('persona_has_categoria');
			$crud->set_relation('id_Categoria','categoria','nombre_categoria','categoria.id_Competencia<3','categoria.nombre_categoria');
			$crud->set_relation('id_Persona','persona','nombre_persona');
			$crud->set_relation('id_Competencia','competencia','nombre_competencia','competencia.id_Competencia<3');
			$crud->columns('id_Persona',"id_Categoria","id_Competencia");
			$crud->set_theme('datatables');
			$crud->required_fields('id_Persona',"id_Categoria","id_Competencia");
			$crud->display_as('id_Persona',"id persona","id_Categoria","id categoria","id_Competencia","id competencia");
			$this->load->view('head');
			$output = $crud->render();
			if($this->session->userdata('nivel')==1)
				$this->_example_output($output);
			if($this->session->userdata('nivel')==2)
				$this->_example_outputMaestros($output);
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
		if($this->Bases_model->insertaEquipo($data['data'])==true){
			$cadena="select id_Equipo, nombre_equipo from equipo ORDER BY id_Equipo DESC LIMIT 1;";
			$data['datos']=$this->Bases_model->getQuery($cadena);
			foreach($data['datos']->result() as $fila) {
				$id=$fila->id_Equipo;
				$nombre=$fila->nombre_equipo;
			}
			redirect('/Welcome/seleccionaCompetenciasPorEquipo/?id='.$id.'&nombre='.$nombre);
		}
	}

	public function seleccionaCompetenciasPorEquipo()
	{
	 $this->load->view('head');
	 $this->load->view('header');
	 $this->load->view('encabezado');
		$data['id']=$this->input->get('id');
		$data['nombre']=$this->input->get('nombre');
		$cadena = "select * from competencia where id_Competencia>3";
		$data['competenciaE']=$this->Bases_model->getQuery($cadena);
		$this->load->view('registroCompetenciaEquipo',$data);
		$this->load->view('footer');
	}

	public function insertaEC(){
		$this->load->view('head');
		$data['data'] = array(
			'equipo' => $this->input->post('id_Equipo'),
			'competencia' => $this->input->post('competenciaE'),
			'categoria' => $this->input->post('categoriaE1'),
			'nombre_equipo'=>$this->input->post('nombre')
		);
		//echo var_dump($data['data']);
		if($this->Bases_model->insertaEC($data['data'])!=false){
				$this->load->view('otraCategoriaEquipo',$data);
		}else {
			echo "error";
		}

	}

	public function insertaPersona()
	{ $this->load->view('head');
		$this->load->view('encabezado');
		$data['data'] = array(
			'nombre'=> $this->input->post('nombre'),
			'f_nacimiento'=> $this->input->post('f_nacimiento'),
			'sexo'=> $this->input->post('sexo'),
			'edad'=> $this->input->post('edad'),
			'grado'=> $this->input->post('grado'),
			'peso'=> $this->input->post('peso'),
			'estatura'=> $this->input->post('estatura'),
			'dojo'=> $this->input->post('dojo')
		);
		if( $this->Bases_model->insertaPersona($data['data'])==true ){
			$cadena="select id_Persona, nombre_persona from persona ORDER BY id_Persona DESC LIMIT 1;";
			$data['id']=$this->Bases_model->getQuery($cadena);
			foreach($data['id']->result() as $fila) {
				$id=$fila->id_Persona;
				$nombre=$fila->nombre_persona;
			}
			redirect('/Welcome/seleccionaCompetenciasPorPersona/?id='.$id.'&nombre='.$nombre);
		}else {
			echo "error";
		}
		//echo var_dump($data['data']);

	}

	public function seleccionaCompetenciasPorPersona()
	{
		$this->load->view('head');
		$this->load->view('header');
		$this->load->view('encabezado');
		$data['id']=$this->input->get('id');
		$data['nombre']=$this->input->get('nombre');
		$cadena = "select * from competencia where id_Competencia<3";
		$data['competenciaI']=$this->Bases_model->getQuery($cadena);
		//$this->Bases_model->getQuery($cadena)
		$this->load->view("registroCompetenciaPersona",$data);

	}

	public function insertaCompetenciaPorPersona()
	{		$this->load->view('head');
			$data['data'] = array(
				'id_Competencia'=> $this->input->post('competenciaI'),
				'id_Categoria'=> $this->input->post('categoriaI1'),
				'id_Persona'=> $this->input->post('id_Persona'),
				'nombre_Persona'=> $this->input->post('nombre')
			);
			if($this->Bases_model->insertaCompetenciaPorPersona($data['data'])!=FALSE){
				$this->load->view('otraCategoria',$data);
			}else {
				echo "error";
			}

	}

	public function consultas(){
		$this->load->view('head');
		$this->load->view('header');
		$this->load->view('encabezado');
		$cadena = "select * from competencia where id_Competencia<3";
		$data['competenciaI']=$this->Bases_model->getQuery($cadena);
		$cadena = "select * from competencia where id_Competencia>2";
		$data['competenciaE']=$this->Bases_model->getQuery($cadena);
		$this->load->view('consultas',$data);
		$this->load->view('footer');
	}

	public function llenaCategoriaI(){//esta funcion llena el div de la consulta
		$options = "";
      	if($this->input->post('competenciaI')){
      		$competencia = $this->input->post('competenciaI');
      		$cadena="select * from categoria where id_Competencia='".$competencia."'";
       		$categoria = $this->Bases_model->getQuery($cadena);?>
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
       		$categoria = $this->Bases_model->getQuery($cadena);?>
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
		$this->load->view('head');
		$this->load->view('header');
		$this->load->view('encabezado');


		$data['data'] = array(
			'categoria' => $this->input->post('categoriaI1'),
			'competencia' => $this->input->post('competenciaI')
		);
		//echo var_dump($data['data']);

       	$competidores = $this->Bases_model->getCompetidores($data['data']);
		if ($competidores!=FALSE){

			$data['data'] = array(
				'competidores'=> $competidores,
				'categoria' => $this->input->post('categoriaI1'),
				'competencia' => $this->input->post('competenciaI')
			);
			$this->load->view('main',$data['data']);
			}
    }

    public function llenaCompetidoresE(){//esta funcion da la consulta
			$this->load->view('head');
			$this->load->view('header');
			$this->load->view('encabezado');
		$data['data'] = array(
			'categoria' => $this->input->post('categoriaE1'),
			'competencia' => $this->input->post('competenciaE')
		);
		//echo var_dump($data['data']);

       	$equipos = $this->Bases_model->getCompetidoresE($data['data']);
				//var_dump($equipos->result());
				if ($equipos!=FALSE){
					$data['equipos']=$equipos;
					$data['competencia']=$this->input->post('competenciaE');
					$data['categoria']=$this->input->post('categoriaE1');
					$this->load->view('main',$data);
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
		$data['competencias']=$this->Bases_model->getQuery($cadena);
		$this->load->view('equipoCategoria',$data);
	}
	public function registro(){
		$this->load->view('head');
		if($this->session->userdata('nivel')==1)
			$this->load->view('encabezado');
		if($this->session->userdata('nivel')==2)
			$this->load->view('encabezadoMaestros');
		$cadena = "select * from dojo order by nombre_dojo";
		$data['dojos']=$this->Bases_model->getQuery($cadena);
		$this->load->view('registro',$data);
	}


	public function guardar(){
		$this->load->view('head');
		$this->load->view('encabezado');
			if($this->input->post('img')){
				$img=$this->input->post('img');
				$competencia=$this->input->post('competencia');
				$categoria=$this->input->post('categoria');
				$data['competencia']=$competencia;
				$data['categoria']=$categoria;
				$data['img']=$img;
				$ruta='image/'.$competencia."-".$categoria.'.png';

				//echo $img." ".$categoria." ".$competencia;
				$this->load->view('guardar', $data);
				$cadena="insert into `sorteos` (`id_sorteo`, `id_competencia`, `id_categoria`, `competidores`) VALUES (NULL, '$competencia', '$categoria', '$ruta')";
				$this->Bases_model->guardarSorteo($cadena);
			}else {
				echo "no";
			}

	}

	public function verSorteos()
	{	$this->load->view('head');
		$this->load->view('header');
		if($this->session->userdata('nivel')==1)
			$this->load->view('encabezado');
		else{
			if($this->session->userdata('nivel')==2)
				$this->load->view('encabezadoMaestros');
				else {
						$this->load->view('encabezadoExterno');
				}
		}
		$cadena = "select * from competencia where id_Competencia<3";
		$data['competenciaI']=$this->Bases_model->getQuery($cadena);
		$cadena = "select * from competencia where id_Competencia>2";
		$data['competenciaE']=$this->Bases_model->getQuery($cadena);
		$this->load->view('consultaVer',$data);
		$this->load->view('footer');

	}

	public function verIndividual()
	{$this->load->view('head');
		if($this->session->userdata('nivel')==1)
			$this->load->view('encabezado');
		else{
			if($this->session->userdata('nivel')==2)
				$this->load->view('encabezadoMaestros');
				else {
						$this->load->view('encabezadoExterno');
				}
		}
	 $competencia=$this->input->post('competencia');
	 if($this->input->post('categoriaI1')!=null) {
		 $categoria=$this->input->post('categoriaI1');
	 }
	 if($this->input->post('categoriaE1')!=null) {
		 $categoria=$this->input->post('categoriaE1');
	 }

	 //echo $competencia." ".$categoria;
	 $data['competencia']=$competencia;
	 $data['categoria']=$categoria;
	 $cadena="select competidores from sorteos where id_competencia='$competencia' and id_categoria='$categoria'";
	 $data['ruta']=$this->Bases_model->verSorteoIndividual($cadena);
	 //echo $ruta;
	 if($data['ruta']==FALSE){
		 $data['message']='no hay sorteo guardado para esta categoria';
		 $data['heading']='Ver sorteos guardados';
		 $this->load->view('errors/cli/error_general',$data);
	 }else {
	 	$this->load->view('verIndividual',$data);
	}
}


}
