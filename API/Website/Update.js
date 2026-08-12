const updateLogs = [
    {
        version: "Development.0.0.7",
        date: "2026-5-3T17:49:41+08:00",
        type: "dev",
        changes: [
            "Add HSR01-02-000",
            "Signal System Update",
            "Add Signal Flag",
            "Card Update",
            "Spawn Line Completed",
            "Add H02-03-000, L01-02-000, L02-01-000, L03-01-000, L03-02-000, T01-01-000"
        ]
    },
    {
        version: "Main.0.0.0",
        date: "YYYY-MM-DDTHH:MM:SS+HH:MM",
        type: "main",
        changes: [
            "Initial Release"
        ]
    }
];

function renderUpdates() {
    const container = document.getElementById('update-container');
    if (!container) return;

    let htmlContent = '';

    updateLogs.forEach(log => {
        htmlContent += `
        <div class="update-card ${log.type}">
            <div class="update-header">
                <span class="version-tag">${log.version}</span>
                <span class="date-tag">(${log.date})</span>
            </div>
            <ul class="change-list">
                ${log.changes.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
        `;
    });

    container.innerHTML = htmlContent;
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderUpdates);
} else {
    renderUpdates();
}
