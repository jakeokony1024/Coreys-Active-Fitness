/*  ---------------------------------------------------
    Template Name: Gutim
    Description: Gutim Fitness HTML Template
    Author: Colorlib
    Author URI: http://colorlib.com
    Version: 1.0
    Created: Colorlib
---------------------------------------------------------  */

"use strict";

(function($) {
  /*------------------
        Preloader
    --------------------*/
  $(window).on("load", function() {
    $(".loader").fadeOut();
    $("#preloder")
      .delay(200)
      .fadeOut("slow");

    /*------------------
            Gallery filter
        --------------------*/
    $(".gallery-controls li").on("click", function() {
      $(".gallery-controls li").removeClass("active");
      $(this).addClass("active");
    });
    if ($(".gallery-filter").length > 0) {
      var containerEl = document.querySelector(".gallery-filter");
      var mixer = mixitup(containerEl);
      mixer;
    }
  });

  /*------------------
        Background Set
    --------------------*/
  $(".set-bg").each(function() {
    var bg = $(this).data("setbg");
    $(this).css("background-image", "url(" + bg + ")");
  });

  /*------------------
		Navigation
	--------------------*/
  $(".mobile-menu").slicknav({
    prependTo: "#mobile-menu-wrap",
    allowParentLinks: true
  });

  /*------------------
		Menu Hover
	--------------------*/
  $(".header-section .nav-menu .mainmenu ul li").on("mousehover", function() {
    $(this).addClass("active");
  });
  $(".header-section .nav-menu .mainmenu ul li").on("mouseleave", function() {
    $(".header-section .nav-menu .mainmenu ul li").removeClass("active");
  });

  /*------------------------
		Class Slider
    ----------------------- */
  $(".classes-slider").owlCarousel({
    items: 3,
    dots: true,
    autoplay: true,
    loop: true,
    smartSpeed: 1200,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 3
      },
      992: {
        items: 3
      }
    }
  });

  /*------------------------
		Testimonial Slider
    ----------------------- */
  $(".testimonial-slider").owlCarousel({
    items: 1,
    dots: false,
    autoplay: true,
    loop: true,
    smartSpeed: 1200,
    nav: true,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
    ]
  });

  /*------------------
        Magnific Popup
    --------------------*/
  $(".video-popup").magnificPopup({
    type: "iframe"
  });

  /*------------------
        About Counter Up
    --------------------*/
  $(".count").each(function() {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text()
        },
        {
          duration: 4000,
          easing: "swing",
          step: function(now) {
            $(this).text(Math.ceil(now));
          }
        }
      );
  });

  function updateUser(userData) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      url: "api/profile",
      data: JSON.stringify(
        userData.height,
        userData.weight,
        userData.goals,
        userData.notes
      )
    });
  }
  $(".submit-btn").on("click", function(event) {
    event.preventDefault();
    var userData = {
      height: $("input[name = 'heightInput']")
        .val()
        .trim(),
      weight: $("input[name = 'weightInput']")
        .val()
        .trim(),
      goals: $("select[name = 'goalsInput']").val(),
      notes: $("textarea[name = 'notesInput']")
        .val()
        .trim()
    };

    $("input[name = 'heightInput']").val("");
    $("input[name = 'weightInput']").val("");
    $("textarea[name = 'notesInput']").val("");
    updateUser(
      userData.height,
      userData.weight,
      userData.goals,
      userData.notes
    );
  });

  $(".bmi-btn").on("click", function(event) {
    event.preventDefault();
    var queryURL =
      "https://gabamnml-health-v1.p.rapidapi.com/bmi?weight=" +
      userData.weight +
      "&height=" +
      userData.height;
    var apiKey = "a319d638b0msh397c0e24b21a62fp1a2660jsnc7f7e0f81537";
    var settings = {
      async: true,
      crossDomain: true,
      url: queryURL,
      method: "GET",
      headers: {
        "x-rapidapi-host": "gabamnml-health-v1.p.rapidapi.com",
        "x-rapidapi-key": apiKey
      }
    };
    $.ajax(settings).then(function(response) {
      $("#userStats").html(
        "<p> Height:  " +
          userData.height +
          "</p>" +
          "<p> Weight:  " +
          userData.weight +
          "lbs</p>" +
          "<p> Workout Notes: " +
          userData.notes +
          "</p>" +
          "<p> Weight Type: " +
          response.status +
          "</p>" +
          "<p> BMI: " +
          response.result +
          "</p>"
      );
    });
  });
})(jQuery);
