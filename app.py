import streamlit as st

st.set_page_config(
    page_title="Bella Bistro Reservation Bot",
    page_icon="🍽️",
    layout="centered"
)

st.title("🍽️ Bella Bistro Chatbot")
st.markdown("""
Welcome to **Bella Bistro**!  
You can ask about the menu, book a table, or cancel your reservation.  
""")

# Embed Dialogflow Messenger
st.components.v1.html("""
<df-messenger
  intent="WELCOME"
  chat-title="Bella Reservation Bot"
  agent-id="48d1c56e-d567-482f-87aa-998ee556ad8e"
  language-code="en"
></df-messenger>
<script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
""", height=600)
