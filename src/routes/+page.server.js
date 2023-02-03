import { get, put } from '$lib/database.js';

// Load the city
export async function load() {
  let city = get('city');
  if (!city) {
    // Set an initial default
    put('city', 'SF');
    city = get('city');
  }
  return { city };
}

// Set new city based on form submit
export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const city = data.get('city');
    put('city', city);
  },
};
