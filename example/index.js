import React from 'react'
import { render } from 'react-dom'
import AdaptiveCard from 'react-adaptivecards'

// Author a card
// In practice you'll probably get this from a service
// see http://adaptivecards.io/samples/ for inspiration
var card = {
  "type": "AdaptiveCard",
  "version": "1.0",
  "body": [
    {
      "type": "TextBlock",
      "text": "Your registration is almost complete",
      "size": "medium",
      "weight": "bolder"
    },
    {
      "type": "TextBlock",
      "text": "What type of food do you prefer?",
      "wrap": true
    },
    {
      "type": "ImageSet",
      "imageSize": "medium",
      "images": [
        {
          "type": "Image",
          "url": "http://contososcubabot.azurewebsites.net/assets/steak.jpg"
        },
        {
          "type": "Image",
          "url": "http://contososcubabot.azurewebsites.net/assets/chicken.jpg"
        },
        {
          "type": "Image",
          "url": "http://contososcubabot.azurewebsites.net/assets/tofu.jpg"
        }
      ]
    }
  ],
  "actions": [
    {
      "type": "Action.ShowCard",
      "title": "Steak",
      "card": {
        "type": "AdaptiveCard",
        "body": [
          {
            "type": "TextBlock",
            "text": "How would you like your steak prepared?",
            "size": "medium",
            "wrap": true
          },
          {
            "type": "Input.ChoiceSet",
            "id": "SteakTemp",
            "style": "expanded",
            "choices": [
              {
                "title": "Rare",
                "value": "rare"
              },
              {
                "title": "Medium-Rare",
                "value": "medium-rare"
              },
              {
                "title": "Well-done",
                "value": "well-done"
              }
            ]
          },
          {
            "type": "Input.Text",
            "id": "SteakOther",
            "isMultiline": true,
            "placeholder": "Any other preparation requestes?"
          }
        ],
        "actions": [
          {
            "type": "Action.Submit",
            "title": "OK",
            "data": {
              "FoodChoice": "Steak"
            }
          }
        ]
      }
    },
    {
      "type": "Action.ShowCard",
      "title": "Chicken",
      "card": {
        "type": "AdaptiveCard",
        "body": [
          {
            "type": "TextBlock",
            "text": "Do you have any allergies?",
            "size": "medium",
            "wrap": true
          },
          {
            "type": "Input.ChoiceSet",
            "id": "ChickenAllergy",
            "style": "expanded",
            "isMultiSelect": true,
            "choices": [
              {
                "title": "I'm allergic to peanuts",
                "value": "peanut"
              }
            ]
          },
          {
            "type": "Input.Text",
            "id": "ChickenOther",
            "isMultiline": true,
            "placeholder": "Any other preparation requestes?"
          }
        ],
        "actions": [
          {
            "type": "Action.Submit",
            "title": "OK",
            "data": {
              "FoodChoice": "Chicken"
            }
          }
        ]
      }
    },
    {
      "type": "Action.ShowCard",
      "title": "Tofu",
      "card": {
        "type": "AdaptiveCard",
        "body": [
          {
            "type": "TextBlock",
            "text": "Would you like it prepared vegan?",
            "size": "medium",
            "wrap": true
          },
          {
            "type": "Input.Toggle",
            "id": "Vegetarian",
            "title": "Please prepare it vegan",
            "valueOn": "vegan",
            "valueOff": "notVegan"
          },
          {
            "type": "Input.Text",
            "id": "VegOther",
            "isMultiline": true,
            "placeholder": "Any other preparation requestes?"
          }
        ],
        "actions": [
          {
            "type": "Action.Submit",
            "title": "OK",
            "data": {
              "FoodChoice": "Vegetarian"
            }
          }
        ]
      }
    }
  ]
}

const App = () => (
  <div>
    <h2>React - Adaptive Cards Example</h2>
    <AdaptiveCard  payload={card} />
    <AdaptiveCard hostConfig={{
      containerStyles: {
        default: {
          backgroundColor: 'red'
        }
      }
    }}  payload={card} />
  </div>
)

render(
  <App />,
  document.getElementById('root')
)
