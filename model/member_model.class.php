<?php
defined('IN_PHPCMS') or exit('No permission resources.');
if(!defined('CACHE_MODEL_PATH')) define('CACHE_MODEL_PATH',PHPCMS_PATH.'caches'.DIRECTORY_SEPARATOR.'caches_model'.DIRECTORY_SEPARATOR.'caches_data'.DIRECTORY_SEPARATOR);

pc_base::load_sys_class('model', '', 0);
pc_base::load_sys_class('alert');
class member_model extends model {
	public function __construct() {
		$this->db_config = pc_base::load_config('database');
		$this->db_setting = 'default';
		$this->table_name = 'member';
		parent::__construct();
	}

	/**
	 * 重置模型操作表表
	 * @param string $modelid 模型id
	 */
	public function set_model($modelid = '') {
		if($modelid) {
			$model = getcache('member_model', 'commons');
			if(isset($model[$modelid])) {
				$this->table_name = $this->db_tablepre.$model[$modelid]['tablename'];
			} else {
				$this->table_name = $this->db_tablepre.$model[10]['tablename'];
			}
		} else {
			$this->table_name = $this->db_tablepre.'member';
		}
	}

    public function finish(){
        $userid = param::get_cookie('_userid');
        $r = $this->get_one(array('userid'=>$userid));
        if($r){
            $yesarr['finish'] = 1;
            $this->update($yesarr, array('userid'=>$userid));
		}else{
            alert::message(-1,'寫入結束失敗');
		}

		return true;


    }



}
?>
