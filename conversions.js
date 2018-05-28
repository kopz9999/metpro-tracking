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

  function locationConversion(paths, conversionId) {
    if (paths.includes(window.location.pathname)) {
      gtag('event', 'conversion', {'send_to': conversionId });
    }
  }

  jQuery(document).ready(function() {
    clientSignInConversion();
    completedLeadAssessmentTestConversion();

    // CA - Full Conversion - Start and Complete Test
    locationConversion('/clients', 'AW-880579024/ajw1CJbhr4MBENCj8qMD');
    // CA - Lead Thankyou
    locationConversion('/thankyou', 'AW-880579024/F__CCKiIqYMBENCj8qMD');
    // CA - Leads - Test Takers at Create Account Page
    locationConversion('/clients/assessment/welcome', 'AW-880579024/HoF-CK2KqYMBENCj8qMD');
    // CA - Metabolic Profile Test
    locationConversion('/register/goals', 'AW-880579024/psM1COOEmYMBENCj8qMD');    
  });
})(jQuery);
