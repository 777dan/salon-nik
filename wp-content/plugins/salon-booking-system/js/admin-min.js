"use strict";var sln_importRows;function sln_initImporter(e,n){var a=e;function t(e,o){var l=((e=parseInt(e))-(o=parseInt(o)))/e*100;a.find(".progress-bar").attr("aria-valuenow",l).css("width",l+"%"),0!=o?jQuery.ajax({url:ajaxurl,type:"POST",data:{action:"salon",method:"import"+n,step:"process"},cache:!1,dataType:"json",success:function(e){e.success?(console.log(e),t(e.data.total,e.data.left)):s()},error:function(){s()}}):jQuery.ajax({url:ajaxurl,type:"POST",data:{action:"salon",method:"import"+n,step:"finish"},cache:!1,dataType:"json",success:function(e){e.success?(a.find(".info, .alert, .progress").addClass("hide"),a.find(".alert-success").removeClass("hide")):s()},error:function(){s()}})}function s(){a.find(".info, .alert, .progress").addClass("hide"),a.find(".alert-danger").removeClass("hide")}a[0].ondragover=function(){return a.addClass("hover"),!1},a[0].ondragleave=function(){return a.removeClass("hover"),!1},a[0].ondrop=function(e){e.preventDefault(),a.removeClass("hover").addClass("drop");var n=e.dataTransfer.files[0];a.file=n,a.find(".text").html(n.name),a.find(".alert, .progress").addClass("hide"),a.find(".info").removeClass("hide")},jQuery("[data-action=sln_import][data-target="+a.attr("id")+"]").on("click",(function(){var e=jQuery(this);if(e.button("loading"),!a.file)return e.button("reset"),!1;a.find(".progress-bar").attr("aria-valuenow",0).css("width","0%"),a.find(".text").html(a.find(".text").attr("placeholder")),a.find(".alert, .progress").addClass("hide"),a.find(".info").removeClass("hide");var o=new FormData;return o.append("action","salon"),o.append("method","import"+n),o.append("step","start"),o.append("file",a.file),jQuery.ajax({url:ajaxurl,type:"POST",data:o,cache:!1,dataType:"json",processData:!1,contentType:!1,success:function(o){if(e.button("reset"),o.success){console.log(o),sln_importRows=o.data.rows;var l=jQuery("#import-matching-modal"),r=l.find("[data-action=sln_import_matching]");r.button("reset"),l.find("table tbody").html(o.data.matching),jQuery("#wpwrap").css("z-index","auto"),l.modal({keyboard:!1,backdrop:!0}),sln_createSelect2Full(jQuery),sln_validImportMatching(),l.find("[data-action=sln_import_matching_select]").on("change",sln_changeImportMatching),jQuery("[data-action=sln_import_matching]").off("click").on("click",(function(){if(!sln_validImportMatching())return!1;r.button("loading"),jQuery.ajax({url:ajaxurl,type:"POST",data:{action:"salon",method:"import"+n,step:"matching",form:l.closest("form").serialize()},cache:!1,dataType:"json",success:function(e){console.log(e),l.modal("hide"),e.success?(a.find(".info, .alert").addClass("hide"),a.find(".progress").removeClass("hide"),t(e.data.total,e.data.left)):s()},error:function(){l.modal("hide"),s()}})}))}else s()},error:function(){e.button("reset"),s()}}),a.file=!1,!1}))}function sln_changeImportMatching(){var e=jQuery(this),n=e.val(),a=e.attr("data-col");e.closest("table").find("tr.import_matching").each((function(e,t){var s=jQuery(this).find("td[data-col="+a+"] span");void 0!==sln_importRows[e]&&void 0!==sln_importRows[e][n]?s.addClass("pull-left").removeClass("half-opacity").html(sln_importRows[e][n]):s.removeClass("pull-left").addClass("half-opacity").html(s.closest("td").attr("placeholder"))})),sln_validImportMatching()}function sln_validImportMatching(){var e=jQuery("#import-matching-modal"),n=!0;return e.find("select").each((function(){jQuery(this).prop("required")&&""==jQuery(this).val()&&(n=!1)})),n?(e.find(".alert").addClass("hide"),e.find("[data-action=sln_import_matching]").prop("disabled",!1)):(e.find(".alert").removeClass("hide"),e.find("[data-action=sln_import_matching]").prop("disabled","disabled")),n}jQuery("#toplevel_page_salon").hasClass("wp-menu-open")&&(jQuery("#wpbody-content .wrap").addClass("sln-bootstrap"),jQuery("#wpbody-content .wrap").attr("id","sln-salon--admin")),jQuery((function($){var e,n,a,t;if(window.frameElement&&$("html").addClass("in-iframe"),$("#booking-accept, #booking-refuse").on("click",(function(){$("#_sln_booking_status").val($(this).data("status")),$("#save-post").trigger("click")})),$(".sln-toolbox-trigger").on("click",(function(e){$(this).parent().toggleClass("open"),e.preventDefault()})),$(".sln-toolbox-trigger-mob").on("click",(function(e){$(this).parent().find(".sln-toolbox").toggleClass("open"),e.preventDefault()})),$(".sln-box-info-trigger button").on("click",(function(e){$(this).parent().parent().parent().toggleClass("sln-box--info-visible"),e.preventDefault()})),$(".sln-box-info-content:after").on("click",(function(e){e.preventDefault()})),$(".sln-admin-sidebar").length&&$(".sln-admin-sidebar").affix({offset:{top:$(".sln-admin-sidebar").offset().top-96}}),$("[data-action=change-service-type]").on("change",(function(){var e=$(this),n=$(e.attr("data-target")),a=$("#exclusive_service");e.is(":checked")?(n.removeClass("hide"),a.addClass("hide"),$("#_sln_service_exclusive").val(0)):(n.addClass("hide"),a.removeClass("hide"))})),$("[data-action=change-secondary-service-mode]").on("change",(function(){var e=$(this),n=$(e.attr("data-target"));"service"===e.val()?n.removeClass("hide"):n.addClass("hide")})),$(".sln-radiobox__wrapper--bd").each((function(){var e=$(this).find('input[type="radio"]');e.prop("checked")&&$(this).addClass("sln-radiobox__wrapper--checked"),e.on("change",(function(){$(".sln-radiobox__wrapper--bd").removeClass("sln-radiobox__wrapper--checked"),$(this).parent().parent().addClass("sln-radiobox__wrapper--checked")}))})),$("#sln-salon--admin.sln-calendar--wrapper--loading").length&&($(".sln-calendar--wrapper--sub").css("opacity","1"),$(".sln-calendar--wrapper").removeClass("sln-calendar--wrapper--loading sln-calendar--wrapper")),$(".sln-calendar--wrapper").length&&($(".sln-calendar--wrapper--sub").css("opacity","1"),$(".sln-calendar--wrapper").removeClass("sln-calendar--wrapper--loading")),$(window).width()<1024&&$(".sln-admin-banner--trigger, .sln-admin-banner--close").on("click",(function(e){$(".sln-admin-banner").toggleClass("sln-admin-banner--inview"),e.preventDefault()})),$("#import-customers-drag").length>0&&sln_initImporter($("#import-customers-drag"),"Customers"),$("#import-services-drag").length>0&&sln_initImporter($("#import-services-drag"),"Services"),$("#import-assistants-drag").length>0&&sln_initImporter($("#import-assistants-drag"),"Assistants"),$("#_sln_service_price").on("sln_add_error_tip",(function(e,n,a){var t=n.position();0===n.parent().find(".sln_error_tip").length&&(n.after('<div class="sln_error_tip '+a+'">'+salon_admin[a]+"</div>"),n.parent().find(".sln_error_tip").css("left",t.left+n.width()-n.width()/2-$(".sln_error_tip").width()/2).css("top",t.top+n.height()).fadeIn("100"))})).on("sln_remove_error_tip",(function(e,n,a){n.parent().find(".sln_error_tip."+a).fadeOut("100",(function(){$(this).remove()}))})).on("blur",(function(){$(".sln_error_tip").fadeOut("100",(function(){$(this).remove()}))})).on("change",(function(){var e=new RegExp("[^-0-9%\\"+salon_admin.mon_decimal_point+"]+","gi"),n=$(this).val(),a=n.replace(e,"");n!==a&&$(this).val(a)})).on("keyup",(function(){var e,n;e=new RegExp("[^-0-9%\\"+salon_admin.mon_decimal_point+"]+","gi"),n="i18n_mon_decimal_error";var a=$(this).val(),t=a.replace(e,"");a!==t?$("#_sln_service_price").triggerHandler("sln_add_error_tip",[$(this),n]):$("#_sln_service_price").triggerHandler("sln_remove_error_tip",[$(this),n])})),$("#salon_settings_sms_provider").on("change",(function(){$("#salon_settings_whatsapp_enabled").prop("checked",!1),$(".enabled-whatsapp-checkbox").toggleClass("hide","twilio"!==$(this).val())})),$(".sln-box--haspanel").length&&($(".sln-box--haspanel").each((function(){var e=$(this).find(".sln-box__paneltitle"),n=$(this).find(".sln-box__panelcollapse");e.on("click",(function(){$(".sln-box--haspanel .sln-box__paneltitle").removeClass("sln-box__paneltitle--open"),$(".sln-box--haspanel .sln-box__panelcollapse.in").collapse("hide"),n.collapse("toggle")})),n.on("hidden.bs.collapse",(function(){var n=$(this).parent().attr("id");$("a[href$='#"+n+"']").parent().removeClass("active"),e.removeClass("sln-box__paneltitle--open"),$(this).parent().removeClass("sln-box--haspanel--open")})),n.on("show.bs.collapse",(function(){var n=$(this).parent().attr("id"),a=$("a[href$='#"+n+"']").parent(),t=$("a[href$='#"+n+"']").attr("data-initialOffset");$(".sln-inpage_navbar_inner").scrollLeft(t-10),$("#sln-inpage_navbar li").removeClass("active"),a.addClass("active"),console.log(n+" "+a),e.addClass("sln-box__paneltitle--open"),$(this).parent().addClass("sln-box--haspanel--open")}))})),setTimeout((function(){window.location.hash&&($("#"+window.location.hash.replace("#","")+" .sln-box__paneltitle").trigger("click"),$([document.documentElement,document.body]).animate({scrollTop:$("#"+window.location.hash.replace("#","")).offset().top},2e3))}),0)),$("#salon_settings_attendant_enabled").on("change",(function(){!$(this).prop("checked")&&$("#salon_settings_only_from_backend_attendant_enabled").prop("checked",!1),$(".only-from-backend-attendant-enable-checkbox, .assistant-selections-options").toggleClass("hide",!$(this).prop("checked")),$(this).parent().parent().parent().parent().find(".row").toggleClass("sln-box--appeared",$(this).prop("checked"))})),$(".sln-booking-holiday-rules").on("change",".sln-from-date .sln-input",(function(){$(this).closest(".row").find(".sln-to-date .sln-input").val($(this).val())})),$("#_sln_attendant_email").select2({containerCssClass:"sln-select-rendered",dropdownCssClass:"sln-select-dropdown",theme:"sln",width:"100%",placeholder:$("#_sln_attendant_email").data("placeholder"),tags:!0,allowClear:!0,language:{noResults:function(){return $("#_sln_attendant_email").data("nomatches")}},ajax:{url:salon.ajax_url+"&action=salon&method=SearchAssistantStaffMember&security="+salon.ajax_nonce,dataType:"json",delay:250,data:function(e){return{s:e.term}},minimumInputLength:3,processResults:function(e,n){return{results:e.result}}}}),$("#_sln_attendant_email").on("change",(function(){var e=$("#_sln_attendant_email").select2("data")[0],n=void 0!==e?e.staff_member_id||$(e.element).data("staff-member-id"):"";$('[name="_sln_attendant_staff_member_id"]').val(n),$('[name="_sln_attendant_limit_staff_member_to_assigned_bookings_only"]').prop("checked",!1),+n?$(".sln-staff-member-assigned-bookings-only").removeClass("hide"):$(".sln-staff-member-assigned-bookings-only").addClass("hide")})),(t=document.querySelector("#sln_customer_meta__sln_phone"))&&$("#sln_customer_meta__sln_sms_prefix").length){var s=window.intlTelInput(t,{initialCountry:(e=($("#sln_customer_meta__sln_sms_prefix").val()||"").replace("+",""),n=window.intlTelInputGlobals.getCountryData(),a="",n.forEach((function(n){n.dialCode==e&&(a=n.iso2)})),a),separateDialCode:!0,autoHideDialCode:!0,nationalMode:!1});t.addEventListener("countrychange",(function(){s.getSelectedCountryData().dialCode&&$("#sln_customer_meta__sln_sms_prefix").val("+"+s.getSelectedCountryData().dialCode)})),t.addEventListener("blur",(function(){s.getSelectedCountryData().dialCode&&$("#sln_customer_meta__sln_phone").val($("#sln_customer_meta__sln_phone").val().replace("+"+s.getSelectedCountryData().dialCode,""))}))}if((t=document.querySelector("#_sln_attendant_phone"))&&$("#_sln_attendant_sms_prefix").length){function o(e){var n=window.intlTelInputGlobals.getCountryData(),a="";return n.forEach((function(n){n.dialCode==e&&(a=n.iso2)})),a}s=window.intlTelInput(t,{initialCountry:o(($("#_sln_attendant_sms_prefix").val()||"").replace("+","")),separateDialCode:!0,autoHideDialCode:!0,nationalMode:!1});t.addEventListener("countrychange",(function(){s.getSelectedCountryData().dialCode&&$("#_sln_attendant_sms_prefix").val("+"+s.getSelectedCountryData().dialCode)})),t.addEventListener("blur",(function(){s.getSelectedCountryData().dialCode&&$("#_sln_attendant_phone").val($("#_sln_attendant_phone").val().replace("+"+s.getSelectedCountryData().dialCode,""))}))}$("#sln-booking-editor-modal").on("shown.bs.modal",(function(e){$(this).find("iframe").on("load",(function(){$(this).contents().find("body").addClass("inmodal")}))}))}));