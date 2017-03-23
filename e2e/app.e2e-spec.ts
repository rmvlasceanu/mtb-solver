import { MtbSolverAppPage } from './app.po';

describe('mtb-solver-app App', () => {
  let page: MtbSolverAppPage;

  beforeEach(() => {
    page = new MtbSolverAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
