--
-- PostgreSQL database dump
--

-- Dumped from database version 11.16 (Debian 11.16-0+deb10u1)
-- Dumped by pg_dump version 14.2

-- Started on 2023-02-03 12:41:20

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE cd08;
--
-- TOC entry 3105 (class 1262 OID 16399)
-- Name: cd08; Type: DATABASE; Schema: -; Owner: -
--

CREATE DATABASE cd08 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';


\connect cd08

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- TOC entry 3106 (class 0 OID 0)
-- Dependencies: 3
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

--
-- TOC entry 207 (class 1259 OID 74763)
-- Name: album; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.album (
    title character varying(100) NOT NULL,
    release_year timestamp(0) without time zone NOT NULL,
    subgenre_id integer NOT NULL,
    album_id integer NOT NULL,
    artist_id integer NOT NULL,
    creation_date timestamp without time zone,
    image_path character varying(50)
);


--
-- TOC entry 222 (class 1259 OID 75004)
-- Name: album_album_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.album_album_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3107 (class 0 OID 0)
-- Dependencies: 222
-- Name: album_album_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.album_album_id_seq OWNED BY public.album.album_id;


--
-- TOC entry 233 (class 1259 OID 75217)
-- Name: album_artist_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.album_artist_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3108 (class 0 OID 0)
-- Dependencies: 233
-- Name: album_artist_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.album_artist_id_seq OWNED BY public.album.artist_id;


--
-- TOC entry 226 (class 1259 OID 75027)
-- Name: album_song; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.album_song (
    song_id integer NOT NULL,
    album_id integer NOT NULL,
    track_number integer NOT NULL
);


--
-- TOC entry 225 (class 1259 OID 75025)
-- Name: album_song_album_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.album_song_album_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3109 (class 0 OID 0)
-- Dependencies: 225
-- Name: album_song_album_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.album_song_album_id_seq OWNED BY public.album_song.album_id;


--
-- TOC entry 224 (class 1259 OID 75023)
-- Name: album_song_song_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.album_song_song_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3110 (class 0 OID 0)
-- Dependencies: 224
-- Name: album_song_song_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.album_song_song_id_seq OWNED BY public.album_song.song_id;


--
-- TOC entry 220 (class 1259 OID 74964)
-- Name: album_subgenre_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.album_subgenre_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3111 (class 0 OID 0)
-- Dependencies: 220
-- Name: album_subgenre_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.album_subgenre_id_seq OWNED BY public.album.subgenre_id;


--
-- TOC entry 197 (class 1259 OID 25017)
-- Name: artist; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.artist (
    name_artist character varying(100) NOT NULL,
    description character varying(4000),
    creation_year smallint,
    artist_id integer NOT NULL,
    creation_date timestamp without time zone
);


--
-- TOC entry 232 (class 1259 OID 75206)
-- Name: artist_artist_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.artist_artist_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3112 (class 0 OID 0)
-- Dependencies: 232
-- Name: artist_artist_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.artist_artist_id_seq OWNED BY public.artist.artist_id;


--
-- TOC entry 196 (class 1259 OID 25012)
-- Name: genre; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.genre (
    name character varying(30),
    genre_id integer NOT NULL
);


--
-- TOC entry 230 (class 1259 OID 75065)
-- Name: genre_genre_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.genre_genre_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3113 (class 0 OID 0)
-- Dependencies: 230
-- Name: genre_genre_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.genre_genre_id_seq OWNED BY public.genre.genre_id;


--
-- TOC entry 199 (class 1259 OID 25080)
-- Name: playlist; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.playlist (
    name_playlist character varying(50) NOT NULL,
    description character varying(200),
    creation_date date NOT NULL,
    user_id integer NOT NULL,
    playlist_id integer NOT NULL
);


--
-- TOC entry 223 (class 1259 OID 75015)
-- Name: playlist_playlist_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.playlist_playlist_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3114 (class 0 OID 0)
-- Dependencies: 223
-- Name: playlist_playlist_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.playlist_playlist_id_seq OWNED BY public.playlist.playlist_id;


--
-- TOC entry 229 (class 1259 OID 75048)
-- Name: playlist_song; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.playlist_song (
    song_id integer NOT NULL,
    playlist_id integer NOT NULL,
    track_order integer NOT NULL
);


--
-- TOC entry 228 (class 1259 OID 75046)
-- Name: playlist_song_playlist_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.playlist_song_playlist_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3115 (class 0 OID 0)
-- Dependencies: 228
-- Name: playlist_song_playlist_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.playlist_song_playlist_id_seq OWNED BY public.playlist_song.playlist_id;


--
-- TOC entry 227 (class 1259 OID 75044)
-- Name: playlist_song_song_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.playlist_song_song_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3116 (class 0 OID 0)
-- Dependencies: 227
-- Name: playlist_song_song_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.playlist_song_song_id_seq OWNED BY public.playlist_song.song_id;


--
-- TOC entry 212 (class 1259 OID 74845)
-- Name: playlist_user_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.playlist_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3117 (class 0 OID 0)
-- Dependencies: 212
-- Name: playlist_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.playlist_user_id_seq OWNED BY public.playlist.user_id;


--
-- TOC entry 200 (class 1259 OID 25494)
-- Name: song; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.song (
    name character varying(50) NOT NULL,
    duration integer NOT NULL,
    song_id integer NOT NULL
);


--
-- TOC entry 221 (class 1259 OID 74981)
-- Name: song_song_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.song_song_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3118 (class 0 OID 0)
-- Dependencies: 221
-- Name: song_song_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.song_song_id_seq OWNED BY public.song.song_id;


--
-- TOC entry 201 (class 1259 OID 25534)
-- Name: subgenre; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.subgenre (
    name character varying(30) NOT NULL,
    subgenre_id integer NOT NULL,
    genre_id integer NOT NULL
);


--
-- TOC entry 231 (class 1259 OID 75073)
-- Name: subgenre_genre_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.subgenre_genre_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3119 (class 0 OID 0)
-- Dependencies: 231
-- Name: subgenre_genre_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.subgenre_genre_id_seq OWNED BY public.subgenre.genre_id;


--
-- TOC entry 219 (class 1259 OID 74944)
-- Name: subgenre_subgenre_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.subgenre_subgenre_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3120 (class 0 OID 0)
-- Dependencies: 219
-- Name: subgenre_subgenre_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.subgenre_subgenre_id_seq OWNED BY public.subgenre.subgenre_id;


--
-- TOC entry 202 (class 1259 OID 70087)
-- Name: trole; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.trole (
    rolename character varying(255),
    xmlclientpermission character varying(10485760),
    id_rolename integer NOT NULL
);


--
-- TOC entry 216 (class 1259 OID 74889)
-- Name: trole_id_rolename_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.trole_id_rolename_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3121 (class 0 OID 0)
-- Dependencies: 216
-- Name: trole_id_rolename_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.trole_id_rolename_seq OWNED BY public.trole.id_rolename;


--
-- TOC entry 206 (class 1259 OID 70196)
-- Name: trole_server_permission; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.trole_server_permission (
    id_server_permission integer NOT NULL,
    id_role_server_permission integer NOT NULL,
    id_rolename integer NOT NULL
);


--
-- TOC entry 215 (class 1259 OID 74880)
-- Name: trole_server_permission_id_role_server_permission_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.trole_server_permission_id_role_server_permission_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3122 (class 0 OID 0)
-- Dependencies: 215
-- Name: trole_server_permission_id_role_server_permission_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.trole_server_permission_id_role_server_permission_seq OWNED BY public.trole_server_permission.id_role_server_permission;


--
-- TOC entry 217 (class 1259 OID 74900)
-- Name: trole_server_permission_id_rolename_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.trole_server_permission_id_rolename_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3123 (class 0 OID 0)
-- Dependencies: 217
-- Name: trole_server_permission_id_rolename_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.trole_server_permission_id_rolename_seq OWNED BY public.trole_server_permission.id_rolename;


--
-- TOC entry 214 (class 1259 OID 74868)
-- Name: trole_server_permission_id_server_permission_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.trole_server_permission_id_server_permission_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3124 (class 0 OID 0)
-- Dependencies: 214
-- Name: trole_server_permission_id_server_permission_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.trole_server_permission_id_server_permission_seq OWNED BY public.trole_server_permission.id_server_permission;


--
-- TOC entry 204 (class 1259 OID 70124)
-- Name: tserver_permission; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.tserver_permission (
    permission_name character varying(10485760),
    id_server_permission integer NOT NULL
);


--
-- TOC entry 213 (class 1259 OID 74857)
-- Name: tserver_permission_id_server_permission_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.tserver_permission_id_server_permission_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3125 (class 0 OID 0)
-- Dependencies: 213
-- Name: tserver_permission_id_server_permission_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.tserver_permission_id_server_permission_seq OWNED BY public.tserver_permission.id_server_permission;


--
-- TOC entry 198 (class 1259 OID 25070)
-- Name: tuser; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.tuser (
    user_name character varying(30) NOT NULL,
    user_surname character varying(30),
    user_birth_date date NOT NULL,
    user_email character varying(40) NOT NULL,
    user_password character varying(40),
    user_creation_date date,
    user_down_date date,
    user_id integer NOT NULL
);


--
-- TOC entry 203 (class 1259 OID 70095)
-- Name: tuser_preference; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.tuser_preference (
    preference_name character varying,
    user_login character varying,
    preference_value character varying,
    id_user_preference integer NOT NULL
);


--
-- TOC entry 209 (class 1259 OID 74807)
-- Name: tuser_preference_id_user_preference_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.tuser_preference_id_user_preference_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3126 (class 0 OID 0)
-- Dependencies: 209
-- Name: tuser_preference_id_user_preference_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.tuser_preference_id_user_preference_seq OWNED BY public.tuser_preference.id_user_preference;


--
-- TOC entry 205 (class 1259 OID 70171)
-- Name: tuser_role; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.tuser_role (
    id_user_role integer NOT NULL,
    user_id integer NOT NULL,
    id_rolename integer NOT NULL
);


--
-- TOC entry 218 (class 1259 OID 74912)
-- Name: tuser_role_id_rolename_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.tuser_role_id_rolename_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3127 (class 0 OID 0)
-- Dependencies: 218
-- Name: tuser_role_id_rolename_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.tuser_role_id_rolename_seq OWNED BY public.tuser_role.id_rolename;


--
-- TOC entry 208 (class 1259 OID 74799)
-- Name: tuser_role_id_user_role_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.tuser_role_id_user_role_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3128 (class 0 OID 0)
-- Dependencies: 208
-- Name: tuser_role_id_user_role_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.tuser_role_id_user_role_seq OWNED BY public.tuser_role.id_user_role;


--
-- TOC entry 211 (class 1259 OID 74826)
-- Name: tuser_role_user_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.tuser_role_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3129 (class 0 OID 0)
-- Dependencies: 211
-- Name: tuser_role_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.tuser_role_user_id_seq OWNED BY public.tuser_role.user_id;


--
-- TOC entry 210 (class 1259 OID 74818)
-- Name: tuser_user_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.tuser_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3130 (class 0 OID 0)
-- Dependencies: 210
-- Name: tuser_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.tuser_user_id_seq OWNED BY public.tuser.user_id;


--
-- TOC entry 2894 (class 2604 OID 74966)
-- Name: album subgenre_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.album ALTER COLUMN subgenre_id SET DEFAULT nextval('public.album_subgenre_id_seq'::regclass);


--
-- TOC entry 2895 (class 2604 OID 75006)
-- Name: album album_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.album ALTER COLUMN album_id SET DEFAULT nextval('public.album_album_id_seq'::regclass);


--
-- TOC entry 2896 (class 2604 OID 75219)
-- Name: album artist_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.album ALTER COLUMN artist_id SET DEFAULT nextval('public.album_artist_id_seq'::regclass);


--
-- TOC entry 2897 (class 2604 OID 75030)
-- Name: album_song song_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.album_song ALTER COLUMN song_id SET DEFAULT nextval('public.album_song_song_id_seq'::regclass);


--
-- TOC entry 2898 (class 2604 OID 75031)
-- Name: album_song album_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.album_song ALTER COLUMN album_id SET DEFAULT nextval('public.album_song_album_id_seq'::regclass);


--
-- TOC entry 2878 (class 2604 OID 75208)
-- Name: artist artist_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.artist ALTER COLUMN artist_id SET DEFAULT nextval('public.artist_artist_id_seq'::regclass);


--
-- TOC entry 2877 (class 2604 OID 75067)
-- Name: genre genre_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.genre ALTER COLUMN genre_id SET DEFAULT nextval('public.genre_genre_id_seq'::regclass);


--
-- TOC entry 2880 (class 2604 OID 74847)
-- Name: playlist user_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.playlist ALTER COLUMN user_id SET DEFAULT nextval('public.playlist_user_id_seq'::regclass);


--
-- TOC entry 2881 (class 2604 OID 75017)
-- Name: playlist playlist_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.playlist ALTER COLUMN playlist_id SET DEFAULT nextval('public.playlist_playlist_id_seq'::regclass);


--
-- TOC entry 2899 (class 2604 OID 75051)
-- Name: playlist_song song_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.playlist_song ALTER COLUMN song_id SET DEFAULT nextval('public.playlist_song_song_id_seq'::regclass);


--
-- TOC entry 2900 (class 2604 OID 75052)
-- Name: playlist_song playlist_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.playlist_song ALTER COLUMN playlist_id SET DEFAULT nextval('public.playlist_song_playlist_id_seq'::regclass);


--
-- TOC entry 2882 (class 2604 OID 74983)
-- Name: song song_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.song ALTER COLUMN song_id SET DEFAULT nextval('public.song_song_id_seq'::regclass);


--
-- TOC entry 2883 (class 2604 OID 74946)
-- Name: subgenre subgenre_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.subgenre ALTER COLUMN subgenre_id SET DEFAULT nextval('public.subgenre_subgenre_id_seq'::regclass);


--
-- TOC entry 2884 (class 2604 OID 75075)
-- Name: subgenre genre_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.subgenre ALTER COLUMN genre_id SET DEFAULT nextval('public.subgenre_genre_id_seq'::regclass);


--
-- TOC entry 2885 (class 2604 OID 74891)
-- Name: trole id_rolename; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trole ALTER COLUMN id_rolename SET DEFAULT nextval('public.trole_id_rolename_seq'::regclass);


--
-- TOC entry 2891 (class 2604 OID 74870)
-- Name: trole_server_permission id_server_permission; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trole_server_permission ALTER COLUMN id_server_permission SET DEFAULT nextval('public.trole_server_permission_id_server_permission_seq'::regclass);


--
-- TOC entry 2892 (class 2604 OID 74882)
-- Name: trole_server_permission id_role_server_permission; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trole_server_permission ALTER COLUMN id_role_server_permission SET DEFAULT nextval('public.trole_server_permission_id_role_server_permission_seq'::regclass);


--
-- TOC entry 2893 (class 2604 OID 74902)
-- Name: trole_server_permission id_rolename; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trole_server_permission ALTER COLUMN id_rolename SET DEFAULT nextval('public.trole_server_permission_id_rolename_seq'::regclass);


--
-- TOC entry 2887 (class 2604 OID 74859)
-- Name: tserver_permission id_server_permission; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tserver_permission ALTER COLUMN id_server_permission SET DEFAULT nextval('public.tserver_permission_id_server_permission_seq'::regclass);


--
-- TOC entry 2879 (class 2604 OID 74820)
-- Name: tuser user_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tuser ALTER COLUMN user_id SET DEFAULT nextval('public.tuser_user_id_seq'::regclass);


--
-- TOC entry 2886 (class 2604 OID 74809)
-- Name: tuser_preference id_user_preference; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tuser_preference ALTER COLUMN id_user_preference SET DEFAULT nextval('public.tuser_preference_id_user_preference_seq'::regclass);


--
-- TOC entry 2888 (class 2604 OID 74801)
-- Name: tuser_role id_user_role; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tuser_role ALTER COLUMN id_user_role SET DEFAULT nextval('public.tuser_role_id_user_role_seq'::regclass);


--
-- TOC entry 2889 (class 2604 OID 74828)
-- Name: tuser_role user_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tuser_role ALTER COLUMN user_id SET DEFAULT nextval('public.tuser_role_user_id_seq'::regclass);


--
-- TOC entry 2890 (class 2604 OID 74914)
-- Name: tuser_role id_rolename; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tuser_role ALTER COLUMN id_rolename SET DEFAULT nextval('public.tuser_role_id_rolename_seq'::regclass);


--
-- TOC entry 3073 (class 0 OID 74763)
-- Dependencies: 207
-- Data for Name: album; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.album VALUES ('Meteora', '2000-01-01 08:57:13', 1, 1, 1, '2020-06-25 00:00:00', NULL);
INSERT INTO public.album VALUES ('Hybrid Theory', '2003-01-01 08:57:13', 1, 2, 1, '2020-06-26 00:00:00', NULL);
INSERT INTO public.album VALUES ('Minutes to Midnight', '2007-01-01 01:00:00', 1, 3, 1, '2020-06-27 00:00:00', NULL);
INSERT INTO public.album VALUES ('Hot Fuss', '2004-01-01 00:00:00', 2, 6, 2, '2020-07-09 10:14:36.246179', NULL);
INSERT INTO public.album VALUES ('A Thousand Suns', '2010-01-01 00:00:00', 1, 4, 1, '2020-07-12 11:27:06.978827', NULL);
INSERT INTO public.album VALUES ('F8', '2020-02-28 19:10:25', 3, 7, 3, '2020-07-17 11:03:09.808726', NULL);
INSERT INTO public.album VALUES ('War Is The Answer', '2009-09-22 19:10:25', 3, 8, 3, '2020-07-17 11:21:19.579836', NULL);
INSERT INTO public.album VALUES ('City Of Evil', '2005-06-06 19:10:25', 3, 9, 4, '2020-07-17 11:36:46.020758', NULL);
INSERT INTO public.album VALUES ('Diamonds In The Rough', '2020-02-07 19:10:25', 3, 10, 4, '2020-07-17 11:50:35.630714', NULL);


--
-- TOC entry 3092 (class 0 OID 75027)
-- Dependencies: 226
-- Data for Name: album_song; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.album_song VALUES (12, 1, 1);
INSERT INTO public.album_song VALUES (13, 1, 2);
INSERT INTO public.album_song VALUES (1, 1, 3);
INSERT INTO public.album_song VALUES (2, 1, 4);
INSERT INTO public.album_song VALUES (5, 1, 5);
INSERT INTO public.album_song VALUES (4, 1, 6);
INSERT INTO public.album_song VALUES (3, 1, 7);
INSERT INTO public.album_song VALUES (6, 1, 8);
INSERT INTO public.album_song VALUES (7, 1, 9);
INSERT INTO public.album_song VALUES (8, 1, 10);
INSERT INTO public.album_song VALUES (10, 1, 11);
INSERT INTO public.album_song VALUES (9, 1, 12);
INSERT INTO public.album_song VALUES (11, 1, 13);
INSERT INTO public.album_song VALUES (14, 2, 1);
INSERT INTO public.album_song VALUES (15, 2, 2);
INSERT INTO public.album_song VALUES (16, 2, 3);
INSERT INTO public.album_song VALUES (17, 2, 4);
INSERT INTO public.album_song VALUES (18, 2, 5);
INSERT INTO public.album_song VALUES (19, 2, 6);
INSERT INTO public.album_song VALUES (20, 2, 7);
INSERT INTO public.album_song VALUES (21, 2, 8);
INSERT INTO public.album_song VALUES (22, 2, 9);
INSERT INTO public.album_song VALUES (23, 2, 10);
INSERT INTO public.album_song VALUES (24, 2, 11);
INSERT INTO public.album_song VALUES (25, 2, 12);
INSERT INTO public.album_song VALUES (28, 3, 1);
INSERT INTO public.album_song VALUES (29, 3, 2);
INSERT INTO public.album_song VALUES (30, 3, 3);
INSERT INTO public.album_song VALUES (31, 3, 4);
INSERT INTO public.album_song VALUES (32, 3, 5);
INSERT INTO public.album_song VALUES (33, 3, 6);
INSERT INTO public.album_song VALUES (34, 3, 7);
INSERT INTO public.album_song VALUES (35, 3, 8);
INSERT INTO public.album_song VALUES (36, 3, 9);
INSERT INTO public.album_song VALUES (37, 3, 10);
INSERT INTO public.album_song VALUES (39, 3, 11);
INSERT INTO public.album_song VALUES (38, 3, 12);
INSERT INTO public.album_song VALUES (40, 6, 1);
INSERT INTO public.album_song VALUES (41, 6, 2);
INSERT INTO public.album_song VALUES (42, 6, 3);
INSERT INTO public.album_song VALUES (43, 6, 4);
INSERT INTO public.album_song VALUES (44, 6, 5);
INSERT INTO public.album_song VALUES (45, 6, 6);
INSERT INTO public.album_song VALUES (46, 6, 7);
INSERT INTO public.album_song VALUES (47, 6, 8);
INSERT INTO public.album_song VALUES (48, 6, 9);
INSERT INTO public.album_song VALUES (49, 6, 10);
INSERT INTO public.album_song VALUES (50, 6, 11);
INSERT INTO public.album_song VALUES (51, 6, 12);
INSERT INTO public.album_song VALUES (52, 7, 1);
INSERT INTO public.album_song VALUES (53, 7, 2);
INSERT INTO public.album_song VALUES (55, 7, 4);
INSERT INTO public.album_song VALUES (56, 7, 5);
INSERT INTO public.album_song VALUES (57, 7, 6);
INSERT INTO public.album_song VALUES (58, 7, 7);
INSERT INTO public.album_song VALUES (59, 7, 8);
INSERT INTO public.album_song VALUES (60, 7, 9);
INSERT INTO public.album_song VALUES (61, 7, 10);
INSERT INTO public.album_song VALUES (62, 7, 11);
INSERT INTO public.album_song VALUES (63, 7, 12);
INSERT INTO public.album_song VALUES (64, 7, 13);
INSERT INTO public.album_song VALUES (65, 7, 14);
INSERT INTO public.album_song VALUES (66, 7, 15);
INSERT INTO public.album_song VALUES (67, 8, 1);
INSERT INTO public.album_song VALUES (68, 8, 2);
INSERT INTO public.album_song VALUES (69, 8, 3);
INSERT INTO public.album_song VALUES (70, 8, 4);
INSERT INTO public.album_song VALUES (71, 8, 5);
INSERT INTO public.album_song VALUES (72, 8, 6);
INSERT INTO public.album_song VALUES (73, 8, 7);
INSERT INTO public.album_song VALUES (74, 8, 8);
INSERT INTO public.album_song VALUES (75, 8, 9);
INSERT INTO public.album_song VALUES (76, 8, 10);
INSERT INTO public.album_song VALUES (77, 8, 11);
INSERT INTO public.album_song VALUES (78, 8, 12);
INSERT INTO public.album_song VALUES (79, 8, 13);
INSERT INTO public.album_song VALUES (80, 9, 1);
INSERT INTO public.album_song VALUES (81, 9, 2);
INSERT INTO public.album_song VALUES (82, 9, 3);
INSERT INTO public.album_song VALUES (83, 9, 4);
INSERT INTO public.album_song VALUES (84, 9, 5);
INSERT INTO public.album_song VALUES (85, 9, 6);
INSERT INTO public.album_song VALUES (86, 9, 7);
INSERT INTO public.album_song VALUES (87, 9, 8);
INSERT INTO public.album_song VALUES (88, 9, 9);
INSERT INTO public.album_song VALUES (89, 9, 10);
INSERT INTO public.album_song VALUES (90, 9, 11);
INSERT INTO public.album_song VALUES (91, 10, 1);
INSERT INTO public.album_song VALUES (92, 10, 2);
INSERT INTO public.album_song VALUES (106, 10, 3);
INSERT INTO public.album_song VALUES (93, 10, 4);
INSERT INTO public.album_song VALUES (94, 10, 5);
INSERT INTO public.album_song VALUES (95, 10, 6);
INSERT INTO public.album_song VALUES (96, 10, 7);
INSERT INTO public.album_song VALUES (97, 10, 8);
INSERT INTO public.album_song VALUES (98, 10, 9);
INSERT INTO public.album_song VALUES (99, 10, 10);
INSERT INTO public.album_song VALUES (100, 10, 11);
INSERT INTO public.album_song VALUES (101, 10, 12);
INSERT INTO public.album_song VALUES (102, 10, 13);
INSERT INTO public.album_song VALUES (103, 10, 14);
INSERT INTO public.album_song VALUES (104, 10, 15);
INSERT INTO public.album_song VALUES (105, 10, 16);


--
-- TOC entry 3063 (class 0 OID 25017)
-- Dependencies: 197
-- Data for Name: artist; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.artist VALUES ('The Killers', 'The Killers are an American rock band formed in Las Vegas in 2001 by Brandon Flowers (lead vocals, keyboards, bass) and Dave Keuning (lead guitar, backing vocals).', 2001, 2, '2020-05-23 00:00:00');
INSERT INTO public.artist VALUES ('Five Finger Deathpunch', 'Five Finger Death Punch, also abbreviated as 5FDP or FFDP, is an American heavy metal band from Las Vegas, Nevada, formed in 2005.', 2005, 3, '2020-05-24 00:00:00');
INSERT INTO public.artist VALUES ('Avenged Sevenfold', 'Avenged Sevenfold (sometimes abbreviated as A7X) is an American heavy metal band from Huntington Beach, California, formed in 1999. The bands current lineup consists of lead vocalist M. Shadows, rhythm guitarist and backing vocalist Zacky Vengeance, lead guitarist and backing vocalist Synyster Gates, bassist and backing vocalist Johnny Christ, and drummer Brooks Wackerman.', 1999, 4, '2020-05-25 00:00:00');
INSERT INTO public.artist VALUES ('Linkin Park', 'Linkin Park is an American rock band from Agoura Hills, California. The band''s current lineup comprises vocalist/rhythm guitarist Mike Shinoda, lead guitarist Brad Delson, bassist Dave Farrell, DJ/turntablist Joe Hahn and drummer Rob Bourdon, all of whom are founding members. Vocalists Mark Wakefield and Chester Bennington and bassist Kyle Christner are former members of the band. Categorized as alternative rock, Linkin Park’s earlier music spanned a fusion of heavy metal and hip hop, while they later transitioned into more electronica and pop influenced music.

Genres: nu-metal, hip-hop, hard-rock, alt-rock

Integrants: Mike Shinoda, Chester Bennington, Joe Hahn, Rob Bourdon, Dave Farrel', 2003, 1, '2020-05-22 00:00:00');


--
-- TOC entry 3062 (class 0 OID 25012)
-- Dependencies: 196
-- Data for Name: genre; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.genre VALUES ('rock', 1);


--
-- TOC entry 3065 (class 0 OID 25080)
-- Dependencies: 199
-- Data for Name: playlist; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.playlist VALUES ('00''s hits', 'The hits you know and love from the 2000s onwards', '2020-07-13', 1, 1);
INSERT INTO public.playlist VALUES ('10''s hits', 'The hits you know and love from the 2010s onwards', '2020-07-13', 1, 2);
INSERT INTO public.playlist VALUES ('90''s hits', 'Sounds from two decades ago', '2020-07-20', 1, 3);
INSERT INTO public.playlist VALUES ('Test', 'For this demo and just for it ;)', '0026-01-10', 1, 4);


--
-- TOC entry 3095 (class 0 OID 75048)
-- Dependencies: 229
-- Data for Name: playlist_song; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.playlist_song VALUES (1, 1, 1);
INSERT INTO public.playlist_song VALUES (16, 1, 2);
INSERT INTO public.playlist_song VALUES (50, 1, 3);
INSERT INTO public.playlist_song VALUES (23, 1, 4);
INSERT INTO public.playlist_song VALUES (12, 1, 5);
INSERT INTO public.playlist_song VALUES (45, 1, 6);
INSERT INTO public.playlist_song VALUES (33, 1, 7);
INSERT INTO public.playlist_song VALUES (2, 1, 8);
INSERT INTO public.playlist_song VALUES (26, 1, 9);
INSERT INTO public.playlist_song VALUES (16, 1, 10);
INSERT INTO public.playlist_song VALUES (36, 1, 3);


--
-- TOC entry 3066 (class 0 OID 25494)
-- Dependencies: 200
-- Data for Name: song; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.song VALUES ('Somewhere I Belong', 214, 1);
INSERT INTO public.song VALUES ('Lying From You', 175, 2);
INSERT INTO public.song VALUES ('Faint', 163, 3);
INSERT INTO public.song VALUES ('Easier to Run', 204, 4);
INSERT INTO public.song VALUES ('Hit the Floor', 164, 5);
INSERT INTO public.song VALUES ('Figure.09', 198, 6);
INSERT INTO public.song VALUES ('Breaking the Habit', 197, 7);
INSERT INTO public.song VALUES ('From the Inside', 174, 8);
INSERT INTO public.song VALUES ('Session', 144, 9);
INSERT INTO public.song VALUES ('Nobody''s Listening', 179, 10);
INSERT INTO public.song VALUES ('Numb', 186, 11);
INSERT INTO public.song VALUES ('Foreword', 13, 12);
INSERT INTO public.song VALUES ('Don''t Stay', 188, 13);
INSERT INTO public.song VALUES ('Papercut', 185, 14);
INSERT INTO public.song VALUES ('One Step Closer', 157, 15);
INSERT INTO public.song VALUES ('With You', 203, 16);
INSERT INTO public.song VALUES ('Points of Authority', 210, 17);
INSERT INTO public.song VALUES ('Crawling', 209, 18);
INSERT INTO public.song VALUES ('Runaway', 184, 19);
INSERT INTO public.song VALUES ('By Myself', 190, 20);
INSERT INTO public.song VALUES ('In The End', 217, 21);
INSERT INTO public.song VALUES ('A Place For My Head', 185, 22);
INSERT INTO public.song VALUES ('Forgotten', 194, 23);
INSERT INTO public.song VALUES ('Cure for the Itch', 157, 24);
INSERT INTO public.song VALUES ('Pushing Me Away', 191, 25);
INSERT INTO public.song VALUES ('My December', 261, 26);
INSERT INTO public.song VALUES ('High Voltage', 225, 27);
INSERT INTO public.song VALUES ('Wake', 101, 28);
INSERT INTO public.song VALUES ('Given Up', 189, 29);
INSERT INTO public.song VALUES ('Leave Out All The Rest', 209, 30);
INSERT INTO public.song VALUES ('Bleed It Out', 166, 31);
INSERT INTO public.song VALUES ('Shadow of the Day', 290, 32);
INSERT INTO public.song VALUES ('What I ve Done', 206, 33);
INSERT INTO public.song VALUES ('Hands Held High', 222, 34);
INSERT INTO public.song VALUES ('No More Sorrow', 222, 35);
INSERT INTO public.song VALUES ('Valentine´s Day', 197, 36);
INSERT INTO public.song VALUES ('In Between', 197, 37);
INSERT INTO public.song VALUES ('The Little Things Give You Away', 384, 38);
INSERT INTO public.song VALUES ('In Pieces', 218, 39);
INSERT INTO public.song VALUES ('Jenny Was a Friend Of Mine', 244, 40);
INSERT INTO public.song VALUES ('Mr. Brightside', 222, 41);
INSERT INTO public.song VALUES ('Smile Like You Mean It', 234, 42);
INSERT INTO public.song VALUES ('Somebody Told Me', 197, 43);
INSERT INTO public.song VALUES ('All These Things That I''ve Done', 301, 44);
INSERT INTO public.song VALUES ('Andy, You''re A Star', 194, 45);
INSERT INTO public.song VALUES ('On Top', 258, 46);
INSERT INTO public.song VALUES ('Change Your Mind', 190, 47);
INSERT INTO public.song VALUES ('Believe Me Natalie', 306, 48);
INSERT INTO public.song VALUES ('Midnight Show', 242, 49);
INSERT INTO public.song VALUES ('Everything Will Be Alright', 345, 50);
INSERT INTO public.song VALUES ('Glamorous Indie Rock And Roll', 255, 51);
INSERT INTO public.song VALUES ('F8', 75, 52);
INSERT INTO public.song VALUES ('Inside Out', 226, 53);
INSERT INTO public.song VALUES ('Full Circle', 202, 54);
INSERT INTO public.song VALUES ('Living The Dream', 215, 55);
INSERT INTO public.song VALUES ('A Little Bit Off', 191, 56);
INSERT INTO public.song VALUES ('Bottom Of The Top', 210, 57);
INSERT INTO public.song VALUES ('To Be Alone', 225, 58);
INSERT INTO public.song VALUES ('Mother May I', 234, 59);
INSERT INTO public.song VALUES ('Darkness Settles In', 282, 60);
INSERT INTO public.song VALUES ('This Is War', 211, 61);
INSERT INTO public.song VALUES ('Leave It ALL Behind', 211, 62);
INSERT INTO public.song VALUES ('Scar Tissue', 173, 63);
INSERT INTO public.song VALUES ('Brighter Side Of Grey', 270, 64);
INSERT INTO public.song VALUES ('Making Monsters', 183, 65);
INSERT INTO public.song VALUES ('Death Punch Therapy', 188, 66);
INSERT INTO public.song VALUES ('Dying Breed', 175, 67);
INSERT INTO public.song VALUES ('Hard To See', 209, 68);
INSERT INTO public.song VALUES ('Bulletproof', 196, 69);
INSERT INTO public.song VALUES ('No One Gets Left Behind', 204, 70);
INSERT INTO public.song VALUES ('Crossing Over', 174, 71);
INSERT INTO public.song VALUES ('Burn It Down', 213, 72);
INSERT INTO public.song VALUES ('Far For Home', 212, 73);
INSERT INTO public.song VALUES ('Falling To Hate', 180, 74);
INSERT INTO public.song VALUES ('My Own Hell', 215, 75);
INSERT INTO public.song VALUES ('Walk Away', 223, 76);
INSERT INTO public.song VALUES ('Canto 34', 250, 77);
INSERT INTO public.song VALUES ('Bad Company', 262, 78);
INSERT INTO public.song VALUES ('War Is The Answer', 198, 79);
INSERT INTO public.song VALUES ('Beast And The Harlot', 344, 80);
INSERT INTO public.song VALUES ('Burn It Down', 299, 81);
INSERT INTO public.song VALUES ('Blinded In Chains', 394, 82);
INSERT INTO public.song VALUES ('Bat Country', 312, 83);
INSERT INTO public.song VALUES ('Trashed And Scattered', 352, 84);
INSERT INTO public.song VALUES ('Seize The Day', 334, 85);
INSERT INTO public.song VALUES ('Sidewinder', 422, 86);
INSERT INTO public.song VALUES ('The Wicked End', 432, 87);
INSERT INTO public.song VALUES ('Strength Of The World', 555, 88);
INSERT INTO public.song VALUES ('Betrayed', 406, 89);
INSERT INTO public.song VALUES ('M.I.A.', 526, 90);
INSERT INTO public.song VALUES ('Demons', 372, 91);
INSERT INTO public.song VALUES ('Girl I Know', 264, 92);
INSERT INTO public.song VALUES ('Flash Of The Blade', 242, 93);
INSERT INTO public.song VALUES ('Until The End', 286, 94);
INSERT INTO public.song VALUES ('Tension', 290, 95);
INSERT INTO public.song VALUES ('Walk', 322, 96);
INSERT INTO public.song VALUES ('The Fight', 247, 97);
INSERT INTO public.song VALUES ('Dancing Dead', 352, 98);
INSERT INTO public.song VALUES ('Almost Easy - Chris Lord-Alge Mix', 234, 99);
INSERT INTO public.song VALUES ('Afterlife - Alternate Version', 353, 100);
INSERT INTO public.song VALUES ('St. James', 302, 101);
INSERT INTO public.song VALUES ('Set Me Free', 381, 102);
INSERT INTO public.song VALUES ('4:00 AM', 301, 103);
INSERT INTO public.song VALUES ('Lost It All', 232, 104);
INSERT INTO public.song VALUES ('Paranoid', 163, 105);
INSERT INTO public.song VALUES ('Crossroads', 270, 106);


--
-- TOC entry 3067 (class 0 OID 25534)
-- Dependencies: 201
-- Data for Name: subgenre; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.subgenre VALUES ('nu-metal', 1, 1);
INSERT INTO public.subgenre VALUES ('Indie rock', 2, 1);
INSERT INTO public.subgenre VALUES ('Heavy metal', 3, 1);


--
-- TOC entry 3068 (class 0 OID 70087)
-- Dependencies: 202
-- Data for Name: trole; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- TOC entry 3072 (class 0 OID 70196)
-- Dependencies: 206
-- Data for Name: trole_server_permission; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- TOC entry 3070 (class 0 OID 70124)
-- Dependencies: 204
-- Data for Name: tserver_permission; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- TOC entry 3064 (class 0 OID 25070)
-- Dependencies: 198
-- Data for Name: tuser; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.tuser VALUES ('Eduardo', 'Ares', '1997-04-17', 'ea@gmail.com', '1234', '2020-07-14', NULL, 2);
INSERT INTO public.tuser VALUES ('Manuel', 'Santamariña', '1999-03-15', 'eaf@gmaill.com', NULL, '2020-07-20', NULL, 3);
INSERT INTO public.tuser VALUES ('Manuel', 'González', '1999-03-15', 'manuelg@gmail.com', '1234', '2005-03-15', NULL, 1);
INSERT INTO public.tuser VALUES ('Brandon', 'Flowers', '1981-01-01', 'brandonf@gmail.com', 'thekillers', '2020-07-23', NULL, 4);


--
-- TOC entry 3069 (class 0 OID 70095)
-- Dependencies: 203
-- Data for Name: tuser_preference; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- TOC entry 3071 (class 0 OID 70171)
-- Dependencies: 205
-- Data for Name: tuser_role; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- TOC entry 3131 (class 0 OID 0)
-- Dependencies: 222
-- Name: album_album_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.album_album_id_seq', 11, true);


--
-- TOC entry 3132 (class 0 OID 0)
-- Dependencies: 233
-- Name: album_artist_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.album_artist_id_seq', 3, true);


--
-- TOC entry 3133 (class 0 OID 0)
-- Dependencies: 225
-- Name: album_song_album_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.album_song_album_id_seq', 1, false);


--
-- TOC entry 3134 (class 0 OID 0)
-- Dependencies: 224
-- Name: album_song_song_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.album_song_song_id_seq', 1, false);


--
-- TOC entry 3135 (class 0 OID 0)
-- Dependencies: 220
-- Name: album_subgenre_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.album_subgenre_id_seq', 3, true);


--
-- TOC entry 3136 (class 0 OID 0)
-- Dependencies: 232
-- Name: artist_artist_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.artist_artist_id_seq', 4, true);


--
-- TOC entry 3137 (class 0 OID 0)
-- Dependencies: 230
-- Name: genre_genre_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.genre_genre_id_seq', 1, true);


--
-- TOC entry 3138 (class 0 OID 0)
-- Dependencies: 223
-- Name: playlist_playlist_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.playlist_playlist_id_seq', 4, true);


--
-- TOC entry 3139 (class 0 OID 0)
-- Dependencies: 228
-- Name: playlist_song_playlist_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.playlist_song_playlist_id_seq', 1, false);


--
-- TOC entry 3140 (class 0 OID 0)
-- Dependencies: 227
-- Name: playlist_song_song_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.playlist_song_song_id_seq', 1, false);


--
-- TOC entry 3141 (class 0 OID 0)
-- Dependencies: 212
-- Name: playlist_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.playlist_user_id_seq', 12, true);


--
-- TOC entry 3142 (class 0 OID 0)
-- Dependencies: 221
-- Name: song_song_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.song_song_id_seq', 106, true);


--
-- TOC entry 3143 (class 0 OID 0)
-- Dependencies: 231
-- Name: subgenre_genre_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.subgenre_genre_id_seq', 1, true);


--
-- TOC entry 3144 (class 0 OID 0)
-- Dependencies: 219
-- Name: subgenre_subgenre_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.subgenre_subgenre_id_seq', 3, true);


--
-- TOC entry 3145 (class 0 OID 0)
-- Dependencies: 216
-- Name: trole_id_rolename_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.trole_id_rolename_seq', 1, false);


--
-- TOC entry 3146 (class 0 OID 0)
-- Dependencies: 215
-- Name: trole_server_permission_id_role_server_permission_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.trole_server_permission_id_role_server_permission_seq', 1, false);


--
-- TOC entry 3147 (class 0 OID 0)
-- Dependencies: 217
-- Name: trole_server_permission_id_rolename_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.trole_server_permission_id_rolename_seq', 1, false);


--
-- TOC entry 3148 (class 0 OID 0)
-- Dependencies: 214
-- Name: trole_server_permission_id_server_permission_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.trole_server_permission_id_server_permission_seq', 1, false);


--
-- TOC entry 3149 (class 0 OID 0)
-- Dependencies: 213
-- Name: tserver_permission_id_server_permission_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.tserver_permission_id_server_permission_seq', 1, false);


--
-- TOC entry 3150 (class 0 OID 0)
-- Dependencies: 209
-- Name: tuser_preference_id_user_preference_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.tuser_preference_id_user_preference_seq', 1, false);


--
-- TOC entry 3151 (class 0 OID 0)
-- Dependencies: 218
-- Name: tuser_role_id_rolename_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.tuser_role_id_rolename_seq', 1, false);


--
-- TOC entry 3152 (class 0 OID 0)
-- Dependencies: 208
-- Name: tuser_role_id_user_role_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.tuser_role_id_user_role_seq', 1, false);


--
-- TOC entry 3153 (class 0 OID 0)
-- Dependencies: 211
-- Name: tuser_role_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.tuser_role_user_id_seq', 1, false);


--
-- TOC entry 3154 (class 0 OID 0)
-- Dependencies: 210
-- Name: tuser_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.tuser_user_id_seq', 3, true);


--
-- TOC entry 2924 (class 2606 OID 75011)
-- Name: album album_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.album
    ADD CONSTRAINT album_pkey PRIMARY KEY (album_id);


--
-- TOC entry 2926 (class 2606 OID 75033)
-- Name: album_song album_song_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.album_song
    ADD CONSTRAINT album_song_pkey PRIMARY KEY (song_id, album_id, track_number);


--
-- TOC entry 2904 (class 2606 OID 75216)
-- Name: artist artist_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.artist
    ADD CONSTRAINT artist_pkey PRIMARY KEY (artist_id);


--
-- TOC entry 2902 (class 2606 OID 75072)
-- Name: genre genre_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.genre
    ADD CONSTRAINT genre_pkey PRIMARY KEY (genre_id);


--
-- TOC entry 2908 (class 2606 OID 75022)
-- Name: playlist playlist_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.playlist
    ADD CONSTRAINT playlist_pkey PRIMARY KEY (playlist_id);


--
-- TOC entry 2928 (class 2606 OID 106089)
-- Name: playlist_song playlist_song_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.playlist_song
    ADD CONSTRAINT playlist_song_pk PRIMARY KEY (song_id, playlist_id, track_order);


--
-- TOC entry 2910 (class 2606 OID 74988)
-- Name: song song_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.song
    ADD CONSTRAINT song_pkey PRIMARY KEY (song_id);


--
-- TOC entry 2912 (class 2606 OID 74951)
-- Name: subgenre subgenre_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.subgenre
    ADD CONSTRAINT subgenre_pkey PRIMARY KEY (subgenre_id);


--
-- TOC entry 2914 (class 2606 OID 74899)
-- Name: trole trole_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trole
    ADD CONSTRAINT trole_pkey PRIMARY KEY (id_rolename);


--
-- TOC entry 2922 (class 2606 OID 74887)
-- Name: trole_server_permission trole_server_permission_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trole_server_permission
    ADD CONSTRAINT trole_server_permission_pkey PRIMARY KEY (id_role_server_permission);


--
-- TOC entry 2918 (class 2606 OID 74867)
-- Name: tserver_permission tserver_permission_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tserver_permission
    ADD CONSTRAINT tserver_permission_pkey PRIMARY KEY (id_server_permission);


--
-- TOC entry 2906 (class 2606 OID 74825)
-- Name: tuser tuser_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tuser
    ADD CONSTRAINT tuser_pkey PRIMARY KEY (user_id);


--
-- TOC entry 2916 (class 2606 OID 74817)
-- Name: tuser_preference tuser_preference_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tuser_preference
    ADD CONSTRAINT tuser_preference_pkey PRIMARY KEY (id_user_preference);


--
-- TOC entry 2920 (class 2606 OID 74806)
-- Name: tuser_role tuser_role_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tuser_role
    ADD CONSTRAINT tuser_role_pkey PRIMARY KEY (id_user_role);


--
-- TOC entry 2938 (class 2606 OID 75039)
-- Name: album_song album_song_album_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.album_song
    ADD CONSTRAINT album_song_album_id_fkey FOREIGN KEY (album_id) REFERENCES public.album(album_id);


--
-- TOC entry 2937 (class 2606 OID 75034)
-- Name: album_song album_song_song_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.album_song
    ADD CONSTRAINT album_song_song_id_fkey FOREIGN KEY (song_id) REFERENCES public.song(song_id);


--
-- TOC entry 2935 (class 2606 OID 75239)
-- Name: album fk_artist_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.album
    ADD CONSTRAINT fk_artist_id FOREIGN KEY (artist_id) REFERENCES public.artist(artist_id);


--
-- TOC entry 2930 (class 2606 OID 75080)
-- Name: subgenre fk_genre_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.subgenre
    ADD CONSTRAINT fk_genre_id FOREIGN KEY (genre_id) REFERENCES public.genre(genre_id);


--
-- TOC entry 2934 (class 2606 OID 74907)
-- Name: trole_server_permission fk_id_rolename; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trole_server_permission
    ADD CONSTRAINT fk_id_rolename FOREIGN KEY (id_rolename) REFERENCES public.trole(id_rolename);


--
-- TOC entry 2932 (class 2606 OID 74919)
-- Name: tuser_role fk_id_rolename; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tuser_role
    ADD CONSTRAINT fk_id_rolename FOREIGN KEY (id_rolename) REFERENCES public.trole(id_rolename);


--
-- TOC entry 2933 (class 2606 OID 74875)
-- Name: trole_server_permission fk_id_server_permission; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trole_server_permission
    ADD CONSTRAINT fk_id_server_permission FOREIGN KEY (id_server_permission) REFERENCES public.tserver_permission(id_server_permission);


--
-- TOC entry 2936 (class 2606 OID 75244)
-- Name: album fk_subgenre_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.album
    ADD CONSTRAINT fk_subgenre_id FOREIGN KEY (subgenre_id) REFERENCES public.subgenre(subgenre_id);


--
-- TOC entry 2931 (class 2606 OID 74833)
-- Name: tuser_role fk_user_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tuser_role
    ADD CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES public.tuser(user_id);


--
-- TOC entry 2929 (class 2606 OID 74852)
-- Name: playlist fk_user_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.playlist
    ADD CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES public.tuser(user_id);


--
-- TOC entry 2940 (class 2606 OID 75060)
-- Name: playlist_song playlist_song_playlist_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.playlist_song
    ADD CONSTRAINT playlist_song_playlist_id_fkey FOREIGN KEY (playlist_id) REFERENCES public.playlist(playlist_id);


--
-- TOC entry 2939 (class 2606 OID 75055)
-- Name: playlist_song playlist_song_song_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.playlist_song
    ADD CONSTRAINT playlist_song_song_id_fkey FOREIGN KEY (song_id) REFERENCES public.song(song_id);


-- Completed on 2023-02-03 12:41:24

--
-- PostgreSQL database dump complete
--

