import { INavData } from '@coreui/angular';

// Roles
const mAdmin = 1;
const mInvestor = 2;

// mCurrentUser
const mCurrentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
// console.log(mCurrentUser.role_id);

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
        name: 'Masterplan Submission',
        url: '/construction-permits',
        icon: 'nav-icon-bullet',
        // badge: {
        //   color: 'danger',
        //   text: 'NEW'
        // },
      },
      {
        // name: 'Plan Submission',
        name: 'Detailed Design',
        url: '/detailed-designs',
        icon: 'nav-icon-bullet',
        badge: {
          color: 'dark',
          text: 'Submission'
        },
      },
    ]
  },

  // NotInvestor
  ...(mCurrentUser.role_id !== mInvestor ? [
  {
    name: 'Registered Professionals',
    url: '/registered-professionals',
    iconComponent: { name: 'cil-people' },
  }] : []),

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
  {
    name: 'Guidelines, Codes & Forms',
    url: '/downloads',
    iconComponent: { name: 'cil-book' },
  },


  // Extras
  {
    title: true,
    name: 'Extras',
  },
  {
    // name: 'Parcel Allocation Worksheet',
    name: 'Parcel Development Parameters',
    url: '/parcel-allocation-worksheet',
    iconComponent: { name: 'cil-map' },
  },
  {
    name: 'Profile',
    url: '/profile',
    iconComponent: { name: 'cil-user' },
  },

];
