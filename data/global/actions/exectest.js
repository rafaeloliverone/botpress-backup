const callApi = async () => {
    
    const array = [
        {
            "cod": "013",
            "des": "Limpeza de Disco"
        }, 
        {
            "cod": "115",
            "des": "Abertura de Agência"
        },
        {
            "cod": "220",
            "des": "Cópia de Arquivos"
        }
    ]
    
    var stringText = ''
    const newArray = array.map(item => stringText += `* **${item.cod}** - ${item.des} \n`)

    bp.logger.info("Aquiiiii");
    bp.logger.info(event.state.session);
    

    const message = {
        type: "text",
        text: stringText,
        markdown: true
    }


    // Send the message to the user (note the array, since you can send multiple payloads in the same reply)
    await bp.events.replyToEvent(event, [message])
    

    // You could also save the complete response in the session, then use it later
}
  
  // Actions are async, so make sure to return a promise
return callApi()









