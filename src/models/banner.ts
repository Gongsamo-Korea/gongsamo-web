export interface BannerProps {
  banner_text?: string;
  thumbnail_url: string;
  hyper_link_url: string;
  exposure_order: number;
}

export interface ArrowProps {
  className?: string;
  style?: any;
  onClick?: () => void;
}
