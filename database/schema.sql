-- USERS
CREATE TABLE Users (
    id UUID PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT,
    oauth_provider TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP,
    subscription_status TEXT
);

-- CONNECTED ACCOUNTS
CREATE TABLE ConnectedAccounts (
    id UUID PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES Users(id) ON DELETE CASCADE,
    provider TEXT NOT NULL, -- e.g. 'gmail', 'outlook', 'imap'
    email_address TEXT NOT NULL,
    access_token TEXT,
    refresh_token TEXT,
    token_expires_at TIMESTAMP
);

-- EMAILS
CREATE TABLE Emails (
    id UUID PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES Users(id) ON DELETE CASCADE,
    thread_id TEXT,
    subject TEXT,
    sender TEXT,
    recipients TEXT,
    body TEXT,
    date TIMESTAMP
);

-- DRAFTS
CREATE TABLE Drafts (
    id UUID PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES Users(id) ON DELETE CASCADE,
    subject TEXT,
    body TEXT,
    to_address TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- SCHEDULED EMAILS
CREATE TABLE ScheduledEmails (
    id UUID PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES Users(id) ON DELETE CASCADE,
    subject TEXT,
    body TEXT,
    to_address TEXT,
    scheduled_for TIMESTAMP,
    sent BOOLEAN DEFAULT FALSE
);

-- SUBSCRIPTIONS
CREATE TABLE Subscriptions (
    id UUID PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES Users(id) ON DELETE CASCADE,
    stripe_customer_id TEXT,
    stripe_subscription_id TEXT,
    status TEXT, -- 'active', 'past_due', 'canceled'
    current_period_end TIMESTAMP
);

-- INSIGHTS
CREATE TABLE Insights (
    id UUID PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES Users(id) ON DELETE CASCADE,
    insight_type TEXT NOT NULL, -- Enum-like values (e.g., 'total_emails_sent')
    value JSONB NOT NULL,
    time_range_start TIMESTAMP NOT NULL,
    time_range_end TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
