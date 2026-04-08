const siteUrl = "https://aldanex.fi";

export const defaultMetadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: "/assets/LOGO5.jpg",
    shortcut: "/assets/LOGO5.jpg",
    apple: "/assets/LOGO5.jpg",
  },
  title: {
    default: "Aldanex Group",
    template: "%s | Aldanex Group",
  },
  description:
    "Aldanex Group digital rebuild covering property services, IT expertise, and a streamlined contact experience.",
  openGraph: {
    title: "Aldanex Group",
    description:
      "Aldanex Group digital rebuild covering property services, IT expertise, and a streamlined contact experience.",
    url: siteUrl,
    siteName: "Aldanex Group",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aldanex Group",
    description:
      "Aldanex Group digital rebuild covering property services, IT expertise, and a streamlined contact experience.",
  },
};

export function createPageMetadata({
  title,
  description = defaultMetadata.description,
  path = "/",
}) {
  const url = new URL(path, siteUrl).toString();

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      ...defaultMetadata.openGraph,
      title,
      description,
      url,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title,
      description,
    },
  };
}
