\# Usage Examples



\## Python



```python

import requests



res = requests.post(

&#x20;   "http://localhost:8000/v1/message",

&#x20;   json={"message": "Hello"},

&#x20;   headers={"Authorization": "Bearer YOUR\_API\_KEY"}

)

print(res.json())



