$(document).ready(function() {
    $('#execution_date').datepicker({
        format: "yyyy-mm-dd",
        autoclose: true
    }).on('changeDate',function(e){
        dateChangeEvent(e);
    });

    $('#execution_time').timepicker({

    });

    $("select#activity_type_id").on("change",function() {
        var activity_type_selected = $('option:selected', this).attr('code');
        set_activity_type(activity_type_selected);

    });

    $("select#activity_type_id").on("change",function() {
        var activity_type_id = $('option:selected', this).val();

        getDigitalLibrary(activity_type_id);

    });

    /*Validation Rule*/

    var activity_unplanned_validators = $("#activity_unplanned").validate({
        ignore: ".ignore",
        rules: {
            execution_date:{
                required: true
            },
            execution_time:{
                required: true
            },
            activity_type_id:{
                required: true
            },
            geo_level_2:{
                required: true
            },
            geo_level_3:{
                required: true
            },
            geo_level_4:{
                required: true
            },
            activity_address:{
                required: true
            },
            crop_id:{
                required: true
            },
            product_sku_id:{
                required: true
            },
            diseases_id:{
                required: true
            },
            farmer_id:
            {
                required: true
            },
            farmer_no:
            {
                required: true
            },
            /*   farmer_id:
             {
             required: true
             },
             farmer_id:
             {
             required: true
             }*/
        }
    });

    /*Validation Rule*/

    $("#add_farmer").click(function() {

        $('#farmer_id').removeClass('ignore');
        $('#farmer_no').removeClass('ignore');

        var $valid = $("#activity_unplanned").valid();
        if(!$valid) {
            activity_unplanned_validators.focusInvalid();
            return false;
        }
        else
        {
            add_farmer();
        }
    });



    $("#add_product").click(function() {
        add_product();
    });

    $("#add_product_material").click(function() {
        add_product_material();
    });

    $("#add_material").click(function() {
        add_material();
    });

    $("#add_customer").click(function() {
        add_customer();
    });

});

$(function () {

    $("#activity_rate").rateYo({
        starWidth: "30px",
        normalFill: "#cccccc",
        ratedFill: "#65ac1e"
    });

    var $rateYo = $("#activity_rate").rateYo();

    $("#activity_rate").click(function () {
        /* get rating */
        var rating = $rateYo.rateYo("rating");
        $("#rating").val(rating);
    });

});

function add_farmer()
{
    var farmer_id = $('#farmer_id option:selected').val();
    var farmer_name = $('#farmer_id option:selected').attr('attr-name');
    var farmer_no = $('#farmer_no').val();

    var d =  "<tr>"+
        "<td data-title='Key Farmer'>" +
        "<input class='input_remove_border' type='text' value='"+farmer_name+"' readonly/>" +
        "<input type='hidden' name='farmers[]' value='"+farmer_id+"'/>" +
        "</td>"+
        "<td data-title='Mobile No.'>" +
        "<input type='text' class='input_remove_border' name='farmer_num[]' value='"+farmer_no+"' readonly/>" +
        "</td>"+
        "<td  data-title='Action' class='numeric'>" +
        "<div class='delete_i farmer_detail' attr-dele=''><a href='#'><i class='fa fa-trash-o' aria-hidden='true'></i></a></div>" +
        "</td>"+
        "</tr>";

    $("#farmer_detail").append(d);
    $('#farmer_id').selectpicker('val', '');
    $('#farmer_no').val('');
}
$(document).on('click', 'div.farmer_detail', function () {
    if (confirm("Are you sure?")) {
        $(this).closest('tr').remove();
    }
    else{
        return false;
    }
    return false;
});


function add_customer()
{

    var customer_name = $('#customer_name').val();
    var customer_no = $('#customer_no').val();

    var d =  "<tr>"+
        "<td data-title='Key Farmer'>" +
        "<input class='input_remove_border' type='text'name='customer_name[]' value='"+customer_name+"' readonly/>" +
        "</td>"+
        "<td data-title='Mobile No.'>" +
        "<input type='text' class='input_remove_border' name='customer_no[]' value='"+customer_no+"' readonly/>" +
        "</td>"+
        "<td  data-title='Action' class='numeric'>" +
        "<div class='delete_i customer_detail' attr-dele=''><a href='#'><i class='fa fa-trash-o' aria-hidden='true'></i></a></div>" +
        "</td>"+
        "</tr>";

    $("#customer_detail").append(d);
    $('#customer_name').val('');
    $('#customer_no').val('');
}
$(document).on('click', 'div.customer_detail', function () {
    if (confirm("Are you sure?")) {
        $(this).closest('tr').remove();
    }
    else{
        return false;
    }
    return false;
});


function add_product()
{
    var sku_name = $('#product_sample_id option:selected').attr('attr-name');
    var sku_id = $('#product_sample_id option:selected').val();
    var qty = $('#qty').val();

    $("#product_detail").append(
        "<tr>"+
        "<td data-title='Products'>" +
        "<input class='input_remove_border' type='text' value='"+sku_name+"' readonly/>" +
        "<input type='hidden' name='product_samples[]' value='"+sku_id+"'/>" +
        "</td>"+
        "<td data-title='Qty.'>" +
        "<input type='text' class='input_remove_border allownumericwithdecimal' name='product_samples_qty[]' value='"+qty+"' readonly/>" +
        "</td>"+
        "<td  data-title='Action' class='numeric'>" +
        "<div class='delete_i product_detail' attr-dele=''><a href='#'><i class='fa fa-trash-o' aria-hidden='true'></i></a></div>" +
        "</td>"+
        "</tr>"
    );
    $('#product_sample_id').selectpicker('val', '');
    $('#qty').val('');

}

$(document).on('click', 'div.product_detail', function () {
    if (confirm("Are you sure?")) {
        $(this).closest('tr').remove();
    }
    else{
        return false;
    }
    return false;
});

function add_product_material()
{
    var sku_name = $('#product_material_id option:selected').attr('attr-name');
    var sku_id = $('#product_material_id option:selected').val();
    var qty = $('#qty_material').val();

    $("#product_material_detail").append(
        "<tr>"+
        "<td data-title='Products'>" +
        "<input class='input_remove_border' type='text' value='"+sku_name+"' readonly/>" +
        "<input type='hidden' name='product_materials[]' value='"+sku_id+"'/>" +
        "</td>"+
        "<td data-title='Qty.'>" +
        "<input type='text' class='input_remove_border allownumericwithdecimal' name='product_materials_qty[]' value='"+qty+"' readonly/>" +
        "</td>"+
        "<td  data-title='Action' class='numeric'>" +
        "<div class='delete_i product_material_detail' attr-dele=''><a href='#'><i class='fa fa-trash-o' aria-hidden='true'></i></a></div>" +
        "</td>"+
        "</tr>"
    );
    $('#product_material_id').selectpicker('val', '');
    $('#qty_material').val('');
}

$(document).on('click', 'div.product_material_detail', function () {
    if (confirm("Are you sure?")) {
        $(this).closest('tr').remove();
    }
    else{
        return false;
    }
    return false;
});

function add_material()
{
    var material_name = $('#material_id option:selected').attr('attr-name');
    var material_id = $('#material_id option:selected').val();
    var qty = $('#m_qty').val();

    $("#material_detail").append(
        "<tr>"+
        "<td data-title='Materials'>" +
        "<input class='input_remove_border' type='text' value='"+material_name+"' readonly/>" +
        "<input type='hidden' name='materials[]' value='"+material_id+"'/>" +
        "</td>"+
        "<td data-title='Qty.'>" +
        "<input type='text' class='input_remove_border' name='materials_qty[]' value='"+qty+"' readonly/>" +
        "</td>"+
        "<td  data-title='Action' class='numeric'>" +
        "<div class='delete_i material_detail' attr-dele=''><a href='#'><i class='fa fa-trash-o' aria-hidden='true'></i></a></div>" +
        "</td>"+
        "</tr>"
    );
    $('#material_id').selectpicker('val', '');
    $('#m_qty').val('');
}

$(document).on('click', 'div.material_detail', function () {
    if (confirm("Are you sure?")) {
        $(this).closest('tr').remove();
    }
    else{
        return false;
    }
    return false;
});




$(document).on("change","select#geo_level_2",function() {

    var  activity_type_selected= $('select#activity_type_id option:selected').val();
    var  perent_id= $('option:selected', this).val();
    var  second_perent= 'second_perent';

    get_child_by_perent_id(activity_type_selected,perent_id,second_perent);

});

$(document).on("change","select#geo_level_3",function() {

    var  activity_type_selected= $('select#activity_type_id option:selected').val();
    var  perent_id= $('option:selected', this).val();
    get_child_by_parent_parent_id(activity_type_selected,perent_id);

});



function set_activity_type(activity_type_selected){

    if(activity_type_selected == 'FMP001')
    {
        get_geo_fo_userdata(activity_type_selected);

        var geo_1 = '';
        geo_1 +='<div class="col-md-3 col-sm-3 first_lb mrg_bottom_30"><label>Geo2<span style="color: red">*</span></label></div>'+
            '<div class="col-md-2 col-sm-8 cont_size_select mrg_bottom_30">'+
            '<select class="selectpicker" id="geo_level_2" name="geo_level_2" data-live-search="true">'+
            '<option value="">Select Geo 2</option>'+
            '</select>'+
            '</div>'+
            '<div class="col-md-1 col-sm-3 first_lb"><label>Geo3<span style="color: red">*</span></label></div>'+
            '<div class="col-md-2 col-sm-8 cont_size_select">'+
            '<select class="selectpicker" id="geo_level_3" name="geo_level_3" data-live-search="true">'+
            '</select>'+
            '</div>'+
            '<div class="col-md-1 col-sm-3 first_lb"><label>Geo4<span style="color: red">*</span></label></div>'+
            '<div class="col-md-2 col-sm-8 cont_size_select">'+
            '<select class="selectpicker" id="geo_level_4" name="geo_level_4" data-live-search="true">'+
            '</select>'+
            '</div>';

        $("#geo").html(geo_1);

        var att_count ='';

        att_count +='<div class="default_box_grey">'+
            '<div class="col-md-10 col-md-offset-1 text-center tp_form inline-parent">'+
            '<div class="form-group" style="margin-bottom: 0;">'+
            '<label>Enter Praposed Attandances Count</label>&nbsp;'+
            '<input type="text" class="form-control" name="attandence_count" id ="attandence_count" placeholder="" style="width: 80px;">'+
            '</div>'+
            '</div>'+
            '<div class="clearfix"></div>'+
            '</div>';
        $("#att_count").html(att_count);
        $("#demo_data").empty();
        $("#demo_details").empty();
    }
    else if(activity_type_selected == 'FVP002')
    {
        get_geo_fo_userdata(activity_type_selected);

        var geo_2 = '';
        geo_2 +='<div class="col-md-3 col-sm-3 first_lb mrg_bottom_30"><label>Geo2<span style="color: red">*</span></label></div>'+
            '<div class="col-md-2 col-sm-8 cont_size_select mrg_bottom_30">'+
            '<select class="selectpicker" id="geo_level_2" name="geo_level_2" data-live-search="true">'+
            '<option value="">Select Geo 2</option>'+
            '</select>'+
            '</div>'+
            '<div class="col-md-1 col-sm-3 first_lb"><label>Geo3<span style="color: red">*</span></label></div>'+
            '<div class="col-md-2 col-sm-8 cont_size_select">'+
            '<select class="selectpicker" id="geo_level_3" name="geo_level_3" data-live-search="true">'+
            '</select>'+
            '</div>'+
            '<div class="col-md-1 col-sm-3 first_lb"><label>Geo4<span style="color: red">*</span></label></div>'+
            '<div class="col-md-2 col-sm-8 cont_size_select">'+
            '<select class="selectpicker" id="geo_level_4" name="geo_level_4" data-live-search="true">'+
            '</select>'+
            '</div>';

        $("#geo").html(geo_2);
        $("#att_count").empty();
        $("#demo_data").empty();
        $("#demo_details").empty();

    }
    else if(activity_type_selected == 'RMP003')
    {
        get_geo_fo_userdata(activity_type_selected);

        var geo_3 = '';
        geo_3 +='<div class="col-md-3 col-sm-3 first_lb mrg_bottom_30"><label>Geo2<span style="color: red">*</span></label></div>'+
            '<div class="col-md-2 col-sm-8 cont_size_select mrg_bottom_30">'+
            '<select class="selectpicker" id="geo_level_2" name="geo_level_2" data-live-search="true">'+
            '<option value="">Select Geo 2</option>'+
            '</select>'+
            '</div>'+
            '<div class="col-md-1 col-sm-3 first_lb"><label>Geo3<span style="color: red">*</span></label></div>'+
            '<div class="col-md-2 col-sm-8 cont_size_select">'+
            '<select class="selectpicker" id="geo_level_3" name="geo_level_3" data-live-search="true">'+
            '</select>'+
            '</div>';

        $("#geo").html(geo_3);
        $("select#geo_level_3").selectpicker('refresh');

        var att_count2 ='';

        att_count2 +='<div class="default_box_grey">'+
            '<div class="col-md-10 col-md-offset-1 text-center tp_form inline-parent">'+
            '<div class="form-group" style="margin-bottom: 0;">'+
            '<label>Enter Praposed Attandances Count</label>&nbsp;'+
            '<input type="text" class="form-control" name="attandence_count" id ="attandence_count" placeholder="" style="width: 80px;">'+
            '</div>'+
            '</div>'+
            '<div class="clearfix"></div>'+
            '</div>';
        $("#att_count").html(att_count2);
        $("#demo_data").empty();
        $("#demo_details").empty();

    }
    else if(activity_type_selected == 'RVP004')
    {
        get_geo_fo_userdata(activity_type_selected);

        var geo_4 = '';
        geo_4 +='<div class="col-md-3 col-sm-3 first_lb mrg_bottom_30"><label>Geo2</label></div>'+
            '<div class="col-md-2 col-sm-8 cont_size_select mrg_bottom_30">'+
            '<select class="selectpicker" id="geo_level_2" name="geo_level_2" data-live-search="true">'+
            '<option value="">Select Geo 2<span style="color: red">*</span></option>'+
            '</select>'+
            '</div>'+
            '<div class="col-md-1 col-sm-3 first_lb"><label>Geo3<span style="color: red">*</span></label></div>'+
            '<div class="col-md-2 col-sm-8 cont_size_select">'+
            '<select class="selectpicker" id="geo_level_3" name="geo_level_3" data-live-search="true">'+
            '</select>'+
            '</div>';

        $("#geo").html(geo_4);
        $("select#geo_level_3").selectpicker('refresh');

        $("#att_count").empty();
        $("#demo_data").empty();
        $("#demo_details").empty();
    }
    else if(activity_type_selected == 'DP005')
    {
        get_geo_fo_userdata(activity_type_selected);

        var geo_5 = '';
        geo_5 +='<div class="col-md-3 col-sm-3 first_lb mrg_bottom_30"><label>Geo2<span style="color: red">*</span></label></div>'+
            '<div class="col-md-2 col-sm-8 cont_size_select mrg_bottom_30">'+
            '<select class="selectpicker" id="geo_level_2" name="geo_level_2" data-live-search="true">'+
            '<option value="">Select Geo 2</option>'+
            '</select>'+
            '</div>'+
            '<div class="col-md-1 col-sm-3 first_lb"><label>Geo3<span style="color: red">*</span></label></div>'+
            '<div class="col-md-2 col-sm-8 cont_size_select">'+
            '<select class="selectpicker" id="geo_level_3" name="geo_level_3" data-live-search="true">'+
            '</select>'+
            '</div>'+
            '<div class="col-md-1 col-sm-3 first_lb"><label>Geo4<span style="color: red">*</span></label></div>'+
            '<div class="col-md-2 col-sm-8 cont_size_select">'+
            '<select class="selectpicker" id="geo_level_4" name="geo_level_4" data-live-search="true">'+
            '</select>'+
            '</div>';

        $("#geo").html(geo_5);

        var att_count3 ='';

        att_count3 +='<div class="default_box_grey">'+
            '<div class="col-md-10 col-md-offset-1 text-center tp_form inline-parent">'+
            '<div class="form-group" style="margin-bottom: 0;">'+
            '<label>Enter Praposed Attandances Count</label>&nbsp;'+
            '<input type="text" class="form-control" name="attandence_count" id ="attandence_count" placeholder="" style="width: 80px;">'+
            '</div>'+
            '</div>'+
            '<div class="clearfix"></div>'+
            '</div>';
        $("#att_count").html(att_count3);

        $("#demo_data").empty();


        var demo_detail='';

        demo_detail +='<div class="default_box_white">'+
            '<div class="col-md-12 plng_title"><h5>Demonstration</h5></div>'+
            '<div class="col-md-10 col-md-offset-1 text-center tp_form inline-parent">'+
            '<div class="row">'+
            '<div class="col-md-6">'+
            '<div class="form-group frm_details text-center" style="margin-bottom: 0px;">'+
            '<label>Size Of Plot</label>'+
            '<input type="text" class="form-control" name="size_of_plot" id="size_of_plot" placeholder="">'+
            '</div>'+
            '</div>'+
            '<div class="col-md-6 corp_text mrg_top_30">'+
            '<div class="form-group frm_details text-center">'+
            '<label>Spray Volume</label>'+
            '<input type="text" class="form-control" name="spray_volume" id="spray_volume" placeholder="">'+
            '</div>'+
            '</div>'+
            '</div>'+
            '</div>'+
            '<div class="clearfix"></div>'+
            '</div>';

        $("#demo_details").html(demo_detail);

    }
    else if(activity_type_selected == 'FDP006')
    {
        get_geo_fo_userdata(activity_type_selected);
        //get_demonstration_data();

        var geo_6 = '';
        geo_6 +='<div class="col-md-3 col-sm-3 first_lb mrg_bottom_30"><label>Geo2<span style="color: red">*</span></label></div>'+
            '<div class="col-md-2 col-sm-8 cont_size_select mrg_bottom_30">'+
            '<select class="selectpicker" id="geo_level_2" name="geo_level_2" data-live-search="true">'+
            '<option value="">Select Geo 2</option>'+
            '</select>'+
            '</div>'+
            '<div class="col-md-1 col-sm-3 first_lb"><label>Geo3<span style="color: red">*</span></label></div>'+
            '<div class="col-md-2 col-sm-8 cont_size_select">'+
            '<select class="selectpicker" id="geo_level_3" name="geo_level_3" data-live-search="true">'+
            '</select>'+
            '</div>'+
            '<div class="col-md-1 col-sm-3 first_lb"><label>Geo4<span style="color: red">*</span></label></div>'+
            '<div class="col-md-2 col-sm-8 cont_size_select">'+
            '<select class="selectpicker" id="geo_level_4" name="geo_level_4" data-live-search="true">'+
            '</select>'+
            '</div>';

        $("#geo").html(geo_6);

        var att_count4 ='';

        att_count4 +='<div class="default_box_grey">'+
            '<div class="col-md-10 col-md-offset-1 text-center tp_form inline-parent">'+
            '<div class="form-group" style="margin-bottom: 0;">'+
            '<label>Enter Praposed Attandances Count</label>&nbsp;'+
            '<input type="text" class="form-control" name="attandence_count" id ="attandence_count" placeholder="" style="width: 80px;">'+
            '</div>'+
            '</div>'+
            '<div class="clearfix"></div>'+
            '</div>';
        $("#att_count").html(att_count4);

        var demo_data ='';

        demo_data += '<div class="col-md-2 col-sm-3 first_lb"><label>Demonstration</label></div>'+
            '<div class="col-md-2 col-sm-8 cont_size_select">'+
            '<select class="selectpicker" name="demo_id" id="demo_id" data-live-search="true">'+
            '<option value="">Select Demonstration</option>'+
            '</select>'+
            '</div>';

        $("#demo_data").html(demo_data);
        $("select#demo_id").selectpicker('refresh');


        var demo_detail1='';

        demo_detail1 +='<div class="default_box_white">'+
            '<div class="col-md-12 plng_title"><h5>Demonstration</h5></div>'+
            '<div class="col-md-10 col-md-offset-1 text-center tp_form inline-parent">'+
            '<div class="row">'+
            '<div class="col-md-6">'+
            '<div class="form-group frm_details text-center" style="margin-bottom: 0px;">'+
            '<label>Size Of Plot</label>'+
            '<input type="text" class="form-control" name="size_of_plot" id="size_of_plot" placeholder="">'+
            '</div>'+
            '</div>'+
            '<div class="col-md-6 corp_text mrg_top_30">'+
            '<div class="form-group frm_details text-center">'+
            '<label>Spray Volume</label>'+
            '<input type="text" class="form-control" name="spray_volume" id="spray_volume" placeholder="">'+
            '</div>'+
            '</div>'+
            '</div>'+
            '</div>'+
            '<div class="clearfix"></div>'+
            '</div>';

        $("#demo_details").html(demo_detail1);
    }
}

function get_geo_fo_userdata(activity_type_selected){
    $.ajax({
        type: 'POST',
        url: site_url+"ecp/get_geo_activity",
        data: {activity_type_selected:activity_type_selected},
        dataType : 'json',
        success: function(resp){
            if(activity_type_selected == "RMP003" || activity_type_selected == "RVP004"){

                $("select#geo_level_2").empty();
                $("select#geo_level_2").selectpicker('refresh');

                if(resp.length > 0){
                    $("select#geo_level_2").append('<option value="">Select Geo 2</option>');
                    $.each(resp, function(key, value) {
                        $('select#geo_level_2').append('<option value="' + value.political_geo_id + '" >' +value.political_geography_name+ '</option>');
                    });
                    $("select#geo_level_2").selectpicker('refresh');
                }

            }
            else{

                $("select#geo_level_2").empty();
                $("select#geo_level_2").selectpicker('refresh');


                if(resp.length > 0){

                    $("select#geo_level_2").append('<option value="">Select Geo 2</option>');

                    $.each(resp, function(key, value) {
                        $('select#geo_level_2').append('<option value="' + value.political_geo_id + '" >' +value.political_geography_name+ '</option>');
                    });

                    $("select#geo_level_2").selectpicker('refresh');

                    $("select#geo_level_3").append('<option value="">Select Geo 3</option>');
                    $("select#geo_level_3").selectpicker('refresh');
                    $("select#geo_level_4").append('<option value="">Select Geo 4</option>');
                    $("select#geo_level_4").selectpicker('refresh');
                }
            }

        }
    });
}

function get_child_by_perent_id(activity_type_selected,perent_id,second_perent)
{
    $.ajax({
        type: 'POST',
        url: site_url+"ecp/get_geo_activity",
        data: {activity_type_selected:activity_type_selected,perent_id:perent_id,second_perent:second_perent},
        dataType : 'json',
        success: function(resp){
            if(activity_type_selected == "RMP003" || activity_type_selected == "RVP004"){

                $("select#geo_level_3").empty();
                $("select#geo_level_3").selectpicker('refresh');


                if(resp.length > 0){

                    $("select#geo_level_3").append('<option value="">Select Geo 3</option>');

                    $.each(resp, function(key, value) {
                        $('select#geo_level_3').append('<option value="' + value.political_geo_id + '" >' +value.political_geography_name+ '</option>');
                    });

                    $("select#geo_level_3").selectpicker('refresh');
                }

            }
            else{

                $("select#geo_level_3").empty();
                $("select#geo_level_3").selectpicker('refresh');


                if(resp.length > 0){

                    $("select#geo_level_3").append('<option value="">Select Geo 3</option>');

                    $.each(resp, function(key, value) {
                        $('select#geo_level_3').append('<option value="' + value.political_geo_id + '" >' +value.political_geography_name+ '</option>');
                    });

                    $("select#geo_level_3").selectpicker('refresh');

                    $("select#geo_level_4").append('<option value="">Select Geo 4</option>');
                    $("select#geo_level_4").selectpicker('refresh');

                }

            }

        }
    });
}

function get_child_by_parent_parent_id(activity_type_selected,perent_id)
{
    $.ajax({
        type: 'POST',
        url: site_url+"ecp/get_geo_activity",
        data: {activity_type_selected:activity_type_selected,perent_id:perent_id},
        dataType : 'json',
        success: function(resp){

            $("select#geo_level_4").empty();
            $("select#geo_level_4").selectpicker('refresh');


            if(resp.length > 0){

                $("select#geo_level_4").append('<option value="">Select Geo 4</option>');

                $.each(resp, function(key, value) {
                    $('select#geo_level_4').append('<option value="' + value.political_geo_id + '" >' +value.political_geography_name+ '</option>');
                });

                $("select#geo_level_4").selectpicker('refresh');

            }
        }
    });
}

/*function get_demonstration_data()
 {
 $.ajax({
 type: 'POST',
 url: site_url+"ecp/get_demonstration_data",
 data: {},
 dataType : 'json',
 success: function(resp){

 $("select#demo_id").empty();
 $("select#demo_id").selectpicker('refresh');

 if(resp.length > 0){

 $("select#demo_id").append('<option value="">Select Demonstration</option>');

 $.each(resp, function(key, value) {
 $('select#demo_id').append('<option value="' + value.political_geo_id + '" >' +value.political_geography_name+ '</option>');
 });

 $("select#demo_id").selectpicker('refresh');

 }
 }
 });
 }*/

$(document).on("change","select#farmer_id",function() {

    var  farmer_id = $('select#farmer_id option:selected').val();

    get_mobile_number_by_farmer_id(farmer_id);

});


function get_mobile_number_by_farmer_id(farmer_id)
{
    $.ajax({
        type: 'POST',
        url: site_url+"ecp/get_mobile_number_by_farmer",
        data: {farmer_id:farmer_id},
        dataType : 'json',
        success: function(resp){
            $("input#farmer_no").val(resp.primary_mobile_no);
        }
    });
}

function getDigitalLibrary(activity_type_id)
{
    $.ajax({
        type: 'POST',
        url: site_url+"ecp/getDigitalLibraryData",
        data: {activity_type_id:activity_type_id},
        dataType : 'json',
        success: function(resp){

            $("select#digital_id").empty();
            $("select#digital_id").selectpicker('refresh');

            if(resp.length > 0){

                $("select#digital_id").append('<option value="">Select Digital Library</option>');

                $.each(resp, function(key, value) {
                    $('select#digital_id').append('<option value="' + value.digital_library_id + '" attr-link="'+ value.link +'">' +value.library_name+ '</option>');
                });

                $("select#digital_id").selectpicker('refresh');

            }
        }
    });
}

function selectCrop(select)
{
    var option = select.options[select.selectedIndex];
    var ul = select.parentNode.parentNode.parentNode.parentNode.getElementsByTagName('ul')[0];

    // var ul = $("div.selected_data").find('ul');

    var choices = ul.getElementsByTagName('input');
    for (var i = 0; i < choices.length; i++)
        if (choices[i].value == option.value)
            return;

    var li = document.createElement('li');
    var input = document.createElement('input');
    var text = document.createTextNode(option.firstChild.data);

    input.type = 'hidden';
    input.name = 'crop[]';
    input.value = option.value;

    li.appendChild(input);
    li.appendChild(text);
    li.setAttribute('onclick', 'this.parentNode.removeChild(this);');

    ul.appendChild(li);
}


function selectProducts(select)
{
    var option = select.options[select.selectedIndex];
    var ul = select.parentNode.parentNode.parentNode.parentNode.getElementsByTagName('ul')[0];


    var choices = ul.getElementsByTagName('input');
    for (var i = 0; i < choices.length; i++)
        if (choices[i].value == option.value)
            return;

    var li = document.createElement('li');
    var input = document.createElement('input');
    var text = document.createTextNode(option.firstChild.data);

    input.type = 'hidden';
    input.name = 'product_sku[]';
    input.value = option.value;

    li.appendChild(input);
    li.appendChild(text);
    li.setAttribute('onclick', 'this.parentNode.removeChild(this);');

    ul.appendChild(li);
}


function selectDiseases(select)
{
    var option = select.options[select.selectedIndex];
    var ul = select.parentNode.parentNode.parentNode.parentNode.getElementsByTagName('ul')[0];


    var choices = ul.getElementsByTagName('input');
    for (var i = 0; i < choices.length; i++)
        if (choices[i].value == option.value)
            return;

    var li = document.createElement('li');
    var input = document.createElement('input');
    var text = document.createTextNode(option.firstChild.data);

    input.type = 'hidden';
    input.name = 'diseases[]';
    input.value = option.value;

    li.appendChild(input);
    li.appendChild(text);
    li.setAttribute('onclick', 'this.parentNode.removeChild(this);');

    ul.appendChild(li);
}

/*as js*/
$(document).ready(function() {
    $(".js-example-tags").select2({
        tags: true
    }).on('change', function() {
        var $selected = $(this).find('option:selected');
        var $container = $(this).siblings('.js-example-tags-container');

        var $list = $('<ul>');
        $selected.each(function(k, v) {
            var $li = $('<li class="tag-selected"><a class="destroy-tag-selected">�</a>' + $(v).text() + '</li>');
            $li.children('a.destroy-tag-selected')
                .off('click.select2-copy')
                .on('click.select2-copy', function(e) {
                    var $opt = $(this).data('select2-opt');
                    $opt.attr('selected', false);
                    $opt.parents('select').trigger('change');
                }).data('select2-opt', $(v));
            $list.append($li);
        });
        $container.html('').append($list);
    }).trigger('change');
});

$(document).on('click', '#check_save', function () {
    $('#farmer_id').addClass('ignore');
    $('#farmer_no').addClass('ignore');
    $('#customer_name').addClass('ignore');
    $('#customer_no').addClass('ignore');

    var param = $("#activity_unplanned").serializeArray();

    //console.log(param);die;
    var $valid = $("#activity_unplanned").valid();
    if(!$valid) {
        activity_unplanned_validators.focusInvalid();
        return false;
    }
    else
    {
        if($("#farmer_detail").children().length <= 0)
        {
            var message = "";
            message += 'No Data in Key Farmer Details.';

            $('<div></div>').appendTo('body')
                .html('<div><b>'+message+'</b></div>')
                .dialog({
                    appendTo: "#success_file_popup",
                    modal: true,
                    zIndex: 10000,
                    autoOpen: true,
                    width: 'auto',
                    resizable: true,
                    close: function (event, ui) {
                        $(this).remove();
                    }
                });
            return false;
        }
        else  if($("#customer_detail").children().length <= 0)
        {
            var message = "";
            message += 'No Data in Customer Details.';

            $('<div></div>').appendTo('body')
                .html('<div><b>'+message+'</b></div>')
                .dialog({
                    appendTo: "#success_file_popup",
                    modal: true,
                    zIndex: 10000,
                    autoOpen: true,
                    width: 'auto',
                    resizable: true,
                    close: function (event, ui) {
                        $(this).remove();
                    }
                });
            return false;
        }
        else {
            $.ajax({
                type: 'POST',
                url: site_url + "ecp/add_activity_unplanned_details",
                data: param,
                success: function (resp) {
                    var message = "";
                    if(resp != 0){
                        console.log(resp);
                        $('#activity_planning_id').val(resp);
                        message += 'Data Inserted successfully.';
                    }
                    else{

                        message += 'Data not Inserted.';
                    }
                    $('<div></div>').appendTo('body')
                        .html('<div><b>'+message+'</b></div>')
                        .dialog({
                            appendTo: "#success_file_popup",
                            modal: true,
                            zIndex: 10000,
                            autoOpen: true,
                            width: 'auto',
                            resizable: true,
                            close: function (event, ui) {
                                $(this).remove();

                            }
                        });
                }
            });
        }
    }
    return false;
});


/*$(document).on('click', '#followup', function () {
    $('#farmer_id').addClass('ignore');
    $('#farmer_no').addClass('ignore');
    $('#customer_name').addClass('ignore');
    $('#customer_no').addClass('ignore');

    var param = $("#activity_unplanned").serializeArray();

    //console.log(param);die;
    var $valid = $("#activity_unplanned").valid();
    if(!$valid) {
        activity_unplanned_validators.focusInvalid();
        return false;
    }
    else
    {
        if($("#farmer_detail").children().length <= 0)
        {
            var message = "";
            message += 'No Data in Key Farmer Details.';

            $('<div></div>').appendTo('body')
                .html('<div><b>'+message+'</b></div>')
                .dialog({
                    appendTo: "#success_file_popup",
                    modal: true,
                    zIndex: 10000,
                    autoOpen: true,
                    width: 'auto',
                    resizable: true,
                    close: function (event, ui) {
                        $(this).remove();
                    }
                });
            return false;
        }
        else {
            $.ajax({
                type: 'POST',
                url: site_url + "ecp/add_activity_planning_details",
                data: param,
                success: function (resp) {
                    var message = "";
                    if(resp != 0){
                        $('#activity_planning_id').val(resp);
                        message += 'Data Inserted successfully.';
                    }
                    else{

                        message += 'Data not Inserted.';
                    }
                    $('<div></div>').appendTo('body')
                        .html('<div><b>'+message+'</b></div>')
                        .dialog({
                            appendTo: "#success_file_popup",
                            modal: true,
                            zIndex: 10000,
                            autoOpen: true,
                            width: 'auto',
                            resizable: true,
                            close: function (event, ui) {
                                $(this).remove();

                            }
                        });
                }
            });
        }
    }
    return false;
});*/
