(function ($) {

  /**
   * Add functionality for salvage form.
   */
  function sessionBehavior() {
    if ($("#edit-field-session-type-und-105").is(":checked")) {
      $("#edit-field-session-track").show();
    } else {
      $("#edit-field-session-track").hide();
      $("#edit-field-session-track input.form-radio").prop("checked", false);
    }
    $("#edit-field-session-type-und-105").click(function () {
      if ($(this).is(":checked")) {
        $("#edit-field-session-track").show("slow");
      } else {
        $("#edit-field-session-track").hide("slow");
        $("#edit-field-session-track input.form-radio").prop("checked", false);
      }
    });
  }

  Drupal.behaviors.nwgisconfig = {
    attach: function (context, settings) {
      $("#edit-field-session-type:not(.nwgisconfig-processed)", context).each(function () {
        $(this).addClass("nwgisconfig-processed");
        sessionBehavior();
      });

    }
  }
})(jQuery);