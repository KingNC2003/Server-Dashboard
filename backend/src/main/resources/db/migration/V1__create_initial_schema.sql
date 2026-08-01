CREATE TABLE category (
    id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name text NOT NULL UNIQUE
);

CREATE TABLE app_user (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    display_name text NOT NULL,
    username text NOT NULL UNIQUE,
    email text NOT NULL UNIQUE,
    password_hash text NOT NULL,
    repo_link text,
    profile_obj_key text
);

CREATE TABLE application (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name text NOT NULL,
    description text,
    url text NOT NULL,
    icon_key text,
    repo_link text,
    category_id bigint NOT NULL REFERENCES category(id)
);

CREATE TABLE application_favorite (
    user_id bigint NOT NULL REFERENCES app_user(id) ON DELETE CASCADE,
    application_id bigint NOT NULL REFERENCES application(id) ON DELETE CASCADE,
    PRIMARY KEY (user_id, application_id)
);