import calculate from '../calculate';

describe('calculate', () => {
  test('AC button', () => {
    expect(calculate({}, 'AC')).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  test('return empty array', () => {
    expect(calculate({ next: '0' }, '0')).toEqual({});
  });

  test('return users input', () => {
    expect(calculate({ operation: '+' }, '2')).toEqual({
      next: '2',
      operation: '+',
    });
  });

  test('return users input with decimal', () => {
    expect(calculate({ operation: '.' }, '2')).toEqual({
      next: '2',
      operation: '.',
    });
  });
});
