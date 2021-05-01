<script lang='ts'>


  let isOpen = false;
  export let transformValue = 0
  let tasaCambio = '$'
  let resultado = 0

  const onChangeInput = (evt: EventTarget) => {
    const val = parseFloat(evt.value)
    if (!isNaN(val)) {
      console.log(tasaCambio === '$')
      if (tasaCambio === '$') {
        console.log('primer if')
        resultado = val * transformValue
      } else {
        console.log('segundo if')
        resultado = val / transformValue
      }
      resultado = resultado
    } else {
      resultado = 0
    }
  }

  $: tasaCambio === '$' ? resultado = 0 : resultado = 0
  $: filterResultado = Number.parseFloat(resultado).toFixed(2);

</script>

<div class='{ isOpen ? 'h-3/6' : 'h-8' } ransition-height duration-500 ease-in-out fixed bottom-0 w-full left-0 bg-calculator'>
 <div class='w-full flex justify-center relative'>
   <div
    class='px-5 absolute -top-6 cursor-pointer'
    on:click="{() => isOpen = !isOpen}"
   >
    <p class='text-4xl text-white bg-calculator rounded-full w-8 h-8 flex justify-center'>
      { isOpen ? "v" : '^' }
    </p>
   </div>

   {#if isOpen}
      <div class='text-white text-center flex flex-col pt-10'>
        <div class='flex'>
          <select
            name="cars"
            id="cars"
            bind:value={tasaCambio}
            class='bg-mgreen rounded-full h-11 border-white border-2 border-solid'
          >
            <option value="bsS">BsS</option>
            <option value="$">$</option>
          </select>
          <input
            class='bg-background rounded-xl ml-4 text-black'
            on:input={(evt) => onChangeInput(evt.target)}
            type='number'
          />
        </div>
        <p class='text-xl text-white my-7'> convertir a  {tasaCambio === '$' ? 'BsS' : '$'} </p>
        <p class='text-7xl text-white'>{filterResultado}</p>
      </div>
    {:else}
      <p class='text-white'>convetir</p>

   {/if}



 </div>
</div>
