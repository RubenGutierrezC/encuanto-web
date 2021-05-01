<script lang='ts'>
import Calculator from "./components/Calculator.svelte";
import FloatingButtons from "./components/FloatingButtons.svelte";
import { rates } from "./static/rates";

let selectedRate: {
  id: number
  name: string
  logo: string
  amount: number
} = rates[0]

const selectRate = (event: any) => {
  const { id } = event.detail;
  const idPosition = rates.findIndex(item => item.id === id)
  if (id >= -1 ) {
    selectedRate = rates[idPosition]
  }
}

</script>

<div class='w-full h-full'>
  <div class="w-full max-w-5xl mx-auto mt-40">
    <h3 class='text-7xl text-center mb-4'>{ selectedRate.amount} </h3>
    <div class='flex justify-center items-center'>
      <img class='rounded-full border-mgreen border-4 border-solid w-14 h-14' src={ selectedRate.logo } alt='rate logo'/>
      <h1 class='text-3xl text-center ml-4 font-bold'>{ selectedRate.name }</h1>
    </div>
  </div>
</div>

<FloatingButtons on:chageSelectedRates={selectRate} />
<Calculator bind:transformValue={selectedRate.amount} />
