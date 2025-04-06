import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    // TODO: return the decoded token
    // done
    const token = this.getToken();
    if (token) {
      return jwtDecode(token);
    }
    return null;
  }

  loggedIn() {
    // TODO: return a value that indicates if the user is logged in
    // done
    const token = this.getToken();
    return token;
  }
  
  isTokenExpired(token: string) {
    // TODO: return a value that indicates if the token is expired
    // done 
    if (!token) {
      return true;
    }
    const decoded: JwtPayload = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    return decoded.exp ? decoded.exp < currentTime : true;
  }

  getToken(): string {
    // TODO: return the token
    // done 
    const loggedUser = localStorage.getItem('id_token') || '';
    return loggedUser;
  }

  login(idToken: string) {
    // TODO: set the token to localStorage
    // TODO: redirect to the home page
    // DONE 
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout() {
    // TODO: remove the token from localStorage
    // TODO: redirect to the login page
    // done 
    localStorage.removeItem('id_token');
    window.location.assign('/');
  }
}

export default new AuthService();
