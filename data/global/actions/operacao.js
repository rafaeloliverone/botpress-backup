const callApi = async () => {
    
    try {


        switch(event.preview) {
            case '013': 
                session.response = {status: true}
                const a = await bp.cms.renderElement('builtin_text', {text: "Informe o nome do servidor", typing: true}, event);
                await bp.events.replyToEvent(event, a)
                break;
            default:

                session.response = {status: false}
                const v = await bp.cms.renderElement('builtin_text', {text: "Comando não encontrado", typing: true}, event);
                await bp.events.replyToEvent(event, v)
                break;
        }


    } catch (error) {
        
    }
   
}
  
  // Actions are async, so make sure to return a promise
return callApi()
