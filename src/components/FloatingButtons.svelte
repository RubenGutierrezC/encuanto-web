<script lang='ts'>
	import { createEventDispatcher } from 'svelte';

	//Declare the dispatch
	const dispatch = createEventDispatcher();


  interface Rate {
    id: number
    logo: string
  }

  export let selectedRatesId : number[] = [];

  const rates : Rate[] = [
    {
      id: 1,
      logo: 'https://miro.medium.com/max/3150/1*R8OzPobghIgjeXH-Qi4JtQ.png'
    },
    {
      id: 2,
      logo: 'https://miro.medium.com/max/3150/1*R8OzPobghIgjeXH-Qi4JtQ.png'
    },
    {
      id: 3,
      logo: 'https://miro.medium.com/max/3150/1*R8OzPobghIgjeXH-Qi4JtQ.png'
    },
    {
      id: 4,
      logo: 'https://miro.medium.com/max/3150/1*R8OzPobghIgjeXH-Qi4JtQ.png'
    },
    {
      id: 5,
      logo: 'https://miro.medium.com/max/3150/1*R8OzPobghIgjeXH-Qi4JtQ.png'
    },
  ]

  const rateIsSelected = (id: number): number => {
    return selectedRatesId.findIndex(rateId => rateId === id)
  }

  const selectRate = (id: number) => {
    console.log(id)
    const idPosition = rateIsSelected(id)
    dispatch('chageSelectedRates', { idPosition, id });

  }

</script>

<div class='flex flex-col items-end fixed right-0 top-1/4'>
	{#each rates as rate}
		<div
      class='{ selectedRatesId.some(id => id === rate.id) ? 'w-20' : 'w-16' }   rounded-tl-full rounded-bl-full h-16 my-2 bg-mgreen flex items-center cursor-pointer'
      on:click="{() => selectRate(rate.id)}"
    >
      <img  src={rate.logo} alt='rate' width='40px' height='40px' class='rounded-full ml-2' />
    </div>
	{/each}
</div>
