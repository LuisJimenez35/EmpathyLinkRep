export interface AuthUserInterface {
    id: string;
    email: string;
    username?: string;
}

export interface UserInfoInterface {
    address?: string;
    cellphone?: string;
    fullName?: string;
    role?: string;
}

// Intefaz que une todas las propiedades
export interface UserInterface extends AuthUserInterface, UserInfoInterface {}
