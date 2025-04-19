import { IconCircleCheck } from "@tabler/icons-react";
interface FormSuccessProps {
  message?: string;
}

export function FormSuccess({ message }: FormSuccessProps) {
  if (!message) return null;
  return (
    <div className="flex items-center gap-x-2 rounded-md bg-emerald-500/15 p-3 text-sm text-emerald-500">
      <div>
        <IconCircleCheck className="h-4 w-4" />
      </div>
      <p>{message}</p>
    </div>
  );
}
