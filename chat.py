import os
from flask import Flask, render_template, request
from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer

app = Flask(__name__)

bot = ChatBot("College_Bot",
              storage_adapter='chatterbot.storage.SQLStorageAdapter',
              database_uri='sqlite:///database.sqlite3',
              logic_adapters=[
                  'chatterbot.logic.BestMatch',
                  'chatterbot.logic.TimeLogicAdapter'
              ]
              )

bot.storage.drop()
trainer = ChatterBotCorpusTrainer(bot)
trainer.train(
     #"chatterbot.corpus.english.ai",
     #"chatterbot.corpus.english.conversations"


    'data\college.yml'
)


# name = input('What is your name?')
# print("Welcome to the Bot Service! Let me know how can I help you?")
# while True:
#     request = input(name + ': ')
#     if request == 'Bye' or request == 'bye':
#         print('Bot: Bye')
#         break
#     else:
#         response = bot.get_response(request)
#         print('Bot:', response)


@app.route("/")
def home():
    return render_template("home2.html")


@app.route("/get")
def get_bot_response():
    userText = request.args.get('msg')
    return str(bot.get_response(userText))


if __name__ == "__main__":
    app.run()
