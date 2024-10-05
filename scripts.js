function enviarMensagem() {
    var nome = document.getElementById('nome').value;
    var mensagem = document.getElementById('mensagem').value;

    if (document.getElementById('nome').value === "" || document.getElementById('mensagem').value === "") {
        Swal.fire({
            toast: true,
            position: "top-end",
            icon: "error",
            title: "Todos os campos devem ser preenchidos.",
            showConfirmButton: false,
            timer: 2000
        });
    } else {

        var url = `https://wa.me/5548991136703?text=Ola,%20me%20chamo%20${nome}!!%0A${mensagem}`;
        window.open(url, '_blank');
    }



}