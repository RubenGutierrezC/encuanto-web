<script lang="ts">
  import { Router, Route, Link } from "svelte-navigator";
  import Home from "./Home.svelte";
  import History from "./History.svelte";
</script>

<Router>
  <header>
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="historial">Historial</Link>
    </nav>
  </header>

  <main class='bg-background'>
    <Route path="/">
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
</style>
