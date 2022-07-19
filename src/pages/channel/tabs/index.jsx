import VideosTab from './videos';
import ChannelsTab from './channels';
import PlaylistsTab from './playlists';
const channelTabs = [
  {
    tab: 'videos',
    component: VideosTab,
  },
  {
    tab: 'channels',
    component: ChannelsTab,
  },
  {
    tab: 'playlists',
    component: PlaylistsTab,
  },
];
export default channelTabs;
