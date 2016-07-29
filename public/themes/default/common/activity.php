
<div class="col-md-12 full-height">
            <div class="top_form planning_parent">
                <div class="row">
                    <div class="col-md-12">
                        <div class="default_box_white">
                            <div class="col-md-12 text-center tp_form inline-parent">
                                <div class="form-group">
                                    <label>Select Date<span style="color: red">*</span></label>
                                    <input type="text" class="form-control" name="planning_date" id="planning_date" placeholder="">
                                </div>

                                <div class="form-group">
                                    <label>Time<span style="color: red">*</span></label>
                                    <div class="bootstrap-timepicker bootstrap-timepicker-as">
                                        <input id="planning_time" name="planning_time" type="text" class="input-group-time form-control input-append">
                                    </div>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                        </div>

                        <div class="default_box_white">
                            <div class="col-md-12 tp_form mr_bot_group">
                                <div class="row form-group">
                                    <div class="col-md-3 col-sm-3 first_lb mrg_bottom_30"><label>Select Activity Type<span style="color: red">*</span></label></div>
                                    <div class="col-md-4 col-sm-8 cont_size_select mrg_bottom_30" >
                                        <select class="selectpicker" id="activity_type_id" name="activity_type_id" data-live-search="true" disabled>
                                            <option value="">Select Activity Type</option>
                                            <?php
                                            if(isset($activity_type) && !empty($activity_type)) {
                                                foreach ($activity_type as $key => $val) {
                                                    ?>
                                                    <option <?php if(isset($activity["activity_type_id"]) && $activity["activity_type_id"]== $val['activity_type_country_id']){ echo "selected"; } ?> value="<?php echo $val['activity_type_country_id']; ?>" code="<?php echo $val['activity_type_code']; ?>"><?php echo $val['activity_type_country_name']; ?></option>
                                                    <?php
                                                }
                                            }
                                            ?>
                                        </select>
                                    </div>

                                    <!--Demonstration Dropdown-->
                                    <div id="demo_data">
                                    </div>
                                    <!--Demonstration Dropdown-->

                                </div>

                                <!--GEO  Dropdown-->
                                <div class="row form-group" id="geo">
                                    <?php  if(isset($geo_level_2) && !empty($geo_level_2))
                                    {
                                    ?>
                                        <div class="col-md-3 col-sm-3 first_lb mrg_bottom_30"><label>Geo2<span style="color: red">*</span></label></div>
                                        <div class="col-md-2 col-sm-8 cont_size_select mrg_bottom_30">
                                            <select class="selectpicker" data-live-search="true" name="geo_level_2" id="geo_level_2" disabled>
                                                <option value="<?php echo $geo_level_2['political_geo_id'] ?>"><?php echo $geo_level_2['political_geography_name'] ?></option>
                                            </select>
                                        </div>
                                        <?php
                                    }
                                    ?>
                                    <?php  if(isset($geo_level_3) && !empty($geo_level_3))
                                    {
                                    ?>
                                        <div class="col-md-1 col-sm-3 first_lb"><label>Geo3<span style="color: red">*</span></label></div>
                                        <div class="col-md-2 col-sm-8 cont_size_select">
                                            <select class="selectpicker" data-live-search="true" name="geo_level_3" id="geo_level_3" disabled>
                                                <option value="<?php echo $geo_level_3['political_geo_id'] ?>"><?php echo $geo_level_3['political_geography_name'] ?></option>
                                            </select>
                                        </div>
                                        <?php
                                    }
                                    ?>
                                   <?php  if(isset($geo_level_4) && !empty($geo_level_4))
                                   {
                                       ?>
                                       <div class="col-md-1 col-sm-3 first_lb"><label>Geo4<span style="color: red">*</span></label></div>
                                       <div class="col-md-2 col-sm-8 cont_size_select">
                                           <select class="selectpicker" data-live-search="true" name="geo_level_4" id="geo_level_4" disabled>
                                               <option value="<?php echo $geo_level_4['political_geo_id'] ?>"><?php echo $geo_level_4['political_geography_name'] ?></option>
                                           </select>
                                       </div>
                                    <?php
                                   }
                                   ?>

                                </div>

                                <!--GEO  Dropdown-->
                                <div class="row form-group">
                                    <div class="col-md-3 col-sm-3 first_lb"><label>Address<span style="color: red">*</span></label></div>
                                    <div class="col-md-8 col-sm-8">
                                        <textarea class="form-control" rows="4" name="activity_address" id="activity_address" disabled><?php echo $activity['location'] ?></textarea>
                                    </div>

                                </div>
                            </div>
                            <div class="clearfix"></div>
                        </div>


                        <!--Demonstration  Detail-->

                        <div id="demo_details">

                        </div>

                        <!--Demonstration  Detail-->

                        <div class="default_box_grey">
                            <div class="col-md-12">
                                <div class="row">
                                    <div class="col-md-5 tp_form inline-parent corp_text corp_text_align">
                                        <div class="form-group" style="margin-bottom: 0px;">
                                            <label>Corp<span style="color: red">*</span></label>
                                            <select id="crop_id" name="crop_id" onchange="selectCrop(this);">
                                                <option value="">Select Corp</option>

                                                <!--    <select id="crop_id" onchange="selectCrop(this);" class="form-control js-example-tags" multiple="multiple">
                                                        <option value="" selected="selected">Select Corp</option>-->

                                                <?php
                                                if(isset($crop_details) && !empty($crop_details)) {
                                                    foreach ($crop_details as $key => $val) {
                                                        ?>
                                                        <option value="<?php echo $val['crop_country_id']; ?>" selected="selected"><?php echo $val['crop_name']; ?></option>
                                                        <?php
                                                    }
                                                }
                                                ?>
                                            </select>
                                            <!--    <div class="js-example-tags-container"></div>-->

                                            <div class="plus_btn"><a href="#"><i class="fa fa-plus" aria-hidden="true"></i></a></div>
                                            <!--<div class="js-example-tags-container"></div>-->

                                        </div>
                                    </div>
                                    <div class="col-md-7 selected_data" >

                                        <ul>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                        </div>

                        <div class="default_box_grey">
                            <div class="col-md-12">
                                <div class="row">
                                    <div class="col-md-5 tp_form inline-parent corp_text corp_text_align">
                                        <div class="form-group" style="margin-bottom: 0px;">
                                            <label>Products<span style="color: red">*</span></label>
                                            <select id="product_sku_id" name="product_sku_id" onchange="selectProducts(this);">
                                                <option value="">Select Product</option>
                                                <?php
                                                if(isset($product_sku) && !empty($product_sku)) {
                                                    foreach ($product_sku as $key => $val) {
                                                        ?>
                                                        <option value="<?php echo $val['product_sku_country_id']; ?>"><?php echo $val['product_sku_name']; ?></option>
                                                        <?php
                                                    }
                                                }
                                                ?>
                                            </select>
                                            <div class="plus_btn"><a href="#"><i class="fa fa-plus" aria-hidden="true"></i></a></div>
                                        </div>
                                    </div>
                                    <div class="col-md-7">
                                        <ul></ul>
                                    </div>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                        </div>

                        <div class="default_box_grey">
                            <div class="col-md-12">
                                <div class="row">
                                    <div class="col-md-5 tp_form inline-parent corp_text corp_text_align">
                                        <div class="form-group" style="margin-bottom: 0px;">
                                            <label>Diseases<span style="color: red">*</span></label>
                                            <select id="diseases_id" name="diseases_id" onchange="selectDiseases(this);">
                                                <option value="">Select Diseases</option>
                                                <?php
                                                if(isset($diseases_details) && !empty($diseases_details)) {
                                                    foreach ($diseases_details as $key => $val) {
                                                        ?>
                                                        <option value="<?php echo $val['disease_country_id']; ?>"><?php echo $val['disease_name']; ?></option>
                                                        <?php
                                                    }
                                                }
                                                ?>
                                            </select>
                                            <div class="plus_btn"><a href="#"><i class="fa fa-plus" aria-hidden="true"></i></a></div>
                                        </div>
                                    </div>
                                    <div class="col-md-7">
                                        <ul></ul>
                                    </div>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                        </div>

                        <div class="default_box_white">
                            <div class="col-md-12 plng_title"><h5>Key Farmer Details</h5></div>
                            <div class="col-md-10 col-md-offset-1 text-center tp_form inline-parent">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group frm_details text-center" style="margin-bottom: 0px;">
                                            <label>Key Farmer<span style="color: red">*</span></label>
                                            <select class="selectpicker" name="farmer_id" id="farmer_id" data-live-search="true">
                                                <option value="">Select Farmer</option>
                                                <?php
                                                if(isset($key_farmer) && !empty($key_farmer)) {
                                                    foreach ($key_farmer as $key => $val) {
                                                        ?>
                                                        <option value="<?php echo $val['id']; ?>" attr-name="<?php echo $val['display_name']; ?>"><?php echo $val['display_name']; ?></option>
                                                        <?php
                                                    }
                                                }
                                                ?>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-6 corp_text mrg_top_30">
                                        <div class="form-group frm_details text-center">
                                            <label>Mobile No.<span style="color: red">*</span></label>
                                            <input type="text" class="form-control" name="farmer_no" id="farmer_no" placeholder="">
                                            <div class="plus_btn" ><a  href="javascript: void(0);" id="add_farmer"><i class="fa fa-plus" aria-hidden="true"></i></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-8 col-md-offset-2">
                                <div id="no-more-tables">
                                    <table class="col-md-12 table-bordered table-striped table-condensed cf">
                                        <thead class="cf">
                                        <tr>
                                            <th style="padding: 4px 0;">
                                                Key Farmer
                                                <span class="rts_bordet"></span>
                                            </th>
                                            <th style="padding: 4px 0;">Mobile No.<span class="rts_bordet"></th>
                                            <th style="padding: 4px 0;">Action</th>
                                        </tr>
                                        </thead>
                                        <tbody id="farmer_detail" class="tbl_body_row">
                                        </tbody>
                                    </table>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                        </div>

                        <!--att_count  Detail-->
                        <div id="att_count">
                        </div>
                        <!--att_count  Detail-->
                        <div class="default_box_white">
                            <div class="col-md-10 col-md-offset-1 text-center tp_form inline-parent">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group frm_details text-center" style="margin-bottom: 0px;">
                                            <label>Digital Library</label>
                                            <select class="selectpicker" name="digital_id[]" id="digital_id" data-live-search="true" multiple>
                                                <option value="">Select Digital Library</option>
                                            </select>
                                        </div>
                                    </div>
                                    <!--<div class="col-md-6 corp_text mrg_top_30">
                                        <div class="form-group frm_details text-center">
                                            <label>Qty.</label>
                                            <input type="text" class="form-control" name="qty" id="qty" placeholder="">
                                            <div class="plus_btn"><a href="javascript: void(0);" id="add_product"><i class="fa fa-plus" aria-hidden="true"></i></a></div>
                                        </div>
                                    </div>-->
                                </div>
                            </div>
                            <div class="clearfix"></div>
                        </div>

                        <div class="default_box_white">
                            <div class="col-md-10 col-md-offset-1 text-center tp_form inline-parent">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group frm_details text-center" style="margin-bottom: 0px;">
                                            <label>Joint Visit</label>
                                            <select class="selectpicker" name="joint_id[]" id="joint_id" data-live-search="true" multiple>
                                                <option value="">Select Joint Visit</option>
                                                <?php
                                                if(isset($employee_visit) && !empty($employee_visit)) {
                                                    foreach ($employee_visit as $key => $val) {
                                                        ?>
                                                        <option value="<?php echo $val['id']; ?>" attr-name="<?php echo $val['display_name']; ?>"><?php echo $val['display_name']; ?></option>
                                                        <?php
                                                    }
                                                }
                                                ?>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                        </div>


                        <div class="default_box_white">
                            <div class="col-md-12 plng_title"><h5>Discussion Point</h5></div>
                            <div class="col-md-10 col-md-offset-1 text-center tp_form inline-parent">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group frm_details text-center" style="margin-bottom: 0px;">
                                            <label>Point Of Discussion</label>
                                            <input type="text" class="form-control" name="pod" id="pod" placeholder="">
                                        </div>
                                    </div>
                                    <div class="col-md-6 corp_text mrg_top_30">
                                        <div class="form-group frm_details text-center">
                                            <label>Set Alert </label>
                                            <textarea class="form-control" rows="3" name="set_alert"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                        </div>


                        <div class="default_box_white">
                            <div class="col-md-12 plng_title"><h5>Products Sample</h5></div>
                            <div class="col-md-10 col-md-offset-1 text-center tp_form inline-parent">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group frm_details text-center" style="margin-bottom: 0px;">
                                            <label>Products</label>
                                            <select class="selectpicker" name="product_sample_id" id="product_sample_id" data-live-search="true">
                                                <option value="">Select Product</option>
                                                <?php
                                                if(isset($product_sku) && !empty($product_sku)) {
                                                    foreach ($product_sku as $key => $val) {
                                                        ?>
                                                        <option value="<?php echo $val['product_sku_country_id']; ?>" attr-name="<?php echo $val['product_sku_name']; ?>"><?php echo $val['product_sku_name']; ?></option>
                                                        <?php
                                                    }
                                                }
                                                ?>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-6 corp_text mrg_top_30">
                                        <div class="form-group frm_details text-center">
                                            <label>Qty.</label>
                                            <input type="text" class="form-control" name="qty" id="qty" placeholder="">
                                            <div class="plus_btn"><a href="javascript: void(0);" id="add_product"><i class="fa fa-plus" aria-hidden="true"></i></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-8 col-md-offset-2" >
                                <div id="no-more-tables">
                                    <table class="col-md-12 table-bordered table-striped table-condensed cf">
                                        <thead class="cf">
                                        <tr>
                                            <th style="padding: 4px 0;">
                                                Products Sample
                                                <span class="rts_bordet"></span>
                                            </th>
                                            <th style="padding: 4px 0;">Qty.<span class="rts_bordet"></span></th>
                                            <th style="padding: 4px 0;">Action</th>
                                        </tr>
                                        </thead>
                                        <tbody id="product_detail" class="tbl_body_row">

                                        </tbody>

                                    </table>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                        </div>

                        <div class="material_request">
                            <h6>Material Request</h6>
                            <div class="material_request_inn">
                                <table class="request_table tp_form">
                                    <thead>
                                    <tr>
                                        <th>
                                            <h6>Product</h6>
                                            <div class="form-group">
                                                <label>Products</label>
                                                <select class="selectpicker" name="product_material_id" id="product_material_id" data-live-search="true">
                                                    <option value="">Select Product</option>
                                                    <?php
                                                    if(isset($product_sku) && !empty($product_sku)) {
                                                        foreach ($product_sku as $key => $val) {
                                                            ?>
                                                            <option value="<?php echo $val['product_sku_country_id']; ?>" attr-name="<?php echo $val['product_sku_name']; ?>"><?php echo $val['product_sku_name']; ?></option>
                                                            <?php
                                                        }
                                                    }
                                                    ?>
                                                </select>
                                            </div>
                                            <div class="form-group corp_text text-center">
                                                <label>Qty.</label>
                                                <input type="text" class="form-control" name="qty_material" id="qty_material" placeholder="" style="width: 80px;">
                                                <div class="plus_btn"  style="margin-top: -3px;"><a href="javascript: void(0);" id="add_product_material"><i class="fa fa-plus" aria-hidden="true"></i></a></div>
                                            </div>
                                        </th>
                                        <th>
                                            <h6>Promo Materials</h6>
                                            <div class="form-group">
                                                <label>Materials</label>
                                                <select class="selectpicker" name="material_id" id="material_id" data-live-search="true">
                                                    <option value="">Select Materials</option>
                                                    <?php
                                                    if(isset($materials) && !empty($materials)) {
                                                        foreach ($materials as $key => $val) {
                                                            ?>
                                                            <option value="<?php echo $val['promotional_country_id']; ?>" attr-name="<?php echo $val['promotional_material_country_name']; ?>"><?php echo $val['promotional_material_country_name']; ?></option>
                                                            <?php
                                                        }
                                                    }
                                                    ?>
                                                </select>
                                            </div>
                                            <div class="form-group corp_text text-center">
                                                <label>Qty.</label>
                                                <input type="text" class="form-control" name="m_qty" id="m_qty" placeholder="" style="width: 80px;">
                                                <div class="plus_btn"  style="margin-top: -3px;"><a href="javascript: void(0);" id="add_material"><i class="fa fa-plus" aria-hidden="true"></i></a></div>
                                            </div>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <div class="col-md-10 col-md-offset-1" >
                                                <div id="no-more-tables">
                                                    <table class="col-md-12 table-bordered table-striped table-condensed cf">
                                                        <thead class="cf">
                                                        <tr>
                                                            <th style="padding: 4px 0;">
                                                                Products
                                                                <span class="rts_bordet"></span>
                                                            </th>
                                                            <th style="padding: 4px 0;">Qty.<span class="rts_bordet"></span></th>
                                                            <th style="padding: 4px 0;">Action</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody id="product_material_detail" class="tbl_body_row">

                                                        </tbody>
                                                    </table>
                                                    <div class="clearfix"></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="col-md-10 col-md-offset-1" >
                                                <div id="no-more-tables">
                                                    <table class="col-md-12 table-bordered table-striped table-condensed cf">
                                                        <thead class="cf">
                                                        <tr>
                                                            <th style="padding: 4px 0;">
                                                                Materials
                                                                <span class="rts_bordet"></span>
                                                            </th>
                                                            <th style="padding: 4px 0;">Qty.<span class="rts_bordet"></span></th>
                                                            <th style="padding: 4px 0;">Action</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody id="material_detail" class="tbl_body_row">
                                                        </tbody>
                                                    </table>
                                                    <div class="clearfix"></div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <input class="activity_planning_id" type="hidden" name="inserted_activity_planning_id" id="activity_planning_id" value="" />
            <input class="current_user_id" type="hidden" name="current_user_id" id="current_user_id" value="<?php echo $current_user->id ;?>" />
            <input class="current_role_id" type="hidden" name="current_role_id" id="current_role_id" value="<?php echo $current_user->role_id ;?>" />
            <input class="current_country_id" type="hidden" name="current_country_id" id="current_country_id" value="<?php echo $current_user->country_id;?>" />
            <input class="current_local_date" type="hidden" name="current_local_date" id="current_local_date" value="<?php echo $current_user->local_date;?>" />

            <div class="col-md-12 table_bottom pln_table_bottom">
                <div class="row">
                    <div class="save_btn">
                        <button type="button" class="btn btn-primary" id="check_save">Save</button>
                        <button type="button" class="btn btn-primary" id="check_cancel">Cancel</button>
                    </div>
                </div>
            </div>
            <div class="clearfix"></div>
        </div>
        <?php echo form_close(); ?>
