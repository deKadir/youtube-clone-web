import VideosTab from './videos';
import ChannelsTab from './channels';
import PlaylistsTab from './playlists';
const channelTabs = [
  {
    title: 'Videos',
    tab: 'videos',
    component: VideosTab,
    protected: false,
  },
  {
    title: 'Channels',
    tab: 'channels',
    component: ChannelsTab,
    protected: true,
  },
  // {
  //   title: 'Playlists',
  //   tab: 'playlists',
  //   component: PlaylistsTab,
  // },
];
export default channelTabs;
