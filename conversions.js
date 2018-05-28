(function(jQuery) {
  function clientSignInConversion() {
    var signInBtn = jQuery('#new_client');
    signInBtn.click(function() {
      gtag('event', 'conversion', {'send_to': 'AW-880579024/hpL6CP7MqoMBENCj8qMD'});
    });
  }

  function completedLeadAssessmentTestConversion() {
    var completedBtn = jQuery('.lead-assessment.onboarding .next.btn.btn-info:last');
    completedBtn.click(function() {
      gtag('event', 'conversion', {'send_to': 'AW-880579024/6TXzCNuCmYMBENCj8qMD'});
    });
  }

  jQuery(document).ready(function() {
    clientSignInConversion();
    completedLeadAssessmentTestConversion();
  });
})(jQuery);
