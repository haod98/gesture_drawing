export interface PinterestResponse {
  data: {
    access_token: string;
    refresh_token: string;
    response_type: string;
    token_type: string;
    expires_in: number;
    refresh_token_expires_in: number;
    scope: string;
  };
}
