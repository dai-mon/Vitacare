function showMainContent() {
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';
}

function changeTab(tab, sectionId) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    document.querySelectorAll('.content-section').forEach(s => s.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function logMood(mood) {
    const moodHistory = document.getElementById('moodHistory');
    const moodItem = document.createElement('li');
    moodItem.textContent = `${new Date().toLocaleDateString()} - ${mood}`;
    moodHistory.appendChild(moodItem);
}

function addGoal() {
    const goalName = document.getElementById('goalName').value;
    const goalDeadline = document.getElementById('goalDeadline').value;
    if (goalName && goalDeadline) {
        const goalList = document.getElementById('goalsList');
        const goalItem = document.createElement('li');
        goalItem.textContent = `${goalName} - Hasta: ${goalDeadline}`;
        goalList.appendChild(goalItem);
    }
}

function analyzeDiet() {
    document.getElementById('breakfastRecommendation').textContent = '🍓 Desayuno: Yogur bajo en grasa con nueces';
    document.getElementById('lunchRecommendation').textContent = '🍲 Almuerzo: Ensalada de quinoa con vegetales frescos';
    document.getElementById('dinnerRecommendation').textContent = '🍛 Cena: Pollo al horno con espárragos';
}
// Llama a la función para generar la gráfica al cargar la página
window.addEventListener('load', generateGlucoseChart);

// Generar Gráfico de Glucosa
function generateGlucoseChart() {
    const ctx = document.getElementById('glucoseChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
            datasets: [{
                label: 'Nivel de Glucosa',
                data: [95, 100, 90, 110, 105],
                borderColor: '#e63946',
                backgroundColor: 'rgba(230, 57, 70, 0.2)',
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    function toggleMenu() {
        const menu = document.getElementById('menu');
        // Alternar la visibilidad del menú
        if (menu.style.display === 'none' || menu.style.display === '') {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    }
    
}
