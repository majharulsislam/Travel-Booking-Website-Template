// Top Search Form -> exchange input
$(document).ready(function(){
// sessionStorage.removeItem('info_data');
      var formFields = $('.user-input-wrp');
      formFields.each(function() {
        var field = $(this);
        var input = field.find('input');
        var label = field.find('label');
        //
        function checkInput() {
          var valueLength = input.val().length;
          //
          if (valueLength > 0 ) {
            label.addClass('filled')
          }
          else {
            label.removeClass('filled')
          }
        }
        //
        input.change(function() {
          checkInput()
        });
      });
      if ('hyb'.indexOf('|') > -1){
        var from_stn = "HYB";
      } else {
        var from_stn = "HYDERABAD DECCAN | HYB";
      }
      $('#fromStation_input').val(from_stn);
      $('.from_input').find('label').css("display:block");
      $('.from_input').find('label').addClass('filled');

      if ('hyb'.indexOf('|') > -1){
        var to_stn = "SBC";
      } else {
        var to_stn = "BANGALORE CITY JN | SBC";
      }
      
      $('#fromStation_input').val(from_stn);
      $('.from_input').find('label').css("display:block");
      $('.from_input').find('label').addClass('filled');

      $('#toStation_input').val(to_stn);
      $('.to_input').find('label').css("display:block");
      $('.to_input').find('label').addClass('filled');

 //============> Mobile triger menu
      $('.off_can_trigger a').on('click',function(){
        $('.off_canvas_menu_area,.off_canvas_overlay').addClass('active');
        return false;
      });
      $('.off_canvas_close,.off_canvas_overlay').on('click',function(){
        $('.off_canvas_menu_area,.off_canvas_overlay').removeClass('active');
      });

//============> Mobile filter triger menu
      $('.filter_triger p img').on('click',function(){
        $('.train_booking_details_left_space').toggleClass('active');
        return false;
      });

});

function changeCity(){
  var FromCity = $('#fromStation_input').val();
  var ToCity = $('#toStation_input').val();
  $('#fromStation_input').val(ToCity);
  $('#toStation_input').val(FromCity);
}
 

//calender changes JS for next three day's
var default_date = new Date("2021-11-12");
var next_day = new Date("2021-11-12") || default_date;
//var next_day = default_date || new Date();
var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
//next three date
function next_3_date(next_day){
  //var next_day = new Date("")
  for(var i=0; i < 3; i++){
    next_day = new Date(next_day.getTime() + (24*60*60*1000));
    $(".Next_DY_" + (i + 1)).val(next_day);
    $(".Next_DY_" + (i + 1)).text( next_day.getDate()   +  ' ' + months[next_day.getMonth()] );
    $(".Next_WD_" + (i + 1)).text( days[next_day.getDay()]);
  }
}
next_3_date(next_day);
//set date
function set_date(flag){
  var today = new Date($('.Next_DY_'+flag).val());
  var dateText = new Date(today); 
  $('.calendar').val($('.Next_DY_'+flag).text() + ', ' +$('.Next_WD_'+flag).text());
  $("#datepicker").datepicker("setDate", dateText);
  $('.next-date').removeClass('active-date');
  $(".Next_DY_"+flag).parent().addClass('active-date');
  $('#dp-date').text(today.getDate());
  $('#dp-day').text(months[today.getMonth()] + ', ' + days[today.getDay()]);
}
// date show in custom section
function received_date(){
  var today = default_date
  $('#dp-date').text(today.getDate());
  $('#dp-day').text(months[today.getMonth()] + ', ' + days[today.getDay()]);
}
received_date();
// Calender open on search form
$(function() {
  $("#datepicker").datepicker({
    defaultDate: default_date,
    inline: true,
    minDate: 0,
    maxDate: "+120D",
    dateFormat: "yy-mm-dd",
    numberOfMonths: 2,
    altField: ".altDate",
    onSelect: function(){
      var next_day = new Date($(this).val());
      var selected_date = new Date($(this).val());
      var selected_month = months[selected_date.getMonth()] + ', ' + days[selected_date.getDay()];
      $('#dp-date').text(selected_date.getDate());
      $('#dp-day').text(selected_month);
      next_3_date(next_day);
      $('.next-date').removeClass('active-date');
    }
  }).datepicker("setDate", default_date);
});
// Calender open on TBS reasult
$(function() {
  // alert(default_date);
  $(".datepicker").datepicker().datepicker("setDate", new Date());
});


// Exclusive offer slide
$('#exclusive_offer_items').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    adaptiveHeight: true,
    autoplay: false,
    autoplaySpeed: 2000,
    nextArrow: '<div class="exclusive-custom-arrow slick-custom-arrow-right"><i class="fas fa-chevron-right"></i>',
    prevArrow: '<div class="exclusive-custom-arrow slick-custom-arrow-left"><i class="fas fa-chevron-left"></i></div>',
    responsive: [
        {
            breakpoint: 1600, // tablet breakpoint
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 1201, // tablet breakpoint
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 992, // tablet breakpoint
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 768, // mobile breakpoint
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


// faqs tab
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove('opentab');
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" activatetab", "");
  }
  document.getElementById(cityName).classList.add('opentab');
  evt.currentTarget.className += " activatetab";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();











