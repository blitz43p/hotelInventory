// on page load
$(function() {

  // roomTotals
  const faceRagsRooms = 82 * 4;
  const handTowelsRooms = 82 * 4;
  const bathTowelsRooms = 82 * 4;
  const kleenexRooms = 82 * 2;
  const toiletPaperRooms = 82 * 2;
  const curtainsRooms = 82;
  const bathMatsRooms = 82;
  const microwaveRooms = 82;
  const coffeeTrayRooms = 82;
  const coffeePotRooms = 82;
  const coffeeBasket = 82;
  const ironRooms = 82;
  const ironBoardsRooms = 82;
  const hairDryerRooms = 82;
  const hairDryerBagRooms = 82;
  const miniFridgeRooms = 82;
  const tvStandRooms = 82;
  const tvRooms = 82;
  const tvRemoteRooms = 82;
  const bibleRooms = 82;
  const deskRooms = 82;
  const deskChairRooms = 82;
  const luggageRackRooms = 82;
  const roundTrashCanRooms = 82;
  const ovalTrashCanRooms = 82;
  const waffleBlanketRooms = 82;
  const kingTopSheetsRooms = 31;
  const kingFittedSheetsRooms = 31;
  const kingDuvetsRooms = 31;
  const kingInsertsRooms = 31;
  const queenTopSheetsRooms = 51 * 2;
  const queenFittedSheetsRooms = 51 * 2;
  const queenDuvetsRooms = 51 * 2;
  const queenInsertRooms = 51 * 2;
  const showerCurtainRooms = 54;
  const pillowInsertsRooms = (51 * 8) + (31 * 4) + 8;
  const pillowCasesRooms = (51 * 8) + (31 * 4) + 8;
  const pillowsRooms = (51 * 8) + (31 * 4) + 8;
  const foldoutFittedSheets = 8;
  const foldoutTopSheets = 8;
  const floorLampRooms = 31;
  const tableLampRooms = (31 * 2) + 51;
  const deskLamp = 82;

  // do the calculations, and populate the totals div
  $('#calculate').on("click", function() {

    // loop through all of the input fields
    $('.entry-fields').each(function(e) {

      // check to see if they are blank
      if ($(this).val() == "") {

        // set them to zero
        $(this).val(0);

      }

    });


    // remove the active-button class from both buttons
    $('.page-buttons').removeClass('active-button');


    // hide the calculate button
    $('#calculate').hide();


    // hide the linen div
    $('#linens').hide();


    // hide the misc div
    $('#misc').hide();


    // display the totals div
    $('#totals').fadeIn("slow");


    // add the input values to the const variable for each input field
    $('#waffle-blanket-total').val(parseInt($('#waffle-blanket').val()) + waffleBlanketRooms);
    $('#bath-mats-total').val(parseInt($('#bath-mat').val()) + bathMatsRooms);
    $('#bath-towel-total').val(parseInt($('#bath-towels').val()) + bathTowelsRooms);
    $('#face-rags-total').val(parseInt($('#face-rags').val()) + faceRagsRooms);
    $('#hand-towel-total').val(parseInt($('#hand-towels').val()) + handTowelsRooms);
    $('#kleenex-total').val(parseInt($('#kleenex').val()) + kleenexRooms);
    $('#toilet-paper-total').val(parseInt($('#toilet-paper').val()) + toiletPaperRooms);
    $('#curtains-total').val(parseInt($('#curtains').val()) + curtainsRooms);
    $('#microwave-total').val(parseInt($('#microwave').val()) + microwaveRooms);
    $('#coffee-tray-total').val(parseInt($('#coffee-tray').val()) + coffeeTrayRooms);
    $('#coffee-pot-total').val(parseInt($('#coffee-pot').val()) + coffeePotRooms);
    $('#coffee-basket-total').val(parseInt($('#coffee-basket').val()) + coffeeBasket);
    $('#iron-total').val(parseInt($('#iron').val()) + ironRooms);
    $('#iron-board-total').val(parseInt($('#iron-board').val()) + ironBoardsRooms);
    $('#hair-dryer-total').val(parseInt($('#hair-dryer').val()) + hairDryerRooms);
    $('#dryer-bag-total').val(parseInt($('#dryer-bag').val()) + hairDryerBagRooms);
    $('#mini-fridge-total').val(parseInt($('#mini-fridge').val()) + miniFridgeRooms);
    $('#tv-stand-total').val(parseInt($('#tv-stand').val()) + tvStandRooms);
    $('#tv-total').val(parseInt($('#tv').val()) + tvRooms);
    $('#tv-remote-total').val(parseInt($('#tv-remote').val()) + tvRemoteRooms);
    $('#bible-total').val(parseInt($('#bible').val()) + bibleRooms);
    $('#desk-total').val(parseInt($('#desk').val()) + deskRooms);
    $('#desk-chair-total').val(parseInt($('#desk-chair').val()) + deskChairRooms);
    $('#luggage-rack-total').val(parseInt($('#luggage-rack').val()) + luggageRackRooms);
    $('#round-trash-can-total').val(parseInt($('#round-trash-can').val()) + roundTrashCanRooms);
    $('#oval-trash-can-total').val(parseInt($('#oval-trash-can').val()) + ovalTrashCanRooms);
    $('#king-top-sheets-total').val(parseInt($('#king-top-sheets').val()) + kingTopSheetsRooms);
    $('#king-fitted-sheets-total').val(parseInt($('#king-fitted-sheets').val()) + kingFittedSheetsRooms);
    $('#king-duvet-total').val(parseInt($('#king-duvet').val()) + kingDuvetsRooms);
    $('#king-inserts-total').val(parseInt($('#king-inserts').val()) + kingInsertsRooms);
    $('#queen-top-sheets-total').val(parseInt($('#queen-top-sheets').val()) + queenTopSheetsRooms);
    $('#queen-fitted-sheets-total').val(parseInt($('#queen-fitted-sheets').val()) + queenFittedSheetsRooms);
    $('#queen-duvet-total').val(parseInt($('#queen-duvet').val()) + queenDuvetsRooms);
    $('#queen-insert-total').val(parseInt($('#queen-inserts').val()) + queenInsertRooms);
    $('#shower-curtain-total').val(parseInt($('#shower-curtain').val()) + showerCurtainRooms);
    $('#pillow-inserts-total').val(parseInt($('#pillow-inserts').val()) + pillowInsertsRooms);
    $('#pillow-cases-total').val(parseInt($('#pillow-cases').val()) + pillowCasesRooms);
    $('#pillows-total').val(parseInt($('#pillows').val()) + pillowsRooms);
    $('#foldout-fitted-sheet-total').val(parseInt($('#foldout-fitted-sheets').val()) + foldoutFittedSheets);
    $('#foldout-top-sheet-total').val(parseInt($('#foldout-top-sheets').val()) + foldoutTopSheets);
    $('#floor-lamp-total').val(parseInt($('#floor-lamp').val()) + floorLampRooms);
    $('#table-lamp-total').val(parseInt($('#table-lamp').val()) + tableLampRooms);
    $('#desk-lamp-total').val(parseInt($('#desk-lamp').val()) + deskLamp);


  })// end of $('#calculate').on("click", function() {


  // when leaving any of the input fields
  $('.glowing-border').on('blur', function() {

    // make sure a number is entered
    if (isNaN($(this).val())) {

      // if not, display the error overlay
      $('#errorOverlay').fadeIn();

      // set the text for the error message
      $('#errorText').text("You have to Enter A Number");

      $(this).val("");
    }

  });


  // close the error overlay
  $('#errorOverlay').on("click", function() {

    $('#errorOverlay').css("display", "none");


  });

  // when clicking the page buttons
  $('.page-buttons').on("click", function() {

    // remove the active-button class from both buttons
    $('.page-buttons').removeClass('active-button');

    // add the active class accordingly
    $(this).addClass('active-button');

    // hide the totals div
    $('#totals').hide();

    // loop through all of the input fields
    $('.entry-fields').each(function(e) {

      // check to see if they are blank
      if ($(this).val() == 0) {

        // set them to zero
        $(this).val("");

      }

    });

    // loop through all the entry fields
    $('.entry-fields').each(function() {

      // if the field is not empty
      if ($(this).val() != "") {

        // add the glowing border
        $(this).addClass('glowing-border-active');

      } else {// the field is empty

        // remove the glowing border
        $(this).removeClass('glowing-border-active');

      }

    })


    // show the calculate button
    $('#calculate').fadeIn();


    // determine which entry div to display
    switch ($(this).attr("id")) {

      // linens
      case "linen-btn":

        $('#misc').hide();
        $('#linens').fadeIn();

      break;

      // misc
      case "misc-btn":

        $('#linens').hide();
        $('#misc').fadeIn();

      break;
    }

  });// end of $('.page-buttons').on("click", function() {


  // when leaving the entry fields
  $('.entry-fields').on("blur", function() {

    // if the field is not empty
    if ($(this).val() != "") {

      // add the glowing border
      $(this).addClass('glowing-border-active');

    } else { // the field is empty

      // remove the glowing border
      $(this).removeClass('glowing-border-active');

    }

  })


  // loop through all the entry fields
  $('.entry-fields').each(function() {

    // if the field is not empty
    if ($(this).val() != "") {

      // add the glowing border
      $(this).addClass('glowing-border-active');

    } else {// the field is empty

      // remove the glowing border
      $(this).removeClass('glowing-border-active');

    }

  })

  // loop through all the totals fields
  $('.totals').each(function() {

    // if the field is not empty
    if ( $(this).val() != "") {

      // add the glowing border
      $(this).addClass('glowing-border-active');

    } else {

      // remove the glowing border
      $(this).removeClass('glowing-border-active');

    }

  })

  // loop through all the totals fields
  $('.totals').on("blur", function() {

    // if the field is not empty
    if ($(this).val() != "") {

      // add the glowing border
      $(this).addClass('glowing-border-active');

    } else {// the field is empty

      // remove the glowing border
      $(this).removeClass('glowing-border-active');

    }

  })

});// end of on page load function()
