'use strict';

var MAY_2026_PDFS = {
  carta:'assets/docs/may-2026/carta-gastos-administrativos-mayo-2026.pdf',
  estado:'assets/docs/may-2026/estado-de-cuenta-propietarios-mayo-2026.pdf',
  liquidacion:'assets/docs/may-2026/liquidacion-gastos-mayo-2026.pdf'
};

var APR_2026_PDFS = {
  carta:'assets/docs/apr-2026/carta-gastos-administrativos-abril-2026.pdf',
  estado:'assets/docs/apr-2026/estado-de-cuentas-corrientes-abril-2026.pdf',
  liquidacion:'assets/docs/apr-2026/liquidacion-gastos-administrativos-abril-2026.pdf',
  arba:'assets/docs/apr-2026/arba-instructivo-y-partidas-abril-2026.pdf'
};

var PAGE_TITLES = {
  inicio:'Inicio',
  gastos:'Gastos Administrativos',
  liquidaciones:'Liquidaciones',
  documentos:'Comunicados',
  pago:'Datos de Pago',
  contacto:'Contacto'
};

var LIQUIDACIONES = [
  {
    id:'gm26may',
    title:'Carta de Gastos Adm. - Liquidación Mayo 2026',
    date:'Buenos Aires, junio de 2026',
    due:'Venc. 15/06/2026',
    amount:'$ 200.000',
    status:'Vigente',
    bodyHtml:'<div class="letter-content">' +
      '<div class="letter-kicker">Estimados propietarios:</div>' +
      '<p>Por medio de la presente, nos dirigimos a ustedes a fin de acercarles la liquidación correspondiente al mes de mayo de 2026, con vencimiento el día 15 de junio de 2026.</p>' +
      '<p>En los archivos adjuntos encontrarán la liquidación del período y el estado de cuenta de cada lote.</p>' +
      '<div class="letter-highlight"><strong>Importe Mayo 2026</strong>$ 200.000 (pesos doscientos mil) por lote.</div>' +
      '<div class="letter-payment"><strong>Forma de pago:</strong> Transferencia bancaria - <strong>Banco Ciudad</strong><br>CBU: 0290052010000571246961 | Alias: TRONCO.CIFRA.COATI<br>Email: <a href="mailto:lagodemanzanares.adm@gmail.com">lagodemanzanares.adm@gmail.com</a><br>Una vez realizada la transferencia, solicitamos enviar el comprobante de pago indicando el número de lote correspondiente para su correcta imputación.</div>' +
      '<div class="doc-actions"><a class="doc-action primary" href="' + MAY_2026_PDFS.carta + '" target="_blank" rel="noopener">Abrir carta PDF</a></div>' +
      '<div class="letter-signature">Atentamente,<br><strong>Administración Lago de Manzanares</strong></div>' +
    '</div>'
  },
  {
    id:'ga26',
    title:'Carta de Gastos Adm. - Liquidación Abril 2026',
    date:'Buenos Aires, mayo de 2026',
    due:'Venc. 15/05/2026',
    amount:'$ 200.000',
    status:'Cerrado',
    bodyHtml:'<div class="letter-content">' +
      '<div class="letter-kicker">Estimados propietarios:</div>' +
      '<p>Por medio de la presente, nos dirigimos a ustedes a fin de acercarles la liquidación correspondiente al mes de abril de 2026, con vencimiento el día 15 de mayo de 2026.</p>' +
      '<p>En los archivos adjuntos encontrarán la liquidación del período, el estado de cuenta de cada lote y el informe actualizado sobre los avances de obra.</p>' +
      '<div class="letter-highlight"><strong>Importe Abril 2026</strong>$ 200.000 (pesos doscientos mil) por lote.</div>' +
      '<div class="letter-payment"><strong>Forma de pago:</strong> Transferencia bancaria - <strong>Banco Ciudad</strong><br>CBU: 0290052010000571246961 | Alias: TRONCO.CIFRA.COATI<br>Email: <a href="mailto:lagodemanzanares.adm@gmail.com">lagodemanzanares.adm@gmail.com</a><br>Una vez realizada la transferencia, solicitamos enviar el comprobante de pago indicando el número de lote correspondiente para su correcta imputación.</div>' +
      '<div class="letter-highlight"><strong>Depósito no identificado</strong>Se registró un depósito a nombre de GIAIMO, PAULA PRISCILA. Solicitamos a la titular que se comunique a la brevedad con la administración para imputar correctamente dicho pago.</div>' +
      '<div class="letter-highlight"><strong>Importante</strong>Recordamos que el pago de los gastos administrativos mensuales es obligatorio para todos los propietarios. A partir del mes de mayo, la falta de pago en término generará intereses por mora del 4% mensual hasta la cancelación total de la deuda.</div>' +
      '<p>El desarrollador continúa cubriendo parte del déficit generado por la mora de algunos propietarios, situación que no resulta sostenible en el tiempo. Invitamos a regularizar las deudas vigentes y a cumplir con los vencimientos establecidos.</p>' +
      '<div class="doc-actions"><a class="doc-action primary" href="' + APR_2026_PDFS.carta + '" target="_blank" rel="noopener">Abrir carta PDF</a></div>' +
      '<div class="letter-signature">Atentamente,<br><strong>Administración Lago de Manzanares</strong></div>' +
    '</div>'
  },
  {
    id:'gm26',
    title:'Carta de Gastos Adm. - Liquidación Marzo 2026',
    date:'Buenos Aires, 1 de abril de 2026',
    due:'Venc. 15/04/2026',
    amount:'$ 200.000',
    status:'Cerrado',
    bodyHtml:'<div class="letter-content">' +
      '<div class="letter-kicker">Estimados propietarios:</div>' +
      '<p>Les enviamos la liquidación de gastos administrativos correspondiente al mes de marzo de 2026, con vencimiento el día 15 de abril de 2026.</p>' +
      '<p>En los archivos adjuntos encontrarán: la liquidación del período, el estado de cuenta individual de cada lote con el detalle de los períodos abonados y pendientes de pago, y un informe con los avances de trabajos y mejoras que se están realizando actualmente en el barrio.</p>' +
      '<p>Los gastos administrativos permiten sostener el funcionamiento del barrio y continuar con las mejoras necesarias. La administración puede mantener la gestión gracias al pago de los propietarios que se encuentran al día y al acompañamiento del desarrollador, que continúa colaborando para cubrir parte de los costos mientras se normaliza la situación general de pagos.</p>' +
      '<div class="letter-highlight"><strong>Plan de regularización</strong>Los períodos adeudados de los últimos 24 meses se liquidarán al valor de noviembre de 2025 ($100.000 mensuales por lote), sin intereses ni recargos. El monto total de referencia asciende a <strong>$2.400.000 por lote</strong>. Comuniquese con la administración para acordar su plan.</div>' +
      '<p>Respecto a la seguridad, el barrio cuenta con un móvil policial que presta servicio de lunes a lunes de 20:00 a 08:00 hs, y los sábados y domingos de 08:00 a 16:00 hs, permaneciendo en la zona del puente como punto de presencia y control.</p>' +
      '<div class="letter-highlight"><strong>Valor del gasto administrativo mensual</strong>$ 200.000 (pesos doscientos mil) por lote.</div>' +
      '<div class="letter-payment"><strong>Forma de pago:</strong> Transferencia bancaria | <strong>Banco Ciudad</strong><br>CBU: 0290052010000571246961 | Alias: TRONCO.CIFRA.COATI<br>Enviar comprobante a <a href="mailto:lagodemanzanares.adm@gmail.com">lagodemanzanares.adm@gmail.com</a> indicando número de lote.</div>' +
      '<div class="letter-signature">Atentamente,<br><strong>Administración Lago de Manzanares</strong></div>' +
    '</div>'
  },
  {
    id:'gf26',
    title:'Carta de Gastos Adm. - Liquidación Febrero 2026',
    date:'Buenos Aires, 2 de marzo de 2026',
    due:'Venc. 15/03/2026',
    amount:'$ 200.000',
    status:'Cerrado',
    bodyHtml:'<div class="letter-content">' +
      '<div class="letter-kicker">Estimados propietarios:</div>' +
      '<p>Adjuntamos al presente la liquidación correspondiente al mes de febrero, con vencimiento el día 15 de marzo. En la misma encontrarán el detalle de los conceptos vinculados a la administración del Club de Campo Lago de Manzanares.</p>' +
      '<p>Resulta necesario reiterar que la continuidad operativa del barrio se financia exclusivamente con el pago de los gastos administrativos mensuales. La gestión puede mantenerse gracias al cumplimiento de los propietarios que se encuentran al día y al acompañamiento económico que el desarrollador continúa brindando para cubrir necesidades operativas, hasta tanto se regularice la situación de pago en su totalidad.</p>' +
      '<p>Al mismo tiempo, se encuentran en ejecución distintas acciones orientadas a reorganizar y mejorar el barrio, incluyendo trabajos de limpieza y desmonte, relevamientos técnicos de infraestructura y optimización de servicios.</p>' +
      '<p>Respecto a la seguridad, el barrio cuenta con un móvil policial que presta servicio de lunes a lunes de 20:00 a 08:00 hs, y los días sábados y domingos de 08:00 a 16:00 hs, permaneciendo de manera fija en la zona del puente.</p>' +
      '<div class="letter-highlight"><strong>Valor del gasto administrativo mensual</strong>$ 200.000 (pesos doscientos mil) por lote.</div>' +
      '<div class="letter-payment"><strong>Forma de pago:</strong> Transferencia bancaria | <strong>Banco Ciudad</strong><br>CBU: 0290052010000571246961 | Alias: TRONCO.CIFRA.COATI<br>Enviar comprobante a <a href="mailto:lagodemanzanares.adm@gmail.com">lagodemanzanares.adm@gmail.com</a> consignando el número de lote.</div>' +
      '<div class="letter-signature">Atentamente,<br><strong>Administración Lago de Manzanares</strong></div>' +
    '</div>'
  },
  {
    id:'ge26',
    title:'Carta de Gastos Adm. - Liquidación Enero 2026',
    date:'Buenos Aires, 2 de febrero de 2026',
    due:'Venc. 15/02/2026',
    amount:'$ 200.000',
    status:'Cerrado',
    bodyHtml:'<div class="letter-content">' +
      '<div class="letter-kicker">Estimados lotistas:</div>' +
      '<p>Por medio de la presente, adjuntamos la liquidación correspondiente al mes de enero, en la cual podrán consultar el detalle de los movimientos vinculados a los conceptos de administración del Club de Campo Lago de Manzanares.</p>' +
      '<p>El cumplimiento regular de estas obligaciones por parte de los propietarios resulta fundamental para sostener el mantenimiento del barrio, garantizar condiciones mínimas de seguridad y avanzar en la normalización de los servicios, permitiendo progresivamente salir de la situación de precariedad extrema en la que se encuentra actualmente el emprendimiento.</p>' +
      '<p>La gestión actual se sostiene, en gran medida, gracias al cumplimiento de los pocos propietarios que se encuentran al día y a los aportes realizados por el desarrollador, los cuales revisten carácter de préstamo, hasta tanto se logre regularizar el cobro por la totalidad de los lotistas.</p>' +
      '<div class="letter-highlight"><strong>Valor del gasto administrativo mensual</strong>$ 200.000 (pesos doscientos mil) por lote.</div>' +
      '<div class="letter-payment"><strong>Modalidad de pago:</strong> Transferencia bancaria | <strong>Banco Ciudad</strong><br>CBU: 0290052010000571246961 | Alias: TRONCO.CIFRA.COATI<br>Enviar comprobante a <a href="mailto:lagodemanzanares.adm@gmail.com">lagodemanzanares.adm@gmail.com</a> indicando el número de lote.</div>' +
      '<div class="letter-signature">Atentamente,<br><strong>Administración Lago de Manzanares</strong></div>' +
    '</div>'
  },
  {
    id:'gd25',
    title:'Carta de Gastos Adm. - Período Diciembre 2025',
    date:'Buenos Aires, 7 de enero de 2026',
    due:'Venc. 15/01/2026',
    amount:'$ 200.000',
    status:'Cerrado',
    bodyHtml:'<div class="letter-content">' +
      '<div class="letter-kicker">Estimados lotistas:</div>' +
      '<p>Por medio de la presente, adjuntamos la liquidación correspondiente al período comprendido entre el 13 y el 31 de diciembre, en la cual podrán visualizar el detalle de los ingresos y egresos efectuados durante dicho lapso.</p>' +
      '<p>Asimismo, se acompaña el listado de quienes registran deuda en concepto de gastos administrativos. Solicitamos tengan a bien comunicarse con la Administración a fin de regularizar los períodos adeudados correspondientes a los últimos 24 meses, informando que, al momento, no se están aplicando intereses ni recargos.</p>' +
      '<p>La regularización de los importes adeudados es fundamental para la conformación de un fondo de reserva que permita afrontar los gastos mensuales esenciales del barrio. Contar con estos recursos es clave para avanzar de manera ordenada y responsable en la administración y mantenimiento del barrio.</p>' +
      '<div class="letter-highlight"><strong>Valor del gasto administrativo mensual</strong>$ 200.000 (pesos doscientos mil) por lote.</div>' +
      '<div class="letter-payment"><strong>Modalidad de pago:</strong> Transferencia electrónica | <strong>Banco Ciudad</strong><br>CBU: 0290052010000571246961 | Alias: TRONCO.CIFRA.COATI<br>Enviar comprobante a <a href="mailto:lagodemanzanares.adm@gmail.com">lagodemanzanares.adm@gmail.com</a> indicando número de lote.</div>' +
      '<div class="letter-signature">Atentamente,<br><strong>Administración Lago de Manzanares</strong></div>' +
    '</div>'
  }
];

var CC_APR26 = {
  periodo: "Abril 2026",
  lotes: [
    {lote:"A-1",nombre:"Garibaldi, Osvaldo",deuda:0},
    {lote:"A-2",nombre:"Aldaondo, Matias",deuda:800000},
    {lote:"A-10",nombre:"Palpacelli, Carlos Ariel",deuda:600000},
    {lote:"A-11",nombre:"Palpacelli, Carlos Ariel",deuda:600000},
    {lote:"A-12",nombre:"Palpacelli, Carlos Ariel",deuda:600000},
    {lote:"A-15",nombre:"Caputo, Nicolas Martin",deuda:800000},
    {lote:"A-16",nombre:"Caputo, Jose Luis",deuda:800000},
    {lote:"A-17",nombre:"Caputo, Jorge Antonio Nicolas",deuda:800000},
    {lote:"A-22",nombre:"Haberthal, Olga Andrea",deuda:800000},
    {lote:"A-23",nombre:"Haberthal, Olga Andrea",deuda:800000},
    {lote:"A-25",nombre:"Rossi, Marclo y Erut M. de los Angeles",deuda:800000},
    {lote:"A-26",nombre:"Rojas, Eva Celina y Luis Pastore",deuda:0},
    {lote:"A-29",nombre:"Izbisky, Mario Arian",deuda:800000},
    {lote:"A-30",nombre:"Agar, Patricio",deuda:800000},
    {lote:"A-32",nombre:"Gagliardo, Renato Lorenzo",deuda:800000},
    {lote:"A-33",nombre:"Gagliardo, Ruben Diego",deuda:800000},
    {lote:"A-36",nombre:"Woinilowicz, Jorge Eduardo",deuda:800000},
    {lote:"B-1",nombre:"Quintana, Juan Manuel",deuda:0},
    {lote:"B-2",nombre:"Beloli, Hugo Eduardo Claudio",deuda:800000},
    {lote:"B-3",nombre:"Colombo Nicolas",deuda:0},
    {lote:"B-7",nombre:"Palpacelli, Carlos Ariel",deuda:600000},
    {lote:"B-8",nombre:"Fernandez, Ricardo",deuda:800000},
    {lote:"B-9",nombre:"Palpacelli, Carlos Ariel",deuda:600000},
    {lote:"B-10",nombre:"Pascual, Gonzalo",deuda:600000},
    {lote:"B-11",nombre:"Pascual, Gonzalo",deuda:800000},
    {lote:"B-12",nombre:"Pascual, Gonzalo",deuda:800000},
    {lote:"B-13",nombre:"Cacios, Jorge Jose Eduardo",deuda:800000},
    {lote:"B-15",nombre:"Verardo, Maria Laura",deuda:800000},
    {lote:"B-16",nombre:"Villamayor F., Julio",deuda:0},
    {lote:"B-19",nombre:"Bivort, Marcela",deuda:800000},
    {lote:"B-20",nombre:"Baldini, Camilo",deuda:800000},
    {lote:"C-4",nombre:"Bardas Jorgue Eduardo y Casterllarin Gladys",deuda:400000},
    {lote:"C-7",nombre:"Elizalde, Hernan Ricardo",deuda:800000},
    {lote:"C-8",nombre:"Goldaracena, Isabel Maria",deuda:800000},
    {lote:"C-9",nombre:"Moyano, Walter Alejandro",deuda:800000},
    {lote:"C-15",nombre:"Jasminoy, Ignacio",deuda:0},
    {lote:"C-17",nombre:"De Gregorio, Juan Jose",deuda:800000},
    {lote:"C-18",nombre:"Marotta, Marcelo",deuda:800000},
    {lote:"C-20",nombre:"Saponare, Jaime",deuda:800000},
    {lote:"C-31",nombre:"Caputo, Monica Maria",deuda:800000},
    {lote:"C-32",nombre:"Caputo, Jorge Antonio Nicolas",deuda:800000},
    {lote:"C-33",nombre:"Caputo, Jose Luis",deuda:800000},
    {lote:"C-43",nombre:"Paz, Ignacio Mario",deuda:800000},
    {lote:"C-45",nombre:"Semorile, Alejandro Adolfo",deuda:800000},
    {lote:"C-46",nombre:"Semorile, Alejandro Adolfo",deuda:800000},
    {lote:"C-47",nombre:"Marquez, Graciela",deuda:0},
    {lote:"C-48",nombre:"Garat, Juan Martin",deuda:800000},
    {lote:"C-49",nombre:"Garat, Gaston",deuda:800000},
    {lote:"D-2",nombre:"Palpacelli, Carlos Ariel",deuda:600000},
    {lote:"D-5",nombre:"Brave. Marcelo",deuda:800000},
    {lote:"D-6",nombre:"Brave. Marcelo",deuda:800000},
    {lote:"D-11",nombre:"Ginepro, Maria Sol y Sario, Rodrigo",deuda:800000},
    {lote:"D-20",nombre:"Walpen, Karina Rosana",deuda:0},
    {lote:"E-1",nombre:"Lansa SA",deuda:800000},
    {lote:"E-2",nombre:"Sartori, Maria Adela",deuda:800000},
    {lote:"E-3",nombre:"Lastra, Patricio",deuda:800000},
    {lote:"E-4",nombre:"Lastra, Patricio",deuda:800000},
    {lote:"E-5",nombre:"Sartori, Maria Clemencia",deuda:0},
    {lote:"E-6",nombre:"Sartori, Maria Clemencia",deuda:0},
    {lote:"E-14",nombre:"Caputo, Monica Maria",deuda:800000},
    {lote:"E-15",nombre:"Vazquez, Roberto Gustavo",deuda:800000},
    {lote:"E-16",nombre:"Clauser, Lazaro",deuda:800000},
    {lote:"E-17",nombre:"Haberthal, Olga Andrea",deuda:800000},
    {lote:"E-18",nombre:"Haberthal, Olga Andrea",deuda:800000},
    {lote:"E-19",nombre:"Giachino, Diego",deuda:600000},
    {lote:"E-20",nombre:"Frias, Alejandro",deuda:800000},
    {lote:"E-21",nombre:"Frias, Alejandro",deuda:800000},
    {lote:"F-2",nombre:"Stabile Virginia",deuda:0},
    {lote:"F-4",nombre:"Hugues, Felipe",deuda:800000},
    {lote:"F-5",nombre:"Elizalde, Hernan",deuda:800000},
    {lote:"F-6",nombre:"Garibaldi, Osvaldo",deuda:0},
    {lote:"F-7",nombre:"Leonardi, Carlos",deuda:800000},
    {lote:"F-8",nombre:"Najo, Susana",deuda:0},
    {lote:"F-9",nombre:"Najo, Susana",deuda:0},
    {lote:"F-10",nombre:"Bitensky, Carlos Alterto",deuda:0},
    {lote:"F-11",nombre:"de Alzaga, Clara",deuda:400000},
    {lote:"F-12",nombre:"de Alzaga, Clara",deuda:400000},
    {lote:"F-13",nombre:"Stabile, Mauro",deuda:400000},
    {lote:"F-14",nombre:"Liberatore Diana y Rotaeche Luis",deuda:800000},
    {lote:"F-15",nombre:"Caputo, Nicolas Martin",deuda:800000},
    {lote:"F-16",nombre:"Caputo, Jorge Antonio Nicolas",deuda:800000},
    {lote:"F-19",nombre:"Haberthal, Olga Andrea",deuda:800000},
    {lote:"F-21",nombre:"Rotaeche, Luis Maria",deuda:800000},
    {lote:"F-22",nombre:"Otero, Jesus",deuda:800000},
    {lote:"G-1",nombre:"Tea Time SA - Pablo Regis",deuda:800000},
    {lote:"G-2",nombre:"Caputo, Nicolas Martin",deuda:800000},
    {lote:"G-3",nombre:"Caputo, Jose Luis",deuda:800000},
    {lote:"G-4",nombre:"Caputo, Jorge Antonio Nicolas",deuda:800000},
    {lote:"G-5",nombre:"Kirschenbaum, Hector y Veronica",deuda:800000},
    {lote:"G-6",nombre:"Kirschenbaum, Hector y Veronica",deuda:800000},
    {lote:"G-7",nombre:"Otero, Jesus",deuda:800000},
    {lote:"G-9",nombre:"Lopez, Fernando - Chamson, Axel",deuda:0},
    {lote:"G-10",nombre:"Lopez, Fernando y Beliera Norma - Chamson, Axel",deuda:0},
    {lote:"G-11",nombre:"Armiento de Chamson,",deuda:0},
    {lote:"G-12",nombre:"Lago, Marcela",deuda:400000},
    {lote:"G-13",nombre:"Gimenez Natale, M. Ines y Ottonello Miguel A.",deuda:0},
    {lote:"G-14",nombre:"Ottonello Miguel A. y Gimenez Natale, M. Ines",deuda:0},
    {lote:"G-16",nombre:"Fragale, Guillermo",deuda:0},
    {lote:"G-17",nombre:"Imas, Luis Alberto",deuda:800000},
    {lote:"G-20",nombre:"Saponare, Jaime",deuda:800000},
    {lote:"H-1",nombre:"Facino, Ivana Carina",deuda:800000},
    {lote:"H-7",nombre:"Alvarez, Francisco",deuda:800000},
    {lote:"H-10",nombre:"Sabile, Diego Javier",deuda:0},
    {lote:"H-12",nombre:"Paz, Ignacio Mario",deuda:0},
    {lote:"H-13",nombre:"Graziano, Gabriel",deuda:0},
    {lote:"H-17",nombre:"Colombo, Nicolas",deuda:0},
    {lote:"H-18",nombre:"Colombo, Nicolas",deuda:0},
    {lote:"I-1",nombre:"Iturburu, Juan y Sartori M. Clemencia",deuda:0},
    {lote:"I-2",nombre:"Iturburu, Juan y Sartori M. Clemencia",deuda:800000},
    {lote:"I-3",nombre:"Iturburu, Juan y Sartori M. Clemencia",deuda:800000},
    {lote:"I-4",nombre:"Iturburu, Juan y Sartori M. Clemencia",deuda:800000},
    {lote:"I-5",nombre:"Otero, Jesus",deuda:800000},
    {lote:"I-6",nombre:"Thibaud, Maximo Pedro",deuda:800000},
    {lote:"I-7",nombre:"Thibaud, Maximo Pedro",deuda:800000},
    {lote:"I-10",nombre:"Palla, Federico y Manzelli, Natacha",deuda:0},
    {lote:"I-11",nombre:"Imas, Luis Alberto",deuda:800000},
    {lote:"I-12",nombre:"Tutina SA",deuda:0},
    {lote:"I-13",nombre:"Isabella, Diego",deuda:0},
    {lote:"I-14",nombre:"Agroleg",deuda:800000},
    {lote:"I-15",nombre:"Valle, Oscar Raul y Marina",deuda:0},
    {lote:"I-16",nombre:"Caputo, Jose Luis",deuda:800000},
    {lote:"I-17",nombre:"Caputo, Jose Luis",deuda:800000},
    {lote:"I-18",nombre:"Caputo, Jose Luis",deuda:800000},
    {lote:"J-1",nombre:"Iturburu, Juan y Sartori M. Clemencia",deuda:0},
    {lote:"J-2",nombre:"Iturburu, Juan y Sartori M. Clemencia",deuda:0},
    {lote:"J-4",nombre:"Novillo Almada, Facundo",deuda:0},
    {lote:"J-5",nombre:"Tutina SA",deuda:0},
    {lote:"J-6",nombre:"Isabella, Sebastian",deuda:0},
    {lote:"J-7",nombre:"Cazenave, Bernardo y Fernandez Nogues, Maria G.",deuda:800000},
    {lote:"J-8",nombre:"Morales, Adriana Marcela",deuda:800000},
    {lote:"J-10",nombre:"Gioviazzo, Laura",deuda:800000},
    {lote:"J-11",nombre:"Palpacelli, Carlos Ariel",deuda:600000},
    {lote:"K-1",nombre:"Vaca, Mario Gustavo",deuda:800000},
    {lote:"K-2",nombre:"Acuña, Hector Javier",deuda:0},
    {lote:"K-3",nombre:"Caputo, Jorge Antonio Nicolas",deuda:800000},
    {lote:"K-4",nombre:"Caputo, Jose Luis",deuda:800000},
    {lote:"K-6",nombre:"Salaberry de Escayola, Virginia",deuda:0},
    {lote:"K-7",nombre:"Salaberry de Escayola, Virginia",deuda:0},
    {lote:"K-8",nombre:"Wilson, Ines del Campo",deuda:800000},
    {lote:"L-1",nombre:"Brun M. Josefina y Brun Tomas",deuda:0},
    {lote:"L-2",nombre:"Palpacelli, Carlos Ariel",deuda:600000},
    {lote:"L-8",nombre:"Brave. Marcelo",deuda:800000},
    {lote:"L-9",nombre:"Brave. Marcelo",deuda:800000},
    {lote:"L-10",nombre:"Imas, Luis Alberto",deuda:800000},
    {lote:"L-11",nombre:"Imas, Luis Alberto",deuda:800000},
    {lote:"L-14",nombre:"Sabile, Diego Javier",deuda:800000},
    {lote:"M-1",nombre:"Lopez, Fernando y Beleira, Norma Beatriz",deuda:0},
    {lote:"M-2",nombre:"Palla, Federico y Manzelli, Natacha",deuda:0},
    {lote:"M-4",nombre:"Letang, Gabriel Dario",deuda:0},
    {lote:"M-5",nombre:"Woinilowicz, Jorge Eduardo",deuda:800000},
    {lote:"M-6",nombre:"Garcia, Carlos Alberto",deuda:800000},
    {lote:"M-12",nombre:"Caputo, Jose Luis",deuda:800000},
    {lote:"M-13",nombre:"Vazquez, Roberto Gustavo",deuda:800000},
    {lote:"M-14",nombre:"Caputo, Nicolas Martin",deuda:800000},
    {lote:"M-15",nombre:"Palpacelli, Carlos Ariel",deuda:600000},
    {lote:"M-16",nombre:"Palpacelli, Carlos Ariel",deuda:600000},
    {lote:"M-17",nombre:"Palpacelli, Carlos Ariel",deuda:600000},
    {lote:"M-18",nombre:"Carcarami Matias Juan y Cervin, Liliana",deuda:800000},
    {lote:"N-6",nombre:"Coffey",deuda:800000},
    {lote:"N-7",nombre:"Otero, Jesus",deuda:800000},
    {lote:"N-8",nombre:"Fidel, Sara",deuda:200000},
    {lote:"N-9",nombre:"Chamson, Axel",deuda:0},
    {lote:"N-10",nombre:"Figueroa, Julio Santiago",deuda:800000},
    {lote:"N-11",nombre:"Jasminoy, Ignacio",deuda:0},
    {lote:"N-12",nombre:"Jasminoy, Hector Iseo",deuda:200000},
    {lote:"N-14",nombre:"Graziano, Gabriel",deuda:0},
    {lote:"N-15",nombre:"Villavicencio, Juan Martin",deuda:800000},
    {lote:"O-3",nombre:"Calderon Oña, Juan Carlos",deuda:0},
    {lote:"O-4",nombre:"Tello, German",deuda:0},
    {lote:"O-5",nombre:"Goldschtein, Javier",deuda:200000},
    {lote:"O-6",nombre:"Diaz, Paula Mariana",deuda:800000},
    {lote:"O-7",nombre:"Weiss, Vernon Roy",deuda:0},
    {lote:"O-8",nombre:"Bunge, Diego",deuda:800000},
    {lote:"Q-2",nombre:"Segovia, Diego",deuda:600000},
    {lote:"Q-4",nombre:"Casaux Alsina, Santiago",deuda:0},
    {lote:"Q-6",nombre:"Caputo, Jorge Antonio Nicolas",deuda:800000},
    {lote:"Q-57",nombre:"Garibaldi, Osvaldo",deuda:800000},
    {lote:"Y-8",nombre:"Suarez, Alejandro y Ferrini, Adrian",deuda:800000},
    {lote:"Y-9",nombre:"Williner, Miguel",deuda:800000},
    {lote:"Y-11",nombre:"Candiotti, Florencia",deuda:800000},
    {lote:"Y-22",nombre:"Sojo, Ernesto Tomas",deuda:800000},
    {lote:"Y-25",nombre:"Caputo, Monica Maria",deuda:800000},
    {lote:"Y-26",nombre:"Vazquez, Roberto Gustavo",deuda:800000},
    {lote:"Y-27",nombre:"Malvicchini, Enrique Francisco",deuda:0},
    {lote:"Y-28",nombre:"Acevedo de Lucchia Puig, Florencia",deuda:800000},
    {lote:"Y-29",nombre:"Bunge, Diego",deuda:800000},
    {lote:"Y-30",nombre:"Woinilowicz, Jorge Eduardo",deuda:800000},
    {lote:"Y-32",nombre:"Blanco, Jorge Osvaldo",deuda:800000},
    {lote:"Y-35",nombre:"Barciela, Norberto y Gambin, Graciela",deuda:800000},
    {lote:"Y-36",nombre:"Alvarez, Francisco",deuda:800000},
    {lote:"Y-37",nombre:"Pujol, Flavio Luis",deuda:800000},
    {lote:"Y-38",nombre:"Puletti, Alberto",deuda:0},
    {lote:"Y-39",nombre:"Aguilera, Omar Ariel",deuda:800000},
    {lote:"Y-40",nombre:"Otero, Jesus",deuda:800000},
    {lote:"Z-24",nombre:"Noseda, Claudia Maria Josefina",deuda:800000},
    {lote:"Z-28",nombre:"Caputo, Nicolas Martin",deuda:800000},
    {lote:"Z-29",nombre:"Caputo, Nicolas Martin",deuda:800000},
    {lote:"Z-30",nombre:"Caputo, Jorge Antonio Nicolas",deuda:800000},
    {lote:"Z-31",nombre:"Caputo, Nicolas Martin",deuda:800000},
    {lote:"Z-32",nombre:"Caputo, Jose Luis",deuda:800000},
    {lote:"Z-39",nombre:"Caputo, Jose Luis",deuda:800000},
    {lote:"AC-2",nombre:"Farias, Daniel Duilio y Messio Maria Gladis",deuda:0},
    {lote:"AC-3",nombre:"Farias, Daniel Duilio y Messio Maria Gladis",deuda:0},
    {lote:"AC-4",nombre:"Farias, Daniel Duilio y Messio Maria Gladis",deuda:0},
    {lote:"AC-5",nombre:"Farias, Daniel Duilio y Messio Maria Gladis",deuda:0},
    {lote:"AC-6",nombre:"Farias, Daniel Duilio y Messio Maria Gladis",deuda:0},
    {lote:"AC-15",nombre:"Vazquez, Roberto Gustavo",deuda:800000},
    {lote:"AC-16",nombre:"Caputo, Jose Luis",deuda:800000},
    {lote:"AC-17",nombre:"Caputo, Monica Maria",deuda:800000},
    {lote:"AD-3",nombre:"Loybaco SA",deuda:800000},
    {lote:"AD-4",nombre:"Saponare, Pablo",deuda:800000},
    {lote:"AD-5",nombre:"Flucks, Gladys Mariana",deuda:800000},
    {lote:"AD-6",nombre:"Caputo, Jorge Antonio Nicolas",deuda:800000},
    {lote:"AD-8",nombre:"Caputo, Jorge Antonio Nicolas",deuda:800000},
    {lote:"AD-9",nombre:"Caputo, Nicolas Martin",deuda:800000},
    {lote:"AE-1",nombre:"Otero, Jesus",deuda:800000},
    {lote:"AE-2",nombre:"Otero, Jesus",deuda:800000},
    {lote:"AE-3",nombre:"Najo, Susana",deuda:0},
    {lote:"AE-4",nombre:"Kosacoff, Bernardo",deuda:800000}
  ]
};

var CC_CURRENT = CC_APR26;

var NOTICES = [
  {
    id:'cavance_abr26',
    title:'Informe Mensual de Trabajos - Abril 2026',
    date:'ZANARA - Desarrollo y Gerenciamiento de Construcción',
    tag:'Informe de avance de obras',
    pdfHref:'assets/docs/notices/zanara-informe-obra-abril-2026.pdf',
    desc:'Avances en red eléctrica, cloacas, agua potable, seguridad, mantenimiento y agrimensura en abril 2026.',
    bodyHtml:'<div class="letter-content">' +
      '<span class="notice-tag">Informe de avance de obras</span>' +
      '<p>A continuación se presenta el informe mensual de trabajos en el Barrio Lago de Manzanares correspondiente al mes de <strong>Abril 2026</strong>, elaborado por <strong>ZANARA - Desarrollo y Gerenciamiento de Construcción</strong>.</p>' +
      '<div class="notice-gallery">' +
        '<div class="notice-gallery-card"><img src="assets/images/notices/notice-informe-abril-2026-full-1.jpg" alt="Vista de Lago de Manzanares"></div>' +
      '</div>' +
      '<div class="letter-highlight"><strong>Resumen del mes de Abril</strong>' +
      '<strong>Principales avances:</strong> Colocación de motores para el portón de la entrada. Extracción de muestras de suelo para definir el relleno de las calles. Se continúa con mantenimiento y limpieza general del predio. Se inició con la colocación de un nuevo cerco perimetral. Se avanzó con el desmonte de la zona Sur. Se vació la planta de tratamiento y estaciones elevadoras. Se licitó la reparación de la red eléctrica junto con el alumbrado. Se fumigó todo el barrio. Se realizaron pruebas en la red de agua potable. Se avanzó con trabajos de agrimensura.<br><br>' +
      '<strong>Temas a considerar:</strong> La planta de tratamiento cloacal todavía no está operativa. Hay un tramo de red cloacal que necesita ser reparado. La red de agua presenta pérdidas que deben repararse. Tanto la red eléctrica como el alumbrado público presentan fallas. Las constantes lluvias dificultaron el avance de las tareas.</div>' +
      '<div class="notice-section-title">1. Red Eléctrica</div>' +
      '<table class="notice-table"><thead><tr><th>Concepto</th><th>Empresa / Contratista</th><th>Estado</th></tr></thead><tbody>' +
      '<tr><td>Relevamiento del tendido eléctrico existente - Zona Norte</td><td>TECNAO</td><td><strong>Completado</strong></td></tr>' +
      '<tr><td>Reparaciones de la red y rehacer las partes saqueadas - Zona Norte</td><td>A definir</td><td>En licitación</td></tr>' +
      '<tr><td>Reparaciones de la red de alumbrado y provisión de farolas - Zona Norte</td><td>A definir</td><td>En licitación</td></tr>' +
      '<tr><td>Mejora del suministro de energía eléctrica</td><td>Edenor</td><td>En proceso</td></tr>' +
      '</tbody></table>' +
      '<div class="notice-gallery">' +
        '<div class="notice-gallery-card"><div class="notice-gallery-label">Estado actual de la red eléctrica</div><img src="assets/images/notices/notice-informe-abril-2026-full-2.jpg" alt="Estado actual de la red eléctrica"></div>' +
      '</div>' +
      '<p>Edenor y su contratista Rowing efectuaron visitas para relevar el estado actual e intervinieron en pilares. Se ha licitado la reparación de la red para confeccionar un contrato, incluyendo luminarias defectuosas y servicio eléctrico interno.</p>' +
      '<div class="notice-section-title">2. Red Cloacal</div>' +
      '<table class="notice-table"><thead><tr><th>Concepto</th><th>Empresa / Contratista</th><th>Estado</th></tr></thead><tbody>' +
      '<tr><td>Relevamiento de bocas de inspección y prueba hidráulica - Zona Norte</td><td>BROCA</td><td><strong>Completado</strong></td></tr>' +
      '<tr><td>Reparaciones de bocas de registro - Zona Norte</td><td>BROCA</td><td>En proceso</td></tr>' +
      '<tr><td>Vaciado de la planta de tratamiento y estaciones elevadoras</td><td>BROCA</td><td><strong>Completado</strong></td></tr>' +
      '<tr><td>Reparación de tramo de red de cloacas - Zona Norte</td><td>A definir</td><td>En licitación</td></tr>' +
      '<tr><td>Reacondicionamiento planta de tratamiento y estaciones elevadoras</td><td>A definir</td><td>En proyecto</td></tr>' +
      '</tbody></table>' +
      '<div class="notice-gallery">' +
        '<div class="notice-gallery-card"><div class="notice-gallery-label">Estado actual bocas de registro</div><img src="assets/images/notices/notice-informe-abril-2026-full-3.jpg" alt="Estado actual bocas de registro"></div>' +
        '<div class="notice-gallery-card"><div class="notice-gallery-label">Vaciado planta de tratamiento</div><img src="assets/images/notices/notice-informe-abril-2026-full-4.jpg" alt="Vaciado planta de tratamiento y estaciones elevadoras"></div>' +
      '</div>' +
      '<p>Se finalizó el relevamiento inicial, descubriendo todas las bocas de registro enterradas bajo la calle. Se ejecutaron tareas de desobstrucción durante todo el mes. En el diagnóstico hay alrededor de 800m de cañería que deberán tenderse nuevamente.</p>' +
      '<div class="notice-section-title">3. Red de Agua Potable</div>' +
      '<table class="notice-table"><thead><tr><th>Concepto</th><th>Empresa / Contratista</th><th>Estado</th></tr></thead><tbody>' +
      '<tr><td>Reparación de pérdidas puntuales en la red - Zona Norte</td><td>MH</td><td>En proceso</td></tr>' +
      '</tbody></table>' +
      '<div class="notice-gallery">' +
        '<div class="notice-gallery-card"><div class="notice-gallery-label">Estado del cuarto de bombeo</div><img src="assets/images/notices/notice-informe-abril-2026-full-5.jpg" alt="Estado del cuarto de bombeo"></div>' +
        '<div class="notice-gallery-card"><div class="notice-gallery-label">Bomba sumergible e hidrante</div><img src="assets/images/notices/notice-informe-abril-2026-full-6.jpg" alt="Bomba sumergible retirada e hidrante averiado"></div>' +
      '</div>' +
      '<p>Se repararán las pérdidas puntuales más notorias para elevar la presión del sistema. Queda pendiente la reparación de hidrantes para bomberos, que se reemplazarán en mayo.</p>' +
      '<div class="notice-section-title">4. Seguridad</div>' +
      '<table class="notice-table"><thead><tr><th>Concepto</th><th>Empresa / Contratista</th><th>Estado</th></tr></thead><tbody>' +
      '<tr><td>Automatización de portones de entrada - Zona Norte</td><td>KARTOS</td><td><strong>Completado</strong></td></tr>' +
      '<tr><td>Cercado del perímetro del cerco</td><td>LEGUIZAMÓN ALAMBRADOS</td><td>En proceso</td></tr>' +
      '<tr><td>Ampliación y puesta en valor de las rejas de entrada</td><td>A definir</td><td>En licitación</td></tr>' +
      '<tr><td>Readecuación de seguridad en el cuarto de bombeo</td><td>A definir</td><td>En licitación</td></tr>' +
      '<tr><td>Instalación carteles "Prohibido Bañarse"</td><td>DÍAZ MANTENIMIENTO</td><td><strong>Completado</strong></td></tr>' +
      '</tbody></table>' +
      '<div class="notice-gallery">' +
        '<div class="notice-gallery-card"><div class="notice-gallery-label">Portones de entrada con motores instalados</div><img src="assets/images/notices/notice-informe-abril-2026-full-7.jpg" alt="Portones de entrada con motores instalados"></div>' +
        '<div class="notice-gallery-card"><div class="notice-gallery-label">Trabajos de cercado perimetral</div><img src="assets/images/notices/notice-informe-abril-2026-full-8.jpg" alt="Trabajos de cercado en el perímetro del barrio"></div>' +
      '</div>' +
      '<p>Se instalaron los motores para apertura automática de portones. Han comenzado las tareas de cercado perimetral con malla electrosoldada de 2m con 2 líneas de púas y murete de hormigón. Se instalaron carteles de "Prohibido Bañarse" cerca de la laguna.</p>' +
      '<div class="notice-section-title">5. Mantenimiento</div>' +
      '<table class="notice-table"><thead><tr><th>Concepto</th><th>Empresa / Contratista</th><th>Estado</th></tr></thead><tbody>' +
      '<tr><td>Parquización - Zona Norte</td><td>MANTENIMIENTO DÍAZ</td><td>En proceso</td></tr>' +
      '<tr><td>Fumigación</td><td>PyP</td><td><strong>Completado</strong></td></tr>' +
      '</tbody></table>' +
      '<div class="notice-gallery">' +
        '<div class="notice-gallery-card"><div class="notice-gallery-label">Avance de mantenimiento</div><img src="assets/images/notices/notice-informe-abril-2026-full-9.jpg" alt="Avance de mantenimiento y parquización"></div>' +
      '</div>' +
      '<p>Se completó la fumigación del predio contra malezas y hojas anchas. Se adquirió una máquina Giro Cero para complementar las tareas de jardinería.</p>' +
      '<div class="notice-section-title">6. Agrimensura / Topografía</div>' +
      '<p>Se avanzó con demarcación de puntos fijos a lo largo de todo el barrio para futuros trabajos de topografía. <strong>Puntos Naranjas:</strong> delimitación del cerco. <strong>Puntos Azules:</strong> puntos fijos para relevamiento topográfico. Se solicita a los propietarios mantener la integridad de estos puntos.</p>' +
      '<div class="letter-signature">Atentamente,<br><strong>ZANARA - Desarrollo y Gerenciamiento de Construcción</strong><br>En representación de Administración Lago de Manzanares</div>' +
    '</div>'
  },
  {
    id:'minuta_abr26',
    title:'Informe de Reunión con Propietarios - Abril 2026',
    date:'Administración Lago de Manzanares',
    tag:'Comunicado',
    pdfHref:'assets/docs/notices/minuta-reunion-propietarios-abril-2026.pdf',
    desc:'Resumen de la reunión del 25 de abril: gastos administrativos, morosidad, ARBA, obras y seguridad.',
    bodyHtml:'<div class="letter-content">' +
      '<span class="notice-tag">Comunicado</span>' +
      '<p>A continuación compartimos un resumen detallado de los temas abordados en la reunión mantenida el <strong>25 de abril de 2026</strong>, cuyo objetivo principal fue generar un espacio de diálogo directo, reforzar la comunicación con los propietarios y tratar aspectos clave vinculados al funcionamiento y desarrollo del barrio.</p>' +
      '<div class="notice-section-title">Objetivo de la Reunión</div>' +
      '<p>Durante el encuentro se hizo especial hincapié en la necesidad de fortalecer los canales de comunicación, dado que se detectó una baja respuesta a las comunicaciones enviadas por correo electrónico. La reunión permitió intercambiar opiniones, aclarar dudas y poner en común la situación actual del barrio.</p>' +
      '<div class="notice-section-title">Gastos Administrativos y Morosidad</div>' +
      '<p>Los gastos administrativos actuales están destinados a cubrir servicios comunes: portería, mantenimiento general, consumo de energía eléctrica y seguridad. La recaudación actual resulta insuficiente debido al alto nivel de morosidad existente.</p>' +
      '<div class="letter-highlight">' +
        '<strong>Medidas definidas:</strong><br>' +
        '• Se avanzará en la actualización de la base de datos de contacto.<br>' +
        '• Se intensificará el contacto individual con propietarios para regularizar la situación.<br>' +
        '• A partir de <strong>mayo de 2026</strong> se aplicarán intereses por mora sobre los saldos impagos.<br>' +
        '• Una vez agotadas las instancias de diálogo, se evaluará el inicio de <strong>acciones legales</strong> contra los propietarios morosos.<br><br>' +
        '<strong>Regularización:</strong> El pago equivalente a 24 meses calculados a valores de noviembre de 2025 (total: $2.400.000) permite normalizar deudas acumuladas en años anteriores.' +
      '</div>' +
      '<div class="notice-section-title">ARBA</div>' +
      '<p>La mayoría de los lotes de la Zona Norte ya cuentan con su partida individual ante ARBA. El incumplimiento en el pago puede derivar en acciones judiciales, embargos e inconvenientes al momento de escriturar. En el próximo resumen de gastos administrativos se adjuntará un listado con las partidas correspondientes a cada lote.</p>' +
      '<div class="notice-section-title">Obras y Avances</div>' +
      '<table class="notice-table"><thead><tr><th>Zona</th><th>Avances</th></tr></thead><tbody>' +
        '<tr><td><strong>Zona Norte</strong></td><td>Edenor está realizando una revisión del sistema eléctrico con reemplazo de cajas deterioradas. Se avanzará en la mejora de tensión e instalación de luminarias LED.</td></tr>' +
        '<tr><td><strong>Zona Sur</strong></td><td>Continúan las tareas de desmonte (finalización estimada: 1 mes). Luego se avanzará con limpieza y preparación del terreno. Sector con mayores dificultades por zonas inundables y cercanía al río Luján.</td></tr>' +
      '</tbody></table>' +
      '<div class="notice-section-title">Infraestructura y Seguridad</div>' +
      '<p><strong>Infraestructura:</strong> La infraestructura del barrio se encuentra operativa en términos generales. Se identificaron tramos de cañerías dañadas a reparar y necesidad de mantenimiento en la planta de tratamiento.</p>' +
      '<p><strong>Seguridad:</strong> Se logró una disminución en los episodios de intrusión. A partir de mayo se reducirá el servicio policial (se mantiene únicamente el móvil nocturno). Se continúa consolidando el cerco perimetral con obstáculos naturales en sectores vulnerables.</p>' +
      '<div class="notice-section-title">Desarrollo y Obras Futuras</div>' +
      '<div class="letter-highlight">' +
        '• <strong>Zona Norte:</strong> posible escrituración durante el primer semestre del próximo año.<br>' +
        '• <strong>Zona Sur:</strong> plazo estimado de desarrollo entre 18 y 24 meses.<br>' +
        '• Se prevé rediseño del acceso al barrio con propuesta más amplia y moderna.<br>' +
        '• Club House en etapa de planificación, sujeto a aprobaciones municipales.' +
      '</div>' +
      '<div class="notice-section-title">Convivencia y Reglamentación</div>' +
      '<p>Se abordaron problemáticas vinculadas a la convivencia, principalmente el exceso de velocidad. Se evaluará la implementación de multas. Se comenzará a trabajar en la actualización del reglamento de convivencia.</p>' +
      '<div class="letter-signature">Atentamente,<br><strong>Administración Lago de Manzanares</strong></div>' +
    '</div>'
  },
  {
    id:'cavance26',
    title:'Informe Mensual de Trabajos - Marzo 2026',
    date:'ZANARA - Desarrollo y Gerenciamiento de Construcción',
    tag:'Informe de avance de obras',
    pdfHref:'assets/docs/notices/zanara-informe-obra-marzo-2026.pdf',
    desc:'Avances en red eléctrica, cloacas, agua potable, seguridad y mantenimiento del barrio.',
    bodyHtml:'<div class="letter-content">' +
      '<span class="notice-tag">Informe de avance de obras</span>' +
      '<p>A continuación se presenta el informe mensual de trabajos en el Barrio Lago de Manzanares, elaborado por <strong>ZANARA - Desarrollo y Gerenciamiento de Construcción</strong>.</p>' +
      '<div class="letter-highlight"><strong>Resumen del mes de Marzo</strong><strong>Principales avances:</strong> Se inició con la puesta en valor del servicio eléctrico. Se reemplazó la bomba sumergible de agua y se realizaron pruebas en la red. Se relevaron y comenzaron a reparar las redes cloacales. Se avanzó en trabajos de seguridad (portones, cámaras). Se continúa con las tareas de mantenimiento y limpieza general.<br><br><strong>Temas a considerar:</strong> La planta de tratamiento cloacal y estación de bombeo todavía no está operativa. La red de agua presenta pérdidas que deben repararse. Tanto la red eléctrica como el alumbrado público presentan fallas.</div>' +
      '<div class="notice-section-title">1. Red Eléctrica</div>' +
      '<table class="notice-table"><thead><tr><th>Concepto</th><th>Empresa / Contratista</th><th>Estado</th></tr></thead><tbody><tr><td>Relevamiento del tendido eléctrico existente - Zona Norte</td><td>TECNAO</td><td><strong>Completado</strong></td></tr><tr><td>Reparaciones de la red y rehacer las partes saqueadas - Zona Norte</td><td>A definir</td><td>En licitación</td></tr><tr><td>Mejora del suministro de energía eléctrica</td><td>Edenor</td><td>En proceso</td></tr></tbody></table>' +
      '<div class="notice-gallery">' +
        '<div class="notice-gallery-card"><div class="notice-gallery-label">Red eléctrica - estado actual</div><img src="assets/images/notices/notice-informe-marzo-2026-full-1.jpg" alt="Red eléctrica - estado actual"></div>' +
        '<div class="notice-gallery-card"><img src="assets/images/notices/notice-informe-marzo-2026-full-2.jpg" alt="Instalaciones eléctricas a reparar"></div>' +
        '<div class="notice-gallery-card"><div class="notice-gallery-label">Alumbrado público</div><img src="assets/images/notices/notice-informe-marzo-2026-full-3.jpg" alt="Alumbrado público"></div>' +
        '<div class="notice-gallery-card"><img src="assets/images/notices/notice-informe-marzo-2026-full-4.jpg" alt="Columnas y tendido eléctrico"></div>' +
      '</div>' +
      '<p>Se mantuvieron reuniones con la distribuidora exponiendo el estado de la red. Las reparaciones comenzarán luego del relevamiento eléctrico.</p>' +
      '<div class="notice-section-title">2. Red Cloacal</div>' +
      '<table class="notice-table"><thead><tr><th>Concepto</th><th>Empresa / Contratista</th><th>Estado</th></tr></thead><tbody><tr><td>Relevamiento de bocas de inspección y prueba hidráulica - Zona Norte</td><td>BROCA</td><td><strong>Completado</strong></td></tr><tr><td>Reparaciones de la red en mal estado - Zona Norte</td><td>BROCA</td><td>En proceso</td></tr><tr><td>Reequipamiento de la planta de tratamiento y estaciones elevadoras</td><td>A definir</td><td>Pendiente suministro eléctrico</td></tr></tbody></table>' +
      '<div class="notice-gallery">' +
        '<div class="notice-gallery-card"><div class="notice-gallery-label">Bocas de registro</div><img src="assets/images/notices/notice-informe-marzo-2026-full-5.jpg" alt="Bocas de registro"></div>' +
        '<div class="notice-gallery-card"><img src="assets/images/notices/notice-informe-marzo-2026-full-6.jpg" alt="Sector de red cloacal"></div>' +
        '<div class="notice-gallery-card"><div class="notice-gallery-label">Planta de tratamiento</div><img src="assets/images/notices/notice-informe-marzo-2026-full-7.jpg" alt="Planta de tratamiento"></div>' +
        '<div class="notice-gallery-card"><img src="assets/images/notices/notice-informe-marzo-2026-full-8.jpg" alt="Equipo de planta de tratamiento"></div>' +
      '</div>' +
      '<p>Se finalizó el relevamiento inicial. Se ejecutarán tareas de limpieza, desobstrucción y acondicionamiento. La planta de tratamiento permanecerá sin equipar hasta asegurar suministro eléctrico confiable.</p>' +
      '<div class="notice-section-title">3. Red de Agua Potable</div>' +
      '<table class="notice-table"><thead><tr><th>Concepto</th><th>Empresa / Contratista</th><th>Estado</th></tr></thead><tbody><tr><td>Reemplazo de bomba sumergible con tablero de control</td><td>MH</td><td><strong>Completado</strong></td></tr><tr><td>Relevamiento de la red de agua - Zona Norte</td><td>MH</td><td>En proceso</td></tr><tr><td>Relevamiento del equipo de bombeo existente</td><td>GRUNDFOS</td><td><strong>Completado</strong></td></tr></tbody></table>' +
      '<div class="notice-gallery">' +
        '<div class="notice-gallery-card"><div class="notice-gallery-label">Cuarto de bombeo</div><img src="assets/images/notices/notice-informe-marzo-2026-full-9.jpg" alt="Cuarto de bombeo"></div>' +
        '<div class="notice-gallery-card"><img src="assets/images/notices/notice-informe-marzo-2026-full-10.jpg" alt="Tablero de control de agua"></div>' +
        '<div class="notice-gallery-card"><div class="notice-gallery-label">Bomba sumergible retirada</div><img src="assets/images/notices/notice-informe-marzo-2026-full-11.jpg" alt="Bomba sumergible retirada"></div>' +
        '<div class="notice-gallery-card"><div class="notice-gallery-label">Hidrante averiado</div><img src="assets/images/notices/notice-informe-marzo-2026-full-12.jpg" alt="Hidrante averiado"></div>' +
      '</div>' +
      '<p>Se reemplazó la bomba sumergible averiada con tablero de control y presurizador. Se detectaron fugas y artefactos defectuosos. El equipo de bombeo fue relevado por GRUNDFOS, pendiente cotización.</p>' +
      '<div class="notice-section-title">4. Seguridad</div>' +
      '<table class="notice-table"><thead><tr><th>Concepto</th><th>Empresa / Contratista</th><th>Estado</th></tr></thead><tbody><tr><td>Automatización de portones de entrada - Zona Norte</td><td>KARTOS</td><td>En proceso</td></tr><tr><td>Cierre del perímetro con cercado</td><td>A definir</td><td>En licitación</td></tr><tr><td>Seguridad del cuarto de bombeo</td><td>KARTOS</td><td>En proceso</td></tr><tr><td>Cámaras y domo</td><td>-</td><td><strong>Completado</strong></td></tr></tbody></table>' +
      '<div class="notice-gallery">' +
        '<div class="notice-gallery-card"><div class="notice-gallery-label">Motores del portón</div><img src="assets/images/notices/notice-informe-marzo-2026-full-13.jpg" alt="Motores del portón"></div>' +
        '<div class="notice-gallery-card"><div class="notice-gallery-label">Acceso cuarto de bombeo</div><img src="assets/images/notices/notice-informe-marzo-2026-full-14.jpg" alt="Acceso al cuarto de bombeo"></div>' +
        '<div class="notice-gallery-card"><div class="notice-gallery-label">Tablero bomba sumergible</div><img src="assets/images/notices/notice-informe-marzo-2026-full-15.jpg" alt="Tablero bomba sumergible"></div>' +
        '<div class="notice-gallery-card"><img src="assets/images/notices/notice-informe-marzo-2026-full-16.jpg" alt="Área de seguridad y perímetro"></div>' +
      '</div>' +
      '<p>Se contrató la automatización de portones para apertura desde el celular. Está en licitación el cercado perimetral.</p>' +
      '<div class="notice-section-title">5. Mantenimiento</div>' +
      '<table class="notice-table"><thead><tr><th>Concepto</th><th>Empresa / Contratista</th><th>Estado</th></tr></thead><tbody><tr><td>Parquización - Zona Norte</td><td>MANTENIMIENTO DÍAZ</td><td>En proceso</td></tr><tr><td>Colocación de carteles “prohibido bañarse”</td><td>MANTENIMIENTO DÍAZ</td><td>En proceso</td></tr></tbody></table>' +
      '<div class="notice-gallery">' +
        '<div class="notice-gallery-card"><div class="notice-gallery-label">Avance de mantenimiento</div><img src="assets/images/notices/notice-informe-marzo-2026-full-17.jpg" alt="Avance de mantenimiento"></div>' +
        '<div class="notice-gallery-card"><img src="assets/images/notices/notice-informe-marzo-2026-full-18.jpg" alt="Tareas de mantenimiento con maquinaria"></div>' +
      '</div>' +
      '<p>Pendiente fumigación del predio. Se realizan tareas con mini pala y camión para colectar la suciedad del desmalezamiento.</p>' +
      '<div class="letter-signature">Atentamente,<br><strong>ZANARA - Desarrollo y Gerenciamiento de Construcción</strong><br>En representación de Administración Lago de Manzanares</div>' +
    '</div>'
  },
  {
    id:'ctopo',
    title:'Trabajos de medición topográfica y relevamiento de pilares',
    date:'Buenos Aires, 9 de marzo de 2026',
    tag:'Aviso operativo',
    desc:'Empresa ZANARA realiza relevamiento de pilares eléctricos. No alarmarse ante presencia de operarios.',
    bodyHtml:'<div class="letter-content"><span class="notice-tag">Aviso operativo</span><p>Les informamos que durante la presente semana se estarán realizando <strong>trabajos de medición topográfica y relevamiento de pilares eléctricos</strong> dentro del predio.</p><p>Las tareas estarán a cargo de personal autorizado de la empresa <strong>ZANARA</strong>, por lo que les solicitamos no alarmarse ante la presencia de operarios con equipos de medición en distintas zonas del barrio.</p><p>Ante cualquier consulta, pueden comunicarse con la Administración.</p><div class="letter-signature">Atentamente,<br><strong>Administración Lago de Manzanares</strong></div></div>'
  },
  {
    id:'cfede',
    title:'Carta de Federico Vilariño a los Propietarios',
    date:'Mensaje personal del desarrollador',
    tag:'Carta personal',
    desc:'Mensaje sobre el estado del barrio, la nueva etapa de trabajo y la importancia de regularizar gastos administrativos.',
    bodyHtml:'<div class="letter-content"><span class="notice-tag">Carta personal</span><p>El sábado pasado tuve el gusto de conocer a varios propietarios del barrio, donde hice una breve exposición de las tareas que vamos a realizar e intenté contestar algunas inquietudes.</p><p>En la medida que van pasando los días nos vamos encontrando con un grado de deterioro mayor al que pensábamos, pero esa es nuestra responsabilidad: la asumimos y seguimos adelante con entusiasmo.</p><div class="letter-highlight"><strong>Sobre los propietarios que eligieron quedarse</strong>Habría que estar agradecido a esas personas, ya que si no hubiera sido así pongo en duda que hubiera habido algún oferente para desarrollar hoy el barrio. Por eso escribo estas líneas para agradecer a los que están pagando los gastos administrativos e invitar a los que aún no lo han hecho. El pago de los últimos 24 meses es más una obligación moral que económica.</div><div class="letter-signature">Saludos cordiales,<br><strong>Federico Vilariño</strong></div></div>'
  },
  {
    id:'cmin',
    title:'Minuta de reunión - 07 de febrero de 2026',
    date:'Casa del Ing. Farías - Lago de Manzanares',
    tag:'Reunión de propietarios',
    desc:'Resumen de los temas tratados: desmonte, estudios técnicos, seguridad, infraestructura y gastos administrativos.',
    bodyHtml:'<div class="letter-content"><span class="notice-tag">Reunión de propietarios</span><p>Estimados propietarios, a continuación les acercamos la minuta de la reunión realizada el 07 de febrero en la casa del Ing. Farías.</p><div class="letter-highlight"><strong>1. Desmonte y ordenamiento</strong>Se contrató una empresa para iniciar las tareas de desmonte. Se prevé que esta etapa demande varios meses, especialmente en la zona Sur.</div><div class="letter-highlight"><strong>2. Estudios técnicos en curso</strong>Desde febrero trabaja una empresa a cargo del Ing. Gonzalo Fontana, realizando estudios de red eléctrica y agua, caminos, batimetría del lago, topografía y evaluaciones hidráulicas.</div><div class="letter-highlight"><strong>3. Seguridad</strong>Reparación y colocación de portones. Instalación de barreras electrónicas. Refuerzo del cerco perimetral. Sistema de identificación para propietarios.</div><div class="letter-highlight"><strong>4. Infraestructura y servicios</strong>Prioridades: agua, electricidad, caminos, cloacas y guardia. Se realizará relevamiento técnico integral.</div><div class="letter-highlight"><strong>5. Regularización legal y administrativa</strong>Zona Norte más avanzada. Se evalúa constitución de fideicomiso y actualización del reglamento interno.</div><div class="letter-highlight"><strong>6. Gastos administrativos</strong>Se remarcó la importancia de regularizar el pago y generar un fondo de reserva. Se solicita abonar los últimos 24 meses a valor diciembre.</div><div class="letter-signature">Atentamente,<br><strong>Administración Lago de Manzanares</strong></div></div>'
  },
  {
    id:'cinicio',
    title:'Inicio de la nueva gestión administrativa',
    date:'Diciembre 2025',
    tag:'Comunicado institucional',
    desc:'Inicio de una nueva etapa de administración, transparencia y publicación mensual de liquidaciones.',
    bodyHtml:'<div class="letter-content"><span class="notice-tag">Comunicado institucional</span><p>Informamos a todos los propietarios que desde diciembre ha comenzado una nueva etapa en la administración del <strong>Barrio Lago de Manzanares</strong>, con el compromiso de trabajar con transparencia, orden y mejora continua.</p><p>A partir de esta nueva gestión, se publicarán mensualmente las <strong>liquidaciones de gastos administrativos</strong>, para que todos los propietarios puedan acceder fácilmente a la información y verificar el detalle de ingresos y egresos.</p><div class="letter-signature">Atentamente,<br><strong>Administración Lago de Manzanares</strong></div></div>'
  }
];

var MESES = {
  may26:{id:"may26",mes:"Mayo",anio:"2026",vto:"15/06/2026",periodo:"1 al 31/05/2026",status:"ok",
    docs:[
      {label:"Liquidación Mayo 2026 (PDF)",href:MAY_2026_PDFS.liquidacion,primary:true},
      {label:"Estado de cuenta propietarios Mayo 2026 (PDF)",href:MAY_2026_PDFS.estado}
    ]
  },
  abr26:{id:"abr26",mes:"Abril",anio:"2026",vto:"15/05/2026",periodo:"1 al 30/04/2026",status:"ok",
    docs:[
      {label:"Liquidación Abril 2026 (PDF)",href:APR_2026_PDFS.liquidacion,primary:true},
      {label:"Estado de cuentas corrientes Abril 2026 (PDF)",href:APR_2026_PDFS.estado},
      {label:"ARBA - Instructivo y partidas (PDF)",href:APR_2026_PDFS.arba}
    ],
    egresos:{
      sueldos:{label:"Sueldos y aportes al personal",items:[
        ["Cano, Rodolfo","Fc. 001-0010",1066800],["Heflein, Gaston","Fc. 001-0004",1066800],
        ["Jara, Julio E.","Fc. 001-0049",1066800],["Leiva, Miguel Angel","Fc. 001-0087",1863400],
        ["Falco, M. Fernanda","Transferencia",3000000],["Guardia policial","Transferencia",5472000]]},
      monotributo:{label:"Aportes Monotributo",items:[
        ["Cano, Rodolfo","Monotributo 04-26",42386.74],["Heflein, Gaston","Monotributo 04-26",30758.31],
        ["Jara, Julio E.","Monotributo 04-26",42386.74],["Leiva, Miguel Angel","Monotributo 04-26",56501.85]]},
      seguros:{label:"Seguros",items:[["Seguro Responsabilidad Civil 4/11","Poliza nro. 271754",55584.40]]},
      mantenimientos:{label:"Abonos por mantenimientos",items:[
        ["Mantenimiento parques y jardines","Efectivo",20000000],["Soda Belen SRL","Transferencia MP",69000],
        ["Mayra Baño Quimico","Transferencia",55000],["Movistar","Fc. 0001-987811",8293.97]]},
      otros:{label:"Otros mantenimientos y reparaciones",items:[
        ["Nafta movil policial","Transferencia",428834.99],["Arreglo alambrado y farolas","Transferencia",260000],
        ["Materiales farolas","Transferencia",85484.50],["Nafta y compra de candado Leiva","Transferencia",24000],
        ["Gastos librería y otros","Transferencia",38400]]},
      edenor:{label:"Impuestos y servicios",items:[
        ["Ecoterra","Rbo. 1900-000502",339600],["Cosefa","Fc. 015-0075087",11958.72],
        ["Edenor AP1","Cta. 5176834871",37450.30],["Edenor AP2","Cta. 1879443257",8314.39],
        ["Edenor AP3","Cta. 2858919000",105800.35],["Edenor CH","Cta. 1962427174",100451.80],
        ["Edenor POR","Cta. 6146537920",122352.08],["Edenor SS","Cta. 7056963671",29015.14]]}},
    ingresos:[
      ["Puletti, Alberto","Y38",200000],
      ["Jasminoy, Ignacio","C15 N11 N12",600000],
      ["Fragale, Guillermo","G16",200000],
      ["Barberio, Susana","I10 M02",400000],
      ["Pastore, Luis","A26",200000],
      ["Calderon Oña, Juan Carlos","O03",200000],
      ["Letang, Gabriel","M04",200000],
      ["Novillo, Facundo","J04",600000],
      ["Chamson, Axel","G09 G11 N09",600000],
      ["Figueroa Villamayor, Julio","B16",400000],
      ["Quintana, Juan Manuel","B01",200000],
      ["Acuña, Hector Javier","K02",200000],
      ["Goñi, Uki","K06 K07",400000],
      ["Weiss, Vernon","O07",200000],
      ["Ottonello, Miguel","G13 G14",400000],
      ["Garcia, Santiago","H12",200000],
      ["Lopez, Fernando","G10 M01",400000],
      ["Brun, Josefina","F02",400000],
      ["Brun, Josefina","L01",400000],
      ["Garibaldi, Osvaldo","A01",400000],
      ["Garibaldi, Osvaldo","F06",400000],
      ["Palpacelli, Carlos","A10 A11 A12 B07 B09",1000000],
      ["Palpacelli, Carlos","D02 J11 L12 M15 M16 M17",1200000],
      ["Marquez, Andrea","C47",200000],
      ["Najo, Susana","F08 F09 F10 AE03",800000],
      ["Goldschtein, Javier","O05",200000],
      ["Casaux Alsina, Santiago","Q04",200000],
      ["Stabile, Mauro","F11 F12 F13",610000],
      ["Fidel, Adriana","N08",200000],
      ["Isabela Diego","I12 I13 J05 J06",800000],
      ["Romano, Ezequien","H10",200000],
      ["Valle, Marina Andrea","I15",200000],
      ["Colombo, Nicolas","B03 H17 H18",600000],
      ["Farias, Daniel","AC02 AC03 AC04 AC05 AC06",1000000],
      ["Iturburu, Juan Pedro","E05 E06 I01 J01 J02",1000000],
      ["Graziano, Gabriel","H13 N14",400000],
      ["Lubnicki, Roberto","D20",600000],
      ["Malvichini, Andres","Y27",200000],
      ["Giacchino, Diego","E19",600000],
      ["Tello, German","O04",200000],
      ["Jasminoy, Ignacio","N12",2400000],
      ["Pascual, Gonzalo","B10",2400001],
      ["Aporte/Prestamo Desarrollador","-",11500000],
      ["Giaimo, Paula Priscila","-",400000]
    ],
    saldoInicial:1554155.11},
  mar26:{id:"mar26",mes:"Marzo",anio:"2026",vto:"15/04/2026",periodo:"1 al 31/03/2026",status:"ok",
    egresos:{
      sueldos:{label:"Sueldos y aportes al personal",items:[
        ["Cano, Rodolfo","Fc. 001-0009",930000],["Heflein, Gaston","Fc. 001-0003",930000],
        ["Jara, Julio E.","Fc. 001-0048",930000],["Leiva, Miguel Angel","Fc. 001-0086",1600000],
        ["Falco, M. Fernanda","Transferencia",3000000],["Guardia policial","Transferencia",5867948.40]]},
      monotributo:{label:"Aportes Monotributo",items:[
        ["Cano, Rodolfo","Monotributo 03-26",42386.74],["Heflein, Gaston","IIBB/Monotributo 03-26",30758.31],
        ["Jara, Julio E.","Monotributo 03-26",42386.74],["Leiva, Miguel Angel","Monotributo 03-26",56501.85]]},
      seguros:{label:"Seguros",items:[["Seguro Resp. Civil 3/11","Poliza nro. 271754",55584.40]]},
      mantenimientos:{label:"Abonos por mantenimientos",items:[
        ["Mantenimiento parques y jardines","Efectivo",20000000],["Soda Belen SRL","Transferencia MP",55200],
        ["Mayra Bano Quimico","Transferencia",55000],["Claro","Fc. 1331-77102235",6756.06]]},
      otros:{label:"Otros mantenimientos y reparaciones",items:[
        ["Nafta movil policial","Transferencia",740840],["Arreglo alambrado y farolas","Transferencia",560000],
        ["Materiales farolas","Transferencia",35160],["Otros","",0]]},
      edenor:{label:"Impuestos y servicios",items:[
        ["Ecoterra","Rbo. 1900-000453",313000],["Cosefa","Fc. 015-0075087",12120.48],
        ["Edenor AP1","Cta. 5176834871",38889.94],["Edenor AP2","Cta. 1879443257",7215.33],
        ["Edenor AP3","Cta. 2858919000",65864.03],["Edenor CH","Cta. 1962427174",28268.28],
        ["Edenor POR","Cta. 6146537920",122634.93],["Edenor SS","Cta. 7056963671",25697.05]]}},
    ingresos:[
      ["Romano, Ezequiel","H10",200000],["Fragale, Guillermo","G16",200000],
      ["Puletti, Alberto","Y38",200000],["Quintana, Juan Manuel","B01",200000],
      ["Valle, Marina","I15",200000],["Goni, Uki","K06-K07",400000],
      ["Jasminoy, Ignacio","N12",2400000],["Acuña, Hector","K02",200000],
      ["Rojas, Eva","A26",200000],["Lopez, Fernando","M01-G10",400000],
      ["Gimenez Natale, Maria Ines","G13",200000],["Ottonello, Miguel","G14",200000],
      ["Weiss, Vernon","O07",200000],["Marquez, Andrea","C47",200000],
      ["Chamson, Axel","G09-G11-N09",600000],["Calderon Oña, Juan C.","O03",200000],
      ["Letang, Gabriel","M04",200000],["Prestamo FV","-",19500000],
      ["Stabile, Mauro","F11-F12-F13",600000],["Goldstchein, Javier","O05",200000],
      ["Villamayor, Julio","B16",400000],["Garcia, Sebastian","H12",200000],
      ["Malvichini, Andres","Y27",600000],["Najo, Susana","F08-F09-F10-AE03",800000],
      ["Garibaldi, Osvaldo","A01-F06",800000],["Romano, Ezequiel","H10",200000],
      ["Tello, German","O04",200000],["Stabile, Virginia","F02",400000],
      ["Brun, Josefina y Tomas","L01",400000],["Graziano, Gabriel","H13-N14",400000],
      ["Tutina SA","I12-I13-J05-J06",2000000],["Iturburu, Juan Pedro","E05-E06-J01-J02-I01",1000000],
      ["Novillo Almada, Facundo","J04",200000],["Lago, Marcela","G12",400000],
      ["Casaux Alsina, Santiago","Q04",200000],["Castellarin, Gladys","C04",200000],
      ["Colombo, Nicolas","B03-H17-H18",600000],["Barberio, Marta Susana","I10-M02",400000],
      ["Farias, Daniel","AC02-AC03-AC04-AC05-AC06",1000000]],
    saldoInicial:6367.65},
  feb26:{id:"feb26",mes:"Febrero",anio:"2026",vto:"15/03/2026",periodo:"1 al 28/02/2026",status:"ok",
    egresos:{
      sueldos:{label:"Sueldos y aportes al personal",items:[
        ["Cano, Rodolfo","Fc. 001-0008",960000],["Cano, Rodolfo (rondin nocturno)","Transferencia",725000],
        ["Heflein, Gaston","Fc. 001-0002",960000],["Jara, Julio E.","Fc. 001-0047",960000],
        ["Leiva, Miguel Angel","Fc. 001-0085",1600000],["Falco, M. Fernanda","Transferencia",3000000],
        ["Guardia policial","Transferencia",3489050.40]]},
      monotributo:{label:"Aportes Monotributo",items:[
        ["Cano, Rodolfo","Monotributo 02-26",42386.74],["Heflein, Gaston","Monotributo 01 y 02-26",20614.99],
        ["Jara, Julio E.","Monotributo 02-26",42386.74],["Leiva, Miguel Angel","Monotributo 02-26",56501.85]]},
      seguros:{label:"Seguros",items:[["Seguro Resp. Civil 2/11","Poliza nro. 271754",55584.40]]},
      mantenimientos:{label:"Abonos por mantenimientos",items:[
        ["Mantenimiento parques y jardines","Efectivo",20000000],["Soda Belen SRL","Transferencia MP",52000],
        ["Mayra Bano Quimico","Efectivo",50000],["Claro","Fc. 1331-70746553",6466.01]]},
      otros:{label:"Otros mantenimientos y reparaciones",items:[
        ["Fumigacion P. Urdinez","Fc. 0002-00003350",130000],["Reparacion luminarias","Transferencia",450000],
        ["Materiales luminarias","Transferencia",160340.23],["Libreria / copias / bebidas","Transferencia",40480],
        ["Nafta movil policial","Transferencia",323120],["Carteleria laguna","Transferencia",980000]]},
      edenor:{label:"Impuestos y servicios",items:[
        ["Ecoterra","Rbo. 1900-000391",313000],["Cosefa","Fc. 015-74057",13266.41],
        ["Edenor AP1","Cta. 5176834871",23820.91],["Edenor AP2","Cta. 1879443257",4987.03],
        ["Edenor AP3","Cta. 2858919000",62968.52],["Edenor CH","Cta. 1962427174",24809.94],
        ["Edenor POR","Cta. 6146537920",93810.72],["Edenor SS","Cta. 7056963671",24809.94]]}},
    ingresos:[
      ["Fidel, Andrea","N08",200000],["Fragale, Guillermo","G16",200000],["Valle, Marina","I15",200000],
      ["Puletti, Alberto","Y38",200000],["Iturburu, Juan Pedro","E05-E06-I01-I02-I03-I04-J01-J02",1000000],
      ["Quintana, Juan Manuel","B01",200000],["Acuña, Hector Javier","K02",500000],
      ["Lopez, Fernando","G10-M01",400000],["Letang, Gabriel","M04",200000],
      ["Chamson, Axel","G09-G11-N09",600000],["Pastore, Luis / Rojas, Eva","A26",2800000],
      ["Najo, Susana","F08-F09-F10-AE03",800000],["Gimenez Natale, Maria Ines","G13",200000],
      ["Ottonello, Miguel","G14",200000],["Segovia, Diego","Q02",200000],
      ["Jasminoy, Ignacio","C15-N11-N12",600000],["Weiss, Vernon","O07",200000],
      ["Lago, Marcela","G12",400000],["Figueroa Villamayor, Julio","B16",200000],
      ["Brun, M. Josefina y Brun, Tomas","L01",400000],["Brun, Alejandro y Stabile, Virginia","F02",400000],
      ["Garibaldi, Osvaldo","A01-F06",800000],["Jasminoy, Ignacio","N11",2400000],
      ["Marquez, Andrea","C47",200000],["Tello, German","O04",200000],["Garcia, Santiago","H12",200000],
      ["Barberio, Marta Susana","I10-M02",400000],["Sartori, M. Clemencia","E05-I01-I02-I03-I04-J01-J02",1000000],
      ["Iskowitz, Sergio","N08",200000],["Colombo, Nicolas","B03-H17-H18",600000],
      ["Farias, Daniel","AC02-AC03-AC04-AC05-AC06",1000000],["Graziano, Gabriel","H13-N14",400000],
      ["Romano, Ezequiel","H10",100000],["Goni, Uki","K06-K07",200000],
      ["Casaux Alsina, Santiago","Q04",200000],["Jasminoy, Ignacio","C15-N11-N12",600000],
      ["Aporte FV","-",15410000]],
    saldoInicial:661772.58},
  ene26:{id:"ene26",mes:"Enero",anio:"2026",vto:"15/02/2026",periodo:"1 al 31/01/2026",status:"ok",
    egresos:{
      sueldos:{label:"Sueldos y aportes al personal",items:[
        ["Cano, Rodolfo","Fc. 001-0007",900000],["Cano, Rodolfo (rondin nocturno)","",1450000],
        ["Cano, Rodolfo (rondin - saldo dic)","",210000],["Heflein, Gaston","",450000],
        ["Jara, Julio E.","Fc. 001-0046",900000],["Leiva, Miguel Angel","Fc. 001-0083",1550000],
        ["Leiva, M.A. (recoleccion residuos dic-25)","",50000],
        ["Villareal, Ramon","Fc. 001-0008",900000],["Falco, M. Fernanda","",2500000]]},
      monotributo:{label:"Aportes Monotributo",items:[
        ["Cano, Rodolfo","Monotributo 01-26",37085.74],
        ["Jara, Julio E.","Monotributo 12-25 y 01-26",74171.48],
        ["Leiva, Miguel Angel","Monotributo 01-26",37085.74]]},
      seguros:{label:"Seguros",items:[["Seguro Resp. Civil 1/11","Poliza Nro. 271754",50584.01]]},
      mantenimientos:{label:"Abonos por mantenimientos",items:[
        ["Mantenimiento parques y jardines","Efectivo",20000000],["Soda Belen SRL","Transferencia MP",52000],
        ["Mayra Bano Quimico","Fc. 001-0159",50000],["Claro","Fc. 1331-64134051",6466.01]]},
      otros:{label:"Otros mantenimientos y reparaciones",items:[
        ["Matafuegos","Efectivo",312520],["Reparaciones luminarias + materiales","Transferencia",165920.85],
        ["Viaticos","",4000],["Libreria","",19153.17]]},
      edenor:{label:"Impuestos y servicios",items:[
        ["Ecoterra","Rbo. 1900-0351",313000],["Cosefa","Fc. 015-74057",12874.82],
        ["Edenor AP1","Cta. 5176834871",59294.87],["Edenor AP2","Cta. 1879443257",5910.40],
        ["Edenor AP3","Cta. 2858919000",184136.08],["Edenor CH","Cta. 1962427174",34896.47],
        ["Edenor POR","Cta. 6146537920",153526.48],["Edenor SS","Cta. 7056963671",35742.33],
        ["Saldo dic-25 Edenor","",90680.90]]}},
    ingresos:[
      ["Isabella, Sebastian","J06",400000],["Valle, Marina","I15",200000],["Fragale, Guillermo","G16",200000],
      ["Puletti, Alberto","Y38",200000],["Weiss, Vernon","O07",200000],
      ["Ottonello, Miguel Angel","G13-G14",400000],["Najo, Susana","F08-F09-F10-AE3",800000],
      ["Tello, German","O04",200000],["Calderon Oña, Juan C.","O03",300000],
      ["Chamson, Axel","G09-G11-N09",600000],["Barberio, Marta S.","I10",200000],
      ["Letang, Gabriel","M04",200000],["Barberio, Marta S.","M02",200000],
      ["Garcia, Santiago S.","H12",200000],["Lopez, Fernando","G10-M01",400000],
      ["Marquez, Andrea","C47",200000],["Goldstchein, Javier","O05",200000],
      ["Quintana, Juan Manuel","B01",200000],["Farias, Daniel","AC02-AC06",1000000],
      ["Casaux Alsina, Santiago","Q04",200000],["Aporte FV","-",10000000],
      ["Lubnicki, Roberto","D20",200000],["Romano, Ezequiel","H10",100000],
      ["Colombo, Nicolas","B03-H17-H18",600000],["Graziano, Gabriel","H13-N14",500000],
      ["Bardas, Jorge","C04",200000],["Aporte FV","-",13000000],["Goni, Uki","K06-K07",400000]],
    saldoInicial:-229178.07},
  dic25:{id:"dic25",mes:"Diciembre",anio:"2025",vto:"15/01/2026",periodo:"13 al 31/12/2025",status:"ok",
    egresos:{
      sueldos:{label:"Sueldos y aportes al personal",items:[
        ["Cano, Rodolfo","Fc. 001-0006",900000],["Jara, Julio E.","Fc. 001-0045",900000],
        ["Leiva, Miguel Angel","Fc. 001-0082",1500000],["Villareal, Ramon","Fc. 001-0007",900000],
        ["Falco, M. Fernanda","",1250000]]},
      monotributo:{label:"Aportes Monotributo",items:[
        ["Cano, Rodolfo","Monotributo 12-25",37085.74],["Jara, Julio E.","Monotributo 12-25",19239.97],
        ["Leiva, Miguel Angel","Monotributo 12-25",37085.74],["Villareal, Ramon","Monotributo 12-25",37085.74]]},
      seguros:{label:"Seguros",items:[["Seguro Resp. Civil 1/10","Poliza Nro.",0]]},
      mantenimientos:{label:"Abonos por mantenimientos",items:[
        ["Soda Belen SRL","",62000],["Ecoterra","",296000]]},
      edenor:{label:"Impuestos y servicios",items:[
        ["Edenor AP1","Cta. 5176834871",74120.35],["Edenor AP2","Cta. 1879443257",7941.43],
        ["Edenor AP3","Cta. 2858919000",223903.17],["Edenor CH","Cta. 1962427174",34591.76],
        ["Edenor POR","Cta. 6146537920",215822.45],["Edenor SS","Cta. 7056963671",34301.72]]}},
    ingresos:[
      ["Farias, Daniel / Messio Gladis","AC02",100000],["Farias, Daniel / Messio Gladis","AC03",100000],
      ["Farias, Daniel / Messio Gladis","AC04",100000],["Farias, Daniel / Messio Gladis","AC05",100000],
      ["Farias, Daniel / Messio Gladis","AC05",100000],["Romano, Ezequiel","H20",100000],
      ["Chamson, Axel","G10",100000],["Chamson, Axel","G11",100000],["Chamson, Axel","N09",100000],
      ["Goldstchein, Javier","O05",100000],["Quintana, Juan","B01",100000],
      ["Lubnicky, Roberto","D20",100000],["Marquez, Andrea","C47",100000],["Prestamo","-",5000000]],
    saldoInicial:0}
};

var EXPENSE_MONTHS = [
  {
    id:'dic-2025',
    label:'Diciembre 2025',
    short:'Dic 2025',
    total:7421977,
    income:6500000,
    status:'Cerrado',
    items:[
      { concept:'Inicio de gestión', detail:'Gastos administrativos del 13 al 31 de diciembre', amount:7421977 }
    ]
  },
  {
    id:'ene-2026',
    label:'Enero 2026',
    short:'Ene 2026',
    total:31155521,
    income:30500000,
    status:'Cerrado',
    items:[
      { concept:'Servicios operativos', detail:'Mantenimiento, seguridad y funcionamiento general', amount:18350000 },
      { concept:'Sueldos y cargas', detail:'Personal y servicios asociados', amount:10805521 },
      { concept:'Otros gastos', detail:'Insumos y gastos menores del período', amount:2000000 }
    ]
  },
  {
    id:'feb-2026',
    label:'Febrero 2026',
    short:'Feb 2026',
    total:33476616,
    income:29510000,
    status:'Cerrado',
    items:[
      { concept:'Servicios operativos', detail:'Mantenimiento, seguridad y funcionamiento general', amount:19150000 },
      { concept:'Sueldos y cargas', detail:'Personal y servicios asociados', amount:11826616 },
      { concept:'Otros gastos', detail:'Insumos, seguros y gastos menores', amount:2500000 }
    ]
  },
  {
    id:'mar-2026',
    label:'Marzo 2026',
    short:'Mar 2026',
    total:35612643,
    income:37150000,
    status:'Cerrado',
    items:[
      { concept:'Sueldos', detail:'Personal y servicios asociados', amount:13257948 },
      { concept:'Monotributo', detail:'Honorarios y obligaciones administrativas', amount:172033 },
      { concept:'Seguros', detail:'Coberturas del período', amount:55584 },
      { concept:'Mantenimiento', detail:'Trabajos, limpieza y mejoras operativas', amount:20117956 },
      { concept:'Otros', detail:'Insumos y gastos varios', amount:1335000 },
      { concept:'Servicios', detail:'Servicios generales del barrio', amount:603690 }
    ]
  }
];

var lineChart;
var expenseChart;
var HOME_MONTH_KEYS = ['dic25', 'ene26', 'feb26', 'mar26', 'abr26'];
var trendData = {
  labels:[],
  egresos:[],
  ingresos:[],
  saldos:[]
};

function isMobileViewport(){
  return window.matchMedia('(max-width: 640px)').matches;
}

function syncChromeState(){
  var mobileToggle = document.getElementById('mobile-toggle');
  var notifBtn = document.querySelector('.tb-notif');
  var collapseBtn = document.getElementById('collapse-btn');
  var notifPanel = document.getElementById('notif-panel');
  if (mobileToggle) mobileToggle.setAttribute('aria-expanded', document.body.classList.contains('sidebar-open') ? 'true' : 'false');
  if (collapseBtn) collapseBtn.setAttribute('aria-expanded', document.body.classList.contains('sidebar-collapsed') ? 'false' : 'true');
  if (notifBtn && notifPanel) notifBtn.setAttribute('aria-expanded', notifPanel.classList.contains('on') ? 'true' : 'false');
}

function showToast(title, message){
  var stack = document.getElementById('toast-stack');
  if (!stack) return;
  var toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = '<strong>' + title + '</strong><span>' + message + '</span>';
  stack.appendChild(toast);
  window.requestAnimationFrame(function(){ toast.classList.add('on'); });
  window.setTimeout(function(){
    toast.classList.remove('on');
    window.setTimeout(function(){ if (toast.parentNode) toast.parentNode.removeChild(toast); }, 220);
  }, 2200);
}

function resizeCharts(){
  if (lineChart && typeof lineChart.resize === 'function') lineChart.resize();
  if (expenseChart && typeof expenseChart.resize === 'function') expenseChart.resize();
}

function openImageLightbox(src, alt){
  var box = document.getElementById('image-lightbox');
  var img = document.getElementById('image-lightbox-img');
  var caption = document.getElementById('image-lightbox-caption');
  if (!box || !img || !caption || !src) return;
  img.src = src;
  img.alt = alt || 'Imagen ampliada';
  caption.textContent = alt || '';
  box.classList.add('on');
  box.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeImageLightbox(){
  var box = document.getElementById('image-lightbox');
  var img = document.getElementById('image-lightbox-img');
  var caption = document.getElementById('image-lightbox-caption');
  if (!box || !img || !caption) return;
  box.classList.remove('on');
  box.setAttribute('aria-hidden', 'true');
  img.src = '';
  img.alt = '';
  caption.textContent = '';
  document.body.style.overflow = '';
}

function goPage(name){
  var target = document.getElementById('sec-' + name);
  if (!target) return;
  document.querySelectorAll('.page').forEach(function(p){ p.classList.remove('on'); });
  target.classList.add('on');
  document.querySelectorAll('.nav-item,.mnb').forEach(function(b){ b.classList.toggle('active', b.getAttribute('data-s') === name); b.classList.toggle('on', b.getAttribute('data-s') === name); });
  var label = document.getElementById('tb-page-title');
  if (label) label.textContent = PAGE_TITLES[name] || name;
  var notifPanel = document.getElementById('notif-panel');
  if (notifPanel) notifPanel.classList.remove('on');
  document.body.classList.remove('sidebar-open');
  syncChromeState();
  window.scrollTo(0,0);
  window.requestAnimationFrame(function(){
    resizeCharts();
    window.setTimeout(resizeCharts, 120);
  });
}

window.go = function(name){
  var map = { inicio:'inicio', gastos:'gastos', liquidaciones:'liquidaciones', comunicados:'documentos', documentos:'documentos', pago:'pago', contacto:'contacto', configuracion:'contacto' };
  goPage(map[name] || name);
};

function renderGastosLetters(){
  var root = document.getElementById('gastos-letters');
  if (!root) return;
  root.innerHTML = LIQUIDACIONES.map(function(item){
    var tag = item.status === 'Cerrado' ? 'tag ok' : 'tag warn';
    return '<div class="liquid-card">' +
      '<button class="liquid-btn" data-liquid="' + item.id + '">' +
        '<div><div class="liquid-title">' + item.title + '</div><div class="liquid-sub">' + item.date + ' - ' + item.due + '</div></div>' +
        '<div class="liquid-amount">' + item.amount + ' <span class="' + tag + '">' + item.status + '</span></div>' +
        '<span class="aa" id="aa-' + item.id + '">&#9660;</span>' +
      '</button>' +
      '<div class="liquid-body" id="liquid-' + item.id + '"><div class="liquid-inner">' + item.bodyHtml + '</div></div>' +
    '</div>';
  }).join('');
}

function fmt(value){
  return '$ ' + value.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function signedFmt(value){
  return (value < 0 ? '-$ ' : '$ ') + Math.abs(value).toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function compactFmt(value){
  var abs = Math.abs(value);
  if (abs >= 1000000) {
    return (value < 0 ? '-$ ' : '$ ') + (abs / 1000000).toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + 'M';
  }
  if (abs >= 1000) {
    return (value < 0 ? '-$ ' : '$ ') + (abs / 1000).toLocaleString('es-AR', { minimumFractionDigits: 0, maximumFractionDigits: 0 }) + 'K';
  }
  return signedFmt(value);
}

function ce(d){
  var total = 0;
  Object.values(d.egresos).forEach(function(sec){
    if (!sec.items) return;
    sec.items.forEach(function(row){ total += row[2] || 0; });
  });
  return total;
}

function ci(d){
  return d.ingresos.reduce(function(sum, row){ return sum + (row[2] || 0); }, 0);
}

function getMonthSummary(key){
  var d = MESES[key];
  if (!d) return null;
  var ingresos = ci(d);
  var egresos = ce(d);
  return {
    key:key,
    label:d.mes + ' ' + d.anio,
    shortLabel:d.mes.slice(0, 3) + ' ' + d.anio,
    ingresos:ingresos,
    egresos:egresos,
    saldo:d.saldoInicial + ingresos - egresos
  };
}

function buildTrendData(){
  var items = HOME_MONTH_KEYS.map(getMonthSummary).filter(Boolean);
  trendData = {
    labels:items.map(function(item){ return item.shortLabel; }),
    ingresos:items.map(function(item){ return item.ingresos; }),
    egresos:items.map(function(item){ return item.egresos; }),
    saldos:items.map(function(item){ return item.saldo; })
  };
  return items;
}

function buildAprilExpenseBreakdown(){
  var abril = MESES.abr26;
  if (!abril || !abril.egresos) return [];
  return [
    { label:'Mantenimiento', amount:abril.egresos.mantenimientos.items.reduce(function(sum, row){ return sum + (row[2] || 0); }, 0), color:'#1d4f8f' },
    { label:'Sueldos', amount:abril.egresos.sueldos.items.reduce(function(sum, row){ return sum + (row[2] || 0); }, 0), color:'#2d73ca' },
    { label:'Otros', amount:abril.egresos.otros.items.reduce(function(sum, row){ return sum + (row[2] || 0); }, 0), color:'#5a9cc6' },
    { label:'Servicios', amount:abril.egresos.edenor.items.reduce(function(sum, row){ return sum + (row[2] || 0); }, 0), color:'#88a88b' },
    { label:'Monotributo', amount:abril.egresos.monotributo.items.reduce(function(sum, row){ return sum + (row[2] || 0); }, 0), color:'#bea77f' },
    { label:'Seguros', amount:abril.egresos.seguros.items.reduce(function(sum, row){ return sum + (row[2] || 0); }, 0), color:'#4b8f90' }
  ];
}

function renderHomeDashboard(){
  var months = buildTrendData();
  var abril = getMonthSummary('abr26');
  var totalEgresos = months.reduce(function(sum, item){ return sum + item.egresos; }, 0);
  var totalIngresos = months.reduce(function(sum, item){ return sum + item.ingresos; }, 0);
  var lotesAlDia = CC_CURRENT.lotes.filter(function(item){ return item.deuda === 0; }).length;
  var breakdown = buildAprilExpenseBreakdown();
  var breakdownTotal = breakdown.reduce(function(sum, item){ return sum + item.amount; }, 0);
  var map = [
    ['home-abril-egresos', compactFmt(abril.egresos)],
    ['home-abril-ingresos', compactFmt(abril.ingresos)],
    ['home-abril-saldo', compactFmt(abril.saldo)],
    ['home-total-egresos', fmt(totalEgresos)],
    ['home-total-ingresos', fmt(totalIngresos)],
    ['home-saldo-acumulado', signedFmt(abril.saldo)],
    ['home-lotes-dia', lotesAlDia + ' / ' + CC_CURRENT.lotes.length]
  ];
  map.forEach(function(entry){
    var el = document.getElementById(entry[0]);
    if (el) el.textContent = entry[1];
  });
  var tableBody = document.getElementById('home-trend-table-body');
  if (tableBody) {
    tableBody.innerHTML = months.map(function(item){
      return '<tr><td>' + item.label + '</td><td class="num">' + fmt(item.ingresos) + '</td><td class="num">' + fmt(item.egresos) + '</td><td class="num">' + signedFmt(item.saldo) + '</td></tr>';
    }).join('');
  }
  var breakdownRoot = document.getElementById('home-expense-breakdown');
  if (breakdownRoot) {
    breakdownRoot.innerHTML = breakdown.map(function(item){
      var pct = breakdownTotal ? (item.amount / breakdownTotal * 100) : 0;
      return '<div class="breakdown-row"><div class="breakdown-name">' + item.label + '</div><div class="breakdown-value">' + fmt(item.amount) + ' · ' + pct.toFixed(1).replace('.', ',') + '%</div><div class="breakdown-bar"><span style="width:' + pct.toFixed(1) + '%;background:' + item.color + '"></span></div></div>';
    }).join('');
  }
}

function renderLiquidationCards(){
  var root = document.getElementById('mgrid');
  if (!root) return;
  var keys = ['may26', 'abr26', 'mar26', 'feb26', 'ene26', 'dic25'];
  root.innerHTML = keys.map(function(key){
    var d = MESES[key];
    var egr = ce(d);
    var ing = ci(d);
    var saldo = d.saldoInicial + ing - egr;
    return '<div class="mcard" data-liquid-card="' + key + '">' +
      '<div class="mc-top"><div><div class="mc-mo">' + d.mes + '</div><div class="mc-yr">' + d.anio + '</div></div><span class="mbadge ok">Cerrado</span></div>' +
      '<div class="mc-body">' +
        '<div class="mrow"><span>Vencimiento</span><strong>' + d.vto + '</strong></div>' +
        '<div class="mrow"><span>Total egresos</span><strong>' + fmt(egr) + '</strong></div>' +
        '<div class="mrow"><span>Total ingresos</span><strong>' + fmt(ing) + '</strong></div>' +
        '<div class="mdiv"></div>' +
        '<div class="msaldo"><span>Saldo del período</span><span class="' + (saldo >= 0 ? 'sp' : 'sn') + '">' + fmt(saldo) + '</span></div>' +
      '</div><button class="mcard-toggle" type="button"><span>Ver detalle completo</span><span>⌄</span></button>' +
      '<div class="mcard-detail" id="mcard-detail-' + key + '">' + buildLiquidationDetailHTML(key) + '</div>' +
    '</div>';
  }).join('');
}

function buildLiquidationDetailHTML(key){
  var d = MESES[key];
  if (!d) return '';
  var egr = ce(d);
  var ing = ci(d);
  var saldo = d.saldoInicial + ing - egr;
  var expenseSections = Object.values(d.egresos).map(function(sec){
    var sub = sec.items.reduce(function(sum, row){ return sum + (row[2] || 0); }, 0);
    var rows = sec.items.map(function(row){
      return '<tr><td>' + row[0] + '</td><td class="cm">' + (row[1] || '') + '</td><td class="am">' + ((row[2] || row[2] === 0) ? fmt(row[2]) : '$ -') + '</td></tr>';
    }).join('');
    return '<div class="slbl">' + sec.label + '</div><div class="twrap"><table class="tbl"><thead><tr><th>Concepto</th><th>Comprobante</th><th class="r">Importe</th></tr></thead><tbody>' + rows + '<tr class="str"><td colspan="2">Sub-total</td><td class="am">' + fmt(sub) + '</td></tr></tbody></table></div>';
  }).join('');
  var incomeRows = d.ingresos.map(function(row){
    return '<tr><td>' + row[0] + '</td><td class="cm">' + row[1] + '</td><td class="am">' + fmt(row[2]) + '</td></tr>';
  }).join('');
  var docsHtml = Array.isArray(d.docs) && d.docs.length ? '<div class="doc-actions">' + d.docs.map(function(doc){ return '<a class="doc-action' + (doc.primary ? ' primary' : '') + '" href="' + doc.href + '" target="_blank" rel="noopener">' + doc.label + '</a>'; }).join('') + '</div>' : '';
  return '<div class="dpanel">' +
    '<div class="dp-hdr"><div><div class="dp-title">Liquidación <span>' + d.mes + ' ' + d.anio + '</span></div><div class="dp-meta">Período: ' + d.periodo + ' · Vencimiento: ' + d.vto + '</div></div></div>' +
    '<div class="dp-body">' +
      '<div class="slbl" style="margin-top:0">Egresos</div>' + expenseSections +
      '<div class="twrap"><table class="tbl"><tbody><tr class="ttr"><td colspan="2">TOTAL DE EGRESOS</td><td class="am">' + fmt(egr) + '</td></tr></tbody></table></div>' +
      '<div class="slbl g" style="margin-top:16px">Ingresos del período</div><div class="twrap"><table class="tbl"><thead><tr><th>Propietario / Concepto</th><th>Lote</th><th class="r">Importe</th></tr></thead><tbody>' + incomeRows + '<tr class="ttr"><td colspan="2">TOTAL INGRESOS</td><td class="am">' + fmt(ing) + '</td></tr></tbody></table></div>' +
      '<div class="sboxes"><div class="sbox egr"><div class="sb-lbl">Total egresos</div><div class="sb-val">' + fmt(egr) + '</div></div><div class="sbox ing"><div class="sb-lbl">Total ingresos</div><div class="sb-val">' + fmt(ing) + '</div></div><div class="sbox ' + (saldo >= 0 ? 'sp2' : 'sn2') + '"><div class="sb-lbl">Saldo del período</div><div class="sb-val">' + fmt(saldo) + '</div></div></div>' +
      '<div class="nota"><strong>Saldo inicial del período</strong>' + fmt(d.saldoInicial) + '</div>' +
      docsHtml +
    '</div></div>';
}

var ccShowAll = false;
var ccActiveFilter = 'all';
var CC_PREVIEW = 15;

function ccRender(){
  var list = document.getElementById('cc-list');
  var input = document.getElementById('cc-search-input');
  if (!list || !input) return;
  var query = input.value.toLowerCase().trim();
  var filtered = CC_CURRENT.lotes.filter(function(l){
    var filterOk = ccActiveFilter === 'all' || (ccActiveFilter === 'dia' && l.deuda === 0) || (ccActiveFilter === 'deuda' && l.deuda > 0);
    var searchOk = !query || l.lote.toLowerCase().includes(query) || l.nombre.toLowerCase().includes(query);
    return filterOk && searchOk;
  });
  var visible = ccShowAll || query ? filtered : filtered.slice(0, CC_PREVIEW);
  list.innerHTML = filtered.length ? visible.map(function(l){
    return '<div class="cc-row"><span class="cc-lote">' + l.lote + '</span><span class="cc-nombre">' + l.nombre + '</span>' + (l.deuda === 0 ? '<span class="cc-deuda-ok">Al día</span>' : '<span class="cc-deuda-amt">$' + (l.deuda / 1000).toFixed(0) + 'K</span>') + '</div>';
  }).join('') : '<div class="cc-empty">Sin resultados para "' + query + '"</div>';
  var toggle = document.getElementById('cc-toggle');
  if (toggle) {
    if (query || filtered.length <= CC_PREVIEW) {
      toggle.style.display = 'none';
    } else {
      toggle.style.display = 'block';
      toggle.textContent = ccShowAll ? 'Ver menos' : 'Ver todos los lotes (' + filtered.length + ')';
    }
  }
}

function ccSetFilter(filter){
  ccActiveFilter = filter;
  ccShowAll = false;
  ['all', 'dia', 'deuda'].forEach(function(key){
    var btn = document.getElementById('ccf-' + key);
    if (btn) btn.classList.toggle('on', key === filter);
  });
  ccRender();
}

function fallbackCopy(text){
  var input = document.createElement('textarea');
  input.value = text;
  input.style.position = 'fixed';
  input.style.top = '0';
  input.style.left = '-9999px';
  input.style.opacity = '0';
  input.style.fontSize = '16px';
  input.style.pointerEvents = 'none';
  document.body.appendChild(input);
  input.focus();
  input.select();
  input.setSelectionRange(0, input.value.length);
  var ok = false;
  try {
    ok = document.execCommand('copy');
  } catch (err) {
    ok = false;
  }
  document.body.removeChild(input);
  return ok;
}

function cp(text, btn){
  var original = btn.textContent;
  function applySuccess(message){
    btn.textContent = 'Copiado';
    showToast('Dato copiado', message);
    window.setTimeout(function(){ btn.textContent = original; }, 1800);
  }
  function applyError(){
    btn.textContent = 'Copiar';
    showToast('No se pudo copiar', 'Copiá el dato manualmente desde esta pantalla.');
  }
  if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
    navigator.clipboard.writeText(text).then(function(){
      applySuccess('Ya podés pegarlo en tu banco, mail o mensaje.');
    }).catch(function(){
      if (fallbackCopy(text)) {
        applySuccess('Se copió usando el modo compatible del navegador.');
      } else {
        applyError();
      }
    });
    return;
  }
  if (fallbackCopy(text)) {
    applySuccess('Se copió usando el modo compatible del navegador.');
  } else {
    applyError();
  }
}

function renderCurrentAccountMeta(){
  var total = CC_CURRENT.lotes.length;
  var alDia = CC_CURRENT.lotes.filter(function(item){ return item.deuda === 0; }).length;
  var conDeuda = total - alDia;
  var section = document.getElementById('cc-section-label');
  var title = document.getElementById('cc-period-title');
  var meta = document.getElementById('cc-period-meta');
  var totalEl = document.getElementById('cc-total-lotes');
  var diaEl = document.getElementById('cc-total-dia');
  var deudaEl = document.getElementById('cc-total-deuda');
  var docsRoot = document.getElementById('cc-doc-actions');
  if (section) section.textContent = 'Cuenta Corriente - ' + CC_CURRENT.periodo;
  if (title) title.textContent = 'Estado de cuenta por lote · ' + CC_CURRENT.periodo;
  if (meta) meta.textContent = total + ' lotes totales';
  if (totalEl) totalEl.textContent = total;
  if (diaEl) diaEl.textContent = alDia;
  if (deudaEl) deudaEl.textContent = conDeuda;
  if (docsRoot) {
    docsRoot.innerHTML = '<a class="doc-action primary" href="' + APR_2026_PDFS.liquidacion + '" target="_blank" rel="noopener">Liquidación PDF</a>' +
      '<a class="doc-action" href="' + APR_2026_PDFS.estado + '" target="_blank" rel="noopener">Estado de cuentas corrientes PDF</a>';
  }
}

function renderNotices(){
  var root = document.getElementById('notice-grid');
  if (!root) return;
  root.innerHTML = NOTICES.map(function(item){
    var pdfBar = item.pdfHref
      ? '<div class="notice-pdf-bar">' +
          '<a class="notice-pdf-btn" href="' + item.pdfHref + '" target="_blank" rel="noopener">' +
            '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>' +
            'Abrir PDF' +
          '</a>' +
        '</div>'
      : '';
    return '<article class="liquid-card notice-letter-card">' +
      '<button class="liquid-btn" data-notice="' + item.id + '">' +
        '<div><div class="liquid-title">' + item.title + '</div><div class="liquid-sub">' + item.date + '</div><p class="notice-desc">' + item.desc + '</p></div>' +
        '<span class="tag">' + item.tag + '</span>' +
        '<span class="aa" id="naa-' + item.id + '">&#9660;</span>' +
      '</button>' +
      '<div class="liquid-body" id="notice-' + item.id + '">' +
        '<div class="liquid-inner">' + item.bodyHtml + '</div>' +
        pdfBar +
      '</div>' +
    '</article>';
  }).join('');
}

function money(value){
  return '$ ' + value.toLocaleString('es-AR');
}

function setChartFallback(id, message){
  var canvas = document.getElementById(id);
  if (!canvas || !canvas.parentElement) return;
  canvas.parentElement.innerHTML = '<div class="chart-empty">' + message + '</div>';
}

function renderTrendFallback(){
  var canvas = document.getElementById('chart-line');
  if (!canvas || !canvas.parentElement) return;
  var width = 720;
  var height = 250;
  var left = 56;
  var right = 16;
  var top = 18;
  var bottom = 34;
  var chartWidth = width - left - right;
  var chartHeight = height - top - bottom;
  var maxValue = Math.max.apply(null, trendData.ingresos.concat(trendData.egresos));
  if (!maxValue) return;
  var groupWidth = chartWidth / trendData.labels.length;
  var barWidth = Math.min(24, groupWidth * 0.28);
  var svg = [];
  svg.push('<svg class="chart-fallback-svg" viewBox="0 0 ' + width + ' ' + height + '" role="img" aria-label="Evolución financiera de la gestión">');
  for (var step = 0; step <= 4; step += 1) {
    var value = maxValue * step / 4;
    var y = top + chartHeight - (chartHeight * step / 4);
    svg.push('<line x1="' + left + '" y1="' + y + '" x2="' + (width - right) + '" y2="' + y + '" stroke="rgba(23,48,76,.08)" stroke-width="1"/>');
    svg.push('<text x="' + (left - 10) + '" y="' + (y + 4) + '" text-anchor="end" fill="#8a98a8" font-size="11">$ ' + Math.round(value / 1000000) + 'M</text>');
  }
  trendData.labels.forEach(function(label, index){
    var baseX = left + groupWidth * index + groupWidth / 2;
    var ingHeight = chartHeight * (trendData.ingresos[index] / maxValue);
    var egrHeight = chartHeight * (trendData.egresos[index] / maxValue);
    var gap = 6;
    svg.push('<rect x="' + (baseX - barWidth - gap / 2) + '" y="' + (top + chartHeight - ingHeight) + '" width="' + barWidth + '" height="' + ingHeight + '" rx="8" fill="rgba(42,143,91,.74)" stroke="#2a8f5b" stroke-width="1"/>');
    svg.push('<rect x="' + (baseX + gap / 2) + '" y="' + (top + chartHeight - egrHeight) + '" width="' + barWidth + '" height="' + egrHeight + '" rx="8" fill="rgba(31,101,183,.78)" stroke="#1f65b7" stroke-width="1"/>');
    svg.push('<text x="' + baseX + '" y="' + (height - 10) + '" text-anchor="middle" fill="#8a98a8" font-size="11">' + label + '</text>');
  });
  svg.push('</svg>');
  canvas.parentElement.innerHTML = svg.join('');
}

function renderExpenseFallback(breakdown){
  var canvas = document.getElementById('chart-bar');
  if (!canvas || !canvas.parentElement) return;
  var width = 720;
  var rowHeight = 31;
  var top = 18;
  var left = 140;
  var right = 32;
  var bottom = 18;
  var height = top + bottom + (breakdown.length * rowHeight);
  var chartWidth = width - left - right;
  var total = breakdown.reduce(function(sum, item){ return sum + item.amount; }, 0);
  var maxValue = Math.max.apply(null, breakdown.map(function(item){ return item.amount; }));
  var svg = [];
  svg.push('<svg class="chart-fallback-svg" viewBox="0 0 ' + width + ' ' + height + '" role="img" aria-label="Composición de egresos abril 2026">');
  breakdown.forEach(function(item, index){
    var y = top + index * rowHeight;
    var barWidth = maxValue ? (item.amount / maxValue * chartWidth) : 0;
    var pct = total ? (item.amount / total * 100) : 0;
    svg.push('<text x="' + (left - 12) + '" y="' + (y + 16) + '" text-anchor="end" fill="#31475f" font-size="12" font-weight="700">' + item.label + '</text>');
    svg.push('<rect x="' + left + '" y="' + y + '" width="' + chartWidth + '" height="18" rx="9" fill="rgba(19,44,76,.06)"/>');
    svg.push('<rect x="' + left + '" y="' + y + '" width="' + barWidth + '" height="18" rx="9" fill="' + item.color + '"/>');
    svg.push('<text x="' + (left + barWidth + 8) + '" y="' + (y + 14) + '" fill="#8a98a8" font-size="11">' + pct.toFixed(1).replace('.', ',') + '%</text>');
  });
  svg.push('</svg>');
  canvas.parentElement.innerHTML = svg.join('');
}

function initCharts(){
  var breakdown = buildAprilExpenseBreakdown();
  if (isMobileViewport()) {
    if (lineChart) { lineChart.destroy(); lineChart = null; }
    if (expenseChart) { expenseChart.destroy(); expenseChart = null; }
    return;
  }
  if (typeof Chart === 'undefined') {
    renderTrendFallback();
    renderExpenseFallback(breakdown);
    return;
  }
  var compact = window.matchMedia('(max-width: 640px)').matches;
  var ctxLine = document.getElementById('chart-line');
  if (ctxLine) {
    if (lineChart) lineChart.destroy();
    lineChart = new Chart(ctxLine, {
      type:'bar',
      data:{ labels:trendData.labels, datasets:[
        { label:'Ingresos', data:trendData.ingresos, backgroundColor:'rgba(42,143,91,.74)', borderColor:'#2a8f5b', borderWidth:1, borderRadius:compact ? 8 : 10, barThickness:compact ? 14 : 20, yAxisID:'y' },
        { label:'Egresos', data:trendData.egresos, backgroundColor:'rgba(31,101,183,.78)', borderColor:'#1f65b7', borderWidth:1, borderRadius:compact ? 8 : 10, barThickness:compact ? 14 : 20, yAxisID:'y' }
      ] },
      options:{ responsive:true, maintainAspectRatio:false, interaction:{mode:'index', intersect:false}, plugins:{legend:{position:'bottom',labels:{boxWidth:9,usePointStyle:true,pointStyle:'circle',color:'#6e7f93',padding:compact ? 12 : 16,font:{size:compact ? 11 : 12}}}, tooltip:{callbacks:{label:function(ctx){return ' ' + ctx.dataset.label + ': $ ' + (ctx.raw/1000000).toFixed(2).replace('.',',') + ' M';}}}}, scales:{y:{ticks:{callback:function(v){return '$ ' + (v/1000000).toFixed(0) + 'M';},color:'#8a98a8',maxTicksLimit:compact ? 4 : 6,font:{size:compact ? 10 : 11}},grid:{color:'rgba(23,48,76,.06)'},border:{display:false}},x:{ticks:{color:'#8a98a8',font:{size:compact ? 10 : 11}},grid:{display:false},border:{display:false}}} }
    });
  }
  var ctxBar = document.getElementById('chart-bar');
  if (ctxBar) {
    if (expenseChart) expenseChart.destroy();
    expenseChart = new Chart(ctxBar, {
      type:'bar',
      data:{ labels:breakdown.map(function(item){ return item.label; }), datasets:[{ label:'Egresos abril', data:breakdown.map(function(item){ return item.amount; }), backgroundColor:breakdown.map(function(item){ return item.color; }), borderRadius:8, barThickness:18 }] },
      options:{ indexAxis:'y', responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}, tooltip:{callbacks:{label:function(ctx){var total = breakdown.reduce(function(sum, item){ return sum + item.amount; }, 0); var pct = (ctx.raw / total * 100).toFixed(1).replace('.',','); return ' ' + fmt(ctx.raw) + ' · ' + pct + '%';}}}}, scales:{x:{ticks:{callback:function(v){return '$ ' + (v/1000000).toFixed(0) + 'M';},color:'#8a98a8',maxTicksLimit:compact ? 4 : 6,font:{size:compact ? 10 : 11}},grid:{color:'rgba(23,48,76,.06)'},border:{display:false}},y:{ticks:{color:'#31475f',font:{weight:'700',size:compact ? 10 : 11}},grid:{display:false},border:{display:false}}} }
    });
  }
}

function bindInteractions(){
  document.querySelectorAll('[data-s]').forEach(function(btn){
    btn.addEventListener('click', function(e){
      e.preventDefault();
      goPage(btn.getAttribute('data-s'));
    });
  });
  document.querySelectorAll('[data-go]').forEach(function(btn){
    btn.addEventListener('click', function(e){
      e.preventDefault();
      goPage(btn.getAttribute('data-go'));
    });
  });
  document.querySelectorAll('[data-liquid]').forEach(function(btn){
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', 'liquid-' + btn.getAttribute('data-liquid'));
    btn.addEventListener('click', function(){
      var id = btn.getAttribute('data-liquid');
      var body = document.getElementById('liquid-' + id);
      var arrow = document.getElementById('aa-' + id);
      if (!body) return;
      var open = body.classList.contains('o');
      body.classList.toggle('o', !open);
      btn.setAttribute('aria-expanded', open ? 'false' : 'true');
      if (arrow) arrow.classList.toggle('o', !open);
      body.style.maxHeight = open ? '0px' : body.scrollHeight + 'px';
    });
  });
  document.querySelectorAll('[data-liquid-card]').forEach(function(card){
    card.addEventListener('click', function(e){
      if (e.target && e.target.closest('.twrap')) return;
      var key = card.getAttribute('data-liquid-card');
      var body = document.getElementById('mcard-detail-' + key);
      var open = body && body.classList.contains('o');
      document.querySelectorAll('[data-liquid-card]').forEach(function(other){
        var otherKey = other.getAttribute('data-liquid-card');
        var otherBody = document.getElementById('mcard-detail-' + otherKey);
        other.classList.toggle('sel', other === card && !open);
        if (otherBody) {
          otherBody.classList.remove('o');
          otherBody.style.maxHeight = '0px';
        }
      });
      if (!body) return;
      if (!open) {
        body.classList.add('o');
        body.style.maxHeight = Math.min(body.scrollHeight, 760) + 'px';
      }
    });
  });
  document.querySelectorAll('[data-notice]').forEach(function(btn){
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', 'notice-' + btn.getAttribute('data-notice'));
    btn.addEventListener('click', function(){
      var id = btn.getAttribute('data-notice');
      var body = document.getElementById('notice-' + id);
      var arrow = document.getElementById('naa-' + id);
      if (!body) return;
      var open = body.classList.contains('o');
      body.classList.toggle('o', !open);
      btn.setAttribute('aria-expanded', open ? 'false' : 'true');
      if (arrow) arrow.classList.toggle('o', !open);
      body.style.maxHeight = open ? '0px' : body.scrollHeight + 'px';
    });
  });
  var ccInput = document.getElementById('cc-search-input');
  if (ccInput) ccInput.addEventListener('input', function(){ ccShowAll = false; ccRender(); });
  document.querySelectorAll('[data-cc-filter]').forEach(function(btn){
    btn.addEventListener('click', function(){ ccSetFilter(btn.getAttribute('data-cc-filter')); });
  });
  var ccToggleBtn = document.getElementById('cc-toggle');
  if (ccToggleBtn) ccToggleBtn.addEventListener('click', function(){ ccShowAll = !ccShowAll; ccRender(); });
  var notifBtn = document.querySelector('.tb-notif');
  var notifPanel = document.getElementById('notif-panel');
  if (notifBtn && notifPanel) {
    notifBtn.addEventListener('click', function(e){
      e.stopPropagation();
      notifPanel.classList.toggle('on');
      syncChromeState();
    });
    notifPanel.addEventListener('click', function(e){ e.stopPropagation(); });
    document.addEventListener('click', function(){ notifPanel.classList.remove('on'); syncChromeState(); });
  }
  document.querySelectorAll('[data-copy]').forEach(function(btn){
    btn.addEventListener('click', function(e){
      e.preventDefault();
      cp(btn.getAttribute('data-copy'), btn);
    });
  });
  var collapse = document.getElementById('collapse-btn');
  if (collapse) collapse.addEventListener('click', function(){
    document.body.classList.toggle('sidebar-collapsed');
    syncChromeState();
  });
  var mobile = document.getElementById('mobile-toggle');
  if (mobile) mobile.addEventListener('click', function(){
    document.body.classList.toggle('sidebar-open');
    syncChromeState();
  });
  var overlay = document.getElementById('sidebar-overlay');
  if (overlay) overlay.addEventListener('click', function(){
    document.body.classList.remove('sidebar-open');
    syncChromeState();
  });
  var resetBtn = document.getElementById('sidebar-reset');
  if (resetBtn) resetBtn.addEventListener('click', function(){
    document.body.classList.remove('sidebar-open');
    document.body.classList.remove('sidebar-collapsed');
    document.querySelectorAll('.liquid-body,.mcard-detail').forEach(function(el){
      el.classList.remove('o');
      el.style.maxHeight = '0px';
    });
    document.querySelectorAll('[data-liquid],[data-notice]').forEach(function(btn){
      btn.setAttribute('aria-expanded', 'false');
    });
    document.querySelectorAll('[data-liquid-card]').forEach(function(card){
      card.classList.remove('sel');
    });
    var notifPanelReset = document.getElementById('notif-panel');
    if (notifPanelReset) notifPanelReset.classList.remove('on');
    goPage('inicio');
    showToast('Sesión reiniciada', 'La vista volvió al inicio sin perder la información disponible.');
  });
  document.querySelectorAll('.notice-gallery-card img').forEach(function(img){
    img.addEventListener('click', function(e){
      e.stopPropagation();
      openImageLightbox(img.getAttribute('src'), img.getAttribute('alt') || '');
    });
  });
  var imageLightbox = document.getElementById('image-lightbox');
  if (imageLightbox) {
    imageLightbox.addEventListener('click', function(e){
      if (e.target === imageLightbox) closeImageLightbox();
    });
  }
  var imageLightboxClose = document.getElementById('image-lightbox-close');
  if (imageLightboxClose) imageLightboxClose.addEventListener('click', closeImageLightbox);
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape') {
      closeImageLightbox();
      document.body.classList.remove('sidebar-open');
      var notifPanelEsc = document.getElementById('notif-panel');
      if (notifPanelEsc) notifPanelEsc.classList.remove('on');
      syncChromeState();
    }
  });
  window.addEventListener('resize', function(){
    resizeCharts();
    initCharts();
    syncChromeState();
  });
  window.addEventListener('orientationchange', function(){ window.setTimeout(function(){ resizeCharts(); initCharts(); }, 150); });
  window.addEventListener('pageshow', function(){ window.setTimeout(function(){ resizeCharts(); initCharts(); }, 120); });
}

document.addEventListener('DOMContentLoaded', function(){
  renderGastosLetters();
  renderLiquidationCards();
  renderCurrentAccountMeta();
  renderHomeDashboard();
  ccRender();
  renderNotices();
  bindInteractions();
  initCharts();
  resizeCharts();
  syncChromeState();
});
