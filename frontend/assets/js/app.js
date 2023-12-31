const musicianButton = document.getElementById("musician-button");
const clientButton = document.getElementById("client-button");
const parrafoCambiante = document.getElementById("parrafo-cambiante");


musicianButton.addEventListener("click", () => {
    window.location.href = "/html/login-musico.html";
});

clientButton.addEventListener("click", () => {
    window.location.href = "/html/login-cliente.html";
});


// Estas son las frases que van en el parrafo
const frasesMusicales = [
    "La música expresa lo que no puede decirse con palabras y no puede permanecer en silencio.",
    "Donde las palabras fallan, la música habla.",
    "La música es el lenguaje universal de la humanidad.",
    "La música puede cambiar el mundo.",
    "La música es el arte más directo, entra por el oído y va al corazón.",
    "La música es la única cosa que puede cambiar tus emociones en un instante.",
    "La música es la forma en que los sentimientos suenan.",
    "La música es mi refugio cuando quiero huir del mundo.",
    "La música es la medicina del alma.",
    "La música es el alimento del alma.",
    "La música es el eco del alma que busca en el cielo su eco.",
    "La música es el gran unificador, un puente sobre las aguas emocionales.",
    "La música es vida. Eso es por lo que nuestros corazones tienen latidos.",
    "La música es como un sueño que jamás termina.",
    "La música es el arte más puro y puede expresar lo inexpresable.",
    "La música es la compañera fiel, la que nunca te abandona.",
    "La música es la banda sonora de la vida.",
    "La música es la magia que inspira, emociona y une a las personas.",
    "La música es la poesía del aire.",
    "La música es el corazón de la vida. Por ella habla el amor, sin ella no hay bien posible y con ella todo es hermoso.",
    "La música es el arte que está más cerca de las lágrimas y los recuerdos.",
    "La música es el alma que se puede escuchar.",
    "La música es el arte de pensar con sonidos.",
    "La música es una ley moral. Dar una alegría es premio más grande que recibir una.",
    "La música puede cambiar la palabra y el corazón.",
    "La música es un eco de lo invisible.",
    "La música limpia el alma del polvo de la vida diaria.",
    "La música es un sueño de armonía.",
    "La música da alma al universo, alas a la mente, vuelos a la imaginación.",
    "La música es el sonido del sentimiento.",
    "La música es el reflejo de lo que somos y lo que sentimos.",
    "La música es el lenguaje en el que todos podemos entendernos.",
    "La música es una forma de escapar sin moverse de sitio.",
    "La música es el corazón de la vida. Sin ella no habría nada.",
    "La música es el arte de las musas.",
    "La música es el arte de contar con sonidos en el tiempo.",
    "La música es el perfume del alma.",
    "La música es el canto del corazón.",
    "La música es el arte de pintar los sonidos.",
    "La música es un río de sentimientos que fluye del corazón.",
    "La música es la clave para abrir las puertas del alma.",
    "La música es un lenguaje que todos entendemos.",
    "La música es un lenguaje que va más allá de las palabras.",
    "La música es la voz del alma.",
    "La música es el alivio del corazón y el espíritu.",
    "La música es el sonido que sale del corazón.",
    "La música es el alivio del alma cansada.",
    "La música es el arte de manifestar sentimientos a través del sonido.",
    "La música es la cura para el alma rota.",
    "La música es un abrazo sonoro que envuelve el corazón.",
    "La música es un bálsamo que calma el alma.",
    "La música es la energía que mueve el mundo.",
    "La música es el arte de combinar los sonidos de manera armoniosa.",
    "La música es el eco del silencio.",
    "La música es un latido del corazón que se escucha.",
    "La música es la emoción convertida en sonido.",
    "La música es el puente entre el cielo y la tierra.",
    "La música es la compañera del alma en su viaje.",
    "La música es el refugio del corazón herido.",
    "La música es el lenguaje de las emociones sin palabras.",
    "La música es un abrazo que no necesita contacto físico.",
    "La música es el corazón latiendo en armonía.",
    "La música es un poema sin palabras.",
    "La música es el reflejo del alma.",
    "La música es el eco de la eternidad.",
    "La música es el arte de los sonidos en el tiempo.",
    "La música es el arte de hacer que los sonidos emocionen.",
    "La música es el lenguaje que no necesita traducción.",
    "La música es el arte de emocionar con el sonido.",
    "La música es el susurro de las estrellas.",
    "La música es el camino que lleva al alma.",
    "La música es el escape de la realidad al paraíso",
    "La música es el arte de sentir con el oído.",
    "La música es la melodía de la vida.",
    "La música es el arte que une a las almas.",
    "La música es el lenguaje del espíritu.",
    "La música es el abrazo que atraviesa el tiempo.",
    "La música es el lienzo en el que se pintan los sentimientos.",
    "La música es el río que fluye del corazón.",
    "La música es el aire que da vida al alma.",
    "La música es el eco de la creación.",
    "La música es el arte que embellece el tiempo.",
    "La música es el suspiro del alma que se escucha.",
    "La música es el sol que ilumina el corazón.",
    "La música es el viento que acaricia el espíritu.",
    "La música es el arte que llena el silencio.",
    "La música es el eco del ser interior.",
    "La música es la danza de las emociones en el aire.",
    "La música es el latido que se siente con el oído.",
    "La música es el refugio de la mente cansada.",
    "La música es el canto del alma que se hace sonido.",
    "La música es la inspiración que fluye a través de los sonidos.",
    "La música es el lenguaje del corazón que trasciende palabras.",
    "La música es el arte que habita en el tiempo y el espacio.",
    "La música es el amor que se escucha.",
    "La música es la armonía que une a las almas.",
    "La música es el ritmo de la vida.",
    "La música es el arte que fluye del corazón al oído.",
    "La música es la llave que abre las puertas del sentimiento.",
    "La música es el abrazo que no necesita contacto físico.",
    "La música es la emoción que se convierte en melodía.",
    "La música es el suspiro del alma que se vuelve sonido.",
    "La música es el camino hacia el interior.",
    "La música es el arte que pinta los momentos con sonidos.",
    "La música es el eco de la eternidad.",
    "La música es el abrazo que atraviesa el tiempo.",
    "La música es el reflejo del alma en el sonido.",
    "La música es el puente que une los corazones en armonía.",
    "La música es el lenguaje que conecta las almas.",
    "La música es el arte que trae al presente los sentimientos.",
    "La música es el camino que lleva a la emoción.",
    "La música es el susurro del corazón en el viento.",
    "La música es la danza de los sentimientos en el aire.",
    "La música es la voz del espíritu.",
    "La música es el alivio del alma cansada.",
    "La música es el latido que se siente con el oído.",
    "La música es el abrazo que nos envuelve en sonidos.",
    "La música es la melodía que habita en el corazón.",
    "La música es el arte que pinta los sueños con sonidos.",
    "La música es el eco de los recuerdos.",
    "La música es el reflejo del ser interior.",
    "La música es el lenguaje de la pasión.",
    "La música es el arte que emociona al oído.",
    "La música es el latido que se convierte en melodía.",
    "La música es el canto del alma que se hace eco.",
    "La música es el camino hacia la profundidad del ser.",
    "La música es el abrazo del corazón en notas.",
    "La música es la melodía que se siente con el alma.",
    "La música es el arte que hace vibrar las emociones.",
    "La música es el eco de los sentimientos.",
    "La música es el lenguaje que habla al corazón.",
    "La música es el puente que une la realidad con el sueño.",
    "La música es el suspiro del espíritu en el aire.",
    "La música es la danza de las emociones en el sonido.",
    "La música es la voz de los deseos en el viento.",
    "La música es el reflejo del corazón en el oído.",
    "La música es el arte que inspira y emociona.",
    "La música es el camino que lleva al sentimiento puro.",
    "La música es el abrazo del alma en melodías.",
    "La música es la melodía que nos toca el alma.",
    "La música es el arte que pinta el presente con armonía.",
    "La música es el eco de las emociones.",
    "La música es el reflejo de los sueños en el sonido.",
    "La música es el lenguaje que se siente con el corazón.",
    "La música es el camino hacia el mundo interior.",
    "La música es el abrazo de los sentimientos en acordes.",
    "La música es la melodía que conecta a las almas.",
    "La música es el arte que habla sin palabras.",
    "La música es el eco del amor.",
    "La música es el reflejo de los momentos en el alma.",
    "La música es el lenguaje de las sensaciones.",
    "La música es el camino que lleva a la emoción pura.",
    "La música es el abrazo de la pasión en sonidos.",
    "La música es la melodía que nos envuelve.",
    "La música es el arte que pinta los sentimientos con notas.",
    "La música es el eco de los deseos.",
    "La música es el reflejo de la pasión en el corazón.",
    "La música es el lenguaje que susurra al alma.",
    "La música es el camino hacia la profundidad del sentimiento.",
    "La música es el abrazo del amor en melodías.",
    "La música es la melodía que trae consuelo.",
    "La música es el arte que habita en los sentidos.",
    "La música es el eco de la armonía.",
    "La música es el reflejo de la emoción en el oído.",
    "La música es el lenguaje que abraza el corazón.",
    "La música es el camino que lleva a la esencia del ser.",
    "La música es el abrazo del espíritu en acordes.",
    "La música es la melodía que nos guía.",
    "La música es el arte que dibuja el alma con sonidos.",
    "La música es el eco de los latidos del corazón.",
    "La música es el reflejo del amor en el sonido.",
    "La música es el lenguaje que conecta con la pasión.",
    "La música es el camino que lleva a la emoción profunda.",
    "La música es el abrazo de la inspiración en notas.",
    "La música es la melodía que nos une.",
    "La música es el arte que toca el corazón sin contacto.",
    "La música es el eco del alma.",
    "La música es el reflejo del sentimiento en el oído.",
    "La música es el lenguaje que habla con el espíritu.",
    "La música es el camino que lleva a la verdad del ser.",
    "La música es el abrazo de la creatividad en acordes.",
    "La música es la melodía que nos acoge.",
    "La música es el arte que llena el ser de armonía.",
    "La música es el eco de los pensamientos del corazón.",
    "La música es el reflejo de la inspiración en el alma.",
    "La música es el lenguaje que conecta con el alma.",
    "La música es el camino que lleva a la esencia de la emoción.",
    "La música es el abrazo de la belleza en notas.",
    "La música es la melodía que nos hace soñar.",
    "La música es el arte que pinta la vida con sonidos.",
    "La música es el eco de los deseos del espíritu.",
    "La música es el reflejo de los sueños en el corazón.",
    "La música es el lenguaje que habla con el corazón."
];

const randomIndex = Math.floor(Math.random() * frasesMusicales.length);
parrafoCambiante.textContent = `"${frasesMusicales[randomIndex]}"`;


let icono = document.getElementById("icono");

icono.addEventListener('click', () => {
    icono.classList.remove("fa-regular");
    icono.classList.add("fa-solid");
})
