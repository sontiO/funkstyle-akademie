const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				playball: ['Playball', 'cursive'],
				nautigal: ['The Nautigal', 'cursive'],
				roboto: ['Roboto', 'sans-serif']
			},
			colors: {
				darkGray: '#1E1E1C',
				lightGray: '#27272A'
			}
		}
	},

	plugins: []
};
module.exports = config;
