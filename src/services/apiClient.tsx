export const apiClient = {
  async get<T>(url: string, options?: RequestInit): Promise<T> {
    const response = await fetch(url, { ...options, method: "GET" });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  },

  async post<T>(url: string, data: any, options?: RequestInit): Promise<T> {
    const response = await fetch(url, {
      ...options,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.json();
  },
};
