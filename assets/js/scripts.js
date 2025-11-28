function showPanel(id) {
    document.querySelectorAll(".panel").forEach(p => p.classList.remove("active"));
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));

    document.getElementById(id).classList.add("active");
    document.getElementById("tab-" + id).classList.add("active");
}
