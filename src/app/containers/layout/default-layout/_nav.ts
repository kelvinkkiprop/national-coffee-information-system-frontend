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
    // iconComponent: { name: 'cil-speedometer' },
    icon: 'fa-solid fa-gauge-high',
    badge: {
      color: 'warning',
      text: 'NEW'
    }
  },


  // Main
  {
    name: 'Main',
    title: true
  },
  {
    name: 'Traceability',
    url: '/traceabilities',
    // iconComponent: { name: 'cil-description' },
    icon: 'fa-solid fa-route'
  },
  {
    name: 'Licenses',
    url: '/licenses',
    // iconComponent: { name: 'cil-description' },
    icon: 'fa-solid fa-id-card'
  },
  {
    name: 'Movement Permits ',
    url: '/permits',
    // iconComponent: { name: 'cil-list' },
    icon: 'fa-solid fa-stamp'
  },


  // Other
  {
    title: true,
    name: 'Other',
  },
  {
    name: 'Payments ',
    url: '/payments',
    icon: 'fa-solid fa-wallet'
    // iconComponent: { name: 'cil-money' },
  },
  ...(mCurrentUser.role_id === mAdmin ? [
  {
    name: 'Users',
    // iconComponent: { name: 'cil-people' },
    icon: 'fa-solid fa-users',
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
  ...(mCurrentUser.role_id === mAdmin ? [
  {
    name: 'Roles',
    url: '/roles',
    icon: 'fa-solid fa-lock',
    // iconComponent: { name: 'cil-lock-locked' },
  }] : []),
  {
    name: 'Profile',
    url: '/profile',
    // iconComponent: { name: 'cil-user' },
    icon: 'fa-solid fa-user'
  },

];
