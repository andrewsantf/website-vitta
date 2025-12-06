export interface SubmissionData {

    if(response.ok) {
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
