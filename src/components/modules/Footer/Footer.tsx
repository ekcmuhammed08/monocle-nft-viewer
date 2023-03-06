import { Box, Link, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const links = {
  github: 'https://github.com/ekcmuhammed08/monocle-nft-viewer'
};

const Footer = () => {
  return (
    <Box textAlign={'center'} w="full" p={6}>
      <Text>
        <Link href={links.github} isExternal alignItems={'center'}>
        ⭐️ View on Github{' '}
           <ExternalLinkIcon />
        </Link>
        , every star makes us very happy!
      </Text>
    </Box>
  );
};

export default Footer;
