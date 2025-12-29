
export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}

export interface Stat {
  value: string;
  label: string;
}

export enum ModalType {
  NONE,
  BOOKING,
  PARTNERSHIP,
  RANKING,
  GAME
}
