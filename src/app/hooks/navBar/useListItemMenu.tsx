import Asterisk from '@/app/icons/Asterisk';

const useListItemMenu = () => {
    const listMenu = [
        {
          id: 1,
          title: 'Nosotros',
          href: '#',
        },
        {
          id: 2,
          title: 'Novedades',
          href: '#',
        },
        {
          id: 3,
          title: 'Inversores',
          href: '#',
        },
        {
          id: 4,
          title: 'Sumate al equipo',
          href: '#',
        },
        {
          id: 5,
          title: 'Productos y Servicios',
          href: '#',
        },
        {
          id: 6,
          title: 'Provedores',
          href: '#',
        },
        {
          id: 8,
          title: <Asterisk />,
          href: '#',
          titleMobile: 'Asterisco',
        },
        {
          id: 9,
          title: 'Es',
          href: '#',
          titleMobile: 'Español',
        },
        {
          id: 10,
          title: 'Sitios',
          href: '#',
        },
      ];
  
    return {
      listMenu,
    };
  };
  
  export default useListItemMenu;
  