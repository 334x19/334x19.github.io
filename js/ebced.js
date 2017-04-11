/*$('#sure').on('input', function (event) { 
    this.value = this.value.replace(/[^0-9]/igm, '');
});

$('#ayet').on('input', function (event) { 
    this.value = this.value.replace(/[^0-9-]/igm, '');
});*/
$("input").on('input', function loadXMLDoc() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
			myFunction(this);
    	}
	}
	xmlhttp.open("GET", "sure/114.xml", true);
	xmlhttp.send();
});

// body üzerinde .input( function(){ ....... }) olarak çalışmalı
function myFunction(xml) {

	var firstverses, lastverses, sure1, ayet1, sure2, ayetiki, ayet2, s, a, xmlDoc, txt, aralık;
	firstverses=[0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	lastverses=[0,7,286,200,176,120,165,206,75,127,109,123,111,43,52,99,128,111,110,98,135,112,78,118,64,77,227,93,88,69,60,34,30,73,54,45,83,182,88,75,85,54,53,89,59,37,35,38,29,18,45,60,49,62,55,78,96,29,22,24,13,14,11,11,18,12,12,30,52,52,44,28,28,20,56,40,31,50,40,46,42,29,19,36,25,22,17,19,26,30,20,15,21,11,8,8,19,5,8,8,11,11,8,3,9,5,4,7,3,6,3,5,4,5,6];
	xmlDoc = xml.responseXML;
	txt = "";
	aralık = "";
	sure1 = parseInt(document.getElementById("sure").value);
	ayet1 = document.getElementById("ayet").value;
	sure2 = parseInt(document.getElementById("sure2").value);
	ayetiki = document.getElementById("ayet2").value;
	ayet2 = parseInt(ayetiki) + 1;

	
if (sure1) {
	if (ayet1) {
		if (sure2) {
			if (ayet2) {
				//16 - 4
				txt = sure1+'. surenin '+ayet1+'. ayetinden, '+sure2+'. surenin '+ayetiki+'. ayetine kadar. ('+ayetiki+'. ayet dahil)';
				for(s=sure1; s<=sure2; s++) {
					for(a=0; a<=lastverses[s]; a++) {
						if (s == sure1 && a < ayet1) { continue; }
						if (s == "1" && a == "0") { continue; }
						if (s == "9" && a == "0") { continue; }
						if (s == sure2 && a == ayet2) { break; }
						aralık += xmlDoc.getElementById("s"+s+"a"+a).childNodes[0].nodeValue + "\n";
					}
				}
			}
			else {
				//15 - 3
				var sura2 = parseInt(sure2)-1;
				if (sure2 < sure1) { }
				else if (sure2 == sure1) { txt = sure1+'. surenin '+ayet1+'. ayetinden, '+sure2+'. surenin ... (ayet numarasını belirtin)'; }
				else {txt = sure1+'. surenin '+ayet1+'. ayetinden, '+sura2+'. surenin son('+lastverses[sura2]+'.) ayetine kadar. (Son('+lastverses[sura2]+'.) ayet dahil)';}
				for(s=sure1; s<sure2; s++) {
					for(a=0; a<=lastverses[s]; a++) {
						if (s == sure1 && a < ayet1) { continue; }
						if (s == "1" && a == "0") { continue; }
						if (s == "9" && a == "0") { continue; }
						aralık += xmlDoc.getElementById("s"+s+"a"+a).childNodes[0].nodeValue + "\n";
					}
				}
			}
		}
		else {
			//13 - 2
			txt = 'Sadece '+sure1+'. surenin '+ayet1+'. ayeti';
			if(sure1 == "1" && ayet1 == "0") {}
			else if (sure1 == "9" && ayet1 == "0") {}
			else {
				aralık += xmlDoc.getElementById("s"+sure1+"a"+ayet1).childNodes[0].nodeValue + "\n";
			}
		}
	}
	else {
		//9 - 1
		txt = sure1+'. surenin '+firstverses[sure1]+'. ayetinden, son('+lastverses[sure1]+'.) ayetine kadar. (Son('+lastverses[sure1]+'.) ayet dahil)';
		for(a=0; a<=lastverses[sure1]; a++) {
			if (sure1 == "1" && a == "0") { continue; }
			if (sure1 == "9" && a == "0") { continue; }
			aralık += xmlDoc.getElementById("s"+sure1+"a"+a).childNodes[0].nodeValue + "\n";
		}	
	}
}
else {
	//1 - 0
	txt = '';
	aralık = '';
}

document.getElementById('açıklama').innerHTML = txt;

document.getElementById("ifade").value = aralık;
$('#ifade').keyup();

};

function bckgrndclrchanger(x) { document.getElementById(x).style.background = "#ffffff"; };
function bckgrndclrchangr(x) { document.getElementById(x).style.background = "#99ffff"; };

function check(ltr) {
	var mukatta = {ا:1, ل:1, م:1, ر:1, ك:1, ه:1, ي:1, ع:1, ص:1, ط:1, س:1, ق:1, ن:1, ح:1};
	if (mukatta.hasOwnProperty(ltr)) {
		if ($("input[id=" + ltr + "]").prop('checked') == true ) {
			$("p[id=" + ltr + "]").removeClass("not-selected");
			$("p[id=" + ltr + "]").addClass("hselected");
		} else {
			$("p[id=" + ltr + "]").removeClass("hselected");
			$("p[id=" + ltr + "]").addClass("not-selected");
		}
	}else{
		if ($("input[id=" + ltr + "]").prop('checked') == true ) {
			$("p[id=" + ltr + "]").removeClass("not-selected");
			$("p[id=" + ltr + "]").addClass("selected");
		} else {
			$("p[id=" + ltr + "]").removeClass("selected");
			$("p[id=" + ltr + "]").addClass("not-selected");
		}
	}
}

function getSum(total,num){return total + num};

function val(yazı,harf,değer){
	rgxp = new RegExp(değer,'gim');
	var text = yazı.replace(/[0-9]/igm, "");
	if (text.indexOf(harf) > -1){
		sonuc = text.split(harf).join(değer).match(rgxp).map(Number).reduce(getSum)
	}else{
		sonuc = 0
	};
	return sonuc;
}

function letters(str) {
	var lamelif = str.match(/[ﻻﻹﻷﻵ]/igm);
	var other = str.match(/[ء-ي]/igm);
	if(other!==null && other.length!==0 && lamelif!==null && lamelif.length!==0){
		var others = parseInt(other.length);
		var lamelif_T = 2 * parseInt(lamelif.length);
		return others + lamelif_T
	}
	else if(lamelif!==null && lamelif.length!==0){
		var lamelif_T = 2 * parseInt(lamelif.length);
		return lamelif_T
	}
	else if(other!==null && other.length!==0){
		var others = parseInt(other.length);
		return others
	}
}
function words(string){
	y = string.split(/\s+/).filter(
		function(string){
			word = string.match(/[ء-يﻻﻹﻷﻵ]+/igm);
			return word && word[0].length > 0;
		}
	);
	return y.length;
}
function abjad (string) {
	ء = val(string,'ء','1');
	ا = val(string,'ا','1');
	آ = val(string,'آ','1');
	ٱ = val(string,'ٱ','1');
	أ = val(string,'أ','1');
	إ = val(string,'إ','1');
	ب = val(string,'ب','2');
	پ = val(string,'پ','2');
	ج = val(string,'ج','3');
	چ = val(string,'چ','3');
	د = val(string,'د','4');
	ه = val(string,'ه','5');
	ة = val(string,'ة','5');
	و = val(string,'و','6');
	ؤ = val(string,'ؤ','6');
	ز = val(string,'ز','7');
	ژ = val(string,'ژ','7');
	ح = val(string,'ح','8');
	ط = val(string,'ط','9');
	ی = val(string,'ی','10');
	ي = val(string,'ي','10');
	ئ = val(string,'ئ','10');
	ى = val(string,'ى','10');
	ک = val(string,'ک','20');
	ك = val(string,'ك','20');
	گ = val(string,'گ','20');
	ڭ = val(string,'ڭ','20');
	ل = val(string,'ل','30');
	م = val(string,'م','40');
	ن = val(string,'ن','50');
	س = val(string,'س','60');
	ع = val(string,'ع','70');
	ف = val(string,'ف','80');
	ڢ = val(string,'ڢ','80');
	ڤ = val(string,'ڤ','80');
	ص = val(string,'ص','90');
	ق = val(string,'ق','100');
	ڨ = val(string,'ڨ','100');
	ر = val(string,'ر','200');
	ش = val(string,'ش','300');
	ت = val(string,'ت','400');
	ث = val(string,'ث','500');
	خ = val(string,'خ','600');
	ذ = val(string,'ذ','700');
	ض = val(string,'ض','800');
	ظ = val(string,'ظ','900');
	غ = val(string,'غ','1000');
	ﻻ = val(string,'ﻻ','31');
	ﻹ = val(string,'ﻹ','31');
	ﻷ = val(string,'ﻷ','31');
	ﻵ = val(string,'ﻵ','31');
	return ء+ا+آ+ٱ+أ+إ+ب+پ+ج+چ+د+ه+ة+و+ؤ+ز+ژ+ح+ط+ی+ي+ئ+ى+ک+ك+گ+ڭ+ل+م+ن+س+ع+ف+ڢ+ڤ+ص+ق+ڨ+ر+ش+ت+ث+خ+ذ+ض+ظ+غ+ﻻ+ﻹ+ﻷ+ﻵ
}

$(document).keypress( function() {
	box = document.getElementById("ifade");
	sure = document.getElementById("sure");
    ayet = document.getElementById("ayet");
	sure2 = document.getElementById("sure2");
    ayet2 = document.getElementById("ayet2");
	var yazı = String.fromCharCode(event.keyCode)
	if ( sure2 !== document.activeElement && ayet2 !== document.activeElement && sure !== document.activeElement && ayet !== document.activeElement && box !== document.activeElement ){
		if(yazı.match(/[\d]/gim)) {
			sure.focus();
		}else{
			box.focus();
		}
	}
});

function copyToClipboard(text) {
	if (window.clipboardData && window.clipboardData.setData) {
		return clipboardData.setData("Text", text);
	}
	else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
		textarea = document.createElement("textarea");
  		textarea.textContent = text;
  		textarea.style.position = "fixed";
  		document.body.appendChild(textarea); textarea.select();
  		try {return document.execCommand("copy")}
  		catch (ex) {console.warn("Copy to clipboard failed.", ex); return false;}
		finally {document.body.removeChild(textarea)}
	}
}

$(window).load( function(){
	var hashParams = window.location.hash.substr(1).replace(/[_]+/gim, " ").replace(/[-]+/gim, "\n").split('&');
	if(window.location.hash) {
		for(var i = 0; i < hashParams.length; i++){
			var p = hashParams[i].split('=');
			document.getElementById(p[0]).value = decodeURIComponent(p[1]);
		}
		$('#ifade').keyup();
	}
});

$('#ifade').on('input', function (event) { 
    this.value = this.value.replace(/[^ء-ي ﻻﻹﻷﻵ\n0-9:#]/igm, '');
});
	
$(function() {
	$("#ifade").keyup();
});

$("#ifade").keyup( function(){
	var inputValue = $(this).val();
if( abjad(inputValue) ) {
	document.querySelector("#kopyala").style.display = "block";
	if (abjad(inputValue) % 19 === 0) {
		ebced = abjad(inputValue) + " = 19 × " + abjad(inputValue)/19;
		$("#abjad").html("<span style=\"color: blue;\">" + "EBCED değeri: " + ebced + "</span>");
	}else{
		ebced = abjad(inputValue);
		$("#abjad").html("EBCED değeri: " + ebced);
	}
	if (letters(inputValue) % 19 === 0) {
		harf = letters(inputValue) + " = 19 × " + letters(inputValue)/19;
		$("#letters").html("<span style=\"color: blue;\">" + "HARF sayısı: " + harf + "</span>");
	}else{
		harf = letters(inputValue);
		$("#letters").html("HARF sayısı: " + harf);
	}
	if (words(inputValue) % 19 === 0) {
		kelime = words(inputValue) + " = 19 × " + words(inputValue)/19;
		$("#words").html("<span style=\"color: blue;\">" + "KELİME sayısı: " + kelime + "</span>");
	}else{
		kelime = words(inputValue);
		$("#words").html("KELİME sayısı: " + kelime);
	}
	mesaj = "ebced.kuran114.org/#ifade=" +  inputValue.replace(/[ ]+/gim, "_").replace(/[\n]+/gim, "-") + "\n\n" + "EBCED değeri: " + ebced + "\n" + "HARF sayısı: " + harf + "\n" + "KELİME sayısı: " + kelime;
	
	function harf1(h1){
		if(ch == h1){
			sonuc = counts[h1]
			if(sonuc == 0) {
				return document.querySelector("p[id=" + h1 + "]").style.display = "none";
			}else{
				document.querySelector("p[id=" + h1 + "]").style.display = "block";
				if (sonuc % 19 === 0) {
					harf = sonuc + " = 19 × " + sonuc/19;
					return $("p[id=" + h1 + "]").html("<span style=\"color: blue;\">" + h1 + ' sayısı: ' + harf + "</span>");
				}else{
					harf = sonuc;
					return $("p[id=" + h1 + "]").html(h1 + ' sayısı: ' + sonuc);
				}
			}
		}
	}
  
	function harf2(h1, h2){
		if(ch == h1 || ch == h2){
			sonuc = counts[h1] + counts[h2]
			if(sonuc == 0) {
				return document.querySelector("p[id=" + h1 + "]").style.display = "none";
			}else{
				document.querySelector("p[id=" + h1 + "]").style.display = "block";
				if (sonuc % 19 === 0) {
					harf = sonuc + " = 19 × " + sonuc/19;
					return $("p[id=" + h1 + "]").html("<span style=\"color: blue;\">" + h1 + ' sayısı: ' + harf + "</span>");
				}else{
					harf = sonuc;
					return $("p[id=" + h1 + "]").html(h1 + ' sayısı: ' + sonuc);
				}
			}
		}
	}

	function harf3(h1, h2, h3){
		if(ch == h1 || ch == h2 || ch == h3){
			sonuc = counts[h1] + counts[h2] + counts[h3]
			if(sonuc == 0) {
				return document.querySelector("p[id=" + h1 + "]").style.display = "none";
			}else{
				document.querySelector("p[id=" + h1 + "]").style.display = "block";
				if (sonuc % 19 === 0) {
					harf = sonuc + " = 19 × " + sonuc/19;
					return $("p[id=" + h1 + "]").html("<span style=\"color: blue;\">" + h1 + ' sayısı: ' + harf + "</span>");
				}else{
					harf = sonuc;
					return $("p[id=" + h1 + "]").html(h1 + ' sayısı: ' + sonuc);
				}
			}
		}
	}

	function harf4(h1, h2, h3, h4){
		if(ch == h1 || ch == h2 || ch == h3 || ch == h4){
			sonuc = counts[h1] + counts[h2] + counts[h3] + counts[h4]
			if(sonuc == 0) {
				return document.querySelector("p[id=" + h1 + "]").style.display = "none";
			}else{
				document.querySelector("p[id=" + h1 + "]").style.display = "block";
				if (sonuc % 19 === 0) {
					harf = sonuc + " = 19 × " + sonuc/19;
					return $("p[id=" + h1 + "]").html("<span style=\"color: blue;\">" + h1 + ' sayısı: ' + harf + "</span>");
				}else{
					harf = sonuc;
					return $("p[id=" + h1 + "]").html(h1 + ' sayısı: ' + sonuc);
				}
			}
		}
	}
  
	function harf5(h1, h2, h3, h4, h5){
		if(ch == h1 || ch == h2 || ch == h3 || ch == h4 || ch == h5){
			sonuc = counts[h1] + counts[h2] + counts[h3] + counts[h4] + counts[h5]
			if(sonuc == 0) {
				return document.querySelector("p[id=" + h1 + "]").style.display = "none";
			}else{
				document.querySelector("p[id=" + h1 + "]").style.display = "block";
				if (sonuc % 19 === 0) {
					harf = sonuc + " = 19 × " + sonuc/19;
					return $("p[id=" + h1 + "]").html("<span style=\"color: blue;\">" + h1 + ' sayısı: ' + harf + "</span>");
				}else{
					harf = sonuc;
					return $("p[id=" + h1 + "]").html(h1 + ' sayısı: ' + sonuc);
				}
			}
		}
	}
	
	function harf10(h1, h2, h3, h4, h5, h6, h7, h8, h9, h10){
	if(ch == h1 || ch == h2 || ch == h3 || ch == h4 || ch == h5 || ch == h6 || ch == h7 || ch == h8 || ch == h9 || ch == h10){
		sonuc = counts[h1]+counts[h2]+counts[h3]+counts[h4]+counts[h5]+counts[h6]+counts[h7]+counts[h8]+counts[h9]+counts[h10]
		if(sonuc == 0) {
			return document.querySelector("p[id=" + h1 + "]").style.display = "none";
		}else{
			document.querySelector("p[id=" + h1 + "]").style.display = "block";
			if (sonuc % 19 === 0) {
				harf = sonuc + " = 19 × " + sonuc/19;
				return $("p[id=" + h1 + "]").html("<span style=\"color: blue;\">" + h1 + ' sayısı: ' + harf + "</span>");
			}else{
				harf = sonuc;
				return $("p[id=" + h1 + "]").html(h1 + ' sayısı: ' + sonuc);
			}
		}
	}
	}
	
	var counts = {ء:0,ا:0,آ:0,ٱ:0,أ:0,إ:0,ب:0,پ:0,ج:0,چ:0,د:0,ه:0,ة:0,و:0,ؤ:0,ز:0,ژ:0,ح:0,ط:0,ی:0,ي:0,ئ:0,ى:0,ک:0,ك:0,گ:0,ڭ:0,ل:0,م:0,ن:0,س:0,ع:0,ف:0,ڢ:0,ڤ:0,ص:0,ق:0,ڨ:0,ر:0,ش:0,ت:0,ث:0,خ:0,ذ:0,ض:0,ظ:0,غ:0,ﻻ:0,ﻹ:0,ﻷ:0,ﻵ:0};
	var ch, index, len, count;
	for (index = 0, len = inputValue.length; index < len; ++index) {
		ch = inputValue.charAt(index);
		count = counts[ch];
		counts[ch] = count ? count + 1 : 1;
	}
	for (ch in counts) {
		harf1('د');
		harf1('ح');
		harf1('ط');
		harf1('م');
		harf1('ن');
		harf1('س');
		harf1('ع');
		harf1('ص');
		harf1('ر');
		harf1('ش');
		harf1('ت');
		harf1('ث');
		harf1('خ');
		harf1('ذ');
		harf1('ض');
		harf1('ظ');
		harf1('غ');
		harf2('ب','پ');
		harf2('ج','چ');
		harf2('ه','ة');
		harf2('و','ؤ');
		harf2('ز','ژ');
		harf2('ق','ڨ');
		harf3('ف','ڢ','ڤ');
		harf4('ي','ی','ئ','ى');
		harf4('ك','ک','گ','ڭ');
		harf5('ل','ﻻ','ﻹ','ﻷ','ﻵ');
		harf10('ا','ﻻ','ﻹ','ﻷ','ﻵ','ء','آ','ٱ','أ','إ');
	}
	
	if (counts.hasOwnProperty('ا')) {}else{ $("p[id=ا]").html("") }
	if (counts.hasOwnProperty('ب')) {}else{ $("p[id=ب]").html("") }
	if (counts.hasOwnProperty('ج')) {}else{ $("p[id=ج]").html("") }
	if (counts.hasOwnProperty('د')) {}else{ $("p[id=د]").html("") }
	if (counts.hasOwnProperty('ه')) {}else{ $("p[id=ه]").html("") }
	if (counts.hasOwnProperty('و')) {}else{ $("p[id=و]").html("") }
	if (counts.hasOwnProperty('ز')) {}else{ $("p[id=ز]").html("") }
	if (counts.hasOwnProperty('ح')) {}else{ $("p[id=ح]").html("") }
	if (counts.hasOwnProperty('ط')) {}else{ $("p[id=ط]").html("") }
	if (counts.hasOwnProperty('ي')) {}else{ $("p[id=ي]").html("") }
	if (counts.hasOwnProperty('ك')) {}else{ $("p[id=ك]").html("") }
	if (counts.hasOwnProperty('ل')) {}else{ $("p[id=ل]").html("") }
	if (counts.hasOwnProperty('م')) {}else{ $("p[id=م]").html("") }
	if (counts.hasOwnProperty('ن')) {}else{ $("p[id=ن]").html("") }
	if (counts.hasOwnProperty('س')) {}else{ $("p[id=س]").html("") }
	if (counts.hasOwnProperty('ع')) {}else{ $("p[id=ع]").html("") }
	if (counts.hasOwnProperty('ف')) {}else{ $("p[id=ف]").html("") }
	if (counts.hasOwnProperty('ص')) {}else{ $("p[id=ص]").html("") }
	if (counts.hasOwnProperty('ق')) {}else{ $("p[id=ق]").html("") }
	if (counts.hasOwnProperty('ر')) {}else{ $("p[id=ر]").html("") }
	if (counts.hasOwnProperty('ش')) {}else{ $("p[id=ش]").html("") }
	if (counts.hasOwnProperty('ت')) {}else{ $("p[id=ت]").html("") }
	if (counts.hasOwnProperty('ث')) {}else{ $("p[id=ث]").html("") }
	if (counts.hasOwnProperty('خ')) {}else{ $("p[id=خ]").html("") }
	if (counts.hasOwnProperty('ذ')) {}else{ $("p[id=ذ]").html("") }
	if (counts.hasOwnProperty('ض')) {}else{ $("p[id=ض]").html("") }
	if (counts.hasOwnProperty('ظ')) {}else{ $("p[id=ظ]").html("") }
	if (counts.hasOwnProperty('غ')) {}else{ $("p[id=غ]").html("") }
}else{
	if (document.getElementById('ifade') === document.activeElement) {
		document.getElementById('açıklama').innerHTML = '';
		document.getElementById('sure').value = '';
		document.getElementById('ayet').value = '';
		document.getElementById('sure2').value = '';
		document.getElementById('ayet2').value = '';
	}
	document.getElementById('abjad').innerHTML = '';
	document.getElementById('letters').innerHTML = '';
	document.getElementById('words').innerHTML = '';
	mesaj = "";
	document.querySelector("#kopyala").style.display = "none";
	document.querySelector("p[id='ا']").style.display = "none";
	document.querySelector("p[id='ب']").style.display = "none";
	document.querySelector("p[id='ج']").style.display = "none";
	document.querySelector("p[id='د']").style.display = "none";
	document.querySelector("p[id='ه']").style.display = "none";
	document.querySelector("p[id='و']").style.display = "none";
	document.querySelector("p[id='ز']").style.display = "none";
	document.querySelector("p[id='ح']").style.display = "none";
	document.querySelector("p[id='ط']").style.display = "none";
	document.querySelector("p[id='ي']").style.display = "none";
	document.querySelector("p[id='ك']").style.display = "none";
	document.querySelector("p[id='ل']").style.display = "none";
	document.querySelector("p[id='م']").style.display = "none";
	document.querySelector("p[id='ن']").style.display = "none";
	document.querySelector("p[id='س']").style.display = "none";
	document.querySelector("p[id='ع']").style.display = "none";
	document.querySelector("p[id='ف']").style.display = "none";
	document.querySelector("p[id='ص']").style.display = "none";
	document.querySelector("p[id='ق']").style.display = "none";
	document.querySelector("p[id='ر']").style.display = "none";
	document.querySelector("p[id='ش']").style.display = "none";
	document.querySelector("p[id='ت']").style.display = "none";
	document.querySelector("p[id='ث']").style.display = "none";
	document.querySelector("p[id='خ']").style.display = "none";
	document.querySelector("p[id='ذ']").style.display = "none";
	document.querySelector("p[id='ض']").style.display = "none";
	document.querySelector("p[id='ظ']").style.display = "none";
	document.querySelector("p[id='غ']").style.display = "none";
};
	document.querySelector("#kopyala").onclick = function() {
		var result = copyToClipboard(mesaj);
		console.log("copied?", result);
		swal({title: "Sonuçlar Kopyalandı!", text: "sorguladınmı.com - kuran114.org", timer: 1450, imageUrl: "pic/abjad.png", showConfirmButton: false});
	};
});