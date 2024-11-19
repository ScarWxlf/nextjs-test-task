export interface Social {
  name: string;
  link: string;
  icon: {
    asset: {
      _ref: string;
    };
  };
}

export interface Statistic {
  metric: string;
  label: string;
}

export interface finalSocials {
    name: string;
    link: string;
    iconUrl: string;
}

export interface SiteContent {
  title: string;
  subtitle: string;
  contactNumber: string;
  socials: Social[];
  statistics: Statistic[];
}
