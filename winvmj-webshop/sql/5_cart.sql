--
-- PostgreSQL database dump
--

--
-- Data for Name: cart_comp; Type: TABLE DATA; Schema: public; Owner: deployer
--

INSERT INTO public.cart_comp VALUES ('8b516a87-a67b-4d2d-9b45-6d60eb4c041e', 0, 'webshop.cart.core.CartComponent', NULL, 'cart_impl');
INSERT INTO public.cart_comp VALUES ('5f8d8a3b-2c1f-4d3a-bb99-7f6c8d2e5e42', 0, 'webshop.cart.core.CartImpl', '1129ff33-6dd2-4c0a-b113-a90ee32a01ca', 'cart_impl');
INSERT INTO public.cart_comp VALUES ('5f8d8a3b-2c1f-4d3a-bb99-7f6c8d2e5e43', 0, 'webshop.cart.core.CartImpl', '1139ff33-6dd2-4c0a-b113-a90ee32a01ca', 'cart_impl');
INSERT INTO public.cart_comp VALUES ('5f8d8a3b-2c1f-4d3a-bb99-7f6c8d2e5e44', 0, 'webshop.cart.core.CartImpl', '1149ff33-6dd2-4c0a-b113-a90ee32a01ca', 'cart_impl');
INSERT INTO public.cart_comp VALUES ('5f8d8a3b-2c1f-4d3a-bb99-7f6c8d2e5e45', 0, 'webshop.cart.core.CartImpl', '1159ff33-6dd2-4c0a-b113-a90ee32a01ca', 'cart_impl');
INSERT INTO public.cart_comp VALUES ('5f8d8a3b-2c1f-4d3a-bb99-7f6c8d2e5e46', 0, 'webshop.cart.core.CartImpl', '1169ff33-6dd2-4c0a-b113-a90ee32a01ca', 'cart_impl');
INSERT INTO public.cart_comp VALUES ('5f8d8a3b-2c1f-4d3a-bb99-7f6c8d2e5e41', 31800000, 'webshop.cart.core.CartImpl', '1119ff33-6dd2-4c0a-b113-a90ee32a01ca', 'cart_impl');


--
-- Name: cart_comp cart_comp_pkey; Type: CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.cart_comp
    ADD CONSTRAINT cart_comp_pkey PRIMARY KEY (cartid);


--
-- Name: cart_comp fk2x8ldb7jqqv96pe08wqo70y67; Type: FK CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.cart_comp
    ADD CONSTRAINT fk2x8ldb7jqqv96pe08wqo70y67 FOREIGN KEY (customer_customerid) REFERENCES public.customer_comp(customerid);


--
-- PostgreSQL database dump complete
--

--
-- Data for Name: cart_impl; Type: TABLE DATA; Schema: public; Owner: deployer
--

INSERT INTO public.cart_impl VALUES ('8b516a87-a67b-4d2d-9b45-6d60eb4c041e');
INSERT INTO public.cart_impl VALUES ('5f8d8a3b-2c1f-4d3a-bb99-7f6c8d2e5e41');
INSERT INTO public.cart_impl VALUES ('5f8d8a3b-2c1f-4d3a-bb99-7f6c8d2e5e42');
INSERT INTO public.cart_impl VALUES ('5f8d8a3b-2c1f-4d3a-bb99-7f6c8d2e5e43');
INSERT INTO public.cart_impl VALUES ('5f8d8a3b-2c1f-4d3a-bb99-7f6c8d2e5e44');
INSERT INTO public.cart_impl VALUES ('5f8d8a3b-2c1f-4d3a-bb99-7f6c8d2e5e45');
INSERT INTO public.cart_impl VALUES ('5f8d8a3b-2c1f-4d3a-bb99-7f6c8d2e5e46');


--
-- Name: cart_impl cart_impl_pkey; Type: CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.cart_impl
    ADD CONSTRAINT cart_impl_pkey PRIMARY KEY (cartid);


--
-- Name: cart_impl fkjdisntuxhpwbmsid0ws55bety; Type: FK CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.cart_impl
    ADD CONSTRAINT fkjdisntuxhpwbmsid0ws55bety FOREIGN KEY (cartid) REFERENCES public.cart_comp(cartid);


--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database dump
--

--
-- Data for Name: cartitem_comp; Type: TABLE DATA; Schema: public; Owner: deployer
--

INSERT INTO public.cartitem_comp VALUES ('1ff6fb0e-0a5a-4b47-9aea-05e120e429f8', 'webshop.cartitem.core.CartItemComponent', 1, '5f8d8a3b-2c1f-4d3a-bb99-7f6c8d2e5e41', 'edb1215b-f1de-4607-a141-4e748b26fd1b', 'cartitem_impl');
INSERT INTO public.cartitem_comp VALUES ('871498eb-61e5-4ea0-ad3d-eb7024573f65', 'webshop.cartitem.core.CartItemComponent', 2, '5f8d8a3b-2c1f-4d3a-bb99-7f6c8d2e5e41', '288f2b1c-7488-48ab-892c-0ff1e7aee3d4', 'cartitem_impl');
INSERT INTO public.cartitem_comp VALUES ('4d3186f7-4b7e-4b02-add6-ad9527de3a28', 'webshop.cart.core.CartItemComponent', 1, '5f8d8a3b-2c1f-4d3a-bb99-7f6c8d2e5e41', 'e5590b0d-fdc4-4eb8-b378-10faa77815bb', 'cartitem_impl');


--
-- Name: cartitem_comp cartitem_comp_pkey; Type: CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.cartitem_comp
    ADD CONSTRAINT cartitem_comp_pkey PRIMARY KEY (cartitemid);


--
-- Name: cartitem_comp fklmce8y8fhp9ppa7p8u1rggfxj; Type: FK CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.cartitem_comp
    ADD CONSTRAINT fklmce8y8fhp9ppa7p8u1rggfxj FOREIGN KEY (catalog_catalogid) REFERENCES public.catalog_comp(catalogid);


--
-- Name: cartitem_comp fkmjiaidhjo2ny39nu380bl7wxn; Type: FK CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.cartitem_comp
    ADD CONSTRAINT fkmjiaidhjo2ny39nu380bl7wxn FOREIGN KEY (cart_cartid) REFERENCES public.cart_comp(cartid);


--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database dump
--
--
-- Data for Name: cartitem_impl; Type: TABLE DATA; Schema: public; Owner: deployer
--

INSERT INTO public.cartitem_impl VALUES ('871498eb-61e5-4ea0-ad3d-eb7024573f65');
INSERT INTO public.cartitem_impl VALUES ('1ff6fb0e-0a5a-4b47-9aea-05e120e429f8');
INSERT INTO public.cartitem_impl VALUES ('4d3186f7-4b7e-4b02-add6-ad9527de3a28');


--
-- Name: cartitem_impl cartitem_impl_pkey; Type: CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.cartitem_impl
    ADD CONSTRAINT cartitem_impl_pkey PRIMARY KEY (cartitemid);


--
-- Name: cartitem_impl fklohtkpiwbmod317p6vrtqqoqw; Type: FK CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.cartitem_impl
    ADD CONSTRAINT fklohtkpiwbmod317p6vrtqqoqw FOREIGN KEY (cartitemid) REFERENCES public.cartitem_comp(cartitemid);


--
-- PostgreSQL database dump complete
--

