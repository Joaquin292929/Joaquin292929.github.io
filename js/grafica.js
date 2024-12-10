document.addEventListener("DOMContentLoaded", () => {
  // Datos de ejemplo de inicios de sesión por día
  const labels = [
    "01 Dic",
    "02 Dic",
    "03 Dic",
    "04 Dic",
    "05 Dic",
    "06 Dic",
    "07 Dic",
    "08 Dic",
    "09 Dic",
    "10 Dic",
    "11 Dic",
    "12 Dic",
    "13 Dic",
    "14 Dic",
    "15 Dic",
    "16 Dic",
    "17 Dic",
    "18 Dic",
    "19 Dic",
    "20 Dic",
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Inicios de Sesión por Día",
        data: [
          5, 8, 12, 15, 20, 18, 22, 25, 30, 28, 24, 35, 40, 42, 38, 50, 55, 60,
          62, 65,
        ],
        backgroundColor: "rgba(75, 192, 192, 0.5)", // Color de las barras
        borderColor: "rgba(75, 192, 192, 1)", // Color del borde
        borderWidth: 1, // Grosor del borde
      },
    ],
  };

  const config = {
    type: "bar",
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Inicios de Sesión durante el Último Mes",
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 10,
          },
        },
        x: {
          ticks: {
            maxRotation: 0,
            autoSkip: false,
          },
          grid: {
            offset: true,
          },
        },
      },
      elements: {
        bar: {
          barPercentage: 0.6,
          categoryPercentage: 0.8,
        },
      },
    },
  };

  const ctx = document.getElementById("loginChart").getContext("2d");
  new Chart(ctx, config);
});
