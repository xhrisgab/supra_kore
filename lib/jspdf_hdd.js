const jsPDF = require('jspdf').jsPDF;
module.exports= async function hddPDF(x){

    const doc = new jsPDF();

//recuadro margen
    doc.setLineWidth(0.2);
    doc.rect(10, 10, 190, 250);

var n =30;
// Cabecera
    doc.setFontSize(14);

    doc.setFont('helvetica', "bold");
    doc.text("HOJA DE DESCUENTO", 105, n, null, null, "center");
n=n+15;
doc.rect(30, 39, 150, 8);

//    doc.setTextColor("black");
    doc.setFontSize(11);
    doc.text("CLIENTE", 32, n);
    doc.setFontSize(10);
    doc.text(x[1].cpp_mantit.nom_tit, 50, n-0.3);

doc.rect(80, 50, 100, 8);
n=n+10;
    doc.setFontSize(11);
    doc.text(x[0].nom_modelo2, 82, n);

n=n+15;
    doc.text("CONTRATO", 25, n);
    doc.text(x[0].ct_deposito.numerador, 55, n);
    doc.text(x[0].ct_deposito.ct_sitio.nom_sitio, 120, n);

    //console.log(x[0].ct_vendedore.nom_vendedor);

n=n+10;
    doc.text("FECHA", 25, n);
    doc.text(x[0].fec_vta_0km.toLocaleDateString('en-GB',{timeZone: 'UTC'}), 52.5,n);

doc.rect(80, 74.5, 100, 8);
    doc.text(x[0].chassis_aux1, 140, n,null, null, "center");

n=n+12;
    if (x[0].cod_moneda == 2){
        doc.text("Dólares", 170, n);
    } else {
        doc.text("Bolivianos", 170, n);
    }

    doc.rect(20, 94, 170, 8);

n=n+7;
    doc.text("PRECIO DE LISTA", 25, n);
    doc.text(x[0].precioLista, 185, n,null, null, "right");

n=n+56;

    doc.text("DESCUENTO TOTAL VENTA", 55, n);
    doc.text(x[0].descPorcent+" %", 145, n, null, null, "right");
    doc.text(x[0].descTotal, 185, n,null, null, "right");
    doc.text("PRECIO TOTAL", 55, n+8);
    doc.text(x[0].precioTotal, 185, n+8,null, null, "right");

    doc.rect(50, 150, 140, 8);
    doc.line(120, 150, 120, 158); 
    doc.rect(50, 158, 140, 8);
    doc.line(150, 150, 150, 166); 
n=n+80;
    doc.line(20, n, 80, n); 
    doc.text(x[0].ct_vendedore.nom_vendedor.trim(), 50, n+4,null, null, "center");
    doc.text("ASESOR COMERCIAL", 50, n+8,null, null, "center");



    const elpdf = await doc.save('public/hdd.pdf');
    return elpdf;
};