--
-- PostgreSQL database dump
--

--
-- Data for Name: order_comp; Type: TABLE DATA; Schema: public; Owner: deployer
--

INSERT INTO public.order_comp VALUES ('19ef6dda-73d3-4f8d-860a-3c34e723690f', 0, '2025-04-20 22:20:03.724', 'webshop.order.core.OrderImpl', 'Not Paid', '89613755-6a6e-40d4-a79e-e6872d0628a4', '1119ff33-6dd2-4c0a-b113-a90ee32a01ca', 'order_impl');
INSERT INTO public.order_comp VALUES ('18ad53c6-0c6a-4109-ae98-a407928c3ff0', 0, '2025-04-20 22:20:05.133', 'webshop.order.core.OrderImpl', 'Not Paid', '89613755-6a6e-40d4-a79e-e6872d0628a4', '1119ff33-6dd2-4c0a-b113-a90ee32a01ca', 'order_impl');
INSERT INTO public.order_comp VALUES ('ed78ed2e-5193-49be-938b-4951221a8f68', 0, '2025-04-20 22:20:05.676', 'webshop.order.core.OrderImpl', 'Not Paid', '89613755-6a6e-40d4-a79e-e6872d0628a4', '1119ff33-6dd2-4c0a-b113-a90ee32a01ca', 'order_impl');
INSERT INTO public.order_comp VALUES ('28a6c651-d31f-4e77-b735-9109614d4285', 0, '2025-04-20 22:20:06.116', 'webshop.order.core.OrderImpl', 'Not Paid', '89613755-6a6e-40d4-a79e-e6872d0628a4', '1119ff33-6dd2-4c0a-b113-a90ee32a01ca', 'order_impl');
INSERT INTO public.order_comp VALUES ('3aa0dc27-7a8d-4c8c-9f97-546a547ae82c', 0, '2025-04-20 22:20:06.388', 'webshop.order.core.OrderImpl', 'Not Paid', '89613755-6a6e-40d4-a79e-e6872d0628a4', '1119ff33-6dd2-4c0a-b113-a90ee32a01ca', 'order_impl');
INSERT INTO public.order_comp VALUES ('b6da8a3f-1387-49a8-b0e9-d2a1bf5e7ef4', 0, '2025-04-20 22:20:06.638', 'webshop.order.core.OrderImpl', 'Not Paid', '89613755-6a6e-40d4-a79e-e6872d0628a4', '1119ff33-6dd2-4c0a-b113-a90ee32a01ca', 'order_impl');
INSERT INTO public.order_comp VALUES ('b609dec5-52bf-4501-816d-b3104050ff85', 0, '2025-04-20 22:20:06.868', 'webshop.order.core.OrderImpl', 'Not Paid', '89613755-6a6e-40d4-a79e-e6872d0628a4', '1119ff33-6dd2-4c0a-b113-a90ee32a01ca', 'order_impl');


--
-- Name: order_comp order_comp_pkey; Type: CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.order_comp
    ADD CONSTRAINT order_comp_pkey PRIMARY KEY (orderid);


--
-- Name: order_comp fki87tpcg4boxmul2b2oya6936o; Type: FK CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.order_comp
    ADD CONSTRAINT fki87tpcg4boxmul2b2oya6936o FOREIGN KEY (address_addressid) REFERENCES public.address_comp(addressid);


--
-- Name: order_comp fkjt0dwpcaajry39lc0pk9e7h2v; Type: FK CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.order_comp
    ADD CONSTRAINT fkjt0dwpcaajry39lc0pk9e7h2v FOREIGN KEY (customer_customerid) REFERENCES public.customer_comp(customerid);


--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database dump
--
--
-- Data for Name: order_impl; Type: TABLE DATA; Schema: public; Owner: deployer
--

INSERT INTO public.order_impl VALUES ('19ef6dda-73d3-4f8d-860a-3c34e723690f');
INSERT INTO public.order_impl VALUES ('18ad53c6-0c6a-4109-ae98-a407928c3ff0');
INSERT INTO public.order_impl VALUES ('ed78ed2e-5193-49be-938b-4951221a8f68');
INSERT INTO public.order_impl VALUES ('28a6c651-d31f-4e77-b735-9109614d4285');
INSERT INTO public.order_impl VALUES ('3aa0dc27-7a8d-4c8c-9f97-546a547ae82c');
INSERT INTO public.order_impl VALUES ('b6da8a3f-1387-49a8-b0e9-d2a1bf5e7ef4');
INSERT INTO public.order_impl VALUES ('b609dec5-52bf-4501-816d-b3104050ff85');


--
-- Name: order_impl order_impl_pkey; Type: CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.order_impl
    ADD CONSTRAINT order_impl_pkey PRIMARY KEY (orderid);


--
-- Name: order_impl fk6hkme8dst0ssy87yiwdh0muj8; Type: FK CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.order_impl
    ADD CONSTRAINT fk6hkme8dst0ssy87yiwdh0muj8 FOREIGN KEY (orderid) REFERENCES public.order_comp(orderid);


--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 12.22 (Ubuntu 12.22-0ubuntu0.20.04.2)
-- Dumped by pg_dump version 14.17 (Ubuntu 14.17-1.pgdg20.04+1)

--
-- Data for Name: order_shipping; Type: TABLE DATA; Schema: public; Owner: deployer
--



--
-- Name: order_shipping order_shipping_pkey; Type: CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.order_shipping
    ADD CONSTRAINT order_shipping_pkey PRIMARY KEY (orderid);


--
-- Name: order_shipping fk_base_component; Type: FK CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.order_shipping
    ADD CONSTRAINT fk_base_component FOREIGN KEY (base_component_id) REFERENCES public.order_comp(orderid);


--
-- Name: order_shipping fko6up2tcb0wm8hfsj17sebcba6; Type: FK CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.order_shipping
    ADD CONSTRAINT fko6up2tcb0wm8hfsj17sebcba6 FOREIGN KEY (record_orderid) REFERENCES public.order_comp(orderid);


--
-- Name: order_shipping fks4lb4q7k96r8j1p4v1h2ftbfv; Type: FK CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.order_shipping
    ADD CONSTRAINT fks4lb4q7k96r8j1p4v1h2ftbfv FOREIGN KEY (orderid) REFERENCES public.order_comp(orderid);


--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 12.22 (Ubuntu 12.22-0ubuntu0.20.04.2)

--
-- Data for Name: order_unauthorized; Type: TABLE DATA; Schema: public; Owner: deployer
--



--
-- Name: order_unauthorized order_unauthorized_pkey; Type: CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.order_unauthorized
    ADD CONSTRAINT order_unauthorized_pkey PRIMARY KEY (orderid);


--
-- Name: order_unauthorized fk_base_component; Type: FK CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.order_unauthorized
    ADD CONSTRAINT fk_base_component FOREIGN KEY (base_component_id) REFERENCES public.order_comp(orderid);


--
-- Name: order_unauthorized fkk9ghwecppfpcx5030x75a4i3h; Type: FK CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.order_unauthorized
    ADD CONSTRAINT fkk9ghwecppfpcx5030x75a4i3h FOREIGN KEY (record_orderid) REFERENCES public.order_comp(orderid);


--
-- Name: order_unauthorized fkusgjm4c9puw91ku8pn4p394k; Type: FK CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.order_unauthorized
    ADD CONSTRAINT fkusgjm4c9puw91ku8pn4p394k FOREIGN KEY (orderid) REFERENCES public.order_comp(orderid);


--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database dump
--
--
-- Data for Name: orderitem_comp; Type: TABLE DATA; Schema: public; Owner: deployer
--



--
-- Name: orderitem_comp orderitem_comp_pkey; Type: CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.orderitem_comp
    ADD CONSTRAINT orderitem_comp_pkey PRIMARY KEY (orderitemid);


--
-- Name: orderitem_comp fkd3d5u4vban312dea4lsvo4j6p; Type: FK CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.orderitem_comp
    ADD CONSTRAINT fkd3d5u4vban312dea4lsvo4j6p FOREIGN KEY (order_orderid) REFERENCES public.order_comp(orderid);


--
-- Name: orderitem_comp fkp99k6oe2v9fsyof7be30kiw03; Type: FK CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.orderitem_comp
    ADD CONSTRAINT fkp99k6oe2v9fsyof7be30kiw03 FOREIGN KEY (catalog_catalogid) REFERENCES public.catalog_comp(catalogid);


--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database dump
--
--
-- Data for Name: orderitem_impl; Type: TABLE DATA; Schema: public; Owner: deployer
--



--
-- Name: orderitem_impl orderitem_impl_pkey; Type: CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.orderitem_impl
    ADD CONSTRAINT orderitem_impl_pkey PRIMARY KEY (orderitemid);


--
-- Name: orderitem_impl fkqhtpw9otqxcg3c4vp0elshje5; Type: FK CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.orderitem_impl
    ADD CONSTRAINT fkqhtpw9otqxcg3c4vp0elshje5 FOREIGN KEY (orderitemid) REFERENCES public.orderitem_comp(orderitemid);


--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database dump
--

--
-- Data for Name: orderitem_shipping; Type: TABLE DATA; Schema: public; Owner: deployer
--



--
-- Name: orderitem_shipping orderitem_shipping_pkey; Type: CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.orderitem_shipping
    ADD CONSTRAINT orderitem_shipping_pkey PRIMARY KEY (orderitemid);


--
-- Name: orderitem_shipping fk74eqrfids0pxku3k40pe1p65t; Type: FK CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.orderitem_shipping
    ADD CONSTRAINT fk74eqrfids0pxku3k40pe1p65t FOREIGN KEY (record_orderitemid) REFERENCES public.orderitem_comp(orderitemid);


--
-- Name: orderitem_shipping fkqf62sk3gbmx4v8tppt9tfccb5; Type: FK CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.orderitem_shipping
    ADD CONSTRAINT fkqf62sk3gbmx4v8tppt9tfccb5 FOREIGN KEY (orderitemid) REFERENCES public.orderitem_comp(orderitemid);


--
-- PostgreSQL database dump complete
--

