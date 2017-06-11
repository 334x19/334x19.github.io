firstverses=[0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

lastverses=[0,7,286,200,176,120,165,206,75,127,109,123,111,43,52,99,128,111,110,98,135,112,78,118,64,77,227,93,88,69,60,34,30,73,54,45,83,182,88,75,85,54,53,89,59,37,35,38,29,18,45,60,49,62,55,78,96,29,22,24,13,14,11,11,18,12,12,30,52,52,44,28,28,20,56,40,31,50,40,46,42,29,19,36,25,22,17,19,26,30,20,15,21,11,8,8,19,5,8,8,11,11,8,3,9,5,4,7,3,6,3,5,4,5,6];

function maxayet() {
	var surenumber = document.getElementById('sure').value;
	var verse = document.getElementById('ayet');
	if (document.getElementById('sn').checked) {
		if (verse.value < "1" && verse.value !== "") {verse.value = 1}
		else if (verse.value > lastverses[surenumber]) {verse.value = lastverses[surenumber]}
	}
	else {
		if (surenumber == 1 || surenumber == 9) {
			if (verse.value < "1" && verse.value !== "") {verse.value = 1}
			else if (verse.value > lastverses[surenumber]) {verse.value = lastverses[surenumber]}
		}
		else {
			if (verse.value < firstverses[surenumber]) {verse.value = firstverses[surenumber]}
			else if (verse.value > lastverses[surenumber]) {verse.value = lastverses[surenumber]}
		}
	}
}

function maxayett() {
	var surenum2 = document.getElementById("sure2").value;
	var verse = document.getElementById('ayet2');
	if (document.getElementById('sn').checked) {
		if (verse.value < "1" && verse.value !== "") {
			verse.value = lastverses[surenum2-1];
			document.getElementById("sure2").value = parseInt(surenum2)-1;
		}
		else if (verse.value > lastverses[surenum2]) {verse.value = lastverses[surenum2]}
	}
	else {
		if (surenum2 == 1 || surenum2 == 9){
			if (verse.value < "1" && verse.value !== "") {verse.value = 1}
			else if (verse.value > lastverses[surenum2]) {verse.value = lastverses[surenum2]}
		}
		else {
			if (verse.value < firstverses[surenum2]) {verse.value = firstverses[surenum2]}
			else if (verse.value > lastverses[surenum2]) {verse.value = lastverses[surenum2]}
		}
	}
}

$('#ayet').on('input', maxayet);
$('#ayet2').on('input', maxayett);

$('#sn').on('change', maxayet);
$('#sn').on('change', maxayett);

$('#sırano1').on('input', sırano1_to_sırano2);

function sırano1_to_sırano2() {
	if (document.getElementById('sn').checked) {
		dörthaneli(6, 2, 3);
	}
	else {
		dörthaneli(6, 3, 4);
	}
}

function dörthaneli(a, b, c) {
		if (	$("#sırano1").val().substr(0, 1) >=  a  &&
				$("#sırano1").val().substr(1, 1) >=  b  &&
				$("#sırano1").val().substr(2, 1) >   c 	) 	{	document.getElementById('sırano2').focus();	}
	
	else if (	$("#sırano1").val().substr(0, 1) >=  a  &&
				$("#sırano1").val().substr(1, 1) >   b  &&
				$("#sırano1").val().substr(2, 1) >= "0" 	) 	{	document.getElementById('sırano2').focus();	}

	else if (	$("#sırano1").val().substr(0, 1) >   a  &&
		 		$("#sırano1").val().substr(1, 1) >= "0" &&
				$("#sırano1").val().substr(2, 1) >= "0" 	)	{	document.getElementById('sırano2').focus();	}

	else if (	$("#sırano1").val().substr(0, 1) >= "1" &&
		 		$("#sırano1").val().substr(1, 1) >= "0" &&
		 		$("#sırano1").val().substr(2, 1) >= "0" &&
		 		$("#sırano1").val().substr(3, 1) >= "0"	)	{	document.getElementById('sırano2').focus();	}

	else if	(	$("#sırano1").val().substr(0, 1) == "0"	)	{	document.getElementById('sırano2').focus();	}
}

$('#sırano2').on('input', sırano1_to_sırano2_2);

function sırano1_to_sırano2_2() {
	if (document.getElementById('sn').checked) {
		dörthaneli2(6, 2, 3);
	}
	else {
		dörthaneli2(6, 3, 4);
	}
}

function dörthaneli2(a, b, c) {
		if (	$("#sırano2").val().substr(0, 1) >=  a  &&
				$("#sırano2").val().substr(1, 1) >=  b  &&
				$("#sırano2").val().substr(2, 1) >   c 	) 	{	document.getElementById('sırano2').blur();	}
	
	else if (	$("#sırano2").val().substr(0, 1) >=  a  &&
				$("#sırano2").val().substr(1, 1) >   b  &&
				$("#sırano2").val().substr(2, 1) >= "0" 	) 	{	document.getElementById('sırano2').blur();	}

	else if (	$("#sırano2").val().substr(0, 1) >   a  &&
		 		$("#sırano2").val().substr(1, 1) >= "0" &&
				$("#sırano2").val().substr(2, 1) >= "0" 	)	{	document.getElementById('sırano2').blur();	}

	else if (	$("#sırano2").val().substr(0, 1) >= "1" &&
		 		$("#sırano2").val().substr(1, 1) >= "0" &&
		 		$("#sırano2").val().substr(2, 1) >= "0" &&
		 		$("#sırano2").val().substr(3, 1) >= "0"	)	{	document.getElementById('sırano2').blur();	}
}

$('#ayet').keyup(sonraki2);

function üçhaneli(a,b) {
	
		 if (	$("#ayet").val().substr(0, 1) >=  a  &&
				$("#ayet").val().substr(1, 1) >   b 	) 	{	document.getElementById('sure2').focus();	}

	else if (	$("#ayet").val().substr(0, 1) >   a  &&
		 		$("#ayet").val().substr(1, 1) >= "0"	)	{	document.getElementById('sure2').focus();	}

	else if (	$("#ayet").val().substr(0, 1) >= "1" &&
		 		$("#ayet").val().substr(1, 1) >= "0" &&
		 		$("#ayet").val().substr(2, 1) >= "0"	)	{	document.getElementById('sure2').focus();	}

	else if	(	$("#ayet").val().substr(0, 1) == "0"	)	{	document.getElementById('sure2').focus();	}
}

function ikihaneli(a,b) {
	
	 	 if (	$("#ayet").val().substr(0, 1) >   a 	)	{	document.getElementById('sure2').focus();	}

	else if (	$("#ayet").val().substr(0, 1) == "0"	)	{	document.getElementById('sure2').focus();	}

	else if (	$("#ayet").val().substr(0, 1) ==  a  &&
		 		$("#ayet").val().substr(1, 1) >= "0" &&
		 		$("#ayet").val().substr(1, 1) <=  b 	)	{	document.getElementById('sure2').focus();	}

	else if (	$("#ayet").val().substr(0, 1) <   a  &&
				$("#ayet").val().substr(1, 1) >= "0" 	)	{	document.getElementById('sure2').focus();	}
}

function birhaneli() {
	if (	$("#ayet").val().substr(0, 1) >= "0"	) 	{	document.getElementById('sure2').focus();	}
}

function birhaneli1() {
	if (	$("#ayet").val().substr(0, 1) >= "1"	) 	{	document.getElementById('sure2').focus();	}
}

function üçhaneli9() {
		 if (	$("#ayet").val().substr(0, 1) >= "1" &&
			 	$("#ayet").val().substr(1, 1) >  "2") 	{	document.getElementById('sure2').focus();	}

	else if (	$("#ayet").val().substr(0, 1) >  "1" &&
			 	$("#ayet").val().substr(1, 1) >= "0")	{	document.getElementById('sure2').focus();	}

	else if (	$("#ayet").val().substr(0, 1) >= "1" &&
			 	$("#ayet").val().substr(1, 1) >= "0" &&
			 	$("#ayet").val().substr(2, 1) >= "0")	{	document.getElementById('sure2').focus();	}
}

function sonraki2() {
	var key = event.keyCode;
	if ( key == 13 ) { document.getElementById("sure2").focus() }
	var suranumber = document.getElementById("sure").value;
if (suranumber) {
	 if (suranumber === '1') { birhaneli1() }
else if (suranumber === '2') { üçhaneli(2,8) }
else if (suranumber === '3') { üçhaneli(2,0) }
else if (suranumber === '4') { üçhaneli(1,7) }
else if (suranumber === '5') { üçhaneli(1,2) }
else if (suranumber === '6') { üçhaneli(1,6) }
else if (suranumber === '7') { üçhaneli(2,0) }
else if (suranumber === '8') { ikihaneli(7,5) }
else if (suranumber === '9') { üçhaneli9() }
else if (suranumber === '10') { üçhaneli(1,0) }
else if (suranumber === '11') { üçhaneli(1,2) }
else if (suranumber === '12') { üçhaneli(1,1) }
else if (suranumber === '13') { ikihaneli(4,3) }
else if (suranumber === '14') { ikihaneli(5,2) }
else if (suranumber === '15') { ikihaneli(9,9) }
else if (suranumber === '16') { üçhaneli(1,2) }
else if (suranumber === '17') { üçhaneli(1,1) }
else if (suranumber === '18') { üçhaneli(1,1) }
else if (suranumber === '19') { ikihaneli(9,8) }
else if (suranumber === '20') { üçhaneli(1,3) }
else if (suranumber === '21') { üçhaneli(1,1) }
else if (suranumber === '22') { ikihaneli(7,8) }
else if (suranumber === '23') { üçhaneli(1,1) }
else if (suranumber === '24') { ikihaneli(6,4) }
else if (suranumber === '25') { ikihaneli(7,7) }
else if (suranumber === '26') { üçhaneli(2,2) }
else if (suranumber === '27') { ikihaneli(9,3) }
else if (suranumber === '28') { ikihaneli(8,8) }
else if (suranumber === '29') { ikihaneli(6,9) }
else if (suranumber === '30') { ikihaneli(6,0) }
else if (suranumber === '31') { ikihaneli(3,4) }
else if (suranumber === '32') { ikihaneli(3,0) }
else if (suranumber === '33') { ikihaneli(7,3) }
else if (suranumber === '34') { ikihaneli(5,4) }
else if (suranumber === '35') { ikihaneli(4,5) }
else if (suranumber === '36') { ikihaneli(8,3) }
else if (suranumber === '37') { üçhaneli(1,8) }
else if (suranumber === '38') { ikihaneli(8,8) }
else if (suranumber === '39') { ikihaneli(7,5) }
else if (suranumber === '40') { ikihaneli(8,5) }
else if (suranumber === '41') { ikihaneli(5,4) }
else if (suranumber === '42') { ikihaneli(5,3) }
else if (suranumber === '43') { ikihaneli(8,9) }
else if (suranumber === '44') { ikihaneli(5,9) }
else if (suranumber === '45') { ikihaneli(3,7) }
else if (suranumber === '46') { ikihaneli(3,5) }
else if (suranumber === '47') { ikihaneli(3,8) }
else if (suranumber === '48') { ikihaneli(2,9) }
else if (suranumber === '49') { ikihaneli(1,8) }
else if (suranumber === '50') { ikihaneli(4,5) }
else if (suranumber === '51') { ikihaneli(6,0) }
else if (suranumber === '52') { ikihaneli(4,9) }
else if (suranumber === '53') { ikihaneli(6,2) }
else if (suranumber === '54') { ikihaneli(5,5) }
else if (suranumber === '55') { ikihaneli(7,8) }
else if (suranumber === '56') { ikihaneli(9,6) }
else if (suranumber === '57') { ikihaneli(2,9) }
else if (suranumber === '58') { ikihaneli(2,2) }
else if (suranumber === '59') { ikihaneli(2,4) }
else if (suranumber === '60') { ikihaneli(1,3) }
else if (suranumber === '61') { ikihaneli(1,4) }
else if (suranumber === '62') { ikihaneli(1,1) }
else if (suranumber === '63') { ikihaneli(1,1) }
else if (suranumber === '64') { ikihaneli(1,8) }
else if (suranumber === '65') { ikihaneli(1,2) }
else if (suranumber === '66') { ikihaneli(1,2) }
else if (suranumber === '67') { ikihaneli(3,0) }
else if (suranumber === '68') { ikihaneli(5,2) }
else if (suranumber === '69') { ikihaneli(5,2) }
else if (suranumber === '70') { ikihaneli(4,4) }
else if (suranumber === '71') { ikihaneli(2,8) }
else if (suranumber === '72') { ikihaneli(2,8) }
else if (suranumber === '73') { ikihaneli(2,0) }
else if (suranumber === '74') { ikihaneli(5,6) }
else if (suranumber === '75') { ikihaneli(4,0) }
else if (suranumber === '76') { ikihaneli(3,1) }
else if (suranumber === '77') { ikihaneli(5,0) }
else if (suranumber === '78') { ikihaneli(4,0) }
else if (suranumber === '79') { ikihaneli(4,6) }
else if (suranumber === '80') { ikihaneli(4,2) }
else if (suranumber === '81') { ikihaneli(2,9) }
else if (suranumber === '82') { ikihaneli(1,9) }
else if (suranumber === '83') { ikihaneli(3,6) }
else if (suranumber === '84') { ikihaneli(2,5) }
else if (suranumber === '85') { ikihaneli(2,2) }
else if (suranumber === '86') { ikihaneli(1,7) }
else if (suranumber === '87') { ikihaneli(1,9) }
else if (suranumber === '88') { ikihaneli(2,6) }
else if (suranumber === '89') { ikihaneli(3,0) }
else if (suranumber === '90') { ikihaneli(2,0) }
else if (suranumber === '91') { ikihaneli(1,5) }
else if (suranumber === '92') { ikihaneli(2,1) }
else if (suranumber === '93') { ikihaneli(1,1) }
else if (suranumber === '94') { birhaneli() }
else if (suranumber === '95') { birhaneli() }
else if (suranumber === '96') { ikihaneli(1,9) }
else if (suranumber === '97') { birhaneli() }
else if (suranumber === '98') { birhaneli() }
else if (suranumber === '99') { birhaneli() }
else if (suranumber === '100') { ikihaneli(1,1) }
else if (suranumber === '101') { ikihaneli(1,1) }
else if (suranumber === '102') { birhaneli() }
else if (suranumber === '103') { birhaneli() }
else if (suranumber === '104') { birhaneli() }
else if (suranumber === '105') { birhaneli() }
else if (suranumber === '106') { birhaneli() }
else if (suranumber === '107') { birhaneli() }
else if (suranumber === '108') { birhaneli() }
else if (suranumber === '109') { birhaneli() }
else if (suranumber === '110') { birhaneli() }
else if (suranumber === '111') { birhaneli() }
else if (suranumber === '112') { birhaneli() }
else if (suranumber === '113') { birhaneli() }
else if (suranumber === '114') { birhaneli() }
}else{ birhaneli1() }
}

$('#ayet2').keyup(sonraki4);

function üçhaneli4(a,b) {
	
		 if (	$("#ayet2").val().substr(0, 1) >=  a  &&
				$("#ayet2").val().substr(1, 1) >   b 	) 	{ document.getElementById('ayet2').blur(); }

	else if (	$("#ayet2").val().substr(0, 1) >   a  &&
		 		$("#ayet2").val().substr(1, 1) >= "0"	)	{ document.getElementById('ayet2').blur(); }

	else if (	$("#ayet2").val().substr(0, 1) >= "1" &&
		 		$("#ayet2").val().substr(1, 1) >= "0" &&
		 		$("#ayet2").val().substr(2, 1) >= "0"	)	{ document.getElementById('ayet2').blur(); }

	else if	(	$("#ayet2").val().substr(0, 1) == "0"	)	{ document.getElementById('ayet2').blur(); }
}

function ikihaneli4(a,b) {
	
	 	 if (	$("#ayet2").val().substr(0, 1) >   a 	)	{ document.getElementById('ayet2').blur(); }

	else if (	$("#ayet2").val().substr(0, 1) == "0"	)	{ document.getElementById('ayet2').blur(); }

	else if (	$("#ayet2").val().substr(0, 1) ==  a  &&
		 		$("#ayet2").val().substr(1, 1) >= "0" &&
		 		$("#ayet2").val().substr(1, 1) <=  b 	)	{ document.getElementById('ayet2').blur(); }

	else if (	$("#ayet2").val().substr(0, 1) <   a  &&
				$("#ayet2").val().substr(1, 1) >= "0" 	)	{ document.getElementById('ayet2').blur(); }
}

function birhaneli4() {
	if (	$("#ayet2").val().substr(0, 1) >= "0"	) {	document.getElementById('ayet2').blur(); }
}

function birhaneli41() {
	if (	$("#ayet2").val().substr(0, 1) >= "1"	) {	document.getElementById('ayet2').blur(); }
}

function üçhaneli49() {
		 if (	$("#ayet2").val().substr(0, 1) >= "1" &&
			 	$("#ayet2").val().substr(1, 1) >  "2") 	{ document.getElementById('ayet2').blur(); }

	else if (	$("#ayet2").val().substr(0, 1) >  "1" &&
			 	$("#ayet2").val().substr(1, 1) >= "0")	{ document.getElementById('ayet2').blur(); }

	else if (	$("#ayet2").val().substr(0, 1) >= "1" &&
			 	$("#ayet2").val().substr(1, 1) >= "0" &&
			 	$("#ayet2").val().substr(2, 1) >= "0")	{ document.getElementById('ayet2').blur(); }
}

function sonraki4() {
	var key = event.keyCode;
	if (	key == 13	)	{ document.getElementById("ayet2").blur() }
	var suranum2 = document.getElementById('sure2').value;
if (suranum2) {
	 if (suranum2 === '1') { birhaneli41() }
else if (suranum2 === '2') { üçhaneli4(2,8) }
else if (suranum2 === '3') { üçhaneli4(2,0) }
else if (suranum2 === '4') { üçhaneli4(1,7) }
else if (suranum2 === '5') { üçhaneli4(1,2) }
else if (suranum2 === '6') { üçhaneli4(1,6) }
else if (suranum2 === '7') { üçhaneli4(2,0) }
else if (suranum2 === '8') { ikihaneli4(7,5) }
else if (suranum2 === '9') { üçhaneli49() }
else if (suranum2 === '10') { üçhaneli4(1,0) }
else if (suranum2 === '11') { üçhaneli4(1,2) }
else if (suranum2 === '12') { üçhaneli4(1,1) }
else if (suranum2 === '13') { ikihaneli4(4,3) }
else if (suranum2 === '14') { ikihaneli4(5,2) }
else if (suranum2 === '15') { ikihaneli4(9,9) }
else if (suranum2 === '16') { üçhaneli4(1,2) }
else if (suranum2 === '17') { üçhaneli4(1,1) }
else if (suranum2 === '18') { üçhaneli4(1,1) }
else if (suranum2 === '19') { ikihaneli4(9,8) }
else if (suranum2 === '20') { üçhaneli4(1,3) }
else if (suranum2 === '21') { üçhaneli4(1,1) }
else if (suranum2 === '22') { ikihaneli4(7,8) }
else if (suranum2 === '23') { üçhaneli4(1,1) }
else if (suranum2 === '24') { ikihaneli4(6,4) }
else if (suranum2 === '25') { ikihaneli4(7,7) }
else if (suranum2 === '26') { üçhaneli4(2,2) }
else if (suranum2 === '27') { ikihaneli4(9,3) }
else if (suranum2 === '28') { ikihaneli4(8,8) }
else if (suranum2 === '29') { ikihaneli4(6,9) }
else if (suranum2 === '30') { ikihaneli4(6,0) }
else if (suranum2 === '31') { ikihaneli4(3,4) }
else if (suranum2 === '32') { ikihaneli4(3,0) }
else if (suranum2 === '33') { ikihaneli4(7,3) }
else if (suranum2 === '34') { ikihaneli4(5,4) }
else if (suranum2 === '35') { ikihaneli4(4,5) }
else if (suranum2 === '36') { ikihaneli4(8,3) }
else if (suranum2 === '37') { üçhaneli4(1,8) }
else if (suranum2 === '38') { ikihaneli4(8,8) }
else if (suranum2 === '39') { ikihaneli4(7,5) }
else if (suranum2 === '40') { ikihaneli4(8,5) }
else if (suranum2 === '41') { ikihaneli4(5,4) }
else if (suranum2 === '42') { ikihaneli4(5,3) }
else if (suranum2 === '43') { ikihaneli4(8,9) }
else if (suranum2 === '44') { ikihaneli4(5,9) }
else if (suranum2 === '45') { ikihaneli4(3,7) }
else if (suranum2 === '46') { ikihaneli4(3,5) }
else if (suranum2 === '47') { ikihaneli4(3,8) }
else if (suranum2 === '48') { ikihaneli4(2,9) }
else if (suranum2 === '49') { ikihaneli4(1,8) }
else if (suranum2 === '50') { ikihaneli4(4,5) }
else if (suranum2 === '51') { ikihaneli4(6,0) }
else if (suranum2 === '52') { ikihaneli4(4,9) }
else if (suranum2 === '53') { ikihaneli4(6,2) }
else if (suranum2 === '54') { ikihaneli4(5,5) }
else if (suranum2 === '55') { ikihaneli4(7,8) }
else if (suranum2 === '56') { ikihaneli4(9,6) }
else if (suranum2 === '57') { ikihaneli4(2,9) }
else if (suranum2 === '58') { ikihaneli4(2,2) }
else if (suranum2 === '59') { ikihaneli4(2,4) }
else if (suranum2 === '60') { ikihaneli4(1,3) }
else if (suranum2 === '61') { ikihaneli4(1,4) }
else if (suranum2 === '62') { ikihaneli4(1,1) }
else if (suranum2 === '63') { ikihaneli4(1,1) }
else if (suranum2 === '64') { ikihaneli4(1,8) }
else if (suranum2 === '65') { ikihaneli4(1,2) }
else if (suranum2 === '66') { ikihaneli4(1,2) }
else if (suranum2 === '67') { ikihaneli4(3,0) }
else if (suranum2 === '68') { ikihaneli4(5,2) }
else if (suranum2 === '69') { ikihaneli4(5,2) }
else if (suranum2 === '70') { ikihaneli4(4,4) }
else if (suranum2 === '71') { ikihaneli4(2,8) }
else if (suranum2 === '72') { ikihaneli4(2,8) }
else if (suranum2 === '73') { ikihaneli4(2,0) }
else if (suranum2 === '74') { ikihaneli4(5,6) }
else if (suranum2 === '75') { ikihaneli4(4,0) }
else if (suranum2 === '76') { ikihaneli4(3,1) }
else if (suranum2 === '77') { ikihaneli4(5,0) }
else if (suranum2 === '78') { ikihaneli4(4,0) }
else if (suranum2 === '79') { ikihaneli4(4,6) }
else if (suranum2 === '80') { ikihaneli4(4,2) }
else if (suranum2 === '81') { ikihaneli4(2,9) }
else if (suranum2 === '82') { ikihaneli4(1,9) }
else if (suranum2 === '83') { ikihaneli4(3,6) }
else if (suranum2 === '84') { ikihaneli4(2,5) }
else if (suranum2 === '85') { ikihaneli4(2,2) }
else if (suranum2 === '86') { ikihaneli4(1,7) }
else if (suranum2 === '87') { ikihaneli4(1,9) }
else if (suranum2 === '88') { ikihaneli4(2,6) }
else if (suranum2 === '89') { ikihaneli4(3,0) }
else if (suranum2 === '90') { ikihaneli4(2,0) }
else if (suranum2 === '91') { ikihaneli4(1,5) }
else if (suranum2 === '92') { ikihaneli4(2,1) }
else if (suranum2 === '93') { ikihaneli4(1,1) }
else if (suranum2 === '94') { birhaneli4() }
else if (suranum2 === '95') { birhaneli4() }
else if (suranum2 === '96') { ikihaneli4(1,9) }
else if (suranum2 === '97') { birhaneli4() }
else if (suranum2 === '98') { birhaneli4() }
else if (suranum2 === '99') { birhaneli4() }
else if (suranum2 === '100') { ikihaneli4(1,1) }
else if (suranum2 === '101') { ikihaneli4(1,1) }
else if (suranum2 === '102') { birhaneli4() }
else if (suranum2 === '103') { birhaneli4() }
else if (suranum2 === '104') { birhaneli4() }
else if (suranum2 === '105') { birhaneli4() }
else if (suranum2 === '106') { birhaneli4() }
else if (suranum2 === '107') { birhaneli4() }
else if (suranum2 === '108') { birhaneli4() }
else if (suranum2 === '109') { birhaneli4() }
else if (suranum2 === '110') { birhaneli4() }
else if (suranum2 === '111') { birhaneli4() }
else if (suranum2 === '112') { birhaneli4() }
else if (suranum2 === '113') { birhaneli4() }
else if (suranum2 === '114') { birhaneli4() }
}else{ birhaneli41() }
}

$('#sırano1').on('keyup', enter_sırano1);

function enter_sırano1() {
	var sırano1 = document.getElementById('sırano1');
	var sırano2 = document.getElementById('sırano2');
	if ( event.keyCode == 13 ) { sırano2.focus() };
}

$('#sırano2').on('keyup', enter_sırano2);

function enter_sırano2() {
	var sırano2 = document.getElementById('sırano2');
	if ( event.keyCode == 13 ) { sırano2.blur() };
}

$('#sırano1').on('input', sonraki_sırano1);

function sonraki_sırano1() {
	var sırano2 = document.getElementById('sırano2');
	if ( event.keyCode == 13 ) { sırano2.focus() };
};

$('#sırano2').on('blur', sonraki_sırano2);

function sonraki_sırano2() {
	var sırano1 = parseInt(document.getElementById('sırano1'));
	var sırano2 = parseInt(document.getElementById('sırano2'));
	if (sırano2.value <= sırano1.value) {
		sırano2.value = parseInt(sırano1.value) + 1;
	}
};

function maxuzunluk() {
	if ( this.value.match(/[\d]/gim) ) {
		if (this.value.length > 3) { this.value = this.value.slice(0, this.maxLength) }
	}
};
$('#sure').on('input', maxuzunluk);
$('#ayet').on('input', maxuzunluk);
$('#sure2').on('input', maxuzunluk);
$('#ayet2').on('input', maxuzunluk);

function ayetegeç() {
	var key = event.keyCode;
	if ( $("#sure").val() ) {} else { if (	key == 13	)	{ document.getElementById("ayet").focus() } }
	if ( $("#sure").val().match(/[\d]/gim) ) {
		if (	$("#sure").val().substr(0, 1) >= "1" &&
				$("#sure").val().substr(1, 1) >  "1"	)	{ document.getElementById("ayet").focus() }
		if (	$("#sure").val().substr(0, 1) >= "2" &&
				$("#sure").val().substr(1, 1) >= "0"	)	{ document.getElementById("ayet").focus() }
		if (	$("#sure").val().length >= 3	)	{ document.getElementById("ayet").focus() }
		if (	key == 13	)	{ document.getElementById("ayet").focus() }
	}
}
function ayet2yegeç() {
	var key = event.keyCode;
	if ( $("#sure2").val() ) {} else { if (	key == 13	)	{ document.getElementById("ayet2").focus() } }
	if ( $("#sure2").val().match(/[\d]/gim) ) {
		if (	$("#sure2").val().substr(0, 1) >= "1" &&
				$("#sure2").val().substr(1, 1) >  "1"	)	{ document.getElementById("ayet2").focus() }
		if (	$("#sure2").val().substr(0, 1) >= "2" &&
				$("#sure2").val().substr(1, 1) >= "0"	)	{ document.getElementById("ayet2").focus() }
		if (	$("#sure2").val().length >= 3	)	{ document.getElementById("ayet2").focus() }
		if (	key == 13	)	{ document.getElementById("ayet2").focus() }
	}
}
$('#sure').on('input keyup', ayetegeç);
$('#sure2').on('input keyup', ayet2yegeç);

$('#sırano1').on('input', max_sırano1);
$('#sırano2').on('input', max_sırano2);

function max_sırano1() {
	var sırano1 = document.getElementById('sırano1');
	if (document.getElementById('sn').checked) {
		if (sırano1.value > 6234) { sırano1.value = 6234; }
		else if (sırano1.value < "1" && sırano1.value !== "") {sırano1.value = 1}
	}
	else {
		if (sırano1.value > 6346) { sırano1.value = 6346; }
		else if (sırano1.value < "1" && sırano1.value !== "") {sırano1.value = 1}
	}
}

function max_sırano2() {
	var sırano1 = document.getElementById('sırano1');
	var sırano2 = document.getElementById('sırano2');
	var sure1 = document.getElementById('sure');
	if (document.getElementById('sn').checked) {
		if (sırano2.value > 6234) { sırano2.value = 6234; }
		else if (sırano2.value < "1" && sırano2.value !== "") {
			sırano2.value = parseInt(sırano1.value) + 1;
		}
	}
	else {
		if (sırano2.value > 6346) { sırano2.value = 6346; }
		else if (sırano2.value < "1" && sırano2.value !== "") {
			sırano2.value = parseInt(sırano1.value) + 1;
		}
	}
}

function maxsure(){
	if (this.value > 114) {this.value = 114};
	if (this.value < 1 && this.value !== "") {this.value = 1}
}
$('#sure').on('input', maxsure);
$('#sure2').on('input', maxsure);

	var sure1 = document.getElementById("sure");
	var ayet1 = document.getElementById("ayet");
	var sureiki = document.getElementById("sure2");
	var ayetiki = document.getElementById("ayet2");
	var sırano1 = document.getElementById('sırano1');
	var sırano2 = document.getElementById('sırano2');

$('#sure').on('click focus', function sağıboşaltan() {
	sure1.value = ''; ayet1.value = ''; sureiki.value = ''; ayetiki.value = ''; sırano1.value = ''; sırano2.value = '';
	$('#sure').trigger('input');
});

$('#ayet').on('click', function sağıboşaltan() {
	ayet1.value = ''; sureiki.value = ''; ayetiki.value = ''; sırano1.value = ''; sırano2.value = '';
	$('#ayet').trigger('input');
});

$('#sure2').on('click', function sağıboşaltan() {
	sureiki.value = ''; ayetiki.value = ''; sırano2.value = '';
	$('#sure2').trigger('input');
});

$('#ayet2').on('click', function sağıboşaltan() {
	ayetiki.value = ''; sırano2.value = '';
	$('#ayet2').trigger('input');
});

$('#sırano1').on('click', function sağıboşaltan() {
	sırano1.value = ''; sırano2.value = ''; sure1.value = ''; ayet1.value = ''; sureiki.value = ''; ayetiki.value = '';
	$('#sure').trigger('input');
});

$('#sırano2').on('click', function sağıboşaltan() {
	sureiki.value = ''; ayetiki.value = ''; sırano2.value = '';
	$('#sure2').trigger('input');
});

$('#ayet').on('focus', function solubirleyen1() {
	if (!sure1.value) { sure1.value = 1; $('#sure').trigger('input'); }
});

$('#sure2').on('focus', function solubirleyen2() {
	if (!sure1.value) { sure1.value = 1; $('#sure').trigger('input'); }
	if (!ayet1.value) {
		if (sure1.value == 1 || sure1.value == 9) { ayet1.value = 1; }
		else { ayet1.value = 0; }
		$('#ayet').trigger('input');
	}
});

$('#sırano2').on('focus', function solubirleyen21() {
	if (!sure1.value) { sure1.value = 1; $('#sure').trigger('input'); }
	if (!ayet1.value) {
		if (sure1.value == 1 || sure1.value == 9) { ayet1.value = 1; }
		else { ayet1.value = 0; }
		$('#ayet').trigger('input');
	}
});

$('#ayet2').on('focus', function solubirleyen3() {
	if (!sure1.value) { sure1.value = 1; $('#sure').trigger('input'); }
	if (!ayet1.value) {
		if (sure1.value == 1 || sure1.value == 9) { ayet1.value = 1; }
		else { ayet1.value = 0; }
		$('#ayet').trigger('input');
	}
	if (!sureiki.value) { sureiki.value = 1; $('#sure2').trigger('input'); }
});

$('#ayet2').on('blur', function solubirleyen4() {
	if (!sure1.value) { sure1.value = 1; $('#sure').trigger('input'); }
	if (!ayet1.value) {
		if (sure1.value == 1 || sure1.value == 9) { ayet1.value = 1; }
		else { ayet1.value = 0; }
		$('#ayet').trigger('input');
	}
	if (!sureiki.value) { sureiki.value = 1; $('#sure2').trigger('input'); }
	if (!ayetiki.value) {
		if (sureiki.value == 1 || sureiki.value == 9) { ayetiki.value = 1; }
		else { ayetiki.value = 0; }
		$('#ayet2').trigger('input');
	}
});	

function tamamlayıcı() {
	var sura1, ayat1, sura2, ayat2;
	sura1 = parseInt(sure1.value);
	ayat1 = parseInt(ayet1.value);
	sura2 = parseInt(sureiki.value);
	ayat2 = parseInt(ayetiki.value);

	if (sura2 < sura1) {
		if( ayat1 == lastverses[sura1] ) {
			document.getElementById("sure2").value = sura1+1;
			$('#sure2').trigger('input');
		}
		else {
			document.getElementById("sure2").value = sura1;
			$('#sure2').trigger('input');
		}
	}
	else if(sura2 == sura1) {
		if(ayat2 <= ayat1) {
			if( ayat1 == lastverses[sura1] ) {
				var n = sura1 + 1;
				document.getElementById("ayet2").value = firstverses[n];
				document.getElementById("sure2").value = n;
				$('#ayet2').trigger('input');
			}
			else {
				document.getElementById("ayet2").value = ayat1 + 1;
				$('#ayet2').trigger('input');
			}
		}
	}
}
$('.inputs').on('focus blur', tamamlayıcı);