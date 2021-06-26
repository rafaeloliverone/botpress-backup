const axios = require('axios')


const callApi = async () => {
    // Call the Github API and fetch the latest releases
    const { data } = await axios.get('https://api.github.com/repos/botpress/botpress/releases')
  
    // The first element returned is the most recent release
    const mostRecentRelease = data[0]
  
    const latestVersion = mostRecentRelease.name
    const releaseNotesUrl = mostRecentRelease.html_url
  
    // Display the latest version in logs
    // bp.logger.info(`Latest Botpress version is ${latestVersion}`)
  
    // Prepare the message
    const message = {
      type: 'text',
      text: `Latest version: **${latestVersion}**\n\n[View release notes](${releaseNotesUrl})`,
      // Markdown enables rich content, for example links or bold text. Otherwise, content will be displayed as-is
      markdown: true
    }
    
    // bp.logger.info(event)

    const image = {
        image: "https://www.indracompany.com/sites/all/themes/custom/indracompany_bs/logo.png",
        typing: true
    }
    // Send the message to the user (note the array, since you can send multiple payloads in the same reply)
    await bp.events.replyToEvent(event, [message])
    
    const payload = await bp.cms.renderElement('builtin_image', image, event)
    await bp.events.replyToEvent(event, payload)
    // You could also save the complete response in the session, then use it later
    session.response = data
  }
  
  // Actions are async, so make sure to return a promise
  return callApi()









