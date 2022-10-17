
CREATE TABLE IF NOT EXISTS public.cities
(
    id bigint NOT NULL,
    city_name text COLLATE pg_catalog."default" NOT NULL,
    photo text COLLATE pg_catalog."default" NOT NULL
);

COPY cities FROM '/var/lib/postgresql/data/cities.csv' DELIMITER ',' CSV HEADER;


