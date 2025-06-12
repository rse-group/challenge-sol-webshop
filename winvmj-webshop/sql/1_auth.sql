--
-- PostgreSQL database dump
--

-- Dumped from database version 12.22 (Ubuntu 12.22-0ubuntu0.20.04.2)
-- Dumped by pg_dump version 14.17 (Ubuntu 14.17-1.pgdg20.04+1)

--
-- Data for Name: auth_role_comp; Type: TABLE DATA; Schema: public; Owner: deployer
--

INSERT INTO public.auth_role_comp VALUES ('75f6727e-66f8-484f-b77f-83eeec82cd10');
INSERT INTO public.auth_role_comp VALUES ('12372338-2822-420d-8c06-cff0d411d776');
INSERT INTO public.auth_role_comp VALUES ('12472338-2822-420d-8c06-cff0d411d776');


--
-- Name: auth_role_comp auth_role_comp_pkey; Type: CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.auth_role_comp
    ADD CONSTRAINT auth_role_comp_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

--
-- Data for Name: auth_role_impl; Type: TABLE DATA; Schema: public; Owner: deployer
--

INSERT INTO public.auth_role_impl VALUES ('administrator', 'Administrator', '75f6727e-66f8-484f-b77f-83eeec82cd10');
INSERT INTO public.auth_role_impl VALUES ('CreateOrder,HistoryOrder,CancelOrder,Customer,All', 'Customer', '12372338-2822-420d-8c06-cff0d411d776');
INSERT INTO public.auth_role_impl VALUES ('CreateCatalog,UpdateCatalog,DeleteCatalog,CreateCategory,UpdateCategory,FilterCategory,DeleteCategory,Seller,All,ViewAllOrder', 'Seller', '12472338-2822-420d-8c06-cff0d411d776');


--
-- Name: auth_role_impl auth_role_impl_pkey; Type: CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.auth_role_impl
    ADD CONSTRAINT auth_role_impl_pkey PRIMARY KEY (id);


--
-- Name: auth_role_impl fkg93esbm013a0au2sck1jwa1be; Type: FK CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.auth_role_impl
    ADD CONSTRAINT fkg93esbm013a0au2sck1jwa1be FOREIGN KEY (id) REFERENCES public.auth_role_comp(id);


--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 12.22 (Ubuntu 12.22-0ubuntu0.20.04.2)
-- Dumped by pg_dump version 14.17 (Ubuntu 14.17-1.pgdg20.04+1)

--
-- Data for Name: auth_user_comp; Type: TABLE DATA; Schema: public; Owner: deployer
--

INSERT INTO public.auth_user_comp VALUES ('2a0859e2-e73f-4ebe-85c0-6a39d231bbbb');
INSERT INTO public.auth_user_comp VALUES ('b097505f-be60-414b-83a8-cf4f44bc30ed');
INSERT INTO public.auth_user_comp VALUES ('1109ff33-6dd2-4c0a-b113-a90ee32a01ca');
INSERT INTO public.auth_user_comp VALUES ('2109ff33-6dd2-4c0a-b113-a90ee32a01ca');
INSERT INTO public.auth_user_comp VALUES ('1119ff33-6dd2-4c0a-b113-a90ee32a01ca');
INSERT INTO public.auth_user_comp VALUES ('1129ff33-6dd2-4c0a-b113-a90ee32a01ca');
INSERT INTO public.auth_user_comp VALUES ('1139ff33-6dd2-4c0a-b113-a90ee32a01ca');
INSERT INTO public.auth_user_comp VALUES ('1149ff33-6dd2-4c0a-b113-a90ee32a01ca');
INSERT INTO public.auth_user_comp VALUES ('1159ff33-6dd2-4c0a-b113-a90ee32a01ca');
INSERT INTO public.auth_user_comp VALUES ('1169ff33-6dd2-4c0a-b113-a90ee32a01ca');
INSERT INTO public.auth_user_comp VALUES ('2119ff33-6dd2-4c0a-b113-a90ee32a01ca');
INSERT INTO public.auth_user_comp VALUES ('2129ff33-6dd2-4c0a-b113-a90ee32a01ca');
INSERT INTO public.auth_user_comp VALUES ('2139ff33-6dd2-4c0a-b113-a90ee32a01ca');
INSERT INTO public.auth_user_comp VALUES ('2149ff33-6dd2-4c0a-b113-a90ee32a01ca');
INSERT INTO public.auth_user_comp VALUES ('2159ff33-6dd2-4c0a-b113-a90ee32a01ca');
INSERT INTO public.auth_user_comp VALUES ('09ae6a91-b27d-4b37-b40f-a647de0dcb75');
INSERT INTO public.auth_user_comp VALUES ('82e6a1ca-3fa5-43ab-aca6-6a7ffb2a23dc');
INSERT INTO public.auth_user_comp VALUES ('7122be6e-8e47-46fd-a578-037291182f1d');


--
-- Name: auth_user_comp auth_user_comp_pkey; Type: CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.auth_user_comp
    ADD CONSTRAINT auth_user_comp_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 12.22 (Ubuntu 12.22-0ubuntu0.20.04.2)
-- Dumped by pg_dump version 14.17 (Ubuntu 14.17-1.pgdg20.04+1)

--
-- Data for Name: auth_user_impl; Type: TABLE DATA; Schema: public; Owner: deployer
--

INSERT INTO public.auth_user_impl VALUES ('', 'syifa.afra@gmail.com', 'Syifa', '2a0859e2-e73f-4ebe-85c0-6a39d231bbbb');
INSERT INTO public.auth_user_impl VALUES ('', 'admin@user.com', 'admin', 'b097505f-be60-414b-83a8-cf4f44bc30ed');
INSERT INTO public.auth_user_impl VALUES ('', 'andi@user.com', 'Andi B.', '1119ff33-6dd2-4c0a-b113-a90ee32a01ca');
INSERT INTO public.auth_user_impl VALUES ('', 'budi@user.com', 'Budi C.', '1129ff33-6dd2-4c0a-b113-a90ee32a01ca');
INSERT INTO public.auth_user_impl VALUES ('', 'cahyo@user.com', 'Cahyo D.', '1139ff33-6dd2-4c0a-b113-a90ee32a01ca');
INSERT INTO public.auth_user_impl VALUES ('', 'dewi@user.com', 'Dewi E.', '1149ff33-6dd2-4c0a-b113-a90ee32a01ca');
INSERT INTO public.auth_user_impl VALUES ('', 'eka@user.com', 'Eka F.', '1159ff33-6dd2-4c0a-b113-a90ee32a01ca');
INSERT INTO public.auth_user_impl VALUES ('', 'fajar@user.com', 'Fajar G.', '1169ff33-6dd2-4c0a-b113-a90ee32a01ca');
INSERT INTO public.auth_user_impl VALUES ('', 'hendra@user.com', 'Hendra', '2119ff33-6dd2-4c0a-b113-a90ee32a01ca');
INSERT INTO public.auth_user_impl VALUES ('', 'indah@user.com', 'Indah', '2129ff33-6dd2-4c0a-b113-a90ee32a01ca');
INSERT INTO public.auth_user_impl VALUES ('', 'joko@user.com', 'Joko', '2139ff33-6dd2-4c0a-b113-a90ee32a01ca');
INSERT INTO public.auth_user_impl VALUES ('', 'kiki@user.com', 'Kiki', '2149ff33-6dd2-4c0a-b113-a90ee32a01ca');
INSERT INTO public.auth_user_impl VALUES ('', 'lina@user.com', 'Lina', '2159ff33-6dd2-4c0a-b113-a90ee32a01ca');
INSERT INTO public.auth_user_impl VALUES ('', 'maya@user.com', 'Maya', '09ae6a91-b27d-4b37-b40f-a647de0dcb75');
INSERT INTO public.auth_user_impl VALUES ('', 'rafa@user.com', 'rafaa', '82e6a1ca-3fa5-43ab-aca6-6a7ffb2a23dc');
INSERT INTO public.auth_user_impl VALUES ('', 'achievafuturagemilang@gmail.com', 'Achieva Futura Gemilang', '7122be6e-8e47-46fd-a578-037291182f1d');


--
-- Name: auth_user_impl auth_user_impl_pkey; Type: CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.auth_user_impl
    ADD CONSTRAINT auth_user_impl_pkey PRIMARY KEY (id);


--
-- Name: auth_user_impl uk_i0n8vyqertrnckipwwxufumta; Type: CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.auth_user_impl
    ADD CONSTRAINT uk_i0n8vyqertrnckipwwxufumta UNIQUE (email);


--
-- Name: auth_user_impl fkj93qld8dfmwxxethtnkbs0p0p; Type: FK CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.auth_user_impl
    ADD CONSTRAINT fkj93qld8dfmwxxethtnkbs0p0p FOREIGN KEY (id) REFERENCES public.auth_user_comp(id);


--
-- Data for Name: auth_user_passworded; Type: TABLE DATA; Schema: public; Owner: deployer
--

INSERT INTO public.auth_user_passworded VALUES ('349cbccafc082902f6d88098da92b998129d98c079996b96f305705ffddc67baa935e07353a00b6068e6b0f8e1245ee8d499c80ece5232ad938825cb292bce3b', '2a0859e2-e73f-4ebe-85c0-6a39d231bbbb', '2a0859e2-e73f-4ebe-85c0-6a39d231bbbb');
INSERT INTO public.auth_user_passworded VALUES ('349cbccafc082902f6d88098da92b998129d98c079996b96f305705ffddc67baa935e07353a00b6068e6b0f8e1245ee8d499c80ece5232ad938825cb292bce3b', 'b097505f-be60-414b-83a8-cf4f44bc30ed', 'b097505f-be60-414b-83a8-cf4f44bc30ed');
INSERT INTO public.auth_user_passworded VALUES ('349cbccafc082902f6d88098da92b998129d98c079996b96f305705ffddc67baa935e07353a00b6068e6b0f8e1245ee8d499c80ece5232ad938825cb292bce3b', '1119ff33-6dd2-4c0a-b113-a90ee32a01ca', '1119ff33-6dd2-4c0a-b113-a90ee32a01ca');
INSERT INTO public.auth_user_passworded VALUES ('349cbccafc082902f6d88098da92b998129d98c079996b96f305705ffddc67baa935e07353a00b6068e6b0f8e1245ee8d499c80ece5232ad938825cb292bce3b', '1129ff33-6dd2-4c0a-b113-a90ee32a01ca', '1129ff33-6dd2-4c0a-b113-a90ee32a01ca');
INSERT INTO public.auth_user_passworded VALUES ('349cbccafc082902f6d88098da92b998129d98c079996b96f305705ffddc67baa935e07353a00b6068e6b0f8e1245ee8d499c80ece5232ad938825cb292bce3b', '1139ff33-6dd2-4c0a-b113-a90ee32a01ca', '1139ff33-6dd2-4c0a-b113-a90ee32a01ca');
INSERT INTO public.auth_user_passworded VALUES ('349cbccafc082902f6d88098da92b998129d98c079996b96f305705ffddc67baa935e07353a00b6068e6b0f8e1245ee8d499c80ece5232ad938825cb292bce3b', '1149ff33-6dd2-4c0a-b113-a90ee32a01ca', '1149ff33-6dd2-4c0a-b113-a90ee32a01ca');
INSERT INTO public.auth_user_passworded VALUES ('349cbccafc082902f6d88098da92b998129d98c079996b96f305705ffddc67baa935e07353a00b6068e6b0f8e1245ee8d499c80ece5232ad938825cb292bce3b', '1159ff33-6dd2-4c0a-b113-a90ee32a01ca', '1159ff33-6dd2-4c0a-b113-a90ee32a01ca');
INSERT INTO public.auth_user_passworded VALUES ('349cbccafc082902f6d88098da92b998129d98c079996b96f305705ffddc67baa935e07353a00b6068e6b0f8e1245ee8d499c80ece5232ad938825cb292bce3b', '1169ff33-6dd2-4c0a-b113-a90ee32a01ca', '1169ff33-6dd2-4c0a-b113-a90ee32a01ca');
INSERT INTO public.auth_user_passworded VALUES ('349cbccafc082902f6d88098da92b998129d98c079996b96f305705ffddc67baa935e07353a00b6068e6b0f8e1245ee8d499c80ece5232ad938825cb292bce3b', '2119ff33-6dd2-4c0a-b113-a90ee32a01ca', '2119ff33-6dd2-4c0a-b113-a90ee32a01ca');
INSERT INTO public.auth_user_passworded VALUES ('349cbccafc082902f6d88098da92b998129d98c079996b96f305705ffddc67baa935e07353a00b6068e6b0f8e1245ee8d499c80ece5232ad938825cb292bce3b', '2129ff33-6dd2-4c0a-b113-a90ee32a01ca', '2129ff33-6dd2-4c0a-b113-a90ee32a01ca');
INSERT INTO public.auth_user_passworded VALUES ('349cbccafc082902f6d88098da92b998129d98c079996b96f305705ffddc67baa935e07353a00b6068e6b0f8e1245ee8d499c80ece5232ad938825cb292bce3b', '2139ff33-6dd2-4c0a-b113-a90ee32a01ca', '2139ff33-6dd2-4c0a-b113-a90ee32a01ca');
INSERT INTO public.auth_user_passworded VALUES ('349cbccafc082902f6d88098da92b998129d98c079996b96f305705ffddc67baa935e07353a00b6068e6b0f8e1245ee8d499c80ece5232ad938825cb292bce3b', '2149ff33-6dd2-4c0a-b113-a90ee32a01ca', '2149ff33-6dd2-4c0a-b113-a90ee32a01ca');
INSERT INTO public.auth_user_passworded VALUES ('349cbccafc082902f6d88098da92b998129d98c079996b96f305705ffddc67baa935e07353a00b6068e6b0f8e1245ee8d499c80ece5232ad938825cb292bce3b', '2159ff33-6dd2-4c0a-b113-a90ee32a01ca', '2159ff33-6dd2-4c0a-b113-a90ee32a01ca');


--
-- Name: auth_user_passworded auth_user_passworded_pkey; Type: CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.auth_user_passworded
    ADD CONSTRAINT auth_user_passworded_pkey PRIMARY KEY (id);


--
-- Name: auth_user_passworded fk19s1olt8skpbpguobv5ribt6o; Type: FK CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.auth_user_passworded
    ADD CONSTRAINT fk19s1olt8skpbpguobv5ribt6o FOREIGN KEY (id) REFERENCES public.auth_user_comp(id);


--
-- Name: auth_user_passworded fkl3tsngvir2naifbhumm0v6rqd; Type: FK CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.auth_user_passworded
    ADD CONSTRAINT fkl3tsngvir2naifbhumm0v6rqd FOREIGN KEY (user_id) REFERENCES public.auth_user_comp(id);


--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database dump
--
--
-- Data for Name: auth_user_role_comp; Type: TABLE DATA; Schema: public; Owner: deployer
--

INSERT INTO public.auth_user_role_comp VALUES ('01eea95e-549a-4148-b7cf-27748b9cacfb');
INSERT INTO public.auth_user_role_comp VALUES ('02eea95e-549a-4148-b7cf-27748b9cacfb');
INSERT INTO public.auth_user_role_comp VALUES ('03eea95e-549a-4148-b7cf-27748b9cacfb');
INSERT INTO public.auth_user_role_comp VALUES ('04eea95e-549a-4148-b7cf-27748b9cacfb');
INSERT INTO public.auth_user_role_comp VALUES ('05eea95e-549a-4148-b7cf-27748b9cacfb');
INSERT INTO public.auth_user_role_comp VALUES ('06eea95e-549a-4148-b7cf-27748b9cacfb');
INSERT INTO public.auth_user_role_comp VALUES ('07eea95e-549a-4148-b7cf-27748b9cacfb');
INSERT INTO public.auth_user_role_comp VALUES ('08eea95e-549a-4148-b7cf-27748b9cacfb');
INSERT INTO public.auth_user_role_comp VALUES ('09eea95e-549a-4148-b7cf-27748b9cacfb');
INSERT INTO public.auth_user_role_comp VALUES ('10eea95e-549a-4148-b7cf-27748b9cacfb');
INSERT INTO public.auth_user_role_comp VALUES ('11eea95e-549a-4148-b7cf-27748b9cacfb');
INSERT INTO public.auth_user_role_comp VALUES ('12eea95e-549a-4148-b7cf-27748b9cacfb');
INSERT INTO public.auth_user_role_comp VALUES ('13eea95e-549a-4148-b7cf-27748b9cacfb');


--
-- Name: auth_user_role_comp auth_user_role_comp_pkey; Type: CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.auth_user_role_comp
    ADD CONSTRAINT auth_user_role_comp_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database dump
--

--
-- Data for Name: auth_user_role_impl; Type: TABLE DATA; Schema: public; Owner: deployer
--

INSERT INTO public.auth_user_role_impl VALUES ('01eea95e-549a-4148-b7cf-27748b9cacfb', '75f6727e-66f8-484f-b77f-83eeec82cd10', '2a0859e2-e73f-4ebe-85c0-6a39d231bbbb');
INSERT INTO public.auth_user_role_impl VALUES ('02eea95e-549a-4148-b7cf-27748b9cacfb', '75f6727e-66f8-484f-b77f-83eeec82cd10', 'b097505f-be60-414b-83a8-cf4f44bc30ed');
INSERT INTO public.auth_user_role_impl VALUES ('03eea95e-549a-4148-b7cf-27748b9cacfb', '12372338-2822-420d-8c06-cff0d411d776', '1119ff33-6dd2-4c0a-b113-a90ee32a01ca');
INSERT INTO public.auth_user_role_impl VALUES ('04eea95e-549a-4148-b7cf-27748b9cacfb', '12372338-2822-420d-8c06-cff0d411d776', '1129ff33-6dd2-4c0a-b113-a90ee32a01ca');
INSERT INTO public.auth_user_role_impl VALUES ('05eea95e-549a-4148-b7cf-27748b9cacfb', '12372338-2822-420d-8c06-cff0d411d776', '1139ff33-6dd2-4c0a-b113-a90ee32a01ca');
INSERT INTO public.auth_user_role_impl VALUES ('06eea95e-549a-4148-b7cf-27748b9cacfb', '12372338-2822-420d-8c06-cff0d411d776', '1149ff33-6dd2-4c0a-b113-a90ee32a01ca');
INSERT INTO public.auth_user_role_impl VALUES ('07eea95e-549a-4148-b7cf-27748b9cacfb', '12372338-2822-420d-8c06-cff0d411d776', '1159ff33-6dd2-4c0a-b113-a90ee32a01ca');
INSERT INTO public.auth_user_role_impl VALUES ('08eea95e-549a-4148-b7cf-27748b9cacfb', '12372338-2822-420d-8c06-cff0d411d776', '1169ff33-6dd2-4c0a-b113-a90ee32a01ca');
INSERT INTO public.auth_user_role_impl VALUES ('09eea95e-549a-4148-b7cf-27748b9cacfb', '12472338-2822-420d-8c06-cff0d411d776', '2119ff33-6dd2-4c0a-b113-a90ee32a01ca');
INSERT INTO public.auth_user_role_impl VALUES ('10eea95e-549a-4148-b7cf-27748b9cacfb', '12472338-2822-420d-8c06-cff0d411d776', '2129ff33-6dd2-4c0a-b113-a90ee32a01ca');
INSERT INTO public.auth_user_role_impl VALUES ('11eea95e-549a-4148-b7cf-27748b9cacfb', '12472338-2822-420d-8c06-cff0d411d776', '2139ff33-6dd2-4c0a-b113-a90ee32a01ca');
INSERT INTO public.auth_user_role_impl VALUES ('12eea95e-549a-4148-b7cf-27748b9cacfb', '12472338-2822-420d-8c06-cff0d411d776', '2149ff33-6dd2-4c0a-b113-a90ee32a01ca');
INSERT INTO public.auth_user_role_impl VALUES ('13eea95e-549a-4148-b7cf-27748b9cacfb', '12472338-2822-420d-8c06-cff0d411d776', '2159ff33-6dd2-4c0a-b113-a90ee32a01ca');


--
-- Name: auth_user_role_impl auth_user_role_impl_pkey; Type: CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.auth_user_role_impl
    ADD CONSTRAINT auth_user_role_impl_pkey PRIMARY KEY (id);


--
-- Name: auth_user_role_impl fk1fdbc1l60nrlf03rubtij4y6a; Type: FK CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.auth_user_role_impl
    ADD CONSTRAINT fk1fdbc1l60nrlf03rubtij4y6a FOREIGN KEY (id) REFERENCES public.auth_user_role_comp(id);


--
-- Name: auth_user_role_impl fk3pokxn1i18kalevuka456mp6p; Type: FK CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.auth_user_role_impl
    ADD CONSTRAINT fk3pokxn1i18kalevuka456mp6p FOREIGN KEY (authuser) REFERENCES public.auth_user_impl(id);


--
-- Name: auth_user_role_impl fkrkludg4ww825oy1pal92rhett; Type: FK CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.auth_user_role_impl
    ADD CONSTRAINT fkrkludg4ww825oy1pal92rhett FOREIGN KEY (authrole) REFERENCES public.auth_role_comp(id);


--
-- PostgreSQL database dump complete
--

