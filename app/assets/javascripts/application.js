// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require front/js/jquery-1.11.0.min
//= require front/js/bootstrap
//= require front/js/jquery.easing.1.3
//= require front/js/jquery.bxslider
// require front/js/jquery.mousewheel
// require front/js/jquery.selectik
// require front/js/jquery.mousewheel-3.0.4.pack
// require front/js/jquery.countdown
// require front/js/jquery.checkbox
//= require jquery-auto
//= require front/js/js
//= require front/js/vehicles
//= require front/js/jquery.fancybox
//= require front/province
//= require bootstrap-datepicker
//= require front/calculation
//= require front/culation
//= require gmap3.min
//= require jquery.share
//= require jquery.lazyload

$(function() {
    $("img").show().lazyload({
      effect : "fadeIn"
    });
});

$(document).ready(function(){

  $('.fb-comments').attr('data-width', '100%');

  $('#share1').share({
      networks: ['facebook','pinterest','googleplus','twitter','linkedin','tumblr','email','stumbleupon','digg']
  });

  $(document).trigger('refresh_autonumeric');

  $(".fancybox").fancybox({
      openEffect: "none",
      closeEffect: "none"
  });
  // datepicker
  $('.datepicker').datepicker({
    format: 'yyyy/mm/dd'
  });

  // Select Province
  $('#province_attributes').autocomplete({
      data: window.provinces,
      onItemSelect: function(result){

        $('#city_attributes').removeData();
        $('#city_attributes').unbind();
        $('#city_attributes').autocomplete({
          data: window.provinces_cities[result.value]
        })
      }
  });
  $('#province_attributes').focus(function(){
    $('#city_attributes').val('')
  });

  $('#brand_product').change(function(){
    var url = $(this).data('url');
    $.get(url, {brand: $(this).val()})
      .done(function(data){
        $('#model_product').html(data);
      });
  });

  $('#product_category_id').change(function(){
    if($(this).val() == '2'){
      $('.cars').hide();
    }else{
      $('.cars').show();
    }
  });

  $('#add-image').click(function(){
    if($('.step_3 .col_3').length > 3){
      $(this).hide();
    }

    if($('.set-3 .col-md-6').length > 3){
      $(this).hide();
    }
  });

  $(".remove_fields.existing").click(function(){
    $(this).closest('div.col_3').hide();
    if($('.step_3 .col_3').length <= 3){
      $('#add-image').show();
    }

    if($('.set-3 .col-md-6').length <= 3){
      $('#add-image').show();
    }
  });

  if($('.step_3 .col_3').length > 3){
      $('#add-image').hide();
    }

  if($('.set-3 .col-md-6').length > 3){
    $('#add-image').hide();
  }

});
