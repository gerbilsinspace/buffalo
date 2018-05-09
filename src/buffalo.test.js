import buffalo from './buffalo';

describe('buffalo', () => {
  it('can run without crashing', () => {
    expect(buffalo).toBeInstanceOf(Function);
    buffalo();
  });
});