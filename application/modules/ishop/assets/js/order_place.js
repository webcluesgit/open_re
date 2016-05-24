/**
 * Created by webclues on 5/17/2016.
 */
$(document).ready(function(){
    
    
    $( "#order_date_datepicker" ).datepicker({
      dateFormat: "yy-mm-dd",
      showOn: "button",
      buttonImage: site_url+"/public/themes/default/images/calendar.gif",
      buttonImageOnly: true,
      buttonText: "Select date",
      autoclose: true
    });
    
   
   var login_customer_type = $("input#login_customer_type").val();
   
   //alert(login_customer_type);
   
   if(login_customer_type == 10){
       
       var customer_selected = $("input#login_customer_id").val();
       get_distributors(customer_selected);
       
   }
   else if(login_customer_type == 8){
       
       var customer_selected = $("input#login_customer_id").val();
       
       get_geo_fo_userdata(customer_selected,'farmer');
       
   }
   
   
   $("input.select_customer_type").on("click",function(){
       
       var customer_type_selected = $(this).val();
       
      // alert(customer_type_selected);
       
       if(customer_type_selected == "retailer"){
           $("div.distributor_data").css("display","none");
           $("div.retailer_data").css("display","block");
           
           $("div.distributor_checked").css("display","none");
           $("div.farmer_checked").css("display","none");
           $("div.retailer_checked").css("display","block");
           
           if(login_customer_type == 8){
       
                var customer_selected = $("input#login_customer_id").val();
                get_geo_fo_userdata(customer_selected,customer_type_selected);

           }
           
       }
       else if(customer_type_selected == "distributor"){
           $("div.retailer_data").css("display","none");
           $("div.distributor_data").css("display","block");
           
           $("div.distributor_checked").css("display","block");
           $("div.farmer_checked").css("display","none");
           $("div.retailer_checked").css("display","none");
           
           
           if(login_customer_type == 8){
       
                var customer_selected = $("input#login_customer_id").val();
                get_geo_fo_userdata(customer_selected,customer_type_selected);

           }
           
           
       }
       
       else if(customer_type_selected == "farmer"){
           $("div.retailer_data").css("display","none");
           $("div.distributor_data").css("display","none");
           
           $("div.distributor_checked").css("display","none");
           $("div.farmer_checked").css("display","block");
           $("div.retailer_checked").css("display","none");
           
           if(login_customer_type == 8){
       
                var customer_selected = $("input#login_customer_id").val();
                get_geo_fo_userdata(customer_selected,customer_type_selected);

           }
           
           
       }
       
   });
   
   
   $("select#geo_level_1_data").on("change",function(){
       
       var selected_geo_data = $(this).val();
       
       $("select#retailer_data").empty();
       $("select#farmer_data").empty();
       
       $("select#farmer_data").selectpicker('refresh');
       $("select#retailer_data").selectpicker('refresh');
       
       get_user_by_geo_data(selected_geo_data);
       
   });
   
    $("select#distributor_geo_level_1_data").on("change",function(){
       
       var selected_geo_data = $(this).val();
       
      
      // $("select#distributor_geo_level_1_data").empty();
      // $("select#distributor_geo_level_1_data").selectpicker('refresh');
       
       get_user_by_geo_data(selected_geo_data);
       
   });
   
   $("select#farmer_data").on("change",function(){
       
       var selected_user_id = $(this).val();
       var selected_user_geo_location =  $("select#geo_level_1_data").val();
       
       get_retailer_by_user(selected_user_id);
       
      // console.log(selected_user_id +"===="+selected_user_geo_location);
       
   });
   
   $("select#retailer_geo_level_1_data").on("change",function(){
       
       var selected_geo_id = $(this).val();
       
       get_lower_geo_by_parent_geo(selected_geo_id);
       
      // console.log(selected_user_id +"===="+selected_user_geo_location);
       
   });
   
   $("select#retailer_geo_level_2_data").on("change",function(){
       
       var selected_geo_id = $(this).val();
       
       get_user_by_geo_data(selected_geo_id);
       
      // console.log(selected_user_id +"===="+selected_user_geo_location);
       
   });
   
   $("select#retailer_data").on("change",function(){
       
       var login_customer_type = $("input#login_customer_type" ).val();
       
       if(login_customer_type == 8){
           
            var selected_customer_id = $(this).val();
            get_retailer_by_user(selected_customer_id);
            
        }
      // console.log(selected_user_id +"===="+selected_user_geo_location);
       
   });
   
   
   
   
   

});

function get_lower_geo_by_parent_geo(selected_geo_id){
    
    var login_user_countryid = $("input#login_customer_countryid").val();
    var login_customer_type = $("input#login_customer_type" ).val();
    var customer_selected = $("input#login_customer_id").val();
    
     var checked_type = $('input[name=radio1]:checked').val();
    var url_seg = $("input.page_function" ).val();
    
     $.ajax({
        type: 'POST',
        url: site_url+"ishop/get_lowergeo_from_uppergeo_data",
        data: {checkedtype:checked_type, user_id:customer_selected,user_country : login_user_countryid,login_customer_type :login_customer_type,parent_geo_id:selected_geo_id,urlsegment:url_seg },
        dataType : 'json',
        success: function(resp){
            console.log(resp);
           
               
                $("div#retailer_checked select#retailer_geo_level_2_data").empty();
                $("div#retailer_checked select#retailer_geo_level_2_data").selectpicker('refresh');
                
                
                if(resp.length > 0){
                   
                $("div#retailer_checked select#retailer_geo_level_2_data").append('<option value="0">Select Geo Location</option>');

                $.each(resp, function(key, value) {
                    
                    $('div#retailer_checked select#retailer_geo_level_2_data').append('<option value="' + value.political_geo_id + '" >' +value.political_geography_name+ '</option>');
                });

                $("div#retailer_checked select#retailer_geo_level_2_data").selectpicker('refresh');

            }
            
            
            
        }
    });
    
}

function get_geo_fo_userdata(customer_selected,customer_type_selected){
    
    var login_user_countryid = $("input#login_customer_countryid").val();
    var login_customer_type = $("input#login_customer_type" ).val();
    
    var url_seg = $("input.page_function" ).val();
    var checked_type = $('input[name=radio1]:checked').val();
    //alert(customer_selected+"==="+login_user_countryid+"==="+login_customer_type+"==="+customer_type_selected);
    
    $.ajax({
        type: 'POST',
        url: site_url+"ishop/get_geo_fo_userdata",
        data: {user_id:customer_selected,user_country : login_user_countryid,login_customer_type :login_customer_type,customer_type_selected:customer_type_selected,urlsegment:url_seg,checkedtype:checked_type },
        dataType : 'json',
        success: function(resp){
            console.log(resp);
            
            if(customer_type_selected == "farmer"){
                
                $("div#farmer_checked select#geo_level_1_data").empty();
                $("div#farmer_checked select#geo_level_1_data").selectpicker('refresh');
                
                
                if(resp.length > 0){
                   
                $("div#farmer_checked select#geo_level_1_data").append('<option value="0">Select Geo Location</option>');

                $.each(resp, function(key, value) {
                    $('div#farmer_checked select#geo_level_1_data').append('<option value="' + value.political_geo_id + '" >' +value.political_geography_name+ '</option>');
                });

                $("div#farmer_checked select#geo_level_1_data").selectpicker('refresh');

            }
                
            }
            
            if(customer_type_selected == "distributor"){
                
                $("div#distributor_checked select#distributor_geo_level_1_data").empty();
                $("div#distributor_checked select#distributor_geo_level_1_data").selectpicker('refresh');
                
                
                if(resp.length > 0){
                   
                $("div#distributor_checked select#distributor_geo_level_1_data").append('<option value="0">Select Geo Location</option>');

                $.each(resp, function(key, value) {
                    $('div#distributor_checked select#distributor_geo_level_1_data').append('<option value="' + value.political_geo_id + '" >' +value.political_geography_name+ '</option>');
                });

                $("div#distributor_checked select#distributor_geo_level_1_data").selectpicker('refresh');

            }
                
            }
            
            if(customer_type_selected == "retailer"){
                
                $("div#retailer_checked select#retailer_geo_level_1_data").empty();
                $("div#retailer_checked select#retailer_geo_level_1_data").selectpicker('refresh');
                
                
                if(resp.length > 0){
                   
                $("div#retailer_checked select#retailer_geo_level_1_data").append('<option value="0">Select Geo Location</option>');

                $.each(resp, function(key, value) {
                    
                    $('div#retailer_checked select#retailer_geo_level_1_data').append('<option value="' + value.political_geo_id + '" >' +value.political_geography_name+ '</option>');
                });

                $("div#retailer_checked select#retailer_geo_level_1_data").selectpicker('refresh');

            }
                
            }
            
            
           
        }
    });
    
    
}


function get_user_by_geo_data(selected_geo_data){
    
    $("select#retailer_data").empty();
    $("select#retailer_data").selectpicker('refresh');
    
   var checked_type = $('input[name=radio1]:checked').val();
   var login_customer_type = $("input#login_customer_type" ).val();
   
   //alert(checked_type);
    
    var login_user_countryid = $("input#login_customer_countryid").val();
    
    $.ajax({
        type: 'POST',
        url: site_url+"ishop/get_user_by_geo_data",
        data: {selected_geo_id:selected_geo_data, country_id : login_user_countryid, checked_data:checked_type},
        dataType : 'json',
        success: function(resp){
            //console.log(resp);
            
            if(resp != 0){
                     
                if(checked_type == "retailer" && login_customer_type == 8){
                    
                     $("select#retailer_data").empty();

                    $("select#retailer_data").append('<option value="0">Select Retailer Name</option>');

                    $.each(resp, function(key, value) {
                        $('select#retailer_data').append('<option value="' + value.id + '" >' +value.first_name+' '+value.middle_name+' '+value.last_name+ '</option>');
                    });

                    $("select#retailer_data").selectpicker('refresh');
                    
                }
                else if(checked_type == "distributor" && login_customer_type == 8 ){
                    
                     $("select#fo_distributor_data").empty();

                    $("select#fo_distributor_data").append('<option value="0">Select Distributor Name</option>');

                    $.each(resp, function(key, value) {
                        $('select#fo_distributor_data').append('<option value="' + value.id + '" >' +value.first_name+' '+value.middle_name+' '+value.last_name+ '</option>');
                    });

                    $("select#fo_distributor_data").selectpicker('refresh');
                    
                }
                else{
                    $("select#farmer_data").empty();

                    $("select#farmer_data").append('<option value="0">Select Farmer Name</option>');

                    $.each(resp, function(key, value) {
                        $('select#farmer_data').append('<option value="' + value.id + '" >' +value.first_name+' '+value.middle_name+' '+value.last_name+ '</option>');
                    });

                    $("select#farmer_data").selectpicker('refresh');
            }
            }
            
        }
    });
    
}

function get_retailer_by_user(selected_user_id){
    
   var checked_type = $('input[name=radio1]:checked').val();
   var login_customer_type = $("input#login_customer_type" ).val();
    
    $.ajax({
        type: 'POST',
        url: site_url+"ishop/get_retailer_by_customer_data",
        data: {user_id:selected_user_id,checkedtype:checked_type,logincustomerrole:login_customer_type},
        dataType : 'json',
        success: function(resp){
            //console.log(resp);
            
            if(resp != 0){
                        
                  if(checked_type == "retailer" && login_customer_type == 8){
                            
                        $("select#distributor_data").empty();

                        $("select#distributor_data").append('<option value="0">Select Distributor Name</option>');

                        $.each(resp, function(key, value) {
                            $('select#distributor_data').append('<option value="' + value.id + '" >' +value.first_name+' '+value.middle_name+' '+value.last_name+ '</option>');
                        });

                        $("select#distributor_data").selectpicker('refresh');
                            
                  }else{
                        
                    $("select#retailer_data").empty();

                    $("select#retailer_data").append('<option value="0">Select Retailer Name</option>');

                    $.each(resp, function(key, value) {
                        $('select#retailer_data').append('<option value="' + value.id + '" >' +value.first_name+' '+value.middle_name+' '+value.last_name+ '</option>');
                    });

                    $("select#retailer_data").selectpicker('refresh');

                }
            }
            
        }
    });
    
}

function get_distributors(customer_type_selected){
    
        
       var login_customer_type = $("input#login_customer_type" ).val();
       if(login_customer_type == 10){
            var retailer_id = customer_type_selected;
       }
       else{
           var retailer_id = $("select#retailer_id option:selected" ).val();
       }
       $.ajax({
                type: 'POST',
                url: site_url+"ishop/get_distributor_data",
                data: {retailerid:retailer_id},
                //dataType : 'json',
                success: function(resp){
                    //console.log(resp);
                    if(resp != 0){
                        
                        $("select#retailer_distributor_id").empty();
                        
                        $("select#retailer_distributor_id").append('<option value="0">Select Distributor Name</option>');
                        
                        $.each(JSON.parse(resp), function(key, value) {
                            $('select#retailer_distributor_id').append('<option value="' + value.id + '">' + value.display_name + '</option>');
                        });
                        
                        $("select#retailer_distributor_id").selectpicker('refresh');
                        
                    }
                    else{
                        $("select#retailer_distributor_id").empty();
                        $("select#retailer_distributor_id").selectpicker('refresh');
                    }
                }
            });
    
}

function order_place_add_row()
{
    var sku_code = $('#prod_sku option:selected').attr('attr-code');
    var sku_name = $('#prod_sku option:selected').attr('attr-name');
    var sku_id = $('#prod_sku option:selected').val();
    var units = $("#units option:selected").val();
    var quantity = $('#quantity').val();
    var qty = "";
    var sr_no =$("#order_place_data > tr").length + 1;

    var unit_data = "";

    $.ajax({
        type: 'POST',
        url: site_url+"ishop/get_quantity_conversion_data",
        data: {skuid:sku_id, quantity_data:quantity, unit : units},
        //dataType : 'json',
        success: function(resp){
            unit_data = resp;
        },
        async:false
    });

    $("#order_place_data").append(
        "<tr>"+
            "<td data-title='Sr. No.' class='numeric'>" +
                "<input type='text' value='"+sr_no+"' readonly/>" +
            "</td>"+
            
            "<td data-title='remove'>" +
                "<div class='delete_i' attr-dele=''><a href='#'><i class='fa fa-trash-o' aria-hidden='true'></i></a></div>" +
            "</td>"+
            
            "<td data-title='Product SKU Code' class='numeric'>" +
                "<input type='text' value='"+sku_code+"' readonly/>" +
            "</td>"+
            "<td data-title='Product SKU Name'>" +
                "<input type='text' value='"+sku_name+"' readonly/>" +
                "<input type='hidden' name='product_sku_id[]' value='"+sku_id+"'/>" +
            "</td>"+
            "<td data-title='Units'>" +
                "<input type='text' name='units[]' value='"+units+"' class='numeric' readonly/>" +
            "</td>"+
            "<td data-title='Quantity'>" +
                "<input type='text' name='quantity[]' value='"+quantity+"' class='numeric' readonly/>" +
            "</td>"
            +
            "<td data-title='Qty'>" +
                "<input type='text' name='Qty[]' value='"+unit_data+"' class='numeric' readonly/>" +
            "</td>"+
        "</tr>"
    );
    $('#prod_sku').selectpicker('val', '0');
    $('#units').selectpicker('val', '0');
    $('#quantity').val('');
   
}

$("#order_place").on("submit",function(){

    var param = $("#order_place").serializeArray();

    $.ajax({
        type: 'POST',
        url: site_url+"ishop/order_place_details",
        data: param,
        //dataType : 'json',
        success: function(resp){
            
           // window.location.href = site_url+"ishop/order_place";
           // return false;
           
        }
    });
   // return false; 
});