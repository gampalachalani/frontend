const API_URL = "http://localhost:8080/api/enterprise/add";

// TypeScript Service Function
export const createEnterprise = async (enterprise: FormData) => {
    const response = await fetch(API_URL, {
        method: "POST",
        body: enterprise,
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });
    if (!response.ok) {
        throw new Error("Failed to create enterprise");
    }
    return await response.json();
};
