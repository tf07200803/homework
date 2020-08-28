<?php
defined('IN_PHPCMS') or exit('No permission resources.');
pc_base::load_sys_class('alert');
class index {
	function __construct() {
		$this->db = pc_base::load_model('announce_model');
	}

	public function init() {

	}

	/**
	 * 展示公告
	 */
	public function show() {
        $type=isset($_GET['webtype']) ? true : false;
		if(!isset($_GET['aid'])) {

            if($type){
                alert::message(1,L('illegal_operation'));
            }else{
                showmessage(L('illegal_operation'));
            }



		}
		$_GET['aid'] = intval($_GET['aid']);
		$where = '';
		$where .= "`aid`='".$_GET['aid']."'";
		$where .= " AND `passed`='1' AND (`endtime` >= '".date('Y-m-d')."' or `endtime`='0000-00-00')";
		$r = $this->db->get_one($where);
		if($r['aid']) {
			$this->db->update(array('hits'=>'+=1'), array('aid'=>$r['aid']));
			$template = $r['show_template'] ? $r['show_template'] : 'show';
			extract($r);
			$SEO = seo(get_siteid(), '', $title);
            if($type){
                alert::message(1,'',$r);
            }else{
                include template('announce', $template, $r['style']);
            }

		} else {
			showmessage(L('no_exists'));
		}
	}

	public function vue_lists(){
	    $list=pc_base::load_app_class('announce_tag','announce');
	    $data['limit']=10;
        $infor=$list->lists($data);
        alert::message(1,'',$infor);
    }
}
?>
