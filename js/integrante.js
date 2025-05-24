// Referências
const mainImage = document.getElementById("mainImage");
const secondaryImage = document.getElementById("secondaryImage")
const modal = document.getElementById("imageModal");
const closeModal = document.getElementById("closeModal");
const turma2024 = document.getElementById("turma2024");
const turma2025 = document.getElementById("turma2025");

turma2024.addEventListener("click", () => {
  modal.style.display = "block";
})

turma2025.addEventListener("click", () => {
  modal.style.display = "block";
})

// Abrir o modal ao clicar na imagem
mainImage.addEventListener("click", () => {
  modal.style.display = "block";
});

secondaryImage.addEventListener("click", () => {
  modal.style.display = "block";
})

// Fechar o modal ao clicar no X
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Fechar o modal ao clicar fora da área de conteúdo
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
