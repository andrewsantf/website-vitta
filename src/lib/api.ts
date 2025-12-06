export interface SubmissionData {
    [key: string]: string | number | undefined;
}

// URL do Formspree
const FORMSPREE_URL = 'https://formspree.io/f/xpwvlklo';

export const submitToFormspree = async (data: SubmissionData): Promise<{ success: boolean; message?: string }> => {
    try {
        // Log para depuração
        console.log('Enviando para:', FORMSPREE_URL);
        console.log('Dados:', data);

        const response = await fetch(FORMSPREE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            return { success: true };
        } else {
            const result = await response.json();
            return {
                success: false,
                message: result.error || 'Falha ao enviar formulário.'
            };
        }

    } catch (error) {
        console.error('Error submitting form:', error);
        return { success: false, message: 'Falha ao enviar formulário. Tente novamente.' };
    }
};
