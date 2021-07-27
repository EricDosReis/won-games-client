import { formatCurrency } from './currency';

describe('Utils: currency', () => {
  it('should format to currency value', () => {
    expect(formatCurrency(20.0)).toBe('$20.00');
  });
});
