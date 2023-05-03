import { test, expect } from 'vitest';
import sayHello from './index';

test('test helpers', () => {
	expect(sayHello('Hello')).toBe('HELLO');
});

test('test calcul', () => {
	expect(1 + 1).toBe(2);
});
