import { toast as Toast } from 'react-mobile-message';

export default function toast(text: string) {
    Toast(text, 2500);
};