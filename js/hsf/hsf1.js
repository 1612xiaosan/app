$().ready(function() {
	$(".hsf-first-neirong").click(function(){
$("#hsf-first-myform").validate({
	rules: {
				hsffirstname: "required",
				hsffirstpass: "required",
		},
	messages:{
		hsffirstname: "请输入账号",
		hsffirstpass: "请输入账号",
	},
})
	})
})

