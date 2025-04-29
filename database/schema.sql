-- SQL schema for the EmailAI project

CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    oauth_provider VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP,
    subscription_status VARCHAR(50) NOT NULL
);

CREATE TABLE Emails (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES Users(id) ON DELETE CASCADE,
    subject VARCHAR(255) NOT NULL,
    body TEXT NOT NULL,
    sender VARCHAR(255) NOT NULL,
    recipients TEXT NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    thread_id INT
);

CREATE TABLE Drafts (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES Users(id) ON DELETE CASCADE,
    subject VARCHAR(255) NOT NULL,
    body TEXT NOT NULL,
    scheduled_send_time TIMESTAMP
);

CREATE TABLE ScheduledEmails (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES Users(id) ON DELETE CASCADE,
    draft_id INT REFERENCES Drafts(id) ON DELETE CASCADE,
    send_time TIMESTAMP NOT NULL
);

CREATE TABLE Insights (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES Users(id) ON DELETE CASCADE,
    total_emails_sent INT DEFAULT 0,
    avg_response_time INTERVAL,
    ai_usage_count INT DEFAULT 0
);