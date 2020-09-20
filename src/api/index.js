export const placeholderApi = async (selection) => {
    try {
        const target = selection.toLowerCase();
        const endPoint = `https://jsonplaceholder.typicode.com/${target}`;
        console.log(endPoint)
        const request = await fetch(endPoint);
        const data = await request.json();
        return data;
    } catch (error) {
        console.error('Error fetching data', error);
    }
}