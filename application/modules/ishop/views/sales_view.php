<?php if (!$this->input->is_ajax_request()) { ?>
<?php
$attributes = array('class' => '', 'id' => 'view_ishop_sales','name'=>'view_ishop_sales');
echo form_open('',$attributes); ?>
<!--------------------------------------Filter1-------------------------------------------------->
<div class="col-md-12 od_approval">
    <div class="top_form">
        <div class="row">
            <?php
            // testdata($current_user->role_id);
            if($current_user->role_id == 8)
            {
                ?>
                <div class="col-md-12 text-center sub_nave">
                    <div class="inn_sub_nave">
                        <ul>
                            <li><a href="<?php echo base_url('/ishop/ishop_sales') ?>">Sales</a></li>
                            <li><a href="<?php echo base_url('/ishop/physical_stock') ?>">Physical Stock</a></li>
                            <li class="active"><a href="<?php echo base_url('/ishop/sales_view') ?>">View</a></li>
                        </ul>
                        <div class="clearfix"></div>
                    </div>
                </div>
                <div class="col-md-12 text-center radio_space">
                    <div class="radio">
                        <input class="select_customer_type" type="radio" name="radio1" id="retailer" value="retailer" checked>
                        <label for="radio1">Retailer</label>
                    </div>
                    <div class="radio">
                        <input class="select_customer_type" type="radio" name="radio1" id="distributor" value="distributor">
                        <label for="radio2">Distributor</label>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <div class="col-md-12 distributore_form od_approval">
                    <div class="row">
                        <div class="retailer_checked_sales fl_calender_i" id="retailer_checked_sales" >
                            <div class="col-md-3 col-sm-6 tp_form">
                                <div class="form-group">
                                    <label>Geo Level 3</label>
                                    <select class="selectpicker" name="geo_level_0" id="geo_level_0">
                                        <option value="0">Select Geo Location</option>
                                        <?php
                                        if(isset($geo_data) && !empty($geo_data))
                                        {
                                            foreach($geo_data as $k=> $geo_val)
                                            {
                                                ?>
                                                <option value="<?php echo $geo_val['political_geo_id']; ?>" attr-name="<?php echo $geo_val['political_geography_name']; ?>"><?php echo $geo_val['political_geography_name']; ?></option>
                                                <?php
                                            }
                                        }
                                        ?>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6 tp_form">
                                <div class="form-group">
                                    <label>Geo Level 2</label>
                                    <select class="selectpicker" name="geo_level_1" id="geo_level_1">
                                        <option value="0">Select Geo Location</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6 tp_form">
                                <div class="form-group">
                                    <label>Retailer Name</label>
                                    <select class="selectpicker" name="fo_retailer_id" id="retailer_sales">
                                        <option value="0">Select Retailer</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6 tp_form">
                                <div class="form-group">
                                    <label>From Month</label>
                                    <input type="text" class="form-control" name="from_month" id="form_month" placeholder="">
                                    <div class="cal_icon" style="position: absolute; right: 23px; bottom: 16px; top: auto;">
                                        <a href="#">
                                            <i class="fa fa-calendar" aria-hidden="true">
                                            </i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6 tp_form">
                                <div class="form-group">
                                    <label>TO Month</label>
                                    <input type="text" class="form-control" name="to_month" id="to_month" placeholder="">
                                    <div class="cal_icon" style="position: absolute; right: 23px; bottom: 16px; top: auto;">
                                        <a href="#">
                                            <i class="fa fa-calendar" aria-hidden="true">
                                            </i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="distributor_checked_sales" id="distributor_checked_sales" style="display:none;">
                            <div class="col-md-10 col-md-offset-1 tp_form">
                                <div class="row">
                                    <div class="col-md-3 col-sm-6 tp_form">
                                        <div class="form-group">
                                            <label>Geo Level</label>
                                            <select class="selectpicker distributor_geo_level " id="distributor_geo_level" name="distributor_geo_level" data-live-search="true">
                                            </select>
                                        </div>
                                    </div>

                                    <div class="col-md-3 col-sm-6 tp_form">
                                        <div class="form-group">
                                            <label>Distributor Name</label>
                                            <select class="selectpicker" id="distributor_sales" name="distributor_sales" data-live-search="true">
                                                <option value="0">Select Distributor</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-6 tp_form">
                                        <div class="form-group">
                                            <label>From Month</label>
                                            <input type="text" class="form-control" name="from_month_dist" id="from_month_dist" placeholder="">
                                            <div class="cal_icon" style="position: absolute; right: 23px; bottom: 16px; top: auto;">
                                                <a href="#">
                                                    <i class="fa fa-calendar" aria-hidden="true">
                                                    </i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-6 tp_form">
                                        <div class="form-group">
                                            <label>TO Month</label>
                                            <input type="text" class="form-control" name="to_month_dist" id="to_month_dist" placeholder="">
                                            <div class="cal_icon" style="position: absolute; right: 23px; bottom: 16px; top: auto;">
                                                <a href="#">
                                                    <i class="fa fa-calendar" aria-hidden="true">
                                                    </i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12 tp_form">
                                <div class="row">
                                    <div class="col-md-3 col-sm-6 tp_form">
                                        <div class="form-group">
                                            <label for="invoice_no">Scarch By Invoice No.</label>
                                            <input type="text" class="form-control" name="invoice_no" id="invoice_no" placeholder="" style="width: 100%;">
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="col-md-2 save_btn">
                            <label>&nbsp;</label>
                            <button type="submit" class="btn btn-primary gren_btn" style="padding: 0 !important;">Execute</button>
                        </div>

                    </div>
                </div>
                <div class="clearfix"></div>
                <?php
            }
            ?>
        </div>
    </div>

    <input class="login_customer_role" type="hidden" name="login_customer_role" id="login_customer_role" value="<?php echo $current_user->role_id; ?>" />
    <input class="login_customer_id" type="hidden" name="login_customer_id" id="login_customer_id" value="<?php echo $current_user->id; ?>" />
    <input class="login_customer_countryid" type="hidden" name="login_customer_countryid" id="login_customer_countryid" value="<?php echo $current_user->country_id; ?>" />

    <input class="page_function" type="hidden" name="page_function" id="" value="<?php echo $this->uri->segment(2); ?>" />

    <div class="clearfix"></div>
</div>
<?php echo form_close(); ?>
<?php }?>
<?php if ($this->input->is_ajax_request()) {
echo theme_view('common/middle');
}
?>
<div id="middle_container_sales" class="sales_cont">

</div>
<div id="product_table_container_sales">

</div>