import buffalo from './buffalo';

describe('buffalo', () => {
  it('can run without crashing', () => {
    expect(buffalo).toBeInstanceOf(Function);
  });

  it('should return "right" when passed the number 0', () => {
    const result = buffalo(0);
    expect(result).toEqual('right');
  });
});