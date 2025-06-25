function downloadPDF(){
    console.log("El botón fue presionado.");
    const element = document.querySelector('.container-lg');
    const opt = {
        margin: 0,
        filename:'Hoja_de_Vida_Leandro_Garces.pdf',
        image: {type: 'jpg', quality:1},
        html2canvas: {scale:2, useCORS:true},
        jsPDF: {unit:'in', format:'letter', orientation:'portrait'}
    };
    html2pdf().set(opt).from(element).save()
        .then(() => {
            console.log("PDF generado exitosamente.");
        })
        .catch(err => {
            console.error("Error al generar el PDF:", err);
        });

}