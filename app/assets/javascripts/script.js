/* Author: Boyan Kostov, http://wh1sp.com/

*/
jQuery.noConflict();
jQuery(document).ready(function(){
	
	// Run Matt Kersley's jQuery Responsive menu plugin (see plugins.js)
	if (jQuery.fn.mobileMenu) {
		jQuery('ol#id').mobileMenu({
			switchWidth: 768,                   // width (in px to switch at)
			topOptionText: 'Choose a page',     // first option text
			indentString: '&nbsp;&nbsp;&nbsp;'  // string for indenting nested items
		});
	}

	// Run Mathias Bynens jQuery placeholder plugin (see plugins.js)
	if (jQuery.fn.placeholder) {
		jQuery('input, textarea').placeholder();		
	}

	if (jQuery.fn.superfish) {
		jQuery('ul.sf_menu').superfish();
	}

	jQuery("#main").sortable({
			placeholder: "box box-placeholder", forcePlaceholderSize: "true",handle: "a.move"
	}); 

	// Tabs
	jQuery('.tabs div.tab').hide();
	jQuery('.tabs').each(function() {jQuery(this).find('div.tab:eq(0)').show();});
	jQuery('.tabs ul').each(function() {jQuery(this).find('li:eq(0)').addClass('active');});

	jQuery('.tabs ul li').click(function(){
		jQuery(this).siblings().removeClass('active');
		jQuery(this).addClass('active');
		var currentTab = jQuery('a', this).attr('href');
		jQuery(this).parent().parent().find('.tab').hide();
		jQuery(currentTab).show();
		return false;
	});

	jQuery(".tabsjqui").tabs();
	jQuery('.tabsjquistep').tabs();
		
		var jQuerytabs = jQuery('.tabsjquistep').tabs();

        jQuery(".tabsjquistep .ui-tabs-panel").each(function(i){

          var totalSize = jQuery(".tabsjquistep .ui-tabs-panel").size() - 1;
		
		  jQuery(this).append('<div class="clear">&nbsp;</div>');
		
		  if (i != 0) {
              prev = i;
                  jQuery(this).append("<a href='#' class='btn stepprev red mt15' rel='" + prev + "'>&#171; Prev Page</a>");
          }
          if (i != totalSize) {
              next = i + 2;
                  jQuery(this).append("<a href='#' class='btn stepnext green mt15' rel='" + next + "'>Next Page &#187;</a>");
          }
		jQuery(this).append('<div class="clear">&nbsp;</div>');
          

        });

        jQuery('.btn.stepprev, .btn.stepnext').click(function() {
           jQuerytabs.tabs('select', jQuery(this).attr("rel"));
           return false;
       });

	// Accordions and collapsible

	jQuery('.acc_content:eq(0)').show();
	jQuery('.acc_heading').click(function() {
		jQuery(this).next('.acc_content').slideToggle(500).siblings('.acc_content').slideUp('normal');
		jQuery(this).siblings('.acc_heading').removeClass('active');
	});
	if(jQuery.fn.collapsible) {
	jQuery(".coll_heading").collapsible({
		defaultOpen: 'opened',
		cookieName: 'collapsible',
		cssOpen: 'open',
		cssClose: 'close',
		speed: 300
	});
	}

	function ha_openMenus(ha_open) {
		jQuery(ha_open).children("ul").show();
		jQuery(ha_open).children("span").addClass("opened");
	}
	ha_openMenus('.box.menu ul li.hasul.opened');

	jQuery(".box.menu ul li.hasul span").click(function() {
		jQuery(this).parent().children("ul").slideToggle();
		jQuery(this).toggleClass('opened');
		jQuery(this).parent().toggleClass("opened");
	});


	jQuery(".accjqui").accordion();

	// Progress bar
	jQuery(".progressbar").progressbar();
	jQuery(".progressbarwithvalue").progressbar({value: 55});
	var pGress = setInterval(function() {
        var pVal = jQuery('#progressbarmoving').progressbar('option', 'value');
        var pCnt = !isNaN(pVal) ? (pVal + 1) : 1;
        if (pCnt > 100) {
            clearInterval(pGress);
        } else {
            jQuery('#progressbarmoving').progressbar({value: pCnt});
        }
   	 },10);

	// Datepicker
	jQuery( ".datepicker" ).datepicker();

	// Dialog
	jQuery( "#dialog" ).dialog({
			autoOpen: false,
			show: "fade",
			hide: "fade"
		});

		jQuery( "#opener" ).click(function() {
			jQuery( "#dialog" ).dialog( "open" );
			return false;
		});

	jQuery( "#dialog_overlay" ).dialog({
			autoOpen: false,
			modal: true,
			show: "fade",
			hide: "fade"
		});

		jQuery( "#opener_overlay" ).click(function() {
			jQuery( "#dialog_overlay" ).dialog( "open" );
			return false;
		});

	// Slider
	jQuery( ".slider" ).slider();
	jQuery( ".slider_increments" ).slider({
			value:100,
			min: 0,
			max: 500,
			step: 50,
			slide: function( event, ui ) {
				jQuery( "#amount_increments" ).val( "jQuery" + ui.value );
			}
		});
		jQuery( "#amount_increments" ).val( "jQuery" + jQuery( ".slider_increments" ).slider( "value" ) );
	jQuery( ".slider_range" ).slider({
			range: true,
			min: 0,
			max: 500,
			values: [ 75, 300 ],
			slide: function( event, ui ) {
				jQuery( "#amount_range" ).val( "jQuery" + ui.values[ 0 ] + " - jQuery" + ui.values[ 1 ] );
			}
		});
		jQuery( "#amount_range" ).val( "jQuery" + jQuery( ".slider_range" ).slider( "values", 0 ) +
			" - jQuery" + jQuery( ".slider_range" ).slider( "values", 1 ) );
	jQuery( ".slider_range_min" ).slider({
			range: "min",
			value: 37,
			min: 1,
			max: 700,
			slide: function( event, ui ) {
				jQuery( "#amount_range_min" ).val( "jQuery" + ui.value );
			}
		});
		jQuery( "#amount_range_min" ).val( "jQuery" + jQuery( ".slider_range_min" ).slider( "value" ) );
	jQuery( ".slider_range_max" ).slider({
			range: "max",
			min: 1,
			max: 10,
			value: 2,
			slide: function( event, ui ) {
				jQuery( "#amount_range_max" ).val( ui.value );
			}
		});
		jQuery( "#amount_range_max" ).val( jQuery( ".slider_range_max" ).slider( "value" ) );
	jQuery( "#eq > span" ).each(function() {
			// read initial values from markup and remove that
			var value = parseInt( jQuery( this ).text(), 10 );
			jQuery( this ).empty().slider({
				value: value,
				range: "min",
				animate: true,
				orientation: "vertical"
			});
		});

   	// Autocomplete
   	var availableTags = [
			"ActionScript",
			"AppleScript",
			"Asp",
			"BASIC",
			"C",
			"C++",
			"Clojure",
			"COBOL",
			"ColdFusion",
			"Erlang",
			"Fortran",
			"Groovy",
			"Haskell",
			"Java",
			"JavaScript",
			"Lisp",
			"Perl",
			"PHP",
			"Python",
			"Ruby",
			"Scala",
			"Scheme"
		];
		jQuery( "#tags" ).autocomplete({
			source: availableTags
		});

	// Go to top link
	jQuery('#top').click(function() {
		jQuery('body,html').animate({scrollTop:0},800);
	});

	// Autofocus
	jQuery('.formfocus:first').focus();

	// Tipsy configuration
	if (jQuery.fn.tipsy) {
	jQuery('.tip').tipsy({gravity: jQuery.fn.tipsy.autoNS});
	jQuery('.tipRight').tipsy({gravity: 'w'});
	jQuery('.tipLeft').tipsy({gravity: 'e'});
	jQuery('.tipTop').tipsy({gravity: 's'});
	jQuery('.tipBottom').tipsy({gravity: 'n'});
	jQuery('#tipRight').tipsy({gravity: 'w'});
	jQuery('#tipLeft').tipsy({gravity: 'e'});
	jQuery('#tipTop').tipsy({gravity: 's'});
	jQuery('#tipBottom').tipsy({gravity: 'n'});
	}

	// Autoresize 
	if (jQuery.fn.autoResize) {
	jQuery('textarea.resize').autoResize({extraSpace: 10});
	}

	// Autotab config
	if (jQuery.fn.autotab_filter) {
	jQuery('.atab_numbers li input').autotab_magic().autotab_filter('numeric');
	jQuery('.atab_letters li input').autotab_magic().autotab_filter('text');
	jQuery('.atab_alpha li input').autotab_magic().autotab_filter('alpha');
	jQuery('.atab_customOne li input').autotab_magic().autotab_filter({format: 'custom', pattern: '[^a]'});
	jQuery('.atab_uppercase li input').autotab_magic().autotab_filter({uppercase: 'true'});
	jQuery('.atab_lowercase li input').autotab_magic().autotab_filter({lowercase: 'true'});
	jQuery('.atab_nospace li input').autotab_magic().autotab_filter({nospace: 'true'});
	}

	//lo comente por que no aparecian los checkbox inche quien sabe ue tiene le hijo d ela guayaba
	// Uniform.js
	if (jQuery.fn.uniform) {
	jQuery("select.regular, input:checkbox, input:radio, input.regularfile").uniform();
	}

	// UI Multiselect
	if (jQuery.fn.multiselect) {
	jQuery("select.multiple").multiselect();
	}
	// UI Spinner
	if (jQuery.fn.spinner) {
	var itemList = [
		{url: "#", title: "Sample One"},
		{url: "#", title: "Sample Two"},
		{url: "#", title: "Sample Three"},
		{url: "#", title: "Sample Four"},
		{url: "#", title: "Sample Five"}
	];

	var opts = {
		's1': {decimals:2},
		's2': {stepping: 0.25},
		's3': {currency: 'jQuery'},
		's4': {},
		's5': {
			//
			// Two methods of adding external items to the spinner
			//
			// method 1: on initalisation call the add method directly and format html manually
			init: function(e, ui) {
				for (var i=0; i<itemList.length; i++) {
					ui.add('<a href="'+ itemList[i].url +'" target="_blank">'+ itemList[i].title +'</a>');
				}
			},

			// method 2: use the format and items options in combination
			format: '<a href="%(url)" target="_blank">%(title)</a>',
			items: itemList
		}
	};

	for (var n in opts)
		jQuery("#"+n).spinner(opts[n]);

	jQuery("button").click(function(e){
		var ns = jQuery(this).attr('id').match(/(s\d)\-(\w+)jQuery/);
		if (ns != null)
			jQuery('#'+ns[1]).spinner( (ns[2] == 'create') ? opts[ns[1]] : ns[2]);
	});

	}

	// Hider

	jQuery(".hider").click(function() {
		jQuery(this).fadeOut(500);
		jQuery(this).closest(".notification").fadeOut(500);
	})

	// FullCalendar setup
	if (jQuery.fn.fullCalendar) {
		
		var date = new Date();
		var d = date.getDate();
		var m = date.getMonth();
		var y = date.getFullYear();
	
		/* initialize the external events
		-----------------------------------------------------------------*/
	
		jQuery('#external-events div.external-event').each(function() {
		
			// create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
			// it doesn't need to have a start or end
			var eventObject = {
				title: jQuery.trim(jQuery(this).text()) // use the element's text as the event title
			};
			
			// store the Event Object in the DOM element so we can get to it later
			jQuery(this).data('eventObject', eventObject);
			
			// make the event draggable using jQuery UI
			jQuery(this).draggable({
				zIndex: 999,
				revert: true,      // will cause the event to go back to its
				revertDuration: 0  //  original position after the drag
			});
			
		});
	
	
		/* initialize the calendar
		-----------------------------------------------------------------*/
		
		jQuery('#calendar').fullCalendar({
			header: {
				left: 'prev,next',
				center: 'title',
				right: 'month,basicWeek,basicDay'
			},
			editable: true,
			droppable: true, // this allows things to be dropped onto the calendar !!!
			drop: function(date, allDay) { // this function is called when something is dropped
			
				// retrieve the dropped element's stored Event Object
				var originalEventObject = jQuery(this).data('eventObject');
				
				// we need to copy it, so that multiple events don't have a reference to the same object
				var copiedEventObject = jQuery.extend({}, originalEventObject);
				
				// assign it the date that was reported
				copiedEventObject.start = date;
				copiedEventObject.allDay = allDay;
				
				// render the event on the calendar
				// the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
				jQuery('#calendar').fullCalendar('renderEvent', copiedEventObject, true);
				
				// is the "remove after drop" checkbox checked?
				if (jQuery('#drop-remove').is(':checked')) {
					// if so, remove the element from the "Draggable Events" list
					jQuery(this).remove();
				}
				
			}
		});	
	}

	// Fancybox
	if (jQuery.fn.fancybox) {
		jQuery("a.fancybox").fancybox();
	}

	// Breadcrumbs
	if (jQuery.fn.jBreadCrumb) {
	jQuery(".jBreadcrumb").jBreadCrumb();
	}

	// jGrowl
	if (jQuery.fn.jGrowl) {
		// This value can be true, false or a function to be used as a callback when the closer is clciked
				jQuery.jGrowl.defaults.closer = function() {
					console.log("Closing everything!", this);
				};
				
				// A callback for logging notifications.
				jQuery.jGrowl.defaults.log = function(e,m,o) {
					jQuery('#logs').append("<div><strong>#" + jQuery(e).attr('id') + "</strong> <em>" + (new Date()).getTime() + "</em>: " + m + " (" + o.theme + ")</div>")
				}				
				
				jQuery.jGrowl("Testing jGrowl. Hello world!", {position: 'bottom-right'});
				jQuery.jGrowl("This notification will live a little longer.", { life: 2000 });
				jQuery.jGrowl("Sticky notification with a header", { header: 'A Header', sticky: true });
				

				jQuery.jGrowl("This message will not open because we have a callback that returns false.", {
					beforeOpen: function() {
						
					},
					open: function() {
						return false;
					}
				});

				jQuery.jGrowl.defaults.closerTemplate = '<div>hide everything</div>';
	
	}

	// WYSIWYG
	if(jQuery.fn.wysiwyg) {
	jQuery('.editor').wysiwyg();
	}

	// This is DataTables initialization
		if (jQuery.fn.dataTable) {
			
			jQuery('#tabled a.delete').click(function() {
				jQuery(this).parents('tr').remove();
			});
						
			// Selecting a row highlights it
			 jQuery('#tabled tr td input:checkbox').click(function(event) {
				  jQuery(this).parents('tr').toggleClass('row_selected');
			});
			
			// Select all checkboxes, thanks to Bill Beckelman
			jQuery("#tabled thead tr th:first input:checkbox").click(function() {
				var checkedStatus = this.checked;
				jQuery("#tabled tbody tr td:first-child input:checkbox").each(function() {
					this.checked = checkedStatus;
						if (checkedStatus == this.checked) {
							jQuery(this).parents('tr').removeClass('row_selected');
							jQuery(this).closest('.checker span').removeClass('checked');
						}
						if (this.checked) {
							jQuery(this).parents('tr').addClass('row_selected');
							jQuery(this).closest('.checker span').addClass('checked');
						}
				});
			});
			
			jQuery("#tabled tr td:odd").addClass("odd");
			jQuery("#tabled tr td:even").addClass("even");
			
			/* Init DataTables, thanks to Datatable forums */
			var oTable = jQuery('#tabled').dataTable({
				"sPaginationType": "full_numbers",
				"iDisplayLength": 25,
				"bFilter": true,
				"bLengthChange": true,
				"bSort": true,
				"sDom": 'rtiplf',
				"aoColumnDefs": [ { "bSortable": false, "sClass": "readonly", "aTargets": [ 'tview', 'tedit', 'tdelete', 'check' ] }]
				
			});

			/* Ajax connector */
			/*jQuery('td:not(.readonly)', oTable.fnGetNodes()).editable( '../examples_support/editable_ajax.php', {
						"callback": function( sValue, y ) {
							var aPos = oTable.fnGetPosition( this );
							oTable.fnUpdate( sValue, aPos[0], aPos[1] );
						},
						"submitdata": function ( value, settings ) {
							return {
								"row_id": this.parentNode.getAttribute('id'),
								"column": oTable.fnGetPosition( this )[2]
							};
						},
					"height": "14px"
					});*/

		}

	// Elfinder
		if(jQuery.fn.elfinder) {
		var f = jQuery('#finder').elfinder({
				url : 'filemanager/connectors/php/connector.php',
				lang : 'en',
				docked : true
			})
			// window.console.log(f)
			jQuery('#close,#open,#dock,#undock').click(function() {
				jQuery('#finder').elfinder(jQuery(this).attr('id'));
			})	
		}

	// jAlert
	if(jQuery.alerts) {
		jQuery(".alert_button").click( function() {
						jAlert('This is a custom alert box', 'Alert Dialog');
					});
		jQuery(".alert_button_confirm").click( function() {			
			jConfirm('Can you confirm this?', 'Confirmation Dialog', function(r) {
			    jAlert('Confirmed: ' + r, 'Confirmation Results');
			});
		});
		jQuery(".alert_button_prompt").click( function() {			
			jPrompt('Type something:', 'Prefilled value', 'Prompt Dialog', function(r) {
		    if( r ) alert('You entered ' + r);
			});
		});
	}

	// Color picker
	if(jQuery.fn.miniColors) {
		jQuery(".colors").miniColors({
						
						change: function(hex, rgb) {
							jQuery("#console").prepend('HEX: ' + hex + ' (RGB: ' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ')<br />');
						}
						
		});
	}

	// Validation engine
	if(jQuery.fn.validationEngine) {
		jQuery("#validation").validationEngine();
	}

	// Slidernav 
	if(jQuery.fn.sliderNav) {
	jQuery('.slidernav').sliderNav();
	}

	// Fixing padding in inputs and textareas
	//jQuery('textarea').css("width","100%").css("width","-=22");
	//jQuery('input.text').css("width","100%").css("width","-=22");

	var ha_window = jQuery(window).width();
	if(ha_window < 800) {
			jQuery('header').addClass('mobile');
		}
		else {
			jQuery('header').removeClass('mobile');
		}

	jQuery(window).resize(function(){
		if(ha_window < 800) {
			jQuery('header').addClass('mobile');
		}
		else {
			jQuery('header').removeClass('mobile');
		}
	});
	// Something else? :)
});





