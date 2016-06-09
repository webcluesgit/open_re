<?php
$action_data = $this->uri->segment(2);
if(isset($prespective_order_data) && count($prespective_order_data)>0) { ?>
        <?php if(isset($prespective_order_data['no_margin']) && !empty($prespective_order_data['no_margin']) )
        { ?>
                <div class="col-md-12">
            <?php
        }else{
        ?>
        <div class="col-md-12" style="margin-top: 24px">
        <?php
    }?>

            <div class="row">
                <div class="zoom_space">
                    <ul>
                        <li><a href="#"><img src="<?php echo Template::theme_url('images/list_icon.png'); ?>" alt=""></a></li>
                        <li><a href="#"><img src="<?php echo Template::theme_url('images/zooming_icon.png'); ?>" alt=""></a></li>
                    </ul>
                </div>
                <div id="no-more-tables">
                    <table class="col-md-12 table-bordered table-striped table-condensed cf">
                        <thead class="cf">
                        <tr>
                            <?php foreach($prespective_order_data['head'] as $hkey => $head) {  ?>
                                <th<?php if($hkey>2){?> class="numeric"<?php } ?>>
                                    <a href="#">
                                        <?php echo $head;?>
                                    </a>
                                    <span class="rts_bordet"></span>
                                </th>
                            <?php } ?>
                        </tr>
                        </thead>
                        <?php if(isset($prespective_order_data['row']) && count($prespective_order_data['row']) ) {?>
                        <tbody class="tbl_body_row">
                        <?php foreach($prespective_order_data['row'] as $rkey => $rowary) {
                            ?>
                            <tr>
                                <?php
                                foreach($rowary as $rwkey => $row) {

                                    ?>
                                    <?php if($rwkey==0   && ($action_data !="get_prespective_order_details")) {
                                        ?>
                                        <td data-title="<?php echo $prespective_order_data['head'][$rwkey]; ?>">
                                            <div>
                                                <a href="#" attr-prdid="<?php echo $row;?>"><?php echo $row;?></a>
                                            </div>
                                        </td>
                                    <?php }

                                   /* else if(($rwkey==1  && $action_data !="get_prespective_order_details")) {
                                   // else if(($rwkey==1  && isset($table['action']) && !empty($table['action']))) {
                                       // if($action_data != 'credit_limit'){
                                        ?>
                                        <td data-title="<?php echo $prespective_order_data['head'][$rwkey]; ?>" class="numeric">
                                            <?php
                                            if(isset($prespective_order_data['radio']) && !empty($prespective_order_data['radio']))
                                            {
                                                ?>
                                                <input type="radio" name="radio_scheme_slab" id="radio_scheme" value="<?php echo $row;?>">
                                                <?php
                                            }
                                            elseif(isset($prespective_order_data['eye']) && !empty($prespective_order_data['eye']))
                                            {
                                                ?>
                                                <div class="eye_i" prdid ="<?php echo $row;?>"><a href="#"><i class="fa fa-eye" aria-hidden="true"></i></a></div>
                                                <?php
                                            }
                                           if($action_data !="get_prespective_order" ){
                                           
                                            ?>
                                            <div class="edit_i" prdid ="<?php echo $row;?>"><a href="#"><i class="fa fa-pencil" aria-hidden="true"></i></a></div>
                                            <div class="delete_i" prdid ="<?php echo $row;?>"><a href="#"><i class="fa fa-trash-o" aria-hidden="true"></i></a></div>
                                           <?php } ?>
                                        </td>
                                    <?php }*/ 
                                    else
                                    { ?>
                                        <td data-title="<?php echo $prespective_order_data['head'][$rwkey]; ?>">
                                            <?php echo $row;?>
                                        </td>
                                    <?php
                                    } ?>
                                <?php } ?>
                            </tr>
                        <?php } ?>
                        </tbody>
                        <?php } ?>
                    </table>
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>
    <?php }
    else{
        ?>
        <h1 align="center" class="on_data">NO Data Available</h1>
        <?php
    }
    ?>
<!--    --><?php /*echo form_close(); */?>