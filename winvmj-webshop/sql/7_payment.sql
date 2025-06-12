--
-- PostgreSQL database dump
--

--
-- Data for Name: payment_comp; Type: TABLE DATA; Schema: public; Owner: deployer
--



--
-- Name: payment_comp payment_comp_pkey; Type: CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.payment_comp
    ADD CONSTRAINT payment_comp_pkey PRIMARY KEY (idtransaction);


--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database dump
--

--
-- Data for Name: payment_impl; Type: TABLE DATA; Schema: public; Owner: deployer
--



--
-- Name: payment_impl payment_impl_pkey; Type: CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.payment_impl
    ADD CONSTRAINT payment_impl_pkey PRIMARY KEY (idtransaction);


--
-- Name: payment_impl fk9se4pm50cw5xwx6ad7mrwbh1h; Type: FK CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.payment_impl
    ADD CONSTRAINT fk9se4pm50cw5xwx6ad7mrwbh1h FOREIGN KEY (idtransaction) REFERENCES public.payment_comp(idtransaction);


--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database dump
--

--
-- Data for Name: paymentorder_comp; Type: TABLE DATA; Schema: public; Owner: deployer
--



--
-- Name: paymentorder_comp paymentorder_comp_pkey; Type: CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.paymentorder_comp
    ADD CONSTRAINT paymentorder_comp_pkey PRIMARY KEY (paymentorderid);


--
-- Name: paymentorder_comp fkchv0e28lo2yp73nlpbijhnoxs; Type: FK CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.paymentorder_comp
    ADD CONSTRAINT fkchv0e28lo2yp73nlpbijhnoxs FOREIGN KEY (order_orderid) REFERENCES public.order_comp(orderid);


--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database dump
--
--
-- Data for Name: paymentorder_impl; Type: TABLE DATA; Schema: public; Owner: deployer
--



--
-- Name: paymentorder_impl paymentorder_impl_pkey; Type: CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.paymentorder_impl
    ADD CONSTRAINT paymentorder_impl_pkey PRIMARY KEY (paymentorderid);


--
-- Name: paymentorder_impl fklchft17tkrm6a5c822tb9x90r; Type: FK CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.paymentorder_impl
    ADD CONSTRAINT fklchft17tkrm6a5c822tb9x90r FOREIGN KEY (paymentorderid) REFERENCES public.paymentorder_comp(paymentorderid);


--
-- PostgreSQL database dump complete
--

