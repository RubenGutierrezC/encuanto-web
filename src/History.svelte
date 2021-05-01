<script lang="ts">
  import { onMount } from "svelte";
  import FloatingButtons from "./components/FloatingButtons.svelte";

  let chartInstance : any

  const createChartInstance = (): any => {
    var ctx = document.getElementById("myChart");
    return new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: dataSet,
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
        datalabels: {
          backgroundColor: function(context) {
            return context.dataset.backgroundColor;
          },
          display: function(context) {
            var dataset = context.dataset;
            var value = dataset.data[context.dataIndex];
            return value > 0;
          },
          color: 'white'
        }
      }
      },
    });
  }


  onMount(() => chartInstance = createChartInstance());


  let dataSet = [
    {
      id: 1,
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      borderColor: "rgba(0,0,0 1)",
      borderWidth: 1,
    },
    {
      id: 2,
      label: "# sexooooooo",
      data: [12, 80, 4, 5, 6, 3],
      borderColor: "rgba(255, 159, 64, 1)",
      borderWidth: 1,
    },
  ];

  let selectedRatesId: number[] = [1];

  const selectRate = (event: any) => {
    const { idPosition, id } = event.detail;

    if (idPosition > -1) {
      selectedRatesId.splice(idPosition, 1);
      dataSet.splice(0, 1)
    } else {
      selectedRatesId.push(id);
    }

    selectedRatesId = selectedRatesId;
    dataSet = dataSet;
    chartInstance.update();

  };
</script>

<div class="w-full h-full">
  <div class="w-full max-w-5xl mx-auto">
    <div class="text-center mb-8">Monitor Dolar</div>

    <div class="flex justify-center mb-5">
      <label for="desde" class="font-semibold">Desde:</label>
      <input id="desde" type="date" class="rounded-lg" />
      <label for="desde" class="ml-6 font-semibold">Hasta:</label>
      <input id="hasta" type="date" class="mr-8 rounded-lg" />
      <button class="rounded-full">Buscar</button>
    </div>

    <div class="h-96 w-96 mx-auto bg-white">
      <canvas id="myChart" width="400" height="400" />
    </div>
  </div>
</div>

<FloatingButtons {selectedRatesId} on:chageSelectedRates={selectRate} />
