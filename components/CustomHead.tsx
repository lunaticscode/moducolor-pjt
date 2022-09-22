import Head from "next/head";
import { useRouter } from "next/router";

const DEFAULT_META = {
  title: "ModuColor",
  siteName: "moducolor",
  description: "Picking Color For Everyone.",
  url: "https://moducolor.io",
  type: "website",
  robots: "follow, index",
  image: "",
};

interface CustomHeadProps {
  pageTitle?: string;
}

const CustomHead: React.FC<CustomHeadProps> = ({
  pageTitle: pageTitleProp,
}) => {
  const router = useRouter();
  const meta = {
    ...DEFAULT_META,
  };
  console.log(router.asPath);
  const pageTitle = pageTitleProp
    ? `${meta.title} - ${pageTitleProp}`
    : meta.title;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="robots" content={meta.robots} />
      <meta name="viewport" content="width=device-width" />
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`${meta.url}${router.asPath}`} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={pageTitle} />
      <meta name="image" property="og:image" content={meta.image} />
    </Head>
  );
};
export default CustomHead;
