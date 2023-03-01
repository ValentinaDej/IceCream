(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-read-more-open]'),
    closeModalBtn: document.querySelector('[data-modal-read-more-close]'),
    modal: document.querySelector('[data-modal-read-more]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(function () {
  var button = document.querySelector('.popup');
  var iframe = document.querySelector('.modal-iframe');

  button.addEventListener('click', function () {
    iframe.src = iframe.getAttribute('data-src');

    iframe.classList.toggle('hidden.iframe');
  });
})();
