import { test, expect } from 'vitest';
import { truncate } from './index';

test('test helpers', () => {
	expect(
		truncate(
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus nec neque ut mattis. Morbi elementum nulla eget mauris tempus accumsan. Donec rhoncus id nisi at auctor.',
			20,
		),
	).toBe(
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus nec neque ut mattis. Morbi elementum nulla eget mauris tempus...',
	);

	expect(truncate('Lorem ipsum dolor sit amet', 20)).toBe(
		'Lorem ipsum dolor sit amet',
	);
});

test('test calcul', () => {
	expect(1 + 1).toBe(2);
});
