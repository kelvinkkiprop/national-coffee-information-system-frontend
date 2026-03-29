import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'danger',
      text: 'NEW'
    }
  },


  // Main
  {
    name: 'Main',
    title: true
  },
  {
    name: 'Permitting Services',
    iconComponent: { name: 'cil-puzzle' },
    attributes: { class: 'nav-group' },
    children: [
      {
        name: 'Masterplan submission',
        url: '/plan-submissions',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Variation/Land use planning',
        url: '/variations',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Design submission',
        url: '/design-submissions',
        icon: 'nav-icon-bullet',
        badge: {
          color: 'danger',
          text: 'NEW'
        },
      },
    ]
  },
  {
    name: 'Advertising Application',
    url: '/advertising-application',
    iconComponent: { name: 'cil-cursor' },
  },


  // Other
  {
    title: true,
    name: 'Other',
  },
  {
    name: 'Construction Site Board',
    url: '/construction-site-board',
    iconComponent: { name: 'cil-description' },
  },
  {

    name: 'Compliance & Enforcement ',
    url: '/compliance-and-enforcement',
    iconComponent: { name: 'cil-list' },
  },


  // Extras
  {
    title: true,
    name: 'Extras',
  },
  {
    name: 'Parcel Allocation Worksheet',
    url: '/parcel-allocation-worksheet',
    iconComponent: { name: 'cil-map' },
  },
  {
    name: 'Profile',
    url: '/profile',
    iconComponent: { name: 'cil-user' },
  },

];
