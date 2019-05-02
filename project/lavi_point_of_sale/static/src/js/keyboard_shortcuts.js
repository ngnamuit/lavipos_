document.onkeypress = function (e) {
    e = e || window.event;
    charCode = e.charCode;
    console.log('charCode == ' + charCode);
    switch(charCode)
   {
      case 13:
      		console.log("enter");
      		if ($("div.pay-circle").length == 1) { // if (this) is pos screens , click payment
    			$('.pay-circle').click();
	    	} 
	    	if ($("div.paymentmethod").length == 1 && 
	    		$('.paymentmethod').attr("data-id") == "7") { // payment screen
	    		if ($('.paymentlines').length == 1) {
	    			$('span.next').click();
	    		} else {
	    			$('div.paymentmethod').click();
	    		}
	    	}
      break;
      default:
      break;
   }
    
};

document.addEventListener("keydown", KeyCheck);
function KeyCheck(event)
{
   var KeyID = event.keyCode;
   switch(KeyID)
   {
      case 8:
      		console.log("backspace");
      		if ($('button.numpad-backspace-lavi').length == 1) {
      			$('button.numpad-backspace-lavi').click();
    			$('button.numpad-backspace-lavi').click();
      		}
      break; 
      default:
      break;
   }
}

