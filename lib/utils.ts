export const validateString = (
  value: unknown,
  maxLength: number
): value is string => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return true;
};

// "Gesture Gloves" <-> "/Gesture-Gloves". Titles must not contain "-" or "/".
export const projectSlug = (title: string) => title.trim().replace(/\s+/g, "-");

export const findProjectBySlug = <T extends { title: string }>(projects: readonly T[], slug: string) => {
  const name = decodeURIComponent(slug).replace(/[-/]/g, " ").trim().toLowerCase();
  return projects.find((p) => p.title.trim().toLowerCase() === name);
};

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};
