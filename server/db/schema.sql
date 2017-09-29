CREATE SEQUENCE images_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE TABLE images (
    id integer DEFAULT nextval('images_id_seq'::regclass) NOT NULL,
    key integer NOT NULL,
    url character varying(250)
);

ALTER TABLE ONLY images
    ADD CONSTRAINT images_pkey PRIMARY KEY (id);

