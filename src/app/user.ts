import { Role } from "./role.enum";

export interface User {
  id: number;
  name: string;
  role?: Role[];
  token?: string;
}
