<script lang="ts">
  import "../../app.css"
  import { page } from "$app/state"
  import { fade } from "svelte/transition"
</script>

<div class="layout">
  {#key page.url.pathname}
    <div class="page-container" in:fade={{ duration: 150 }}>
      <slot />
    </div>
  {/key}
</div>