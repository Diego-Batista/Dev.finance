const Modal = {
    open(){
        // Abrir modal
        // Adicionar class ao modal
        document.querySelector('.modal-overlay').classList.add('active');
    },
    close(){
        // Fechar modal
        // Remover class do modal
        document.querySelector('.modal-overlay').classList.remove('active');
    }
}