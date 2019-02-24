<?php

namespace App\Http\Controllers\Admin;

use App\Models\SystemConfig;
use App\Traits\TableStatusTrait;
use App\Validates\SystemConfigValidate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;

class SystemConfigsController extends AdminController
{
    use TableStatusTrait;

    public function __construct()
    {
        parent::__construct();
        $this->middleware('auth:api');
    }

    public function list(Request $request, SystemConfig $model)
    {
        $search_data = json_decode($request->get('search_data'), true);
        $table_name_or_flag = isset_and_not_empty($search_data, 'table_name_or_flag');
        if ($table_name_or_flag) {
            $model = $model->columnLikeSearch('title', '%'.$table_name_or_flag)->orWhere('flag','like','%'.$table_name_or_flag.'%');
        }
        $enable = isset_and_not_empty($search_data, 'enable');
        if ($enable) {
            $model = $model->columnEqualSearch('enable',$enable);
        }
        $group = isset_and_not_empty($search_data, 'group');
        if ($group) {
            $model = $model->columnEqualSearch('config_group', $group);
        }
        $order_by = isset_and_not_empty($search_data, 'order_by');
        if ($order_by) {
            $order_by = explode(',', $order_by);
            $model = $model->orderBy($order_by[0], $order_by[1]);
        }

        return $this->success($model->get());
    }

    /**
     * 获取系统配置分组
     * @return mixed
     */
    public function getSystemConfigGroup()
    {
        return $this->success([
            'config_group' => Config::get('lu.system_config_group_list'),
            'enable' => $this->getBaseStatus('system_configs', 'enable')
        ]);
    }

    public function show(Systemconfig $model)
    {
        return $this->success($model);
    }

    public function store(Request $request, SystemConfig $model, SystemConfigValidate $validate)
    {
        $request_data = $request->all();
        $request_data['description'] = strval($request_data['description']);
        $rest_validate = $validate->storeValidate($request_data);

        if ($rest_validate['status'] === false) return $this->failed($rest_validate['message']);


        $res = $model->storeAction($request_data);
        if ($res['status'] === true) return $this->message($res['message']);
        return $this->failed($res['message']);
    }


    public function update(Request $request, SystemConfig $model, SystemConfigValidate $validate)
    {
        $request_data = $request->all();
        $request_data['description'] = strval($request_data['description']);
        $rest_validate = $validate->updateValidate($request_data, $model->id);

        if ($rest_validate['status'] === false) return $this->failed($rest_validate['message']);


        $res = $model->storeAction($request_data);
        if ($res['status'] === true) return $this->message($res['message']);
        return $this->failed($res['message']);
    }

    public function destroy(SystemConfig $model)
    {
        $model->delete();
        return $this->message('数据删除成功');
    }
}
