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

      if (!rawDate) {
        responseText = "❗ Please provide a valid booking date.";
      } else {
        // Create date object from date
        const dateObj = new Date(rawDate);

        // If time exists, extract hours and minutes
        if (rawTime) {
          const timeOnly = rawTime.split("T")[1]; // "07:00:00-05:00"
          const hours = parseInt(timeOnly.split(":")[0]);
          const minutes = parseInt(timeOnly.split(":")[1]);
          dateObj.setHours(hours);
          dateObj.setMinutes(minutes);
        }

        // Format date/time
        const formattedDate = Utilities.formatDate(dateObj, "Africa/Addis_Ababa", "dd MMM yyyy");
        const formattedTime = Utilities.formatDate(dateObj, "Africa/Addis_Ababa", "hh:mm a");

        // Generate booking ID using last row + 1
        const lastRow = sheet.getLastRow();
        const bookingId = "BK-" + Utilities.formatString("%03d", lastRow + 1);

        // Append to sheet
        sheet.appendRow([bookingId, formattedDate, formattedTime, partySize, "Active"]);

        // Respond with ID
        responseText = `✅ Your table for ${partySize} people on ${formattedDate} at ${formattedTime} has been booked! Your booking ID is ${bookingId}. 🍽️`;
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
