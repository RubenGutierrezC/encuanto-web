
<script>
import { onMount } from 'svelte';
import FloatingButtons from './components/FloatingButtons.svelte';

function createChart () {

var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        },
        {
            label: '# sexooooooo',
            data: [12, 80, 4, 5, 6, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }
      ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

}

onMount(createChart)
</script>

<div class='w-full h-full'>

  <div class='w-full max-w-5xl mx-auto'>
    <div class='text-center mb-8'>
      Monitor Dolar
    </div>

    <div class='flex justify-center mb-5'>
      <label for="desde" class='font-semibold'>Desde:</label>
      <input id='desde' type="date" class='rounded-lg' />
      <label for="desde" class='ml-6 font-semibold'>Hasta:</label>
      <input id='hasta' type="date" class='mr-8 rounded-lg' />
      <button class='rounded-full'>Buscar</button>
    </div>

    <div class='h-96 w-96 mx-auto bg-white'>
      <canvas id="myChart" width="400" height="400"></canvas>

      <FloatingButtons />


    </div>

  </div>

</div>



