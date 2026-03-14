
    // Server se aaya hua data
    const CATEGORY = "<%= category %>".toLowerCase();
const SUBJECT = "<%= subject %>".toLowerCase();

    const TEST_NO = <%= testNo %>;
    
    // 🔥 CHANGE 1: QUESTION_BANK को GLOBAL SCOPE में रखें
    const QUESTION_BANK = {
     1:[
       {
        "num": 1,
        "question_en": "What is the definition of supply?",
        "question_hi": "आपूर्ति की परिभाषा क्या है?",
        "options_en": [
          "Desire to buy goods",
          "Quantity of goods a seller is willing to sell at a price",
          "Quantity of goods demanded by consumers",
          "Goods available in stock"
        ],
        "options_hi": [
          "वस्तुओं को खरीदने की इच्छा",
          "किसी मूल्य पर विक्रेता द्वारा बेची जाने वाली वस्तुओं की मात्रा",
          "उपभोक्ताओं द्वारा माँगी गई वस्तुओं की मात्रा",
          "भंडार में उपलब्ध वस्तुएँ"
        ],
        answer_en: "Quantity of goods a seller is willing to sell at a price",
        answer_hi:"किसी मूल्य पर विक्रेता द्वारा बेची जाने वाली वस्तुओं की मात्रा",
        "attempted": false,
        "selected": ""
      },
{
    "num": 2,
    "question_en": "Which of the following is a feature of supply?",
    "question_hi": "निम्नलिखित में से कौन आपूर्ति की विशेषता है?",
    "options_en": ["Depends on desire", "Depends on price", "Depends on population", "Depends on demand"],
    "options_hi": ["इच्छा पर निर्भर", "मूल्य पर निर्भर", "जनसंख्या पर निर्भर", "माँग पर निर्भर"],
    "answer_en": "Depends on price",
    "answer_hi": "मूल्य पर निर्भर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What does the law of supply state?",
    "question_hi": "आपूर्ति का नियम क्या कहता है?",
    "options_en": ["As price increases, quantity supplied decreases", "As price increases, quantity supplied increases", "As price decreases, quantity supplied increases", "Price has no effect on quantity supplied"],
    "options_hi": ["जैसे-जैसे मूल्य बढ़ता है, आपूर्ति की मात्रा घटती है", "जैसे-जैसे मूल्य बढ़ता है, आपूर्ति की मात्रा बढ़ती है", "जैसे-जैसे मूल्य घटता है, आपूर्ति की मात्रा बढ़ती है", "मूल्य का आपूर्ति की मात्रा पर कोई प्रभाव नहीं पड़ता"],
    "answer_en": "As price increases, quantity supplied increases",
    "answer_hi": "जैसे-जैसे मूल्य बढ़ता है, आपूर्ति की मात्रा बढ़ती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which of these is a factor affecting supply?",
    "question_hi": "इनमें से कौन-सा आपूर्ति को प्रभावित करने वाला कारक है?",
    "options_en": ["Consumer taste", "Technology", "Income", "Population"],
    "options_hi": ["उपभोक्ता की पसंद", "प्रौद्योगिकी", "आय", "जनसंख्या"],
    "answer_en": "Technology",
    "answer_hi": "प्रौद्योगिकी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What happens to supply if the price of the good increases?",
    "question_hi": "यदि वस्तु का मूल्य बढ़ता है तो आपूर्ति का क्या होता है?",
    "options_en": ["Increases", "Decreases", "Remains constant", "Becomes zero"],
    "options_hi": ["बढ़ती है", "घटती है", "स्थिर रहती है", "शून्य हो जाती है"],
    "answer_en": "Increases",
    "answer_hi": "बढ़ती है",
    "attempted": false,
    "selected": ""
  },
     {
    "num": 6,
    "question_en": "What is the supply schedule?",
    "question_hi": "आपूर्ति अनुसूची क्या होती है?",
    "options_en": ["Table showing price and demand", "Table showing price and supply", "Graph of utility", "None of these"],
    "options_hi": ["मूल्य और मांग दिखाने वाली तालिका", "मूल्य और आपूर्ति दिखाने वाली तालिका", "उपयोगिता का ग्राफ", "इनमें से कोई नहीं"],
    "answer_en": "Table showing price and supply",
    "answer_hi": "मूल्य और आपूर्ति दिखाने वाली तालिका",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which of the following will shift the supply curve to the right?",
    "question_hi": "निम्नलिखित में से कौन-सा आपूर्ति वक्र को दाईं ओर स्थानांतरित करेगा?",
    "options_en": ["Increase in cost of production", "Decrease in cost of production", "Increase in demand", "Increase in price"],
    "options_hi": ["उत्पादन लागत में वृद्धि", "उत्पादन लागत में कमी", "मांग में वृद्धि", "मूल्य में वृद्धि"],
    "answer_en": "Decrease in cost of production",
    "answer_hi": "उत्पादन लागत में कमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "If all other factors remain constant, an increase in the price of a commodity leads to:",
    "question_hi": "यदि अन्य सभी कारक स्थिर रहें, तो किसी वस्तु के मूल्य में वृद्धि से क्या होता है?",
    "options_en": ["Decrease in supply", "Increase in supply", "No change in supply", "Supply becomes zero"],
    "options_hi": ["आपूर्ति में कमी", "आपूर्ति में वृद्धि", "आपूर्ति में कोई परिवर्तन नहीं", "आपूर्ति शून्य हो जाती है"],
    "answer_en": "Increase in supply",
    "answer_hi": "आपूर्ति में वृद्धि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which of the following is not a determinant of supply?",
    "question_hi": "निम्नलिखित में से कौन-सा आपूर्ति का निर्धारक नहीं है?",
    "options_en": ["Technology", "Price of inputs", "Government policy", "Consumer income"],
    "options_hi": ["प्रौद्योगिकी", "इनपुट की कीमत", "सरकारी नीति", "उपभोक्ता की आय"],
    "answer_en": "Consumer income",
    "answer_hi": "उपभोक्ता की आय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is the graphical representation of the supply schedule called?",
    "question_hi": "आपूर्ति अनुसूची का ग्राफिक चित्रण क्या कहलाता है?",
    "options_en": ["Demand curve", "Production curve", "Supply curve", "Revenue curve"],
    "options_hi": ["मांग वक्र", "उत्पादन वक्र", "आपूर्ति वक्र", "राजस्व वक्र"],
    "answer_en": "Supply curve",
    "answer_hi": "आपूर्ति वक्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What does 'law of supply' indicate?",
    "question_hi": "'आपूर्ति का नियम' क्या दर्शाता है?",
    "options_en": ["Positive relationship between price and quantity supplied", "Negative relationship", "No relationship", "None of the above"],
    "options_hi": ["मूल्य और आपूर्ति मात्रा के बीच सकारात्मक संबंध", "ऋणात्मक संबंध", "कोई संबंध नहीं", "उपरोक्त में से कोई नहीं"],
    "answer_en": "Positive relationship between price and quantity supplied",
    "answer_hi": "मूल्य और आपूर्ति मात्रा के बीच सकारात्मक संबंध",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Increase in number of sellers leads to:",
    "question_hi": "विक्रेताओं की संख्या में वृद्धि से क्या होता है?",
    "options_en": ["Decrease in supply", "Increase in supply", "Constant supply", "None of the above"],
    "options_hi": ["आपूर्ति में कमी", "आपूर्ति में वृद्धि", "स्थिर आपूर्ति", "उपरोक्त में से कोई नहीं"],
    "answer_en": "Increase in supply",
    "answer_hi": "आपूर्ति में वृद्धि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which of the following shows a movement along the supply curve?",
    "question_hi": "निम्नलिखित में से कौन-सा आपूर्ति वक्र के साथ गति को दर्शाता है?",
    "options_en": ["Change in price", "Change in technology", "Change in taxes", "Change in input cost"],
    "options_hi": ["मूल्य में परिवर्तन", "प्रौद्योगिकी में परिवर्तन", "करों में परिवर्तन", "इनपुट लागत में परिवर्तन"],
    "answer_en": "Change in price",
    "answer_hi": "मूल्य में परिवर्तन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which factor does not shift the supply curve?",
    "question_hi": "निम्नलिखित में से कौन-सा कारक आपूर्ति वक्र को नहीं बदलता?",
    "options_en": ["Change in price", "Change in input cost", "Change in technology", "Change in government policy"],
    "options_hi": ["मूल्य में परिवर्तन", "इनपुट लागत में परिवर्तन", "प्रौद्योगिकी में परिवर्तन", "सरकारी नीति में परिवर्तन"],
    "answer_en": "Change in price",
    "answer_hi": "मूल्य में परिवर्तन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which of the following best defines supply?",
    "question_hi": "निम्नलिखित में से कौन-सा आपूर्ति को सबसे अच्छे तरीके से परिभाषित करता है?",
    "options_en": ["Desire to sell", "Ability to sell", "Quantity offered for sale at a given price", "Willingness to produce"],
    "options_hi": ["बेचने की इच्छा", "बेचने की क्षमता", "निर्धारित मूल्य पर बिक्री हेतु प्रस्तुत मात्रा", "उत्पादन करने की इच्छा"],
    "answer_en": "Quantity offered for sale at a given price",
    "answer_hi": "निर्धारित मूल्य पर बिक्री हेतु प्रस्तुत मात्रा",
    "attempted": false,
    "selected": ""
  },
     {
    "num": 16,
    "question_en": "What is meant by market supply?",
    "question_hi": "बाजार आपूर्ति से क्या अभिप्राय है?",
    "options_en": ["Supply by one seller", "Supply at market price", "Total supply by all sellers", "None of the above"],
    "options_hi": ["एक विक्रेता द्वारा आपूर्ति", "बाजार मूल्य पर आपूर्ति", "सभी विक्रेताओं द्वारा कुल आपूर्ति", "उपरोक्त में से कोई नहीं"],
    "answer_en": "Total supply by all sellers",
    "answer_hi": "सभी विक्रेताओं द्वारा कुल आपूर्ति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What happens when the government gives subsidy to producers?",
    "question_hi": "जब सरकार उत्पादकों को सब्सिडी देती है तो क्या होता है?",
    "options_en": ["Supply increases", "Supply decreases", "No effect on supply", "Supply becomes zero"],
    "options_hi": ["आपूर्ति बढ़ती है", "आपूर्ति घटती है", "आपूर्ति पर कोई प्रभाव नहीं", "आपूर्ति शून्य हो जाती है"],
    "answer_en": "Supply increases",
    "answer_hi": "आपूर्ति बढ़ती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is the shape of a typical supply curve?",
    "question_hi": "एक सामान्य आपूर्ति वक्र का आकार कैसा होता है?",
    "options_en": ["Horizontal", "Vertical", "Upward sloping", "Downward sloping"],
    "options_hi": ["क्षितिजीय", "ऊर्ध्वाधर", "ऊपर की ओर ढलान वाला", "नीचे की ओर ढलान वाला"],
    "answer_en": "Upward sloping",
    "answer_hi": "ऊपर की ओर ढलान वाला",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which of the following is an exception to the law of supply?",
    "question_hi": "निम्नलिखित में से कौन-सा आपूर्ति के नियम का अपवाद है?",
    "options_en": ["Agricultural products", "Industrial goods", "Imported items", "Durable goods"],
    "options_hi": ["कृषि उत्पाद", "औद्योगिक वस्तुएँ", "आयातित वस्तुएँ", "टिकाऊ वस्तुएँ"],
    "answer_en": "Agricultural products",
    "answer_hi": "कृषि उत्पाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What will be the elasticity of supply if a 10% rise in price causes a 20% increase in supply?",
    "question_hi": "यदि मूल्य में 10% वृद्धि से आपूर्ति में 20% वृद्धि हो, तो आपूर्ति की लोच क्या होगी?",
    "options_en": ["1", "0.5", "2", "10"],
    "options_hi": ["1", "0.5", "2", "10"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which of the following defines perfectly elastic supply?",
    "question_hi": "निम्नलिखित में से कौन-सा पूर्णतः लोचशील आपूर्ति को दर्शाता है?",
    "options_en": ["Supply is zero", "Supply is infinite at given price", "No change in supply", "Supply decreases as price increases"],
    "options_hi": ["आपूर्ति शून्य है", "निर्धारित मूल्य पर आपूर्ति अनंत है", "आपूर्ति में कोई परिवर्तन नहीं", "मूल्य बढ़ने पर आपूर्ति घटती है"],
    "answer_en": "Supply is infinite at given price",
    "answer_hi": "निर्धारित मूल्य पर आपूर्ति अनंत है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "If the supply remains unchanged irrespective of price, it is called:",
    "question_hi": "यदि मूल्य चाहे जैसा भी हो, आपूर्ति अपरिवर्तित रहती है, तो इसे क्या कहते हैं?",
    "options_en": ["Elastic supply", "Unitary elastic supply", "Inelastic supply", "Perfectly inelastic supply"],
    "options_hi": ["लोचशील आपूर्ति", "एकात्मक लोच आपूर्ति", "अलोचशील आपूर्ति", "पूर्णतः अलोचशील आपूर्ति"],
    "answer_en": "Perfectly inelastic supply",
    "answer_hi": "पूर्णतः अलोचशील आपूर्ति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Supply function expresses relation between:",
    "question_hi": "आपूर्ति फलन किसके बीच संबंध को दर्शाता है?",
    "options_en": ["Price and cost", "Price and supply", "Cost and demand", "Demand and supply"],
    "options_hi": ["मूल्य और लागत", "मूल्य और आपूर्ति", "लागत और मांग", "मांग और आपूर्ति"],
    "answer_en": "Price and supply",
    "answer_hi": "मूल्य और आपूर्ति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What will happen to supply if there is a technological improvement?",
    "question_hi": "यदि तकनीकी सुधार होता है तो आपूर्ति पर क्या प्रभाव पड़ेगा?",
    "options_en": ["Decrease", "Increase", "No change", "Becomes negative"],
    "options_hi": ["घटती है", "बढ़ती है", "कोई परिवर्तन नहीं", "ऋणात्मक हो जाती है"],
    "answer_en": "Increase",
    "answer_hi": "बढ़ती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What type of relationship exists between price and supply?",
    "question_hi": "मूल्य और आपूर्ति के बीच किस प्रकार का संबंध होता है?",
    "options_en": ["Inverse", "Direct", "No relation", "Zero"],
    "options_hi": ["विपरीत", "प्रत्यक्ष", "कोई संबंध नहीं", "शून्य"],
    "answer_en": "Direct",
    "answer_hi": "प्रत्यक्ष",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which of the following will shift the supply curve leftward?",
    "question_hi": "निम्नलिखित में से कौन-सा आपूर्ति वक्र को बाईं ओर स्थानांतरित करेगा?",
    "options_en": ["Subsidy", "Decrease in tax", "Improved technology", "Increase in input prices"],
    "options_hi": ["सब्सिडी", "कर में कमी", "बेहतर प्रौद्योगिकी", "इनपुट कीमतों में वृद्धि"],
    "answer_en": "Increase in input prices",
    "answer_hi": "इनपुट कीमतों में वृद्धि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is joint supply?",
    "question_hi": "संयुक्त आपूर्ति क्या है?",
    "options_en": ["Supply of one good only", "Supply of substitutes", "Supply of complementary goods", "Supply of two or more goods produced together"],
    "options_hi": ["केवल एक वस्तु की आपूर्ति", "प्रतिस्थापनों की आपूर्ति", "पूरक वस्तुओं की आपूर्ति", "दो या अधिक वस्तुओं की संयुक्त रूप से आपूर्ति"],
    "answer_en": "Supply of two or more goods produced together",
    "answer_hi": "दो या अधिक वस्तुओं की संयुक्त रूप से आपूर्ति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is composite supply?",
    "question_hi": "संयुक्त आपूर्ति (Composite Supply) क्या है?",
    "options_en": ["Single product supply", "Goods supplied together for single price", "Multiple prices supply", "None of these"],
    "options_hi": ["एकल उत्पाद की आपूर्ति", "एक ही मूल्य पर एक साथ आपूर्ति की गई वस्तुएँ", "अनेक मूल्य की आपूर्ति", "इनमें से कोई नहीं"],
    "answer_en": "Goods supplied together for single price",
    "answer_hi": "एक ही मूल्य पर एक साथ आपूर्ति की गई वस्तुएँ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "When price increases and supply increases, it is called:",
    "question_hi": "जब मूल्य बढ़ता है और आपूर्ति बढ़ती है, तो इसे क्या कहते हैं?",
    "options_en": ["Negative supply", "Inverse supply", "Expansion of supply", "Contraction of supply"],
    "options_hi": ["ऋणात्मक आपूर्ति", "विपरीत आपूर्ति", "आपूर्ति में विस्तार", "आपूर्ति में संकुचन"],
    "answer_en": "Expansion of supply",
    "answer_hi": "आपूर्ति में विस्तार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which curve shows a positive slope?",
    "question_hi": "कौन-सा वक्र धनात्मक ढलान को दर्शाता है?",
    "options_en": ["Demand curve", "Supply curve", "Cost curve", "Revenue curve"],
    "options_hi": ["मांग वक्र", "आपूर्ति वक्र", "लागत वक्र", "राजस्व वक्र"],
    "answer_en": "Supply curve",
    "answer_hi": "आपूर्ति वक्र",
    "attempted": false,
    "selected": ""
  },
      {
    "num": 31,
    "question_en": "A supply curve which is parallel to the Y-axis represents:",
    "question_hi": "Y-अक्ष के समांतर आपूर्ति वक्र किसे दर्शाता है?",
    "options_en": ["Perfectly inelastic supply", "Perfectly elastic supply", "Unitary elastic supply", "Zero supply"],
    "options_hi": ["पूर्णतः अलोचशील आपूर्ति", "पूर्णतः लोचशील आपूर्ति", "एकात्मक लोच आपूर्ति", "शून्य आपूर्ति"],
    "answer_en": "Perfectly elastic supply",
    "answer_hi": "पूर्णतः लोचशील आपूर्ति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "When supply increases due to factors other than price, it is called:",
    "question_hi": "जब मूल्य के अलावा अन्य कारकों से आपूर्ति बढ़ती है, तो इसे क्या कहते हैं?",
    "options_en": ["Expansion of supply", "Increase in supply", "Extension of supply", "Contraction of supply"],
    "options_hi": ["आपूर्ति में विस्तार", "आपूर्ति में वृद्धि", "आपूर्ति का विस्तार", "आपूर्ति में संकुचन"],
    "answer_en": "Increase in supply",
    "answer_hi": "आपूर्ति में वृद्धि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which factor does not affect supply?",
    "question_hi": "निम्न में से कौन-सा कारक आपूर्ति को प्रभावित नहीं करता?",
    "options_en": ["Price of the good", "Government policy", "Consumer’s taste", "Technological change"],
    "options_hi": ["वस्तु का मूल्य", "सरकारी नीति", "उपभोक्ता की पसंद", "प्रौद्योगिकी में परिवर्तन"],
    "answer_en": "Consumer’s taste",
    "answer_hi": "उपभोक्ता की पसंद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which of the following is a determinant of supply?",
    "question_hi": "निम्न में से कौन आपूर्ति का निर्धारक है?",
    "options_en": ["Consumer income", "Seller’s expectations", "Tastes and preferences", "Utility of the product"],
    "options_hi": ["उपभोक्ता की आय", "विक्रेता की अपेक्षाएँ", "रुचियाँ और प्राथमिकताएँ", "वस्तु की उपयोगिता"],
    "answer_en": "Seller’s expectations",
    "answer_hi": "विक्रेता की अपेक्षाएँ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Law of supply establishes relationship between:",
    "question_hi": "आपूर्ति का नियम किसके बीच संबंध स्थापित करता है?",
    "options_en": ["Price and demand", "Price and supply", "Income and supply", "Demand and supply"],
    "options_hi": ["मूल्य और मांग", "मूल्य और आपूर्ति", "आय और आपूर्ति", "मांग और आपूर्ति"],
    "answer_en": "Price and supply",
    "answer_hi": "मूल्य और आपूर्ति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which supply curve is a straight line through the origin?",
    "question_hi": "कौन-सा आपूर्ति वक्र मूल बिंदु से होकर जाता सीधा रेखा होता है?",
    "options_en": ["Perfectly inelastic", "Unitary elastic", "Perfectly elastic", "Relatively inelastic"],
    "options_hi": ["पूर्णतः अलोचशील", "एकात्मक लोच", "पूर्णतः लोचशील", "अपेक्षाकृत अलोचशील"],
    "answer_en": "Unitary elastic",
    "answer_hi": "एकात्मक लोच",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "If elasticity of supply is less than one, supply is said to be:",
    "question_hi": "यदि आपूर्ति की लोच एक से कम है, तो आपूर्ति को क्या कहा जाएगा?",
    "options_en": ["Elastic", "Inelastic", "Unitary elastic", "Perfectly elastic"],
    "options_hi": ["लोचशील", "अलोचशील", "एकात्मक लोच", "पूर्णतः लोचशील"],
    "answer_en": "Inelastic",
    "answer_hi": "अलोचशील",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which of the following causes a movement along the supply curve?",
    "question_hi": "निम्न में से कौन-सा आपूर्ति वक्र पर गति का कारण बनता है?",
    "options_en": ["Change in input cost", "Change in technology", "Change in price of the good", "Government tax policy"],
    "options_hi": ["इनपुट लागत में परिवर्तन", "प्रौद्योगिकी में परिवर्तन", "वस्तु के मूल्य में परिवर्तन", "सरकारी कर नीति"],
    "answer_en": "Change in price of the good",
    "answer_hi": "वस्तु के मूल्य में परिवर्तन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is the nature of the law of supply?",
    "question_hi": "आपूर्ति के नियम का स्वभाव कैसा होता है?",
    "options_en": ["Qualitative", "Quantitative", "Statistical", "Descriptive"],
    "options_hi": ["गुणात्मक", "मात्रात्मक", "सांख्यिकीय", "वर्णनात्मक"],
    "answer_en": "Quantitative",
    "answer_hi": "मात्रात्मक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which of the following shows a decrease in supply?",
    "question_hi": "निम्न में से कौन-सा आपूर्ति में कमी को दर्शाता है?",
    "options_en": ["Rightward shift of supply curve", "Leftward shift of supply curve", "Movement up the supply curve", "Movement down the supply curve"],
    "options_hi": ["आपूर्ति वक्र का दाईं ओर खिसकना", "आपूर्ति वक्र का बाईं ओर खिसकना", "आपूर्ति वक्र के ऊपर की ओर गति", "आपूर्ति वक्र के नीचे की ओर गति"],
    "answer_en": "Leftward shift of supply curve",
    "answer_hi": "आपूर्ति वक्र का बाईं ओर खिसकना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which factor leads to a rise in market supply?",
    "question_hi": "कौन-सा कारक बाजार आपूर्ति में वृद्धि करता है?",
    "options_en": ["Increase in production cost", "Government tax", "Improvement in technology", "Decrease in number of sellers"],
    "options_hi": ["उत्पादन लागत में वृद्धि", "सरकारी कर", "प्रौद्योगिकी में सुधार", "विक्रेताओं की संख्या में कमी"],
    "answer_en": "Improvement in technology",
    "answer_hi": "प्रौद्योगिकी में सुधार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Elasticity of supply is measured by:",
    "question_hi": "आपूर्ति की लोच को किससे मापा जाता है?",
    "options_en": ["Percentage method", "Geometric method", "Total outlay method", "All of these"],
    "options_hi": ["प्रतिशत विधि", "ज्यामितीय विधि", "कुल व्यय विधि", "इनमें से सभी"],
    "answer_en": "All of these",
    "answer_hi": "इनमें से सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What does a vertical supply curve indicate?",
    "question_hi": "ऊर्ध्वाधर आपूर्ति वक्र क्या दर्शाता है?",
    "options_en": ["Perfectly elastic supply", "Inelastic supply", "Perfectly inelastic supply", "Elastic supply"],
    "options_hi": ["पूर्णतः लोचशील आपूर्ति", "अलोचशील आपूर्ति", "पूर्णतः अलोचशील आपूर्ति", "लोचशील आपूर्ति"],
    "answer_en": "Perfectly inelastic supply",
    "answer_hi": "पूर्णतः अलोचशील आपूर्ति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which of the following represents a fixed supply?",
    "question_hi": "निम्न में से कौन स्थिर आपूर्ति को दर्शाता है?",
    "options_en": ["Vertical supply curve", "Horizontal supply curve", "Upward sloping curve", "Downward sloping curve"],
    "options_hi": ["ऊर्ध्वाधर आपूर्ति वक्र", "क्षितिजीय आपूर्ति वक्र", "ऊपर की ओर ढलान वक्र", "नीचे की ओर ढलान वक्र"],
    "answer_en": "Vertical supply curve",
    "answer_hi": "ऊर्ध्वाधर आपूर्ति वक्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What happens when cost of production rises?",
    "question_hi": "जब उत्पादन लागत बढ़ती है, तब क्या होता है?",
    "options_en": ["Supply increases", "Supply decreases", "No change in supply", "Demand increases"],
    "options_hi": ["आपूर्ति बढ़ती है", "आपूर्ति घटती है", "आपूर्ति में कोई परिवर्तन नहीं", "मांग बढ़ती है"],
    "answer_en": "Supply decreases",
    "answer_hi": "आपूर्ति घटती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is backward sloping supply curve related to?",
    "question_hi": "पीछे की ओर ढलान वाला आपूर्ति वक्र किससे संबंधित है?",
    "options_en": ["Labour supply", "Capital supply", "Land supply", "Product supply"],
    "options_hi": ["श्रम आपूर्ति", "पूंजी आपूर्ति", "भूमि आपूर्ति", "उत्पाद आपूर्ति"],
    "answer_en": "Labour supply",
    "answer_hi": "श्रम आपूर्ति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What does market supply depend on?",
    "question_hi": "बाजार आपूर्ति किस पर निर्भर करती है?",
    "options_en": ["Individual supply", "Price", "Number of sellers", "All of these"],
    "options_hi": ["व्यक्तिगत आपूर्ति", "मूल्य", "विक्रेताओं की संख्या", "इनमें से सभी"],
    "answer_en": "All of these",
    "answer_hi": "इनमें से सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which factor shifts the supply curve to the right?",
    "question_hi": "कौन-सा कारक आपूर्ति वक्र को दाईं ओर स्थानांतरित करता है?",
    "options_en": ["Decrease in technology", "Increase in input cost", "Decrease in tax", "Decrease in subsidies"],
    "options_hi": ["प्रौद्योगिकी में कमी", "इनपुट लागत में वृद्धि", "कर में कमी", "सब्सिडी में कमी"],
    "answer_en": "Decrease in tax",
    "answer_hi": "कर में कमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Supply schedule shows:",
    "question_hi": "आपूर्ति अनुसूची दर्शाती है:",
    "options_en": ["Price and demand relation", "Price and supply relation", "Demand and supply relation", "Supply and cost relation"],
    "options_hi": ["मूल्य और मांग संबंध", "मूल्य और आपूर्ति संबंध", "मांग और आपूर्ति संबंध", "आपूर्ति और लागत संबंध"],
    "answer_en": "Price and supply relation",
    "answer_hi": "मूल्य और आपूर्ति संबंध",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "In which case supply will be zero?",
    "question_hi": "किस स्थिति में आपूर्ति शून्य होगी?",
    "options_en": ["Price is high", "Price is low", "Price is zero", "Price is negative"],
    "options_hi": ["मूल्य अधिक है", "मूल्य कम है", "मूल्य शून्य है", "मूल्य ऋणात्मक है"],
    "answer_en": "Price is zero",
    "answer_hi": "मूल्य शून्य है",
    "attempted": false,
    "selected": ""
  }
     ],
     2:[
      {
    num: 1,
    question_en: "Which property aligns text to the center?",
    question_hi: "कौन-सी प्रॉपर्टी टेक्स्ट को केंद्र में संरेखित करती है?",
    options_en: ["text-align", "vertical-align", "align-items", "justify-content"],
    options_hi: ["टेक्स्ट संरेखण", "ऊर्ध्वाधर संरेखण", "आइटम संरेखण", "न्यायसंगत सामग्री"],
    answer_en: "text-align",
    answer_hi: "टेक्स्ट संरेखण",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which property specifies the maximum width of an element?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट की अधिकतम चौड़ाई निर्दिष्ट करती है?",
    options_en: ["max-width", "min-width", "width", "height"],
    options_hi: ["अधिकतम चौड़ाई", "न्यूनतम चौड़ाई", "चौड़ाई", "ऊँचाई"],
    answer_en: "max-width",
    answer_hi: "अधिकतम चौड़ाई",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which property is used to make an element respond to mouse hover?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट को माउस होवर पर प्रतिक्रिया देने के लिए उपयोग होती है?",
    options_en: ["hover", ":hover", "mouse-over", "pointer-events"],
    options_hi: ["होवर", ":होवर", "माउस-ओवर", "पॉइंटर इवेंट्स"],
    answer_en: ":hover",
    answer_hi: ":होवर",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which CSS property is used to change the font of an element?",
    question_hi: "किस CSS प्रॉपर्टी का उपयोग एलिमेंट के फ़ॉन्ट को बदलने के लिए किया जाता है?",
    options_en: ["font-family", "font-style", "font-weight", "text-transform"],
    options_hi: ["फ़ॉन्ट परिवार", "फ़ॉन्ट शैली", "फ़ॉन्ट मोटाई", "टेक्स्ट ट्रांसफॉर्म"],
    answer_en: "font-family",
    answer_hi: "फ़ॉन्ट परिवार",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which property sets the outer margin of an element?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट का बाहरी मार्जिन सेट करती है?",
    options_en: ["margin", "padding", "border", "outline"],
    options_hi: ["मार्जिन", "पैडिंग", "बॉर्डर", "आउटलाइन"],
    answer_en: "margin",
    answer_hi: "मार्जिन",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which CSS property is used to control the space inside the element’s border?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एलिमेंट के बॉर्डर के अंदर का स्पेस नियंत्रित करती है?",
    options_en: ["padding", "margin", "border-spacing", "spacing"],
    options_hi: ["पैडिंग", "मार्जिन", "बॉर्डर स्पेसिंग", "स्पेसिंग"],
    answer_en: "padding",
    answer_hi: "पैडिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which property is used to hide an element but keep its space on the page?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट को छुपाती है लेकिन उसकी जगह बनाए रखती है?",
    options_en: ["visibility", "display", "opacity", "hidden"],
    options_hi: ["दृश्यता", "प्रदर्शन", "अपारदर्शिता", "छुपा हुआ"],
    answer_en: "visibility",
    answer_hi: "दृश्यता",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which property removes an element completely from the page layout?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट को पूरी तरह से पेज लेआउट से हटा देती है?",
    options_en: ["display", "visibility", "opacity", "position"],
    options_hi: ["प्रदर्शन", "दृश्यता", "अपारदर्शिता", "स्थिति"],
    answer_en: "display",
    answer_hi: "प्रदर्शन",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which CSS property is used to make text bold?",
    question_hi: "कौन-सी CSS प्रॉपर्टी टेक्स्ट को बोल्ड बनाने के लिए उपयोग होती है?",
    options_en: ["font-weight", "font-style", "text-decoration", "text-transform"],
    options_hi: ["फ़ॉन्ट मोटाई", "फ़ॉन्ट शैली", "टेक्स्ट सजावट", "टेक्स्ट ट्रांसफॉर्म"],
    answer_en: "font-weight",
    answer_hi: "फ़ॉन्ट मोटाई",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which CSS property is used to set the transparency of an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एलिमेंट की पारदर्शिता सेट करती है?",
    options_en: ["opacity", "visibility", "display", "filter"],
    options_hi: ["अपारदर्शिता", "दृश्यता", "प्रदर्शन", "फिल्टर"],
    answer_en: "opacity",
    answer_hi: "अपारदर्शिता",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which CSS property controls the flow of elements inside a container?",
    question_hi: "कौन-सी CSS प्रॉपर्टी कंटेनर के अंदर एलिमेंट्स के फ्लो को नियंत्रित करती है?",
    options_en: ["float", "clear", "position", "display"],
    options_hi: ["तैरना", "साफ़ करना", "स्थिति", "प्रदर्शन"],
    answer_en: "float",
    answer_hi: "तैरना",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which property is used to clear floated elements?",
    question_hi: "कौन-सी प्रॉपर्टी फ्लोटेड एलिमेंट्स को साफ़ करने के लिए उपयोग होती है?",
    options_en: ["clear", "float", "overflow", "position"],
    options_hi: ["साफ़ करना", "तैरना", "ओवरफ्लो", "स्थिति"],
    answer_en: "clear",
    answer_hi: "साफ़ करना",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which property controls the position of an element?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट की स्थिति नियंत्रित करती है?",
    options_en: ["position", "top", "left", "right"],
    options_hi: ["स्थिति", "ऊपर", "बाएँ", "दाएँ"],
    answer_en: "position",
    answer_hi: "स्थिति",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which CSS property is used to add space between lines of text?",
    question_hi: "कौन-सी CSS प्रॉपर्टी टेक्स्ट की लाइनों के बीच जगह जोड़ती है?",
    options_en: ["line-height", "letter-spacing", "word-spacing", "text-indent"],
    options_hi: ["लाइन ऊँचाई", "अक्षर स्पेसिंग", "शब्द स्पेसिंग", "टेक्स्ट इंडेंट"],
    answer_en: "line-height",
    answer_hi: "लाइन ऊँचाई",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which property controls the spacing between letters?",
    question_hi: "कौन-सी प्रॉपर्टी अक्षरों के बीच की दूरी नियंत्रित करती है?",
    options_en: ["letter-spacing", "word-spacing", "line-height", "text-align"],
    options_hi: ["अक्षर स्पेसिंग", "शब्द स्पेसिंग", "लाइन ऊँचाई", "टेक्स्ट संरेखण"],
    answer_en: "letter-spacing",
    answer_hi: "अक्षर स्पेसिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which CSS property controls the stacking order of elements?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एलिमेंट्स के स्टैकिंग क्रम को नियंत्रित करती है?",
    options_en: ["z-index", "position", "stack", "order"],
    options_hi: ["z-इंडेक्स", "स्थिति (position)", "स्टैक (stack)", "क्रम (order)"],
    answer_en: "z-index",
    answer_hi: "z-इंडेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which property is used to change the background color of an element?",
    question_hi: "किस प्रॉपर्टी का उपयोग एलिमेंट के पृष्ठभूमि रंग को बदलने के लिए किया जाता है?",
    options_en: ["background-color", "color", "background-image", "border-color"],
    options_hi: ["पृष्ठभूमि रंग", "रंग", "पृष्ठभूमि छवि", "बॉर्डर रंग"],
    answer_en: "background-color",
    answer_hi: "पृष्ठभूमि रंग",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which CSS property controls the text size?",
    question_hi: "कौन-सी CSS प्रॉपर्टी टेक्स्ट का आकार नियंत्रित करती है?",
    options_en: ["font-size", "text-size", "font-style", "text-style"],
    options_hi: ["फ़ॉन्ट आकार", "टेक्स्ट आकार", "फ़ॉन्ट शैली", "टेक्स्ट शैली"],
    answer_en: "font-size",
    answer_hi: "फ़ॉन्ट आकार",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which CSS property controls the visibility of an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एलिमेंट की दृश्यता नियंत्रित करती है?",
    options_en: ["visibility", "display", "opacity", "filter"],
    options_hi: ["दृश्यता", "प्रदर्शन", "अपारदर्शिता", "फिल्टर"],
    answer_en: "visibility",
    answer_hi: "दृश्यता",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which property is used to add a border around an element?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट के चारों ओर बॉर्डर जोड़ने के लिए उपयोग होती है?",
    options_en: ["border", "outline", "margin", "padding"],
    options_hi: ["बॉर्डर", "आउटलाइन", "मार्जिन", "पैडिंग"],
    answer_en: "border",
    answer_hi: "बॉर्डर",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which CSS property specifies the font style?",
    question_hi: "कौन-सी CSS प्रॉपर्टी फ़ॉन्ट शैली निर्दिष्ट करती है?",
    options_en: ["font-style", "font-weight", "font-family", "text-transform"],
    options_hi: ["फ़ॉन्ट शैली", "फ़ॉन्ट मोटाई", "फ़ॉन्ट परिवार", "टेक्स्ट ट्रांसफॉर्म"],
    answer_en: "font-style",
    answer_hi: "फ़ॉन्ट शैली",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which property is used to transform text to uppercase?",
    question_hi: "कौन-सी प्रॉपर्टी टेक्स्ट को अपरकेस में बदलने के लिए उपयोग होती है?",
    options_en: ["text-transform", "text-decoration", "text-align", "text-indent"],
    options_hi: ["टेक्स्ट ट्रांसफॉर्म", "टेक्स्ट सजावट", "टेक्स्ट संरेखण", "टेक्स्ट इंडेंट"],
    answer_en: "text-transform",
    answer_hi: "टेक्स्ट ट्रांसफॉर्म",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which property controls the overflow of content?",
    question_hi: "कौन-सी प्रॉपर्टी कंटेंट के ओवरफ्लो को नियंत्रित करती है?",
    options_en: ["overflow", "overflow-x", "overflow-y", "text-overflow"],
    options_hi: ["ओवरफ्लो", "ओवरफ्लो-एक्स", "ओवरफ्लो-वाय", "टेक्स्ट ओवरफ्लो"],
    answer_en: "overflow",
    answer_hi: "ओवरफ्लो",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which CSS property is used to change the cursor on mouse hover?",
    question_hi: "माउस होवर पर कर्सर को बदलने के लिए कौन-सी CSS प्रॉपर्टी का उपयोग किया जाता है?",
    options_en: ["cursor", "pointer-events", "hover", "mouse-pointer"],
    options_hi: ["कर्सर", "पॉइंटर इवेंट्स", "होवर", "माउस पॉइंटर"],
    answer_en: "cursor",
    answer_hi: "कर्सर",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which property is used to set the height of an element?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट की ऊँचाई सेट करने के लिए उपयोग होती है?",
    options_en: ["height", "width", "max-height", "min-height"],
    options_hi: ["ऊँचाई", "चौड़ाई", "अधिकतम ऊँचाई", "न्यूनतम ऊँचाई"],
    answer_en: "height",
    answer_hi: "ऊँचाई",
    attempted: false,
    selected: ""
  },
   {
    num: 26,
    question_en: "Which property is used to control the space between words?",
    question_hi: "शब्दों के बीच की दूरी नियंत्रित करने के लिए कौन-सी प्रॉपर्टी उपयोग होती है?",
    options_en: ["word-spacing", "letter-spacing", "line-height", "text-indent"],
    options_hi: ["शब्द स्पेसिंग", "अक्षर स्पेसिंग", "लाइन ऊँचाई", "टेक्स्ट इंडेंट"],
    answer_en: "word-spacing",
    answer_hi: "शब्द स्पेसिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which CSS property is used to make an element’s corners rounded?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एलिमेंट के कोनों को गोल बनाने के लिए उपयोग होती है?",
    options_en: ["border-radius", "border-style", "border-width", "border-color"],
    options_hi: ["बॉर्डर रेडियस", "बॉर्डर स्टाइल", "बॉर्डर चौड़ाई", "बॉर्डर रंग"],
    answer_en: "border-radius",
    answer_hi: "बॉर्डर रेडियस",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which property is used to set the transparency of the background image?",
    question_hi: "पृष्ठभूमि छवि की पारदर्शिता सेट करने के लिए कौन-सी प्रॉपर्टी उपयोग होती है?",
    options_en: ["background-opacity", "opacity", "background-transparent", "visibility"],
    options_hi: ["पृष्ठभूमि अपारदर्शिता", "अपारदर्शिता", "पृष्ठभूमि पारदर्शिता", "दृश्यता"],
    answer_en: "opacity",
    answer_hi: "अपारदर्शिता",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which property controls the style of the list item marker?",
    question_hi: "कौन-सी प्रॉपर्टी सूची आइटम मार्कर की शैली नियंत्रित करती है?",
    options_en: ["list-style-type", "list-style-position", "list-style", "marker-style"],
    options_hi: ["लिस्ट स्टाइल टाइप", "लिस्ट स्टाइल पोजीशन", "लिस्ट स्टाइल", "मार्कर स्टाइल"],
    answer_en: "list-style-type",
    answer_hi: "लिस्ट स्टाइल टाइप",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which property sets the style of the border?",
    question_hi: "कौन-सी प्रॉपर्टी बॉर्डर की शैली सेट करती है?",
    options_en: ["border-style", "border-width", "border-color", "border-radius"],
    options_hi: ["बॉर्डर स्टाइल", "बॉर्डर चौड़ाई", "बॉर्डर रंग", "बॉर्डर रेडियस"],
    answer_en: "border-style",
    answer_hi: "बॉर्डर स्टाइल",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which property controls the visibility of overflow content?",
    question_hi: "कौन-सी प्रॉपर्टी ओवरफ्लो कंटेंट की दृश्यता नियंत्रित करती है?",
    options_en: ["overflow", "overflow-x", "overflow-y", "clip"],
    options_hi: ["ओवरफ्लो", "ओवरफ्लो-एक्स", "ओवरफ्लो-वाय", "क्लिप"],
    answer_en: "overflow",
    answer_hi: "ओवरफ्लो",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which CSS property specifies the stacking context?",
    question_hi: "कौन-सी CSS प्रॉपर्टी स्टैकिंग कॉन्टेक्स्ट निर्दिष्ट करती है?",
    options_en: ["z-index", "stacking-context", "position", "order"],
    options_hi: ["z-इंडेक्स", "स्टैकिंग कॉन्टेक्स्ट", "स्थिति", "क्रम"],
    answer_en: "z-index",
    answer_hi: "z-इंडेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which property is used to change the display of an element to block?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट का प्रदर्शन ब्लॉक में बदलती है?",
    options_en: ["display", "visibility", "position", "float"],
    options_hi: ["प्रदर्शन", "दृश्यता", "स्थिति", "तैरना"],
    answer_en: "display",
    answer_hi: "प्रदर्शन",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which CSS property is used to control the position of a background image?",
    question_hi: "कौन-सी CSS प्रॉपर्टी पृष्ठभूमि छवि की स्थिति नियंत्रित करती है?",
    options_en: ["background-position", "background-repeat", "background-size", "background-attachment"],
    options_hi: ["पृष्ठभूमि स्थिति", "पृष्ठभूमि पुनरावृत्ति", "पृष्ठभूमि आकार", "पृष्ठभूमि संलग्नक"],
    answer_en: "background-position",
    answer_hi: "पृष्ठभूमि स्थिति",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which property is used to repeat a background image?",
    question_hi: "कौन-सी प्रॉपर्टी पृष्ठभूमि छवि को दोहराने के लिए उपयोग होती है?",
    options_en: ["background-repeat", "background-position", "background-size", "background-attachment"],
    options_hi: ["पृष्ठभूमि पुनरावृत्ति", "पृष्ठभूमि स्थिति", "पृष्ठभूमि आकार", "पृष्ठभूमि संलग्नक"],
    answer_en: "background-repeat",
    answer_hi: "पृष्ठभूमि पुनरावृत्ति",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which CSS property specifies the size of the background image?",
    question_hi: "कौन-सी CSS प्रॉपर्टी पृष्ठभूमि छवि का आकार निर्दिष्ट करती है?",
    options_en: ["background-size", "background-position", "background-repeat", "background-attachment"],
    options_hi: ["पृष्ठभूमि आकार", "पृष्ठभूमि स्थिति", "पृष्ठभूमि पुनरावृत्ति", "पृष्ठभूमि संलग्नक"],
    answer_en: "background-size",
    answer_hi: "पृष्ठभूमि आकार",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which property attaches the background image to the viewport or the element?",
    question_hi: "कौन-सी प्रॉपर्टी पृष्ठभूमि छवि को व्यूपोर्ट या एलिमेंट से संलग्न करती है?",
    options_en: ["background-attachment", "background-position", "background-repeat", "background-size"],
    options_hi: ["पृष्ठभूमि संलग्नक", "पृष्ठभूमि स्थिति", "पृष्ठभूमि पुनरावृत्ति", "पृष्ठभूमि आकार"],
    answer_en: "background-attachment",
    answer_hi: "पृष्ठभूमि संलग्नक",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which CSS property controls how an element’s content is displayed when it overflows?",
    question_hi: "कौन-सी CSS प्रॉपर्टी तब कंटेंट के प्रदर्शन को नियंत्रित करती है जब वह ओवरफ्लो करता है?",
    options_en: ["overflow", "visibility", "display", "opacity"],
    options_hi: ["ओवरफ्लो", "दृश्यता", "प्रदर्शन", "अपारदर्शिता"],
    answer_en: "overflow",
    answer_hi: "ओवरफ्लो",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which property specifies how elements inside a flex container are aligned?",
    question_hi: "कौन-सी प्रॉपर्टी फ्लेक्स कंटेनर के अंदर एलिमेंट्स को संरेखित करने का तरीका निर्दिष्ट करती है?",
    options_en: ["align-items", "justify-content", "align-content", "flex-direction"],
    options_hi: ["आइटम संरेखण", "न्यायसंगत सामग्री", "सामग्री संरेखण", "फ्लेक्स दिशा"],
    answer_en: "align-items",
    answer_hi: "आइटम संरेखण",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which CSS property controls the flow direction of flex items?",
    question_hi: "कौन-सी CSS प्रॉपर्टी फ्लेक्स आइटम्स के फ्लो दिशा को नियंत्रित करती है?",
    options_en: ["flex-direction", "flex-wrap", "flex-grow", "flex-shrink"],
    options_hi: ["फ्लेक्स दिशा", "फ्लेक्स रैप", "फ्लेक्स ग्रो", "फ्लेक्स श्रिंक"],
    answer_en: "flex-direction",
    answer_hi: "फ्लेक्स दिशा",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which property defines the wrapping behavior of flex items?",
    question_hi: "कौन-सी प्रॉपर्टी फ्लेक्स आइटम्स के रैपिंग व्यवहार को परिभाषित करती है?",
    options_en: ["flex-wrap", "flex-direction", "flex-grow", "flex-shrink"],
    options_hi: ["फ्लेक्स रैप", "फ्लेक्स दिशा", "फ्लेक्स ग्रो", "फ्लेक्स श्रिंक"],
    answer_en: "flex-wrap",
    answer_hi: "फ्लेक्स रैप",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which property controls the ability of a flex item to grow?",
    question_hi: "कौन-सी प्रॉपर्टी फ्लेक्स आइटम के बढ़ने की क्षमता को नियंत्रित करती है?",
    options_en: ["flex-grow", "flex-shrink", "flex-basis", "flex-wrap"],
    options_hi: ["फ्लेक्स ग्रो", "फ्लेक्स श्रिंक", "फ्लेक्स बेसिस", "फ्लेक्स रैप"],
    answer_en: "flex-grow",
    answer_hi: "फ्लेक्स ग्रो",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which property controls the ability of a flex item to shrink?",
    question_hi: "कौन-सी प्रॉपर्टी फ्लेक्स आइटम के सिकुड़ने की क्षमता को नियंत्रित करती है?",
    options_en: ["flex-shrink", "flex-grow", "flex-basis", "flex-wrap"],
    options_hi: ["फ्लेक्स श्रिंक", "फ्लेक्स ग्रो", "फ्लेक्स बेसिस", "फ्लेक्स रैप"],
    answer_en: "flex-shrink",
    answer_hi: "फ्लेक्स श्रिंक",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which property defines the default size of a flex item before growing or shrinking?",
    question_hi: "कौन-सी प्रॉपर्टी फ्लेक्स आइटम के बढ़ने या सिकुड़ने से पहले की डिफ़ॉल्ट आकार को परिभाषित करती है?",
    options_en: ["flex-basis", "flex-grow", "flex-shrink", "flex-wrap"],
    options_hi: ["फ्लेक्स बेसिस", "फ्लेक्स ग्रो", "फ्लेक्स श्रिंक", "फ्लेक्स रैप"],
    answer_en: "flex-basis",
    answer_hi: "फ्लेक्स बेसिस",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which CSS property controls the space between flex items?",
    question_hi: "कौन-सी CSS प्रॉपर्टी फ्लेक्स आइटम्स के बीच की दूरी नियंत्रित करती है?",
    options_en: ["gap", "margin", "padding", "space-between"],
    options_hi: ["गैप", "मार्जिन", "पैडिंग", "स्पेस-बिटवीन"],
    answer_en: "gap",
    answer_hi: "गैप",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which property specifies the type of cursor when hovering over an element?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट पर होवर करते समय कर्सर के प्रकार को निर्दिष्ट करती है?",
    options_en: ["cursor", "pointer-events", "hover", "mouse-pointer"],
    options_hi: ["कर्सर", "पॉइंटर इवेंट्स", "होवर", "माउस पॉइंटर"],
    answer_en: "cursor",
    answer_hi: "कर्सर",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which property specifies the transition effect when a CSS property changes?",
    question_hi: "कौन-सी प्रॉपर्टी तब संक्रमण प्रभाव निर्दिष्ट करती है जब CSS प्रॉपर्टी बदलती है?",
    options_en: ["transition", "transform", "animation", "filter"],
    options_hi: ["ट्रांजिशन", "ट्रांसफॉर्म", "एनीमेशन", "फिल्टर"],
    answer_en: "transition",
    answer_hi: "ट्रांजिशन",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which property controls the animation duration?",
    question_hi: "कौन-सी प्रॉपर्टी एनीमेशन की अवधि नियंत्रित करती है?",
    options_en: ["animation-duration", "animation-delay", "animation-iteration-count", "animation-name"],
    options_hi: ["एनीमेशन अवधि", "एनीमेशन विलंब", "एनीमेशन पुनरावृत्ति संख्या", "एनीमेशन नाम"],
    answer_en: "animation-duration",
    answer_hi: "एनीमेशन अवधि",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which property is used to rotate an element in CSS?",
    question_hi: "CSS में एलिमेंट को घुमाने के लिए कौन-सी प्रॉपर्टी का उपयोग होता है?",
    options_en: ["transform", "transition", "animation", "rotate"],
    options_hi: ["ट्रांसफॉर्म", "ट्रांजिशन", "एनीमेशन", "रोटेट"],
    answer_en: "transform",
    answer_hi: "ट्रांसफॉर्म",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which property sets the visibility of an element without removing it from the document flow?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट की दृश्यता सेट करती है बिना उसे डॉक्यूमेंट फ्लो से हटाए?",
    options_en: ["visibility", "display", "opacity", "hidden"],
    options_hi: ["दृश्यता", "प्रदर्शन", "अपारदर्शिता", "छुपा हुआ"],
    answer_en: "visibility",
    answer_hi: "दृश्यता",
    attempted: false,
    selected: ""
  }
     ],
     3:[
     
  {
    num: 1,
    question_en: "Which CSS property sets the space between the content and the border of an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी कंटेंट और बॉर्डर के बीच की दूरी सेट करती है?",
    options_en: ["padding", "margin", "border", "spacing"],
    options_hi: ["पैडिंग", "मार्जिन", "बॉर्डर", "स्पेसिंग"],
    answer_en: "padding",
    answer_hi: "पैडिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which CSS property sets the space outside the border of an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एलिमेंट के बॉर्डर के बाहर की दूरी सेट करती है?",
    options_en: ["margin", "padding", "border", "spacing"],
    options_hi: ["मार्जिन", "पैडिंग", "बॉर्डर", "स्पेसिंग"],
    answer_en: "margin",
    answer_hi: "मार्जिन",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which property controls the border thickness of an element?",
    question_hi: "कौन-सी प्रॉपर्टी किसी एलिमेंट की बॉर्डर की मोटाई नियंत्रित करती है?",
    options_en: ["border-width", "border-style", "border-color", "border-spacing"],
    options_hi: ["बॉर्डर चौड़ाई", "बॉर्डर शैली", "बॉर्डर रंग", "बॉर्डर स्पेसिंग"],
    answer_en: "border-width",
    answer_hi: "बॉर्डर चौड़ाई",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which property sets how the border of a table is displayed?",
    question_hi: "कौन-सी प्रॉपर्टी टेबल के बॉर्डर के प्रदर्शन को सेट करती है?",
    options_en: ["border-collapse", "border-style", "border-width", "border-spacing"],
    options_hi: ["बॉर्डर-कॉलैप्स", "बॉर्डर शैली", "बॉर्डर चौड़ाई", "बॉर्डर स्पेसिंग"],
    answer_en: "border-collapse",
    answer_hi: "बॉर्डर-कॉलैप्स",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which CSS property specifies the space between cells in a table?",
    question_hi: "कौन-सी CSS प्रॉपर्टी टेबल की कोशिकाओं के बीच की दूरी निर्दिष्ट करती है?",
    options_en: ["border-spacing", "border-collapse", "cell-padding", "cell-spacing"],
    options_hi: ["बॉर्डर स्पेसिंग", "बॉर्डर-कॉलैप्स", "सेल पैडिंग", "सेल स्पेसिंग"],
    answer_en: "border-spacing",
    answer_hi: "बॉर्डर स्पेसिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which property specifies whether the element is displayed as block, inline, or none?",
    question_hi: "कौन-सी प्रॉपर्टी सेट करती है कि एलिमेंट ब्लॉक, इनलाइन या नहीं दिखेगा?",
    options_en: ["display", "visibility", "position", "float"],
    options_hi: ["प्रदर्शन", "दृश्यता", "स्थिति", "तैरना"],
    answer_en: "display",
    answer_hi: "प्रदर्शन",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which property controls the position of an element relative to its normal position?",
    question_hi: "कौन-सी प्रॉपर्टी किसी एलिमेंट की स्थिति को उसके सामान्य स्थान के सापेक्ष नियंत्रित करती है?",
    options_en: ["position", "top", "left", "float"],
    options_hi: ["स्थिति", "ऊपर", "बायाँ", "तैरना"],
    answer_en: "position",
    answer_hi: "स्थिति",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which value of position property makes an element positioned relative to the viewport?",
    question_hi: "position प्रॉपर्टी का कौन-सा मान एलिमेंट को व्यूपोर्ट के सापेक्ष स्थित करता है?",
    options_en: ["fixed", "absolute", "relative", "static"],
    options_hi: ["फिक्स्ड", "एबसोल्यूट", "रिलेटिव", "स्टैटिक"],
    answer_en: "fixed",
    answer_hi: "फिक्स्ड",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which property specifies the top edge position of an element?",
    question_hi: "कौन-सी प्रॉपर्टी किसी एलिमेंट के शीर्ष किनारे की स्थिति निर्दिष्ट करती है?",
    options_en: ["top", "left", "right", "bottom"],
    options_hi: ["ऊपर", "बायाँ", "दायाँ", "नीचे"],
    answer_en: "top",
    answer_hi: "ऊपर",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which property specifies the left edge position of an element?",
    question_hi: "कौन-सी प्रॉपर्टी किसी एलिमेंट के बायें किनारे की स्थिति निर्दिष्ट करती है?",
    options_en: ["left", "top", "right", "bottom"],
    options_hi: ["बायाँ", "ऊपर", "दायाँ", "नीचे"],
    answer_en: "left",
    answer_hi: "बायाँ",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which property is used to clear floated elements?",
    question_hi: "तैरते हुए एलिमेंट्स को क्लियर करने के लिए कौन-सी प्रॉपर्टी उपयोग होती है?",
    options_en: ["clear", "float", "position", "display"],
    options_hi: ["क्लियर", "तैरना", "स्थिति", "प्रदर्शन"],
    answer_en: "clear",
    answer_hi: "क्लियर",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which property specifies whether the element should float to the left or right?",
    question_hi: "कौन-सी प्रॉपर्टी निर्दिष्ट करती है कि एलिमेंट बाएं या दाएं तैरेगा?",
    options_en: ["float", "clear", "position", "display"],
    options_hi: ["तैरना", "क्लियर", "स्थिति", "प्रदर्शन"],
    answer_en: "float",
    answer_hi: "तैरना",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which CSS property controls the width of the padding area?",
    question_hi: "कौन-सी CSS प्रॉपर्टी पैडिंग क्षेत्र की चौड़ाई नियंत्रित करती है?",
    options_en: ["padding-left", "margin-left", "border-left", "width"],
    options_hi: ["पैडिंग-बायाँ", "मार्जिन-बायाँ", "बॉर्डर-बायाँ", "चौड़ाई"],
    answer_en: "padding-left",
    answer_hi: "पैडिंग-बायाँ",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which property sets the box-sizing behavior of an element?",
    question_hi: "कौन-सी प्रॉपर्टी किसी एलिमेंट के बॉक्स का आकार निर्धारण करती है?",
    options_en: ["box-sizing", "box-shadow", "box-model", "box-layout"],
    options_hi: ["बॉक्स-साइज़िंग", "बॉक्स-शैडो", "बॉक्स-मॉडल", "बॉक्स-लेआउट"],
    answer_en: "box-sizing",
    answer_hi: "बॉक्स-साइज़िंग",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which property adds shadow effects around an element's frame?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट के फ्रेम के चारों ओर छाया प्रभाव जोड़ती है?",
    options_en: ["box-shadow", "text-shadow", "shadow", "frame-shadow"],
    options_hi: ["बॉक्स-शैडो", "टेक्स्ट-शैडो", "शैडो", "फ्रेम-शैडो"],
    answer_en: "box-shadow",
    answer_hi: "बॉक्स-शैडो",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which property controls the space inside the border but outside the content?",
    question_hi: "कौन-सी प्रॉपर्टी बॉर्डर के अंदर लेकिन कंटेंट के बाहर की जगह नियंत्रित करती है?",
    options_en: ["padding", "margin", "border-spacing", "border-collapse"],
    options_hi: ["पैडिंग", "मार्जिन", "बॉर्डर स्पेसिंग", "बॉर्डर-कॉलैप्स"],
    answer_en: "padding",
    answer_hi: "पैडिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which property controls the space outside the border of an element?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट के बॉर्डर के बाहर की जगह नियंत्रित करती है?",
    options_en: ["margin", "padding", "border-spacing", "border-collapse"],
    options_hi: ["मार्जिन", "पैडिंग", "बॉर्डर स्पेसिंग", "बॉर्डर-कॉलैप्स"],
    answer_en: "margin",
    answer_hi: "मार्जिन",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which CSS property controls how content flows around floated elements?",
    question_hi: "कौन-सी CSS प्रॉपर्टी तैरते हुए एलिमेंट्स के आस-पास कंटेंट के प्रवाह को नियंत्रित करती है?",
    options_en: ["clear", "float", "position", "display"],
    options_hi: ["क्लियर", "तैरना", "स्थिति", "प्रदर्शन"],
    answer_en: "clear",
    answer_hi: "क्लियर",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which property specifies the z-index of an element?",
    question_hi: "कौन-सी प्रॉपर्टी किसी एलिमेंट का z-इंडेक्स निर्दिष्ट करती है?",
    options_en: ["z-index", "position", "float", "clear"],
    options_hi: ["z-इंडेक्स", "स्थिति", "तैरना", "क्लियर"],
    answer_en: "z-index",
    answer_hi: "z-इंडेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which CSS property specifies the overflow behavior of content?",
    question_hi: "कौन-सी CSS प्रॉपर्टी कंटेंट के ओवरफ्लो व्यवहार को निर्दिष्ट करती है?",
    options_en: ["overflow", "overflow-x", "overflow-y", "text-overflow"],
    options_hi: ["ओवरफ्लो", "ओवरफ्लो-x", "ओवरफ्लो-y", "टेक्स्ट-ओवरफ्लो"],
    answer_en: "overflow",
    answer_hi: "ओवरफ्लो",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which value of overflow property clips the content and does not show scrollbars?",
    question_hi: "ओवरफ्लो प्रॉपर्टी का कौन-सा मान कंटेंट को क्लिप करता है और स्क्रॉलबार नहीं दिखाता?",
    options_en: ["hidden", "visible", "scroll", "auto"],
    options_hi: ["छुपा हुआ", "दिखाई दे रहा", "स्क्रॉल", "स्वचालित"],
    answer_en: "hidden",
    answer_hi: "छुपा हुआ",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which CSS property controls the cursor appearance when hovering over an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी माउस कर्सर की उपस्थिति को नियंत्रित करती है जब उसे एलिमेंट के ऊपर ले जाया जाता है?",
    options_en: ["cursor", "pointer-events", "hover", "focus"],
    options_hi: ["कर्सर", "पॉइंटर-इवेंट्स", "होवर", "फोकस"],
    answer_en: "cursor",
    answer_hi: "कर्सर",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which CSS property is used to add space between borders of adjacent cells?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एक-दूसरे के पास वाली कोशिकाओं के बॉर्डर के बीच जगह जोड़ती है?",
    options_en: ["border-spacing", "border-collapse", "cell-spacing", "cell-padding"],
    options_hi: ["बॉर्डर स्पेसिंग", "बॉर्डर-कॉलैप्स", "सेल स्पेसिंग", "सेल पैडिंग"],
    answer_en: "border-spacing",
    answer_hi: "बॉर्डर स्पेसिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which property specifies the type of box model used by an element?",
    question_hi: "कौन-सी प्रॉपर्टी किसी एलिमेंट द्वारा उपयोग किए गए बॉक्स मॉडल के प्रकार को निर्दिष्ट करती है?",
    options_en: ["box-sizing", "box-model", "box-type", "box-style"],
    options_hi: ["बॉक्स-साइज़िंग", "बॉक्स-मॉडल", "बॉक्स-टाइप", "बॉक्स-स्टाइल"],
    answer_en: "box-sizing",
    answer_hi: "बॉक्स-साइज़िंग",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which property controls the layering of positioned elements?",
    question_hi: "कौन-सी प्रॉपर्टी स्थिति निर्धारण किए गए एलिमेंट्स की परतों को नियंत्रित करती है?",
    options_en: ["z-index", "position", "layer", "order"],
    options_hi: ["z-इंडेक्स", "स्थिति", "लेयर", "क्रम"],
    answer_en: "z-index",
    answer_hi: "z-इंडेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Which property specifies the height of an element?",
    question_hi: "कौन-सी प्रॉपर्टी किसी एलिमेंट की ऊँचाई निर्धारित करती है?",
    options_en: ["height", "width", "size", "length"],
    options_hi: ["ऊँचाई", "चौड़ाई", "आकार", "लंबाई"],
    answer_en: "height",
    answer_hi: "ऊँचाई",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which property specifies the width of an element?",
    question_hi: "कौन-सी प्रॉपर्टी किसी एलिमेंट की चौड़ाई निर्धारित करती है?",
    options_en: ["width", "height", "size", "length"],
    options_hi: ["चौड़ाई", "ऊँचाई", "आकार", "लंबाई"],
    answer_en: "width",
    answer_hi: "चौड़ाई",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which CSS property sets the minimum height of an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी किसी एलिमेंट की न्यूनतम ऊँचाई सेट करती है?",
    options_en: ["min-height", "max-height", "height", "min-width"],
    options_hi: ["न्यूनतम ऊँचाई", "अधिकतम ऊँचाई", "ऊँचाई", "न्यूनतम चौड़ाई"],
    answer_en: "min-height",
    answer_hi: "न्यूनतम ऊँचाई",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which CSS property sets the maximum width of an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी किसी एलिमेंट की अधिकतम चौड़ाई सेट करती है?",
    options_en: ["max-width", "min-width", "width", "max-height"],
    options_hi: ["अधिकतम चौड़ाई", "न्यूनतम चौड़ाई", "चौड़ाई", "अधिकतम ऊँचाई"],
    answer_en: "max-width",
    answer_hi: "अधिकतम चौड़ाई",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which CSS property controls the visibility of an element but does not affect the layout?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एलिमेंट की दृश्यता नियंत्रित करती है लेकिन लेआउट को प्रभावित नहीं करती?",
    options_en: ["visibility", "display", "opacity", "overflow"],
    options_hi: ["दृश्यता", "प्रदर्शन", "अपारदर्शिता", "ओवरफ्लो"],
    answer_en: "visibility",
    answer_hi: "दृश्यता",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which CSS property controls the opacity level of an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी किसी एलिमेंट की अपारदर्शिता स्तर नियंत्रित करती है?",
    options_en: ["opacity", "visibility", "display", "filter"],
    options_hi: ["अपारदर्शिता", "दृश्यता", "प्रदर्शन", "फिल्टर"],
    answer_en: "opacity",
    answer_hi: "अपारदर्शिता",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which property is used to specify the overflow content behavior when it exceeds the element size?",
    question_hi: "जब कंटेंट एलिमेंट के आकार से अधिक हो जाए तो overflow कंटेंट व्यवहार निर्धारित करने के लिए कौन-सी प्रॉपर्टी उपयोग होती है?",
    options_en: ["overflow", "visibility", "display", "opacity"],
    options_hi: ["ओवरफ्लो", "दृश्यता", "प्रदर्शन", "अपारदर्शिता"],
    answer_en: "overflow",
    answer_hi: "ओवरफ्लो",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which value of overflow property adds scrollbars to the element?",
    question_hi: "overflow प्रॉपर्टी का कौन-सा मान एलिमेंट में स्क्रॉलबार जोड़ता है?",
    options_en: ["scroll", "hidden", "visible", "auto"],
    options_hi: ["स्क्रॉल", "छुपा हुआ", "दिखाई दे रहा", "स्वचालित"],
    answer_en: "scroll",
    answer_hi: "स्क्रॉल",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which CSS property controls the alignment of inline content within a block element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी ब्लॉक एलिमेंट के अंदर इनलाइन कंटेंट की संरेखण को नियंत्रित करती है?",
    options_en: ["text-align", "vertical-align", "align-items", "justify-content"],
    options_hi: ["टेक्स्ट संरेखण", "वर्टिकल संरेखण", "आइटम संरेखण", "जस्टिफाई कंटेंट"],
    answer_en: "text-align",
    answer_hi: "टेक्स्ट संरेखण",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which CSS property controls vertical alignment of inline elements?",
    question_hi: "कौन-सी CSS प्रॉपर्टी इनलाइन एलिमेंट्स की ऊर्ध्वाधर संरेखण नियंत्रित करती है?",
    options_en: ["vertical-align", "text-align", "align-items", "justify-content"],
    options_hi: ["वर्टिकल संरेखण", "टेक्स्ट संरेखण", "आइटम संरेखण", "जस्टिफाई कंटेंट"],
    answer_en: "vertical-align",
    answer_hi: "वर्टिकल संरेखण",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which CSS property specifies how an element is displayed when it is hidden from the layout?",
    question_hi: "कौन-सी CSS प्रॉपर्टी सेट करती है कि एलिमेंट लेआउट से छुपाए जाने पर कैसे दिखेगा?",
    options_en: ["display", "visibility", "opacity", "position"],
    options_hi: ["प्रदर्शन", "दृश्यता", "अपारदर्शिता", "स्थिति"],
    answer_en: "display",
    answer_hi: "प्रदर्शन",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which value of display property hides the element and removes it from the layout flow?",
    question_hi: "display प्रॉपर्टी का कौन-सा मान एलिमेंट को छुपाता है और लेआउट प्रवाह से हटाता है?",
    options_en: ["none", "block", "inline", "hidden"],
    options_hi: ["कोई नहीं", "ब्लॉक", "इनलाइन", "छुपा हुआ"],
    answer_en: "none",
    answer_hi: "कोई नहीं",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which CSS property controls the box shadow's horizontal and vertical offsets?",
    question_hi: "कौन-सी CSS प्रॉपर्टी बॉक्स शैडो के क्षैतिज और ऊर्ध्वाधर ऑफसेट को नियंत्रित करती है?",
    options_en: ["box-shadow", "text-shadow", "shadow-offset", "box-offset"],
    options_hi: ["बॉक्स-शैडो", "टेक्स्ट-शैडो", "शैडो-ऑफसेट", "बॉक्स-ऑफसेट"],
    answer_en: "box-shadow",
    answer_hi: "बॉक्स-शैडो",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which CSS property controls the order in which flex items appear?",
    question_hi: "कौन-सी CSS प्रॉपर्टी फ्लेक्स आइटम्स की दिखाई देने की क्रम को नियंत्रित करती है?",
    options_en: ["order", "flex-order", "z-index", "position"],
    options_hi: ["क्रम", "फ्लेक्स-क्रम", "z-इंडेक्स", "स्थिति"],
    answer_en: "order",
    answer_hi: "क्रम",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which CSS property specifies how flex items are aligned along the main axis?",
    question_hi: "कौन-सी CSS प्रॉपर्टी मुख्य अक्ष के साथ फ्लेक्स आइटम्स की संरेखण निर्दिष्ट करती है?",
    options_en: ["justify-content", "align-items", "align-content", "flex-align"],
    options_hi: ["जस्टिफाई कंटेंट", "आइटम संरेखण", "कंटेंट संरेखण", "फ्लेक्स संरेखण"],
    answer_en: "justify-content",
    answer_hi: "जस्टिफाई कंटेंट",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which CSS property specifies how flex items are aligned along the cross axis?",
    question_hi: "कौन-सी CSS प्रॉपर्टी क्रॉस अक्ष के साथ फ्लेक्स आइटम्स की संरेखण निर्दिष्ट करती है?",
    options_en: ["align-items", "justify-content", "align-content", "flex-align"],
    options_hi: ["आइटम संरेखण", "जस्टिफाई कंटेंट", "कंटेंट संरेखण", "फ्लेक्स संरेखण"],
    answer_en: "align-items",
    answer_hi: "आइटम संरेखण",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which CSS property controls the wrapping of flex items?",
    question_hi: "कौन-सी CSS प्रॉपर्टी फ्लेक्स आइटम्स के रैपिंग को नियंत्रित करती है?",
    options_en: ["flex-wrap", "flex-flow", "flex-wrap-flow", "flex-direction"],
    options_hi: ["फ्लेक्स-रैप", "फ्लेक्स-फ्लो", "फ्लेक्स-रैप-फ्लो", "फ्लेक्स-दिशा"],
    answer_en: "flex-wrap",
    answer_hi: "फ्लेक्स-रैप",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which property controls the space between flex items?",
    question_hi: "कौन-सी प्रॉपर्टी फ्लेक्स आइटम्स के बीच की दूरी नियंत्रित करती है?",
    options_en: ["gap", "margin", "padding", "spacing"],
    options_hi: ["गैप", "मार्जिन", "पैडिंग", "स्पेसिंग"],
    answer_en: "gap",
    answer_hi: "गैप",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which CSS property is used to control the floating of an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी किसी एलिमेंट के तैरने को नियंत्रित करने के लिए उपयोग होती है?",
    options_en: ["float", "clear", "position", "display"],
    options_hi: ["तैरना", "क्लियर", "स्थिति", "प्रदर्शन"],
    answer_en: "float",
    answer_hi: "तैरना",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which property clears the floated elements and forces the container to wrap them?",
    question_hi: "कौन-सी प्रॉपर्टी तैरते हुए एलिमेंट्स को क्लियर करती है और कंटेनर को उन्हें लपेटने के लिए मजबूर करती है?",
    options_en: ["clear", "float", "overflow", "display"],
    options_hi: ["क्लियर", "तैरना", "ओवरफ्लो", "प्रदर्शन"],
    answer_en: "clear",
    answer_hi: "क्लियर",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which CSS property is used to control the stacking context of positioned elements?",
    question_hi: "कौन-सी CSS प्रॉपर्टी स्थिति निर्धारण किए गए एलिमेंट्स के स्टैकिंग संदर्भ को नियंत्रित करती है?",
    options_en: ["z-index", "position", "stack", "order"],
    options_hi: ["z-इंडेक्स", "स्थिति", "स्टैक", "क्रम"],
    answer_en: "z-index",
    answer_hi: "z-इंडेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which CSS property defines how an element's width and height are calculated?",
    question_hi: "कौन-सी CSS प्रॉपर्टी निर्धारित करती है कि किसी एलिमेंट की चौड़ाई और ऊँचाई कैसे गणना की जाती है?",
    options_en: ["box-sizing", "width", "height", "size"],
    options_hi: ["बॉक्स-साइज़िंग", "चौड़ाई", "ऊँचाई", "आकार"],
    answer_en: "box-sizing",
    answer_hi: "बॉक्स-साइज़िंग",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which CSS property controls the text indentation of an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी किसी एलिमेंट के टेक्स्ट इंडेंटेशन को नियंत्रित करती है?",
    options_en: ["text-indent", "text-align", "text-justify", "text-spacing"],
    options_hi: ["टेक्स्ट इंडेंट", "टेक्स्ट संरेखण", "टेक्स्ट जस्टिफाई", "टेक्स्ट स्पेसिंग"],
    answer_en: "text-indent",
    answer_hi: "टेक्स्ट इंडेंट",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which property controls the line height of text within an element?",
    question_hi: "कौन-सी प्रॉपर्टी किसी एलिमेंट के अंदर टेक्स्ट की लाइन ऊँचाई को नियंत्रित करती है?",
    options_en: ["line-height", "font-size", "text-height", "text-spacing"],
    options_hi: ["लाइन-ऊँचाई", "फॉन्ट साइज", "टेक्स्ट-ऊँचाई", "टेक्स्ट-स्पेसिंग"],
    answer_en: "line-height",
    answer_hi: "लाइन-ऊँचाई",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which CSS property controls how text is wrapped inside an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी नियंत्रित करती है कि टेक्स्ट किसी एलिमेंट के अंदर कैसे लिपटा जाता है?",
    options_en: ["word-wrap", "text-wrap", "text-align", "white-space"],
    options_hi: ["वर्ड-रैप", "टेक्स्ट-रैप", "टेक्स्ट संरेखण", "व्हाइट-स्पेस"],
    answer_en: "word-wrap",
    answer_hi: "वर्ड-रैप",
    attempted: false,
    selected: ""
  }
     ],
     4:[
      {
    num: 1,
    question_en: "Which selector selects all elements of a specific type?",
    question_hi: "कौन-सा सेलेक्टर किसी विशिष्ट प्रकार के सभी एलिमेंट्स को सेलेक्ट करता है?",
    options_en: ["Class selector", "ID selector", "Type selector", "Universal selector"],
    options_hi: ["क्लास सेलेक्टर", "आईडी सेलेक्टर", "टाइप सेलेक्टर", "यूनिवर्सल सेलेक्टर"],
    answer_en: "Type selector",
    answer_hi: "टाइप सेलेक्टर",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which selector targets an element with a specific id?",
    question_hi: "कौन-सा सेलेक्टर किसी एलिमेंट को उसकी विशिष्ट आईडी से टारगेट करता है?",
    options_en: ["Class selector", "ID selector", "Type selector", "Attribute selector"],
    options_hi: ["क्लास सेलेक्टर", "आईडी सेलेक्टर", "टाइप सेलेक्टर", "एट्रिब्यूट सेलेक्टर"],
    answer_en: "ID selector",
    answer_hi: "आईडी सेलेक्टर",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which selector is used to select all elements?",
    question_hi: "सभी एलिमेंट्स को सेलेक्ट करने के लिए कौन-सा सेलेक्टर इस्तेमाल होता है?",
    options_en: ["Universal selector", "Class selector", "ID selector", "Type selector"],
    options_hi: ["यूनिवर्सल सेलेक्टर", "क्लास सेलेक्टर", "आईडी सेलेक्टर", "टाइप सेलेक्टर"],
    answer_en: "Universal selector",
    answer_hi: "यूनिवर्सल सेलेक्टर",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "What symbol is used for class selectors in CSS?",
    question_hi: "CSS में क्लास सेलेक्टर्स के लिए कौन-सा सिंबल इस्तेमाल होता है?",
    options_en: [". (dot)", "# (hash)", "* (asterisk)", "> (greater than)"],
    options_hi: [". (डॉट)", "# (हैश)", "* (एस्टरिस्क)", "> (ग्रेटर दैन)"],
    answer_en: ". (dot)",
    answer_hi: ". (डॉट)",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "What symbol is used for ID selectors in CSS?",
    question_hi: "CSS में आईडी सेलेक्टर्स के लिए कौन-सा सिंबल इस्तेमाल होता है?",
    options_en: [". (dot)", "# (hash)", "* (asterisk)", "> (greater than)"],
    options_hi: [". (डॉट)", "# (हैश)", "* (एस्टरिस्क)", "> (ग्रेटर दैन)"],
    answer_en: "# (hash)",
    answer_hi: "# (हैश)",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which selector selects elements based on an attribute value?",
    question_hi: "कौन-सा सेलेक्टर किसी एट्रिब्यूट के मान के आधार पर एलिमेंट्स को सेलेक्ट करता है?",
    options_en: ["Class selector", "ID selector", "Attribute selector", "Type selector"],
    options_hi: ["क्लास सेलेक्टर", "आईडी सेलेक्टर", "एट्रिब्यूट सेलेक्टर", "टाइप सेलेक्टर"],
    answer_en: "Attribute selector",
    answer_hi: "एट्रिब्यूट सेलेक्टर",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which selector selects only the first child element?",
    question_hi: "कौन-सा सेलेक्टर केवल पहले चाइल्ड एलिमेंट को सेलेक्ट करता है?",
    options_en: [":first-child", ":last-child", ":nth-child", ":only-child"],
    options_hi: [":first-child", ":last-child", ":nth-child", ":only-child"],
    answer_en: ":first-child",
    answer_hi: ":first-child",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which selector selects all elements that are direct children of a specified element?",
    question_hi: "कौन-सा सेलेक्टर किसी निर्दिष्ट एलिमेंट के डायरेक्ट चाइल्ड को सेलेक्ट करता है?",
    options_en: [">", " ", "+", "~"],
    options_hi: [">", " ", "+", "~"],
    answer_en: ">",
    answer_hi: ">",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which selector matches elements that are siblings?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को मैच करता है जो सिबलिंग्स हैं?",
    options_en: ["+", "~", ">", " "],
    options_hi: ["+", "~", ">", " "],
    answer_en: "+",
    answer_hi: "+",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which selector selects elements that are the last child of their parent?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जो अपने पैरेंट के लास्ट चाइल्ड हैं?",
    options_en: [":last-child", ":first-child", ":nth-child", ":only-child"],
    options_hi: [":last-child", ":first-child", ":nth-child", ":only-child"],
    answer_en: ":last-child",
    answer_hi: ":last-child",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which selector selects elements that have a specific class and type?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जिनकी एक विशेष क्लास और टाइप हो?",
    options_en: ["div.classname", ".classname", "#id", "div#id"],
    options_hi: ["div.classname", ".classname", "#id", "div#id"],
    answer_en: "div.classname",
    answer_hi: "div.classname",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which pseudo-class selector matches when an element is being hovered?",
    question_hi: "कौन-सा प्यूरडो-क्लास सेलेक्टर तब मैच करता है जब किसी एलिमेंट पर माउस होवर हो रहा हो?",
    options_en: [":hover", ":active", ":focus", ":visited"],
    options_hi: [":hover", ":active", ":focus", ":visited"],
    answer_en: ":hover",
    answer_hi: ":hover",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which selector selects elements that are checked (like checkboxes)?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जो चेक्ड होते हैं (जैसे चेकबॉक्स)?",
    options_en: [":checked", ":selected", ":enabled", ":disabled"],
    options_hi: [":checked", ":selected", ":enabled", ":disabled"],
    answer_en: ":checked",
    answer_hi: ":checked",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which selector selects elements that are disabled?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जो डिसेबल्ड होते हैं?",
    options_en: [":disabled", ":enabled", ":checked", ":focus"],
    options_hi: [":disabled", ":enabled", ":checked", ":focus"],
    answer_en: ":disabled",
    answer_hi: ":disabled",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which selector selects elements with a specific attribute regardless of its value?",
    question_hi: "कौन-सा सेलेक्टर किसी विशेष एट्रिब्यूट वाले एलिमेंट्स को उनके मान की परवाह किए बिना सेलेक्ट करता है?",
    options_en: ["[attr]", "[attr=value]", "[attr~=value]", "[attr|=value]"],
    options_hi: ["[attr]", "[attr=value]", "[attr~=value]", "[attr|=value]"],
    answer_en: "[attr]",
    answer_hi: "[attr]",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which selector selects elements whose attribute value contains a specified word?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जिनके एट्रिब्यूट का मान किसी विशिष्ट शब्द को शामिल करता है?",
    options_en: ["[attr~=value]", "[attr=value]", "[attr|=value]", "[attr^=value]"],
    options_hi: ["[attr~=value]", "[attr=value]", "[attr|=value]", "[attr^=value]"],
    answer_en: "[attr~=value]",
    answer_hi: "[attr~=value]",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which selector selects elements whose attribute value begins with a specified value?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जिनके एट्रिब्यूट का मान किसी विशिष्ट मान से शुरू होता है?",
    options_en: ["[attr^=value]", "[attr$=value]", "[attr*=value]", "[attr~=value]"],
    options_hi: ["[attr^=value]", "[attr$=value]", "[attr*=value]", "[attr~=value]"],
    answer_en: "[attr^=value]",
    answer_hi: "[attr^=value]",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which selector selects elements whose attribute value ends with a specified value?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जिनके एट्रिब्यूट का मान किसी विशिष्ट मान पर समाप्त होता है?",
    options_en: ["[attr$=value]", "[attr^=value]", "[attr*=value]", "[attr~=value]"],
    options_hi: ["[attr$=value]", "[attr^=value]", "[attr*=value]", "[attr~=value]"],
    answer_en: "[attr$=value]",
    answer_hi: "[attr$=value]",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which selector selects elements whose attribute value contains a specified substring?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जिनके एट्रिब्यूट का मान किसी विशिष्ट सबस्ट्रिंग को शामिल करता है?",
    options_en: ["[attr*=value]", "[attr^=value]", "[attr$=value]", "[attr~=value]"],
    options_hi: ["[attr*=value]", "[attr^=value]", "[attr$=value]", "[attr~=value]"],
    answer_en: "[attr*=value]",
    answer_hi: "[attr*=value]",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which pseudo-class selector selects elements when they receive focus?",
    question_hi: "कौन-सा प्यूरडो-क्लास सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जब वे फोकस प्राप्त करते हैं?",
    options_en: [":focus", ":hover", ":active", ":visited"],
    options_hi: [":focus", ":hover", ":active", ":visited"],
    answer_en: ":focus",
    answer_hi: ":focus",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which selector is used to select the nth child element?",
    question_hi: "कौन-सा सेलेक्टर nth चाइल्ड एलिमेंट को सेलेक्ट करने के लिए इस्तेमाल होता है?",
    options_en: [":nth-child(n)", ":first-child", ":last-child", ":only-child"],
    options_hi: [":nth-child(n)", ":first-child", ":last-child", ":only-child"],
    answer_en: ":nth-child(n)",
    answer_hi: ":nth-child(n)",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which selector selects elements that are the only child of their parent?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जो अपने पैरेंट के केवल एकमात्र चाइल्ड हैं?",
    options_en: [":only-child", ":first-child", ":last-child", ":nth-child"],
    options_hi: [":only-child", ":first-child", ":last-child", ":nth-child"],
    answer_en: ":only-child",
    answer_hi: ":only-child",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which selector selects an element when it is active (being clicked)?",
    question_hi: "कौन-सा सेलेक्टर तब एलिमेंट को सेलेक्ट करता है जब वह एक्टिव (क्लिक किया जा रहा हो) हो?",
    options_en: [":active", ":hover", ":focus", ":visited"],
    options_hi: [":active", ":hover", ":focus", ":visited"],
    answer_en: ":active",
    answer_hi: ":active",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which selector selects elements that have been visited (like links)?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जो विजिटेड (जैसे लिंक) हो चुके हों?",
    options_en: [":visited", ":link", ":hover", ":focus"],
    options_hi: [":visited", ":link", ":hover", ":focus"],
    answer_en: ":visited",
    answer_hi: ":visited",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which selector selects elements that are enabled?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जो सक्षम (enabled) हैं?",
    options_en: [":enabled", ":disabled", ":checked", ":focus"],
    options_hi: [":enabled", ":disabled", ":checked", ":focus"],
    answer_en: ":enabled",
    answer_hi: ":enabled",
    attempted: false,
    selected: ""
  },
   {
    num: 26,
    question_en: "Which selector targets all elements inside a specified element?",
    question_hi: "कौन-सा सेलेक्टर किसी निर्दिष्ट एलिमेंट के अंदर के सभी एलिमेंट्स को टारगेट करता है?",
    options_en: ["Descendant selector", "Child selector", "Adjacent sibling selector", "General sibling selector"],
    options_hi: ["डिसेंडेंट सेलेक्टर", "चाइल्ड सेलेक्टर", "एडजेसेंट सिबलिंग सेलेक्टर", "जनरल सिबलिंग सेलेक्टर"],
    answer_en: "Descendant selector",
    answer_hi: "डिसेंडेंट सेलेक्टर",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which selector selects an element immediately preceded by a specified sibling?",
    question_hi: "कौन-सा सेलेक्टर उस एलिमेंट को सेलेक्ट करता है जो किसी निर्दिष्ट सिबलिंग से तुरंत पहले आता है?",
    options_en: ["Adjacent sibling selector (+)", "General sibling selector (~)", "Child selector (>)", "Descendant selector (space)"],
    options_hi: ["एडजेसेंट सिबलिंग सेलेक्टर (+)", "जनरल सिबलिंग सेलेक्टर (~)", "चाइल्ड सेलेक्टर (>)", "डिसेंडेंट सेलेक्टर (space)"],
    answer_en: "Adjacent sibling selector (+)",
    answer_hi: "एडजेसेंट सिबलिंग सेलेक्टर (+)",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which selector is used to select elements that are siblings of a specified element?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जो किसी निर्दिष्ट एलिमेंट के सिबलिंग्स हों?",
    options_en: ["General sibling selector (~)", "Adjacent sibling selector (+)", "Child selector (>)", "Type selector"],
    options_hi: ["जनरल सिबलिंग सेलेक्टर (~)", "एडजेसेंट सिबलिंग सेलेक्टर (+)", "चाइल्ड सेलेक्टर (>)", "टाइप सेलेक्टर"],
    answer_en: "General sibling selector (~)",
    answer_hi: "जनरल सिबलिंग सेलेक्टर (~)",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which selector targets elements not represented by a selector?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को टारगेट करता है जो किसी सेलेक्टर से मैच नहीं करते?",
    options_en: [":not(selector)", ":only-child", ":first-child", ":last-child"],
    options_hi: [":not(selector)", ":only-child", ":first-child", ":last-child"],
    answer_en: ":not(selector)",
    answer_hi: ":not(selector)",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which selector selects every even child element?",
    question_hi: "कौन-सा सेलेक्टर हर दूसरे (even) चाइल्ड एलिमेंट को सेलेक्ट करता है?",
    options_en: [":nth-child(even)", ":nth-child(odd)", ":first-child", ":last-child"],
    options_hi: [":nth-child(even)", ":nth-child(odd)", ":first-child", ":last-child"],
    answer_en: ":nth-child(even)",
    answer_hi: ":nth-child(even)",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which selector selects every odd child element?",
    question_hi: "कौन-सा सेलेक्टर हर विषम (odd) चाइल्ड एलिमेंट को सेलेक्ट करता है?",
    options_en: [":nth-child(odd)", ":nth-child(even)", ":first-child", ":last-child"],
    options_hi: [":nth-child(odd)", ":nth-child(even)", ":first-child", ":last-child"],
    answer_en: ":nth-child(odd)",
    answer_hi: ":nth-child(odd)",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which selector selects the first element of its type among its siblings?",
    question_hi: "कौन-सा सेलेक्टर अपने सिबलिंग्स में अपने प्रकार का पहला एलिमेंट सेलेक्ट करता है?",
    options_en: [":first-of-type", ":last-of-type", ":nth-of-type(n)", ":only-of-type"],
    options_hi: [":first-of-type", ":last-of-type", ":nth-of-type(n)", ":only-of-type"],
    answer_en: ":first-of-type",
    answer_hi: ":first-of-type",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which selector selects the last element of its type among its siblings?",
    question_hi: "कौन-सा सेलेक्टर अपने सिबलिंग्स में अपने प्रकार का आखिरी एलिमेंट सेलेक्ट करता है?",
    options_en: [":last-of-type", ":first-of-type", ":nth-of-type(n)", ":only-of-type"],
    options_hi: [":last-of-type", ":first-of-type", ":nth-of-type(n)", ":only-of-type"],
    answer_en: ":last-of-type",
    answer_hi: ":last-of-type",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which selector selects elements that are empty (have no children)?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जिनके अंदर कोई चाइल्ड न हो?",
    options_en: [":empty", ":blank", ":null", ":void"],
    options_hi: [":empty", ":blank", ":null", ":void"],
    answer_en: ":empty",
    answer_hi: ":empty",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which selector matches elements based on their language attribute?",
    question_hi: "कौन-सा सेलेक्टर एलिमेंट्स को उनके भाषा एट्रिब्यूट के आधार पर मैच करता है?",
    options_en: [":lang()", ":lang", ":language", ":lang-select"],
    options_hi: [":lang()", ":lang", ":language", ":lang-select"],
    answer_en: ":lang()",
    answer_hi: ":lang()",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which selector selects elements that are target of a URL fragment?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जो URL फ्रैगमेंट के टारगेट होते हैं?",
    options_en: [":target", ":focus", ":active", ":visited"],
    options_hi: [":target", ":focus", ":active", ":visited"],
    answer_en: ":target",
    answer_hi: ":target",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which selector selects elements that are currently being edited?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जो वर्तमान में एडिट किए जा रहे हैं?",
    options_en: [":read-write", ":read-only", ":edit", ":editable"],
    options_hi: [":read-write", ":read-only", ":edit", ":editable"],
    answer_en: ":read-write",
    answer_hi: ":read-write",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which selector selects elements that are read-only?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जो रीड-ओनली हैं?",
    options_en: [":read-only", ":read-write", ":disabled", ":enabled"],
    options_hi: [":read-only", ":read-write", ":disabled", ":enabled"],
    answer_en: ":read-only",
    answer_hi: ":read-only",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which selector selects form elements that are invalid?",
    question_hi: "कौन-सा सेलेक्टर उन फॉर्म एलिमेंट्स को सेलेक्ट करता है जो इनवैलिड हैं?",
    options_en: [":invalid", ":valid", ":checked", ":disabled"],
    options_hi: [":invalid", ":valid", ":checked", ":disabled"],
    answer_en: ":invalid",
    answer_hi: ":invalid",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which selector selects form elements that are valid?",
    question_hi: "कौन-सा सेलेक्टर उन फॉर्म एलिमेंट्स को सेलेक्ट करता है जो वैध हैं?",
    options_en: [":valid", ":invalid", ":checked", ":disabled"],
    options_hi: [":valid", ":invalid", ":checked", ":disabled"],
    answer_en: ":valid",
    answer_hi: ":valid",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which selector selects elements that are in focus within a form?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जो फॉर्म के अंदर फोकस में हैं?",
    options_en: [":focus-within", ":focus", ":active", ":hover"],
    options_hi: [":focus-within", ":focus", ":active", ":hover"],
    answer_en: ":focus-within",
    answer_hi: ":focus-within",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which selector selects elements based on their enabled state?",
    question_hi: "कौन-सा सेलेक्टर उनके सक्षम (enabled) स्थिति के आधार पर एलिमेंट्स को सेलेक्ट करता है?",
    options_en: [":enabled", ":disabled", ":checked", ":focus"],
    options_hi: [":enabled", ":disabled", ":checked", ":focus"],
    answer_en: ":enabled",
    answer_hi: ":enabled",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which selector selects elements that are being hovered over?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जिन पर माउस होवर हो रहा है?",
    options_en: [":hover", ":active", ":focus", ":visited"],
    options_hi: [":hover", ":active", ":focus", ":visited"],
    answer_en: ":hover",
    answer_hi: ":hover",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which selector selects elements after they have been visited (like links)?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जो विजिटेड हो चुके हों (जैसे लिंक)?",
    options_en: [":visited", ":link", ":hover", ":focus"],
    options_hi: [":visited", ":link", ":hover", ":focus"],
    answer_en: ":visited",
    answer_hi: ":visited",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which selector selects elements that have been targeted by the URL fragment?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जिन्हें URL फ्रैगमेंट ने टारगेट किया है?",
    options_en: [":target", ":focus", ":active", ":visited"],
    options_hi: [":target", ":focus", ":active", ":visited"],
    answer_en: ":target",
    answer_hi: ":target",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which selector matches elements with a specific attribute starting with a specific value?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को मैच करता है जिनके एट्रिब्यूट का मान किसी विशेष मान से शुरू होता है?",
    options_en: ["[attr^=value]", "[attr$=value]", "[attr*=value]", "[attr~=value]"],
    options_hi: ["[attr^=value]", "[attr$=value]", "[attr*=value]", "[attr~=value]"],
    answer_en: "[attr^=value]",
    answer_hi: "[attr^=value]",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which selector matches elements with an attribute value containing a specified substring?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को मैच करता है जिनके एट्रिब्यूट का मान किसी विशिष्ट सबस्ट्रिंग को शामिल करता है?",
    options_en: ["[attr*=value]", "[attr^=value]", "[attr$=value]", "[attr~=value]"],
    options_hi: ["[attr*=value]", "[attr^=value]", "[attr$=value]", "[attr~=value]"],
    answer_en: "[attr*=value]",
    answer_hi: "[attr*=value]",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which selector selects elements with a class name that starts with a specific string?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जिनकी क्लास नेम किसी विशेष स्ट्रिंग से शुरू होती है?",
    options_en: [".classname^=value", "[class^=value]", ":class^=value", "#class^=value"],
    options_hi: [".classname^=value", "[class^=value]", ":class^=value", "#class^=value"],
    answer_en: "[class^=value]",
    answer_hi: "[class^=value]",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which selector is used to select elements with multiple classes?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जिनके पास एक से अधिक क्लासेस होती हैं?",
    options_en: [".class1.class2", ".class1 #class2", "#class1.class2", "div.class1.class2"],
    options_hi: [".class1.class2", ".class1 #class2", "#class1.class2", "div.class1.class2"],
    answer_en: ".class1.class2",
    answer_hi: ".class1.class2",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which selector targets elements inside another element using a space?",
    question_hi: "कौन-सा सेलेक्टर किसी एलिमेंट के अंदर के एलिमेंट्स को सेलेक्ट करने के लिए स्पेस का उपयोग करता है?",
    options_en: ["Descendant selector (space)", "Child selector (>)", "Adjacent sibling selector (+)", "General sibling selector (~)"],
    options_hi: ["डिसेंडेंट सेलेक्टर (स्पेस)", "चाइल्ड सेलेक्टर (>)", "एडजेसेंट सिबलिंग सेलेक्टर (+)", "जनरल सिबलिंग सेलेक्टर (~)"],
    answer_en: "Descendant selector (space)",
    answer_hi: "डिसेंडेंट सेलेक्टर (स्पेस)",
    attempted: false,
    selected: ""
  }
     ],
     5:[
      {
    num: 1,
    question_en: "Which CSS property is used to set the position of an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी किसी एलिमेंट की स्थिति सेट करने के लिए उपयोग होती है?",
    options_en: ["position", "display", "float", "top"],
    options_hi: ["पोजीशन", "डिस्प्ले", "फ्लोट", "टॉप"],
    answer_en: "position",
    answer_hi: "पोजीशन",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "What are the possible values of the CSS position property?",
    question_hi: "CSS position प्रॉपर्टी के संभावित मान कौन-कौन से हैं?",
    options_en: ["static, relative, absolute, fixed, sticky", "left, right, top, bottom", "block, inline, flex, grid", "visible, hidden, collapse"],
    options_hi: ["static, relative, absolute, fixed, sticky", "लेफ्ट, राइट, टॉप, बॉटम", "ब्लॉक, इनलाइन, फ्लेक्स, ग्रिड", "विजिबल, हिडन, कोलैप्स"],
    answer_en: "static, relative, absolute, fixed, sticky",
    answer_hi: "static, relative, absolute, fixed, sticky",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "What is the default position value of an element in CSS?",
    question_hi: "CSS में किसी एलिमेंट की डिफ़ॉल्ट पोजीशन वैल्यू क्या होती है?",
    options_en: ["static", "relative", "absolute", "fixed"],
    options_hi: ["static", "relative", "absolute", "fixed"],
    answer_en: "static",
    answer_hi: "static",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which position value allows an element to be positioned relative to its normal position?",
    question_hi: "कौन-सा पोजीशन मान एलिमेंट को उसकी सामान्य स्थिति के सापेक्ष स्थिति देने की अनुमति देता है?",
    options_en: ["relative", "absolute", "fixed", "static"],
    options_hi: ["relative", "absolute", "fixed", "static"],
    answer_en: "relative",
    answer_hi: "relative",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which position value removes the element from the normal document flow and positions it relative to the nearest positioned ancestor?",
    question_hi: "कौन-सा पोजीशन मान एलिमेंट को सामान्य डॉक्यूमेंट फ्लो से हटा देता है और उसे सबसे नज़दीकी पोजीशन्ड पूर्वज के सापेक्ष रखता है?",
    options_en: ["absolute", "fixed", "relative", "static"],
    options_hi: ["absolute", "fixed", "relative", "static"],
    answer_en: "absolute",
    answer_hi: "absolute",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which position value fixes the element relative to the viewport, so it stays in the same place even when the page is scrolled?",
    question_hi: "कौन-सा पोजीशन मान एलिमेंट को व्यूपोर्ट के सापेक्ष फिक्स करता है, जिससे पेज स्क्रॉल होने पर भी वह अपनी जगह रहता है?",
    options_en: ["fixed", "absolute", "relative", "static"],
    options_hi: ["fixed", "absolute", "relative", "static"],
    answer_en: "fixed",
    answer_hi: "fixed",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which position value is used to make an element behave like position: relative until it crosses a specified threshold, then behave like fixed?",
    question_hi: "कौन-सा पोजीशन मान एलिमेंट को पहले relative की तरह व्यवहार करने देता है और फिर एक सीमा पार करने पर fixed की तरह?",
    options_en: ["sticky", "fixed", "absolute", "relative"],
    options_hi: ["sticky", "fixed", "absolute", "relative"],
    answer_en: "sticky",
    answer_hi: "sticky",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "If an element has position: absolute, to which element is it positioned relative by default?",
    question_hi: "अगर किसी एलिमेंट का position: absolute है, तो वह डिफ़ॉल्ट रूप से किस एलिमेंट के सापेक्ष पोजीशन्ड होता है?",
    options_en: ["nearest positioned ancestor", "viewport", "body", "document"],
    options_hi: ["सबसे नज़दीकी पोजीशन्ड पूर्वज", "व्यूपोर्ट", "बॉडी", "डॉक्यूमेंट"],
    answer_en: "nearest positioned ancestor",
    answer_hi: "सबसे नज़दीकी पोजीशन्ड पूर्वज",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "What does the 'top' CSS property control in positioned elements?",
    question_hi: "'top' CSS प्रॉपर्टी पोजीशन्ड एलिमेंट्स में क्या नियंत्रित करती है?",
    options_en: ["Distance from the top edge of the containing block", "Font size", "Padding", "Margin"],
    options_hi: ["कंटेनिंग ब्लॉक के ऊपर की दूरी", "फॉन्ट साइज", "पैडिंग", "मार्जिन"],
    answer_en: "Distance from the top edge of the containing block",
    answer_hi: "कंटेनिंग ब्लॉक के ऊपर की दूरी",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which CSS properties can be used to move a positioned element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी पोजीशन्ड एलिमेंट को मूव करने के लिए इस्तेमाल होती हैं?",
    options_en: ["top, right, bottom, left", "margin, padding", "display, position", "float, clear"],
    options_hi: ["टॉप, राइट, बॉटम, लेफ्ट", "मार्जिन, पैडिंग", "डिस्प्ले, पोजीशन", "फ्लोट, क्लियर"],
    answer_en: "top, right, bottom, left",
    answer_hi: "टॉप, राइट, बॉटम, लेफ्ट",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "What happens if you set position: static along with top: 10px?",
    question_hi: "अगर आप position: static सेट करें और साथ में top: 10px भी दें, तो क्या होगा?",
    options_en: ["top will have no effect", "Element moves 10px down", "Element moves 10px up", "Error in CSS"],
    options_hi: ["top का कोई असर नहीं होगा", "एलिमेंट 10px नीचे जाएगा", "एलिमेंट 10px ऊपर जाएगा", "CSS में एरर होगा"],
    answer_en: "top will have no effect",
    answer_hi: "top का कोई असर नहीं होगा",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "If an element is positioned fixed, which coordinate system does it use?",
    question_hi: "अगर कोई एलिमेंट fixed पोजीशन है, तो वह कौन-सा कोऑर्डिनेट सिस्टम इस्तेमाल करता है?",
    options_en: ["Viewport", "Containing block", "Nearest positioned ancestor", "Document"],
    options_hi: ["व्यूपोर्ट", "कंटेनिंग ब्लॉक", "सबसे नज़दीकी पोजीशन्ड पूर्वज", "डॉक्यूमेंट"],
    answer_en: "Viewport",
    answer_hi: "व्यूपोर्ट",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "What is the effect of position: relative with no offset properties (top, left, etc.)?",
    question_hi: "अगर position: relative हो लेकिन top, left आदि ऑफसेट न दिए जाएं, तो क्या प्रभाव होगा?",
    options_en: ["Element stays in normal flow", "Element moves to top-left", "Element becomes fixed", "Element is hidden"],
    options_hi: ["एलिमेंट सामान्य फ्लो में रहता है", "एलिमेंट ऊपर-बाएँ चला जाता है", "एलिमेंट फिक्स्ड हो जाता है", "एलिमेंट छुप जाता है"],
    answer_en: "Element stays in normal flow",
    answer_hi: "एलिमेंट सामान्य फ्लो में रहता है",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which of these position values removes an element from document flow?",
    question_hi: "इनमें से कौन-सा पोजीशन मान एलिमेंट को डॉक्यूमेंट फ्लो से हटा देता है?",
    options_en: ["absolute, fixed", "relative, static", "static only", "sticky only"],
    options_hi: ["absolute, fixed", "relative, static", "static केवल", "sticky केवल"],
    answer_en: "absolute, fixed",
    answer_hi: "absolute, fixed",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which CSS property can be used with position: sticky to define the threshold?",
    question_hi: "position: sticky के साथ कौन-सी CSS प्रॉपर्टी सीमा निर्धारित करने के लिए उपयोग होती है?",
    options_en: ["top", "left", "z-index", "display"],
    options_hi: ["top", "left", "z-index", "डिस्प्ले"],
    answer_en: "top",
    answer_hi: "top",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which position value keeps the element in normal flow and allows top, bottom, left, right offsets to move it?",
    question_hi: "कौन-सा पोजीशन मान एलिमेंट को सामान्य फ्लो में रखता है और top, bottom, left, right ऑफसेट्स से मूव करने देता है?",
    options_en: ["relative", "absolute", "fixed", "static"],
    options_hi: ["relative", "absolute", "fixed", "static"],
    answer_en: "relative",
    answer_hi: "relative",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "What is the stacking context related to position and z-index?",
    question_hi: "पोजीशन और z-index से जुड़ा स्टैकिंग कॉन्टेक्स्ट क्या है?",
    options_en: [
      "A hierarchy that controls overlapping of positioned elements",
      "A property to set font size",
      "A layout model for grids",
      "A browser setting"
    ],
    options_hi: [
      "एक हायार्की जो पोजीशन्ड एलिमेंट्स के ओवरलैपिंग को नियंत्रित करती है",
      "फॉन्ट साइज सेट करने की प्रॉपर्टी",
      "ग्रिड्स के लिए लेआउट मॉडल",
      "ब्राउज़र सेटिंग"
    ],
    answer_en: "A hierarchy that controls overlapping of positioned elements",
    answer_hi: "एक हायार्की जो पोजीशन्ड एलिमेंट्स के ओवरलैपिंग को नियंत्रित करती है",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "If an element with position: relative has z-index: 1, and another with position: absolute has z-index: 0, which one will be on top?",
    question_hi: "अगर एक एलिमेंट position: relative और z-index: 1 है, और दूसरा position: absolute और z-index: 0 है, तो कौन ऊपर होगा?",
    options_en: ["Relative element", "Absolute element", "Both overlap equally", "None"],
    options_hi: ["Relative एलिमेंट", "Absolute एलिमेंट", "दोनों समान रूप से ओवरलैप", "कोई नहीं"],
    answer_en: "Relative element",
    answer_hi: "Relative एलिमेंट",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which CSS property controls the stacking order of positioned elements?",
    question_hi: "कौन-सी CSS प्रॉपर्टी पोजीशन्ड एलिमेंट्स के स्टैकिंग क्रम को नियंत्रित करती है?",
    options_en: ["z-index", "position", "display", "float"],
    options_hi: ["z-index", "पोजीशन", "डिस्प्ले", "फ्लोट"],
    answer_en: "z-index",
    answer_hi: "z-index",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Can position: fixed elements overlap position: absolute elements?",
    question_hi: "क्या position: fixed एलिमेंट्स position: absolute एलिमेंट्स के ऊपर ओवरलैप कर सकते हैं?",
    options_en: ["Yes", "No", "Depends on z-index", "Only in IE browser"],
    options_hi: ["हाँ", "नहीं", "z-index पर निर्भर करता है", "सिर्फ IE ब्राउज़र में"],
    answer_en: "Depends on z-index",
    answer_hi: "z-index पर निर्भर करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which position value should be used to make a header stay visible at the top when scrolling?",
    question_hi: "स्क्रॉल करते समय हेडर को टॉप पर दिखाने के लिए कौन-सा पोजीशन मान इस्तेमाल किया जाना चाहिए?",
    options_en: ["fixed", "absolute", "relative", "static"],
    options_hi: ["fixed", "absolute", "relative", "static"],
    answer_en: "fixed",
    answer_hi: "fixed",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "What is the difference between relative and absolute positioning?",
    question_hi: "relative और absolute पोजीशनिंग में क्या अंतर है?",
    options_en: [
      "Relative positions relative to itself, absolute positions relative to nearest positioned ancestor",
      "Relative positions fixed to viewport, absolute moves with page",
      "Relative removes element from flow, absolute keeps in flow",
      "No difference"
    ],
    options_hi: [
      "Relative खुद के सापेक्ष स्थिति देता है, absolute सबसे नजदीकी पोजीशन्ड पूर्वज के सापेक्ष",
      "Relative व्यूपोर्ट के सापेक्ष फिक्स होता है, absolute पेज के साथ मूव करता है",
      "Relative एलिमेंट को फ्लो से हटाता है, absolute फ्लो में रखता है",
      "कोई अंतर नहीं"
    ],
    answer_en: "Relative positions relative to itself, absolute positions relative to nearest positioned ancestor",
    answer_hi: "Relative खुद के सापेक्ष स्थिति देता है, absolute सबसे नजदीकी पोजीशन्ड पूर्वज के सापेक्ष",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which CSS property controls the order of flex items, often used along with positioning?",
    question_hi: "कौन-सी CSS प्रॉपर्टी flex आइटम्स के क्रम को नियंत्रित करती है, जो पोजीशनिंग के साथ उपयोग होती है?",
    options_en: ["order", "z-index", "position", "flex-direction"],
    options_hi: ["order", "z-index", "पोजीशन", "flex-direction"],
    answer_en: "order",
    answer_hi: "order",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which property can break out of the normal flow and overlap other elements?",
    question_hi: "कौन-सी प्रॉपर्टी सामान्य फ्लो से बाहर निकलकर अन्य एलिमेंट्स के ऊपर ओवरलैप कर सकती है?",
    options_en: ["position with z-index", "margin", "padding", "display"],
    options_hi: ["position के साथ z-index", "मार्जिन", "पैडिंग", "डिस्प्ले"],
    answer_en: "position with z-index",
    answer_hi: "position के साथ z-index",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which property controls how an element floats to the left or right?",
    question_hi: "कौन-सी प्रॉपर्टी नियंत्रित करती है कि कोई एलिमेंट बाईं या दाईं ओर फ्लोट करे?",
    options_en: ["float", "position", "display", "z-index"],
    options_hi: ["फ्लोट", "पोजीशन", "डिस्प्ले", "z-index"],
    answer_en: "float",
    answer_hi: "फ्लोट",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Which CSS property controls the stacking order of elements?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एलिमेंट्स के स्टैकिंग ऑर्डर को नियंत्रित करती है?",
    options_en: ["z-index", "position", "display", "float"],
    options_hi: ["z-index", "पोजीशन", "डिस्प्ले", "फ्लोट"],
    answer_en: "z-index",
    answer_hi: "z-index",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "What happens when you set z-index to a higher value?",
    question_hi: "जब आप z-index को उच्च मान देते हैं तो क्या होता है?",
    options_en: ["Element appears on top", "Element moves down", "Element hides", "No effect"],
    options_hi: ["एलिमेंट ऊपर दिखाई देता है", "एलिमेंट नीचे चला जाता है", "एलिमेंट छुप जाता है", "कोई प्रभाव नहीं"],
    answer_en: "Element appears on top",
    answer_hi: "एलिमेंट ऊपर दिखाई देता है",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Can z-index be used without setting position?",
    question_hi: "क्या बिना position सेट किए z-index का उपयोग किया जा सकता है?",
    options_en: ["No", "Yes", "Sometimes", "Only in IE"],
    options_hi: ["नहीं", "हाँ", "कभी-कभी", "सिर्फ IE में"],
    answer_en: "No",
    answer_hi: "नहीं",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which positioning allows an element to overlap others and be moved anywhere in the document?",
    question_hi: "कौन-सी पोजीशनिंग एलिमेंट को दूसरों के ऊपर ओवरलैप करने और डॉक्यूमेंट में कहीं भी मूव करने देती है?",
    options_en: ["absolute", "relative", "static", "fixed"],
    options_hi: ["absolute", "relative", "static", "fixed"],
    answer_en: "absolute",
    answer_hi: "absolute",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which positioning type keeps an element fixed relative to the browser window?",
    question_hi: "कौन-सी पोजीशनिंग टाइप एलिमेंट को ब्राउज़र विंडो के सापेक्ष फिक्स रखती है?",
    options_en: ["fixed", "absolute", "relative", "static"],
    options_hi: ["fixed", "absolute", "relative", "static"],
    answer_en: "fixed",
    answer_hi: "fixed",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "What does 'position: static' mean?",
    question_hi: "'position: static' का क्या मतलब है?",
    options_en: ["Default position, element flows normally", "Element is fixed", "Element is positioned absolutely", "Element is sticky"],
    options_hi: ["डिफ़ॉल्ट स्थिति, एलिमेंट सामान्य फ्लो में रहता है", "एलिमेंट फिक्स्ड होता है", "एलिमेंट पूरी तरह से पोजीशन्ड होता है", "एलिमेंट sticky होता है"],
    answer_en: "Default position, element flows normally",
    answer_hi: "डिफ़ॉल्ट स्थिति, एलिमेंट सामान्य फ्लो में रहता है",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "How does 'position: sticky' behave when you scroll past its threshold?",
    question_hi: "जब आप उसके सीमा से स्क्रॉल करते हैं तो 'position: sticky' कैसे व्यवहार करता है?",
    options_en: ["Becomes fixed", "Becomes static", "Disappears", "Becomes absolute"],
    options_hi: ["फिक्स्ड हो जाता है", "स्टैटिक हो जाता है", "गायब हो जाता है", "एब्सोल्यूट हो जाता है"],
    answer_en: "Becomes fixed",
    answer_hi: "फिक्स्ड हो जाता है",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which CSS property defines the stacking order when elements overlap?",
    question_hi: "जब एलिमेंट्स ओवरलैप करते हैं तो स्टैकिंग ऑर्डर कौन-सी CSS प्रॉपर्टी पर निर्भर करता है?",
    options_en: ["z-index", "top", "position", "display"],
    options_hi: ["z-index", "टॉप", "पोजीशन", "डिस्प्ले"],
    answer_en: "z-index",
    answer_hi: "z-index",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which positioning method removes the element from the document flow?",
    question_hi: "कौन-सी पोजीशनिंग मेथड एलिमेंट को डॉक्यूमेंट फ्लो से हटा देती है?",
    options_en: ["absolute and fixed", "relative and static", "static only", "sticky only"],
    options_hi: ["absolute और fixed", "relative और static", "सिर्फ static", "सिर्फ sticky"],
    answer_en: "absolute and fixed",
    answer_hi: "absolute और fixed",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which property controls how far an absolutely positioned element is from the left of its containing block?",
    question_hi: "कौन-सी प्रॉपर्टी नियंत्रित करती है कि एब्सोल्यूटली पोजीशन्ड एलिमेंट अपनी कंटेनिंग ब्लॉक के बाईं ओर कितनी दूर है?",
    options_en: ["left", "margin-left", "padding-left", "position"],
    options_hi: ["left", "मार्जिन-लेफ्ट", "पैडिंग-लेफ्ट", "पोजीशन"],
    answer_en: "left",
    answer_hi: "left",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Can an element with 'position: fixed' move when the page scrolls?",
    question_hi: "क्या 'position: fixed' वाला एलिमेंट पेज स्क्रॉल होने पर मूव कर सकता है?",
    options_en: ["No", "Yes", "Sometimes", "Depends on browser"],
    options_hi: ["नहीं", "हाँ", "कभी-कभी", "ब्राउज़र पर निर्भर करता है"],
    answer_en: "No",
    answer_hi: "नहीं",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "If you want an element to scroll with the page but offset from its normal position, which position should you use?",
    question_hi: "अगर आप चाहते हैं कि एलिमेंट पेज के साथ स्क्रॉल करे लेकिन अपनी सामान्य स्थिति से ऑफसेट हो, तो कौन-सा पोजीशन उपयोग करें?",
    options_en: ["relative", "absolute", "fixed", "static"],
    options_hi: ["relative", "absolute", "fixed", "static"],
    answer_en: "relative",
    answer_hi: "relative",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "What does the CSS property 'bottom' control in positioned elements?",
    question_hi: "पोजीशन्ड एलिमेंट्स में 'bottom' CSS प्रॉपर्टी क्या नियंत्रित करती है?",
    options_en: ["Distance from the bottom edge of containing block", "Font size", "Padding", "Margin"],
    options_hi: ["कंटेनिंग ब्लॉक के नीचे की दूरी", "फॉन्ट साइज", "पैडिंग", "मार्जिन"],
    answer_en: "Distance from the bottom edge of containing block",
    answer_hi: "कंटेनिंग ब्लॉक के नीचे की दूरी",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Is 'position: sticky' supported in all modern browsers?",
    question_hi: "क्या 'position: sticky' सभी आधुनिक ब्राउज़रों में समर्थित है?",
    options_en: ["Yes", "No", "Only in Chrome", "Only in Firefox"],
    options_hi: ["हाँ", "नहीं", "सिर्फ Chrome में", "सिर्फ Firefox में"],
    answer_en: "Yes",
    answer_hi: "हाँ",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "What is the effect of setting 'position: absolute' without specifying top, left, bottom or right?",
    question_hi: "'position: absolute' सेट करने पर बिना top, left, bottom या right निर्दिष्ट किए क्या प्रभाव होगा?",
    options_en: ["Element positioned at its normal place", "Element positioned at top-left of containing block", "Element hidden", "Element fixed"],
    options_hi: ["एलिमेंट अपनी सामान्य जगह पर रहेगा", "एलिमेंट कंटेनिंग ब्लॉक के टॉप-लेफ्ट पर पोजीशन्ड होगा", "एलिमेंट छुपा होगा", "एलिमेंट फिक्स्ड होगा"],
    answer_en: "Element positioned at its normal place",
    answer_hi: "एलिमेंट अपनी सामान्य जगह पर रहेगा",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which CSS property specifies the distance between the element’s border and its offset position?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एलिमेंट की बॉर्डर और उसके ऑफसेट पोजीशन के बीच की दूरी बताती है?",
    options_en: ["margin", "padding", "top", "position"],
    options_hi: ["मार्जिन", "पैडिंग", "टॉप", "पोजीशन"],
    answer_en: "margin",
    answer_hi: "मार्जिन",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which positioning method is best for creating overlays or modals?",
    question_hi: "ओवरले या मोडल बनाने के लिए कौन-सी पोजीशनिंग मेथड सबसे अच्छी है?",
    options_en: ["fixed", "static", "relative", "sticky"],
    options_hi: ["fixed", "static", "relative", "sticky"],
    answer_en: "fixed",
    answer_hi: "fixed",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which CSS property can be used to prevent an element from moving when scrolled?",
    question_hi: "स्क्रॉल करते समय एलिमेंट को मूव होने से रोकने के लिए कौन-सी CSS प्रॉपर्टी का उपयोग किया जाता है?",
    options_en: ["position: fixed", "position: relative", "position: absolute", "position: static"],
    options_hi: ["position: fixed", "position: relative", "position: absolute", "position: static"],
    answer_en: "position: fixed",
    answer_hi: "position: fixed",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which positioning value allows an element to scroll with the page but remain visible until a certain scroll position?",
    question_hi: "कौन-सा पोजीशन मान एलिमेंट को पेज के साथ स्क्रॉल करने देता है लेकिन एक निश्चित स्क्रॉल पोजीशन तक विजिबल रखता है?",
    options_en: ["sticky", "fixed", "absolute", "relative"],
    options_hi: ["sticky", "fixed", "absolute", "relative"],
    answer_en: "sticky",
    answer_hi: "sticky",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which position value does not remove the element from the normal document flow?",
    question_hi: "कौन-सा पोजीशन मान एलिमेंट को सामान्य डॉक्यूमेंट फ्लो से नहीं हटाता?",
    options_en: ["relative", "absolute", "fixed", "sticky"],
    options_hi: ["relative", "absolute", "fixed", "sticky"],
    answer_en: "relative",
    answer_hi: "relative",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "How do 'top' and 'left' properties affect an element with position: relative?",
    question_hi: "'top' और 'left' प्रॉपर्टीज़ position: relative वाले एलिमेंट को कैसे प्रभावित करती हैं?",
    options_en: [
      "Moves element relative to its normal position",
      "Positions element absolutely",
      "Fixes element to viewport",
      "No effect"
    ],
    options_hi: [
      "एलिमेंट को उसकी सामान्य स्थिति के सापेक्ष मूव करती हैं",
      "एलिमेंट को एब्सोल्यूटली पोजीशन्ड करती हैं",
      "एलिमेंट को व्यूपोर्ट पर फिक्स करती हैं",
      "कोई प्रभाव नहीं"
    ],
    answer_en: "Moves element relative to its normal position",
    answer_hi: "एलिमेंट को उसकी सामान्य स्थिति के सापेक्ष मूव करती हैं",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "What is the initial value of the CSS position property?",
    question_hi: "CSS position प्रॉपर्टी का प्रारंभिक मान क्या है?",
    options_en: ["static", "relative", "absolute", "fixed"],
    options_hi: ["static", "relative", "absolute", "fixed"],
    answer_en: "static",
    answer_hi: "static",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which CSS positioning allows elements to be placed relative to their siblings?",
    question_hi: "कौन-सी CSS पोजीशनिंग एलिमेंट्स को उनके सिबलिंग्स के सापेक्ष रखने देती है?",
    options_en: ["relative", "absolute", "fixed", "static"],
    options_hi: ["relative", "absolute", "fixed", "static"],
    answer_en: "relative",
    answer_hi: "relative",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Can 'position: absolute' elements overlap 'position: relative' elements?",
    question_hi: "क्या 'position: absolute' वाले एलिमेंट्स 'position: relative' एलिमेंट्स के ऊपर ओवरलैप कर सकते हैं?",
    options_en: ["Yes", "No", "Depends on z-index", "Only sometimes"],
    options_hi: ["हाँ", "नहीं", "z-index पर निर्भर करता है", "कभी-कभी"],
    answer_en: "Depends on z-index",
    answer_hi: "z-index पर निर्भर करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which CSS property defines the order in which positioned elements overlap each other?",
    question_hi: "कौन-सी CSS प्रॉपर्टी निर्धारित करती है कि पोजीशन्ड एलिमेंट्स एक-दूसरे के ऊपर किस क्रम में ओवरलैप होंगे?",
    options_en: ["z-index", "position", "display", "float"],
    options_hi: ["z-index", "पोजीशन", "डिस्प्ले", "फ्लोट"],
    answer_en: "z-index",
    answer_hi: "z-index",
    attempted: false,
    selected: ""
  }
     ],
     6:[
        {
    num: 1,
    question_en: "What does CSS Flexbox primarily help with?",
    question_hi: "CSS Flexbox मुख्य रूप से किस चीज़ में मदद करता है?",
    options_en: ["Layout alignment", "Color styling", "Font styling", "Animation effects"],
    options_hi: ["लेआउट संरेखण", "रंग स्टाइलिंग", "फॉन्ट स्टाइलिंग", "एनिमेशन प्रभाव"],
    answer_en: "Layout alignment",
    answer_hi: "लेआउट संरेखण",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which property defines a flex container?",
    question_hi: "कौन-सी प्रॉपर्टी flex container को परिभाषित करती है?",
    options_en: ["display: flex", "position: flex", "flex-direction", "align-items"],
    options_hi: ["display: flex", "position: flex", "flex-direction", "align-items"],
    answer_en: "display: flex",
    answer_hi: "display: flex",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "What is the default value of 'flex-direction'?",
    question_hi: "'flex-direction' का डिफ़ॉल्ट मान क्या है?",
    options_en: ["row", "column", "row-reverse", "column-reverse"],
    options_hi: ["row", "column", "row-reverse", "column-reverse"],
    answer_en: "row",
    answer_hi: "row",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which property controls the direction of the main axis in flexbox?",
    question_hi: "Flexbox में main axis की दिशा को कौन-सी प्रॉपर्टी नियंत्रित करती है?",
    options_en: ["flex-direction", "justify-content", "align-items", "flex-wrap"],
    options_hi: ["flex-direction", "justify-content", "align-items", "flex-wrap"],
    answer_en: "flex-direction",
    answer_hi: "flex-direction",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which property controls how flex items are aligned along the main axis?",
    question_hi: "Main axis के साथ flex आइटम्स को कैसे संरेखित किया जाता है, यह कौन-सी प्रॉपर्टी नियंत्रित करती है?",
    options_en: ["justify-content", "align-items", "flex-direction", "flex-wrap"],
    options_hi: ["justify-content", "align-items", "flex-direction", "flex-wrap"],
    answer_en: "justify-content",
    answer_hi: "justify-content",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "What does 'align-items: center' do in flexbox?",
    question_hi: "'align-items: center' flexbox में क्या करता है?",
    options_en: [
      "Centers flex items along the cross axis",
      "Centers flex items along the main axis",
      "Aligns flex items to start",
      "Aligns flex items to end"
    ],
    options_hi: [
      "क्रॉस एक्सिस के साथ आइटम्स को केंद्रित करता है",
      "मेन एक्सिस के साथ आइटम्स को केंद्रित करता है",
      "आइटम्स को शुरू में संरेखित करता है",
      "आइटम्स को अंत में संरेखित करता है"
    ],
    answer_en: "Centers flex items along the cross axis",
    answer_hi: "क्रॉस एक्सिस के साथ आइटम्स को केंद्रित करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which property controls wrapping of flex items?",
    question_hi: "Flex आइटम्स के wrapping को कौन-सी प्रॉपर्टी नियंत्रित करती है?",
    options_en: ["flex-wrap", "flex-flow", "flex-grow", "flex-shrink"],
    options_hi: ["flex-wrap", "flex-flow", "flex-grow", "flex-shrink"],
    answer_en: "flex-wrap",
    answer_hi: "flex-wrap",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "What is the effect of 'flex-wrap: nowrap'?",
    question_hi: "'flex-wrap: nowrap' का क्या प्रभाव होता है?",
    options_en: [
      "Flex items stay in one line without wrapping",
      "Flex items wrap to multiple lines",
      "Flex items disappear",
      "Flex items align center"
    ],
    options_hi: [
      "फ्लेक्स आइटम्स एक लाइन में रहते हैं बिना रैपिंग के",
      "फ्लेक्स आइटम्स कई लाइनों में रैप होते हैं",
      "फ्लेक्स आइटम्स गायब हो जाते हैं",
      "फ्लेक्स आइटम्स केंद्र में संरेखित होते हैं"
    ],
    answer_en: "Flex items stay in one line without wrapping",
    answer_hi: "फ्लेक्स आइटम्स एक लाइन में रहते हैं बिना रैपिंग के",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which property is shorthand for 'flex-grow', 'flex-shrink' and 'flex-basis'?",
    question_hi: "'flex-grow', 'flex-shrink' और 'flex-basis' के लिए shorthand कौन-सी प्रॉपर्टी है?",
    options_en: ["flex", "flex-flow", "flex-wrap", "flex-direction"],
    options_hi: ["flex", "flex-flow", "flex-wrap", "flex-direction"],
    answer_en: "flex",
    answer_hi: "flex",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "What does 'flex-grow: 1' mean?",
    question_hi: "'flex-grow: 1' का क्या मतलब है?",
    options_en: [
      "Flex item can grow to fill available space",
      "Flex item cannot grow",
      "Flex item shrinks",
      "Flex item is hidden"
    ],
    options_hi: [
      "फ्लेक्स आइटम उपलब्ध जगह भरने के लिए बढ़ सकता है",
      "फ्लेक्स आइटम नहीं बढ़ सकता",
      "फ्लेक्स आइटम सिकुड़ता है",
      "फ्लेक्स आइटम छुपा है"
    ],
    answer_en: "Flex item can grow to fill available space",
    answer_hi: "फ्लेक्स आइटम उपलब्ध जगह भरने के लिए बढ़ सकता है",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "What is the default value of 'flex-shrink'?",
    question_hi: "'flex-shrink' का डिफ़ॉल्ट मान क्या है?",
    options_en: ["1", "0", "auto", "none"],
    options_hi: ["1", "0", "auto", "none"],
    answer_en: "1",
    answer_hi: "1",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which property aligns flex items along the cross axis?",
    question_hi: "क्रॉस एक्सिस पर फ्लेक्स आइटम्स को संरेखित करने वाली प्रॉपर्टी कौन-सी है?",
    options_en: ["align-items", "justify-content", "flex-direction", "flex-wrap"],
    options_hi: ["align-items", "justify-content", "flex-direction", "flex-wrap"],
    answer_en: "align-items",
    answer_hi: "align-items",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which property allows individual flex items to override the container’s 'align-items' setting?",
    question_hi: "कौन-सी प्रॉपर्टी व्यक्तिगत फ्लेक्स आइटम्स को कंटेनर के 'align-items' सेटिंग को ओवरराइड करने देती है?",
    options_en: ["align-self", "align-items", "justify-content", "flex-grow"],
    options_hi: ["align-self", "align-items", "justify-content", "flex-grow"],
    answer_en: "align-self",
    answer_hi: "align-self",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which flexbox property controls the alignment of flex lines in multi-line flex containers?",
    question_hi: "मल्टी-लाइन फ्लेक्स कंटेनर में फ्लेक्स लाइनों की संरेखण को कौन-सी प्रॉपर्टी नियंत्रित करती है?",
    options_en: ["align-content", "justify-content", "align-items", "flex-wrap"],
    options_hi: ["align-content", "justify-content", "align-items", "flex-wrap"],
    answer_en: "align-content",
    answer_hi: "align-content",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "What does the 'order' property do in flexbox?",
    question_hi: "Flexbox में 'order' प्रॉपर्टी क्या करती है?",
    options_en: [
      "Controls the order of flex items",
      "Controls color of flex items",
      "Controls size of flex items",
      "Controls margin of flex items"
    ],
    options_hi: [
      "फ्लेक्स आइटम्स के क्रम को नियंत्रित करती है",
      "फ्लेक्स आइटम्स के रंग को नियंत्रित करती है",
      "फ्लेक्स आइटम्स के आकार को नियंत्रित करती है",
      "फ्लेक्स आइटम्स के मार्जिन को नियंत्रित करती है"
    ],
    answer_en: "Controls the order of flex items",
    answer_hi: "फ्लेक्स आइटम्स के क्रम को नियंत्रित करती है",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which CSS property is used to set the initial main size of a flex item?",
    question_hi: "कौन-सी CSS प्रॉपर्टी फ्लेक्स आइटम के प्रारंभिक मुख्य आकार को सेट करती है?",
    options_en: ["flex-basis", "flex-grow", "flex-shrink", "flex-wrap"],
    options_hi: ["flex-basis", "flex-grow", "flex-shrink", "flex-wrap"],
    answer_en: "flex-basis",
    answer_hi: "flex-basis",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "What happens if 'flex-grow' is set to 0?",
    question_hi: "'flex-grow' 0 पर सेट होने पर क्या होता है?",
    options_en: [
      "Flex item will not grow",
      "Flex item will grow",
      "Flex item will shrink",
      "Flex item will disappear"
    ],
    options_hi: [
      "फ्लेक्स आइटम नहीं बढ़ेगा",
      "फ्लेक्स आइटम बढ़ेगा",
      "फ्लेक्स आइटम सिकुड़ेगा",
      "फ्लेक्स आइटम गायब हो जाएगा"
    ],
    answer_en: "Flex item will not grow",
    answer_hi: "फ्लेक्स आइटम नहीं बढ़ेगा",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which value of 'justify-content' aligns items to the center?",
    question_hi: "'justify-content' का कौन-सा मान आइटम्स को केंद्र में संरेखित करता है?",
    options_en: ["center", "flex-start", "flex-end", "space-between"],
    options_hi: ["center", "flex-start", "flex-end", "space-between"],
    answer_en: "center",
    answer_hi: "center",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "What is the effect of 'justify-content: space-between'?",
    question_hi: "'justify-content: space-between' का क्या प्रभाव होता है?",
    options_en: [
      "Items spread out with equal space between",
      "Items grouped at start",
      "Items grouped at end",
      "Items centered"
    ],
    options_hi: [
      "आइटम्स समान दूरी पर फैले होते हैं",
      "आइटम्स शुरू में समूहित होते हैं",
      "आइटम्स अंत में समूहित होते हैं",
      "आइटम्स केंद्र में होते हैं"
    ],
    answer_en: "Items spread out with equal space between",
    answer_hi: "आइटम्स समान दूरी पर फैले होते हैं",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "How do you make a flex container wrap its items to the next line?",
    question_hi: "फ्लेक्स कंटेनर को अपने आइटम्स को अगली लाइन पर रैप करने के लिए कैसे सेट करें?",
    options_en: ["flex-wrap: wrap", "flex-direction: column", "flex-grow: 1", "justify-content: center"],
    options_hi: ["flex-wrap: wrap", "flex-direction: column", "flex-grow: 1", "justify-content: center"],
    answer_en: "flex-wrap: wrap",
    answer_hi: "flex-wrap: wrap",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "What does 'align-content' control in flexbox?",
    question_hi: "Flexbox में 'align-content' क्या नियंत्रित करता है?",
    options_en: [
      "Alignment of flex lines in multi-line flex containers",
      "Alignment of items along main axis",
      "Direction of flex items",
      "Wrapping behavior"
    ],
    options_hi: [
      "मल्टी-लाइन फ्लेक्स कंटेनर में फ्लेक्स लाइनों की संरेखण",
      "मेन एक्सिस के साथ आइटम्स की संरेखण",
      "फ्लेक्स आइटम्स की दिशा",
      "रैपिंग व्यवहार"
    ],
    answer_en: "Alignment of flex lines in multi-line flex containers",
    answer_hi: "मल्टी-लाइन फ्लेक्स कंटेनर में फ्लेक्स लाइनों की संरेखण",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which property controls the alignment of flex items when they do not use all the available space?",
    question_hi: "जब फ्लेक्स आइटम्स उपलब्ध जगह का पूरा उपयोग नहीं करते, तो उनकी संरेखण को कौन-सी प्रॉपर्टी नियंत्रित करती है?",
    options_en: ["align-items", "align-content", "justify-content", "order"],
    options_hi: ["align-items", "align-content", "justify-content", "order"],
    answer_en: "align-items",
    answer_hi: "align-items",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which property is used to change the order of flex items visually?",
    question_hi: "फ्लेक्स आइटम्स के दृश्य क्रम को बदलने के लिए कौन-सी प्रॉपर्टी का उपयोग किया जाता है?",
    options_en: ["order", "flex-grow", "flex-shrink", "flex-basis"],
    options_hi: ["order", "flex-grow", "flex-shrink", "flex-basis"],
    answer_en: "order",
    answer_hi: "order",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "What is the default value of the 'order' property?",
    question_hi: "'order' प्रॉपर्टी का डिफ़ॉल्ट मान क्या है?",
    options_en: ["0", "1", "-1", "auto"],
    options_hi: ["0", "1", "-1", "auto"],
    answer_en: "0",
    answer_hi: "0",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which CSS flexbox property controls the ability of a flex item to shrink if necessary?",
    question_hi: "कौन-सी CSS फ्लेक्सबॉक्स प्रॉपर्टी फ्लेक्स आइटम को आवश्यक होने पर सिकुड़ने की क्षमता नियंत्रित करती है?",
    options_en: ["flex-shrink", "flex-grow", "flex-basis", "order"],
    options_hi: ["flex-shrink", "flex-grow", "flex-basis", "order"],
    answer_en: "flex-shrink",
    answer_hi: "flex-shrink",
    attempted: false,
    selected: ""
  },
   {
    num: 26,
    question_en: "What does the 'flex-basis' property specify?",
    question_hi: "'flex-basis' प्रॉपर्टी क्या निर्दिष्ट करती है?",
    options_en: [
      "Initial main size of a flex item",
      "Amount of space between items",
      "Alignment of items",
      "Order of items"
    ],
    options_hi: [
      "फ्लेक्स आइटम का प्रारंभिक मुख्य आकार",
      "आइटम्स के बीच की दूरी",
      "आइटम्स की संरेखण",
      "आइटम्स का क्रम"
    ],
    answer_en: "Initial main size of a flex item",
    answer_hi: "फ्लेक्स आइटम का प्रारंभिक मुख्य आकार",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which property defines the default size of an element before remaining space is distributed?",
    question_hi: "कौन-सी प्रॉपर्टी किसी एलिमेंट के डिफ़ॉल्ट आकार को परिभाषित करती है जब तक कि बाकी स्थान वितरित न हो?",
    options_en: ["flex-basis", "flex-grow", "flex-shrink", "justify-content"],
    options_hi: ["फ्लेक्स-बेसिस", "फ्लेक्स-ग्रो", "फ्लेक्स-श्रिंक", "जस्टिफाई-कॉन्टेंट"],
    answer_en: "flex-basis",
    answer_hi: "फ्लेक्स-बेसिस",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "What does 'justify-content: center' do in a flex container?",
    question_hi: "'justify-content: center' एक फ्लेक्स कंटेनर में क्या करता है?",
    options_en: ["Aligns items to the center of the main axis", "Aligns items to the start", "Aligns items to the end", "Stretches items"],
    options_hi: ["मुख्य अक्ष के केंद्र में आइटम संरेखित करता है", "प्रारंभ में आइटम संरेखित करता है", "अंत में आइटम संरेखित करता है", "आइटम्स को फैलाता है"],
    answer_en: "Aligns items to the center of the main axis",
    answer_hi: "मुख्य अक्ष के केंद्र में आइटम संरेखित करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which property allows items to wrap in a flex container?",
    question_hi: "कौन-सी प्रॉपर्टी फ्लेक्स कंटेनर में आइटम्स को रैप करने की अनुमति देती है?",
    options_en: ["flex-wrap", "flex-direction", "flex-flow", "align-items"],
    options_hi: ["फ्लेक्स-रैप", "फ्लेक्स-डायरेक्शन", "फ्लेक्स-फ्लो", "अलाइन-आइटम्स"],
    answer_en: "flex-wrap",
    answer_hi: "फ्लेक्स-रैप",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "What value of 'flex-direction' makes the main axis vertical from top to bottom?",
    question_hi: "'flex-direction' का कौन-सा मान मुख्य अक्ष को ऊपर से नीचे तक लंबवत बनाता है?",
    options_en: ["column", "row", "row-reverse", "column-reverse"],
    options_hi: ["कॉलम", "रो", "रो-रिवर्स", "कॉलम-रिवर्स"],
    answer_en: "column",
    answer_hi: "कॉलम",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which CSS property is used to align items on the cross axis in a flex container?",
    question_hi: "फ्लेक्स कंटेनर में क्रॉस अक्ष पर आइटम को संरेखित करने के लिए कौन-सी CSS प्रॉपर्टी उपयोग की जाती है?",
    options_en: ["justify-content", "align-items", "flex-direction", "align-content"],
    options_hi: ["जस्टिफाई-कंटेंट", "अलाइन-आइटम्स", "फ्लेक्स-डायरेक्शन", "अलाइन-कंटेंट"],
    answer_en: "align-items",
    answer_hi: "अलाइन-आइटम्स",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which value of 'justify-content' places items at the start of the main axis?",
    question_hi: "'justify-content' का कौन-सा मान आइटम्स को मुख्य अक्ष की शुरुआत में रखता है?",
    options_en: ["flex-start", "flex-end", "center", "space-between"],
    options_hi: ["फ्लेक्स-स्टार्ट", "फ्लेक्स-एंड", "सेंटर", "स्पेस-बिटवीन"],
    answer_en: "flex-start",
    answer_hi: "फ्लेक्स-स्टार्ट",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which property allows items to wrap onto multiple lines in a flex container?",
    question_hi: "फ्लेक्स कंटेनर में आइटम्स को कई लाइनों में लपेटने की अनुमति देने वाली प्रॉपर्टी कौन-सी है?",
    options_en: ["flex-wrap", "wrap-items", "flex-flow", "align-wrap"],
    options_hi: ["फ्लेक्स-रैप", "रैप-आइटम्स", "फ्लेक्स-फ्लो", "अलाइन-रैप"],
    answer_en: "flex-wrap",
    answer_hi: "फ्लेक्स-रैप",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which value of 'align-items' aligns items at the end of the cross axis?",
    question_hi: "'align-items' का कौन-सा मान आइटम्स को क्रॉस अक्ष के अंत में संरेखित करता है?",
    options_en: ["flex-end", "flex-start", "center", "stretch"],
    options_hi: ["फ्लेक्स-एंड", "फ्लेक्स-स्टार्ट", "सेंटर", "स्ट्रेच"],
    answer_en: "flex-end",
    answer_hi: "फ्लेक्स-एंड",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "What does 'flex-grow' specify?",
    question_hi: "'flex-grow' किसे निर्दिष्ट करता है?",
    options_en: [
      "The initial size of a flex item",
      "How much a flex item will grow relative to others",
      "The direction of the flex items",
      "The spacing between items"
    ],
    options_hi: [
      "फ्लेक्स आइटम का प्रारंभिक आकार",
      "अन्य आइटम्स की तुलना में फ्लेक्स आइटम कितना बढ़ेगा",
      "फ्लेक्स आइटम्स की दिशा",
      "आइटम्स के बीच की दूरी"
    ],
    answer_en: "How much a flex item will grow relative to others",
    answer_hi: "अन्य आइटम्स की तुलना में फ्लेक्स आइटम कितना बढ़ेगा",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which value of 'flex-direction' sets the main axis horizontally from right to left?",
    question_hi: "'flex-direction' का कौन-सा मान मुख्य अक्ष को दाएँ से बाएँ क्षैतिज बनाता है?",
    options_en: ["row", "row-reverse", "column", "column-reverse"],
    options_hi: ["रो", "रो-रिवर्स", "कॉलम", "कॉलम-रिवर्स"],
    answer_en: "row-reverse",
    answer_hi: "रो-रिवर्स",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "What does the 'align-content' property do in a flex container?",
    question_hi: "'align-content' प्रॉपर्टी फ्लेक्स कंटेनर में क्या करती है?",
    options_en: [
      "Aligns items on the cross axis",
      "Aligns multiple rows on the cross axis",
      "Sets the main axis direction",
      "Sets item spacing"
    ],
    options_hi: [
      "क्रॉस अक्ष पर आइटम्स को संरेखित करती है",
      "क्रॉस अक्ष पर कई पंक्तियों को संरेखित करती है",
      "मुख्य अक्ष की दिशा सेट करती है",
      "आइटम्स के बीच की दूरी सेट करती है"
    ],
    answer_en: "Aligns multiple rows on the cross axis",
    answer_hi: "क्रॉस अक्ष पर कई पंक्तियों को संरेखित करती है",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "What value of 'align-items' stretches items to fill the container?",
    question_hi: "'align-items' का कौन-सा मान आइटम्स को कंटेनर भरने के लिए खींचता है?",
    options_en: ["stretch", "flex-start", "flex-end", "center"],
    options_hi: ["स्ट्रेच", "फ्लेक्स-स्टार्ट", "फ्लेक्स-एंड", "सेंटर"],
    answer_en: "stretch",
    answer_hi: "स्ट्रेच",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which CSS property sets how flex items are laid out along the main axis?",
    question_hi: "कौन-सी CSS प्रॉपर्टी निर्धारित करती है कि फ्लेक्स आइटम्स मुख्य अक्ष के साथ कैसे रखे जाते हैं?",
    options_en: ["justify-content", "align-items", "order", "flex-wrap"],
    options_hi: ["जस्टिफाई-कंटेंट", "अलाइन-आइटम्स", "ऑर्डर", "फ्लेक्स-रैप"],
    answer_en: "justify-content",
    answer_hi: "जस्टिफाई-कंटेंट",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which property sets the order in which items appear in the flex container?",
    question_hi: "कौन-सी प्रॉपर्टी फ्लेक्स कंटेनर में आइटम्स की उपस्थिति का क्रम सेट करती है?",
    options_en: ["flex-order", "order", "flex-index", "z-index"],
    options_hi: ["फ्लेक्स-ऑर्डर", "ऑर्डर", "फ्लेक्स-इंडेक्स", "ज़ेड-इंडेक्स"],
    answer_en: "order",
    answer_hi: "ऑर्डर",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which shorthand property sets 'flex-grow', 'flex-shrink', and 'flex-basis'?",
    question_hi: "कौन-सी शॉर्टहैंड प्रॉपर्टी 'flex-grow', 'flex-shrink', और 'flex-basis' सेट करती है?",
    options_en: ["flex", "flex-direction", "flex-flow", "flex-wrap"],
    options_hi: ["फ्लेक्स", "फ्लेक्स-डायरेक्शन", "फ्लेक्स-फ्लो", "फ्लेक्स-रैप"],
    answer_en: "flex",
    answer_hi: "फ्लेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which property defines whether items are forced onto one line or can wrap?",
    question_hi: "कौन-सी प्रॉपर्टी निर्धारित करती है कि आइटम्स को एक ही पंक्ति में रखा जाएगा या वे लपेटे जा सकते हैं?",
    options_en: ["flex-wrap", "align-items", "flex-flow", "order"],
    options_hi: ["फ्लेक्स-रैप", "अलाइन-आइटम्स", "फ्लेक्स-फ्लो", "ऑर्डर"],
    answer_en: "flex-wrap",
    answer_hi: "फ्लेक्स-रैप",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "What is the default value of 'flex-direction'?",
    question_hi: "'flex-direction' का डिफ़ॉल्ट मान क्या होता है?",
    options_en: ["row", "column", "row-reverse", "column-reverse"],
    options_hi: ["रो", "कॉलम", "रो-रिवर्स", "कॉलम-रिवर्स"],
    answer_en: "row",
    answer_hi: "रो",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which flexbox property helps to control overflow of flex items?",
    question_hi: "कौन-सी फ्लेक्सबॉक्स प्रॉपर्टी फ्लेक्स आइटम्स के ओवरफ्लो को नियंत्रित करने में मदद करती है?",
    options_en: ["flex-wrap", "overflow", "align-items", "z-index"],
    options_hi: ["फ्लेक्स-रैप", "ओवरफ्लो", "अलाइन-आइटम्स", "ज़ेड-इंडेक्स"],
    answer_en: "flex-wrap",
    answer_hi: "फ्लेक्स-रैप",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "What does the 'order' property affect in a flex container?",
    question_hi: "'order' प्रॉपर्टी फ्लेक्स कंटेनर में किसे प्रभावित करती है?",
    options_en: [
      "Size of items",
      "Position in the DOM",
      "Visual order of items",
      "Background color"
    ],
    options_hi: [
      "आइटम्स का आकार",
      "DOM में स्थिति",
      "आइटम्स का दृश्य क्रम",
      "बैकग्राउंड रंग"
    ],
    answer_en: "Visual order of items",
    answer_hi: "आइटम्स का दृश्य क्रम",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "What is the default value of 'align-items' in flexbox?",
    question_hi: "फ्लेक्सबॉक्स में 'align-items' का डिफ़ॉल्ट मान क्या होता है?",
    options_en: ["stretch", "center", "flex-start", "baseline"],
    options_hi: ["स्ट्रेच", "सेंटर", "फ्लेक्स-स्टार्ट", "बेसलाइन"],
    answer_en: "stretch",
    answer_hi: "स्ट्रेच",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which property combines 'flex-direction' and 'flex-wrap'?",
    question_hi: "कौन-सी प्रॉपर्टी 'flex-direction' और 'flex-wrap' को जोड़ती है?",
    options_en: ["flex-flow", "flex", "display", "justify-content"],
    options_hi: ["फ्लेक्स-फ्लो", "फ्लेक्स", "डिस्प्ले", "जस्टिफाई-कंटेंट"],
    answer_en: "flex-flow",
    answer_hi: "फ्लेक्स-फ्लो",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which property controls how flex items shrink when necessary?",
    question_hi: "कौन-सी प्रॉपर्टी आवश्यक होने पर फ्लेक्स आइटम्स को सिकोड़ने को नियंत्रित करती है?",
    options_en: ["flex-shrink", "flex-grow", "flex-wrap", "order"],
    options_hi: ["फ्लेक्स-श्रिंक", "फ्लेक्स-ग्रो", "फ्लेक्स-रैप", "ऑर्डर"],
    answer_en: "flex-shrink",
    answer_hi: "फ्लेक्स-श्रिंक",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which flexbox value centers items both vertically and horizontally?",
    question_hi: "कौन-सा फ्लेक्सबॉक्स मान आइटम्स को ऊर्ध्वाधर और क्षैतिज दोनों रूप से केंद्र में रखता है?",
    options_en: [
      "justify-content: center; align-items: center;",
      "align-content: center",
      "flex-grow: 1",
      "order: 0"
    ],
    options_hi: [
      "justify-content: center; align-items: center;",
      "align-content: center",
      "flex-grow: 1",
      "order: 0"
    ],
    answer_en: "justify-content: center; align-items: center;",
    answer_hi: "justify-content: center; align-items: center;",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which display value activates flexbox layout?",
    question_hi: "कौन-सा डिस्प्ले मान फ्लेक्सबॉक्स लेआउट को सक्रिय करता है?",
    options_en: ["flex", "block", "inline", "grid"],
    options_hi: ["फ्लेक्स", "ब्लॉक", "इनलाइन", "ग्रिड"],
    answer_en: "flex",
    answer_hi: "फ्लेक्स",
    attempted: false,
    selected: ""
  }
     ],
     7:[
       {
    num: 1,
    question_en: "Which property controls the alignment of grid items along the row axis?",
    question_hi: "कौन-सी प्रॉपर्टी ग्रिड आइटम्स को पंक्ति अक्ष के साथ संरेखित करती है?",
    options_en: ["justify-items", "align-items", "justify-content", "align-content"],
    options_hi: ["जस्टिफाई-आइटम्स", "अलाइन-आइटम्स", "जस्टिफाई-कंटेंट", "अलाइन-कंटेंट"],
    answer_en: "justify-items",
    answer_hi: "जस्टिफाई-आइटम्स",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which CSS property defines the number of columns in a grid container?",
    question_hi: "कौन-सी CSS प्रॉपर्टी ग्रिड कंटेनर में कॉलम की संख्या निर्धारित करती है?",
    options_en: ["grid-template-columns", "grid-template-rows", "grid-column", "grid-row"],
    options_hi: ["ग्रिड-टेम्प्लेट-कॉलम्स", "ग्रिड-टेम्प्लेट-रोस", "ग्रिड-कॉलम", "ग्रिड-रो"],
    answer_en: "grid-template-columns",
    answer_hi: "ग्रिड-टेम्प्लेट-कॉलम्स",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which property controls the space between grid rows?",
    question_hi: "कौन-सी प्रॉपर्टी ग्रिड पंक्तियों के बीच की दूरी नियंत्रित करती है?",
    options_en: ["grid-row-gap", "grid-column-gap", "grid-gap", "grid-row-spacing"],
    options_hi: ["ग्रिड-रो-गैप", "ग्रिड-कॉलम-गैप", "ग्रिड-गैप", "ग्रिड-रो-स्पेसिंग"],
    answer_en: "grid-row-gap",
    answer_hi: "ग्रिड-रो-गैप",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which property is shorthand for setting both row and column gaps in grid?",
    question_hi: "कौन-सी प्रॉपर्टी ग्रिड में पंक्ति और कॉलम गैप दोनों सेट करने के लिए शॉर्टहैंड है?",
    options_en: ["grid-gap", "gap", "grid-row-gap", "grid-column-gap"],
    options_hi: ["ग्रिड-गैप", "गैप", "ग्रिड-रो-गैप", "ग्रिड-कॉलम-गैप"],
    answer_en: "gap",
    answer_hi: "गैप",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "What does 'grid-auto-flow: row' do?",
    question_hi: "'grid-auto-flow: row' क्या करता है?",
    options_en: [
      "Places items row-wise",
      "Places items column-wise",
      "Places items in layers",
      "Disables grid auto flow"
    ],
    options_hi: [
      "आइटम्स को पंक्ति के अनुसार रखता है",
      "आइटम्स को कॉलम के अनुसार रखता है",
      "आइटम्स को परतों में रखता है",
      "ग्रिड ऑटो फ्लो को अक्षम करता है"
    ],
    answer_en: "Places items row-wise",
    answer_hi: "आइटम्स को पंक्ति के अनुसार रखता है",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which property defines the starting grid line for a grid item?",
    question_hi: "कौन-सी प्रॉपर्टी ग्रिड आइटम के लिए शुरूआती ग्रिड लाइन को परिभाषित करती है?",
    options_en: ["grid-column-start", "grid-row-start", "grid-area", "grid-column-end"],
    options_hi: ["ग्रिड-कॉलम-स्टार्ट", "ग्रिड-रो-स्टार्ट", "ग्रिड-एरिया", "ग्रिड-कॉलम-एंड"],
    answer_en: "grid-column-start",
    answer_hi: "ग्रिड-कॉलम-स्टार्ट",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "What is the default value of 'grid-auto-flow'?",
    question_hi: "'grid-auto-flow' का डिफ़ॉल्ट मान क्या है?",
    options_en: ["row", "column", "dense", "none"],
    options_hi: ["रो", "कॉलम", "डेंस", "नन"],
    answer_en: "row",
    answer_hi: "रो",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which property allows you to assign a name to a grid area?",
    question_hi: "कौन-सी प्रॉपर्टी आपको ग्रिड क्षेत्र को नाम देने की अनुमति देती है?",
    options_en: ["grid-area", "grid-template-areas", "grid-template-columns", "grid-column"],
    options_hi: ["ग्रिड-एरिया", "ग्रिड-टेम्प्लेट-एरियास", "ग्रिड-टेम्प्लेट-कॉलम्स", "ग्रिड-कॉलम"],
    answer_en: "grid-area",
    answer_hi: "ग्रिड-एरिया",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which property specifies grid-template areas?",
    question_hi: "कौन-सी प्रॉपर्टी ग्रिड-टेम्प्लेट-एरियास को निर्दिष्ट करती है?",
    options_en: ["grid-template-areas", "grid-area", "grid-template-columns", "grid-auto-flow"],
    options_hi: ["ग्रिड-टेम्प्लेट-एरियास", "ग्रिड-एरिया", "ग्रिड-टेम्प्लेट-कॉलम्स", "ग्रिड-ऑटो-फ्लो"],
    answer_en: "grid-template-areas",
    answer_hi: "ग्रिड-टेम्प्लेट-एरियास",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "How do you make a grid container span across 3 columns?",
    question_hi: "आप ग्रिड कंटेनर को 3 कॉलम तक कैसे फैला सकते हैं?",
    options_en: ["grid-column: span 3;", "grid-row: span 3;", "grid-area: span 3;", "grid-span: 3;"],
    options_hi: ["ग्रिड-कॉलम: स्पैन 3;", "ग्रिड-रो: स्पैन 3;", "ग्रिड-एरिया: स्पैन 3;", "ग्रिड-स्पैन: 3;"],
    answer_en: "grid-column: span 3;",
    answer_hi: "ग्रिड-कॉलम: स्पैन 3;",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which property sets the size of grid rows?",
    question_hi: "कौन-सी प्रॉपर्टी ग्रिड पंक्तियों का आकार सेट करती है?",
    options_en: ["grid-template-rows", "grid-template-columns", "grid-auto-rows", "grid-row-gap"],
    options_hi: ["ग्रिड-टेम्प्लेट-रोस", "ग्रिड-टेम्प्लेट-कॉलम्स", "ग्रिड-ऑटो-रोस", "ग्रिड-रो-गैप"],
    answer_en: "grid-template-rows",
    answer_hi: "ग्रिड-टेम्प्लेट-रोस",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "What does 'fr' unit represent in CSS Grid?",
    question_hi: "CSS Grid में 'fr' यूनिट क्या दर्शाती है?",
    options_en: ["Fraction of available space", "Fixed size in pixels", "Flexible rows", "Font-relative size"],
    options_hi: ["उपलब्ध स्थान का हिस्सा", "पिक्सेल में निश्चित आकार", "लचीली पंक्तियाँ", "फ़ॉन्ट-सम्बंधित आकार"],
    answer_en: "Fraction of available space",
    answer_hi: "उपलब्ध स्थान का हिस्सा",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which property controls the alignment of grid items along the column axis?",
    question_hi: "कौन-सी प्रॉपर्टी ग्रिड आइटम्स को कॉलम अक्ष के साथ संरेखित करती है?",
    options_en: ["align-items", "justify-items", "align-content", "justify-content"],
    options_hi: ["अलाइन-आइटम्स", "जस्टिफाई-आइटम्स", "अलाइन-कंटेंट", "जस्टिफाई-कंटेंट"],
    answer_en: "align-items",
    answer_hi: "अलाइन-आइटम्स",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "What does 'grid-template-columns: repeat(3, 1fr)' do?",
    question_hi: "'grid-template-columns: repeat(3, 1fr)' क्या करता है?",
    options_en: [
      "Creates 3 equal columns",
      "Creates 1 column with 3fr width",
      "Creates 3 rows",
      "Repeats 1 column 3 times vertically"
    ],
    options_hi: [
      "3 बराबर कॉलम बनाता है",
      "1 कॉलम 3fr चौड़ा बनाता है",
      "3 पंक्तियाँ बनाता है",
      "1 कॉलम को 3 बार लंबवत दोहराता है"
    ],
    answer_en: "Creates 3 equal columns",
    answer_hi: "3 बराबर कॉलम बनाता है",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which property defines the end grid line for a grid item?",
    question_hi: "कौन-सी प्रॉपर्टी ग्रिड आइटम के लिए अंत ग्रिड लाइन को परिभाषित करती है?",
    options_en: ["grid-column-end", "grid-row-end", "grid-area", "grid-column-start"],
    options_hi: ["ग्रिड-कॉलम-एंड", "ग्रिड-रो-एंड", "ग्रिड-एरिया", "ग्रिड-कॉलम-स्टार्ट"],
    answer_en: "grid-column-end",
    answer_hi: "ग्रिड-कॉलम-एंड",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which CSS property specifies the size of implicit grid rows?",
    question_hi: "कौन-सी CSS प्रॉपर्टी अप्रत्यक्ष ग्रिड पंक्तियों का आकार निर्दिष्ट करती है?",
    options_en: ["grid-auto-rows", "grid-template-rows", "grid-auto-columns", "grid-row-gap"],
    options_hi: ["ग्रिड-ऑटो-रोस", "ग्रिड-टेम्प्लेट-रोस", "ग्रिड-ऑटो-कॉलम्स", "ग्रिड-रो-गैप"],
    answer_en: "grid-auto-rows",
    answer_hi: "ग्रिड-ऑटो-रोस",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "What does 'justify-content' control in a grid container?",
    question_hi: "ग्रिड कंटेनर में 'justify-content' क्या नियंत्रित करता है?",
    options_en: [
      "Alignment of entire grid along row axis",
      "Alignment of items within grid cells",
      "Space between rows",
      "Size of grid cells"
    ],
    options_hi: [
      "पंक्ति अक्ष के साथ पूरे ग्रिड का संरेखण",
      "ग्रिड सेल्स के भीतर आइटम का संरेखण",
      "पंक्तियों के बीच की दूरी",
      "ग्रिड सेल्स का आकार"
    ],
    answer_en: "Alignment of entire grid along row axis",
    answer_hi: "पंक्ति अक्ष के साथ पूरे ग्रिड का संरेखण",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which property controls how content is aligned inside grid cells vertically?",
    question_hi: "ग्रिड सेल्स के अंदर सामग्री को लंबवत रूप से कैसे संरेखित किया जाता है यह कौन-सी प्रॉपर्टी नियंत्रित करती है?",
    options_en: ["align-content", "justify-content", "align-items", "justify-items"],
    options_hi: ["अलाइन-कंटेंट", "जस्टिफाई-कंटेंट", "अलाइन-आइटम्स", "जस्टिफाई-आइटम्स"],
    answer_en: "align-content",
    answer_hi: "अलाइन-कंटेंट",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "What value of 'grid-auto-flow' places items densely to fill gaps?",
    question_hi: "'grid-auto-flow' का कौन-सा मान आइटम्स को अंतराल भरने के लिए घनीभूत (dense) करता है?",
    options_en: ["dense", "row", "column", "auto"],
    options_hi: ["डेंस", "रो", "कॉलम", "ऑटो"],
    answer_en: "dense",
    answer_hi: "डेंस",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which property specifies the grid item's area in shorthand?",
    question_hi: "कौन-सी प्रॉपर्टी शॉर्टहैंड में ग्रिड आइटम का क्षेत्र निर्दिष्ट करती है?",
    options_en: ["grid-area", "grid-column", "grid-row", "grid-template-areas"],
    options_hi: ["ग्रिड-एरिया", "ग्रिड-कॉलम", "ग्रिड-रो", "ग्रिड-टेम्प्लेट-एरियास"],
    answer_en: "grid-area",
    answer_hi: "ग्रिड-एरिया",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "What is the default display value for a grid container?",
    question_hi: "ग्रिड कंटेनर के लिए डिफ़ॉल्ट डिस्प्ले मान क्या है?",
    options_en: ["grid", "block", "inline-grid", "inline-block"],
    options_hi: ["ग्रिड", "ब्लॉक", "इनलाइन-ग्रिड", "इनलाइन-ब्लॉक"],
    answer_en: "grid",
    answer_hi: "ग्रिड",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which property allows overlapping of grid items?",
    question_hi: "कौन-सी प्रॉपर्टी ग्रिड आइटम्स के ओवरलैपिंग की अनुमति देती है?",
    options_en: ["grid-area", "grid-column", "grid-auto-flow", "grid-gap"],
    options_hi: ["ग्रिड-एरिया", "ग्रिड-कॉलम", "ग्रिड-ऑटो-फ्लो", "ग्रिड-गैप"],
    answer_en: "grid-area",
    answer_hi: "ग्रिड-एरिया",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "What does the 'minmax()' function do in CSS Grid?",
    question_hi: "CSS Grid में 'minmax()' फ़ंक्शन क्या करता है?",
    options_en: [
      "Sets a size range between min and max values",
      "Sets minimum size only",
      "Sets maximum size only",
      "Sets fixed size"
    ],
    options_hi: [
      "न्यूनतम और अधिकतम मानों के बीच आकार सेट करता है",
      "केवल न्यूनतम आकार सेट करता है",
      "केवल अधिकतम आकार सेट करता है",
      "स्थिर आकार सेट करता है"
    ],
    answer_en: "Sets a size range between min and max values",
    answer_hi: "न्यूनतम और अधिकतम मानों के बीच आकार सेट करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which unit is commonly used to define flexible lengths in CSS Grid?",
    question_hi: "CSS Grid में लचीली लंबाई को परिभाषित करने के लिए कौन-सी यूनिट आमतौर पर उपयोग की जाती है?",
    options_en: ["fr", "px", "%", "em"],
    options_hi: ["fr", "px", "%", "em"],
    answer_en: "fr",
    answer_hi: "fr",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which property defines the placement of grid rows?",
    question_hi: "कौन-सी प्रॉपर्टी ग्रिड पंक्तियों के स्थान को परिभाषित करती है?",
    options_en: ["grid-row", "grid-column", "grid-area", "grid-template-rows"],
    options_hi: ["ग्रिड-रो", "ग्रिड-कॉलम", "ग्रिड-एरिया", "ग्रिड-टेम्प्लेट-रोस"],
    answer_en: "grid-row",
    answer_hi: "ग्रिड-रो",
    attempted: false,
    selected: ""
  },
   {
    num: 26,
    question_en: "Which property controls how grid items stretch to fill grid cells?",
    question_hi: "कौन-सी प्रॉपर्टी ग्रिड आइटम्स को ग्रिड सेल्स भरने के लिए फैलाती है?",
    options_en: ["align-self", "justify-self", "align-content", "justify-content"],
    options_hi: ["अलाइन-सेल्फ", "जस्टिफाई-सेल्फ", "अलाइन-कंटेंट", "जस्टिफाई-कंटेंट"],
    answer_en: "align-self",
    answer_hi: "अलाइन-सेल्फ",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "What does 'grid-template' property combine?",
    question_hi: "'grid-template' प्रॉपर्टी क्या-क्या संयोजित करती है?",
    options_en: [
      "grid-template-rows and grid-template-columns",
      "grid-auto-flow and grid-gap",
      "grid-area and grid-template-areas",
      "grid-column and grid-row"
    ],
    options_hi: [
      "ग्रिड-टेम्प्लेट-रोस और ग्रिड-टेम्प्लेट-कॉलम्स",
      "ग्रिड-ऑटो-फ्लो और ग्रिड-गैप",
      "ग्रिड-एरिया और ग्रिड-टेम्प्लेट-एरियास",
      "ग्रिड-कॉलम और ग्रिड-रो"
    ],
    answer_en: "grid-template-rows and grid-template-columns",
    answer_hi: "ग्रिड-टेम्प्लेट-रोस और ग्रिड-टेम्प्लेट-कॉलम्स",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which property controls the order of grid items?",
    question_hi: "कौन-सी प्रॉपर्टी ग्रिड आइटम्स के क्रम को नियंत्रित करती है?",
    options_en: ["order", "z-index", "grid-area", "grid-row"],
    options_hi: ["ऑर्डर", "जेड-इंडेक्स", "ग्रिड-एरिया", "ग्रिड-रो"],
    answer_en: "order",
    answer_hi: "ऑर्डर",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "What is the effect of 'grid-auto-columns' property?",
    question_hi: "'grid-auto-columns' प्रॉपर्टी का क्या प्रभाव होता है?",
    options_en: [
      "Sets size for implicit columns",
      "Sets size for explicit columns",
      "Sets gap between columns",
      "Sets size for rows"
    ],
    options_hi: [
      "अप्रत्यक्ष कॉलम्स का आकार सेट करता है",
      "स्पष्ट कॉलम्स का आकार सेट करता है",
      "कॉलम्स के बीच गैप सेट करता है",
      "पंक्तियों का आकार सेट करता है"
    ],
    answer_en: "Sets size for implicit columns",
    answer_hi: "अप्रत्यक्ष कॉलम्स का आकार सेट करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which property can be used to name multiple grid areas in one declaration?",
    question_hi: "एक डिक्लेरेशन में कई ग्रिड क्षेत्रों को नामित करने के लिए कौन-सी प्रॉपर्टी का उपयोग किया जा सकता है?",
    options_en: ["grid-template-areas", "grid-area", "grid-template-columns", "grid-template-rows"],
    options_hi: ["ग्रिड-टेम्प्लेट-एरियास", "ग्रिड-एरिया", "ग्रिड-टेम्प्लेट-कॉलम्स", "ग्रिड-टेम्प्लेट-रोस"],
    answer_en: "grid-template-areas",
    answer_hi: "ग्रिड-टेम्प्लेट-एरियास",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which CSS unit represents the fraction of the available space in grid?",
    question_hi: "ग्रिड में उपलब्ध स्थान के हिस्से को कौन-सी CSS यूनिट दर्शाती है?",
    options_en: ["fr", "px", "em", "%"],
    options_hi: ["fr", "px", "em", "%"],
    answer_en: "fr",
    answer_hi: "fr",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "How do you span a grid item across 2 rows?",
    question_hi: "आप एक ग्रिड आइटम को 2 पंक्तियों तक कैसे फैलाते हैं?",
    options_en: ["grid-row: span 2;", "grid-column: span 2;", "grid-area: span 2;", "grid-row-start: 2;"],
    options_hi: ["ग्रिड-रो: स्पैन 2;", "ग्रिड-कॉलम: स्पैन 2;", "ग्रिड-एरिया: स्पैन 2;", "ग्रिड-रो-स्टार्ट: 2;"],
    answer_en: "grid-row: span 2;",
    answer_hi: "ग्रिड-रो: स्पैन 2;",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which property controls the alignment of the entire grid container on the column axis?",
    question_hi: "कौन-सी प्रॉपर्टी कॉलम अक्ष पर पूरे ग्रिड कंटेनर का संरेखण नियंत्रित करती है?",
    options_en: ["justify-content", "align-content", "justify-items", "align-items"],
    options_hi: ["जस्टिफाई-कंटेंट", "अलाइन-कंटेंट", "जस्टिफाई-आइटम्स", "अलाइन-आइटम्स"],
    answer_en: "justify-content",
    answer_hi: "जस्टिफाई-कंटेंट",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "What does 'grid-template-rows: auto 100px 1fr' specify?",
    question_hi: "'grid-template-rows: auto 100px 1fr' क्या निर्दिष्ट करता है?",
    options_en: [
      "Three rows with heights auto, 100px and fraction unit",
      "Three columns with specified widths",
      "Grid gaps for rows",
      "Grid areas layout"
    ],
    options_hi: [
      "तीन पंक्तियाँ जिनकी ऊँचाई auto, 100px और फ्रैक्शन यूनिट है",
      "तीन कॉलम जिनकी चौड़ाई निर्दिष्ट है",
      "पंक्तियों के लिए ग्रिड गैप्स",
      "ग्रिड क्षेत्रों का लेआउट"
    ],
    answer_en: "Three rows with heights auto, 100px and fraction unit",
    answer_hi: "तीन पंक्तियाँ जिनकी ऊँचाई auto, 100px और फ्रैक्शन यूनिट है",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "How do you create a grid container in CSS?",
    question_hi: "CSS में ग्रिड कंटेनर कैसे बनाते हैं?",
    options_en: ["display: grid;", "display: flex;", "display: block;", "display: inline-grid;"],
    options_hi: ["display: grid;", "display: flex;", "display: block;", "display: inline-grid;"],
    answer_en: "display: grid;",
    answer_hi: "display: grid;",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which property sets the minimum size of a grid track?",
    question_hi: "कौन-सी प्रॉपर्टी ग्रिड ट्रैक का न्यूनतम आकार सेट करती है?",
    options_en: ["minmax()", "min-width", "min-height", "grid-auto-columns"],
    options_hi: ["minmax()", "min-width", "min-height", "grid-auto-columns"],
    answer_en: "minmax()",
    answer_hi: "minmax()",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which property specifies the size of implicit grid columns?",
    question_hi: "कौन-सी प्रॉपर्टी अप्रत्यक्ष ग्रिड कॉलम्स का आकार निर्दिष्ट करती है?",
    options_en: ["grid-auto-columns", "grid-auto-rows", "grid-template-columns", "grid-template-rows"],
    options_hi: ["ग्रिड-ऑटो-कॉलम्स", "ग्रिड-ऑटो-रोस", "ग्रिड-टेम्प्लेट-कॉलम्स", "ग्रिड-टेम्प्लेट-रोस"],
    answer_en: "grid-auto-columns",
    answer_hi: "ग्रिड-ऑटो-कॉलम्स",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "What value of 'grid-auto-flow' causes grid items to fill by column?",
    question_hi: "'grid-auto-flow' का कौन-सा मान आइटम्स को कॉलम अनुसार भरने के लिए होता है?",
    options_en: ["column", "row", "dense", "auto"],
    options_hi: ["कॉलम", "रो", "डेंस", "ऑटो"],
    answer_en: "column",
    answer_hi: "कॉलम",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which property allows a grid item to be placed in multiple areas?",
    question_hi: "कौन-सी प्रॉपर्टी एक ग्रिड आइटम को कई क्षेत्रों में रखने की अनुमति देती है?",
    options_en: ["grid-area", "grid-column-start", "grid-row-start", "grid-column-end"],
    options_hi: ["ग्रिड-एरिया", "ग्रिड-कॉलम-स्टार्ट", "ग्रिड-रो-स्टार्ट", "ग्रिड-कॉलम-एंड"],
    answer_en: "grid-area",
    answer_hi: "ग्रिड-एरिया",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "How do you define a 4 by 3 grid using grid-template-columns and grid-template-rows?",
    question_hi: "ग्रिड-टेम्प्लेट-कॉलम्स और ग्रिड-टेम्प्लेट-रोस का उपयोग करके 4 x 3 ग्रिड कैसे परिभाषित करते हैं?",
    options_en: [
      "grid-template-columns: repeat(4, 1fr); grid-template-rows: repeat(3, 1fr);",
      "grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(4, 1fr);",
      "grid-columns: 4; grid-rows: 3;",
      "grid-columns: 3; grid-rows: 4;"
    ],
    options_hi: [
      "grid-template-columns: repeat(4, 1fr); grid-template-rows: repeat(3, 1fr);",
      "grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(4, 1fr);",
      "grid-columns: 4; grid-rows: 3;",
      "grid-columns: 3; grid-rows: 4;"
    ],
    answer_en: "grid-template-columns: repeat(4, 1fr); grid-template-rows: repeat(3, 1fr);",
    answer_hi: "grid-template-columns: repeat(4, 1fr); grid-template-rows: repeat(3, 1fr);",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "What does 'justify-self: stretch' do for a grid item?",
    question_hi: "'justify-self: stretch' ग्रिड आइटम के लिए क्या करता है?",
    options_en: [
      "Makes the item stretch to fill its grid cell horizontally",
      "Aligns item to the start of the cell",
      "Centers item in the cell",
      "Makes item smaller"
    ],
    options_hi: [
      "आइटम को उसके ग्रिड सेल के क्षैतिज रूप से भरने के लिए फैलाता है",
      "आइटम को सेल की शुरुआत पर संरेखित करता है",
      "आइटम को सेल के केंद्र में रखता है",
      "आइटम को छोटा करता है"
    ],
    answer_en: "Makes the item stretch to fill its grid cell horizontally",
    answer_hi: "आइटम को उसके ग्रिड सेल के क्षैतिज रूप से भरने के लिए फैलाता है",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which property controls the vertical alignment of grid items inside their cells?",
    question_hi: "ग्रिड आइटम्स के सेल्स के अंदर लंबवत संरेखण कौन-सी प्रॉपर्टी नियंत्रित करती है?",
    options_en: ["align-self", "justify-self", "align-items", "justify-items"],
    options_hi: ["अलाइन-सेल्फ", "जस्टिफाई-सेल्फ", "अलाइन-आइटम्स", "जस्टिफाई-आइटम्स"],
    answer_en: "align-self",
    answer_hi: "अलाइन-सेल्फ",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "What value of 'grid-template-columns' creates three columns of equal width?",
    question_hi: "'grid-template-columns' का कौन-सा मान तीन बराबर चौड़ाई वाले कॉलम बनाता है?",
    options_en: ["repeat(3, 1fr)", "auto auto auto", "100px 100px 100px", "1fr 2fr 1fr"],
    options_hi: ["repeat(3, 1fr)", "auto auto auto", "100px 100px 100px", "1fr 2fr 1fr"],
    answer_en: "repeat(3, 1fr)",
    answer_hi: "repeat(3, 1fr)",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which property specifies how the grid auto-placement algorithm works?",
    question_hi: "कौन-सी प्रॉपर्टी ग्रिड ऑटो-प्लेसमेंट एल्गोरिदम को नियंत्रित करती है?",
    options_en: ["grid-auto-flow", "grid-auto-columns", "grid-auto-rows", "grid-gap"],
    options_hi: ["ग्रिड-ऑटो-फ्लो", "ग्रिड-ऑटो-कॉलम्स", "ग्रिड-ऑटो-रोस", "ग्रिड-गैप"],
    answer_en: "grid-auto-flow",
    answer_hi: "ग्रिड-ऑटो-फ्लो",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "How do you define named grid areas for layout?",
    question_hi: "लेआउट के लिए नामित ग्रिड क्षेत्र कैसे परिभाषित करते हैं?",
    options_en: ["Using grid-template-areas", "Using grid-area", "Using grid-gap", "Using grid-auto-flow"],
    options_hi: ["ग्रिड-टेम्प्लेट-एरियास का उपयोग करके", "ग्रिड-एरिया का उपयोग करके", "ग्रिड-गैप का उपयोग करके", "ग्रिड-ऑटो-फ्लो का उपयोग करके"],
    answer_en: "Using grid-template-areas",
    answer_hi: "ग्रिड-टेम्प्लेट-एरियास का उपयोग करके",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which property controls the horizontal alignment of grid items inside their cells?",
    question_hi: "ग्रिड आइटम्स के सेल्स के अंदर क्षैतिज संरेखण कौन-सी प्रॉपर्टी नियंत्रित करती है?",
    options_en: ["justify-self", "align-self", "justify-items", "align-items"],
    options_hi: ["जस्टिफाई-सेल्फ", "अलाइन-सेल्फ", "जस्टिफाई-आइटम्स", "अलाइन-आइटम्स"],
    answer_en: "justify-self",
    answer_hi: "जस्टिफाई-सेल्फ",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "What is the purpose of 'grid-template-areas'?",
    question_hi: "'grid-template-areas' का उद्देश्य क्या है?",
    options_en: [
      "To define named areas for grid layout",
      "To set column widths",
      "To set row heights",
      "To define gaps between grid items"
    ],
    options_hi: [
      "ग्रिड लेआउट के लिए नामित क्षेत्र परिभाषित करना",
      "कॉलम चौड़ाई सेट करना",
      "पंक्ति ऊँचाई सेट करना",
      "ग्रिड आइटम्स के बीच गैप परिभाषित करना"
    ],
    answer_en: "To define named areas for grid layout",
    answer_hi: "ग्रिड लेआउट के लिए नामित क्षेत्र परिभाषित करना",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which property sets the size of a grid column?",
    question_hi: "कौन-सी प्रॉपर्टी ग्रिड कॉलम का आकार सेट करती है?",
    options_en: ["grid-template-columns", "grid-template-rows", "grid-auto-columns", "grid-auto-rows"],
    options_hi: ["ग्रिड-टेम्प्लेट-कॉलम्स", "ग्रिड-टेम्प्लेट-रोस", "ग्रिड-ऑटो-कॉलम्स", "ग्रिड-ऑटो-रोस"],
    answer_en: "grid-template-columns",
    answer_hi: "ग्रिड-टेम्प्लेट-कॉलम्स",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which property is used to control gaps between grid columns?",
    question_hi: "ग्रिड कॉलम्स के बीच गैप को नियंत्रित करने के लिए कौन-सी प्रॉपर्टी उपयोग की जाती है?",
    options_en: ["grid-column-gap", "grid-row-gap", "grid-gap", "gap"],
    options_hi: ["ग्रिड-कॉलम-गैप", "ग्रिड-रो-गैप", "ग्रिड-गैप", "गैप"],
    answer_en: "grid-column-gap",
    answer_hi: "ग्रिड-कॉलम-गैप",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "What does 'grid-row-start: 2;' do?",
    question_hi: "'grid-row-start: 2;' क्या करता है?",
    options_en: [
      "Positions the grid item to start on the second row",
      "Positions the grid item to end on the second row",
      "Positions the grid item to span two rows",
      "Positions the grid item on the first row"
    ],
    options_hi: [
      "ग्रिड आइटम को दूसरी पंक्ति पर शुरू करता है",
      "ग्रिड आइटम को दूसरी पंक्ति पर समाप्त करता है",
      "ग्रिड आइटम को दो पंक्तियों तक फैलाता है",
      "ग्रिड आइटम को पहली पंक्ति पर रखता है"
    ],
    answer_en: "Positions the grid item to start on the second row",
    answer_hi: "ग्रिड आइटम को दूसरी पंक्ति पर शुरू करता है",
    attempted: false,
    selected: ""
  }
  ],
     8:[
        {
    num: 1,
    question_en: "What are the four parts of the CSS Box Model?",
    question_hi: "CSS बॉक्स मॉडल के चार भाग कौन-कौन से हैं?",
    options_en: ["Content, Padding, Border, Margin", "Text, Border, Padding, Margin", "Content, Text, Border, Margin", "Padding, Margin, Border, Font"],
    options_hi: ["कंटेंट, पैडिंग, बॉर्डर, मार्जिन", "टेक्स्ट, बॉर्डर, पैडिंग, मार्जिन", "कंटेंट, टेक्स्ट, बॉर्डर, मार्जिन", "पैडिंग, मार्जिन, बॉर्डर, फ़ॉन्ट"],
    answer_en: "Content, Padding, Border, Margin",
    answer_hi: "कंटेंट, पैडिंग, बॉर्डर, मार्जिन",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which part of the Box Model is used to create space inside the element, between the content and the border?",
    question_hi: "बॉक्स मॉडल का कौन सा भाग एलिमेंट के अंदर कंटेंट और बॉर्डर के बीच जगह बनाता है?",
    options_en: ["Padding", "Margin", "Border", "Content"],
    options_hi: ["पैडिंग", "मार्जिन", "बॉर्डर", "कंटेंट"],
    answer_en: "Padding",
    answer_hi: "पैडिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which part of the Box Model creates space outside the border?",
    question_hi: "बॉक्स मॉडल का कौन सा भाग बॉर्डर के बाहर जगह बनाता है?",
    options_en: ["Margin", "Padding", "Content", "Border"],
    options_hi: ["मार्जिन", "पैडिंग", "कंटेंट", "बॉर्डर"],
    answer_en: "Margin",
    answer_hi: "मार्जिन",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which property sets the thickness of the border in the Box Model?",
    question_hi: "बॉक्स मॉडल में बॉर्डर की मोटाई किस प्रॉपर्टी से सेट होती है?",
    options_en: ["border-width", "border-style", "border-color", "border-radius"],
    options_hi: ["बॉर्डर-विथ", "बॉर्डर-स्टाइल", "बॉर्डर-कलर", "बॉर्डर-रेडियस"],
    answer_en: "border-width",
    answer_hi: "बॉर्डर-विथ",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "What is the default value of the 'box-sizing' property?",
    question_hi: "'box-sizing' प्रॉपर्टी का डिफ़ॉल्ट मान क्या है?",
    options_en: ["content-box", "border-box", "padding-box", "margin-box"],
    options_hi: ["कंटेंट-बॉक्स", "बॉर्डर-बॉक्स", "पैडिंग-बॉक्स", "मार्जिन-बॉक्स"],
    answer_en: "content-box",
    answer_hi: "कंटेंट-बॉक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which CSS property controls the space between the border and the content?",
    question_hi: "कौन सी CSS प्रॉपर्टी बॉर्डर और कंटेंट के बीच जगह को नियंत्रित करती है?",
    options_en: ["padding", "margin", "border-spacing", "spacing"],
    options_hi: ["पैडिंग", "मार्जिन", "बॉर्डर-स्पेसिंग", "स्पेसिंग"],
    answer_en: "padding",
    answer_hi: "पैडिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "How can you make the width and height include padding and border using box-sizing?",
    question_hi: "आप बॉक्स-साइजिंग का उपयोग करके कैसे चौड़ाई और ऊँचाई में पैडिंग और बॉर्डर शामिल कर सकते हैं?",
    options_en: ["Set box-sizing to border-box", "Set box-sizing to content-box", "Set width and height manually", "Use margin property"],
    options_hi: ["box-sizing को border-box पर सेट करें", "box-sizing को content-box पर सेट करें", "चौड़ाई और ऊँचाई मैन्युअली सेट करें", "मार्जिन प्रॉपर्टी का उपयोग करें"],
    answer_en: "Set box-sizing to border-box",
    answer_hi: "box-sizing को border-box पर सेट करें",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which property is used to add space outside the element’s border?",
    question_hi: "एलिमेंट के बॉर्डर के बाहर जगह जोड़ने के लिए कौन सी प्रॉपर्टी का उपयोग होता है?",
    options_en: ["margin", "padding", "border", "outline"],
    options_hi: ["मार्जिन", "पैडिंग", "बॉर्डर", "आउटलाइन"],
    answer_en: "margin",
    answer_hi: "मार्जिन",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "If you want to add a red border of 2px thickness around an element, which CSS property would you use?",
    question_hi: "अगर आप किसी एलिमेंट के चारों ओर 2px मोटी लाल बॉर्डर जोड़ना चाहते हैं तो कौन सी CSS प्रॉपर्टी उपयोग करेंगे?",
    options_en: ["border: 2px solid red", "border-width: 2px red solid", "border-color: 2px red solid", "border-style: 2px red solid"],
    options_hi: ["border: 2px solid red", "border-width: 2px red solid", "border-color: 2px red solid", "border-style: 2px red solid"],
    answer_en: "border: 2px solid red",
    answer_hi: "border: 2px solid red",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which property defines the inner content area size of the box?",
    question_hi: "कौन सी प्रॉपर्टी बॉक्स के अंदर कंटेंट एरिया का आकार निर्धारित करती है?",
    options_en: ["width and height", "padding", "margin", "border"],
    options_hi: ["चौड़ाई और ऊँचाई", "पैडिंग", "मार्जिन", "बॉर्डर"],
    answer_en: "width and height",
    answer_hi: "चौड़ाई और ऊँचाई",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which of the following is NOT part of the CSS Box Model?",
    question_hi: "निम्नलिखित में से कौन CSS बॉक्स मॉडल का हिस्सा नहीं है?",
    options_en: ["Text", "Padding", "Margin", "Border"],
    options_hi: ["टेक्स्ट", "पैडिंग", "मार्जिन", "बॉर्डर"],
    answer_en: "Text",
    answer_hi: "टेक्स्ट",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "What happens when you set 'box-sizing: border-box'?",
    question_hi: "'box-sizing: border-box' सेट करने पर क्या होता है?",
    options_en: ["Padding and border are included in width and height", "Padding and border are excluded from width and height", "Only border is included", "Only padding is included"],
    options_hi: ["पैडिंग और बॉर्डर चौड़ाई और ऊँचाई में शामिल होते हैं", "पैडिंग और बॉर्डर चौड़ाई और ऊँचाई से बाहर होते हैं", "केवल बॉर्डर शामिल होता है", "केवल पैडिंग शामिल होती है"],
    answer_en: "Padding and border are included in width and height",
    answer_hi: "पैडिंग और बॉर्डर चौड़ाई और ऊँचाई में शामिल होते हैं",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "How do you create space between adjacent elements using the Box Model?",
    question_hi: "बॉक्स मॉडल का उपयोग करके आसन्न एलिमेंट्स के बीच जगह कैसे बनाते हैं?",
    options_en: ["Using margin", "Using padding", "Using border", "Using content"],
    options_hi: ["मार्जिन का उपयोग करके", "पैडिंग का उपयोग करके", "बॉर्डर का उपयोग करके", "कंटेंट का उपयोग करके"],
    answer_en: "Using margin",
    answer_hi: "मार्जिन का उपयोग करके",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which property can change the style of the border (solid, dotted, dashed)?",
    question_hi: "कौन सी प्रॉपर्टी बॉर्डर की स्टाइल (सॉलिड, डॉटेड, डैश्ड) बदल सकती है?",
    options_en: ["border-style", "border-width", "border-color", "border-radius"],
    options_hi: ["बॉर्डर-स्टाइल", "बॉर्डर-विथ", "बॉर्डर-कलर", "बॉर्डर-रेडियस"],
    answer_en: "border-style",
    answer_hi: "बॉर्डर-स्टाइल",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "What is the effect of setting margin to 'auto' on a block element?",
    question_hi: "ब्लॉक एलिमेंट पर मार्जिन को 'auto' सेट करने का क्या प्रभाव होता है?",
    options_en: ["Centers the element horizontally", "Aligns element to left", "Aligns element to right", "Removes margin"],
    options_hi: ["एलिमेंट को क्षैतिज रूप से केंद्रित करता है", "एलिमेंट को बाएँ संरेखित करता है", "एलिमेंट को दाएँ संरेखित करता है", "मार्जिन हटाता है"],
    answer_en: "Centers the element horizontally",
    answer_hi: "एलिमेंट को क्षैतिज रूप से केंद्रित करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which property controls the color of the border?",
    question_hi: "कौन सी प्रॉपर्टी बॉर्डर का रंग नियंत्रित करती है?",
    options_en: ["border-color", "border-style", "border-width", "background-color"],
    options_hi: ["बॉर्डर-कलर", "बॉर्डर-स्टाइल", "बॉर्डर-विथ", "बैकग्राउंड-कलर"],
    answer_en: "border-color",
    answer_hi: "बॉर्डर-कलर",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "What is the unit of measurement for margin and padding?",
    question_hi: "मार्जिन और पैडिंग के लिए माप की इकाई क्या है?",
    options_en: ["px, %, em, rem", "only px", "only %", "only em"],
    options_hi: ["px, %, em, rem", "केवल px", "केवल %", "केवल em"],
    answer_en: "px, %, em, rem",
    answer_hi: "px, %, em, rem",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which CSS property can be used to add rounded corners to a box?",
    question_hi: "बॉक्स के कोनों को गोल बनाने के लिए कौन सी CSS प्रॉपर्टी इस्तेमाल होती है?",
    options_en: ["border-radius", "border-style", "border-width", "box-shadow"],
    options_hi: ["बॉर्डर-रेडियस", "बॉर्डर-स्टाइल", "बॉर्डर-विथ", "बॉक्स-शैडो"],
    answer_en: "border-radius",
    answer_hi: "बॉर्डर-रेडियस",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "What does the 'outline' property do?",
    question_hi: "'outline' प्रॉपर्टी क्या करती है?",
    options_en: ["Adds a line outside the border", "Adds space inside the box", "Changes the box size", "Changes content color"],
    options_hi: ["बॉर्डर के बाहर एक लाइन जोड़ती है", "बॉक्स के अंदर जगह जोड़ती है", "बॉक्स का आकार बदलती है", "कंटेंट का रंग बदलती है"],
    answer_en: "Adds a line outside the border",
    answer_hi: "बॉर्डर के बाहर एक लाइन जोड़ती है",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which property can control the shadow effect of a box?",
    question_hi: "कौन सी प्रॉपर्टी बॉक्स के छाया प्रभाव को नियंत्रित करती है?",
    options_en: ["box-shadow", "text-shadow", "border-shadow", "shadow"],
    options_hi: ["बॉक्स-शैडो", "टेक्स्ट-शैडो", "बॉर्डर-शैडो", "शैडो"],
    answer_en: "box-shadow",
    answer_hi: "बॉक्स-शैडो",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which property can control the minimum width and height of a box?",
    question_hi: "कौन सी प्रॉपर्टी बॉक्स की न्यूनतम चौड़ाई और ऊँचाई को नियंत्रित करती है?",
    options_en: ["min-width and min-height", "max-width and max-height", "width and height", "padding"],
    options_hi: ["मिन-विथ और मिन-हाइट", "मैक्स-विथ और मैक्स-हाइट", "विथ और हाइट", "पैडिंग"],
    answer_en: "min-width and min-height",
    answer_hi: "मिन-विथ और मिन-हाइट",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "What is the difference between margin and padding?",
    question_hi: "मार्जिन और पैडिंग में क्या अंतर है?",
    options_en: ["Margin is outside the border; Padding is inside the border", "Margin is inside the border; Padding is outside the border", "Both are inside the content", "Both are outside the border"],
    options_hi: ["मार्जिन बॉर्डर के बाहर होता है; पैडिंग बॉर्डर के अंदर होता है", "मार्जिन बॉर्डर के अंदर होता है; पैडिंग बॉर्डर के बाहर होता है", "दोनों कंटेंट के अंदर होते हैं", "दोनों बॉर्डर के बाहर होते हैं"],
    answer_en: "Margin is outside the border; Padding is inside the border",
    answer_hi: "मार्जिन बॉर्डर के बाहर होता है; पैडिंग बॉर्डर के अंदर होता है",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which part of the box model is transparent by default?",
    question_hi: "बॉक्स मॉडल का कौन सा भाग डिफ़ॉल्ट रूप से पारदर्शी होता है?",
    options_en: ["Margin", "Padding", "Border", "Content"],
    options_hi: ["मार्जिन", "पैडिंग", "बॉर्डर", "कंटेंट"],
    answer_en: "Margin",
    answer_hi: "मार्जिन",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which property can you use to collapse the margin between two elements?",
    question_hi: "दो एलिमेंट्स के बीच मार्जिन को कैसे एकीकृत किया जा सकता है?",
    options_en: ["margin-collapse (does not exist)", "Using margin-top and margin-bottom carefully", "Using padding", "Using border"],
    options_hi: ["margin-collapse (मौजूद नहीं है)", "margin-top और margin-bottom का सावधानीपूर्वक उपयोग", "पैडिंग का उपयोग", "बॉर्डर का उपयोग"],
    answer_en: "Using margin-top and margin-bottom carefully",
    answer_hi: "margin-top और margin-bottom का सावधानीपूर्वक उपयोग",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "What is the effect of 'overflow: hidden' in the Box Model?",
    question_hi: "बॉक्स मॉडल में 'overflow: hidden' का क्या प्रभाव होता है?",
    options_en: ["Hides the content that overflows the box", "Shows scrollbar", "Increases box size", "Adds margin"],
    options_hi: ["जो कंटेंट बॉक्स से बाहर जाता है उसे छिपा देता है", "स्क्रॉलबार दिखाता है", "बॉक्स का आकार बढ़ाता है", "मार्जिन जोड़ता है"],
    answer_en: "Hides the content that overflows the box",
    answer_hi: "जो कंटेंट बॉक्स से बाहर जाता है उसे छिपा देता है",
    attempted: false,
    selected: ""
  },
   {
    num: 26,
    question_en: "Which CSS property adds space between the border and the element’s outer edge?",
    question_hi: "कौन सी CSS प्रॉपर्टी बॉर्डर और एलिमेंट के बाहरी किनारे के बीच जगह जोड़ती है?",
    options_en: ["margin", "padding", "border-spacing", "outline"],
    options_hi: ["मार्जिन", "पैडिंग", "बॉर्डर-स्पेसिंग", "आउटलाइन"],
    answer_en: "margin",
    answer_hi: "मार्जिन",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "What is the effect of setting 'padding: 10px' on an element?",
    question_hi: "'padding: 10px' सेट करने से एलिमेंट पर क्या प्रभाव होता है?",
    options_en: ["Adds 10px space inside the element around content", "Adds 10px space outside the element", "Adds 10px border", "Removes margin"],
    options_hi: ["एलिमेंट के अंदर कंटेंट के चारों ओर 10px जगह जोड़ता है", "एलिमेंट के बाहर 10px जगह जोड़ता है", "10px बॉर्डर जोड़ता है", "मार्जिन हटाता है"],
    answer_en: "Adds 10px space inside the element around content",
    answer_hi: "एलिमेंट के अंदर कंटेंट के चारों ओर 10px जगह जोड़ता है",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which property controls the transparency of the background color in the box model?",
    question_hi: "बॉक्स मॉडल में बैकग्राउंड रंग की पारदर्शिता को कौन सी प्रॉपर्टी नियंत्रित करती है?",
    options_en: ["opacity", "visibility", "background-color", "z-index"],
    options_hi: ["opacity", "visibility", "background-color", "z-index"],
    answer_en: "opacity",
    answer_hi: "opacity",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "What is the default display behavior of a box element?",
    question_hi: "एक बॉक्स एलिमेंट का डिफ़ॉल्ट डिस्प्ले व्यवहार क्या होता है?",
    options_en: ["block", "inline", "inline-block", "flex"],
    options_hi: ["ब्लॉक", "इनलाइन", "इनलाइन-ब्लॉक", "फ्लेक्स"],
    answer_en: "block",
    answer_hi: "ब्लॉक",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which CSS property can you use to change the space between the content and the border?",
    question_hi: "किस CSS प्रॉपर्टी से कंटेंट और बॉर्डर के बीच की जगह बदली जा सकती है?",
    options_en: ["padding", "margin", "border-width", "border-style"],
    options_hi: ["पैडिंग", "मार्जिन", "बॉर्डर-विथ", "बॉर्डर-स्टाइल"],
    answer_en: "padding",
    answer_hi: "पैडिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "How do you make the margin of an element collapse with the margin of another element?",
    question_hi: "किस तरह आप एक एलिमेंट का मार्जिन दूसरे एलिमेंट के मार्जिन के साथ मिलाते हैं?",
    options_en: ["By placing elements vertically adjacent", "By setting margin to zero", "By using padding", "By adding border"],
    options_hi: ["एलिमेंट्स को ऊर्ध्वाधर रूप से एक-दूसरे के करीब रखने से", "मार्जिन को ज़ीरो सेट करके", "पैडिंग का उपयोग करके", "बॉर्डर जोड़कर"],
    answer_en: "By placing elements vertically adjacent",
    answer_hi: "एलिमेंट्स को ऊर्ध्वाधर रूप से एक-दूसरे के करीब रखने से",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which property can override the element’s margin collapsing?",
    question_hi: "कौन सी प्रॉपर्टी एलिमेंट के मार्जिन को एकीकृत होने से रोक सकती है?",
    options_en: ["border", "padding", "overflow", "display"],
    options_hi: ["बॉर्डर", "पैडिंग", "ओवरफ़्लो", "डिस्प्ले"],
    answer_en: "overflow",
    answer_hi: "ओवरफ़्लो",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "What is the purpose of the 'outline' property in CSS?",
    question_hi: "CSS में 'outline' प्रॉपर्टी का उद्देश्य क्या है?",
    options_en: ["Draws a line outside the border", "Creates padding", "Adds margin", "Sets background color"],
    options_hi: ["बॉर्डर के बाहर एक लाइन बनाती है", "पैडिंग बनाती है", "मार्जिन जोड़ती है", "बैकग्राउंड रंग सेट करती है"],
    answer_en: "Draws a line outside the border",
    answer_hi: "बॉर्डर के बाहर एक लाइन बनाती है",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which property can be used to set the border color of a box?",
    question_hi: "किस प्रॉपर्टी से बॉक्स का बॉर्डर रंग सेट किया जाता है?",
    options_en: ["border-color", "color", "background-color", "border-style"],
    options_hi: ["बॉर्डर-कलर", "कलर", "बैकग्राउंड-कलर", "बॉर्डर-स्टाइल"],
    answer_en: "border-color",
    answer_hi: "बॉर्डर-कलर",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which CSS property defines how the element’s width and height are calculated?",
    question_hi: "कौन सी CSS प्रॉपर्टी निर्धारित करती है कि एलिमेंट की चौड़ाई और ऊँचाई कैसे गणना की जाती है?",
    options_en: ["box-sizing", "display", "position", "float"],
    options_hi: ["box-sizing", "डिस्प्ले", "पोजीशन", "फ्लोट"],
    answer_en: "box-sizing",
    answer_hi: "box-sizing",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "If an element has 'box-sizing: content-box', what does the width property apply to?",
    question_hi: "अगर किसी एलिमेंट पर 'box-sizing: content-box' है, तो width प्रॉपर्टी किस पर लागू होती है?",
    options_en: ["Only content area", "Content + padding + border", "Only padding", "Only border"],
    options_hi: ["केवल कंटेंट क्षेत्र", "कंटेंट + पैडिंग + बॉर्डर", "केवल पैडिंग", "केवल बॉर्डर"],
    answer_en: "Only content area",
    answer_hi: "केवल कंटेंट क्षेत्र",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "What effect does adding padding have on the total size of an element when box-sizing is content-box?",
    question_hi: "जब box-sizing content-box होता है, तो पैडिंग जोड़ने से एलिमेंट के कुल आकार पर क्या प्रभाव पड़ता है?",
    options_en: ["Increases total size", "Decreases total size", "No effect", "Sets size to zero"],
    options_hi: ["कुल आकार बढ़ता है", "कुल आकार घटता है", "कोई प्रभाव नहीं", "आकार शून्य हो जाता है"],
    answer_en: "Increases total size",
    answer_hi: "कुल आकार बढ़ता है",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which property adds space inside an element but outside its content area?",
    question_hi: "कौन सी प्रॉपर्टी एलिमेंट के अंदर लेकिन कंटेंट क्षेत्र के बाहर जगह जोड़ती है?",
    options_en: ["padding", "margin", "border", "outline"],
    options_hi: ["पैडिंग", "मार्जिन", "बॉर्डर", "आउटलाइन"],
    answer_en: "padding",
    answer_hi: "पैडिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which part of the box model is transparent by default and does not have any color?",
    question_hi: "बॉक्स मॉडल का कौन सा भाग डिफ़ॉल्ट रूप से पारदर्शी होता है और उसका कोई रंग नहीं होता?",
    options_en: ["Margin", "Border", "Padding", "Content"],
    options_hi: ["मार्जिन", "बॉर्डर", "पैडिंग", "कंटेंट"],
    answer_en: "Margin",
    answer_hi: "मार्जिन",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "What is the CSS shorthand property for setting all four margins at once?",
    question_hi: "चारों मार्जिन को एक साथ सेट करने के लिए CSS शॉर्टहैंड प्रॉपर्टी कौन सी है?",
    options_en: ["margin", "padding", "border", "outline"],
    options_hi: ["मार्जिन", "पैडिंग", "बॉर्डर", "आउटलाइन"],
    answer_en: "margin",
    answer_hi: "मार्जिन",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which property controls the space between table cells?",
    question_hi: "टेबल सेल्स के बीच जगह को कौन सी प्रॉपर्टी नियंत्रित करती है?",
    options_en: ["border-spacing", "padding", "margin", "border-collapse"],
    options_hi: ["बॉर्डर-स्पेसिंग", "पैडिंग", "मार्जिन", "बॉर्डर-कोलैप्स"],
    answer_en: "border-spacing",
    answer_hi: "बॉर्डर-स्पेसिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which property can be used to prevent margin collapse between two adjacent elements?",
    question_hi: "दो आसन्न एलिमेंट्स के बीच मार्जिन को कोलैप्स होने से रोकने के लिए कौन सी प्रॉपर्टी का उपयोग किया जा सकता है?",
    options_en: ["overflow: hidden", "margin: 0", "padding: 0", "border: none"],
    options_hi: ["overflow: hidden", "margin: 0", "padding: 0", "border: none"],
    answer_en: "overflow: hidden",
    answer_hi: "overflow: hidden",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "What does the 'content-box' value mean for box-sizing?",
    question_hi: "'content-box' का box-sizing के लिए क्या मतलब होता है?",
    options_en: ["Width and height include only content", "Width and height include content, padding, border", "Width includes padding only", "Height includes border only"],
    options_hi: ["चौड़ाई और ऊँचाई केवल कंटेंट शामिल करते हैं", "चौड़ाई और ऊँचाई कंटेंट, पैडिंग, बॉर्डर शामिल करते हैं", "चौड़ाई केवल पैडिंग शामिल करती है", "ऊँचाई केवल बॉर्डर शामिल करती है"],
    answer_en: "Width and height include only content",
    answer_hi: "चौड़ाई और ऊँचाई केवल कंटेंट शामिल करते हैं",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "How does the 'border-box' value affect the size of an element?",
    question_hi: "'border-box' वैल्यू एलिमेंट के आकार को कैसे प्रभावित करती है?",
    options_en: ["Width and height include padding and border", "Width and height exclude padding and border", "Width includes padding only", "Height excludes border"],
    options_hi: ["चौड़ाई और ऊँचाई में पैडिंग और बॉर्डर शामिल होते हैं", "चौड़ाई और ऊँचाई में पैडिंग और बॉर्डर शामिल नहीं होते", "चौड़ाई में केवल पैडिंग शामिल होता है", "ऊँचाई में बॉर्डर शामिल नहीं होता"],
    answer_en: "Width and height include padding and border",
    answer_hi: "चौड़ाई और ऊँचाई में पैडिंग और बॉर्डर शामिल होते हैं",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which property allows you to add shadows to the box?",
    question_hi: "कौन सी प्रॉपर्टी बॉक्स पर छाया जोड़ने की अनुमति देती है?",
    options_en: ["box-shadow", "text-shadow", "shadow", "border-shadow"],
    options_hi: ["बॉक्स-शैडो", "टेक्स्ट-शैडो", "शैडो", "बॉर्डर-शैडो"],
    answer_en: "box-shadow",
    answer_hi: "बॉक्स-शैडो",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "What is the effect of 'overflow: visible' on an element?",
    question_hi: "एलिमेंट पर 'overflow: visible' का क्या प्रभाव होता है?",
    options_en: ["Content overflowing the box is visible", "Content overflowing the box is hidden", "Scrollbar is added", "Box size increases"],
    options_hi: ["जो कंटेंट बॉक्स से बाहर जाता है वह दिखता है", "जो कंटेंट बॉक्स से बाहर जाता है वह छिपा रहता है", "स्क्रॉलबार जोड़ता है", "बॉक्स का आकार बढ़ता है"],
    answer_en: "Content overflowing the box is visible",
    answer_hi: "जो कंटेंट बॉक्स से बाहर जाता है वह दिखता है",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which CSS property sets the space between a box's border and its adjacent boxes?",
    question_hi: "कौन सी CSS प्रॉपर्टी बॉक्स के बॉर्डर और उसके आस-पास के बॉक्स के बीच की जगह सेट करती है?",
    options_en: ["margin", "padding", "border-spacing", "outline"],
    options_hi: ["मार्जिन", "पैडिंग", "बॉर्डर-स्पेसिंग", "आउटलाइन"],
    answer_en: "margin",
    answer_hi: "मार्जिन",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "What does the CSS property 'box-sizing: inherit' do?",
    question_hi: "'box-sizing: inherit' CSS प्रॉपर्टी क्या करती है?",
    options_en: ["Inherits the box-sizing value from the parent", "Resets box-sizing to default", "Sets box-sizing to content-box", "Sets box-sizing to border-box"],
    options_hi: ["पेरेंट से box-sizing मान को विरासत में लेता है", "box-sizing को डिफ़ॉल्ट पर रीसेट करता है", "box-sizing को content-box पर सेट करता है", "box-sizing को border-box पर सेट करता है"],
    answer_en: "Inherits the box-sizing value from the parent",
    answer_hi: "पेरेंट से box-sizing मान को विरासत में लेता है",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which of the following affects the space outside the border but inside the parent container?",
    question_hi: "निम्नलिखित में से कौन बॉर्डर के बाहर लेकिन पेरेंट कंटेनर के अंदर की जगह को प्रभावित करता है?",
    options_en: ["margin", "padding", "border", "content"],
    options_hi: ["मार्जिन", "पैडिंग", "बॉर्डर", "कंटेंट"],
    answer_en: "margin",
    answer_hi: "मार्जिन",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which property controls the thickness of the box border?",
    question_hi: "कौन सी प्रॉपर्टी बॉक्स के बॉर्डर की मोटाई नियंत्रित करती है?",
    options_en: ["border-width", "border-style", "border-color", "border-radius"],
    options_hi: ["बॉर्डर-विथ", "बॉर्डर-स्टाइल", "बॉर्डर-कलर", "बॉर्डर-रेडियस"],
    answer_en: "border-width",
    answer_hi: "बॉर्डर-विथ",
    attempted: false,
    selected: ""
  }
     ],
     9:[
      {
    num: 1,
    question_en: "Which CSS property controls the stacking order of elements?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एलिमेंट्स के स्टैकिंग क्रम को नियंत्रित करती है?",
    options_en: ["z-index", "position", "stack", "order"],
    options_hi: ["z-इंडेक्स", "स्थिति (position)", "स्टैक (stack)", "क्रम (order)"],
    answer_en: "z-index",
    answer_hi: "z-इंडेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which property is used to change the background color of an element?",
    question_hi: "किस प्रॉपर्टी का उपयोग एलिमेंट के पृष्ठभूमि रंग को बदलने के लिए किया जाता है?",
    options_en: ["background-color", "color", "background-image", "border-color"],
    options_hi: ["पृष्ठभूमि रंग", "रंग", "पृष्ठभूमि छवि", "बॉर्डर रंग"],
    answer_en: "background-color",
    answer_hi: "पृष्ठभूमि रंग",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which CSS property controls the text size?",
    question_hi: "कौन-सी CSS प्रॉपर्टी टेक्स्ट का आकार नियंत्रित करती है?",
    options_en: ["font-size", "text-size", "font-style", "text-style"],
    options_hi: ["फ़ॉन्ट आकार", "टेक्स्ट आकार", "फ़ॉन्ट शैली", "टेक्स्ट शैली"],
    answer_en: "font-size",
    answer_hi: "फ़ॉन्ट आकार",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which CSS property is used to change the font of an element?",
    question_hi: "किस CSS प्रॉपर्टी का उपयोग एलिमेंट के फ़ॉन्ट को बदलने के लिए किया जाता है?",
    options_en: ["font-family", "font-style", "font-weight", "text-transform"],
    options_hi: ["फ़ॉन्ट परिवार", "फ़ॉन्ट शैली", "फ़ॉन्ट मोटाई", "टेक्स्ट ट्रांसफॉर्म"],
    answer_en: "font-family",
    answer_hi: "फ़ॉन्ट परिवार",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which property sets the outer margin of an element?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट का बाहरी मार्जिन सेट करती है?",
    options_en: ["margin", "padding", "border", "outline"],
    options_hi: ["मार्जिन", "पैडिंग", "बॉर्डर", "आउटलाइन"],
    answer_en: "margin",
    answer_hi: "मार्जिन",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which CSS property is used to control the space inside the element’s border?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एलिमेंट के बॉर्डर के अंदर का स्पेस नियंत्रित करती है?",
    options_en: ["padding", "margin", "border-spacing", "spacing"],
    options_hi: ["पैडिंग", "मार्जिन", "बॉर्डर स्पेसिंग", "स्पेसिंग"],
    answer_en: "padding",
    answer_hi: "पैडिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which property is used to hide an element but keep its space on the page?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट को छुपाती है लेकिन उसकी जगह बनाए रखती है?",
    options_en: ["visibility", "display", "opacity", "hidden"],
    options_hi: ["दृश्यता", "प्रदर्शन", "अपारदर्शिता", "छुपा हुआ"],
    answer_en: "visibility",
    answer_hi: "दृश्यता",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which property removes an element completely from the page layout?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट को पूरी तरह से पेज लेआउट से हटा देती है?",
    options_en: ["display", "visibility", "opacity", "position"],
    options_hi: ["प्रदर्शन", "दृश्यता", "अपारदर्शिता", "स्थिति"],
    answer_en: "display",
    answer_hi: "प्रदर्शन",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which CSS property is used to make text bold?",
    question_hi: "कौन-सी CSS प्रॉपर्टी टेक्स्ट को बोल्ड बनाने के लिए उपयोग होती है?",
    options_en: ["font-weight", "font-style", "text-decoration", "text-transform"],
    options_hi: ["फ़ॉन्ट मोटाई", "फ़ॉन्ट शैली", "टेक्स्ट सजावट", "टेक्स्ट ट्रांसफॉर्म"],
    answer_en: "font-weight",
    answer_hi: "फ़ॉन्ट मोटाई",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which CSS property is used to set the transparency of an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एलिमेंट की पारदर्शिता सेट करती है?",
    options_en: ["opacity", "visibility", "display", "filter"],
    options_hi: ["अपारदर्शिता", "दृश्यता", "प्रदर्शन", "फिल्टर"],
    answer_en: "opacity",
    answer_hi: "अपारदर्शिता",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which CSS property controls the flow of elements inside a container?",
    question_hi: "कौन-सी CSS प्रॉपर्टी कंटेनर के अंदर एलिमेंट्स के फ्लो को नियंत्रित करती है?",
    options_en: ["float", "clear", "position", "display"],
    options_hi: ["तैरना", "साफ़ करना", "स्थिति", "प्रदर्शन"],
    answer_en: "float",
    answer_hi: "तैरना",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which property is used to clear floated elements?",
    question_hi: "कौन-सी प्रॉपर्टी फ्लोटेड एलिमेंट्स को साफ़ करने के लिए उपयोग होती है?",
    options_en: ["clear", "float", "overflow", "position"],
    options_hi: ["साफ़ करना", "तैरना", "ओवरफ्लो", "स्थिति"],
    answer_en: "clear",
    answer_hi: "साफ़ करना",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which property controls the position of an element?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट की स्थिति नियंत्रित करती है?",
    options_en: ["position", "top", "left", "right"],
    options_hi: ["स्थिति", "ऊपर", "बाएँ", "दाएँ"],
    answer_en: "position",
    answer_hi: "स्थिति",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which CSS property is used to add space between lines of text?",
    question_hi: "कौन-सी CSS प्रॉपर्टी टेक्स्ट की लाइनों के बीच जगह जोड़ती है?",
    options_en: ["line-height", "letter-spacing", "word-spacing", "text-indent"],
    options_hi: ["लाइन ऊँचाई", "अक्षर स्पेसिंग", "शब्द स्पेसिंग", "टेक्स्ट इंडेंट"],
    answer_en: "line-height",
    answer_hi: "लाइन ऊँचाई",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which property controls the spacing between letters?",
    question_hi: "कौन-सी प्रॉपर्टी अक्षरों के बीच की दूरी नियंत्रित करती है?",
    options_en: ["letter-spacing", "word-spacing", "line-height", "text-align"],
    options_hi: ["अक्षर स्पेसिंग", "शब्द स्पेसिंग", "लाइन ऊँचाई", "टेक्स्ट संरेखण"],
    answer_en: "letter-spacing",
    answer_hi: "अक्षर स्पेसिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which property aligns text to the center?",
    question_hi: "कौन-सी प्रॉपर्टी टेक्स्ट को केंद्र में संरेखित करती है?",
    options_en: ["text-align", "vertical-align", "align-items", "justify-content"],
    options_hi: ["टेक्स्ट संरेखण", "ऊर्ध्वाधर संरेखण", "आइटम संरेखण", "न्यायसंगत सामग्री"],
    answer_en: "text-align",
    answer_hi: "टेक्स्ट संरेखण",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which property specifies the maximum width of an element?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट की अधिकतम चौड़ाई निर्दिष्ट करती है?",
    options_en: ["max-width", "min-width", "width", "height"],
    options_hi: ["अधिकतम चौड़ाई", "न्यूनतम चौड़ाई", "चौड़ाई", "ऊँचाई"],
    answer_en: "max-width",
    answer_hi: "अधिकतम चौड़ाई",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which property is used to make an element respond to mouse hover?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट को माउस होवर पर प्रतिक्रिया देने के लिए उपयोग होती है?",
    options_en: ["hover", ":hover", "mouse-over", "pointer-events"],
    options_hi: ["होवर", ":होवर", "माउस-ओवर", "पॉइंटर इवेंट्स"],
    answer_en: ":hover",
    answer_hi: ":होवर",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which CSS property controls the visibility of an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एलिमेंट की दृश्यता नियंत्रित करती है?",
    options_en: ["visibility", "display", "opacity", "filter"],
    options_hi: ["दृश्यता", "प्रदर्शन", "अपारदर्शिता", "फिल्टर"],
    answer_en: "visibility",
    answer_hi: "दृश्यता",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which property is used to add a border around an element?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट के चारों ओर बॉर्डर जोड़ने के लिए उपयोग होती है?",
    options_en: ["border", "outline", "margin", "padding"],
    options_hi: ["बॉर्डर", "आउटलाइन", "मार्जिन", "पैडिंग"],
    answer_en: "border",
    answer_hi: "बॉर्डर",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which CSS property specifies the font style?",
    question_hi: "कौन-सी CSS प्रॉपर्टी फ़ॉन्ट शैली निर्दिष्ट करती है?",
    options_en: ["font-style", "font-weight", "font-family", "text-transform"],
    options_hi: ["फ़ॉन्ट शैली", "फ़ॉन्ट मोटाई", "फ़ॉन्ट परिवार", "टेक्स्ट ट्रांसफॉर्म"],
    answer_en: "font-style",
    answer_hi: "फ़ॉन्ट शैली",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which property is used to transform text to uppercase?",
    question_hi: "कौन-सी प्रॉपर्टी टेक्स्ट को अपरकेस में बदलने के लिए उपयोग होती है?",
    options_en: ["text-transform", "text-decoration", "text-align", "text-indent"],
    options_hi: ["टेक्स्ट ट्रांसफॉर्म", "टेक्स्ट सजावट", "टेक्स्ट संरेखण", "टेक्स्ट इंडेंट"],
    answer_en: "text-transform",
    answer_hi: "टेक्स्ट ट्रांसफॉर्म",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which property controls the overflow of content?",
    question_hi: "कौन-सी प्रॉपर्टी कंटेंट के ओवरफ्लो को नियंत्रित करती है?",
    options_en: ["overflow", "overflow-x", "overflow-y", "text-overflow"],
    options_hi: ["ओवरफ्लो", "ओवरफ्लो-एक्स", "ओवरफ्लो-वाय", "टेक्स्ट ओवरफ्लो"],
    answer_en: "overflow",
    answer_hi: "ओवरफ्लो",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which CSS property is used to change the cursor on mouse hover?",
    question_hi: "माउस होवर पर कर्सर को बदलने के लिए कौन-सी CSS प्रॉपर्टी का उपयोग किया जाता है?",
    options_en: ["cursor", "pointer-events", "hover", "mouse-pointer"],
    options_hi: ["कर्सर", "पॉइंटर इवेंट्स", "होवर", "माउस पॉइंटर"],
    answer_en: "cursor",
    answer_hi: "कर्सर",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which property is used to set the height of an element?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट की ऊँचाई सेट करने के लिए उपयोग होती है?",
    options_en: ["height", "width", "max-height", "min-height"],
    options_hi: ["ऊँचाई", "चौड़ाई", "अधिकतम ऊँचाई", "न्यूनतम ऊँचाई"],
    answer_en: "height",
    answer_hi: "ऊँचाई",
    attempted: false,
    selected: ""
  },
   {
    num: 26,
    question_en: "Which property is used to control the space between words?",
    question_hi: "शब्दों के बीच की दूरी नियंत्रित करने के लिए कौन-सी प्रॉपर्टी उपयोग होती है?",
    options_en: ["word-spacing", "letter-spacing", "line-height", "text-indent"],
    options_hi: ["शब्द स्पेसिंग", "अक्षर स्पेसिंग", "लाइन ऊँचाई", "टेक्स्ट इंडेंट"],
    answer_en: "word-spacing",
    answer_hi: "शब्द स्पेसिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which CSS property is used to make an element’s corners rounded?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एलिमेंट के कोनों को गोल बनाने के लिए उपयोग होती है?",
    options_en: ["border-radius", "border-style", "border-width", "border-color"],
    options_hi: ["बॉर्डर रेडियस", "बॉर्डर स्टाइल", "बॉर्डर चौड़ाई", "बॉर्डर रंग"],
    answer_en: "border-radius",
    answer_hi: "बॉर्डर रेडियस",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which property is used to set the transparency of the background image?",
    question_hi: "पृष्ठभूमि छवि की पारदर्शिता सेट करने के लिए कौन-सी प्रॉपर्टी उपयोग होती है?",
    options_en: ["background-opacity", "opacity", "background-transparent", "visibility"],
    options_hi: ["पृष्ठभूमि अपारदर्शिता", "अपारदर्शिता", "पृष्ठभूमि पारदर्शिता", "दृश्यता"],
    answer_en: "opacity",
    answer_hi: "अपारदर्शिता",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which property controls the style of the list item marker?",
    question_hi: "कौन-सी प्रॉपर्टी सूची आइटम मार्कर की शैली नियंत्रित करती है?",
    options_en: ["list-style-type", "list-style-position", "list-style", "marker-style"],
    options_hi: ["लिस्ट स्टाइल टाइप", "लिस्ट स्टाइल पोजीशन", "लिस्ट स्टाइल", "मार्कर स्टाइल"],
    answer_en: "list-style-type",
    answer_hi: "लिस्ट स्टाइल टाइप",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which property sets the style of the border?",
    question_hi: "कौन-सी प्रॉपर्टी बॉर्डर की शैली सेट करती है?",
    options_en: ["border-style", "border-width", "border-color", "border-radius"],
    options_hi: ["बॉर्डर स्टाइल", "बॉर्डर चौड़ाई", "बॉर्डर रंग", "बॉर्डर रेडियस"],
    answer_en: "border-style",
    answer_hi: "बॉर्डर स्टाइल",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which property controls the visibility of overflow content?",
    question_hi: "कौन-सी प्रॉपर्टी ओवरफ्लो कंटेंट की दृश्यता नियंत्रित करती है?",
    options_en: ["overflow", "overflow-x", "overflow-y", "clip"],
    options_hi: ["ओवरफ्लो", "ओवरफ्लो-एक्स", "ओवरफ्लो-वाय", "क्लिप"],
    answer_en: "overflow",
    answer_hi: "ओवरफ्लो",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which CSS property specifies the stacking context?",
    question_hi: "कौन-सी CSS प्रॉपर्टी स्टैकिंग कॉन्टेक्स्ट निर्दिष्ट करती है?",
    options_en: ["z-index", "stacking-context", "position", "order"],
    options_hi: ["z-इंडेक्स", "स्टैकिंग कॉन्टेक्स्ट", "स्थिति", "क्रम"],
    answer_en: "z-index",
    answer_hi: "z-इंडेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which property is used to change the display of an element to block?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट का प्रदर्शन ब्लॉक में बदलती है?",
    options_en: ["display", "visibility", "position", "float"],
    options_hi: ["प्रदर्शन", "दृश्यता", "स्थिति", "तैरना"],
    answer_en: "display",
    answer_hi: "प्रदर्शन",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which CSS property is used to control the position of a background image?",
    question_hi: "कौन-सी CSS प्रॉपर्टी पृष्ठभूमि छवि की स्थिति नियंत्रित करती है?",
    options_en: ["background-position", "background-repeat", "background-size", "background-attachment"],
    options_hi: ["पृष्ठभूमि स्थिति", "पृष्ठभूमि पुनरावृत्ति", "पृष्ठभूमि आकार", "पृष्ठभूमि संलग्नक"],
    answer_en: "background-position",
    answer_hi: "पृष्ठभूमि स्थिति",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which property is used to repeat a background image?",
    question_hi: "कौन-सी प्रॉपर्टी पृष्ठभूमि छवि को दोहराने के लिए उपयोग होती है?",
    options_en: ["background-repeat", "background-position", "background-size", "background-attachment"],
    options_hi: ["पृष्ठभूमि पुनरावृत्ति", "पृष्ठभूमि स्थिति", "पृष्ठभूमि आकार", "पृष्ठभूमि संलग्नक"],
    answer_en: "background-repeat",
    answer_hi: "पृष्ठभूमि पुनरावृत्ति",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which CSS property specifies the size of the background image?",
    question_hi: "कौन-सी CSS प्रॉपर्टी पृष्ठभूमि छवि का आकार निर्दिष्ट करती है?",
    options_en: ["background-size", "background-position", "background-repeat", "background-attachment"],
    options_hi: ["पृष्ठभूमि आकार", "पृष्ठभूमि स्थिति", "पृष्ठभूमि पुनरावृत्ति", "पृष्ठभूमि संलग्नक"],
    answer_en: "background-size",
    answer_hi: "पृष्ठभूमि आकार",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which property attaches the background image to the viewport or the element?",
    question_hi: "कौन-सी प्रॉपर्टी पृष्ठभूमि छवि को व्यूपोर्ट या एलिमेंट से संलग्न करती है?",
    options_en: ["background-attachment", "background-position", "background-repeat", "background-size"],
    options_hi: ["पृष्ठभूमि संलग्नक", "पृष्ठभूमि स्थिति", "पृष्ठभूमि पुनरावृत्ति", "पृष्ठभूमि आकार"],
    answer_en: "background-attachment",
    answer_hi: "पृष्ठभूमि संलग्नक",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which CSS property controls how an element’s content is displayed when it overflows?",
    question_hi: "कौन-सी CSS प्रॉपर्टी तब कंटेंट के प्रदर्शन को नियंत्रित करती है जब वह ओवरफ्लो करता है?",
    options_en: ["overflow", "visibility", "display", "opacity"],
    options_hi: ["ओवरफ्लो", "दृश्यता", "प्रदर्शन", "अपारदर्शिता"],
    answer_en: "overflow",
    answer_hi: "ओवरफ्लो",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which property specifies how elements inside a flex container are aligned?",
    question_hi: "कौन-सी प्रॉपर्टी फ्लेक्स कंटेनर के अंदर एलिमेंट्स को संरेखित करने का तरीका निर्दिष्ट करती है?",
    options_en: ["align-items", "justify-content", "align-content", "flex-direction"],
    options_hi: ["आइटम संरेखण", "न्यायसंगत सामग्री", "सामग्री संरेखण", "फ्लेक्स दिशा"],
    answer_en: "align-items",
    answer_hi: "आइटम संरेखण",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which CSS property controls the flow direction of flex items?",
    question_hi: "कौन-सी CSS प्रॉपर्टी फ्लेक्स आइटम्स के फ्लो दिशा को नियंत्रित करती है?",
    options_en: ["flex-direction", "flex-wrap", "flex-grow", "flex-shrink"],
    options_hi: ["फ्लेक्स दिशा", "फ्लेक्स रैप", "फ्लेक्स ग्रो", "फ्लेक्स श्रिंक"],
    answer_en: "flex-direction",
    answer_hi: "फ्लेक्स दिशा",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which property defines the wrapping behavior of flex items?",
    question_hi: "कौन-सी प्रॉपर्टी फ्लेक्स आइटम्स के रैपिंग व्यवहार को परिभाषित करती है?",
    options_en: ["flex-wrap", "flex-direction", "flex-grow", "flex-shrink"],
    options_hi: ["फ्लेक्स रैप", "फ्लेक्स दिशा", "फ्लेक्स ग्रो", "फ्लेक्स श्रिंक"],
    answer_en: "flex-wrap",
    answer_hi: "फ्लेक्स रैप",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which property controls the ability of a flex item to grow?",
    question_hi: "कौन-सी प्रॉपर्टी फ्लेक्स आइटम के बढ़ने की क्षमता को नियंत्रित करती है?",
    options_en: ["flex-grow", "flex-shrink", "flex-basis", "flex-wrap"],
    options_hi: ["फ्लेक्स ग्रो", "फ्लेक्स श्रिंक", "फ्लेक्स बेसिस", "फ्लेक्स रैप"],
    answer_en: "flex-grow",
    answer_hi: "फ्लेक्स ग्रो",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which property controls the ability of a flex item to shrink?",
    question_hi: "कौन-सी प्रॉपर्टी फ्लेक्स आइटम के सिकुड़ने की क्षमता को नियंत्रित करती है?",
    options_en: ["flex-shrink", "flex-grow", "flex-basis", "flex-wrap"],
    options_hi: ["फ्लेक्स श्रिंक", "फ्लेक्स ग्रो", "फ्लेक्स बेसिस", "फ्लेक्स रैप"],
    answer_en: "flex-shrink",
    answer_hi: "फ्लेक्स श्रिंक",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which property defines the default size of a flex item before growing or shrinking?",
    question_hi: "कौन-सी प्रॉपर्टी फ्लेक्स आइटम के बढ़ने या सिकुड़ने से पहले की डिफ़ॉल्ट आकार को परिभाषित करती है?",
    options_en: ["flex-basis", "flex-grow", "flex-shrink", "flex-wrap"],
    options_hi: ["फ्लेक्स बेसिस", "फ्लेक्स ग्रो", "फ्लेक्स श्रिंक", "फ्लेक्स रैप"],
    answer_en: "flex-basis",
    answer_hi: "फ्लेक्स बेसिस",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which CSS property controls the space between flex items?",
    question_hi: "कौन-सी CSS प्रॉपर्टी फ्लेक्स आइटम्स के बीच की दूरी नियंत्रित करती है?",
    options_en: ["gap", "margin", "padding", "space-between"],
    options_hi: ["गैप", "मार्जिन", "पैडिंग", "स्पेस-बिटवीन"],
    answer_en: "gap",
    answer_hi: "गैप",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which property specifies the type of cursor when hovering over an element?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट पर होवर करते समय कर्सर के प्रकार को निर्दिष्ट करती है?",
    options_en: ["cursor", "pointer-events", "hover", "mouse-pointer"],
    options_hi: ["कर्सर", "पॉइंटर इवेंट्स", "होवर", "माउस पॉइंटर"],
    answer_en: "cursor",
    answer_hi: "कर्सर",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which property specifies the transition effect when a CSS property changes?",
    question_hi: "कौन-सी प्रॉपर्टी तब संक्रमण प्रभाव निर्दिष्ट करती है जब CSS प्रॉपर्टी बदलती है?",
    options_en: ["transition", "transform", "animation", "filter"],
    options_hi: ["ट्रांजिशन", "ट्रांसफॉर्म", "एनीमेशन", "फिल्टर"],
    answer_en: "transition",
    answer_hi: "ट्रांजिशन",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which property controls the animation duration?",
    question_hi: "कौन-सी प्रॉपर्टी एनीमेशन की अवधि नियंत्रित करती है?",
    options_en: ["animation-duration", "animation-delay", "animation-iteration-count", "animation-name"],
    options_hi: ["एनीमेशन अवधि", "एनीमेशन विलंब", "एनीमेशन पुनरावृत्ति संख्या", "एनीमेशन नाम"],
    answer_en: "animation-duration",
    answer_hi: "एनीमेशन अवधि",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which property is used to rotate an element in CSS?",
    question_hi: "CSS में एलिमेंट को घुमाने के लिए कौन-सी प्रॉपर्टी का उपयोग होता है?",
    options_en: ["transform", "transition", "animation", "rotate"],
    options_hi: ["ट्रांसफॉर्म", "ट्रांजिशन", "एनीमेशन", "रोटेट"],
    answer_en: "transform",
    answer_hi: "ट्रांसफॉर्म",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which property sets the visibility of an element without removing it from the document flow?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट की दृश्यता सेट करती है बिना उसे डॉक्यूमेंट फ्लो से हटाए?",
    options_en: ["visibility", "display", "opacity", "hidden"],
    options_hi: ["दृश्यता", "प्रदर्शन", "अपारदर्शिता", "छुपा हुआ"],
    answer_en: "visibility",
    answer_hi: "दृश्यता",
    attempted: false,
    selected: ""
  }
     ],
     10:[
       {
    num: 1,
    question_en: "Which CSS property is used to change the font of an element?",
    question_hi: "कौन सी CSS प्रॉपर्टी तत्व का फॉन्ट बदलने के लिए उपयोग होती है?",
    options_en: ["font-family", "font-size", "font-weight", "font-style"],
    options_hi: ["font-family", "font-size", "font-weight", "font-style"],
    answer_en: "font-family",
    answer_hi: "फॉन्ट फैमिली",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which property controls the horizontal alignment of text?",
    question_hi: "कौन सी प्रॉपर्टी टेक्स्ट के क्षैतिज संरेखण को नियंत्रित करती है?",
    options_en: ["text-align", "vertical-align", "align-content", "align-items"],
    options_hi: ["text-align", "vertical-align", "align-content", "align-items"],
    answer_en: "text-align",
    answer_hi: "टेक्स्ट-अलाइन",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which property controls the spacing between lines of text?",
    question_hi: "कौन सी प्रॉपर्टी टेक्स्ट की लाइनों के बीच की दूरी नियंत्रित करती है?",
    options_en: ["line-height", "letter-spacing", "word-spacing", "text-indent"],
    options_hi: ["line-height", "letter-spacing", "word-spacing", "text-indent"],
    answer_en: "line-height",
    answer_hi: "लाइन-हाइट",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which property is used to increase or decrease the space between characters?",
    question_hi: "कौन सी प्रॉपर्टी अक्षरों के बीच की दूरी बढ़ाने या घटाने के लिए उपयोग होती है?",
    options_en: ["letter-spacing", "word-spacing", "line-height", "text-indent"],
    options_hi: ["letter-spacing", "word-spacing", "line-height", "text-indent"],
    answer_en: "letter-spacing",
    answer_hi: "लेटर-स्पेसिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which property specifies the weight (thickness) of the font?",
    question_hi: "कौन सी प्रॉपर्टी फॉन्ट के मोटाई (वेट) को निर्धारित करती है?",
    options_en: ["font-weight", "font-size", "font-style", "font-variant"],
    options_hi: ["font-weight", "font-size", "font-style", "font-variant"],
    answer_en: "font-weight",
    answer_hi: "फॉन्ट-वेट",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "What value of 'text-align' aligns text to the center?",
    question_hi: "'text-align' का कौन सा मान टेक्स्ट को केंद्र में संरेखित करता है?",
    options_en: ["center", "left", "right", "justify"],
    options_hi: ["center", "left", "right", "justify"],
    answer_en: "center",
    answer_hi: "केंद्र",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which property changes the font size of text?",
    question_hi: "कौन सी प्रॉपर्टी टेक्स्ट के फॉन्ट साइज को बदलती है?",
    options_en: ["font-size", "font-family", "font-weight", "font-style"],
    options_hi: ["font-size", "font-family", "font-weight", "font-style"],
    answer_en: "font-size",
    answer_hi: "फॉन्ट-साइज़",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which CSS property makes text italic?",
    question_hi: "कौन सी CSS प्रॉपर्टी टेक्स्ट को इटैलिक बनाती है?",
    options_en: ["font-style", "font-weight", "font-variant", "text-decoration"],
    options_hi: ["font-style", "font-weight", "font-variant", "text-decoration"],
    answer_en: "font-style",
    answer_hi: "फॉन्ट-स्टाइल",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which value of 'font-weight' makes text bold?",
    question_hi: "'font-weight' का कौन सा मान टेक्स्ट को बोल्ड बनाता है?",
    options_en: ["bold", "normal", "lighter", "bolder"],
    options_hi: ["bold", "normal", "lighter", "bolder"],
    answer_en: "bold",
    answer_hi: "बोल्ड",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "What does the 'letter-spacing' property affect?",
    question_hi: "'letter-spacing' प्रॉपर्टी किस चीज़ को प्रभावित करती है?",
    options_en: ["Spacing between characters", "Spacing between words", "Spacing between lines", "Indentation"],
    options_hi: ["अक्षरों के बीच की जगह", "शब्दों के बीच की जगह", "लाइनों के बीच की जगह", "इंडेंटेशन"],
    answer_en: "Spacing between characters",
    answer_hi: "अक्षरों के बीच की जगह",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which property aligns text to the right side?",
    question_hi: "कौन सी प्रॉपर्टी टेक्स्ट को दाईं ओर संरेखित करती है?",
    options_en: ["text-align: right", "text-align: left", "text-align: center", "text-align: justify"],
    options_hi: ["text-align: right", "text-align: left", "text-align: center", "text-align: justify"],
    answer_en: "text-align: right",
    answer_hi: "टेक्स्ट-अलाइन: राइट",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which property sets the default font size for an element?",
    question_hi: "कौन सी प्रॉपर्टी किसी तत्व के लिए डिफ़ॉल्ट फॉन्ट साइज सेट करती है?",
    options_en: ["font-size", "font-family", "font-weight", "font-style"],
    options_hi: ["font-size", "font-family", "font-weight", "font-style"],
    answer_en: "font-size",
    answer_hi: "फॉन्ट-साइज़",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which CSS property is used to underline text?",
    question_hi: "कौन सी CSS प्रॉपर्टी टेक्स्ट के नीचे रेखा (underline) डालती है?",
    options_en: ["text-decoration", "border-bottom", "font-style", "text-underline"],
    options_hi: ["text-decoration", "border-bottom", "font-style", "text-underline"],
    answer_en: "text-decoration",
    answer_hi: "टेक्स्ट डेकोरेशन",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which property controls how the text is justified?",
    question_hi: "कौन सी प्रॉपर्टी यह नियंत्रित करती है कि टेक्स्ट कैसे जस्टिफाई होता है?",
    options_en: ["text-align", "text-justify", "text-indent", "text-decoration"],
    options_hi: ["text-align", "text-justify", "text-indent", "text-decoration"],
    answer_en: "text-align",
    answer_hi: "टेक्स्ट-अलाइन",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which property sets the height of a line box?",
    question_hi: "कौन सी प्रॉपर्टी लाइन बॉक्स की ऊंचाई सेट करती है?",
    options_en: ["line-height", "font-size", "font-weight", "letter-spacing"],
    options_hi: ["line-height", "font-size", "font-weight", "letter-spacing"],
    answer_en: "line-height",
    answer_hi: "लाइन-हाइट",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which property sets the spacing between words?",
    question_hi: "कौन सी प्रॉपर्टी शब्दों के बीच की जगह सेट करती है?",
    options_en: ["word-spacing", "letter-spacing", "line-height", "text-indent"],
    options_hi: ["word-spacing", "letter-spacing", "line-height", "text-indent"],
    answer_en: "word-spacing",
    answer_hi: "वर्ड-स्पेसिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which property changes the font style to normal, italic, or oblique?",
    question_hi: "कौन सी प्रॉपर्टी फॉन्ट स्टाइल को नॉर्मल, इटैलिक, या ऑब्लिक में बदलती है?",
    options_en: ["font-style", "font-weight", "font-variant", "font-family"],
    options_hi: ["font-style", "font-weight", "font-variant", "font-family"],
    answer_en: "font-style",
    answer_hi: "फॉन्ट-स्टाइल",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "What is the default value of 'font-weight'?",
    question_hi: "'font-weight' का डिफ़ॉल्ट मान क्या है?",
    options_en: ["normal", "bold", "lighter", "bolder"],
    options_hi: ["normal", "bold", "lighter", "bolder"],
    answer_en: "normal",
    answer_hi: "नॉर्मल",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which property is used to control the capitalization of text?",
    question_hi: "कौन सी प्रॉपर्टी टेक्स्ट के कैपिटलाइज़ेशन को नियंत्रित करती है?",
    options_en: ["text-transform", "text-align", "text-decoration", "font-variant"],
    options_hi: ["text-transform", "text-align", "text-decoration", "font-variant"],
    answer_en: "text-transform",
    answer_hi: "टेक्स्ट-ट्रांसफॉर्म",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which property sets the spacing between letters to normal?",
    question_hi: "कौन सी प्रॉपर्टी अक्षरों के बीच की जगह को सामान्य पर सेट करती है?",
    options_en: ["normal", "inherit", "initial", "unset"],
    options_hi: ["normal", "inherit", "initial", "unset"],
    answer_en: "normal",
    answer_hi: "सामान्य",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which property controls the font size relative to the parent element?",
    question_hi: "कौन सी प्रॉपर्टी फॉन्ट साइज को पैरेंट तत्व के सापेक्ष नियंत्रित करती है?",
    options_en: ["font-size-relative", "font-size", "font-weight", "font-style"],
    options_hi: ["font-size-relative", "font-size", "font-weight", "font-style"],
    answer_en: "font-size",
    answer_hi: "फॉन्ट-साइज़",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which property makes all text uppercase?",
    question_hi: "कौन सी प्रॉपर्टी सभी टेक्स्ट को अपरकेस में बदलती है?",
    options_en: ["text-transform: uppercase", "text-transform: lowercase", "text-transform: capitalize", "text-align: center"],
    options_hi: ["text-transform: uppercase", "text-transform: lowercase", "text-transform: capitalize", "text-align: center"],
    answer_en: "text-transform: uppercase",
    answer_hi: "टेक्स्ट-ट्रांसफॉर्म: अपरकेस",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which property is used to add space between the lines of text?",
    question_hi: "कौन सी प्रॉपर्टी टेक्स्ट की लाइनों के बीच जगह जोड़ने के लिए उपयोग होती है?",
    options_en: ["line-height", "letter-spacing", "word-spacing", "text-indent"],
    options_hi: ["line-height", "letter-spacing", "word-spacing", "text-indent"],
    answer_en: "line-height",
    answer_hi: "लाइन-हाइट",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which property can be used to make text bold and heavy?",
    question_hi: "कौन सी प्रॉपर्टी टेक्स्ट को बोल्ड और भारी बनाने के लिए उपयोग होती है?",
    options_en: ["font-weight", "font-size", "font-style", "text-decoration"],
    options_hi: ["font-weight", "font-size", "font-style", "text-decoration"],
    answer_en: "font-weight",
    answer_hi: "फॉन्ट-वेट",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which property aligns text both left and right by adjusting spacing?",
    question_hi: "कौन सी प्रॉपर्टी टेक्स्ट को बाएं और दाएं दोनों ओर संरेखित करती है spacing समायोजित करके?",
    options_en: ["text-align: justify", "text-align: left", "text-align: right", "text-align: center"],
    options_hi: ["text-align: justify", "text-align: left", "text-align: right", "text-align: center"],
    answer_en: "text-align: justify",
    answer_hi: "टेक्स्ट-अलाइन: जस्टिफाई",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Which CSS property is used to capitalize the first letter of each word?",
    question_hi: "कौन सी CSS प्रॉपर्टी हर शब्द के पहले अक्षर को कैपिटल करती है?",
    options_en: ["text-transform: capitalize", "text-transform: uppercase", "text-transform: lowercase", "font-variant"],
    options_hi: ["text-transform: capitalize", "text-transform: uppercase", "text-transform: lowercase", "font-variant"],
    answer_en: "text-transform: capitalize",
    answer_hi: "टेक्स्ट-ट्रांसफॉर्म: कैपिटलाइज़",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "What does the 'font-variant' property do?",
    question_hi: "'font-variant' प्रॉपर्टी क्या करती है?",
    options_en: ["Controls small-caps text", "Controls font weight", "Controls font size", "Controls font style"],
    options_hi: ["स्मॉल-कैप्स टेक्स्ट को नियंत्रित करती है", "फॉन्ट वेट को नियंत्रित करती है", "फॉन्ट साइज को नियंत्रित करती है", "फॉन्ट स्टाइल को नियंत्रित करती है"],
    answer_en: "Controls small-caps text",
    answer_hi: "स्मॉल-कैप्स टेक्स्ट को नियंत्रित करती है",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which property is used to remove underline from links?",
    question_hi: "कौन सी प्रॉपर्टी लिंक से अंडरलाइन हटाने के लिए उपयोग होती है?",
    options_en: ["text-decoration: none", "text-decoration: underline", "font-style: normal", "font-weight: normal"],
    options_hi: ["text-decoration: none", "text-decoration: underline", "font-style: normal", "font-weight: normal"],
    answer_en: "text-decoration: none",
    answer_hi: "टेक्स्ट डेकोरेशन: नन",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which property controls the thickness of font strokes?",
    question_hi: "कौन सी प्रॉपर्टी फॉन्ट स्ट्रोक की मोटाई नियंत्रित करती है?",
    options_en: ["font-weight", "font-size", "font-style", "font-variant"],
    options_hi: ["फॉन्ट-वेट", "फॉन्ट-साइज़", "फॉन्ट-स्टाइल", "फॉन्ट-वैरिएंट"],
    answer_en: "font-weight",
    answer_hi: "फॉन्ट-वेट",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which property is used to change the text color?",
    question_hi: "कौन सी प्रॉपर्टी टेक्स्ट का रंग बदलने के लिए उपयोग होती है?",
    options_en: ["color", "background-color", "font-color", "text-color"],
    options_hi: ["कलर", "बैकग्राउंड-कलर", "फॉन्ट-कलर", "टेक्स्ट-कलर"],
    answer_en: "color",
    answer_hi: "कलर",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which property specifies whether the text should be displayed in uppercase, lowercase, or capitalized?",
    question_hi: "कौन सी प्रॉपर्टी निर्धारित करती है कि टेक्स्ट अपरकेस, लोअरकेस या कैपिटलाइज़्ड दिखेगा?",
    options_en: ["text-transform", "text-align", "font-style", "font-weight"],
    options_hi: ["टेक्स्ट-ट्रांसफॉर्म", "टेक्स्ट-अलाइन", "फॉन्ट-स्टाइल", "फॉन्ट-वेट"],
    answer_en: "text-transform",
    answer_hi: "टेक्स्ट-ट्रांसफॉर्म",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which property adds space before the first line of text?",
    question_hi: "कौन सी प्रॉपर्टी टेक्स्ट की पहली लाइन से पहले जगह जोड़ती है?",
    options_en: ["text-indent", "line-height", "letter-spacing", "word-spacing"],
    options_hi: ["टेक्स्ट-इंडेंट", "लाइन-हाइट", "लेटर-स्पेसिंग", "वर्ड-स्पेसिंग"],
    answer_en: "text-indent",
    answer_hi: "टेक्स्ट-इंडेंट",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which property specifies the font size in relative units such as em or rem?",
    question_hi: "कौन सी प्रॉपर्टी फॉन्ट साइज को रिलेटिव यूनिट्स जैसे em या rem में सेट करती है?",
    options_en: ["font-size", "font-weight", "font-style", "font-variant"],
    options_hi: ["फॉन्ट-साइज़", "फॉन्ट-वेट", "फॉन्ट-स्टाइल", "फॉन्ट-वैरिएंट"],
    answer_en: "font-size",
    answer_hi: "फॉन्ट-साइज़",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which property specifies whether text should be underlined, overlined, or struck through?",
    question_hi: "कौन सी प्रॉपर्टी निर्धारित करती है कि टेक्स्ट के नीचे लाइन, ऊपर लाइन, या स्ट्राइक-थ्रू होगी?",
    options_en: ["text-decoration", "text-transform", "font-style", "font-weight"],
    options_hi: ["टेक्स्ट डेकोरेशन", "टेक्स्ट-ट्रांसफॉर्म", "फॉन्ट-स्टाइल", "फॉन्ट-वेट"],
    answer_en: "text-decoration",
    answer_hi: "टेक्स्ट डेकोरेशन",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which CSS property controls the visibility of an element’s text?",
    question_hi: "कौन सी CSS प्रॉपर्टी किसी तत्व के टेक्स्ट की दृश्यता नियंत्रित करती है?",
    options_en: ["visibility", "display", "opacity", "color"],
    options_hi: ["विजिबिलिटी", "डिस्प्ले", "ओपैसिटी", "कलर"],
    answer_en: "visibility",
    answer_hi: "विजिबिलिटी",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "What value of 'text-align' justifies text by adjusting spacing?",
    question_hi: "'text-align' का कौन सा मान टेक्स्ट को जस्टिफाई करता है?",
    options_en: ["justify", "left", "right", "center"],
    options_hi: ["जस्टिफाई", "लेफ्ट", "राइट", "सेंटर"],
    answer_en: "justify",
    answer_hi: "जस्टिफाई",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which property controls the height of the line box that wraps the text?",
    question_hi: "कौन सी प्रॉपर्टी लाइन बॉक्स की ऊंचाई नियंत्रित करती है जो टेक्स्ट को लपेटती है?",
    options_en: ["line-height", "font-size", "letter-spacing", "word-spacing"],
    options_hi: ["लाइन-हाइट", "फॉन्ट-साइज़", "लेटर-स्पेसिंग", "वर्ड-स्पेसिंग"],
    answer_en: "line-height",
    answer_hi: "लाइन-हाइट",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which CSS property can change the text direction from left to right or right to left?",
    question_hi: "कौन सी CSS प्रॉपर्टी टेक्स्ट की दिशा को बाएं से दाएं या दाएं से बाएं बदल सकती है?",
    options_en: ["direction", "text-align", "writing-mode", "text-orientation"],
    options_hi: ["डायरेक्शन", "टेक्स्ट-अलाइन", "राइटिंग-मोड", "टेक्स्ट-ओरिएंटेशन"],
    answer_en: "direction",
    answer_hi: "डायरेक्शन",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which property controls the font style to be normal, italic, or oblique?",
    question_hi: "कौन सी प्रॉपर्टी फॉन्ट स्टाइल को नॉर्मल, इटैलिक या ऑब्लिक में नियंत्रित करती है?",
    options_en: ["font-style", "font-weight", "font-variant", "font-family"],
    options_hi: ["फॉन्ट-स्टाइल", "फॉन्ट-वेट", "फॉन्ट-वैरिएंट", "फॉन्ट-फैमिली"],
    answer_en: "font-style",
    answer_hi: "फॉन्ट-स्टाइल",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which property can be used to add a shadow effect to text?",
    question_hi: "कौन सी प्रॉपर्टी टेक्स्ट में शैडो प्रभाव जोड़ने के लिए उपयोग होती है?",
    options_en: ["text-shadow", "box-shadow", "shadow", "font-shadow"],
    options_hi: ["टेक्स्ट-शैडो", "बॉक्स-शैडो", "शैडो", "फॉन्ट-शैडो"],
    answer_en: "text-shadow",
    answer_hi: "टेक्स्ट-शैडो",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which property controls the spacing between words?",
    question_hi: "कौन सी प्रॉपर्टी शब्दों के बीच की जगह नियंत्रित करती है?",
    options_en: ["word-spacing", "letter-spacing", "line-height", "text-indent"],
    options_hi: ["वर्ड-स्पेसिंग", "लेटर-स्पेसिंग", "लाइन-हाइट", "टेक्स्ट-इंडेंट"],
    answer_en: "word-spacing",
    answer_hi: "वर्ड-स्पेसिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which CSS property allows you to add a fallback font?",
    question_hi: "कौन सी CSS प्रॉपर्टी आपको फॉलबैक फॉन्ट जोड़ने की अनुमति देती है?",
    options_en: ["font-family", "font-weight", "font-style", "font-size"],
    options_hi: ["फॉन्ट-फैमिली", "फॉन्ट-वेट", "फॉन्ट-स्टाइल", "फॉन्ट-साइज़"],
    answer_en: "font-family",
    answer_hi: "फॉन्ट-फैमिली",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "What is the effect of 'text-transform: lowercase'?",
    question_hi: "'text-transform: lowercase' का क्या प्रभाव होता है?",
    options_en: ["Converts all letters to lowercase", "Converts all letters to uppercase", "Capitalizes first letter", "No effect"],
    options_hi: ["सभी अक्षरों को लोअरकेस में बदलता है", "सभी अक्षरों को अपरकेस में बदलता है", "पहले अक्षर को कैपिटलाइज़ करता है", "कोई प्रभाव नहीं"],
    answer_en: "Converts all letters to lowercase",
    answer_hi: "सभी अक्षरों को लोअरकेस में बदलता है",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which property sets the thickness of a font to be lighter than normal?",
    question_hi: "कौन सी प्रॉपर्टी फॉन्ट की मोटाई को सामान्य से हल्का बनाती है?",
    options_en: ["font-weight: lighter", "font-weight: bold", "font-style: normal", "font-variant: normal"],
    options_hi: ["फॉन्ट-वेट: लाइटर", "फॉन्ट-वेट: बोल्ड", "फॉन्ट-स्टाइल: नॉर्मल", "फॉन्ट-वैरिएंट: नॉर्मल"],
    answer_en: "font-weight: lighter",
    answer_hi: "फॉन्ट-वेट: लाइटर",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which property is used to specify fallback fonts separated by commas?",
    question_hi: "कौन सी प्रॉपर्टी फॉलबैक फॉन्ट्स को कॉमा से अलग करने के लिए उपयोग होती है?",
    options_en: ["font-family", "font-weight", "font-style", "font-size"],
    options_hi: ["फॉन्ट-फैमिली", "फॉन्ट-वेट", "फॉन्ट-स्टाइल", "फॉन्ट-साइज़"],
    answer_en: "font-family",
    answer_hi: "फॉन्ट-फैमिली",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which property sets the text to be bold and italic together?",
    question_hi: "कौन सी प्रॉपर्टी टेक्स्ट को बोल्ड और इटैलिक दोनों बनाती है?",
    options_en: ["font-weight and font-style", "text-decoration", "font-variant", "text-transform"],
    options_hi: ["फॉन्ट-वेट और फॉन्ट-स्टाइल", "टेक्स्ट डेकोरेशन", "फॉन्ट-वैरिएंट", "टेक्स्ट-ट्रांसफॉर्म"],
    answer_en: "font-weight and font-style",
    answer_hi: "फॉन्ट-वेट और फॉन्ट-स्टाइल",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which property controls the fallback generic font family like serif, sans-serif?",
    question_hi: "कौन सी प्रॉपर्टी फॉलबैक जेनेरिक फॉन्ट फैमिली जैसे serif, sans-serif को नियंत्रित करती है?",
    options_en: ["font-family", "font-weight", "font-style", "font-variant"],
    options_hi: ["फॉन्ट-फैमिली", "फॉन्ट-वेट", "फॉन्ट-स्टाइल", "फॉन्ट-वैरिएंट"],
    answer_en: "font-family",
    answer_hi: "फॉन्ट-फैमिली",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which CSS property controls the spacing between words in a paragraph?",
    question_hi: "कौन सी CSS प्रॉपर्टी पैराग्राफ में शब्दों के बीच की जगह नियंत्रित करती है?",
    options_en: ["word-spacing", "letter-spacing", "line-height", "text-indent"],
    options_hi: ["वर्ड-स्पेसिंग", "लेटर-स्पेसिंग", "लाइन-हाइट", "टेक्स्ट-इंडेंट"],
    answer_en: "word-spacing",
    answer_hi: "वर्ड-स्पेसिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which property is used to align inline elements vertically?",
    question_hi: "कौन सी प्रॉपर्टी इनलाइन एलिमेंट्स को वर्टिकली अलाइन करती है?",
    options_en: ["vertical-align", "text-align", "line-height", "font-weight"],
    options_hi: ["वर्टिकल-अलाइन", "टेक्स्ट-अलाइन", "लाइन-हाइट", "फॉन्ट-वेट"],
    answer_en: "vertical-align",
    answer_hi: "वर्टिकल-अलाइन",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which property sets the text to be both bold and underlined?",
    question_hi: "कौन सी प्रॉपर्टी टेक्स्ट को बोल्ड और अंडरलाइन दोनों बनाती है?",
    options_en: ["font-weight: bold and text-decoration: underline", "font-weight: normal and text-decoration: none", "font-style: italic and text-decoration: none", "text-transform: uppercase and text-decoration: none"],
    options_hi: ["फॉन्ट-वेट: बोल्ड और टेक्स्ट डेकोरेशन: अंडरलाइन", "फॉन्ट-वेट: नॉर्मल और टेक्स्ट डेकोरेशन: नन", "फॉन्ट-स्टाइल: इटैलिक और टेक्स्ट डेकोरेशन: नन", "टेक्स्ट-ट्रांसफॉर्म: अपरकेस और टेक्स्ट डेकोरेशन: नन"],
    answer_en: "font-weight: bold and text-decoration: underline",
    answer_hi: "फॉन्ट-वेट: बोल्ड और टेक्स्ट डेकोरेशन: अंडरलाइन",
    attempted: false,
    selected: ""
  }
     ],
      11:[
         {
    num: 1,
    question_en: "Which display value makes an element behave like a block element?",
    question_hi: "कौन सा display मान एक एलिमेंट को ब्लॉक एलिमेंट की तरह व्यवहार करता है?",
    options_en: ["block", "inline", "inline-block", "none"],
    options_hi: ["ब्लॉक", "इनलाइन", "इनलाइन-ब्लॉक", "नन"],
    answer_en: "block",
    answer_hi: "ब्लॉक",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which display value makes an element behave like an inline element?",
    question_hi: "कौन सा display मान एक एलिमेंट को इनलाइन एलिमेंट की तरह व्यवहार करता है?",
    options_en: ["inline", "block", "flex", "grid"],
    options_hi: ["इनलाइन", "ब्लॉक", "फ्लेक्स", "ग्रिड"],
    answer_en: "inline",
    answer_hi: "इनलाइन",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which display property value allows an element to be inline but accept width and height?",
    question_hi: "कौन सा display मान एक एलिमेंट को इनलाइन बनाता है लेकिन चौड़ाई और ऊँचाई स्वीकार करता है?",
    options_en: ["inline-block", "inline", "block", "none"],
    options_hi: ["इनलाइन-ब्लॉक", "इनलाइन", "ब्लॉक", "नन"],
    answer_en: "inline-block",
    answer_hi: "इनलाइन-ब्लॉक",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which display value hides the element from the page completely?",
    question_hi: "कौन सा display मान एलिमेंट को पूरी तरह से पेज से छुपा देता है?",
    options_en: ["none", "block", "inline", "flex"],
    options_hi: ["नन", "ब्लॉक", "इनलाइन", "फ्लेक्स"],
    answer_en: "none",
    answer_hi: "नन",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which display value makes an element a flex container?",
    question_hi: "कौन सा display मान एक एलिमेंट को फ्लेक्स कंटेनर बनाता है?",
    options_en: ["flex", "block", "inline", "grid"],
    options_hi: ["फ्लेक्स", "ब्लॉक", "इनलाइन", "ग्रिड"],
    answer_en: "flex",
    answer_hi: "फ्लेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which display value makes an element a grid container?",
    question_hi: "कौन सा display मान एक एलिमेंट को ग्रिड कंटेनर बनाता है?",
    options_en: ["grid", "flex", "block", "inline-block"],
    options_hi: ["ग्रिड", "फ्लेक्स", "ब्लॉक", "इनलाइन-ब्लॉक"],
    answer_en: "grid",
    answer_hi: "ग्रिड",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which display type allows flex items to wrap onto multiple lines?",
    question_hi: "कौन सा display टाइप फ्लेक्स आइटम्स को कई लाइनों में लपेटने की अनुमति देता है?",
    options_en: ["flex-wrap", "inline", "block", "none"],
    options_hi: ["फ्लेक्स-व्रैप", "इनलाइन", "ब्लॉक", "नन"],
    answer_en: "flex-wrap",
    answer_hi: "फ्लेक्स-व्रैप",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which display value keeps elements in the normal document flow and allows width and height?",
    question_hi: "कौन सा display मान एलिमेंट्स को सामान्य दस्तावेज़ प्रवाह में रखता है और चौड़ाई व ऊँचाई की अनुमति देता है?",
    options_en: ["inline-block", "inline", "block", "none"],
    options_hi: ["इनलाइन-ब्लॉक", "इनलाइन", "ब्लॉक", "नन"],
    answer_en: "inline-block",
    answer_hi: "इनलाइन-ब्लॉक",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "What is the default display value of a <div> element?",
    question_hi: "<div> एलिमेंट का डिफ़ॉल्ट display मान क्या है?",
    options_en: ["block", "inline", "inline-block", "none"],
    options_hi: ["ब्लॉक", "इनलाइन", "इनलाइन-ब्लॉक", "नन"],
    answer_en: "block",
    answer_hi: "ब्लॉक",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "What is the default display value of a <span> element?",
    question_hi: "<span> एलिमेंट का डिफ़ॉल्ट display मान क्या है?",
    options_en: ["inline", "block", "inline-block", "none"],
    options_hi: ["इनलाइन", "ब्लॉक", "इनलाइन-ब्लॉक", "नन"],
    answer_en: "inline",
    answer_hi: "इनलाइन",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which display value is useful for creating flexible layouts in CSS?",
    question_hi: "CSS में फ्लेक्सिबल लेआउट बनाने के लिए कौन सा display मान उपयोगी है?",
    options_en: ["flex", "block", "inline", "none"],
    options_hi: ["फ्लेक्स", "ब्लॉक", "इनलाइन", "नन"],
    answer_en: "flex",
    answer_hi: "फ्लेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which display property can you use to create a two-dimensional layout?",
    question_hi: "दो-आयामी लेआउट बनाने के लिए कौन सी display प्रॉपर्टी का उपयोग किया जा सकता है?",
    options_en: ["grid", "flex", "block", "inline"],
    options_hi: ["ग्रिड", "फ्लेक्स", "ब्लॉक", "इनलाइन"],
    answer_en: "grid",
    answer_hi: "ग्रिड",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which display value removes an element but does not affect the layout of other elements?",
    question_hi: "कौन सा display मान एलिमेंट को हटा देता है लेकिन अन्य एलिमेंट्स के लेआउट को प्रभावित नहीं करता?",
    options_en: ["none", "block", "inline", "flex"],
    options_hi: ["नन", "ब्लॉक", "इनलाइन", "फ्लेक्स"],
    answer_en: "none",
    answer_hi: "नन",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Can an element with display: inline accept width and height?",
    question_hi: "क्या display: inline वाला एलिमेंट चौड़ाई और ऊंचाई स्वीकार कर सकता है?",
    options_en: ["No", "Yes", "Only width", "Only height"],
    options_hi: ["नहीं", "हाँ", "केवल चौड़ाई", "केवल ऊंचाई"],
    answer_en: "No",
    answer_hi: "नहीं",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which display value allows elements to behave like inline elements but also accept height and width?",
    question_hi: "कौन सा display मान एलिमेंट्स को इनलाइन की तरह व्यवहार करने देता है लेकिन ऊंचाई और चौड़ाई स्वीकार भी करता है?",
    options_en: ["inline-block", "block", "inline", "none"],
    options_hi: ["इनलाइन-ब्लॉक", "ब्लॉक", "इनलाइन", "नन"],
    answer_en: "inline-block",
    answer_hi: "इनलाइन-ब्लॉक",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which display value is best suited for responsive web layouts?",
    question_hi: "रिस्पॉन्सिव वेब लेआउट के लिए कौन सा display मान सबसे उपयुक्त है?",
    options_en: ["flex", "inline", "block", "none"],
    options_hi: ["फ्लेक्स", "इनलाइन", "ब्लॉक", "नन"],
    answer_en: "flex",
    answer_hi: "फ्लेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which display value can be used with grid-template-columns and grid-template-rows?",
    question_hi: "कौन सा display मान grid-template-columns और grid-template-rows के साथ उपयोग किया जाता है?",
    options_en: ["grid", "flex", "block", "inline"],
    options_hi: ["ग्रिड", "फ्लेक्स", "ब्लॉक", "इनलाइन"],
    answer_en: "grid",
    answer_hi: "ग्रिड",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which display property value allows flex items to be aligned horizontally or vertically?",
    question_hi: "कौन सा display मान फ्लेक्स आइटम्स को क्षैतिज या ऊर्ध्वाधर संरेखित करने देता है?",
    options_en: ["flex", "block", "inline", "none"],
    options_hi: ["फ्लेक्स", "ब्लॉक", "इनलाइन", "नन"],
    answer_en: "flex",
    answer_hi: "फ्लेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which display value is used to show an element as an inline flex container?",
    question_hi: "कौन सा display मान एलिमेंट को इनलाइन फ्लेक्स कंटेनर के रूप में दिखाता है?",
    options_en: ["inline-flex", "inline-block", "block", "flex"],
    options_hi: ["इनलाइन-फ्लेक्स", "इनलाइन-ब्लॉक", "ब्लॉक", "फ्लेक्स"],
    answer_en: "inline-flex",
    answer_hi: "इनलाइन-फ्लेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which display property value makes an element disappear but still take up space?",
    question_hi: "कौन सा display मान एलिमेंट को गायब कर देता है लेकिन फिर भी जगह लेता है?",
    options_en: ["visibility: hidden", "display: none", "opacity: 0", "position: absolute"],
    options_hi: ["विजिबिलिटी: हिडन", "डिस्प्ले: नन", "ओपेसिटी: 0", "पोजीशन: एब्सोल्यूट"],
    answer_en: "visibility: hidden",
    answer_hi: "विजिबिलिटी: हिडन",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which display value makes an element behave like a list-item?",
    question_hi: "कौन सा display मान एलिमेंट को लिस्ट-आइटम की तरह व्यवहार करता है?",
    options_en: ["list-item", "block", "inline", "flex"],
    options_hi: ["लिस्ट-आइटम", "ब्लॉक", "इनलाइन", "फ्लेक्स"],
    answer_en: "list-item",
    answer_hi: "लिस्ट-आइटम",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which display value creates a block-level flex container?",
    question_hi: "कौन सा display मान एक ब्लॉक-स्तरीय फ्लेक्स कंटेनर बनाता है?",
    options_en: ["flex", "inline-flex", "block", "inline-block"],
    options_hi: ["फ्लेक्स", "इनलाइन-फ्लेक्स", "ब्लॉक", "इनलाइन-ब्लॉक"],
    answer_en: "flex",
    answer_hi: "फ्लेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which display property value is best for making multi-column layouts?",
    question_hi: "मल्टी-कॉलम लेआउट बनाने के लिए कौन सा display मान सबसे अच्छा है?",
    options_en: ["grid", "flex", "block", "inline"],
    options_hi: ["ग्रिड", "फ्लेक्स", "ब्लॉक", "इनलाइन"],
    answer_en: "grid",
    answer_hi: "ग्रिड",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which display value allows an element to behave like an inline flex container?",
    question_hi: "कौन सा display मान एक एलिमेंट को इनलाइन फ्लेक्स कंटेनर की तरह व्यवहार करने देता है?",
    options_en: ["inline-flex", "flex", "inline-block", "block"],
    options_hi: ["इनलाइन-फ्लेक्स", "फ्लेक्स", "इनलाइन-ब्लॉक", "ब्लॉक"],
    answer_en: "inline-flex",
    answer_hi: "इनलाइन-फ्लेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which display value makes an element behave like a table?",
    question_hi: "कौन सा display मान एक एलिमेंट को टेबल की तरह व्यवहार करने देता है?",
    options_en: ["table", "block", "inline", "flex"],
    options_hi: ["टेबल", "ब्लॉक", "इनलाइन", "फ्लेक्स"],
    answer_en: "table",
    answer_hi: "टेबल",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Which display value allows an element to behave like an inline table?",
    question_hi: "कौन सा display मान एक एलिमेंट को इनलाइन टेबल की तरह व्यवहार करने देता है?",
    options_en: ["inline-table", "inline-block", "inline", "block"],
    options_hi: ["इनलाइन-टेबल", "इनलाइन-ब्लॉक", "इनलाइन", "ब्लॉक"],
    answer_en: "inline-table",
    answer_hi: "इनलाइन-टेबल",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which display value hides the element but still allows it to take up space?",
    question_hi: "कौन सा display मान एलिमेंट को छुपा देता है लेकिन फिर भी जगह लेता है?",
    options_en: ["visibility: hidden", "display: none", "opacity: 0", "position: absolute"],
    options_hi: ["विजिबिलिटी: हिडन", "डिस्प्ले: नन", "ओपेसिटी: 0", "पोजीशन: एब्सोल्यूट"],
    answer_en: "visibility: hidden",
    answer_hi: "विजिबिलिटी: हिडन",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which display value will remove an element from the layout flow entirely?",
    question_hi: "कौन सा display मान एलिमेंट को पूरी तरह से लेआउट फ्लो से हटा देता है?",
    options_en: ["display: none", "visibility: hidden", "opacity: 0", "position: fixed"],
    options_hi: ["डिस्प्ले: नन", "विजिबिलिटी: हिडन", "ओपेसिटी: 0", "पोजीशन: फिक्स्ड"],
    answer_en: "display: none",
    answer_hi: "डिस्प्ले: नन",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which display value makes the element a flex container with horizontal flow by default?",
    question_hi: "कौन सा display मान एलिमेंट को डिफ़ॉल्ट रूप से क्षैतिज फ्लो वाला फ्लेक्स कंटेनर बनाता है?",
    options_en: ["flex", "grid", "block", "inline-flex"],
    options_hi: ["फ्लेक्स", "ग्रिड", "ब्लॉक", "इनलाइन-फ्लेक्स"],
    answer_en: "flex",
    answer_hi: "फ्लेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "What display value would you use to create a grid container?",
    question_hi: "ग्रिड कंटेनर बनाने के लिए आप कौन सा display मान उपयोग करेंगे?",
    options_en: ["grid", "flex", "block", "inline-block"],
    options_hi: ["ग्रिड", "फ्लेक्स", "ब्लॉक", "इनलाइन-ब्लॉक"],
    answer_en: "grid",
    answer_hi: "ग्रिड",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which display value is the default for list items (<li>)?",
    question_hi: "<li> (लिस्ट आइटम) के लिए डिफ़ॉल्ट display मान क्या है?",
    options_en: ["list-item", "block", "inline", "flex"],
    options_hi: ["लिस्ट-आइटम", "ब्लॉक", "इनलाइन", "फ्लेक्स"],
    answer_en: "list-item",
    answer_hi: "लिस्ट-आइटम",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which display property is best for creating a navigation bar with flexible items?",
    question_hi: "फ्लेक्सिबल आइटम्स के साथ नेविगेशन बार बनाने के लिए कौन सी display प्रॉपर्टी सबसे अच्छी है?",
    options_en: ["flex", "block", "inline", "grid"],
    options_hi: ["फ्लेक्स", "ब्लॉक", "इनलाइन", "ग्रिड"],
    answer_en: "flex",
    answer_hi: "फ्लेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which CSS display value would allow an element to shrink and grow dynamically within a container?",
    question_hi: "कौन सा CSS display मान एक एलिमेंट को कंटेनर के भीतर डायनामिक रूप से सिकुड़ने और बढ़ने की अनुमति देता है?",
    options_en: ["flex", "block", "inline", "none"],
    options_hi: ["फ्लेक्स", "ब्लॉक", "इनलाइन", "नन"],
    answer_en: "flex",
    answer_hi: "फ्लेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which display value is used to position an element as a table row?",
    question_hi: "कौन सा display मान एलिमेंट को टेबल रो के रूप में स्थिति करने के लिए उपयोग किया जाता है?",
    options_en: ["table-row", "block", "inline", "flex"],
    options_hi: ["टेबल-रो", "ब्लॉक", "इनलाइन", "फ्लेक्स"],
    answer_en: "table-row",
    answer_hi: "टेबल-रो",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which display value is used to position an element as a table cell?",
    question_hi: "कौन सा display मान एलिमेंट को टेबल सेल के रूप में स्थिति करने के लिए उपयोग किया जाता है?",
    options_en: ["table-cell", "block", "inline", "flex"],
    options_hi: ["टेबल-सेल", "ब्लॉक", "इनलाइन", "फ्लेक्स"],
    answer_en: "table-cell",
    answer_hi: "टेबल-सेल",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which display value allows nested flex containers inside other flex containers?",
    question_hi: "कौन सा display मान अन्य फ्लेक्स कंटेनरों के अंदर नेस्टेड फ्लेक्स कंटेनरों की अनुमति देता है?",
    options_en: ["flex", "grid", "block", "inline"],
    options_hi: ["फ्लेक्स", "ग्रिड", "ब्लॉक", "इनलाइन"],
    answer_en: "flex",
    answer_hi: "फ्लेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which display value would make an element behave like an inline flex container?",
    question_hi: "कौन सा display मान एक एलिमेंट को इनलाइन फ्लेक्स कंटेनर की तरह व्यवहार करने देता है?",
    options_en: ["inline-flex", "flex", "inline", "block"],
    options_hi: ["इनलाइन-फ्लेक्स", "फ्लेक्स", "इनलाइन", "ब्लॉक"],
    answer_en: "inline-flex",
    answer_hi: "इनलाइन-फ्लेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which display property would you use for hidden elements that do not affect layout or take space?",
    question_hi: "कौन सी display प्रॉपर्टी आप छुपे हुए एलिमेंट्स के लिए उपयोग करेंगे जो लेआउट को प्रभावित नहीं करते या जगह नहीं लेते?",
    options_en: ["display: none", "visibility: hidden", "opacity: 0", "position: absolute"],
    options_hi: ["डिस्प्ले: नन", "विजिबिलिटी: हिडन", "ओपेसिटी: 0", "पोजीशन: एब्सोल्यूट"],
    answer_en: "display: none",
    answer_hi: "डिस्प्ले: नन",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which display value allows grid items to be positioned into rows and columns?",
    question_hi: "कौन सा display मान ग्रिड आइटम्स को पंक्तियों और स्तंभों में स्थिति करने की अनुमति देता है?",
    options_en: ["grid", "flex", "block", "inline"],
    options_hi: ["ग्रिड", "फ्लेक्स", "ब्लॉक", "इनलाइन"],
    answer_en: "grid",
    answer_hi: "ग्रिड",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which display value is best for creating responsive layouts that adapt to screen size?",
    question_hi: "स्क्रीन साइज के अनुसार अनुकूलित होने वाले रिस्पॉन्सिव लेआउट बनाने के लिए कौन सा display मान सबसे अच्छा है?",
    options_en: ["flex", "block", "inline", "none"],
    options_hi: ["फ्लेक्स", "ब्लॉक", "इनलाइन", "नन"],
    answer_en: "flex",
    answer_hi: "फ्लेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which display value sets an element to behave like a table column group?",
    question_hi: "कौन सा display मान एलिमेंट को टेबल कॉलम ग्रुप की तरह व्यवहार करने देता है?",
    options_en: ["table-column-group", "block", "inline", "flex"],
    options_hi: ["टेबल-कॉलम-ग्रुप", "ब्लॉक", "इनलाइन", "फ्लेक्स"],
    answer_en: "table-column-group",
    answer_hi: "टेबल-कॉलम-ग्रुप",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which display value is used for table captions?",
    question_hi: "टेबल कैप्शन के लिए कौन सा display मान उपयोग किया जाता है?",
    options_en: ["table-caption", "block", "inline", "flex"],
    options_hi: ["टेबल-कैप्शन", "ब्लॉक", "इनलाइन", "फ्लेक्स"],
    answer_en: "table-caption",
    answer_hi: "टेबल-कैप्शन",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which display value is useful for making a flex container that stacks items vertically?",
    question_hi: "वर्टिकल आइटम्स को स्टैक करने वाला फ्लेक्स कंटेनर बनाने के लिए कौन सा display मान उपयोगी है?",
    options_en: ["flex", "grid", "block", "inline"],
    options_hi: ["फ्लेक्स", "ग्रिड", "ब्लॉक", "इनलाइन"],
    answer_en: "flex",
    answer_hi: "फ्लेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which display value allows elements to flow inline with other elements but also accept box model properties?",
    question_hi: "कौन सा display मान एलिमेंट्स को अन्य एलिमेंट्स के साथ इनलाइन फ्लो करने देता है लेकिन बॉक्स मॉडल प्रॉपर्टीज़ भी स्वीकार करता है?",
    options_en: ["inline-block", "inline", "block", "flex"],
    options_hi: ["इनलाइन-ब्लॉक", "इनलाइन", "ब्लॉक", "फ्लेक्स"],
    answer_en: "inline-block",
    answer_hi: "इनलाइन-ब्लॉक",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which display value is used to reset an element to default block behavior?",
    question_hi: "कौन सा display मान एलिमेंट को डिफ़ॉल्ट ब्लॉक व्यवहार में रीसेट करने के लिए उपयोग किया जाता है?",
    options_en: ["block", "inline", "none", "flex"],
    options_hi: ["ब्लॉक", "इनलाइन", "नन", "फ्लेक्स"],
    answer_en: "block",
    answer_hi: "ब्लॉक",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which display value lets flex items be distributed along the main axis?",
    question_hi: "कौन सा display मान फ्लेक्स आइटम्स को मुख्य अक्ष के साथ वितरित करने देता है?",
    options_en: ["flex", "inline-flex", "block", "inline"],
    options_hi: ["फ्लेक्स", "इनलाइन-फ्लेक्स", "ब्लॉक", "इनलाइन"],
    answer_en: "flex",
    answer_hi: "फ्लेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which display value is used for table footers?",
    question_hi: "टेबल फुटर के लिए कौन सा display मान उपयोग किया जाता है?",
    options_en: ["table-footer-group", "block", "inline", "flex"],
    options_hi: ["टेबल-फुटर-ग्रुप", "ब्लॉक", "इनलाइन", "फ्लेक्स"],
    answer_en: "table-footer-group",
    answer_hi: "टेबल-फुटर-ग्रुप",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which display value is used for table header groups?",
    question_hi: "टेबल हेडर ग्रुप के लिए कौन सा display मान उपयोग किया जाता है?",
    options_en: ["table-header-group", "block", "inline", "flex"],
    options_hi: ["टेबल-हेडर-ग्रुप", "ब्लॉक", "इनलाइन", "फ्लेक्स"],
    answer_en: "table-header-group",
    answer_hi: "टेबल-हेडर-ग्रुप",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which display value is best suited for a container that needs to adapt to both rows and columns?",
    question_hi: "कौन सा display मान ऐसे कंटेनर के लिए सबसे उपयुक्त है जिसे पंक्तियों और स्तंभों दोनों में अनुकूलित होना होता है?",
    options_en: ["grid", "flex", "block", "inline-block"],
    options_hi: ["ग्रिड", "फ्लेक्स", "ब्लॉक", "इनलाइन-ब्लॉक"],
    answer_en: "grid",
    answer_hi: "ग्रिड",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which display value allows an element to behave like a run-in container?",
    question_hi: "कौन सा display मान एक एलिमेंट को रन-इन कंटेनर की तरह व्यवहार करने देता है?",
    options_en: ["run-in", "block", "inline", "flex"],
    options_hi: ["रन-इन", "ब्लॉक", "इनलाइन", "फ्लेक्स"],
    answer_en: "run-in",
    answer_hi: "रन-इन",
    attempted: false,
    selected: ""
  }
      ],
      12:[
       {
    num: 1,
    question_en: "Which property aligns text to the center?",
    question_hi: "कौन-सी प्रॉपर्टी टेक्स्ट को केंद्र में संरेखित करती है?",
    options_en: ["text-align", "vertical-align", "align-items", "justify-content"],
    options_hi: ["टेक्स्ट संरेखण", "ऊर्ध्वाधर संरेखण", "आइटम संरेखण", "न्यायसंगत सामग्री"],
    answer_en: "text-align",
    answer_hi: "टेक्स्ट संरेखण",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which property specifies the maximum width of an element?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट की अधिकतम चौड़ाई निर्दिष्ट करती है?",
    options_en: ["max-width", "min-width", "width", "height"],
    options_hi: ["अधिकतम चौड़ाई", "न्यूनतम चौड़ाई", "चौड़ाई", "ऊँचाई"],
    answer_en: "max-width",
    answer_hi: "अधिकतम चौड़ाई",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which property is used to make an element respond to mouse hover?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट को माउस होवर पर प्रतिक्रिया देने के लिए उपयोग होती है?",
    options_en: ["hover", ":hover", "mouse-over", "pointer-events"],
    options_hi: ["होवर", ":होवर", "माउस-ओवर", "पॉइंटर इवेंट्स"],
    answer_en: ":hover",
    answer_hi: ":होवर",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which CSS property is used to change the font of an element?",
    question_hi: "किस CSS प्रॉपर्टी का उपयोग एलिमेंट के फ़ॉन्ट को बदलने के लिए किया जाता है?",
    options_en: ["font-family", "font-style", "font-weight", "text-transform"],
    options_hi: ["फ़ॉन्ट परिवार", "फ़ॉन्ट शैली", "फ़ॉन्ट मोटाई", "टेक्स्ट ट्रांसफॉर्म"],
    answer_en: "font-family",
    answer_hi: "फ़ॉन्ट परिवार",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which property sets the outer margin of an element?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट का बाहरी मार्जिन सेट करती है?",
    options_en: ["margin", "padding", "border", "outline"],
    options_hi: ["मार्जिन", "पैडिंग", "बॉर्डर", "आउटलाइन"],
    answer_en: "margin",
    answer_hi: "मार्जिन",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which CSS property is used to control the space inside the element’s border?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एलिमेंट के बॉर्डर के अंदर का स्पेस नियंत्रित करती है?",
    options_en: ["padding", "margin", "border-spacing", "spacing"],
    options_hi: ["पैडिंग", "मार्जिन", "बॉर्डर स्पेसिंग", "स्पेसिंग"],
    answer_en: "padding",
    answer_hi: "पैडिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which property is used to hide an element but keep its space on the page?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट को छुपाती है लेकिन उसकी जगह बनाए रखती है?",
    options_en: ["visibility", "display", "opacity", "hidden"],
    options_hi: ["दृश्यता", "प्रदर्शन", "अपारदर्शिता", "छुपा हुआ"],
    answer_en: "visibility",
    answer_hi: "दृश्यता",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which property removes an element completely from the page layout?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट को पूरी तरह से पेज लेआउट से हटा देती है?",
    options_en: ["display", "visibility", "opacity", "position"],
    options_hi: ["प्रदर्शन", "दृश्यता", "अपारदर्शिता", "स्थिति"],
    answer_en: "display",
    answer_hi: "प्रदर्शन",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which CSS property is used to make text bold?",
    question_hi: "कौन-सी CSS प्रॉपर्टी टेक्स्ट को बोल्ड बनाने के लिए उपयोग होती है?",
    options_en: ["font-weight", "font-style", "text-decoration", "text-transform"],
    options_hi: ["फ़ॉन्ट मोटाई", "फ़ॉन्ट शैली", "टेक्स्ट सजावट", "टेक्स्ट ट्रांसफॉर्म"],
    answer_en: "font-weight",
    answer_hi: "फ़ॉन्ट मोटाई",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which CSS property is used to set the transparency of an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एलिमेंट की पारदर्शिता सेट करती है?",
    options_en: ["opacity", "visibility", "display", "filter"],
    options_hi: ["अपारदर्शिता", "दृश्यता", "प्रदर्शन", "फिल्टर"],
    answer_en: "opacity",
    answer_hi: "अपारदर्शिता",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which CSS property controls the flow of elements inside a container?",
    question_hi: "कौन-सी CSS प्रॉपर्टी कंटेनर के अंदर एलिमेंट्स के फ्लो को नियंत्रित करती है?",
    options_en: ["float", "clear", "position", "display"],
    options_hi: ["तैरना", "साफ़ करना", "स्थिति", "प्रदर्शन"],
    answer_en: "float",
    answer_hi: "तैरना",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which property is used to clear floated elements?",
    question_hi: "कौन-सी प्रॉपर्टी फ्लोटेड एलिमेंट्स को साफ़ करने के लिए उपयोग होती है?",
    options_en: ["clear", "float", "overflow", "position"],
    options_hi: ["साफ़ करना", "तैरना", "ओवरफ्लो", "स्थिति"],
    answer_en: "clear",
    answer_hi: "साफ़ करना",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which property controls the position of an element?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट की स्थिति नियंत्रित करती है?",
    options_en: ["position", "top", "left", "right"],
    options_hi: ["स्थिति", "ऊपर", "बाएँ", "दाएँ"],
    answer_en: "position",
    answer_hi: "स्थिति",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which CSS property is used to add space between lines of text?",
    question_hi: "कौन-सी CSS प्रॉपर्टी टेक्स्ट की लाइनों के बीच जगह जोड़ती है?",
    options_en: ["line-height", "letter-spacing", "word-spacing", "text-indent"],
    options_hi: ["लाइन ऊँचाई", "अक्षर स्पेसिंग", "शब्द स्पेसिंग", "टेक्स्ट इंडेंट"],
    answer_en: "line-height",
    answer_hi: "लाइन ऊँचाई",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which property controls the spacing between letters?",
    question_hi: "कौन-सी प्रॉपर्टी अक्षरों के बीच की दूरी नियंत्रित करती है?",
    options_en: ["letter-spacing", "word-spacing", "line-height", "text-align"],
    options_hi: ["अक्षर स्पेसिंग", "शब्द स्पेसिंग", "लाइन ऊँचाई", "टेक्स्ट संरेखण"],
    answer_en: "letter-spacing",
    answer_hi: "अक्षर स्पेसिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which CSS property controls the stacking order of elements?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एलिमेंट्स के स्टैकिंग क्रम को नियंत्रित करती है?",
    options_en: ["z-index", "position", "stack", "order"],
    options_hi: ["z-इंडेक्स", "स्थिति (position)", "स्टैक (stack)", "क्रम (order)"],
    answer_en: "z-index",
    answer_hi: "z-इंडेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which property is used to change the background color of an element?",
    question_hi: "किस प्रॉपर्टी का उपयोग एलिमेंट के पृष्ठभूमि रंग को बदलने के लिए किया जाता है?",
    options_en: ["background-color", "color", "background-image", "border-color"],
    options_hi: ["पृष्ठभूमि रंग", "रंग", "पृष्ठभूमि छवि", "बॉर्डर रंग"],
    answer_en: "background-color",
    answer_hi: "पृष्ठभूमि रंग",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which CSS property controls the text size?",
    question_hi: "कौन-सी CSS प्रॉपर्टी टेक्स्ट का आकार नियंत्रित करती है?",
    options_en: ["font-size", "text-size", "font-style", "text-style"],
    options_hi: ["फ़ॉन्ट आकार", "टेक्स्ट आकार", "फ़ॉन्ट शैली", "टेक्स्ट शैली"],
    answer_en: "font-size",
    answer_hi: "फ़ॉन्ट आकार",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which CSS property controls the visibility of an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एलिमेंट की दृश्यता नियंत्रित करती है?",
    options_en: ["visibility", "display", "opacity", "filter"],
    options_hi: ["दृश्यता", "प्रदर्शन", "अपारदर्शिता", "फिल्टर"],
    answer_en: "visibility",
    answer_hi: "दृश्यता",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which property is used to add a border around an element?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट के चारों ओर बॉर्डर जोड़ने के लिए उपयोग होती है?",
    options_en: ["border", "outline", "margin", "padding"],
    options_hi: ["बॉर्डर", "आउटलाइन", "मार्जिन", "पैडिंग"],
    answer_en: "border",
    answer_hi: "बॉर्डर",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which CSS property specifies the font style?",
    question_hi: "कौन-सी CSS प्रॉपर्टी फ़ॉन्ट शैली निर्दिष्ट करती है?",
    options_en: ["font-style", "font-weight", "font-family", "text-transform"],
    options_hi: ["फ़ॉन्ट शैली", "फ़ॉन्ट मोटाई", "फ़ॉन्ट परिवार", "टेक्स्ट ट्रांसफॉर्म"],
    answer_en: "font-style",
    answer_hi: "फ़ॉन्ट शैली",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which property is used to transform text to uppercase?",
    question_hi: "कौन-सी प्रॉपर्टी टेक्स्ट को अपरकेस में बदलने के लिए उपयोग होती है?",
    options_en: ["text-transform", "text-decoration", "text-align", "text-indent"],
    options_hi: ["टेक्स्ट ट्रांसफॉर्म", "टेक्स्ट सजावट", "टेक्स्ट संरेखण", "टेक्स्ट इंडेंट"],
    answer_en: "text-transform",
    answer_hi: "टेक्स्ट ट्रांसफॉर्म",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which property controls the overflow of content?",
    question_hi: "कौन-सी प्रॉपर्टी कंटेंट के ओवरफ्लो को नियंत्रित करती है?",
    options_en: ["overflow", "overflow-x", "overflow-y", "text-overflow"],
    options_hi: ["ओवरफ्लो", "ओवरफ्लो-एक्स", "ओवरफ्लो-वाय", "टेक्स्ट ओवरफ्लो"],
    answer_en: "overflow",
    answer_hi: "ओवरफ्लो",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which CSS property is used to change the cursor on mouse hover?",
    question_hi: "माउस होवर पर कर्सर को बदलने के लिए कौन-सी CSS प्रॉपर्टी का उपयोग किया जाता है?",
    options_en: ["cursor", "pointer-events", "hover", "mouse-pointer"],
    options_hi: ["कर्सर", "पॉइंटर इवेंट्स", "होवर", "माउस पॉइंटर"],
    answer_en: "cursor",
    answer_hi: "कर्सर",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which property is used to set the height of an element?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट की ऊँचाई सेट करने के लिए उपयोग होती है?",
    options_en: ["height", "width", "max-height", "min-height"],
    options_hi: ["ऊँचाई", "चौड़ाई", "अधिकतम ऊँचाई", "न्यूनतम ऊँचाई"],
    answer_en: "height",
    answer_hi: "ऊँचाई",
    attempted: false,
    selected: ""
  },
   {
    num: 26,
    question_en: "Which property is used to control the space between words?",
    question_hi: "शब्दों के बीच की दूरी नियंत्रित करने के लिए कौन-सी प्रॉपर्टी उपयोग होती है?",
    options_en: ["word-spacing", "letter-spacing", "line-height", "text-indent"],
    options_hi: ["शब्द स्पेसिंग", "अक्षर स्पेसिंग", "लाइन ऊँचाई", "टेक्स्ट इंडेंट"],
    answer_en: "word-spacing",
    answer_hi: "शब्द स्पेसिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which CSS property is used to make an element’s corners rounded?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एलिमेंट के कोनों को गोल बनाने के लिए उपयोग होती है?",
    options_en: ["border-radius", "border-style", "border-width", "border-color"],
    options_hi: ["बॉर्डर रेडियस", "बॉर्डर स्टाइल", "बॉर्डर चौड़ाई", "बॉर्डर रंग"],
    answer_en: "border-radius",
    answer_hi: "बॉर्डर रेडियस",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which property is used to set the transparency of the background image?",
    question_hi: "पृष्ठभूमि छवि की पारदर्शिता सेट करने के लिए कौन-सी प्रॉपर्टी उपयोग होती है?",
    options_en: ["background-opacity", "opacity", "background-transparent", "visibility"],
    options_hi: ["पृष्ठभूमि अपारदर्शिता", "अपारदर्शिता", "पृष्ठभूमि पारदर्शिता", "दृश्यता"],
    answer_en: "opacity",
    answer_hi: "अपारदर्शिता",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which property controls the style of the list item marker?",
    question_hi: "कौन-सी प्रॉपर्टी सूची आइटम मार्कर की शैली नियंत्रित करती है?",
    options_en: ["list-style-type", "list-style-position", "list-style", "marker-style"],
    options_hi: ["लिस्ट स्टाइल टाइप", "लिस्ट स्टाइल पोजीशन", "लिस्ट स्टाइल", "मार्कर स्टाइल"],
    answer_en: "list-style-type",
    answer_hi: "लिस्ट स्टाइल टाइप",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which property sets the style of the border?",
    question_hi: "कौन-सी प्रॉपर्टी बॉर्डर की शैली सेट करती है?",
    options_en: ["border-style", "border-width", "border-color", "border-radius"],
    options_hi: ["बॉर्डर स्टाइल", "बॉर्डर चौड़ाई", "बॉर्डर रंग", "बॉर्डर रेडियस"],
    answer_en: "border-style",
    answer_hi: "बॉर्डर स्टाइल",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which property controls the visibility of overflow content?",
    question_hi: "कौन-सी प्रॉपर्टी ओवरफ्लो कंटेंट की दृश्यता नियंत्रित करती है?",
    options_en: ["overflow", "overflow-x", "overflow-y", "clip"],
    options_hi: ["ओवरफ्लो", "ओवरफ्लो-एक्स", "ओवरफ्लो-वाय", "क्लिप"],
    answer_en: "overflow",
    answer_hi: "ओवरफ्लो",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which CSS property specifies the stacking context?",
    question_hi: "कौन-सी CSS प्रॉपर्टी स्टैकिंग कॉन्टेक्स्ट निर्दिष्ट करती है?",
    options_en: ["z-index", "stacking-context", "position", "order"],
    options_hi: ["z-इंडेक्स", "स्टैकिंग कॉन्टेक्स्ट", "स्थिति", "क्रम"],
    answer_en: "z-index",
    answer_hi: "z-इंडेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which property is used to change the display of an element to block?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट का प्रदर्शन ब्लॉक में बदलती है?",
    options_en: ["display", "visibility", "position", "float"],
    options_hi: ["प्रदर्शन", "दृश्यता", "स्थिति", "तैरना"],
    answer_en: "display",
    answer_hi: "प्रदर्शन",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which CSS property is used to control the position of a background image?",
    question_hi: "कौन-सी CSS प्रॉपर्टी पृष्ठभूमि छवि की स्थिति नियंत्रित करती है?",
    options_en: ["background-position", "background-repeat", "background-size", "background-attachment"],
    options_hi: ["पृष्ठभूमि स्थिति", "पृष्ठभूमि पुनरावृत्ति", "पृष्ठभूमि आकार", "पृष्ठभूमि संलग्नक"],
    answer_en: "background-position",
    answer_hi: "पृष्ठभूमि स्थिति",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which property is used to repeat a background image?",
    question_hi: "कौन-सी प्रॉपर्टी पृष्ठभूमि छवि को दोहराने के लिए उपयोग होती है?",
    options_en: ["background-repeat", "background-position", "background-size", "background-attachment"],
    options_hi: ["पृष्ठभूमि पुनरावृत्ति", "पृष्ठभूमि स्थिति", "पृष्ठभूमि आकार", "पृष्ठभूमि संलग्नक"],
    answer_en: "background-repeat",
    answer_hi: "पृष्ठभूमि पुनरावृत्ति",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which CSS property specifies the size of the background image?",
    question_hi: "कौन-सी CSS प्रॉपर्टी पृष्ठभूमि छवि का आकार निर्दिष्ट करती है?",
    options_en: ["background-size", "background-position", "background-repeat", "background-attachment"],
    options_hi: ["पृष्ठभूमि आकार", "पृष्ठभूमि स्थिति", "पृष्ठभूमि पुनरावृत्ति", "पृष्ठभूमि संलग्नक"],
    answer_en: "background-size",
    answer_hi: "पृष्ठभूमि आकार",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which property attaches the background image to the viewport or the element?",
    question_hi: "कौन-सी प्रॉपर्टी पृष्ठभूमि छवि को व्यूपोर्ट या एलिमेंट से संलग्न करती है?",
    options_en: ["background-attachment", "background-position", "background-repeat", "background-size"],
    options_hi: ["पृष्ठभूमि संलग्नक", "पृष्ठभूमि स्थिति", "पृष्ठभूमि पुनरावृत्ति", "पृष्ठभूमि आकार"],
    answer_en: "background-attachment",
    answer_hi: "पृष्ठभूमि संलग्नक",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which CSS property controls how an element’s content is displayed when it overflows?",
    question_hi: "कौन-सी CSS प्रॉपर्टी तब कंटेंट के प्रदर्शन को नियंत्रित करती है जब वह ओवरफ्लो करता है?",
    options_en: ["overflow", "visibility", "display", "opacity"],
    options_hi: ["ओवरफ्लो", "दृश्यता", "प्रदर्शन", "अपारदर्शिता"],
    answer_en: "overflow",
    answer_hi: "ओवरफ्लो",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which property specifies how elements inside a flex container are aligned?",
    question_hi: "कौन-सी प्रॉपर्टी फ्लेक्स कंटेनर के अंदर एलिमेंट्स को संरेखित करने का तरीका निर्दिष्ट करती है?",
    options_en: ["align-items", "justify-content", "align-content", "flex-direction"],
    options_hi: ["आइटम संरेखण", "न्यायसंगत सामग्री", "सामग्री संरेखण", "फ्लेक्स दिशा"],
    answer_en: "align-items",
    answer_hi: "आइटम संरेखण",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which CSS property controls the flow direction of flex items?",
    question_hi: "कौन-सी CSS प्रॉपर्टी फ्लेक्स आइटम्स के फ्लो दिशा को नियंत्रित करती है?",
    options_en: ["flex-direction", "flex-wrap", "flex-grow", "flex-shrink"],
    options_hi: ["फ्लेक्स दिशा", "फ्लेक्स रैप", "फ्लेक्स ग्रो", "फ्लेक्स श्रिंक"],
    answer_en: "flex-direction",
    answer_hi: "फ्लेक्स दिशा",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which property defines the wrapping behavior of flex items?",
    question_hi: "कौन-सी प्रॉपर्टी फ्लेक्स आइटम्स के रैपिंग व्यवहार को परिभाषित करती है?",
    options_en: ["flex-wrap", "flex-direction", "flex-grow", "flex-shrink"],
    options_hi: ["फ्लेक्स रैप", "फ्लेक्स दिशा", "फ्लेक्स ग्रो", "फ्लेक्स श्रिंक"],
    answer_en: "flex-wrap",
    answer_hi: "फ्लेक्स रैप",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which property controls the ability of a flex item to grow?",
    question_hi: "कौन-सी प्रॉपर्टी फ्लेक्स आइटम के बढ़ने की क्षमता को नियंत्रित करती है?",
    options_en: ["flex-grow", "flex-shrink", "flex-basis", "flex-wrap"],
    options_hi: ["फ्लेक्स ग्रो", "फ्लेक्स श्रिंक", "फ्लेक्स बेसिस", "फ्लेक्स रैप"],
    answer_en: "flex-grow",
    answer_hi: "फ्लेक्स ग्रो",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which property controls the ability of a flex item to shrink?",
    question_hi: "कौन-सी प्रॉपर्टी फ्लेक्स आइटम के सिकुड़ने की क्षमता को नियंत्रित करती है?",
    options_en: ["flex-shrink", "flex-grow", "flex-basis", "flex-wrap"],
    options_hi: ["फ्लेक्स श्रिंक", "फ्लेक्स ग्रो", "फ्लेक्स बेसिस", "फ्लेक्स रैप"],
    answer_en: "flex-shrink",
    answer_hi: "फ्लेक्स श्रिंक",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which property defines the default size of a flex item before growing or shrinking?",
    question_hi: "कौन-सी प्रॉपर्टी फ्लेक्स आइटम के बढ़ने या सिकुड़ने से पहले की डिफ़ॉल्ट आकार को परिभाषित करती है?",
    options_en: ["flex-basis", "flex-grow", "flex-shrink", "flex-wrap"],
    options_hi: ["फ्लेक्स बेसिस", "फ्लेक्स ग्रो", "फ्लेक्स श्रिंक", "फ्लेक्स रैप"],
    answer_en: "flex-basis",
    answer_hi: "फ्लेक्स बेसिस",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which CSS property controls the space between flex items?",
    question_hi: "कौन-सी CSS प्रॉपर्टी फ्लेक्स आइटम्स के बीच की दूरी नियंत्रित करती है?",
    options_en: ["gap", "margin", "padding", "space-between"],
    options_hi: ["गैप", "मार्जिन", "पैडिंग", "स्पेस-बिटवीन"],
    answer_en: "gap",
    answer_hi: "गैप",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which property specifies the type of cursor when hovering over an element?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट पर होवर करते समय कर्सर के प्रकार को निर्दिष्ट करती है?",
    options_en: ["cursor", "pointer-events", "hover", "mouse-pointer"],
    options_hi: ["कर्सर", "पॉइंटर इवेंट्स", "होवर", "माउस पॉइंटर"],
    answer_en: "cursor",
    answer_hi: "कर्सर",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which property specifies the transition effect when a CSS property changes?",
    question_hi: "कौन-सी प्रॉपर्टी तब संक्रमण प्रभाव निर्दिष्ट करती है जब CSS प्रॉपर्टी बदलती है?",
    options_en: ["transition", "transform", "animation", "filter"],
    options_hi: ["ट्रांजिशन", "ट्रांसफॉर्म", "एनीमेशन", "फिल्टर"],
    answer_en: "transition",
    answer_hi: "ट्रांजिशन",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which property controls the animation duration?",
    question_hi: "कौन-सी प्रॉपर्टी एनीमेशन की अवधि नियंत्रित करती है?",
    options_en: ["animation-duration", "animation-delay", "animation-iteration-count", "animation-name"],
    options_hi: ["एनीमेशन अवधि", "एनीमेशन विलंब", "एनीमेशन पुनरावृत्ति संख्या", "एनीमेशन नाम"],
    answer_en: "animation-duration",
    answer_hi: "एनीमेशन अवधि",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which property is used to rotate an element in CSS?",
    question_hi: "CSS में एलिमेंट को घुमाने के लिए कौन-सी प्रॉपर्टी का उपयोग होता है?",
    options_en: ["transform", "transition", "animation", "rotate"],
    options_hi: ["ट्रांसफॉर्म", "ट्रांजिशन", "एनीमेशन", "रोटेट"],
    answer_en: "transform",
    answer_hi: "ट्रांसफॉर्म",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which property sets the visibility of an element without removing it from the document flow?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट की दृश्यता सेट करती है बिना उसे डॉक्यूमेंट फ्लो से हटाए?",
    options_en: ["visibility", "display", "opacity", "hidden"],
    options_hi: ["दृश्यता", "प्रदर्शन", "अपारदर्शिता", "छुपा हुआ"],
    answer_en: "visibility",
    answer_hi: "दृश्यता",
    attempted: false,
    selected: ""
  }
      ],
      13:[
         {
    num: 1,
    question_en: "Which CSS property sets the space between the content and the border of an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी कंटेंट और बॉर्डर के बीच की दूरी सेट करती है?",
    options_en: ["padding", "margin", "border", "spacing"],
    options_hi: ["पैडिंग", "मार्जिन", "बॉर्डर", "स्पेसिंग"],
    answer_en: "padding",
    answer_hi: "पैडिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which CSS property sets the space outside the border of an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एलिमेंट के बॉर्डर के बाहर की दूरी सेट करती है?",
    options_en: ["margin", "padding", "border", "spacing"],
    options_hi: ["मार्जिन", "पैडिंग", "बॉर्डर", "स्पेसिंग"],
    answer_en: "margin",
    answer_hi: "मार्जिन",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which property controls the border thickness of an element?",
    question_hi: "कौन-सी प्रॉपर्टी किसी एलिमेंट की बॉर्डर की मोटाई नियंत्रित करती है?",
    options_en: ["border-width", "border-style", "border-color", "border-spacing"],
    options_hi: ["बॉर्डर चौड़ाई", "बॉर्डर शैली", "बॉर्डर रंग", "बॉर्डर स्पेसिंग"],
    answer_en: "border-width",
    answer_hi: "बॉर्डर चौड़ाई",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which property sets how the border of a table is displayed?",
    question_hi: "कौन-सी प्रॉपर्टी टेबल के बॉर्डर के प्रदर्शन को सेट करती है?",
    options_en: ["border-collapse", "border-style", "border-width", "border-spacing"],
    options_hi: ["बॉर्डर-कॉलैप्स", "बॉर्डर शैली", "बॉर्डर चौड़ाई", "बॉर्डर स्पेसिंग"],
    answer_en: "border-collapse",
    answer_hi: "बॉर्डर-कॉलैप्स",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which CSS property specifies the space between cells in a table?",
    question_hi: "कौन-सी CSS प्रॉपर्टी टेबल की कोशिकाओं के बीच की दूरी निर्दिष्ट करती है?",
    options_en: ["border-spacing", "border-collapse", "cell-padding", "cell-spacing"],
    options_hi: ["बॉर्डर स्पेसिंग", "बॉर्डर-कॉलैप्स", "सेल पैडिंग", "सेल स्पेसिंग"],
    answer_en: "border-spacing",
    answer_hi: "बॉर्डर स्पेसिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which property specifies whether the element is displayed as block, inline, or none?",
    question_hi: "कौन-सी प्रॉपर्टी सेट करती है कि एलिमेंट ब्लॉक, इनलाइन या नहीं दिखेगा?",
    options_en: ["display", "visibility", "position", "float"],
    options_hi: ["प्रदर्शन", "दृश्यता", "स्थिति", "तैरना"],
    answer_en: "display",
    answer_hi: "प्रदर्शन",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which property controls the position of an element relative to its normal position?",
    question_hi: "कौन-सी प्रॉपर्टी किसी एलिमेंट की स्थिति को उसके सामान्य स्थान के सापेक्ष नियंत्रित करती है?",
    options_en: ["position", "top", "left", "float"],
    options_hi: ["स्थिति", "ऊपर", "बायाँ", "तैरना"],
    answer_en: "position",
    answer_hi: "स्थिति",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which value of position property makes an element positioned relative to the viewport?",
    question_hi: "position प्रॉपर्टी का कौन-सा मान एलिमेंट को व्यूपोर्ट के सापेक्ष स्थित करता है?",
    options_en: ["fixed", "absolute", "relative", "static"],
    options_hi: ["फिक्स्ड", "एबसोल्यूट", "रिलेटिव", "स्टैटिक"],
    answer_en: "fixed",
    answer_hi: "फिक्स्ड",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which property specifies the top edge position of an element?",
    question_hi: "कौन-सी प्रॉपर्टी किसी एलिमेंट के शीर्ष किनारे की स्थिति निर्दिष्ट करती है?",
    options_en: ["top", "left", "right", "bottom"],
    options_hi: ["ऊपर", "बायाँ", "दायाँ", "नीचे"],
    answer_en: "top",
    answer_hi: "ऊपर",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which property specifies the left edge position of an element?",
    question_hi: "कौन-सी प्रॉपर्टी किसी एलिमेंट के बायें किनारे की स्थिति निर्दिष्ट करती है?",
    options_en: ["left", "top", "right", "bottom"],
    options_hi: ["बायाँ", "ऊपर", "दायाँ", "नीचे"],
    answer_en: "left",
    answer_hi: "बायाँ",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which property is used to clear floated elements?",
    question_hi: "तैरते हुए एलिमेंट्स को क्लियर करने के लिए कौन-सी प्रॉपर्टी उपयोग होती है?",
    options_en: ["clear", "float", "position", "display"],
    options_hi: ["क्लियर", "तैरना", "स्थिति", "प्रदर्शन"],
    answer_en: "clear",
    answer_hi: "क्लियर",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which property specifies whether the element should float to the left or right?",
    question_hi: "कौन-सी प्रॉपर्टी निर्दिष्ट करती है कि एलिमेंट बाएं या दाएं तैरेगा?",
    options_en: ["float", "clear", "position", "display"],
    options_hi: ["तैरना", "क्लियर", "स्थिति", "प्रदर्शन"],
    answer_en: "float",
    answer_hi: "तैरना",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which CSS property controls the width of the padding area?",
    question_hi: "कौन-सी CSS प्रॉपर्टी पैडिंग क्षेत्र की चौड़ाई नियंत्रित करती है?",
    options_en: ["padding-left", "margin-left", "border-left", "width"],
    options_hi: ["पैडिंग-बायाँ", "मार्जिन-बायाँ", "बॉर्डर-बायाँ", "चौड़ाई"],
    answer_en: "padding-left",
    answer_hi: "पैडिंग-बायाँ",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which property sets the box-sizing behavior of an element?",
    question_hi: "कौन-सी प्रॉपर्टी किसी एलिमेंट के बॉक्स का आकार निर्धारण करती है?",
    options_en: ["box-sizing", "box-shadow", "box-model", "box-layout"],
    options_hi: ["बॉक्स-साइज़िंग", "बॉक्स-शैडो", "बॉक्स-मॉडल", "बॉक्स-लेआउट"],
    answer_en: "box-sizing",
    answer_hi: "बॉक्स-साइज़िंग",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which property adds shadow effects around an element's frame?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट के फ्रेम के चारों ओर छाया प्रभाव जोड़ती है?",
    options_en: ["box-shadow", "text-shadow", "shadow", "frame-shadow"],
    options_hi: ["बॉक्स-शैडो", "टेक्स्ट-शैडो", "शैडो", "फ्रेम-शैडो"],
    answer_en: "box-shadow",
    answer_hi: "बॉक्स-शैडो",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which property controls the space inside the border but outside the content?",
    question_hi: "कौन-सी प्रॉपर्टी बॉर्डर के अंदर लेकिन कंटेंट के बाहर की जगह नियंत्रित करती है?",
    options_en: ["padding", "margin", "border-spacing", "border-collapse"],
    options_hi: ["पैडिंग", "मार्जिन", "बॉर्डर स्पेसिंग", "बॉर्डर-कॉलैप्स"],
    answer_en: "padding",
    answer_hi: "पैडिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which property controls the space outside the border of an element?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट के बॉर्डर के बाहर की जगह नियंत्रित करती है?",
    options_en: ["margin", "padding", "border-spacing", "border-collapse"],
    options_hi: ["मार्जिन", "पैडिंग", "बॉर्डर स्पेसिंग", "बॉर्डर-कॉलैप्स"],
    answer_en: "margin",
    answer_hi: "मार्जिन",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which CSS property controls how content flows around floated elements?",
    question_hi: "कौन-सी CSS प्रॉपर्टी तैरते हुए एलिमेंट्स के आस-पास कंटेंट के प्रवाह को नियंत्रित करती है?",
    options_en: ["clear", "float", "position", "display"],
    options_hi: ["क्लियर", "तैरना", "स्थिति", "प्रदर्शन"],
    answer_en: "clear",
    answer_hi: "क्लियर",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which property specifies the z-index of an element?",
    question_hi: "कौन-सी प्रॉपर्टी किसी एलिमेंट का z-इंडेक्स निर्दिष्ट करती है?",
    options_en: ["z-index", "position", "float", "clear"],
    options_hi: ["z-इंडेक्स", "स्थिति", "तैरना", "क्लियर"],
    answer_en: "z-index",
    answer_hi: "z-इंडेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which CSS property specifies the overflow behavior of content?",
    question_hi: "कौन-सी CSS प्रॉपर्टी कंटेंट के ओवरफ्लो व्यवहार को निर्दिष्ट करती है?",
    options_en: ["overflow", "overflow-x", "overflow-y", "text-overflow"],
    options_hi: ["ओवरफ्लो", "ओवरफ्लो-x", "ओवरफ्लो-y", "टेक्स्ट-ओवरफ्लो"],
    answer_en: "overflow",
    answer_hi: "ओवरफ्लो",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which value of overflow property clips the content and does not show scrollbars?",
    question_hi: "ओवरफ्लो प्रॉपर्टी का कौन-सा मान कंटेंट को क्लिप करता है और स्क्रॉलबार नहीं दिखाता?",
    options_en: ["hidden", "visible", "scroll", "auto"],
    options_hi: ["छुपा हुआ", "दिखाई दे रहा", "स्क्रॉल", "स्वचालित"],
    answer_en: "hidden",
    answer_hi: "छुपा हुआ",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which CSS property controls the cursor appearance when hovering over an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी माउस कर्सर की उपस्थिति को नियंत्रित करती है जब उसे एलिमेंट के ऊपर ले जाया जाता है?",
    options_en: ["cursor", "pointer-events", "hover", "focus"],
    options_hi: ["कर्सर", "पॉइंटर-इवेंट्स", "होवर", "फोकस"],
    answer_en: "cursor",
    answer_hi: "कर्सर",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which CSS property is used to add space between borders of adjacent cells?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एक-दूसरे के पास वाली कोशिकाओं के बॉर्डर के बीच जगह जोड़ती है?",
    options_en: ["border-spacing", "border-collapse", "cell-spacing", "cell-padding"],
    options_hi: ["बॉर्डर स्पेसिंग", "बॉर्डर-कॉलैप्स", "सेल स्पेसिंग", "सेल पैडिंग"],
    answer_en: "border-spacing",
    answer_hi: "बॉर्डर स्पेसिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which property specifies the type of box model used by an element?",
    question_hi: "कौन-सी प्रॉपर्टी किसी एलिमेंट द्वारा उपयोग किए गए बॉक्स मॉडल के प्रकार को निर्दिष्ट करती है?",
    options_en: ["box-sizing", "box-model", "box-type", "box-style"],
    options_hi: ["बॉक्स-साइज़िंग", "बॉक्स-मॉडल", "बॉक्स-टाइप", "बॉक्स-स्टाइल"],
    answer_en: "box-sizing",
    answer_hi: "बॉक्स-साइज़िंग",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which property controls the layering of positioned elements?",
    question_hi: "कौन-सी प्रॉपर्टी स्थिति निर्धारण किए गए एलिमेंट्स की परतों को नियंत्रित करती है?",
    options_en: ["z-index", "position", "layer", "order"],
    options_hi: ["z-इंडेक्स", "स्थिति", "लेयर", "क्रम"],
    answer_en: "z-index",
    answer_hi: "z-इंडेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Which property specifies the height of an element?",
    question_hi: "कौन-सी प्रॉपर्टी किसी एलिमेंट की ऊँचाई निर्धारित करती है?",
    options_en: ["height", "width", "size", "length"],
    options_hi: ["ऊँचाई", "चौड़ाई", "आकार", "लंबाई"],
    answer_en: "height",
    answer_hi: "ऊँचाई",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which property specifies the width of an element?",
    question_hi: "कौन-सी प्रॉपर्टी किसी एलिमेंट की चौड़ाई निर्धारित करती है?",
    options_en: ["width", "height", "size", "length"],
    options_hi: ["चौड़ाई", "ऊँचाई", "आकार", "लंबाई"],
    answer_en: "width",
    answer_hi: "चौड़ाई",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which CSS property sets the minimum height of an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी किसी एलिमेंट की न्यूनतम ऊँचाई सेट करती है?",
    options_en: ["min-height", "max-height", "height", "min-width"],
    options_hi: ["न्यूनतम ऊँचाई", "अधिकतम ऊँचाई", "ऊँचाई", "न्यूनतम चौड़ाई"],
    answer_en: "min-height",
    answer_hi: "न्यूनतम ऊँचाई",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which CSS property sets the maximum width of an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी किसी एलिमेंट की अधिकतम चौड़ाई सेट करती है?",
    options_en: ["max-width", "min-width", "width", "max-height"],
    options_hi: ["अधिकतम चौड़ाई", "न्यूनतम चौड़ाई", "चौड़ाई", "अधिकतम ऊँचाई"],
    answer_en: "max-width",
    answer_hi: "अधिकतम चौड़ाई",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which CSS property controls the visibility of an element but does not affect the layout?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एलिमेंट की दृश्यता नियंत्रित करती है लेकिन लेआउट को प्रभावित नहीं करती?",
    options_en: ["visibility", "display", "opacity", "overflow"],
    options_hi: ["दृश्यता", "प्रदर्शन", "अपारदर्शिता", "ओवरफ्लो"],
    answer_en: "visibility",
    answer_hi: "दृश्यता",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which CSS property controls the opacity level of an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी किसी एलिमेंट की अपारदर्शिता स्तर नियंत्रित करती है?",
    options_en: ["opacity", "visibility", "display", "filter"],
    options_hi: ["अपारदर्शिता", "दृश्यता", "प्रदर्शन", "फिल्टर"],
    answer_en: "opacity",
    answer_hi: "अपारदर्शिता",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which property is used to specify the overflow content behavior when it exceeds the element size?",
    question_hi: "जब कंटेंट एलिमेंट के आकार से अधिक हो जाए तो overflow कंटेंट व्यवहार निर्धारित करने के लिए कौन-सी प्रॉपर्टी उपयोग होती है?",
    options_en: ["overflow", "visibility", "display", "opacity"],
    options_hi: ["ओवरफ्लो", "दृश्यता", "प्रदर्शन", "अपारदर्शिता"],
    answer_en: "overflow",
    answer_hi: "ओवरफ्लो",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which value of overflow property adds scrollbars to the element?",
    question_hi: "overflow प्रॉपर्टी का कौन-सा मान एलिमेंट में स्क्रॉलबार जोड़ता है?",
    options_en: ["scroll", "hidden", "visible", "auto"],
    options_hi: ["स्क्रॉल", "छुपा हुआ", "दिखाई दे रहा", "स्वचालित"],
    answer_en: "scroll",
    answer_hi: "स्क्रॉल",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which CSS property controls the alignment of inline content within a block element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी ब्लॉक एलिमेंट के अंदर इनलाइन कंटेंट की संरेखण को नियंत्रित करती है?",
    options_en: ["text-align", "vertical-align", "align-items", "justify-content"],
    options_hi: ["टेक्स्ट संरेखण", "वर्टिकल संरेखण", "आइटम संरेखण", "जस्टिफाई कंटेंट"],
    answer_en: "text-align",
    answer_hi: "टेक्स्ट संरेखण",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which CSS property controls vertical alignment of inline elements?",
    question_hi: "कौन-सी CSS प्रॉपर्टी इनलाइन एलिमेंट्स की ऊर्ध्वाधर संरेखण नियंत्रित करती है?",
    options_en: ["vertical-align", "text-align", "align-items", "justify-content"],
    options_hi: ["वर्टिकल संरेखण", "टेक्स्ट संरेखण", "आइटम संरेखण", "जस्टिफाई कंटेंट"],
    answer_en: "vertical-align",
    answer_hi: "वर्टिकल संरेखण",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which CSS property specifies how an element is displayed when it is hidden from the layout?",
    question_hi: "कौन-सी CSS प्रॉपर्टी सेट करती है कि एलिमेंट लेआउट से छुपाए जाने पर कैसे दिखेगा?",
    options_en: ["display", "visibility", "opacity", "position"],
    options_hi: ["प्रदर्शन", "दृश्यता", "अपारदर्शिता", "स्थिति"],
    answer_en: "display",
    answer_hi: "प्रदर्शन",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which value of display property hides the element and removes it from the layout flow?",
    question_hi: "display प्रॉपर्टी का कौन-सा मान एलिमेंट को छुपाता है और लेआउट प्रवाह से हटाता है?",
    options_en: ["none", "block", "inline", "hidden"],
    options_hi: ["कोई नहीं", "ब्लॉक", "इनलाइन", "छुपा हुआ"],
    answer_en: "none",
    answer_hi: "कोई नहीं",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which CSS property controls the box shadow's horizontal and vertical offsets?",
    question_hi: "कौन-सी CSS प्रॉपर्टी बॉक्स शैडो के क्षैतिज और ऊर्ध्वाधर ऑफसेट को नियंत्रित करती है?",
    options_en: ["box-shadow", "text-shadow", "shadow-offset", "box-offset"],
    options_hi: ["बॉक्स-शैडो", "टेक्स्ट-शैडो", "शैडो-ऑफसेट", "बॉक्स-ऑफसेट"],
    answer_en: "box-shadow",
    answer_hi: "बॉक्स-शैडो",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which CSS property controls the order in which flex items appear?",
    question_hi: "कौन-सी CSS प्रॉपर्टी फ्लेक्स आइटम्स की दिखाई देने की क्रम को नियंत्रित करती है?",
    options_en: ["order", "flex-order", "z-index", "position"],
    options_hi: ["क्रम", "फ्लेक्स-क्रम", "z-इंडेक्स", "स्थिति"],
    answer_en: "order",
    answer_hi: "क्रम",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which CSS property specifies how flex items are aligned along the main axis?",
    question_hi: "कौन-सी CSS प्रॉपर्टी मुख्य अक्ष के साथ फ्लेक्स आइटम्स की संरेखण निर्दिष्ट करती है?",
    options_en: ["justify-content", "align-items", "align-content", "flex-align"],
    options_hi: ["जस्टिफाई कंटेंट", "आइटम संरेखण", "कंटेंट संरेखण", "फ्लेक्स संरेखण"],
    answer_en: "justify-content",
    answer_hi: "जस्टिफाई कंटेंट",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which CSS property specifies how flex items are aligned along the cross axis?",
    question_hi: "कौन-सी CSS प्रॉपर्टी क्रॉस अक्ष के साथ फ्लेक्स आइटम्स की संरेखण निर्दिष्ट करती है?",
    options_en: ["align-items", "justify-content", "align-content", "flex-align"],
    options_hi: ["आइटम संरेखण", "जस्टिफाई कंटेंट", "कंटेंट संरेखण", "फ्लेक्स संरेखण"],
    answer_en: "align-items",
    answer_hi: "आइटम संरेखण",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which CSS property controls the wrapping of flex items?",
    question_hi: "कौन-सी CSS प्रॉपर्टी फ्लेक्स आइटम्स के रैपिंग को नियंत्रित करती है?",
    options_en: ["flex-wrap", "flex-flow", "flex-wrap-flow", "flex-direction"],
    options_hi: ["फ्लेक्स-रैप", "फ्लेक्स-फ्लो", "फ्लेक्स-रैप-फ्लो", "फ्लेक्स-दिशा"],
    answer_en: "flex-wrap",
    answer_hi: "फ्लेक्स-रैप",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which property controls the space between flex items?",
    question_hi: "कौन-सी प्रॉपर्टी फ्लेक्स आइटम्स के बीच की दूरी नियंत्रित करती है?",
    options_en: ["gap", "margin", "padding", "spacing"],
    options_hi: ["गैप", "मार्जिन", "पैडिंग", "स्पेसिंग"],
    answer_en: "gap",
    answer_hi: "गैप",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which CSS property is used to control the floating of an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी किसी एलिमेंट के तैरने को नियंत्रित करने के लिए उपयोग होती है?",
    options_en: ["float", "clear", "position", "display"],
    options_hi: ["तैरना", "क्लियर", "स्थिति", "प्रदर्शन"],
    answer_en: "float",
    answer_hi: "तैरना",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which property clears the floated elements and forces the container to wrap them?",
    question_hi: "कौन-सी प्रॉपर्टी तैरते हुए एलिमेंट्स को क्लियर करती है और कंटेनर को उन्हें लपेटने के लिए मजबूर करती है?",
    options_en: ["clear", "float", "overflow", "display"],
    options_hi: ["क्लियर", "तैरना", "ओवरफ्लो", "प्रदर्शन"],
    answer_en: "clear",
    answer_hi: "क्लियर",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which CSS property is used to control the stacking context of positioned elements?",
    question_hi: "कौन-सी CSS प्रॉपर्टी स्थिति निर्धारण किए गए एलिमेंट्स के स्टैकिंग संदर्भ को नियंत्रित करती है?",
    options_en: ["z-index", "position", "stack", "order"],
    options_hi: ["z-इंडेक्स", "स्थिति", "स्टैक", "क्रम"],
    answer_en: "z-index",
    answer_hi: "z-इंडेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which CSS property defines how an element's width and height are calculated?",
    question_hi: "कौन-सी CSS प्रॉपर्टी निर्धारित करती है कि किसी एलिमेंट की चौड़ाई और ऊँचाई कैसे गणना की जाती है?",
    options_en: ["box-sizing", "width", "height", "size"],
    options_hi: ["बॉक्स-साइज़िंग", "चौड़ाई", "ऊँचाई", "आकार"],
    answer_en: "box-sizing",
    answer_hi: "बॉक्स-साइज़िंग",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which CSS property controls the text indentation of an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी किसी एलिमेंट के टेक्स्ट इंडेंटेशन को नियंत्रित करती है?",
    options_en: ["text-indent", "text-align", "text-justify", "text-spacing"],
    options_hi: ["टेक्स्ट इंडेंट", "टेक्स्ट संरेखण", "टेक्स्ट जस्टिफाई", "टेक्स्ट स्पेसिंग"],
    answer_en: "text-indent",
    answer_hi: "टेक्स्ट इंडेंट",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which property controls the line height of text within an element?",
    question_hi: "कौन-सी प्रॉपर्टी किसी एलिमेंट के अंदर टेक्स्ट की लाइन ऊँचाई को नियंत्रित करती है?",
    options_en: ["line-height", "font-size", "text-height", "text-spacing"],
    options_hi: ["लाइन-ऊँचाई", "फॉन्ट साइज", "टेक्स्ट-ऊँचाई", "टेक्स्ट-स्पेसिंग"],
    answer_en: "line-height",
    answer_hi: "लाइन-ऊँचाई",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which CSS property controls how text is wrapped inside an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी नियंत्रित करती है कि टेक्स्ट किसी एलिमेंट के अंदर कैसे लिपटा जाता है?",
    options_en: ["word-wrap", "text-wrap", "text-align", "white-space"],
    options_hi: ["वर्ड-रैप", "टेक्स्ट-रैप", "टेक्स्ट संरेखण", "व्हाइट-स्पेस"],
    answer_en: "word-wrap",
    answer_hi: "वर्ड-रैप",
    attempted: false,
    selected: ""
  }
      ],
      14:[
         {
    num: 1,
    question_en: "Which selector selects all elements of a specific type?",
    question_hi: "कौन-सा सेलेक्टर किसी विशिष्ट प्रकार के सभी एलिमेंट्स को सेलेक्ट करता है?",
    options_en: ["Class selector", "ID selector", "Type selector", "Universal selector"],
    options_hi: ["क्लास सेलेक्टर", "आईडी सेलेक्टर", "टाइप सेलेक्टर", "यूनिवर्सल सेलेक्टर"],
    answer_en: "Type selector",
    answer_hi: "टाइप सेलेक्टर",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which selector targets an element with a specific id?",
    question_hi: "कौन-सा सेलेक्टर किसी एलिमेंट को उसकी विशिष्ट आईडी से टारगेट करता है?",
    options_en: ["Class selector", "ID selector", "Type selector", "Attribute selector"],
    options_hi: ["क्लास सेलेक्टर", "आईडी सेलेक्टर", "टाइप सेलेक्टर", "एट्रिब्यूट सेलेक्टर"],
    answer_en: "ID selector",
    answer_hi: "आईडी सेलेक्टर",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which selector is used to select all elements?",
    question_hi: "सभी एलिमेंट्स को सेलेक्ट करने के लिए कौन-सा सेलेक्टर इस्तेमाल होता है?",
    options_en: ["Universal selector", "Class selector", "ID selector", "Type selector"],
    options_hi: ["यूनिवर्सल सेलेक्टर", "क्लास सेलेक्टर", "आईडी सेलेक्टर", "टाइप सेलेक्टर"],
    answer_en: "Universal selector",
    answer_hi: "यूनिवर्सल सेलेक्टर",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "What symbol is used for class selectors in CSS?",
    question_hi: "CSS में क्लास सेलेक्टर्स के लिए कौन-सा सिंबल इस्तेमाल होता है?",
    options_en: [". (dot)", "# (hash)", "* (asterisk)", "> (greater than)"],
    options_hi: [". (डॉट)", "# (हैश)", "* (एस्टरिस्क)", "> (ग्रेटर दैन)"],
    answer_en: ". (dot)",
    answer_hi: ". (डॉट)",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "What symbol is used for ID selectors in CSS?",
    question_hi: "CSS में आईडी सेलेक्टर्स के लिए कौन-सा सिंबल इस्तेमाल होता है?",
    options_en: [". (dot)", "# (hash)", "* (asterisk)", "> (greater than)"],
    options_hi: [". (डॉट)", "# (हैश)", "* (एस्टरिस्क)", "> (ग्रेटर दैन)"],
    answer_en: "# (hash)",
    answer_hi: "# (हैश)",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which selector selects elements based on an attribute value?",
    question_hi: "कौन-सा सेलेक्टर किसी एट्रिब्यूट के मान के आधार पर एलिमेंट्स को सेलेक्ट करता है?",
    options_en: ["Class selector", "ID selector", "Attribute selector", "Type selector"],
    options_hi: ["क्लास सेलेक्टर", "आईडी सेलेक्टर", "एट्रिब्यूट सेलेक्टर", "टाइप सेलेक्टर"],
    answer_en: "Attribute selector",
    answer_hi: "एट्रिब्यूट सेलेक्टर",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which selector selects only the first child element?",
    question_hi: "कौन-सा सेलेक्टर केवल पहले चाइल्ड एलिमेंट को सेलेक्ट करता है?",
    options_en: [":first-child", ":last-child", ":nth-child", ":only-child"],
    options_hi: [":first-child", ":last-child", ":nth-child", ":only-child"],
    answer_en: ":first-child",
    answer_hi: ":first-child",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which selector selects all elements that are direct children of a specified element?",
    question_hi: "कौन-सा सेलेक्टर किसी निर्दिष्ट एलिमेंट के डायरेक्ट चाइल्ड को सेलेक्ट करता है?",
    options_en: [">", " ", "+", "~"],
    options_hi: [">", " ", "+", "~"],
    answer_en: ">",
    answer_hi: ">",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which selector matches elements that are siblings?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को मैच करता है जो सिबलिंग्स हैं?",
    options_en: ["+", "~", ">", " "],
    options_hi: ["+", "~", ">", " "],
    answer_en: "+",
    answer_hi: "+",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which selector selects elements that are the last child of their parent?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जो अपने पैरेंट के लास्ट चाइल्ड हैं?",
    options_en: [":last-child", ":first-child", ":nth-child", ":only-child"],
    options_hi: [":last-child", ":first-child", ":nth-child", ":only-child"],
    answer_en: ":last-child",
    answer_hi: ":last-child",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which selector selects elements that have a specific class and type?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जिनकी एक विशेष क्लास और टाइप हो?",
    options_en: ["div.classname", ".classname", "#id", "div#id"],
    options_hi: ["div.classname", ".classname", "#id", "div#id"],
    answer_en: "div.classname",
    answer_hi: "div.classname",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which pseudo-class selector matches when an element is being hovered?",
    question_hi: "कौन-सा प्यूरडो-क्लास सेलेक्टर तब मैच करता है जब किसी एलिमेंट पर माउस होवर हो रहा हो?",
    options_en: [":hover", ":active", ":focus", ":visited"],
    options_hi: [":hover", ":active", ":focus", ":visited"],
    answer_en: ":hover",
    answer_hi: ":hover",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which selector selects elements that are checked (like checkboxes)?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जो चेक्ड होते हैं (जैसे चेकबॉक्स)?",
    options_en: [":checked", ":selected", ":enabled", ":disabled"],
    options_hi: [":checked", ":selected", ":enabled", ":disabled"],
    answer_en: ":checked",
    answer_hi: ":checked",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which selector selects elements that are disabled?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जो डिसेबल्ड होते हैं?",
    options_en: [":disabled", ":enabled", ":checked", ":focus"],
    options_hi: [":disabled", ":enabled", ":checked", ":focus"],
    answer_en: ":disabled",
    answer_hi: ":disabled",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which selector selects elements with a specific attribute regardless of its value?",
    question_hi: "कौन-सा सेलेक्टर किसी विशेष एट्रिब्यूट वाले एलिमेंट्स को उनके मान की परवाह किए बिना सेलेक्ट करता है?",
    options_en: ["[attr]", "[attr=value]", "[attr~=value]", "[attr|=value]"],
    options_hi: ["[attr]", "[attr=value]", "[attr~=value]", "[attr|=value]"],
    answer_en: "[attr]",
    answer_hi: "[attr]",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which selector selects elements whose attribute value contains a specified word?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जिनके एट्रिब्यूट का मान किसी विशिष्ट शब्द को शामिल करता है?",
    options_en: ["[attr~=value]", "[attr=value]", "[attr|=value]", "[attr^=value]"],
    options_hi: ["[attr~=value]", "[attr=value]", "[attr|=value]", "[attr^=value]"],
    answer_en: "[attr~=value]",
    answer_hi: "[attr~=value]",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which selector selects elements whose attribute value begins with a specified value?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जिनके एट्रिब्यूट का मान किसी विशिष्ट मान से शुरू होता है?",
    options_en: ["[attr^=value]", "[attr$=value]", "[attr*=value]", "[attr~=value]"],
    options_hi: ["[attr^=value]", "[attr$=value]", "[attr*=value]", "[attr~=value]"],
    answer_en: "[attr^=value]",
    answer_hi: "[attr^=value]",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which selector selects elements whose attribute value ends with a specified value?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जिनके एट्रिब्यूट का मान किसी विशिष्ट मान पर समाप्त होता है?",
    options_en: ["[attr$=value]", "[attr^=value]", "[attr*=value]", "[attr~=value]"],
    options_hi: ["[attr$=value]", "[attr^=value]", "[attr*=value]", "[attr~=value]"],
    answer_en: "[attr$=value]",
    answer_hi: "[attr$=value]",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which selector selects elements whose attribute value contains a specified substring?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जिनके एट्रिब्यूट का मान किसी विशिष्ट सबस्ट्रिंग को शामिल करता है?",
    options_en: ["[attr*=value]", "[attr^=value]", "[attr$=value]", "[attr~=value]"],
    options_hi: ["[attr*=value]", "[attr^=value]", "[attr$=value]", "[attr~=value]"],
    answer_en: "[attr*=value]",
    answer_hi: "[attr*=value]",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which pseudo-class selector selects elements when they receive focus?",
    question_hi: "कौन-सा प्यूरडो-क्लास सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जब वे फोकस प्राप्त करते हैं?",
    options_en: [":focus", ":hover", ":active", ":visited"],
    options_hi: [":focus", ":hover", ":active", ":visited"],
    answer_en: ":focus",
    answer_hi: ":focus",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which selector is used to select the nth child element?",
    question_hi: "कौन-सा सेलेक्टर nth चाइल्ड एलिमेंट को सेलेक्ट करने के लिए इस्तेमाल होता है?",
    options_en: [":nth-child(n)", ":first-child", ":last-child", ":only-child"],
    options_hi: [":nth-child(n)", ":first-child", ":last-child", ":only-child"],
    answer_en: ":nth-child(n)",
    answer_hi: ":nth-child(n)",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which selector selects elements that are the only child of their parent?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जो अपने पैरेंट के केवल एकमात्र चाइल्ड हैं?",
    options_en: [":only-child", ":first-child", ":last-child", ":nth-child"],
    options_hi: [":only-child", ":first-child", ":last-child", ":nth-child"],
    answer_en: ":only-child",
    answer_hi: ":only-child",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which selector selects an element when it is active (being clicked)?",
    question_hi: "कौन-सा सेलेक्टर तब एलिमेंट को सेलेक्ट करता है जब वह एक्टिव (क्लिक किया जा रहा हो) हो?",
    options_en: [":active", ":hover", ":focus", ":visited"],
    options_hi: [":active", ":hover", ":focus", ":visited"],
    answer_en: ":active",
    answer_hi: ":active",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which selector selects elements that have been visited (like links)?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जो विजिटेड (जैसे लिंक) हो चुके हों?",
    options_en: [":visited", ":link", ":hover", ":focus"],
    options_hi: [":visited", ":link", ":hover", ":focus"],
    answer_en: ":visited",
    answer_hi: ":visited",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which selector selects elements that are enabled?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जो सक्षम (enabled) हैं?",
    options_en: [":enabled", ":disabled", ":checked", ":focus"],
    options_hi: [":enabled", ":disabled", ":checked", ":focus"],
    answer_en: ":enabled",
    answer_hi: ":enabled",
    attempted: false,
    selected: ""
  },
   {
    num: 26,
    question_en: "Which selector targets all elements inside a specified element?",
    question_hi: "कौन-सा सेलेक्टर किसी निर्दिष्ट एलिमेंट के अंदर के सभी एलिमेंट्स को टारगेट करता है?",
    options_en: ["Descendant selector", "Child selector", "Adjacent sibling selector", "General sibling selector"],
    options_hi: ["डिसेंडेंट सेलेक्टर", "चाइल्ड सेलेक्टर", "एडजेसेंट सिबलिंग सेलेक्टर", "जनरल सिबलिंग सेलेक्टर"],
    answer_en: "Descendant selector",
    answer_hi: "डिसेंडेंट सेलेक्टर",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which selector selects an element immediately preceded by a specified sibling?",
    question_hi: "कौन-सा सेलेक्टर उस एलिमेंट को सेलेक्ट करता है जो किसी निर्दिष्ट सिबलिंग से तुरंत पहले आता है?",
    options_en: ["Adjacent sibling selector (+)", "General sibling selector (~)", "Child selector (>)", "Descendant selector (space)"],
    options_hi: ["एडजेसेंट सिबलिंग सेलेक्टर (+)", "जनरल सिबलिंग सेलेक्टर (~)", "चाइल्ड सेलेक्टर (>)", "डिसेंडेंट सेलेक्टर (space)"],
    answer_en: "Adjacent sibling selector (+)",
    answer_hi: "एडजेसेंट सिबलिंग सेलेक्टर (+)",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which selector is used to select elements that are siblings of a specified element?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जो किसी निर्दिष्ट एलिमेंट के सिबलिंग्स हों?",
    options_en: ["General sibling selector (~)", "Adjacent sibling selector (+)", "Child selector (>)", "Type selector"],
    options_hi: ["जनरल सिबलिंग सेलेक्टर (~)", "एडजेसेंट सिबलिंग सेलेक्टर (+)", "चाइल्ड सेलेक्टर (>)", "टाइप सेलेक्टर"],
    answer_en: "General sibling selector (~)",
    answer_hi: "जनरल सिबलिंग सेलेक्टर (~)",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which selector targets elements not represented by a selector?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को टारगेट करता है जो किसी सेलेक्टर से मैच नहीं करते?",
    options_en: [":not(selector)", ":only-child", ":first-child", ":last-child"],
    options_hi: [":not(selector)", ":only-child", ":first-child", ":last-child"],
    answer_en: ":not(selector)",
    answer_hi: ":not(selector)",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which selector selects every even child element?",
    question_hi: "कौन-सा सेलेक्टर हर दूसरे (even) चाइल्ड एलिमेंट को सेलेक्ट करता है?",
    options_en: [":nth-child(even)", ":nth-child(odd)", ":first-child", ":last-child"],
    options_hi: [":nth-child(even)", ":nth-child(odd)", ":first-child", ":last-child"],
    answer_en: ":nth-child(even)",
    answer_hi: ":nth-child(even)",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which selector selects every odd child element?",
    question_hi: "कौन-सा सेलेक्टर हर विषम (odd) चाइल्ड एलिमेंट को सेलेक्ट करता है?",
    options_en: [":nth-child(odd)", ":nth-child(even)", ":first-child", ":last-child"],
    options_hi: [":nth-child(odd)", ":nth-child(even)", ":first-child", ":last-child"],
    answer_en: ":nth-child(odd)",
    answer_hi: ":nth-child(odd)",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which selector selects the first element of its type among its siblings?",
    question_hi: "कौन-सा सेलेक्टर अपने सिबलिंग्स में अपने प्रकार का पहला एलिमेंट सेलेक्ट करता है?",
    options_en: [":first-of-type", ":last-of-type", ":nth-of-type(n)", ":only-of-type"],
    options_hi: [":first-of-type", ":last-of-type", ":nth-of-type(n)", ":only-of-type"],
    answer_en: ":first-of-type",
    answer_hi: ":first-of-type",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which selector selects the last element of its type among its siblings?",
    question_hi: "कौन-सा सेलेक्टर अपने सिबलिंग्स में अपने प्रकार का आखिरी एलिमेंट सेलेक्ट करता है?",
    options_en: [":last-of-type", ":first-of-type", ":nth-of-type(n)", ":only-of-type"],
    options_hi: [":last-of-type", ":first-of-type", ":nth-of-type(n)", ":only-of-type"],
    answer_en: ":last-of-type",
    answer_hi: ":last-of-type",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which selector selects elements that are empty (have no children)?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जिनके अंदर कोई चाइल्ड न हो?",
    options_en: [":empty", ":blank", ":null", ":void"],
    options_hi: [":empty", ":blank", ":null", ":void"],
    answer_en: ":empty",
    answer_hi: ":empty",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which selector matches elements based on their language attribute?",
    question_hi: "कौन-सा सेलेक्टर एलिमेंट्स को उनके भाषा एट्रिब्यूट के आधार पर मैच करता है?",
    options_en: [":lang()", ":lang", ":language", ":lang-select"],
    options_hi: [":lang()", ":lang", ":language", ":lang-select"],
    answer_en: ":lang()",
    answer_hi: ":lang()",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which selector selects elements that are target of a URL fragment?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जो URL फ्रैगमेंट के टारगेट होते हैं?",
    options_en: [":target", ":focus", ":active", ":visited"],
    options_hi: [":target", ":focus", ":active", ":visited"],
    answer_en: ":target",
    answer_hi: ":target",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which selector selects elements that are currently being edited?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जो वर्तमान में एडिट किए जा रहे हैं?",
    options_en: [":read-write", ":read-only", ":edit", ":editable"],
    options_hi: [":read-write", ":read-only", ":edit", ":editable"],
    answer_en: ":read-write",
    answer_hi: ":read-write",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which selector selects elements that are read-only?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जो रीड-ओनली हैं?",
    options_en: [":read-only", ":read-write", ":disabled", ":enabled"],
    options_hi: [":read-only", ":read-write", ":disabled", ":enabled"],
    answer_en: ":read-only",
    answer_hi: ":read-only",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which selector selects form elements that are invalid?",
    question_hi: "कौन-सा सेलेक्टर उन फॉर्म एलिमेंट्स को सेलेक्ट करता है जो इनवैलिड हैं?",
    options_en: [":invalid", ":valid", ":checked", ":disabled"],
    options_hi: [":invalid", ":valid", ":checked", ":disabled"],
    answer_en: ":invalid",
    answer_hi: ":invalid",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which selector selects form elements that are valid?",
    question_hi: "कौन-सा सेलेक्टर उन फॉर्म एलिमेंट्स को सेलेक्ट करता है जो वैध हैं?",
    options_en: [":valid", ":invalid", ":checked", ":disabled"],
    options_hi: [":valid", ":invalid", ":checked", ":disabled"],
    answer_en: ":valid",
    answer_hi: ":valid",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which selector selects elements that are in focus within a form?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जो फॉर्म के अंदर फोकस में हैं?",
    options_en: [":focus-within", ":focus", ":active", ":hover"],
    options_hi: [":focus-within", ":focus", ":active", ":hover"],
    answer_en: ":focus-within",
    answer_hi: ":focus-within",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which selector selects elements based on their enabled state?",
    question_hi: "कौन-सा सेलेक्टर उनके सक्षम (enabled) स्थिति के आधार पर एलिमेंट्स को सेलेक्ट करता है?",
    options_en: [":enabled", ":disabled", ":checked", ":focus"],
    options_hi: [":enabled", ":disabled", ":checked", ":focus"],
    answer_en: ":enabled",
    answer_hi: ":enabled",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which selector selects elements that are being hovered over?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जिन पर माउस होवर हो रहा है?",
    options_en: [":hover", ":active", ":focus", ":visited"],
    options_hi: [":hover", ":active", ":focus", ":visited"],
    answer_en: ":hover",
    answer_hi: ":hover",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which selector selects elements after they have been visited (like links)?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जो विजिटेड हो चुके हों (जैसे लिंक)?",
    options_en: [":visited", ":link", ":hover", ":focus"],
    options_hi: [":visited", ":link", ":hover", ":focus"],
    answer_en: ":visited",
    answer_hi: ":visited",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which selector selects elements that have been targeted by the URL fragment?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जिन्हें URL फ्रैगमेंट ने टारगेट किया है?",
    options_en: [":target", ":focus", ":active", ":visited"],
    options_hi: [":target", ":focus", ":active", ":visited"],
    answer_en: ":target",
    answer_hi: ":target",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which selector matches elements with a specific attribute starting with a specific value?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को मैच करता है जिनके एट्रिब्यूट का मान किसी विशेष मान से शुरू होता है?",
    options_en: ["[attr^=value]", "[attr$=value]", "[attr*=value]", "[attr~=value]"],
    options_hi: ["[attr^=value]", "[attr$=value]", "[attr*=value]", "[attr~=value]"],
    answer_en: "[attr^=value]",
    answer_hi: "[attr^=value]",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which selector matches elements with an attribute value containing a specified substring?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को मैच करता है जिनके एट्रिब्यूट का मान किसी विशिष्ट सबस्ट्रिंग को शामिल करता है?",
    options_en: ["[attr*=value]", "[attr^=value]", "[attr$=value]", "[attr~=value]"],
    options_hi: ["[attr*=value]", "[attr^=value]", "[attr$=value]", "[attr~=value]"],
    answer_en: "[attr*=value]",
    answer_hi: "[attr*=value]",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which selector selects elements with a class name that starts with a specific string?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जिनकी क्लास नेम किसी विशेष स्ट्रिंग से शुरू होती है?",
    options_en: [".classname^=value", "[class^=value]", ":class^=value", "#class^=value"],
    options_hi: [".classname^=value", "[class^=value]", ":class^=value", "#class^=value"],
    answer_en: "[class^=value]",
    answer_hi: "[class^=value]",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which selector is used to select elements with multiple classes?",
    question_hi: "कौन-सा सेलेक्टर उन एलिमेंट्स को सेलेक्ट करता है जिनके पास एक से अधिक क्लासेस होती हैं?",
    options_en: [".class1.class2", ".class1 #class2", "#class1.class2", "div.class1.class2"],
    options_hi: [".class1.class2", ".class1 #class2", "#class1.class2", "div.class1.class2"],
    answer_en: ".class1.class2",
    answer_hi: ".class1.class2",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which selector targets elements inside another element using a space?",
    question_hi: "कौन-सा सेलेक्टर किसी एलिमेंट के अंदर के एलिमेंट्स को सेलेक्ट करने के लिए स्पेस का उपयोग करता है?",
    options_en: ["Descendant selector (space)", "Child selector (>)", "Adjacent sibling selector (+)", "General sibling selector (~)"],
    options_hi: ["डिसेंडेंट सेलेक्टर (स्पेस)", "चाइल्ड सेलेक्टर (>)", "एडजेसेंट सिबलिंग सेलेक्टर (+)", "जनरल सिबलिंग सेलेक्टर (~)"],
    answer_en: "Descendant selector (space)",
    answer_hi: "डिसेंडेंट सेलेक्टर (स्पेस)",
    attempted: false,
    selected: ""
  }
      ],
      15:[
       {
    num: 1,
    question_en: "Which CSS property is used to set the position of an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी किसी एलिमेंट की स्थिति सेट करने के लिए उपयोग होती है?",
    options_en: ["position", "display", "float", "top"],
    options_hi: ["पोजीशन", "डिस्प्ले", "फ्लोट", "टॉप"],
    answer_en: "position",
    answer_hi: "पोजीशन",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "What are the possible values of the CSS position property?",
    question_hi: "CSS position प्रॉपर्टी के संभावित मान कौन-कौन से हैं?",
    options_en: ["static, relative, absolute, fixed, sticky", "left, right, top, bottom", "block, inline, flex, grid", "visible, hidden, collapse"],
    options_hi: ["static, relative, absolute, fixed, sticky", "लेफ्ट, राइट, टॉप, बॉटम", "ब्लॉक, इनलाइन, फ्लेक्स, ग्रिड", "विजिबल, हिडन, कोलैप्स"],
    answer_en: "static, relative, absolute, fixed, sticky",
    answer_hi: "static, relative, absolute, fixed, sticky",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "What is the default position value of an element in CSS?",
    question_hi: "CSS में किसी एलिमेंट की डिफ़ॉल्ट पोजीशन वैल्यू क्या होती है?",
    options_en: ["static", "relative", "absolute", "fixed"],
    options_hi: ["static", "relative", "absolute", "fixed"],
    answer_en: "static",
    answer_hi: "static",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which position value allows an element to be positioned relative to its normal position?",
    question_hi: "कौन-सा पोजीशन मान एलिमेंट को उसकी सामान्य स्थिति के सापेक्ष स्थिति देने की अनुमति देता है?",
    options_en: ["relative", "absolute", "fixed", "static"],
    options_hi: ["relative", "absolute", "fixed", "static"],
    answer_en: "relative",
    answer_hi: "relative",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which position value removes the element from the normal document flow and positions it relative to the nearest positioned ancestor?",
    question_hi: "कौन-सा पोजीशन मान एलिमेंट को सामान्य डॉक्यूमेंट फ्लो से हटा देता है और उसे सबसे नज़दीकी पोजीशन्ड पूर्वज के सापेक्ष रखता है?",
    options_en: ["absolute", "fixed", "relative", "static"],
    options_hi: ["absolute", "fixed", "relative", "static"],
    answer_en: "absolute",
    answer_hi: "absolute",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which position value fixes the element relative to the viewport, so it stays in the same place even when the page is scrolled?",
    question_hi: "कौन-सा पोजीशन मान एलिमेंट को व्यूपोर्ट के सापेक्ष फिक्स करता है, जिससे पेज स्क्रॉल होने पर भी वह अपनी जगह रहता है?",
    options_en: ["fixed", "absolute", "relative", "static"],
    options_hi: ["fixed", "absolute", "relative", "static"],
    answer_en: "fixed",
    answer_hi: "fixed",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which position value is used to make an element behave like position: relative until it crosses a specified threshold, then behave like fixed?",
    question_hi: "कौन-सा पोजीशन मान एलिमेंट को पहले relative की तरह व्यवहार करने देता है और फिर एक सीमा पार करने पर fixed की तरह?",
    options_en: ["sticky", "fixed", "absolute", "relative"],
    options_hi: ["sticky", "fixed", "absolute", "relative"],
    answer_en: "sticky",
    answer_hi: "sticky",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "If an element has position: absolute, to which element is it positioned relative by default?",
    question_hi: "अगर किसी एलिमेंट का position: absolute है, तो वह डिफ़ॉल्ट रूप से किस एलिमेंट के सापेक्ष पोजीशन्ड होता है?",
    options_en: ["nearest positioned ancestor", "viewport", "body", "document"],
    options_hi: ["सबसे नज़दीकी पोजीशन्ड पूर्वज", "व्यूपोर्ट", "बॉडी", "डॉक्यूमेंट"],
    answer_en: "nearest positioned ancestor",
    answer_hi: "सबसे नज़दीकी पोजीशन्ड पूर्वज",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "What does the 'top' CSS property control in positioned elements?",
    question_hi: "'top' CSS प्रॉपर्टी पोजीशन्ड एलिमेंट्स में क्या नियंत्रित करती है?",
    options_en: ["Distance from the top edge of the containing block", "Font size", "Padding", "Margin"],
    options_hi: ["कंटेनिंग ब्लॉक के ऊपर की दूरी", "फॉन्ट साइज", "पैडिंग", "मार्जिन"],
    answer_en: "Distance from the top edge of the containing block",
    answer_hi: "कंटेनिंग ब्लॉक के ऊपर की दूरी",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which CSS properties can be used to move a positioned element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी पोजीशन्ड एलिमेंट को मूव करने के लिए इस्तेमाल होती हैं?",
    options_en: ["top, right, bottom, left", "margin, padding", "display, position", "float, clear"],
    options_hi: ["टॉप, राइट, बॉटम, लेफ्ट", "मार्जिन, पैडिंग", "डिस्प्ले, पोजीशन", "फ्लोट, क्लियर"],
    answer_en: "top, right, bottom, left",
    answer_hi: "टॉप, राइट, बॉटम, लेफ्ट",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "What happens if you set position: static along with top: 10px?",
    question_hi: "अगर आप position: static सेट करें और साथ में top: 10px भी दें, तो क्या होगा?",
    options_en: ["top will have no effect", "Element moves 10px down", "Element moves 10px up", "Error in CSS"],
    options_hi: ["top का कोई असर नहीं होगा", "एलिमेंट 10px नीचे जाएगा", "एलिमेंट 10px ऊपर जाएगा", "CSS में एरर होगा"],
    answer_en: "top will have no effect",
    answer_hi: "top का कोई असर नहीं होगा",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "If an element is positioned fixed, which coordinate system does it use?",
    question_hi: "अगर कोई एलिमेंट fixed पोजीशन है, तो वह कौन-सा कोऑर्डिनेट सिस्टम इस्तेमाल करता है?",
    options_en: ["Viewport", "Containing block", "Nearest positioned ancestor", "Document"],
    options_hi: ["व्यूपोर्ट", "कंटेनिंग ब्लॉक", "सबसे नज़दीकी पोजीशन्ड पूर्वज", "डॉक्यूमेंट"],
    answer_en: "Viewport",
    answer_hi: "व्यूपोर्ट",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "What is the effect of position: relative with no offset properties (top, left, etc.)?",
    question_hi: "अगर position: relative हो लेकिन top, left आदि ऑफसेट न दिए जाएं, तो क्या प्रभाव होगा?",
    options_en: ["Element stays in normal flow", "Element moves to top-left", "Element becomes fixed", "Element is hidden"],
    options_hi: ["एलिमेंट सामान्य फ्लो में रहता है", "एलिमेंट ऊपर-बाएँ चला जाता है", "एलिमेंट फिक्स्ड हो जाता है", "एलिमेंट छुप जाता है"],
    answer_en: "Element stays in normal flow",
    answer_hi: "एलिमेंट सामान्य फ्लो में रहता है",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which of these position values removes an element from document flow?",
    question_hi: "इनमें से कौन-सा पोजीशन मान एलिमेंट को डॉक्यूमेंट फ्लो से हटा देता है?",
    options_en: ["absolute, fixed", "relative, static", "static only", "sticky only"],
    options_hi: ["absolute, fixed", "relative, static", "static केवल", "sticky केवल"],
    answer_en: "absolute, fixed",
    answer_hi: "absolute, fixed",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which CSS property can be used with position: sticky to define the threshold?",
    question_hi: "position: sticky के साथ कौन-सी CSS प्रॉपर्टी सीमा निर्धारित करने के लिए उपयोग होती है?",
    options_en: ["top", "left", "z-index", "display"],
    options_hi: ["top", "left", "z-index", "डिस्प्ले"],
    answer_en: "top",
    answer_hi: "top",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which position value keeps the element in normal flow and allows top, bottom, left, right offsets to move it?",
    question_hi: "कौन-सा पोजीशन मान एलिमेंट को सामान्य फ्लो में रखता है और top, bottom, left, right ऑफसेट्स से मूव करने देता है?",
    options_en: ["relative", "absolute", "fixed", "static"],
    options_hi: ["relative", "absolute", "fixed", "static"],
    answer_en: "relative",
    answer_hi: "relative",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "What is the stacking context related to position and z-index?",
    question_hi: "पोजीशन और z-index से जुड़ा स्टैकिंग कॉन्टेक्स्ट क्या है?",
    options_en: [
      "A hierarchy that controls overlapping of positioned elements",
      "A property to set font size",
      "A layout model for grids",
      "A browser setting"
    ],
    options_hi: [
      "एक हायार्की जो पोजीशन्ड एलिमेंट्स के ओवरलैपिंग को नियंत्रित करती है",
      "फॉन्ट साइज सेट करने की प्रॉपर्टी",
      "ग्रिड्स के लिए लेआउट मॉडल",
      "ब्राउज़र सेटिंग"
    ],
    answer_en: "A hierarchy that controls overlapping of positioned elements",
    answer_hi: "एक हायार्की जो पोजीशन्ड एलिमेंट्स के ओवरलैपिंग को नियंत्रित करती है",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "If an element with position: relative has z-index: 1, and another with position: absolute has z-index: 0, which one will be on top?",
    question_hi: "अगर एक एलिमेंट position: relative और z-index: 1 है, और दूसरा position: absolute और z-index: 0 है, तो कौन ऊपर होगा?",
    options_en: ["Relative element", "Absolute element", "Both overlap equally", "None"],
    options_hi: ["Relative एलिमेंट", "Absolute एलिमेंट", "दोनों समान रूप से ओवरलैप", "कोई नहीं"],
    answer_en: "Relative element",
    answer_hi: "Relative एलिमेंट",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which CSS property controls the stacking order of positioned elements?",
    question_hi: "कौन-सी CSS प्रॉपर्टी पोजीशन्ड एलिमेंट्स के स्टैकिंग क्रम को नियंत्रित करती है?",
    options_en: ["z-index", "position", "display", "float"],
    options_hi: ["z-index", "पोजीशन", "डिस्प्ले", "फ्लोट"],
    answer_en: "z-index",
    answer_hi: "z-index",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Can position: fixed elements overlap position: absolute elements?",
    question_hi: "क्या position: fixed एलिमेंट्स position: absolute एलिमेंट्स के ऊपर ओवरलैप कर सकते हैं?",
    options_en: ["Yes", "No", "Depends on z-index", "Only in IE browser"],
    options_hi: ["हाँ", "नहीं", "z-index पर निर्भर करता है", "सिर्फ IE ब्राउज़र में"],
    answer_en: "Depends on z-index",
    answer_hi: "z-index पर निर्भर करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which position value should be used to make a header stay visible at the top when scrolling?",
    question_hi: "स्क्रॉल करते समय हेडर को टॉप पर दिखाने के लिए कौन-सा पोजीशन मान इस्तेमाल किया जाना चाहिए?",
    options_en: ["fixed", "absolute", "relative", "static"],
    options_hi: ["fixed", "absolute", "relative", "static"],
    answer_en: "fixed",
    answer_hi: "fixed",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "What is the difference between relative and absolute positioning?",
    question_hi: "relative और absolute पोजीशनिंग में क्या अंतर है?",
    options_en: [
      "Relative positions relative to itself, absolute positions relative to nearest positioned ancestor",
      "Relative positions fixed to viewport, absolute moves with page",
      "Relative removes element from flow, absolute keeps in flow",
      "No difference"
    ],
    options_hi: [
      "Relative खुद के सापेक्ष स्थिति देता है, absolute सबसे नजदीकी पोजीशन्ड पूर्वज के सापेक्ष",
      "Relative व्यूपोर्ट के सापेक्ष फिक्स होता है, absolute पेज के साथ मूव करता है",
      "Relative एलिमेंट को फ्लो से हटाता है, absolute फ्लो में रखता है",
      "कोई अंतर नहीं"
    ],
    answer_en: "Relative positions relative to itself, absolute positions relative to nearest positioned ancestor",
    answer_hi: "Relative खुद के सापेक्ष स्थिति देता है, absolute सबसे नजदीकी पोजीशन्ड पूर्वज के सापेक्ष",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which CSS property controls the order of flex items, often used along with positioning?",
    question_hi: "कौन-सी CSS प्रॉपर्टी flex आइटम्स के क्रम को नियंत्रित करती है, जो पोजीशनिंग के साथ उपयोग होती है?",
    options_en: ["order", "z-index", "position", "flex-direction"],
    options_hi: ["order", "z-index", "पोजीशन", "flex-direction"],
    answer_en: "order",
    answer_hi: "order",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which property can break out of the normal flow and overlap other elements?",
    question_hi: "कौन-सी प्रॉपर्टी सामान्य फ्लो से बाहर निकलकर अन्य एलिमेंट्स के ऊपर ओवरलैप कर सकती है?",
    options_en: ["position with z-index", "margin", "padding", "display"],
    options_hi: ["position के साथ z-index", "मार्जिन", "पैडिंग", "डिस्प्ले"],
    answer_en: "position with z-index",
    answer_hi: "position के साथ z-index",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which property controls how an element floats to the left or right?",
    question_hi: "कौन-सी प्रॉपर्टी नियंत्रित करती है कि कोई एलिमेंट बाईं या दाईं ओर फ्लोट करे?",
    options_en: ["float", "position", "display", "z-index"],
    options_hi: ["फ्लोट", "पोजीशन", "डिस्प्ले", "z-index"],
    answer_en: "float",
    answer_hi: "फ्लोट",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Which CSS property controls the stacking order of elements?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एलिमेंट्स के स्टैकिंग ऑर्डर को नियंत्रित करती है?",
    options_en: ["z-index", "position", "display", "float"],
    options_hi: ["z-index", "पोजीशन", "डिस्प्ले", "फ्लोट"],
    answer_en: "z-index",
    answer_hi: "z-index",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "What happens when you set z-index to a higher value?",
    question_hi: "जब आप z-index को उच्च मान देते हैं तो क्या होता है?",
    options_en: ["Element appears on top", "Element moves down", "Element hides", "No effect"],
    options_hi: ["एलिमेंट ऊपर दिखाई देता है", "एलिमेंट नीचे चला जाता है", "एलिमेंट छुप जाता है", "कोई प्रभाव नहीं"],
    answer_en: "Element appears on top",
    answer_hi: "एलिमेंट ऊपर दिखाई देता है",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Can z-index be used without setting position?",
    question_hi: "क्या बिना position सेट किए z-index का उपयोग किया जा सकता है?",
    options_en: ["No", "Yes", "Sometimes", "Only in IE"],
    options_hi: ["नहीं", "हाँ", "कभी-कभी", "सिर्फ IE में"],
    answer_en: "No",
    answer_hi: "नहीं",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which positioning allows an element to overlap others and be moved anywhere in the document?",
    question_hi: "कौन-सी पोजीशनिंग एलिमेंट को दूसरों के ऊपर ओवरलैप करने और डॉक्यूमेंट में कहीं भी मूव करने देती है?",
    options_en: ["absolute", "relative", "static", "fixed"],
    options_hi: ["absolute", "relative", "static", "fixed"],
    answer_en: "absolute",
    answer_hi: "absolute",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which positioning type keeps an element fixed relative to the browser window?",
    question_hi: "कौन-सी पोजीशनिंग टाइप एलिमेंट को ब्राउज़र विंडो के सापेक्ष फिक्स रखती है?",
    options_en: ["fixed", "absolute", "relative", "static"],
    options_hi: ["fixed", "absolute", "relative", "static"],
    answer_en: "fixed",
    answer_hi: "fixed",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "What does 'position: static' mean?",
    question_hi: "'position: static' का क्या मतलब है?",
    options_en: ["Default position, element flows normally", "Element is fixed", "Element is positioned absolutely", "Element is sticky"],
    options_hi: ["डिफ़ॉल्ट स्थिति, एलिमेंट सामान्य फ्लो में रहता है", "एलिमेंट फिक्स्ड होता है", "एलिमेंट पूरी तरह से पोजीशन्ड होता है", "एलिमेंट sticky होता है"],
    answer_en: "Default position, element flows normally",
    answer_hi: "डिफ़ॉल्ट स्थिति, एलिमेंट सामान्य फ्लो में रहता है",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "How does 'position: sticky' behave when you scroll past its threshold?",
    question_hi: "जब आप उसके सीमा से स्क्रॉल करते हैं तो 'position: sticky' कैसे व्यवहार करता है?",
    options_en: ["Becomes fixed", "Becomes static", "Disappears", "Becomes absolute"],
    options_hi: ["फिक्स्ड हो जाता है", "स्टैटिक हो जाता है", "गायब हो जाता है", "एब्सोल्यूट हो जाता है"],
    answer_en: "Becomes fixed",
    answer_hi: "फिक्स्ड हो जाता है",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which CSS property defines the stacking order when elements overlap?",
    question_hi: "जब एलिमेंट्स ओवरलैप करते हैं तो स्टैकिंग ऑर्डर कौन-सी CSS प्रॉपर्टी पर निर्भर करता है?",
    options_en: ["z-index", "top", "position", "display"],
    options_hi: ["z-index", "टॉप", "पोजीशन", "डिस्प्ले"],
    answer_en: "z-index",
    answer_hi: "z-index",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which positioning method removes the element from the document flow?",
    question_hi: "कौन-सी पोजीशनिंग मेथड एलिमेंट को डॉक्यूमेंट फ्लो से हटा देती है?",
    options_en: ["absolute and fixed", "relative and static", "static only", "sticky only"],
    options_hi: ["absolute और fixed", "relative और static", "सिर्फ static", "सिर्फ sticky"],
    answer_en: "absolute and fixed",
    answer_hi: "absolute और fixed",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which property controls how far an absolutely positioned element is from the left of its containing block?",
    question_hi: "कौन-सी प्रॉपर्टी नियंत्रित करती है कि एब्सोल्यूटली पोजीशन्ड एलिमेंट अपनी कंटेनिंग ब्लॉक के बाईं ओर कितनी दूर है?",
    options_en: ["left", "margin-left", "padding-left", "position"],
    options_hi: ["left", "मार्जिन-लेफ्ट", "पैडिंग-लेफ्ट", "पोजीशन"],
    answer_en: "left",
    answer_hi: "left",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Can an element with 'position: fixed' move when the page scrolls?",
    question_hi: "क्या 'position: fixed' वाला एलिमेंट पेज स्क्रॉल होने पर मूव कर सकता है?",
    options_en: ["No", "Yes", "Sometimes", "Depends on browser"],
    options_hi: ["नहीं", "हाँ", "कभी-कभी", "ब्राउज़र पर निर्भर करता है"],
    answer_en: "No",
    answer_hi: "नहीं",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "If you want an element to scroll with the page but offset from its normal position, which position should you use?",
    question_hi: "अगर आप चाहते हैं कि एलिमेंट पेज के साथ स्क्रॉल करे लेकिन अपनी सामान्य स्थिति से ऑफसेट हो, तो कौन-सा पोजीशन उपयोग करें?",
    options_en: ["relative", "absolute", "fixed", "static"],
    options_hi: ["relative", "absolute", "fixed", "static"],
    answer_en: "relative",
    answer_hi: "relative",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "What does the CSS property 'bottom' control in positioned elements?",
    question_hi: "पोजीशन्ड एलिमेंट्स में 'bottom' CSS प्रॉपर्टी क्या नियंत्रित करती है?",
    options_en: ["Distance from the bottom edge of containing block", "Font size", "Padding", "Margin"],
    options_hi: ["कंटेनिंग ब्लॉक के नीचे की दूरी", "फॉन्ट साइज", "पैडिंग", "मार्जिन"],
    answer_en: "Distance from the bottom edge of containing block",
    answer_hi: "कंटेनिंग ब्लॉक के नीचे की दूरी",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Is 'position: sticky' supported in all modern browsers?",
    question_hi: "क्या 'position: sticky' सभी आधुनिक ब्राउज़रों में समर्थित है?",
    options_en: ["Yes", "No", "Only in Chrome", "Only in Firefox"],
    options_hi: ["हाँ", "नहीं", "सिर्फ Chrome में", "सिर्फ Firefox में"],
    answer_en: "Yes",
    answer_hi: "हाँ",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "What is the effect of setting 'position: absolute' without specifying top, left, bottom or right?",
    question_hi: "'position: absolute' सेट करने पर बिना top, left, bottom या right निर्दिष्ट किए क्या प्रभाव होगा?",
    options_en: ["Element positioned at its normal place", "Element positioned at top-left of containing block", "Element hidden", "Element fixed"],
    options_hi: ["एलिमेंट अपनी सामान्य जगह पर रहेगा", "एलिमेंट कंटेनिंग ब्लॉक के टॉप-लेफ्ट पर पोजीशन्ड होगा", "एलिमेंट छुपा होगा", "एलिमेंट फिक्स्ड होगा"],
    answer_en: "Element positioned at its normal place",
    answer_hi: "एलिमेंट अपनी सामान्य जगह पर रहेगा",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which CSS property specifies the distance between the element’s border and its offset position?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एलिमेंट की बॉर्डर और उसके ऑफसेट पोजीशन के बीच की दूरी बताती है?",
    options_en: ["margin", "padding", "top", "position"],
    options_hi: ["मार्जिन", "पैडिंग", "टॉप", "पोजीशन"],
    answer_en: "margin",
    answer_hi: "मार्जिन",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which positioning method is best for creating overlays or modals?",
    question_hi: "ओवरले या मोडल बनाने के लिए कौन-सी पोजीशनिंग मेथड सबसे अच्छी है?",
    options_en: ["fixed", "static", "relative", "sticky"],
    options_hi: ["fixed", "static", "relative", "sticky"],
    answer_en: "fixed",
    answer_hi: "fixed",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which CSS property can be used to prevent an element from moving when scrolled?",
    question_hi: "स्क्रॉल करते समय एलिमेंट को मूव होने से रोकने के लिए कौन-सी CSS प्रॉपर्टी का उपयोग किया जाता है?",
    options_en: ["position: fixed", "position: relative", "position: absolute", "position: static"],
    options_hi: ["position: fixed", "position: relative", "position: absolute", "position: static"],
    answer_en: "position: fixed",
    answer_hi: "position: fixed",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which positioning value allows an element to scroll with the page but remain visible until a certain scroll position?",
    question_hi: "कौन-सा पोजीशन मान एलिमेंट को पेज के साथ स्क्रॉल करने देता है लेकिन एक निश्चित स्क्रॉल पोजीशन तक विजिबल रखता है?",
    options_en: ["sticky", "fixed", "absolute", "relative"],
    options_hi: ["sticky", "fixed", "absolute", "relative"],
    answer_en: "sticky",
    answer_hi: "sticky",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which position value does not remove the element from the normal document flow?",
    question_hi: "कौन-सा पोजीशन मान एलिमेंट को सामान्य डॉक्यूमेंट फ्लो से नहीं हटाता?",
    options_en: ["relative", "absolute", "fixed", "sticky"],
    options_hi: ["relative", "absolute", "fixed", "sticky"],
    answer_en: "relative",
    answer_hi: "relative",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "How do 'top' and 'left' properties affect an element with position: relative?",
    question_hi: "'top' और 'left' प्रॉपर्टीज़ position: relative वाले एलिमेंट को कैसे प्रभावित करती हैं?",
    options_en: [
      "Moves element relative to its normal position",
      "Positions element absolutely",
      "Fixes element to viewport",
      "No effect"
    ],
    options_hi: [
      "एलिमेंट को उसकी सामान्य स्थिति के सापेक्ष मूव करती हैं",
      "एलिमेंट को एब्सोल्यूटली पोजीशन्ड करती हैं",
      "एलिमेंट को व्यूपोर्ट पर फिक्स करती हैं",
      "कोई प्रभाव नहीं"
    ],
    answer_en: "Moves element relative to its normal position",
    answer_hi: "एलिमेंट को उसकी सामान्य स्थिति के सापेक्ष मूव करती हैं",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "What is the initial value of the CSS position property?",
    question_hi: "CSS position प्रॉपर्टी का प्रारंभिक मान क्या है?",
    options_en: ["static", "relative", "absolute", "fixed"],
    options_hi: ["static", "relative", "absolute", "fixed"],
    answer_en: "static",
    answer_hi: "static",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which CSS positioning allows elements to be placed relative to their siblings?",
    question_hi: "कौन-सी CSS पोजीशनिंग एलिमेंट्स को उनके सिबलिंग्स के सापेक्ष रखने देती है?",
    options_en: ["relative", "absolute", "fixed", "static"],
    options_hi: ["relative", "absolute", "fixed", "static"],
    answer_en: "relative",
    answer_hi: "relative",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Can 'position: absolute' elements overlap 'position: relative' elements?",
    question_hi: "क्या 'position: absolute' वाले एलिमेंट्स 'position: relative' एलिमेंट्स के ऊपर ओवरलैप कर सकते हैं?",
    options_en: ["Yes", "No", "Depends on z-index", "Only sometimes"],
    options_hi: ["हाँ", "नहीं", "z-index पर निर्भर करता है", "कभी-कभी"],
    answer_en: "Depends on z-index",
    answer_hi: "z-index पर निर्भर करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which CSS property defines the order in which positioned elements overlap each other?",
    question_hi: "कौन-सी CSS प्रॉपर्टी निर्धारित करती है कि पोजीशन्ड एलिमेंट्स एक-दूसरे के ऊपर किस क्रम में ओवरलैप होंगे?",
    options_en: ["z-index", "position", "display", "float"],
    options_hi: ["z-index", "पोजीशन", "डिस्प्ले", "फ्लोट"],
    answer_en: "z-index",
    answer_hi: "z-index",
    attempted: false,
    selected: ""
  }   
    ],
      16:[
       {
    num: 1,
    question_en: "What does CSS Flexbox primarily help with?",
    question_hi: "CSS Flexbox मुख्य रूप से किस चीज़ में मदद करता है?",
    options_en: ["Layout alignment", "Color styling", "Font styling", "Animation effects"],
    options_hi: ["लेआउट संरेखण", "रंग स्टाइलिंग", "फॉन्ट स्टाइलिंग", "एनिमेशन प्रभाव"],
    answer_en: "Layout alignment",
    answer_hi: "लेआउट संरेखण",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which property defines a flex container?",
    question_hi: "कौन-सी प्रॉपर्टी flex container को परिभाषित करती है?",
    options_en: ["display: flex", "position: flex", "flex-direction", "align-items"],
    options_hi: ["display: flex", "position: flex", "flex-direction", "align-items"],
    answer_en: "display: flex",
    answer_hi: "display: flex",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "What is the default value of 'flex-direction'?",
    question_hi: "'flex-direction' का डिफ़ॉल्ट मान क्या है?",
    options_en: ["row", "column", "row-reverse", "column-reverse"],
    options_hi: ["row", "column", "row-reverse", "column-reverse"],
    answer_en: "row",
    answer_hi: "row",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which property controls the direction of the main axis in flexbox?",
    question_hi: "Flexbox में main axis की दिशा को कौन-सी प्रॉपर्टी नियंत्रित करती है?",
    options_en: ["flex-direction", "justify-content", "align-items", "flex-wrap"],
    options_hi: ["flex-direction", "justify-content", "align-items", "flex-wrap"],
    answer_en: "flex-direction",
    answer_hi: "flex-direction",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which property controls how flex items are aligned along the main axis?",
    question_hi: "Main axis के साथ flex आइटम्स को कैसे संरेखित किया जाता है, यह कौन-सी प्रॉपर्टी नियंत्रित करती है?",
    options_en: ["justify-content", "align-items", "flex-direction", "flex-wrap"],
    options_hi: ["justify-content", "align-items", "flex-direction", "flex-wrap"],
    answer_en: "justify-content",
    answer_hi: "justify-content",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "What does 'align-items: center' do in flexbox?",
    question_hi: "'align-items: center' flexbox में क्या करता है?",
    options_en: [
      "Centers flex items along the cross axis",
      "Centers flex items along the main axis",
      "Aligns flex items to start",
      "Aligns flex items to end"
    ],
    options_hi: [
      "क्रॉस एक्सिस के साथ आइटम्स को केंद्रित करता है",
      "मेन एक्सिस के साथ आइटम्स को केंद्रित करता है",
      "आइटम्स को शुरू में संरेखित करता है",
      "आइटम्स को अंत में संरेखित करता है"
    ],
    answer_en: "Centers flex items along the cross axis",
    answer_hi: "क्रॉस एक्सिस के साथ आइटम्स को केंद्रित करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which property controls wrapping of flex items?",
    question_hi: "Flex आइटम्स के wrapping को कौन-सी प्रॉपर्टी नियंत्रित करती है?",
    options_en: ["flex-wrap", "flex-flow", "flex-grow", "flex-shrink"],
    options_hi: ["flex-wrap", "flex-flow", "flex-grow", "flex-shrink"],
    answer_en: "flex-wrap",
    answer_hi: "flex-wrap",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "What is the effect of 'flex-wrap: nowrap'?",
    question_hi: "'flex-wrap: nowrap' का क्या प्रभाव होता है?",
    options_en: [
      "Flex items stay in one line without wrapping",
      "Flex items wrap to multiple lines",
      "Flex items disappear",
      "Flex items align center"
    ],
    options_hi: [
      "फ्लेक्स आइटम्स एक लाइन में रहते हैं बिना रैपिंग के",
      "फ्लेक्स आइटम्स कई लाइनों में रैप होते हैं",
      "फ्लेक्स आइटम्स गायब हो जाते हैं",
      "फ्लेक्स आइटम्स केंद्र में संरेखित होते हैं"
    ],
    answer_en: "Flex items stay in one line without wrapping",
    answer_hi: "फ्लेक्स आइटम्स एक लाइन में रहते हैं बिना रैपिंग के",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which property is shorthand for 'flex-grow', 'flex-shrink' and 'flex-basis'?",
    question_hi: "'flex-grow', 'flex-shrink' और 'flex-basis' के लिए shorthand कौन-सी प्रॉपर्टी है?",
    options_en: ["flex", "flex-flow", "flex-wrap", "flex-direction"],
    options_hi: ["flex", "flex-flow", "flex-wrap", "flex-direction"],
    answer_en: "flex",
    answer_hi: "flex",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "What does 'flex-grow: 1' mean?",
    question_hi: "'flex-grow: 1' का क्या मतलब है?",
    options_en: [
      "Flex item can grow to fill available space",
      "Flex item cannot grow",
      "Flex item shrinks",
      "Flex item is hidden"
    ],
    options_hi: [
      "फ्लेक्स आइटम उपलब्ध जगह भरने के लिए बढ़ सकता है",
      "फ्लेक्स आइटम नहीं बढ़ सकता",
      "फ्लेक्स आइटम सिकुड़ता है",
      "फ्लेक्स आइटम छुपा है"
    ],
    answer_en: "Flex item can grow to fill available space",
    answer_hi: "फ्लेक्स आइटम उपलब्ध जगह भरने के लिए बढ़ सकता है",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "What is the default value of 'flex-shrink'?",
    question_hi: "'flex-shrink' का डिफ़ॉल्ट मान क्या है?",
    options_en: ["1", "0", "auto", "none"],
    options_hi: ["1", "0", "auto", "none"],
    answer_en: "1",
    answer_hi: "1",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which property aligns flex items along the cross axis?",
    question_hi: "क्रॉस एक्सिस पर फ्लेक्स आइटम्स को संरेखित करने वाली प्रॉपर्टी कौन-सी है?",
    options_en: ["align-items", "justify-content", "flex-direction", "flex-wrap"],
    options_hi: ["align-items", "justify-content", "flex-direction", "flex-wrap"],
    answer_en: "align-items",
    answer_hi: "align-items",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which property allows individual flex items to override the container’s 'align-items' setting?",
    question_hi: "कौन-सी प्रॉपर्टी व्यक्तिगत फ्लेक्स आइटम्स को कंटेनर के 'align-items' सेटिंग को ओवरराइड करने देती है?",
    options_en: ["align-self", "align-items", "justify-content", "flex-grow"],
    options_hi: ["align-self", "align-items", "justify-content", "flex-grow"],
    answer_en: "align-self",
    answer_hi: "align-self",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which flexbox property controls the alignment of flex lines in multi-line flex containers?",
    question_hi: "मल्टी-लाइन फ्लेक्स कंटेनर में फ्लेक्स लाइनों की संरेखण को कौन-सी प्रॉपर्टी नियंत्रित करती है?",
    options_en: ["align-content", "justify-content", "align-items", "flex-wrap"],
    options_hi: ["align-content", "justify-content", "align-items", "flex-wrap"],
    answer_en: "align-content",
    answer_hi: "align-content",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "What does the 'order' property do in flexbox?",
    question_hi: "Flexbox में 'order' प्रॉपर्टी क्या करती है?",
    options_en: [
      "Controls the order of flex items",
      "Controls color of flex items",
      "Controls size of flex items",
      "Controls margin of flex items"
    ],
    options_hi: [
      "फ्लेक्स आइटम्स के क्रम को नियंत्रित करती है",
      "फ्लेक्स आइटम्स के रंग को नियंत्रित करती है",
      "फ्लेक्स आइटम्स के आकार को नियंत्रित करती है",
      "फ्लेक्स आइटम्स के मार्जिन को नियंत्रित करती है"
    ],
    answer_en: "Controls the order of flex items",
    answer_hi: "फ्लेक्स आइटम्स के क्रम को नियंत्रित करती है",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which CSS property is used to set the initial main size of a flex item?",
    question_hi: "कौन-सी CSS प्रॉपर्टी फ्लेक्स आइटम के प्रारंभिक मुख्य आकार को सेट करती है?",
    options_en: ["flex-basis", "flex-grow", "flex-shrink", "flex-wrap"],
    options_hi: ["flex-basis", "flex-grow", "flex-shrink", "flex-wrap"],
    answer_en: "flex-basis",
    answer_hi: "flex-basis",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "What happens if 'flex-grow' is set to 0?",
    question_hi: "'flex-grow' 0 पर सेट होने पर क्या होता है?",
    options_en: [
      "Flex item will not grow",
      "Flex item will grow",
      "Flex item will shrink",
      "Flex item will disappear"
    ],
    options_hi: [
      "फ्लेक्स आइटम नहीं बढ़ेगा",
      "फ्लेक्स आइटम बढ़ेगा",
      "फ्लेक्स आइटम सिकुड़ेगा",
      "फ्लेक्स आइटम गायब हो जाएगा"
    ],
    answer_en: "Flex item will not grow",
    answer_hi: "फ्लेक्स आइटम नहीं बढ़ेगा",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which value of 'justify-content' aligns items to the center?",
    question_hi: "'justify-content' का कौन-सा मान आइटम्स को केंद्र में संरेखित करता है?",
    options_en: ["center", "flex-start", "flex-end", "space-between"],
    options_hi: ["center", "flex-start", "flex-end", "space-between"],
    answer_en: "center",
    answer_hi: "center",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "What is the effect of 'justify-content: space-between'?",
    question_hi: "'justify-content: space-between' का क्या प्रभाव होता है?",
    options_en: [
      "Items spread out with equal space between",
      "Items grouped at start",
      "Items grouped at end",
      "Items centered"
    ],
    options_hi: [
      "आइटम्स समान दूरी पर फैले होते हैं",
      "आइटम्स शुरू में समूहित होते हैं",
      "आइटम्स अंत में समूहित होते हैं",
      "आइटम्स केंद्र में होते हैं"
    ],
    answer_en: "Items spread out with equal space between",
    answer_hi: "आइटम्स समान दूरी पर फैले होते हैं",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "How do you make a flex container wrap its items to the next line?",
    question_hi: "फ्लेक्स कंटेनर को अपने आइटम्स को अगली लाइन पर रैप करने के लिए कैसे सेट करें?",
    options_en: ["flex-wrap: wrap", "flex-direction: column", "flex-grow: 1", "justify-content: center"],
    options_hi: ["flex-wrap: wrap", "flex-direction: column", "flex-grow: 1", "justify-content: center"],
    answer_en: "flex-wrap: wrap",
    answer_hi: "flex-wrap: wrap",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "What does 'align-content' control in flexbox?",
    question_hi: "Flexbox में 'align-content' क्या नियंत्रित करता है?",
    options_en: [
      "Alignment of flex lines in multi-line flex containers",
      "Alignment of items along main axis",
      "Direction of flex items",
      "Wrapping behavior"
    ],
    options_hi: [
      "मल्टी-लाइन फ्लेक्स कंटेनर में फ्लेक्स लाइनों की संरेखण",
      "मेन एक्सिस के साथ आइटम्स की संरेखण",
      "फ्लेक्स आइटम्स की दिशा",
      "रैपिंग व्यवहार"
    ],
    answer_en: "Alignment of flex lines in multi-line flex containers",
    answer_hi: "मल्टी-लाइन फ्लेक्स कंटेनर में फ्लेक्स लाइनों की संरेखण",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which property controls the alignment of flex items when they do not use all the available space?",
    question_hi: "जब फ्लेक्स आइटम्स उपलब्ध जगह का पूरा उपयोग नहीं करते, तो उनकी संरेखण को कौन-सी प्रॉपर्टी नियंत्रित करती है?",
    options_en: ["align-items", "align-content", "justify-content", "order"],
    options_hi: ["align-items", "align-content", "justify-content", "order"],
    answer_en: "align-items",
    answer_hi: "align-items",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which property is used to change the order of flex items visually?",
    question_hi: "फ्लेक्स आइटम्स के दृश्य क्रम को बदलने के लिए कौन-सी प्रॉपर्टी का उपयोग किया जाता है?",
    options_en: ["order", "flex-grow", "flex-shrink", "flex-basis"],
    options_hi: ["order", "flex-grow", "flex-shrink", "flex-basis"],
    answer_en: "order",
    answer_hi: "order",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "What is the default value of the 'order' property?",
    question_hi: "'order' प्रॉपर्टी का डिफ़ॉल्ट मान क्या है?",
    options_en: ["0", "1", "-1", "auto"],
    options_hi: ["0", "1", "-1", "auto"],
    answer_en: "0",
    answer_hi: "0",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which CSS flexbox property controls the ability of a flex item to shrink if necessary?",
    question_hi: "कौन-सी CSS फ्लेक्सबॉक्स प्रॉपर्टी फ्लेक्स आइटम को आवश्यक होने पर सिकुड़ने की क्षमता नियंत्रित करती है?",
    options_en: ["flex-shrink", "flex-grow", "flex-basis", "order"],
    options_hi: ["flex-shrink", "flex-grow", "flex-basis", "order"],
    answer_en: "flex-shrink",
    answer_hi: "flex-shrink",
    attempted: false,
    selected: ""
  },
   {
    num: 26,
    question_en: "What does the 'flex-basis' property specify?",
    question_hi: "'flex-basis' प्रॉपर्टी क्या निर्दिष्ट करती है?",
    options_en: [
      "Initial main size of a flex item",
      "Amount of space between items",
      "Alignment of items",
      "Order of items"
    ],
    options_hi: [
      "फ्लेक्स आइटम का प्रारंभिक मुख्य आकार",
      "आइटम्स के बीच की दूरी",
      "आइटम्स की संरेखण",
      "आइटम्स का क्रम"
    ],
    answer_en: "Initial main size of a flex item",
    answer_hi: "फ्लेक्स आइटम का प्रारंभिक मुख्य आकार",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which property defines the default size of an element before remaining space is distributed?",
    question_hi: "कौन-सी प्रॉपर्टी किसी एलिमेंट के डिफ़ॉल्ट आकार को परिभाषित करती है जब तक कि बाकी स्थान वितरित न हो?",
    options_en: ["flex-basis", "flex-grow", "flex-shrink", "justify-content"],
    options_hi: ["फ्लेक्स-बेसिस", "फ्लेक्स-ग्रो", "फ्लेक्स-श्रिंक", "जस्टिफाई-कॉन्टेंट"],
    answer_en: "flex-basis",
    answer_hi: "फ्लेक्स-बेसिस",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "What does 'justify-content: center' do in a flex container?",
    question_hi: "'justify-content: center' एक फ्लेक्स कंटेनर में क्या करता है?",
    options_en: ["Aligns items to the center of the main axis", "Aligns items to the start", "Aligns items to the end", "Stretches items"],
    options_hi: ["मुख्य अक्ष के केंद्र में आइटम संरेखित करता है", "प्रारंभ में आइटम संरेखित करता है", "अंत में आइटम संरेखित करता है", "आइटम्स को फैलाता है"],
    answer_en: "Aligns items to the center of the main axis",
    answer_hi: "मुख्य अक्ष के केंद्र में आइटम संरेखित करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which property allows items to wrap in a flex container?",
    question_hi: "कौन-सी प्रॉपर्टी फ्लेक्स कंटेनर में आइटम्स को रैप करने की अनुमति देती है?",
    options_en: ["flex-wrap", "flex-direction", "flex-flow", "align-items"],
    options_hi: ["फ्लेक्स-रैप", "फ्लेक्स-डायरेक्शन", "फ्लेक्स-फ्लो", "अलाइन-आइटम्स"],
    answer_en: "flex-wrap",
    answer_hi: "फ्लेक्स-रैप",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "What value of 'flex-direction' makes the main axis vertical from top to bottom?",
    question_hi: "'flex-direction' का कौन-सा मान मुख्य अक्ष को ऊपर से नीचे तक लंबवत बनाता है?",
    options_en: ["column", "row", "row-reverse", "column-reverse"],
    options_hi: ["कॉलम", "रो", "रो-रिवर्स", "कॉलम-रिवर्स"],
    answer_en: "column",
    answer_hi: "कॉलम",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which CSS property is used to align items on the cross axis in a flex container?",
    question_hi: "फ्लेक्स कंटेनर में क्रॉस अक्ष पर आइटम को संरेखित करने के लिए कौन-सी CSS प्रॉपर्टी उपयोग की जाती है?",
    options_en: ["justify-content", "align-items", "flex-direction", "align-content"],
    options_hi: ["जस्टिफाई-कंटेंट", "अलाइन-आइटम्स", "फ्लेक्स-डायरेक्शन", "अलाइन-कंटेंट"],
    answer_en: "align-items",
    answer_hi: "अलाइन-आइटम्स",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which value of 'justify-content' places items at the start of the main axis?",
    question_hi: "'justify-content' का कौन-सा मान आइटम्स को मुख्य अक्ष की शुरुआत में रखता है?",
    options_en: ["flex-start", "flex-end", "center", "space-between"],
    options_hi: ["फ्लेक्स-स्टार्ट", "फ्लेक्स-एंड", "सेंटर", "स्पेस-बिटवीन"],
    answer_en: "flex-start",
    answer_hi: "फ्लेक्स-स्टार्ट",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which property allows items to wrap onto multiple lines in a flex container?",
    question_hi: "फ्लेक्स कंटेनर में आइटम्स को कई लाइनों में लपेटने की अनुमति देने वाली प्रॉपर्टी कौन-सी है?",
    options_en: ["flex-wrap", "wrap-items", "flex-flow", "align-wrap"],
    options_hi: ["फ्लेक्स-रैप", "रैप-आइटम्स", "फ्लेक्स-फ्लो", "अलाइन-रैप"],
    answer_en: "flex-wrap",
    answer_hi: "फ्लेक्स-रैप",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which value of 'align-items' aligns items at the end of the cross axis?",
    question_hi: "'align-items' का कौन-सा मान आइटम्स को क्रॉस अक्ष के अंत में संरेखित करता है?",
    options_en: ["flex-end", "flex-start", "center", "stretch"],
    options_hi: ["फ्लेक्स-एंड", "फ्लेक्स-स्टार्ट", "सेंटर", "स्ट्रेच"],
    answer_en: "flex-end",
    answer_hi: "फ्लेक्स-एंड",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "What does 'flex-grow' specify?",
    question_hi: "'flex-grow' किसे निर्दिष्ट करता है?",
    options_en: [
      "The initial size of a flex item",
      "How much a flex item will grow relative to others",
      "The direction of the flex items",
      "The spacing between items"
    ],
    options_hi: [
      "फ्लेक्स आइटम का प्रारंभिक आकार",
      "अन्य आइटम्स की तुलना में फ्लेक्स आइटम कितना बढ़ेगा",
      "फ्लेक्स आइटम्स की दिशा",
      "आइटम्स के बीच की दूरी"
    ],
    answer_en: "How much a flex item will grow relative to others",
    answer_hi: "अन्य आइटम्स की तुलना में फ्लेक्स आइटम कितना बढ़ेगा",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which value of 'flex-direction' sets the main axis horizontally from right to left?",
    question_hi: "'flex-direction' का कौन-सा मान मुख्य अक्ष को दाएँ से बाएँ क्षैतिज बनाता है?",
    options_en: ["row", "row-reverse", "column", "column-reverse"],
    options_hi: ["रो", "रो-रिवर्स", "कॉलम", "कॉलम-रिवर्स"],
    answer_en: "row-reverse",
    answer_hi: "रो-रिवर्स",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "What does the 'align-content' property do in a flex container?",
    question_hi: "'align-content' प्रॉपर्टी फ्लेक्स कंटेनर में क्या करती है?",
    options_en: [
      "Aligns items on the cross axis",
      "Aligns multiple rows on the cross axis",
      "Sets the main axis direction",
      "Sets item spacing"
    ],
    options_hi: [
      "क्रॉस अक्ष पर आइटम्स को संरेखित करती है",
      "क्रॉस अक्ष पर कई पंक्तियों को संरेखित करती है",
      "मुख्य अक्ष की दिशा सेट करती है",
      "आइटम्स के बीच की दूरी सेट करती है"
    ],
    answer_en: "Aligns multiple rows on the cross axis",
    answer_hi: "क्रॉस अक्ष पर कई पंक्तियों को संरेखित करती है",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "What value of 'align-items' stretches items to fill the container?",
    question_hi: "'align-items' का कौन-सा मान आइटम्स को कंटेनर भरने के लिए खींचता है?",
    options_en: ["stretch", "flex-start", "flex-end", "center"],
    options_hi: ["स्ट्रेच", "फ्लेक्स-स्टार्ट", "फ्लेक्स-एंड", "सेंटर"],
    answer_en: "stretch",
    answer_hi: "स्ट्रेच",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which CSS property sets how flex items are laid out along the main axis?",
    question_hi: "कौन-सी CSS प्रॉपर्टी निर्धारित करती है कि फ्लेक्स आइटम्स मुख्य अक्ष के साथ कैसे रखे जाते हैं?",
    options_en: ["justify-content", "align-items", "order", "flex-wrap"],
    options_hi: ["जस्टिफाई-कंटेंट", "अलाइन-आइटम्स", "ऑर्डर", "फ्लेक्स-रैप"],
    answer_en: "justify-content",
    answer_hi: "जस्टिफाई-कंटेंट",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which property sets the order in which items appear in the flex container?",
    question_hi: "कौन-सी प्रॉपर्टी फ्लेक्स कंटेनर में आइटम्स की उपस्थिति का क्रम सेट करती है?",
    options_en: ["flex-order", "order", "flex-index", "z-index"],
    options_hi: ["फ्लेक्स-ऑर्डर", "ऑर्डर", "फ्लेक्स-इंडेक्स", "ज़ेड-इंडेक्स"],
    answer_en: "order",
    answer_hi: "ऑर्डर",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which shorthand property sets 'flex-grow', 'flex-shrink', and 'flex-basis'?",
    question_hi: "कौन-सी शॉर्टहैंड प्रॉपर्टी 'flex-grow', 'flex-shrink', और 'flex-basis' सेट करती है?",
    options_en: ["flex", "flex-direction", "flex-flow", "flex-wrap"],
    options_hi: ["फ्लेक्स", "फ्लेक्स-डायरेक्शन", "फ्लेक्स-फ्लो", "फ्लेक्स-रैप"],
    answer_en: "flex",
    answer_hi: "फ्लेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which property defines whether items are forced onto one line or can wrap?",
    question_hi: "कौन-सी प्रॉपर्टी निर्धारित करती है कि आइटम्स को एक ही पंक्ति में रखा जाएगा या वे लपेटे जा सकते हैं?",
    options_en: ["flex-wrap", "align-items", "flex-flow", "order"],
    options_hi: ["फ्लेक्स-रैप", "अलाइन-आइटम्स", "फ्लेक्स-फ्लो", "ऑर्डर"],
    answer_en: "flex-wrap",
    answer_hi: "फ्लेक्स-रैप",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "What is the default value of 'flex-direction'?",
    question_hi: "'flex-direction' का डिफ़ॉल्ट मान क्या होता है?",
    options_en: ["row", "column", "row-reverse", "column-reverse"],
    options_hi: ["रो", "कॉलम", "रो-रिवर्स", "कॉलम-रिवर्स"],
    answer_en: "row",
    answer_hi: "रो",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which flexbox property helps to control overflow of flex items?",
    question_hi: "कौन-सी फ्लेक्सबॉक्स प्रॉपर्टी फ्लेक्स आइटम्स के ओवरफ्लो को नियंत्रित करने में मदद करती है?",
    options_en: ["flex-wrap", "overflow", "align-items", "z-index"],
    options_hi: ["फ्लेक्स-रैप", "ओवरफ्लो", "अलाइन-आइटम्स", "ज़ेड-इंडेक्स"],
    answer_en: "flex-wrap",
    answer_hi: "फ्लेक्स-रैप",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "What does the 'order' property affect in a flex container?",
    question_hi: "'order' प्रॉपर्टी फ्लेक्स कंटेनर में किसे प्रभावित करती है?",
    options_en: [
      "Size of items",
      "Position in the DOM",
      "Visual order of items",
      "Background color"
    ],
    options_hi: [
      "आइटम्स का आकार",
      "DOM में स्थिति",
      "आइटम्स का दृश्य क्रम",
      "बैकग्राउंड रंग"
    ],
    answer_en: "Visual order of items",
    answer_hi: "आइटम्स का दृश्य क्रम",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "What is the default value of 'align-items' in flexbox?",
    question_hi: "फ्लेक्सबॉक्स में 'align-items' का डिफ़ॉल्ट मान क्या होता है?",
    options_en: ["stretch", "center", "flex-start", "baseline"],
    options_hi: ["स्ट्रेच", "सेंटर", "फ्लेक्स-स्टार्ट", "बेसलाइन"],
    answer_en: "stretch",
    answer_hi: "स्ट्रेच",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which property combines 'flex-direction' and 'flex-wrap'?",
    question_hi: "कौन-सी प्रॉपर्टी 'flex-direction' और 'flex-wrap' को जोड़ती है?",
    options_en: ["flex-flow", "flex", "display", "justify-content"],
    options_hi: ["फ्लेक्स-फ्लो", "फ्लेक्स", "डिस्प्ले", "जस्टिफाई-कंटेंट"],
    answer_en: "flex-flow",
    answer_hi: "फ्लेक्स-फ्लो",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which property controls how flex items shrink when necessary?",
    question_hi: "कौन-सी प्रॉपर्टी आवश्यक होने पर फ्लेक्स आइटम्स को सिकोड़ने को नियंत्रित करती है?",
    options_en: ["flex-shrink", "flex-grow", "flex-wrap", "order"],
    options_hi: ["फ्लेक्स-श्रिंक", "फ्लेक्स-ग्रो", "फ्लेक्स-रैप", "ऑर्डर"],
    answer_en: "flex-shrink",
    answer_hi: "फ्लेक्स-श्रिंक",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which flexbox value centers items both vertically and horizontally?",
    question_hi: "कौन-सा फ्लेक्सबॉक्स मान आइटम्स को ऊर्ध्वाधर और क्षैतिज दोनों रूप से केंद्र में रखता है?",
    options_en: [
      "justify-content: center; align-items: center;",
      "align-content: center",
      "flex-grow: 1",
      "order: 0"
    ],
    options_hi: [
      "justify-content: center; align-items: center;",
      "align-content: center",
      "flex-grow: 1",
      "order: 0"
    ],
    answer_en: "justify-content: center; align-items: center;",
    answer_hi: "justify-content: center; align-items: center;",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which display value activates flexbox layout?",
    question_hi: "कौन-सा डिस्प्ले मान फ्लेक्सबॉक्स लेआउट को सक्रिय करता है?",
    options_en: ["flex", "block", "inline", "grid"],
    options_hi: ["फ्लेक्स", "ब्लॉक", "इनलाइन", "ग्रिड"],
    answer_en: "flex",
    answer_hi: "फ्लेक्स",
    attempted: false,
    selected: ""
  }
      ],
      17:[
        {
    num: 1,
    question_en: "Which property controls the alignment of grid items along the row axis?",
    question_hi: "कौन-सी प्रॉपर्टी ग्रिड आइटम्स को पंक्ति अक्ष के साथ संरेखित करती है?",
    options_en: ["justify-items", "align-items", "justify-content", "align-content"],
    options_hi: ["जस्टिफाई-आइटम्स", "अलाइन-आइटम्स", "जस्टिफाई-कंटेंट", "अलाइन-कंटेंट"],
    answer_en: "justify-items",
    answer_hi: "जस्टिफाई-आइटम्स",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which CSS property defines the number of columns in a grid container?",
    question_hi: "कौन-सी CSS प्रॉपर्टी ग्रिड कंटेनर में कॉलम की संख्या निर्धारित करती है?",
    options_en: ["grid-template-columns", "grid-template-rows", "grid-column", "grid-row"],
    options_hi: ["ग्रिड-टेम्प्लेट-कॉलम्स", "ग्रिड-टेम्प्लेट-रोस", "ग्रिड-कॉलम", "ग्रिड-रो"],
    answer_en: "grid-template-columns",
    answer_hi: "ग्रिड-टेम्प्लेट-कॉलम्स",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which property controls the space between grid rows?",
    question_hi: "कौन-सी प्रॉपर्टी ग्रिड पंक्तियों के बीच की दूरी नियंत्रित करती है?",
    options_en: ["grid-row-gap", "grid-column-gap", "grid-gap", "grid-row-spacing"],
    options_hi: ["ग्रिड-रो-गैप", "ग्रिड-कॉलम-गैप", "ग्रिड-गैप", "ग्रिड-रो-स्पेसिंग"],
    answer_en: "grid-row-gap",
    answer_hi: "ग्रिड-रो-गैप",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which property is shorthand for setting both row and column gaps in grid?",
    question_hi: "कौन-सी प्रॉपर्टी ग्रिड में पंक्ति और कॉलम गैप दोनों सेट करने के लिए शॉर्टहैंड है?",
    options_en: ["grid-gap", "gap", "grid-row-gap", "grid-column-gap"],
    options_hi: ["ग्रिड-गैप", "गैप", "ग्रिड-रो-गैप", "ग्रिड-कॉलम-गैप"],
    answer_en: "gap",
    answer_hi: "गैप",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "What does 'grid-auto-flow: row' do?",
    question_hi: "'grid-auto-flow: row' क्या करता है?",
    options_en: [
      "Places items row-wise",
      "Places items column-wise",
      "Places items in layers",
      "Disables grid auto flow"
    ],
    options_hi: [
      "आइटम्स को पंक्ति के अनुसार रखता है",
      "आइटम्स को कॉलम के अनुसार रखता है",
      "आइटम्स को परतों में रखता है",
      "ग्रिड ऑटो फ्लो को अक्षम करता है"
    ],
    answer_en: "Places items row-wise",
    answer_hi: "आइटम्स को पंक्ति के अनुसार रखता है",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which property defines the starting grid line for a grid item?",
    question_hi: "कौन-सी प्रॉपर्टी ग्रिड आइटम के लिए शुरूआती ग्रिड लाइन को परिभाषित करती है?",
    options_en: ["grid-column-start", "grid-row-start", "grid-area", "grid-column-end"],
    options_hi: ["ग्रिड-कॉलम-स्टार्ट", "ग्रिड-रो-स्टार्ट", "ग्रिड-एरिया", "ग्रिड-कॉलम-एंड"],
    answer_en: "grid-column-start",
    answer_hi: "ग्रिड-कॉलम-स्टार्ट",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "What is the default value of 'grid-auto-flow'?",
    question_hi: "'grid-auto-flow' का डिफ़ॉल्ट मान क्या है?",
    options_en: ["row", "column", "dense", "none"],
    options_hi: ["रो", "कॉलम", "डेंस", "नन"],
    answer_en: "row",
    answer_hi: "रो",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which property allows you to assign a name to a grid area?",
    question_hi: "कौन-सी प्रॉपर्टी आपको ग्रिड क्षेत्र को नाम देने की अनुमति देती है?",
    options_en: ["grid-area", "grid-template-areas", "grid-template-columns", "grid-column"],
    options_hi: ["ग्रिड-एरिया", "ग्रिड-टेम्प्लेट-एरियास", "ग्रिड-टेम्प्लेट-कॉलम्स", "ग्रिड-कॉलम"],
    answer_en: "grid-area",
    answer_hi: "ग्रिड-एरिया",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which property specifies grid-template areas?",
    question_hi: "कौन-सी प्रॉपर्टी ग्रिड-टेम्प्लेट-एरियास को निर्दिष्ट करती है?",
    options_en: ["grid-template-areas", "grid-area", "grid-template-columns", "grid-auto-flow"],
    options_hi: ["ग्रिड-टेम्प्लेट-एरियास", "ग्रिड-एरिया", "ग्रिड-टेम्प्लेट-कॉलम्स", "ग्रिड-ऑटो-फ्लो"],
    answer_en: "grid-template-areas",
    answer_hi: "ग्रिड-टेम्प्लेट-एरियास",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "How do you make a grid container span across 3 columns?",
    question_hi: "आप ग्रिड कंटेनर को 3 कॉलम तक कैसे फैला सकते हैं?",
    options_en: ["grid-column: span 3;", "grid-row: span 3;", "grid-area: span 3;", "grid-span: 3;"],
    options_hi: ["ग्रिड-कॉलम: स्पैन 3;", "ग्रिड-रो: स्पैन 3;", "ग्रिड-एरिया: स्पैन 3;", "ग्रिड-स्पैन: 3;"],
    answer_en: "grid-column: span 3;",
    answer_hi: "ग्रिड-कॉलम: स्पैन 3;",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which property sets the size of grid rows?",
    question_hi: "कौन-सी प्रॉपर्टी ग्रिड पंक्तियों का आकार सेट करती है?",
    options_en: ["grid-template-rows", "grid-template-columns", "grid-auto-rows", "grid-row-gap"],
    options_hi: ["ग्रिड-टेम्प्लेट-रोस", "ग्रिड-टेम्प्लेट-कॉलम्स", "ग्रिड-ऑटो-रोस", "ग्रिड-रो-गैप"],
    answer_en: "grid-template-rows",
    answer_hi: "ग्रिड-टेम्प्लेट-रोस",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "What does 'fr' unit represent in CSS Grid?",
    question_hi: "CSS Grid में 'fr' यूनिट क्या दर्शाती है?",
    options_en: ["Fraction of available space", "Fixed size in pixels", "Flexible rows", "Font-relative size"],
    options_hi: ["उपलब्ध स्थान का हिस्सा", "पिक्सेल में निश्चित आकार", "लचीली पंक्तियाँ", "फ़ॉन्ट-सम्बंधित आकार"],
    answer_en: "Fraction of available space",
    answer_hi: "उपलब्ध स्थान का हिस्सा",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which property controls the alignment of grid items along the column axis?",
    question_hi: "कौन-सी प्रॉपर्टी ग्रिड आइटम्स को कॉलम अक्ष के साथ संरेखित करती है?",
    options_en: ["align-items", "justify-items", "align-content", "justify-content"],
    options_hi: ["अलाइन-आइटम्स", "जस्टिफाई-आइटम्स", "अलाइन-कंटेंट", "जस्टिफाई-कंटेंट"],
    answer_en: "align-items",
    answer_hi: "अलाइन-आइटम्स",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "What does 'grid-template-columns: repeat(3, 1fr)' do?",
    question_hi: "'grid-template-columns: repeat(3, 1fr)' क्या करता है?",
    options_en: [
      "Creates 3 equal columns",
      "Creates 1 column with 3fr width",
      "Creates 3 rows",
      "Repeats 1 column 3 times vertically"
    ],
    options_hi: [
      "3 बराबर कॉलम बनाता है",
      "1 कॉलम 3fr चौड़ा बनाता है",
      "3 पंक्तियाँ बनाता है",
      "1 कॉलम को 3 बार लंबवत दोहराता है"
    ],
    answer_en: "Creates 3 equal columns",
    answer_hi: "3 बराबर कॉलम बनाता है",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which property defines the end grid line for a grid item?",
    question_hi: "कौन-सी प्रॉपर्टी ग्रिड आइटम के लिए अंत ग्रिड लाइन को परिभाषित करती है?",
    options_en: ["grid-column-end", "grid-row-end", "grid-area", "grid-column-start"],
    options_hi: ["ग्रिड-कॉलम-एंड", "ग्रिड-रो-एंड", "ग्रिड-एरिया", "ग्रिड-कॉलम-स्टार्ट"],
    answer_en: "grid-column-end",
    answer_hi: "ग्रिड-कॉलम-एंड",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which CSS property specifies the size of implicit grid rows?",
    question_hi: "कौन-सी CSS प्रॉपर्टी अप्रत्यक्ष ग्रिड पंक्तियों का आकार निर्दिष्ट करती है?",
    options_en: ["grid-auto-rows", "grid-template-rows", "grid-auto-columns", "grid-row-gap"],
    options_hi: ["ग्रिड-ऑटो-रोस", "ग्रिड-टेम्प्लेट-रोस", "ग्रिड-ऑटो-कॉलम्स", "ग्रिड-रो-गैप"],
    answer_en: "grid-auto-rows",
    answer_hi: "ग्रिड-ऑटो-रोस",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "What does 'justify-content' control in a grid container?",
    question_hi: "ग्रिड कंटेनर में 'justify-content' क्या नियंत्रित करता है?",
    options_en: [
      "Alignment of entire grid along row axis",
      "Alignment of items within grid cells",
      "Space between rows",
      "Size of grid cells"
    ],
    options_hi: [
      "पंक्ति अक्ष के साथ पूरे ग्रिड का संरेखण",
      "ग्रिड सेल्स के भीतर आइटम का संरेखण",
      "पंक्तियों के बीच की दूरी",
      "ग्रिड सेल्स का आकार"
    ],
    answer_en: "Alignment of entire grid along row axis",
    answer_hi: "पंक्ति अक्ष के साथ पूरे ग्रिड का संरेखण",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which property controls how content is aligned inside grid cells vertically?",
    question_hi: "ग्रिड सेल्स के अंदर सामग्री को लंबवत रूप से कैसे संरेखित किया जाता है यह कौन-सी प्रॉपर्टी नियंत्रित करती है?",
    options_en: ["align-content", "justify-content", "align-items", "justify-items"],
    options_hi: ["अलाइन-कंटेंट", "जस्टिफाई-कंटेंट", "अलाइन-आइटम्स", "जस्टिफाई-आइटम्स"],
    answer_en: "align-content",
    answer_hi: "अलाइन-कंटेंट",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "What value of 'grid-auto-flow' places items densely to fill gaps?",
    question_hi: "'grid-auto-flow' का कौन-सा मान आइटम्स को अंतराल भरने के लिए घनीभूत (dense) करता है?",
    options_en: ["dense", "row", "column", "auto"],
    options_hi: ["डेंस", "रो", "कॉलम", "ऑटो"],
    answer_en: "dense",
    answer_hi: "डेंस",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which property specifies the grid item's area in shorthand?",
    question_hi: "कौन-सी प्रॉपर्टी शॉर्टहैंड में ग्रिड आइटम का क्षेत्र निर्दिष्ट करती है?",
    options_en: ["grid-area", "grid-column", "grid-row", "grid-template-areas"],
    options_hi: ["ग्रिड-एरिया", "ग्रिड-कॉलम", "ग्रिड-रो", "ग्रिड-टेम्प्लेट-एरियास"],
    answer_en: "grid-area",
    answer_hi: "ग्रिड-एरिया",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "What is the default display value for a grid container?",
    question_hi: "ग्रिड कंटेनर के लिए डिफ़ॉल्ट डिस्प्ले मान क्या है?",
    options_en: ["grid", "block", "inline-grid", "inline-block"],
    options_hi: ["ग्रिड", "ब्लॉक", "इनलाइन-ग्रिड", "इनलाइन-ब्लॉक"],
    answer_en: "grid",
    answer_hi: "ग्रिड",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which property allows overlapping of grid items?",
    question_hi: "कौन-सी प्रॉपर्टी ग्रिड आइटम्स के ओवरलैपिंग की अनुमति देती है?",
    options_en: ["grid-area", "grid-column", "grid-auto-flow", "grid-gap"],
    options_hi: ["ग्रिड-एरिया", "ग्रिड-कॉलम", "ग्रिड-ऑटो-फ्लो", "ग्रिड-गैप"],
    answer_en: "grid-area",
    answer_hi: "ग्रिड-एरिया",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "What does the 'minmax()' function do in CSS Grid?",
    question_hi: "CSS Grid में 'minmax()' फ़ंक्शन क्या करता है?",
    options_en: [
      "Sets a size range between min and max values",
      "Sets minimum size only",
      "Sets maximum size only",
      "Sets fixed size"
    ],
    options_hi: [
      "न्यूनतम और अधिकतम मानों के बीच आकार सेट करता है",
      "केवल न्यूनतम आकार सेट करता है",
      "केवल अधिकतम आकार सेट करता है",
      "स्थिर आकार सेट करता है"
    ],
    answer_en: "Sets a size range between min and max values",
    answer_hi: "न्यूनतम और अधिकतम मानों के बीच आकार सेट करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which unit is commonly used to define flexible lengths in CSS Grid?",
    question_hi: "CSS Grid में लचीली लंबाई को परिभाषित करने के लिए कौन-सी यूनिट आमतौर पर उपयोग की जाती है?",
    options_en: ["fr", "px", "%", "em"],
    options_hi: ["fr", "px", "%", "em"],
    answer_en: "fr",
    answer_hi: "fr",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which property defines the placement of grid rows?",
    question_hi: "कौन-सी प्रॉपर्टी ग्रिड पंक्तियों के स्थान को परिभाषित करती है?",
    options_en: ["grid-row", "grid-column", "grid-area", "grid-template-rows"],
    options_hi: ["ग्रिड-रो", "ग्रिड-कॉलम", "ग्रिड-एरिया", "ग्रिड-टेम्प्लेट-रोस"],
    answer_en: "grid-row",
    answer_hi: "ग्रिड-रो",
    attempted: false,
    selected: ""
  },
   {
    num: 26,
    question_en: "Which property controls how grid items stretch to fill grid cells?",
    question_hi: "कौन-सी प्रॉपर्टी ग्रिड आइटम्स को ग्रिड सेल्स भरने के लिए फैलाती है?",
    options_en: ["align-self", "justify-self", "align-content", "justify-content"],
    options_hi: ["अलाइन-सेल्फ", "जस्टिफाई-सेल्फ", "अलाइन-कंटेंट", "जस्टिफाई-कंटेंट"],
    answer_en: "align-self",
    answer_hi: "अलाइन-सेल्फ",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "What does 'grid-template' property combine?",
    question_hi: "'grid-template' प्रॉपर्टी क्या-क्या संयोजित करती है?",
    options_en: [
      "grid-template-rows and grid-template-columns",
      "grid-auto-flow and grid-gap",
      "grid-area and grid-template-areas",
      "grid-column and grid-row"
    ],
    options_hi: [
      "ग्रिड-टेम्प्लेट-रोस और ग्रिड-टेम्प्लेट-कॉलम्स",
      "ग्रिड-ऑटो-फ्लो और ग्रिड-गैप",
      "ग्रिड-एरिया और ग्रिड-टेम्प्लेट-एरियास",
      "ग्रिड-कॉलम और ग्रिड-रो"
    ],
    answer_en: "grid-template-rows and grid-template-columns",
    answer_hi: "ग्रिड-टेम्प्लेट-रोस और ग्रिड-टेम्प्लेट-कॉलम्स",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which property controls the order of grid items?",
    question_hi: "कौन-सी प्रॉपर्टी ग्रिड आइटम्स के क्रम को नियंत्रित करती है?",
    options_en: ["order", "z-index", "grid-area", "grid-row"],
    options_hi: ["ऑर्डर", "जेड-इंडेक्स", "ग्रिड-एरिया", "ग्रिड-रो"],
    answer_en: "order",
    answer_hi: "ऑर्डर",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "What is the effect of 'grid-auto-columns' property?",
    question_hi: "'grid-auto-columns' प्रॉपर्टी का क्या प्रभाव होता है?",
    options_en: [
      "Sets size for implicit columns",
      "Sets size for explicit columns",
      "Sets gap between columns",
      "Sets size for rows"
    ],
    options_hi: [
      "अप्रत्यक्ष कॉलम्स का आकार सेट करता है",
      "स्पष्ट कॉलम्स का आकार सेट करता है",
      "कॉलम्स के बीच गैप सेट करता है",
      "पंक्तियों का आकार सेट करता है"
    ],
    answer_en: "Sets size for implicit columns",
    answer_hi: "अप्रत्यक्ष कॉलम्स का आकार सेट करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which property can be used to name multiple grid areas in one declaration?",
    question_hi: "एक डिक्लेरेशन में कई ग्रिड क्षेत्रों को नामित करने के लिए कौन-सी प्रॉपर्टी का उपयोग किया जा सकता है?",
    options_en: ["grid-template-areas", "grid-area", "grid-template-columns", "grid-template-rows"],
    options_hi: ["ग्रिड-टेम्प्लेट-एरियास", "ग्रिड-एरिया", "ग्रिड-टेम्प्लेट-कॉलम्स", "ग्रिड-टेम्प्लेट-रोस"],
    answer_en: "grid-template-areas",
    answer_hi: "ग्रिड-टेम्प्लेट-एरियास",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which CSS unit represents the fraction of the available space in grid?",
    question_hi: "ग्रिड में उपलब्ध स्थान के हिस्से को कौन-सी CSS यूनिट दर्शाती है?",
    options_en: ["fr", "px", "em", "%"],
    options_hi: ["fr", "px", "em", "%"],
    answer_en: "fr",
    answer_hi: "fr",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "How do you span a grid item across 2 rows?",
    question_hi: "आप एक ग्रिड आइटम को 2 पंक्तियों तक कैसे फैलाते हैं?",
    options_en: ["grid-row: span 2;", "grid-column: span 2;", "grid-area: span 2;", "grid-row-start: 2;"],
    options_hi: ["ग्रिड-रो: स्पैन 2;", "ग्रिड-कॉलम: स्पैन 2;", "ग्रिड-एरिया: स्पैन 2;", "ग्रिड-रो-स्टार्ट: 2;"],
    answer_en: "grid-row: span 2;",
    answer_hi: "ग्रिड-रो: स्पैन 2;",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which property controls the alignment of the entire grid container on the column axis?",
    question_hi: "कौन-सी प्रॉपर्टी कॉलम अक्ष पर पूरे ग्रिड कंटेनर का संरेखण नियंत्रित करती है?",
    options_en: ["justify-content", "align-content", "justify-items", "align-items"],
    options_hi: ["जस्टिफाई-कंटेंट", "अलाइन-कंटेंट", "जस्टिफाई-आइटम्स", "अलाइन-आइटम्स"],
    answer_en: "justify-content",
    answer_hi: "जस्टिफाई-कंटेंट",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "What does 'grid-template-rows: auto 100px 1fr' specify?",
    question_hi: "'grid-template-rows: auto 100px 1fr' क्या निर्दिष्ट करता है?",
    options_en: [
      "Three rows with heights auto, 100px and fraction unit",
      "Three columns with specified widths",
      "Grid gaps for rows",
      "Grid areas layout"
    ],
    options_hi: [
      "तीन पंक्तियाँ जिनकी ऊँचाई auto, 100px और फ्रैक्शन यूनिट है",
      "तीन कॉलम जिनकी चौड़ाई निर्दिष्ट है",
      "पंक्तियों के लिए ग्रिड गैप्स",
      "ग्रिड क्षेत्रों का लेआउट"
    ],
    answer_en: "Three rows with heights auto, 100px and fraction unit",
    answer_hi: "तीन पंक्तियाँ जिनकी ऊँचाई auto, 100px और फ्रैक्शन यूनिट है",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "How do you create a grid container in CSS?",
    question_hi: "CSS में ग्रिड कंटेनर कैसे बनाते हैं?",
    options_en: ["display: grid;", "display: flex;", "display: block;", "display: inline-grid;"],
    options_hi: ["display: grid;", "display: flex;", "display: block;", "display: inline-grid;"],
    answer_en: "display: grid;",
    answer_hi: "display: grid;",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which property sets the minimum size of a grid track?",
    question_hi: "कौन-सी प्रॉपर्टी ग्रिड ट्रैक का न्यूनतम आकार सेट करती है?",
    options_en: ["minmax()", "min-width", "min-height", "grid-auto-columns"],
    options_hi: ["minmax()", "min-width", "min-height", "grid-auto-columns"],
    answer_en: "minmax()",
    answer_hi: "minmax()",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which property specifies the size of implicit grid columns?",
    question_hi: "कौन-सी प्रॉपर्टी अप्रत्यक्ष ग्रिड कॉलम्स का आकार निर्दिष्ट करती है?",
    options_en: ["grid-auto-columns", "grid-auto-rows", "grid-template-columns", "grid-template-rows"],
    options_hi: ["ग्रिड-ऑटो-कॉलम्स", "ग्रिड-ऑटो-रोस", "ग्रिड-टेम्प्लेट-कॉलम्स", "ग्रिड-टेम्प्लेट-रोस"],
    answer_en: "grid-auto-columns",
    answer_hi: "ग्रिड-ऑटो-कॉलम्स",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "What value of 'grid-auto-flow' causes grid items to fill by column?",
    question_hi: "'grid-auto-flow' का कौन-सा मान आइटम्स को कॉलम अनुसार भरने के लिए होता है?",
    options_en: ["column", "row", "dense", "auto"],
    options_hi: ["कॉलम", "रो", "डेंस", "ऑटो"],
    answer_en: "column",
    answer_hi: "कॉलम",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which property allows a grid item to be placed in multiple areas?",
    question_hi: "कौन-सी प्रॉपर्टी एक ग्रिड आइटम को कई क्षेत्रों में रखने की अनुमति देती है?",
    options_en: ["grid-area", "grid-column-start", "grid-row-start", "grid-column-end"],
    options_hi: ["ग्रिड-एरिया", "ग्रिड-कॉलम-स्टार्ट", "ग्रिड-रो-स्टार्ट", "ग्रिड-कॉलम-एंड"],
    answer_en: "grid-area",
    answer_hi: "ग्रिड-एरिया",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "How do you define a 4 by 3 grid using grid-template-columns and grid-template-rows?",
    question_hi: "ग्रिड-टेम्प्लेट-कॉलम्स और ग्रिड-टेम्प्लेट-रोस का उपयोग करके 4 x 3 ग्रिड कैसे परिभाषित करते हैं?",
    options_en: [
      "grid-template-columns: repeat(4, 1fr); grid-template-rows: repeat(3, 1fr);",
      "grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(4, 1fr);",
      "grid-columns: 4; grid-rows: 3;",
      "grid-columns: 3; grid-rows: 4;"
    ],
    options_hi: [
      "grid-template-columns: repeat(4, 1fr); grid-template-rows: repeat(3, 1fr);",
      "grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(4, 1fr);",
      "grid-columns: 4; grid-rows: 3;",
      "grid-columns: 3; grid-rows: 4;"
    ],
    answer_en: "grid-template-columns: repeat(4, 1fr); grid-template-rows: repeat(3, 1fr);",
    answer_hi: "grid-template-columns: repeat(4, 1fr); grid-template-rows: repeat(3, 1fr);",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "What does 'justify-self: stretch' do for a grid item?",
    question_hi: "'justify-self: stretch' ग्रिड आइटम के लिए क्या करता है?",
    options_en: [
      "Makes the item stretch to fill its grid cell horizontally",
      "Aligns item to the start of the cell",
      "Centers item in the cell",
      "Makes item smaller"
    ],
    options_hi: [
      "आइटम को उसके ग्रिड सेल के क्षैतिज रूप से भरने के लिए फैलाता है",
      "आइटम को सेल की शुरुआत पर संरेखित करता है",
      "आइटम को सेल के केंद्र में रखता है",
      "आइटम को छोटा करता है"
    ],
    answer_en: "Makes the item stretch to fill its grid cell horizontally",
    answer_hi: "आइटम को उसके ग्रिड सेल के क्षैतिज रूप से भरने के लिए फैलाता है",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which property controls the vertical alignment of grid items inside their cells?",
    question_hi: "ग्रिड आइटम्स के सेल्स के अंदर लंबवत संरेखण कौन-सी प्रॉपर्टी नियंत्रित करती है?",
    options_en: ["align-self", "justify-self", "align-items", "justify-items"],
    options_hi: ["अलाइन-सेल्फ", "जस्टिफाई-सेल्फ", "अलाइन-आइटम्स", "जस्टिफाई-आइटम्स"],
    answer_en: "align-self",
    answer_hi: "अलाइन-सेल्फ",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "What value of 'grid-template-columns' creates three columns of equal width?",
    question_hi: "'grid-template-columns' का कौन-सा मान तीन बराबर चौड़ाई वाले कॉलम बनाता है?",
    options_en: ["repeat(3, 1fr)", "auto auto auto", "100px 100px 100px", "1fr 2fr 1fr"],
    options_hi: ["repeat(3, 1fr)", "auto auto auto", "100px 100px 100px", "1fr 2fr 1fr"],
    answer_en: "repeat(3, 1fr)",
    answer_hi: "repeat(3, 1fr)",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which property specifies how the grid auto-placement algorithm works?",
    question_hi: "कौन-सी प्रॉपर्टी ग्रिड ऑटो-प्लेसमेंट एल्गोरिदम को नियंत्रित करती है?",
    options_en: ["grid-auto-flow", "grid-auto-columns", "grid-auto-rows", "grid-gap"],
    options_hi: ["ग्रिड-ऑटो-फ्लो", "ग्रिड-ऑटो-कॉलम्स", "ग्रिड-ऑटो-रोस", "ग्रिड-गैप"],
    answer_en: "grid-auto-flow",
    answer_hi: "ग्रिड-ऑटो-फ्लो",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "How do you define named grid areas for layout?",
    question_hi: "लेआउट के लिए नामित ग्रिड क्षेत्र कैसे परिभाषित करते हैं?",
    options_en: ["Using grid-template-areas", "Using grid-area", "Using grid-gap", "Using grid-auto-flow"],
    options_hi: ["ग्रिड-टेम्प्लेट-एरियास का उपयोग करके", "ग्रिड-एरिया का उपयोग करके", "ग्रिड-गैप का उपयोग करके", "ग्रिड-ऑटो-फ्लो का उपयोग करके"],
    answer_en: "Using grid-template-areas",
    answer_hi: "ग्रिड-टेम्प्लेट-एरियास का उपयोग करके",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which property controls the horizontal alignment of grid items inside their cells?",
    question_hi: "ग्रिड आइटम्स के सेल्स के अंदर क्षैतिज संरेखण कौन-सी प्रॉपर्टी नियंत्रित करती है?",
    options_en: ["justify-self", "align-self", "justify-items", "align-items"],
    options_hi: ["जस्टिफाई-सेल्फ", "अलाइन-सेल्फ", "जस्टिफाई-आइटम्स", "अलाइन-आइटम्स"],
    answer_en: "justify-self",
    answer_hi: "जस्टिफाई-सेल्फ",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "What is the purpose of 'grid-template-areas'?",
    question_hi: "'grid-template-areas' का उद्देश्य क्या है?",
    options_en: [
      "To define named areas for grid layout",
      "To set column widths",
      "To set row heights",
      "To define gaps between grid items"
    ],
    options_hi: [
      "ग्रिड लेआउट के लिए नामित क्षेत्र परिभाषित करना",
      "कॉलम चौड़ाई सेट करना",
      "पंक्ति ऊँचाई सेट करना",
      "ग्रिड आइटम्स के बीच गैप परिभाषित करना"
    ],
    answer_en: "To define named areas for grid layout",
    answer_hi: "ग्रिड लेआउट के लिए नामित क्षेत्र परिभाषित करना",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which property sets the size of a grid column?",
    question_hi: "कौन-सी प्रॉपर्टी ग्रिड कॉलम का आकार सेट करती है?",
    options_en: ["grid-template-columns", "grid-template-rows", "grid-auto-columns", "grid-auto-rows"],
    options_hi: ["ग्रिड-टेम्प्लेट-कॉलम्स", "ग्रिड-टेम्प्लेट-रोस", "ग्रिड-ऑटो-कॉलम्स", "ग्रिड-ऑटो-रोस"],
    answer_en: "grid-template-columns",
    answer_hi: "ग्रिड-टेम्प्लेट-कॉलम्स",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which property is used to control gaps between grid columns?",
    question_hi: "ग्रिड कॉलम्स के बीच गैप को नियंत्रित करने के लिए कौन-सी प्रॉपर्टी उपयोग की जाती है?",
    options_en: ["grid-column-gap", "grid-row-gap", "grid-gap", "gap"],
    options_hi: ["ग्रिड-कॉलम-गैप", "ग्रिड-रो-गैप", "ग्रिड-गैप", "गैप"],
    answer_en: "grid-column-gap",
    answer_hi: "ग्रिड-कॉलम-गैप",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "What does 'grid-row-start: 2;' do?",
    question_hi: "'grid-row-start: 2;' क्या करता है?",
    options_en: [
      "Positions the grid item to start on the second row",
      "Positions the grid item to end on the second row",
      "Positions the grid item to span two rows",
      "Positions the grid item on the first row"
    ],
    options_hi: [
      "ग्रिड आइटम को दूसरी पंक्ति पर शुरू करता है",
      "ग्रिड आइटम को दूसरी पंक्ति पर समाप्त करता है",
      "ग्रिड आइटम को दो पंक्तियों तक फैलाता है",
      "ग्रिड आइटम को पहली पंक्ति पर रखता है"
    ],
    answer_en: "Positions the grid item to start on the second row",
    answer_hi: "ग्रिड आइटम को दूसरी पंक्ति पर शुरू करता है",
    attempted: false,
    selected: ""
  } 
      ],
      18:[
       {
    num: 1,
    question_en: "What are the four parts of the CSS Box Model?",
    question_hi: "CSS बॉक्स मॉडल के चार भाग कौन-कौन से हैं?",
    options_en: ["Content, Padding, Border, Margin", "Text, Border, Padding, Margin", "Content, Text, Border, Margin", "Padding, Margin, Border, Font"],
    options_hi: ["कंटेंट, पैडिंग, बॉर्डर, मार्जिन", "टेक्स्ट, बॉर्डर, पैडिंग, मार्जिन", "कंटेंट, टेक्स्ट, बॉर्डर, मार्जिन", "पैडिंग, मार्जिन, बॉर्डर, फ़ॉन्ट"],
    answer_en: "Content, Padding, Border, Margin",
    answer_hi: "कंटेंट, पैडिंग, बॉर्डर, मार्जिन",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which part of the Box Model is used to create space inside the element, between the content and the border?",
    question_hi: "बॉक्स मॉडल का कौन सा भाग एलिमेंट के अंदर कंटेंट और बॉर्डर के बीच जगह बनाता है?",
    options_en: ["Padding", "Margin", "Border", "Content"],
    options_hi: ["पैडिंग", "मार्जिन", "बॉर्डर", "कंटेंट"],
    answer_en: "Padding",
    answer_hi: "पैडिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which part of the Box Model creates space outside the border?",
    question_hi: "बॉक्स मॉडल का कौन सा भाग बॉर्डर के बाहर जगह बनाता है?",
    options_en: ["Margin", "Padding", "Content", "Border"],
    options_hi: ["मार्जिन", "पैडिंग", "कंटेंट", "बॉर्डर"],
    answer_en: "Margin",
    answer_hi: "मार्जिन",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which property sets the thickness of the border in the Box Model?",
    question_hi: "बॉक्स मॉडल में बॉर्डर की मोटाई किस प्रॉपर्टी से सेट होती है?",
    options_en: ["border-width", "border-style", "border-color", "border-radius"],
    options_hi: ["बॉर्डर-विथ", "बॉर्डर-स्टाइल", "बॉर्डर-कलर", "बॉर्डर-रेडियस"],
    answer_en: "border-width",
    answer_hi: "बॉर्डर-विथ",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "What is the default value of the 'box-sizing' property?",
    question_hi: "'box-sizing' प्रॉपर्टी का डिफ़ॉल्ट मान क्या है?",
    options_en: ["content-box", "border-box", "padding-box", "margin-box"],
    options_hi: ["कंटेंट-बॉक्स", "बॉर्डर-बॉक्स", "पैडिंग-बॉक्स", "मार्जिन-बॉक्स"],
    answer_en: "content-box",
    answer_hi: "कंटेंट-बॉक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which CSS property controls the space between the border and the content?",
    question_hi: "कौन सी CSS प्रॉपर्टी बॉर्डर और कंटेंट के बीच जगह को नियंत्रित करती है?",
    options_en: ["padding", "margin", "border-spacing", "spacing"],
    options_hi: ["पैडिंग", "मार्जिन", "बॉर्डर-स्पेसिंग", "स्पेसिंग"],
    answer_en: "padding",
    answer_hi: "पैडिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "How can you make the width and height include padding and border using box-sizing?",
    question_hi: "आप बॉक्स-साइजिंग का उपयोग करके कैसे चौड़ाई और ऊँचाई में पैडिंग और बॉर्डर शामिल कर सकते हैं?",
    options_en: ["Set box-sizing to border-box", "Set box-sizing to content-box", "Set width and height manually", "Use margin property"],
    options_hi: ["box-sizing को border-box पर सेट करें", "box-sizing को content-box पर सेट करें", "चौड़ाई और ऊँचाई मैन्युअली सेट करें", "मार्जिन प्रॉपर्टी का उपयोग करें"],
    answer_en: "Set box-sizing to border-box",
    answer_hi: "box-sizing को border-box पर सेट करें",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which property is used to add space outside the element’s border?",
    question_hi: "एलिमेंट के बॉर्डर के बाहर जगह जोड़ने के लिए कौन सी प्रॉपर्टी का उपयोग होता है?",
    options_en: ["margin", "padding", "border", "outline"],
    options_hi: ["मार्जिन", "पैडिंग", "बॉर्डर", "आउटलाइन"],
    answer_en: "margin",
    answer_hi: "मार्जिन",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "If you want to add a red border of 2px thickness around an element, which CSS property would you use?",
    question_hi: "अगर आप किसी एलिमेंट के चारों ओर 2px मोटी लाल बॉर्डर जोड़ना चाहते हैं तो कौन सी CSS प्रॉपर्टी उपयोग करेंगे?",
    options_en: ["border: 2px solid red", "border-width: 2px red solid", "border-color: 2px red solid", "border-style: 2px red solid"],
    options_hi: ["border: 2px solid red", "border-width: 2px red solid", "border-color: 2px red solid", "border-style: 2px red solid"],
    answer_en: "border: 2px solid red",
    answer_hi: "border: 2px solid red",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which property defines the inner content area size of the box?",
    question_hi: "कौन सी प्रॉपर्टी बॉक्स के अंदर कंटेंट एरिया का आकार निर्धारित करती है?",
    options_en: ["width and height", "padding", "margin", "border"],
    options_hi: ["चौड़ाई और ऊँचाई", "पैडिंग", "मार्जिन", "बॉर्डर"],
    answer_en: "width and height",
    answer_hi: "चौड़ाई और ऊँचाई",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which of the following is NOT part of the CSS Box Model?",
    question_hi: "निम्नलिखित में से कौन CSS बॉक्स मॉडल का हिस्सा नहीं है?",
    options_en: ["Text", "Padding", "Margin", "Border"],
    options_hi: ["टेक्स्ट", "पैडिंग", "मार्जिन", "बॉर्डर"],
    answer_en: "Text",
    answer_hi: "टेक्स्ट",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "What happens when you set 'box-sizing: border-box'?",
    question_hi: "'box-sizing: border-box' सेट करने पर क्या होता है?",
    options_en: ["Padding and border are included in width and height", "Padding and border are excluded from width and height", "Only border is included", "Only padding is included"],
    options_hi: ["पैडिंग और बॉर्डर चौड़ाई और ऊँचाई में शामिल होते हैं", "पैडिंग और बॉर्डर चौड़ाई और ऊँचाई से बाहर होते हैं", "केवल बॉर्डर शामिल होता है", "केवल पैडिंग शामिल होती है"],
    answer_en: "Padding and border are included in width and height",
    answer_hi: "पैडिंग और बॉर्डर चौड़ाई और ऊँचाई में शामिल होते हैं",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "How do you create space between adjacent elements using the Box Model?",
    question_hi: "बॉक्स मॉडल का उपयोग करके आसन्न एलिमेंट्स के बीच जगह कैसे बनाते हैं?",
    options_en: ["Using margin", "Using padding", "Using border", "Using content"],
    options_hi: ["मार्जिन का उपयोग करके", "पैडिंग का उपयोग करके", "बॉर्डर का उपयोग करके", "कंटेंट का उपयोग करके"],
    answer_en: "Using margin",
    answer_hi: "मार्जिन का उपयोग करके",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which property can change the style of the border (solid, dotted, dashed)?",
    question_hi: "कौन सी प्रॉपर्टी बॉर्डर की स्टाइल (सॉलिड, डॉटेड, डैश्ड) बदल सकती है?",
    options_en: ["border-style", "border-width", "border-color", "border-radius"],
    options_hi: ["बॉर्डर-स्टाइल", "बॉर्डर-विथ", "बॉर्डर-कलर", "बॉर्डर-रेडियस"],
    answer_en: "border-style",
    answer_hi: "बॉर्डर-स्टाइल",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "What is the effect of setting margin to 'auto' on a block element?",
    question_hi: "ब्लॉक एलिमेंट पर मार्जिन को 'auto' सेट करने का क्या प्रभाव होता है?",
    options_en: ["Centers the element horizontally", "Aligns element to left", "Aligns element to right", "Removes margin"],
    options_hi: ["एलिमेंट को क्षैतिज रूप से केंद्रित करता है", "एलिमेंट को बाएँ संरेखित करता है", "एलिमेंट को दाएँ संरेखित करता है", "मार्जिन हटाता है"],
    answer_en: "Centers the element horizontally",
    answer_hi: "एलिमेंट को क्षैतिज रूप से केंद्रित करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which property controls the color of the border?",
    question_hi: "कौन सी प्रॉपर्टी बॉर्डर का रंग नियंत्रित करती है?",
    options_en: ["border-color", "border-style", "border-width", "background-color"],
    options_hi: ["बॉर्डर-कलर", "बॉर्डर-स्टाइल", "बॉर्डर-विथ", "बैकग्राउंड-कलर"],
    answer_en: "border-color",
    answer_hi: "बॉर्डर-कलर",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "What is the unit of measurement for margin and padding?",
    question_hi: "मार्जिन और पैडिंग के लिए माप की इकाई क्या है?",
    options_en: ["px, %, em, rem", "only px", "only %", "only em"],
    options_hi: ["px, %, em, rem", "केवल px", "केवल %", "केवल em"],
    answer_en: "px, %, em, rem",
    answer_hi: "px, %, em, rem",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which CSS property can be used to add rounded corners to a box?",
    question_hi: "बॉक्स के कोनों को गोल बनाने के लिए कौन सी CSS प्रॉपर्टी इस्तेमाल होती है?",
    options_en: ["border-radius", "border-style", "border-width", "box-shadow"],
    options_hi: ["बॉर्डर-रेडियस", "बॉर्डर-स्टाइल", "बॉर्डर-विथ", "बॉक्स-शैडो"],
    answer_en: "border-radius",
    answer_hi: "बॉर्डर-रेडियस",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "What does the 'outline' property do?",
    question_hi: "'outline' प्रॉपर्टी क्या करती है?",
    options_en: ["Adds a line outside the border", "Adds space inside the box", "Changes the box size", "Changes content color"],
    options_hi: ["बॉर्डर के बाहर एक लाइन जोड़ती है", "बॉक्स के अंदर जगह जोड़ती है", "बॉक्स का आकार बदलती है", "कंटेंट का रंग बदलती है"],
    answer_en: "Adds a line outside the border",
    answer_hi: "बॉर्डर के बाहर एक लाइन जोड़ती है",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which property can control the shadow effect of a box?",
    question_hi: "कौन सी प्रॉपर्टी बॉक्स के छाया प्रभाव को नियंत्रित करती है?",
    options_en: ["box-shadow", "text-shadow", "border-shadow", "shadow"],
    options_hi: ["बॉक्स-शैडो", "टेक्स्ट-शैडो", "बॉर्डर-शैडो", "शैडो"],
    answer_en: "box-shadow",
    answer_hi: "बॉक्स-शैडो",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which property can control the minimum width and height of a box?",
    question_hi: "कौन सी प्रॉपर्टी बॉक्स की न्यूनतम चौड़ाई और ऊँचाई को नियंत्रित करती है?",
    options_en: ["min-width and min-height", "max-width and max-height", "width and height", "padding"],
    options_hi: ["मिन-विथ और मिन-हाइट", "मैक्स-विथ और मैक्स-हाइट", "विथ और हाइट", "पैडिंग"],
    answer_en: "min-width and min-height",
    answer_hi: "मिन-विथ और मिन-हाइट",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "What is the difference between margin and padding?",
    question_hi: "मार्जिन और पैडिंग में क्या अंतर है?",
    options_en: ["Margin is outside the border; Padding is inside the border", "Margin is inside the border; Padding is outside the border", "Both are inside the content", "Both are outside the border"],
    options_hi: ["मार्जिन बॉर्डर के बाहर होता है; पैडिंग बॉर्डर के अंदर होता है", "मार्जिन बॉर्डर के अंदर होता है; पैडिंग बॉर्डर के बाहर होता है", "दोनों कंटेंट के अंदर होते हैं", "दोनों बॉर्डर के बाहर होते हैं"],
    answer_en: "Margin is outside the border; Padding is inside the border",
    answer_hi: "मार्जिन बॉर्डर के बाहर होता है; पैडिंग बॉर्डर के अंदर होता है",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which part of the box model is transparent by default?",
    question_hi: "बॉक्स मॉडल का कौन सा भाग डिफ़ॉल्ट रूप से पारदर्शी होता है?",
    options_en: ["Margin", "Padding", "Border", "Content"],
    options_hi: ["मार्जिन", "पैडिंग", "बॉर्डर", "कंटेंट"],
    answer_en: "Margin",
    answer_hi: "मार्जिन",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which property can you use to collapse the margin between two elements?",
    question_hi: "दो एलिमेंट्स के बीच मार्जिन को कैसे एकीकृत किया जा सकता है?",
    options_en: ["margin-collapse (does not exist)", "Using margin-top and margin-bottom carefully", "Using padding", "Using border"],
    options_hi: ["margin-collapse (मौजूद नहीं है)", "margin-top और margin-bottom का सावधानीपूर्वक उपयोग", "पैडिंग का उपयोग", "बॉर्डर का उपयोग"],
    answer_en: "Using margin-top and margin-bottom carefully",
    answer_hi: "margin-top और margin-bottom का सावधानीपूर्वक उपयोग",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "What is the effect of 'overflow: hidden' in the Box Model?",
    question_hi: "बॉक्स मॉडल में 'overflow: hidden' का क्या प्रभाव होता है?",
    options_en: ["Hides the content that overflows the box", "Shows scrollbar", "Increases box size", "Adds margin"],
    options_hi: ["जो कंटेंट बॉक्स से बाहर जाता है उसे छिपा देता है", "स्क्रॉलबार दिखाता है", "बॉक्स का आकार बढ़ाता है", "मार्जिन जोड़ता है"],
    answer_en: "Hides the content that overflows the box",
    answer_hi: "जो कंटेंट बॉक्स से बाहर जाता है उसे छिपा देता है",
    attempted: false,
    selected: ""
  },
   {
    num: 26,
    question_en: "Which CSS property adds space between the border and the element’s outer edge?",
    question_hi: "कौन सी CSS प्रॉपर्टी बॉर्डर और एलिमेंट के बाहरी किनारे के बीच जगह जोड़ती है?",
    options_en: ["margin", "padding", "border-spacing", "outline"],
    options_hi: ["मार्जिन", "पैडिंग", "बॉर्डर-स्पेसिंग", "आउटलाइन"],
    answer_en: "margin",
    answer_hi: "मार्जिन",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "What is the effect of setting 'padding: 10px' on an element?",
    question_hi: "'padding: 10px' सेट करने से एलिमेंट पर क्या प्रभाव होता है?",
    options_en: ["Adds 10px space inside the element around content", "Adds 10px space outside the element", "Adds 10px border", "Removes margin"],
    options_hi: ["एलिमेंट के अंदर कंटेंट के चारों ओर 10px जगह जोड़ता है", "एलिमेंट के बाहर 10px जगह जोड़ता है", "10px बॉर्डर जोड़ता है", "मार्जिन हटाता है"],
    answer_en: "Adds 10px space inside the element around content",
    answer_hi: "एलिमेंट के अंदर कंटेंट के चारों ओर 10px जगह जोड़ता है",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which property controls the transparency of the background color in the box model?",
    question_hi: "बॉक्स मॉडल में बैकग्राउंड रंग की पारदर्शिता को कौन सी प्रॉपर्टी नियंत्रित करती है?",
    options_en: ["opacity", "visibility", "background-color", "z-index"],
    options_hi: ["opacity", "visibility", "background-color", "z-index"],
    answer_en: "opacity",
    answer_hi: "opacity",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "What is the default display behavior of a box element?",
    question_hi: "एक बॉक्स एलिमेंट का डिफ़ॉल्ट डिस्प्ले व्यवहार क्या होता है?",
    options_en: ["block", "inline", "inline-block", "flex"],
    options_hi: ["ब्लॉक", "इनलाइन", "इनलाइन-ब्लॉक", "फ्लेक्स"],
    answer_en: "block",
    answer_hi: "ब्लॉक",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which CSS property can you use to change the space between the content and the border?",
    question_hi: "किस CSS प्रॉपर्टी से कंटेंट और बॉर्डर के बीच की जगह बदली जा सकती है?",
    options_en: ["padding", "margin", "border-width", "border-style"],
    options_hi: ["पैडिंग", "मार्जिन", "बॉर्डर-विथ", "बॉर्डर-स्टाइल"],
    answer_en: "padding",
    answer_hi: "पैडिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "How do you make the margin of an element collapse with the margin of another element?",
    question_hi: "किस तरह आप एक एलिमेंट का मार्जिन दूसरे एलिमेंट के मार्जिन के साथ मिलाते हैं?",
    options_en: ["By placing elements vertically adjacent", "By setting margin to zero", "By using padding", "By adding border"],
    options_hi: ["एलिमेंट्स को ऊर्ध्वाधर रूप से एक-दूसरे के करीब रखने से", "मार्जिन को ज़ीरो सेट करके", "पैडिंग का उपयोग करके", "बॉर्डर जोड़कर"],
    answer_en: "By placing elements vertically adjacent",
    answer_hi: "एलिमेंट्स को ऊर्ध्वाधर रूप से एक-दूसरे के करीब रखने से",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which property can override the element’s margin collapsing?",
    question_hi: "कौन सी प्रॉपर्टी एलिमेंट के मार्जिन को एकीकृत होने से रोक सकती है?",
    options_en: ["border", "padding", "overflow", "display"],
    options_hi: ["बॉर्डर", "पैडिंग", "ओवरफ़्लो", "डिस्प्ले"],
    answer_en: "overflow",
    answer_hi: "ओवरफ़्लो",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "What is the purpose of the 'outline' property in CSS?",
    question_hi: "CSS में 'outline' प्रॉपर्टी का उद्देश्य क्या है?",
    options_en: ["Draws a line outside the border", "Creates padding", "Adds margin", "Sets background color"],
    options_hi: ["बॉर्डर के बाहर एक लाइन बनाती है", "पैडिंग बनाती है", "मार्जिन जोड़ती है", "बैकग्राउंड रंग सेट करती है"],
    answer_en: "Draws a line outside the border",
    answer_hi: "बॉर्डर के बाहर एक लाइन बनाती है",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which property can be used to set the border color of a box?",
    question_hi: "किस प्रॉपर्टी से बॉक्स का बॉर्डर रंग सेट किया जाता है?",
    options_en: ["border-color", "color", "background-color", "border-style"],
    options_hi: ["बॉर्डर-कलर", "कलर", "बैकग्राउंड-कलर", "बॉर्डर-स्टाइल"],
    answer_en: "border-color",
    answer_hi: "बॉर्डर-कलर",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which CSS property defines how the element’s width and height are calculated?",
    question_hi: "कौन सी CSS प्रॉपर्टी निर्धारित करती है कि एलिमेंट की चौड़ाई और ऊँचाई कैसे गणना की जाती है?",
    options_en: ["box-sizing", "display", "position", "float"],
    options_hi: ["box-sizing", "डिस्प्ले", "पोजीशन", "फ्लोट"],
    answer_en: "box-sizing",
    answer_hi: "box-sizing",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "If an element has 'box-sizing: content-box', what does the width property apply to?",
    question_hi: "अगर किसी एलिमेंट पर 'box-sizing: content-box' है, तो width प्रॉपर्टी किस पर लागू होती है?",
    options_en: ["Only content area", "Content + padding + border", "Only padding", "Only border"],
    options_hi: ["केवल कंटेंट क्षेत्र", "कंटेंट + पैडिंग + बॉर्डर", "केवल पैडिंग", "केवल बॉर्डर"],
    answer_en: "Only content area",
    answer_hi: "केवल कंटेंट क्षेत्र",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "What effect does adding padding have on the total size of an element when box-sizing is content-box?",
    question_hi: "जब box-sizing content-box होता है, तो पैडिंग जोड़ने से एलिमेंट के कुल आकार पर क्या प्रभाव पड़ता है?",
    options_en: ["Increases total size", "Decreases total size", "No effect", "Sets size to zero"],
    options_hi: ["कुल आकार बढ़ता है", "कुल आकार घटता है", "कोई प्रभाव नहीं", "आकार शून्य हो जाता है"],
    answer_en: "Increases total size",
    answer_hi: "कुल आकार बढ़ता है",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which property adds space inside an element but outside its content area?",
    question_hi: "कौन सी प्रॉपर्टी एलिमेंट के अंदर लेकिन कंटेंट क्षेत्र के बाहर जगह जोड़ती है?",
    options_en: ["padding", "margin", "border", "outline"],
    options_hi: ["पैडिंग", "मार्जिन", "बॉर्डर", "आउटलाइन"],
    answer_en: "padding",
    answer_hi: "पैडिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which part of the box model is transparent by default and does not have any color?",
    question_hi: "बॉक्स मॉडल का कौन सा भाग डिफ़ॉल्ट रूप से पारदर्शी होता है और उसका कोई रंग नहीं होता?",
    options_en: ["Margin", "Border", "Padding", "Content"],
    options_hi: ["मार्जिन", "बॉर्डर", "पैडिंग", "कंटेंट"],
    answer_en: "Margin",
    answer_hi: "मार्जिन",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "What is the CSS shorthand property for setting all four margins at once?",
    question_hi: "चारों मार्जिन को एक साथ सेट करने के लिए CSS शॉर्टहैंड प्रॉपर्टी कौन सी है?",
    options_en: ["margin", "padding", "border", "outline"],
    options_hi: ["मार्जिन", "पैडिंग", "बॉर्डर", "आउटलाइन"],
    answer_en: "margin",
    answer_hi: "मार्जिन",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which property controls the space between table cells?",
    question_hi: "टेबल सेल्स के बीच जगह को कौन सी प्रॉपर्टी नियंत्रित करती है?",
    options_en: ["border-spacing", "padding", "margin", "border-collapse"],
    options_hi: ["बॉर्डर-स्पेसिंग", "पैडिंग", "मार्जिन", "बॉर्डर-कोलैप्स"],
    answer_en: "border-spacing",
    answer_hi: "बॉर्डर-स्पेसिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which property can be used to prevent margin collapse between two adjacent elements?",
    question_hi: "दो आसन्न एलिमेंट्स के बीच मार्जिन को कोलैप्स होने से रोकने के लिए कौन सी प्रॉपर्टी का उपयोग किया जा सकता है?",
    options_en: ["overflow: hidden", "margin: 0", "padding: 0", "border: none"],
    options_hi: ["overflow: hidden", "margin: 0", "padding: 0", "border: none"],
    answer_en: "overflow: hidden",
    answer_hi: "overflow: hidden",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "What does the 'content-box' value mean for box-sizing?",
    question_hi: "'content-box' का box-sizing के लिए क्या मतलब होता है?",
    options_en: ["Width and height include only content", "Width and height include content, padding, border", "Width includes padding only", "Height includes border only"],
    options_hi: ["चौड़ाई और ऊँचाई केवल कंटेंट शामिल करते हैं", "चौड़ाई और ऊँचाई कंटेंट, पैडिंग, बॉर्डर शामिल करते हैं", "चौड़ाई केवल पैडिंग शामिल करती है", "ऊँचाई केवल बॉर्डर शामिल करती है"],
    answer_en: "Width and height include only content",
    answer_hi: "चौड़ाई और ऊँचाई केवल कंटेंट शामिल करते हैं",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "How does the 'border-box' value affect the size of an element?",
    question_hi: "'border-box' वैल्यू एलिमेंट के आकार को कैसे प्रभावित करती है?",
    options_en: ["Width and height include padding and border", "Width and height exclude padding and border", "Width includes padding only", "Height excludes border"],
    options_hi: ["चौड़ाई और ऊँचाई में पैडिंग और बॉर्डर शामिल होते हैं", "चौड़ाई और ऊँचाई में पैडिंग और बॉर्डर शामिल नहीं होते", "चौड़ाई में केवल पैडिंग शामिल होता है", "ऊँचाई में बॉर्डर शामिल नहीं होता"],
    answer_en: "Width and height include padding and border",
    answer_hi: "चौड़ाई और ऊँचाई में पैडिंग और बॉर्डर शामिल होते हैं",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which property allows you to add shadows to the box?",
    question_hi: "कौन सी प्रॉपर्टी बॉक्स पर छाया जोड़ने की अनुमति देती है?",
    options_en: ["box-shadow", "text-shadow", "shadow", "border-shadow"],
    options_hi: ["बॉक्स-शैडो", "टेक्स्ट-शैडो", "शैडो", "बॉर्डर-शैडो"],
    answer_en: "box-shadow",
    answer_hi: "बॉक्स-शैडो",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "What is the effect of 'overflow: visible' on an element?",
    question_hi: "एलिमेंट पर 'overflow: visible' का क्या प्रभाव होता है?",
    options_en: ["Content overflowing the box is visible", "Content overflowing the box is hidden", "Scrollbar is added", "Box size increases"],
    options_hi: ["जो कंटेंट बॉक्स से बाहर जाता है वह दिखता है", "जो कंटेंट बॉक्स से बाहर जाता है वह छिपा रहता है", "स्क्रॉलबार जोड़ता है", "बॉक्स का आकार बढ़ता है"],
    answer_en: "Content overflowing the box is visible",
    answer_hi: "जो कंटेंट बॉक्स से बाहर जाता है वह दिखता है",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which CSS property sets the space between a box's border and its adjacent boxes?",
    question_hi: "कौन सी CSS प्रॉपर्टी बॉक्स के बॉर्डर और उसके आस-पास के बॉक्स के बीच की जगह सेट करती है?",
    options_en: ["margin", "padding", "border-spacing", "outline"],
    options_hi: ["मार्जिन", "पैडिंग", "बॉर्डर-स्पेसिंग", "आउटलाइन"],
    answer_en: "margin",
    answer_hi: "मार्जिन",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "What does the CSS property 'box-sizing: inherit' do?",
    question_hi: "'box-sizing: inherit' CSS प्रॉपर्टी क्या करती है?",
    options_en: ["Inherits the box-sizing value from the parent", "Resets box-sizing to default", "Sets box-sizing to content-box", "Sets box-sizing to border-box"],
    options_hi: ["पेरेंट से box-sizing मान को विरासत में लेता है", "box-sizing को डिफ़ॉल्ट पर रीसेट करता है", "box-sizing को content-box पर सेट करता है", "box-sizing को border-box पर सेट करता है"],
    answer_en: "Inherits the box-sizing value from the parent",
    answer_hi: "पेरेंट से box-sizing मान को विरासत में लेता है",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which of the following affects the space outside the border but inside the parent container?",
    question_hi: "निम्नलिखित में से कौन बॉर्डर के बाहर लेकिन पेरेंट कंटेनर के अंदर की जगह को प्रभावित करता है?",
    options_en: ["margin", "padding", "border", "content"],
    options_hi: ["मार्जिन", "पैडिंग", "बॉर्डर", "कंटेंट"],
    answer_en: "margin",
    answer_hi: "मार्जिन",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which property controls the thickness of the box border?",
    question_hi: "कौन सी प्रॉपर्टी बॉक्स के बॉर्डर की मोटाई नियंत्रित करती है?",
    options_en: ["border-width", "border-style", "border-color", "border-radius"],
    options_hi: ["बॉर्डर-विथ", "बॉर्डर-स्टाइल", "बॉर्डर-कलर", "बॉर्डर-रेडियस"],
    answer_en: "border-width",
    answer_hi: "बॉर्डर-विथ",
    attempted: false,
    selected: ""
  }
      ],
      19:[
         {
    num: 1,
    question_en: "Which of the following is a valid HEX color code?",
    question_hi: "निम्नलिखित में से कौन सा एक वैध HEX कलर कोड है?",
    options_en: ["#FF5733", "#12345G", "123456", "FF5733"],
    options_hi: ["#FF5733", "#12345G", "123456", "FF5733"],
    answer_en: "#FF5733",
    answer_hi: "#FF5733",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "What does RGB stand for in CSS colors?",
    question_hi: "CSS रंगों में RGB का पूरा नाम क्या है?",
    options_en: ["Red Green Blue", "Right Green Blue", "Red Gray Black", "Red Gray Blue"],
    options_hi: ["रेड ग्रीन ब्लू", "राइट ग्रीन ब्लू", "रेड ग्रे ब्लैक", "रेड ग्रे ब्लू"],
    answer_en: "Red Green Blue",
    answer_hi: "रेड ग्रीन ब्लू",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which property sets the background color of an element?",
    question_hi: "कौन सी प्रॉपर्टी किसी एलिमेंट का बैकग्राउंड रंग सेट करती है?",
    options_en: ["background-color", "color", "background-image", "border-color"],
    options_hi: ["बैकग्राउंड-कलर", "कलर", "बैकग्राउंड-इमेज", "बॉर्डर-कलर"],
    answer_en: "background-color",
    answer_hi: "बैकग्राउंड-कलर",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "How do you specify a semi-transparent color in CSS?",
    question_hi: "CSS में आप सेमी-ट्रांसपेरेंट रंग कैसे निर्दिष्ट करते हैं?",
    options_en: ["Using RGBA", "Using HEX", "Using HSL", "Using RGB"],
    options_hi: ["RGBA का उपयोग करके", "HEX का उपयोग करके", "HSL का उपयोग करके", "RGB का उपयोग करके"],
    answer_en: "Using RGBA",
    answer_hi: "RGBA का उपयोग करके",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "What is the range of values for each RGB component?",
    question_hi: "RGB के प्रत्येक घटक के लिए मानों की सीमा क्या है?",
    options_en: ["0 to 255", "0 to 100", "0 to 1", "0 to 360"],
    options_hi: ["0 से 255", "0 से 100", "0 से 1", "0 से 360"],
    answer_en: "0 to 255",
    answer_hi: "0 से 255",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which property is used to add a background image?",
    question_hi: "बैकग्राउंड इमेज जोड़ने के लिए कौन सी प्रॉपर्टी उपयोग की जाती है?",
    options_en: ["background-image", "background-color", "image", "background-src"],
    options_hi: ["बैकग्राउंड-इमेज", "बैकग्राउंड-कलर", "इमेज", "बैकग्राउंड-सोर्स"],
    answer_en: "background-image",
    answer_hi: "बैकग्राउंड-इमेज",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which CSS function defines colors using hue, saturation, and lightness?",
    question_hi: "कौन सा CSS फंक्शन ह्यू, सैचुरेशन और लाइटनेस का उपयोग करके रंग परिभाषित करता है?",
    options_en: ["hsl()", "rgb()", "hex()", "rgba()"],
    options_hi: ["hsl()", "rgb()", "hex()", "rgba()"],
    answer_en: "hsl()",
    answer_hi: "hsl()",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "How can you make a background image cover the entire element?",
    question_hi: "आप बैकग्राउंड इमेज को पूरे एलिमेंट पर कैसे कवर कर सकते हैं?",
    options_en: ["background-size: cover", "background-repeat: no-repeat", "background-position: center", "background-attachment: fixed"],
    options_hi: ["बैकग्राउंड-साइज: कवर", "बैकग्राउंड-रिपीट: नो-रिपीट", "बैकग्राउंड-पोजीशन: सेंटर", "बैकग्राउंड-अटैचमेंट: फिक्स्ड"],
    answer_en: "background-size: cover",
    answer_hi: "बैकग्राउंड-साइज: कवर",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "What does 'background-repeat: no-repeat' do?",
    question_hi: "'background-repeat: no-repeat' क्या करता है?",
    options_en: ["Prevents the image from repeating", "Repeats image horizontally", "Repeats image vertically", "Repeats image both ways"],
    options_hi: ["इमेज को दोहराने से रोकता है", "इमेज को क्षैतिज रूप से दोहराता है", "इमेज को लंबवत दोहराता है", "इमेज को दोनों दिशाओं में दोहराता है"],
    answer_en: "Prevents the image from repeating",
    answer_hi: "इमेज को दोहराने से रोकता है",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which property controls the position of a background image?",
    question_hi: "कौन सी प्रॉपर्टी बैकग्राउंड इमेज की स्थिति नियंत्रित करती है?",
    options_en: ["background-position", "background-size", "background-repeat", "background-attachment"],
    options_hi: ["बैकग्राउंड-पोजीशन", "बैकग्राउंड-साइज", "बैकग्राउंड-रिपीट", "बैकग्राउंड-अटैचमेंट"],
    answer_en: "background-position",
    answer_hi: "बैकग्राउंड-पोजीशन",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "What is the alpha value in RGBA used for?",
    question_hi: "RGBA में अल्फा वैल्यू किस लिए उपयोग होती है?",
    options_en: ["Transparency", "Brightness", "Hue", "Saturation"],
    options_hi: ["पारदर्शिता", "चमक", "ह्यू", "सैचुरेशन"],
    answer_en: "Transparency",
    answer_hi: "पारदर्शिता",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which CSS gradient type transitions colors from one side to another horizontally?",
    question_hi: "कौन सा CSS ग्रेडियंट प्रकार रंगों को एक तरफ से दूसरी तरफ क्षैतिज रूप से स्थानांतरित करता है?",
    options_en: ["linear-gradient(to right)", "radial-gradient()", "conic-gradient()", "linear-gradient(to bottom)"],
    options_hi: ["linear-gradient(to right)", "radial-gradient()", "conic-gradient()", "linear-gradient(to bottom)"],
    answer_en: "linear-gradient(to right)",
    answer_hi: "linear-gradient(to right)",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "How do you repeat a background image only vertically?",
    question_hi: "आप बैकग्राउंड इमेज को केवल लंबवत कैसे दोहराते हैं?",
    options_en: ["background-repeat: repeat-y", "background-repeat: repeat-x", "background-repeat: no-repeat", "background-repeat: repeat"],
    options_hi: ["बैकग्राउंड-रिपीट: रिपीट-वाई", "बैकग्राउंड-रिपीट: रिपीट-एक्स", "बैकग्राउंड-रिपीट: नो-रिपीट", "बैकग्राउंड-रिपीट: रिपीट"],
    answer_en: "background-repeat: repeat-y",
    answer_hi: "बैकग्राउंड-रिपीट: रिपीट-वाई",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which property controls the size of the background image?",
    question_hi: "कौन सी प्रॉपर्टी बैकग्राउंड इमेज के आकार को नियंत्रित करती है?",
    options_en: ["background-size", "background-position", "background-repeat", "background-attachment"],
    options_hi: ["बैकग्राउंड-साइज", "बैकग्राउंड-पोजीशन", "बैकग्राउंड-रिपीट", "बैकग्राउंड-अटैचमेंट"],
    answer_en: "background-size",
    answer_hi: "बैकग्राउंड-साइज",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which named color represents pure red?",
    question_hi: "कौन सा नामित रंग शुद्ध लाल को दर्शाता है?",
    options_en: ["red", "blue", "green", "yellow"],
    options_hi: ["रेड", "ब्लू", "ग्रीन", "येलो"],
    answer_en: "red",
    answer_hi: "रेड",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which format allows specifying colors with opacity?",
    question_hi: "कौन सा फॉर्मेट रंगों को अपारदर्शिता के साथ निर्दिष्ट करने की अनुमति देता है?",
    options_en: ["RGBA", "HEX", "HSL", "RGB"],
    options_hi: ["RGBA", "HEX", "HSL", "RGB"],
    answer_en: "RGBA",
    answer_hi: "RGBA",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "What is the correct syntax for applying a linear gradient as background?",
    question_hi: "बैकग्राउंड के रूप में लिनियर ग्रेडियंट लागू करने के लिए सही सिंटैक्स क्या है?",
    options_en: ["background: linear-gradient(to right, red, yellow);", "background-color: linear-gradient(red, yellow);", "background-image: gradient(red, yellow);", "background-style: linear-gradient(red, yellow);"],
    options_hi: ["background: linear-gradient(to right, red, yellow);", "background-color: linear-gradient(red, yellow);", "background-image: gradient(red, yellow);", "background-style: linear-gradient(red, yellow);"],
    answer_en: "background: linear-gradient(to right, red, yellow);",
    answer_hi: "background: linear-gradient(to right, red, yellow);",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which CSS property is used to fix the background image during scroll?",
    question_hi: "स्क्रॉल के दौरान बैकग्राउंड इमेज को फिक्स करने के लिए कौन सी CSS प्रॉपर्टी का उपयोग होता है?",
    options_en: ["background-attachment", "background-position", "background-repeat", "background-size"],
    options_hi: ["बैकग्राउंड-अटैचमेंट", "बैकग्राउंड-पोजीशन", "बैकग्राउंड-रिपीट", "बैकग्राउंड-साइज"],
    answer_en: "background-attachment",
    answer_hi: "बैकग्राउंड-अटैचमेंट",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which of the following is NOT a valid CSS color format?",
    question_hi: "निम्नलिखित में से कौन सा CSS रंग प्रारूप मान्य नहीं है?",
    options_en: ["HEX", "RGBA", "HSL", "XYZ"],
    options_hi: ["HEX", "RGBA", "HSL", "XYZ"],
    answer_en: "XYZ",
    answer_hi: "XYZ",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which property can be used to set multiple background images?",
    question_hi: "कौन सी प्रॉपर्टी का उपयोग एक साथ कई बैकग्राउंड इमेज सेट करने के लिए किया जा सकता है?",
    options_en: ["background-image", "background-color", "background-repeat", "background-position"],
    options_hi: ["बैकग्राउंड-इमेज", "बैकग्राउंड-कलर", "बैकग्राउंड-रिपीट", "बैकग्राउंड-पोजीशन"],
    answer_en: "background-image",
    answer_hi: "बैकग्राउंड-इमेज",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "What value for 'background-repeat' repeats the image both horizontally and vertically?",
    question_hi: "'background-repeat' का कौन सा मान इमेज को क्षैतिज और लंबवत दोनों रूपों में दोहराता है?",
    options_en: ["repeat", "repeat-x", "repeat-y", "no-repeat"],
    options_hi: ["रिपीट", "रिपीट-एक्स", "रिपीट-वाई", "नो-रिपीट"],
    answer_en: "repeat",
    answer_hi: "रिपीट",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which property adjusts the starting point of a background image?",
    question_hi: "कौन सी प्रॉपर्टी बैकग्राउंड इमेज के आरंभ बिंदु को समायोजित करती है?",
    options_en: ["background-position", "background-size", "background-repeat", "background-attachment"],
    options_hi: ["बैकग्राउंड-पोजीशन", "बैकग्राउंड-साइज", "बैकग्राउंड-रिपीट", "बैकग्राउंड-अटैचमेंट"],
    answer_en: "background-position",
    answer_hi: "बैकग्राउंड-पोजीशन",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which CSS color format uses degrees for the hue value?",
    question_hi: "कौन सा CSS रंग प्रारूप ह्यू वैल्यू के लिए डिग्री का उपयोग करता है?",
    options_en: ["HSL", "RGB", "HEX", "RGBA"],
    options_hi: ["HSL", "RGB", "HEX", "RGBA"],
    answer_en: "HSL",
    answer_hi: "HSL",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which CSS property can create a smooth color transition?",
    question_hi: "कौन सी CSS प्रॉपर्टी स्मूथ रंग संक्रमण बना सकती है?",
    options_en: ["background-image (gradient)", "background-color", "color", "border-color"],
    options_hi: ["बैकग्राउंड-इमेज (ग्रेडियंट)", "बैकग्राउंड-कलर", "कलर", "बॉर्डर-कलर"],
    answer_en: "background-image (gradient)",
    answer_hi: "बैकग्राउंड-इमेज (ग्रेडियंट)",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which property controls how background images scroll with the page?",
    question_hi: "कौन सी प्रॉपर्टी कंट्रोल करती है कि बैकग्राउंड इमेज पेज के साथ कैसे स्क्रॉल होती है?",
    options_en: ["background-attachment", "background-position", "background-repeat", "background-size"],
    options_hi: ["बैकग्राउंड-अटैचमेंट", "बैकग्राउंड-पोजीशन", "बैकग्राउंड-रिपीट", "बैकग्राउंड-साइज"],
    answer_en: "background-attachment",
    answer_hi: "बैकग्राउंड-अटैचमेंट",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Which CSS property controls the background image’s attachment behavior?",
    question_hi: "कौन सी CSS प्रॉपर्टी बैकग्राउंड इमेज के अटैचमेंट व्यवहार को नियंत्रित करती है?",
    options_en: ["background-attachment", "background-position", "background-repeat", "background-size"],
    options_hi: ["बैकग्राउंड-अटैचमेंट", "बैकग्राउंड-पोजीशन", "बैकग्राउंड-रिपीट", "बैकग्राउंड-साइज"],
    answer_en: "background-attachment",
    answer_hi: "बैकग्राउंड-अटैचमेंट",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which value of background-attachment keeps the background fixed during scroll?",
    question_hi: "background-attachment का कौन सा मान स्क्रॉल के दौरान बैकग्राउंड को फिक्स रखता है?",
    options_en: ["fixed", "scroll", "local", "inherit"],
    options_hi: ["फिक्स्ड", "स्क्रॉल", "लोकल", "इनहेरिट"],
    answer_en: "fixed",
    answer_hi: "फिक्स्ड",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "What does the background-position property define?",
    question_hi: "background-position प्रॉपर्टी क्या परिभाषित करती है?",
    options_en: ["Position of the background image", "Size of the background image", "Repeat of the background image", "Attachment of the background image"],
    options_hi: ["बैकग्राउंड इमेज की स्थिति", "बैकग्राउंड इमेज का आकार", "बैकग्राउंड इमेज का रिपीट", "बैकग्राउंड इमेज का अटैचमेंट"],
    answer_en: "Position of the background image",
    answer_hi: "बैकग्राउंड इमेज की स्थिति",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "How do you set a background gradient from blue to green?",
    question_hi: "नीले से हरे तक बैकग्राउंड ग्रेडियंट कैसे सेट करते हैं?",
    options_en: ["background: linear-gradient(blue, green);", "background-color: linear-gradient(blue, green);", "background-image: radial-gradient(blue, green);", "background: gradient(blue, green);"],
    options_hi: ["background: linear-gradient(blue, green);", "background-color: linear-gradient(blue, green);", "background-image: radial-gradient(blue, green);", "background: gradient(blue, green);"],
    answer_en: "background: linear-gradient(blue, green);",
    answer_hi: "background: linear-gradient(blue, green);",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which CSS property allows multiple backgrounds on one element?",
    question_hi: "कौन सी CSS प्रॉपर्टी एक एलिमेंट पर कई बैकग्राउंड की अनुमति देती है?",
    options_en: ["background-image", "background-color", "background-repeat", "background-position"],
    options_hi: ["बैकग्राउंड-इमेज", "बैकग्राउंड-कलर", "बैकग्राउंड-रिपीट", "बैकग्राउंड-पोजीशन"],
    answer_en: "background-image",
    answer_hi: "बैकग्राउंड-इमेज",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "What is the default value of background-repeat?",
    question_hi: "background-repeat का डिफ़ॉल्ट मान क्या है?",
    options_en: ["repeat", "no-repeat", "repeat-x", "repeat-y"],
    options_hi: ["रिपीट", "नो-रिपीट", "रिपीट-एक्स", "रिपीट-वाई"],
    answer_en: "repeat",
    answer_hi: "रिपीट",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "How do you prevent a background image from repeating?",
    question_hi: "बैकग्राउंड इमेज को दोहराने से कैसे रोकें?",
    options_en: ["background-repeat: no-repeat", "background-repeat: repeat", "background-repeat: repeat-x", "background-repeat: repeat-y"],
    options_hi: ["बैकग्राउंड-रिपीट: नो-रिपीट", "बैकग्राउंड-रिपीट: रिपीट", "बैकग्राउंड-रिपीट: रिपीट-एक्स", "बैकग्राउंड-रिपीट: रिपीट-वाई"],
    answer_en: "background-repeat: no-repeat",
    answer_hi: "बैकग्राउंड-रिपीट: नो-रिपीट",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which of these is NOT a valid color format in CSS?",
    question_hi: "इनमें से कौन सा CSS में मान्य रंग प्रारूप नहीं है?",
    options_en: ["XYZ", "RGB", "HEX", "HSL"],
    options_hi: ["XYZ", "RGB", "HEX", "HSL"],
    answer_en: "XYZ",
    answer_hi: "XYZ",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "How do you specify a color with transparency in HSL?",
    question_hi: "HSL में पारदर्शिता के साथ रंग कैसे निर्दिष्ट करते हैं?",
    options_en: ["hsla()", "hsl()", "rgb()", "rgba()"],
    options_hi: ["hsla()", "hsl()", "rgb()", "rgba()"],
    answer_en: "hsla()",
    answer_hi: "hsla()",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "What does 'background-size: contain' do?",
    question_hi: "'background-size: contain' क्या करता है?",
    options_en: ["Scales the image to fit inside the element", "Scales the image to cover the element", "Repeats the background image", "Positions the background image"],
    options_hi: ["इमेज को एलिमेंट के अंदर फिट करने के लिए स्केल करता है", "इमेज को एलिमेंट कवर करने के लिए स्केल करता है", "बैकग्राउंड इमेज दोहराता है", "बैकग्राउंड इमेज की पोजीशन सेट करता है"],
    answer_en: "Scales the image to fit inside the element",
    answer_hi: "इमेज को एलिमेंट के अंदर फिट करने के लिए स्केल करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which CSS function is used for radial gradients?",
    question_hi: "रेडियल ग्रेडियंट के लिए कौन सा CSS फंक्शन उपयोग किया जाता है?",
    options_en: ["radial-gradient()", "linear-gradient()", "conic-gradient()", "gradient()"],
    options_hi: ["radial-gradient()", "linear-gradient()", "conic-gradient()", "gradient()"],
    answer_en: "radial-gradient()",
    answer_hi: "radial-gradient()",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "How do you set the background image position to the top right corner?",
    question_hi: "बैकग्राउंड इमेज की पोजीशन टॉप राइट कॉर्नर पर कैसे सेट करें?",
    options_en: ["background-position: top right", "background-position: bottom left", "background-position: center", "background-position: left top"],
    options_hi: ["बैकग्राउंड-पोजीशन: टॉप राइट", "बैकग्राउंड-पोजीशन: बॉटम लेफ्ट", "बैकग्राउंड-पोजीशन: सेंटर", "बैकग्राउंड-पोजीशन: लेफ्ट टॉप"],
    answer_en: "background-position: top right",
    answer_hi: "बैकग्राउंड-पोजीशन: टॉप राइट",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "What does the 'background-repeat: repeat-x' property do?",
    question_hi: "'background-repeat: repeat-x' प्रॉपर्टी क्या करती है?",
    options_en: ["Repeats the background image horizontally", "Repeats the background image vertically", "Prevents repetition", "Repeats both horizontally and vertically"],
    options_hi: ["बैकग्राउंड इमेज को क्षैतिज रूप से दोहराता है", "बैकग्राउंड इमेज को लंबवत दोहराता है", "दोहराव रोकता है", "क्षैतिज और लंबवत दोनों में दोहराता है"],
    answer_en: "Repeats the background image horizontally",
    answer_hi: "बैकग्राउंड इमेज को क्षैतिज रूप से दोहराता है",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which CSS property sets the color of text?",
    question_hi: "कौन सी CSS प्रॉपर्टी टेक्स्ट का रंग सेट करती है?",
    options_en: ["color", "background-color", "border-color", "font-color"],
    options_hi: ["कलर", "बैकग्राउंड-कलर", "बॉर्डर-कलर", "फॉन्ट-कलर"],
    answer_en: "color",
    answer_hi: "कलर",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "How do you make a transparent background color using RGBA?",
    question_hi: "RGBA का उपयोग करके पारदर्शी बैकग्राउंड रंग कैसे बनाएं?",
    options_en: ["rgba(255, 0, 0, 0.5)", "rgb(255, 0, 0)", "hsl(120, 100%, 50%)", "hex #FF0000"],
    options_hi: ["rgba(255, 0, 0, 0.5)", "rgb(255, 0, 0)", "hsl(120, 100%, 50%)", "hex #FF0000"],
    answer_en: "rgba(255, 0, 0, 0.5)",
    answer_hi: "rgba(255, 0, 0, 0.5)",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "What does 'background-position: center' do?",
    question_hi: "'background-position: center' क्या करता है?",
    options_en: ["Centers the background image", "Places image at top left", "Repeats image", "Fixes image in place"],
    options_hi: ["बैकग्राउंड इमेज को केंद्रित करता है", "इमेज को टॉप लेफ्ट पर रखता है", "इमेज दोहराता है", "इमेज को फिक्स करता है"],
    answer_en: "Centers the background image",
    answer_hi: "बैकग्राउंड इमेज को केंद्रित करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which CSS property can add a transparent overlay on a background color?",
    question_hi: "कौन सी CSS प्रॉपर्टी बैकग्राउंड कलर पर पारदर्शी ओवरले जोड़ सकती है?",
    options_en: ["background-color with alpha", "background-image", "background-repeat", "background-position"],
    options_hi: ["अल्फा के साथ बैकग्राउंड-कलर", "बैकग्राउंड-इमेज", "बैकग्राउंड-रिपीट", "बैकग्राउंड-पोजीशन"],
    answer_en: "background-color with alpha",
    answer_hi: "अल्फा के साथ बैकग्राउंड-कलर",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "How is the 'transparent' keyword used in CSS?",
    question_hi: "CSS में 'transparent' कीवर्ड कैसे उपयोग किया जाता है?",
    options_en: ["Sets full transparency", "Sets white color", "Sets black color", "Sets semi-transparency"],
    options_hi: ["पूर्ण पारदर्शिता सेट करता है", "सफेद रंग सेट करता है", "काला रंग सेट करता है", "सेमी-पारदर्शिता सेट करता है"],
    answer_en: "Sets full transparency",
    answer_hi: "पूर्ण पारदर्शिता सेट करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which property is used to position background images relative to the element’s content box?",
    question_hi: "कौन सी प्रॉपर्टी बैकग्राउंड इमेज को एलिमेंट के कंटेंट बॉक्स के सापेक्ष पोजीशन करती है?",
    options_en: ["background-origin", "background-position", "background-attachment", "background-clip"],
    options_hi: ["बैकग्राउंड-ओरिजिन", "बैकग्राउंड-पोजीशन", "बैकग्राउंड-अटैचमेंट", "बैकग्राउंड-क्लिप"],
    answer_en: "background-origin",
    answer_hi: "बैकग्राउंड-ओरिजिन",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "What does the 'background-clip' property control?",
    question_hi: "'background-clip' प्रॉपर्टी क्या नियंत्रित करती है?",
    options_en: ["Where the background is painted", "Background image size", "Background position", "Background repeat"],
    options_hi: ["जहां बैकग्राउंड पेंट किया जाता है", "बैकग्राउंड इमेज का आकार", "बैकग्राउंड पोजीशन", "बैकग्राउंड रिपीट"],
    answer_en: "Where the background is painted",
    answer_hi: "जहां बैकग्राउंड पेंट किया जाता है",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which of the following is NOT a valid background-repeat value?",
    question_hi: "निम्नलिखित में से कौन सा background-repeat मान्य नहीं है?",
    options_en: ["repeat-z", "repeat", "repeat-x", "repeat-y"],
    options_hi: ["repeat-z", "repeat", "repeat-x", "repeat-y"],
    answer_en: "repeat-z",
    answer_hi: "repeat-z",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "How can you set a transparent background using the 'transparent' keyword?",
    question_hi: "'transparent' कीवर्ड का उपयोग करके पारदर्शी बैकग्राउंड कैसे सेट करें?",
    options_en: ["background-color: transparent;", "background-color: none;", "background-color: rgba(0,0,0,0);", "background-color: white;"],
    options_hi: ["background-color: transparent;", "background-color: none;", "background-color: rgba(0,0,0,0);", "background-color: white;"],
    answer_en: "background-color: transparent;",
    answer_hi: "background-color: transparent;",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which property controls the size of a background image without stretching it?",
    question_hi: "कौन सी प्रॉपर्टी बिना खींचे बैकग्राउंड इमेज के आकार को नियंत्रित करती है?",
    options_en: ["background-size", "background-position", "background-repeat", "background-attachment"],
    options_hi: ["बैकग्राउंड-साइज", "बैकग्राउंड-पोजीशन", "बैकग्राउंड-रिपीट", "बैकग्राउंड-अटैचमेंट"],
    answer_en: "background-size",
    answer_hi: "बैकग्राउंड-साइज",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "How do you apply multiple background images in CSS?",
    question_hi: "CSS में कई बैकग्राउंड इमेज कैसे लागू करें?",
    options_en: ["Separate image URLs with commas in background-image", "Use multiple background-image properties", "Use background-repeat multiple times", "Use multiple background-position properties"],
    options_hi: ["background-image में कॉमा से अलग-अलग इमेज URLs", "कई background-image प्रॉपर्टी का उपयोग", "background-repeat कई बार उपयोग करें", "कई background-position प्रॉपर्टी का उपयोग"],
    answer_en: "Separate image URLs with commas in background-image",
    answer_hi: "background-image में कॉमा से अलग-अलग इमेज URLs",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which CSS function allows you to create a conic gradient?",
    question_hi: "कौन सा CSS फंक्शन आपको कोनिक ग्रेडियंट बनाने की अनुमति देता है?",
    options_en: ["conic-gradient()", "radial-gradient()", "linear-gradient()", "gradient()"],
    options_hi: ["conic-gradient()", "radial-gradient()", "linear-gradient()", "gradient()"],
    answer_en: "conic-gradient()",
    answer_hi: "conic-gradient()",
    attempted: false,
    selected: ""
  }
      ],
      20:[
 {
    num: 1,
    question_en: "Which CSS property sets the width of the border?",
    question_hi: "कौन सी CSS प्रॉपर्टी बॉर्डर की चौड़ाई सेट करती है?",
    options_en: ["border-width", "border-style", "border-color", "outline-width"],
    options_hi: ["बॉर्डर-विथ", "बॉर्डर-स्टाइल", "बॉर्डर-कलर", "आउटलाइऩ-विथ"],
    answer_en: "border-width",
    answer_hi: "बॉर्डर-विथ",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which of the following is NOT a valid border style?",
    question_hi: "निम्नलिखित में से कौन सा बॉर्डर स्टाइल मान्य नहीं है?",
    options_en: ["dotted", "solid", "blurred", "dashed"],
    options_hi: ["डॉटेड", "सॉलिड", "ब्लर्ड", "डैश्ड"],
    answer_en: "blurred",
    answer_hi: "ब्लर्ड",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "What is the default border width if not specified?",
    question_hi: "यदि बॉर्डर चौड़ाई निर्दिष्ट न हो तो डिफ़ॉल्ट चौड़ाई क्या होती है?",
    options_en: ["medium", "thin", "thick", "0"],
    options_hi: ["मीडियम", "थिन", "थिक", "0"],
    answer_en: "medium",
    answer_hi: "मीडियम",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which property is used to set the border color?",
    question_hi: "बॉर्डर रंग सेट करने के लिए कौन सी प्रॉपर्टी उपयोग की जाती है?",
    options_en: ["border-color", "border-style", "border-width", "outline-color"],
    options_hi: ["बॉर्डर-कलर", "बॉर्डर-स्टाइल", "बॉर्डर-विथ", "आउटलाइऩ-कलर"],
    answer_en: "border-color",
    answer_hi: "बॉर्डर-कलर",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which CSS property adds an outline around an element?",
    question_hi: "कौन सी CSS प्रॉपर्टी एलिमेंट के चारों ओर आउटलाइऩ जोड़ती है?",
    options_en: ["outline", "border", "box-shadow", "background"],
    options_hi: ["आउटलाइऩ", "बॉर्डर", "बॉक्स-शैडो", "बैकग्राउंड"],
    answer_en: "outline",
    answer_hi: "आउटलाइऩ",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which of the following is a key difference between border and outline?",
    question_hi: "बॉर्डर और आउटलाइऩ के बीच मुख्य अंतर क्या है?",
    options_en: [
      "Outline does not take up space, border does",
      "Border does not take up space, outline does",
      "Both take up space",
      "Neither takes up space"
    ],
    options_hi: [
      "आउटलाइऩ जगह नहीं घेरता, बॉर्डर घेरता है",
      "बॉर्डर जगह नहीं घेरता, आउटलाइऩ घेरता है",
      "दोनों जगह घेरते हैं",
      "कोई नहीं जगह घेरता"
    ],
    answer_en: "Outline does not take up space, border does",
    answer_hi: "आउटलाइऩ जगह नहीं घेरता, बॉर्डर घेरता है",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which property controls the space between the outline and the element's edge?",
    question_hi: "कौन सी प्रॉपर्टी आउटलाइऩ और एलिमेंट की किनारे के बीच दूरी नियंत्रित करती है?",
    options_en: ["outline-offset", "outline-width", "border-spacing", "margin"],
    options_hi: ["आउटलाइऩ-ऑफसेट", "आउटलाइऩ-विथ", "बॉर्डर-स्पेसिंग", "मार्जिन"],
    answer_en: "outline-offset",
    answer_hi: "आउटलाइऩ-ऑफसेट",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which value of border-style creates a border with dots?",
    question_hi: "border-style का कौन सा मान डॉट्स वाली बॉर्डर बनाता है?",
    options_en: ["dotted", "dashed", "solid", "double"],
    options_hi: ["डॉटेड", "डैश्ड", "सॉलिड", "डबल"],
    answer_en: "dotted",
    answer_hi: "डॉटेड",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "How do you remove the border from an element?",
    question_hi: "एलिमेंट से बॉर्डर कैसे हटाएं?",
    options_en: ["border: none;", "border-width: 0;", "border-style: none;", "All of the above"],
    options_hi: ["बॉर्डर: नोन;", "बॉर्डर-विथ: 0;", "बॉर्डर-स्टाइल: नोन;", "उपरोक्त सभी"],
    answer_en: "All of the above",
    answer_hi: "उपरोक्त सभी",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which CSS property sets the thickness of the outline?",
    question_hi: "आउटलाइऩ की मोटाई सेट करने वाली CSS प्रॉपर्टी कौन सी है?",
    options_en: ["outline-width", "border-width", "outline-style", "border-style"],
    options_hi: ["आउटलाइऩ-विथ", "बॉर्डर-विथ", "आउटलाइऩ-स्टाइल", "बॉर्डर-स्टाइल"],
    answer_en: "outline-width",
    answer_hi: "आउटलाइऩ-विथ",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which outline-style value creates a dashed outline?",
    question_hi: "कौन सा outline-style मान डैश्ड आउटलाइऩ बनाता है?",
    options_en: ["dashed", "dotted", "solid", "double"],
    options_hi: ["डैश्ड", "डॉटेड", "सॉलिड", "डबल"],
    answer_en: "dashed",
    answer_hi: "डैश्ड",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Can an outline have rounded corners like a border?",
    question_hi: "क्या आउटलाइऩ के किनारे बॉर्डर की तरह गोल हो सकते हैं?",
    options_en: ["No", "Yes", "Only in Firefox", "Only in Chrome"],
    options_hi: ["नहीं", "हाँ", "सिर्फ़ Firefox में", "सिर्फ़ Chrome में"],
    answer_en: "No",
    answer_hi: "नहीं",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which property is used to set the style of an outline?",
    question_hi: "आउटलाइऩ के स्टाइल को सेट करने के लिए कौन सी प्रॉपर्टी उपयोग होती है?",
    options_en: ["outline-style", "border-style", "outline-width", "border-color"],
    options_hi: ["आउटलाइऩ-स्टाइल", "बॉर्डर-स्टाइल", "आउटलाइऩ-विथ", "बॉर्डर-कलर"],
    answer_en: "outline-style",
    answer_hi: "आउटलाइऩ-स्टाइल",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "What happens if you set 'outline: none;' on an element?",
    question_hi: "यदि आप एलिमेंट पर 'outline: none;' सेट करें तो क्या होगा?",
    options_en: ["Outline will be removed", "Border will be removed", "Element will be hidden", "No change"],
    options_hi: ["आउटलाइऩ हट जाएगा", "बॉर्डर हट जाएगा", "एलिमेंट छुप जाएगा", "कोई बदलाव नहीं होगा"],
    answer_en: "Outline will be removed",
    answer_hi: "आउटलाइऩ हट जाएगा",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which CSS shorthand property sets width, style, and color of border?",
    question_hi: "कौन सी CSS शॉर्थैंड प्रॉपर्टी बॉर्डर की चौड़ाई, स्टाइल और रंग सेट करती है?",
    options_en: ["border", "border-style", "border-width", "border-color"],
    options_hi: ["बॉर्डर", "बॉर्डर-स्टाइल", "बॉर्डर-विथ", "बॉर्डर-कलर"],
    answer_en: "border",
    answer_hi: "बॉर्डर",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "How do you set different border styles for each side of an element?",
    question_hi: "एलिमेंट के प्रत्येक पक्ष के लिए अलग-अलग बॉर्डर स्टाइल कैसे सेट करें?",
    options_en: [
      "Use border-top, border-right, border-bottom, border-left",
      "Use border-style with four values",
      "Use outline-style",
      "Both first and second options"
    ],
    options_hi: [
      "border-top, border-right, border-bottom, border-left उपयोग करें",
      "border-style में चार मान दें",
      "outline-style उपयोग करें",
      "पहला और दूसरा दोनों विकल्प"
    ],
    answer_en: "Both first and second options",
    answer_hi: "पहला और दूसरा दोनों विकल्प",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which property controls the color of the outline?",
    question_hi: "कौन सी प्रॉपर्टी आउटलाइऩ का रंग नियंत्रित करती है?",
    options_en: ["outline-color", "border-color", "outline-style", "border-style"],
    options_hi: ["आउटलाइऩ-कलर", "बॉर्डर-कलर", "आउटलाइऩ-स्टाइल", "बॉर्डर-स्टाइल"],
    answer_en: "outline-color",
    answer_hi: "आउटलाइऩ-कलर",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which of these properties does NOT affect the space an element occupies?",
    question_hi: "इनमें से कौन सी प्रॉपर्टी एलिमेंट द्वारा घिरी गई जगह को प्रभावित नहीं करती?",
    options_en: ["outline", "border", "margin", "padding"],
    options_hi: ["आउटलाइऩ", "बॉर्डर", "मार्जिन", "पैडिंग"],
    answer_en: "outline",
    answer_hi: "आउटलाइऩ",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "How do you set a thick red border?",
    question_hi: "मोटा लाल बॉर्डर कैसे सेट करें?",
    options_en: ["border: 5px solid red;", "border: solid red 5px;", "border: red solid 5px;", "border: 5px red solid;"],
    options_hi: ["बॉर्डर: 5px सॉलिड रेड;", "बॉर्डर: सॉलिड रेड 5px;", "बॉर्डर: रेड सॉलिड 5px;", "बॉर्डर: 5px रेड सॉलिड;"],
    answer_en: "border: 5px solid red;",
    answer_hi: "बॉर्डर: 5px सॉलिड रेड;",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Can outlines be used for accessibility focus indicators?",
    question_hi: "क्या आउटलाइऩ एक्सेसिबिलिटी फोकस इंडिकेटर के लिए उपयोग किया जा सकता है?",
    options_en: ["Yes", "No", "Only with JavaScript", "Only with CSS variables"],
    options_hi: ["हाँ", "नहीं", "सिर्फ जावास्क्रिप्ट से", "सिर्फ CSS वेरिएबल्स से"],
    answer_en: "Yes",
    answer_hi: "हाँ",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which property sets all four border widths at once?",
    question_hi: "कौन सी प्रॉपर्टी चारों बॉर्डर चौड़ाई एक साथ सेट करती है?",
    options_en: ["border-width", "border-style", "border-color", "border"],
    options_hi: ["बॉर्डर-विथ", "बॉर्डर-स्टाइल", "बॉर्डर-कलर", "बॉर्डर"],
    answer_en: "border-width",
    answer_hi: "बॉर्डर-विथ",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which value of border-style creates two solid lines?",
    question_hi: "border-style का कौन सा मान दो सॉलिड लाइनों वाला बॉर्डर बनाता है?",
    options_en: ["double", "solid", "dotted", "groove"],
    options_hi: ["डबल", "सॉलिड", "डॉटेड", "ग्रूव"],
    answer_en: "double",
    answer_hi: "डबल",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "What happens if you set border-color but not border-style?",
    question_hi: "यदि आप border-color सेट करते हैं लेकिन border-style नहीं करते तो क्या होगा?",
    options_en: [
      "No border will be visible",
      "Default border style will apply",
      "Border color will be ignored",
      "Error will occur"
    ],
    options_hi: [
      "कोई बॉर्डर दिखाई नहीं देगा",
      "डिफ़ॉल्ट बॉर्डर स्टाइल लागू होगा",
      "बॉर्डर रंग नजरअंदाज होगा",
      "एरर आएगा"
    ],
    answer_en: "No border will be visible",
    answer_hi: "कोई बॉर्डर दिखाई नहीं देगा",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which property can make the border rounded?",
    question_hi: "कौन सी प्रॉपर्टी बॉर्डर को गोल बना सकती है?",
    options_en: ["border-radius", "border-style", "outline-style", "outline-radius"],
    options_hi: ["बॉर्डर-रेडियस", "बॉर्डर-स्टाइल", "आउटलाइऩ-स्टाइल", "आउटलाइऩ-रेडियस"],
    answer_en: "border-radius",
    answer_hi: "बॉर्डर-रेडियस",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "How is the outline different from a border in terms of layout?",
    question_hi: "लेआउट के मामले में आउटलाइऩ बॉर्डर से कैसे भिन्न होता है?",
    options_en: [
      "Outline does not affect layout, border does",
      "Border does not affect layout, outline does",
      "Both affect layout",
      "Neither affects layout"
    ],
    options_hi: [
      "आउटलाइऩ लेआउट को प्रभावित नहीं करता, बॉर्डर करता है",
      "बॉर्डर लेआउट को प्रभावित नहीं करता, आउटलाइऩ करता है",
      "दोनों लेआउट को प्रभावित करते हैं",
      "कोई नहीं लेआउट को प्रभावित करता"
    ],
    answer_en: "Outline does not affect layout, border does",
    answer_hi: "आउटलाइऩ लेआउट को प्रभावित नहीं करता, बॉर्डर करता है",
    attempted: false,
    selected: ""
  },
    {
    num: 26,
    question_en: "Which property is used to set a border only at the top of an element?",
    question_hi: "कौन सी प्रॉपर्टी का उपयोग केवल एलिमेंट के टॉप बॉर्डर के लिए किया जाता है?",
    options_en: ["border-top", "border-bottom", "border-left", "border-right"],
    options_hi: ["बॉर्डर-टॉप", "बॉर्डर-बॉटम", "बॉर्डर-लेफ्ट", "बॉर्डर-राइट"],
    answer_en: "border-top",
    answer_hi: "बॉर्डर-टॉप",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "How do you make an element’s border invisible but still take space?",
    question_hi: "किस प्रकार एक एलिमेंट का बॉर्डर अदृश्य बनाएं लेकिन वह जगह घेरता रहे?",
    options_en: ["border-color: transparent;", "border-style: none;", "border-width: 0;", "outline: none;"],
    options_hi: ["बॉर्डर-कलर: ट्रांसपेरेंट;", "बॉर्डर-स्टाइल: नोन;", "बॉर्डर-विथ: 0;", "आउटलाइऩ: नोन;"],
    answer_en: "border-color: transparent;",
    answer_hi: "बॉर्डर-कलर: ट्रांसपेरेंट;",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which shorthand property sets all border sides individually?",
    question_hi: "कौन सी शॉर्थैंड प्रॉपर्टी चारों बॉर्डर साइड्स को अलग-अलग सेट करती है?",
    options_en: ["border-width", "border-style", "border", "border-radius"],
    options_hi: ["बॉर्डर-विथ", "बॉर्डर-स्टाइल", "बॉर्डर", "बॉर्डर-रेडियस"],
    answer_en: "border-width",
    answer_hi: "बॉर्डर-विथ",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "What does the 'outline-offset' property do?",
    question_hi: "'outline-offset' प्रॉपर्टी क्या करती है?",
    options_en: [
      "Moves the outline away from the element",
      "Changes the outline color",
      "Changes border thickness",
      "Adds shadow to outline"
    ],
    options_hi: [
      "आउटलाइऩ को एलिमेंट से दूर करती है",
      "आउटलाइऩ का रंग बदलती है",
      "बॉर्डर की मोटाई बदलती है",
      "आउटलाइऩ को छाया देती है"
    ],
    answer_en: "Moves the outline away from the element",
    answer_hi: "आउटलाइऩ को एलिमेंट से दूर करती है",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which border-style creates a 3D grooved effect?",
    question_hi: "कौन सा border-style 3D ग्रूव्ड इफेक्ट बनाता है?",
    options_en: ["groove", "ridge", "inset", "outset"],
    options_hi: ["ग्रूव", "रिज", "इंसेट", "आउटसेट"],
    answer_en: "groove",
    answer_hi: "ग्रूव",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "What does the 'border-collapse' property control?",
    question_hi: "'border-collapse' प्रॉपर्टी क्या नियंत्रित करती है?",
    options_en: ["Table borders merging", "Border color", "Border width", "Border style"],
    options_hi: ["टेबल बॉर्डर का विलय", "बॉर्डर रंग", "बॉर्डर चौड़ाई", "बॉर्डर स्टाइल"],
    answer_en: "Table borders merging",
    answer_hi: "टेबल बॉर्डर का विलय",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which property controls the space between the border and the cell content in tables?",
    question_hi: "टेबल में बॉर्डर और सेल कंटेंट के बीच की जगह कौन सी प्रॉपर्टी नियंत्रित करती है?",
    options_en: ["border-spacing", "padding", "margin", "outline-offset"],
    options_hi: ["बॉर्डर-स्पेसिंग", "पैडिंग", "मार्जिन", "आउटलाइऩ-ऑफसेट"],
    answer_en: "border-spacing",
    answer_hi: "बॉर्डर-स्पेसिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Can outline be styled differently than border?",
    question_hi: "क्या आउटलाइऩ को बॉर्डर से अलग तरीके से स्टाइल किया जा सकता है?",
    options_en: ["Yes", "No", "Only in some browsers", "Only with JavaScript"],
    options_hi: ["हाँ", "नहीं", "सिर्फ कुछ ब्राउज़रों में", "सिर्फ जावास्क्रिप्ट से"],
    answer_en: "Yes",
    answer_hi: "हाँ",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which CSS property specifies the style of all four borders at once?",
    question_hi: "कौन सी CSS प्रॉपर्टी एक साथ चारों बॉर्डर का स्टाइल सेट करती है?",
    options_en: ["border-style", "border-width", "border-color", "border"],
    options_hi: ["बॉर्डर-स्टाइल", "बॉर्डर-विथ", "बॉर्डर-कलर", "बॉर्डर"],
    answer_en: "border-style",
    answer_hi: "बॉर्डर-स्टाइल",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which property is NOT part of the border shorthand property?",
    question_hi: "निम्नलिखित में से कौन सी प्रॉपर्टी बॉर्डर शॉर्थैंड प्रॉपर्टी का हिस्सा नहीं है?",
    options_en: ["border-radius", "border-width", "border-style", "border-color"],
    options_hi: ["बॉर्डर-रेडियस", "बॉर्डर-विथ", "बॉर्डर-स्टाइल", "बॉर्डर-कलर"],
    answer_en: "border-radius",
    answer_hi: "बॉर्डर-रेडियस",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "How do you apply a dotted border only to the left side?",
    question_hi: "सिर्फ बाएँ साइड पर डॉटेड बॉर्डर कैसे लगाएं?",
    options_en: ["border-left-style: dotted;", "border-style: dotted left;", "border-left: dotted;", "border-style-left: dotted;"],
    options_hi: ["बॉर्डर-लेफ्ट-स्टाइल: डॉटेड;", "बॉर्डर-स्टाइल: डॉटेड लेफ्ट;", "बॉर्डर-लेफ्ट: डॉटेड;", "बॉर्डर-स्टाइल-लेफ्ट: डॉटेड;"],
    answer_en: "border-left-style: dotted;",
    answer_hi: "बॉर्डर-लेफ्ट-स्टाइल: डॉटेड;",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which CSS property removes the default outline on focus?",
    question_hi: "फोकस पर डिफ़ॉल्ट आउटलाइऩ हटाने वाली CSS प्रॉपर्टी कौन सी है?",
    options_en: ["outline: none;", "border: none;", "outline-style: none;", "outline-width: 0;"],
    options_hi: ["आउटलाइऩ: नोन;", "बॉर्डर: नोन;", "आउटलाइऩ-स्टाइल: नोन;", "आउटलाइऩ-विथ: 0;"],
    answer_en: "outline: none;",
    answer_hi: "आउटलाइऩ: नोन;",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which border style creates an inset effect?",
    question_hi: "कौन सा बॉर्डर स्टाइल इनसेट इफेक्ट बनाता है?",
    options_en: ["inset", "outset", "groove", "ridge"],
    options_hi: ["इनसेट", "आउटसेट", "ग्रूव", "रिज"],
    answer_en: "inset",
    answer_hi: "इनसेट",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "How can you create a double border?",
    question_hi: "डबल बॉर्डर कैसे बनाएं?",
    options_en: ["border-style: double;", "border-style: solid double;", "border-width: double;", "border-type: double;"],
    options_hi: ["बॉर्डर-स्टाइल: डबल;", "बॉर्डर-स्टाइल: सॉलिड डबल;", "बॉर्डर-विथ: डबल;", "बॉर्डर-टाइप: डबल;"],
    answer_en: "border-style: double;",
    answer_hi: "बॉर्डर-स्टाइल: डबल;",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which property can be used to add space between the border and content inside a box?",
    question_hi: "कौन सी प्रॉपर्टी बॉर्डर और बॉक्स के अंदर कंटेंट के बीच जगह जोड़ने के लिए इस्तेमाल होती है?",
    options_en: ["padding", "margin", "border-spacing", "outline-offset"],
    options_hi: ["पैडिंग", "मार्जिन", "बॉर्डर-स्पेसिंग", "आउटलाइऩ-ऑफसेट"],
    answer_en: "padding",
    answer_hi: "पैडिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "How to make only the bottom border thick?",
    question_hi: "सिर्फ नीचे का बॉर्डर मोटा कैसे बनाएं?",
    options_en: ["border-bottom-width: thick;", "border-width-bottom: thick;", "border-bottom-style: thick;", "border-style-bottom: thick;"],
    options_hi: ["बॉर्डर-बॉटम-विथ: थिक;", "बॉर्डर-विथ-बॉटम: थिक;", "बॉर्डर-बॉटम-स्टाइल: थिक;", "बॉर्डर-स्टाइल-बॉटम: थिक;"],
    answer_en: "border-bottom-width: thick;",
    answer_hi: "बॉर्डर-बॉटम-विथ: थिक;",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which property sets the style of the outline?",
    question_hi: "आउटलाइऩ का स्टाइल सेट करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["outline-style", "border-style", "outline-width", "border-width"],
    options_hi: ["आउटलाइऩ-स्टाइल", "बॉर्डर-स्टाइल", "आउटलाइऩ-विथ", "बॉर्डर-विथ"],
    answer_en: "outline-style",
    answer_hi: "आउटलाइऩ-स्टाइल",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which border style looks like a ridge?",
    question_hi: "कौन सा बॉर्डर स्टाइल रिज़ जैसा दिखता है?",
    options_en: ["ridge", "groove", "inset", "outset"],
    options_hi: ["रिज", "ग्रूव", "इनसेट", "आउटसेट"],
    answer_en: "ridge",
    answer_hi: "रिज",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "How to specify the color of the outline?",
    question_hi: "आउटलाइऩ का रंग कैसे सेट करें?",
    options_en: ["outline-color", "border-color", "color", "background-color"],
    options_hi: ["आउटलाइऩ-कलर", "बॉर्डर-कलर", "कलर", "बैकग्राउंड-कलर"],
    answer_en: "outline-color",
    answer_hi: "आउटलाइऩ-कलर",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which property controls the thickness of all four borders individually?",
    question_hi: "कौन सी प्रॉपर्टी चारों बॉर्डर की मोटाई अलग-अलग नियंत्रित करती है?",
    options_en: ["border-width", "border-style", "border-color", "border"],
    options_hi: ["बॉर्डर-विथ", "बॉर्डर-स्टाइल", "बॉर्डर-कलर", "बॉर्डर"],
    answer_en: "border-width",
    answer_hi: "बॉर्डर-विथ",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which CSS property is used to create space between adjacent table cells?",
    question_hi: "टेबल की सटती हुई सेल्स के बीच जगह बनाने के लिए कौन सी CSS प्रॉपर्टी है?",
    options_en: ["border-spacing", "border-collapse", "padding", "margin"],
    options_hi: ["बॉर्डर-स्पेसिंग", "बॉर्डर-कोलैप्स", "पैडिंग", "मार्जिन"],
    answer_en: "border-spacing",
    answer_hi: "बॉर्डर-स्पेसिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "What effect does the 'outline' property have on the box model?",
    question_hi: "'आउटलाइऩ' प्रॉपर्टी बॉक्स मॉडल पर क्या प्रभाव डालती है?",
    options_en: [
      "Does not affect box model dimensions",
      "Increases box size",
      "Decreases box size",
      "Overrides border"
    ],
    options_hi: [
      "बॉक्स मॉडल के आयामों को प्रभावित नहीं करता",
      "बॉक्स का आकार बढ़ाता है",
      "बॉक्स का आकार कम करता है",
      "बॉर्डर को ओवरराइड करता है"
    ],
    answer_en: "Does not affect box model dimensions",
    answer_hi: "बॉक्स मॉडल के आयामों को प्रभावित नहीं करता",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which property sets the space between the outline and the edge of the element?",
    question_hi: "कौन सी प्रॉपर्टी आउटलाइऩ और एलिमेंट की किनारे के बीच जगह सेट करती है?",
    options_en: ["outline-offset", "margin", "padding", "border-spacing"],
    options_hi: ["आउटलाइऩ-ऑफसेट", "मार्जिन", "पैडिंग", "बॉर्डर-स्पेसिंग"],
    answer_en: "outline-offset",
    answer_hi: "आउटलाइऩ-ऑफसेट",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Is the outline included in the element’s size calculations?",
    question_hi: "क्या आउटलाइऩ एलिमेंट के साइज कैलकुलेशन में शामिल होता है?",
    options_en: ["No", "Yes", "Only in some browsers", "Depends on box-sizing"],
    options_hi: ["नहीं", "हाँ", "सिर्फ कुछ ब्राउज़रों में", "बॉक्स-साइजिंग पर निर्भर करता है"],
    answer_en: "No",
    answer_hi: "नहीं",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which property would you use to remove the outline when a button is clicked?",
    question_hi: "जब बटन क्लिक किया जाए तो आउटलाइऩ हटाने के लिए कौन सी प्रॉपर्टी इस्तेमाल करें?",
    options_en: ["outline: none;", "border: none;", "outline-style: none;", "box-shadow: none;"],
    options_hi: ["आउटलाइऩ: नोन;", "बॉर्डर: नोन;", "आउटलाइऩ-स्टाइल: नोन;", "बॉक्स-शैडो: नोन;"],
    answer_en: "outline: none;",
    answer_hi: "आउटलाइऩ: नोन;",
    attempted: false,
    selected: ""
  }
      ],
      21:[
        {
    "num": 1,
    "question_en": "Which value of 'list-style-position' places the bullet inside the list item?",
    "question_hi": "'list-style-position' का कौन सा मान बुलेट को सूची आइटम के अंदर रखता है?",
    "options_en": ["inside", "outside", "center", "none"],
    "options_hi": ["इनसाइड", "आउटसाइड", "सेंटर", "नन"],
    "answer_en": "inside",
    "answer_hi": "इनसाइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is the default value of 'list-style-type' for an unordered list?",
    "question_hi": "अविन्यस्त सूची के लिए 'list-style-type' का डिफ़ॉल्ट मान क्या है?",
    "options_en": ["disc", "circle", "square", "decimal"],
    "options_hi": ["डिस्क", "सर्कल", "स्क्वायर", "डेसिमल"],
    "answer_en": "disc",
    "answer_hi": "डिस्क",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which property is used to remove bullet points from a list?",
    "question_hi": "सूची से बुलेट पॉइंट हटाने के लिए कौन सी प्रॉपर्टी का उपयोग किया जाता है?",
    "options_en": ["list-style-type: none;", "list-style-position: outside;", "text-decoration: none;", "bullet: none;"],
    "options_hi": ["list-style-type: none;", "list-style-position: आउटसाइड;", "text-decoration: none;", "बुलेट: नन;"],
    "answer_en": "list-style-type: none;",
    "answer_hi": "list-style-type: none;",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which CSS property controls the type of marker used in a list?",
    "question_hi": "कौन सी CSS प्रॉपर्टी सूची में उपयोग किए जाने वाले मार्कर के प्रकार को नियंत्रित करती है?",
    "options_en": ["list-style-type", "list-style-position", "marker-type", "list-marker"],
    "options_hi": ["list-style-type", "list-style-position", "marker-type", "list-marker"],
    "answer_en": "list-style-type",
    "answer_hi": "list-style-type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which of the following is NOT a valid value for 'list-style-position'?",
    "question_hi": "'list-style-position' के लिए निम्नलिखित में से कौन सा मान वैध नहीं है?",
    "options_en": ["inside", "outside", "middle", "initial"],
    "options_hi": ["इनसाइड", "आउटसाइड", "मिडल", "इनिशियल"],
    "answer_en": "middle",
    "answer_hi": "मिडल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which value of 'list-style-type' displays numbers in a list?",
    "question_hi": "'list-style-type' का कौन सा मान सूची में संख्याएँ प्रदर्शित करता है?",
    "options_en": ["decimal", "disc", "circle", "square"],
    "options_hi": ["डेसिमल", "डिस्क", "सर्कल", "स्क्वायर"],
    "answer_en": "decimal",
    "answer_hi": "डेसिमल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What does the 'list-style' shorthand property include?",
    "question_hi": "'list-style' शॉर्टहैंड प्रॉपर्टी में क्या शामिल होता है?",
    "options_en": ["type, position, image", "color, size, font", "margin, padding, border", "width, height, display"],
    "options_hi": ["टाइप, पोजीशन, इमेज", "कलर, साइज, फॉन्ट", "मार्जिन, पैडिंग, बॉर्डर", "वाइड्थ, हाइट, डिस्प्ले"],
    "answer_en": "type, position, image",
    "answer_hi": "टाइप, पोजीशन, इमेज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which CSS property specifies an image as a bullet in a list?",
    "question_hi": "सूची में बुलेट के रूप में इमेज निर्दिष्ट करने वाली CSS प्रॉपर्टी कौन सी है?",
    "options_en": ["list-style-image", "list-style-type", "list-style-position", "background-image"],
    "options_hi": ["list-style-image", "list-style-type", "list-style-position", "background-image"],
    "answer_en": "list-style-image",
    "answer_hi": "list-style-image",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What does 'list-style-position: outside;' do?",
    "question_hi": "'list-style-position: outside;' क्या करता है?",
    "options_en": ["Places the bullet outside the list item", "Places the bullet inside the list item", "Removes the bullet", "Centers the bullet"],
    "options_hi": ["बुलेट को सूची आइटम के बाहर रखता है", "बुलेट को सूची आइटम के अंदर रखता है", "बुलेट हटाता है", "बुलेट को केंद्रित करता है"],
    "answer_en": "Places the bullet outside the list item",
    "answer_hi": "बुलेट को सूची आइटम के बाहर रखता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which value of 'list-style-type' will show Roman numerals?",
    "question_hi": "'list-style-type' का कौन सा मान रोमन अंकों को दिखाता है?",
    "options_en": ["upper-roman", "lower-alpha", "decimal", "square"],
    "options_hi": ["अप्पर-रोमन", "लोअर-आल्फा", "डेसिमल", "स्क्वायर"],
    "answer_en": "upper-roman",
    "answer_hi": "अप्पर-रोमन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which of the following is a valid value for 'list-style-type'?",
    "question_hi": "'list-style-type' के लिए निम्नलिखित में से कौन सा मान वैध है?",
    "options_en": ["circle", "bold", "italic", "underline"],
    "options_hi": ["सर्कल", "बोल्ड", "इटैलिक", "अंडरलाइन"],
    "answer_en": "circle",
    "answer_hi": "सर्कल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which CSS property allows you to change the bullet shape in an unordered list?",
    "question_hi": "अविन्यस्त सूची में बुलेट का आकार बदलने वाली CSS प्रॉपर्टी कौन सी है?",
    "options_en": ["list-style-type", "list-style-position", "bullet-shape", "marker-style"],
    "options_hi": ["list-style-type", "list-style-position", "बुलेट-आकार", "मार्कर-स्टाइल"],
    "answer_en": "list-style-type",
    "answer_hi": "list-style-type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is the effect of 'list-style: none;'?",
    "question_hi": "'list-style: none;' का प्रभाव क्या होता है?",
    "options_en": ["Removes bullets and numbers", "Shows default bullets", "Changes bullet color", "Centers bullets"],
    "options_hi": ["बुलेट और नंबर हटाता है", "डिफ़ॉल्ट बुलेट दिखाता है", "बुलेट का रंग बदलता है", "बुलेट को केंद्रित करता है"],
    "answer_en": "Removes bullets and numbers",
    "answer_hi": "बुलेट और नंबर हटाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which of these is NOT a list type in CSS?",
    "question_hi": "CSS में इनमें से कौन सा सूची प्रकार नहीं है?",
    "options_en": ["decimal-leading-zero", "circle", "bold", "square"],
    "options_hi": ["डेसिमल-लीडिंग-ज़ीरो", "सर्कल", "बोल्ड", "स्क्वायर"],
    "answer_en": "bold",
    "answer_hi": "बोल्ड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What does 'list-style-type: square;' display?",
    "question_hi": "'list-style-type: square;' क्या दिखाता है?",
    "options_en": ["Square bullets", "Circle bullets", "Numbered list", "No bullets"],
    "options_hi": ["स्क्वायर बुलेट", "सर्कल बुलेट", "संख्या सूची", "कोई बुलेट नहीं"],
    "answer_en": "Square bullets",
    "answer_hi": "स्क्वायर बुलेट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "How do you place a bullet outside the list item?",
    "question_hi": "बुलेट को सूची आइटम के बाहर कैसे रखें?",
    "options_en": ["list-style-position: outside;", "list-style-position: inside;", "list-style-type: none;", "bullet-position: outside;"],
    "options_hi": ["list-style-position: आउटसाइड;", "list-style-position: इनसाइड;", "list-style-type: नन;", "बुलेट-पोजीशन: आउटसाइड;"],
    "answer_en": "list-style-position: outside;",
    "answer_hi": "list-style-position: आउटसाइड;",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which property combines 'list-style-type', 'list-style-position', and 'list-style-image'?",
    "question_hi": "कौन सी प्रॉपर्टी 'list-style-type', 'list-style-position', और 'list-style-image' को मिलाती है?",
    "options_en": ["list-style", "list-marker", "list-combine", "list-image"],
    "options_hi": ["list-style", "list-marker", "list-combine", "list-image"],
    "answer_en": "list-style",
    "answer_hi": "list-style",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which CSS property controls the position of the list item marker?",
    "question_hi": "CSS की कौन सी प्रॉपर्टी सूची आइटम मार्कर की स्थिति नियंत्रित करती है?",
    "options_en": ["list-style-position", "list-style-type", "marker-position", "list-marker"],
    "options_hi": ["list-style-position", "list-style-type", "मार्कर-पोजीशन", "list-marker"],
    "answer_en": "list-style-position",
    "answer_hi": "list-style-position",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What happens if you set 'list-style-image: none;'?",
    "question_hi": "'list-style-image: none;' सेट करने पर क्या होता है?",
    "options_en": ["Default marker is used", "No marker is shown", "Image marker is shown", "Bullet color changes"],
    "options_hi": ["डिफ़ॉल्ट मार्कर उपयोग होता है", "कोई मार्कर नहीं दिखता", "इमेज मार्कर दिखता है", "बुलेट रंग बदलता है"],
    "answer_en": "Default marker is used",
    "answer_hi": "डिफ़ॉल्ट मार्कर उपयोग होता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which value of 'list-style-type' is used for lowercase letters?",
    "question_hi": "निम्नलिखित में से कौन सा 'list-style-type' मान छोटे अक्षरों के लिए उपयोग किया जाता है?",
    "options_en": ["lower-alpha", "upper-alpha", "decimal", "circle"],
    "options_hi": ["लोअर-आल्फा", "अप्पर-आल्फा", "डेसिमल", "सर्कल"],
    "answer_en": "lower-alpha",
    "answer_hi": "लोअर-आल्फा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which CSS property would you use to set a custom bullet image?",
    "question_hi": "कस्टम बुलेट इमेज सेट करने के लिए कौन सी CSS प्रॉपर्टी का उपयोग किया जाता है?",
    "options_en": ["list-style-image", "background-image", "list-style-type", "content"],
    "options_hi": ["list-style-image", "background-image", "list-style-type", "कंटेंट"],
    "answer_en": "list-style-image",
    "answer_hi": "list-style-image",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "How do you hide the bullets in an unordered list?",
    "question_hi": "अविन्यस्त सूची में बुलेट्स को कैसे छिपाएं?",
    "options_en": ["list-style-type: none;", "list-style-position: none;", "display: none;", "visibility: hidden;"],
    "options_hi": ["list-style-type: none;", "list-style-position: none;", "display: none;", "विजिबिलिटी: हिडन;"],
    "answer_en": "list-style-type: none;",
    "answer_hi": "list-style-type: none;",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which of the following 'list-style-type' values is used for uppercase letters?",
    "question_hi": "निम्नलिखित में से कौन सा 'list-style-type' मान बड़े अक्षरों के लिए उपयोग किया जाता है?",
    "options_en": ["upper-alpha", "lower-alpha", "decimal", "disc"],
    "options_hi": ["अप्पर-आल्फा", "लोअर-आल्फा", "डेसिमल", "डिस्क"],
    "answer_en": "upper-alpha",
    "answer_hi": "अप्पर-आल्फा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What does the 'list-style-position: initial;' property do?",
    "question_hi": "'list-style-position: initial;' प्रॉपर्टी क्या करती है?",
    "options_en": ["Sets to default value", "Places bullet inside", "Places bullet outside", "Removes bullet"],
    "options_hi": ["डिफ़ॉल्ट मान सेट करता है", "बुलेट अंदर रखता है", "बुलेट बाहर रखता है", "बुलेट हटाता है"],
    "answer_en": "Sets to default value",
    "answer_hi": "डिफ़ॉल्ट मान सेट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which property allows you to combine multiple list style properties in one declaration?",
    "question_hi": "कौन सी प्रॉपर्टी आपको एक डिक्लेरेशन में कई लिस्ट स्टाइल प्रॉपर्टीज़ को जोड़ने की अनुमति देती है?",
    "options_en": ["list-style", "list-combine", "list-style-type", "list-style-position"],
    "options_hi": ["list-style", "list-combine", "list-style-type", "list-style-position"],
    "answer_en": "list-style",
    "answer_hi": "list-style",
    "attempted": false,
    "selected": ""
  },
    {
    "num": 26,
    "question_en": "Which 'list-style-type' value displays lowercase Roman numerals?",
    "question_hi": "'list-style-type' का कौन सा मान लोअरकेस रोमन नंबर दिखाता है?",
    "options_en": ["lower-roman", "upper-roman", "decimal", "circle"],
    "options_hi": ["लोअर-रोमन", "अप्पर-रोमन", "डेसिमल", "सर्कल"],
    "answer_en": "lower-roman",
    "answer_hi": "लोअर-रोमन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "How can you change the bullet color of a list?",
    "question_hi": "सूची के बुलेट का रंग कैसे बदल सकते हैं?",
    "options_en": ["Using 'color' property on list item", "Using 'list-style-color'", "Using 'bullet-color'", "Using 'background-color'"],
    "options_hi": ["लिस्ट आइटम पर 'color' प्रॉपर्टी का उपयोग", "'list-style-color' का उपयोग", "'bullet-color' का उपयोग", "'background-color' का उपयोग"],
    "answer_en": "Using 'color' property on list item",
    "answer_hi": "लिस्ट आइटम पर 'color' प्रॉपर्टी का उपयोग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which property can override the default bullet with a custom image?",
    "question_hi": "डिफ़ॉल्ट बुलेट को कस्टम इमेज से ओवरराइड करने वाली प्रॉपर्टी कौन सी है?",
    "options_en": ["list-style-image", "background-image", "bullet-image", "marker-image"],
    "options_hi": ["list-style-image", "background-image", "बुलेट-इमेज", "मार्कर-इमेज"],
    "answer_en": "list-style-image",
    "answer_hi": "list-style-image",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "If you want no marker for a list item, which value do you use for 'list-style-type'?",
    "question_hi": "अगर आप सूची आइटम के लिए कोई मार्कर नहीं चाहते, तो 'list-style-type' के लिए कौन सा मान इस्तेमाल करेंगे?",
    "options_en": ["none", "hidden", "no-marker", "null"],
    "options_hi": ["none", "hidden", "नो-मार्कर", "नल"],
    "answer_en": "none",
    "answer_hi": "none",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is the effect of 'list-style-position: inside;' on multi-line list items?",
    "question_hi": "'list-style-position: inside;' का मल्टी-लाइन सूची आइटम पर क्या प्रभाव होता है?",
    "options_en": ["Bullet aligns with first line text", "Bullet outside list item", "No bullet shown", "Bullet is centered"],
    "options_hi": ["बुलेट पहली लाइन के टेक्स्ट के साथ संरेखित होता है", "बुलेट सूची आइटम के बाहर", "कोई बुलेट नहीं दिखता", "बुलेट केंद्रित होता है"],
    "answer_en": "Bullet aligns with first line text",
    "answer_hi": "बुलेट पहली लाइन के टेक्स्ट के साथ संरेखित होता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Can 'list-style-position' accept multiple values?",
    "question_hi": "'list-style-position' क्या कई मान स्वीकार करता है?",
    "options_en": ["No", "Yes", "Only two values", "Only numeric values"],
    "options_hi": ["नहीं", "हाँ", "केवल दो मान", "केवल संख्यात्मक मान"],
    "answer_en": "No",
    "answer_hi": "नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which is the correct shorthand syntax for 'list-style'?",
    "question_hi": "'list-style' के लिए सही शॉर्टहैंड सिंटैक्स क्या है?",
    "options_en": ["list-style: <type> <position> <image>;", "list-style: <color> <size>;", "list-style: <font> <weight>;", "list-style: <border> <margin>;"],
    "options_hi": ["list-style: <type> <position> <image>;", "list-style: <color> <size>;", "list-style: <font> <weight>;", "list-style: <border> <margin>;"],
    "answer_en": "list-style: <type> <position> <image>;",
    "answer_hi": "list-style: <type> <position> <image>;",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is the default 'list-style-position' value?",
    "question_hi": "'list-style-position' का डिफ़ॉल्ट मान क्या है?",
    "options_en": ["outside", "inside", "none", "inherit"],
    "options_hi": ["आउटसाइड", "इनसाइड", "नन", "इनहेरिट"],
    "answer_en": "outside",
    "answer_hi": "आउटसाइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "How can you center the bullet points in a list?",
    "question_hi": "सूची में बुलेट पॉइंट्स को केंद्रित कैसे करें?",
    "options_en": ["CSS does not support centering bullets", "Using 'text-align: center;'", "Using 'list-style-position: center;'", "Using 'margin: auto;'"],
    "options_hi": ["CSS बुलेट केंद्रित करने का समर्थन नहीं करता", "'text-align: center;' का उपयोग", "'list-style-position: center;' का उपयोग", "'margin: auto;' का उपयोग"],
    "answer_en": "CSS does not support centering bullets",
    "answer_hi": "CSS बुलेट केंद्रित करने का समर्थन नहीं करता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which 'list-style-type' value shows decimal numbers with leading zeros?",
    "question_hi": "'list-style-type' का कौन सा मान अग्रणी शून्य के साथ दशमलव नंबर दिखाता है?",
    "options_en": ["decimal-leading-zero", "decimal", "circle", "square"],
    "options_hi": ["decimal-leading-zero", "decimal", "सर्कल", "स्क्वायर"],
    "answer_en": "decimal-leading-zero",
    "answer_hi": "decimal-leading-zero",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which CSS property is NOT related to list styling?",
    "question_hi": "निम्नलिखित में से कौन सी CSS प्रॉपर्टी सूची स्टाइलिंग से संबंधित नहीं है?",
    "options_en": ["list-style-type", "list-style-position", "list-style-image", "text-decoration"],
    "options_hi": ["list-style-type", "list-style-position", "list-style-image", "text-decoration"],
    "answer_en": "text-decoration",
    "answer_hi": "text-decoration",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which property controls the image used as a list item marker?",
    "question_hi": "कौन सी प्रॉपर्टी सूची आइटम मार्कर के रूप में उपयोग की जाने वाली इमेज को नियंत्रित करती है?",
    "options_en": ["list-style-image", "list-style-position", "list-style-type", "marker-image"],
    "options_hi": ["list-style-image", "list-style-position", "list-style-type", "marker-image"],
    "answer_en": "list-style-image",
    "answer_hi": "list-style-image",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Is 'list-style-position' inherited by child elements?",
    "question_hi": "क्या 'list-style-position' चाइल्ड एलिमेंट्स द्वारा विरासत में लिया जाता है?",
    "options_en": ["Yes", "No", "Only if specified", "Depends on browser"],
    "options_hi": ["हाँ", "नहीं", "केवल यदि निर्दिष्ट हो", "ब्राउज़र पर निर्भर करता है"],
    "answer_en": "No",
    "answer_hi": "नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What value of 'list-style-type' displays a dash (-) as the bullet?",
    "question_hi": "'list-style-type' का कौन सा मान बुलेट के रूप में डैश (-) दिखाता है?",
    "options_en": ["None of the standard values", "dash", "square", "circle"],
    "options_hi": ["कोई भी मान नहीं", "डैश", "स्क्वायर", "सर्कल"],
    "answer_en": "None of the standard values",
    "answer_hi": "कोई भी मान नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Can 'list-style' shorthand property set all three: type, position, and image simultaneously?",
    "question_hi": "'list-style' शॉर्टहैंड प्रॉपर्टी क्या एक साथ type, position, और image सेट कर सकती है?",
    "options_en": ["Yes", "No", "Only two at a time", "Only image and type"],
    "options_hi": ["हाँ", "नहीं", "एक बार में केवल दो", "केवल इमेज और टाइप"],
    "answer_en": "Yes",
    "answer_hi": "हाँ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What does 'list-style-type: none;' do?",
    "question_hi": "'list-style-type: none;' क्या करता है?",
    "options_en": ["Removes bullets or numbers", "Shows default bullets", "Changes bullet color", "Centers bullets"],
    "options_hi": ["बुलेट या नंबर हटाता है", "डिफ़ॉल्ट बुलेट दिखाता है", "बुलेट का रंग बदलता है", "बुलेट को केंद्रित करता है"],
    "answer_en": "Removes bullets or numbers",
    "answer_hi": "बुलेट या नंबर हटाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which CSS list style property can take a URL value?",
    "question_hi": "कौन सी CSS सूची स्टाइल प्रॉपर्टी URL मान ले सकती है?",
    "options_en": ["list-style-image", "list-style-type", "list-style-position", "list-style-url"],
    "options_hi": ["list-style-image", "list-style-type", "list-style-position", "list-style-url"],
    "answer_en": "list-style-image",
    "answer_hi": "list-style-image",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which 'list-style-type' is used for decimal numbering?",
    "question_hi": "डेसिमल नंबरिंग के लिए कौन सा 'list-style-type' उपयोग किया जाता है?",
    "options_en": ["decimal", "disc", "circle", "square"],
    "options_hi": ["decimal", "disc", "circle", "square"],
    "answer_en": "decimal",
    "answer_hi": "decimal",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which CSS property affects the placement of the marker relative to the list item content?",
    "question_hi": "कौन सी CSS प्रॉपर्टी सूची आइटम सामग्री के सापेक्ष मार्कर की स्थिति को प्रभावित करती है?",
    "options_en": ["list-style-position", "list-style-type", "list-style-image", "marker-position"],
    "options_hi": ["list-style-position", "list-style-type", "list-style-image", "marker-position"],
    "answer_en": "list-style-position",
    "answer_hi": "list-style-position",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Can the 'list-style-type' property accept 'decimal-leading-zero' as a value?",
    "question_hi": "'list-style-type' प्रॉपर्टी क्या 'decimal-leading-zero' को मान के रूप में स्वीकार करती है?",
    "options_en": ["Yes", "No", "Only in some browsers", "Deprecated"],
    "options_hi": ["हाँ", "नहीं", "कुछ ब्राउज़र में ही", "अप्रचलित"],
    "answer_en": "Yes",
    "answer_hi": "हाँ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which of these values is NOT valid for 'list-style-type'?",
    "question_hi": "'list-style-type' के लिए इनमें से कौन सा मान वैध नहीं है?",
    "options_en": ["triangle", "circle", "square", "disc"],
    "options_hi": ["ट्रायंगल", "सर्कल", "स्क्वायर", "डिस्क"],
    "answer_en": "triangle",
    "answer_hi": "ट्रायंगल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "How do you remove bullets from an ordered list?",
    "question_hi": "क्रमबद्ध सूची से बुलेट्स कैसे हटाएं?",
    "options_en": ["list-style-type: none;", "list-style-position: none;", "list-style-image: none;", "bullet: none;"],
    "options_hi": ["list-style-type: none;", "list-style-position: none;", "list-style-image: none;", "बुलेट: नन;"],
    "answer_en": "list-style-type: none;",
    "answer_hi": "list-style-type: none;",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which property sets the position of the list marker relative to the content?",
    "question_hi": "कौन सी प्रॉपर्टी सूची मार्कर की स्थिति को सामग्री के सापेक्ष सेट करती है?",
    "options_en": ["list-style-position", "list-style-type", "list-style-image", "position"],
    "options_hi": ["list-style-position", "list-style-type", "list-style-image", "पोजीशन"],
    "answer_en": "list-style-position",
    "answer_hi": "list-style-position",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which CSS property can be used to set an image as a bullet?",
    "question_hi": "कौन सी CSS प्रॉपर्टी बुलेट के रूप में इमेज सेट करने के लिए उपयोग की जाती है?",
    "options_en": ["list-style-image", "background-image", "marker-image", "bullet-image"],
    "options_hi": ["list-style-image", "background-image", "मार्कर-इमेज", "बुलेट-इमेज"],
    "answer_en": "list-style-image",
    "answer_hi": "list-style-image",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is the default bullet shape in an unordered list?",
    "question_hi": "अविन्यस्त सूची में डिफ़ॉल्ट बुलेट आकार क्या है?",
    "options_en": ["disc", "circle", "square", "decimal"],
    "options_hi": ["डिस्क", "सर्कल", "स्क्वायर", "डेसिमल"],
    "answer_en": "disc",
    "answer_hi": "डिस्क",
    "attempted": false,
    "selected": ""
  }
      ],
      22:[
           {
    num: 1,
    question_en: "Which property specifies the width of the space between table cells?",
    question_hi: "टेबल सेल्स के बीच की जगह की चौड़ाई कौन सी प्रॉपर्टी सेट करती है?",
    options_en: ["border-spacing", "padding", "margin", "border-width"],
    options_hi: ["सेलों के बीच जगह (border-spacing)", "पैडिंग (padding)", "मार्जिन (margin)", "बॉर्डर की मोटाई (border-width)"],
    answer_en: "border-spacing",
    answer_hi: "सेलों के बीच जगह (border-spacing)",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which property is used to add space inside a table cell?",
    question_hi: "टेबल सेल के अंदर जगह बढ़ाने के लिए कौन सी प्रॉपर्टी उपयोग होती है?",
    options_en: ["padding", "margin", "border-spacing", "border-collapse"],
    options_hi: ["पैडिंग (padding)", "मार्जिन (margin)", "सेलों के बीच जगह (border-spacing)", "बॉर्डर-कॉलैप्स (border-collapse)"],
    answer_en: "padding",
    answer_hi: "पैडिंग (padding)",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which property collapses the borders between table cells?",
    question_hi: "टेबल सेल्स के बीच बॉर्डर को जोड़ने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["border-collapse", "border-spacing", "padding", "margin"],
    options_hi: ["बॉर्डर-कॉलैप्स (border-collapse)", "सेलों के बीच जगह (border-spacing)", "पैडिंग (padding)", "मार्जिन (margin)"],
    answer_en: "border-collapse",
    answer_hi: "बॉर्डर-कॉलैप्स (border-collapse)",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which property controls the border thickness of a table cell?",
    question_hi: "टेबल सेल की बॉर्डर की मोटाई को कौन सी प्रॉपर्टी नियंत्रित करती है?",
    options_en: ["border-width", "padding", "margin", "border-spacing"],
    options_hi: ["बॉर्डर की मोटाई (border-width)", "पैडिंग (padding)", "मार्जिन (margin)", "सेलों के बीच जगह (border-spacing)"],
    answer_en: "border-width",
    answer_hi: "बॉर्डर की मोटाई (border-width)",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which property specifies the space outside the border of a table cell?",
    question_hi: "टेबल सेल के बॉर्डर के बाहर की जगह कौन सी प्रॉपर्टी सेट करती है?",
    options_en: ["margin", "padding", "border-spacing", "border-width"],
    options_hi: ["मार्जिन (margin)", "पैडिंग (padding)", "सेलों के बीच जगह (border-spacing)", "बॉर्डर की मोटाई (border-width)"],
    answer_en: "margin",
    answer_hi: "मार्जिन (margin)",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which property specifies whether table borders are visible or hidden?",
    question_hi: "टेबल की बॉर्डर को दिखाने या छिपाने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["border-style", "border-width", "border-spacing", "border-collapse"],
    options_hi: ["बॉर्डर-स्टाइल (border-style)", "बॉर्डर की मोटाई (border-width)", "सेलों के बीच जगह (border-spacing)", "बॉर्डर-कॉलैप्स (border-collapse)"],
    answer_en: "border-style",
    answer_hi: "बॉर्डर-स्टाइल (border-style)",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which value of border-collapse collapses the borders into a single border?",
    question_hi: "border-collapse की कौन सी वैल्यू बॉर्डर्स को एकल बॉर्डर में बदलती है?",
    options_en: ["collapse", "separate", "hidden", "visible"],
    options_hi: ["कॉलैप्स (collapse)", "सेपरेट (separate)", "हिडन (hidden)", "विज़िबल (visible)"],
    answer_en: "collapse",
    answer_hi: "कॉलैप्स (collapse)",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which property defines the color of the border of a table cell?",
    question_hi: "टेबल सेल की बॉर्डर का रंग कौन सी प्रॉपर्टी सेट करती है?",
    options_en: ["border-color", "background-color", "color", "border-width"],
    options_hi: ["बॉर्डर रंग (border-color)", "बैकग्राउंड रंग (background-color)", "रंग (color)", "बॉर्डर की मोटाई (border-width)"],
    answer_en: "border-color",
    answer_hi: "बॉर्डर रंग (border-color)",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which CSS property sets the background color inside table cells?",
    question_hi: "टेबल सेल के अंदर बैकग्राउंड रंग सेट करने वाली CSS प्रॉपर्टी कौन सी है?",
    options_en: ["background-color", "color", "border-color", "border-spacing"],
    options_hi: ["बैकग्राउंड रंग (background-color)", "रंग (color)", "बॉर्डर रंग (border-color)", "सेलों के बीच जगह (border-spacing)"],
    answer_en: "background-color",
    answer_hi: "बैकग्राउंड रंग (background-color)",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which property determines the layout of the table’s borders?",
    question_hi: "टेबल के बॉर्डर के लेआउट को नियंत्रित करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["border-collapse", "border-spacing", "padding", "margin"],
    options_hi: ["बॉर्डर-कॉलैप्स (border-collapse)", "सेलों के बीच जगह (border-spacing)", "पैडिंग (padding)", "मार्जिन (margin)"],
    answer_en: "border-collapse",
    answer_hi: "बॉर्डर-कॉलैप्स (border-collapse)",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which property sets the horizontal alignment of text in table cells?",
    question_hi: "टेबल सेल्स में टेक्स्ट की क्षैतिज संरेखण सेट करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["text-align", "vertical-align", "padding", "margin"],
    options_hi: ["टेक्स्ट-अलाइन (text-align)", "वर्टिकल-अलाइन (vertical-align)", "पैडिंग (padding)", "मार्जिन (margin)"],
    answer_en: "text-align",
    answer_hi: "टेक्स्ट-अलाइन (text-align)",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which property sets the vertical alignment of content in table cells?",
    question_hi: "टेबल सेल्स में कंटेंट की ऊर्ध्वाधर संरेखण सेट करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["vertical-align", "text-align", "padding", "margin"],
    options_hi: ["वर्टिकल-अलाइन (vertical-align)", "टेक्स्ट-अलाइन (text-align)", "पैडिंग (padding)", "मार्जिन (margin)"],
    answer_en: "vertical-align",
    answer_hi: "वर्टिकल-अलाइन (vertical-align)",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which property specifies the style of the border (solid, dashed, dotted) for table cells?",
    question_hi: "टेबल सेल्स के लिए बॉर्डर का स्टाइल (सॉलिड, डैश्ड, डॉटेड) कौन सी प्रॉपर्टी सेट करती है?",
    options_en: ["border-style", "border-width", "border-color", "border-spacing"],
    options_hi: ["बॉर्डर-स्टाइल (border-style)", "बॉर्डर की मोटाई (border-width)", "बॉर्डर रंग (border-color)", "सेलों के बीच जगह (border-spacing)"],
    answer_en: "border-style",
    answer_hi: "बॉर्डर-स्टाइल (border-style)",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which property specifies if the table layout algorithm is fixed or automatic?",
    question_hi: "टेबल लेआउट एल्गोरिद्म फिक्स्ड या ऑटोमेटिक होने को कौन सी प्रॉपर्टी सेट करती है?",
    options_en: ["table-layout", "border-collapse", "border-spacing", "padding"],
    options_hi: ["टेबल-लेआउट (table-layout)", "बॉर्डर-कॉलैप्स (border-collapse)", "सेलों के बीच जगह (border-spacing)", "पैडिंग (padding)"],
    answer_en: "table-layout",
    answer_hi: "टेबल-लेआउट (table-layout)",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which value of table-layout makes the table width depend on the content?",
    question_hi: "table-layout की कौन सी वैल्यू टेबल की चौड़ाई को कंटेंट पर निर्भर बनाती है?",
    options_en: ["auto", "fixed", "inherit", "initial"],
    options_hi: ["ऑटो (auto)", "फिक्स्ड (fixed)", "इनहेरिट (inherit)", "इनिशियल (initial)"],
    answer_en: "auto",
    answer_hi: "ऑटो (auto)",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which property sets the caption alignment of a table?",
    question_hi: "टेबल के कैप्शन की संरेखण सेट करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["caption-side", "caption-align", "text-align", "vertical-align"],
    options_hi: ["कैप्शन-साइड (caption-side)", "कैप्शन-अलाइन (caption-align)", "टेक्स्ट-अलाइन (text-align)", "वर्टिकल-अलाइन (vertical-align)"],
    answer_en: "caption-side",
    answer_hi: "कैप्शन-साइड (caption-side)",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which property specifies the width of a table?",
    question_hi: "टेबल की चौड़ाई सेट करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["width", "height", "border-width", "margin"],
    options_hi: ["चौड़ाई (width)", "ऊंचाई (height)", "बॉर्डर की मोटाई (border-width)", "मार्जिन (margin)"],
    answer_en: "width",
    answer_hi: "चौड़ाई (width)",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which property sets the height of a table row?",
    question_hi: "टेबल रो की ऊंचाई सेट करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["height", "width", "padding", "margin"],
    options_hi: ["ऊंचाई (height)", "चौड़ाई (width)", "पैडिंग (padding)", "मार्जिन (margin)"],
    answer_en: "height",
    answer_hi: "ऊंचाई (height)",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which property controls whether table cells wrap content or overflow?",
    question_hi: "टेबल सेल्स में कंटेंट रैप हो या ओवरफ्लो हो इसे नियंत्रित करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["white-space", "overflow", "text-wrap", "text-overflow"],
    options_hi: ["व्हाइट-स्पेस (white-space)", "ओवरफ्लो (overflow)", "टेक्स्ट-रैप (text-wrap)", "टेक्स्ट-ओवरफ्लो (text-overflow)"],
    answer_en: "white-space",
    answer_hi: "व्हाइट-स्पेस (white-space)",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which property is used to add a border around the entire table?",
    question_hi: "पूरे टेबल के चारों ओर बॉर्डर जोड़ने के लिए कौन सी प्रॉपर्टी उपयोग होती है?",
    options_en: ["border", "border-width", "border-style", "border-color"],
    options_hi: ["बॉर्डर (border)", "बॉर्डर की मोटाई (border-width)", "बॉर्डर-स्टाइल (border-style)", "बॉर्डर रंग (border-color)"],
    answer_en: "border",
    answer_hi: "बॉर्डर (border)",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which property sets the minimum width of a table column?",
    question_hi: "टेबल कॉलम की न्यूनतम चौड़ाई सेट करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["min-width", "max-width", "width", "table-layout"],
    options_hi: ["मिन-चौड़ाई (min-width)", "मैक्स-चौड़ाई (max-width)", "चौड़ाई (width)", "टेबल-लेआउट (table-layout)"],
    answer_en: "min-width",
    answer_hi: "मिन-चौड़ाई (min-width)",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which property controls spacing inside cells in a collapsed border table?",
    question_hi: "कॉलैप्स्ड बॉर्डर टेबल में सेल के अंदर की जगह को नियंत्रित करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["padding", "border-spacing", "margin", "border-collapse"],
    options_hi: ["पैडिंग (padding)", "सेलों के बीच जगह (border-spacing)", "मार्जिन (margin)", "बॉर्डर-कॉलैप्स (border-collapse)"],
    answer_en: "padding",
    answer_hi: "पैडिंग (padding)",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which CSS property makes the table responsive by setting width to 100%?",
    question_hi: "टेबल को रेस्पॉन्सिव बनाने के लिए कौन सी CSS प्रॉपर्टी की चौड़ाई 100% सेट करती है?",
    options_en: ["width", "max-width", "min-width", "table-layout"],
    options_hi: ["चौड़ाई (width)", "मैक्स-चौड़ाई (max-width)", "मिन-चौड़ाई (min-width)", "टेबल-लेआउट (table-layout)"],
    answer_en: "width",
    answer_hi: "चौड़ाई (width)",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which property sets the space between the border and the content of a table cell?",
    question_hi: "टेबल सेल के कंटेंट और बॉर्डर के बीच की जगह कौन सी प्रॉपर्टी सेट करती है?",
    options_en: ["padding", "margin", "border-spacing", "border-width"],
    options_hi: ["पैडिंग (padding)", "मार्जिन (margin)", "सेलों के बीच जगह (border-spacing)", "बॉर्डर की मोटाई (border-width)"],
    answer_en: "padding",
    answer_hi: "पैडिंग (padding)",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which property sets the table’s border color and style together?",
    question_hi: "टेबल के बॉर्डर का रंग और स्टाइल एक साथ सेट करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["border", "border-width", "border-style", "border-color"],
    options_hi: ["बॉर्डर (border)", "बॉर्डर की मोटाई (border-width)", "बॉर्डर-स्टाइल (border-style)", "बॉर्डर रंग (border-color)"],
    answer_en: "border",
    answer_hi: "बॉर्डर (border)",
    attempted: false,
    selected: ""
  },
   {
    num: 26,
    question_en: "Which property controls the spacing between table rows?",
    question_hi: "टेबल की पंक्तियों के बीच की जगह को कौन सी प्रॉपर्टी नियंत्रित करती है?",
    options_en: ["border-spacing", "border-collapse", "padding", "margin"],
    options_hi: ["सेलों के बीच जगह (border-spacing)", "बॉर्डर-कॉलैप्स (border-collapse)", "पैडिंग (padding)", "मार्जिन (margin)"],
    answer_en: "border-spacing",
    answer_hi: "सेलों के बीच जगह (border-spacing)",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which CSS property allows you to specify whether table cells have fixed or dynamic widths?",
    question_hi: "कौन सी CSS प्रॉपर्टी टेबल सेल्स की चौड़ाई को फिक्स्ड या डायनेमिक बनाने की अनुमति देती है?",
    options_en: ["table-layout", "width", "border-collapse", "padding"],
    options_hi: ["टेबल-लेआउट (table-layout)", "चौड़ाई (width)", "बॉर्डर-कॉलैप्स (border-collapse)", "पैडिंग (padding)"],
    answer_en: "table-layout",
    answer_hi: "टेबल-लेआउट (table-layout)",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "What is the default value of the 'border-collapse' property?",
    question_hi: "'border-collapse' प्रॉपर्टी का डिफॉल्ट मान क्या है?",
    options_en: ["separate", "collapse", "hidden", "visible"],
    options_hi: ["सेपरेट (separate)", "कॉलैप्स (collapse)", "हिडन (hidden)", "विज़िबल (visible)"],
    answer_en: "separate",
    answer_hi: "सेपरेट (separate)",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which property can be used to control the overflow of text in table cells?",
    question_hi: "टेबल सेल्स में टेक्स्ट के ओवरफ्लो को नियंत्रित करने के लिए कौन सी प्रॉपर्टी उपयोग होती है?",
    options_en: ["text-overflow", "white-space", "overflow", "word-wrap"],
    options_hi: ["टेक्स्ट-ओवरफ्लो (text-overflow)", "व्हाइट-स्पेस (white-space)", "ओवरफ्लो (overflow)", "वर्ड-रैप (word-wrap)"],
    answer_en: "text-overflow",
    answer_hi: "टेक्स्ट-ओवरफ्लो (text-overflow)",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which CSS property is used to add space between table columns?",
    question_hi: "टेबल कॉलम के बीच जगह बढ़ाने के लिए कौन सी CSS प्रॉपर्टी इस्तेमाल होती है?",
    options_en: ["border-spacing", "padding", "margin", "border-collapse"],
    options_hi: ["सेलों के बीच जगह (border-spacing)", "पैडिंग (padding)", "मार्जिन (margin)", "बॉर्डर-कॉलैप्स (border-collapse)"],
    answer_en: "border-spacing",
    answer_hi: "सेलों के बीच जगह (border-spacing)",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which property specifies the color of the table caption?",
    question_hi: "टेबल कैप्शन का रंग सेट करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["caption-side", "color", "caption-color", "background-color"],
    options_hi: ["कैप्शन-साइड (caption-side)", "रंग (color)", "कैप्शन-रंग (caption-color)", "बैकग्राउंड रंग (background-color)"],
    answer_en: "color",
    answer_hi: "रंग (color)",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which property specifies the placement of the table caption?",
    question_hi: "टेबल कैप्शन की जगह निर्धारित करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["caption-side", "text-align", "vertical-align", "position"],
    options_hi: ["कैप्शन-साइड (caption-side)", "टेक्स्ट-अलाइन (text-align)", "वर्टिकल-अलाइन (vertical-align)", "पोजीशन (position)"],
    answer_en: "caption-side",
    answer_hi: "कैप्शन-साइड (caption-side)",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which property is used to control the spacing between rows in a table?",
    question_hi: "टेबल की पंक्तियों के बीच की जगह को नियंत्रित करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["border-spacing", "border-collapse", "padding", "margin"],
    options_hi: ["सेलों के बीच जगह (border-spacing)", "बॉर्डर-कॉलैप्स (border-collapse)", "पैडिंग (padding)", "मार्जिन (margin)"],
    answer_en: "border-spacing",
    answer_hi: "सेलों के बीच जगह (border-spacing)",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "What does the 'table-layout: fixed' property do?",
    question_hi: "'table-layout: fixed' प्रॉपर्टी क्या करती है?",
    options_en: [
      "Fixes the table layout based on fixed column widths",
      "Adjusts column widths automatically based on content",
      "Hides table borders",
      "Adds padding inside cells"
    ],
    options_hi: [
      "फिक्स्ड कॉलम चौड़ाई पर आधारित टेबल लेआउट तय करती है",
      "कंटेंट के आधार पर कॉलम चौड़ाई को ऑटोमैटिकली एडजस्ट करती है",
      "टेबल बॉर्डर छुपाती है",
      "सेलों के अंदर पैडिंग जोड़ती है"
    ],
    answer_en: "Fixes the table layout based on fixed column widths",
    answer_hi: "फिक्स्ड कॉलम चौड़ाई पर आधारित टेबल लेआउट तय करती है",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which property can be used to add borders to individual table cells?",
    question_hi: "टेबल की व्यक्तिगत सेल्स को बॉर्डर देने के लिए कौन सी प्रॉपर्टी इस्तेमाल होती है?",
    options_en: ["border", "border-spacing", "margin", "padding"],
    options_hi: ["बॉर्डर (border)", "सेलों के बीच जगह (border-spacing)", "मार्जिन (margin)", "पैडिंग (padding)"],
    answer_en: "border",
    answer_hi: "बॉर्डर (border)",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which property allows you to set the maximum width of a table?",
    question_hi: "टेबल की अधिकतम चौड़ाई सेट करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["max-width", "width", "min-width", "table-layout"],
    options_hi: ["मैक्स-चौड़ाई (max-width)", "चौड़ाई (width)", "मिन-चौड़ाई (min-width)", "टेबल-लेआउट (table-layout)"],
    answer_en: "max-width",
    answer_hi: "मैक्स-चौड़ाई (max-width)",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "How do you specify a dashed border style for table cells?",
    question_hi: "टेबल सेल्स के लिए डैश्ड बॉर्डर स्टाइल कैसे सेट करते हैं?",
    options_en: ["border-style: dashed", "border-style: solid", "border-style: dotted", "border-style: double"],
    options_hi: [
      "border-style: dashed",
      "border-style: solid",
      "border-style: dotted",
      "border-style: double"
    ],
    answer_en: "border-style: dashed",
    answer_hi: "border-style: dashed",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which property controls the space between the content and the border inside table cells?",
    question_hi: "टेबल सेल के अंदर कंटेंट और बॉर्डर के बीच की जगह को कौन सी प्रॉपर्टी नियंत्रित करती है?",
    options_en: ["padding", "margin", "border-spacing", "border-width"],
    options_hi: ["पैडिंग (padding)", "मार्जिन (margin)", "सेलों के बीच जगह (border-spacing)", "बॉर्डर की मोटाई (border-width)"],
    answer_en: "padding",
    answer_hi: "पैडिंग (padding)",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which property is used to specify the table’s border color?",
    question_hi: "टेबल के बॉर्डर का रंग सेट करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["border-color", "background-color", "color", "border-style"],
    options_hi: ["बॉर्डर रंग (border-color)", "बैकग्राउंड रंग (background-color)", "रंग (color)", "बॉर्डर-स्टाइल (border-style)"],
    answer_en: "border-color",
    answer_hi: "बॉर्डर रंग (border-color)",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which property sets the border radius of table cells to create rounded corners?",
    question_hi: "टेबल सेल्स के कोनों को गोल बनाने के लिए कौन सी प्रॉपर्टी उपयोग होती है?",
    options_en: ["border-radius", "border-width", "border-style", "border-color"],
    options_hi: ["बॉर्डर-रेडियस (border-radius)", "बॉर्डर की मोटाई (border-width)", "बॉर्डर-स्टाइल (border-style)", "बॉर्डर रंग (border-color)"],
    answer_en: "border-radius",
    answer_hi: "बॉर्डर-रेडियस (border-radius)",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which property controls the font style inside table cells?",
    question_hi: "टेबल सेल्स के अंदर फॉन्ट स्टाइल को नियंत्रित करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["font-style", "font-weight", "font-family", "text-align"],
    options_hi: ["फॉन्ट-स्टाइल (font-style)", "फॉन्ट-वेट (font-weight)", "फॉन्ट-फैमिली (font-family)", "टेक्स्ट-अलाइन (text-align)"],
    answer_en: "font-style",
    answer_hi: "फॉन्ट-स्टाइल (font-style)",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which property sets the font weight inside table cells?",
    question_hi: "टेबल सेल्स के अंदर फॉन्ट वेट सेट करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["font-weight", "font-style", "font-family", "text-align"],
    options_hi: ["फॉन्ट-वेट (font-weight)", "फॉन्ट-स्टाइल (font-style)", "फॉन्ट-फैमिली (font-family)", "टेक्स्ट-अलाइन (text-align)"],
    answer_en: "font-weight",
    answer_hi: "फॉन्ट-वेट (font-weight)",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which property sets the font family for text inside table cells?",
    question_hi: "टेबल सेल्स के अंदर टेक्स्ट के लिए फॉन्ट फैमिली सेट करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["font-family", "font-style", "font-weight", "text-align"],
    options_hi: ["फॉन्ट-फैमिली (font-family)", "फॉन्ट-स्टाइल (font-style)", "फॉन्ट-वेट (font-weight)", "टेक्स्ट-अलाइन (text-align)"],
    answer_en: "font-family",
    answer_hi: "फॉन्ट-फैमिली (font-family)",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which property sets the text color inside table cells?",
    question_hi: "टेबल सेल्स के अंदर टेक्स्ट का रंग सेट करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["color", "background-color", "border-color", "text-align"],
    options_hi: ["रंग (color)", "बैकग्राउंड रंग (background-color)", "बॉर्डर रंग (border-color)", "टेक्स्ट-अलाइन (text-align)"],
    answer_en: "color",
    answer_hi: "रंग (color)",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which property controls the visibility of table borders?",
    question_hi: "टेबल बॉर्डर की दृश्यता को नियंत्रित करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["border-style", "border-width", "border-color", "border-collapse"],
    options_hi: ["बॉर्डर-स्टाइल (border-style)", "बॉर्डर की मोटाई (border-width)", "बॉर्डर रंग (border-color)", "बॉर्डर-कॉलैप्स (border-collapse)"],
    answer_en: "border-style",
    answer_hi: "बॉर्डर-स्टाइल (border-style)",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which property can be used to hide table borders without removing the border style?",
    question_hi: "बॉर्डर स्टाइल हटाए बिना टेबल बॉर्डर को छुपाने के लिए कौन सी प्रॉपर्टी इस्तेमाल होती है?",
    options_en: ["border-color: transparent", "border-style: none", "border-width: 0", "border-collapse: collapse"],
    options_hi: [
      "border-color: transparent",
      "border-style: none",
      "border-width: 0",
      "बॉर्डर-कॉलैप्स: कॉलैप्स (border-collapse: collapse)"
    ],
    answer_en: "border-color: transparent",
    answer_hi: "border-color: transparent",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which property can be used to add a background color to an entire table?",
    question_hi: "पूरे टेबल के लिए बैकग्राउंड रंग जोड़ने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["background-color", "border-color", "color", "border-style"],
    options_hi: ["बैकग्राउंड रंग (background-color)", "बॉर्डर रंग (border-color)", "रंग (color)", "बॉर्डर-स्टाइल (border-style)"],
    answer_en: "background-color",
    answer_hi: "बैकग्राउंड रंग (background-color)",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which property defines how table content is aligned horizontally by default?",
    question_hi: "डिफॉल्ट रूप से टेबल कंटेंट की क्षैतिज संरेखण कैसे होती है?",
    options_en: ["left", "center", "right", "justify"],
    options_hi: ["लेफ्ट (left)", "सेंटर (center)", "राइट (right)", "जस्टिफाई (justify)"],
    answer_en: "left",
    answer_hi: "लेफ्ट (left)",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which CSS property can be used to set spacing between the borders of adjacent table cells?",
    question_hi: "निकटवर्ती टेबल सेल्स के बॉर्डर्स के बीच जगह सेट करने वाली CSS प्रॉपर्टी कौन सी है?",
    options_en: ["border-spacing", "padding", "margin", "border-collapse"],
    options_hi: ["सेलों के बीच जगह (border-spacing)", "पैडिंग (padding)", "मार्जिन (margin)", "बॉर्डर-कॉलैप्स (border-collapse)"],
    answer_en: "border-spacing",
    answer_hi: "सेलों के बीच जगह (border-spacing)",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which property is used to set the width of table columns individually?",
    question_hi: "टेबल कॉलम की चौड़ाई व्यक्तिगत रूप से सेट करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["width", "min-width", "max-width", "table-layout"],
    options_hi: ["चौड़ाई (width)", "मिन-चौड़ाई (min-width)", "मैक्स-चौड़ाई (max-width)", "टेबल-लेआउट (table-layout)"],
    answer_en: "width",
    answer_hi: "चौड़ाई (width)",
    attempted: false,
    selected: ""
  }
      ],
      23:[
        {
    num: 1,
    question_en: "Which CSS property is used to apply a 2D or 3D transformation to an element?",
    question_hi: "किस CSS प्रॉपर्टी का उपयोग किसी एलिमेंट पर 2D या 3D ट्रांसफॉर्मेशन लागू करने के लिए किया जाता है?",
    options_en: ["transform", "transition", "animation", "transform-origin"],
    options_hi: ["ट्रांसफॉर्म (transform)", "ट्रांजिशन (transition)", "एनिमेशन (animation)", "ट्रांसफॉर्म-ओरिजिन (transform-origin)"],
    answer_en: "transform",
    answer_hi: "ट्रांसफॉर्म (transform)",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which property controls the spacing between lines of text?",
    question_hi: "कौन-सी प्रॉपर्टी टेक्स्ट की पंक्तियों के बीच की दूरी को नियंत्रित करती है?",
    options_en: ["line-height", "letter-spacing", "word-spacing", "text-indent"],
    options_hi: ["लाइन-हाइट (line-height)", "लेटर-स्पेसिंग (letter-spacing)", "वर्ड-स्पेसिंग (word-spacing)", "टेक्स्ट-इंडेंट (text-indent)"],
    answer_en: "line-height",
    answer_hi: "लाइन-हाइट (line-height)",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which CSS property is used to change the background color of an element?",
    question_hi: "किस CSS प्रॉपर्टी का उपयोग किसी एलिमेंट के बैकग्राउंड रंग को बदलने के लिए किया जाता है?",
    options_en: ["background-color", "color", "background-image", "border-color"],
    options_hi: ["बैकग्राउंड-कलर (background-color)", "कलर (color)", "बैकग्राउंड-इमेज (background-image)", "बॉर्डर-कलर (border-color)"],
    answer_en: "background-color",
    answer_hi: "बैकग्राउंड-कलर (background-color)",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which property defines the style of the border around an element?",
    question_hi: "कौन-सी प्रॉपर्टी किसी एलिमेंट के चारों ओर बॉर्डर का स्टाइल निर्धारित करती है?",
    options_en: ["border-style", "border-width", "border-color", "border-radius"],
    options_hi: ["बॉर्डर-स्टाइल (border-style)", "बॉर्डर-विथ (border-width)", "बॉर्डर-कलर (border-color)", "बॉर्डर-रेडियस (border-radius)"],
    answer_en: "border-style",
    answer_hi: "बॉर्डर-स्टाइल (border-style)",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which CSS property is used to control the transparency of an element?",
    question_hi: "किस CSS प्रॉपर्टी का उपयोग किसी एलिमेंट की पारदर्शिता को नियंत्रित करने के लिए किया जाता है?",
    options_en: ["opacity", "visibility", "display", "z-index"],
    options_hi: ["अपैसिटी (opacity)", "विजिबिलिटी (visibility)", "डिस्प्ले (display)", "जेड-इंडेक्स (z-index)"],
    answer_en: "opacity",
    answer_hi: "अपैसिटी (opacity)",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which property is used to make the text bold in CSS?",
    question_hi: "CSS में टेक्स्ट को बोल्ड बनाने के लिए कौन-सी प्रॉपर्टी का उपयोग किया जाता है?",
    options_en: ["font-weight", "font-style", "text-decoration", "text-transform"],
    options_hi: ["फॉन्ट-वेट (font-weight)", "फॉन्ट-स्टाइल (font-style)", "टेक्स्ट-डेकोरेशन (text-decoration)", "टेक्स्ट-ट्रांसफॉर्म (text-transform)"],
    answer_en: "font-weight",
    answer_hi: "फॉन्ट-वेट (font-weight)",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which CSS property is used to change the font size?",
    question_hi: "किस CSS प्रॉपर्टी का उपयोग फॉन्ट का आकार बदलने के लिए किया जाता है?",
    options_en: ["font-size", "font-family", "font-weight", "font-style"],
    options_hi: ["फॉन्ट-साइज (font-size)", "फॉन्ट-फैमिली (font-family)", "फॉन्ट-वेट (font-weight)", "फॉन्ट-स्टाइल (font-style)"],
    answer_en: "font-size",
    answer_hi: "फॉन्ट-साइज (font-size)",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which property specifies how an element is displayed on the page?",
    question_hi: "कौन-सी प्रॉपर्टी यह बताती है कि पेज पर किसी एलिमेंट को कैसे प्रदर्शित किया जाए?",
    options_en: ["display", "visibility", "position", "float"],
    options_hi: ["डिस्प्ले (display)", "विजिबिलिटी (visibility)", "पोजीशन (position)", "फ्लोट (float)"],
    answer_en: "display",
    answer_hi: "डिस्प्ले (display)",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which property is used to position an element relative to its normal position?",
    question_hi: "कौन-सी प्रॉपर्टी का उपयोग एलिमेंट को उसके सामान्य स्थान के सापेक्ष पोजीशन करने के लिए किया जाता है?",
    options_en: ["position", "top", "left", "z-index"],
    options_hi: ["पोजीशन (position)", "टॉप (top)", "लेफ्ट (left)", "जेड-इंडेक्स (z-index)"],
    answer_en: "position",
    answer_hi: "पोजीशन (position)",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which CSS property controls the space inside an element between its content and its border?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एलिमेंट के अंदर उसके कंटेंट और बॉर्डर के बीच की जगह को नियंत्रित करती है?",
    options_en: ["padding", "margin", "border", "spacing"],
    options_hi: ["पैडिंग (padding)", "मार्जिन (margin)", "बॉर्डर (border)", "स्पेसिंग (spacing)"],
    answer_en: "padding",
    answer_hi: "पैडिंग (padding)",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which property controls the space outside an element's border?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट के बॉर्डर के बाहर की जगह को नियंत्रित करती है?",
    options_en: ["margin", "padding", "border", "spacing"],
    options_hi: ["मार्जिन (margin)", "पैडिंग (padding)", "बॉर्डर (border)", "स्पेसिंग (spacing)"],
    answer_en: "margin",
    answer_hi: "मार्जिन (margin)",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which property defines the font family of the text?",
    question_hi: "कौन-सी प्रॉपर्टी टेक्स्ट के फॉन्ट फैमिली को निर्धारित करती है?",
    options_en: ["font-family", "font-size", "font-weight", "font-style"],
    options_hi: ["फॉन्ट-फैमिली (font-family)", "फॉन्ट-साइज (font-size)", "फॉन्ट-वेट (font-weight)", "फॉन्ट-स्टाइल (font-style)"],
    answer_en: "font-family",
    answer_hi: "फॉन्ट-फैमिली (font-family)",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which CSS property controls the stacking order of overlapping elements?",
    question_hi: "कौन-सी CSS प्रॉपर्टी ओवरलैपिंग एलिमेंट्स के स्टैकिंग ऑर्डर को नियंत्रित करती है?",
    options_en: ["z-index", "opacity", "visibility", "position"],
    options_hi: ["जेड-इंडेक्स (z-index)", "अपैसिटी (opacity)", "विजिबिलिटी (visibility)", "पोजीशन (position)"],
    answer_en: "z-index",
    answer_hi: "जेड-इंडेक्स (z-index)",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which property is used to make an element invisible but still take up space?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट को अदृश्य तो बनाती है लेकिन उसकी जगह बनाए रखती है?",
    options_en: ["visibility", "display", "opacity", "z-index"],
    options_hi: ["विजिबिलिटी (visibility)", "डिस्प्ले (display)", "अपैसिटी (opacity)", "जेड-इंडेक्स (z-index)"],
    answer_en: "visibility",
    answer_hi: "विजिबिलिटी (visibility)",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which CSS property is used to add space between letters?",
    question_hi: "कौन-सी CSS प्रॉपर्टी अक्षरों के बीच जगह जोड़ने के लिए उपयोग होती है?",
    options_en: ["letter-spacing", "word-spacing", "line-height", "text-indent"],
    options_hi: ["लेटर-स्पेसिंग (letter-spacing)", "वर्ड-स्पेसिंग (word-spacing)", "लाइन-हाइट (line-height)", "टेक्स्ट-इंडेंट (text-indent)"],
    answer_en: "letter-spacing",
    answer_hi: "लेटर-स्पेसिंग (letter-spacing)",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which property controls how text is transformed (uppercase, lowercase, capitalize)?",
    question_hi: "कौन-सी प्रॉपर्टी टेक्स्ट को अपरकेस, लोअरकेस या कैपिटलाइज़ करती है?",
    options_en: ["text-transform", "text-decoration", "font-style", "font-weight"],
    options_hi: ["टेक्स्ट-ट्रांसफॉर्म (text-transform)", "टेक्स्ट-डेकोरेशन (text-decoration)", "फॉन्ट-स्टाइल (font-style)", "फॉन्ट-वेट (font-weight)"],
    answer_en: "text-transform",
    answer_hi: "टेक्स्ट-ट्रांसफॉर्म (text-transform)",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which property is used to underline text in CSS?",
    question_hi: "CSS में टेक्स्ट को अंडरलाइन करने के लिए कौन-सी प्रॉपर्टी का उपयोग किया जाता है?",
    options_en: ["text-decoration", "text-transform", "font-weight", "font-style"],
    options_hi: ["टेक्स्ट-डेकोरेशन (text-decoration)", "टेक्स्ट-ट्रांसफॉर्म (text-transform)", "फॉन्ट-वेट (font-weight)", "फॉन्ट-स्टाइल (font-style)"],
    answer_en: "text-decoration",
    answer_hi: "टेक्स्ट-डेकोरेशन (text-decoration)",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which CSS property allows you to set the distance between words?",
    question_hi: "कौन-सी CSS प्रॉपर्टी शब्दों के बीच की दूरी सेट करने की अनुमति देती है?",
    options_en: ["word-spacing", "letter-spacing", "line-height", "text-indent"],
    options_hi: ["वर्ड-स्पेसिंग (word-spacing)", "लेटर-स्पेसिंग (letter-spacing)", "लाइन-हाइट (line-height)", "टेक्स्ट-इंडेंट (text-indent)"],
    answer_en: "word-spacing",
    answer_hi: "वर्ड-स्पेसिंग (word-spacing)",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which property specifies the type of cursor to be displayed when hovering over an element?",
    question_hi: "कौन-सी प्रॉपर्टी यह बताती है कि किसी एलिमेंट पर माउस ले जाने पर कौन सा कर्सर दिखेगा?",
    options_en: ["cursor", "pointer-events", "hover", "display"],
    options_hi: ["कर्सर (cursor)", "पॉइंटर-इवेंट्स (pointer-events)", "होवर (hover)", "डिस्प्ले (display)"],
    answer_en: "cursor",
    answer_hi: "कर्सर (cursor)",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which property is used to float elements to the left or right?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट्स को बाएं या दाएं फ्लोट करने के लिए उपयोग होती है?",
    options_en: ["float", "position", "clear", "display"],
    options_hi: ["फ्लोट (float)", "पोजीशन (position)", "क्लियर (clear)", "डिस्प्ले (display)"],
    answer_en: "float",
    answer_hi: "फ्लोट (float)",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which property clears floated elements?",
    question_hi: "कौन-सी प्रॉपर्टी फ्लोट किए गए एलिमेंट्स को क्लियर करती है?",
    options_en: ["clear", "float", "display", "position"],
    options_hi: ["क्लियर (clear)", "फ्लोट (float)", "डिस्प्ले (display)", "पोजीशन (position)"],
    answer_en: "clear",
    answer_hi: "क्लियर (clear)",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which property sets the maximum width of an element?",
    question_hi: "कौन-सी प्रॉपर्टी किसी एलिमेंट की अधिकतम चौड़ाई सेट करती है?",
    options_en: ["max-width", "min-width", "width", "height"],
    options_hi: ["मैक्स-विथ (max-width)", "मिन-विथ (min-width)", "विड्थ (width)", "हाइट (height)"],
    answer_en: "max-width",
    answer_hi: "मैक्स-विथ (max-width)",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which property sets the stacking context to create a new stacking order?",
    question_hi: "कौन-सी प्रॉपर्टी नया स्टैकिंग ऑर्डर बनाने के लिए स्टैकिंग कॉन्टेक्स्ट सेट करती है?",
    options_en: ["position", "z-index", "opacity", "display"],
    options_hi: ["पोजीशन (position)", "जेड-इंडेक्स (z-index)", "अपैसिटी (opacity)", "डिस्प्ले (display)"],
    answer_en: "position",
    answer_hi: "पोजीशन (position)",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which property is used to add animation to an element in CSS?",
    question_hi: "CSS में किसी एलिमेंट में एनिमेशन जोड़ने के लिए कौन-सी प्रॉपर्टी का उपयोग किया जाता है?",
    options_en: ["animation", "transition", "transform", "keyframes"],
    options_hi: ["एनिमेशन (animation)", "ट्रांजिशन (transition)", "ट्रांसफॉर्म (transform)", "कीफ्रेम्स (keyframes)"],
    answer_en: "animation",
    answer_hi: "एनिमेशन (animation)",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which property specifies the duration of a CSS transition?",
    question_hi: "कौन-सी प्रॉपर्टी CSS ट्रांजिशन की अवधि निर्धारित करती है?",
    options_en: ["transition-duration", "animation-duration", "transition-delay", "animation-delay"],
    options_hi: ["ट्रांजिशन-ड्यूरेशन (transition-duration)", "एनिमेशन-ड्यूरेशन (animation-duration)", "ट्रांजिशन-डिले (transition-delay)", "एनिमेशन-डिले (animation-delay)"],
    answer_en: "transition-duration",
    answer_hi: "ट्रांजिशन-ड्यूरेशन (transition-duration)",
    attempted: false,
    selected: ""
  },
   {
    num: 26,
    question_en: "Which property controls the delay before a CSS transition starts?",
    question_hi: "कौन-सी प्रॉपर्टी CSS ट्रांजिशन शुरू होने से पहले की देरी को नियंत्रित करती है?",
    options_en: ["transition-delay", "transition-duration", "animation-delay", "animation-duration"],
    options_hi: ["ट्रांजिशन-डिले (transition-delay)", "ट्रांजिशन-ड्यूरेशन (transition-duration)", "एनिमेशन-डिले (animation-delay)", "एनिमेशन-ड्यूरेशन (animation-duration)"],
    answer_en: "transition-delay",
    answer_hi: "ट्रांजिशन-डिले (transition-delay)",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which property is used to specify the timing function of a CSS transition?",
    question_hi: "कौन-सी प्रॉपर्टी CSS ट्रांजिशन के टाइमिंग फंक्शन को निर्दिष्ट करती है?",
    options_en: ["transition-timing-function", "transition-delay", "animation-timing-function", "animation-delay"],
    options_hi: ["ट्रांजिशन-टाइमिंग-फंक्शन (transition-timing-function)", "ट्रांजिशन-डिले (transition-delay)", "एनिमेशन-टाइमिंग-फंक्शन (animation-timing-function)", "एनिमेशन-डिले (animation-delay)"],
    answer_en: "transition-timing-function",
    answer_hi: "ट्रांजिशन-टाइमिंग-फंक्शन (transition-timing-function)",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which CSS property is used to specify the type of positioning method used for an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एलिमेंट के लिए पोजिशनिंग विधि का प्रकार निर्दिष्ट करती है?",
    options_en: ["position", "display", "float", "clear"],
    options_hi: ["पोजीशन (position)", "डिस्प्ले (display)", "फ्लोट (float)", "क्लियर (clear)"],
    answer_en: "position",
    answer_hi: "पोजीशन (position)",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "What value of the position property allows an element to be positioned relative to the nearest positioned ancestor?",
    question_hi: "पोजीशन प्रॉपर्टी का कौन सा मान एलिमेंट को उसके सबसे नजदीकी पोजीशन्ड एंसेस्टर के सापेक्ष पोजीशन करने देता है?",
    options_en: ["relative", "absolute", "fixed", "static"],
    options_hi: ["रिलेटिव (relative)", "एब्सोल्यूट (absolute)", "फिक्स्ड (fixed)", "स्टैटिक (static)"],
    answer_en: "relative",
    answer_hi: "रिलेटिव (relative)",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which position value fixes an element relative to the viewport?",
    question_hi: "कौन-सा पोजीशन मान एलिमेंट को व्यूपोर्ट के सापेक्ष फिक्स करता है?",
    options_en: ["fixed", "absolute", "relative", "static"],
    options_hi: ["फिक्स्ड (fixed)", "एब्सोल्यूट (absolute)", "रिलेटिव (relative)", "स्टैटिक (static)"],
    answer_en: "fixed",
    answer_hi: "फिक्स्ड (fixed)",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which property specifies the stacking order of positioned elements?",
    question_hi: "कौन-सी प्रॉपर्टी पोजीशन्ड एलिमेंट्स के स्टैकिंग ऑर्डर को निर्दिष्ट करती है?",
    options_en: ["z-index", "opacity", "display", "visibility"],
    options_hi: ["जेड-इंडेक्स (z-index)", "अपैसिटी (opacity)", "डिस्प्ले (display)", "विजिबिलिटी (visibility)"],
    answer_en: "z-index",
    answer_hi: "जेड-इंडेक्स (z-index)",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which CSS property controls the size of the font in an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी किसी एलिमेंट में फॉन्ट के आकार को नियंत्रित करती है?",
    options_en: ["font-size", "font-family", "font-weight", "font-style"],
    options_hi: ["फॉन्ट-साइज (font-size)", "फॉन्ट-फैमिली (font-family)", "फॉन्ट-वेट (font-weight)", "फॉन्ट-स्टाइल (font-style)"],
    answer_en: "font-size",
    answer_hi: "फॉन्ट-साइज (font-size)",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which property controls the font style such as italic or normal?",
    question_hi: "कौन-सी प्रॉपर्टी फॉन्ट स्टाइल को नियंत्रित करती है जैसे इटैलिक या सामान्य?",
    options_en: ["font-style", "font-weight", "font-family", "text-decoration"],
    options_hi: ["फॉन्ट-स्टाइल (font-style)", "फॉन्ट-वेट (font-weight)", "फॉन्ट-फैमिली (font-family)", "टेक्स्ट-डेकोरेशन (text-decoration)"],
    answer_en: "font-style",
    answer_hi: "फॉन्ट-स्टाइल (font-style)",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which CSS property specifies whether an element is visible or hidden?",
    question_hi: "कौन-सी CSS प्रॉपर्टी निर्दिष्ट करती है कि कोई एलिमेंट दिखेगा या छिपा रहेगा?",
    options_en: ["visibility", "display", "opacity", "z-index"],
    options_hi: ["विजिबिलिटी (visibility)", "डिस्प्ले (display)", "अपैसिटी (opacity)", "जेड-इंडेक्स (z-index)"],
    answer_en: "visibility",
    answer_hi: "विजिबिलिटी (visibility)",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which value of the display property hides an element and removes it from the document flow?",
    question_hi: "डिस्प्ले प्रॉपर्टी का कौन सा मान एलिमेंट को छिपाता है और इसे डॉक्यूमेंट फ्लो से हटा देता है?",
    options_en: ["none", "block", "inline", "inline-block"],
    options_hi: ["नन (none)", "ब्लॉक (block)", "इनलाइन (inline)", "इनलाइन-ब्लॉक (inline-block)"],
    answer_en: "none",
    answer_hi: "नन (none)",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which CSS property is used to set the background image of an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एलिमेंट की बैकग्राउंड इमेज सेट करने के लिए उपयोग होती है?",
    options_en: ["background-image", "background-color", "border-image", "image"],
    options_hi: ["बैकग्राउंड-इमेज (background-image)", "बैकग्राउंड-कलर (background-color)", "बॉर्डर-इमेज (border-image)", "इमेज (image)"],
    answer_en: "background-image",
    answer_hi: "बैकग्राउंड-इमेज (background-image)",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which CSS property defines the transparency level of an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एलिमेंट की पारदर्शिता स्तर को परिभाषित करती है?",
    options_en: ["opacity", "visibility", "filter", "z-index"],
    options_hi: ["अपैसिटी (opacity)", "विजिबिलिटी (visibility)", "फिल्टर (filter)", "जेड-इंडेक्स (z-index)"],
    answer_en: "opacity",
    answer_hi: "अपैसिटी (opacity)",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which CSS property controls the space between characters in text?",
    question_hi: "कौन-सी CSS प्रॉपर्टी टेक्स्ट में अक्षरों के बीच की जगह को नियंत्रित करती है?",
    options_en: ["letter-spacing", "word-spacing", "line-height", "text-indent"],
    options_hi: ["लेटर-स्पेसिंग (letter-spacing)", "वर्ड-स्पेसिंग (word-spacing)", "लाइन-हाइट (line-height)", "टेक्स्ट-इंडेंट (text-indent)"],
    answer_en: "letter-spacing",
    answer_hi: "लेटर-स्पेसिंग (letter-spacing)",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which property defines the shape of an element's corners?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट के कॉर्नर्स के आकार को परिभाषित करती है?",
    options_en: ["border-radius", "border-style", "border-width", "border-color"],
    options_hi: ["बॉर्डर-रेडियस (border-radius)", "बॉर्डर-स्टाइल (border-style)", "बॉर्डर-विथ (border-width)", "बॉर्डर-कलर (border-color)"],
    answer_en: "border-radius",
    answer_hi: "बॉर्डर-रेडियस (border-radius)",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which property is used to create rounded corners on an element?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट पर गोल कोनों को बनाने के लिए उपयोग होती है?",
    options_en: ["border-radius", "border-width", "border-color", "border-style"],
    options_hi: ["बॉर्डर-रेडियस (border-radius)", "बॉर्डर-विथ (border-width)", "बॉर्डर-कलर (border-color)", "बॉर्डर-स्टाइल (border-style)"],
    answer_en: "border-radius",
    answer_hi: "बॉर्डर-रेडियस (border-radius)",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which CSS property is used to add space between the content and the border of an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी किसी एलिमेंट की सामग्री और बॉर्डर के बीच जगह जोड़ने के लिए उपयोग होती है?",
    options_en: ["padding", "margin", "border", "spacing"],
    options_hi: ["पैडिंग (padding)", "मार्जिन (margin)", "बॉर्डर (border)", "स्पेसिंग (spacing)"],
    answer_en: "padding",
    answer_hi: "पैडिंग (padding)",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which property controls the space outside the border of an element?",
    question_hi: "कौन-सी प्रॉपर्टी एलिमेंट के बॉर्डर के बाहर की जगह को नियंत्रित करती है?",
    options_en: ["margin", "padding", "border", "spacing"],
    options_hi: ["मार्जिन (margin)", "पैडिंग (padding)", "बॉर्डर (border)", "स्पेसिंग (spacing)"],
    answer_en: "margin",
    answer_hi: "मार्जिन (margin)",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which CSS property is used to specify the type of cursor displayed when hovering over an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी यह निर्दिष्ट करती है कि किसी एलिमेंट पर होवर करते समय कौन सा कर्सर दिखाया जाए?",
    options_en: ["cursor", "pointer-events", "hover", "display"],
    options_hi: ["कर्सर (cursor)", "पॉइंटर-इवेंट्स (pointer-events)", "होवर (hover)", "डिस्प्ले (display)"],
    answer_en: "cursor",
    answer_hi: "कर्सर (cursor)",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which property specifies the vertical alignment of an inline or table-cell element?",
    question_hi: "कौन-सी प्रॉपर्टी इनलाइन या टेबल-सेल एलिमेंट की वर्टिकल एलाइन्मेंट को निर्दिष्ट करती है?",
    options_en: ["vertical-align", "text-align", "align-items", "justify-content"],
    options_hi: ["वर्टिकल-एलाइंन (vertical-align)", "टेक्स्ट-एलाइंन (text-align)", "एलाइंन-आइटम्स (align-items)", "जस्टिफाई-कंटेंट (justify-content)"],
    answer_en: "vertical-align",
    answer_hi: "वर्टिकल-एलाइंन (vertical-align)",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which CSS property sets the alignment of text inside an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी किसी एलिमेंट के अंदर टेक्स्ट की एलाइन्मेंट सेट करती है?",
    options_en: ["text-align", "vertical-align", "align-items", "justify-content"],
    options_hi: ["टेक्स्ट-एलाइंन (text-align)", "वर्टिकल-एलाइंन (vertical-align)", "एलाइंन-आइटम्स (align-items)", "जस्टिफाई-कंटेंट (justify-content)"],
    answer_en: "text-align",
    answer_hi: "टेक्स्ट-एलाइंन (text-align)",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which property controls the alignment of flex items along the main axis?",
    question_hi: "कौन-सी प्रॉपर्टी फ्लेक्स आइटम्स को मेन एक्सिस पर एलाइन्मेंट करती है?",
    options_en: ["justify-content", "align-items", "align-content", "flex-direction"],
    options_hi: ["जस्टिफाई-कंटेंट (justify-content)", "एलाइंन-आइटम्स (align-items)", "एलाइंन-कंटेंट (align-content)", "फ्लेक्स-डायरेक्शन (flex-direction)"],
    answer_en: "justify-content",
    answer_hi: "जस्टिफाई-कंटेंट (justify-content)",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which property controls the alignment of flex items along the cross axis?",
    question_hi: "कौन-सी प्रॉपर्टी फ्लेक्स आइटम्स को क्रॉस एक्सिस पर एलाइन्मेंट करती है?",
    options_en: ["align-items", "justify-content", "align-content", "flex-direction"],
    options_hi: ["एलाइंन-आइटम्स (align-items)", "जस्टिफाई-कंटेंट (justify-content)", "एलाइंन-कंटेंट (align-content)", "फ्लेक्स-डायरेक्शन (flex-direction)"],
    answer_en: "align-items",
    answer_hi: "एलाइंन-आइटम्स (align-items)",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which property defines the direction of the flex container's main axis?",
    question_hi: "कौन-सी प्रॉपर्टी फ्लेक्स कंटेनर के मेन एक्सिस की दिशा को परिभाषित करती है?",
    options_en: ["flex-direction", "flex-wrap", "justify-content", "align-items"],
    options_hi: ["फ्लेक्स-डायरेक्शन (flex-direction)", "फ्लेक्स-व्रैप (flex-wrap)", "जस्टिफाई-कंटेंट (justify-content)", "एलाइंन-आइटम्स (align-items)"],
    answer_en: "flex-direction",
    answer_hi: "फ्लेक्स-डायरेक्शन (flex-direction)",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which property specifies whether flex items should wrap or not?",
    question_hi: "कौन-सी प्रॉपर्टी यह निर्दिष्ट करती है कि फ्लेक्स आइटम्स रैप करें या नहीं?",
    options_en: ["flex-wrap", "flex-direction", "justify-content", "align-items"],
    options_hi: ["फ्लेक्स-व्रैप (flex-wrap)", "फ्लेक्स-डायरेक्शन (flex-direction)", "जस्टिफाई-कंटेंट (justify-content)", "एलाइंन-आइटम्स (align-items)"],
    answer_en: "flex-wrap",
    answer_hi: "फ्लेक्स-व्रैप (flex-wrap)",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which CSS property specifies the background position of an element?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एलिमेंट के बैकग्राउंड की स्थिति को निर्दिष्ट करती है?",
    options_en: ["background-position", "background-size", "background-repeat", "background-attachment"],
    options_hi: ["बैकग्राउंड-पोजीशन (background-position)", "बैकग्राउंड-साइज़ (background-size)", "बैकग्राउंड-रिपीट (background-repeat)", "बैकग्राउंड-अटैचमेंट (background-attachment)"],
    answer_en: "background-position",
    answer_hi: "बैकग्राउंड-पोजीशन (background-position)",
    attempted: false,
    selected: ""
  } 
      ],
      24:[
      {
    num: 1,
    question_en: "Which CSS property is used to create a transition effect?",
    question_hi: "ट्रांजिशन इफेक्ट बनाने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    options_en: ["transition", "transform", "animation", "filter"],
    options_hi: ["ट्रांजिशन (transition)", "ट्रांसफॉर्म (transform)", "एनिमेशन (animation)", "फिल्टर (filter)"],
    answer_en: "transition",
    answer_hi: "ट्रांजिशन (transition)",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which property controls the duration of a CSS transition?",
    question_hi: "CSS ट्रांजिशन की अवधि को नियंत्रित करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["transition-duration", "transition-delay", "animation-duration", "animation-delay"],
    options_hi: ["ट्रांजिशन-ड्यूरेशन (transition-duration)", "ट्रांजिशन-डिले (transition-delay)", "एनिमेशन-ड्यूरेशन (animation-duration)", "एनिमेशन-डिले (animation-delay)"],
    answer_en: "transition-duration",
    answer_hi: "ट्रांजिशन-ड्यूरेशन (transition-duration)",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which property defines the CSS properties to which the transition effect applies?",
    question_hi: "CSS प्रॉपर्टीज़ को कौन-सी प्रॉपर्टी निर्दिष्ट करती है जिन पर ट्रांजिशन प्रभाव लागू होता है?",
    options_en: ["transition-property", "transition-duration", "animation-name", "animation-timing-function"],
    options_hi: ["ट्रांजिशन-प्रॉपर्टी (transition-property)", "ट्रांजिशन-ड्यूरेशन (transition-duration)", "एनिमेशन-नाम (animation-name)", "एनिमेशन-टाइमिंग-फंक्शन (animation-timing-function)"],
    answer_en: "transition-property",
    answer_hi: "ट्रांजिशन-प्रॉपर्टी (transition-property)",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which property controls the timing function of a CSS transition?",
    question_hi: "CSS ट्रांजिशन के टाइमिंग फंक्शन को कौन-सी प्रॉपर्टी नियंत्रित करती है?",
    options_en: ["transition-timing-function", "animation-timing-function", "transition-delay", "animation-delay"],
    options_hi: ["ट्रांजिशन-टाइमिंग-फंक्शन (transition-timing-function)", "एनिमेशन-टाइमिंग-फंक्शन (animation-timing-function)", "ट्रांजिशन-डिले (transition-delay)", "एनिमेशन-डिले (animation-delay)"],
    answer_en: "transition-timing-function",
    answer_hi: "ट्रांजिशन-टाइमिंग-फंक्शन (transition-timing-function)",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which CSS property specifies the delay before a transition starts?",
    question_hi: "ट्रांजिशन शुरू होने से पहले की देरी को कौन-सी प्रॉपर्टी नियंत्रित करती है?",
    options_en: ["transition-delay", "animation-delay", "transition-duration", "animation-duration"],
    options_hi: ["ट्रांजिशन-डिले (transition-delay)", "एनिमेशन-डिले (animation-delay)", "ट्रांजिशन-ड्यूरेशन (transition-duration)", "एनिमेशन-ड्यूरेशन (animation-duration)"],
    answer_en: "transition-delay",
    answer_hi: "ट्रांजिशन-डिले (transition-delay)",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which CSS property is used to define animations?",
    question_hi: "एनिमेशन को परिभाषित करने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    options_en: ["animation", "transition", "transform", "filter"],
    options_hi: ["एनिमेशन (animation)", "ट्रांजिशन (transition)", "ट्रांसफॉर्म (transform)", "फिल्टर (filter)"],
    answer_en: "animation",
    answer_hi: "एनिमेशन (animation)",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which property specifies the name of the keyframe animation to be applied?",
    question_hi: "किस प्रॉपर्टी से लागू किए जाने वाले कीफ्रेम एनिमेशन का नाम निर्दिष्ट किया जाता है?",
    options_en: ["animation-name", "animation-duration", "animation-timing-function", "animation-delay"],
    options_hi: ["एनिमेशन-नाम (animation-name)", "एनिमेशन-ड्यूरेशन (animation-duration)", "एनिमेशन-टाइमिंग-फंक्शन (animation-timing-function)", "एनिमेशन-डिले (animation-delay)"],
    answer_en: "animation-name",
    answer_hi: "एनिमेशन-नाम (animation-name)",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which CSS property defines how long an animation takes to complete one cycle?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एनिमेशन के एक चक्र को पूरा करने की अवधि निर्दिष्ट करती है?",
    options_en: ["animation-duration", "animation-delay", "transition-duration", "transition-delay"],
    options_hi: ["एनिमेशन-ड्यूरेशन (animation-duration)", "एनिमेशन-डिले (animation-delay)", "ट्रांजिशन-ड्यूरेशन (transition-duration)", "ट्रांजिशन-डिले (transition-delay)"],
    answer_en: "animation-duration",
    answer_hi: "एनिमेशन-ड्यूरेशन (animation-duration)",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which property controls the speed curve of an animation?",
    question_hi: "कौन-सी प्रॉपर्टी एनिमेशन की स्पीड कर्व को नियंत्रित करती है?",
    options_en: ["animation-timing-function", "animation-delay", "transition-timing-function", "transition-delay"],
    options_hi: ["एनिमेशन-टाइमिंग-फंक्शन (animation-timing-function)", "एनिमेशन-डिले (animation-delay)", "ट्रांजिशन-टाइमिंग-फंक्शन (transition-timing-function)", "ट्रांजिशन-डिले (transition-delay)"],
    answer_en: "animation-timing-function",
    answer_hi: "एनिमेशन-टाइमिंग-फंक्शन (animation-timing-function)",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which CSS property specifies the number of times an animation should play?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एनिमेशन को कितनी बार चलाना है यह निर्धारित करती है?",
    options_en: ["animation-iteration-count", "animation-direction", "animation-fill-mode", "animation-delay"],
    options_hi: ["एनिमेशन-इटरेशन-काउंट (animation-iteration-count)", "एनिमेशन-डायरेक्शन (animation-direction)", "एनिमेशन-फिल-मोड (animation-fill-mode)", "एनिमेशन-डिले (animation-delay)"],
    answer_en: "animation-iteration-count",
    answer_hi: "एनिमेशन-इटरेशन-काउंट (animation-iteration-count)",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which property defines whether the animation should play in reverse on alternate cycles?",
    question_hi: "कौन-सी प्रॉपर्टी निर्दिष्ट करती है कि एनिमेशन वैकल्पिक चक्रों में उल्टी दिशा में चले?",
    options_en: ["animation-direction", "animation-iteration-count", "animation-fill-mode", "animation-delay"],
    options_hi: ["एनिमेशन-डायरेक्शन (animation-direction)", "एनिमेशन-इटरेशन-काउंट (animation-iteration-count)", "एनिमेशन-फिल-मोड (animation-fill-mode)", "एनिमेशन-डिले (animation-delay)"],
    answer_en: "animation-direction",
    answer_hi: "एनिमेशन-डायरेक्शन (animation-direction)",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which CSS property specifies what styles are applied before and after animation execution?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एनिमेशन शुरू होने से पहले और खत्म होने के बाद कौन से स्टाइल्स लागू होंगे यह निर्दिष्ट करती है?",
    options_en: ["animation-fill-mode", "animation-iteration-count", "animation-direction", "animation-delay"],
    options_hi: ["एनिमेशन-फिल-मोड (animation-fill-mode)", "एनिमेशन-इटरेशन-काउंट (animation-iteration-count)", "एनिमेशन-डायरेक्शन (animation-direction)", "एनिमेशन-डिले (animation-delay)"],
    answer_en: "animation-fill-mode",
    answer_hi: "एनिमेशन-फिल-मोड (animation-fill-mode)",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which property specifies the delay before an animation starts?",
    question_hi: "एनिमेशन शुरू होने से पहले की देरी को कौन-सी प्रॉपर्टी नियंत्रित करती है?",
    options_en: ["animation-delay", "transition-delay", "animation-duration", "transition-duration"],
    options_hi: ["एनिमेशन-डिले (animation-delay)", "ट्रांजिशन-डिले (transition-delay)", "एनिमेशन-ड्यूरेशन (animation-duration)", "ट्रांजिशन-ड्यूरेशन (transition-duration)"],
    answer_en: "animation-delay",
    answer_hi: "एनिमेशन-डिले (animation-delay)",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which at-rule is used to define keyframes for CSS animations?",
    question_hi: "CSS एनिमेशन के लिए कीफ्रेम्स को परिभाषित करने के लिए कौन-सा at-rule उपयोग होता है?",
    options_en: ["@keyframes", "@media", "@font-face", "@supports"],
    options_hi: ["@keyframes", "@media", "@font-face", "@supports"],
    answer_en: "@keyframes",
    answer_hi: "@keyframes",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which keyword specifies the start state of an animation in @keyframes?",
    question_hi: "@keyframes में एनिमेशन की प्रारंभिक स्थिति को कौन-सा कीवर्ड निर्दिष्ट करता है?",
    options_en: ["from", "to", "start", "begin"],
    options_hi: ["from", "to", "start", "begin"],
    answer_en: "from",
    answer_hi: "from",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which keyword specifies the end state of an animation in @keyframes?",
    question_hi: "@keyframes में एनिमेशन की अंतिम स्थिति को कौन-सा कीवर्ड निर्दिष्ट करता है?",
    options_en: ["to", "from", "end", "finish"],
    options_hi: ["to", "from", "end", "finish"],
    answer_en: "to",
    answer_hi: "to",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "What is the default value of animation-iteration-count?",
    question_hi: "animation-iteration-count की डिफ़ॉल्ट वैल्यू क्या है?",
    options_en: ["1", "infinite", "0", "auto"],
    options_hi: ["1", "infinite", "0", "auto"],
    answer_en: "1",
    answer_hi: "1",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which property is used to pause and resume CSS animations?",
    question_hi: "CSS एनिमेशन को पॉज और रेज़्यूम करने के लिए कौन-सी प्रॉपर्टी उपयोग होती है?",
    options_en: ["animation-play-state", "animation-delay", "animation-direction", "animation-fill-mode"],
    options_hi: ["एनिमेशन-प्ले-स्टेट (animation-play-state)", "एनिमेशन-डिले (animation-delay)", "एनिमेशन-डायरेक्शन (animation-direction)", "एनिमेशन-फिल-मोड (animation-fill-mode)"],
    answer_en: "animation-play-state",
    answer_hi: "एनिमेशन-प्ले-स्टेट (animation-play-state)",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which value of animation-play-state causes the animation to pause?",
    question_hi: "animation-play-state का कौन-सा मान एनिमेशन को पॉज करता है?",
    options_en: ["paused", "running", "stopped", "halted"],
    options_hi: ["paused", "running", "stopped", "halted"],
    answer_en: "paused",
    answer_hi: "paused",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which value of animation-play-state causes the animation to run?",
    question_hi: "animation-play-state का कौन-सा मान एनिमेशन को चलाता है?",
    options_en: ["running", "paused", "stopped", "halted"],
    options_hi: ["running", "paused", "stopped", "halted"],
    answer_en: "running",
    answer_hi: "running",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which shorthand property can be used to set all animation properties at once?",
    question_hi: "सभी एनिमेशन प्रॉपर्टीज़ को एक साथ सेट करने के लिए कौन-सी शॉर्टहैंड प्रॉपर्टी उपयोग होती है?",
    options_en: ["animation", "transition", "transform", "keyframes"],
    options_hi: ["एनिमेशन (animation)", "ट्रांजिशन (transition)", "ट्रांसफॉर्म (transform)", "कीफ्रेम्स (keyframes)"],
    answer_en: "animation",
    answer_hi: "एनिमेशन (animation)",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which timing function causes an animation to start slowly, speed up, and then slow down at the end?",
    question_hi: "कौन-सी टाइमिंग फंक्शन एनिमेशन को धीरे शुरू करने, तेज करने, और अंत में फिर से धीरे करने का प्रभाव देती है?",
    options_en: ["ease-in-out", "linear", "ease-in", "ease-out"],
    options_hi: ["ease-in-out", "linear", "ease-in", "ease-out"],
    answer_en: "ease-in-out",
    answer_hi: "ease-in-out",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which timing function makes an animation proceed at a constant speed?",
    question_hi: "कौन-सी टाइमिंग फंक्शन एनिमेशन को समान गति से चलाती है?",
    options_en: ["linear", "ease-in", "ease-out", "ease-in-out"],
    options_hi: ["linear", "ease-in", "ease-out", "ease-in-out"],
    answer_en: "linear",
    answer_hi: "linear",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which CSS property specifies whether an animation should play forwards, backwards, or both?",
    question_hi: "कौन-सी CSS प्रॉपर्टी यह निर्दिष्ट करती है कि एनिमेशन आगे, पीछे या दोनों दिशाओं में चले?",
    options_en: ["animation-fill-mode", "animation-direction", "animation-iteration-count", "animation-play-state"],
    options_hi: ["एनिमेशन-फिल-मोड (animation-fill-mode)", "एनिमेशन-डायरेक्शन (animation-direction)", "एनिमेशन-इटरेशन-काउंट (animation-iteration-count)", "एनिमेशन-प्ले-स्टेट (animation-play-state)"],
    answer_en: "animation-fill-mode",
    answer_hi: "एनिमेशन-फिल-मोड (animation-fill-mode)",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which property specifies the easing function for a CSS animation?",
    question_hi: "CSS एनिमेशन के लिए ईजिंग फंक्शन को कौन-सी प्रॉपर्टी निर्दिष्ट करती है?",
    options_en: ["animation-timing-function", "animation-delay", "animation-direction", "animation-iteration-count"],
    options_hi: ["एनिमेशन-टाइमिंग-फंक्शन (animation-timing-function)", "एनिमेशन-डिले (animation-delay)", "एनिमेशन-डायरेक्शन (animation-direction)", "एनिमेशन-इटरेशन-काउंट (animation-iteration-count)"],
    answer_en: "animation-timing-function",
    answer_hi: "एनिमेशन-टाइमिंग-फंक्शन (animation-timing-function)",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Which CSS property can be used to specify multiple transitions?",
    question_hi: "कौन-सी CSS प्रॉपर्टी का उपयोग कई ट्रांजिशन को निर्दिष्ट करने के लिए किया जाता है?",
    options_en: ["transition", "animation", "transform", "transition-property"],
    options_hi: ["ट्रांजिशन (transition)", "एनिमेशन (animation)", "ट्रांसफॉर्म (transform)", "ट्रांजिशन-प्रॉपर्टी (transition-property)"],
    answer_en: "transition",
    answer_hi: "ट्रांजिशन (transition)",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which property defines the delay before a transition starts for multiple transitions individually?",
    question_hi: "कौन-सी प्रॉपर्टी कई ट्रांजिशन के लिए अलग-अलग देरी निर्दिष्ट करती है?",
    options_en: ["transition-delay", "animation-delay", "transition-duration", "animation-duration"],
    options_hi: ["ट्रांजिशन-डिले (transition-delay)", "एनिमेशन-डिले (animation-delay)", "ट्रांजिशन-ड्यूरेशन (transition-duration)", "एनिमेशन-ड्यूरेशन (animation-duration)"],
    answer_en: "transition-delay",
    answer_hi: "ट्रांजिशन-डिले (transition-delay)",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Can CSS transitions animate between multiple CSS property values?",
    question_hi: "क्या CSS ट्रांजिशन कई CSS प्रॉपर्टी मानों के बीच एनिमेट कर सकते हैं?",
    options_en: ["Yes", "No", "Only with JavaScript", "Only with keyframes"],
    options_hi: ["हाँ", "नहीं", "सिर्फ JavaScript के साथ", "सिर्फ कीफ्रेम्स के साथ"],
    answer_en: "Yes",
    answer_hi: "हाँ",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which of these properties cannot be transitioned?",
    question_hi: "इनमें से कौन-सी प्रॉपर्टी ट्रांजिशन नहीं हो सकती?",
    options_en: ["display", "opacity", "color", "height"],
    options_hi: ["डिस्प्ले (display)", "अपारदर्शिता (opacity)", "रंग (color)", "ऊँचाई (height)"],
    answer_en: "display",
    answer_hi: "डिस्प्ले (display)",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which CSS property controls the point of origin for transformations and animations?",
    question_hi: "ट्रांसफॉर्मेशन और एनिमेशन के लिए उत्पत्ति बिंदु को नियंत्रित करने वाली CSS प्रॉपर्टी कौन सी है?",
    options_en: ["transform-origin", "animation-origin", "transition-origin", "transform-position"],
    options_hi: ["ट्रांसफॉर्म-ओरिजिन (transform-origin)", "एनिमेशन-ओरिजिन (animation-origin)", "ट्रांजिशन-ओरिजिन (transition-origin)", "ट्रांसफॉर्म-पोजीशन (transform-position)"],
    answer_en: "transform-origin",
    answer_hi: "ट्रांसफॉर्म-ओरिजिन (transform-origin)",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which property allows an animation to run infinitely?",
    question_hi: "कौन-सी प्रॉपर्टी एनिमेशन को अनंत बार चलाने की अनुमति देती है?",
    options_en: ["animation-iteration-count", "animation-duration", "animation-delay", "animation-direction"],
    options_hi: ["एनिमेशन-इटरेशन-काउंट (animation-iteration-count)", "एनिमेशन-ड्यूरेशन (animation-duration)", "एनिमेशन-डिले (animation-delay)", "एनिमेशन-डायरेक्शन (animation-direction)"],
    answer_en: "animation-iteration-count",
    answer_hi: "एनिमेशन-इटरेशन-काउंट (animation-iteration-count)",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which animation-fill-mode value keeps the animation style after it finishes?",
    question_hi: "एनिमेशन-फिल-मोड का कौन-सा मान एनिमेशन के खत्म होने के बाद उसका स्टाइल बनाए रखता है?",
    options_en: ["forwards", "backwards", "none", "both"],
    options_hi: ["फॉरवर्ड्स (forwards)", "बैकवर्ड्स (backwards)", "नन (none)", "बोथ (both)"],
    answer_en: "forwards",
    answer_hi: "फॉरवर्ड्स (forwards)",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which property controls the direction of an animation's play?",
    question_hi: "कौन-सी प्रॉपर्टी एनिमेशन के प्ले की दिशा को नियंत्रित करती है?",
    options_en: ["animation-direction", "animation-delay", "animation-fill-mode", "animation-play-state"],
    options_hi: ["एनिमेशन-डायरेक्शन (animation-direction)", "एनिमेशन-डिले (animation-delay)", "एनिमेशन-फिल-मोड (animation-fill-mode)", "एनिमेशन-प्ले-स्टेट (animation-play-state)"],
    answer_en: "animation-direction",
    answer_hi: "एनिमेशन-डायरेक्शन (animation-direction)",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which of the following is NOT a valid value for animation-direction?",
    question_hi: "एनिमेशन-डायरेक्शन के लिए निम्नलिखित में से कौन-सा मान मान्य नहीं है?",
    options_en: ["forward", "reverse", "alternate", "alternate-reverse"],
    options_hi: ["फॉरवर्ड (forward)", "रिवर्स (reverse)", "अल्टरनेट (alternate)", "अल्टरनेट-रिवर्स (alternate-reverse)"],
    answer_en: "forward",
    answer_hi: "फॉरवर्ड (forward)",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which CSS function is used to specify timing functions in animations and transitions?",
    question_hi: "एनिमेशन और ट्रांजिशन में टाइमिंग फंक्शन को निर्दिष्ट करने के लिए कौन-सा CSS फंक्शन उपयोग होता है?",
    options_en: ["cubic-bezier()", "linear()", "ease()", "steps()"],
    options_hi: ["cubic-bezier()", "linear()", "ease()", "steps()"],
    answer_en: "cubic-bezier()",
    answer_hi: "cubic-bezier()",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which CSS property controls the number of times a transition runs?",
    question_hi: "कौन-सी CSS प्रॉपर्टी ट्रांजिशन के कितनी बार चलने को नियंत्रित करती है?",
    options_en: ["No CSS property controls this", "transition-iteration-count", "animation-iteration-count", "transition-duration"],
    options_hi: ["इसका नियंत्रण कोई CSS प्रॉपर्टी नहीं करती", "ट्रांजिशन-इटरेशन-काउंट (transition-iteration-count)", "एनिमेशन-इटरेशन-काउंट (animation-iteration-count)", "ट्रांजिशन-ड्यूरेशन (transition-duration)"],
    answer_en: "No CSS property controls this",
    answer_hi: "इसका नियंत्रण कोई CSS प्रॉपर्टी नहीं करती",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which property controls the starting state of an animation in keyframes?",
    question_hi: "कीफ्रेम्स में एनिमेशन की प्रारंभिक स्थिति को कौन-सी प्रॉपर्टी नियंत्रित करती है?",
    options_en: ["from", "to", "start", "begin"],
    options_hi: ["from", "to", "start", "begin"],
    answer_en: "from",
    answer_hi: "from",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "What is the purpose of the 'steps()' timing function in CSS animations?",
    question_hi: "CSS एनिमेशन में 'steps()' टाइमिंग फंक्शन का उद्देश्य क्या है?",
    options_en: ["Creates a stepped animation", "Creates a smooth animation", "Creates a delay", "Controls iteration count"],
    options_hi: ["एक स्टेप्ड एनिमेशन बनाना", "एक स्मूद एनिमेशन बनाना", "एक देरी बनाना", "इटरेशन काउंट नियंत्रित करना"],
    answer_en: "Creates a stepped animation",
    answer_hi: "एक स्टेप्ड एनिमेशन बनाना",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which property controls whether an animation plays in reverse on odd or even iterations?",
    question_hi: "कौन-सी प्रॉपर्टी नियंत्रित करती है कि एनिमेशन विषम या सम इटरेशन में उल्टी दिशा में चले?",
    options_en: ["animation-direction", "animation-iteration-count", "animation-play-state", "animation-delay"],
    options_hi: ["एनिमेशन-डायरेक्शन (animation-direction)", "एनिमेशन-इटरेशन-काउंट (animation-iteration-count)", "एनिमेशन-प्ले-स्टेट (animation-play-state)", "एनिमेशन-डिले (animation-delay)"],
    answer_en: "animation-direction",
    answer_hi: "एनिमेशन-डायरेक्शन (animation-direction)",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which property specifies if an animation should remain visible after it finishes?",
    question_hi: "कौन-सी प्रॉपर्टी एनिमेशन खत्म होने के बाद भी इसे दृश्यमान बनाए रखती है?",
    options_en: ["animation-fill-mode", "animation-delay", "animation-iteration-count", "animation-direction"],
    options_hi: ["एनिमेशन-फिल-मोड (animation-fill-mode)", "एनिमेशन-डिले (animation-delay)", "एनिमेशन-इटरेशन-काउंट (animation-iteration-count)", "एनिमेशन-डायरेक्शन (animation-direction)"],
    answer_en: "animation-fill-mode",
    answer_hi: "एनिमेशन-फिल-मोड (animation-fill-mode)",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which animation-play-state value causes an animation to run normally?",
    question_hi: "एनिमेशन-प्ले-स्टेट का कौन-सा मान एनिमेशन को सामान्य रूप से चलाता है?",
    options_en: ["running", "paused", "stopped", "halted"],
    options_hi: ["running", "paused", "stopped", "halted"],
    answer_en: "running",
    answer_hi: "running",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which CSS property defines whether an animation is playing or paused?",
    question_hi: "कौन-सी CSS प्रॉपर्टी यह निर्दिष्ट करती है कि एनिमेशन चल रहा है या पॉज है?",
    options_en: ["animation-play-state", "animation-delay", "animation-direction", "animation-fill-mode"],
    options_hi: ["एनिमेशन-प्ले-स्टेट (animation-play-state)", "एनिमेशन-डिले (animation-delay)", "एनिमेशन-डायरेक्शन (animation-direction)", "एनिमेशन-फिल-मोड (animation-fill-mode)"],
    answer_en: "animation-play-state",
    answer_hi: "एनिमेशन-प्ले-स्टेट (animation-play-state)",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which shorthand property is used to define all transition properties at once?",
    question_hi: "सभी ट्रांजिशन प्रॉपर्टीज़ को एक साथ परिभाषित करने के लिए कौन-सी शॉर्टहैंड प्रॉपर्टी उपयोग होती है?",
    options_en: ["transition", "animation", "transform", "keyframes"],
    options_hi: ["ट्रांजिशन (transition)", "एनिमेशन (animation)", "ट्रांसफॉर्म (transform)", "कीफ्रेम्स (keyframes)"],
    answer_en: "transition",
    answer_hi: "ट्रांजिशन (transition)",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which CSS property controls the speed curve of a transition?",
    question_hi: "कौन-सी CSS प्रॉपर्टी ट्रांजिशन की स्पीड कर्व को नियंत्रित करती है?",
    options_en: ["transition-timing-function", "animation-timing-function", "transition-delay", "animation-delay"],
    options_hi: ["ट्रांजिशन-टाइमिंग-फंक्शन (transition-timing-function)", "एनिमेशन-टाइमिंग-फंक्शन (animation-timing-function)", "ट्रांजिशन-डिले (transition-delay)", "एनिमेशन-डिले (animation-delay)"],
    answer_en: "transition-timing-function",
    answer_hi: "ट्रांजिशन-टाइमिंग-फंक्शन (transition-timing-function)",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which transition-timing-function value causes a transition to run at a constant speed?",
    question_hi: "कौन-सा transition-timing-function मान ट्रांजिशन को समान गति से चलाता है?",
    options_en: ["linear", "ease-in", "ease-out", "ease-in-out"],
    options_hi: ["linear", "ease-in", "ease-out", "ease-in-out"],
    answer_en: "linear",
    answer_hi: "linear",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which CSS property controls the order of CSS animations when multiple animations are applied?",
    question_hi: "कौन-सी CSS प्रॉपर्टी कई एनिमेशन लागू होने पर उनकी क्रम को नियंत्रित करती है?",
    options_en: ["animation-delay", "animation-name", "animation-iteration-count", "animation-play-state"],
    options_hi: ["एनिमेशन-डिले (animation-delay)", "एनिमेशन-नाम (animation-name)", "एनिमेशन-इटरेशन-काउंट (animation-iteration-count)", "एनिमेशन-प्ले-स्टेट (animation-play-state)"],
    answer_en: "animation-delay",
    answer_hi: "एनिमेशन-डिले (animation-delay)",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which at-rule is used to define media queries in CSS?",
    question_hi: "CSS में मीडिया क्वेरी को परिभाषित करने के लिए कौन-सा at-rule उपयोग होता है?",
    options_en: ["@media", "@keyframes", "@supports", "@font-face"],
    options_hi: ["@media", "@keyframes", "@supports", "@font-face"],
    answer_en: "@media",
    answer_hi: "@media",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which CSS property is NOT animatable?",
    question_hi: "कौन-सी CSS प्रॉपर्टी एनिमेटेबल नहीं है?",
    options_en: ["display", "opacity", "background-color", "transform"],
    options_hi: ["डिस्प्ले (display)", "अपारदर्शिता (opacity)", "बैकग्राउंड-कलर (background-color)", "ट्रांसफॉर्म (transform)"],
    answer_en: "display",
    answer_hi: "डिस्प्ले (display)",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "What is the default timing function of CSS transitions?",
    question_hi: "CSS ट्रांजिशन की डिफ़ॉल्ट टाइमिंग फंक्शन क्या है?",
    options_en: ["ease", "linear", "ease-in", "ease-out"],
    options_hi: ["ease", "linear", "ease-in", "ease-out"],
    answer_en: "ease",
    answer_hi: "ease",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which property defines the delay before starting an animation or transition when multiple are specified?",
    question_hi: "जब कई एनिमेशन या ट्रांजिशन निर्दिष्ट हों, तो शुरू करने से पहले देरी को कौन-सी प्रॉपर्टी नियंत्रित करती है?",
    options_en: ["animation-delay", "transition-delay", "animation-duration", "transition-duration"],
    options_hi: ["एनिमेशन-डिले (animation-delay)", "ट्रांजिशन-डिले (transition-delay)", "एनिमेशन-ड्यूरेशन (animation-duration)", "ट्रांजिशन-ड्यूरेशन (transition-duration)"],
    answer_en: "animation-delay",
    answer_hi: "एनिमेशन-डिले (animation-delay)",
    attempted: false,
    selected: ""
  }
      ],
      25:[
        {
    num: 1,
    question_en: "Which CSS property sets the width of the border?",
    question_hi: "कौन सी CSS प्रॉपर्टी बॉर्डर की चौड़ाई सेट करती है?",
    options_en: ["border-width", "border-style", "border-color", "outline-width"],
    options_hi: ["बॉर्डर-विथ", "बॉर्डर-स्टाइल", "बॉर्डर-कलर", "आउटलाइऩ-विथ"],
    answer_en: "border-width",
    answer_hi: "बॉर्डर-विथ",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which of the following is NOT a valid border style?",
    question_hi: "निम्नलिखित में से कौन सा बॉर्डर स्टाइल मान्य नहीं है?",
    options_en: ["dotted", "solid", "blurred", "dashed"],
    options_hi: ["डॉटेड", "सॉलिड", "ब्लर्ड", "डैश्ड"],
    answer_en: "blurred",
    answer_hi: "ब्लर्ड",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "What is the default border width if not specified?",
    question_hi: "यदि बॉर्डर चौड़ाई निर्दिष्ट न हो तो डिफ़ॉल्ट चौड़ाई क्या होती है?",
    options_en: ["medium", "thin", "thick", "0"],
    options_hi: ["मीडियम", "थिन", "थिक", "0"],
    answer_en: "medium",
    answer_hi: "मीडियम",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which property is used to set the border color?",
    question_hi: "बॉर्डर रंग सेट करने के लिए कौन सी प्रॉपर्टी उपयोग की जाती है?",
    options_en: ["border-color", "border-style", "border-width", "outline-color"],
    options_hi: ["बॉर्डर-कलर", "बॉर्डर-स्टाइल", "बॉर्डर-विथ", "आउटलाइऩ-कलर"],
    answer_en: "border-color",
    answer_hi: "बॉर्डर-कलर",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which CSS property adds an outline around an element?",
    question_hi: "कौन सी CSS प्रॉपर्टी एलिमेंट के चारों ओर आउटलाइऩ जोड़ती है?",
    options_en: ["outline", "border", "box-shadow", "background"],
    options_hi: ["आउटलाइऩ", "बॉर्डर", "बॉक्स-शैडो", "बैकग्राउंड"],
    answer_en: "outline",
    answer_hi: "आउटलाइऩ",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which of the following is a key difference between border and outline?",
    question_hi: "बॉर्डर और आउटलाइऩ के बीच मुख्य अंतर क्या है?",
    options_en: [
      "Outline does not take up space, border does",
      "Border does not take up space, outline does",
      "Both take up space",
      "Neither takes up space"
    ],
    options_hi: [
      "आउटलाइऩ जगह नहीं घेरता, बॉर्डर घेरता है",
      "बॉर्डर जगह नहीं घेरता, आउटलाइऩ घेरता है",
      "दोनों जगह घेरते हैं",
      "कोई नहीं जगह घेरता"
    ],
    answer_en: "Outline does not take up space, border does",
    answer_hi: "आउटलाइऩ जगह नहीं घेरता, बॉर्डर घेरता है",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which property controls the space between the outline and the element's edge?",
    question_hi: "कौन सी प्रॉपर्टी आउटलाइऩ और एलिमेंट की किनारे के बीच दूरी नियंत्रित करती है?",
    options_en: ["outline-offset", "outline-width", "border-spacing", "margin"],
    options_hi: ["आउटलाइऩ-ऑफसेट", "आउटलाइऩ-विथ", "बॉर्डर-स्पेसिंग", "मार्जिन"],
    answer_en: "outline-offset",
    answer_hi: "आउटलाइऩ-ऑफसेट",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which value of border-style creates a border with dots?",
    question_hi: "border-style का कौन सा मान डॉट्स वाली बॉर्डर बनाता है?",
    options_en: ["dotted", "dashed", "solid", "double"],
    options_hi: ["डॉटेड", "डैश्ड", "सॉलिड", "डबल"],
    answer_en: "dotted",
    answer_hi: "डॉटेड",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "How do you remove the border from an element?",
    question_hi: "एलिमेंट से बॉर्डर कैसे हटाएं?",
    options_en: ["border: none;", "border-width: 0;", "border-style: none;", "All of the above"],
    options_hi: ["बॉर्डर: नोन;", "बॉर्डर-विथ: 0;", "बॉर्डर-स्टाइल: नोन;", "उपरोक्त सभी"],
    answer_en: "All of the above",
    answer_hi: "उपरोक्त सभी",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which CSS property sets the thickness of the outline?",
    question_hi: "आउटलाइऩ की मोटाई सेट करने वाली CSS प्रॉपर्टी कौन सी है?",
    options_en: ["outline-width", "border-width", "outline-style", "border-style"],
    options_hi: ["आउटलाइऩ-विथ", "बॉर्डर-विथ", "आउटलाइऩ-स्टाइल", "बॉर्डर-स्टाइल"],
    answer_en: "outline-width",
    answer_hi: "आउटलाइऩ-विथ",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which outline-style value creates a dashed outline?",
    question_hi: "कौन सा outline-style मान डैश्ड आउटलाइऩ बनाता है?",
    options_en: ["dashed", "dotted", "solid", "double"],
    options_hi: ["डैश्ड", "डॉटेड", "सॉलिड", "डबल"],
    answer_en: "dashed",
    answer_hi: "डैश्ड",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Can an outline have rounded corners like a border?",
    question_hi: "क्या आउटलाइऩ के किनारे बॉर्डर की तरह गोल हो सकते हैं?",
    options_en: ["No", "Yes", "Only in Firefox", "Only in Chrome"],
    options_hi: ["नहीं", "हाँ", "सिर्फ़ Firefox में", "सिर्फ़ Chrome में"],
    answer_en: "No",
    answer_hi: "नहीं",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which property is used to set the style of an outline?",
    question_hi: "आउटलाइऩ के स्टाइल को सेट करने के लिए कौन सी प्रॉपर्टी उपयोग होती है?",
    options_en: ["outline-style", "border-style", "outline-width", "border-color"],
    options_hi: ["आउटलाइऩ-स्टाइल", "बॉर्डर-स्टाइल", "आउटलाइऩ-विथ", "बॉर्डर-कलर"],
    answer_en: "outline-style",
    answer_hi: "आउटलाइऩ-स्टाइल",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "What happens if you set 'outline: none;' on an element?",
    question_hi: "यदि आप एलिमेंट पर 'outline: none;' सेट करें तो क्या होगा?",
    options_en: ["Outline will be removed", "Border will be removed", "Element will be hidden", "No change"],
    options_hi: ["आउटलाइऩ हट जाएगा", "बॉर्डर हट जाएगा", "एलिमेंट छुप जाएगा", "कोई बदलाव नहीं होगा"],
    answer_en: "Outline will be removed",
    answer_hi: "आउटलाइऩ हट जाएगा",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which CSS shorthand property sets width, style, and color of border?",
    question_hi: "कौन सी CSS शॉर्थैंड प्रॉपर्टी बॉर्डर की चौड़ाई, स्टाइल और रंग सेट करती है?",
    options_en: ["border", "border-style", "border-width", "border-color"],
    options_hi: ["बॉर्डर", "बॉर्डर-स्टाइल", "बॉर्डर-विथ", "बॉर्डर-कलर"],
    answer_en: "border",
    answer_hi: "बॉर्डर",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "How do you set different border styles for each side of an element?",
    question_hi: "एलिमेंट के प्रत्येक पक्ष के लिए अलग-अलग बॉर्डर स्टाइल कैसे सेट करें?",
    options_en: [
      "Use border-top, border-right, border-bottom, border-left",
      "Use border-style with four values",
      "Use outline-style",
      "Both first and second options"
    ],
    options_hi: [
      "border-top, border-right, border-bottom, border-left उपयोग करें",
      "border-style में चार मान दें",
      "outline-style उपयोग करें",
      "पहला और दूसरा दोनों विकल्प"
    ],
    answer_en: "Both first and second options",
    answer_hi: "पहला और दूसरा दोनों विकल्प",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which property controls the color of the outline?",
    question_hi: "कौन सी प्रॉपर्टी आउटलाइऩ का रंग नियंत्रित करती है?",
    options_en: ["outline-color", "border-color", "outline-style", "border-style"],
    options_hi: ["आउटलाइऩ-कलर", "बॉर्डर-कलर", "आउटलाइऩ-स्टाइल", "बॉर्डर-स्टाइल"],
    answer_en: "outline-color",
    answer_hi: "आउटलाइऩ-कलर",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which of these properties does NOT affect the space an element occupies?",
    question_hi: "इनमें से कौन सी प्रॉपर्टी एलिमेंट द्वारा घिरी गई जगह को प्रभावित नहीं करती?",
    options_en: ["outline", "border", "margin", "padding"],
    options_hi: ["आउटलाइऩ", "बॉर्डर", "मार्जिन", "पैडिंग"],
    answer_en: "outline",
    answer_hi: "आउटलाइऩ",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "How do you set a thick red border?",
    question_hi: "मोटा लाल बॉर्डर कैसे सेट करें?",
    options_en: ["border: 5px solid red;", "border: solid red 5px;", "border: red solid 5px;", "border: 5px red solid;"],
    options_hi: ["बॉर्डर: 5px सॉलिड रेड;", "बॉर्डर: सॉलिड रेड 5px;", "बॉर्डर: रेड सॉलिड 5px;", "बॉर्डर: 5px रेड सॉलिड;"],
    answer_en: "border: 5px solid red;",
    answer_hi: "बॉर्डर: 5px सॉलिड रेड;",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Can outlines be used for accessibility focus indicators?",
    question_hi: "क्या आउटलाइऩ एक्सेसिबिलिटी फोकस इंडिकेटर के लिए उपयोग किया जा सकता है?",
    options_en: ["Yes", "No", "Only with JavaScript", "Only with CSS variables"],
    options_hi: ["हाँ", "नहीं", "सिर्फ जावास्क्रिप्ट से", "सिर्फ CSS वेरिएबल्स से"],
    answer_en: "Yes",
    answer_hi: "हाँ",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which property sets all four border widths at once?",
    question_hi: "कौन सी प्रॉपर्टी चारों बॉर्डर चौड़ाई एक साथ सेट करती है?",
    options_en: ["border-width", "border-style", "border-color", "border"],
    options_hi: ["बॉर्डर-विथ", "बॉर्डर-स्टाइल", "बॉर्डर-कलर", "बॉर्डर"],
    answer_en: "border-width",
    answer_hi: "बॉर्डर-विथ",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which value of border-style creates two solid lines?",
    question_hi: "border-style का कौन सा मान दो सॉलिड लाइनों वाला बॉर्डर बनाता है?",
    options_en: ["double", "solid", "dotted", "groove"],
    options_hi: ["डबल", "सॉलिड", "डॉटेड", "ग्रूव"],
    answer_en: "double",
    answer_hi: "डबल",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "What happens if you set border-color but not border-style?",
    question_hi: "यदि आप border-color सेट करते हैं लेकिन border-style नहीं करते तो क्या होगा?",
    options_en: [
      "No border will be visible",
      "Default border style will apply",
      "Border color will be ignored",
      "Error will occur"
    ],
    options_hi: [
      "कोई बॉर्डर दिखाई नहीं देगा",
      "डिफ़ॉल्ट बॉर्डर स्टाइल लागू होगा",
      "बॉर्डर रंग नजरअंदाज होगा",
      "एरर आएगा"
    ],
    answer_en: "No border will be visible",
    answer_hi: "कोई बॉर्डर दिखाई नहीं देगा",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which property can make the border rounded?",
    question_hi: "कौन सी प्रॉपर्टी बॉर्डर को गोल बना सकती है?",
    options_en: ["border-radius", "border-style", "outline-style", "outline-radius"],
    options_hi: ["बॉर्डर-रेडियस", "बॉर्डर-स्टाइल", "आउटलाइऩ-स्टाइल", "आउटलाइऩ-रेडियस"],
    answer_en: "border-radius",
    answer_hi: "बॉर्डर-रेडियस",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "How is the outline different from a border in terms of layout?",
    question_hi: "लेआउट के मामले में आउटलाइऩ बॉर्डर से कैसे भिन्न होता है?",
    options_en: [
      "Outline does not affect layout, border does",
      "Border does not affect layout, outline does",
      "Both affect layout",
      "Neither affects layout"
    ],
    options_hi: [
      "आउटलाइऩ लेआउट को प्रभावित नहीं करता, बॉर्डर करता है",
      "बॉर्डर लेआउट को प्रभावित नहीं करता, आउटलाइऩ करता है",
      "दोनों लेआउट को प्रभावित करते हैं",
      "कोई नहीं लेआउट को प्रभावित करता"
    ],
    answer_en: "Outline does not affect layout, border does",
    answer_hi: "आउटलाइऩ लेआउट को प्रभावित नहीं करता, बॉर्डर करता है",
    attempted: false,
    selected: ""
  },
    {
    num: 26,
    question_en: "Which property is used to set a border only at the top of an element?",
    question_hi: "कौन सी प्रॉपर्टी का उपयोग केवल एलिमेंट के टॉप बॉर्डर के लिए किया जाता है?",
    options_en: ["border-top", "border-bottom", "border-left", "border-right"],
    options_hi: ["बॉर्डर-टॉप", "बॉर्डर-बॉटम", "बॉर्डर-लेफ्ट", "बॉर्डर-राइट"],
    answer_en: "border-top",
    answer_hi: "बॉर्डर-टॉप",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "How do you make an element’s border invisible but still take space?",
    question_hi: "किस प्रकार एक एलिमेंट का बॉर्डर अदृश्य बनाएं लेकिन वह जगह घेरता रहे?",
    options_en: ["border-color: transparent;", "border-style: none;", "border-width: 0;", "outline: none;"],
    options_hi: ["बॉर्डर-कलर: ट्रांसपेरेंट;", "बॉर्डर-स्टाइल: नोन;", "बॉर्डर-विथ: 0;", "आउटलाइऩ: नोन;"],
    answer_en: "border-color: transparent;",
    answer_hi: "बॉर्डर-कलर: ट्रांसपेरेंट;",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which shorthand property sets all border sides individually?",
    question_hi: "कौन सी शॉर्थैंड प्रॉपर्टी चारों बॉर्डर साइड्स को अलग-अलग सेट करती है?",
    options_en: ["border-width", "border-style", "border", "border-radius"],
    options_hi: ["बॉर्डर-विथ", "बॉर्डर-स्टाइल", "बॉर्डर", "बॉर्डर-रेडियस"],
    answer_en: "border-width",
    answer_hi: "बॉर्डर-विथ",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "What does the 'outline-offset' property do?",
    question_hi: "'outline-offset' प्रॉपर्टी क्या करती है?",
    options_en: [
      "Moves the outline away from the element",
      "Changes the outline color",
      "Changes border thickness",
      "Adds shadow to outline"
    ],
    options_hi: [
      "आउटलाइऩ को एलिमेंट से दूर करती है",
      "आउटलाइऩ का रंग बदलती है",
      "बॉर्डर की मोटाई बदलती है",
      "आउटलाइऩ को छाया देती है"
    ],
    answer_en: "Moves the outline away from the element",
    answer_hi: "आउटलाइऩ को एलिमेंट से दूर करती है",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which border-style creates a 3D grooved effect?",
    question_hi: "कौन सा border-style 3D ग्रूव्ड इफेक्ट बनाता है?",
    options_en: ["groove", "ridge", "inset", "outset"],
    options_hi: ["ग्रूव", "रिज", "इंसेट", "आउटसेट"],
    answer_en: "groove",
    answer_hi: "ग्रूव",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "What does the 'border-collapse' property control?",
    question_hi: "'border-collapse' प्रॉपर्टी क्या नियंत्रित करती है?",
    options_en: ["Table borders merging", "Border color", "Border width", "Border style"],
    options_hi: ["टेबल बॉर्डर का विलय", "बॉर्डर रंग", "बॉर्डर चौड़ाई", "बॉर्डर स्टाइल"],
    answer_en: "Table borders merging",
    answer_hi: "टेबल बॉर्डर का विलय",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which property controls the space between the border and the cell content in tables?",
    question_hi: "टेबल में बॉर्डर और सेल कंटेंट के बीच की जगह कौन सी प्रॉपर्टी नियंत्रित करती है?",
    options_en: ["border-spacing", "padding", "margin", "outline-offset"],
    options_hi: ["बॉर्डर-स्पेसिंग", "पैडिंग", "मार्जिन", "आउटलाइऩ-ऑफसेट"],
    answer_en: "border-spacing",
    answer_hi: "बॉर्डर-स्पेसिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Can outline be styled differently than border?",
    question_hi: "क्या आउटलाइऩ को बॉर्डर से अलग तरीके से स्टाइल किया जा सकता है?",
    options_en: ["Yes", "No", "Only in some browsers", "Only with JavaScript"],
    options_hi: ["हाँ", "नहीं", "सिर्फ कुछ ब्राउज़रों में", "सिर्फ जावास्क्रिप्ट से"],
    answer_en: "Yes",
    answer_hi: "हाँ",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which CSS property specifies the style of all four borders at once?",
    question_hi: "कौन सी CSS प्रॉपर्टी एक साथ चारों बॉर्डर का स्टाइल सेट करती है?",
    options_en: ["border-style", "border-width", "border-color", "border"],
    options_hi: ["बॉर्डर-स्टाइल", "बॉर्डर-विथ", "बॉर्डर-कलर", "बॉर्डर"],
    answer_en: "border-style",
    answer_hi: "बॉर्डर-स्टाइल",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which property is NOT part of the border shorthand property?",
    question_hi: "निम्नलिखित में से कौन सी प्रॉपर्टी बॉर्डर शॉर्थैंड प्रॉपर्टी का हिस्सा नहीं है?",
    options_en: ["border-radius", "border-width", "border-style", "border-color"],
    options_hi: ["बॉर्डर-रेडियस", "बॉर्डर-विथ", "बॉर्डर-स्टाइल", "बॉर्डर-कलर"],
    answer_en: "border-radius",
    answer_hi: "बॉर्डर-रेडियस",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "How do you apply a dotted border only to the left side?",
    question_hi: "सिर्फ बाएँ साइड पर डॉटेड बॉर्डर कैसे लगाएं?",
    options_en: ["border-left-style: dotted;", "border-style: dotted left;", "border-left: dotted;", "border-style-left: dotted;"],
    options_hi: ["बॉर्डर-लेफ्ट-स्टाइल: डॉटेड;", "बॉर्डर-स्टाइल: डॉटेड लेफ्ट;", "बॉर्डर-लेफ्ट: डॉटेड;", "बॉर्डर-स्टाइल-लेफ्ट: डॉटेड;"],
    answer_en: "border-left-style: dotted;",
    answer_hi: "बॉर्डर-लेफ्ट-स्टाइल: डॉटेड;",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which CSS property removes the default outline on focus?",
    question_hi: "फोकस पर डिफ़ॉल्ट आउटलाइऩ हटाने वाली CSS प्रॉपर्टी कौन सी है?",
    options_en: ["outline: none;", "border: none;", "outline-style: none;", "outline-width: 0;"],
    options_hi: ["आउटलाइऩ: नोन;", "बॉर्डर: नोन;", "आउटलाइऩ-स्टाइल: नोन;", "आउटलाइऩ-विथ: 0;"],
    answer_en: "outline: none;",
    answer_hi: "आउटलाइऩ: नोन;",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which border style creates an inset effect?",
    question_hi: "कौन सा बॉर्डर स्टाइल इनसेट इफेक्ट बनाता है?",
    options_en: ["inset", "outset", "groove", "ridge"],
    options_hi: ["इनसेट", "आउटसेट", "ग्रूव", "रिज"],
    answer_en: "inset",
    answer_hi: "इनसेट",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "How can you create a double border?",
    question_hi: "डबल बॉर्डर कैसे बनाएं?",
    options_en: ["border-style: double;", "border-style: solid double;", "border-width: double;", "border-type: double;"],
    options_hi: ["बॉर्डर-स्टाइल: डबल;", "बॉर्डर-स्टाइल: सॉलिड डबल;", "बॉर्डर-विथ: डबल;", "बॉर्डर-टाइप: डबल;"],
    answer_en: "border-style: double;",
    answer_hi: "बॉर्डर-स्टाइल: डबल;",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which property can be used to add space between the border and content inside a box?",
    question_hi: "कौन सी प्रॉपर्टी बॉर्डर और बॉक्स के अंदर कंटेंट के बीच जगह जोड़ने के लिए इस्तेमाल होती है?",
    options_en: ["padding", "margin", "border-spacing", "outline-offset"],
    options_hi: ["पैडिंग", "मार्जिन", "बॉर्डर-स्पेसिंग", "आउटलाइऩ-ऑफसेट"],
    answer_en: "padding",
    answer_hi: "पैडिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "How to make only the bottom border thick?",
    question_hi: "सिर्फ नीचे का बॉर्डर मोटा कैसे बनाएं?",
    options_en: ["border-bottom-width: thick;", "border-width-bottom: thick;", "border-bottom-style: thick;", "border-style-bottom: thick;"],
    options_hi: ["बॉर्डर-बॉटम-विथ: थिक;", "बॉर्डर-विथ-बॉटम: थिक;", "बॉर्डर-बॉटम-स्टाइल: थिक;", "बॉर्डर-स्टाइल-बॉटम: थिक;"],
    answer_en: "border-bottom-width: thick;",
    answer_hi: "बॉर्डर-बॉटम-विथ: थिक;",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which property sets the style of the outline?",
    question_hi: "आउटलाइऩ का स्टाइल सेट करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["outline-style", "border-style", "outline-width", "border-width"],
    options_hi: ["आउटलाइऩ-स्टाइल", "बॉर्डर-स्टाइल", "आउटलाइऩ-विथ", "बॉर्डर-विथ"],
    answer_en: "outline-style",
    answer_hi: "आउटलाइऩ-स्टाइल",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which border style looks like a ridge?",
    question_hi: "कौन सा बॉर्डर स्टाइल रिज़ जैसा दिखता है?",
    options_en: ["ridge", "groove", "inset", "outset"],
    options_hi: ["रिज", "ग्रूव", "इनसेट", "आउटसेट"],
    answer_en: "ridge",
    answer_hi: "रिज",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "How to specify the color of the outline?",
    question_hi: "आउटलाइऩ का रंग कैसे सेट करें?",
    options_en: ["outline-color", "border-color", "color", "background-color"],
    options_hi: ["आउटलाइऩ-कलर", "बॉर्डर-कलर", "कलर", "बैकग्राउंड-कलर"],
    answer_en: "outline-color",
    answer_hi: "आउटलाइऩ-कलर",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which property controls the thickness of all four borders individually?",
    question_hi: "कौन सी प्रॉपर्टी चारों बॉर्डर की मोटाई अलग-अलग नियंत्रित करती है?",
    options_en: ["border-width", "border-style", "border-color", "border"],
    options_hi: ["बॉर्डर-विथ", "बॉर्डर-स्टाइल", "बॉर्डर-कलर", "बॉर्डर"],
    answer_en: "border-width",
    answer_hi: "बॉर्डर-विथ",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which CSS property is used to create space between adjacent table cells?",
    question_hi: "टेबल की सटती हुई सेल्स के बीच जगह बनाने के लिए कौन सी CSS प्रॉपर्टी है?",
    options_en: ["border-spacing", "border-collapse", "padding", "margin"],
    options_hi: ["बॉर्डर-स्पेसिंग", "बॉर्डर-कोलैप्स", "पैडिंग", "मार्जिन"],
    answer_en: "border-spacing",
    answer_hi: "बॉर्डर-स्पेसिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "What effect does the 'outline' property have on the box model?",
    question_hi: "'आउटलाइऩ' प्रॉपर्टी बॉक्स मॉडल पर क्या प्रभाव डालती है?",
    options_en: [
      "Does not affect box model dimensions",
      "Increases box size",
      "Decreases box size",
      "Overrides border"
    ],
    options_hi: [
      "बॉक्स मॉडल के आयामों को प्रभावित नहीं करता",
      "बॉक्स का आकार बढ़ाता है",
      "बॉक्स का आकार कम करता है",
      "बॉर्डर को ओवरराइड करता है"
    ],
    answer_en: "Does not affect box model dimensions",
    answer_hi: "बॉक्स मॉडल के आयामों को प्रभावित नहीं करता",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which property sets the space between the outline and the edge of the element?",
    question_hi: "कौन सी प्रॉपर्टी आउटलाइऩ और एलिमेंट की किनारे के बीच जगह सेट करती है?",
    options_en: ["outline-offset", "margin", "padding", "border-spacing"],
    options_hi: ["आउटलाइऩ-ऑफसेट", "मार्जिन", "पैडिंग", "बॉर्डर-स्पेसिंग"],
    answer_en: "outline-offset",
    answer_hi: "आउटलाइऩ-ऑफसेट",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Is the outline included in the element’s size calculations?",
    question_hi: "क्या आउटलाइऩ एलिमेंट के साइज कैलकुलेशन में शामिल होता है?",
    options_en: ["No", "Yes", "Only in some browsers", "Depends on box-sizing"],
    options_hi: ["नहीं", "हाँ", "सिर्फ कुछ ब्राउज़रों में", "बॉक्स-साइजिंग पर निर्भर करता है"],
    answer_en: "No",
    answer_hi: "नहीं",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which property would you use to remove the outline when a button is clicked?",
    question_hi: "जब बटन क्लिक किया जाए तो आउटलाइऩ हटाने के लिए कौन सी प्रॉपर्टी इस्तेमाल करें?",
    options_en: ["outline: none;", "border: none;", "outline-style: none;", "box-shadow: none;"],
    options_hi: ["आउटलाइऩ: नोन;", "बॉर्डर: नोन;", "आउटलाइऩ-स्टाइल: नोन;", "बॉक्स-शैडो: नोन;"],
    answer_en: "outline: none;",
    answer_hi: "आउटलाइऩ: नोन;",
    attempted: false,
    selected: ""
  } 
      ],
      26:[
       {
    num: 1,
    question_en: "Which display value makes an element behave like a block element?",
    question_hi: "कौन सा display मान एक एलिमेंट को ब्लॉक एलिमेंट की तरह व्यवहार करता है?",
    options_en: ["block", "inline", "inline-block", "none"],
    options_hi: ["ब्लॉक", "इनलाइन", "इनलाइन-ब्लॉक", "नन"],
    answer_en: "block",
    answer_hi: "ब्लॉक",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which display value makes an element behave like an inline element?",
    question_hi: "कौन सा display मान एक एलिमेंट को इनलाइन एलिमेंट की तरह व्यवहार करता है?",
    options_en: ["inline", "block", "flex", "grid"],
    options_hi: ["इनलाइन", "ब्लॉक", "फ्लेक्स", "ग्रिड"],
    answer_en: "inline",
    answer_hi: "इनलाइन",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which display property value allows an element to be inline but accept width and height?",
    question_hi: "कौन सा display मान एक एलिमेंट को इनलाइन बनाता है लेकिन चौड़ाई और ऊँचाई स्वीकार करता है?",
    options_en: ["inline-block", "inline", "block", "none"],
    options_hi: ["इनलाइन-ब्लॉक", "इनलाइन", "ब्लॉक", "नन"],
    answer_en: "inline-block",
    answer_hi: "इनलाइन-ब्लॉक",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which display value hides the element from the page completely?",
    question_hi: "कौन सा display मान एलिमेंट को पूरी तरह से पेज से छुपा देता है?",
    options_en: ["none", "block", "inline", "flex"],
    options_hi: ["नन", "ब्लॉक", "इनलाइन", "फ्लेक्स"],
    answer_en: "none",
    answer_hi: "नन",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which display value makes an element a flex container?",
    question_hi: "कौन सा display मान एक एलिमेंट को फ्लेक्स कंटेनर बनाता है?",
    options_en: ["flex", "block", "inline", "grid"],
    options_hi: ["फ्लेक्स", "ब्लॉक", "इनलाइन", "ग्रिड"],
    answer_en: "flex",
    answer_hi: "फ्लेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which display value makes an element a grid container?",
    question_hi: "कौन सा display मान एक एलिमेंट को ग्रिड कंटेनर बनाता है?",
    options_en: ["grid", "flex", "block", "inline-block"],
    options_hi: ["ग्रिड", "फ्लेक्स", "ब्लॉक", "इनलाइन-ब्लॉक"],
    answer_en: "grid",
    answer_hi: "ग्रिड",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which display type allows flex items to wrap onto multiple lines?",
    question_hi: "कौन सा display टाइप फ्लेक्स आइटम्स को कई लाइनों में लपेटने की अनुमति देता है?",
    options_en: ["flex-wrap", "inline", "block", "none"],
    options_hi: ["फ्लेक्स-व्रैप", "इनलाइन", "ब्लॉक", "नन"],
    answer_en: "flex-wrap",
    answer_hi: "फ्लेक्स-व्रैप",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which display value keeps elements in the normal document flow and allows width and height?",
    question_hi: "कौन सा display मान एलिमेंट्स को सामान्य दस्तावेज़ प्रवाह में रखता है और चौड़ाई व ऊँचाई की अनुमति देता है?",
    options_en: ["inline-block", "inline", "block", "none"],
    options_hi: ["इनलाइन-ब्लॉक", "इनलाइन", "ब्लॉक", "नन"],
    answer_en: "inline-block",
    answer_hi: "इनलाइन-ब्लॉक",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "What is the default display value of a <div> element?",
    question_hi: "<div> एलिमेंट का डिफ़ॉल्ट display मान क्या है?",
    options_en: ["block", "inline", "inline-block", "none"],
    options_hi: ["ब्लॉक", "इनलाइन", "इनलाइन-ब्लॉक", "नन"],
    answer_en: "block",
    answer_hi: "ब्लॉक",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "What is the default display value of a <span> element?",
    question_hi: "<span> एलिमेंट का डिफ़ॉल्ट display मान क्या है?",
    options_en: ["inline", "block", "inline-block", "none"],
    options_hi: ["इनलाइन", "ब्लॉक", "इनलाइन-ब्लॉक", "नन"],
    answer_en: "inline",
    answer_hi: "इनलाइन",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which display value is useful for creating flexible layouts in CSS?",
    question_hi: "CSS में फ्लेक्सिबल लेआउट बनाने के लिए कौन सा display मान उपयोगी है?",
    options_en: ["flex", "block", "inline", "none"],
    options_hi: ["फ्लेक्स", "ब्लॉक", "इनलाइन", "नन"],
    answer_en: "flex",
    answer_hi: "फ्लेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which display property can you use to create a two-dimensional layout?",
    question_hi: "दो-आयामी लेआउट बनाने के लिए कौन सी display प्रॉपर्टी का उपयोग किया जा सकता है?",
    options_en: ["grid", "flex", "block", "inline"],
    options_hi: ["ग्रिड", "फ्लेक्स", "ब्लॉक", "इनलाइन"],
    answer_en: "grid",
    answer_hi: "ग्रिड",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which display value removes an element but does not affect the layout of other elements?",
    question_hi: "कौन सा display मान एलिमेंट को हटा देता है लेकिन अन्य एलिमेंट्स के लेआउट को प्रभावित नहीं करता?",
    options_en: ["none", "block", "inline", "flex"],
    options_hi: ["नन", "ब्लॉक", "इनलाइन", "फ्लेक्स"],
    answer_en: "none",
    answer_hi: "नन",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Can an element with display: inline accept width and height?",
    question_hi: "क्या display: inline वाला एलिमेंट चौड़ाई और ऊंचाई स्वीकार कर सकता है?",
    options_en: ["No", "Yes", "Only width", "Only height"],
    options_hi: ["नहीं", "हाँ", "केवल चौड़ाई", "केवल ऊंचाई"],
    answer_en: "No",
    answer_hi: "नहीं",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which display value allows elements to behave like inline elements but also accept height and width?",
    question_hi: "कौन सा display मान एलिमेंट्स को इनलाइन की तरह व्यवहार करने देता है लेकिन ऊंचाई और चौड़ाई स्वीकार भी करता है?",
    options_en: ["inline-block", "block", "inline", "none"],
    options_hi: ["इनलाइन-ब्लॉक", "ब्लॉक", "इनलाइन", "नन"],
    answer_en: "inline-block",
    answer_hi: "इनलाइन-ब्लॉक",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which display value is best suited for responsive web layouts?",
    question_hi: "रिस्पॉन्सिव वेब लेआउट के लिए कौन सा display मान सबसे उपयुक्त है?",
    options_en: ["flex", "inline", "block", "none"],
    options_hi: ["फ्लेक्स", "इनलाइन", "ब्लॉक", "नन"],
    answer_en: "flex",
    answer_hi: "फ्लेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which display value can be used with grid-template-columns and grid-template-rows?",
    question_hi: "कौन सा display मान grid-template-columns और grid-template-rows के साथ उपयोग किया जाता है?",
    options_en: ["grid", "flex", "block", "inline"],
    options_hi: ["ग्रिड", "फ्लेक्स", "ब्लॉक", "इनलाइन"],
    answer_en: "grid",
    answer_hi: "ग्रिड",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which display property value allows flex items to be aligned horizontally or vertically?",
    question_hi: "कौन सा display मान फ्लेक्स आइटम्स को क्षैतिज या ऊर्ध्वाधर संरेखित करने देता है?",
    options_en: ["flex", "block", "inline", "none"],
    options_hi: ["फ्लेक्स", "ब्लॉक", "इनलाइन", "नन"],
    answer_en: "flex",
    answer_hi: "फ्लेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which display value is used to show an element as an inline flex container?",
    question_hi: "कौन सा display मान एलिमेंट को इनलाइन फ्लेक्स कंटेनर के रूप में दिखाता है?",
    options_en: ["inline-flex", "inline-block", "block", "flex"],
    options_hi: ["इनलाइन-फ्लेक्स", "इनलाइन-ब्लॉक", "ब्लॉक", "फ्लेक्स"],
    answer_en: "inline-flex",
    answer_hi: "इनलाइन-फ्लेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which display property value makes an element disappear but still take up space?",
    question_hi: "कौन सा display मान एलिमेंट को गायब कर देता है लेकिन फिर भी जगह लेता है?",
    options_en: ["visibility: hidden", "display: none", "opacity: 0", "position: absolute"],
    options_hi: ["विजिबिलिटी: हिडन", "डिस्प्ले: नन", "ओपेसिटी: 0", "पोजीशन: एब्सोल्यूट"],
    answer_en: "visibility: hidden",
    answer_hi: "विजिबिलिटी: हिडन",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which display value makes an element behave like a list-item?",
    question_hi: "कौन सा display मान एलिमेंट को लिस्ट-आइटम की तरह व्यवहार करता है?",
    options_en: ["list-item", "block", "inline", "flex"],
    options_hi: ["लिस्ट-आइटम", "ब्लॉक", "इनलाइन", "फ्लेक्स"],
    answer_en: "list-item",
    answer_hi: "लिस्ट-आइटम",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which display value creates a block-level flex container?",
    question_hi: "कौन सा display मान एक ब्लॉक-स्तरीय फ्लेक्स कंटेनर बनाता है?",
    options_en: ["flex", "inline-flex", "block", "inline-block"],
    options_hi: ["फ्लेक्स", "इनलाइन-फ्लेक्स", "ब्लॉक", "इनलाइन-ब्लॉक"],
    answer_en: "flex",
    answer_hi: "फ्लेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which display property value is best for making multi-column layouts?",
    question_hi: "मल्टी-कॉलम लेआउट बनाने के लिए कौन सा display मान सबसे अच्छा है?",
    options_en: ["grid", "flex", "block", "inline"],
    options_hi: ["ग्रिड", "फ्लेक्स", "ब्लॉक", "इनलाइन"],
    answer_en: "grid",
    answer_hi: "ग्रिड",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which display value allows an element to behave like an inline flex container?",
    question_hi: "कौन सा display मान एक एलिमेंट को इनलाइन फ्लेक्स कंटेनर की तरह व्यवहार करने देता है?",
    options_en: ["inline-flex", "flex", "inline-block", "block"],
    options_hi: ["इनलाइन-फ्लेक्स", "फ्लेक्स", "इनलाइन-ब्लॉक", "ब्लॉक"],
    answer_en: "inline-flex",
    answer_hi: "इनलाइन-फ्लेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which display value makes an element behave like a table?",
    question_hi: "कौन सा display मान एक एलिमेंट को टेबल की तरह व्यवहार करने देता है?",
    options_en: ["table", "block", "inline", "flex"],
    options_hi: ["टेबल", "ब्लॉक", "इनलाइन", "फ्लेक्स"],
    answer_en: "table",
    answer_hi: "टेबल",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Which display value allows an element to behave like an inline table?",
    question_hi: "कौन सा display मान एक एलिमेंट को इनलाइन टेबल की तरह व्यवहार करने देता है?",
    options_en: ["inline-table", "inline-block", "inline", "block"],
    options_hi: ["इनलाइन-टेबल", "इनलाइन-ब्लॉक", "इनलाइन", "ब्लॉक"],
    answer_en: "inline-table",
    answer_hi: "इनलाइन-टेबल",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which display value hides the element but still allows it to take up space?",
    question_hi: "कौन सा display मान एलिमेंट को छुपा देता है लेकिन फिर भी जगह लेता है?",
    options_en: ["visibility: hidden", "display: none", "opacity: 0", "position: absolute"],
    options_hi: ["विजिबिलिटी: हिडन", "डिस्प्ले: नन", "ओपेसिटी: 0", "पोजीशन: एब्सोल्यूट"],
    answer_en: "visibility: hidden",
    answer_hi: "विजिबिलिटी: हिडन",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which display value will remove an element from the layout flow entirely?",
    question_hi: "कौन सा display मान एलिमेंट को पूरी तरह से लेआउट फ्लो से हटा देता है?",
    options_en: ["display: none", "visibility: hidden", "opacity: 0", "position: fixed"],
    options_hi: ["डिस्प्ले: नन", "विजिबिलिटी: हिडन", "ओपेसिटी: 0", "पोजीशन: फिक्स्ड"],
    answer_en: "display: none",
    answer_hi: "डिस्प्ले: नन",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which display value makes the element a flex container with horizontal flow by default?",
    question_hi: "कौन सा display मान एलिमेंट को डिफ़ॉल्ट रूप से क्षैतिज फ्लो वाला फ्लेक्स कंटेनर बनाता है?",
    options_en: ["flex", "grid", "block", "inline-flex"],
    options_hi: ["फ्लेक्स", "ग्रिड", "ब्लॉक", "इनलाइन-फ्लेक्स"],
    answer_en: "flex",
    answer_hi: "फ्लेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "What display value would you use to create a grid container?",
    question_hi: "ग्रिड कंटेनर बनाने के लिए आप कौन सा display मान उपयोग करेंगे?",
    options_en: ["grid", "flex", "block", "inline-block"],
    options_hi: ["ग्रिड", "फ्लेक्स", "ब्लॉक", "इनलाइन-ब्लॉक"],
    answer_en: "grid",
    answer_hi: "ग्रिड",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which display value is the default for list items (<li>)?",
    question_hi: "<li> (लिस्ट आइटम) के लिए डिफ़ॉल्ट display मान क्या है?",
    options_en: ["list-item", "block", "inline", "flex"],
    options_hi: ["लिस्ट-आइटम", "ब्लॉक", "इनलाइन", "फ्लेक्स"],
    answer_en: "list-item",
    answer_hi: "लिस्ट-आइटम",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which display property is best for creating a navigation bar with flexible items?",
    question_hi: "फ्लेक्सिबल आइटम्स के साथ नेविगेशन बार बनाने के लिए कौन सी display प्रॉपर्टी सबसे अच्छी है?",
    options_en: ["flex", "block", "inline", "grid"],
    options_hi: ["फ्लेक्स", "ब्लॉक", "इनलाइन", "ग्रिड"],
    answer_en: "flex",
    answer_hi: "फ्लेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which CSS display value would allow an element to shrink and grow dynamically within a container?",
    question_hi: "कौन सा CSS display मान एक एलिमेंट को कंटेनर के भीतर डायनामिक रूप से सिकुड़ने और बढ़ने की अनुमति देता है?",
    options_en: ["flex", "block", "inline", "none"],
    options_hi: ["फ्लेक्स", "ब्लॉक", "इनलाइन", "नन"],
    answer_en: "flex",
    answer_hi: "फ्लेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which display value is used to position an element as a table row?",
    question_hi: "कौन सा display मान एलिमेंट को टेबल रो के रूप में स्थिति करने के लिए उपयोग किया जाता है?",
    options_en: ["table-row", "block", "inline", "flex"],
    options_hi: ["टेबल-रो", "ब्लॉक", "इनलाइन", "फ्लेक्स"],
    answer_en: "table-row",
    answer_hi: "टेबल-रो",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which display value is used to position an element as a table cell?",
    question_hi: "कौन सा display मान एलिमेंट को टेबल सेल के रूप में स्थिति करने के लिए उपयोग किया जाता है?",
    options_en: ["table-cell", "block", "inline", "flex"],
    options_hi: ["टेबल-सेल", "ब्लॉक", "इनलाइन", "फ्लेक्स"],
    answer_en: "table-cell",
    answer_hi: "टेबल-सेल",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which display value allows nested flex containers inside other flex containers?",
    question_hi: "कौन सा display मान अन्य फ्लेक्स कंटेनरों के अंदर नेस्टेड फ्लेक्स कंटेनरों की अनुमति देता है?",
    options_en: ["flex", "grid", "block", "inline"],
    options_hi: ["फ्लेक्स", "ग्रिड", "ब्लॉक", "इनलाइन"],
    answer_en: "flex",
    answer_hi: "फ्लेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which display value would make an element behave like an inline flex container?",
    question_hi: "कौन सा display मान एक एलिमेंट को इनलाइन फ्लेक्स कंटेनर की तरह व्यवहार करने देता है?",
    options_en: ["inline-flex", "flex", "inline", "block"],
    options_hi: ["इनलाइन-फ्लेक्स", "फ्लेक्स", "इनलाइन", "ब्लॉक"],
    answer_en: "inline-flex",
    answer_hi: "इनलाइन-फ्लेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which display property would you use for hidden elements that do not affect layout or take space?",
    question_hi: "कौन सी display प्रॉपर्टी आप छुपे हुए एलिमेंट्स के लिए उपयोग करेंगे जो लेआउट को प्रभावित नहीं करते या जगह नहीं लेते?",
    options_en: ["display: none", "visibility: hidden", "opacity: 0", "position: absolute"],
    options_hi: ["डिस्प्ले: नन", "विजिबिलिटी: हिडन", "ओपेसिटी: 0", "पोजीशन: एब्सोल्यूट"],
    answer_en: "display: none",
    answer_hi: "डिस्प्ले: नन",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which display value allows grid items to be positioned into rows and columns?",
    question_hi: "कौन सा display मान ग्रिड आइटम्स को पंक्तियों और स्तंभों में स्थिति करने की अनुमति देता है?",
    options_en: ["grid", "flex", "block", "inline"],
    options_hi: ["ग्रिड", "फ्लेक्स", "ब्लॉक", "इनलाइन"],
    answer_en: "grid",
    answer_hi: "ग्रिड",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which display value is best for creating responsive layouts that adapt to screen size?",
    question_hi: "स्क्रीन साइज के अनुसार अनुकूलित होने वाले रिस्पॉन्सिव लेआउट बनाने के लिए कौन सा display मान सबसे अच्छा है?",
    options_en: ["flex", "block", "inline", "none"],
    options_hi: ["फ्लेक्स", "ब्लॉक", "इनलाइन", "नन"],
    answer_en: "flex",
    answer_hi: "फ्लेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which display value sets an element to behave like a table column group?",
    question_hi: "कौन सा display मान एलिमेंट को टेबल कॉलम ग्रुप की तरह व्यवहार करने देता है?",
    options_en: ["table-column-group", "block", "inline", "flex"],
    options_hi: ["टेबल-कॉलम-ग्रुप", "ब्लॉक", "इनलाइन", "फ्लेक्स"],
    answer_en: "table-column-group",
    answer_hi: "टेबल-कॉलम-ग्रुप",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which display value is used for table captions?",
    question_hi: "टेबल कैप्शन के लिए कौन सा display मान उपयोग किया जाता है?",
    options_en: ["table-caption", "block", "inline", "flex"],
    options_hi: ["टेबल-कैप्शन", "ब्लॉक", "इनलाइन", "फ्लेक्स"],
    answer_en: "table-caption",
    answer_hi: "टेबल-कैप्शन",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which display value is useful for making a flex container that stacks items vertically?",
    question_hi: "वर्टिकल आइटम्स को स्टैक करने वाला फ्लेक्स कंटेनर बनाने के लिए कौन सा display मान उपयोगी है?",
    options_en: ["flex", "grid", "block", "inline"],
    options_hi: ["फ्लेक्स", "ग्रिड", "ब्लॉक", "इनलाइन"],
    answer_en: "flex",
    answer_hi: "फ्लेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which display value allows elements to flow inline with other elements but also accept box model properties?",
    question_hi: "कौन सा display मान एलिमेंट्स को अन्य एलिमेंट्स के साथ इनलाइन फ्लो करने देता है लेकिन बॉक्स मॉडल प्रॉपर्टीज़ भी स्वीकार करता है?",
    options_en: ["inline-block", "inline", "block", "flex"],
    options_hi: ["इनलाइन-ब्लॉक", "इनलाइन", "ब्लॉक", "फ्लेक्स"],
    answer_en: "inline-block",
    answer_hi: "इनलाइन-ब्लॉक",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which display value is used to reset an element to default block behavior?",
    question_hi: "कौन सा display मान एलिमेंट को डिफ़ॉल्ट ब्लॉक व्यवहार में रीसेट करने के लिए उपयोग किया जाता है?",
    options_en: ["block", "inline", "none", "flex"],
    options_hi: ["ब्लॉक", "इनलाइन", "नन", "फ्लेक्स"],
    answer_en: "block",
    answer_hi: "ब्लॉक",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which display value lets flex items be distributed along the main axis?",
    question_hi: "कौन सा display मान फ्लेक्स आइटम्स को मुख्य अक्ष के साथ वितरित करने देता है?",
    options_en: ["flex", "inline-flex", "block", "inline"],
    options_hi: ["फ्लेक्स", "इनलाइन-फ्लेक्स", "ब्लॉक", "इनलाइन"],
    answer_en: "flex",
    answer_hi: "फ्लेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which display value is used for table footers?",
    question_hi: "टेबल फुटर के लिए कौन सा display मान उपयोग किया जाता है?",
    options_en: ["table-footer-group", "block", "inline", "flex"],
    options_hi: ["टेबल-फुटर-ग्रुप", "ब्लॉक", "इनलाइन", "फ्लेक्स"],
    answer_en: "table-footer-group",
    answer_hi: "टेबल-फुटर-ग्रुप",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which display value is used for table header groups?",
    question_hi: "टेबल हेडर ग्रुप के लिए कौन सा display मान उपयोग किया जाता है?",
    options_en: ["table-header-group", "block", "inline", "flex"],
    options_hi: ["टेबल-हेडर-ग्रुप", "ब्लॉक", "इनलाइन", "फ्लेक्स"],
    answer_en: "table-header-group",
    answer_hi: "टेबल-हेडर-ग्रुप",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which display value is best suited for a container that needs to adapt to both rows and columns?",
    question_hi: "कौन सा display मान ऐसे कंटेनर के लिए सबसे उपयुक्त है जिसे पंक्तियों और स्तंभों दोनों में अनुकूलित होना होता है?",
    options_en: ["grid", "flex", "block", "inline-block"],
    options_hi: ["ग्रिड", "फ्लेक्स", "ब्लॉक", "इनलाइन-ब्लॉक"],
    answer_en: "grid",
    answer_hi: "ग्रिड",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which display value allows an element to behave like a run-in container?",
    question_hi: "कौन सा display मान एक एलिमेंट को रन-इन कंटेनर की तरह व्यवहार करने देता है?",
    options_en: ["run-in", "block", "inline", "flex"],
    options_hi: ["रन-इन", "ब्लॉक", "इनलाइन", "फ्लेक्स"],
    answer_en: "run-in",
    answer_hi: "रन-इन",
    attempted: false,
    selected: ""
  }
      ],
      27:[
 {
    num: 1,
    question_en: "What is the purpose of media queries in CSS?",
    question_hi: "CSS में मीडिया क्वेरी का उद्देश्य क्या है?",
    options_en: ["To apply styles based on device properties", "To animate elements", "To create JavaScript functions", "To store data"],
    options_hi: ["डिवाइस गुणों के आधार पर शैलियाँ लागू करने के लिए", "एलिमेंट्स को एनीमेट करने के लिए", "JavaScript फ़ंक्शन बनाने के लिए", "डेटा स्टोर करने के लिए"],
    answer_en: "To apply styles based on device properties",
    answer_hi: "डिवाइस गुणों के आधार पर शैलियाँ लागू करने के लिए",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which keyword is used to define a media query?",
    question_hi: "मीडिया क्वेरी को परिभाषित करने के लिए कौन-सा कीवर्ड उपयोग किया जाता है?",
    options_en: ["@media", "@query", "@responsive", "@screen"],
    options_hi: ["@media", "@query", "@responsive", "@screen"],
    answer_en: "@media",
    answer_hi: "@media",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "What does the 'min-width' feature test in a media query?",
    question_hi: "'min-width' मीडिया क्वेरी में क्या परीक्षण करता है?",
    options_en: ["Minimum font size", "Minimum height", "Minimum screen width", "Minimum screen resolution"],
    options_hi: ["न्यूनतम फ़ॉन्ट आकार", "न्यूनतम ऊंचाई", "न्यूनतम स्क्रीन चौड़ाई", "न्यूनतम स्क्रीन रेजोल्यूशन"],
    answer_en: "Minimum screen width",
    answer_hi: "न्यूनतम स्क्रीन चौड़ाई",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "What unit is commonly used in media queries for width?",
    question_hi: "मीडिया क्वेरी में चौड़ाई के लिए सामान्यतः कौन-सी इकाई उपयोग होती है?",
    options_en: ["em", "rem", "px", "%"],
    options_hi: ["em", "rem", "px", "%"],
    answer_en: "px",
    answer_hi: "px",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which of the following is a valid media type?",
    question_hi: "निम्नलिखित में से कौन-सा एक मान्य मीडिया प्रकार है?",
    options_en: ["text", "html", "screen", "canvas"],
    options_hi: ["टेक्स्ट", "एचटीएमएल", "स्क्रीन", "कैनवस"],
    answer_en: "screen",
    answer_hi: "स्क्रीन",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "How do media queries enhance responsive design?",
    question_hi: "मीडिया क्वेरी उत्तरदायी डिज़ाइन को कैसे बेहतर बनाती हैं?",
    options_en: ["By fixing widths", "By applying fixed layout", "By adapting layout to device", "By disabling styles"],
    options_hi: ["चौड़ाई को स्थिर करके", "स्थिर लेआउट लागू करके", "डिवाइस के अनुसार लेआउट को अनुकूल बनाकर", "शैलियाँ अक्षम करके"],
    answer_en: "By adapting layout to device",
    answer_hi: "डिवाइस के अनुसार लेआउट को अनुकूल बनाकर",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which media feature checks the orientation of the device?",
    question_hi: "कौन-सा मीडिया फीचर डिवाइस की ओरिएंटेशन की जांच करता है?",
    options_en: ["min-width", "max-height", "orientation", "aspect-ratio"],
    options_hi: ["min-width", "max-height", "orientation", "aspect-ratio"],
    answer_en: "orientation",
    answer_hi: "orientation",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which orientation value indicates the device is held vertically?",
    question_hi: "कौन-सा ओरिएंटेशन मान डिवाइस के ऊर्ध्व स्थिति में होने को दर्शाता है?",
    options_en: ["landscape", "portrait", "vertical", "upright"],
    options_hi: ["लैंडस्केप", "पोर्ट्रेट", "वर्टिकल", "अप्राइट"],
    answer_en: "portrait",
    answer_hi: "पोर्ट्रेट",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "What is the use of 'only' keyword in media queries?",
    question_hi: "मीडिया क्वेरी में 'only' कीवर्ड का उपयोग क्या है?",
    options_en: ["Exclude older browsers", "Include all browsers", "Target specific devices", "Ignore media queries"],
    options_hi: ["पुराने ब्राउज़रों को छोड़ने के लिए", "सभी ब्राउज़रों को शामिल करने के लिए", "विशिष्ट डिवाइस को लक्षित करने के लिए", "मीडिया क्वेरी को अनदेखा करने के लिए"],
    answer_en: "Exclude older browsers",
    answer_hi: "पुराने ब्राउज़रों को छोड़ने के लिए",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which syntax is correct for setting max-width in a media query?",
    question_hi: "मीडिया क्वेरी में max-width सेट करने के लिए सही सिंटैक्स क्या है?",
    options_en: ["@media screen and max-width:600px", "@media screen and (max-width:600px)", "@media (max-width=600px)", "@media screen max-width:600px"],
    options_hi: ["@media screen and max-width:600px", "@media screen and (max-width:600px)", "@media (max-width=600px)", "@media screen max-width:600px"],
    answer_en: "@media screen and (max-width:600px)",
    answer_hi: "@media screen and (max-width:600px)",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which feature allows styles for both portrait and landscape?",
    question_hi: "कौन-सी विशेषता पोर्ट्रेट और लैंडस्केप दोनों के लिए शैलियाँ लागू करने देती है?",
    options_en: ["min-width", "max-height", "aspect-ratio", "orientation"],
    options_hi: ["min-width", "max-height", "aspect-ratio", "orientation"],
    answer_en: "orientation",
    answer_hi: "orientation",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "What is the main benefit of responsive design?",
    question_hi: "उत्तरदायी डिज़ाइन का मुख्य लाभ क्या है?",
    options_en: ["Faster loading", "Attractive colors", "Works on all devices", "More animations"],
    options_hi: ["तेज़ लोडिंग", "आकर्षक रंग", "सभी डिवाइसों पर कार्य करता है", "अधिक एनिमेशन"],
    answer_en: "Works on all devices",
    answer_hi: "सभी डिवाइसों पर कार्य करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which media feature checks the height of the device?",
    question_hi: "कौन-सा मीडिया फीचर डिवाइस की ऊँचाई की जांच करता है?",
    options_en: ["min-height", "max-width", "orientation", "device-width"],
    options_hi: ["min-height", "max-width", "orientation", "device-width"],
    answer_en: "min-height",
    answer_hi: "min-height",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "What is the default media type if none is specified?",
    question_hi: "यदि कोई मीडिया प्रकार निर्दिष्ट नहीं किया गया है, तो डिफ़ॉल्ट मीडिया प्रकार क्या होता है?",
    options_en: ["screen", "all", "print", "speech"],
    options_hi: ["स्क्रीन", "ऑल", "प्रिंट", "स्पीच"],
    answer_en: "all",
    answer_hi: "ऑल",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which property helps hide content in small screens?",
    question_hi: "कौन-सी प्रॉपर्टी छोटे स्क्रीन पर कंटेंट को छिपाने में मदद करती है?",
    options_en: ["display: none", "opacity: 0", "visibility: hidden", "All of these"],
    options_hi: ["display: none", "opacity: 0", "visibility: hidden", "इनमें से सभी"],
    answer_en: "All of these",
    answer_hi: "इनमें से सभी",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which media type is used for printed documents?",
    question_hi: "प्रिंटेड दस्तावेजों के लिए कौन-सा मीडिया टाइप उपयोग किया जाता है?",
    options_en: ["screen", "print", "all", "text"],
    options_hi: ["स्क्रीन", "प्रिंट", "ऑल", "टेक्स्ट"],
    answer_en: "print",
    answer_hi: "प्रिंट",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which is NOT a valid media feature?",
    question_hi: "निम्न में से कौन एक मान्य मीडिया फीचर नहीं है?",
    options_en: ["color", "min-width", "max-height", "font-size"],
    options_hi: ["कलर", "मिन-विथ", "मैक्स-हाइट", "फॉन्ट-साइज़"],
    answer_en: "font-size",
    answer_hi: "फॉन्ट-साइज़",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which keyword is used to combine multiple conditions?",
    question_hi: "कई शर्तों को जोड़ने के लिए कौन-सा कीवर्ड उपयोग किया जाता है?",
    options_en: ["and", "or", "with", "if"],
    options_hi: ["and", "or", "with", "if"],
    answer_en: "and",
    answer_hi: "and",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which one makes your site mobile friendly?",
    question_hi: "आपकी साइट को मोबाइल फ्रेंडली बनाने के लिए क्या उपयोगी है?",
    options_en: ["Fixed layout", "Media queries", "JavaScript", "Colorful background"],
    options_hi: ["फिक्स्ड लेआउट", "मीडिया क्वेरी", "JavaScript", "रंगीन बैकग्राउंड"],
    answer_en: "Media queries",
    answer_hi: "मीडिया क्वेरी",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which of the following is true about responsive design?",
    question_hi: "उत्तरदायी डिज़ाइन के बारे में निम्न में से कौन-सा सत्य है?",
    options_en: ["Uses media queries", "Adjusts layout", "Improves UX", "All of the above"],
    options_hi: ["मीडिया क्वेरी का उपयोग करता है", "लेआउट को समायोजित करता है", "यूज़र अनुभव को बेहतर बनाता है", "उपरोक्त सभी"],
    answer_en: "All of the above",
    answer_hi: "उपरोक्त सभी",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "What does '@media only screen and (min-width: 768px)' mean?",
    question_hi: "'@media only screen and (min-width: 768px)' का क्या मतलब है?",
    options_en: ["Applies only to screens wider than 768px", "Applies to all devices", "Applies below 768px", "Applies to printers"],
    options_hi: ["केवल 768px से बड़ी स्क्रीन पर लागू होता है", "सभी डिवाइसों पर लागू होता है", "768px से कम पर लागू होता है", "प्रिंटर पर लागू होता है"],
    answer_en: "Applies only to screens wider than 768px",
    answer_hi: "केवल 768px से बड़ी स्क्रीन पर लागू होता है",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "What is the typical breakpoint for mobile devices?",
    question_hi: "मोबाइल डिवाइसेस के लिए सामान्य ब्रेकपॉइंट क्या है?",
    options_en: ["320px", "768px", "1024px", "1440px"],
    options_hi: ["320px", "768px", "1024px", "1440px"],
    answer_en: "768px",
    answer_hi: "768px",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which media feature is used to check resolution?",
    question_hi: "कौन-सा मीडिया फीचर रेजोल्यूशन की जांच के लिए उपयोग किया जाता है?",
    options_en: ["resolution", "min-width", "aspect-ratio", "color"],
    options_hi: ["resolution", "min-width", "aspect-ratio", "color"],
    answer_en: "resolution",
    answer_hi: "resolution",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "What is meant by a flexible layout?",
    question_hi: "लचीले लेआउट का क्या अर्थ है?",
    options_en: ["Fixed width", "Changes with screen size", "Centered text", "Responsive color"],
    options_hi: ["स्थिर चौड़ाई", "स्क्रीन आकार के अनुसार बदलता है", "केंद्रित टेक्स्ट", "उत्तरदायी रंग"],
    answer_en: "Changes with screen size",
    answer_hi: "स्क्रीन आकार के अनुसार बदलता है",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which one is NOT a valid value for orientation?",
    question_hi: "निम्न में से कौन-सा ओरिएंटेशन के लिए मान्य मान नहीं है?",
    options_en: ["portrait", "landscape", "square", "none"],
    options_hi: ["पोर्ट्रेट", "लैंडस्केप", "स्क्वायर", "नन"],
    answer_en: "square",
    answer_hi: "स्क्वायर",
    attempted: false,
    selected: ""
  },
    {
    num: 26,
    question_en: "Which media feature checks the device's aspect ratio?",
    question_hi: "कौन-सा मीडिया फीचर डिवाइस के आस्पेक्ट अनुपात की जांच करता है?",
    options_en: ["aspect-ratio", "resolution", "orientation", "height"],
    options_hi: ["aspect-ratio", "resolution", "orientation", "height"],
    answer_en: "aspect-ratio",
    answer_hi: "aspect-ratio",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which tool is best for testing responsive design?",
    question_hi: "उत्तरदायी डिज़ाइन का परीक्षण करने के लिए सबसे अच्छा टूल कौन-सा है?",
    options_en: ["Photoshop", "Browser DevTools", "MS Word", "Paint"],
    options_hi: ["फोटोशॉप", "ब्राउज़र डेवटूल्स", "एमएस वर्ड", "पेंट"],
    answer_en: "Browser DevTools",
    answer_hi: "ब्राउज़र डेवटूल्स",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "What does 'responsive' mean in web design?",
    question_hi: "वेब डिज़ाइन में 'उत्तरदायी' का क्या मतलब है?",
    options_en: ["Animated", "Adjusts to screen size", "Fast loading", "Server-based"],
    options_hi: ["एनिमेटेड", "स्क्रीन आकार के अनुसार समायोजित होता है", "तेज़ लोडिंग", "सर्वर-आधारित"],
    answer_en: "Adjusts to screen size",
    answer_hi: "स्क्रीन आकार के अनुसार समायोजित होता है",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "How many breakpoints are recommended in responsive design?",
    question_hi: "उत्तरदायी डिज़ाइन में कितने ब्रेकपॉइंट्स की सिफारिश की जाती है?",
    options_en: ["At least 1", "2-3", "4-5", "As needed"],
    options_hi: ["कम से कम 1", "2-3", "4-5", "जितने ज़रूरत हों"],
    answer_en: "As needed",
    answer_hi: "जितने ज़रूरत हों",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which one is a mobile-first approach?",
    question_hi: "निम्न में से कौन मोबाइल-फर्स्ट दृष्टिकोण है?",
    options_en: ["Using max-width first", "Designing for desktop only", "Using min-width first", "Using JavaScript media"],
    options_hi: ["पहले max-width का उपयोग करना", "केवल डेस्कटॉप के लिए डिज़ाइन करना", "पहले min-width का उपयोग करना", "JavaScript मीडिया का उपयोग करना"],
    answer_en: "Using min-width first",
    answer_hi: "पहले min-width का उपयोग करना",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "What is a breakpoint?",
    question_hi: "ब्रेकपॉइंट क्या होता है?",
    options_en: ["Screen resolution", "CSS file", "Device rotation", "Width where layout changes"],
    options_hi: ["स्क्रीन रेजोल्यूशन", "CSS फ़ाइल", "डिवाइस रोटेशन", "चौड़ाई जहाँ लेआउट बदलता है"],
    answer_en: "Width where layout changes",
    answer_hi: "चौड़ाई जहाँ लेआउट बदलता है",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which property is commonly adjusted in media queries?",
    question_hi: "मीडिया क्वेरी में सामान्यतः कौन-सी प्रॉपर्टी समायोजित की जाती है?",
    options_en: ["color", "font-weight", "width", "text-shadow"],
    options_hi: ["रंग", "फ़ॉन्ट-वेट", "चौड़ाई", "टेक्स्ट-शैडो"],
    answer_en: "width",
    answer_hi: "चौड़ाई",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which media type applies to all devices?",
    question_hi: "कौन-सा मीडिया प्रकार सभी डिवाइसों पर लागू होता है?",
    options_en: ["screen", "print", "all", "device"],
    options_hi: ["स्क्रीन", "प्रिंट", "ऑल", "डिवाइस"],
    answer_en: "all",
    answer_hi: "ऑल",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which of these is a best practice for responsive design?",
    question_hi: "निम्न में से कौन उत्तरदायी डिज़ाइन के लिए सर्वोत्तम अभ्यास है?",
    options_en: ["Use fixed units", "Ignore media queries", "Use relative units", "Avoid CSS"],
    options_hi: ["फिक्स्ड यूनिट्स का उपयोग करें", "मीडिया क्वेरी को अनदेखा करें", "रिलेटिव यूनिट्स का उपयोग करें", "CSS से बचें"],
    answer_en: "Use relative units",
    answer_hi: "रिलेटिव यूनिट्स का उपयोग करें",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which one is not used in media queries?",
    question_hi: "निम्न में से कौन मीडिया क्वेरी में उपयोग नहीं होता?",
    options_en: ["min-width", "max-width", "color", "padding"],
    options_hi: ["min-width", "max-width", "color", "padding"],
    answer_en: "padding",
    answer_hi: "padding",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "What is the advantage of using 'em' in media queries?",
    question_hi: "मीडिया क्वेरी में 'em' का उपयोग करने का क्या लाभ है?",
    options_en: ["Fixed sizing", "Resolution independence", "For mobile only", "Slower performance"],
    options_hi: ["फिक्स्ड साइजिंग", "रेज़ोल्यूशन स्वतंत्रता", "केवल मोबाइल के लिए", "धीमा प्रदर्शन"],
    answer_en: "Resolution independence",
    answer_hi: "रेज़ोल्यूशन स्वतंत्रता",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which screen size is typically considered a desktop view?",
    question_hi: "कौन-सा स्क्रीन आकार सामान्यतः डेस्कटॉप दृश्य माना जाता है?",
    options_en: ["320px", "768px", "1024px", "1440px"],
    options_hi: ["320px", "768px", "1024px", "1440px"],
    answer_en: "1024px",
    answer_hi: "1024px",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which property in media queries helps adjust font size?",
    question_hi: "मीडिया क्वेरी में कौन-सी प्रॉपर्टी फ़ॉन्ट साइज समायोजित करने में मदद करती है?",
    options_en: ["font-size", "line-height", "color", "padding"],
    options_hi: ["फ़ॉन्ट साइज", "लाइन-हाइट", "रंग", "पैडिंग"],
    answer_en: "font-size",
    answer_hi: "फ़ॉन्ट साइज",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which one is not a unit for screen width?",
    question_hi: "निम्न में से कौन स्क्रीन चौड़ाई के लिए इकाई नहीं है?",
    options_en: ["px", "%", "vh", "kg"],
    options_hi: ["px", "%", "vh", "किलोग्राम"],
    answer_en: "kg",
    answer_hi: "किलोग्राम",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which of these is important for accessibility in responsive design?",
    question_hi: "उत्तरदायी डिज़ाइन में इनमें से कौन एक्सेसिबिलिटी के लिए महत्वपूर्ण है?",
    options_en: ["High contrast", "Fixed layout", "Flashy colors", "Fixed font-size"],
    options_hi: ["हाई कंट्रास्ट", "फिक्स्ड लेआउट", "चमकीले रंग", "फिक्स्ड फ़ॉन्ट-साइज"],
    answer_en: "High contrast",
    answer_hi: "हाई कंट्रास्ट",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "What does 'max-width: 1200px' mean in media query?",
    question_hi: "मीडिया क्वेरी में 'max-width: 1200px' का क्या अर्थ है?",
    options_en: ["Minimum width of 1200px", "Applies when width is ≤ 1200px", "Always applies", "Only for mobile"],
    options_hi: ["न्यूनतम चौड़ाई 1200px", "जब चौड़ाई ≤ 1200px हो", "हमेशा लागू होता है", "केवल मोबाइल के लिए"],
    answer_en: "Applies when width is ≤ 1200px",
    answer_hi: "जब चौड़ाई ≤ 1200px हो",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which one is NOT a responsive design framework?",
    question_hi: "निम्न में से कौन उत्तरदायी डिज़ाइन फ्रेमवर्क नहीं है?",
    options_en: ["Bootstrap", "Tailwind", "Foundation", "Photoshop"],
    options_hi: ["बूटस्ट्रैप", "टेलविंड", "फाउंडेशन", "फोटोशॉप"],
    answer_en: "Photoshop",
    answer_hi: "फोटोशॉप",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which attribute is used in HTML to help with responsive images?",
    question_hi: "HTML में उत्तरदायी इमेज के लिए कौन-सा एट्रिब्यूट उपयोग होता है?",
    options_en: ["src", "srcset", "alt", "title"],
    options_hi: ["src", "srcset", "alt", "title"],
    answer_en: "srcset",
    answer_hi: "srcset",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "What does 'viewport' meta tag control?",
    question_hi: "'viewport' मेटा टैग क्या नियंत्रित करता है?",
    options_en: ["Font", "Device width and scale", "Image size", "Animation speed"],
    options_hi: ["फ़ॉन्ट", "डिवाइस की चौड़ाई और स्केल", "इमेज साइज", "एनिमेशन स्पीड"],
    answer_en: "Device width and scale",
    answer_hi: "डिवाइस की चौड़ाई और स्केल",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which meta tag is essential for responsive websites?",
    question_hi: "उत्तरदायी वेबसाइट्स के लिए कौन-सा मेटा टैग आवश्यक है?",
    options_en: ["<meta charset>", "<meta viewport>", "<meta keywords>", "<meta author>"],
    options_hi: ["<meta charset>", "<meta viewport>", "<meta keywords>", "<meta author>"],
    answer_en: "<meta viewport>",
    answer_hi: "<meta viewport>",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which is the best layout strategy for responsiveness?",
    question_hi: "उत्तरदायी डिज़ाइन के लिए सबसे अच्छा लेआउट स्ट्रैटेजी कौन-सा है?",
    options_en: ["Fixed layout", "Fluid grid", "Absolute layout", "Centered div"],
    options_hi: ["फिक्स्ड लेआउट", "फ्लूइड ग्रिड", "एब्सोल्यूट लेआउट", "सेंटरड डिव"],
    answer_en: "Fluid grid",
    answer_hi: "फ्लूइड ग्रिड",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which value of box-sizing is better for responsive layouts?",
    question_hi: "उत्तरदायी लेआउट के लिए box-sizing का कौन-सा मान बेहतर होता है?",
    options_en: ["content-box", "border-box", "padding-box", "margin-box"],
    options_hi: ["content-box", "border-box", "padding-box", "margin-box"],
    answer_en: "border-box",
    answer_hi: "border-box",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which CSS unit adapts well to screen size?",
    question_hi: "कौन-सी CSS यूनिट स्क्रीन साइज के अनुसार अच्छे से अनुकूल होती है?",
    options_en: ["px", "em", "rem", "%"],
    options_hi: ["px", "em", "rem", "%"],
    answer_en: "%",
    answer_hi: "%",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which tag should you use to ensure mobile responsiveness?",
    question_hi: "मोबाइल उत्तरदायित्व सुनिश्चित करने के लिए कौन-सा टैग उपयोग करें?",
    options_en: ["<meta viewport>", "<link>", "<script>", "<style>"],
    options_hi: ["<meta viewport>", "<link>", "<script>", "<style>"],
    answer_en: "<meta viewport>",
    answer_hi: "<meta viewport>",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which value of width makes element adjust to screen?",
    question_hi: "कौन-सा width मान एलिमेंट को स्क्रीन के अनुसार समायोजित करता है?",
    options_en: ["auto", "100%", "inherit", "fit-content"],
    options_hi: ["auto", "100%", "inherit", "fit-content"],
    answer_en: "100%",
    answer_hi: "100%",
    attempted: false,
    selected: ""
  }
      ],
      28:[
       {
    num: 1,
    question_en: "Which pseudo-class applies styles to the first child element of its parent?",
    question_hi: "कौन सा pseudo-class अपने पैरेंट के पहले बच्चे एलिमेंट पर स्टाइल लागू करता है?",
    options_en: [":first-child", ":last-child", ":nth-child", ":only-child"],
    options_hi: ["पहला बच्चा (:first-child)", "आखिरी बच्चा (:last-child)", "किसी विशेष बच्चे (:nth-child)", "केवल बच्चा (:only-child)"],
    answer_en: ":first-child",
    answer_hi: "पहला बच्चा",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which pseudo-class applies styles to the last child element of its parent?",
    question_hi: "कौन सा pseudo-class अपने पैरेंट के आखिरी बच्चे एलिमेंट पर स्टाइल लागू करता है?",
    options_en: [":last-child", ":first-child", ":nth-child", ":only-child"],
    options_hi: ["आखिरी बच्चा (:last-child)", "पहला बच्चा (:first-child)", "किसी विशेष बच्चे (:nth-child)", "केवल बच्चा (:only-child)"],
    answer_en: ":last-child",
    answer_hi: "आखिरी बच्चा",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which pseudo-class applies styles to only child elements of their parent?",
    question_hi: "कौन सा pseudo-class उन एलिमेंट्स पर स्टाइल लागू करता है जो अपने पैरेंट के केवल एकमात्र बच्चे होते हैं?",
    options_en: [":only-child", ":first-child", ":last-child", ":nth-child"],
    options_hi: ["केवल बच्चा (:only-child)", "पहला बच्चा (:first-child)", "आखिरी बच्चा (:last-child)", "किसी विशेष बच्चे (:nth-child)"],
    answer_en: ":only-child",
    answer_hi: "केवल बच्चा",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which pseudo-class applies styles to elements based on their position in a group?",
    question_hi: "कौन सा pseudo-class एलिमेंट्स को उनके समूह में स्थिति के आधार पर स्टाइल करता है?",
    options_en: [":nth-child", ":first-child", ":last-child", ":only-child"],
    options_hi: ["किसी विशेष बच्चे (:nth-child)", "पहला बच्चा (:first-child)", "आखिरी बच्चा (:last-child)", "केवल बच्चा (:only-child)"],
    answer_en: ":nth-child",
    answer_hi: "किसी विशेष बच्चा",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which pseudo-class applies styles to elements that are the nth of their type?",
    question_hi: "कौन सा pseudo-class एलिमेंट को उनके प्रकार के nवें स्थान पर होने पर स्टाइल करता है?",
    options_en: [":nth-of-type", ":nth-child", ":first-of-type", ":last-of-type"],
    options_hi: ["प्रकार का nवां (:nth-of-type)", "किसी विशेष बच्चे (:nth-child)", "प्रकार का पहला (:first-of-type)", "प्रकार का आखिरी (:last-of-type)"],
    answer_en: ":nth-of-type",
    answer_hi: "प्रकार का nवां",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which pseudo-class applies styles to the first element of its type among its siblings?",
    question_hi: "कौन सा pseudo-class अपने समान प्रकार के पहले एलिमेंट पर स्टाइल लागू करता है?",
    options_en: [":first-of-type", ":last-of-type", ":nth-of-type", ":only-of-type"],
    options_hi: ["प्रकार का पहला (:first-of-type)", "प्रकार का आखिरी (:last-of-type)", "प्रकार का nवां (:nth-of-type)", "केवल प्रकार का (:only-of-type)"],
    answer_en: ":first-of-type",
    answer_hi: "प्रकार का पहला",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which pseudo-class applies styles to the last element of its type among its siblings?",
    question_hi: "कौन सा pseudo-class अपने समान प्रकार के आखिरी एलिमेंट पर स्टाइल लागू करता है?",
    options_en: [":last-of-type", ":first-of-type", ":nth-of-type", ":only-of-type"],
    options_hi: ["प्रकार का आखिरी (:last-of-type)", "प्रकार का पहला (:first-of-type)", "प्रकार का nवां (:nth-of-type)", "केवल प्रकार का (:only-of-type)"],
    answer_en: ":last-of-type",
    answer_hi: "प्रकार का आखिरी",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which pseudo-class applies styles to elements that are the only one of their type among siblings?",
    question_hi: "कौन सा pseudo-class उन एलिमेंट्स पर स्टाइल लागू करता है जो अपने प्रकार के केवल एकमात्र होते हैं?",
    options_en: [":only-of-type", ":first-of-type", ":last-of-type", ":nth-of-type"],
    options_hi: ["केवल प्रकार का (:only-of-type)", "प्रकार का पहला (:first-of-type)", "प्रकार का आखिरी (:last-of-type)", "प्रकार का nवां (:nth-of-type)"],
    answer_en: ":only-of-type",
    answer_hi: "केवल प्रकार का",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which pseudo-class applies styles to an element when the user hovers over it?",
    question_hi: "कौन सा pseudo-class तब स्टाइल लागू करता है जब यूजर उस एलिमेंट पर होवर करता है?",
    options_en: [":hover", ":active", ":focus", ":visited"],
    options_hi: ["होवर (:hover)", "सक्रिय (:active)", "फोकस (:focus)", "देखा गया (:visited)"],
    answer_en: ":hover",
    answer_hi: "होवर",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which pseudo-class applies styles to an element when it is being clicked?",
    question_hi: "कौन सा pseudo-class तब स्टाइल लागू करता है जब एलिमेंट पर क्लिक किया जा रहा हो?",
    options_en: [":active", ":hover", ":focus", ":visited"],
    options_hi: ["सक्रिय (:active)", "होवर (:hover)", "फोकस (:focus)", "देखा गया (:visited)"],
    answer_en: ":active",
    answer_hi: "सक्रिय",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which pseudo-class applies styles to an element when it has focus?",
    question_hi: "कौन सा pseudo-class तब स्टाइल लागू करता है जब एलिमेंट पर फोकस होता है?",
    options_en: [":focus", ":hover", ":active", ":visited"],
    options_hi: ["फोकस (:focus)", "होवर (:hover)", "सक्रिय (:active)", "देखा गया (:visited)"],
    answer_en: ":focus",
    answer_hi: "फोकस",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which pseudo-class applies styles to visited links?",
    question_hi: "कौन सा pseudo-class विज़िट किए गए लिंक पर स्टाइल लागू करता है?",
    options_en: [":visited", ":link", ":hover", ":active"],
    options_hi: ["देखा गया (:visited)", "लिंक (:link)", "होवर (:hover)", "सक्रिय (:active)"],
    answer_en: ":visited",
    answer_hi: "देखा गया",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which pseudo-class applies styles to unvisited links?",
    question_hi: "कौन सा pseudo-class अनविजिट किए गए लिंक पर स्टाइल लागू करता है?",
    options_en: [":link", ":visited", ":hover", ":active"],
    options_hi: ["लिंक (:link)", "देखा गया (:visited)", "होवर (:hover)", "सक्रिय (:active)"],
    answer_en: ":link",
    answer_hi: "लिंक",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which pseudo-class applies styles to checked checkboxes or radio buttons?",
    question_hi: "कौन सा pseudo-class चेक किए गए चेकबॉक्स या रेडियो बटन पर स्टाइल लागू करता है?",
    options_en: [":checked", ":disabled", ":enabled", ":selected"],
    options_hi: ["चेक किया हुआ (:checked)", "अक्षम (:disabled)", "सक्षम (:enabled)", "चुना हुआ (:selected)"],
    answer_en: ":checked",
    answer_hi: "चेक किया हुआ",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which pseudo-class applies styles to disabled elements?",
    question_hi: "कौन सा pseudo-class अक्षम एलिमेंट्स पर स्टाइल लागू करता है?",
    options_en: [":disabled", ":enabled", ":checked", ":selected"],
    options_hi: ["अक्षम (:disabled)", "सक्षम (:enabled)", "चेक किया हुआ (:checked)", "चुना हुआ (:selected)"],
    answer_en: ":disabled",
    answer_hi: "अक्षम",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which pseudo-class applies styles to enabled elements?",
    question_hi: "कौन सा pseudo-class सक्षम एलिमेंट्स पर स्टाइल लागू करता है?",
    options_en: [":enabled", ":disabled", ":checked", ":selected"],
    options_hi: ["सक्षम (:enabled)", "अक्षम (:disabled)", "चेक किया हुआ (:checked)", "चुना हुआ (:selected)"],
    answer_en: ":enabled",
    answer_hi: "सक्षम",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which pseudo-class applies styles to selected options in a dropdown?",
    question_hi: "कौन सा pseudo-class ड्रॉपडाउन में चुने गए विकल्पों पर स्टाइल लागू करता है?",
    options_en: [":selected", ":checked", ":disabled", ":enabled"],
    options_hi: ["चुना हुआ (:selected)", "चेक किया हुआ (:checked)", "अक्षम (:disabled)", "सक्षम (:enabled)"],
    answer_en: ":selected",
    answer_hi: "चुना हुआ",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which pseudo-class applies styles to elements when the input is invalid?",
    question_hi: "कौन सा pseudo-class तब स्टाइल लागू करता है जब इनपुट अमान्य होता है?",
    options_en: [":invalid", ":valid", ":checked", ":enabled"],
    options_hi: ["अमान्य (:invalid)", "मान्य (:valid)", "चेक किया हुआ (:checked)", "सक्षम (:enabled)"],
    answer_en: ":invalid",
    answer_hi: "अमान्य",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which pseudo-class applies styles to elements when the input is valid?",
    question_hi: "कौन सा pseudo-class तब स्टाइल लागू करता है जब इनपुट मान्य होता है?",
    options_en: [":valid", ":invalid", ":checked", ":enabled"],
    options_hi: ["मान्य (:valid)", "अमान्य (:invalid)", "चेक किया हुआ (:checked)", "सक्षम (:enabled)"],
    answer_en: ":valid",
    answer_hi: "मान्य",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which pseudo-class applies styles to empty elements?",
    question_hi: "कौन सा pseudo-class खाली एलिमेंट्स पर स्टाइल लागू करता है?",
    options_en: [":empty", ":blank", ":null", ":void"],
    options_hi: ["खाली (:empty)", "खाली (:blank)", "नल (:null)", "खाली (:void)"],
    answer_en: ":empty",
    answer_hi: "खाली",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which pseudo-class applies styles to elements not matched by a selector?",
    question_hi: "कौन सा pseudo-class उन एलिमेंट्स पर स्टाइल लागू करता है जो सेलेक्टर से मेल नहीं खाते?",
    options_en: [":not()", ":has()", ":is()", ":where()"],
    options_hi: ["नहीं (:not())", "है (:has())", "है (:is())", "है (:where())"],
    answer_en: ":not()",
    answer_hi: "नहीं",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which pseudo-class applies styles to elements that contain a specific selector?",
    question_hi: "कौन सा pseudo-class उन एलिमेंट्स पर स्टाइल लागू करता है जिनमें एक विशेष सेलेक्टर होता है?",
    options_en: [":has()", ":not()", ":is()", ":where()"],
    options_hi: ["है (:has())", "नहीं (:not())", "है (:is())", "है (:where())"],
    answer_en: ":has()",
    answer_hi: "है",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which pseudo-class applies styles to elements that match any of a list of selectors?",
    question_hi: "कौन सा pseudo-class उन एलिमेंट्स पर स्टाइल लागू करता है जो किसी सूची के किसी भी सेलेक्टर से मेल खाते हैं?",
    options_en: [":is()", ":not()", ":has()", ":where()"],
    options_hi: ["है (:is())", "नहीं (:not())", "है (:has())", "है (:where())"],
    answer_en: ":is()",
    answer_hi: "है",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which pseudo-class applies styles to elements that match a selector, but with no specificity?",
    question_hi: "कौन सा pseudo-class उन एलिमेंट्स पर स्टाइल लागू करता है जो सेलेक्टर से मेल खाते हैं, लेकिन बिना specificity के?",
    options_en: [":where()", ":is()", ":not()", ":has()"],
    options_hi: ["है (:where())", "है (:is())", "नहीं (:not())", "है (:has())"],
    answer_en: ":where()",
    answer_hi: "है",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which pseudo-element is used to style the first line of an element?",
    question_hi: "कौन सा pseudo-element एलिमेंट की पहली लाइन को स्टाइल करने के लिए उपयोग किया जाता है?",
    options_en: ["::first-line", "::first-letter", "::before", "::after"],
    options_hi: ["पहली लाइन (::first-line)", "पहला अक्षर (::first-letter)", "पहले (::before)", "बाद में (::after)"],
    answer_en: "::first-line",
    answer_hi: "पहली लाइन",
    attempted: false,
    selected: ""
  },
   {
    num: 26,
    question_en: "Which pseudo-element is used to style the first letter of an element?",
    question_hi: "कौन सा pseudo-element एलिमेंट के पहले अक्षर को स्टाइल करने के लिए उपयोग किया जाता है?",
    options_en: ["::first-letter", "::first-line", "::before", "::after"],
    options_hi: ["पहला अक्षर (::first-letter)", "पहली लाइन (::first-line)", "पहले (::before)", "बाद में (::after)"],
    answer_en: "::first-letter",
    answer_hi: "पहला अक्षर",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which pseudo-element inserts content before an element's content?",
    question_hi: "कौन सा pseudo-element एलिमेंट की सामग्री से पहले कंटेंट डालता है?",
    options_en: ["::before", "::after", "::first-letter", "::first-line"],
    options_hi: ["पहले (::before)", "बाद में (::after)", "पहला अक्षर (::first-letter)", "पहली लाइन (::first-line)"],
    answer_en: "::before",
    answer_hi: "पहले",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which pseudo-element inserts content after an element's content?",
    question_hi: "कौन सा pseudo-element एलिमेंट की सामग्री के बाद कंटेंट डालता है?",
    options_en: ["::after", "::before", "::first-letter", "::first-line"],
    options_hi: ["बाद में (::after)", "पहले (::before)", "पहला अक्षर (::first-letter)", "पहली लाइन (::first-line)"],
    answer_en: "::after",
    answer_hi: "बाद में",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which pseudo-class applies styles to elements that are targeted by the URL fragment?",
    question_hi: "कौन सा pseudo-class उन एलिमेंट्स पर स्टाइल लागू करता है जो URL फ्रैगमेंट द्वारा टारगेट किए गए हैं?",
    options_en: [":target", ":focus", ":active", ":hover"],
    options_hi: ["लक्षित (:target)", "फोकस (:focus)", "सक्रिय (:active)", "होवर (:hover)"],
    answer_en: ":target",
    answer_hi: "लक्षित",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which pseudo-class applies styles to elements that are enabled form controls?",
    question_hi: "कौन सा pseudo-class सक्षम फॉर्म कंट्रोल्स पर स्टाइल लागू करता है?",
    options_en: [":enabled", ":disabled", ":checked", ":selected"],
    options_hi: ["सक्षम (:enabled)", "अक्षम (:disabled)", "चेक किया हुआ (:checked)", "चुना हुआ (:selected)"],
    answer_en: ":enabled",
    answer_hi: "सक्षम",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which pseudo-class applies styles to elements that are disabled form controls?",
    question_hi: "कौन सा pseudo-class अक्षम फॉर्म कंट्रोल्स पर स्टाइल लागू करता है?",
    options_en: [":disabled", ":enabled", ":checked", ":selected"],
    options_hi: ["अक्षम (:disabled)", "सक्षम (:enabled)", "चेक किया हुआ (:checked)", "चुना हुआ (:selected)"],
    answer_en: ":disabled",
    answer_hi: "अक्षम",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which pseudo-class applies styles to elements in the default state before user interaction?",
    question_hi: "कौन सा pseudo-class यूजर इंटरैक्शन से पहले डिफ़ॉल्ट स्टेट में एलिमेंट्स पर स्टाइल लागू करता है?",
    options_en: [":default", ":focus", ":hover", ":active"],
    options_hi: ["डिफ़ॉल्ट (:default)", "फोकस (:focus)", "होवर (:hover)", "सक्रिय (:active)"],
    answer_en: ":default",
    answer_hi: "डिफ़ॉल्ट",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which pseudo-class applies styles to elements that are valid form inputs?",
    question_hi: "कौन सा pseudo-class मान्य फॉर्म इनपुट्स पर स्टाइल लागू करता है?",
    options_en: [":valid", ":invalid", ":required", ":optional"],
    options_hi: ["मान्य (:valid)", "अमान्य (:invalid)", "आवश्यक (:required)", "वैकल्पिक (:optional)"],
    answer_en: ":valid",
    answer_hi: "मान्य",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which pseudo-class applies styles to elements that are invalid form inputs?",
    question_hi: "कौन सा pseudo-class अमान्य फॉर्म इनपुट्स पर स्टाइल लागू करता है?",
    options_en: [":invalid", ":valid", ":required", ":optional"],
    options_hi: ["अमान्य (:invalid)", "मान्य (:valid)", "आवश्यक (:required)", "वैकल्पिक (:optional)"],
    answer_en: ":invalid",
    answer_hi: "अमान्य",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which pseudo-class applies styles to elements with a 'required' attribute?",
    question_hi: "कौन सा pseudo-class 'required' एट्रिब्यूट वाले एलिमेंट्स पर स्टाइल लागू करता है?",
    options_en: [":required", ":optional", ":valid", ":invalid"],
    options_hi: ["आवश्यक (:required)", "वैकल्पिक (:optional)", "मान्य (:valid)", "अमान्य (:invalid)"],
    answer_en: ":required",
    answer_hi: "आवश्यक",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which pseudo-class applies styles to elements with an 'optional' attribute?",
    question_hi: "कौन सा pseudo-class 'optional' एट्रिब्यूट वाले एलिमेंट्स पर स्टाइल लागू करता है?",
    options_en: [":optional", ":required", ":valid", ":invalid"],
    options_hi: ["वैकल्पिक (:optional)", "आवश्यक (:required)", "मान्य (:valid)", "अमान्य (:invalid)"],
    answer_en: ":optional",
    answer_hi: "वैकल्पिक",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which pseudo-class applies styles to elements that are indeterminate (like partially checked checkboxes)?",
    question_hi: "कौन सा pseudo-class उन एलिमेंट्स पर स्टाइल लागू करता है जो अनिर्णीत (जैसे आंशिक रूप से चेक किए गए चेकबॉक्स) होते हैं?",
    options_en: [":indeterminate", ":checked", ":disabled", ":enabled"],
    options_hi: ["अनिर्णीत (:indeterminate)", "चेक किया हुआ (:checked)", "अक्षम (:disabled)", "सक्षम (:enabled)"],
    answer_en: ":indeterminate",
    answer_hi: "अनिर्णीत",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which pseudo-class applies styles to elements that are read-only?",
    question_hi: "कौन सा pseudo-class केवल पढ़ने योग्य (read-only) एलिमेंट्स पर स्टाइल लागू करता है?",
    options_en: [":read-only", ":read-write", ":disabled", ":enabled"],
    options_hi: ["केवल पढ़ने योग्य (:read-only)", "पढ़ने और लिखने योग्य (:read-write)", "अक्षम (:disabled)", "सक्षम (:enabled)"],
    answer_en: ":read-only",
    answer_hi: "केवल पढ़ने योग्य",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which pseudo-class applies styles to elements that are read-write?",
    question_hi: "कौन सा pseudo-class पढ़ने और लिखने योग्य (read-write) एलिमेंट्स पर स्टाइल लागू करता है?",
    options_en: [":read-write", ":read-only", ":enabled", ":disabled"],
    options_hi: ["पढ़ने और लिखने योग्य (:read-write)", "केवल पढ़ने योग्य (:read-only)", "सक्षम (:enabled)", "अक्षम (:disabled)"],
    answer_en: ":read-write",
    answer_hi: "पढ़ने और लिखने योग्य",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which pseudo-class applies styles to elements that are in the process of being validated?",
    question_hi: "कौन सा pseudo-class उन एलिमेंट्स पर स्टाइल लागू करता है जो सत्यापन की प्रक्रिया में हैं?",
    options_en: [":pending", ":valid", ":invalid", ":required"],
    options_hi: ["लंबित (:pending)", "मान्य (:valid)", "अमान्य (:invalid)", "आवश्यक (:required)"],
    answer_en: ":pending",
    answer_hi: "लंबित",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which pseudo-class applies styles to elements that are enabled and checked?",
    question_hi: "कौन सा pseudo-class सक्षम और चेक किए गए एलिमेंट्स पर स्टाइल लागू करता है?",
    options_en: [":enabled:checked", ":disabled:checked", ":enabled", ":checked"],
    options_hi: ["सक्षम और चेक किया हुआ (:enabled:checked)", "अक्षम और चेक किया हुआ (:disabled:checked)", "सक्षम (:enabled)", "चेक किया हुआ (:checked)"],
    answer_en: ":enabled:checked",
    answer_hi: "सक्षम और चेक किया हुआ",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which pseudo-class applies styles to elements that are empty (contain no children)?",
    question_hi: "कौन सा pseudo-class खाली एलिमेंट्स (जिनमें कोई चाइल्ड नहीं होता) पर स्टाइल लागू करता है?",
    options_en: [":empty", ":blank", ":null", ":void"],
    options_hi: ["खाली (:empty)", "खाली (:blank)", "नल (:null)", "खाली (:void)"],
    answer_en: ":empty",
    answer_hi: "खाली",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which pseudo-class applies styles to elements that are enabled and focused?",
    question_hi: "कौन सा pseudo-class सक्षम और फोकस वाले एलिमेंट्स पर स्टाइल लागू करता है?",
    options_en: [":enabled:focus", ":disabled:focus", ":enabled", ":focus"],
    options_hi: ["सक्षम और फोकस (:enabled:focus)", "अक्षम और फोकस (:disabled:focus)", "सक्षम (:enabled)", "फोकस (:focus)"],
    answer_en: ":enabled:focus",
    answer_hi: "सक्षम और फोकस",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which pseudo-class applies styles to elements that are the nth-last child of their parent?",
    question_hi: "कौन सा pseudo-class पैरेंट का nवां आखिरी बच्चा एलिमेंट स्टाइल करता है?",
    options_en: [":nth-last-child", ":nth-child", ":first-child", ":last-child"],
    options_hi: ["nवां आखिरी बच्चा (:nth-last-child)", "किसी विशेष बच्चा (:nth-child)", "पहला बच्चा (:first-child)", "आखिरी बच्चा (:last-child)"],
    answer_en: ":nth-last-child",
    answer_hi: "nवां आखिरी बच्चा",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which pseudo-class applies styles to elements that are the nth-last of their type?",
    question_hi: "कौन सा pseudo-class पैरेंट के समान प्रकार का nवां आखिरी एलिमेंट स्टाइल करता है?",
    options_en: [":nth-last-of-type", ":nth-of-type", ":first-of-type", ":last-of-type"],
    options_hi: ["nवां आखिरी प्रकार (:nth-last-of-type)", "प्रकार का nवां (:nth-of-type)", "प्रकार का पहला (:first-of-type)", "प्रकार का आखिरी (:last-of-type)"],
    answer_en: ":nth-last-of-type",
    answer_hi: "nवां आखिरी प्रकार",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which pseudo-class applies styles to elements that are enabled and invalid?",
    question_hi: "कौन सा pseudo-class सक्षम और अमान्य एलिमेंट्स पर स्टाइल लागू करता है?",
    options_en: [":enabled:invalid", ":disabled:invalid", ":enabled:valid", ":disabled:valid"],
    options_hi: ["सक्षम और अमान्य (:enabled:invalid)", "अक्षम और अमान्य (:disabled:invalid)", "सक्षम और मान्य (:enabled:valid)", "अक्षम और मान्य (:disabled:valid)"],
    answer_en: ":enabled:invalid",
    answer_hi: "सक्षम और अमान्य",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which pseudo-class applies styles to elements that are enabled and valid?",
    question_hi: "कौन सा pseudo-class सक्षम और मान्य एलिमेंट्स पर स्टाइल लागू करता है?",
    options_en: [":enabled:valid", ":disabled:valid", ":enabled:invalid", ":disabled:invalid"],
    options_hi: ["सक्षम और मान्य (:enabled:valid)", "अक्षम और मान्य (:disabled:valid)", "सक्षम और अमान्य (:enabled:invalid)", "अक्षम और अमान्य (:disabled:invalid)"],
    answer_en: ":enabled:valid",
    answer_hi: "सक्षम और मान्य",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which pseudo-class applies styles to elements that are the first of their type among siblings?",
    question_hi: "कौन सा pseudo-class समान प्रकार के पहले एलिमेंट पर स्टाइल लागू करता है?",
    options_en: [":first-of-type", ":last-of-type", ":nth-of-type", ":only-of-type"],
    options_hi: ["प्रकार का पहला (:first-of-type)", "प्रकार का आखिरी (:last-of-type)", "प्रकार का nवां (:nth-of-type)", "केवल प्रकार का (:only-of-type)"],
    answer_en: ":first-of-type",
    answer_hi: "प्रकार का पहला",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which pseudo-class applies styles to elements that are the last of their type among siblings?",
    question_hi: "कौन सा pseudo-class समान प्रकार के आखिरी एलिमेंट पर स्टाइल लागू करता है?",
    options_en: [":last-of-type", ":first-of-type", ":nth-of-type", ":only-of-type"],
    options_hi: ["प्रकार का आखिरी (:last-of-type)", "प्रकार का पहला (:first-of-type)", "प्रकार का nवां (:nth-of-type)", "केवल प्रकार का (:only-of-type)"],
    answer_en: ":last-of-type",
    answer_hi: "प्रकार का आखिरी",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which pseudo-class applies styles to elements with the 'checked' attribute?",
    question_hi: "कौन सा pseudo-class 'checked' एट्रिब्यूट वाले एलिमेंट्स पर स्टाइल लागू करता है?",
    options_en: [":checked", ":disabled", ":enabled", ":selected"],
    options_hi: ["चेक किया हुआ (:checked)", "अक्षम (:disabled)", "सक्षम (:enabled)", "चुना हुआ (:selected)"],
    answer_en: ":checked",
    answer_hi: "चेक किया हुआ",
    attempted: false,
    selected: ""
  }
      ],
      29:[
      {
    num: 1,
    question_en: "What does CSS specificity determine?",
    question_hi: "CSS specificity क्या निर्धारित करता है?",
    options_en: [
      "Which style rule is applied when multiple rules target the same element",
      "The order of stylesheets",
      "The type of HTML element",
      "The size of the element"
    ],
    options_hi: [
      "जब कई नियम एक ही एलिमेंट को टारगेट करते हैं तो कौन सा स्टाइल लागू होगा",
      "स्टाइलशीट्स का क्रम",
      "HTML एलिमेंट का प्रकार",
      "एलिमेंट का आकार"
    ],
    answer_en: "Which style rule is applied when multiple rules target the same element",
    answer_hi: "जब कई नियम एक ही एलिमेंट को टारगेट करते हैं तो कौन सा स्टाइल लागू होगा",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which selector has the highest specificity?",
    question_hi: "कौन सा सेलेक्टर सबसे अधिक specificity रखता है?",
    options_en: [
      "Inline style",
      "ID selector",
      "Class selector",
      "Element selector"
    ],
    options_hi: [
      "इनलाइन स्टाइल",
      "ID सेलेक्टर",
      "क्लास सेलेक्टर",
      "एलिमेंट सेलेक्टर"
    ],
    answer_en: "Inline style",
    answer_hi: "इनलाइन स्टाइल",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "In CSS specificity, what weight is given to an ID selector?",
    question_hi: "CSS specificity में ID सेलेक्टर को कौन सा weight दिया जाता है?",
    options_en: ["100", "10", "1", "0"],
    options_hi: ["100", "10", "1", "0"],
    answer_en: "100",
    answer_hi: "100",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "In CSS specificity, what weight is given to a class selector?",
    question_hi: "CSS specificity में क्लास सेलेक्टर को कौन सा weight दिया जाता है?",
    options_en: ["10", "100", "1", "0"],
    options_hi: ["10", "100", "1", "0"],
    answer_en: "10",
    answer_hi: "10",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "In CSS specificity, what weight is given to an element selector?",
    question_hi: "CSS specificity में एलिमेंट सेलेक्टर को कौन सा weight दिया जाता है?",
    options_en: ["1", "10", "100", "0"],
    options_hi: ["1", "10", "100", "0"],
    answer_en: "1",
    answer_hi: "1",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which CSS rule will override the others if all target the same element?",
    question_hi: "यदि सभी नियम एक ही एलिमेंट को टारगेट करते हैं तो कौन सा CSS नियम ओवरराइड करेगा?",
    options_en: [
      "Rule with higher specificity",
      "First declared rule",
      "Rule with fewer selectors",
      "Rule with element selector"
    ],
    options_hi: [
      "अधिक specificity वाला नियम",
      "पहला घोषित नियम",
      "कम सेलेक्टर्स वाला नियम",
      "एलिमेंट सेलेक्टर वाला नियम"
    ],
    answer_en: "Rule with higher specificity",
    answer_hi: "अधिक specificity वाला नियम",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "What is the specificity of inline styles?",
    question_hi: "इनलाइन स्टाइल्स की specificity क्या होती है?",
    options_en: ["1000", "100", "10", "1"],
    options_hi: ["1000", "100", "10", "1"],
    answer_en: "1000",
    answer_hi: "1000",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "If two selectors have the same specificity, which one is applied?",
    question_hi: "यदि दो सेलेक्टर्स की specificity समान हो, तो कौन सा लागू होगा?",
    options_en: [
      "The one declared last",
      "The one declared first",
      "The one with ID selector",
      "The one with class selector"
    ],
    options_hi: [
      "जो बाद में घोषित हो",
      "जो पहले घोषित हो",
      "ID सेलेक्टर वाला",
      "क्लास सेलेक्टर वाला"
    ],
    answer_en: "The one declared last",
    answer_hi: "जो बाद में घोषित हो",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which CSS property is inherited by default?",
    question_hi: "कौन सी CSS प्रॉपर्टी डिफ़ॉल्ट रूप से इनहेरिट होती है?",
    options_en: [
      "color",
      "margin",
      "border",
      "padding"
    ],
    options_hi: [
      "रंग (color)",
      "मार्जिन (margin)",
      "बॉर्डर (border)",
      "पैडिंग (padding)"
    ],
    answer_en: "color",
    answer_hi: "रंग (color)",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which CSS property is NOT inherited by default?",
    question_hi: "कौन सी CSS प्रॉपर्टी डिफ़ॉल्ट रूप से इनहेरिट नहीं होती?",
    options_en: [
      "margin",
      "color",
      "font-family",
      "visibility"
    ],
    options_hi: [
      "मार्जिन (margin)",
      "रंग (color)",
      "फॉन्ट-फैमिली (font-family)",
      "दृश्यमानता (visibility)"
    ],
    answer_en: "margin",
    answer_hi: "मार्जिन (margin)",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "What keyword can be used to force inheritance of a property?",
    question_hi: "किस कीवर्ड का उपयोग किसी प्रॉपर्टी के इनहेरिट होने के लिए किया जाता है?",
    options_en: [
      "inherit",
      "initial",
      "unset",
      "revert"
    ],
    options_hi: [
      "inherit",
      "initial",
      "unset",
      "revert"
    ],
    answer_en: "inherit",
    answer_hi: "inherit",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "What does the CSS keyword `initial` do?",
    question_hi: "CSS कीवर्ड `initial` क्या करता है?",
    options_en: [
      "Resets a property to its default value",
      "Forces inheritance",
      "Removes the property",
      "Sets property to none"
    ],
    options_hi: [
      "प्रॉपर्टी को डिफ़ॉल्ट मान पर रीसेट करता है",
      "इनहेरिटेंस को फोर्स करता है",
      "प्रॉपर्टी को हटाता है",
      "प्रॉपर्टी को none सेट करता है"
    ],
    answer_en: "Resets a property to its default value",
    answer_hi: "प्रॉपर्टी को डिफ़ॉल्ट मान पर रीसेट करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "What does the CSS keyword `unset` do?",
    question_hi: "CSS कीवर्ड `unset` क्या करता है?",
    options_en: [
      "Resets property to inherited if inheritable, otherwise to initial",
      "Always resets property to initial",
      "Forces inheritance",
      "Removes the property"
    ],
    options_hi: [
      "यदि प्रॉपर्टी इनहेरिटेबल है तो इनहेरिट करता है, अन्यथा डिफ़ॉल्ट पर रीसेट करता है",
      "हमेशा प्रॉपर्टी को डिफ़ॉल्ट पर रीसेट करता है",
      "इनहेरिटेंस को फोर्स करता है",
      "प्रॉपर्टी को हटाता है"
    ],
    answer_en: "Resets property to inherited if inheritable, otherwise to initial",
    answer_hi: "यदि प्रॉपर्टी इनहेरिटेबल है तो इनहेरिट करता है, अन्यथा डिफ़ॉल्ट पर रीसेट करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which of these has the highest specificity?",
    question_hi: "इनमें से किसकी सबसे अधिक specificity होती है?",
    options_en: [
      "element",
      ".class",
      "#id",
      "inline style"
    ],
    options_hi: [
      "एलिमेंट",
      ".क्लास",
      "#ID",
      "इनलाइन स्टाइल"
    ],
    answer_en: "inline style",
    answer_hi: "इनलाइन स्टाइल",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Does the universal selector (*) add specificity?",
    question_hi: "क्या यूनिवर्सल सेलेक्टर (*) specificity जोड़ता है?",
    options_en: [
      "No",
      "Yes",
      "Only sometimes",
      "Depends on browser"
    ],
    options_hi: [
      "नहीं",
      "हाँ",
      "कभी-कभी",
      "ब्राउज़र पर निर्भर करता है"
    ],
    answer_en: "No",
    answer_hi: "नहीं",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which CSS rule wins if two selectors have same specificity and importance?",
    question_hi: "यदि दो सेलेक्टर्स की specificity और importance समान हो, तो कौन सा CSS नियम जीतता है?",
    options_en: [
      "The one declared last",
      "The one declared first",
      "The one with ID selector",
      "The one with inline style"
    ],
    options_hi: [
      "जो बाद में घोषित हो",
      "जो पहले घोषित हो",
      "ID सेलेक्टर वाला",
      "इनलाइन स्टाइल वाला"
    ],
    answer_en: "The one declared last",
    answer_hi: "जो बाद में घोषित हो",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which CSS property controls inheritance behavior?",
    question_hi: "कौन सी CSS प्रॉपर्टी इनहेरिटेंस व्यवहार को नियंत्रित करती है?",
    options_en: [
      "inherit",
      "initial",
      "unset",
      "none"
    ],
    options_hi: [
      "inherit",
      "initial",
      "unset",
      "none"
    ],
    answer_en: "inherit",
    answer_hi: "inherit",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Can padding be inherited in CSS by default?",
    question_hi: "क्या padding डिफ़ॉल्ट रूप से CSS में इनहेरिट होती है?",
    options_en: [
      "No",
      "Yes",
      "Only in some browsers",
      "Depends on property"
    ],
    options_hi: [
      "नहीं",
      "हाँ",
      "कुछ ब्राउज़र में",
      "प्रॉपर्टी पर निर्भर करता है"
    ],
    answer_en: "No",
    answer_hi: "नहीं",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Is 'font-family' inherited by default in CSS?",
    question_hi: "क्या 'font-family' डिफ़ॉल्ट रूप से CSS में इनहेरिट होती है?",
    options_en: [
      "Yes",
      "No",
      "Depends on browser",
      "Only for some elements"
    ],
    options_hi: [
      "हाँ",
      "नहीं",
      "ब्राउज़र पर निर्भर करता है",
      "केवल कुछ एलिमेंट्स के लिए"
    ],
    answer_en: "Yes",
    answer_hi: "हाँ",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which of the following selectors does NOT contribute to specificity?",
    question_hi: "निम्नलिखित में से कौन सा सेलेक्टर specificity में योगदान नहीं देता?",
    options_en: [
      "Universal selector (*)",
      "ID selector",
      "Class selector",
      "Attribute selector"
    ],
    options_hi: [
      "यूनिवर्सल सेलेक्टर (*)",
      "ID सेलेक्टर",
      "क्लास सेलेक्टर",
      "एट्रिब्यूट सेलेक्टर"
    ],
    answer_en: "Universal selector (*)",
    answer_hi: "यूनिवर्सल सेलेक्टर (*)",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "What happens if you use !important in CSS?",
    question_hi: "CSS में !important का क्या प्रभाव होता है?",
    options_en: [
      "Overrides any other declarations",
      "Is ignored by the browser",
      "Applies only to inline styles",
      "Removes the style"
    ],
    options_hi: [
      "किसी भी अन्य घोषणा को ओवरराइड करता है",
      "ब्राउज़र द्वारा नजरअंदाज किया जाता है",
      "केवल इनलाइन स्टाइल्स पर लागू होता है",
      "स्टाइल को हटाता है"
    ],
    answer_en: "Overrides any other declarations",
    answer_hi: "किसी भी अन्य घोषणा को ओवरराइड करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which CSS property can inherit values from its parent element?",
    question_hi: "कौन सी CSS प्रॉपर्टी पैरेंट एलिमेंट से वैल्यू इनहेरिट कर सकती है?",
    options_en: [
      "color",
      "margin",
      "border",
      "padding"
    ],
    options_hi: [
      "रंग (color)",
      "मार्जिन (margin)",
      "बॉर्डर (border)",
      "पैडिंग (padding)"
    ],
    answer_en: "color",
    answer_hi: "रंग (color)",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which CSS value forces a property to revert to its inherited value?",
    question_hi: "कौन सा CSS मान प्रॉपर्टी को उसके इनहेरिटेड मान पर वापस लाता है?",
    options_en: [
      "inherit",
      "initial",
      "unset",
      "revert"
    ],
    options_hi: [
      "inherit",
      "initial",
      "unset",
      "revert"
    ],
    answer_en: "inherit",
    answer_hi: "inherit",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Can the !important declaration override inline styles?",
    question_hi: "क्या !important घोषणा इनलाइन स्टाइल्स को ओवरराइड कर सकती है?",
    options_en: [
      "Yes",
      "No",
      "Only in some browsers",
      "Depends on specificity"
    ],
    options_hi: [
      "हाँ",
      "नहीं",
      "कुछ ब्राउज़र में",
      "specificity पर निर्भर करता है"
    ],
    answer_en: "Yes",
    answer_hi: "हाँ",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which of the following increases CSS specificity the most?",
    question_hi: "निम्नलिखित में से कौन CSS specificity को सबसे अधिक बढ़ाता है?",
    options_en: [
      "Using multiple ID selectors",
      "Using multiple element selectors",
      "Using multiple class selectors",
      "Using multiple pseudo-classes"
    ],
    options_hi: [
      "कई ID सेलेक्टर्स का उपयोग करना",
      "कई एलिमेंट सेलेक्टर्स का उपयोग करना",
      "कई क्लास सेलेक्टर्स का उपयोग करना",
      "कई pseudo-classes का उपयोग करना"
    ],
    answer_en: "Using multiple ID selectors",
    answer_hi: "कई ID सेलेक्टर्स का उपयोग करना",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "What is the specificity of an attribute selector like [type='text']?",
    question_hi: "एक एट्रिब्यूट सेलेक्टर जैसे [type='text'] की specificity क्या है?",
    options_en: ["10", "100", "1", "0"],
    options_hi: ["10", "100", "1", "0"],
    answer_en: "10",
    answer_hi: "10",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Does the :hover pseudo-class add to specificity?",
    question_hi: ":hover pseudo-class specificity में जुड़ता है क्या?",
    options_en: ["Yes", "No", "Only in some browsers", "Depends on usage"],
    options_hi: ["हाँ", "नहीं", "कुछ ब्राउज़रों में", "उपयोग पर निर्भर करता है"],
    answer_en: "Yes",
    answer_hi: "हाँ",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which of the following is NOT a factor in CSS specificity?",
    question_hi: "निम्नलिखित में से कौन CSS specificity का कारक नहीं है?",
    options_en: ["Order of selectors", "Inline styles", "ID selectors", "Class selectors"],
    options_hi: ["सेलेक्टर्स का क्रम", "इनलाइन स्टाइल्स", "ID सेलेक्टर्स", "क्लास सेलेक्टर्स"],
    answer_en: "Order of selectors",
    answer_hi: "सेलेक्टर्स का क्रम",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "What does the CSS 'inherit' value do?",
    question_hi: "CSS में 'inherit' मान क्या करता है?",
    options_en: [
      "Makes the property inherit the value from its parent",
      "Sets the property to its initial default",
      "Overrides all other styles",
      "Removes the property"
    ],
    options_hi: [
      "प्रॉपर्टी को उसके पैरेंट से वैल्यू इनहेरिट करने देता है",
      "प्रॉपर्टी को उसके डिफ़ॉल्ट मान पर सेट करता है",
      "सभी अन्य स्टाइल्स को ओवरराइड करता है",
      "प्रॉपर्टी को हटा देता है"
    ],
    answer_en: "Makes the property inherit the value from its parent",
    answer_hi: "प्रॉपर्टी को उसके पैरेंट से वैल्यू इनहेरिट करने देता है",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "If a child element has 'color: inherit;', where does it get the color from?",
    question_hi: "यदि चाइल्ड एलिमेंट में 'color: inherit;' है, तो वह रंग कहाँ से लेता है?",
    options_en: ["From its parent element", "From the browser default", "From itself", "From sibling elements"],
    options_hi: ["अपने पैरेंट एलिमेंट से", "ब्राउज़र डिफ़ॉल्ट से", "खुद से", "सिब्लिंग एलिमेंट्स से"],
    answer_en: "From its parent element",
    answer_hi: "अपने पैरेंट एलिमेंट से",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which CSS property is inherited by default?",
    question_hi: "कौन सी CSS प्रॉपर्टी डिफ़ॉल्ट रूप से इनहेरिट होती है?",
    options_en: ["font-size", "border", "padding", "margin"],
    options_hi: ["font-size", "border", "padding", "margin"],
    answer_en: "font-size",
    answer_hi: "font-size",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Can pseudo-elements like ::before affect specificity?",
    question_hi: "क्या pseudo-elements जैसे ::before specificity को प्रभावित करते हैं?",
    options_en: ["Yes", "No", "Sometimes", "Only with classes"],
    options_hi: ["हाँ", "नहीं", "कभी-कभी", "केवल क्लास के साथ"],
    answer_en: "Yes",
    answer_hi: "हाँ",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "What specificity value does the universal selector (*) have?",
    question_hi: "यूनिवर्सल सेलेक्टर (*) की specificity वैल्यू क्या है?",
    options_en: ["0", "1", "10", "100"],
    options_hi: ["0", "1", "10", "100"],
    answer_en: "0",
    answer_hi: "0",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "If two CSS selectors have the same specificity, which rule applies?",
    question_hi: "यदि दो CSS सेलेक्टर्स की specificity समान हो, तो कौन सा नियम लागू होगा?",
    options_en: [
      "The one declared last",
      "The one declared first",
      "The one with fewer selectors",
      "The one with inline style"
    ],
    options_hi: [
      "जो बाद में घोषित हो",
      "जो पहले घोषित हो",
      "कम सेलेक्टर्स वाला",
      "इनलाइन स्टाइल वाला"
    ],
    answer_en: "The one declared last",
    answer_hi: "जो बाद में घोषित हो",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which of these CSS values removes inheritance and resets to initial?",
    question_hi: "इनमें से कौन सा CSS मान इनहेरिटेंस हटाकर प्रॉपर्टी को इनिशियल पर सेट करता है?",
    options_en: ["initial", "inherit", "unset", "revert"],
    options_hi: ["initial", "inherit", "unset", "revert"],
    answer_en: "initial",
    answer_hi: "initial",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "How is specificity calculated in CSS?",
    question_hi: "CSS में specificity कैसे कैलकुलेट की जाती है?",
    options_en: [
      "Count of inline styles, IDs, classes/attributes, elements",
      "Count of element selectors only",
      "Count of classes only",
      "Order of rules in stylesheet"
    ],
    options_hi: [
      "इनलाइन स्टाइल, IDs, क्लास/एट्रिब्यूट्स, एलिमेंट्स की गिनती",
      "केवल एलिमेंट सेलेक्टर्स की गिनती",
      "केवल क्लासेस की गिनती",
      "स्टाइलशीट में नियमों का क्रम"
    ],
    answer_en: "Count of inline styles, IDs, classes/attributes, elements",
    answer_hi: "इनलाइन स्टाइल, IDs, क्लास/एट्रिब्यूट्स, एलिमेंट्स की गिनती",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which has more specificity: .class1.class2 or #id1?",
    question_hi: ".class1.class2 और #id1 में से किसकी specificity अधिक है?",
    options_en: [
      "#id1",
      ".class1.class2",
      "Both are equal",
      "Depends on position"
    ],
    options_hi: [
      "#id1",
      ".class1.class2",
      "दोनों समान हैं",
      "स्थिति पर निर्भर करता है"
    ],
    answer_en: "#id1",
    answer_hi: "#id1",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which CSS property affects inheritance behavior?",
    question_hi: "कौन सी CSS प्रॉपर्टी इनहेरिटेंस व्यवहार को प्रभावित करती है?",
    options_en: [
      "inherit",
      "initial",
      "unset",
      "all"
    ],
    options_hi: [
      "inherit",
      "initial",
      "unset",
      "all"
    ],
    answer_en: "inherit",
    answer_hi: "inherit",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which of these selectors has the lowest specificity?",
    question_hi: "इनमें से किस सेलेक्टर की specificity सबसे कम है?",
    options_en: [
      "Element selector",
      "Class selector",
      "ID selector",
      "Inline style"
    ],
    options_hi: [
      "एलिमेंट सेलेक्टर",
      "क्लास सेलेक्टर",
      "ID सेलेक्टर",
      "इनलाइन स्टाइल"
    ],
    answer_en: "Element selector",
    answer_hi: "एलिमेंट सेलेक्टर",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Does the order of CSS rules affect which style is applied?",
    question_hi: "क्या CSS नियमों का क्रम यह प्रभावित करता है कि कौन सा स्टाइल लागू होगा?",
    options_en: ["Yes", "No", "Only for inline styles", "Depends on browser"],
    options_hi: ["हाँ", "नहीं", "केवल इनलाइन स्टाइल्स के लिए", "ब्राउज़र पर निर्भर करता है"],
    answer_en: "Yes",
    answer_hi: "हाँ",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which CSS selector targets the first child of its parent?",
    question_hi: "कौन सा CSS सेलेक्टर अपने पैरेंट के पहले बच्चे को टारगेट करता है?",
    options_en: [":first-child", ":last-child", ":nth-child", ":only-child"],
    options_hi: ["पहला बच्चा (:first-child)", "आखिरी बच्चा (:last-child)", "किसी विशेष बच्चा (:nth-child)", "केवल बच्चा (:only-child)"],
    answer_en: ":first-child",
    answer_hi: "पहला बच्चा (:first-child)",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which CSS selector targets elements that are the only child of their parent?",
    question_hi: "कौन सा CSS सेलेक्टर उन एलिमेंट्स को टारगेट करता है जो अपने पैरेंट के केवल बच्चे हैं?",
    options_en: [":only-child", ":first-child", ":last-child", ":nth-child"],
    options_hi: ["केवल बच्चा (:only-child)", "पहला बच्चा (:first-child)", "आखिरी बच्चा (:last-child)", "किसी विशेष बच्चा (:nth-child)"],
    answer_en: ":only-child",
    answer_hi: "केवल बच्चा (:only-child)",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "What does the CSS property 'inherit' do when applied?",
    question_hi: "CSS प्रॉपर्टी 'inherit' लागू होने पर क्या करती है?",
    options_en: [
      "Takes the value from the parent element",
      "Resets to the browser default",
      "Overrides all styles",
      "Removes the property"
    ],
    options_hi: [
      "पैरेंट एलिमेंट से वैल्यू लेती है",
      "ब्राउज़र डिफ़ॉल्ट पर रीसेट करती है",
      "सभी स्टाइल्स को ओवरराइड करती है",
      "प्रॉपर्टी हटाती है"
    ],
    answer_en: "Takes the value from the parent element",
    answer_hi: "पैरेंट एलिमेंट से वैल्यू लेती है",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which pseudo-class applies styles to elements with the 'checked' attribute?",
    question_hi: "'checked' एट्रिब्यूट वाले एलिमेंट्स पर स्टाइल लागू करने वाला pseudo-class कौन सा है?",
    options_en: [":checked", ":disabled", ":enabled", ":selected"],
    options_hi: ["चेक किया हुआ (:checked)", "अक्षम (:disabled)", "सक्षम (:enabled)", "चुना हुआ (:selected)"],
    answer_en: ":checked",
    answer_hi: "चेक किया हुआ (:checked)",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which pseudo-class applies styles to disabled form elements?",
    question_hi: "अक्षम फॉर्म एलिमेंट्स पर स्टाइल लागू करने वाला pseudo-class कौन सा है?",
    options_en: [":disabled", ":checked", ":enabled", ":focus"],
    options_hi: ["अक्षम (:disabled)", "चेक किया हुआ (:checked)", "सक्षम (:enabled)", "फोकस (:focus)"],
    answer_en: ":disabled",
    answer_hi: "अक्षम (:disabled)",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which CSS selector matches all elements?",
    question_hi: "सभी एलिमेंट्स को मैच करने वाला CSS सेलेक्टर कौन सा है?",
    options_en: ["*", "html", ":root", "body"],
    options_hi: ["*", "html", ":root", "body"],
    answer_en: "*",
    answer_hi: "*",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "What does the ':nth-child(odd)' selector select?",
    question_hi: ":nth-child(odd) सेलेक्टर क्या चयन करता है?",
    options_en: [
      "All odd numbered children",
      "All even numbered children",
      "Only the first child",
      "Only the last child"
    ],
    options_hi: [
      "सभी विषम संख्या वाले बच्चे",
      "सभी सम संख्या वाले बच्चे",
      "केवल पहला बच्चा",
      "केवल आखिरी बच्चा"
    ],
    answer_en: "All odd numbered children",
    answer_hi: "सभी विषम संख्या वाले बच्चे",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which selector applies styles to elements currently focused?",
    question_hi: "कौन सा सेलेक्टर वर्तमान में फोकस किए गए एलिमेंट्स पर स्टाइल लागू करता है?",
    options_en: [":focus", ":hover", ":active", ":visited"],
    options_hi: ["फोकस (:focus)", "होवर (:hover)", "सक्रिय (:active)", "दर्शित (:visited)"],
    answer_en: ":focus",
    answer_hi: "फोकस (:focus)",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "What is the CSS property to control whether children inherit a property?",
    question_hi: "कौन सी CSS प्रॉपर्टी बच्चों को किसी प्रॉपर्टी के इनहेरिट करने को नियंत्रित करती है?",
    options_en: ["inherit", "initial", "unset", "all"],
    options_hi: ["inherit", "initial", "unset", "all"],
    answer_en: "inherit",
    answer_hi: "inherit",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which pseudo-class applies styles to elements with the 'checked' attribute?",
    question_hi: "कौन सा pseudo-class 'checked' एट्रिब्यूट वाले एलिमेंट्स पर स्टाइल लागू करता है?",
    options_en: [":checked", ":disabled", ":enabled", ":selected"],
    options_hi: ["चेक किया हुआ (:checked)", "अक्षम (:disabled)", "सक्षम (:enabled)", "चुना हुआ (:selected)"],
    answer_en: ":checked",
    answer_hi: "चेक किया हुआ (:checked)",
    attempted: false,
    selected: ""
  }
      ],
      30:[
        
      ]

    };



     console.log("Subject:", SUBJECT);
    console.log("Test No:", TEST_NO);
    
    // Global variables
    let questions = [];
    let currentQuestion = 0;
    let language = "en";
    let timeLeft = 60 * 60; // 60 minutes in seconds
    let timerInterval;
    let markedQuestions = new Set();
    let quizStarted = false;
    let startTime = null;

    // DOM Elements
    const loader = document.getElementById('loader');
    const questionElement = document.getElementById('question');
    const questionCounterElement = document.getElementById('questionCounter');
    const optionsElement = document.getElementById('options');
    const circleContainer = document.getElementById('circleContainer');
    const progressFill = document.getElementById('progressFill');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const markBtn = document.getElementById('markBtn');
    const submitBtn = document.getElementById('submitBtn');
    const timerElement = document.getElementById('timer');
   
    const languageSelect = document.getElementById('languageSelect');
    const totalQuestionsElement = document.getElementById('totalQuestions');

    // 🔥 CHANGE 3: Initialize - हमेशा Question 1 से start करें
    document.addEventListener('DOMContentLoaded', async function() {
      showLoader();

      // हमेशा fresh start (clear any previous progress)
      localStorage.removeItem("quizProgress");
      currentQuestion = 0;
      markedQuestions = new Set();

      // Load questions
      loadQuestions();
      
      // Initialize quiz
      initializeQuiz();
      
      // Add event listeners
      addEventListeners();

      hideLoader();
    });

    // Add event listeners to buttons
    function addEventListeners() {
      prevBtn.addEventListener('click', () => prevQuestion());
      nextBtn.addEventListener('click', () => nextQuestion());
      markBtn.addEventListener('click', () => markQuestion());
      submitBtn.addEventListener('click', () => submitQuiz());
      
      // Language change
      languageSelect.addEventListener('change', changeLanguage);
    }

    // Show loader
    function showLoader() {
      loader.classList.add('active');
    }

    // Hide loader
    function hideLoader() {
      loader.classList.remove('active');
    }

    // 🔥 CHANGE 2: Load questions function सही करें
    function loadQuestions() {
      console.log("Loading test:", TEST_NO);
      console.log("Available tests:", Object.keys(QUESTION_BANK));
      
      questions = QUESTION_BANK[TEST_NO];

      if (!questions || questions.length === 0) {
        alert("Invalid Test Number");
        window.location.href = "/dashboard";
        return;
      }

      console.log(`Loaded ${questions.length} questions for test ${TEST_NO}`);
    }

    // Initialize quiz
    function initializeQuiz() {
      if (questions.length === 0) {
        alert('No questions available.');
        return;
      }
      
      quizStarted = true;
      startTime = new Date();
      
      // Enable buttons
      prevBtn.disabled = false;
      nextBtn.disabled = false;
      markBtn.disabled = false;
      submitBtn.disabled = false;
      
      // Update total questions count
      totalQuestionsElement.textContent = `Questions (${questions.length})`;
      
      // Load first question
      loadQuestion(currentQuestion);
      
      // Start timer
      startTimer();
      
      // Update navigation circles
      updateNavigationCircles();
      
     
      
      // Enable auto-save
      enableAutoSave();
    }

    // Load Question
    function loadQuestion(index) {
      if (!quizStarted || index < 0 || index >= questions.length) return;
      
      currentQuestion = index;
      const q = questions[index];
      
      // Mark as visited
      q.visited = true;
      
      // Update question
      const questionText = language === "en" ? q.question_en : q.question_hi;
      questionElement.innerHTML = `<strong>Q${q.num}:</strong> ${questionText}`;
      
      // Update counter
      questionCounterElement.textContent = `Question ${index + 1} of ${questions.length}`;
      
      // Update options
      updateOptions(q);
      
      // Update navigation buttons
      prevBtn.disabled = index === 0;
      nextBtn.disabled = index === questions.length - 1;
      
      // Update UI
      updateNavigationCircles();
      updateProgressBar();
      
      // Save progress
      saveProgress();
    }

    // Update options
    function updateOptions(q) {
      optionsElement.innerHTML = "";
      
      const options = language === "en" ? q.options_en : q.options_hi;
      
      options.forEach((option) => {
        const li = document.createElement("li");
        li.className = "option-item";
        
        if (q.selected === option) {
          li.classList.add("selected");
        }
        
        li.onclick = () => selectOption(option);
        
        li.innerHTML = `
          <input type="radio" name="option" value="${option}" 
            ${q.selected === option ? "checked" : ""}>
          <div class="option-text">${option}</div>
        `;
        
        optionsElement.appendChild(li);
      });
    }

    // Select Option
    function selectOption(option) {
      if (!quizStarted) return;
      
      questions[currentQuestion].selected = option;
      questions[currentQuestion].attempted = true;
      loadQuestion(currentQuestion);
    }

    // Navigation
    function nextQuestion() {
      if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion(currentQuestion);
      }
    }

    function prevQuestion() {
      if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion(currentQuestion);
      }
    }

    // Mark Question
    function markQuestion() {
      if (!quizStarted) return;
      
      if (markedQuestions.has(currentQuestion)) {
        markedQuestions.delete(currentQuestion);
        showNotification(`Question ${currentQuestion + 1} unmarked`);
      } else {
        markedQuestions.add(currentQuestion);
        showNotification(`Question ${currentQuestion + 1} marked for review`);
      }
      updateNavigationCircles();
      saveProgress();
    }

    // Show notification
    function showNotification(message) {
      const notification = document.createElement('div');
      notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4caf50;
        color: white;
        padding: 1rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1000;
        animation: slideIn 0.3s ease;
      `;
      
      notification.textContent = message;
      document.body.appendChild(notification);
      
      setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
      }, 2000);
    }

    // Update Navigation Circles
    function updateNavigationCircles() {
      circleContainer.innerHTML = "";
      
      questions.forEach((q, index) => {
        const circle = document.createElement("div");
        circle.className = "circle";
        
        if (index === currentQuestion) {
          circle.classList.add("active");
        } else if (markedQuestions.has(index)) {
          circle.classList.add("marked");
        } else if (q.attempted) {
          circle.classList.add("answered");
        } else if (q.visited) {
          circle.classList.add("visited");
        } else {
          circle.classList.add("not-attempted");
        }
        
        circle.textContent = index + 1;
        circle.onclick = () => {
          currentQuestion = index;
          loadQuestion(index);
        };
        
        circleContainer.appendChild(circle);
      });
    }

    // Update Progress Bar
    function updateProgressBar() {
      const attemptedCount = questions.filter(q => q.attempted).length;
      const progressPercent = (attemptedCount / questions.length) * 100;
      progressFill.style.width = `${progressPercent}%`;
    }

 

    // Change Language
    function changeLanguage() {
      language = languageSelect.value;
      loadQuestion(currentQuestion);
      saveProgress();
    }

    // Timer
    function startTimer() {
      function updateTimer() {
        if (timeLeft <= 0) {
          clearInterval(timerInterval);
          alert("Time's up!");
          submitQuiz();
          return;
        }
        
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        
        timerElement.textContent = 
          `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        timeLeft--;
      }
      
      updateTimer();
      timerInterval = setInterval(updateTimer, 1000);
    }

    // Enable auto-save
    function enableAutoSave() {
      // Save every 30 seconds
      setInterval(saveProgress, 30000);
      
      // Save on page unload
      window.addEventListener('beforeunload', saveProgress);
    }

    // Save progress
    function saveProgress() {
      if (!quizStarted) return;
      
      const progress = {
        questions: questions,
        currentQuestion: currentQuestion,
        markedQuestions: Array.from(markedQuestions),
        timeLeft: timeLeft,
        language: language,
        timestamp: new Date().toISOString()
      };
      
      localStorage.setItem('quizProgress', JSON.stringify(progress));
    }

    // Load progress (not used now, but kept for reference)
    function loadProgress() {
      const savedProgress = localStorage.getItem('quizProgress');
      if (savedProgress) {
        const progress = JSON.parse(savedProgress);
        
        if (progress.questions) {
          questions = progress.questions;
        }
        
        if (progress.currentQuestion !== undefined) {
          currentQuestion = progress.currentQuestion;
        }
        
        if (progress.markedQuestions) {
          markedQuestions = new Set(progress.markedQuestions);
        }
        
        if (progress.timeLeft) {
          timeLeft = progress.timeLeft;
        }
        
        if (progress.language) {
          language = progress.language;
          languageSelect.value = language;
        }
        
        return true;
      }
      return false;
    }

    // 🔥 CHANGE 5: Submit Quiz function सही करें
    async function submitQuiz() {
      if (!confirm("Are you sure you want to submit the test?")) return;

      let attempted = 0;
      let correct = 0;

      questions.forEach(q => {
        if (q.attempted) {
          attempted++;
          const correctAnswer = language === "en" ? q.answer_en : q.answer_hi;
          if (q.selected === correctAnswer) {
            correct++;
          }
        }
      });

      const percentage = Math.round((correct / questions.length) * 100);
      const accuracy = attempted ? Math.round((correct / attempted) * 100) : 0;
      const timeSpent = timerElement.innerText;

      const payload = {
        
  testNo: TEST_NO,
  totalQuestions: questions.length,
  attempted,
  correct,
  percentage,
  accuracy,
  timeSpent,
       
      };

      console.log("Submitting payload:", payload);

      try {
        const res = await fetch(`/quiz/${CATEGORY}/${SUBJECT}/${TEST_NO}/submit`, {

          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });

        const data = await res.json();

        if (data.success) {
          localStorage.removeItem("quizProgress");
          // 🔥 CHANGE 4: Dynamic redirect based on test number
        window.location.href = `/quiz/${CATEGORY}/${SUBJECT}/test-${TEST_NO}/result/${data.resultId}`;




        } else {
          alert("Submit failed: " + (data.message || "Unknown error"));
        }
      } catch (error) {
        console.error("Submit error:", error);
        alert("Network error. Please try again.");
      }
    }

    // Format time
    function formatTime(seconds) {
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
 

