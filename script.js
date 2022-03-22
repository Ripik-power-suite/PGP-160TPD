function showInfo() {
	furnacePressure = document.getElementById('furnacePressure').value;
	airToFuelRatio = document.getElementById('airToFuelRatio').value;
	furnaceDraw = document.getElementById('furnaceDraw').value;
	cullet = document.getElementById('cullet').value;
	NCV = document.getElementById('NCV').value;
	// totalDraw = document.getElementById('totalDraw').value;
	// recurpratorLeftMiddleTemp = document.getElementById('recurpratorLeftMiddleTemp').value; //450 by default
	MTBottomLeftTemp = document.getElementById('MTBottomLeftTemp').value;
	MTBottomMiddleTemp = document.getElementById('MTBottomMiddleTemp').value;

	var gfr = 0;
	var str = "";

	if(MTBottomLeftTemp==0){
		gfr = 20744.73942 -47.44832037*furnacePressure -16.48798471*MTBottomMiddleTemp -34.37023668*airToFuelRatio -4.214459748*furnaceDraw + 25.53651047*cullet - 0.009355744572*NCV;
		str += "<h2>Gas Flow Rate for GSPC = " + gfr + "<br></h2>";
	}
	else{
		gfr = 3396.174906 -181.0794628*furnacePressure -0.1410686151*MTBottomLeftTemp -19.71720539*airToFuelRatio -10.6838522*furnaceDraw -2.529108533*cullet +0.0003249539978*NCV;
		str += "<h2>Gas Flow Rate for GAIL = " + gfr + "<br></h2>";
	}
	
	document.getElementById('info').innerHTML = str;
	document.getElementById('inputInfo').style.display = "none";
	document.getElementById('outputInfo').style.display = "block";
}

// async function postData(url, data = {}) {
// 	// Default options are marked with *
// 	const response = await fetch(url, {
// 		method: 'POST', // *GET, POST, PUT, DELETE, etc.
// 		mode: 'cors', // no-cors, *cors, same-origin
// 		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
// 		credentials: 'same-origin', // include, *same-origin, omit
// 		headers: {
// 		'Content-Type': 'application/json'
// 		// 'Content-Type': 'application/x-www-form-urlencoded',
// 		},
// 		redirect: 'follow', // manual, *follow, error
// 		referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
// 		body: JSON.stringify(data) // body data type must match "Content-Type" header
// 	});
// 	return response; // parses JSON response into native JavaScript objects
//   }
  

function resetForm() {
	document.getElementById('inputInfo').style.display = "block";
	document.getElementById('outputInfo').style.display = "none";

	document.getElementById("inputForm").reset();
}

document.getElementById('outputInfo').style.display = "none";