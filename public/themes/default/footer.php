<?php
Assets::add_js((array('bootstrap.min.js',
    'jquery.mCustomScrollbar.concat.min.js',
    'jquery-listslider.js','bootstrap-select.min.js','bootstrap-datepicker.min.js','jquery.validate.min.js','front_grid.js',
    'bootstrap-timepicker.js','select2.min.js','bootstrap-table.js','bootstrap-table-filter-control.js','jquery.rateyo.js'

)
));
echo Assets::js();
?>
<script>
        $("#zoom_in_btn").click(function(){
            $("").show();
        });


</script>
<script type="text/javascript">
    /*$('.nav.nav-tabs').listslider({*/
        $('.nav.nav-tabs').listslider({
        left_label: '<span class="bre_lf_arrow"></span>',
        right_label: '<span class="bre_rt_arrow"></span>'
    });
    /*var checkout = $(".month_data").datepicker({});
    $( "#main" ).scroll(function() {
        $('.month_data').datepicker('place')
    });*/
    var datePicker = $().datepicker({});
    var t;
    $(window).on('DOMMouseScroll mousewheel scroll', function() {
        window.clearTimeout(t);
        t = window.setTimeout(function() {
            $('.month_data').datepicker('place');
        }, 50);
    });
</script>
<script type="text/javascript">
    (function($){
        $(".slide_icon").click(function(e){
            $(".pr_title").toggleClass("li_title");
            $(".pr_slide_menu").toggleClass("side_menu_space");
            $(".pr_right_contain").toggleClass("inn_right_contain");
            /*$(".pr_footer").toggleClass("footer");*/
            $(".toggle_wieght_sp").toggleClass("wieght_sp");
            $(".left_contain_big").toggleClass("left_contain");
            $(".opn_btn").toggleClass("opn_btn_par");
            $(".cls_btn").toggleClass("cls_btn_par");
        });
        //<![CDATA[
        $(window).load(function(){
            document.getElementById("upload_file_data").onchange = function () {
                document.getElementById("FileoadFile").value = this.value;
            };

            document.getElementById('upload_file_data').onchange = uploadOnChange;

            function uploadOnChange() {
                var filename = this.value;
                var lastIndex = filename.lastIndexOf("\\");
                if (lastIndex >= 0) {
                    filename = filename.substring(lastIndex + 1);
                }
                var files = $('#upload_file_data')[0].files;
                for (var i = 0; i < files.length; i++) {
                    $("#upload_prev").append(files[i].name);
                }
                document.getElementById('filename').value = filename;
            }
        });//]]>

        $(".zoom_in_btn").click(function(e){
            $(".zoom_out_btn").toggleClass("intro");
        });
        $(window).load(function(){

            $("a[rel='load-content']").click(function(e){
                e.preventDefault();
                var url=$(this).attr("href");
                $.get(url,function(data){
                    $(".content .mCSB_container").append(data); //load new content inside .mCSB_container
                    //scroll-to appended content
                    $(".content").mCustomScrollbar("scrollTo","h2:last");
                });
            });

            $(".content").delegate("a[href='top']","click",function(e){
                e.preventDefault();
                $(".content").mCustomScrollbar("scrollTo",$(this).attr("href"));
            });

        });
    })(jQuery);
</script>
<script>

    $(document).on("keypress keyup blur",".allownumericwithdecimal",function (event) {
        //this.value = this.value.replace(/[^0-9\.]/g,'');
        $(this).val($(this).val().replace(/[^0-9\.]/g,''));
       // $(".allownumericwithdecimal").val().length > 8
        //$("#id").val().replace(/ /g,'').length
        if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
    });

</script>
<script type="text/javascript">
    $(document).ready(function(){

        //Navigation Menu Slider
        $('#nav-expander').on('click',function(e){
            e.preventDefault();
            $('body').toggleClass('nav-expanded');
        });
        $('#nav-close').on('click',function(e){
            e.preventDefault();
            $('body').removeClass('nav-expanded');
        });


    });

        $(document).on('click',".zoom_in_btn",function(e){
            e.preventDefault();
            $(".zoom_out_btn").toggleClass("zoom_out_btn_show");
            $(".ad_mr_top").toggleClass("ad_mr_top_30");
            $(".top_form").hide();
            $(".zoom_in_btn").hide();
            $(".middle_form").hide();
        });
        $(document).on('click',".zoom_out_btn",function(j){
            j.preventDefault();
            $(".zoom_out_btn").removeClass("zoom_out_btn_show");
            $(".top_form").show();
            $(".zoom_in_btn").show();
            $(".middle_form").show();
            /*$(".zoom_out_btn").hide();*/
            $(".ad_mr_top").removeClass("ad_mr_top_30");
        });


</script>
<script type="text/javascript">
    $('#timepicker1').timepicker();
</script>

<div id="error_file_popup">

 </div>
<div id="success_file_popup">

</div>
</body>
</html>
