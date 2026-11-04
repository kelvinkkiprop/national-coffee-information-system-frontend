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
      icon: 'fa-solid fa-route',
      children: [
        {
          name: 'Transactions',
          url: '/coffee-transactions',
          icon: 'nav-icon-bullet'
        },
        {
          name: 'Deliveries',
          url: '/coffee-deliveries',
          icon: 'nav-icon-bullet'
        },
        {
          name: 'Plots',
          url: '/coffee-plots',
          icon: 'nav-icon-bullet'
        }
      ]
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
      title: true,
      name: 'Other'
    },
    {
      name: 'Dealer Registrations',
      url: '/dealer-registrations',
      icon: 'fa-solid fa-handshake'
    },
    {
      name: 'Payments',
      url: '/payments',
      icon: 'fa-solid fa-wallet'
    },
    ...(isAdmin ? [
      {
        name: 'Committees',
        url: '/committees',
        icon: 'fa-solid fa-user-friends'
      },
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
