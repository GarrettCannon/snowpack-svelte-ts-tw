<script lang="typescript">
  import TailwindCss from "./TailwindCSS.svelte";

  import { onMount } from "svelte";

  let count: number = 0;
  onMount(() => {
    const interval = setInterval(() => count++, 1000);
    return () => {
      clearInterval(interval);
    };
  });
</script>

<style>
  :global(body) {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
  div code {
    background: #0002;
    padding: 4px 8px;
    border-radius: 4px;
  }
  div p {
    margin: 0.4rem;
  }

  div header {
    background-color: #f9f6f6;
    color: #333;
    min-height: 100vh;
    font-size: calc(10px + 2vmin);
  }
  div a {
    color: #ff3e00;
  }
  div img {
    height: 36vmin;
    margin-bottom: 3rem;
    animation: App-logo-spin infinite 1.6s ease-in-out alternate;
  }
  @keyframes App-logo-spin {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.06);
    }
  }
</style>

<div class="text-center">
  <header class="flex flex-col items-center justify-center">
    <img src="/logo.svg" alt="logo" class="pointer-events-none" />
    <p>Edit <code>src/App.svelte</code> and save to reload.</p>
    <p>Page has been open for <code>{count}</code> seconds.</p>
    <p>
      <a href="https://svelte.dev" target="_blank" rel="noopener noreferrer">
        Learn Svelte
      </a>
    </p>
  </header>
</div>
