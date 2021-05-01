<script lang="ts">
  import { onMount } from "svelte";
  import { getHistorial } from "./api/http";
  import FloatingButtons from "./components/FloatingButtons.svelte";

  let chartInstance : any

  const createChartInstance = (): any => {
    var ctx = document.getElementById("myChart");
    return new Chart(ctx, {
      type: "line",
      data: {
        labels: labelsData,
        datasets: dataSetData,
      },
      options: {
        legend: {
          display: false
        }
      },
    });
  }

  let labelsData = []

  let dataSetData = [];

  const initialize = async () => {
    try {
      const { datasets, labels } =  await getHistorial()
      labelsData = labels
      dataSetData = datasets
      chartInstance = createChartInstance()
      // console.log(data)
    } catch (error) {
      console.log()
    }
  }

  onMount(initialize);




  let selectedRatesId: number[] = [1];

  const selectRate = (event: any) => {
    const { idPosition, id } = event.detail;

    if (idPosition > -1) {
      selectedRatesId.splice(idPosition, 1);
      dataSetData.splice(0, 1)
    } else {
      selectedRatesId.push(id);
    }

    selectedRatesId = selectedRatesId;
    dataSetData = dataSetData;
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
