export interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export type FormData = {
    email: string;
    password: string;
    onLoginSuccess?: (token: string) => void;
};