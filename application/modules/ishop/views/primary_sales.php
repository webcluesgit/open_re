<?php if (!$this->input->is_ajax_request()) { ?>
<div class="col-md-12">
    <div class="top_form">
        <?php
        $attributes = array('class' => '', 'id' => 'primary_sales_view','name'=>'primary_sales_view');
        //echo form_open($this->uri->uri_string(),$attributes);
        echo form_open('',$attributes); ?>

        <div class="row">
                <div class="col-md-12 text-center tp_form inline-parent">
                    <div class="form-group">
                        <label>From Date</label>
                        <input type="text" class="form-control" name="form_date" id="form_date" placeholder="">
                    </div>
                    <div class="form-group">
                        <label>TO Date</label>
                        <input type="text" class="form-control" name="to_date" id="to_date" placeholder="">
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 tp_form">
                    <div class="form-group">
                        <label for="invoice_no">Search By Distributor</label>
                        <select class="selectpicker" name="by_distributor" id="by_distributor" data-live-search="true">
                            <option value="0">Select Distributor Name</option>
                            <?php
                            if(isset($distributor) && !empty($distributor))
                            {
                                foreach($distributor as $key=>$val_distributor)
                                {
                                    ?>
                                    <option value="<?php echo $val_distributor['id']; ?>"><?php echo $val_distributor['display_name']; ?></option>
                                    <?php
                                }
                            }
                            ?>
                        </select>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 tp_form">
                    <div class="form-group">
                        <label for="invoice_date">Search By Invoice No.</label>
                        <input type="text" class="form-control" name="by_invoice_no" id="by_invoice_no" placeholder="">
                    </div>
                </div>
                <div class="col-md-3 save_btn">
                    <button type="submit" class="btn btn-primary">Execute</button>
                </div>
        </div>
        <?php echo form_close(); ?>
    </div>
    <div class="clearfix"></div>
</div>
<?php }?>
<?php
if ($this->input->is_ajax_request()) {
echo theme_view('common/middle');
}
?>
<div id="middle_container" class="primary_cont">

</div>
<div id="product_table_container">

</div>
