const BASE_URL_Logicbox = "http://localhost:3002/api/v1/admin";
const BASE_URL_TradeTalk = "http://localhost:3001/api/v1/admin";

export const getCandidatesLogicbox = async () => {
    const response = await fetch(`${BASE_URL_Logicbox}/candidates-referrals`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch Logicbox candidates");
    }

    return response.json();
};

export const getCandidatesTradetalk = async () => {
    const response = await fetch(`${BASE_URL_TradeTalk}/candidates-referrals`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch Tradetalk candidates");
    }

    return response.json();
};
