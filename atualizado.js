cript>

       

            file.addEventListener('change', previewFile);
            output.addEventListener('input', previewText);


            // abaixo são criada 3 funções 
            //previewFile,downloaFile ,
            //função para base64.

            function previewFile({ target }) {

                const file = target.file[0];
                const reader = new FileReader();

                reader.readAsDataURL(file);

                reader.onload = () => {
                    output.value = reader.result;
                    preview.src = reader.result;
                }

            };

            function downloadFile() {
                const link = document.createElement('a');
                link.href = output.value;
                link.download = 'image.png';
                link.click();
            }

            // essa função busca a imagem da função downloadfile e converte na base64
            function previewText({ target }) {
                let base64 = target.value.replace(/^data:image\/[a-z]+;base64,/, "");
                preview.src = `data:image/png;base64,${base64}`;
            }
        

        function formatDate(dateParam) {
            const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
            const date = new Date(dateParam)

            const adjustedDate = new Date(date.getTime() + 3 * 60 * 60 * 1000);

            const formattedDate = new Intl.DateTimeFormat('pt-BR', options).format(adjustedDate);
            return formattedDate
        }


        // aqui codigo de data hora na parte de baixo do site




        document.addEventListener('DOMContentLoaded', function () {
            // file.addEventListener('change',previewFile);
            //  enviar.addEventListener('click',alert('sucesso'))

            document.getElementById('poolForm').addEventListener('submit', function (event) {
                event.preventDefault(); // Previne o envio padrão do formulário



                //coleta os dados do formulario

                const formData = {


                    file: previewText(document.getElementById('file').value),
                    date: formatDate(document.getElementById('date').value),
                    nome: document.getElementById('nome').value,
                    ph: document.getElementById('ph').value,
                    cloro: document.getElementById('cloro').value,
                


                };
