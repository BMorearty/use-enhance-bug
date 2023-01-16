# use:enhance bug?

This repo demonstrates what I think is a bug in SvelteKit’s
<code>use:enhance</code>. Form behavior is different with
<code>use:enhance</code> than without it.

Steps to reproduce the bug:

1. Make a <code>script</code> block that assigns a variable from a <code>data</code> field.
2. Make a form.
3. In the form, make an input field with <code>value={myvariable}</code>.
4. In <code>+page.server.js</code>, save the newly-set value in the form's action. 
   In <code>load</code>, return the new value.

With a plain HTML form, the newly set value gets put into the input field as expected
after form submission.

If you add <code>use:enhance</code> to the form, the input field is blank after submission.
