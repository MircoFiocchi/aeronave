const useCarrousel = () => {
  const slides = [
    {
      id: 1,
      title: 'Lorem ipsum',
      subtitle: 'Quisque vel dictum magna.',
      image: 'Call to action',
      src_image: '/image1.png',
      action: 'Call to action',
    },
    {
      id: 2,
      title: 'Lorem ipsum',
      subtitle: 'Quisque vel dictum magna.',
      image: 'Call to action',
      src_image: '/image2.png',
      action: 'Call to action',
    },
    {
      id: 3,
      title: 'Lorem ipsum',
      subtitle: 'Quisque vel dictum magna.',
      image: 'Call to action',
      src_image: '/image3.png',
      action: 'Call to action',
    },
  ];

  return {
    slides,
  };
};

export default useCarrousel;
