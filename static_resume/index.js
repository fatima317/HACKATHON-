function toggleSection(buttonId, sectionId) {
    var button = document.getElementById(buttonId);
    var section = document.getElementById(sectionId);
    if (!button || !section)
        return;
    button.addEventListener("click", function () {
        var isHidden = section.style.display === "none" || section.style.display === "";
        section.style.display = isHidden ? "block" : "none";
        button.innerHTML = isHidden ? "<b>Hide ".concat(sectionId, "</b>") : "<b>Show ".concat(sectionId, "</b>");
        if (isHidden)
            section.scrollIntoView({ behavior: "smooth" });
    });
}
document.addEventListener("DOMContentLoaded", function () {
    toggleSection("toggleSkills", "skills");
    toggleSection("toggleProjects", "projects");
});
