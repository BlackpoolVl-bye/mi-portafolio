// Configuración del Radar Chart
const ctx = document.getElementById('competenciesChart').getContext('2d');
const competenciesChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Backend', 'Frontend', 'Base de Datos', 'Diseño UI', 'Herramientas', 'Lógica'],
        datasets: [{
            label: 'Nivel de Competencia',
            data: [90, 85, 80, 70, 75, 95], // Ajusta tus valores aquí
            backgroundColor: 'rgba(59, 130, 246, 0.2)',
            borderColor: 'rgba(59, 130, 246, 1)',
            borderWidth: 2,
            pointBackgroundColor: '#3b82f6',
        }]
    },
    options: {
        scales: {
            r: {
                angleLines: { color: '#334155' },
                grid: { color: '#334155' },
                pointLabels: { color: '#94a3b8', font: { size: 12 } },
                ticks: { display: false }
            }
        },
        plugins: {
            legend: { display: false }
        }
    }
});

// Lógica de filtrado de habilidades
function filterSkills(category) {
    const cards = document.querySelectorAll('.skill-card');
    const buttons = document.querySelectorAll('.filter-btn');

    // Cambiar estado activo de botones
    buttons.forEach(btn => btn.classList.remove('bg-blue-600', 'text-white'));
    event.target.classList.add('bg-blue-600', 'text-white');

    cards.forEach(card => {
        if (category === 'all' || card.classList.contains(category)) {
            card.style.display = 'flex';
            card.classList.add('animate-pop-in');
        } else {
            card.style.display = 'none';
        }
    });
}