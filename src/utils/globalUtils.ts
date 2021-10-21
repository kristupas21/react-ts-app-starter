export function getFormData(blob: Blob): FormData {
  const formData = new FormData();

  formData.append('file', blob);

  return formData;
}

export function generateUuid() {
  return `v1-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`;
}

export function removeNilValues<T extends object>(ob: T): T {
  return Object.entries(ob).reduce((acc, [key, value]) => {
    if (value != null) {
      return {
        ...acc,
        [key]: value,
      };
    }

    return acc;
  }, {} as T);
}
