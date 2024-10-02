const comicsContainer = document.getElementById("coleccion");
const comicsContainerList = document.getElementById("lista");
const comicsContainerLect = document.getElementById("lectura");
const comicsContainerExtra = document.getElementById("extras");
const comicsContainerOrigenes = document.getElementById("origenes")
    const comics = [
        {
            title: "Origenes Vol 1",
            img: "https://i1.whakoom.com/large/09/2b/f20f5c3a899b4507b085d982d23ae72d.jpg",
            description: "Explora el origen de los 4 Fantásticos, Hulk y Thor."
        },
        {
            title: "Origenes Vol 2",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXaXNWgqROBBJb0LtNnp6t94sSAPv-8bOVPg&s",
            description: "Explora el origen de Thor, Spiderman y Dr. Strange."
        },
        {
            title: "X-MEN: Fenix Oscura",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY1Rl_6Pn45_PkYPDULq3m1BCWG_w_FxO1ng&s",
            description: "Un relato épico de los X-MEN enfrentando a la Fénix Oscura."
        },
        {
            title: "La llegada de Galactus",
            img: "https://www.cope.es/blogs/cine-y-libertad/wp-content/uploads/sites/7/2020/01/los-4-fantasticosla-llegada-de-galactus-clave-para-entender-a-marvel.jpg",
            description: "Silver Surfer viene a la Tierra a avisar de la destrucción para saciar el hambre de su amo."
        },
        {
            title: "La muerte de Gwen Stacy",
            img: "https://m.media-amazon.com/images/I/61pvvkcCIzL._AC_UF894,1000_QL80_.jpg",
            description: "Un momento clave en la historia de Spider-Man."
        },
        {
            title: "IRON MAN: El demonio en la botella",
            img: "https://www.cuartomundo.cl/wp-content/uploads/2018/08/Invincible-Iron-man-128.jpg",
            description: "La lucha de Tony Stark contra su propia adicción: el alcoholismo."
        },
        {
            title: "Secret Wars 1984",
            img: "https://m.media-amazon.com/images/I/61KiaUc5h1L._SY580_.jpg",
            description: "Los héroes y villanos de Marvel se enfrentan en una batalla épica."
        },
        {
            title: "X-MEN: Días del futuro Presente",
            img: "https://i1.whakoom.com/large/0e/3e/9280a8c47e7345f08204b8b3100e192e.jpg",
            description: "Un hombre del futuro busca la seguridad de su pasado, regresa a aquellos a quienes amó, para salvarlos de un futuro de tiranía y muerte."
        },
        {
            title: "El Guantelete del infinito",
            img: "https://http2.mlstatic.com/D_NQ_NP_611654-MLM47678258155_092021-O.webp",
            description: "Thanos se ha adueñado de las Gemas del Infinito y las ha colocado en su guante izquierdo para formar el Guantelete del Infinito."
        },
        {
            title: "X-MEN: Genesis Mutante 2.0",
            img: "https://static.wixstatic.com/media/e9b21b_f5e75d2b043e4730b88dbfc9c06a89c4~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
            description: "Una nueva mirada a los orígenes de los X-Men."
        },
        {
            title: "Infinity War",
            img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1514241733i/37677683.jpg",
            description: "Adam Warlock toma posesión del Guantelete del Infinito, expulsa los aspectos buenos y malos de su ser para convertirse en un ser 100% lógico."
        },
        {
            title: "Avengers: Desunidos",
            img: "https://images.cdn2.buscalibre.com/fit-in/360x360/fd/97/fd974a78f386b1c2ade097b7344e14b1.jpg",
            description: "Los Avengers enfrentan su mayor desafío final después de años de proteger el mundo, lo que podría significar el fin del equipo."
        },
        {
            title: "Capitán América: El soldado del invierno",
            img: "https://images.cdn2.buscalibre.com/fit-in/360x360/9b/67/9b670f06f1eedfa839215bb771dccd86.jpg",
            description: "El regreso de un viejo amigo se convierte en un desafío."
        },
        {
            title: "New Avengers: Fuga",
            img: "https://www.smashmexico.com.mx/wp-content/uploads/2021/11/nuevos-avengers-la-fuga-salvat-portada.jpg",
            description: "Después de la disolución de los Avengers, un villano misterioso libera a cientos de villanos de la prisión de La Balsa."
        },
        {
            title: "Secret War 2004",
            img: "https://m.media-amazon.com/images/I/51FXRwPdBJL._SY1000_.jpg",
            description: "Los heroes luchan contra una organización secreta."
        },
        {
            title: "House of M",
            img: "https://m.media-amazon.com/images/I/51v4CnTCv9L._SY780_.jpg",
            description: "Un mundo alternativo donde los mutantes son los dominantes."
        },
        {
            title: "La Cruzada de los niños",
            img: "https://www.eslahoradelastortas.com/?attachment_id=16381",
            description: "¿Qué puedes decirme de los Jóvenes Vengadores, concretamente de los llamados Wiccan y Veloz? Puedo decirte, que no son tus nietos."
        },
        {
            title: "Avengers: Iluminati",
            img: "https://lumiere-a.akamaihd.net/v1/images/newavengersilluminatti1_fade7f53.jpeg?region=0,0,550,835",
            description: "Un grupo secreto de héroes que toma decisiones difíciles."
        },
        {
            title: "Capitán América: Civil War",
            img: "https://m.media-amazon.com/images/I/8178RfFOJSL._AC_UF894,1000_QL80_.jpg",
            description: "Una disputa entre el Capitan América y IRON MAN, heroes enfrentados por sus ideales."
        },
        {
            title: "World War Hulk",
            img: "https://m.media-amazon.com/images/I/9191ioH8sqL._AC_UF894,1000_QL80_.jpg",
            description: "Hulk regresa a la Tierra en busca de venganza."
        },
        {
            title: "Secret Invasion",
            img: "https://m.media-amazon.com/images/I/91+nuTpB+kL._AC_UF894,1000_QL80_.jpg",
            description: "Una invasión secreta que pone a prueba a los héroes."
        },
        {
            title: "Avengers: Siege",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBTNMmMXhkqBWATmeuyxEKV7CSsIqcbH62fA&s",
            description: "Los Vengadores enfrentan una crisis en su propia casa."
        },
        {
            title: "Shadowland",
            img: "https://www.elsotano.com/imagenes_grandes/7509997/750999704651.JPG",
            description: "Lester escapa de una lanzadera de balsa y regresa como Bullseye y va a cazar a Daredevil y a la Mano."
        },
        {
            title: "Fear Itself",
            img: "https://m.media-amazon.com/images/I/51tT20RZUFL._SY1000_.jpg",
            description: "Los héroes luchan contra Serpiente, una deidad Asgardiana que busca recuperar el Trono de Asgard."
        },
        {
            title: "Avengers vs X-MEN",
            img: "https://m.media-amazon.com/images/I/81M-B9isPOL._AC_UF894,1000_QL80_.jpg",
            description: "Un enfrentamiento titánico entre dos de los mayores grupos de héroes."
        },
        {
            title: "Avengers vs X-MEN Batallas",
            img: "https://m.media-amazon.com/images/I/519N2T-clLS._SY580_.jpg",
            description: "Las batallas más intensas entre Vengadores y X-Men."
        },
        {
            title: "Infinity",
            img: "https://m.media-amazon.com/images/I/815sbci-szL._AC_UF894,1000_QL80_.jpg",
            description: "Thanos y su Orden Negra aprovecharon la ausencia de los Héroes Más Poderosos de la Tierra en el planeta para arrasarlo."
        },
        {
            title: "Secret Wars 2015",
            img: "https://m.media-amazon.com/images/I/51Uh4Y-MSML._SY1000_.jpg",
            description: "El Universo Marvel tal como lo conoces se ha acabado. El Universo Ultimate tal como lo conoces se ha acabado."
        },
        {
            title: "Civil War 2",
            img: "https://m.media-amazon.com/images/I/819kcdItFcL._AC_UF894,1000_QL80_.jpg",
            description: "Los héroes se dividen una vez más por un nuevo conflicto. Una pelea entre los Vengadores y los Inhumanos."
        },
        {
            title: "King in Black",
            img: "https://m.media-amazon.com/images/I/51gbjGyesIL._SY580_.jpg",
            description: "La llegada de un nuevo enemigo que pone en jaque a todos."
        },
        {
            title: "Devil's Reign",
            img: "https://cdn.marvel.com/u/prod/marvel/i/mg/c/d0/62432e8cef8bf/clean.jpg",
            description: "En un intento por aumentar su poder, el alcalde Wilson Fisk ha prohibido a los superhéroes en la ciudad de Nueva York."
        },
        {
            title: "Old Man Logan",
            img: "https://m.media-amazon.com/images/I/91Z1FuafxKL._AC_UF1000,1000_QL80_.jpg",
            description: "Una historia de un Wolverine envejecido en un mundo devastado."
        },
        {
            title: "IRON MAN: Extremis",
            img: "https://img-cdn.hpb.com/normal/826663121193/0/0/300.jpg",
            description: "La reinvención de Iron Man para la nueva era."
        },
        {
            title: "Avengers: The Initiative",
            img: "https://m.media-amazon.com/images/I/71mf9sQhXKL._AC_UF894,1000_QL80_.jpg",
            description: "La Guerra Civil ha terminado y, a partir de aquí, ésta es la nueva cara del Universo Marvel: La Iniciativa. ¿De qué lado estabas tú durante la guerra?"
        },
        {
            title: "X-MEN: Días del futuro pasado",
            img: "https://storage.googleapis.com/scb22uploads/2018/09/xmen-dias-del-futuro-pasado-1.jpg",
            description: "Kate Pryde viaja a través del tiempo para evitar el asesinato del Senador Kelly y así poder salvar a toda la raza mutante."
        },
        {
            title: "4 Fantásticos vs X-Men",
            img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1552385226i/324899.jpg",
            description: "Reed Richard debe superar sus temores, ¡o dejar a la agonizante Kitty Pride en las manos de Dr. Doom!"
        },
        {
            title: "4 Fantásticos Perdurará la Tierra",
            img: "images/4F-Perdurara la tierra.png",
            description: "¡Hay que detener al otrora poderoso Galactus antes de que devore la Tierra! En Origenes V1"
        },
        {
            title: "Thor el Poderoso - Origen",
            img: "images/thor el poderoso.jpg",
            description: "¡El Origen de Thor en Origenes V1!"
        },
        {
            title: "La llegada de Hulk - Origen",
            img: "images/la llegada de Hulk.jpg",
            description: "El Origen del Increible Hulk en Origenes V1"
        },
        {
            title: "Hulk: El ha Vuelto",
            img: "images/el ha vuelto.jpg",
            description: "Bruce finalmente encuentra a Betty Ross... ¡en un convento! ¿Se dará cuenta la recién declarada Betty de su amor por Bruce una vez más?"
        },
        {
            title: "Thor: La Canción del Mjolnir",
            img: "images/la cancion del mjolnir.jpg",
            description: "Thor se enfreta a Jormungand en Origenes V2"
        },
        {
            title: "Spiderman - Introducción",
            img: "images/origen spiderman.png",
            description: "Conociendo al hombre araña en Origenes V2"
        },
        {
            title: "Dr. Strange: Maestro de Magia Negra",
            img: "images/dr strange maestro de la magia negra.jpg",
            description: "Conoce a Dr. Strange en Origenes V2"
        },
        {
            title: "Avengers: Ira de Ultron",
            img: "images/ira de ultron.jpg",
            description: "El androide genocida Ultron había sido disparado al espacio para nunca regresar… o eso creyeron."
        },
    ];

    const listComics = [
        {
            title: "The Thanos Quest",
            img: "https://m.media-amazon.com/images/I/51Nul8cIAhS._SY780_.jpg",
            description: "¡Thanos se embarca en la búsqueda definitiva del amor y la destrucción que lo consume todo!"
        },
        {
            title: "La Cruzada del Infinito",
            img: "https://m.media-amazon.com/images/I/71Q22N9uyBL._AC_UF894,1000_QL80_.jpg",
            description: "Adam Warlock enfrenta una nueva amenaza cuando la Entidad Universal manipula a los seres restaurados después de la Guerra del Infinito."
        },
        {
            title: "Maximun Carnage",
            img: "https://m.media-amazon.com/images/I/81F3wXIAJCL._AC_UF894,1000_QL80_.jpg",
            description: "Un enfrentamiento brutal entre Spider-Man y uno de sus enemigos más despiadados."
        },
        {
            title: "Era de Apocalipsis",
            img: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2016/05/593820-x-men-era-apocalipsis-review-crossover.jpg?tf=3840x",
            description: "Una realidad alternativa donde el villano Apocalipsis domina el mundo."
        },
        {
            title: "X-MEN: Onslaught",
            img: "https://m.media-amazon.com/images/I/51cUr8bfgTL._SY580_.jpg",
            description: "Un poderoso enemigo amenaza la existencia misma de los X-Men y los Vengadores."
        },
        {
            title: "X-MEN: Astonishing V1",
            img: "https://static.wixstatic.com/media/838854_cfa48824c7334362a4aaff22aa0922bd~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
            description: "Magneto lidera a los X-Men tras la muerte del Profesor X y se enfrenta a Apocalipsis. El comienzo de una nueva y sorprendente era para los X-Men."
        },
        {
            title: "X-MEN: Astonishing V2",
            img: "https://m.media-amazon.com/images/I/51sRHkRJDXL._SY580_.jpg",
            description: "Continuación de la aclamada saga de Joss Whedon y John Cassaday."
        },
        {
            title: "X-MEN: Decimation",
            img: "https://m.media-amazon.com/images/I/5168Gi69kAS._SY580_.jpg",
            description: "Las secuelas del Día M, donde el número de mutantes ha disminuido drásticamente."
        },
        {
            title: "Planeta Hulk",
            img: "https://www.zonanegativa.com/imagenes/2023/11/PlanetaHulkDestructorPortada.jpg",
            description: "Hulk es exiliado a un planeta alienígena, donde se convierte en un gladiador y líder revolucionario."
        },
        {
            title: "Annihilation",
            img: "https://m.media-amazon.com/images/I/71QytBIga-L._AC_UF894,1000_QL80_.jpg",
            description: "Derrotados y con un imperio en ruinas, Silver Surfer, Super-Skrull, Ronan y Nova deben unirse para enfrentar a Annihilus o morir."
        },
        {
            title: "Annihilation Conquest",
            img: "https://roguewatson.com/wp-content/uploads/2015/05/annihilation-conquest-omnibus.jpg?w=616",
            description: "Secuela de Annihilation, con nuevos y viejos héroes enfrentando una amenaza cibernética."
        },
        {
            title: "X-MEN: Messiah Complex",
            img: "https://upload.wikimedia.org/wikipedia/en/f/fc/X-Men_Messiah_Complex.jpg",
            description: "Nace el primer mutante nacido desde el Día M que podría decidir el destino de toda la humanidad."
        },
        {
            title: "Dark Reign",
            img: "https://upload.wikimedia.org/wikipedia/en/c/cf/Darkreign1.png",
            description: "Las consecuencias de Secret Invasion, al término de la desastrosa invasión skrull que dividió a un mundo ya fraccionado."
        },
        {
            title: "War of Kings",
            img: "https://upload.wikimedia.org/wikipedia/en/f/fe/War_of_Kings_1.jpg",
            description: "Una guerra entre el imperio Shi'ar liderado por los Vulcanos y el imperio Kree liderado por los Inhumanos."
        },
        {
            title: "Avengers: The Heroic Age",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0z5siZlaMXcDQRhds_BXyaNTORKNKb6kGcQ&s",
            description: "El regreso de los héroes tras la era oscura de Dark Reign, con una nueva esperanza para el universo Marvel."
        },
        {
            title: "Doom War",
            img: "https://m.media-amazon.com/images/I/91BZGbto5eL._AC_UF894,1000_QL80_.jpg",
            description: "Doctor Doom enfrenta a los héroes en un conflicto global que amenaza con cambiar el mundo."
        },
        {
            title: "Thanos Imperative",
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Thanos_Imperative_1.jpg/220px-Thanos_Imperative_1.jpg",
            description: "Nova, Silver Surfer y otros héroes cósmicos se enfrentan a una amenaza que podría superarlos. Sin embargo, tienen un plan audaz: recurrir a Thanos."
        },
        {
            title: "Spider Island",
            img: "https://m.media-amazon.com/images/I/710swI2ChPL._AC_UF894,1000_QL80_.jpg",
            description: "Spider-Man enfrenta una crisis en Nueva York donde todos adquieren poderes arácnidos."
        },
        {
            title: "Age of Ultron",
            img: "https://m.media-amazon.com/images/I/91U1-fJD96L._AC_UF894,1000_QL80_.jpg",
            description: "Ultron ha conquistado el mundo y los héroes deben encontrar una manera de detenerlo."
        },
        {
            title: "Original Sins",
            img: "https://m.media-amazon.com/images/I/71ShTzY5BwL._AC_UF894,1000_QL80_.jpg",
            description: "Uatu el Vigilante fue asesinado en su base en la Luna. Al encontrar su cadáver, Nick Fury comenzó una investigación junto con los Vengadores."
        },
        {
            title: "Axis",
            img: "https://m.media-amazon.com/images/I/817IANkxCvL._AC_UF894,1000_QL80_.jpg",
            description: "Red Skull ha aprovechado los dones del mayor telépata del mundo para difundir odio puro en todo el mundo."
        },
        {
            title: "Spiderverse",
            img: "https://m.media-amazon.com/images/I/81fdOe6LbdL._AC_UF894,1000_QL80_.jpg",
            description: "Spider-Man de diferentes universos deben unirse para enfrentar a un enemigo común."
        },
        {
            title: "Avengers: Standoff",
            img: "https://m.media-amazon.com/images/I/71MeRK7cJeL._AC_UF894,1000_QL80_.jpg",
            description: "En Pleasant Hill, una comunidad aparentemente amistosa esconde un oscuro secreto. ¡Los primeros pasos hacia Secret Empire comienzan aquí!"
        },
        {
            title: "X-MEN: Death of X",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShligeMh4PvElgob8rphnysdL2rSe0uBpgAQ&s",
            description: "Los X-Men y los Inhumanos se enfrentan en una lucha que marcará el destino de ambas razas."
        },
        {
            title: "Inhumanos vs X-MEN",
            img: "https://images.cdn2.buscalibre.com/fit-in/360x360/8d/e5/8de5696a1e602f8245a1f042b42acc1f.jpg",
            description: "Los Inhumanos y los X-Men entran en conflicto por la supervivencia de sus especies."
        },
        {
            title: "Venomverse",
            img: "https://upload.wikimedia.org/wikipedia/en/f/f9/Venomverse_1.jpg",
            description: "Venoms de diferentes universos se unen para luchar contra una amenaza que quiere destruirlos a todos."
        },
        {
            title: "The War of the Realms",
            img: "https://upload.wikimedia.org/wikipedia/en/8/8e/War_of_the_Realms_Vol_1_1.jpg",
            description: "Malekith lanza una guerra total en los Diez Reinos, y los héroes deben unirse para detenerlo."
        },
        {
            title: "Absolute Carnage",
            img: "https://m.media-amazon.com/images/I/81XJDre6LfL._AC_UF894,1000_QL80_.jpg",
            description: "Carnage regresa más peligroso que nunca, con el objetivo de cazar a todos los que han sido anfitriones de un simbionte."
        },
        {
            title: "House of X: Powers of X",
            img: "https://m.media-amazon.com/images/I/911idQZ7rsL._AC_UF894,1000_QL80_.jpg",
            description: "Mientras Xavier siembra las semillas del pasado, el futuro de los X-Men florece en problemas para todo el mundo mutante."
        },
        {
            title: "X of Swords",
            img: "https://ew.com/thmb/dR4oeVjoX4UyeLnb1bbB_jH4cnk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/XMen-4dcfe83515ce45828665c5b95746a924.jpg",
            description: "La oscura historia de Arakko pronto se revelará, y cuando lo haga, el futuro mismo de la humanidad mutante estará en juego."
        },
        {
            title: "Avengers: Secret Empire",
            img: "https://m.media-amazon.com/images/I/91B1U3aonYL._AC_UF894,1000_QL80_.jpg",
            description: "La controversia y el conflicto estallan cuando se revela que Steve Rogers, el Capitán América, ha sido un agente de HYDRA."
        },
        {
            title: "Reckoning War",
            img: "https://comicstoastonish.com/wp-content/uploads/2022/03/STL212027-scaled.jpg",
            description: "Un gran conflicto reaviva el multiverso, y los héroes de la Tierra deben enfrentar la venganza del amanecer del tiempo. Este es el día del juicio."
        },
        {
            title: "Judgment Day",
            img: "https://cdn.marvel.com/u/prod/marvel/i/mg/a/03/62d04560838d7/clean.jpg",
            description: "Los Vengadores, X-Men y Eternos se enfrentan en un juicio que decidirá el futuro de la humanidad."
        },
        {
            title: "Avengers: Empyre",
            img: "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2020/08/STL157292.jpg",
            description: "Los Avengers y los Cuatro Fantásticos unen fuerzas para detener una invasión alienígena que amenaza con destruir la Tierra."
        },
        {
            title: "Avengers: La Guerra Kree - Skrull",
            img: "images/portadakreeskrull.jpg",
            description: "Los despiadados Kree y los Skrulls que cambian de forma, han ido a la guerra, ¡y nuestro planeta está situado en el frente!"
        },
        {
            title: "Realm of Kings",
            img: "images/Realm_of_Kings_cover.jpg",
            description: "Continuación de la historia de 2009 War of Kings e introdujo el escenario conocido como Cancerverse ."
        },
        {
            title: "La Muerte de Wolverine",
            img: "images/la muerte de wolverine.jpg",
            description: "Ahora, despojado de su factor de curación, el X-Men y vengador encara su propia cita con la Parca. "
        },
        {
            title: "A la caza de Wolverine",
            img: "images/a la caza de wolverine.jpg",
            description: "¡La sepultura de Logan está vacía! ¿Alguien robó su cuerpo… o él se alzó de la tumba? ¡Se revelan secretos y se vuelven a abrir heridas!"
        },
        {
            title: "El regreso de Wolverine",
            img: "images/el regreso de wolverine.jpg",
            description: "Después de una vida de luchar por el bien, Wolverine sucumbió ante lo inevitable. Murió. ¡pero ahora está de regreso. ¿cómo? ¿ y por qué?"
        },
        {
            title: "La muerte del Capitán América",
            img: "images/la muerte del capitan america.jpg",
            description: "El relato que nunca creíste que llegarías a leer, un magnicidio cuyas repercusiones alcanzarán a todo el Universo Marvel."
        },
        {
            title: "Devils Reign: Compendio",
            img:"images/compendio devils reign.jpg",
            description: "El alcalde Fisk ha estado recopilando información sobre los superhéroes."
        }
    ];

    const lectComics = [
        {
            title: "La llegada de Galactus",
            img: "https://www.cope.es/blogs/cine-y-libertad/wp-content/uploads/sites/7/2020/01/los-4-fantasticosla-llegada-de-galactus-clave-para-entender-a-marvel.jpg",
            description: "Silver Surfer viene a la Tierra a avisar de la destrucción para saciar el hambre de su amo."
        },
        {
            title: "Avengers: La Guerra Kree - Skrull",
            img: "images/portadakreeskrull.jpg",
            description: "Los despiadados Kree y los Skrulls que cambian de forma, han ido a la guerra, ¡y nuestro planeta está situado en el frente!"
        },
        {
            title: "La muerte de Gwen Stacy",
            img: "https://m.media-amazon.com/images/I/61pvvkcCIzL._AC_UF894,1000_QL80_.jpg",
            description: "Un momento clave en la historia de Spider-Man."
        },
        {
            title: "IRON MAN: El demonio en la botella",
            img: "https://www.cuartomundo.cl/wp-content/uploads/2018/08/Invincible-Iron-man-128.jpg",
            description: "La lucha de Tony Stark contra su propia adicción: el alcoholismo."
        },
        {
            title: "X-MEN Fenix Oscura",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY1Rl_6Pn45_PkYPDULq3m1BCWG_w_FxO1ng&s",
            description: "Un relato épico de los X-MEN enfrentando a la Fénix Oscura."
        },
        {
            title: "X-MEN: Días del futuro pasado",
            img: "https://storage.googleapis.com/scb22uploads/2018/09/xmen-dias-del-futuro-pasado-1.jpg",
            description: "Kate Pryde viaja a través del tiempo para evitar el asesinato del Senador Kelly y así poder salvar a toda la raza mutante."
        },
        {
            title: "4 Fantásticos Perdurará la Tierra",
            img: "images/4F-Perdurara la tierra.png",
            description: "¡Hay que detener al otrora poderoso Galactus antes de que devore la Tierra! ¡A los Cuatro Fantásticos se les unen algunos amigos!"
        },
        {
            title: "Secret Wars 1984",
            img: "https://m.media-amazon.com/images/I/61KiaUc5h1L._SY580_.jpg",
            description: "Los héroes y villanos de Marvel se enfrentan en una batalla épica."
        },
        {
            title: "4 Fantásticos vs X-Men",
            img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1552385226i/324899.jpg",
            description: "Reed Richard debe superar sus temores, ¡o dejar a la agonizante Kitty Pride en las manos de Dr. Doom!"
        },
        {
            title: "The Thanos Quest",
            img: "https://m.media-amazon.com/images/I/51Nul8cIAhS._SY780_.jpg",
            description: "¡Thanos se embarca en la búsqueda definitiva del amor y la destrucción que lo consume todo!"
        },
        {
            title: "El Guantelete del infinito",
            img: "https://http2.mlstatic.com/D_NQ_NP_611654-MLM47678258155_092021-O.webp",
            description: "Thanos se ha adueñado de las Gemas del Infinito y las ha colocado en su guante izquierdo para formar el Guantelete del Infinito."
        },
        {
            title: "X-MEN: Genesis Mutante 2.0",
            img: "https://static.wixstatic.com/media/e9b21b_f5e75d2b043e4730b88dbfc9c06a89c4~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
            description: "Una nueva mirada a los orígenes de los X-Men."
        },
        {
            title: "Infinity War",
            img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1514241733i/37677683.jpg",
            description: "Adam Warlock toma posesión del Guantelete del Infinito, expulsa los aspectos buenos y malos de su ser para convertirse en un ser 100% lógico."
        },
        {
            title: "La Cruzada del Infinito",
            img: "https://m.media-amazon.com/images/I/71Q22N9uyBL._AC_UF894,1000_QL80_.jpg",
            description: "Adam Warlock enfrenta una nueva amenaza cuando la Entidad Universal manipula a los seres restaurados después de la Guerra del Infinito."
        },
        {
            title: "Maximun Carnage",
            img: "https://m.media-amazon.com/images/I/81F3wXIAJCL._AC_UF894,1000_QL80_.jpg",
            description: "Un enfrentamiento brutal entre Spider-Man y uno de sus enemigos más despiadados."
        },
        {
            title: "Era de Apocalipsis",
            img: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2016/05/593820-x-men-era-apocalipsis-review-crossover.jpg?tf=3840x",
            description: "Una realidad alternativa donde el villano Apocalipsis domina el mundo."
        },
        {
            title: "X-MEN: Onslaught",
            img: "https://m.media-amazon.com/images/I/51cUr8bfgTL._SY580_.jpg",
            description: "Un poderoso enemigo amenaza la existencia misma de los X-Men y los Vengadores."
        },
        {
            title: "Avengers: Desunidos",
            img: "https://images.cdn2.buscalibre.com/fit-in/360x360/fd/97/fd974a78f386b1c2ade097b7344e14b1.jpg",
            description: "Los Avengers enfrentan su mayor desafío final después de años de proteger el mundo, lo que podría significar el fin del equipo."
        },
        {
            title: "Secret War 2004",
            img: "https://m.media-amazon.com/images/I/51FXRwPdBJL._SY1000_.jpg",
            description: "Los heroes luchan contra una organización secreta."
        },
        {
            title: "X-MEN: Astonishing V1",
            img: "https://static.wixstatic.com/media/838854_cfa48824c7334362a4aaff22aa0922bd~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
            description: "Magneto lidera a los X-Men tras la muerte del Profesor X y se enfrenta a Apocalipsis. El comienzo de una nueva y sorprendente era para los X-Men."
        },
        {
            title: "X-MEN: Astonishing V2",
            img: "https://m.media-amazon.com/images/I/51sRHkRJDXL._SY580_.jpg",
            description: "Continuación de la aclamada saga de Joss Whedon y John Cassaday."
        },
        {
            title: "Capitán América: El soldado del invierno",
            img: "https://images.cdn2.buscalibre.com/fit-in/360x360/9b/67/9b670f06f1eedfa839215bb771dccd86.jpg",
            description: "El regreso de un viejo amigo se convierte en un desafío."
        },
        {
            title: "IRON MAN: Extremis",
            img: "https://img-cdn.hpb.com/normal/826663121193/0/0/300.jpg",
            description: "La reinvención de Iron Man para la nueva era."
        },
        {
            title: "New Avengers: Fuga",
            img: "https://www.smashmexico.com.mx/wp-content/uploads/2021/11/nuevos-avengers-la-fuga-salvat-portada.jpg",
            description: "Después de la disolución de los Avengers, un villano misterioso libera a cientos de villanos de la prisión de La Balsa."
        },
        {
            title: "House of M",
            img: "https://m.media-amazon.com/images/I/51v4CnTCv9L._SY780_.jpg",
            description: "Un mundo alternativo donde los mutantes son los dominantes."
        },
        {
            title: "X-MEN: Decimation",
            img: "https://m.media-amazon.com/images/I/5168Gi69kAS._SY580_.jpg",
            description: "Las secuelas del Día M, donde el número de mutantes ha disminuido drásticamente."
        },
        {
            title: "Avengers: Iluminati",
            img: "https://lumiere-a.akamaihd.net/v1/images/newavengersilluminatti1_fade7f53.jpeg?region=0,0,550,835",
            description: "Un grupo secreto de héroes que toma decisiones difíciles."
        },
        {
            title: "Planeta Hulk",
            img: "https://www.zonanegativa.com/imagenes/2023/11/PlanetaHulkDestructorPortada.jpg",
            description: "Hulk es exiliado a un planeta alienígena, donde se convierte en un gladiador y líder revolucionario."
        },
        {
            title: "Capitán América: Civil War",
            img: "https://m.media-amazon.com/images/I/8178RfFOJSL._AC_UF894,1000_QL80_.jpg",
            description: "Una disputa entre el Capitan América y IRON MAN, heroes enfrentados por sus ideales."
        },
        {
            title: "Annihilation",
            img: "https://m.media-amazon.com/images/I/71QytBIga-L._AC_UF894,1000_QL80_.jpg",
            description: "Derrotados y con un imperio en ruinas, Silver Surfer, Super-Skrull, Ronan y Nova deben unirse para enfrentar a Annihilus o morir."
        },
        {
            title: "Avengers: The Initiative",
            img: "https://m.media-amazon.com/images/I/71mf9sQhXKL._AC_UF894,1000_QL80_.jpg",
            description: "La Guerra Civil ha terminado y, a partir de aquí, ésta es la nueva cara del Universo Marvel: La Iniciativa. ¿De qué lado estabas tú durante la guerra?"
        },
        {
            title: "La muerte del Capitán América",
            img: "images/la muerte del capitan america.jpg",
            description: "El relato que nunca creíste que llegarías a leer, un magnicidio cuyas repercusiones alcanzarán a todo el Universo Marvel."
        },
        {
            title: "World War Hulk",
            img: "https://m.media-amazon.com/images/I/9191ioH8sqL._AC_UF894,1000_QL80_.jpg",
            description: "Hulk regresa a la Tierra en busca de venganza."
        },
        {
            title: "Annihilation Conquest",
            img: "https://roguewatson.com/wp-content/uploads/2015/05/annihilation-conquest-omnibus.jpg?w=616",
            description: "Secuela de Annihilation, con nuevos y viejos héroes enfrentando una amenaza cibernética."
        },
        {
            title: "X-MEN: Messiah Complex",
            img: "https://upload.wikimedia.org/wikipedia/en/f/fc/X-Men_Messiah_Complex.jpg",
            description: "Nace el primer mutante nacido desde el Día M que podría decidir el destino de toda la humanidad."
        },
        {
            title: "Secret Invasion",
            img: "https://m.media-amazon.com/images/I/91+nuTpB+kL._AC_UF894,1000_QL80_.jpg",
            description: "Una invasión secreta que pone a prueba a los héroes."
        },
        {
            title: "Dark Reign",
            img: "https://upload.wikimedia.org/wikipedia/en/c/cf/Darkreign1.png",
            description: "Las consecuencias de Secret Invasion, al término de la desastrosa invasión skrull que dividió a un mundo ya fraccionado."
        },
        {
            title: "War of Kings",
            img: "https://upload.wikimedia.org/wikipedia/en/f/fe/War_of_Kings_1.jpg",
            description: "Una guerra entre el imperio Shi'ar liderado por los Vulcanos y el imperio Kree liderado por los Inhumanos."
        },
        {
            title: "Realm of Kings",
            img: "images/Realm_of_Kings_cover.jpg",
            description: "Continuación de la historia de 2009 War of Kings e introdujo el escenario conocido como Cancerverse ."
        },
        {
            title: "Realm of Kings",
            img: "images/Realm_of_Kings_cover.jpg",
            description: "Continuación de la historia de 2009 War of Kings e introdujo el escenario conocido como Cancerverse ."
        },
        {
            title: "La Cruzada de los niños",
            img: "https://www.eslahoradelastortas.com/?attachment_id=16381",
            description: "¿Qué puedes decirme de los Jóvenes Vengadores, concretamente de los llamados Wiccan y Veloz? Puedo decirte, que no son tus nietos."
        },
        {
            title: "Avengers: Siege",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBTNMmMXhkqBWATmeuyxEKV7CSsIqcbH62fA&s",
            description: "Los Vengadores enfrentan una crisis en su propia casa."
        },
        {
            title: "Avengers: The Heroic Age",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0z5siZlaMXcDQRhds_BXyaNTORKNKb6kGcQ&s",
            description: "El regreso de los héroes tras la era oscura de Dark Reign, con una nueva esperanza para el universo Marvel."
        },
        {
            title: "Doom War",
            img: "https://m.media-amazon.com/images/I/91BZGbto5eL._AC_UF894,1000_QL80_.jpg",
            description: "Doctor Doom enfrenta a los héroes en un conflicto global que amenaza con cambiar el mundo."
        },
        {
            title: "Thanos Imperative",
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Thanos_Imperative_1.jpg/220px-Thanos_Imperative_1.jpg",
            description: "Nova, Silver Surfer y otros héroes cósmicos se enfrentan a una amenaza que podría superarlos. Sin embargo, tienen un plan audaz: recurrir a Thanos."
        },
        {
            title: "Shadowland",
            img: "https://www.elsotano.com/imagenes_grandes/7509997/750999704651.JPG",
            description: "Lester escapa de una lanzadera de balsa y regresa como Bullseye y va a cazar a Daredevil y a la Mano."
        },
        {
            title: "Fear Itself",
            img: "https://m.media-amazon.com/images/I/51tT20RZUFL._SY1000_.jpg",
            description: "Los héroes luchan contra Serpiente, una deidad Asgardiana que busca recuperar el Trono de Asgard."
        },
        {
            title: "Spider Island",
            img: "https://m.media-amazon.com/images/I/710swI2ChPL._AC_UF894,1000_QL80_.jpg",
            description: "Spider-Man enfrenta una crisis en Nueva York donde todos adquieren poderes arácnidos."
        },
        {
            title: "Avengers vs X-MEN",
            img: "https://m.media-amazon.com/images/I/81M-B9isPOL._AC_UF894,1000_QL80_.jpg",
            description: "Un enfrentamiento titánico entre dos de los mayores grupos de héroes."
        },
        {
            title: "Avengers vs X-MEN Batallas",
            img: "https://m.media-amazon.com/images/I/519N2T-clLS._SY580_.jpg",
            description: "Las batallas más intensas entre Vengadores y X-Men."
        },
        {
            title: "Age of Ultron",
            img: "https://m.media-amazon.com/images/I/91U1-fJD96L._AC_UF894,1000_QL80_.jpg",
            description: "Ultron ha conquistado el mundo y los héroes deben encontrar una manera de detenerlo."
        },
        {
            title: "Infinity",
            img: "https://m.media-amazon.com/images/I/815sbci-szL._AC_UF894,1000_QL80_.jpg",
            description: "Thanos y su Orden Negra aprovecharon la ausencia de los Héroes Más Poderosos de la Tierra en el planeta para arrasarlo."
        },
        {
            title: "Original Sins",
            img: "https://m.media-amazon.com/images/I/71ShTzY5BwL._AC_UF894,1000_QL80_.jpg",
            description: "Uatu el Vigilante fue asesinado en su base en la Luna. Al encontrar su cadáver, Nick Fury comenzó una investigación junto con los Vengadores."
        },
        {
            title: "Axis",
            img: "https://m.media-amazon.com/images/I/817IANkxCvL._AC_UF894,1000_QL80_.jpg",
            description: "Red Skull ha aprovechado los dones del mayor telépata del mundo para difundir odio puro en todo el mundo."
        },
        {
            title: "La Muerte de Wolverine",
            img: "images/la muerte de wolverine.jpg",
            description: "Ahora, despojado de su factor de curación, el X-Men y vengador encara su propia cita con la Parca. "
        },
        {
            title: "Spiderverse",
            img: "https://m.media-amazon.com/images/I/81fdOe6LbdL._AC_UF894,1000_QL80_.jpg",
            description: "Spider-Man de diferentes universos deben unirse para enfrentar a un enemigo común."
        },
        {
            title: "Secret Wars 2015",
            img: "https://m.media-amazon.com/images/I/51Uh4Y-MSML._SY1000_.jpg",
            description: "El Universo Marvel tal como lo conoces se ha acabado. El Universo Ultimate tal como lo conoces se ha acabado."
        },
        {
            title: "Avengers: Standoff",
            img: "https://m.media-amazon.com/images/I/71MeRK7cJeL._AC_UF894,1000_QL80_.jpg",
            description: "En Pleasant Hill, una comunidad aparentemente amistosa esconde un oscuro secreto. ¡Los primeros pasos hacia Secret Empire comienzan aquí!"
        },
        {
            title: "Civil War 2",
            img: "https://m.media-amazon.com/images/I/819kcdItFcL._AC_UF894,1000_QL80_.jpg",
            description: "Los héroes se dividen una vez más por un nuevo conflicto. Una pelea entre los Vengadores y los Inhumanos."
        },
        {
            title: "X-MEN: Death of X",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShligeMh4PvElgob8rphnysdL2rSe0uBpgAQ&s",
            description: "Los X-Men y los Inhumanos se enfrentan en una lucha que marcará el destino de ambas razas."
        },
        {
            title: "Inhumanos vs X-MEN",
            img: "https://images.cdn2.buscalibre.com/fit-in/360x360/8d/e5/8de5696a1e602f8245a1f042b42acc1f.jpg",
            description: "Los Inhumanos y los X-Men entran en conflicto por la supervivencia de sus especies."
        },
        {
            title: "Avengers: Secret Empire",
            img: "https://m.media-amazon.com/images/I/91B1U3aonYL._AC_UF894,1000_QL80_.jpg",
            description: "La controversia y el conflicto estallan cuando se revela que Steve Rogers, el Capitán América, ha sido un agente de HYDRA."
        },
        {
            title: "Venomverse",
            img: "https://upload.wikimedia.org/wikipedia/en/f/f9/Venomverse_1.jpg",
            description: "Venoms de diferentes universos se unen para luchar contra una amenaza que quiere destruirlos a todos."
        },
        {
            title: "Absolute Carnage",
            img: "https://m.media-amazon.com/images/I/81XJDre6LfL._AC_UF894,1000_QL80_.jpg",
            description: "Carnage regresa más peligroso que nunca, con el objetivo de cazar a todos los que han sido anfitriones de un simbionte."
        },
        {
            title: "A la caza de Wolverine",
            img: "images/a la caza de wolverine.jpg",
            description: "¡La sepultura de Logan está vacía! ¿Alguien robó su cuerpo… o él se alzó de la tumba? ¡Se revelan secretos y se vuelven a abrir heridas!"
        },
        {
            title: "El regreso de Wolverine",
            img: "images/el regreso de wolverine.jpg",
            description: "Después de una vida de luchar por el bien, Wolverine sucumbió ante lo inevitable. Murió. ¡pero ahora está de regreso. ¿cómo? ¿ y por qué?"
        },
        {
            title: "The War of the Realms",
            img: "https://upload.wikimedia.org/wikipedia/en/8/8e/War_of_the_Realms_Vol_1_1.jpg",
            description: "Malekith lanza una guerra total en los Diez Reinos, y los héroes deben unirse para detenerlo."
        },
        {
            title: "Avengers: Ira de Ultron",
            img: "images/ira de ultron.jpg",
            description: "El androide genocida Ultron había sido disparado al espacio para nunca regresar… o eso creyeron."
        },
        {
            title: "House of X: Powers of X",
            img: "https://m.media-amazon.com/images/I/911idQZ7rsL._AC_UF894,1000_QL80_.jpg",
            description: "Mientras Xavier siembra las semillas del pasado, el futuro de los X-Men florece en problemas para todo el mundo mutante."
        },
        {
            title: "X of Swords",
            img: "https://ew.com/thmb/dR4oeVjoX4UyeLnb1bbB_jH4cnk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/XMen-4dcfe83515ce45828665c5b95746a924.jpg",
            description: "La oscura historia de Arakko pronto se revelará, y cuando lo haga, el futuro mismo de la humanidad mutante estará en juego."
        },
        {
            title: "Avengers: Empyre",
            img: "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2020/08/STL157292.jpg",
            description: "Los Avengers y los Cuatro Fantásticos unen fuerzas para detener una invasión alienígena que amenaza con destruir la Tierra."
        },
        {
            title: "King in Black",
            img: "https://m.media-amazon.com/images/I/51gbjGyesIL._SY580_.jpg",
            description: "La llegada de un nuevo enemigo que pone en jaque a todos."
        },
        {
            title: "Devil's Reign",
            img: "https://cdn.marvel.com/u/prod/marvel/i/mg/c/d0/62432e8cef8bf/clean.jpg",
            description: "En un intento por aumentar su poder, el alcalde Wilson Fisk ha prohibido a los superhéroes en la ciudad de Nueva York."
        },
        {
            title: "Devils Reign: Compendio",
            img:"images/compendio devils reign.jpg",
            description: "El alcalde Fisk ha estado recopilando información sobre los superhéroes."
        },
        {
            title: "Reckoning War",
            img: "https://comicstoastonish.com/wp-content/uploads/2022/03/STL212027-scaled.jpg",
            description: "Un gran conflicto reaviva el multiverso, y los héroes de la Tierra deben enfrentar la venganza del amanecer del tiempo. Este es el día del juicio."
        },
        {
            title: "Judgment Day",
            img: "https://cdn.marvel.com/u/prod/marvel/i/mg/a/03/62d04560838d7/clean.jpg",
            description: "Los Vengadores, X-Men y Eternos se enfrentan en un juicio que decidirá el futuro de la humanidad."
        },
        {
            title: "Old Man Logan",
            img: "https://m.media-amazon.com/images/I/91Z1FuafxKL._AC_UF1000,1000_QL80_.jpg",
            description: "Una historia de un Wolverine envejecido en un mundo devastado."
        }
    ];
    const extraComics = [
        {
            title: "Black Widow: El hilo finamente tejido",
            img: "https://www.elsotano.com/imagenes_grandes/7509997/750999705562.JPG",
            description: "Durante una misión encubierta en Rusia, descubre que la Mano de Dios está por alcanzarla y es tan despiadada como su nombre."
        },
        {
            title: "X-Men: Agenda de extinción",
            img: "https://i1.whakoom.com/large/3d/3e/266cf2fb5549462689e5d57be4b6b897.jpg",
            description: "Cameron Hodge un loco amargado cuyo único anhelo es la venganza se vuelve la peor pesadilla de los equipos X."
        },
        {
            title: "Wolverine y Gambito: Víctimas",
            img: "https://http2.mlstatic.com/D_NQ_NP_915895-MLM43319998315_082020-O.webp",
            description: "Todo comienza con un asesinato, qué solo una persona pudo haber cometido... WOLVERINE!"
        },
        {
            title: "Punisher: Mata al universo Marvel",
            img: "https://i1.whakoom.com/large/3c/27/e679f8f0f2324975855d8b3ebb2ae1e5.jpg",
            description: "Su misión: matar a los responsables de la muerte de sus seres queridos. Uno por uno, grupo por grupo, Punisher intentará matarlos a todos."
        },
        {
            title: "¿Qué pasaría si Wolverine combatiera al arma X?",
            img: "https://static.wikia.nocookie.net/marveldatabase/images/2/29/What_If...%3F_Vol_1_62.jpg/revision/latest?cb=20080223042218",
            description: "En este universo, Logan jamás se convierte en Wolverine."
        },
        {
            title: "¿Qué pasaría si Stryfe y Apocalipsis aniquilaran a los X-MEN?",
            img: "https://static.wikia.nocookie.net/marveldatabase/images/1/1f/What_If...%3F_Vol_1_69.jpg/revision/latest?cb=20080223042246",
            description: "Apocalipsis es testigo, finalmente de la destrucción de los hombres."
        },
        {
            title: "Marvel Zombies",
            img: "https://upload.wikimedia.org/wikipedia/en/0/0d/Marvel_Zombies_hardcover.jpg",
            description: "Los héroes de Marvel enfrentan una amenaza zombi."
        },
        {
            title: "¡Thor Combate al Increíble Hulk!",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZuJFWEKOA7yQwdHwpYYyg1XIp3bjUrX6G1Q&s",
            description: "¿Quién es más fuerte: Thor o Hulk? Thor les cuenta la historia de cuando luchó contra Hulk bajo un hechizo."
        },
        {
            title: "La Última Corrida",
            img: "https://static.wikia.nocookie.net/marveldatabase/images/f/fe/Uncanny_X-Men_Vol_1_212.jpg/revision/latest?cb=20180426010712",
            description: "Una batalla entre Wolverine y Sabretooth."
        },
        {
            title: "Psylocke",
            img: "https://m.media-amazon.com/images/I/616hiy6mfvL._UF1000,1000_QL80_.jpg",
            description: "Dientes de Sable intenta entrar en la Mansión X, donde se amontonan los heridos Morlocks."
        },
        {
            title: "Punisher: Segunda Oportunidad",
            img: "https://cdn.marvel.com/u/prod/marvel/i/mg/6/90/583c6ae53137f/clean.jpg",
            description: "Cuando Sniper secuestra un helicóptero Apache, ¡Punisher y Microchip reúnen una unidad de tanques para perseguirlo!"
        }
    ];

    const origenesComics = [
        {
            title: "4 Fantásticos Perdurará la Tierra",
            img: "images/4F-Perdurara la tierra.png",
            description: "¡Hay que detener al otrora poderoso Galactus antes de que devore la Tierra! En Origenes V1"
        },
        {
            title: "Thor el Poderoso - Origen",
            img: "images/thor el poderoso.jpg",
            description: "¡El Origen de Thor en Origenes V1!"
        },
        {
            title: "La llegada de Hulk - Origen",
            img: "images/la llegada de Hulk.jpg",
            description: "El Origen del Increible Hulk en Origenes V1"
        },
        {
            title: "Hulk: El ha Vuelto",
            img: "images/el ha vuelto.jpg",
            description: "Bruce finalmente encuentra a Betty Ross... ¡en un convento! ¿Se dará cuenta la recién declarada Betty de su amor por Bruce una vez más?"
        },
        {
            title: "Thor: La Canción del Mjolnir",
            img: "images/la cancion del mjolnir.jpg",
            description: "Thor se enfreta a Jormungand en Origenes V2"
        },
        {
            title: "Spiderman - Introducción",
            img: "images/origen spiderman.png",
            description: "Conociendo al hombre araña en Origenes V2"
        },
        {
            title: "Dr. Strange: Maestro de Magia Negra",
            img: "images/dr strange maestro de la magia negra.jpg",
            description: "Conoce a Dr. Strange en Origenes V2"
        },
    ]
    
    // Total de comics, en orden de lectura
    document.addEventListener('DOMContentLoaded', function() {
        // Obtener el elemento donde mostrar el total
        const totalComicsElement = document.getElementById('totalComics');
        
        // Calcular el total de cómics y mostrarlo
        totalComicsElement.textContent = lectComics.length;
    });

    //Mi colección
    comics.forEach((comic, index) => {
        const comicCard = `
            <div class="imagen" data-title="${comic.title}">
                <div class="card">
                    <div class="card-front">
                        <img src="${comic.img}" alt="comic">
                    </div>
                    <div class="card-back">
                        <p>${comic.description}</p>
                    </div>
                </div>
                <h2 class="titulo-fijo">${index + 1}. ${comic.title}</h2>
            </div>
        `;
        comicsContainer.innerHTML += comicCard;
    });

    //Lista de deseos
    listComics.forEach((comic, index) => {
        const comicCard2 = `
            <div class="imagen" data-title="${comic.title}">
                <div class="card">
                    <div class="card-front">
                        <img src="${comic.img}" alt="comic">
                    </div>
                    <div class="card-back">
                        <p>${comic.description}</p>
                    </div>
                </div>
                <h2 class="titulo-fijo">${index + 1}. ${comic.title}</h2>
            </div>
        `;
        comicsContainerList.innerHTML += comicCard2;
    });

    //Orden de lectura
    lectComics.forEach((comic, index) => {
        const comicCard5 = `
            <div class="imagen" data-title="${comic.title}">
                <div class="card">
                    <div class="card-front">
                        <img src="${comic.img}" alt="comic">
                    </div>
                    <div class="card-back">
                        <p>${comic.description}</p>
                    </div>
                </div>
                <h2 class="titulo-fijo">${index + 1}. ${comic.title}</h2>
            </div>
        `;
        comicsContainerLect.innerHTML += comicCard5;
    });
    
    // Extras- What if
    extraComics.forEach(comic => {
        const comicCard3 = `
            <div class="imagen" data-title="${comic.title}">
                <div class="card">
                    <div class="card-front">
                        <img src="${comic.img}" alt="comic">
                    </div>
                    <div class="card-back">
                        <p>${comic.description}</p>
                    </div>
                </div>
                <h2 class="titulo-fijo">${comic.title}</h2>
            </div>
        `;
        comicsContainerExtra.innerHTML += comicCard3;
    });

    //Origenes
    origenesComics.forEach(comic => {
        const comicCard3 = `
            <div class="imagen" data-title="${comic.title}">
                <div class="card">
                    <div class="card-front">
                        <img src="${comic.img}" alt="comic">
                    </div>
                    <div class="card-back">
                        <p>${comic.description}</p>
                    </div>
                </div>
                <h2 class="titulo-fijo">${comic.title}</h2>
            </div>
        `;
        comicsContainerOrigenes.innerHTML += comicCard3
    });

    function filtrar() {
        //Declarar variables
        var input, filter, ul, listElements, i, txtValue;
        input = document.getElementById("search-input");
        filter = input.value.toUpperCase().replace(/[:\-]/g, '').normalize("NFD").replace(/[\u0300-\u036f]/g, '');
        ul = document.getElementById("elementos");
        listElements = ul.getElementsByTagName("li");
        var comics = document.querySelectorAll('.imagen');
      
        // Mostrar la lista solo si hay texto en el campo de entrada
      if (filter.length > 0) {
        ul.style.display = ""; // Muestra la lista
    
        // Recorrer todos los elementos de la lista y ocultar los que no coinciden
        for (i = 0; i < listElements.length; i++) {
          txtValue = listElements[i].textContent || listElements[i].innerText;
          txtValue = txtValue.toUpperCase().replace(/[:\-]/g, '').normalize("NFD").replace(/[\u0300-\u036f]/g, '');;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            listElements[i].style.display = "none"; // Mantiene la lista oculta
          } else {
            listElements[i].style.display = "none"; // Oculta los que no coinciden
          }
        }
    
        // Filtrar cómics
        comics.forEach(function(comic) {
            var comicTitle = comic.getAttribute('data-title').toUpperCase().replace(/[:\-]/g, '').normalize("NFD").replace(/[\u0300-\u036f]/g, '');;
            if (comicTitle.indexOf(filter) > -1) {
            comic.style.display = ""; // Muestra los cómics que coinciden
          } else {
            comic.style.display = "none"; // Oculta los que no coinciden
          }
        });
      } else {
        ul.style.display = "none"; // Oculta la lista si el campo de entrada está vacío
            comics.forEach(function(comic) {
            comic.style.display = ""; // Muestra todos los cómics si no hay filtro
        });
      }
    }
    
    //Funcionalidad del boton de Menu
    document.addEventListener("DOMContentLoaded", function() {
    const btnRojo = document.querySelector(".btnRojo"); // Selecciona el botón
    const menuDesplegable = document.querySelector("#menuDesplegable"); // Selecciona el menú desplegable
    const menuItems = menuDesplegable.querySelectorAll("a"); // Selecciona todos los elementos de menú dentro del menú desplegable


    // Función para alternar la visibilidad del menú desplegable
    function toggleMenu() {
        if (menuDesplegable.style.display === "block") {
            menuDesplegable.style.display = "none";
        } else {
            menuDesplegable.style.display = "block";
        }
    }

    // Maneja el clic en el botón
    btnRojo.addEventListener("click", function(event) {
        event.stopPropagation(); // Previene que el clic en el botón cierre el menú inmediatamente
        toggleMenu();
    });

    // Maneja el clic en el documento
    document.addEventListener("click", function(event) {
        // Verifica si el clic se realizó fuera del botón y del menú
        if (!btnRojo.contains(event.target) && !menuDesplegable.contains(event.target)) {
            menuDesplegable.style.display = "none";
        }
    });

    // Maneja el clic en los elementos del menú
    menuItems.forEach(item => {
    item.addEventListener("click", function() {
        menuDesplegable.style.display = "none";
    });
});
    
});

    
//Rotar tarjeta
// Detectar si es un dispositivo táctil
if (window.matchMedia('(hover: none)').matches) {
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('rotate');
        });
    });
}
