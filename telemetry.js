let chartInstance = null;

export function updateTelemetry(canvasId, stats, accentColor) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    
    if (chartInstance) {
        chartInstance.destroy();
    }

    const data = {
        labels: ['Objetividade', 'Empatia', 'Lógica', 'Saúde', 'Otimismo'],
        datasets: [{
            label: 'HLM Indices',
            data: [stats.objectivity, stats.empathy, stats.logic, stats.health, stats.optimism],
            fill: true,
            backgroundColor: `${accentColor}33`,
            borderColor: accentColor,
            pointBackgroundColor: accentColor,
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: accentColor,
            borderWidth: 2
        }]
    };

    const config = {
        type: 'radar',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: { color: 'rgba(255,255,255,0.1)' },
                    grid: { color: 'rgba(255,255,255,0.1)' },
                    pointLabels: { color: 'rgba(255,255,255,0.7)', font: { size: 10 } },
                    ticks: { display: false },
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    };

    chartInstance = new Chart(ctx, config);
}
