export function Obfuscator({ params }) {

    return {
        data: null
    }
}

export const Predicates = {
    isReadOnlyRequest: (req) => req.method === 'GET'
}