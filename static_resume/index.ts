function toggleSection(buttonId, sectionId) {
  const button = document.getElementById(buttonId);
  const section = document.getElementById(sectionId);

  if (!button || !section) return;

  button.addEventListener("click", () => {
    const isHidden = section.style.display === "none" || section.style.display === "";
    section.style.display = isHidden ? "block" : "none";
    button.innerHTML = isHidden ? `<b>Hide ${sectionId}</b>` : `<b>Show ${sectionId}</b>`;
    if (isHidden) section.scrollIntoView({ behavior: "smooth" });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  toggleSection("toggleSkills", "skills");
  toggleSection("toggleProjects", "projects");
});
