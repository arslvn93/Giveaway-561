const config = {
  "settings": {
    "webhookUrl": "https://n8n.salesgenius.co/webhook/giveawayupdate",
    "confettiColors": ["#004080", "#0066cc", "#3399ff", "#cce6ff", "#e6f0ff"],
    "showCountdownInHero": true
  },
  "modalQuestions": [
    {
      "id": "favorite_local_events",
      "questionText": "Which type of local events do you enjoy attending most in Toronto?",
      "options": [
        {"value": "major_league_sports_games", "text": "Major league sports games"},
        {"value": "food_and_wine_festivals", "text": "Food and wine festivals"},
        {"value": "music_concerts", "text": "Music concerts"},
        {"value": "art_exhibitions", "text": "Art exhibitions"}
      ]
    },
    {
      "id": "lifestyle_preferences",
      "questionText": "On a typical weekend, how do you prefer to spend your time?",
      "options": [
        {"value": "exploring_real_estate", "text": "Exploring new real estate developments or open houses"},
        {"value": "relaxing_home", "text": "Relaxing at home with friends and family"},
        {"value": "outdoor_activities", "text": "Engaging in outdoor activities like hiking or biking"},
        {"value": "dining_trendy_restaurants", "text": "Dining at trendy restaurants or cafes"}
      ]
    },
    {
      "id": "travel_habits",
      "questionText": "How do you typically spend your vacations?",
      "options": [
        {"value": "international_travel", "text": "Traveling to international destinations"},
        {"value": "local_attractions", "text": "Visiting local attractions around Toronto"},
        {"value": "staycations", "text": "Taking staycations in luxury accommodations"},
        {"value": "road_trips", "text": "Going on road trips to explore new areas"}
      ]
    },
    {
      "id": "community_engagement",
      "questionText": "How involved are you in community activities or neighborhood associations?",
      "options": [
        {"value": "very_involved", "text": "Very involved, I attend meetings and events regularly"},
        {"value": "somewhat_involved", "text": "Somewhat involved, I participate occasionally"},
        {"value": "not_very_involved_but_interested", "text": "Not very involved, but I’m interested in what's happening"},
        {"value": "not_involved", "text": "Not involved at all"}
      ]
    }
  ],
  "giveaway": {
    "name": "Toronto Blue Jays Tickets Giveaway",
    "heroHeadline": "Win Tickets to a <span class='highlight'>Toronto Blue Jays Game</span> This Canada Day!",
    "heroSubheadline": "Celebrate July 1st with us and get a chance to experience the thrill of a live game — a $100 value prize!",
    "promotionDates": "Promotion runs from June 18, 2025 until July 1, 2025.",
    "endDate": "2025-07-01T23:59:59",
    "heroBackgroundImageUrl": "https://api.typeform.com/responses/files/4d70b80ce239ac7cb2403d6b95dd028bdd857cb5c8f1881dd46254015f5d135c/Screenshot_20250616_142200_Canva.jpg",
    "heroCtaText": "Enter Now at Our Booth!",
    "entryFormCtaText": "Count Me In!",
    "successModalHeaderText": "🎉 Congratulations! 🎉",
    "successModalMainMessage": "Your entry for the <strong>Toronto Blue Jays Tickets Giveaway</strong> has been successfully submitted. Get ready for an unforgettable summer!",
    "successModalEmailPrompt": "The winner will be announced on July 2nd by email. Keep an eye on your inbox!"
  },
  "prize": {
    "name": "$100 Toronto Blue Jays Game Tickets",
    "value": "$100 Value",
    "description": "Experience the excitement of a live Toronto Blue Jays game this summer! Win tickets worth $100 and enjoy an amazing day out with friends or family at the ballpark.",
    "images": [
      {
        "src": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "alt": "Toronto Blue Jays game with fans"
      },
      {
        "src": "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1964&q=80",
        "alt": "Fans cheering at a baseball game"
      },
      {
        "src": "https://images.unsplash.com/photo-1526481280690-c4ba1cea6211?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "alt": "Baseball stadium and field"
      }
    ],
    "includedItems": [
      {"icon": "fas fa-ticket-alt", "text": "Two tickets to a Toronto Blue Jays game"},
      {"icon": "fas fa-star", "text": "Experience the lively atmosphere of the ballpark"},
      {"icon": "fas fa-users", "text": "Perfect for friends, family, or date night"},
      {"icon": "fas fa-check-circle", "text": "No purchase necessary to enter or win"},
      {"icon": "fas fa-bolt", "text": "Quick and easy entry at our booth!"}
    ],
    "limitedTimeOfferText": "⚾ Limited Time Canada Day Giveaway! ⚾",
    "ctaButtonText": "I WANT TO WIN!"
  },
  "howToEnter": {
    "steps": [
      {
        "icon": "fas fa-map-marker-alt",
        "title": "Visit Our Booth",
        "description": "Join us at the Canada Day event on July 1st to enter the giveaway."
      },
      {
        "icon": "fas fa-clipboard-check",
        "title": "Fill Out a Quick Survey",
        "description": "Complete a short survey to qualify for the prize draw."
      },
      {
        "icon": "fas fa-envelope-open-text",
        "title": "Wait for the Draw",
        "description": "The winner will be announced on July 2nd via email."
      }
    ],
    "highlights": [
      {"icon": "fas fa-stopwatch", "text": "Quick & Easy Entry"},
      {"icon": "fas fa-baseball-ball", "text": "Exciting $100 Prize"},
      {"icon": "fas fa-smile", "text": "Free to Enter!"}
    ]
  },
  "entryForm": {
    "subtitle": "Enter at our booth on July 1st for your chance to win!",
    "entryCountText": "Join hundreds of baseball fans already entered!",
    "socialSharePrompt": "Spread the word about this great giveaway:",
    "sharePlatforms": {
      "facebook": "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href),
      "twitter": "https://twitter.com/intent/tweet?url=" + encodeURIComponent(window.location.href) + "&text=" + encodeURIComponent("Win Toronto Blue Jays tickets this Canada Day!")
    }
  },
  "rules": {
    "fairSelectionInfo": {
      "title": "Fair & Square Selection",
      "text": "All entries are drawn randomly using a certified process to ensure fairness and equal chance for all participants."
    },
    "importantNotice": {
      "title": "Winner Notification - Check Your Email!",
      "text": "The winner will be contacted by email on or about July 2, 2025. Please ensure your email address is accurate and check your spam folder."
    },
    "faq": [
      {
        "q": "Who is eligible to enter?",
        "a": "Giveaway is open to legal residents aged 18 or older who attend the Canada Day event."
      },
      {
        "q": "When is the giveaway draw?",
        "a": "Draw will be held on July 2, 2025."
      },
      {
        "q": "Do I need to be present to win?",
        "a": "Yes, participants must be present at the event to enter and claim their prize."
      },
      {
        "q": "How many times can I enter?",
        "a": "One entry per person allowed. Duplicate entries are not permitted."
      },
      {
        "q": "Is my information secure?",
        "a": "We will only use your data for this giveaway and will never sell your information."
      }
    ],
    "tips": [
      "Double-check your email before submitting.",
      "Add our contact email shar@theskygroup.ca to your address book.",
      "Follow The Sky Group on social media for winner announcements."
    ]
  },
  "footerContact": {
    "organizerName": "The Sky Group",
    "organizerLogoUrl": "https://prod-files-secure.s3.us-west-2.amazonaws.com/8e0c10a0-da43-409c-b191-91135b7161ff/777776b6-d7a4-424e-8ea4-333ed3be7501/The_Sky_Group_X_Property.ca_cobranded_logo.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WZSPVYT%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T211553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIGbToy7dJ8kIx25lI8o6iZMr6tPuYv44mCtCamRJUMxtAiEA%2Fdv7KvFSjmIBP4Kncl50di%2FKfxRwA2dzeNbzYft3AJwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDIwSomVv6y%2BBtdYqDircA2xeBLD4ERn8QS6Q4MhI0Lerr9C2Clx5WyP2dSN3i3SeEG7ysRvrFOR6%2BOT%2Fc29lkYUifFst1XBcKY85yKJ%2BBXlQulCbEVvWBzUArrL%2FmT0i4Iy8rV1yfN7nv6R5MKE9vKMqPZwNbOn%2FKuB6AwZMckJHOSiwEDwdam62vfCuFIJPKuUGRx8hF1qMPs2u%2FUUqATPxzKoR9rMYMSa7wiV5q8%2FqpskGnv%2F%2BkfPvTtIpJUVbZEQKa48nsJTYMYuoZxPpOBkU4I5TcYH%2BBJdljcWmaRAYGdrC1zHrWkEN9GUqw8yFzcLKjzw9ZfZSiaiSQCDhcFXp8CShzkpm%2BkZO5fSUpWnlkwNRnzYoZG5eN9qd9R12dO%2BiS2LbLIHJGfnatbc%2BktvCknTWA2HL5%2F4z1A6c2j2DP1vC6u266lckCv8hQkONFBS%2Fc5c90ezLK0xR8SBH80Lcn%2F0DOBXX4KChyVanFwRtaLoma%2FWxbUW8r%2BYmhp1zAfYE8kvpMO5A3b2cdjSOnTy2cQ7%2FPb7jc9j4a%2Bd0Z0mB%2BNilVky2t%2FIeqE%2FW6KKf%2B0RTxiGOLWkiSazqlLxdTtinlj8JYSeND6uZeXTa8ROOm7fevp3ySaG%2BA82DU9u0WsRrwHKw864OcZ5kMKmOwsIGOqUBCWEuEmyr9TeharwkX2k3ZKQHerEM%2FJGslID6Wk%2B%2BEJDHI3MvPLlnAPnR6d%2FuguYtSQuUPwtJF9L8CXGKj0f8YGIYH9C2vrBIminNFIMm0lgz18aIgX0wOlGxs80r1XOGcRj6AUqYm%2FNsBKHqN6VFGAYh0ApgqkWQKpn2rrUEjl7aZXLZKlFFkv1nwyhcEMDEB8xOj15RmWKF3NsC7KUXVxQi3OAi&X-Amz-Signature=e0eb26e182bdc95ef5750a2672b96f25db441a930397b66cca4db35f74be3ace&X-Amz-SignedHeaders=host",
    "email": "shar@theskygroup.ca",
    "phone": "1 647 887 4996",
    "address": "36 Distillery Lane Unit 500, Toronto, ON M5A 3C4",
    "social": {
      "facebook": "https://www.facebook.com/theskygroupre",
      "instagram": "https://www.instagram.com/theskygroup_re"
    },
    "copyrightOwner": "Sky Group Inc."
  },
  "meta": {
    "pageTitle": "Win Toronto Blue Jays Tickets - Canada Day Giveaway!",
    "navBrandLogoText": "Sky Group Blue Jays Giveaway"
  },
  "deploymentInfo": {
    "repoName": "Giveaway-561",
    "repoUrl": "https://github.com/arslvn93/Giveaway-561",
    "netlifyUrl": "http://Giveaway-561.netlify.app",
    "webhookUrl": "https://n8n.salesgenius.co/webhook/giveaway"
  }
};