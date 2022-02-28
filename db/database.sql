CREATE TYPE status AS ENUM ('to_do', 'doing', 'done');

CREATE TABLE tasks
(
    id serial,
    title character varying(50) NOT NULL,
    description character varying(255),
    status status NOT NULL,
    requester character varying(50) NOT NULL,
    owners character varying(50) NOT NULL,
    due_date DATE NOT NULL
);