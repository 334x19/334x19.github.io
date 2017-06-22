var sadece_nolu = [0, 7, 293, 493, 669, 789, 954, 1160, 1235, 1362, 1471, 1594, 1705, 1748, 1800, 1899, 2027, 2138, 2248, 2346, 2481, 2593, 2671, 2789, 2853, 2930, 3157, 3250, 3338, 3407, 3467, 3501, 3531, 3604, 3658, 3703, 3786, 3968, 4056, 4131, 4216, 4270, 4323, 4412, 4471, 4508, 4543, 4581, 4610, 4628, 4673, 4733, 4782, 4844, 4899, 4977, 5073, 5102, 5124, 5148, 5161, 5175, 5186, 5197, 5215, 5227, 5239, 5269, 5321, 5373, 5417, 5445, 5473, 5493, 5549, 5589, 5620, 5670, 5710, 5756, 5798, 5827, 5846, 5882, 5907, 5929, 5946, 5965, 5991, 6021, 6041, 6056, 6077, 6088, 6096, 6104, 6123, 6128, 6136, 6144, 6155, 6166, 6174, 6177, 6186, 6191, 6195, 6202, 6205, 6211, 6214, 6219, 6223, 6228, 6234];
var tümü = [0, 7, 294, 495, 672, 793, 959, 1166, 1242, 1369, 1479, 1603, 1715, 1759, 1812, 1912, 2041, 2153, 2264, 2363, 2499, 2612, 2691, 2810, 2875, 2953, 3181, 3275, 3364, 3434, 3495, 3530, 3561, 3635, 3690, 3736, 3820, 4003, 4092, 4168, 4254, 4309, 4363, 4453, 4513, 4551, 4587, 4626, 4656, 4675, 4721, 4782, 4832, 4895, 4951, 5030, 5127, 5157, 5180, 5205, 5219, 5234, 5246, 5258, 5277, 5290, 5303, 5334, 5387, 5440, 5485, 5514, 5543, 5564, 5621, 5662, 5694, 5745, 5786, 5833, 5876, 5906, 5926, 5963, 5989, 6012, 6030, 6050, 6077, 6108, 6129, 6145, 6167, 6179, 6188, 6197, 6217, 6223, 6232, 6241, 6253, 6265, 6274, 6278, 6288, 6294, 6299, 6307, 6311, 6318, 6322, 6328, 6333, 6339, 6346];

$('.inputs2').on('input blur', from_sırano1and2_to_sureayet);

var sure1 = document.getElementById('sure')
var ayet1 = document.getElementById('ayet')
var sure2 = document.getElementById('sure2')
var ayet2 = document.getElementById('ayet2')
var sırano1 = document.getElementById('sırano1')
var sırano2 = document.getElementById('sırano2')
var ifade = document.getElementById('ifade')

function from_sırano1and2_to_sureayet() {
	
	var divider1, divider2;
	
	if(document.getElementById('sn').checked) {

		if(parseInt(sırano1.value)) {
			divider1 = Math.max.apply(Math, sadece_nolu.filter(function(x){return x < sırano1.value}));
			sure1.value = sadece_nolu.indexOf(divider1) + 1;
			ayet1.value = sırano1.value - divider1;
		}
		else {
			sure1.value = ''; ayet1.value = ''; sure2.value = ''; ayet2.value = ''; sırano2.value = '';
		}

		if(parseInt(sırano2.value)) {
			divider2 = Math.max.apply(Math, sadece_nolu.filter(function(x){return x < sırano2.value}));
			sure2.value = sadece_nolu.indexOf(divider2) + 1;
			ayet2.value = sırano2.value - divider2;
			$('#sure2').trigger('input');
		}
		else {
			sure2.value = ''; ayet2.value = '';
			$('#sure2').trigger('input');
		}

	}
	else {

		if(parseInt(sırano1.value)) {
			divider1 = Math.max.apply(Math, tümü.filter(function(x){return x < sırano1.value}));
			sure1.value = tümü.indexOf(divider1) + 1;
			if(sure1.value == 1 || sure1.value == 9) {
				ayet1.value = sırano1.value - divider1;
			}
			else {
				ayet1.value = sırano1.value - divider1 - 1;
			}
		}
		else {
			sure1.value = ''; ayet1.value = ''; sure2.value = ''; ayet2.value = ''; sırano2.value = '';
		}

		if(parseInt(sırano2.value)) {
			divider2 = Math.max.apply(Math, tümü.filter(function(x){return x < sırano2.value}));
			sure2.value = tümü.indexOf(divider2) + 1;
			if(sure2.value == 1 || sure2.value == 9) {
				ayet2.value = sırano2.value - divider2;
			}
			else {
				ayet2.value = sırano2.value - divider2 - 1;
			}
			$('#sure2').trigger('input');
		}
		else {
			sure2.value = ''; ayet2.value = '';
			$('#sure2').trigger('input');
		}

	}
};

$('#sn').on('change', loadXMLDoc);
$(".inputs").on('input', loadXMLDoc);

function loadXMLDoc() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
			bölümaçıcı(this);
    	}
	}
	xmlhttp.open("GET", "sure/114.xml", true);
	xmlhttp.send();
}

function bölümaçıcı(xml) {

	var firstverses, lastverses, birsure, ayetbir, ikisure, ayetiki, ikiayet, ayet1bir, ayet2iki, s, a, xmlDoc, txt, aralık;
	firstverses = [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	lastverses = [0, 7, 286, 200, 176, 120, 165, 206, 75, 127, 109, 123, 111, 43, 52, 99, 128, 111, 110, 98, 135, 112, 78, 118, 64, 77, 227, 93, 88, 69, 60, 34, 30, 73, 54, 45, 83, 182, 88, 75, 85, 54, 53, 89, 59, 37, 35, 38, 29, 18, 45, 60, 49, 62, 55, 78, 96, 29, 22, 24, 13, 14, 11, 11, 18, 12, 12, 30, 52, 52, 44, 28, 28, 20, 56, 40, 31, 50, 40, 46, 42, 29, 19, 36, 25, 22, 17, 19, 26, 30, 20, 15, 21, 11, 8, 8, 19, 5, 8, 8, 11, 11, 8, 3, 9, 5, 4, 7, 3, 6, 3, 5, 4, 5, 6];
	xmlDoc = xml.responseXML;
	txt = "";
	aralık = "";

	birsure = parseInt(sure1.value);
	ayetbir = ayet1.value;
	ikisure = parseInt(sure2.value);
	ayetiki = ayet2.value;
	
	ikiayet = parseInt(ayetiki) + 1;

	ayet1bir = parseInt(ayet1.value);
	ayet2iki = parseInt(ayet2.value);

	// from sure_ayet, to sıra_no başlangıcı

	if (document.getElementById('sn').checked) {
		if(birsure && ayetbir) {
			sırano1.value = sadece_nolu[birsure-1] + ayet1bir
		}
		else { sırano1.value = '' }
		
		if(ikisure && ayetiki) {
			sırano2.value = sadece_nolu[ikisure-1] + ayet2iki
		}
		else { sırano2.value = '' }
	}
	else {
		if (birsure && ayet1bir >= 0) {
			if (birsure==1 || birsure==9) {
				sırano1.value = tümü[birsure-1] + ayet1bir
			}
			else {
				sırano1.value = tümü[birsure-1] + ayet1bir + 1
			}
		}
		else { sırano1.value = '' }
		
		if (ikisure && ayet2iki >= 0) {
			if (ikisure==1 || ikisure==9) {
				sırano2.value = tümü[ikisure-1] + ayet2iki
			}
			else {
				sırano2.value = tümü[ikisure-1] + ayet2iki + 1
			}
		}
		else { sırano2.value = '' }
	}

	// from sure_ayet, to sıra_no sonu
	
	if (document.getElementById('sn').checked) {
		if (birsure) {
			if (ayetbir) {
				if (ikisure) {
					if (ikiayet) {
						if (ayetbir == 0) {
							if (ayetiki == 0) {
								var geçici = ikisure-1;
								txt = birsure+'. surenin 1. ayetinden, '+geçici+'. surenin son('+lastverses[geçici]+'.) ayetine kadar.';
							}
							else {
								txt = birsure+'. surenin 1. ayetinden, '+ikisure+'. surenin '+ayetiki+'. ayetine kadar.';
							}
						}
						else if (ayetiki == 0) {
							var geçici1 = ikisure-1;
							txt = birsure+'. surenin '+ayetbir+'. ayetinden, '+geçici1+'. surenin son('+lastverses[geçici1]+'.) ayetine kadar.';
						}
						else {
							txt = birsure+'. surenin '+ayetbir+'. ayetinden, '+ikisure+'. surenin '+ayetiki+'. ayetine kadar.';
						}
						if (birsure==ikisure && ikiayet<=ayetbir) {}
						else {
							for (s=birsure; s<=ikisure; s++) {
								for (a=0; a<=lastverses[s]; a++) {
									if (s == birsure && a < ayetbir) { continue; }
									if (a == "0") { continue; }
									if (s == ikisure && a == ikiayet) { break; }
									aralık += xmlDoc.getElementById("s"+s+"a"+a).childNodes[0].nodeValue + "\n";
								}
							}
						}
					}
					else {
						var sura2 = parseInt(ikisure)-1;
						if (ikisure < birsure) { }
						else if (ikisure == birsure) {
							if (ayetbir == 0) {
								txt = birsure+'. surenin 1. ayetinden, '+ikisure+'. surenin ... (ayet numarasını belirtin)';
							}
							else {
								txt = birsure+'. surenin '+ayetbir+'. ayetinden, '+ikisure+'. surenin ... (ayet numarasını belirtin)';
							}
						}
						else if (ikisure == birsure+1) {
							if (ayetbir == lastverses[birsure]) {
								txt = 'Sadece '+birsure+'. surenin '+ayetbir+'. ayeti';
							}
							else {
								txt = birsure+'. surenin '+ayetbir+'. ayetinden, '+birsure+'. surenin son('+lastverses[birsure]+'.) ayetine kadar.';
							}
						}
						else {
							if (ayetbir == 0) {
								txt = birsure+'. surenin 1. ayetinden, '+sura2+'. surenin son('+lastverses[sura2]+'.) ayetine kadar.';
							}
							else {
								txt = birsure+'. surenin '+ayetbir+'. ayetinden, '+sura2+'. surenin son('+lastverses[sura2]+'.) ayetine kadar.';
							}
						}
						for (s=birsure; s<ikisure; s++) {
							for (a=0; a<=lastverses[s]; a++) {
								if (s == birsure && a < ayetbir) { continue; }
								if (a == "0") { continue; }
								aralık += xmlDoc.getElementById("s"+s+"a"+a).childNodes[0].nodeValue + "\n";
							}
						}
					}
				}
				else {
					if (ayetbir == 0) {
						txt = ''
					}
					else {
						txt = 'Sadece '+birsure+'. surenin '+ayetbir+'. ayeti';
					}
					if (ayetbir == "0") {}
					else {
						aralık += xmlDoc.getElementById("s"+birsure+"a"+ayetbir).childNodes[0].nodeValue + "\n";
					}
				}
			}
			else {
				txt = birsure+'. surenin 1. ayetinden, son('+lastverses[birsure]+'.) ayetine kadar.';
				for (a=0; a<=lastverses[birsure]; a++) {
					if (a == "0") { continue; }
					aralık += xmlDoc.getElementById("s"+birsure+"a"+a).childNodes[0].nodeValue + "\n";
				}
			}
			ifade.value = aralık;
		}
		else {
			txt = '';
		}
	}
	else {
		if (birsure) {
			if (ayetbir) {
				if (ikisure) {
					if (ikiayet) {
						txt = birsure+'. surenin '+ayetbir+'. ayetinden, '+ikisure+'. surenin '+ayetiki+'. ayetine kadar.';
						if (birsure==ikisure && ikiayet<=ayetbir) {}
						else {
							for (s=birsure; s<=ikisure; s++) {
								for (a=0; a<=lastverses[s]; a++) {
									if (s == birsure && a < ayetbir) { continue; }
									if (s == "1" && a == "0") { continue; }
									if (s == "9" && a == "0") { continue; }
									if (s == ikisure && a == ikiayet) { break; }
									aralık += xmlDoc.getElementById("s"+s+"a"+a).childNodes[0].nodeValue + "\n";
								}
							}
						}
					}
					else {
						var sura2 = parseInt(ikisure)-1;
						if (ikisure < birsure) { }
						else if (ikisure == birsure) { txt = birsure+'. surenin '+ayetbir+'. ayetinden, '+ikisure+'. surenin ... (ayet numarasını belirtin)'; }
						else if (ikisure == birsure+1) {
							if (ayetbir == lastverses[birsure]) {
								txt = 'Sadece '+birsure+'. surenin '+ayetbir+'. ayeti';
							}
							else {
								txt = birsure+'. surenin '+ayetbir+'. ayetinden, '+birsure+'. surenin son('+lastverses[birsure]+'.) ayetine kadar.';
							}
						}
						else {txt = birsure+'. surenin '+ayetbir+'. ayetinden, '+sura2+'. surenin son('+lastverses[sura2]+'.) ayetine kadar.';}
						for (s=birsure; s<ikisure; s++) {
							for (a=0; a<=lastverses[s]; a++) {
								if (s == birsure && a < ayetbir) { continue; }
								if (s == "1" && a == "0") { continue; }
								if (s == "9" && a == "0") { continue; }
								aralık += xmlDoc.getElementById("s"+s+"a"+a).childNodes[0].nodeValue + "\n";
							}
						}
					}
				}
				else {
					txt = 'Sadece '+birsure+'. surenin '+ayetbir+'. ayeti';
					if (birsure == "1" && ayetbir == "0") {}
					else if (birsure == "9" && ayetbir == "0") {}
					else {
						aralık += xmlDoc.getElementById("s"+birsure+"a"+ayetbir).childNodes[0].nodeValue + "\n";
					}
				}
			}
			else {
				txt = birsure+'. surenin '+firstverses[birsure]+'. ayetinden, son('+lastverses[birsure]+'.) ayetine kadar.';
				for(a=0; a<=lastverses[birsure]; a++) {
					if (birsure == "1" && a == "0") { continue; }
					if (birsure == "9" && a == "0") { continue; }
					aralık += xmlDoc.getElementById("s"+birsure+"a"+a).childNodes[0].nodeValue + "\n";
				}
			}
			ifade.value = aralık;
		}
		else {
			txt = '';
		}
	}
	document.getElementById('açıklama').innerHTML = txt;
	$('#ifade').trigger('input');
}

function bckgrndclrchanger(x) { document.getElementById(x).style.background = "#ffffff"; };
function bckgrndclrchangr(x) { document.getElementById(x).style.background = "#99ffff"; };

function check(ltr) {
	$('#ifade').trigger('input');
	var mukatta = {ا:1, ل:1, م:1, ر:1, ك:1, ه:1, ي:1, ع:1, ص:1, ط:1, س:1, ق:1, ن:1, ح:1};
	if (mukatta.hasOwnProperty(ltr)) {
		if ($("input[id=" + ltr + "]").prop('checked') == true) {
			$("p[id=" + ltr + "]").removeClass("not-selected");
			$("p[id=" + ltr + "]").addClass("hselected");
		}
		else {
			$("p[id=" + ltr + "]").removeClass("hselected");
			$("p[id=" + ltr + "]").addClass("not-selected");
		}
	}
	else {
		if ($("input[id=" + ltr + "]").prop('checked') == true) {
			$("p[id=" + ltr + "]").removeClass("not-selected");
			$("p[id=" + ltr + "]").addClass("selected");
		}
		else {
			$("p[id=" + ltr + "]").removeClass("selected");
			$("p[id=" + ltr + "]").addClass("not-selected");
		}
	}
	$('#ifade').trigger('input');
}

function getSum(total,num){return total + num};

function val(yazı,harf,değer){
	rgxp = new RegExp(değer,'gim');
	var text = yazı.replace(/[0-9]/igm, "");
	if (text.indexOf(harf) > -1) {
		sonuc = text.split(harf).join(değer).match(rgxp).map(Number).reduce(getSum)
	}
	else {
		sonuc = 0
	}
	return sonuc;
}

function ayetsay(str) {
	var ayetsayısı = str.match(/[:]/igm);
	if(ayetsayısı!==null && ayetsayısı.length!==0){
		var versecount = parseInt(ayetsayısı.length)
		return versecount
	}
}

function letters(str) {
	var lamelif = str.match(/[ﻻﻹﻷﻵ]/igm);
	var other = str.match(/[ء-يپچژڨڢڤیکگڭٱ]/igm);
	if (other!==null && other.length!==0 && lamelif!==null && lamelif.length!==0) {
		var others = parseInt(other.length)
		var lamelif_T = 2 * parseInt(lamelif.length)
		return others + lamelif_T
	}
	else if(lamelif!==null && lamelif.length!==0){
		var lamelif_T = 2 * parseInt(lamelif.length)
		return lamelif_T
	}
	else if(other!==null && other.length!==0){
		var others = parseInt(other.length)
		return others
	}
}
function words(string) {
	y = string.split(/\s+/).filter(
		function (string) {
			word = string.match(/[ء-يﻻﻹﻷﻵپچژڨڢڤیکگڭٱ]+/igm)
			return word && word[0].length > 0
		}
	)
	return y.length
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

$(document).keypress( function otomatikyazıcı () {

	var yazı = String.fromCharCode(event.keyCode)
	if (sırano2 !== document.activeElement && sırano1 !== document.activeElement && sure2 !== document.activeElement && ayet2 !== document.activeElement && sure1 !== document.activeElement && ayet1 !== document.activeElement && ifade !== document.activeElement) {
		if (yazı.match(/[\d]/gim)) {
			ifade.value = ''
			$('#ifade').trigger('input')
			sure1.focus()
		}
		else { // ifadeye yazarken noları sil, paylaşım linkinin düzgün üretilebilmesi için
			ifade.focus()
			sure1.value = ''
			ayet1.value = ''
			sure2.value = ''
			ayet2.value = ''
			sırano1.value = ''
			sırano2.value = ''
			document.getElementById('açıklama').innerHTML = ''
		}
	}
});

$('#ifade').on('keypress keyup', function noları_sil() {
	
	var yazı = String.fromCharCode(event.keyCode)
	
	if (yazı.match(/[:ء-يﻻﻹﻷﻵپچژڨڢڤیکگڭٱ \b\s]/igm)) {
		sure1.value = ''
		ayet1.value = ''
		sure2.value = ''
		ayet2.value = ''
		sırano1.value = ''
		sırano2.value = ''
		document.getElementById('açıklama').innerHTML = ''
	}
})

$('#sn').on('change', nosuzayetlerisil) // sure, ayet ve sıranolar boş olsa bile
$('#ifade').on('input', yazarkennosuzayetlerisil) // numarasız ayet yazımına izin verme

function nosuzayetlerisil() {
	var str = ifade.value;
	if (document.getElementById('sn').checked) {
		str = str.replace(/^.*(:0).*$\n/gm, ''); // 0 nolu ayetleri sil
		// delete verses which doesn't begin with numbers
		ifade.value = str.replace(/^(?![1-9]).*$\n/gm, '')
	}
}
function yazarkennosuzayetlerisil() {
	var str = ifade.value;
	if (document.getElementById('sn').checked) {
		str = str.replace(/^.*(:0).*$/gm, ''); // 0 nolu ayetleri sil
		// delete verses which doesn't begin with numbers
		ifade.value = str.replace(/^(?![1-9]).*$/gm, '')
	}
}

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

$('#ifade').on('input', function (event) { 
    this.value = this.value.replace(/[^ء-ي ﻻﻹﻷﻵپچژڨڤڢیڭگکٱ\n0-9:]/igm, '');
});

$(function() {
	$("#ifade").trigger('input');
	$("#ifade").trigger('keyup');
});

var counts = {ء:0,ا:0,آ:0,ٱ:0,أ:0,إ:0,ب:0,پ:0,ج:0,چ:0,د:0,ه:0,ة:0,و:0,ؤ:0,ز:0,ژ:0,ح:0,ط:0,ی:0,ي:0,ئ:0,ى:0,ک:0,ك:0,گ:0,ڭ:0,ل:0,م:0,ن:0,س:0,ع:0,ف:0,ڢ:0,ڤ:0,ص:0,ق:0,ڨ:0,ر:0,ش:0,ت:0,ث:0,خ:0,ذ:0,ض:0,ظ:0,غ:0,ﻻ:0,ﻹ:0,ﻷ:0,ﻵ:0};

$('.seçenekler').on('change', sayım);

var say_toplam;
var sayı;
var metin;

function sayım() {
	
	say_toplam = $("input[class=seçenekler]:checked").map(function() {
		if (this.id === 'د' || this.id === 'ح' || this.id === 'ط' || this.id === 'م' || this.id === 'ن' || this.id === 'س' || this.id === 'ع' || this.id === 'ص' || this.id === 'ر' || this.id === 'ش' || this.id === 'ت' || this.id === 'ث' || this.id === 'خ' || this.id === 'ذ' || this.id === 'ض' || this.id === 'ظ' || this.id === 'غ') {
			return counts[this.id];
		}
		else if (this.id === 'ب') {
			return counts['ب'] + counts['پ']
		}
		else if (this.id === 'ج') {
			return counts['ج'] + counts['چ']
		}
		else if (this.id === 'ه') {
			return counts['ه'] + counts['ة']
		}
		else if (this.id === 'و') {
			return counts['و'] + counts['ؤ']
		}
		else if (this.id === 'ز') {
			return counts['ز'] + counts['ژ']
		}
		else if (this.id === 'ق') {
			return counts['ق'] + counts['ڨ']
		}
		else if (this.id === 'ف') {
			return counts['ف'] + counts['ڢ'] + counts['ڤ']
		}
		else if (this.id === 'ي') {
			return counts['ي'] + counts['ی'] + counts['ئ'] + counts['ى']
		}
		else if (this.id === 'ك') {
			return counts['ك'] + counts['ک'] + counts['گ'] + counts['ڭ']
		}
		else if (this.id === 'ل') {
			return counts['ل'] + counts['ﻻ'] + counts['ﻹ'] + counts['ﻷ'] + counts['ﻵ']
		}
		else if (this.id === 'ا') {
			return counts['ا'] + counts['ﻻ'] + counts['ﻹ'] + counts['ﻷ'] + counts['ﻵ'] + counts['ء'] + counts['آ'] + counts['ٱ'] + counts['أ'] + counts['إ']
		}
	}).get().reduce((pv, cv) => pv+cv, 0);

	if (document.getElementById('say').innerHTML == '0') {
		document.querySelector("p[id=say]").style.display = "none";
	}
	else {
		if (say_toplam !== 0) {
			if (say_toplam % 19 === 0) {
				sayı = say_toplam + " = 19 × " + say_toplam/19;
				$("#say").html("<span style=\"color: blue;\">" + sayı + "</span>");
			}
			else {
				sayı = say_toplam;
				document.getElementById('say').innerHTML = say_toplam;
			}
			document.querySelector("p[id=say]").style.display = "inline-block";
		}
		else {
			sayı = ''
			document.getElementById('say').innerHTML = sayı;
			document.querySelector("p[id=say]").style.display = "inline";
		}
	}
}

$('.seçenekler').on('change', seçilen_harfler)

var seçilmişler;
var sclnhrf;

function seçilen_harfler() {
	if($("input[class=seçenekler]:checked").length){
		seçilmişler = $("input[class=seçenekler]:checked").map(function() {return this.id});
		sclnhrf = seçilmişler.get().join('+');
		metin = sclnhrf + ' sayısı: ';
		if (say_toplam !== 0) {
			if (say_toplam % 19 === 0) {
				$("#str").html("<span style=\"color: blue;\">" + metin + "</span>");
			}
			else {
				document.getElementById('str').innerHTML = metin;
			}
		}
		else {
			seçilmişler = '';
			metin = '';
			document.getElementById('str').innerHTML = metin;
		}
	}
	else {
		metin = '';
		document.getElementById('str').innerHTML = metin;
	}
}

var harf_sayisi;
var ayet_sayisi;
var mesaj;
var ebced;
var kelime;
var inputValue;

$("#ifade").on('input keyup keypress', function() {
	
	inputValue = $(this).val();
	
if( abjad(inputValue) ) {
	
	document.querySelector("#kopyala").style.display = "block";
	
	if (abjad(inputValue) % 19 === 0) {
		ebced = abjad(inputValue) + " = 19 × " + abjad(inputValue)/19;
		$("#abjad").html("<span style=\"color: blue;\">" + "EBCED değeri: " + ebced + "</span>");
	}
	else {
		ebced = abjad(inputValue);
		$("#abjad").html("EBCED değeri: " + ebced);
	}
	
	if (letters(inputValue) % 19 === 0) {
		harf_sayisi = letters(inputValue) + " = 19 × " + letters(inputValue)/19;
		$("#letters").html("<span style=\"color: blue;\">" + "HARF sayısı: " + harf_sayisi + "</span>");
	}
	else {
		harf_sayisi = letters(inputValue);
		$("#letters").html("HARF sayısı: " + harf_sayisi);
	}
	
	if (words(inputValue) % 19 === 0) {
		kelime = words(inputValue) + " = 19 × " + words(inputValue)/19;
		$("#words").html("<span style=\"color: blue;\">" + "KELİME sayısı: " + kelime + "</span>");
	}
	else {
		kelime = words(inputValue);
		$("#words").html("KELİME sayısı: " + kelime);
	}
	if (ayetsay(inputValue)) {
		if (ayetsay(inputValue) % 19 === 0) {
			ayet_sayisi = ayetsay(inputValue) + " = 19 × " + ayetsay(inputValue)/19;
			$("#verses").html("<span style=\"color: blue;\">" + "AYET sayısı: " + ayet_sayisi + "</span>");
		}
		else {
			ayet_sayisi = ayetsay(inputValue);
			$("#verses").html("AYET sayısı: " + ayet_sayisi);
		}
	}
	else {
		ayet_sayisi = ''
		$("#verses").html("");
	}
	
	function harf1 (h1) {
		if (ch == h1) {
			sonuc = counts[h1]
			if (sonuc == 0) {
				return document.querySelector("p[id=" + h1 + "]").style.display = "none";
			}
			else {
				document.querySelector("p[id=" + h1 + "]").style.display = "block";
				if (sonuc % 19 === 0) {
					harf = sonuc + " = 19 × " + sonuc/19;
					return $("p[id=" + h1 + "]").html("<span style=\"color: blue;\">" + h1 + ' sayısı: ' + harf + "</span>");
				}
				else {
					harf = sonuc;
					return $("p[id=" + h1 + "]").html(h1 + ' sayısı: ' + sonuc);
				}
			}
		}
	}
  
	function harf2 (h1, h2) {
		if (ch == h1 || ch == h2) {
			sonuc = counts[h1] + counts[h2]
			if (sonuc == 0) {
				return document.querySelector("p[id=" + h1 + "]").style.display = "none";
			}
			else {
				document.querySelector("p[id=" + h1 + "]").style.display = "block";
				if (sonuc % 19 === 0) {
					harf = sonuc + " = 19 × " + sonuc/19;
					return $("p[id=" + h1 + "]").html("<span style=\"color: blue;\">" + h1 + ' sayısı: ' + harf + "</span>");
				}
				else {
					harf = sonuc;
					return $("p[id=" + h1 + "]").html(h1 + ' sayısı: ' + sonuc);
				}
			}
		}
	}

	function harf3 (h1, h2, h3) {
		if (ch == h1 || ch == h2 || ch == h3) {
			sonuc = counts[h1] + counts[h2] + counts[h3]
			if (sonuc == 0) {
				return document.querySelector("p[id=" + h1 + "]").style.display = "none";
			}
			else {
				document.querySelector("p[id=" + h1 + "]").style.display = "block";
				if (sonuc % 19 === 0) {
					harf = sonuc + " = 19 × " + sonuc/19;
					return $("p[id=" + h1 + "]").html("<span style=\"color: blue;\">" + h1 + ' sayısı: ' + harf + "</span>");
				}
				else {
					harf = sonuc;
					return $("p[id=" + h1 + "]").html(h1 + ' sayısı: ' + sonuc);
				}
			}
		}
	}

	function harf4 (h1, h2, h3, h4) {
		if (ch == h1 || ch == h2 || ch == h3 || ch == h4){
			sonuc = counts[h1] + counts[h2] + counts[h3] + counts[h4]
			if (sonuc == 0) {
				return document.querySelector("p[id=" + h1 + "]").style.display = "none";
			}
			else {
				document.querySelector("p[id=" + h1 + "]").style.display = "block";
				if (sonuc % 19 === 0) {
					harf = sonuc + " = 19 × " + sonuc/19;
					return $("p[id=" + h1 + "]").html("<span style=\"color: blue;\">" + h1 + ' sayısı: ' + harf + "</span>");
				}
				else {
					harf = sonuc;
					return $("p[id=" + h1 + "]").html(h1 + ' sayısı: ' + sonuc);
				}
			}
		}
	}
  
	function harf5 (h1, h2, h3, h4, h5) {
		if (ch == h1 || ch == h2 || ch == h3 || ch == h4 || ch == h5) {
			sonuc = counts[h1] + counts[h2] + counts[h3] + counts[h4] + counts[h5]
			if (sonuc == 0) {
				return document.querySelector("p[id=" + h1 + "]").style.display = "none";
			}
			else {
				document.querySelector("p[id=" + h1 + "]").style.display = "block";
				if (sonuc % 19 === 0) {
					harf = sonuc + " = 19 × " + sonuc/19;
					return $("p[id=" + h1 + "]").html("<span style=\"color: blue;\">" + h1 + ' sayısı: ' + harf + "</span>");
				}
				else {
					harf = sonuc;
					return $("p[id=" + h1 + "]").html(h1 + ' sayısı: ' + sonuc);
				}
			}
		}
	}
	
	function harf10 (h1, h2, h3, h4, h5, h6, h7, h8, h9, h10) {
	if (ch == h1 || ch == h2 || ch == h3 || ch == h4 || ch == h5 || ch == h6 || ch == h7 || ch == h8 || ch == h9 || ch == h10) {
		sonuc = counts[h1]+counts[h2]+counts[h3]+counts[h4]+counts[h5]+counts[h6]+counts[h7]+counts[h8]+counts[h9]+counts[h10]
		if (sonuc == 0) {
			return document.querySelector("p[id=" + h1 + "]").style.display = "none";
		}
		else {
			document.querySelector("p[id=" + h1 + "]").style.display = "block";
			if (sonuc % 19 === 0) {
				harf = sonuc + " = 19 × " + sonuc/19;
				return $("p[id=" + h1 + "]").html("<span style=\"color: blue;\">" + h1 + ' sayısı: ' + harf + "</span>");
			}
			else {
				harf = sonuc;
				return $("p[id=" + h1 + "]").html(h1 + ' sayısı: ' + sonuc);
			}
		}
	}
	}
	
	counts = {ء:0,ا:0,آ:0,ٱ:0,أ:0,إ:0,ب:0,پ:0,ج:0,چ:0,د:0,ه:0,ة:0,و:0,ؤ:0,ز:0,ژ:0,ح:0,ط:0,ی:0,ي:0,ئ:0,ى:0,ک:0,ك:0,گ:0,ڭ:0,ل:0,م:0,ن:0,س:0,ع:0,ف:0,ڢ:0,ڤ:0,ص:0,ق:0,ڨ:0,ر:0,ش:0,ت:0,ث:0,خ:0,ذ:0,ض:0,ظ:0,غ:0,ﻻ:0,ﻹ:0,ﻷ:0,ﻵ:0};
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

	sayım();
	seçilen_harfler();
	
}else{
	if (ifade === document.activeElement) {
		document.getElementById('açıklama').innerHTML = '';
		sure1.value = '';
		ayet1.value = '';
		sure2.value = '';
		ayet2.value = '';
		sırano1.value = '';
		sırano2.value = '';
	}
	document.getElementById('abjad').innerHTML = '';
	document.getElementById('letters').innerHTML = '';
	document.getElementById('words').innerHTML = '';
	document.getElementById('verses').innerHTML = '';
	mesaj = "";
	document.getElementById('say').innerHTML = '';
	document.getElementById('str').innerHTML = '';
	$('.seçenekler').prop("checked", false);
	$("p[id='ا']").addClass("not-selected");
	$("p[id='ب']").addClass("not-selected");
	$("p[id='ج']").addClass("not-selected");
	$("p[id='د']").addClass("not-selected");
	$("p[id='ه']").addClass("not-selected");
	$("p[id='و']").addClass("not-selected");
	$("p[id='ز']").addClass("not-selected");
	$("p[id='ح']").addClass("not-selected");
	$("p[id='ط']").addClass("not-selected");
	$("p[id='ي']").addClass("not-selected");
	$("p[id='ك']").addClass("not-selected");
	$("p[id='ل']").addClass("not-selected");
	$("p[id='م']").addClass("not-selected");
	$("p[id='ن']").addClass("not-selected");
	$("p[id='س']").addClass("not-selected");
	$("p[id='ع']").addClass("not-selected");
	$("p[id='ف']").addClass("not-selected");
	$("p[id='ص']").addClass("not-selected");
	$("p[id='ق']").addClass("not-selected");
	$("p[id='ر']").addClass("not-selected");
	$("p[id='ش']").addClass("not-selected");
	$("p[id='ت']").addClass("not-selected");
	$("p[id='ث']").addClass("not-selected");
	$("p[id='خ']").addClass("not-selected");
	$("p[id='ذ']").addClass("not-selected");
	$("p[id='ض']").addClass("not-selected");
	$("p[id='ظ']").addClass("not-selected");
	$("p[id='غ']").addClass("not-selected");
	
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

$("#ifade").on('input keyup', message);
$(".inputs").on('click focus', message);

function message() {

	var surebir = sure1.value;
	var sureiki = sure2.value;
	var ayetbir1 = ayet1.value;
	var ayetiki2 = ayet2.value;
	var sn = document.getElementById('sn');

	if (surebir) {
		if (ayetbir1) {
			if (sureiki) {
				if (ayetiki2) {
					if (metin === '') {
						if (sn.checked) {
							mesaj = "ebced.kuran114.org/#sure="+surebir+"&ayet="+ayetbir1+"&sure2="+sureiki+"&ayet2="+ayetiki2+"&sn=1" + "\n\n" + "EBCED değeri: " + ebced + "\n" + "HARF sayısı: " + harf_sayisi + "\n" + "KELİME sayısı: " + kelime + "\n" + "AYET sayısı: " + ayet_sayisi;
						}
						else {
							mesaj = "ebced.kuran114.org/#sure="+surebir+"&ayet="+ayetbir1+"&sure2="+sureiki+"&ayet2="+ayetiki2 + "\n\n" + "EBCED değeri: " + ebced + "\n" + "HARF sayısı: " + harf_sayisi + "\n" + "KELİME sayısı: " + kelime + "\n" + "AYET sayısı: " + ayet_sayisi;
						}
					}
					else {
						if (sn.checked) {
							mesaj = "ebced.kuran114.org/#sure="+surebir+"&ayet="+ayetbir1+"&sure2="+sureiki+"&ayet2="+ayetiki2+"&say="+sclnhrf+"&sn=1" + "\n\n" + "Toplam " + metin + sayı + "\n" + "EBCED değeri: " + ebced + "\n" + "HARF sayısı: " + harf_sayisi + "\n" + "KELİME sayısı: " + kelime + "\n" + "AYET sayısı: " + ayet_sayisi;
						}
						else {
							mesaj = "ebced.kuran114.org/#sure="+surebir+"&ayet="+ayetbir1+"&sure2="+sureiki+"&ayet2="+ayetiki2+"&say="+sclnhrf + "\n\n" + "Toplam " + metin + sayı + "\n" + "EBCED değeri: " + ebced + "\n" + "HARF sayısı: " + harf_sayisi + "\n" + "KELİME sayısı: " + kelime + "\n" + "AYET sayısı: " + ayet_sayisi;
						}
					}
				}
				else {
					if (metin === '') {
						if (sn.checked) {
							mesaj = "ebced.kuran114.org/#sure="+surebir+"&ayet="+ayetbir1+"&sure2="+sureiki+"&sn=1" + "\n\n" + "EBCED değeri: " + ebced + "\n" + "HARF sayısı: " + harf_sayisi + "\n" + "KELİME sayısı: " + kelime + "\n" + "AYET sayısı: " + ayet_sayisi;
						}
						else {
							mesaj = "ebced.kuran114.org/#sure="+surebir+"&ayet="+ayetbir1+"&sure2="+sureiki + "\n\n" + "EBCED değeri: " + ebced + "\n" + "HARF sayısı: " + harf_sayisi + "\n" + "KELİME sayısı: " + kelime + "\n" + "AYET sayısı: " + ayet_sayisi;
						}
					}
					else {
						if (sn.checked) {
							mesaj = "ebced.kuran114.org/#sure="+surebir+"&ayet="+ayetbir1+"&sure2="+sureiki+"&say="+sclnhrf+"&sn=1" + "\n\n" + "Toplam " + metin + sayı + "\n" + "EBCED değeri: " + ebced + "\n" + "HARF sayısı: " + harf_sayisi + "\n" + "KELİME sayısı: " + kelime + "\n" + "AYET sayısı: " + ayet_sayisi;
						}
						else {
							mesaj = "ebced.kuran114.org/#sure="+surebir+"&ayet="+ayetbir1+"&sure2="+sureiki+"&say="+sclnhrf + "\n\n" + "Toplam " + metin + sayı + "\n" + "EBCED değeri: " + ebced + "\n" + "HARF sayısı: " + harf_sayisi + "\n" + "KELİME sayısı: " + kelime + "\n" + "AYET sayısı: " + ayet_sayisi;
						}
					}
				}
			}
			else {
				if (metin === '') {
					if (sn.checked) {
						mesaj = "ebced.kuran114.org/#sure="+surebir+"&ayet="+ayetbir1+"&sn=1" + "\n\n" + "EBCED değeri: " + ebced + "\n" + "HARF sayısı: " + harf_sayisi + "\n" + "KELİME sayısı: " + kelime;
					}
					else {
						mesaj = "ebced.kuran114.org/#sure="+surebir+"&ayet="+ayetbir1 + "\n\n" + "EBCED değeri: " + ebced + "\n" + "HARF sayısı: " + harf_sayisi + "\n" + "KELİME sayısı: " + kelime;
					}
				}
				else {
					if (sn.checked) {
						mesaj = "ebced.kuran114.org/#sure="+surebir+"&ayet="+ayetbir1+"&say="+sclnhrf+"&sn=1" + "\n\n" + "Toplam " + metin + sayı + "\n" + "EBCED değeri: " + ebced + "\n" + "HARF sayısı: " + harf_sayisi + "\n" + "KELİME sayısı: " + kelime;
					}
					else{
						mesaj = "ebced.kuran114.org/#sure="+surebir+"&ayet="+ayetbir1+"&say="+sclnhrf + "\n\n" + "Toplam " + metin + sayı + "\n" + "EBCED değeri: " + ebced + "\n" + "HARF sayısı: " + harf_sayisi + "\n" + "KELİME sayısı: " + kelime;
					}
				}
			}
		}
		else {
			if (metin === '') {
				if (sn.checked) {
					mesaj = "ebced.kuran114.org/#sure="+surebir+"&sn=1" + "\n\n" + "EBCED değeri: " + ebced + "\n" + "HARF sayısı: " + harf_sayisi + "\n" + "KELİME sayısı: " + kelime + "\n" + "AYET sayısı: " + ayet_sayisi;
				}
				else{
					mesaj = "ebced.kuran114.org/#sure="+surebir + "\n\n" + "EBCED değeri: " + ebced + "\n" + "HARF sayısı: " + harf_sayisi + "\n" + "KELİME sayısı: " + kelime + "\n" + "AYET sayısı: " + ayet_sayisi;
				}
			}
			else {
				if (sn.checked) {
					mesaj = "ebced.kuran114.org/#sure="+surebir+"&say="+sclnhrf+"&sn=1" + "\n\n" + "Toplam " + metin + sayı + "\n" + "EBCED değeri: " + ebced + "\n" + "HARF sayısı: " + harf_sayisi + "\n" + "KELİME sayısı: " + kelime + "\n" + "AYET sayısı: " + ayet_sayisi;
				}
				else {
					mesaj = "ebced.kuran114.org/#sure="+surebir+"&say="+sclnhrf + "\n\n" + "Toplam " + metin + sayı + "\n" + "EBCED değeri: " + ebced + "\n" + "HARF sayısı: " + harf_sayisi + "\n" + "KELİME sayısı: " + kelime + "\n" + "AYET sayısı: " + ayet_sayisi;
				}
			}
		}
	}
	else {
		if (metin === '') {
			if (ayet_sayisi) {
				if (sn.checked) {
					mesaj = "ebced.kuran114.org/#ifade=" + inputValue.replace(/[ ]+/gim, "_").replace(/[\n]+/gim, "-")+"&sn=1" + "\n\n" + "EBCED değeri: " + ebced + "\n" + "HARF sayısı: " + harf_sayisi + "\n" + "KELİME sayısı: " + kelime + "\n" + "AYET sayısı: " + ayet_sayisi;
				}
				else {
					mesaj = "ebced.kuran114.org/#ifade=" + inputValue.replace(/[ ]+/gim, "_").replace(/[\n]+/gim, "-") + "\n\n" + "EBCED değeri: " + ebced + "\n" + "HARF sayısı: " + harf_sayisi + "\n" + "KELİME sayısı: " + kelime + "\n" + "AYET sayısı: " + ayet_sayisi;
				}
			}
			else {
				if (sn.checked) {
					mesaj = "ebced.kuran114.org/#ifade=" + inputValue.replace(/[ ]+/gim, "_").replace(/[\n]+/gim, "-")+"&sn=1" + "\n\n" + "EBCED değeri: " + ebced + "\n" + "HARF sayısı: " + harf_sayisi + "\n" + "KELİME sayısı: " + kelime;
				}
				else {
					mesaj = "ebced.kuran114.org/#ifade=" + inputValue.replace(/[ ]+/gim, "_").replace(/[\n]+/gim, "-") + "\n\n" + "EBCED değeri: " + ebced + "\n" + "HARF sayısı: " + harf_sayisi + "\n" + "KELİME sayısı: " + kelime;
				}
			}
		}
		else {
			if (ayet_sayisi) {
				if (sn.checked) {
					mesaj = "ebced.kuran114.org/#ifade=" + inputValue.replace(/[ ]+/gim, "_").replace(/[\n]+/gim, "-")+"&say="+sclnhrf+"&sn=1" + "\n\n" + "Toplam " + metin + sayı + "\n" + "EBCED değeri: " + ebced + "\n" + "HARF sayısı: " + harf_sayisi + "\n" + "KELİME sayısı: " + kelime + "\n" + "AYET sayısı: " + ayet_sayisi;
				}
				else {
					mesaj = "ebced.kuran114.org/#ifade=" + inputValue.replace(/[ ]+/gim, "_").replace(/[\n]+/gim, "-")+"&say="+sclnhrf + "\n\n" + "Toplam " + metin + sayı + "\n" + "EBCED değeri: " + ebced + "\n" + "HARF sayısı: " + harf_sayisi + "\n" + "KELİME sayısı: " + kelime + "\n" + "AYET sayısı: " + ayet_sayisi;
				}
			}
			else {
				if (sn.checked) {
					mesaj = "ebced.kuran114.org/#ifade=" + inputValue.replace(/[ ]+/gim, "_").replace(/[\n]+/gim, "-")+"&say="+sclnhrf+"&sn=1" + "\n\n" + "Toplam " + metin + sayı + "\n" + "EBCED değeri: " + ebced + "\n" + "HARF sayısı: " + harf_sayisi + "\n" + "KELİME sayısı: " + kelime;
				}
				else {
					mesaj = "ebced.kuran114.org/#ifade=" + inputValue.replace(/[ ]+/gim, "_").replace(/[\n]+/gim, "-")+"&say="+sclnhrf + "\n\n" + "Toplam " + metin + sayı + "\n" + "EBCED değeri: " + ebced + "\n" + "HARF sayısı: " + harf_sayisi + "\n" + "KELİME sayısı: " + kelime;
				}
			}
		}
	}
}

function linkchecker(ltr) {
	var mukatta = {ا:1, ل:1, م:1, ر:1, ك:1, ه:1, ي:1, ع:1, ص:1, ط:1, س:1, ق:1, ن:1, ح:1};
	if (mukatta.hasOwnProperty(ltr)) {
		if ($("input[id=" + ltr + "]").prop('checked') == true) {
			$("p[id=" + ltr + "]").removeClass("not-selected");
			$("p[id=" + ltr + "]").addClass("hselected");
		}
		else {
			$("p[id=" + ltr + "]").removeClass("hselected");
			$("p[id=" + ltr + "]").addClass("not-selected");
		}
	}
	else {
		if ($("input[id=" + ltr + "]").prop('checked') == true) {
			$("p[id=" + ltr + "]").removeClass("not-selected");
			$("p[id=" + ltr + "]").addClass("selected");
		}
		else {
			$("p[id=" + ltr + "]").removeClass("selected");
			$("p[id=" + ltr + "]").addClass("not-selected");
		}
	}
}

function getfromlink() {
	var hashParams = window.location.hash.substr(1).replace(/[_]+/gim, " ").replace(/[-]+/gim, "\n").split('&');
	if (window.location.hash) {
		for (var i = 0; i < hashParams.length; i++) {
			var p = decodeURIComponent(hashParams[i]).split('=');
			if (p[0] === 'ifade') {
				document.getElementById(p[0]).value = p[1];
				$("#ifade").trigger('input');
			}
			else if (p[0] === 'sure' || p[0] === 'ayet' || p[0] === 'sure2' || p[0] === 'ayet2') {
				document.getElementById(p[0]).value = p[1];
				$("#"+p[0]).trigger('input');
			}
			else if (p[0] === 'say') {
				for (var j = 0; j < p[1].split('+').length; j++) {
					document.getElementById(p[1].split('+')[j]).checked = true;
					$("#"+p[1].split('+')[j]).trigger('change');
					linkchecker(p[1].split('+')[j]);
				}
			}
			else if (p[0] === 'sn') {
				if (p[1] === '1') {
					document.getElementById(p[0]).checked = true;
				}
				else {
					document.getElementById(p[0]).checked = false;
				}
				$('#sn').trigger('change');
			}
		}
	}
}

$(window).load(getfromlink);