$(document).ready(function() {

    function whatTime() {
        // this variable gets the local machine time
        var timenow = new Date();
        //this variables get the time offset to UTC and set the UTC time point
        var off = timenow.getTimezoneOffset()/60;
        var utc = (timenow.getHours() + off);
        // these variables get the hours at various locations with regard to utc
        var hoursNyc = IfZero(utc - 4);
        var hoursLon = IfZero(utc + 1);
        var hoursAms = IfZero(utc + 2);
        var hoursMos = IfZero(utc + 3);
        // these variables get minutes and seconds
        var minutes = IfZero(timenow.getMinutes());
        var seconds = IfZero(timenow.getSeconds());
        // this variables get handles to the clock div in the inner HTML
        var clockDivNyc = document.getElementById('clock-newyork');
        var clockDivLon = document.getElementById('clock-london');
        var clockDivAms = document.getElementById('clock-amsterdam');
        var clockDivMws = document.getElementById('clock-moscow');
        // this sets the contents of the clockDiv to the current local time
        clockDivNyc.innerText = "New York" + "\n" + checkhour(hoursNyc) + ":" + minutes + ":" + seconds + ":" + meridiem;
        clockDivLon.innerText = "London" + "\n" + checkhour(hoursLon) + ":" + minutes + ":" + seconds + ":" + meridiem;
        clockDivAms.innerText = "Amsterdam" + "\n" + checkhour(hoursAms) + ":" + minutes + ":" + seconds + ":" + meridiem;
        clockDivMws.innerText = "Moscow" + "\n" + checkhour(hoursMos) + ":" + minutes + ":" + seconds + ":" + meridiem;
        // this makes the function run every 0.9 second
        setInterval(whatTime, 900);
    }

    // this activates the function
    whatTime();

    // this function checks the digits in hours, minutes and seconds and adds a '0' in the front, if the numebr is less than 10
    function IfZero(num) {
      return ((num <= 9) ? ("0" + num) : num);
    }
    // this function checks the hours and converts AM to PM if the tiem is after midday
    var meridiem = 'AM';
    function checkhour(hour) {
      if (hour > 12) {
        hour = hour - 12,
        meridiem = 'PM'
      }
      else if (hour === 0) {
        hour = 12
      }
      else if (hour === 12) {
        meridiem = 'PM'
      }
      else {
        meridiem = 'AM'
      }
      return hour;
    }

    $("#but-nyc").click(function() {
      $('#new-york').toggleClass('black-white');
      $('#clock-newyork').toggleClass('clock-white');
      $(this).toggleClass('but-white-black');
      }
    );

    $("#but-lon").click(function() {
      $('#london').toggleClass('green-yellow');
      $('#clock-london').toggleClass('clock-yellow');
      $(this).toggleClass('but-yellow-green');
      }
    );

    $("#but-ams").click(function() {
      $('#amsterdam').toggleClass('black-red');
      $('#clock-amsterdam').toggleClass('clock-red');
      $(this).toggleClass('but-red-black');
      }
    );

    $("#but-mos").click(function() {
      $('#moscow').toggleClass('blue');
      $('#clock-moscow').toggleClass('clock-coral');
      $(this).toggleClass('but-coral-blue');
      }
    );


});
