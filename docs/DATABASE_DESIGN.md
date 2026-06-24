ALWASEET AI - DATABASE DESIGN

users

Stores platform users.

Fields:

- id
- full_name
- email
- password_hash
- role
- created_at

---

companies

Stores company information.

Fields:

- id
- owner_id
- company_name
- phone
- created_at

---

subscriptions

Stores subscription plans.

Fields:

- id
- company_id
- plan_name
- status
- expires_at

---

social_accounts

Stores connected social media accounts.

Fields:

- id
- company_id
- platform
- account_name
- access_token
- created_at

---

posts

Stores generated and published content.

Fields:

- id
- title
- content
- platform
- status
- created_at

---

trends

Stores trend analysis results.

Fields:

- id
- keyword
- source
- score
- created_at

---

analytics

Stores performance metrics.

Fields:

- id
- post_id
- views
- likes
- comments
- shares
- engagement_rate
