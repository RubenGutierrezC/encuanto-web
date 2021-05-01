<script lang="ts">
  import { onMount } from "svelte";
import { init } from "svelte/internal";
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

  const initlabelsData = ['29-4-2021 9am', '29-4-2021 1pm', '30-4-2021 9am', '30-4-2021 1pm']

  const initdataSetData = [{
      id: 1,
      label: 'Monitor Dolar',
      data: [2843255.17, 2886276.71, 2857440.46, 2770844.85],
      borderColor: 'yellow',
      borderWidth: 1
  },
  {
    id: 2,
    label: 'Dolar Today',
    data: [2850074.64, 2850074.64, 2900823.01, 2900823.01],
    borderColor: 'green',
    borderWidth: 1
  },
  {
    id: 3,
    label: 'BCV',
    data: [2724717.52, 2724717.52, 2746151.81, 2746151.81],
    borderColor: 'black',
    borderWidth: 1
  },
  {
    id: 4,
    label: 'AirTM',
    data: [2783296.66	, 2851645.27, 2851645.27, 2812691.00],
    borderColor: 'blue',
    borderWidth: 1
  },
  {
    id: 5,
    label: 'En cuanto',
    data: [2800335.25, 2828178.35, 2839015.13, 2807627.6],
    borderColor: 'red',
    borderWidth: 1
  }
];

  let labelsData = [...initlabelsData]
  let dataSetData = [...initdataSetData]

  const initialize = async () => {
    try {
      // const { datasets, labels } =  await getHistorial()
      // labelsData = labels
      // dataSetData = datasets
      chartInstance = createChartInstance()
      // console.log(data)
    } catch (error) {
      console.log()
    }
  }

  onMount(initialize);




  let selectedRatesId: number[] = [0, 1, 2, 3, 4, 5];

  const selectRate = (event: any) => {
    const { idPosition, id } = event.detail;


    if (idPosition > -1) {
      const positionSelected = selectedRatesId.findIndex(item => item === id)

      selectedRatesId.splice(positionSelected, 1);

      const findIdIndex = dataSetData.findIndex(item => item.id === id)
      if (findIdIndex > -1) dataSetData.splice(findIdIndex, 1)

    } else {
      // console.log(initdataSetData[id])
      const findIdIndex = dataSetData.findIndex(item => item.id === id)
      if (findIdIndex === -1) {
        const find = initdataSetData.findIndex(item => item.id === id)
        dataSetData.push(initdataSetData[find])
      }
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
