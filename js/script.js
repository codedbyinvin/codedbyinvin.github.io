document.addEventListener("DOMContentLoaded", function () {
    // Date cible (format: année, mois - 1, jour)
    const targetDate = new Date(2023, 0, 1);

    function updateCountdown() {
        const currentDate = new Date();
        const difference = targetDate - currentDate;

        // Calcul du nombre de jours restants
        const daysRemaining = Math.floor(difference / (1000 * 60 * 60 * 24));

        // Mettre à jour l'élément HTML du compteur
        document.getElementById("countdown").innerHTML = `${daysRemaining} jours restants`;
    }

    // Mettre à jour le compteur toutes les secondes
    setInterval(updateCountdown, 1000);

    // Mettre à jour le compteur une fois au chargement de la page
    updateCountdown();
});