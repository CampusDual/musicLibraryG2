import { MylistsModule } from './mylists.module';

describe('MylistsModule', () => {
  let mylistsModule: MylistsModule;

  beforeEach(() => {
    mylistsModule = new MylistsModule();
  });

  it('should create an instance', () => {
    expect(mylistsModule).toBeTruthy();
  });
});
