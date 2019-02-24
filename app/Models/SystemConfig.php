<?php

namespace App\Models;


class SystemConfig extends Model
{

    protected $fillable = [
        'flag', 'title', 'config_group','value','weight', 'enable', 'description'
    ];

    public function storeAction($input)
    {
        try {
            $input['value'] = str_replace([',', '，', '，'], [',', ',', ','], $input['value']);

            $this->fill($input);
            $this->save();
            return $this->baseSucceed([], '操作成功');
        } catch (\Exception $e) {
            throw $e;
            return $this->baseFailed('内部错误');
        }
    }
}
