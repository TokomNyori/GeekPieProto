import { IconAlertTriangle } from "@tabler/icons-react";
interface FormErrorProps {
  message?: string;
}

export function FormError({ message }: FormErrorProps) {
  if (!message) return null;
  return (
    <div className="flex items-center gap-x-2 rounded-md bg-destructive/15 p-3 text-sm text-destructive">
      <div className="">
        <IconAlertTriangle className="h-4 w-4" />
      </div>
      <p>{message}</p>
    </div>
  );
}
