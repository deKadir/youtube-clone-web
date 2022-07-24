import DashboardChannelTab from './channel';
import DashboardVideosTab from './videos';

const dashboardTabs = [
  {
    title: 'Channel',
    tab: 'channel',
    component: DashboardChannelTab,
  },
  {
    title: 'Videos',
    tab: 'videos',
    component: DashboardVideosTab,
  },
];
export default dashboardTabs;
