--
-- PostgreSQL database dump
--
--
-- Data for Name: creditcard_impl; Type: TABLE DATA; Schema: public; Owner: deployer
--



--
-- Name: creditcard_impl creditcard_impl_pkey; Type: CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.creditcard_impl
    ADD CONSTRAINT creditcard_impl_pkey PRIMARY KEY (idtransaction);


--
-- Name: creditcard_impl fk57au3sv7ly5fgbced6amkx4w4; Type: FK CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.creditcard_impl
    ADD CONSTRAINT fk57au3sv7ly5fgbced6amkx4w4 FOREIGN KEY (idtransaction) REFERENCES public.payment_comp(idtransaction);


--
-- Name: creditcard_impl fk_base_component; Type: FK CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.creditcard_impl
    ADD CONSTRAINT fk_base_component FOREIGN KEY (base_component_id) REFERENCES public.payment_comp(idtransaction);


--
-- Name: creditcard_impl fkmivs4vn1nq5kl5k4knx5pwpa; Type: FK CONSTRAINT; Schema: public; Owner: deployer
--

ALTER TABLE ONLY public.creditcard_impl
    ADD CONSTRAINT fkmivs4vn1nq5kl5k4knx5pwpa FOREIGN KEY (record_idtransaction) REFERENCES public.payment_comp(idtransaction);


--
-- PostgreSQL database dump complete
--

