export interface LoginInput {
  usuario: string;
  contrasena: string;
}

export interface LoginResponse {
  token: string;
}
