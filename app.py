from flask import Flask, render_template, jsonify, request
import requests

app = Flask(__name__)

h_api_key = "demo" # Replace this with your API key


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    return render_template('index.html')


@app.route('/api/hubspot/getForms')
def get_all_forms():
    url = "https://api.hubapi.com/forms/v2/forms?hapikey=" + h_api_key
    payload={}
    headers = {}
    response = requests.request("GET", url, headers=headers, data=payload)
    return jsonify(response.json())


@app.route('/api/hubspot/getFormById/<id>')
def get_form_by_id(id):
    url = "https://api.hubapi.com/forms/v2/forms/" + id + "/?hapikey=" + h_api_key
    payload={}
    headers = {}
    response = requests.request("GET", url, headers=headers, data=payload)
    return jsonify(response.json())


@app.route('/api/hubspot/getFormSubmissions/<id>')
def get_form_submissions(id):
    url = "https://api.hubapi.com/form-integrations/v1/submissions/forms/" + id + "/?hapikey=" + h_api_key
    payload={}
    headers = {}
    response = requests.request("GET", url, headers=headers, data=payload)
    return jsonify(response.json())


@app.route('/api/hubspot/getFolders')
def get_all_folders():
    url = "https://api.hubapi.com/filemanager/api/v2/folders/?hapikey=" + h_api_key
    payload={}
    headers = {}
    response = requests.request("GET", url, headers=headers, data=payload)
    return jsonify(response.json())


@app.route('/api/hubspot/getFolderContent/<id>')
def get_folder_content(id):
    url = "https://api.hubapi.com/filemanager/api/v3/files/?hapikey=" + h_api_key + "&folder_id=" + id
    payload={}
    headers = {}
    response = requests.request("GET", url, headers=headers, data=payload)
    return jsonify(response.json())

@app.route('/api/hubspot/submit_form/<portal_id>/<form_id>')
def submit_form(portal_id, form_id): 
    url = "https://api.hsforms.com/submissions/v3/integration/submit/" + portal_id + "/" + form_id
    payload = {request.data}
    headers = {
        'Content-Type': 'application/json'
        }
    response = requests.request("POST", url, headers=headers, data=payload)
    return jsonify(response.json())



# TODO: Make more methods 
# Submit hubspot form
# Delete form 
# Delete files
# Create form 

if __name__ == '__main__':
    app.run()