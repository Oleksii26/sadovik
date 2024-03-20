(() => {
    const refs = {
        openModal: document.querySelector('[data-modal-open]'),
        openModal2: document.querySelector('[data-modal-open2]'),
        openModal3: document.querySelector('[data-modal-open3]'),
        closeModal: document.querySelector('[data-modal-close]'),
        modal: document.querySelector('[data-modal]')
    }
    refs.openModal.addEventListener('click', toggleModal)
    refs.openModal2.addEventListener('click', toggleModal)
    refs.openModal3.addEventListener('click', toggleModal)
    refs.closeModal.addEventListener('click', toggleModal)
    function toggleModal() {
        refs.modal.classList.toggle('modal-close')
    }
})()