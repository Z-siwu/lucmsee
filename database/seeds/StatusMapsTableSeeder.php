<?php

use Illuminate\Database\Seeder;

class StatusMapsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            ['table_name' => 'users', 'column' => 'enable', 'status_code' => 'T', 'status_description' => '启用', 'remark' => '是否启用'],
            ['table_name' => 'users', 'column' => 'enable', 'status_code' => 'F', 'status_description' => '禁用', 'remark' => '是否启用'],
            ['table_name' => 'users', 'column' => 'is_admin', 'status_code' => 'T', 'status_description' => '是', 'remark' => '是否为后台管理员：可登录'],
            ['table_name' => 'users', 'column' => 'is_admin', 'status_code' => 'F', 'status_description' => '否', 'remark' => '是否为后台管理员：不可登录'],

            ['table_name' => 'logs', 'column' => 'type', 'status_code' => 'insert', 'status_description' => '新增', 'remark' => '新增数据'],
            ['table_name' => 'logs', 'column' => 'type', 'status_code' => 'update', 'status_description' => '修改', 'remark' => '修改数据'],
            ['table_name' => 'logs', 'column' => 'type', 'status_code' => 'destroy', 'status_description' => '删除', 'remark' => '删除数据'],
            ['table_name' => 'logs', 'column' => 'type', 'status_code' => 'error', 'status_description' => '错误日志', 'remark' => '错误日志记录'],
        ];
        \App\Models\StatusMap::insert($data);
    }
}