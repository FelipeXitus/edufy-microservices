import { UserRoleEnum } from "./user.role";

export interface UserProps {
  id: string;
  name: string;
  email: string;
  role: UserRoleEnum;
  biography?: string;
  interests?: string[];
  profilePictureUrl?: string;
  resolvedTickets?: number;
}
