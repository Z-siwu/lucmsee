(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e0cbac0"],{2934:function(t,e,a){"use strict";a.d(e,"b",function(){return n}),a.d(e,"d",function(){return r}),a.d(e,"c",function(){return l}),a.d(e,"e",function(){return i}),a.d(e,"a",function(){return s});var o=a("66df"),n=function(t){return o["a"].request({url:"api/get_captcha",method:"get"})},r=function(t){return o["a"].request({url:"/api/common_get_table_status/"+t,method:"get"})},l=function(t){return o["a"].request({url:"/api/common_get_config_file_data",data:{config_item:t},method:"post"})},i=function(t,e,a){return o["a"].request({url:"/api/common_switch_enable",data:{id:t,table:e,value:a},method:"post"})},s=function(t,e,a,n){return o["a"].request({url:"/api/common_edit_talbe_column",data:{id:t,table:e,column:a,value:n},method:"post"})}},"9f69":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("Icon",{attrs:{type:t.type}}),a("span",{class:t.styleClass},[t._v(t._s(t.text))])],1)},n=[],r={props:{styleClass:{type:String,default:"color-light-gray"},type:{type:String,default:"md-information"},text:{type:String,default:"温馨提示..."}}},l=r,i=a("6691"),s=Object(i["a"])(l,o,n,!1,null,null,null);e["a"]=s.exports},d5da:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Row",{attrs:{gutter:24}},[a("Col",{attrs:{xs:2,lg:2}},[a("Button",{attrs:{type:"success",icon:"plus"},on:{click:function(e){return t.addBtn()}}},[t._v(t._s(t.$t("add")))])],1),a("Col",{attrs:{xs:3,lg:3}},[a("Select",{attrs:{placeholder:"请选择状态"},model:{value:t.searchForm.enable,callback:function(e){t.$set(t.searchForm,"enable",e)},expression:"searchForm.enable"}},[a("Option",{key:"",attrs:{value:""}},[t._v("全部")]),t._l(t.tableStatus.enable,function(e,o){return a("Option",{key:o,attrs:{value:o}},[t._v(t._s(e))])})],2)],1),a("Col",{attrs:{xs:3,lg:3}},[a("Select",{attrs:{placeholder:"请选择配置分组"},model:{value:t.searchForm.group,callback:function(e){t.$set(t.searchForm,"group",e)},expression:"searchForm.group"}},[a("Option",{key:"",attrs:{value:""}},[t._v("全部")]),t._l(t.tableStatus.config_group,function(e,o){return a("Option",{key:o,attrs:{value:o}},[t._v(t._s(e.title))])})],2)],1),a("Col",{staticClass:"hidden-mobile",attrs:{xs:6,lg:3}},[a("Input",{attrs:{icon:"search",placeholder:"请输入标识或标题搜索..."},model:{value:t.searchForm.table_name_or_flag,callback:function(e){t.$set(t.searchForm,"table_name_or_flag",e)},expression:"searchForm.table_name_or_flag"}})],1),a("Col",{attrs:{xs:3,lg:3}},[a("Button",{attrs:{type:"primary",icon:"ios-search"},on:{click:function(e){return t.getTableDataExcute(t.feeds.current_page)}}},[t._v(t._s(t.$t("search"))+"\n      ")])],1)],1),a("br"),a("Row",[t.tableLoading?a("div",{staticClass:"demo-spin-container"},[a("Spin",{attrs:{fix:""}},[a("Icon",{staticClass:"spin-icon-load",attrs:{type:"load-c",size:"18"}}),a("div",[t._v(t._s(t.$t("table_loading")))])],1)],1):t._e(),a("Table",{attrs:{size:"small",columns:t.columns,data:t.feeds.data},on:{"on-sort-change":t.onSortChange},scopedSlots:t._u([{key:"config_group",fn:function(e){var a=e.row;e.index;return[t._v("\n        "+t._s(t.tableStatus.config_group[a.config_group]["title"])+"\n      ")]}},{key:"enable",fn:function(e){var o=e.row,n=e.index;return[a("iSwitch",{attrs:{slot:"open",type:"primary",value:"T"===o.enable},on:{"on-change":function(e){return t.switchChange(o,n)}},slot:"open"})]}},{key:"action",fn:function(e){var o=e.row,n=e.index;return[a("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"success",size:"small"},on:{click:function(e){return t.tableButtonEdit(o,n)}}},[t._v(t._s(t.$t("edit"))+"\n        ")]),a("Poptip",{attrs:{confirm:"",title:"您确定要删除ID为："+o.id+" 的记录？"},on:{"on-ok":function(e){return t.tableButtonDestroyOk(o,n)}}},[a("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"error",size:"small"}},[t._v(t._s(t.$t("destroy")))])],1)]}}])})],1),t.addModal.show?a("add-component",{attrs:{config_group:t.tableStatus.config_group},on:{"on-add-modal-success":function(e){return t.getTableDataExcute(t.feeds.current_page)},"on-add-modal-hide":t.addModalHide}}):t._e(),t.editModal.show?a("edit-component",{attrs:{config_group:t.tableStatus.config_group,"modal-id":t.editModal.id},on:{"on-edit-modal-success":function(e){return t.getTableDataExcute(t.feeds.current_page)},"on-edit-modal-hide":t.editModalHide}}):t._e()],1)},n=[],r=a("66df"),l=function(t,e,a){return r["a"].request({url:"/api/admin/system_configs",params:{page:t,per_page:e,search_data:JSON.stringify(a)},method:"get"})},i=function(t){return r["a"].request({url:"/api/admin/system_configs",data:t,method:"post"})},s=function(t,e){return r["a"].request({url:"/api/admin/system_configs/"+e,data:t,method:"patch"})},c=function(t){return r["a"].request({url:"/api/admin/system_configs/"+t,method:"get"})},u=function(t){return r["a"].request({url:"/api/admin/system_configs/"+t,method:"delete"})},d=function(){return r["a"].request({url:"/api/admin/system_configs/get_system_config_group",method:"get"})},f=a("90de"),m=a("2934"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Modal",{attrs:{closable:!1,"mask-closable":!1,width:"600"},model:{value:t.modalShow,callback:function(e){t.modalShow=e},expression:"modalShow"}},[a("p",{attrs:{slot:"header"},slot:"header"},[t._v(t._s(t.$t("add")))]),a("Form",{ref:"formData",attrs:{model:t.formData,rules:t.rules,"label-position":"left","label-width":100}},[a("FormItem",{attrs:{label:"分组：",prop:"config_group"}},[a("Select",{attrs:{filterable:"",placeholder:"请选择配置分组"},model:{value:t.formData.config_group,callback:function(e){t.$set(t.formData,"config_group",e)},expression:"formData.config_group"}},t._l(t.config_group,function(e,o){return a("Option",{key:o,attrs:{value:o}},[t._v(t._s(e.title)+" ")])}),1)],1),a("FormItem",{attrs:{label:"配置标识：",prop:"flag"}},[a("Input",{attrs:{placeholder:"请输入配置标识"},model:{value:t.formData.flag,callback:function(e){t.$set(t.formData,"flag",e)},expression:"formData.flag"}}),a("input-helper",{attrs:{text:"英文字母与下划线组成"}})],1),a("FormItem",{attrs:{label:"配置标题：",prop:"title"}},[a("Input",{attrs:{placeholder:"请输入"},model:{value:t.formData.title,callback:function(e){t.$set(t.formData,"title",e)},expression:"formData.title"}})],1),a("FormItem",{attrs:{label:"配置值："}},[a("Input",{attrs:{type:"textarea",rows:3,placeholder:"请输入"},model:{value:t.formData.value,callback:function(e){t.$set(t.formData,"value",e)},expression:"formData.value"}})],1),a("FormItem",{attrs:{label:"是否启用："}},[a("RadioGroup",{model:{value:t.formData.enable,callback:function(e){t.$set(t.formData,"enable",e)},expression:"formData.enable"}},[a("Radio",{attrs:{label:"F"}},[t._v("禁用")]),a("Radio",{attrs:{label:"T"}},[t._v("启用")])],1)],1),a("FormItem",{attrs:{label:"描述："}},[a("Input",{attrs:{type:"textarea",rows:3,placeholder:"请输入"},model:{value:t.formData.description,callback:function(e){t.$set(t.formData,"description",e)},expression:"formData.description"}})],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"text"},on:{click:t.cancel}},[t._v(t._s(t.$t("cancel")))]),a("Button",{attrs:{type:"primary",loading:t.saveLoading},on:{click:t.addExcute}},[t._v(t._s(t.$t("save"))+" ")])],1)],1)],1)},g=[],_=a("9f69"),h={components:{InputHelper:_["a"]},props:{config_group:{type:Object,value:[]}},data:function(){return{modalShow:!0,saveLoading:!1,formData:{flag:"",title:"",config_group:"",value:"",description:"",enable:"T"},rules:{flag:[{required:!0,message:"请填写配置标识",trigger:"blur"}],title:[{required:!0,message:"请填写配置标题",trigger:"blur"}],config_group:[{required:!0,message:"请选择配置分组",trigger:"blur"}]}}},methods:{addExcute:function(){var t=this;t.$refs.formData.validate(function(e){e&&(t.saveLoading=!0,i(t.formData).then(function(e){t.saveLoading=!1,t.modalShow=!1,t.$emit("on-add-modal-success"),t.$emit("on-add-modal-hide"),t.$Notice.success({title:e.message})},function(e){t.saveLoading=!1}))})},cancel:function(){this.modalShow=!1,this.$emit("on-add-modal-hide")}}},b=h,v=a("6691"),y=Object(v["a"])(b,p,g,!1,null,null,null),D=y.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Modal",{attrs:{closable:!1,"mask-closable":!1,width:"600"},model:{value:t.modalShow,callback:function(e){t.modalShow=e},expression:"modalShow"}},[a("p",{attrs:{slot:"header"},slot:"header"},[t._v(t._s(t.$t("edit")))]),a("Form",{ref:"formData",attrs:{model:t.formData,rules:t.rules,"label-position":"left","label-width":100}},[a("FormItem",{attrs:{label:"分组：",prop:"config_group"}},[a("Select",{attrs:{filterable:"",placeholder:"请选择配置分组"},model:{value:t.formData.config_group,callback:function(e){t.$set(t.formData,"config_group",e)},expression:"formData.config_group"}},t._l(t.config_group,function(e,o){return a("Option",{key:o,attrs:{value:o}},[t._v(t._s(e.title)+" ")])}),1)],1),a("FormItem",{attrs:{label:"配置标识：",prop:"flag"}},[a("Input",{attrs:{placeholder:"请输入配置标识"},model:{value:t.formData.flag,callback:function(e){t.$set(t.formData,"flag",e)},expression:"formData.flag"}}),a("input-helper",{attrs:{text:"英文字母与下划线组成"}})],1),a("FormItem",{attrs:{label:"配置标题：",prop:"title"}},[a("Input",{attrs:{placeholder:"请输入"},model:{value:t.formData.title,callback:function(e){t.$set(t.formData,"title",e)},expression:"formData.title"}})],1),a("FormItem",{attrs:{label:"配置值："}},[a("Input",{attrs:{type:"textarea",rows:3,placeholder:"请输入"},model:{value:t.formData.value,callback:function(e){t.$set(t.formData,"value",e)},expression:"formData.value"}})],1),a("FormItem",{attrs:{label:"是否启用："}},[a("RadioGroup",{model:{value:t.formData.enable,callback:function(e){t.$set(t.formData,"enable",e)},expression:"formData.enable"}},[a("Radio",{attrs:{label:"F"}},[t._v("禁用")]),a("Radio",{attrs:{label:"T"}},[t._v("启用")])],1)],1),a("FormItem",{attrs:{label:"描述："}},[a("Input",{attrs:{type:"textarea",rows:3,placeholder:"请输入"},model:{value:t.formData.description,callback:function(e){t.$set(t.formData,"description",e)},expression:"formData.description"}})],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"text"},on:{click:t.cancel}},[t._v(t._s(t.$t("cancel")))]),a("Button",{attrs:{type:"primary",loading:t.saveLoading},on:{click:t.editExcute}},[t._v(t._s(t.$t("save"))+" ")])],1),!0===t.spinLoading?a("div",{staticClass:"demo-spin-container"},[a("Spin",{attrs:{fix:""}},[a("Icon",{staticClass:"spin-icon-load",attrs:{type:"load-c",size:"18"}}),a("div",[t._v(t._s(t.$t("table_loading")))])],1)],1):t._e()],1)],1)},k=[],w=(a("d4d5"),{components:{InputHelper:_["a"]},props:{modalId:{type:Number,default:0},config_group:{type:Object,value:[]}},data:function(){return{modalShow:!0,saveLoading:!1,spinLoading:!0,formData:{flag:"",title:"",config_group:"",value:"",description:"",enable:"T"},rules:{flag:[{required:!0,message:"请填写配置标识",trigger:"blur"}],title:[{required:!0,message:"请填写配置标题",trigger:"blur"}],config_group:[{required:!0,message:"请选择配置分组",trigger:"blur"}]}}},mounted:function(){this.modalId>0&&this.getInfoByIdExcute()},methods:{getInfoByIdExcute:function(){var t=this;c(t.modalId).then(function(e){var a=e.data;t.formData={id:a.id,config_group:a.config_group,flag:a.flag,title:a.title,value:a.value,enable:a.enable,description:a.description},t.spinLoading=!1})},editExcute:function(){var t=this;t.$refs.formData.validate(function(e){e&&(t.saveLoading=!0,s(t.formData,t.formData.id).then(function(e){t.saveLoading=!1,t.modalShow=!1,t.$emit("on-edit-modal-success"),t.$emit("on-edit-modal-hide"),t.$Notice.success({title:e.message})},function(e){t.saveLoading=!1}))})},cancel:function(){this.modalShow=!1,this.$emit("on-edit-modal-hide")}}}),$=w,S=Object(v["a"])($,x,k,!1,null,null,null),I=S.exports,F={components:{AddComponent:D,EditComponent:I,InputHelper:_["a"]},data:function(){return{searchForm:{order_by:"created_at,desc",table_name_or_flag:"",enable:"",group:""},notRealySortKey:[],tableStatus:{enable:[],config_group:[]},tableLoading:!1,feeds:{data:[],total:0,current_page:1,per_page:10},addBtn:function(){this.addModal.show=!0},addModal:{show:!1},editModal:{show:!1,id:0},columns:[{title:"ID",key:"id",sortable:"customer",minWidth:100},{title:"配置分组",minWidth:60,slot:"config_group"},{title:"配置标识",key:"flag",minWidth:100},{title:"配置标题",key:"title",minWidth:100},{title:"配置值",key:"value",minWidth:150,tooltip:!0},{title:"启用状态",key:"enable",minWidth:80,slot:"enable"},{title:"创建时间",key:"created_at",sortable:!0,minWidth:150},{title:"修改时间",key:"updated_at",sortable:!0,minWidth:150},{title:"操作",key:"",minWidth:100,slot:"action"}]}},created:function(){var t=this;t.getGroupExcute()},methods:{getGroupExcute:function(){var t=this;d(t.searchForm).then(function(e){var a=e.data;t.tableStatus.config_group=a.config_group,t.tableStatus.enable=a.enable,t.getTableDataExcute(t.feeds.current_page)},function(t){})},getTableDataExcute:function(t){var e=this;e.tableLoading=!0,e.feeds.current_page=t,l(t,e.feeds.per_page,e.searchForm).then(function(t){e.feeds.data=t.data,e.feeds.total=0,e.tableLoading=!1},function(t){e.tableLoading=!1})},addModalHide:function(){this.addModal.show=!1},editModalHide:function(){this.editModal.show=!1},onSortChange:function(t){var e=t.column.key+","+t.order;Object(f["i"])(t.column.key,this.notRealySortKey)||(this.searchForm.order_by=e,this.getTableDataExcute(this.feeds.current_page))},tableButtonEdit:function(t,e){this.editModal.show=!0,this.editModal.id=t.id},tableButtonDestroyOk:function(t,e){var a=this;u(t.id).then(function(t){a.feeds.data.splice(e,1),a.$Notice.success({title:t.message})})},switchChange:function(t,e){var a=this,o="T";"T"===a.feeds.data[e].enable&&(o="F"),Object(m["e"])(a.feeds.data[e].id,"system_configs",o).then(function(t){a.feeds.data[e].enable=o,a.$Notice.success({title:t.message})}).catch(function(t){a.getTableDataExcute(a.feeds.current_page)})}}},E=F,C=Object(v["a"])(E,o,n,!1,null,null,null);e["default"]=C.exports}}]);