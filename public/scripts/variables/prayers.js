const prayers = {
  start: {
    duration: 1000, // milliseconds
    text:
      "Por la señal de la Santa Cruz,/ de nuestros enemigos,/ líbranos Señor Dios nuestro./ En el nombre del Padre, del Hijo y del Espíritu Santo.",
  },
  petitions: {
    duration: 1000, // milliseconds
    text: "Intenciones",
  },
  actOfContrition: {
    // duration: 28000,
    duration: 1000, // milliseconds

    text:
      "Señor mío, Jesucristo, Dios y hombre verdadero,/ Creador y redentor mío, por ser tú quien eres/ y porque te amo sobre todas las cosas,/ me pesa de todo corazón haberte ofendido./ Quiero y propongo firmemente confesarme a su tiempo./ Ofrezco mi vida, obras y trabajos en satisfacción de mis pecados./ Y confío en que en tu bondad y misericordia infinita,/ me los perdonarás y me darás la gracia para no volverte a ofender./ Amén.",
  },
  ourFather: {
    // duration: 25000,
    duration: 1000, // milliseconds

    text:
      "Padre nuestro, que estás en el cielo./ Santificado sea tu nombre./ Venga tu reino./ Hágase tu voluntad en la tierra como en el cielo./ Danos hoy nuestro pan de cada día./ Perdona nuestras ofensas, como también/ nosotros perdonamos a los que nos ofenden./ No nos dejes caer en tentación/ y líbranos del mal./ Amén.",
  },
  hailMary: {
    // duration: 21000,
    duration: 1000, // milliseconds

    text:
      "Dios te salve, Maria./ Llena eres de gracia: El Seńor es contigo./ Bendita tú eres entre todas las mujeres./ Y bendito es el fruto de tu vientre: Jesús./ Santa María, Madre de Dios,/ ruega por nosotros pecadores,/ ahora y en la hora de nuestra muerte./ Amén.",
  },
  glory: {
    // duration: 10000,
    duration: 1000, // milliseconds

    text:
      "Gloria al Padre, al Hijo y al Espíritu Santo./ Como era en el principio, ahora y siempre, por los siglos de los siglos./ Amén.",
  },
  creed: {
    // duration: 40000,
    duration: 1000, // milliseconds

    text:
      "Creo en Dios, Padre todopoderoso,/ creador del Cielo y de la Tierra./ Creo en Jesucristo su único Hijo, Nuestro Seńor,/ que fue concebido por obra y gracia del Espíritu Santo;/ nació de Santa María Virgen;/ padeció bajo el poder de Poncio Pilato;/ fue crucificado, muerto y sepultado;/ descendió a los infiernos;/ al tercer día resucitó de entre los muertos;/ subió a los cielos y está a la diestra de Dios Padre;/ desde allí ha de venir a juzgar a los vivos y a los muertos./ Creo en el Espíritu Santo,/ en la Santa Iglesia Católica,/ la comumión de los Santos en el perdon de los pecados/ la resurrección de los muertos y la vida eterna./ Amén.",
  },
  signOfCross: {
    // duration: 6000,
    duration: 1000, // milliseconds

    text: "En el nombre del Padre,/ y del Hijo,/ y del Espíritu Santo./ Amén.",
  },
  jaculatoria: {
    // duration: 7000,
    duration: 1000, // milliseconds

    text:
      "María, Madre de Gracia y Madre de Misericordia./ En la vida y en la muerte ampáranos Gran Señora.",
  },
  jaculatoria2: {
    // duration: 7500,
    duration: 1000, // milliseconds

    text:
      "María, Madre de gracia, Madre de misericordia,/ defiéndenos de nuestros enemigos y ampáranos/ ahora y en la hora de nuestra muerte. Amén.",
  },
  jaculatoria3: {
    // duration: 8000,
    duration: 1000, // milliseconds

    text:
      "Oh Jesús, perdónanos nuestros pecados,/ sálvanos del fuego del infierno/ y guía todas las almas al Cielo,/ especialmente aquellas que necesitan más de tu misericordia.",
  },
  fatima: {
    // duration: 13000,
    duration: 1000, // milliseconds

    text:
      "Oh Jesús mío, perdona nuestros pecados/ y líbranos del fuego del infierno,/ lleva al cielo a todas las almas/ y socorre especialmente a las más necesitadas de tu misericordia./ Amén",
  },
  salve: {
    // duration: 31000,
    duration: 1000, // milliseconds

    text:
      "Dios te salve, Reina y Madre de misericordia,/ vida, dulzura y esperanza nuestra;/ Dios te salve. A Ti llamamos los desterrados hijos de Eva;/ a Ti suspiramos, gimiendo y llorando,/ en este valle de lágrimas./ Ea, pues, Señora, abogada nuestra,/ vuelve a nosotros esos tus ojos misericordiosos;/ y después de este destierro/ muéstranos a Jesús, fruto bendito de tu vientre./ ¡Oh clementísima,/ oh piadosa,/ oh dulce siempre Virgen María!/ Ruega por nosotros, Santa Madre de Dios,/ para que seamos dignos de alcanzar las promesas/ de Nuestro Señor Jesucristo./",
  },
  pope: {
    duration: 1000,
    text:
      "Un Padre nuestro, Avemaria y Gloria/ por las intenciones de Su Santidad el Papa/ y para ganar las indulgencias",
  },
  letaniasLauretanas: {
    duration: 1000,
    text: `
Señor, ten piedad/
Cristo, ten piedad/
Señor, ten piedad./
Cristo, óyenos./
Cristo, escúchanos./

Dios, Padre celestial, /
ten piedad de nosotros./

Dios, Hijo, Redentor del mundo, /
Dios, Espíritu Santo, /
Santísima Trinidad, un solo Dios,/

Santa María, /
ruega por nosotros./
Santa Madre de Dios,/
Santa Virgen de las Vírgenes,/
Madre de Cristo, /
Madre de la Iglesia, /
Madre de la misericordia, /
Madre de la divina gracia, /
Madre de la esperanza, /
Madre purísima, /
Madre castísima, /
Madre siempre virgen,/
Madre inmaculada, /
Madre amable, /
Madre admirable, /
Madre del buen consejo, /
Madre del Creador, /
Madre del Salvador, /
Virgen prudentísima, /
Virgen digna de veneración, /
Virgen digna de alabanza, /
Virgen poderosa, /
Virgen clemente, /
Virgen fiel, /
Espejo de justicia, /
Trono de la sabiduría, /
Causa de nuestra alegría, /
Vaso espiritual, /
Vaso digno de honor, /
Vaso de insigne devoción, /
Rosa mística, /
Torre de David, /
Torre de marfil, /
Casa de oro, /
Arca de la Alianza, /
Puerta del cielo, /
Estrella de la mañana, /
Salud de los enfermos, /
Refugio de los pecadores, /
Consuelo de los migrantes,/
Consoladora de los afligidos, /
Auxilio de los cristianos, /
Reina de los Ángeles, /
Reina de los Patriarcas, /
Reina de los Profetas, /
Reina de los Apóstoles, /
Reina de los Mártires, /
Reina de los Confesores, /
Reina de las Vírgenes, /
Reina de todos los Santos, /
Reina concebida sin pecado original,/ 
Reina asunta a los Cielos, /
Reina del Santísimo Rosario, /
Reina de la familia, /
Reina de la paz./

Cordero de Dios, que quitas el pecado del mundo, /
perdónanos, Señor./

Cordero de Dios, que quitas el pecado del mundo, /
escúchanos, Señor./

Cordero de Dios, que quitas el pecado del mundo, /
ten misericordia de nosotros./

Ruega por nosotros, Santa Madre de Dios. /
Para que seamos dignos de las promesas de Cristo./

ORACIÓN. /
Te rogamos nos concedas, /
Señor Dios nuestro, /
gozar de continua salud de alma y cuerpo, /
y por la gloriosa intercesión /
de la bienaventurada siempre Virgen María, /
vernos libres de las tristezas de la vida presente /
y disfrutar de las alegrías eternas. /
Por Cristo nuestro Señor. /
Amén. /
`,
  },
};
