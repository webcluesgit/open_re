/**
 * Created by webclues on 6/1/2016.
 */

$(function () {
    $('#cur_year').datepicker({
        format: "yyyy"
    });
});

$("select#geo_level_rol").on("change",function(){
    var selected_geo_id = $(this).val();
    get_lower_geo_by_parent_geo_scheme(selected_geo_id);
});

function get_lower_geo_by_parent_geo_scheme(selected_geo_id){

    var login_user_countryid = $("input#login_customer_countryid").val();
    var login_user_type = $("input#login_customer_role").val();
    var default_customer_type = 10;
    var customer_selected = $("input#login_customer_id").val();
   /* var url_seg = $("input.page_function" ).val();
    var checked_type = 'retailer';*/

    $.ajax({
        type: 'POST',
        url: site_url+"ishop/get_lower_business_geo_data",
        data: {user_id:customer_selected,country_id : login_user_countryid,role :default_customer_type,parent_geo_id:selected_geo_id },
        dataType : 'json',
        success: function(resp){
            console.log(resp);
         //   return false;

                $("select#geo_level_1").empty();
                $("select#geo_level_1").selectpicker('refresh');

                if (resp.length > 0) {

                    $("select#geo_level_1").append('<option value="0">Select Geo Location</option>');

                    $.each(resp, function (key, value) {

                        $('select#geo_level_1').append('<option value="' + value.business_geo_id + '" >' + value.business_georaphy_name + '</option>');
                    });

                    $("select#geo_level_1").selectpicker('refresh');

                    }
        }
    });

}

$("select#geo_level_1").on("change",function(){

    var selected_geo_data = $(this).val();
    get_retailer_by_geo_data(selected_geo_data);

});

function get_retailer_by_geo_data(selected_geo_data){


    var login_user_countryid = $("input#login_customer_countryid").val();

    $.ajax({
        type: 'POST',
        url: site_url+"ishop/get_user_by_business_geo_data",
        data: {selected_geo_id:selected_geo_data, country_id : login_user_countryid},
        dataType : 'json',
        success: function(resp){

            if(resp != 0){

                    $("select#retailer_scheme").empty();

                    $("select#retailer_scheme").append('<option value="0">Select Retailer Name</option>');

                    $.each(resp, function (key, value) {
                        $('select#retailer_scheme').append('<option value="' + value.id + '" >' + value.display_name + '</option>');
                    });

                    $("select#retailer_scheme").selectpicker('refresh');
            }
        }
    });

}

$("select#schemes").on("change",function(){

    var selected_schemes = $(this).val();
    get_slab_by_selected_schemes(selected_schemes);

});

function get_slab_by_selected_schemes(selected_schemes)
{

    $.ajax({
        type: 'POST',
        url: site_url+"ishop/get_slab_by_selected_schemes",
        data: {selected_schemes:selected_schemes},
        dataType : 'html',
        success: function(resp){
            $("#scheme_middle_container").html(resp);
        }
    });
}


$("#add_schemes").on("submit",function(){
    //alert('in');
    var param = $("#add_schemes").serializeArray();
        //console.log(param);
   // return false;
    $.ajax({
        type: 'POST',
        url: site_url+"ishop/add_schemes_details",
        data: param,
        //dataType : 'json',
        success: function(resp){
            if(resp==1){
                // site_url+"ishop/physical_stock";
            }
        }
    });
   //
});



$("#cur_year").on("change",function(){

    var selected_cur_year = $(this).val();
    get_region_by_selected_cur_year(selected_cur_year);
    get_schemes_by_selected_cur_year(selected_cur_year);

});

function get_schemes_by_selected_cur_year(selected_cur_year){

    var login_user_countryid = $("input#login_customer_countryid").val();

    $.ajax({
        type: 'POST',
        url: site_url+"ishop/get_schemes_by_selected_cur_year",
        data: {selected_cur_year:selected_cur_year, country_id : login_user_countryid},
        dataType : 'json',
        success: function(resp){

            if(resp != 0){

                $("select#schemes").empty();

                $("select#schemes").append('<option value="0">Select Schemes </option>');

                $.each(resp, function (key, value) {
                    $('select#schemes').append('<option value="' + value.scheme_id + '" >' + value.scheme_name + '</option>');
                });

                $("select#schemes").selectpicker('refresh');
            }
            else{
                $("select#schemes").empty();
                $("select#schemes").append('<option value="0">Select Schemes </option>');
                $("select#schemes").selectpicker('refresh');
            }
        }
    });
}

function get_region_by_selected_cur_year(selected_cur_year){

  //  alert('in');
   // var login_user_countryid = $("input#login_customer_countryid").val();
    $.ajax({
        type: 'POST',
        url: site_url+"ishop/get_region_by_selected_cur_year",
        data: {selected_cur_year:selected_cur_year},
        dataType : 'json',
        success: function(resp){

            if(resp != 0){

                $("select#geo_level_rol").empty();

                $("select#geo_level_rol").append('<option value="0">Select Geo Location </option>');

                $.each(resp, function (key, value) {
                    $('select#geo_level_rol').append('<option value="' + value.business_geo_id + '" >' + value.business_georaphy_name + '</option>');
                });

                $("select#geo_level_rol").selectpicker('refresh');
            }
            else{
                $("select#geo_level_rol").empty();
                $("select#geo_level_rol").append('<option value="0">Select Geo Location </option>');
                $("select#geo_level_rol").selectpicker('refresh');
            }
        }
    });
}
