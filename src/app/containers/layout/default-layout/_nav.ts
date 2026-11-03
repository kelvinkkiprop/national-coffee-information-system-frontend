import { INavData } from '@coreui/angular';

const mAdmin = 1;
const mDealer = 34;

export function getNavItems(): INavData[] {

  // variables
  const mCurrentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  const isAdmin = Number(mCurrentUser.role_id) === mAdmin;

  return [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'fa-solid fa-gauge-high',
      badge: {
        color: 'warning',
        text: 'NEW'
      }
    },

    {
      name: 'Main',
      title: true
    },
    {
      name: 'Traceability',
      url: '/traceabilities',
      icon: 'fa-solid fa-route'
    },
    {
      name: 'Licenses',
      url: '/licenses',
      icon: 'fa-solid fa-id-card'
    },
    {
      name: 'Movement Permits',
      url: '/permits',
      icon: 'fa-solid fa-stamp'
    },
    {
      name: 'Dealer Registrations',
      url: '/dealer-registrations',
      icon: 'fa-solid fa-handshake'
    },

    {
      title: true,
      name: 'Other'
    },
    {
      name: 'Payments',
      url: '/payments',
      icon: 'fa-solid fa-wallet'
    },
    ...(isAdmin ? [
      {
        name: 'Users',
        icon: 'fa-solid fa-users',
        children: [
          {
            name: 'Create user',
            url: '/users/create',
            icon: 'nav-icon-bullet'
          },
          {
            name: 'Users list',
            url: '/users',
            icon: 'nav-icon-bullet'
          }
        ]
      }
    ] : []),

    {
      title: true,
      name: 'Extras'
    },
    ...(isAdmin ? [
      {
        name: 'Committees',
        url: '/committees',
        icon: 'fa-solid fa-user-friends'
      },
      {
        name: 'Roles',
        url: '/roles',
        icon: 'fa-solid fa-lock'
      }
    ] : []),
    {
      name: 'Profile',
      url: '/profile',
      icon: 'fa-solid fa-user'
    }
  ];

}
