\---



\# 📄 \*\*FILE: luci-public-api-docs/endpoints.md\*\*



```markdown

\# Endpoints



\## GET /v1/ping

Health check.



\## POST /v1/message

Send a message to Luci.



Body:

```json

{

&#x20; "message": "string"

}



{

&#x20; "id": "msg\_xxx",

&#x20; "reply": "string",

&#x20; "timestamp": "ISO8601"

}



