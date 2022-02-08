const jsPDF = require('jspdf').jsPDF;
module.exports= async function adendaPDF(x){

    const doc = new jsPDF();
// Cabecera
    doc.setTextColor("red");
    doc.setFontSize(15);

    doc.setFont('helvetica', "bold");
    doc.text("CONTRATO DE VENTA ", 10, 40);

    doc.setTextColor("black");
    doc.setFontSize(9.5);
    doc.text("NRO.:", 10, 44);
    doc.text(x[0].nro_ventas.trim()+" / "+x[0].fec_vta_0km.getFullYear(), 30, 44);
    doc.text(x[0].abrev_deposito+"", 52, 44);
    doc.text("CIUDAD:   "+x[0].ct_deposito.ct_sitio.nom_sitio+"", 100, 44);+
    doc.text("FECHA:   " + x[0].fec_vta_0km.toLocaleDateString('en-GB',{timeZone: 'UTC'}), 160, 44);
    doc.setLineWidth(0.25);
    doc.line(10, 45, 200, 45);

// Datos Personales del Cliente
    doc.setTextColor("red");
    doc.text("DATOS PERSONALES DEL CLIENTE", 10, 48);

    doc.setTextColor("black");

    doc.text("Nombre Completo:", 10, 52);
    doc.text("NIT: ", 172, 52);
    doc.text("C.I.:", 10, 58);
    doc.text("Dirección:", 10, 64);
    doc.text("Teléfono:", 10, 70);
    doc.text("Celular:", 80, 70);
    doc.text("Email:", 130, 70);

    doc.setFont("helvetica", "normal");
    doc.text(x[1].cpp_mantit.nom_tit, 43, 52);
    doc.text(x[0].nro_doc_uni, 180, 52);
    doc.text(x[0].cod_tit, 43, 58);
    doc.text(x[1].cpp_mantit.dir_particular, 43, 64);
    doc.text(x[1].cpp_mantit.tel_particular, 43, 70);
    doc.text(x[1].cpp_mantit.tel_celular, 95, 70);
    doc.text(x[1].cpp_mantit.email_tit, 145, 70);

    doc.line(10, 71, 200, 71); 


// descripcion del vehiculo
    doc.setTextColor("red");
    doc.setFont("helvetica", "bold");
    doc.text("DESCRIPCION DEL VEHICULO", 10, 74);

    doc.setTextColor("black");
    doc.text("Modelo:", 10, 78);
    doc.text("Chasis:", 10, 84);
    doc.text("Color:", 10, 90);
    doc.text("Otros:", 10, 96);
    doc.text("Año:", 93, 78);
    doc.text("Motor:", 93, 84);
    doc.text("Marca:", 93, 90);
    doc.text("Master:", 93, 96);
    doc.text("Transmisión:", 143, 96);

    doc.text(x[0].ct_vehiculo.cod_modelo, 25, 78);
    doc.text(x[0].chassis_aux1, 25, 84);
    doc.text(x[0].nom_color2, 25, 90);
    doc.text(x[0].nom_modelo2, 25, 96);
    doc.text(x[0].ct_vehiculo.año_modelo + "", 110, 78);
    doc.text(x[0].nro_motor2, 110, 84);
    doc.text(x[0].ct_vehiculo.ct_marca.nom_marca, 110, 90);
    doc.text(x[0].ct_vehiculo.cod_master, 110, 96);
    if (x[0].ct_vehiculo.tipo_caja == 'M'){
        doc.text("Mecánico", 165, 96);
    }else if(x[0].ct_vehiculo.tipo_caja == 'A') {
        doc.text("Automático", 165, 96);
    } else {
        doc.text("CVT", 165, 96);
    }

    doc.line(10, 99, 200, 99); 

//Condiciones y opciones de Venta
    doc.setTextColor("red");
    doc.text("CONDICIONES Y OPCIONES DE VENTA", 10, 102);

    doc.setTextColor("black");
    doc.text("Moneda:", 10, 108);
    doc.text("Forma de Pago:", 60, 108);
    doc.text("Monto Total:", 10, 114);
    doc.text("Cuota Inicial:", 10, 120);
    doc.text("Saldo:", 10, 126);
    doc.text("Seguro:", 10, 132);
    doc.text("Venta CIF Zona Franca:", 64, 132);

    if (x[0].cod_moneda == 2){
        doc.text("Dólares", 33, 108);
    } else {
        doc.text("Bolivianos", 33, 108);
    }

    doc.text(x[1].observacionesp, 90, 108);
    doc.text(x[0].precio, 57, 114, null, null, "right");
    doc.text(x[0].precioLiteral, 60, 114);
    if (x[0].cod_moneda == 2){
        doc.text("Dólares", 170, 114);
    } else {
        doc.text("Bolivianos", 170, 114);
    }
    doc.text(x[0].conversion, 57, 120, null, null, "right");
    doc.text(x[0].conversionLiteral, 60, 120);
    if (x[0].cod_moneda == 2){
        doc.text("Dólares", 170, 120);
    } else {
        doc.text("Bolivianos", 170, 120);
    }
    doc.text(x[0].saldo, 57, 126, null, null, "right");
    doc.text(x[0].saldoLiteral, 60, 126);
    if (x[0].cod_moneda == 2){
        doc.text("Dólares", 170, 126);
    } else {
        doc.text("Bolivianos", 170, 126);
    }
    doc.text(x[1].tipo_documento, 33, 132);
    doc.text(x[1].tipo_doc, 105, 132);
    doc.line(10, 136, 200, 136); 

    //OPCIONES CONTEMPLADOS EN EL PRECIO
    doc.setTextColor("red");
    doc.text("OPCIONES CONTEMPLADOS EN EL PRECIO:", 10, 139);
var n=143;
var l=x[2];
    doc.setTextColor("black");
    doc.setFont("helvetica", "normal");
    for (var i=0; i<l.length; i++) {
        doc.text("-  " + l[i].descripcion, 15, n);
        n=n+4;
    }
    doc.line(10, n, 200, n); 
    n=n+4;
    //OBSERVACIONES
    doc.setTextColor("red");
    doc.setFont("helvetica", "bold");
    doc.text("OBSERVACIONES: ", 10, n);

    doc.setTextColor("black");
    doc.setFont("helvetica", "normal");
    doc.text(x[0].observaciones, 43, n);
    n=n+30;

    doc.setLineWidth(0.1);
    doc.setLineDash([0.5]);
    doc.line(10, n, 60, n); 
    doc.line(80, n, 130, n);
    doc.line(150, n, 200, n);
    n=n+4;
    //doc.setFontSize(8.5);
    doc.text("FIRMA CLIENTE", 35, n, null, null, "center");
    doc.text("VoBo GERENCIA", 105, n, null, null, "center");
    doc.text("EJECUTIVO DE VENTAS", 175, n, null, null, "center");
    n=n+7;
    var xp = "NOTA IMPORTANTE.- SEÑOR CLIENTE, CROWN LTDA LE INFORMA QUE NINGUN EMPLEADO DE CROWN LTDA ESTA AUTORIZADO A RECIBIR DINERO EN EFECTIVO DE NUESTROS CLIENTES. TODO PAGO DEBE SER REALIZADO EN NUESTRAS CAJAS O POR MEDIO DE TRANSFERENCIAS BANCARIAS. ASIMISMO, POR TODA TRANSACCION EXIJA EL COMPROBANTE OFICIAL DE PAGO.";
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.text(xp, 10, n, {align: 'justify',lineHeightFactor: 1.0,maxWidth:190});

    doc.addPage()
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("CLAUSULAS", 110, 25, null, null, "center");

n=35;
    doc.setFontSize(8.5);
    doc.setFont("helvetica", "normal");
    var yy = 'Conste por el presente documento, un contrato de compra venta de vehículo que suscriben por una parte la(s) persona(s) cuyo nombre(s) aparece (n) al final de este contrato, denominado EL COMPRADOR y por la otra, CROWN LTDA. de conformidad con las cláusulas siguientes:';
    doc.text(yy, 15, n, {align: 'justify',lineHeightFactor: 1.0,maxWidth:180});
    doc.setFont("helvetica", "bold");
    doc.text("EL COMPRADOR", 110.15, n+3, null, null, "center",{charSpace:-0.25});
    doc.text("CROWN LTDA.", 152.65, n+3, null, null, "center",{charSpace:-0.1});

n=n+15;
    doc.setFont("helvetica", "normal");
    yy = "1.    De los cambios impositivos. - Si durante el proceso de compra, existiere algún reajuste económico sobre impuestos referentes al rubro por parte del Estado Plurinacional de Bolivia a Través de cualquiera de sus reparticiones, el precio de venta acordado con el comprador podrá ser modificado y/o incrementado de manera proporcional a los reajustes impositivos.\n\n2.    Desistimiento de la compra. - Queda claramente establecido que en caso de que el comprador desista de la presente compra, la empresa descontará un monto de dinero equivalente al 5% del monto total del costo del vehículo.\n\nEste descuento se realizará del monto otorgado como anticipo de reserva y/o del monto total cancelado, suma de dinero que cubrirá los daños y perjuicios ocasionados a CROWN LTDA. por el desistimiento.\n\nEl desistimiento realizado por el comprador después de emitida la facturación y registro propietario, al margen de la deducción anterior, estará sujeta al pago por parte del comprador de la carga impositiva respectiva, que implica la reversión de la transacción facturada.\n\nPor otra parte, si el comprador por cualquier motivo, decide modificar las condiciones ya pactadas respecto al derecho propietario del vehículo, deberá comunicar esta decisión por escrito a CROWN LTDA., cancelando además la suma de $us. 200 (Dólares Americanos Doscientos 00/100) por concepto de gastos administrativos, costos financieros y otros, suma de dinero que podrá ser descontada de los pagos ya realizados por el comprador, sin lugar a reclamo algún.\n\n3.    Pagos. - Este contrato surtirá todos sus efectos legales y será considerado válido, única y exclusivamente, si los depósitos por concepto de anticipo en calidad de reserva y/o cancelación total, por compra de vehículo, son respaldados de acuerdo a lo que establece el presente numeral o por medios fehacientes. El anticipo será conciliado por el vendedor con el comprador, una vez que se proceda a la facturación y entrega del vehículo.\n\nEl anticipo entregado por el comprador, no podrá ser considerado por el vendedor como pago definitivo, en razón de que éste monto estará sujeto a las contingencias establecidas en el presente contrato y los usos y costumbres del negocio automotriz. Todos los anticipos o pagos totales deberán ser realizados directamente por el comprador.\n\nSe entiende como documento o medios fehacientes, a los recibos oficiales emitidos por el vendedor o los que acrediten el depósito en sus cuentas y sean certificados por Entidades Bancarias o Financieras legalmente habilitadas.\n\nSe entenderá perfeccionada la venta y consecuente ente nacerá la obligación de emitir factura, al momento en que el comprador proceda a transferir el derecho propietario y se proceda a la entrega del vehículo adquirido, actos que no podrán realizarse si el precio no ha sido pagado en su integridad.\n\n4.    Del cambio de vehículo. - El comprador, de manera expresa, declara y autoriza a CROWN LTDA., cambiar el vehículo escogido por el comprador en lo que refiere al Chasis, con la finalidad de cumplir con lo estipulado en el presente contrato se deja claramente establecido que el cambio de unidad no podrá afectar a las especificaciones técnicas, accesorios y color elegido por el comprador inicialmente.\n\n5.    Cambio de características. - Por otra parte, si el COMPRADOR por cualquier motivo, decide modificar las condiciones ya pactas respecto al derecho propietario del vehículo, deberá comunicar esta decisión por escrito a CROWN LTDA., cancelando además la suma de $us. 200 (Doscientos Dólares Americanos Doscientos 00/100), por concepto de gastos administrativos, costos financieros y otros, suma de dinero que podrá ser descontada de los pagos ya realizados por el comprador, sin lugar a reclamo alguno.\n\n6.    El plazo perentorio para validez de la reserva. - El plazo de la reserva será de (30) treinta días como máximo, vencido el plazo de la reserva tendrá una penalidad al COMPRADOR por gastos administrativos y cobro de daños y perjuicios por la inamovilidad del vehículo por la suma de $us. 200.- (Doscientos 00/100 Dólares Americanos).\n\n7.    Negativa de Crédito. - En caso de que el COMPRADOR solicite la compra con financiamiento bancario y este sea rechazado, el cliente debe cancelar la suma de $us. 200.- (Doscientos 00/100 Dólares Americanos), debiendo ser facturado por CROWN LTDA., sin autorización expresa del cliente, consolidando el pago a favor de la empresa por concepto de gastos administrativos.\n\n8.    Pagos. - Este contrato surtirá todos sus efectos legales y será considerado valido, única y exclusivamente, si los depósitos por concepto de anticipo en calidad de reserva y/o cancelación total por compra de vehículo, son respaldados de acuerdo a lo que establece el presente numeral o por medios fehacientes. El anticipo será conciliado por el vendedor con el comprador, una vez que se proceda a la facturación y entrega del vehículo.\n\n9.    El anticipo entregado por el COMPRADOR, no podrá ser considerado por el vendedor como pago definitivo, en razón de que este monto estará sujeto a las contingencias establecidas en el presente contrato y los usos y costumbres del negocio automotriz. Todos los anticipos o pagos totales deberán ser realizados directamente por el comprador, en este entendido, el titular propietario es aquel que realiza los pagos, sean totales o parciales, en cumplimiento a la normativa de bancarización.Se entiende como documentos o medios fehacientes, a los recibos oficiales emitidos por el vendedor o los que acrediten el depósito en sus cuentas y sean certificados por Entidades Bancarias o Financieras legalmente habilitadas.Se entenderá perfeccionada la venta y consecuentemente nacerá la emisión de emitir factura, al momento en que el vendedor proceda a transferir el derecho propietario y se proceda a la entrega del vehículo adquirido, actos que no podrán realizarse si el precio no ha sido pagado en su integridad.";
    doc.text(yy, 15, n, {align: 'justify',lineHeightFactor: 1.0,maxWidth:180});


var m=15;
    doc.setFont("helvetica", "bold");
    doc.text("1.", m, n);
    doc.text("De", m+6.55, n);
    doc.text("los", m+11.3, n,{charSpace:-0.09});
    doc.text("cambios", m+16.2, n,{charSpace:-0.13});
    doc.text("impositivos", m+28.45, n, {charSpace:-0.18});
n=n+12;
    doc.text("2.", m, n);
    doc.text("Desistimiento", m+6.55, n,{charSpace:-0.13});
    doc.text("de la", m+29.03, n,{charSpace:-0.07, align:'center'});
    doc.text("compra", m+38.55, n,{charSpace:-0.15, align:'center'});
n=n+12;
    doc.text("CROWN", m+99.3, n,{charSpace:-0.04, align:'center'});
    doc.text("LTDA.", m+119.8, n,{charSpace:-0.04, align:'center'});
n=n+18;
    doc.text("CROWN LTDA.", m+84.73, n,{charSpace:-0.03, align:'center'});
n=n+12;
    doc.text("3.", m, n);
    doc.text("Pagos", m+7.1, n,{charSpace:-0.11});
n=n+48;
    doc.text("4.", m, n);
    doc.text("Del cambio de vehículo", m+5.95, n,{charSpace:-0.1});
    doc.text("CROWN LTDA.", m+114.65, n,{charSpace:-0.05});
n=n+15;
    doc.text("5.", m, n);
    doc.text("Cambio de", m+6.7, n,{charSpace:-0.1});
    doc.text("características", m+22.4, n,{charSpace:-0.12});
    doc.text("COMPRADOR", m+73, n,{charSpace:-0.05});
    doc.text("CROWN LTDA.", m+130.9, n+2.95,{charSpace:-0.03,align:'center'});
n=n+14.95;
    doc.text("6.", m, n);
    doc.text("El plazo perentorio", m+5.9, n,{charSpace:-0.1});
    doc.text("para validez", m+31.75, n,{charSpace:-0.1});
    doc.text("de la reserva", m+48.6, n,{charSpace:-0.07});
    doc.text("COMPRADOR", m+43.2, n+3,{charSpace:-0.05});
n=n+11.98;
    doc.text("7.", m, n);
    doc.text("Negativa", m+6.7, n,{charSpace:-0.1});
    doc.text("de", m+19.5, n,{charSpace:-0.1});
    doc.text("Crédito", m+23.95, n,{charSpace:-0.15});
    doc.text("COMPRADOR", m+63.3, n,{charSpace:0});
    doc.text("CROWN LTDA.", m+154.2, n+3,{charSpace:0});
n=n+11.98;
    doc.text("8.", m, n);
    doc.text("Pagos", m+7, n,{charSpace:-0.05});
n=n+14.98;
    doc.text("9.", m, n);
    doc.text("COMPRADOR", m+44, n,{charSpace:0});


    doc.addPage()
    doc.setFont("helvetica", "normal");
n=25;
yy='10.    De la Facturación. - CROWN LTDA. emitirá la factura a nombre de la persona natural o jurídica que realice el pago, a través de las formas reconocidas por la ASFI y descritas en el parágrafo anterior. Asimismo, queda claramente estipulado que el derecho propietario del vehículo recaerá sobre la persona que sea beneficiada con el crédito fiscal de la factura.\n\n11.    Casos fortuitos y/o de fuerza mayor. - CROWN LTDA., deja claramente establecido que de existir caso fortuito y/o fuerza mayor que ocasione demora o incumplimiento en el plazo de entrega del (los) vehículo (s), este plazo será ampliado automáticamente y comunicado al Comprador.\n\n12.    Garantía. - La garantía del vehículo será extensiva y válida en función al Certificado de Garantía de la marca del vehículo que adquiere el comprador:\n\nSe deja claramente establecido que el (los) vehículo (s) pierde (N) la garantía otorgada, en los siguientes casos:'
doc.text(yy, 15, n, {align: 'justify',lineHeightFactor: 1.0,maxWidth:180});


var m=15;
    doc.setFont("helvetica", "bold");
    doc.text("10.", m, n);
    doc.text("De la", m+8.1, n,{charSpace:0});
    doc.text("Facturación", m+16.4, n,{charSpace:-0.14});
    doc.text("CROWN LTDA.", m+35.75, n,{charSpace:0});

    doc.text("11.", m, n+12);
    doc.text("Casos", m+8.1, n+12,{charSpace:-0.12});
    doc.text("fortuitos", m+17.5, n+12,{charSpace:-0.15});
    doc.text("y/o de", m+29, n+12,{charSpace:0});
    doc.text("fuerza", m+38.5, n+12,{charSpace:-0.1});
    doc.text("mayor", m+47.8, n+12,{charSpace:-0.1});
    doc.text("CROWN LTDA.", m+60, n+12,{charSpace:0});

    doc.text("12.", m, n+24);
    doc.text("Garantía", m+8.5, n+24,{charSpace:-0.08});

n=n+40;
doc.setFont("helvetica", "normal");
yy='-    Cuando el vehículo cuente con fallas o daños en el odómetro (cuenta kilómetros) por que fue alterado, cambiado o desconectado de       forma que resultare dificultosa su normal lectura.\n\n-    Cuando el (los) vehículo(s) haya(n) recibido mantenimiento de cualquier taller que no haya empleado repuestos originales de la               marca del vehículo adquirido.\n\n-    Cuando se verifique el uso de repuestos no legítimos en el (los) vehículo (s)\n\n-    Cuando el vehículo cuente con daños ocasionados por el mal uso o abuso del mismo.\n\n-    Cuando el (los) vehículo (s) hubiere (n) sufrido un accidente.\n\n-    Cuando se verifique el uso de combustible, aceites, lubricantes y/o fluidos incorrectos el (los) vehículo (s)\n\n-    Cuando el vehículo tenga daños ocasionados por riesgos de guerra declarada o no declarada, actos guerrilleros, actos de autoridad,       huelgas, manifestaciones, vandalismos o fenómenos naturales.\n\n-    Cuando el vehículo sea destinado al uso de cualquier tipo de competencia, rallyes, piques o carreras de cualquier índole.\n\n-    Cuando hubiere existido exceso de carga, carga inadecuadamente colocada y/o mala conducción.\n\n-    Cuando se hayan detectado en el (los) vehículo (s) intervenciones que no correspondan a las especificaciones del mismo.\n\n-    Cuando se remplacen piezas originales de origen distinto al especificado por el fabricante.\n\n-    Cuando se haya detectado fallas resultantes de robos.'
doc.text(yy, 15, n, {align: 'left',lineHeightFactor: 1.0,maxWidth:180});

n=n+85;
doc.setFont("helvetica", "normal");
yy='13.    Manual del Propietario. - CROWN LTDA., otorgara el respectivo Manual del propietario del (los) vehículo (s) correspondientes, siendo una obligación del comprador leerlo y tomar conocimiento del correcto uso y mantenimiento del (los) vehículo (s) adquirido (s).\n\n14.    Registro de Mantenimiento. - Será necesario que el comprador guarde los registros de mantenimiento en caso de que sea necesaria la verificación y se requiera demostrar que el mantenimiento se ha realizado. Esta información será corroborada por el Sistema Informativo de la red de Servicio Técnico de CROWN LTDA.\n\n15.    Marco Normativo. - El presente contrato se reglamentará por las Leyes del Estado Plurinacional de Bolivia, en estricta sujeción al Código Civil Boliviano, Código de Procedimiento Civil Boliviano y el Código de Comercio Boliviano y demás normas conexas.'
    doc.text(yy, 15, n, {align: 'justify',lineHeightFactor: 1.0,maxWidth:180});

    doc.setFont("helvetica", "bold");

    doc.text("13.", m, n);
    doc.text("Manual del", m+8.5, n,{charSpace:-0.03});
    doc.text("Propietario", m+24.75, n,{charSpace:-0.14});
    doc.text("CROWN LTDA.", m+43.1, n,{charSpace:0.03});

    doc.text("14.", m, n+9);
    doc.text("Registro", m+9.5, n+9,{charSpace:-0.1});
    doc.text("de", m+22, n+9,{charSpace:-0.1});
    doc.text("Mantenimiento", m+26.6, n+9,{charSpace:-0.1});
    doc.text("CROWN", m+150.7, n+15,{charSpace:0});
    doc.text("LTDA.", m+172, n+15,{charSpace:-0.05});


    doc.text("15.", m, n+21);
    doc.text("Marco", m+7.9, n+21,{charSpace:-0.1});
    doc.text("Normativo", m+17, n+21,{charSpace:-0.1});


    n=n+50;
    doc.setLineWidth(0.1);
    doc.setLineDash([0.5]);
    doc.line(10, n, 60, n); 
    doc.line(80, n, 130, n);
    doc.line(150, n, 200, n);
    n=n+4;

    doc.setFont("helvetica", "normal");
    doc.text("FIRMA CLIENTE", 35, n, null, null, "center");
    doc.text("VoBo GERENCIA", 105, n, null, null, "center");
    doc.text("EJECUTIVO DE VENTAS", 175, n, null, null, "center");

    n=n+10;
    doc.setLineWidth(0.5);
    doc.setLineDash(0);
    doc.rect(25, n, 155, 40);

    doc.setFont("helvetica", "bold");
    doc.text("Constancia Entrega Resolución Administrativa RA/AEMP/Nº 94/2016.-", 30, n+5,{charSpace:0});

    doc.setFont("helvetica", "normal");
    yx="Se realiza la entrega al cliente de copia simple de la Resolución Administrativa No. RA/AEMP/Nº 94/2016 emitida por la Autoridad de Fiscalización de Empresas (AEMP)."
    doc.text(yx, 30, n+10, {align: 'justify',lineHeightFactor: 1.0,maxWidth:140});

    doc.setFont("helvetica", "bold");
    //doc.setTextColor("red");
    doc.text("RA/AEMP/Nº 94/2016", 141.5, n+10,{charSpace:-0.02});
n=n+28;
    doc.setLineWidth(0.1);
    doc.line(35, n, 75, n); 
    doc.line(85, n, 125, n);
    doc.line(135, n, 175, n);
    
    n=n+4;
    doc.setFontSize(8);
    doc.text("Nombre Completo Cliente", 55, n, null, null, "center");
    doc.text("C.I.", 105, n, null, null, "center");
    doc.text("Firma Cliente", 150, n, null, null, "center");

    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");
    var pageCount = doc.internal.getNumberOfPages();
    for(i = 0; i < pageCount; i++) { 
        doc.setPage(i); 
        doc.text(192,15, doc.internal.getCurrentPageInfo().pageNumber + "");
    }

    const elpdf = await doc.save('public/temp.pdf');
    return elpdf;
};