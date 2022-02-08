const jsPDF = require('jspdf').jsPDF;
const Retorna = require('../lib/utils');
module.exports= async function otuPDF(x){

    const doc = new jsPDF();

/*recuadro margen
    doc.setLineWidth(0.2);
    doc.rect(10, 10, 190, 250);
*/
var n =25;
// Cabecera
doc.setTextColor("red");
    doc.setFontSize(24);

    doc.setFont('helvetica', "bold");
    doc.text("CROWN LTDA", 60, n, null, null, "center");

    doc.setTextColor("black");
    doc.setFontSize(11);
    doc.text("ORDEN DE TRABAJO UNICA", 170, n-2, null, null, "center");
    doc.text("CHECK LIST", 170, n+3, null, null, "center");

n=n+13;
    doc.setFontSize(10);
    doc.text("GERENCIA COMERCIAL", 50, n, null, null, "center");

n=n+10;
    doc.text(x[0].ct_deposito.ct_sitio.nom_sitio, 20, n);
    doc.text(x[0].fec_vta_0km.toLocaleDateString('en-GB',{timeZone: 'UTC'}), 70, n);
    doc.text("CONTRATO:", 130, n);
    doc.text(x[0].nro_ventas.trim(), 165, n);
    doc.text(x[0].ct_deposito.numerador, 175, n);

//n=48;
//    doc.rect(10, 60, 190, 10);
    doc.rect(10, 60, 95, 13);
    doc.rect(105, 60, 95, 13);
    doc.rect(10, 73, 95, 13);
    doc.line(65, 73, 65, 86);
    doc.rect(105, 73, 95, 13);
    doc.rect(10, 86, 95, 13);
    doc.rect(105, 86, 95, 13);
    doc.line(170, 86, 170, 99);
    doc.rect(10, 99, 95, 13);
    
n=n+17;

    doc.text("NOMBRE DEL CLIENTE", 53, n, null, null, "center");
    doc.setFontSize(8);
    doc.text(x[1].cpp_mantit.nom_tit.trim(), 53, n+5, null, null, "center");

    doc.setFontSize(10);
    doc.text("EJECUTIVO ENCARGADO", 153, n, null, null, "center");
    doc.text(x[0].ct_vendedore.nom_vendedor.trim(), 153, n+5, null, null, "center");

n=n+13;

    doc.text("MODELO", 40, n, null, null, "center");
    doc.text(x[0].ct_vehiculo.cod_modelo.trim(), 40, n+5, null, null, "center");

    doc.setFontSize(10);
    doc.text("MARCA", 85, n, null, null, "center");
    doc.text(x[0].ct_vehiculo.ct_marca.nom_marca.trim(), 85, n+5, null, null, "center");

    doc.text("COLOR", 153, n, null, null, "center");
    doc.text(x[0].nom_color2.trim(), 153, n+5, null, null, "center");

n=n+13;
    doc.text("CHASIS", 53, n, null, null, "center");
    doc.text(x[0].chassis_aux1.trim(), 53, n+5, null, null, "center");

    doc.text("TIPO", 140, n, null, null, "center");
    doc.text(x[0].ct_vehiculo.ct_modelo.ct_segmento.nom_segmento.trim(), 140, n+5, null, null, "center");

    doc.text("AÑO", 185, n, null, null, "center");
    doc.text(x[0].ct_vehiculo.año_modelo + "", 185, n+5, null, null, "center");

n=n+13;
    doc.text("NUMERO DE MOTOR", 53, n, null, null, "center");
    doc.text(x[0].nro_motor2.trim(), 53, n+5, null, null, "center");

n=n+18;

    doc.text("ITEM", 20, n);
    doc.text("DESCRIPCION", 45, n);
    doc.text("PRECIO", 195, n, null, null, "right");
    doc.setLineWidth(0.5);

    doc.line(20, n+1, 28.2, n+1);
    doc.line(45, n+1, 69.6, n+1);
    doc.line(195, n+1, 181.5, n+1);

m=n;
m=m+10;
var l=x[2];
for (var i=0; i<l.length; i++) {
    doc.text(l[i].item.trim(), 20, m);
    doc.text(l[i].descripcion.trim(), 45, m);
    let zx = Retorna.RetornaNunero(l[i].precio_venta)
    doc.text(zx, 195, m, null, null, "right");
    m=m+8;
}

doc.rect(15, 220, 180, 15);

doc.text("OBSERVACIONES:  " + x[0].observaciones.trim(), 20, 225, {align: 'justify',lineHeightFactor: 1.0,maxWidth:170});

doc.line(20, 270, 80, 270); 
    doc.text(x[0].ct_vendedore.nom_vendedor.trim(), 50, 270+4,null, null, "center");
    doc.text("ASESOR COMERCIAL", 50, 270+8,null, null, "center");
//    console.log(x[0].ct_vehiculo.ct_modelo.ct_segmento.nom_segmento);

    /*
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
*/

    const elpdf = await doc.save('public/otu.pdf');
    return elpdf;
};