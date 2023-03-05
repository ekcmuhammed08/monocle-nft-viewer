import { useColorMode } from '@chakra-ui/react';
import Image from 'next/image';

const MonocleLogo = () => {
  const { colorMode } = useColorMode();

  return (
    <Image
      src={colorMode === 'dark' ? '/Monocle-Logo-Dark.png' : '/Monocle-Logo-Light.png'}
      height={50}
      width={250}
      alt="Monocle"
    />
  );
};

export default MonocleLogo;
