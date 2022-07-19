import VideosTab from './videos';
import ChannelsTab from './channels';
import PlaylistsTab from './playlists';
const channelTabs = [
  {
    title: 'Videos',
    tab: 'videos',
    component: VideosTab,
  },
  {
    title: 'Channels',
    tab: 'channels',
    component: ChannelsTab,
  },
  {
    title: 'Playlists',
    tab: 'playlists',
    component: PlaylistsTab,
  },
];
export default channelTabs;
