function Home() {
	document.getElementById("Project").classList.remove("active");
	document.getElementById("Contact").classList.remove("active");
	document.getElementById("PriceList").classList.remove("active");
	document.querySelector("#Home").classList.add("active");
	document.querySelector("#text").classList.toggle("text_animation_text2");
	document.querySelector("#text").classList.toggle("text_animation_text");
	document.getElementById("text").innerHTML =
		"<h2>O mnie</h2> <p>Witam na mojej stronie znajdziesz tu moje projekty i formularz kontaktowy. Zajmuje się programowaniem stron już 3 lata, cały czas pogłębiam swoją wiedzę. Programuje w takich językach: Html, Css, JavaScript, PHP. Również programowałem w języku Python.  Strony które tworzę są responsywne. Lubię tworzyć proste strony ale to nie znaczy, że nie zrobię skomplikowanej strony. Aktualnie tworzę wszystko na własnych projektach.</p>";
}

function Project() {
	document.getElementById("Home").classList.remove("active");
	document.getElementById("Contact").classList.remove("active");
	document.getElementById("PriceList").classList.remove("active");
	document.querySelector("#Project").classList.add("active");
	document.querySelector("#text").classList.toggle("text_animation_text2");
	document.querySelector("#text").classList.toggle("text_animation_text");
	document.getElementById("text").innerHTML =
		'<h2>Projekty</h2> <p>Na razie nie mam żadnych większych projektów, ale może twój będzie największym? W prawym dolnym rogu jest link do mojego <a href="https://github.com/ostrowskiprograming">GitHuba</a> gdzie znajdziesz moje projekty.</p>';
}

function Contact() {
	document.getElementById("Project").classList.remove("active");
	document.getElementById("Home").classList.remove("active");
	document.getElementById("PriceList").classList.remove("active");
	document.querySelector("#Contact").classList.add("active");
	document.querySelector("#text").classList.toggle("text_animation_text2");
	document.querySelector("#text").classList.toggle("text_animation_text");
	document.getElementById("text").innerHTML =
		'<h2>Kontakt</h2><p>Witam aby się ze mną skontaktować wystarczy że napiszesz na tego maila: <a href="mailto:kontakt@ostrowskiprograming.pl">kontakt@ostrowskiprogramin.pl</a> napewno odpiszę.</p><!--<div id="contenier_form"><form action="/" method="post"><label for="mail">E-mail:</label><br><input class="hover-underline-animation" type="text"><br><label for="message">Wiadomość:</label><br><textarea class="hover-underline-animation"  ></textarea><br><input class="button" type="submit" value="Wyślij!"></form></div>-->';
}

function priceList() {
	document.getElementById("Project").classList.remove("active");
	document.getElementById("Home").classList.remove("active");
	document.getElementById("Contact").classList.remove("active");
	document.querySelector("#PriceList").classList.add("active");
	document.querySelector("#text").classList.toggle("text_animation_text2");
	document.querySelector("#text").classList.toggle("text_animation_text");
	document.getElementById("text").innerHTML =
		"<h2>Cennik</h2> <table ><tbody><tr><td>Podstawowa strona:</td><td>50zł + hosting + domena</td></tr><tr><td>Zawansowana strona:</td><td>Indwidualna cena.</td></tr><!--<tr><td>Wizytówka e-mail:</td><td>30zł</td></tr>--></tbody></table>";
}
