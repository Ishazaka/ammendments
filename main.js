
// go after siteinactive and sitesactive which is on 210 line

// sitesInactive.forEach((s) => {
//     new g.maps.Marker({
//       position: s.position,
//       icon: `https://maps.google.com/mapfiles/kml/paddle/wht-stars-lv.png`,
//       map: gMap,
//     });
//   });

// remove every thing below it  and add the lines which i write below



 

  var past30yes = document.getElementById("Q1-option1")
  var past30no = document.getElementById("Q1-option2")

  $(".categoryeligibility-questions .next").on("click", () => {
    if (past30no.checked) {
      $(".q-past-30").addClass("d-none");
      $(".q-yes18 ").removeClass("d-none");
    }
    if (past30yes.checked) {
      $(".ineligible").removeClass("d-none");
      $(".next").addClass("d-none");
      $(".q-past-30").addClass("d-none");
    }

  });



  var yes18 = document.getElementById("Q2-option1")
  var no18 = document.getElementById("Q2-option2")

  $(".categoryeligibility-questions .next").on("click", () => {
    if (yes18.checked) {
      $(".q-past-30").addClass("d-none");
      $(".q-yes18 ").addClass("d-none");
      $(".q-behalfof ").removeClass("d-none");
    }
    if (no18.checked) {
      $(".eligibility-questions ").removeClass("d-none");
      $(".categoryeligibility-questions ").addClass("d-none");
    }

  });


  var yesbehalf = document.getElementById("Q3-option1")
  var nobehalf = document.getElementById("Q3-option2")

  $(".categoryeligibility-questions .next").on("click", () => {
    if (nobehalf.checked) {
      $(".categoryeligibility-questions ").addClass("d-none");
      $(".adulteligibility-questions ").removeClass("d-none");
    }
    if (yesbehalf.checked) {
      $(".eligibility-questions ").removeClass("d-none");
      $(".categoryeligibility-questions ").addClass("d-none");
    }

  });


  //  adult arm questions

  var ad1yes = document.getElementById("ad-q1-option1")
  var ad1no = document.getElementById("ad-q1-option2")

  $(".adulteligibility-questions .next").on("click", () => {
    if (ad1yes.checked) {
      $(".q-adult1").addClass("d-none");
      $(".q-diag").removeClass("d-none");
    }
    if (ad1no.checked) {
      $(".ineligible").removeClass("d-none");
      $(".adulteligibility-questions").addClass("d-none");
    }

  });

  var ad2yes = document.getElementById("ad-q2-option1")
  var ad2no = document.getElementById("ad-q2-option2")

  $(".adulteligibility-questions .next").on("click", () => {
    if (ad2yes.checked) {
      $(".q-globulin").removeClass("d-none");
      $(".q-diag").addClass("d-none");
    }
    if (ad2no.checked) {
      $(".ineligible").removeClass("d-none");
      $(".adulteligibility-questions").addClass("d-none");
    }

  });


  var ad3yes = document.getElementById("ad-q3-option1")
  var ad3no = document.getElementById("ad-q3-option2")

  $(".adulteligibility-questions .next").on("click", () => {
    if (ad3no.checked) {
      $(".q-globulin").addClass("d-none");
      $(".q-pregnant").removeClass("d-none");
      // $(".q-diag").addClass("d-none");
    }
    if (ad3yes.checked) {
      $(".ineligible").removeClass("d-none");
      $(".adulteligibility-questions").addClass("d-none");
    }

  });


  var ad4yes = document.getElementById("ad-q4-option1")
  var ad4no = document.getElementById("ad-q4-option2")

  $(".adulteligibility-questions .next").on("click", () => {
    if (ad4no.checked) {

      $(".adulteligibility-questions").addClass("d-none");
      $(".screening-questions").removeClass("d-none");
      // displayContactInfo();
    }
    if (ad4yes.checked) {
      $(".ineligible").removeClass("d-none");
      $(".adulteligibility-questions").addClass("d-none");
    }

  });

  // stage screening

  var scr1yes = document.getElementById("scr-q1-option1")
  var scr1no = document.getElementById("scr-q1-option2")

  $(".screening-questions .next").on("click", () => {
    if (scr1yes.checked) {

      $(".q-screen1").addClass("d-none");
      $(".q-screen2").removeClass("d-none");
    }
    if (scr1no.checked) {
      $(".q-screen4").removeClass("d-none");
      $(".q-screen1").addClass("d-none");
    }

  });

  var scr2yes = document.getElementById("scr-q2-option1")
  var scr2no = document.getElementById("scr-q2-option2")

  $(".screening-questions .next").on("click", () => {
    if (scr2yes.checked) {

      $(".q-screen2").addClass("d-none");
      $(".q-screen3").removeClass("d-none");
    }
    if (scr2no.checked) {
      $(".adult1eligible").removeClass("d-none");
      $(".screening-questions").addClass("d-none");
      displayContactInfo();
    }

  });

  var scr3yes = document.getElementById("scr-q3-option1")
  var scr3no = document.getElementById("scr-q3-option2")

  $(".screening-questions .next").on("click", () => {
    if (scr3yes.checked) {

      $(".adult2eligible").removeClass("d-none");
      $(".screening-questions").addClass("d-none");
      displayContactInfo();
    }
    if (scr3no.checked) {
      $(".ineligible").removeClass("d-none");
      $(".screening-questions").addClass("d-none");

    }

  });

  var scr4yes = document.getElementById("scr-q4-option1")
  var scr4no = document.getElementById("scr-q4-option2")

  $(".screening-questions .next").on("click", () => {
    if (scr4yes.checked) {
      $(".q-screen4").addClass("d-none");
      $(".q-screen5").removeClass("d-none");

    }
    if (scr4no.checked) {
      $(".ineligible").removeClass("d-none");
      $(".screening-questions").addClass("d-none");

    }

  });

  var scr5yes = document.getElementById("scr-q5-option1")
  var scr5no = document.getElementById("scr-q5-option2")

  $(".screening-questions .next").on("click", () => {
    if (scr5yes.checked) {
      $(".screening-questions").addClass("d-none");
      $(".adult2eligible").removeClass("d-none");
      displayContactInfo();

    }
    if (scr5no.checked) {
      $(".ineligible").removeClass("d-none");
      $(".screening-questions").addClass("d-none");

    }

  });







  // padiatric

  const questions = document.querySelector(".eligibility-questions");

  var displayedQuestionSetIndex = 0;
  var questionSet = [
    "age",
    "diagnosis",
    "agent",
    "booster",
    "history"
  ];
  var inclusion = ["age", "diagnosis", "booster"];

  $(".eligibility-questions .next").on("click", (e) => {
    var question = questionSet[displayedQuestionSetIndex];
    var answer = $(`[name="q-${question}"]`).filter(":checked").val();
    console.log(question, answer);
    decision(question, answer);
  });

  // displayedQuestionSet = inclusionSet[0];
  $(`.q-${questionSet[displayedQuestionSetIndex]}`).show();

  function decision(q, a) {
    if (inclusion.includes(q)) {
      console.log("inclusion question");
      if (a === "Yes") {
        moveForward();
      } else {
        outcomeNotEligible();
      }
    } else {
      if (a === "No") {
        moveForward();
      } else {
        outcomeNotEligible();
      }
    }
  }

  function moveForward() {
    $(`.q-${questionSet[displayedQuestionSetIndex]}`).hide();
    displayedQuestionSetIndex = displayedQuestionSetIndex + 1;

    $(".q-buttons .previous").removeClass("d-none");

    if (questionSet[displayedQuestionSetIndex] !== undefined) {
      $(`.q-${questionSet[displayedQuestionSetIndex]}`).show();
    } else {
      $(".q-buttons").addClass("d-none");
      $(".Pediatriceligible").removeClass("d-none");
      displayContactInfo();
    }
  }

  function outcomeNotEligible() {
    $(`.q-${questionSet[displayedQuestionSetIndex]}`).hide();
    $(".q-buttons").addClass("d-none");
    $(".ineligible").removeClass("d-none");
  }

  function displayContactInfo() {
    $("#locations address").each((i, el) => { });
    sitesActive.forEach((s) => {
      $(`#site-${s.id}`).append(
        `<h5 class="mb-0">Contact</h5><div class="mb-3">${s.contact.name} ${s.contact.phone} <a href="mailto:${s.contact.email}">${s.contact.email}</a></div>`
      );
    });
  }






