const BASE_URL_Logicbox = import.meta.env.VITE_BASE_URL_LOGICBOX;
const BASE_URL_TradeTalk = import.meta.env.VITE_BASE_URL_TRADETALK;

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
