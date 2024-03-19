from fastapi import FastAPI
from chain import invoke_chain
from helpers import parse_ui_components

app = FastAPI()

@app.post("/chat")
def chat(body: dict):
    print(body)
    response = invoke_chain(body["history"], components=body["components"])
    components = parse_ui_components(response["output"])
    return components