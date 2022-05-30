import { toast as Toast } from '@/components/toast';

export default function toast(text: string) {
    Toast(text, 2500);
};