document.getElementById('guia_trabalhista').addEventListener('click', function() {
    // Substitua pelo caminho real do seu PDF
    const pdfUrl = 'CFA_CARTILHA_TRABALHO.pdf';
    
    // Criar um link temporário
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Guia-Direitos-Trabalhistas.pdf'; // Nome do arquivo para download
    
    // Disparar o download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Opcional: Feedback para o usuário
    alert('Download iniciado!');
});



document.getElementById('manifesto_capitalista').addEventListener('click', function() {
    // Substitua pelo caminho real do seu PDF
    const pdfUrl = 'manifesto-capitalista.pdf';
    
    // Criar um link temporário
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Manifesto-Capitalista.pdf'; // Nome do arquivo para download
    
    // Disparar o download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Opcional: Feedback para o usuário
    alert('Download iniciado!');
});