import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getFrappeErrorMessage(error: any): string {
  if (error?.response?.data?._server_messages) {
    try {
      const messages = JSON.parse(error.response.data._server_messages);
      const latestMessage = JSON.parse(messages[messages.length - 1]);
      return latestMessage.message || "An error occurred on the server";
    } catch (e) {
      console.error("Failed to parse Frappe server messages", e);
    }
  }

  if (error?.response?.data?.message) {
    return error.response.data.message;
  }

  return error?.message || "Something went wrong";
}

export function renderServerMessage(message: string) {
  return <div dangerouslySetInnerHTML={{ __html: message }} />;
}
