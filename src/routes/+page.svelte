<script>
  import { enhance } from '$app/forms';

  export let data;
  // Workaround: use $: city = data.city;
  let city = data.city;
</script>

<h1><code>use:enhance</code> bug?</h1>
<p>City is now {city}</p>

<!-- Traditional form -->
<form method="POST">
  Change it without <code>use:enhance</code> to
  <input name="city" value={city} type="text" />
  <input type="submit" />
</form>

<!-- Form with use:enhance -->
<form method="POST" use:enhance>
  Change it with <code>use:enhance</code> to
  <input name="city" value={city} type="text" />
  <input type="submit" />
</form>

<p>
  ^ These two forms should work the same. But <code>use:enhance</code> causes the second form field not
  to correctly initialize the value after submit. If you refresh the page after submit, the second form
  field will be initialized.
</p>
<p>
  Note that if you use <code>value={'{'}data.city{'}'}</code> instead of
  <code>data={'{'}city{'}'}</code>, it works as expected.
</p>

<style>
  * {
    font-family: sans-serif;
  }
  code {
    font-family: monospace;
  }
  p {
    max-width: 800px;
  }
</style>
