import { PlaylistModule } from './playlist.module';

describe('PlaylistModule', () => {
  let playlistModule: PlaylistModule;

  beforeEach(() => {
    playlistModule = new PlaylistModule();
  });

  it('should create an instance', () => {
    expect(playlistModule).toBeTruthy();
  });
});
