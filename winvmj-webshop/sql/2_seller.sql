--
-- PostgreSQL database dump
--
--
-- Data for Name: seller_comp; Type: TABLE DATA; Schema: public; Owner: deployer
--

INSERT INTO public.seller_comp VALUES ('2119ff33-6dd2-4c0a-b113-a90ee32a01ca', 'hendra@user.com', 'Hendra I.', 'webshop.seller.core.SellerImpl', 'seller_impl');
INSERT INTO public.seller_comp VALUES ('2129ff33-6dd2-4c0a-b113-a90ee32a01ca', 'indah@user.com', 'Indah J.', 'webshop.seller.core.SellerImpl', 'seller_impl');
INSERT INTO public.seller_comp VALUES ('2139ff33-6dd2-4c0a-b113-a90ee32a01ca', 'joko@user.com', 'Joko K.', 'webshop.seller.core.SellerImpl', 'seller_impl');
INSERT INTO public.seller_comp VALUES ('2149ff33-6dd2-4c0a-b113-a90ee32a01ca', 'kiki@user.com', 'Kiki L.', 'webshop.seller.core.SellerImpl', 'seller_impl');
INSERT INTO public.seller_comp VALUES ('2159ff33-6dd2-4c0a-b113-a90ee32a01ca', 'lina@user.com', 'Lina M.', 'webshop.seller.core.SellerImpl', 'seller_impl');


--
-- Name: seller_comp seller_comp_pkey; Type: CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.seller_comp
    ADD CONSTRAINT seller_comp_pkey PRIMARY KEY (sellerid);


--
-- Name: seller_comp uksgy2awg3v8vv8pt8t8srb7a2s; Type: CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.seller_comp
    ADD CONSTRAINT uksgy2awg3v8vv8pt8t8srb7a2s UNIQUE (email);


--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database dump
--
-- Data for Name: seller_impl; Type: TABLE DATA; Schema: public; Owner: deployer
--

INSERT INTO public.seller_impl VALUES ('2119ff33-6dd2-4c0a-b113-a90ee32a01ca');
INSERT INTO public.seller_impl VALUES ('2129ff33-6dd2-4c0a-b113-a90ee32a01ca');
INSERT INTO public.seller_impl VALUES ('2139ff33-6dd2-4c0a-b113-a90ee32a01ca');
INSERT INTO public.seller_impl VALUES ('2149ff33-6dd2-4c0a-b113-a90ee32a01ca');
INSERT INTO public.seller_impl VALUES ('2159ff33-6dd2-4c0a-b113-a90ee32a01ca');


--
-- Name: seller_impl seller_impl_pkey; Type: CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.seller_impl
    ADD CONSTRAINT seller_impl_pkey PRIMARY KEY (sellerid);


--
-- Name: seller_impl fkcgt3b11pyw11nfm3b5gwhesjl; Type: FK CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.seller_impl
    ADD CONSTRAINT fkcgt3b11pyw11nfm3b5gwhesjl FOREIGN KEY (sellerid) REFERENCES public.seller_comp(sellerid);


--
-- PostgreSQL database dump complete
--

