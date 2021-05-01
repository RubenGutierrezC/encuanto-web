<script lang="ts">
  import { Router, Route, Link, createHistory, createMemorySource } from "svelte-navigator";
  import Home from "./Home.svelte";
  import History from "./History.svelte";
  // const memoryHistory = createHistory(createMemorySource());
  // const name='encuanto
</script>

<Router >
  <header>
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="historial">Historial</Link>

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
  }
</style>
