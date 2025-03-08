export const Role = {
    Admin: 'Admin',
    User: 'User'
  } as const;
  
export type RoleType = keyof typeof Role;
  