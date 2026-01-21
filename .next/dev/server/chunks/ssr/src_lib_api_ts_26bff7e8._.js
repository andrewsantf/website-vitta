module.exports = [
"[project]/src/lib/api.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "submitToFormspree",
    ()=>submitToFormspree
]);
// URL do Formspree
const FORMSPREE_URL = 'https://formspree.io/f/xpwvlklo';
const submitToFormspree = async (data)=>{
    try {
        // Log para depuração
        console.log('Enviando para:', FORMSPREE_URL);
        console.log('Dados:', data);
        const response = await fetch(FORMSPREE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (response.ok) {
            return {
                success: true
            };
        } else {
            const result = await response.json();
            return {
                success: false,
                message: result.error || 'Falha ao enviar formulário.'
            };
        }
    } catch (error) {
        console.error('Erro ao enviar formulário:', error);
        return {
            success: false,
            message: 'Falha ao enviar formulário. Tente novamente.'
        };
    }
};
}),
];

//# sourceMappingURL=src_lib_api_ts_26bff7e8._.js.map