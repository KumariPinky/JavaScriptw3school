// An HTML event can be something the browser does, or something a user does.

// document.getElementById('hi').innerHTML = Date()
<button onclick="document.getElementById('hi').innerHTML = Date()"> here click</button>
{/* <button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button> */}

<button onclick="this.innerHTML = Date()">The time is?</button>

{/* <button onclick="displayDate()">The time is?</button> */}



// Event	    Description
// onchange	    An HTML element has been changed
// onclick	    The user clicks an HTML element
// onmouseover	The user moves the mouse over an HTML element
// onmouseout	The user moves the mouse away from an HTML element
// onkeydown	The user pushes a keyboard key
// onload	    The browser has finished loading the page