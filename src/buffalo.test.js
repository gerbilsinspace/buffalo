import buffalo from './buffalo';

describe('buffalo', () => {
  it('can run without crashing', () => {
    expect(buffalo).toBeInstanceOf(Function);
    buffalo();
  });

  it('should return "right" when passed the number 0', () => {
    const result = buffalo(0);
    expect(result).toEqual('right');
  });

  it('should return "right" when passed the number 29', () => {
    const result = buffalo(29);
    expect(result).toEqual('right');
  });

  it('should return "left" when passed the number 30', () => {
    const result = buffalo(30);
    expect(result).toEqual('left');
  })

  it('should return "left when passed the number 59', () => {
    const result = buffalo(59);
    expect(result).toEqual('left');
  });
});