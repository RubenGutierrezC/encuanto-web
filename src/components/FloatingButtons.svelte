<script lang='ts'>
  interface Rate {
    id: number
    logo: string
  }

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

</script>

<div class='absolute right-0 top-2/4 bottom-2/4'>
	{#each rates as rate}
		<div class='rounded-tl-full rounded-bl-full h-16 w-16 my-4 bg-mgreen flex items-center hover:w-20' >
      <img  src={rate.logo} alt='rate' width='40px' height='40px' class='rounded-full ml-2' />
    </div>
	{/each}
</div>
