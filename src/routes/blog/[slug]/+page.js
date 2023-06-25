/** @type {import('./$types').PageLoad} */
export const load = ({ params }) => {
    return {
        path: params.slug
    }
};