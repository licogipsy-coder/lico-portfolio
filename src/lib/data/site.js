// Central site content. Swap the placeholder image URLs for real photo files
// (drop them in /static/photos and reference them as "/photos/name.jpg").

export const site = {
	name: 'Lico Fiddelio',
	role: 'Photographer',
	tagline: 'Light, stillness, and the space between moments.',
	location: 'Jakarta, Indonesia',
	email: 'lico.gipsy@gmail.com',
	instagram: 'https://www.instagram.com/fiddelico06_/',
	about: [
		`I'm Lico Fiddelio, a photographer working across portraiture, landscape,
		and quiet documentary work. For over a decade I've chased the same thing in
		every frame — an honest sliver of light and the feeling it leaves behind.`,
		`My approach is unhurried. I'd rather wait an hour for the right shadow than
		manufacture one. Whether it's a face, a coastline, or an empty street at dawn,
		I photograph what's already there and try to get out of its way.`,
		`Available for editorial, commercial, and personal commissions worldwide.`
	]
};

import { base } from '$app/paths';

// Placeholder photography. picsum.photos serves deterministic real photos by seed.
const img = (seed, w = 900, h = 1200) => `https://picsum.photos/seed/${seed}/${w}/${h}`;
// Real photos live in /static/photos and must carry the deploy base path.
const local = (file) => `${base}/photos/${file}`;

export const categories = [
	{ id: 'portrait', label: 'Portrait' },
	{ id: 'landscape', label: 'Landscape' },
	{ id: 'street', label: 'Street' },
	{ id: 'studio', label: 'Studio' }
];

export const photos = [
	{ id: 'p1', title: 'Morning Study', category: 'portrait', src: img('lico-portrait-1'), w: 900, h: 1200 },
	{ id: 'p2', title: 'Northern Light', category: 'landscape', src: img('lico-land-1', 1400, 900), w: 1400, h: 900 },
	{ id: 'p3', title: 'Crossing', category: 'street', src: img('lico-street-1', 1200, 900), w: 1200, h: 900 },
	{ id: 'p4', title: 'Profile in Grey', category: 'portrait', src: img('lico-portrait-2'), w: 900, h: 1200 },
	{ id: 'p5', title: 'Low Tide', category: 'landscape', src: img('lico-land-2', 1400, 900), w: 1400, h: 900 },
	{ id: 'p6', title: 'Red Coat', category: 'studio', src: img('lico-studio-1'), w: 900, h: 1200 },
	{ id: 'p7', title: 'Nine AM', category: 'street', src: img('lico-street-2', 900, 1200), w: 900, h: 1200 },
	{ id: 'p8', title: 'Ridge Line', category: 'landscape', src: img('lico-land-3', 1400, 900), w: 1400, h: 900 },
	{ id: 'p9', title: 'Held Breath', category: 'portrait', src: img('lico-portrait-3'), w: 900, h: 1200 },
	{ id: 'p10', title: 'Studio No. 4', category: 'studio', src: img('lico-studio-2', 1200, 900), w: 1200, h: 900 },
	{ id: 'p11', title: 'After Rain', category: 'street', src: img('lico-street-3', 1200, 900), w: 1200, h: 900 },
	{ id: 'p12', title: 'Quiet Hour', category: 'landscape', src: img('lico-land-4', 1400, 900), w: 1400, h: 900 },
	{ id: 'p13', title: 'Turn', category: 'portrait', src: img('lico-portrait-4'), w: 900, h: 1200 },
	{ id: 'p14', title: 'Bench', category: 'studio', src: img('lico-studio-3'), w: 900, h: 1200 },
	{ id: 'p15', title: 'Stage Light', category: 'street', src: local('stage-light.jpg'), w: 1800, h: 1200 }
];

export const featured = photos.filter((p) =>
	['p1', 'p2', 'p3', 'p6', 'p8', 'p9', 'p15'].includes(p.id)
);
