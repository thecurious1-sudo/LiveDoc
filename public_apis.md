
# Public APIS

We've used 2 public APIS

1) https://api.infermedica.com/v3/

In a nutshell, all Infermedica solutions can be accessed through Infermedica API. From intelligent symptom checkers, and digital triage, through adaptive patient intake, to the next step recommendations, their flexible API opens up a world of possibilities for a wide range of custom healthcare projects.

After receiving patient’s health data (such as: symptoms, risk factors and/or demographics), their probabilistic engine will analyze it and provide you with a list of most possible conditions, triage level, specialist recommendation, and more - all thanks to the sophisticated statistical algorithms they use to perform AI-driven analysis.


## API Reference

#### Get symptom related to text

```http
  POST https://api.infermedica.com/v3/parse
```

| Parameter | Type     | Description                | Example
| :-------- | :------- | :------------------------- |:------------------------- 
| `text` | `string` | **Required**. Your symptom in natural language |  i feel smoach pain but no couoghing today
| `sex` | `string` | **Required**. male/female |  male
| `age` | `number` | **Required**.  | 25
| `Content-Type` | `string` | **Required**.  | application/json
| `-H App-Id` | `string` | **Required**. Your APP id |XXXXXXXX
| `-H App-Key` | `string` | **Required**. Your API key |XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

#### Get Diagnosis based on the symptoms

```http
  POST https://api.infermedica.com/v3/diagnosis
```

| Parameter | Type     | Description                | Example
| :-------- | :------- | :------------------------- |:------------------------- 
| `sex` | `string` | **Required**. male/female |  male
| `age` | `number` | **Required**.  | 25
| `evidence` | `Array` | **Required**.  |[{ "id": "s_1193", "choice_id": "present", "source": "initial"},{"id": "s_488","choice_id": "present"},{"id": "s_418", "choice_id": "present"}]
| `Content-Type` | `string` | **Required**.  | application/json
| `-H App-Id` | `string` | **Required**. Your APP id |XXXXXXXX
| `-H App-Key` | `string` | **Required**. Your API key |XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

#### Get Triage(Condition Severeity) based on the diseases

```http
  POST https://api.infermedica.com/v3/triage
```

| Parameter | Type     | Description                | Example
| :-------- | :------- | :------------------------- |:------------------------- 
| `sex` | `string` | **Required**. male/female |  male
| `age` | `number` | **Required**.  | 25
| `evidence` | `Array` | **Required**.  |[{ "id": "s_1193", "choice_id": "present", "source": "initial"},{"id": "s_488","choice_id": "present"},{"id": "s_418", "choice_id": "present"}]
| `Content-Type` | `string` | **Required**.  | application/json
| `-H App-Id` | `string` | **Required**. Your APP id |XXXXXXXX
| `-H App-Key` | `string` | **Required**. Your API key |XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


2)  https://clinicaltables.nlm.nih.gov/
Clinical Table Search Service (formerly "lforms-service") is a web service which software programs can use for querying clinical data tables. The API for each table is designed to work with our form field autocompletion package, but can be used by other programs as well. 

#### Get a web link to know more about the disease

```http
  GET https://clinicaltables.nlm.nih.gov/api/conditions/v3/search?terms=${myDisease}&df=info_link_data
```

| Parameter | Type     | Description                | Example
| :-------- | :------- | :------------------------- |:------------------------- 
| `terms` | `string` | **Required**. Name of Condition |  Common Cold
