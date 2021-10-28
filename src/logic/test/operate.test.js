import operate from '../operate';

describe('operate', () => {
  test('add numbers', () => {
    expect(operate(2, 2, '+')).toBe('4');
  });

  test('subtract numbers', () => {
    expect(operate(4, 2, '-')).toBe('2');
  });

  test('multiply numbers', () => {
    expect(operate(2, 2, 'x')).toBe('4');
  });

  test('divide numbers', () => {
    expect(operate(2, 2, '÷')).toBe('1');
  });

  test('remainder numbers', () => {
    expect(operate(4, 2, '%')).toBe('0');
  });
});
