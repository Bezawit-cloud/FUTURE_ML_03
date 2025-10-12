function doPost(e) {
  const sheetId = "1Joxt0BS3sfL8UxZVNQW09gJYzyc_iNsnbORg9sw3fNE";
  const sheet = SpreadsheetApp.openById(sheetId).getSheetByName("Sheet1");

  try {
    const data = JSON.parse(e.postData.contents);
    const intent = data.queryResult.intent.displayName;
    const params = data.queryResult.parameters || {};
    let responseText = "";

    // === BOOK TABLE ONLY ===
    if (intent === "Book_Table") {
      const partySize = params.party_size || "";
      const rawDate = params.date || "";
      const rawTime = params.time || "";

      // --- Check if date is provided ---
      if (!rawDate) {
        responseText = "❗ Please provide a valid booking date.";
      } else {
        // --- Parse date safely ---
        let dateObj = new Date(rawDate);
        if (isNaN(dateObj.getTime())) {
          responseText = "❗ Invalid date format. Please provide a proper date (YYYY-MM-DD).";
        } else {
          // --- Add time if provided ---
          if (rawTime) {
            const timeParts = rawTime.split("T")[1]; // e.g., "07:00:00-05:00"
            if (timeParts) {
              const hours = parseInt(timeParts.split(":")[0]);
              const minutes = parseInt(timeParts.split(":")[1]);
              dateObj.setHours(hours);
              dateObj.setMinutes(minutes);
            }
          }

          // --- Format date/time for display ---
          const formattedDate = Utilities.formatDate(dateObj, "Africa/Addis_Ababa", "dd MMM yyyy");
          const formattedTime = Utilities.formatDate(dateObj, "Africa/Addis_Ababa", "hh:mm a");

          // --- Generate booking ID ---
          const lastRow = sheet.getLastRow();
          const bookingId = "BK-" + Utilities.formatString("%03d", lastRow + 1);

          // --- Save to sheet ---
          sheet.appendRow([bookingId, formattedDate, formattedTime, partySize, "Active"]);

          // --- Response to user ---
          responseText = `✅ Your table for ${partySize} people on ${formattedDate} at ${formattedTime} has been booked! Your booking ID is ${bookingId}. 🍽️`;
        }
      }
    } else {
      responseText = "Sorry, I didn’t understand your request.";
    }

    return ContentService.createTextOutput(JSON.stringify({ fulfillmentText: responseText }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      fulfillmentText: "⚠️ Error: " + err.message
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput("Web App is active ✅");
}

