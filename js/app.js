
$(document).ready(function() {
	console.log('Welcome to console');
    var submissions = 0;
    var checkMark = '<span class="cross-off"></span>'
    var xMark = '<span class="delete"></span>'
	$('.icon').hide();
	$('.icon').fadeIn(1000);
	$('#title').hide();
	$('#title').fadeIn(1000);
	
	$('#reset').click(function(){

});
   /*Allows an "Enter" keystroke to work as a submit button for input field*/
    function getItem() {
        $('#add').keydown(function (enter) {
            if (enter.keyCode == 13) {
                postItem();
            }
        });
    }

    getItem();

    /*Takes returned value from previous function and manipulates it*/
    function postItem() {
        var item = $('#add').val();
        var work = '<p class="full-width no-strikethrough">'+ xMark + item + checkMark + '</p>';
        $('#list-area').prepend(work).fadeIn();
        $('#add').val('');
        $('#list-area p:first-child')
        .css('opacity', "0")
        .css("margin-top", "-20px")
        .animate(
            { opacity: "1" },
            { queue: true, duration: 'slow' }
        )
        .animate(
            {marginTop: "0px"},
            { queue: false, duration: 'slow' }
        );
    }

});
/*Clears all items on list*/
$(document).on("click", "#reset", function(){
    $("#list-area").empty();
    submissions = 0;
});
/*Allows user to delete items*/
$(document).on("click", ".x-mark", function(){
    $(this).closest('p').fadeOut(300);
});

/*Allows user to check off items*/
$(document).on("click", ".check", function(){
    if (!$(this).closest('p').hasClass('strikethrough')) {
        console.log("I am going to add a strikethrough");
        $(this).closest('p').addClass("strikethrough");
        $(this).siblings('.x-mark').addClass("alt-x-mark");
        $(this).addClass("alt-check");
   }
   else {
        console.log("I am going to remove a strikethrough");
        $(this).closest('p').removeClass("strikethrough");
        $(this).siblings('.x-mark').removeClass("alt-x-mark");
        $(this).removeClass("alt-check");
   }
});

