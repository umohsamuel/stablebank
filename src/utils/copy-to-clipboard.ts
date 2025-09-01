import { toast } from "sonner";

export function copyToClipboard(text: string) {
  navigator.clipboard
    .writeText(text)
    .catch(() => toast.error("Failed to copy to clipboard!"))
    .finally(() => toast.success("Successfully copied to clipboard!"));
}
