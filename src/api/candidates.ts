const BASE_URL_Logicbox = import.meta.env.VITE_BASE_URL_LOGICBOX;
const BASE_URL_TradeTalk = import.meta.env.VITE_BASE_URL_TRADETALK;

export const getCandidatesLogicbox = async () => {
    const response = await fetch(`${BASE_URL_Logicbox}/referrals`, {
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
