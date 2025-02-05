export const defaultSEOConfig = {
    title: "Golden Media NG | Top Marketing Agency in Nigeria",
    description:
      "Golden Media NG is a leading marketing agency in Nigeria, specializing in brand advertisement, radio, TV, and Signage campaigns. Grow your brand with us!",
    openGraph: {
      type: "website",
      locale: "en_NG", 
      url: "https://www.goldenmedia.com.ng",
      site_name: "Golden Media NG",
      images: [
        {
          url: "https://www.goldenmedia.com.ng/blackLogo.png",
          width: 1200,
          height: 630,
          alt: "Goldem Media",
        },
      ],
    },
    twitter: {
      handle: "@youragencyhandle",
      site: "@youragencyhandle",
      cardType: "summary_large_image",
    },
    additionalMetaTags: [
      {
        name: 'keywords',
        content: 'Signage, advertising, market,  brand, radio, TV, Campaigns, Nigeria'
      },
      {
        name: 'author',
        content: 'Golden Media NG'
      },
      {
        name: 'robots',
        content: 'index, follow'
      },
      {
        name: 'theme-color',
        content: '#ffcc00'
      }
    ],
    canonical: 'https://www.goldenmedia.com.ng',
   
  };