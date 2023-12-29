/* stuff a non-logged in user needs in general */
var jforumLink = JS_CONTEXT_PATH + '/jforum';

$(document).ready(function(){

	
	
	$('a#loginLink[data-login-path]').click(function(e){
		e.preventDefault();
		var returnPath = $(this).attr('data-login-path');
		var loginURL = $(this).attr('href');
		var $loginForm = $('<form method="post" action="' + loginURL + '"></form>');
		$loginForm.append('<input type="hidden" name="returnPath" value="' + returnPath + '" />');
		$loginForm.appendTo('body');
		$loginForm.submit();
	});
	$(".selectAllOnFocus").click(function () {
		   $(this).select();
	});
	alignBoxes();
	
	if(typeof expectingJSPing !== 'undefined') {
		if(expectingJSPing) {
			$.ajax({
	            type: 'POST',
	            url: JS_CONTEXT_PATH + "/forums/user/jsping",
	            dataType: 'text'
	        });
		}
	}
	
	$('.selectiveJSMultiShingle').each(function() {
		var $root = $(this);
		var $jspart = $root.find('.jspart');
		var $njspart = $root.find('.njspart');
		
		$.ajax({
			type: 'POST',
			url: jforumLink,
			headers : {'OWASP_CSRFTOKEN' : JS_CSRF_TOKEN},
			dataType : "text",
			global : false,
			data : {
				module: 'shingle',
				action: 'updateStats',
				scr_shingles: $jspart.attr('data-sids'),
				nscr_shingles: $njspart.attr('data-sids'),
			}
		}).done(function(data){
			$jspart.show();
		});	
	});
	
	$('#gpEmCapTitle').click(function() {
		var $emCap = $(this).closest('.gpEmCaptures');
		if(!$emCap.hasClass('opened')) {
			$emCap.addClass('opened');
		}
	});
	$('.gpEmCaptures #cancAllPayments').click(function() {
		var $btn = $(this);
		var numTransactions = parseInt($btn.attr('data-nt'));
		
		var msg;
		if(numTransactions > 1) {
			msg = "This will cancel all " + numTransactions + " transactions, and you will not receive what you have purchased. Are you sure you want to cancel all of these payments?";
		} else {
			msg = "If you cancel this payment now, you will not receive what you have purchased. Are you sure you want to cancel?";
		}
		if(confirm(msg)) {
			postAction('pay', 'removeAllGuestPaymentEmailCaptures', {});
		}
	
	});
	
	
	
});

function showEmail(beforeAt, afterAt) {
	return beforeAt + "@" + afterAt;
}

function alignBoxes() {
	var firstBx = $('.bxLayoutRowCl[data-idx="0"] > form');
	if(firstBx.length && firstBx.is(':visible')) {
		var w = firstBx.width();
		$('.bxLayoutRowCl > form').each(function(){
			$(this).width(w);
		});
	}
}

function expandMinimizedPosts(minimizedGroupId) {
	$('.mgidr' + minimizedGroupId).hide();
	$('.mgip' + minimizedGroupId).removeClass('minimized');
}



function postAction(module, action, params) {
	
	  var path = JS_CONTEXT_PATH + "/forums/jforum";

	  const form = document.createElement('form');
	  form.method = 'post';
	  form.action = path;
	  
	  params['OWASP_CSRFTOKEN'] = JS_CSRF_TOKEN;
	  params['module'] = module;
	  params['action'] = action;

	  for (const key in params) {
	    if (params.hasOwnProperty(key)) {
	      const hiddenField = document.createElement('input');
	      hiddenField.type = 'hidden';
	      hiddenField.name = key;
	      hiddenField.value = params[key];

	      form.appendChild(hiddenField);
	    }
	  }

	  document.body.appendChild(form);
	  form.submit();
}

function getAction(module, action, params) {
	var path = JS_CONTEXT_PATH + "/forums/jforum?module=" + module + "&action=" + action;
	
	for (const key in params) {
	    if (params.hasOwnProperty(key)) {
	      path += ("&" + encodeURIComponent(key) + "=" + encodeURIComponent(params[key])); 
	    }
	 }
	
	 window.location.href = path;
}



var MNU_VISIBLE = 'mnuVisible';
var searchPanVisible = false;
var searchPanScrlActive = false;

$(document).ready(function() {
	$("body").click(function() {
	   $(".menu").each(function() {
		  var $menu = $(this);
		  if($menu.hasClass(MNU_VISIBLE)) {
			  hideMenu($menu);
		  }
	   });
	});
	
	
	$('.menuButton').click(function(e) {
		var $menuButton = $(this);
		var menuClass = $menuButton.attr('data-menu');
		
		$(".menu").each(function() {
			  var $menu = $(this);
			  if(!$menu.hasClass(menuClass) && $menu.hasClass(MNU_VISIBLE)) {
				  hideMenu($menu);
			  }
		});
		
		// if a function name was specified by data-onopen tag, execute it
		// before opening the menu
		var onopenFunc = $menuButton.attr('data-onopen');
		if(onopenFunc) {
			window[onopenFunc]();
		}
	   
		var $menu = $('.' + menuClass);
		
		if(!$menu.hasClass(MNU_VISIBLE)) {
			showMenu($menu);
			e.stopPropagation();
		}
	});
	
	$('.searchsc .menuContent').bind('mouseover', function() {
		if(searchPanScrlActive) {
			searchPanScrlActive = false;
			$('.searchsc .menuContent a.itm').each(function() {
				$(this).removeClass('active');
			});
		}
	});
	
	$('#txtSearch').bind('focusin focusout keydown input paste', function(e) {
		var $txt = $(this);
		var $searchPan = $txt.closest('.searchsc').find('.searchPan');
		var hasFocus = $(this).is(':focus');
		var searchTxt = $txt.val().trim();
		var hasText = searchTxt.length > 0;
		
		if(hasFocus && hasText) {
			if(!searchPanVisible) {
				searchPanVisible = true;
				$searchPan.addClass('pv');
			}
			$searchPan.find('b').each(function() {
				$(this).text('"' + searchTxt + '"');
			});
		} else {
			if(searchPanVisible) {
				setTimeout(function() {
					searchPanVisible = false;
					$searchPan.removeClass('pv');
				}, 100);
			}
		}
		
		if(e.keyCode) {
			//up: 38, down: 40
			if(e.keyCode == 38 || e.keyCode == 40) {
				var numItems = $searchPan.find('.itm').length;
				var currIdx = parseInt($txt.attr('data-mi'));
	
				if(e.keyCode == 38) {
					currIdx = (currIdx < 1 ? numItems : currIdx) - 1;
				} else {
					currIdx = currIdx >= (numItems - 1) ? 0 : currIdx + 1;
				}
				$txt.attr('data-mi', currIdx);
				
				var x = 0;
				$searchPan.find('a.itm').each(function() {
					if(x == currIdx) {
						$(this).addClass('active');
						searchPanScrlActive = true;
					} else {
						$(this).removeClass('active');
					}
					x++;
				});
			} else if(e.keyCode == 13) { // enter
				var $activeItm = $searchPan.find('a.itm.active');
				if($activeItm.length) {
					$activeItm.click();
				} else {
					$searchPan.find('a.itm.defI').click();
				}
				setTimeout(function() {
					searchPanVisible = false;
					$searchPan.removeClass('pv');
				}, 100);
			}
		}
		
	});
	
	$('.searchPan a.itm').bind('click touchstart mousedown', function() {
		var $lnk = $(this);
		var txt = $(this).closest('.searchsc').find('.mnusrch').val();
		
		if($lnk.hasClass('advSrch')) {
			var link = $lnk.attr('data-lnk') + '?q=' + encodeURIComponent(txt);
			window.location.href = link;
			return;
		}
		
		var actn = 'search';
		var shouldPost = true;
		if($lnk.hasClass('goog')) {
			actn = 'searchGoogle';
			shouldPost = false;
		}
		
		var searchParams = {
			'match_type': 'all',
			'sort_by': 'time',
			'groupByTopic': 'true',
			'search_keywords': txt,
			'q': txt,
		};
		if($lnk.hasClass('frmSrc')) {
			searchParams.forum_id = $lnk.attr('data-fid');
			searchParams.forum = $lnk.attr('data-fid');
		}
		
		if(shouldPost) {
			postAction('search', actn, searchParams);
		} else {
			getAction('search', actn, searchParams);
		}
		
	});
	
	
});

var lastRzzTime = 0;

$(window).bind('resize', function(){
	  // no need to make heavy processing often than twice a second at max
      var crrTime = (new Date()).getTime();
      console.log('r');
      if(crrTime - lastRzzTime > 500) {
      	console.log('chk');
      	checkHbrUnreads();
      	
      	lastRzzTime = crrTime;
      }
});

function hideMenu($menu) {
	$menu.removeClass(MNU_VISIBLE);
	$menu.hide();
}

function showMenu($menu) {
	$menu.slideDown(70);
	$menu.addClass(MNU_VISIBLE);
}

function checkHbrUnreads() {
	var hasNtf = false;
	$('.mainMenu .hambrmnu .itm .ni').each(function() {
		var $itm = $(this).closest('a.itm');
		if($itm.css('display') != 'none') {
			hasNtf = true;
		}
	});
	$('.hambrntf').css('display', hasNtf ? 'inline-block' : 'none');
	
}


