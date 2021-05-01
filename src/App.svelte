<script lang="ts">
  import { Router, Route, Link, createHistory, createMemorySource } from "svelte-navigator";
  import Home from "./Home.svelte";
  import History from "./History.svelte";
  // const memoryHistory = createHistory(createMemorySource());
  // const name='encuanto
</script>

<Router >
  <header class='bg-header'>
    <nav class='flex items-center'>
      <Link to="/" class='p-4 hover:bg-calculator '>Inicio</Link>
      <Link to="historial" class='p-4 hover:bg-calculator '>Historial</Link>
      <div class='flex w-full'></div>
      <p class='text-white w-full text-right'>{new Date().toLocaleString()}</p>
    </nav>
  </header>

  <main>
    <Route path='/'>
      <Home />
    </Route>

    <Route path="historial">
      <History />
    </Route>
  </main>
</Router>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  body {
    background-color: #f6f7e9;
    padding: 0px !important;
  }

  a {
    color: #fff !important;
  }
</style>
