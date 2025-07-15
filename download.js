document.getElementById('trabalho_escravo').addEventListener('click', function() {
    // Substitua pelo caminho real do seu PDF
    const pdfUrl = 'trabalho-escravo.pdf';
    
    // Criar um link temporário
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Trabalho-Escravo-Conteporaneo.pdf'; // Nome do arquivo para download
    
    // Disparar o download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Opcional: Feedback para o usuário
    alert('Download iniciado!');
});



document.getElementById('lava-jato').addEventListener('click', function() {
    // Substitua pelo caminho real do seu PDF
    const pdfUrl = 'lava-jato.pdf';
    
    // Criar um link temporário
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Da-Escravidão-Até-O-Lava-Jato.pdf'; // Nome do arquivo para download
    
    // Disparar o download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Opcional: Feedback para o usuário
    alert('Download iniciado!');
});