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
    name: 'Placements',
    url: '/placements',
    iconComponent: { name: 'cil-description' },
  },
  {
    name: 'Selections ',
    url: '/selections',
    iconComponent: { name: 'cil-list' },
  },

  // Other
  {
    title: true,
    name: 'Other',
  },
  ...(mCurrentUser.role_id === mAdmin ? [
  {
    name: 'Users',
    iconComponent: { name: 'cil-people' },
    attributes: { class: 'nav-group' },
    children: [
      {
        name: 'Create user',
        url: '/users/create',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'Users list',
        url: '/users',
        icon: 'nav-icon-bullet',
      },
    ]
  }] : []),


  // Extras
  {
    title: true,
    name: 'Extras',
  },
  {
    name: 'Roles',
    url: '/roles',
    iconComponent: { name: 'cil-lock-locked' },
  },
  {
    name: 'Profile',
    url: '/profile',
    iconComponent: { name: 'cil-user' },
  },

];
