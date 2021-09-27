
document.getElementById("text").innerHTML = "<h2>Abaut us</h2> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat posuere convallis. Donec vestibulum, dolor ac faucibus blandit, purus turpis consequat nibh, nec maximus diam velit id lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam blandit justo ut eros ultrices condimentum. Phasellus at iaculis lacus, eget hendrerit massa. Nullam ut mattis lacus. Sed a dolor dictum erat congue tempus. Sed sem odio, tempor vel facilisis a, feugiat id magna. Suspendisse pellentesque maximus aliquet. Phasellus justo risus, dapibus at consequat eget, facilisis nec nulla.</p>";


function Home() {
    document.getElementById("Project").classList.remove("active");
    document.getElementById("Contact").classList.remove("active");
    document.getElementById("PriceList").classList.remove("active");
    document.querySelector("#Home").classList.add("active");
    document.querySelector("#text").classList.toggle("text_animation_text2");
    document.querySelector("#text").classList.toggle("text_animation_text");
    document.getElementById("text").innerHTML = "<h2>Abaut us</h2> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat posuere convallis. Donec vestibulum, dolor ac faucibus blandit, purus turpis consequat nibh, nec maximus diam velit id lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam blandit justo ut eros ultrices condimentum. Phasellus at iaculis lacus, eget hendrerit massa. Nullam ut mattis lacus. Sed a dolor dictum erat congue tempus. Sed sem odio, tempor vel facilisis a, feugiat id magna. Suspendisse pellentesque maximus aliquet. Phasellus justo risus, dapibus at consequat eget, facilisis nec nulla.</p>";
}

function Project() {
    document.getElementById("Home").classList.remove("active");
    document.getElementById("Contact").classList.remove("active");
    document.getElementById("PriceList").classList.remove("active");
    document.querySelector("#Project").classList.add("active");
    document.querySelector("#text").classList.toggle("text_animation_text2");
    document.querySelector("#text").classList.toggle("text_animation_text");
    document.getElementById("text").innerHTML = "<h2>Projekty</h2> <p>Dostępnych jest wiele wariacji fragmentów Lorem Ipsum, ale większość została zmieniona w jakiejś formie, przez wstrzykiwany humor lub przypadkowe słowa, które nawet w najmniejszym stopniu nie wyglądają na wiarygodne. Jeśli zamierzasz użyć fragmentu Lorem Ipsum, musisz mieć pewność, że w środku tekstu nie ma nic wstydliwego. Wszystkie generatory Lorem Ipsum w Internecie mają tendencję do powtarzania predefiniowanych fragmentów w razie potrzeby, co czyni go pierwszym prawdziwym generatorem w Internecie. Używa słownika ponad 200 słów łacińskich w połączeniu z kilkoma modelowymi strukturami zdań, aby wygenerować Lorem Ipsum, który wygląda rozsądnie. Wygenerowany Lorem Ipsum jest zatem zawsze wolny od powtórzeń, wstrzykiwanego humoru, nietypowych słów itp.</p>";
}

function Contact() {
    document.getElementById("Project").classList.remove("active");
    document.getElementById("Home").classList.remove("active");
    document.getElementById("PriceList").classList.remove("active");
    document.querySelector("#Contact").classList.add("active");
    document.querySelector("#text").classList.toggle("text_animation_text2");
    document.querySelector("#text").classList.toggle("text_animation_text");
    document.getElementById("text").innerHTML = '<div id="contenier_form"><form action="/" method="post"><label for="mail">E-mail:</label><br><input class="hover-underline-animation" type="text"><br><label for="message">Wiadomość:</label><br><textarea class="hover-underline-animation"  ></textarea><br><input class="button" type="submit" value="Wyślij!"></form></div>';
}

function priceList() {
    document.getElementById("Project").classList.remove("active");
    document.getElementById("Home").classList.remove("active");
    document.getElementById("Contact").classList.remove("active");
    document.querySelector("#PriceList").classList.add("active");
    document.querySelector("#text").classList.toggle("text_animation_text2");
    document.querySelector("#text").classList.toggle("text_animation_text");
    document.getElementById("text").innerHTML = '<h2>Cennik</h2> <table ><tbody><tr><td>Podstawowa strona:</td><td>50zł + hosting+domena</td></tr><tr><td>Zawansowana strona:</td><td>Indwidualna cena uzgadniana meail.</td></tr><tr><td>Wizytówka e-mail:</td><td>30zł</td></tr></tbody></table>';
}






