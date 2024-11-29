export interface SpotifyImage {
    height: number;
    url: string;
    width: number;
  }

export interface SpotifyUser {
    display_name: string;
    email: string;
    images: SpotifyImage[];
    product: string;
  }