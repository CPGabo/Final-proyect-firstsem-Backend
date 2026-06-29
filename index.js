// PRIMERA LINEA — cargar variables de entorno
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://127.0.0.1:5502";
// ── MIDDLEWARES ──────────────────────────────────────────
app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());
// ── DATOS ────────────────────────────────────────────────
// Reemplazar con los artículos reales del grupo
const articulos = [
  {
    id: 1,
    titulo: "Brazo Solidario",
    autor: "Gabriel Cabrera",
    categoria: "COMUNIDAD",
    descripcion: "El apoyo sin apoyo",
    contenido: `
En el Uruguay del 2010, mientras la sociedad estaba unida y salía dando 
vítores a las calles al unísono, al ritmo de un “vamo’ Uruguay”, en Puntas de Manga, más precisamente en el asentamiento Villa Camila, un grupo de amigos se organizaba para atacar una problemática para muchos invisible: la precariedad. Sin imaginar que estaban dando los primeros pasos, de lo que más tarde se convertiría en el lugar favorito de muchas niñas, niños y adolescentes.

En un principio buscaron mitigar el peso que conlleva a muchas familias tener un plato de comida para todos los días, creando primeramente una olla popular y con el tiempo actividades itinerantes con el fin de fomentar el bienestar de la niñez, con espectáculos, inflables y actividades recreativas, comenzando a darle forma a lo que más tarde ingresaría como asociación civil, avalada por la DGR (Dirección General de Registros), nace Brazo Solidario.

Muchas veces se nos pasa por alto el valor que tiene la conexión en el desarrollo humano y sabemos la capacidad transformadora que tienen los referentes, dejando una huella que puede llegar a ser muy positiva, moral y afectiva. Esto ocasionó que se comiencen a plantear nuevas problemáticas y posibles abordajes, no solo intentar que tengan comida, sino también un entorno donde sentirse acompañados, para poder culminar su trayectoria académica y también a su vez brindarles un espacio seguro donde puedan sentirse escuchados.

Fue así que en 2017 se formalizó a Brazo Solidario como ONG, posicionándose desde una perspectiva centrada en la promoción de derechos y la educación, entendiendo a las infancias y adolescencias como sujetos de derechos, y apostando a una mirada integral que contemple sus distintas realidades y necesidades, la cual a día de hoy cuenta con 4 proyectos funcionando en conjunto por una red de casi 60 voluntarias y voluntarios, participando de ellos más de 250 infancias. Con presencia en Villa Española, Sayago, Pinar y su barrio de origen Villa Camila.

Cada fin de semana se movilizan recursos entre los proyectos para poder llevar merienda a todas las infancias, la cual se consigue mediante la financiación a través de rifas o venta de comida casera, ya que esta ONG lo que le sobra es amor, pero lo que le faltan son donaciones y padrinos. Lejos de frustrarse con esta situación cada año redoblan los esfuerzos para hacer llegar la calidez de los brazos a todas las infancias posibles.`,
    subtitulo: "",
    contenido2: `Brazo Solidario tiene cada año cuatro puntos claves para enfrentar: a principio de año una campaña de útiles escolares, con la llegada del invierno la campaña de abrigo para las infancia y sus familias, por último la campaña de recolección de juguetes para el día de la niñez y para la llegada del tan esperado por muchos “papá Noel”.

Aunque parezca una organización consolidada y uno de sus colores principales sea el verde, viven raspando los números rojos. Teniendo problemas para encontrar lugares estables en donde llevar a cabo las actividades, muchas veces pagando alquileres de salones sin ningún apoyo u otras veces realizando las jornadas al aire libre en plazas, tarea que con la entrada del invierno se dificulta en demasía y otras veces con mucho dolor teniendo que dar el cese de actividades a proyectos, como fue el caso de Safici ubicado en Ciudad del Plata, Sán Jose. Que frente a la falta de ingresos económicos y de un espacio para desarrollar correctamente las actividades no tuvieron más opción que suspender indefinidamente las tareas que llevaban a cabo.

Todo esto no sería posible sin el trabajo incansable de las y los voluntarios que conforman esta ONG, siendo muchas veces voluntarios y padrinos al mismo tiempo, esperando por parte del Estado, al cual se le ha pedido en varias ocasiones apoyo, según me llegaron a comentar integrantes con los que tuve el placer de conversar.

Frente a la falta de recursos, un Estado que se ausenta y una problemática urgente como es la pobreza infantil en Uruguay representando en 2026 un 32% (según datos proveídos por el INE), esta organización es un claro ejemplo de que a pesar de la mercantilización  cómo la acción colectiva puede engendrar de sus entrañas lo más bello de las personas: La comunidad.`,
    imagenes: [
      "/Imagenes/brazo.jpg",
      "/Imagenes/brazo4.jpg",
      "/Imagenes/brazo3.jpg",
      "/Imagenes/redalco2.jpg",
      "/Imagenes/redalco1.jpg",
    ],
    tituloIngles: "Redalco: a decade fighting food waste in Uruguay",
    contenidoIngles: `Every year, approximately 1.05 billion tons of food are wasted worldwide, while in Uruguay alone an estimated 125 million kilograms of fruits and vegetables are discarded. This situation highlights a striking paradox in a society where poverty and food insecurity continue to affect a growing number of families. In response to this challenge, the Red of Alimentos Compartidos (REDALCO) was founded in 2015 by a group of students and formally established in 2016. The organization was created to rescue fruits and vegetables that, despite being perfectly suitable for consumption, are often discarded due to their appearance, size, color, or simply because of overproduction. Since its creation, REDALCO has become a national leader in food recovery and redistribution, helping to reduce food waste while supporting thousands of families across Uruguay.
REDALCO's primary mission is to recover these foods and distribute them through social organizations that serve people in need. To achieve this goal, the organization operates through three key stages: collection, sorting, and redistribution. Food is collected from the Metropolitan Agrifood Unit (UAM) and from farms located throughout the country. It is then carefully sorted by a team of employees and volunteers before being delivered to schools, community kitchens, youth centers, and soup kitchens across Uruguay.
Over the years, REDALCO has experienced remarkable growth. In its early stages, the organization distributed just over 22,000 kilograms of food. By 2025, that figure had increased to approximately 1.6 million kilograms annually, representing more than seventy times its initial capacity. Today, REDALCO collaborates with over 400 organizations and contributes to the nutrition of approximately 50,000 people every week. This work has had a significant impact in a country where many families still struggle to access adequate and nutritious food.
Beyond its logistical efforts, REDALCO also seeks to raise awareness about the value of food that is frequently discarded for purely aesthetic reasons. The organization promotes the idea that products do not lose their nutritional value simply because they fail to meet commercial appearance standards. In addition, REDALCO encourages civic engagement through volunteer programs, food-sorting campaigns, and partnerships with private companies and public institutions.
REDALCO serves as an example of how social challenges can inspire collective action driven by compassion and commitment. In a society often characterized by individualism, the organization fosters cooperation between volunteers, businesses, and communities while simultaneously reducing the environmental impact of food waste. Its success demonstrates that, with determination and collaboration, it is possible to improve access to nutritious food for thousands of people.
`,
  },
  {
    id: 2,
    titulo: "cuando uruguay aprendio a ver a sus niños",
    autor: "Candela Ferreira",
    categoria: "INFANCIAS",
    descripcion: "Descripcion breve del artículo.",
    contenido: `El origen de las políticas de protección a la infancia en Uruguay no fue un acto
de generosidad, fue el resultado de décadas de lucha por reconocer que la niñez
tiene derechos.
Antes de 1934, los niños vulnerables en Uruguay dependían de la caridad
organizada: asilos privados, orfanatos y comisiones de beneficencia gestionaban su
cuidado sin que el Estado asumiera ninguna responsabilidad directa.
Ese año todo cambió con la promulgación del Código del Niño, una ley que
introdujo algo revolucionario para su época: la idea de que la infancia no es un
 objeto de compasión, sino un sujeto de derechos.`,
    subtitulo: "",
    contenido2: `Como consecuencia directa, el 6 de abril de 1934 nació el Consejo del Niño, el
primer organismo estatal especializado en el cuidado y la protección de niños, niñas
y adolescentes del país. Su creación marcó un punto de cambio el Estado dejó de
delegar en la caridad la responsabilidad de cuidar a los más vulnerables.
En sus primeros años, el Consejo organizó su trabajo por etapas del desarrollo
desde el período prenatal hasta la adolescencia, combinando perspectivas médicas,
jurídicas y sociales. Poco a poco, fue asumiendo la administración de los asilos y
orfanatos que antes dependían de la asistencia pública. Eran instituciones
residenciales, herencia de una época en que separar a un niño de su entorno
vulnerable parecía la solución.
A partir de 1967 comenzó una transformación más profunda: el organismo
adoptó un perfil más técnico y profesional. Las trabajadoras sociales, los psicólogos
y los educadores empezaron a ocupar un rol central. Los viejos asilos se
convirtieron en centros de observación y derivación. Se crearon policlínicas, hogares
de tránsito y programas de apoyo a las madres. La lógica pasó del encierro a la
intervención temprana.
El giro más significativo llegó en la década de 1980, cuando el Consejo del
Niño comenzó a incorporar un enfoque preventivo e interdisciplinario. Este cambio
se ajustó con los desarrollos globales en 1989, las Naciones Unidas adoptaron la
Convención sobre los Derechos del Niño, el tratado de derechos humanos más
ratificado de la historia. Uruguay la incorporó plenamente al Código de la Niñez y

Adolescencia en 2004, la ley que dio origen al nombre que conocemos hoy: Instituto
del Niño y Adolescente del Uruguay.
Hoy el INAU atiende a más de 106.000 niños, niñas y adolescentes en todo el país.
Organiza programas de primera infancia, clubes de tiempo libre y centros juveniles.
Pero también enfrenta una crisis que interpela a toda la población con muertes bajo
la responsabilidad del estado, un sistema de salud mental frágil y una preocupante
agenda de desinstitucionalización. Comprender sus orígenes noventa años de
historia es fundamental para entender por qué lo que le pasa al INAU le pasa a
Uruguay en su conjunto.
Cuidar a la infancia no es una política social más, ni un gasto presupuestal a
futuro, es el acto ético fundamental que justifica la existencia de un Estado. Un país
que no protege a sus niños no está construyendo su futuro, sino que está
comprometiendo su propia existencia ante la sociedad. Porque la forma en que
Uruguay mire, proteja y dignifique a sus niños hoy es, en última instancia, la medida
exacta de su propia humanidad y de su justicia, si fallamos en el origen, estamos
comprometiendo el destino. Por eso, aunque existan avances, la desigualdad y la
falta de oportunidades nos siguen planteando una pregunta incómoda y profunda:
¿qué tipo de sociedad pretendemos construir si permitimos que algunos niños
crezcan sin las mismas posibilidades que otros.`,
    imagenes: [
      "Imagenes/2articulo.pgn",
      "Imagenes/articuloinau.pgn",
      "Imagenes/",
      "Imagenes/",
      "Imagenes/",
    ],
    tituloIngles: "When Uruguay learned to see its children, in English",
    contenidoIngles: `Caring for children is not just another social policy, nor a future budget expense — it is the fundamental ethical act that justifies the existence of a State.
     A country that does not protect its children is not building its future; it is jeopardizing its own existence before society. Because the way Uruguay looks at, protects, and dignifies its children today is, ultimately, the exact measure of its own humanity and justice. If we fail at the origin, we are jeopardizing the destiny.
      That is why, even though progress has been made, inequality and the lack of opportunities continue to raise an uncomfortable and profound question for us: what kind of society do we intend to build if we allow some children to grow up without the same opportunities as others?`,
  },
  {
    id: 3,
    titulo: "Origen del FEMINISMO en Uruguay",
    autor: "Lucia Macellaro",
    categoria: "FEMINISMO",
    descripcion:
      "La historia de como el feminismo aparece y crece para asegurar los derechos de las muejeres en Uruguay",
    contenido: `El feminismo es un movimiento social, político y filosófico que busca la igualdad de derechos, oportunidades y libertades entre mujeres y hombres. Además, cuestiona las estructuras que perpetúan la desigualdad y la opresión por cuestiones de género promoviendo su transformación. 
Comenzó en el siglo XVIII durante la Revolución Francesa cuando comenzaron a difundirse las ideas  de igualdad, libertad y  derechos universales. Sin embargo, estos principios se aplicaban a los hombres dejando excluidas a las mujeres. Frente a esta contradicción, muchas mujeres comenzaron a reclamar el reconocimiento a sus derechos dando origen a las primeras reivindicaciones feministas. 
A lo largo de la historia, el feminismo ha tenido distintas etapas, llamadas olas del feminismo, cada una de ellas centrada en demandas y problemáticas específicas. A su vez, dentro del feminismo existen diversas corrientes que proponen distintas formas de comprender este movimiento. No obstante, el objetivo de conseguir la igualdad sigue siendo el mismo. 
Según Graciela Sapriza, los primeros movimientos del feminismo en Uruguay, comienzan en el año 1881, cuando el Comité de Mujeres Socialistas convocó a afiliarse a la Primera Internacional. En sus inicios, el movimiento estaba vinculado  al mundo del trabajo y a las corrientes sindicalistas, reclamando, entre otras demandas, igual salario para igual trabajo. 
Sin embargo fue con la maestra Paulina Luisi que el feminismo tomó fuerza y conciencia como tal en una lucha por conseguir el sufragio femenino. Se tenía la idea de que otorgarle el voto a las mujeres sería la llave para que las mujeres adquieran todos los derechos no obstante queda expuesto que sólo con el voto no es suficiente para que la igualdad entre hombres y mujeres sea efectiva.
El sufragio femenino fue aprobado en el año 1932 aunque debido al golpe de Estado de Terra no se pudo ejercer hasta las Elecciones Nacionales de 1938. Posteriormente, en 1942 ingresaron cuatro mujeres al Parlamento, cuyo trabajo logró la aprobación de la Ley de Derechos Civiles de la Mujer en 1846. Esta nueva ley cierra la primera etapa del feminismo en el país, al reconocer importantes derechos como comprar, administrar y vender bienes propios, compartir la administración de la sociedad conyugal, y el ejercicio de la patria potestad de sus hijos menores de edad, sin importar si hay un divorcio y un nuevo matrimonio. 
`,
    subtitulo: "",
    contenido2: `Mientras que en otras partes del mundo como Europa y Estado Unidos, durante los años sesenta comenzaba la segunda ola del feminismo, en Uruguay el proceso se vió interrumpido debido al inicio de la dictadura cívico-militar en junio de 1973. Durante los siguientes 12 años se restringieron varios derechos incluídos la libertad de expresión, lo que entorpeció la organización y  lucha del movimiento feminista.
Sobre lo que significó ese período para el feminismo en Uruguay,  Lilian Celiberti  escribió: “Venimos de un feminismo nacido de la resistencia al terrorismo de Estado, al autoritarismo y a la vejación del  cuerpo en la tortura y la cárcel. Un feminismo que tenía escasos conocimientos teóricos pero mucha rebeldía antiautoritaria y que asumió la escritura de un texto con borrones,  con tachaduras, con diferentes letras, con subrayados contradictorios, pero irreverente y autónomo”.
 Durante los meses finales de la dictadura, en 1984 en un contexto marcado por la censura y la represión, se realizaron las primeras expresiones públicas de movilización colectiva por el Día Internacional de la Mujer, el 8 de marzo.  Un grupo de mujeres se reunieron en la Plaza Cagancha para realizar un acto simbólico de colocar rosas en el Monumento de la Libertad. Las Fuerzas Armadas rodearon el espacio para evitarlo pero la acción sentó el precedente de ocupar el espacio público. Mientras tanto, la convocatoria PLEMUU logró evitar la vigilancia militar organizando un acto de resistencia barrial en Paso Molino. Este movimiento permitió visibilizar de manera colectiva las demandas de violencia de género junto con los reclamos de la recuperación democrática. 
Bajo la consigna de “lo privado es político”, se comenzó a cuestionar las desigualdades presentes en el hogar, además de las existentes en el ámbito público.  Al pasar las décadas el feminismo amplió sus reivindicaciones, tomando en cuenta otras formas de desigualdad e incorporando las perspectivas de distintos colectivos, como las mujeres afrodescendientes y los movimientos queer.
Con la llegada de la tercera ola del feminismo, en el año 1990 la marcha del 8M fue escenario de un aquelarre. Mujeres disfrazadas de brujas  marcharon por la Av. 18 de Julio. resignificando de manera creativa la historia de persecución de las mujeres independientes desafiando los estereotipos de género. 
El 8 de marzo de 2017 ocurrió el primer Paro Internacional de Mujeres que reunió a más de  150.000 mujeres en Uruguay. Esta convocatoria marcó un punto de inflexión para el movimiento feminista, fortaleciendo su visibilidad y consolidando el 8M como una de las principales manifestaciones sociales del país. Este último acontecimiento junto con el crecimiento del movimiento feminista durante la última década nos trajo el recordatorio que esta fecha de celebración sino una jornada de memoria, reflexión y reivindicación. También contribuyó a ampliar el conocimiento sobre qué es realmente el feminismo y a visibilizar problemáticas que, pese a décadas de lucha aún persisten.
También nos hace reflexionar de cómo estamos como sociedad, cuánto hemos avanzado y cuánto queda por recorrer. Aunque muchas de las reivindicaciones del feminismo hoy puedan parecer evidentes, las desigualdades y las distintas formas de violencia de género aún continúan presentes. 
Tal vez nos podamos preguntar cuándo dejaremos de surfear entre las olas y llegaremos al fin a la orilla. 
`,
    imagenes: [
      "/Imagenes/paulina-luisi.jpg",
       "/Imagenes/8m-1989.jpg",
      "/Imagenes/8m-fuego.jpg",
      "/Imagenes/brujas8m.jpg",
      "/Imagenes/8m-ladiaria.jpg",
    ],
    tituloIngles: "The Origins of the 8M March in Uruguay",
    contenidoIngles: `The 8M march is an annual mobilization that takes place every March 8th in different parts of the world to commemorate the International Women’s Day. It's a demonstration of advocacy and protest in which feminist movements, social organizations and labor unions take the street to demand equal rights and protest against the violence and discrimination faced by women.
In Uruguay, every year the 8M March brings together thousands of women in a purple tide marching along Av. 18 de Julio, in Montevideo, advocating for women’s rights social justice and ends with gender-based violence.
During the final months of the Uruguayan civic-military dictatorship in 1984, the first public expressions of collective mobilization for the International Women’s Day took place. In a context marked for censorship and repression, two pioneering actions were carried out. 
On the one hand, a group women gathered with the intention of holding a symbolic event placing roses in the Statue of Liberty in the Plaza Cagancha. The Armed Forces surrounded the place to prevent the act, but the action set a precedent for the occupation of public space. 
In parallel, the Women’s Plenary (PLEMUU) evaded part of the military surveillance and organized a neighborhood act of resistance in Paso Molino. This mobilization brought visibility to demands related to gender-based violence and the restoration of democracy. 
 In 1989 the movement held the first formal  and unified march. Various organizations participated in a mobilization from the Comisión Nacional Pro Referéndum to Plaza Libertad, where a declaration of women 's rights was read aloud. 
In 1990, breaking with the traditional solemnity, the Av. 18 de Julio  turned into a Witches Sabbath with the demonstrators dressed like witches. The event became known as the “La marcha de las Brujas” (The Witches March).  It was a creative way to reclaim the historical persecution of independent women.
Decades later, in 2017, this movement was renewed giving rise to a large-scale demonstration with significant social impact as we know today. On March 8th in Uruguay, The First International Women’s Strike took place, a call to action that exceeded all the expectations and marked a turning point in the history of the country’s feminist movement. Almost 300.000 protesters attended in Montevideo and the 8M was established as a central date on the agenda of feminist and social movements in Uruguay. 
This latest event also brought back the reminder that it is not a date to celebrate. Not yet. It is a day of advocacy until the goals of feminism are finally achieved. Ironically, in Uruguay, until recently, this date was used for commercial purposes to congratulate women and promote gifts such as chocolates, beauty products, and other actions that only served to widen the gap. Fortunately, today more girls and women have access to information that empowers themself. The journey ahead is long, but together we can make a difference. We will keep riding the waves until, one day, we reach the shore.`,
  },
  {
    id: 4,
    titulo: "El movimiento LGBT+ en Uruguay",
    autor: "Brisa Muñoz",
    categoria: "LGBT+",
    descripcion:
      "Una historia de resistencia: los colectivos que desafiaron la violencia estatal y abrieron camino a la igualdad de derechos",
    contenido: `Durante la dictadura, la comunidad LGBT+ era perseguida y secuestrada por los militares, y en los primeros años de democracia, la policía continuó ejerciendo violencia. Como única respuesta y forma de defenderse, los miembros de la comunidad comienzan a organizarse, creando los primeros colectivos en los cuales se protegían unos a otros y que más adelante llamaron a la concentración en espacios públicos como forma de manifestación.
 La Fundación Escorpio es de los primeros, originada en 1984 sus miembros se encargaron de repartir folletos avisando sobre las formas de la policía para detener a homosexuales y travestis, difundian la declaración de la O.M.S de que la homosexualidad no era una enfermedad y realizaban eventos culturales en el “Boliche Arcoíris”. Homosexuales Unidos apareció unos años después en 1988, era un grupo más diverso: gays, lesbianas y travestis, ya un poco más organizados incluso con una sede propia. Dentro de HU existía LESVENUS, un espacio conformado por mujeres lesbianas feministas. Fueron los primeros en tener propaganda masiva en diarios, radios y stickers, participaron de la coordinadora Anti-Razzias. HU fue parte de la primera concentración pública en junio de 1992.
De Homosexuales Unidos algunos ex miembros fundan el Movimiento de Integración Homosexual. En el mismo período se crea la Mesa Coordinadora de Travestis quienes trabajaron específicamente contra los prejuicios del VIH y la exclusión social. 
Estas organizaciones son las que en 1993 presentan una carta de solicitud a la Jefatura de Policía solicitando una marcha contra el SIDA y los derechos homosexuales y más adelante se encargaron de realizar lo que fue la primera marcha del orgullo en nuestro país.
En los 90s, con los gobiernos de Lacalle y Sanguinetti se avanzó lentamente en la construcción de un “modelo de integración”, en los que el Estado se comprometió a disminuir la violencia siempre que no exigieran visibilidad o igualdad de derechos. En 2002 llega la aprobación de la ley de trabajo sexual que legalizó la actividad y terminó socavando la vigilancia y el abuso de poder policial hacia personas del colectivo.
	Como los anteriormente nombrados fueron muchos los colectivos que pusieron voz y cuerpo a la lucha para abrirle el camino a las nuevas generaciones, así es como llegamos a la fundación de Ovejas Negras que es hoy el colectivo LGBT+ más presente y conocido en Uruguay.
`,
    subtitulo: "¿Cuál fue el origen del colectivo Ovejas Negras?",
    contenido2: ` Ya que en las organizaciones existentes de militancia LGBT+ sobraban conflictos internos y se percibía una sensación de estancamiento en el movimiento, ex integrantes y activistas independientes se unieron para formar un colectivo radicalmente distinto a los que lo precedían.
Hasta 2004 los grupos que se manifestaban lo hacían desde una “agenda liberal”, enfocada únicamente en cuestiones LGBT y sin pronunciarse sobre otros problemas sociales. Así es como un 23 de Diciembre se fundó un nuevo colectivo que es autónomo, de diversidad sexual, feminista, antirracista y de izquierda.
Plantearon la idea de que la discriminación por orientación sexual es parte de una problematica social más grande y que también se debe luchar en contra del racismo, el patriarcado y la desigualdad de clase. A este nuevo colectivo lo llamaron Ovejas Negras, un nombre caracterizado por la sátira social del colectivo y reivindicando el concepto para celebrar esas diferencias que en algún momento fueron obligados a ocultar.
Ovejas Negras promueve el cambio social, político y cultural desde una perspectiva interseccional buscando el reconocimiento de derechos LGBT+. Impulsaron y participaron en discusiones parlamentarias  logrando que se aprueben en nuestro país varias leyes claves: ley de unión concubinaria en 2007, ley de identidad de género en 2009 y la ley de matrimonio igualitario (que, además redactaron ellos) en 2013. En 2018 se aprueba también la ley integral para personas trans y al año siguiente, Ovejas Negras es quien lidera la campaña en su defensa. Llevaron a cabo una contra-campaña de recolección de firmas y una cadena nacional, logrando que el prerreferéndum que intentaba derogar la ley no tuviera validez. 
Si analizamos objetivamente el avance histórico desde el comienzo del movimiento hasta la fecha podemos notar grandes cambios que nos colocan frente al mundo como un país líder en materia de derechos LGBT+ con algunas de las leyes más liberales. Esos derechos conseguidos no hace tanto tiempo atrás, son luchas que comenzaron junto a la Fundación Escorpio o incluso antes de la misma y si bien ahora hay papeles que avalan esos avances, aún existen áreas grises que se ignoran permitiendo que se siga discriminando y que se manifiesten discursos de odio contra la comunidad.
A pesar de la lucha de todos estos colectivos aún podemos notar las grandes  diferencias de ser una persona de la comunidad en Montevideo y compararlo con ser una persona queer en el interior del país, lo que en la capital ya es mayoritariamente aceptado allí sigue siendo un tabú. Son varias las personas deben seguir ocultándose, escondiendo por temor a convertirse en la paria de su pueblo. Miembros de la comunidad que aún hoy ocultan y niegan su verdadera identidad u orientación sexual siguiendo la cultura heteronormativa que nos ha impuesto la sociedad durante años, aceptando matrimonios en los que no son felices por miedo de lo que su entorno social pueda decir o hacer en su contra. 
Es muy importante entender que los avances son aceptados y bienvenidos pero que la lucha no está cerca de su fin, hoy más que nunca hay que volver a poner el cuerpo y evitar retrocesos, ser para las futuras generaciones lo que los primeros movimientos fueron para nosotros.
`,
    imagenes: [
      "/Imagenes/4TAMARCHALGBT.jpg",
      "/Imagenes/OvejasNegrasLOGO.png",
      "/Imagenes/MARCHA1994.jpg",
      "/Imagenes/matrimonioIgualitario.jpg",
      "/Imagenes/matrimonioIgualitario2.jpg",
    ],
    tituloIngles: "Marriage Equality Law In Uruguay",
    contenidoIngles: `The story began long before the approval of the Marriage Equality Law in 2013. Between 2000 and 2004, members of the political left began presenting bills to recognize the rights of same-sex couples but none of them were approved. In 2008, the Civil Union Law recognized legal and property rights for same-sex couples. A year later, the Adoption Law was also modified to allow them to adopt children. Looking back, it took way too long for these rights to be recognized, considering how normal they seem nowadays.
The draft of the Marriage Equality Law was written by Michelle Suaréz, a transgender lawyer and member of Ovejas Negras. The goal was to remove all the gendered language from the definition of marriage. The law defined marriage as the union of two people regardless of sex, gender identity or sexual orientation. The terms “husband” and “wife” became “contracting parties”. It also guaranteed not only the right to adopt, as previously mentioned, but also access to assisted reproduction.
Although Michelle Suaréz was the one behind drafting the law, it was Sebastián Sabini, a deputy from Frente Amplio, the one who presented the draft to the Parliament and helped secure its approval. Despite receiving wide parliamentary support, the law was delayed by public hearings and then the Senate made modifications that required it to return to the Chamber of Deputies. Finally, the decisive vote took place in the Senate Chamber. With 23 votes in favor and 8 against, most of them from Frente Amplio, but with the support of some senators from the Partido Nacional and Partido Colorado, the law was approved. The ones who voted against it said that the law threatened the traditional concept of family, which they defined as a man, a woman and their children (In my opinion, a concept as old as Mirtha Legrand).
As if being delayed and sent back and forth through Parliament wasn't enough, a transcription error required a second corrective law, leaving Uruguay with two laws that together established marriage equality.
The approval of the Marriage Equality Law made Uruguay the second country in Latin America and the twelfth in the world to do so and also positioned us as one of the most LGBTQ+ friendly countries. 
Today, the Marriage Equality Law is remembered as a major milestone for the LGBTQ+ community. However, it also included a fragment prohibiting children under the age of sixteen from getting married. This surprised me and made me wonder why so many people who glorified and defended the concept of “traditional family” were outraged by two consenting adults getting married yet seemed far less concerned about the possibility of a child being forced into marriage, even if it was another child or even worse an adult.
 I’m aware I’m not  being completely objective in this article. Even when writing about history, an article like this will always reflect the writer's point of view, and I can say that proudly because I know where I stand.
`,
  },
];
// ── RUTAS ────────────────────────────────────────────────
// GET /articulos → devuelve todos los artículos
app.get("/articulos", (req, res) => {
  res.json(articulos);
});
// GET /articulos/:id → devuelve un artículo por id
app.get("/articulos/:id", (req, res) => {
  const id = Number(req.params.id);
  const articulo = articulos.find((a) => a.id === id);
  if (!articulo) {
    return res.status(404).json({ error: "Artículo no encontrado" });
  }
  res.json(articulo);
});
// POST /articulos → crea un artículo nuevo
app.post("/articulos", (req, res) => {
  const { titulo, autor, categoria, descripcion } = req.body;

  if (!titulo || !autor || !descripcion) {
    return res.status(400).json({
      error: "Los campos título, autor y descripción son obligatorios",
    });
  }
  const nuevo = {
    id: articulos.length + 1,
    titulo,
    autor,
    categoria: categoria || "Sin categoría",
    descripcion,
  };
  articulos.push(nuevo);
  res.status(201).json(nuevo);
});
// ── 404 ──────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});
// ── ERROR HANDLER ─────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ error: "Error interno del servidor" });
});
// ── INICIAR SERVIDOR ──────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
