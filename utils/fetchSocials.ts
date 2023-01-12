import { Social } from "../typings";

export const fetchSkills = async () => {
    const res = await fetch (`${process.env.NEXT_PUBLIC_BASE_URL}/api/getsocial`);

    const data = await res.json();
    const Social: Social[] = data.skills

    return Social;
}