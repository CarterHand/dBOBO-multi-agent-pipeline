// d.BOBO Handoff Endpoint - GET version (no redirects)
const SHEET_NAME = 'd.BOBO Handoffs';
const EMAIL_JOEL = true;
const JOEL_EMAIL = 'joel@reidren.com';

function doPost(e) {
  try {
    // Parse the JSON data sent by the GPT
    const data = JSON.parse(e.postData.contents);

    const payload = {
      gpt: data.gpt || '',
      founder_name: data.founder_name || 'Anonymous',
      date: data.date || new Date().toISOString().split('T')[0],
      status: data.status || '',
      asili_story: data.asili_story || '',
      team: data.team || '',
      proverb: data.proverb || '',
      image_metaphor: data.image_metaphor || '',
      mission_statement: data.mission_statement || '',
      vision_statement: data.vision_statement || '',
      tough_spots: data.tough_spots || '',
      next_gpt: data.next_gpt || ''
    };

    writeToSheet(payload);
    if (EMAIL_JOEL) emailJoel(payload);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Handoff recorded via POST' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}