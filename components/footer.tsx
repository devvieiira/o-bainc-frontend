import Image from 'next/image';

const Footer = () => {
  return (
    <footer>
      <Image src={'/logo.svg'} alt="o-bainc logo" width={100} height={100} />
    </footer>
  );
};

export default Footer;
