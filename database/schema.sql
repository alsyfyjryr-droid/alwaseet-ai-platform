CREATE TABLE users (
id UUID PRIMARY KEY,
full_name VARCHAR(255),
email VARCHAR(255) UNIQUE,
password_hash TEXT,
role VARCHAR(50),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE companies (
id UUID PRIMARY KEY,
owner_id UUID,
company_name VARCHAR(255),
phone VARCHAR(50),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE subscriptions (
id UUID PRIMARY KEY,
company_id UUID,
plan_name VARCHAR(100),
status VARCHAR(50),
expires_at TIMESTAMP
);

CREATE TABLE posts (
id UUID PRIMARY KEY,
title TEXT,
content TEXT,
platform VARCHAR(50),
status VARCHAR(50),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE social_accounts (
id UUID PRIMARY KEY,
company_id UUID,
platform VARCHAR(50),
account_name VARCHAR(255),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
