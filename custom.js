
$(function() {
/*!
Author: amojo
Author URI: http://www.thegoodartisan.com
repo: https://github.com/jun20/bootstrap-4-breakpoint-detect
Description: Bootstrap 4 Breakpoint and @media Detect using JS and CSS
Version: 1.0.1
*/	

"use strict";

//create and append div element in before the </body> tag
// add bootstrap 4 classes 
	$('body').append('<div id="bootstrap-bp" class="container border border-danger text-center invisible sr-only">' +
		     '<span class="bp-hide bp-xs">bp-xs</span>' +
		     '<span class="bp-hide bp-sm">bp-sm</span>' +
		     '<span class="bp-hide bp-md">bp-md</span>' +
		     '<span class="bp-hide bp-lg">bp-lg</span>' +
		     '<span class="bp-hide bp-xl">bp-xl</span>' +
		     '</div>');


			let totalbpArraySrcs = $("#bootstrap-bp span"), spanElems = $("#bootstrap-bp span"), bootstapBPText;
			console.log($("#bootstrap-bp span"));
			function getBPResult() {
				let spanElems = $("#bootstrap-bp span");
				for (let i = 0; i < totalbpArraySrcs.length; i++) {
				   
				    let valueOfArr = spanElems[i].innerText;
				 	console.log("valueOfArr:",valueOfArr);	
				    if( (valueOfArr.trim()=='') ) {
				    	bootstapBPText = spanElems[i].innerHTML;	    	
				    }    
				}	

				return bootstapBPText; 
			}//getBPResult
		
			//getBPResult() return one of these 'bp-xs', 'bp-sm', 'bp-md', 'bp-lg', 'bp-xl'

			class BreakPointMediaNames {  
			  constructor (names) {
			    this.names = names;
			  }
			  contains(names) {
			    return names.every((name) => this.names.indexOf(name) !== -1);
			  }
			}

			const breakpointMediaArr = ['bp-xs', 'bp-sm', 'bp-md', 'bp-lg', 'bp-xl'];
			const breakpointMediaObj = new BreakPointMediaNames(breakpointMediaArr);  
			//console.log("mediaQueryWidth-",  mediaQueryWidth );//["bp-xs", "bp-sm", "bp-md", "bp-lg", "bp-xl"]
			const breakpointMediaContains =  breakpointMediaObj.contains([ getBPResult() ]);//true

			//run only when breakpointType = 'bp-xl': bpXLarge
			function bpXLargeOutsideFunc () {
			 console.log("breakpointType = 'bp-xl': bpXLarge.");
			}

			//run only when breakpointType = 'bp-xs': bpXSmall
			function bpXSmallOutsideFunc () {
				
				 console.log("breakpointType = 'bp-xs': bpXSmall.");
			}			

			function getBreakpoint (bpQuery) {

				  let breakpointMedia;

				  function bpXSmall () {
				  	//do goodness
				  	bpXSmallOutsideFunc();
				  	console.log("breakpoint bpXSmall and INSIDE function.");

				   	return breakpointMedia = 'bpXSmall';
				  }
				  function bpSmall () {
				  	//do goodness

				  	console.log("breakpoint bpSmall and INSIDE function.");
				    return breakpointMedia = 'bpSmall';
				  }
				  function bpMedium () {
				  	//do goodness
				  	console.log("breakpoint bpMedium and INSIDE function.");
				    return breakpointMedia = 'bpMedium';
				  }
				  function bpLarge () {
				  	//do goodness
				  	console.log("breakpoint bpLarge and INSIDE function.");
				    return breakpointMedia = 'bpLarge';
				  }
				  function bpXLarge () {
				  	//do goodness
				  	bpXLargeOutsideFunc();//invoke another function
				  	console.log("breakpoint bpXLarge and INSIDE function.");
				    return breakpointMedia = 'bpXLarge';
				  }					  

				  var breakpointType = {

				    'bp-xs': bpXSmall,
				    'bp-sm': bpSmall,
				    'bp-md': bpMedium,
				    'bp-lg': bpLarge,
				    'bp-xl': bpXLarge,

				  };

				  return breakpointType[bpQuery]();
			}//getBreakpoint

			if( breakpointMediaContains ) {
				let getBPResultFunc = getBPResult();//store function retun value 
				let breakpointMedia = getBreakpoint( getBPResultFunc );
				breakpointMedia;//run 	
			} else {
				//testing only
				console.log("Please add the div with span elements inside on it.");
			}


			$(window).resize(function() {   
				
				if( breakpointMediaContains ) {	
				getBPResult();//invoke for loop function when viewport resize
				let getBPResultFunc = getBPResult();//store function retun value 
				let breakpointMedia = getBreakpoint( getBPResultFunc );
				breakpointMedia;//run when viewport resize

				} else {
					//testing only
					console.log("Please add the div with span elements inside on it.");
				}

			});//resize

}); //function
