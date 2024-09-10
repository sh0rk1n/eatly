import Cookies from "js-cookie";

const ACCESS_TOKEN = "token";

export class AccessTokenService {
  static get(): string | null {
    const token = Cookies.get(ACCESS_TOKEN);
    return token || null;
  }

  static set(value: string) {
    Cookies.set(ACCESS_TOKEN, value);
  }

  static remove() {
    Cookies.remove(ACCESS_TOKEN);
  }
}
