import DashboardContentTab from './contents';
import DashboardPlaylistsTab from './playlists';
const dashboardTabs = [
  {
    title: 'Contents',
    tab: 'contents',
    component: DashboardContentTab,
  },
  {
    title: 'Playlists',
    tab: 'playlists',
    component: DashboardPlaylistsTab,
  },
];
export default dashboardTabs;
