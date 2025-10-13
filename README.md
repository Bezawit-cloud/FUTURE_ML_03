# 🍽️ Restaurant Reservation Chatbot

A smart and interactive **Restaurant Reservation Chatbot** built using **Dialogflow**, **Google Apps Script**, and **Google Sheets**.  
This chatbot allows customers to easily book, view, and cancel reservations — with all data automatically stored and managed in Google Sheets.  

---

## 🎯 Live Demo

👉 **Try it here:** [🔗 Live Chatbot Demo](https://futureml03-bxntyrhz7bimennhc2jcqj.streamlit.app/)  
*(Replace this link with your actual deployed Dialogflow Messenger or Streamlit app URL)*  

💬 Example interactions:
- “I’d like to book a table for 3 tomorrow at 7 PM.”  
- “Cancel my reservation BK-001.”  
- “What’s on the menu today?”  

---

## 🚀 Overview

This project demonstrates the integration of **Natural Language Processing (NLP)** with real-time data management tools.  
Users can interact naturally with the chatbot to:
- Reserve a table by providing a date, time, and party size  
- Cancel or check the status of their booking  
- View the restaurant’s daily menu or specials  

The bot automatically generates unique **booking IDs** (e.g., `BK-001`) and updates the reservation log in Google Sheets.

---

## 🧩 Features

✅ **Book a Table** – Customers can reserve by saying things like  
> “I’d like to book a table for 4 at 7 PM tomorrow.”

✅ **Cancel a Reservation** – Users can cancel using their booking ID.  
> “Cancel my reservation BK-002.”

✅ **View Menu** – Shows today’s specials or a full menu.  
> “What’s on the menu today?”

✅ **Automatic Booking ID** – Each booking is assigned a unique ID automatically.  

✅ **Google Sheets Integration** – All reservations are logged with:
- Booking ID  
- Date & Time  
- Party Size  
- Status (Active/Cancelled)

✅ **Error Handling** – Validates date, time, and duplicate bookings.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|-------------|----------|
| **Dialogflow (CX )** | Intent recognition and chatbot logic |
| **Google Apps Script (JavaScript)** | Backend logic for reservations and data handling |
| **Google Sheets** | Real-time database for storing bookings |
| **Python (Streamlit)** | For deploymnet
| **Webhooks** | Connecting Dialogflow intents with Apps Script functions |

---

## 🧠 Architecture

1. **User Message** → Sent to Dialogflow  
2. **Dialogflow** detects the intent (e.g., Book_Table)  
3. **Webhook** triggers Google Apps Script  
4. **Apps Script** validates data and writes to Google Sheets  
5. **Response** is sent back to Dialogflow → user gets confirmation message

---

## 📊 Example Google Sheet Columns

| Booking ID | Date | Time | Party Size | Status |
|-------------|------|------|-------------|--------|
| BK-001 | 14 Oct 2025 | 07:30 PM | 2 | Active |
| BK-002 | 15 Oct 2025 | 08:00 PM | 4 | Cancelled |

---

## ⚙️ Setup & Installation

1. **Create a new Dialogflow Agent**
2. Add intents:
   - `Book_Table`
   - `Cancel_Reservation`
   - `View_Menu`
3. **Deploy a Google Apps Script Web App**
   - Paste the provided JavaScript code.
   - Deploy as a web app and copy the public URL.
4. **Connect Webhook**
   - Paste the web app URL in Dialogflow’s Fulfillment.
5. **Connect Google Sheet**
   - Create a sheet with headers: `Booking ID`, `Date`, `Time`, `Party Size`, `Status`.


 ---## 🧾 Folder Structure
📦 restaurant-reservation-chatbot
┣ 📂 dialogflow_agent/
┃ ┣ intents/
┃ ┗ entities/
┣ 📂 scripts/
┃ ┗ main.js # Google Apps Script code
┣ 📂 data/
┃ ┗ reservations_sheet.csv
┣ 📂 python/
┃ ┗ analytics.py # Optional: data management and automation
┗ README.md

## 👩🏽‍💻 About This Project

This project was developed as part of a **practical chatbot integration and automation exercise**.  
It showcases how a restaurant can streamline booking management with minimal manual input — combining conversational AI and Google Workspace tools.

**Built by:** Bezawit-Assefa 
**Goal:** To demonstrate real-world chatbot automation, data management, and API integration skills.

---

## 💡 Future Enhancements

- Add **email/SMS confirmations**
- Add **employee management and shifts** (using Python for scheduling)
- Include **customer feedback collection**
- Integrate **payment or deposit confirmation system**

---

