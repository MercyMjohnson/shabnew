$(document).on('click', "#shown", function() {//this targets the id of "shown"

 var toShow = $(this).data('to-show');//(this) here refers to the stated target above which is "shown" so here it is saying that there is an attr data-to-show on that line and that is carrying an id related to what should be hidden

 let openStatus = $('[data-to-show="'+toShow+'"]').attr('data-status');//this calls the attribute data-status which is an attribute of the html property dataa to show. in the case above data-to-show is written that way in order to calll up the whole html string.

 if (openStatus == 1) {//if open status is 1 , then it will change it to 0
   $('[data-to-show="'+toShow+'"]').attr('data-status', 0);
 } else if (openStatus == 0) {
   $('[data-to-show="'+toShow+'"]').attr('data-status', 1);// else if data staus is on 0 then it will change it to 1
 }

 $("#" + toShow).toggle("slow");

 let text = $(this).text();//text is the text from (this) which is #shown.
 if (text == 'Read More . . .') {
   $(this).empty().html('Show less . . .');
 } else if (text == 'Show less . . .') {
   $(this).empty().html('Read More . . .');
 }
});