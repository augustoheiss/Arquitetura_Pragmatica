// app.js

let myChart = null; // Variável global para guardar o gráfico

function init() {
    updateDashboard();
}

// Função principal chamada quando os filtros mudam
function updateDashboard() {
    const subjectKey = document.getElementById('subjectSelect').value;
    const selectedGrade = parseInt(document.getElementById('gradeSelect').value);
    const selectedYear = parseInt(document.getElementById('yearSelect').value);

    const subjectData = schoolData[subjectKey];

    if (!subjectData) return;

    // 1. Calcular a Coorte (Trajetória)
    const cohortData = calculateCohort(subjectData.history, selectedYear, selectedGrade);
    
    // 2. Renderizar Gráfico
    renderChart(cohortData, subjectData.label);

    // 3. Atualizar Tabela de Níveis (Apenas se a seleção for 2025 ou se quisermos ver o "status atual" dessa série)
    // Mostra os níveis da série selecionada no filtro, referente a 2025 (dados mais recentes)
    updateLevelsDisplay(subjectData.levels_2025, selectedGrade);
    
    // Atualiza texto descritivo
    const startYear = cohortData.length > 0 ? cohortData[0].year : selectedYear;
    const endYear = cohortData.length > 0 ? cohortData[cohortData.length - 1].year : selectedYear;
    document.getElementById('cohortDescription').innerText = 
        `Rastreando alunos que estavam no ${selectedGrade}º ano em ${selectedYear}. Mostrando histórico de ${startYear} até ${endYear}.`;
}

// A Lógica Sherlock: Encontrar onde essa turma estava antes e onde estará depois
function calculateCohort(historyData, refYear, refGrade) {
    const cohort = [];
    
    // Vamos varrer todos os dados históricos disponíveis
    // A fórmula é: Para um dado registro (ano, serie), ele pertence à coorte se:
    // (Ano do Registro - Série do Registro) == (Ano Referência - Série Referência)
    // Ex: 5º ano em 2023 (Diferença 2018). 
    //     4º ano em 2022 (Diferença 2018) -> Pertence!
    //     6º ano em 2024 (Diferença 2018) -> Pertence!
    
    const targetDiff = refYear - refGrade;

    historyData.forEach(record => {
        if ((record.year - record.grade) === targetDiff) {
            cohort.push(record);
        }
    });

    // Ordenar por ano
    return cohort.sort((a, b) => a.year - b.year);
}

function renderChart(data, label) {
    const ctx = document.getElementById('evolutionChart').getContext('2d');

    // Se já existe gráfico, destruir para criar novo (evitar bugs de sobreposição)
    if (myChart) {
        myChart.destroy();
    }

    const labels = data.map(d => `${d.grade}º Ano (${d.year})`);
    const values = data.map(d => d.value);

    // Cores dinâmicas baseadas na nota (Visual Game Style)
    const pointColors = values.map(v => v >= 200 ? '#00C851' : (v >= 175 ? '#ffbb33' : '#ff4444'));

    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: `Nota Média - ${label}`,
                data: values,
                borderColor: '#00d4ff',
                backgroundColor: 'rgba(0, 212, 255, 0.1)',
                borderWidth: 3,
                pointBackgroundColor: pointColors,
                pointRadius: 6,
                pointHoverRadius: 8,
                fill: true,
                tension: 0.3 // Curva suave
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: false,
                    grid: { color: '#444' },
                    ticks: { color: '#e0e0e0' }
                },
                x: {
                    grid: { color: '#444' },
                    ticks: { color: '#e0e0e0' }
                }
            },
            plugins: {
                legend: { labels: { color: 'white' } },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Nota: ${context.raw}`;
                        }
                    }
                }
            }
        }
    });
}

function updateLevelsDisplay(levelsData, grade) {
    const container = document.getElementById('levelsContainer');
    if (!levelsData) {
        container.innerHTML = "<p>Dados de níveis não disponíveis para esta matéria.</p>";
        return;
    }

    const levelRecord = levelsData.find(l => l.grade === grade);

    if (levelRecord) {
        container.innerHTML = `
            <div style="text-align: center; margin-bottom: 15px;">
                <span style="font-size: 1.2rem; font-weight: bold;">${grade}º Ano (2025)</span>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Nível</th>
                        <th>% Alunos</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="legend-ab">Abaixo do Básico</td>
                        <td>${levelRecord.AB}%</td>
                    </tr>
                    <tr>
                        <td class="legend-b">Básico</td>
                        <td>${levelRecord.B}%</td>
                    </tr>
                    <tr>
                        <td class="legend-ad">Adequado</td>
                        <td>${levelRecord.AD}%</td>
                    </tr>
                    <tr>
                        <td class="legend-av">Avançado</td>
                        <td>${levelRecord.AV}%</td>
                    </tr>
                </tbody>
            </table>
            <div style="display: flex; height: 10px; margin-top: 10px; border-radius: 5px; overflow: hidden;">
                <div style="width: ${levelRecord.AB}%; background: #ff4444;" title="AB"></div>
                <div style="width: ${levelRecord.B}%; background: #ffbb33;" title="B"></div>
                <div style="width: ${levelRecord.AD}%; background: #00C851;" title="AD"></div>
                <div style="width: ${levelRecord.AV}%; background: #33b5e5;" title="AV"></div>
            </div>
        `;
    } else {
        container.innerHTML = `<p>Dados de níveis não encontrados para o ${grade}º ano nesta matéria.</p>`;
    }
}

// Iniciar ao carregar
window.onload = init;