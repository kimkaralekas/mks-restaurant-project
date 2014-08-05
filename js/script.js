

$(function() {

    // TODO #1 Set an event listener to listen for clicks on each menu section
    // heading anchor

menuactionbreakfast.onclick = function() {
//run your event handler code...
};



    // Note: my menu section headings look like this:
    //
    // <div class="menu-section">
    //   <h3>
    //     <a href="#" class="menu-section-item" id="dinner">
    //       Dinner
    //     </a>
    //   </h3>
    //   ...

    // I've given all of the anchors the same class so that I can easily target
    // all of them with jQuery

    $( document ).on( 'click', '.menu-section-item', function( event ) {
      // Prevent the default action of the event
      event.preventDefault();

      // Assign the id of the clicked element to a variable named id
      var id = $( this ).attr( 'id' );

      // Remove the class 'is-active' from all menu item headings
      $( '.menu-section-item' ).removeClass( 'is-active' );

      // Add 'is-active' to this specific action that was clicked. is-active
      // provides the visual cue for what's active via CSS
      $( this ).addClass( 'is-active' );

      // Once you're started with TODO #2, call the getMenu function here,
      // passing id as the argument




      $getMenu( id );
    });



    // TODO #2 Create a function, getMenu, to get the menu for a course
    getMenu();

    // There are menus available for each course:
    // - http://mksrestaurantapi.herokuapp.com/menu-breakfast.json
    // - http://mksrestaurantapi.herokuapp.com/menu-lunch.json
    // - http://mksrestaurantapi.herokuapp.com/menu-dinner.json
    // - http://mksrestaurantapi.herokuapp.com/menu-dessert.json
    // - http://mksrestaurantapi.herokuapp.com/menu-cocktails.json
    // - http://mksrestaurantapi.herokuapp.com/menu-wine.json

    // By setting a parameter of `course`, we can pass the course we want the
    // menu for into this function

    function getMenu( course ) {
      // Use `$.getJSON` to get the menu for whatever menu heading was clicked
      $.getJSON( 'http://mksrestaurantapi.herokuapp.com/menu-' + course + '.json', function( json ) {
        populateMenu( json );
        // Once you're started with TODO #3, call the populateMenu function here
        // and pass json as the argument
      });
    }



    // TODO #3 Create a function, populateMenu, to add a menu to the DOM

    function populateMenu( json ) {
      html = '';

      for( var i = 0; i < json.length; i++ ){
        html += '<div class="menu-group columns small-12 medium-4">';
        html += '<h4>' + json[i].section + '</h4>';

        for( var j = 0; j < json[i].content.length; j++ ) {
          html += '<div class="menu-item">';
          html += '<div class="menu-item-dish">' + json[i].content[j].dish + '</div>';
          html += '<p class="menu-item-ingredients">' + json[i].content[j].ingredients + '</p>';
          html += '<div class="menu-item-price">' + json[i].content[j].price + '</div>';
          html += '</div>';
        }

        html += '</div>';
      }

      // Use `.html` to replace the contents of `.menu-section-content`
      $( '.menu-section-content' ).html( html );
    }



    // TODO #4 Call getMenu with a menu of your choice and set that menu's
    // header to active so that a menu is loaded with the page by default

});
