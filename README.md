# Luci Public API Documentation

High-level documentation for interacting with the Luci backend at `http://localhost:8000`.

This repository describes how to call the API, not how Luci works internally.

---

## Files

- `endpoints.md`
- `authentication.md`
- `usage-examples.md`
- `rate-limits.md`
- `error-codes.md`

---

## Example Request

```http
POST /v1/message
Host: localhost:8000
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

{
  "message": "Hello, Luci"
}
