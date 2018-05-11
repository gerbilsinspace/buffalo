import buffalo from './buffalo';

describe('buffalo', () => {
  it('can run without crashing', () => {
    expect(buffalo).toBeDefined();
    expect(buffalo).toBeInstanceOf(Function);
  });

  // Test the boundaries
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

  // Test inside the boundaries
  it('should return "right" when passed the number 2', () => {
    const result = buffalo(2);
    expect(result).toEqual('right');
  });

  it('should return "right" when passed the number 3', () => {
    const result = buffalo(3);
    expect(result).toEqual('right');
  });

  it('should return "right" when passed the number 5', () => {
    const result = buffalo(5);
    expect(result).toEqual('right');
  });

  it('should return "right" when passed the number 8', () => {
    const result = buffalo(8);
    expect(result).toEqual('right');
  });

  it('should return "right" when passed the number 13', () => {
    const result = buffalo(13);
    expect(result).toEqual('right');
  });

  it('should return "right" when passed the number 21', () => {
    const result = buffalo(21);
    expect(result).toEqual('right');
  });

  it('should return "left" when passed the number 34', () => {
    const result = buffalo(34);
    expect(result).toEqual('left');
  });

  it('should return "left" when passed the number 55', () => {
    const result = buffalo(55);
    expect(result).toEqual('left');
  });

  // Test outside the boundaries
  it('should return nothing when given -1', () => {
    const result = buffalo(-1);
    expect(result).toEqual();
  });

  it('should return nothing when given 60', () => {
    const result = buffalo(-1);
    expect(result).toEqual();
  });

  it('should return nothing when given no number', () => {
    const result = buffalo();
    expect(result).toEqual();
  });

  // Added by the testers
  it('should return nothing when given the text "NaN"', () => {
    const result = buffalo('NaN');
    expect(result).toEqual();
  });

  it('should return "right" when given 0.2', () => {
    const result = buffalo(0.2);
    expect(result).toEqual('right');
  });

  it('should return "left" when given 29.2', () => {
    const result = buffalo(29.2);
    expect(result).toEqual('left');
  });

  it('should return nothing when given 123456789', () => {    const result = buffalo(123456789);
    expect(result).toEqual();
  });

  it('should return nothing when given -123456789', () => {
    const result = buffalo(-123456789);
    expect(result).toEqual();
  });
});