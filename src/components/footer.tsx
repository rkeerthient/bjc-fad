import { Image } from "@yext/pages-components";

const Footer = ({ _site }: any) => {
  return (
    <div className="pt-6 ">
      <Image image={_site.c_footer} className="!max-w-none !w-full" />
    </div>
  );
};

export default Footer;
