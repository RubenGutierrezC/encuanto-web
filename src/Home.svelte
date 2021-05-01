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
    <h1 class='text-8xl text-center'>{ selectedRate.name }</h1>
    <h3 class='text-3xl text-center'>{ selectedRate.amount} </h3>
  </div>
</div>

<FloatingButtons on:chageSelectedRates={selectRate} />
<Calculator />
