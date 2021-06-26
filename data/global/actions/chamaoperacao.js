const callApi = async () => {
    
    try {
        const a = await bp.cms.renderElement('builtin_text', {text: `Operação acionada para o servidor: ${event.preview}`, typing: true}, event);
        await bp.events.replyToEvent(event, a)
    } catch (error) {
        
    }
   
}
  
return callApi()
