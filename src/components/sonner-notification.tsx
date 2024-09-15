'use client';
import { toast } from 'sonner';

// Definir los tipos válidos para las notificaciones
type AlertType = 'success' | 'error' | 'warning' | 'info';

interface AlertNotificationProps {
  type?: AlertType;
  message: string;
}

export const AlertNotification: React.FC<AlertNotificationProps> = ({
  type = 'success',
  message
}) => {
  switch (type) {
    case 'success':
      return toast.success(message);
    case 'error':
      return toast.error(message);
    case 'warning':
      return toast.warning(message);
    case 'info':
      return toast.info(message); // Puedes cambiar esto por toast.info si hay soporte para info
    default:
      return toast(message);
  }
};
