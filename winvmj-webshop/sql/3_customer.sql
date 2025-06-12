--
-- PostgreSQL database dump
--
--
-- Data for Name: customer_comp; Type: TABLE DATA; Schema: public; Owner: deployer
--

INSERT INTO public.customer_comp VALUES ('1119ff33-6dd2-4c0a-b113-a90ee32a01ca', 'andi@user.com', 'Andi B.', 'webshop.customer.core.CustomerImpl', '081234222666', 'customer_impl');
INSERT INTO public.customer_comp VALUES ('1129ff33-6dd2-4c0a-b113-a90ee32a01ca', 'budi@user.com', 'Budi C.', 'webshop.customer.core.CustomerImpl', '081234222667', 'customer_impl');
INSERT INTO public.customer_comp VALUES ('1139ff33-6dd2-4c0a-b113-a90ee32a01ca', 'cahyo@user.com', 'Cahyo D.', 'webshop.customer.core.CustomerImpl', '081234222668', 'customer_impl');
INSERT INTO public.customer_comp VALUES ('1149ff33-6dd2-4c0a-b113-a90ee32a01ca', 'dewi@user.com', 'Dewi E.', 'webshop.customer.core.CustomerImpl', '081234222669', 'customer_impl');
INSERT INTO public.customer_comp VALUES ('1159ff33-6dd2-4c0a-b113-a90ee32a01ca', 'eka@user.com', 'Eka F.', 'webshop.customer.core.CustomerImpl', '081234222670', 'customer_impl');
INSERT INTO public.customer_comp VALUES ('1169ff33-6dd2-4c0a-b113-a90ee32a01ca', 'fajar@user.com', 'Fajar G.', 'webshop.customer.core.CustomerImpl', '081234222671', 'customer_impl');


--
-- Name: customer_comp customer_comp_pkey; Type: CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.customer_comp
    ADD CONSTRAINT customer_comp_pkey PRIMARY KEY (customerid);


--
-- Name: customer_comp ukk8c3w7i1qpxmb04f52nbd2a9p; Type: CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.customer_comp
    ADD CONSTRAINT ukk8c3w7i1qpxmb04f52nbd2a9p UNIQUE (email);


--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database dump
--

--
-- Data for Name: customer_impl; Type: TABLE DATA; Schema: public; Owner: deployer
--

INSERT INTO public.customer_impl VALUES ('1119ff33-6dd2-4c0a-b113-a90ee32a01ca');
INSERT INTO public.customer_impl VALUES ('1129ff33-6dd2-4c0a-b113-a90ee32a01ca');
INSERT INTO public.customer_impl VALUES ('1139ff33-6dd2-4c0a-b113-a90ee32a01ca');
INSERT INTO public.customer_impl VALUES ('1149ff33-6dd2-4c0a-b113-a90ee32a01ca');
INSERT INTO public.customer_impl VALUES ('1159ff33-6dd2-4c0a-b113-a90ee32a01ca');
INSERT INTO public.customer_impl VALUES ('1169ff33-6dd2-4c0a-b113-a90ee32a01ca');


--
-- Name: customer_impl customer_impl_pkey; Type: CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.customer_impl
    ADD CONSTRAINT customer_impl_pkey PRIMARY KEY (customerid);


--
-- Name: customer_impl fksunou9u52lv8ggdtok7v8poy2; Type: FK CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.customer_impl
    ADD CONSTRAINT fksunou9u52lv8ggdtok7v8poy2 FOREIGN KEY (customerid) REFERENCES public.customer_comp(customerid);


--
-- PostgreSQL database dump complete
--

--
-- Data for Name: address_comp; Type: TABLE DATA; Schema: public; Owner: deployer
--

INSERT INTO public.address_comp VALUES ('89613755-6a6e-40d4-a79e-e6872d0628a4', 'Depok', 17149, 'Depok', false, 'webshop.customer.core.AddressComponent', 'Jawa Barat', 'Jalan Keadilan', '-', 45155, '1119ff33-6dd2-4c0a-b113-a90ee32a01ca', 'address_impl');
INSERT INTO public.address_comp VALUES ('5ccdb72b-4e11-4c01-a2e3-8ebd8ca54bbe', 'Depok', 25980, 'Beji', false, 'webshop.customer.core.AddressComponent', 'Jawa Barat', 'jalan test 1', 'Pondok Cina', 16424, '1119ff33-6dd2-4c0a-b113-a90ee32a01ca', 'address_impl');
INSERT INTO public.address_comp VALUES ('3b76a139-1177-4734-8e27-bd82b76fc731', 'Depok', 7106, 'Depok', true, 'webshop.customer.core.AddressComponent', 'Jawa Barat', 'Jalan Halo', '-', 0, '1119ff33-6dd2-4c0a-b113-a90ee32a01ca', 'address_impl');


--
-- Name: address_comp address_comp_pkey; Type: CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.address_comp
    ADD CONSTRAINT address_comp_pkey PRIMARY KEY (addressid);


--
-- Name: address_comp fkbgm280ynmjs48rujdwrfty6cy; Type: FK CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.address_comp
    ADD CONSTRAINT fkbgm280ynmjs48rujdwrfty6cy FOREIGN KEY (customer_customerid) REFERENCES public.customer_comp(customerid);


--
-- Data for Name: address_impl; Type: TABLE DATA; Schema: public; Owner: deployer
--

INSERT INTO public.address_impl VALUES ('89613755-6a6e-40d4-a79e-e6872d0628a4');
INSERT INTO public.address_impl VALUES ('3b76a139-1177-4734-8e27-bd82b76fc731');
INSERT INTO public.address_impl VALUES ('5ccdb72b-4e11-4c01-a2e3-8ebd8ca54bbe');


--
-- Name: address_impl address_impl_pkey; Type: CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.address_impl
    ADD CONSTRAINT address_impl_pkey PRIMARY KEY (addressid);


--
-- Name: address_impl fkga08t2f7sb0bgqaxpnbbesn5m; Type: FK CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.address_impl
    ADD CONSTRAINT fkga08t2f7sb0bgqaxpnbbesn5m FOREIGN KEY (addressid) REFERENCES public.address_comp(addressid);


--
-- PostgreSQL database dump complete
--

