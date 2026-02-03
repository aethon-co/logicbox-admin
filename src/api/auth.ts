const BASE_URL_Logicbox = "http://localhost:3002/api/v1/admin";
const BASE_URL_TradeTalk = "http://localhost:3001/api/v1/admin";

export const signup = async (data: any) => {
    const response = await fetch(`${BASE_URL_Logicbox}/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("Signup failed");
    }

    return response.json();
};

export const loginLogixbox = async (data: any) => {
    const response = await fetch(`${BASE_URL_Logicbox}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("Login failed");
    }

    return response.json();
};

export const loginTradetalk = async (data: any) => {
    const response = await fetch(`${BASE_URL_TradeTalk}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("Login failed");
    }

    return response.json();
};
