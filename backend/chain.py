from langchain_core.utils.function_calling import convert_to_openai_function
from langchain_core.messages import HumanMessage, AIMessage
from langchain_openai import ChatOpenAI
from langchain.agents import create_openai_tools_agent, AgentExecutor
from langchain.prompts import PromptTemplate, SystemMessagePromptTemplate
from typing import List
from prompts import system_prompt_template
from tools import tools
from langchain import hub
import json

prompt = hub.pull("hwchase17/openai-functions-agent")

def invoke_chain(messages: List[dict], components) -> str:
    """Invoke the chain"""
    ui_elements = json.dumps(components)
    llm = ChatOpenAI(model="gpt-3.5-turbo")
    prompt.messages[0] = SystemMessagePromptTemplate(prompt=PromptTemplate(input_variables=["ui_elements"], template=system_prompt_template)).format(ui_elements=ui_elements)
    agent = create_openai_tools_agent(llm, tools, prompt)
    agent_executor = AgentExecutor(agent=agent, tools=tools, verbose=True)
    chat_history = [HumanMessage(message["content"]) if message["role"] == "human" else AIMessage(message["content"]) for message in messages[:-1]]

    return agent_executor.invoke({"input": messages[-1], "chat_history": chat_history})
