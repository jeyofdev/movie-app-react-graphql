import { describe, expect, it } from 'vitest';
import sum from './index';

describe('test helpers', () => {
	it('return the addition between 2 numbers', () => {
		expect(sum(1, 2)).toBe(3);
		expect(sum(1, 2)).not.toBe(5);
	});
});
