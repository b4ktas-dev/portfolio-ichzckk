  function openModal(id) {
    const modal = document.getElementById(id);
    modal.classList.remove("opacity-0", "pointer-events-none");
    modal.classList.add("opacity-100");
  }
  function closeModal(id) {
    const modal = document.getElementById(id);
    modal.classList.add("opacity-0", "pointer-events-none");
    modal.classList.remove("opacity-100");
  }