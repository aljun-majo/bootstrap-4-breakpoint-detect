//Bootstrap 4 @media detect
/*
                    | Max container width
Extra small <576px  |
Small       ≥576px  | 540px	
Medium      ≥768px	| 720px	
Large       ≥992px  | 960px	
Extra large ≥1200px | 1140px
*/

/*

//Bootstrap 4 @media detect
//  Step 1: Add in css file 
@media (max-width: 575px) {
  .bp-xs {
    display: block;
    content: "xs";  
  }
  
  .bp-sm,
  .bp-md,
  .bp-lg,
  .bp-xl {
    display: none;
  }

}

@media (min-width: 576px) {
  .bp-sm {
     display: block;
     content: "sm";      
  }

  .bp-xs,
  .bp-md,
  .bp-lg,
  .bp-xl {
    display: none;
  }

}

@media (min-width: 768px) {
  .bp-md {
     display: block;
     content: "md";  
  }
  .bp-xs,
  .bp-sm,
  .bp-lg,
  .bp-xl {
    display: none;
  }

}

@media (min-width: 992px) {
  .bp-lg {
     display: block;
     content: "lg"; 
  }
  .bp-xs,
  .bp-sm,
  .bp-md,
  .bp-xl {
    display: none;
  }

}

@media (min-width: 1200px) { 
  .bp-xl {
     display: block;
     content: "xl"; 
  }
  .bp-xs,
  .bp-sm,
  .bp-md,
  .bp-lg {
    display: none;
  }

}

*/

//Step 2: Add this in JavaScript file
//Create and append div element in before the </body> tag
//Add bootstrap 4 classes in DIV elem 
$('body').append('<div id="bootstrap-bp" class="container border border-danger text-center invisible sr-only">' +
	     '<span class="bp-hide bp-xs">bp-xs</span>' +
	     '<span class="bp-hide bp-sm">bp-sm</span>' +
	     '<span class="bp-hide bp-md">bp-md</span>' +
	     '<span class="bp-hide bp-lg">bp-lg</span>' +
	     '<span class="bp-hide bp-xl">bp-xl</span>' +
	     '</div>');
 
//check if elem availabe in dom
if( $("#bootstrap-bp").length){	

	$("#bootstrap-bp span").each(function() {

		//check each span elem has css propery 'display' with value = 'block'
		if( $(this).css('display') == 'block' ) {

			//get the text of elem with display value of block
			let bootstapBPText = $(this).text();
			//testing
			console.log("breakpoint (bp): ", bootstapBPText);	


			if( bootstapBPText === 'bp-xs' ) {
				//testing
				console.log("breakpoint bp-xs.");
				//do goodness here...
				
			} else if( bootstapBPText === 'bp-sm' ) {
				//testing
				console.log("breakpoint bp-sm.");
				//do goodness here...
				
			} else if( bootstapBPText === 'bp-md' ) {
				//testing
				console.log("breakpoint bp-md.");
				//do goodness here...
				
			} else if( bootstapBPText === 'bp-lg' ) {
				//testing
				console.log("breakpoint bp-lg.");
				//do goodness here...
				
			} else if( bootstapBPText ==='bp-xl' ) {
				//testing
				console.log("breakpoint bp-xl.");
				//do goodness here...
			} else {
				//testing
				console.log("Please check if the css style above has been added. See Step 1. And Bootstrap 4 Framework");
			}
		}//if 

	});//each

	//breakpoint check when resize viewport 
	$(window).resize(function() {   

		$("#bootstrap-bp span").each(function() {

			//check each span elem has css propery 'display' with value = 'block'
			if( $(this).css('display') == 'block' ) {

				//get the text of elem with display value of block
				let bootstapBPText = $(this).text();
				//testing
				console.log("breakpoint (bp): ", bootstapBPText);	


				if( bootstapBPText === 'bp-xs' ) {
					//testing
					console.log("breakpoint bp-xs.");
					//do goodness here...
					
				} else if( bootstapBPText === 'bp-sm' ) {
					//testing
					console.log("breakpoint bp-sm.");
					//do goodness here...
					
				} else if( bootstapBPText === 'bp-md' ) {
					//testing
					console.log("breakpoint bp-md.");
					//do goodness here...
					
				} else if( bootstapBPText === 'bp-lg' ) {
					//testing
					console.log("breakpoint bp-lg.");
					//do goodness here...
					
				} else if( bootstapBPText ==='bp-xl' ) {
					//testing
					console.log("breakpoint bp-xl.");
					//do goodness here...
				} else {
					//testing
					console.log("Please check if the css style above has been added. See Step 1. And Bootstrap 4 Framework");
				}
			}//if 

		});//each

	});//resize

}//length
