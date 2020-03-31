/* eslint-disable camelcase */
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

  $(".contact-btn").on("click", function() {
    location.window.href = "/contact";
    $("input[name = 'name']").val("");
    $("input[name = 'email']").val("");
    $("input[name = 'mobile-number']").val("");
    $("textarea[name = 'message']").val("");
  });

  var $height = $("input[name = 'heightInput']");
  var $weight = $("input[name = 'weightInput']");
  var $goals = $("select[name = 'goalsInput']");
  var $notes = $("textarea[name = 'notesInput']");

  $(".submit-btn").on("click", function(event) {
    event.preventDefault();
    var userData = {
      heightInput: $height.val().trim(),
      weightInput: $weight.val().trim(),
      goalsInput: $goals.val(),
      notesInput: $notes.val().trim()
    };

    $.ajax({
      type: "POST",
      url: "/api/profile",
      data: userData,
      success: function(newData) {
        console.log(newData);
      },
      error: function() {
        console.log("error posting data");
      }
    });

    $("input[name = 'heightInput']").val("");
    $("input[name = 'weightInput']").val("");
    $("textarea[name = 'notesInput']").val("");
  });

  // $(".bmi-btn").on("click", function() {
  //   $.ajax({
  //     type: "GET",
  //     url: "/api/profile"
  //   }).then(function(response) {
  //     console.log(response);
  //     // $("#userStats").html(
  //     //   "<p> Height:  " +
  //     //     userData.height +
  //     //     "</p>" +
  //     //     "<p> Weight:  " +
  //     //     userData.weight +
  //     //     "lbs</p>" +
  //     //     "<p> Workout Notes: " +
  //     //     userData.notes +
  //     //     "</p>" +
  //     //     "<p> Weight Type: " +
  //     //     response.status +
  //     //     "</p>" +
  //     //     "<p> BMI: " +
  //     //     response.result +
  //     //     "</p>"
  //     // );
  //   });
  // });
})(jQuery);
