import { DetailPagesModule } from './detail-pages.module';

describe('DetailPagesModule', () => {
  let detailPagesModule: DetailPagesModule;

  beforeEach(() => {
    detailPagesModule = new DetailPagesModule();
  });

  it('should create an instance', () => {
    expect(detailPagesModule).toBeTruthy();
  });
});
