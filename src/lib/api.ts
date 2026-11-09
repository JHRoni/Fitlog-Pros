export const api = async() => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog',{cache:'no-store'});
    const data = await res.json();
    return data;
};