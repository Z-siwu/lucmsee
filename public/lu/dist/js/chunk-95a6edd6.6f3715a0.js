(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-95a6edd6"],{"6a8f":function(t,a,e){"use strict";var o=e("c5a2"),n=e.n(o);n.a},"8f8b":function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Row",{attrs:{gutter:24}},[e("Col",{attrs:{xs:7,lg:11}},[e("Button",{attrs:{type:"success",icon:"plus"},on:{click:function(a){return t.addBtn()}}},[t._v(t._s(t.$t("add")))])],1),e("Col",{attrs:{xs:3,lg:3}},[e("Select",{attrs:{placeholder:"请选择状态"},model:{value:t.searchForm.enable,callback:function(a){t.$set(t.searchForm,"enable",a)},expression:"searchForm.enable"}},[e("Option",{key:"",attrs:{value:""}},[t._v("全部")]),t._l(t.tableStatus.enable,function(a,o){return e("Option",{key:o,attrs:{value:o}},[t._v(t._s(a))])})],2)],1),e("Col",{attrs:{xs:3,lg:3}},[e("Select",{attrs:{placeholder:"是否能登录后台"},model:{value:t.searchForm.is_admin,callback:function(a){t.$set(t.searchForm,"is_admin",a)},expression:"searchForm.is_admin"}},[e("Option",{key:"",attrs:{value:""}},[t._v("全部")]),t._l(t.tableStatus.is_admin,function(a,o){return e("Option",{key:o,attrs:{value:o}},[t._v(t._s(a))])})],2)],1),e("Col",{staticClass:"hidden-mobile",attrs:{xs:6,lg:3}},[e("Input",{attrs:{icon:"search",placeholder:"请输入邮箱搜索..."},model:{value:t.searchForm.email,callback:function(a){t.$set(t.searchForm,"email",a)},expression:"searchForm.email"}})],1),e("Col",{attrs:{xs:3,lg:3}},[e("Button",{attrs:{type:"primary",icon:"ios-search"},on:{click:function(a){return t.getTableDataExcute(t.feeds.current_page)}}},[t._v(t._s(t.$t("search")))])],1)],1),e("br"),e("Row",[t.tableLoading?e("div",{staticClass:"demo-spin-container"},[e("Spin",{attrs:{fix:""}},[e("Icon",{staticClass:"spin-icon-load",attrs:{type:"load-c",size:"18"}}),e("div",[t._v(t._s(t.$t("table_loading")))])],1)],1):t._e(),e("Table",{attrs:{border:"",columns:t.columns,data:t.feeds.data},on:{"on-sort-change":t.onSortChange},scopedSlots:t._u([{key:"avatar",fn:function(a){var o=a.row;a.index;return[e("div",{staticClass:"text-center"},[o.avatar?e("Avatar",{staticClass:"fancybox",attrs:{size:"large",src:o.avatar,href:o.avatar,title:"头像",alt:"头像"}}):e("Avatar",{staticStyle:{color:"#f56a00","background-color":"#fde3cf"},attrs:{size:"large"}},[t._v(t._s(o.real_name.substr(0,1)))])],1)]}},{key:"is_admin",fn:function(a){var o=a.row;a.index;return["T"===o.is_admin?e("Tag",{attrs:{color:"green"}},[t._v("可登录")]):e("Tag",{attrs:{color:"red"}},[t._v("不可登录")])]}},{key:"enable",fn:function(a){var o=a.row,n=a.index;return[e("iSwitch",{attrs:{slot:"open",type:"primary",value:"T"===o.enable},on:{"on-change":function(a){return t.switchChange(o,n)}},slot:"open"})]}},{key:"action",fn:function(a){var o=a.row,n=a.index;return[e("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"success",size:"small"},on:{click:function(a){return t.tableButtonEdit(o,n)}}},[t._v(t._s(t.$t("edit")))]),e("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"info",size:"small"},on:{click:function(a){return t.tableButtonGiveUserRoles(o,n)}}},[t._v(t._s(t.$t("role")))]),e("Poptip",{attrs:{confirm:"",title:"您确定要删除ID为："+o.id+" 的记录？"},on:{"on-ok":function(a){return t.tableButtonDestroyOk(o,n)}}},[e("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"error",size:"small"}},[t._v(t._s(t.$t("destroy")))])],1)]}}])}),e("div",{staticStyle:{margin:"10px",overflow:"hidden"}},[e("div",{staticStyle:{float:"right"}},[e("Page",{staticClass:"paging",attrs:{total:t.feeds.total,current:t.feeds.current_page,"page-size":t.feeds.per_page,"show-elevator":"","show-total":"","show-sizer":""},on:{"on-change":t.handleOnPageChange,"on-page-size-change":t.onPageSizeChange}})],1)])],1),e("Modal",{attrs:{closable:!1,"mask-closable":!1,width:"800"},model:{value:t.roleModal.show,callback:function(a){t.$set(t.roleModal,"show",a)},expression:"roleModal.show"}},[e("h3",{staticStyle:{color:"#2D8CF0"},attrs:{slot:"header"},slot:"header"},[t._v("分配角色")]),t.roleModal.show?e("Transfer",{attrs:{data:t.roleModal.allRoles,"target-keys":t.roleModal.hasRoles,"render-format":t.renderFormat,operations:["移除角色","添加角色"],"list-style":t.roleModal.listStyle,filterable:""},on:{"on-change":t.handleTransferChange}}):t._e(),e("div",{attrs:{slot:"footer"},slot:"footer"},[e("Button",{attrs:{type:"text"},on:{click:t.cancelRoleModal}},[t._v("取消")]),e("Button",{attrs:{type:"primary"},on:{click:t.giveUserRoleExcute}},[t._v("保存 ")])],1)],1),t.addModal.show?e("add-component",{attrs:{tableStatus_is_admin:t.tableStatus.is_admin},on:{"on-add-modal-success":function(a){return t.getTableDataExcute(t.feeds.current_page)},"on-add-modal-hide":t.addModalHide}}):t._e(),t.editModal.show?e("edit-component",{attrs:{tableStatus_is_admin:t.tableStatus.is_admin,"modal-id":t.editModal.id},on:{"on-edit-modal-success":function(a){return t.getTableDataExcute(t.feeds.current_page)},"on-edit-modal-hide":t.editModalHide}}):t._e()],1)},n=[],i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Modal",{attrs:{closable:!1,"mask-closable":!1,width:"600"},model:{value:t.modalShow,callback:function(a){t.modalShow=a},expression:"modalShow"}},[e("p",{attrs:{slot:"header"},slot:"header"},[t._v(t._s(t.$t("add")))]),e("Form",{ref:"formData",attrs:{model:t.formData,rules:t.rules,"label-position":"left","label-width":100}},[e("FormItem",{attrs:{label:"头像："}},[e("upload",{attrs:{"upload-config":t.imguploadConfig},on:{"on-upload-change":t.uploadChange},model:{value:t.formData.avatar,callback:function(a){t.$set(t.formData,"avatar",a)},expression:"formData.avatar"}})],1),e("FormItem",{attrs:{label:"真实姓名：",prop:"real_name"}},[e("Input",{model:{value:t.formData.real_name,callback:function(a){t.$set(t.formData,"real_name",a)},expression:"formData.real_name"}})],1),e("FormItem",{attrs:{label:"昵称：",prop:"nickname"}},[e("Input",{model:{value:t.formData.nickname,callback:function(a){t.$set(t.formData,"nickname",a)},expression:"formData.nickname"}})],1),e("FormItem",{attrs:{label:"邮箱："}},[e("Input",{model:{value:t.formData.email,callback:function(a){t.$set(t.formData,"email",a)},expression:"formData.email"}})],1),e("FormItem",{attrs:{label:"登录密码：",prop:"password"}},[e("Input",{attrs:{type:"password"},model:{value:t.formData.password,callback:function(a){t.$set(t.formData,"password",a)},expression:"formData.password"}})],1),e("FormItem",{attrs:{label:"登录密码确认：",prop:"password_confirmation"}},[e("Input",{attrs:{type:"password"},model:{value:t.formData.password_confirmation,callback:function(a){t.$set(t.formData,"password_confirmation",a)},expression:"formData.password_confirmation"}})],1),e("FormItem",{attrs:{label:"可登录后台："}},[e("RadioGroup",{model:{value:t.formData.is_admin,callback:function(a){t.$set(t.formData,"is_admin",a)},expression:"formData.is_admin"}},t._l(t.tableStatus_is_admin,function(a,o){return e("Radio",{key:o,attrs:{label:o}},[t._v(t._s(a))])}),1)],1)],1),e("div",{attrs:{slot:"footer"},slot:"footer"},[e("Button",{attrs:{type:"text"},on:{click:t.cancel}},[t._v(t._s(t.$t("cancel")))]),e("Button",{attrs:{type:"primary",loading:t.saveLoading},on:{click:t.addExcute}},[t._v(t._s(t.$t("save"))+" ")])],1)],1)],1)},r=[],s=e("c24f"),l=e("c13c"),d={props:["tableStatus_is_admin"],components:{Upload:l["a"]},data:function(){var t=this,a=function(a,e,o){""===e?o(new Error("请输入登录密码")):(""!==t.formData.password&&t.$refs.formData.validateField("password_confirmation"),o())},e=function(a,e,o){""===e?o(new Error("请输入确认密码")):e!==t.formData.password?o(new Error("两次密码不一致 ")):o()};return{modalShow:!0,saveLoading:!1,formData:{nickname:"",real_name:"",email:"",is_admin:"F",password:"",password_confirmation:"",avatar:{attachment_id:0,url:""}},imguploadConfig:{headers:{Authorization:window.access_token},format:["jpg","jpeg","png","gif"],max_size:500,upload_url:window.uploadUrl.uploadToLocaleUrl+"/pic/avatar",file_name:"file",multiple:!1,file_num:1,data:{},default_list:[]},rules:{real_name:[{required:!0,message:"请填写真实姓名",trigger:"blur"},{type:"string",min:2,message:"真实姓名至少要 2 个字符",trigger:"blur"}],email:[{required:!0,message:"请填写邮箱",trigger:"blur"},{type:"email",message:"邮箱格式不正确",trigger:"blur"}],password:[{validator:a,trigger:"blur"}],password_confirmation:[{validator:e,trigger:"blur"}]}}},methods:{addExcute:function(){var t=this;t.$refs.formData.validate(function(a){a?(t.saveLoading=!0,Object(s["a"])(t.formData).then(function(a){t.saveLoading=!1,t.modalShow=!1,t.$emit("on-add-modal-success"),t.$emit("on-add-modal-hide"),t.$Notice.success({title:a.message})},function(a){t.saveLoading=!1})):t.saveLoading=!1})},cancel:function(){this.modalShow=!1,this.$emit("on-add-modal-hide")},editContentChange:function(t,a){},uploadChange:function(t,a){}}},c=d,u=e("17cc"),m=Object(u["a"])(c,i,r,!1,null,null,null),f=m.exports,p=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Modal",{attrs:{closable:!1,"mask-closable":!1,width:"600"},model:{value:t.modalShow,callback:function(a){t.modalShow=a},expression:"modalShow"}},[e("p",{attrs:{slot:"header"},slot:"header"},[t._v("修改")]),e("Form",{ref:"formData",attrs:{model:t.formData,rules:t.rules,"label-position":"left","label-width":100}},[e("FormItem",{attrs:{label:"头像："}},[t.formdataFinished?e("upload",{attrs:{"upload-config":t.imguploadConfig},on:{"on-upload-change":t.uploadChange},model:{value:t.formData.avatar,callback:function(a){t.$set(t.formData,"avatar",a)},expression:"formData.avatar"}}):t._e()],1),e("FormItem",{attrs:{label:"真实姓名：",prop:"real_name"}},[e("Input",{model:{value:t.formData.real_name,callback:function(a){t.$set(t.formData,"real_name",a)},expression:"formData.real_name"}})],1),e("FormItem",{attrs:{label:"昵称：",prop:"nickname"}},[e("Input",{model:{value:t.formData.nickname,callback:function(a){t.$set(t.formData,"nickname",a)},expression:"formData.nickname"}})],1),e("FormItem",{attrs:{label:"邮箱："}},[e("Input",{model:{value:t.formData.email,callback:function(a){t.$set(t.formData,"email",a)},expression:"formData.email"}})],1),e("FormItem",{attrs:{label:"登录密码：",prop:"password"}},[e("Input",{attrs:{type:"password"},model:{value:t.formData.password,callback:function(a){t.$set(t.formData,"password",a)},expression:"formData.password"}})],1),e("FormItem",{attrs:{label:"登录密码确认：",prop:"password_confirmation"}},[e("Input",{attrs:{type:"password"},model:{value:t.formData.password_confirmation,callback:function(a){t.$set(t.formData,"password_confirmation",a)},expression:"formData.password_confirmation"}})],1),e("FormItem",{attrs:{label:"可登录后台："}},[e("RadioGroup",{model:{value:t.formData.is_admin,callback:function(a){t.$set(t.formData,"is_admin",a)},expression:"formData.is_admin"}},t._l(t.tableStatus_is_admin,function(a,o){return e("Radio",{key:o,attrs:{label:o}},[t._v(t._s(a))])}),1)],1)],1),e("div",{attrs:{slot:"footer"},slot:"footer"},[e("Button",{attrs:{type:"text"},on:{click:t.cancel}},[t._v("取消")]),e("Button",{attrs:{type:"primary",loading:t.saveLoading},on:{click:t.editExcute}},[t._v("保存\n      ")])],1),!0===t.spinLoading?e("div",{staticClass:"demo-spin-container"},[e("Spin",{attrs:{fix:""}},[e("Icon",{staticClass:"spin-icon-load",attrs:{type:"load-c",size:"18"}}),e("div",[t._v(t._s(t.$t("table_loading")))])],1)],1):t._e()],1)],1)},h=[],g=(e("b06f"),{components:{Upload:l["a"]},props:{modalId:{type:Number,default:0},tableStatus_is_admin:""},data:function(){return{modalShow:!0,saveLoading:!1,spinLoading:!0,formData:{nickname:"",real_name:"",email:"",is_admin:"F",password:"",password_confirmation:"",avatar:{attachment_id:0,url:""}},formdataFinished:!1,imguploadConfig:{headers:{Authorization:window.access_token},format:["jpg","jpeg","png","gif"],max_size:500,upload_url:window.uploadUrl.imageUploadToFileSystemUrl+"/pic/avatar",file_name:"file",multiple:!1,file_num:1,data:{},default_list:[]},rules:{real_name:[{required:!0,message:"请填写真实姓名",trigger:"blur"},{type:"string",min:2,message:"真实姓名至少要 2 个字符",trigger:"blur"}],email:[{required:!0,message:"请填写邮箱",trigger:"blur"},{type:"email",message:"邮箱格式不正确",trigger:"blur"}]}}},mounted:function(){this.modalId>0&&this.getInfoByIdExcute()},methods:{getInfoByIdExcute:function(){var t=this;Object(s["d"])(t.modalId).then(function(a){var e=a.data;t.formData={id:e.id,real_name:e.real_name,nickname:e.nickname,email:e.email,is_admin:e.is_admin,password:"",password_confirmation:"",avatar:{attachment_id:0,url:e.avatar}},t.imguploadConfig.default_list=[t.formData.avatar],t.formdataFinished=!0,t.spinLoading=!1})},editExcute:function(){var t=this,a=this;a.$refs.formData.validate(function(e){e?(a.saveLoading=!0,Object(s["c"])(a.formData,a.modalId).then(function(e){a.saveLoading=!1,a.modalShow=!1,a.$emit("on-edit-modal-success"),t.$emit("on-edit-modal-hide"),a.$Notice.success({title:e.message})},function(t){a.saveLoading=!1})):a.saveLoading=!1})},cancel:function(){this.modalShow=!1,this.$emit("on-edit-modal-hide")},editContentChange:function(t,a){},uploadChange:function(t,a){}}}),_=g,v=Object(u["a"])(_,p,h,!1,null,null,null),b=v.exports,w=e("cc5e"),y=e("2934"),x={components:{AddComponent:f,EditComponent:b},data:function(){return{searchForm:{order_by:"created_at,desc",is_admin:"",enable:""},notRealySortKey:[],tableLoading:!1,tableStatus:{enable:[],is_admin:[]},feeds:{data:[],total:0,current_page:1,per_page:10},roleModal:{id:0,allRoles:[],hasRoles:[],show:!1,saveLoading:!1,listStyle:{width:"250px",height:"300px"}},addModal:{show:!1},editModal:{show:!1,id:0},columns:[{title:"ID",key:"id",sortable:"customer",minWidth:100},{title:"姓名",key:"real_name",minWidth:100},{title:"昵称",key:"nickname",minWidth:100},{title:"头像",key:"",width:80,slot:"avatar"},{title:"邮箱",key:"email",minWidth:150},{title:"后台权限",minWidth:80,slot:"is_admin"},{title:"启用状态",key:"enable",minWidth:80,slot:"enable"},{title:"创建时间",key:"created_at",minWidth:150},{title:"最近登录时间",key:"last_login_at",sortable:"customer",minWidth:150},{title:"操作",key:"",minWidth:200,slot:"action"}]}},created:function(){var t=this;t.getTableStatusExcute("users"),t.getAllRoleExcute()},methods:{handleOnPageChange:function(t){this.getTableDataExcute(t)},onPageSizeChange:function(t){this.feeds.per_page=t,this.getTableDataExcute(this.feeds.current_page)},getTableStatusExcute:function(t){var a=this;Object(y["c"])(t).then(function(t){a.tableStatus.enable=t.data.enable,a.tableStatus.is_admin=t.data.is_admin,a.getTableDataExcute(a.feeds.current_page)})},getTableDataExcute:function(t){var a=this;a.tableLoading=!0,a.feeds.current_page=t,Object(s["e"])(t,a.feeds.per_page,a.searchForm).then(function(t){a.feeds.data=t.data,a.feeds.total=t.meta.total,a.tableLoading=!1,a.globalFancybox()},function(t){a.tableLoading=!1})},onSortChange:function(t){var a=t.column.key+","+t.order;oneOf(t.column.key,this.notRealySortKey)||(this.searchForm.order_by=a,this.getTableDataExcute(this.feeds.current_page))},tableButtonEdit:function(t,a){this.editModal.show=!0,this.editModal.id=t.id},tableButtonDestroyOk:function(t,a){var e=this;Object(s["b"])(t.id).then(function(t){e.feeds.data.splice(a,1),e.$Notice.success({title:t.message})})},tableButtonGiveUserRoles:function(t,a){var e=this,o=this;Object(s["g"])(t.id).then(function(t){e.roleModal.hasRoles=t.data}),o.roleModal.show=!0,o.roleModal.id=t.id},switchChange:function(t,a){var e=this,o="T";"T"===e.feeds.data[a].enable&&(o="F"),Object(y["d"])(e.feeds.data[a].id,"users",o).then(function(t){e.feeds.data[a].enable=o,e.$Notice.success({title:t.message})}).catch(function(t){e.getTableDataExcute(e.feeds.current_page)})},addBtn:function(){this.addModal.show=!0},addModalHide:function(){this.addModal.show=!1},editModalHide:function(){this.editModal.show=!1},getAllRoleExcute:function(){var t=this;Object(w["e"])().then(function(a){t.roleModal.allRoles=a.data})},handleTransferChange:function(t){this.roleModal.hasRoles=t},renderFormat:function(t){return t.label+"「"+t.description+"」"},giveUserRoleExcute:function(){var t=this;Object(s["h"])(t.roleModal.id,t.roleModal.hasRoles).then(function(a){t.$Notice.success({title:"操作成功",desc:a.message}),t.roleModal.show=!1})},cancelRoleModal:function(){var t=this;t.roleModal.show=!1,t.roleModal.saveLoading=!1}}},k=x,D=Object(u["a"])(k,o,n,!1,null,null,null);a["default"]=D.exports},c13c:function(t,a,e){"use strict";var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._l(t.uploadList,function(a){return e("div",{staticClass:"demo-upload-list"},["finished"===a.status?[e("img",{attrs:{src:a.url}}),e("div",{staticClass:"demo-upload-list-cover"},[e("Icon",{attrs:{type:"ios-trash-outline"},nativeOn:{click:function(e){return t.handleRemove(a)}}})],1)]:[a.showProgress?e("Progress",{attrs:{percent:a.percentage,"hide-info":""}}):t._e()]],2)}),e("Upload",{ref:"upload",staticStyle:{display:"inline-block",width:"58px"},attrs:{"with-credentials":!1,data:t.uploadConfig.data,"show-upload-list":!1,"default-file-list":t.uploadConfig.default_list,"on-success":t.handleSuccess,"on-error":t.handleError,headers:t.uploadConfig.headers,format:t.uploadConfig.format,"max-size":t.uploadConfig.max_size,"on-format-error":t.handleFormatError,"on-exceeded-size":t.handleMaxSize,"before-upload":t.handleBeforeUpload,multiple:t.uploadConfig.multiple,name:t.uploadConfig.file_name,type:"drag",action:t.uploadConfig.upload_url}},[e("div",{staticStyle:{width:"58px",height:"58px","line-height":"58px"}},[e("Icon",{attrs:{type:"ios-camera",size:"20"}})],1)]),e("Divider",{attrs:{orientation:"left"}},[t._v("点击预览图片")]),e("div",{staticClass:"galley-image-list"},[e("ul",{ref:"galley",staticClass:"pictures  row l-hide"},t._l(t.formatFileList,function(t,a){return e("li",[e("img",{attrs:{"data-original":t.url,src:t.url,alt:""}})])}),0)])],2)},n=[],i=(e("3a23"),e("2934"),e("8386")),r=(e("a398"),{props:{isDelete:{type:Boolean,default:!1},uploadConfig:{type:Object,default:{headers:{Authorization:window.access_token},format:["jpg","jpeg","png","gif"],max_size:800,upload_url:window.uploadUrl.uploadToLocaleUrl+"/tmp",file_name:"file",multiple:!1,file_num:0,data:[],default_list:[{name:"",attachment_id:0,url:""},{name:"",attachment_id:0,url:""}]}}},data:function(){return{imgName:"",visible:!1,uploadList:[],formatFileList:[]}},methods:{handleRemove:function(t){var a=this.$refs.upload.fileList;this.$refs.upload.fileList.splice(a.indexOf(t),1);var e=this.fomatFile();this.$emit("input",e),this.$emit("on-upload-change",this.uploadList,e),this.ViewImage()},handleSuccess:function(t,a){if(!t.hasOwnProperty("status")||"success"!=t.status)return this.$Notice.error({title:"出错了，请删除后重新上传",desc:t.message}),!1;a.url=t.data.url,a.name=t.data.original_name,a.attachment_id=t.data.attachment_id;var e=this.fomatFile();this.$emit("input",e),this.$emit("on-upload-change",this.uploadList,e),this.ViewImage()},handleError:function(t,a){this.$Notice.error({title:"出错了",desc:"服务内部错误"})},fomatFile:function(){var t=[];return this.uploadList.forEach(function(a,e,o){t.push({attachment_id:a.attachment_id,url:a.url})}),this.formatFileList=t,1===this.uploadConfig.file_num&&(t=t[0]),t},handleFormatError:function(t){this.$Notice.warning({title:"文件格式不正确",desc:"文件 "+t.name+" 格式不正确。"}),this.ViewImage()},handleMaxSize:function(t){this.$Notice.warning({title:"超出文件大小限制",desc:"文件 "+t.name+" 太大，不能超过 "+this.uploadConfig.max_size+"kb"}),this.ViewImage()},handleBeforeUpload:function(){var t=this.uploadList.length<this.uploadConfig.file_num;return t||(this.$Notice.warning({title:"数量限制",desc:"最多只能上传"+this.uploadConfig.file_num+"个文件"}),this.ViewImage()),t},ViewImage:function(){this.$nextTick(function(){$(function(){$(".l-hide").click(function(){$(".l-show").removeAttr("id").addClass("l-hide").removeClass("l-show"),$(this).attr("id","galley"),$(this).addClass("l-show"),$(this).removeClass("l-hide");var t=document.getElementById("galley"),a=new i["a"](t,{url:"data-original",toolbar:{oneToOne:!0,prev:function(){a.prev(!0)},play:!0,next:function(){a.next(!0)},update:function(){},download:function(){var t=document.createElement("a");t.href=a.image.src,t.download=a.image.alt,document.body.appendChild(t),t.click(),document.body.removeChild(t)}}})})})})}},mounted:function(){this.uploadList=this.$refs.upload.fileList;var t=this.fomatFile();"undefined"!=t&&(this.$emit("input",t),this.$emit("on-upload-change",this.uploadList,t)),this.ViewImage()}}),s=r,l=(e("6a8f"),e("17cc")),d=Object(l["a"])(s,o,n,!1,null,null,null);a["a"]=d.exports},c5a2:function(t,a,e){},cc5e:function(t,a,e){"use strict";e.d(a,"h",function(){return r}),e.d(a,"a",function(){return s}),e.d(a,"c",function(){return l}),e.d(a,"f",function(){return d}),e.d(a,"b",function(){return c}),e.d(a,"d",function(){return u}),e.d(a,"g",function(){return m}),e.d(a,"i",function(){return f}),e.d(a,"e",function(){return p});var o=e("1f09"),n=e.n(o),i=e("66df"),r=function(t){return i["a"].request({url:"/api/admin/roles",params:{search_data:n()(t)},method:"get"})},s=function(t){return i["a"].request({url:"/api/admin/roles",data:t,method:"post"})},l=function(t,a){return i["a"].request({url:"/api/admin/roles/"+a,data:t,method:"patch"})},d=function(t){return i["a"].request({url:"/api/admin/roles/"+t,method:"get"})},c=function(t){return i["a"].request({url:"/api/admin/roles/"+t,method:"delete"})},u=function(){return i["a"].request({url:"/api/admin/all_permissions",method:"get"})},m=function(t){return i["a"].request({url:"api/admin/roles/"+t+"/permissions",method:"get"})},f=function(t,a){return i["a"].request({url:"/api/admin/give/"+t+"/permissions",data:{permission:a},method:"post"})},p=function(){return i["a"].request({url:"/api/admin/roles/all_roles",method:"get"})}}}]);