from html.parser import HTMLParser
import json

class UIComponentParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.data = []
        self.current_tag = None

    def handle_starttag(self, tag, attrs):
        self.current_tag = tag

    def handle_endtag(self, tag):
        self.current_tag = None

    def handle_data(self, data):
        data = data.strip()
        if data:
            if self.current_tag:
                data = json.loads(data)
                self.data.append({'type': self.current_tag, 'content': data})
            else:
                self.data.append({'type': 'text', 'content': data})

def parse_ui_components(s):
    parser = UIComponentParser()
    parser.feed(s)
    return parser.data

