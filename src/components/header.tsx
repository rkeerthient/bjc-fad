import { Image } from "@yext/pages-components";
import Cta from "../components/cta";

type Link = {
  label: string;
  url: string;
};

const links: any[] = [
  {
    label: "Find Care",
    url: "/",
  },
  {
    label: "For Patients",
    url: "/professionals.html",
  },
  {
    label: "For Providers",
    url: "/",
  },
  ,
  {
    label: "For community",
    url: "/",
  },
];

const Header = ({ _site }: any) => {
  const linkDoms = links.map((link) => (
    <div key={link.label}>
      <a href={link.url} target="_blank" rel="noreferrer">
        {link.label}
      </a>
    </div>
  ));

  return (
    <div className="pb-6 ">
      <Image image={_site.c_header} className="!max-w-none !w-full" />
    </div>
  );
};

export default Header;
