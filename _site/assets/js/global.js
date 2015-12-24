// Wow animations
var wow = new WOW({
	mobile: false
});
wow.init();


// Smooth scroll
(function() // Code in a function to create an isolate scope
{
var speed = 500;
var moving_frequency = 15; // Affects performance !
var links = document.getElementsByTagName('a');
var href;
for(var i=0; i<links.length; i++)
{   
    href = (links[i].attributes.href === undefined) ? null : links[i].attributes.href.nodeValue.toString();
    if(href !== null && href.length > 1 && href.substr(0, 1) == '#')
    {
        links[i].onclick = function()
        {
            var element;
            var href = this.attributes.href.nodeValue.toString();
            if(element = document.getElementById(href.substr(1)))
            {
                var hop_count = speed/moving_frequency
                var getScrollTopDocumentAtBegin = getScrollTopDocument();
                var gap = (getScrollTopElement(element) - getScrollTopDocumentAtBegin) / hop_count;

                for(var i = 1; i <= hop_count; i++)
                {
                    (function()
                    {
                        var hop_top_position = gap*i;
                        setTimeout(function(){  window.scrollTo(0, hop_top_position + getScrollTopDocumentAtBegin); }, moving_frequency*i);
                    })();
                }
            }

            return false;
        };
    }
}

var getScrollTopElement =  function (e)
{
    var top = 0;

    while (e.offsetParent != undefined && e.offsetParent != null)
    {
        top += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
        e = e.offsetParent;
    }

    return top;
};

var getScrollTopDocument = function()
{
    return document.documentElement.scrollTop + document.body.scrollTop;
};
})();




$(document).ready(function docReady() {
	
	var $dropdown = $('#nav').find('.has-dropdown > a');
	
	$dropdown.on('click', function dropdownClick() {
		$(this).parent().toggleClass('active');
		
		if ($(this).attr('aria-expanded') == 'false') {
			$(this).attr('aria-expanded', 'true');
			$(this).next('.dropdown').attr('aria-expanded', 'true');
		}
		else {
			$(this).attr('aria-expanded', 'false');
			$(this).next('.dropdown').attr('aria-expanded', 'false');
		}
		
		var hasDropdown = $(this).next('.dropdown').length;
		
		if (hasDropdown)
			return false;
	});
	
	
	$('#nav').find('.dropdown').on('focusin', function dropdownFocusIn() {
		$(this).parent().addClass('active');
	});
	
	$('#nav').find('.dropdown').on('focusout', function dropdownFocusOut() {
		$(this).parent().removeClass('active');
	});
	
	
	
	$('html').on('click', function htmlClick() {
		$('#nav').find('.has-dropdown').removeClass('active');
		$('#nav [aria-expanded="true"]').attr('aria-expanded', 'false');
	});
	
	$('#nav').find('.has-dropdown > a').on('click', function globalMenuClick(event){
	    event.stopPropagation();
	});
	
	
	
	
	
	var scrollTimer = null;
	$(window).scroll(function windowScroll() {
		if (scrollTimer) {
		    clearTimeout(scrollTimer);   // clear any previous pending timer
		}
		scrollTimer = setTimeout(handleScroll, 500);   // set new timer
	});
	
	function handleScroll() {
		scrollTimer = null;
		var scrollTop = $(window).scrollTop();
		
		if (scrollTop > 70) {
			$("#nav").addClass('scrolled');
		} else {
			$("#nav").removeClass('scrolled');
		}
	}

});




