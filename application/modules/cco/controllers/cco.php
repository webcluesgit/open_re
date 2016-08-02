<?php defined('BASEPATH') || exit('No direct script access allowed');

/**
 * Cco controller
 */
class Cco extends Front_Controller
{
    protected $permissionCreate = 'Cco.Cco.Create';
    protected $permissionDelete = 'Cco.Cco.Delete';
    protected $permissionEdit = 'Cco.Cco.Edit';
    protected $permissionView = 'Cco.Cco.View';

    /**
     * Constructor
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
        $this->load->library('users/auth');
        //$this->auth->restrict($this->permissionView);
        $this->load->helper('application');
        $this->load->library('Template');
        $this->load->library('Assets');
        $this->lang->load('application');
        $this->load->library('events');
        $this->load->library('form_validation');
        $this->load->helper('form');


        $this->load->model('ecp/ecp_model');
        $this->load->model('ishop/ishop_model');
        $this->load->model('esp/esp_model');

        $this->set_current_user();


        $this->lang->load('cco');
        Assets::add_module_js('cco', 'cco.js');
    }

    /**
     * Display a list of CCO data.
     *
     * @return void
     */
    public function index()
    {
        Template::render();
    }

    public function dialpad()
    {
        Template::render();
    }

    public function allocation()
    {
        Template::render();
    }

    public function activity()
    {
        Template::render();
    }

}