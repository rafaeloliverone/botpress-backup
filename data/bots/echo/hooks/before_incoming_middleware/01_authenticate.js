
  if (event.type === 'proactive-trigger') {
    bp.logger.info(event.payload.payload.payload.text)
    event.state.session['userId'] = event.payload.payload.payload.text
    
  }