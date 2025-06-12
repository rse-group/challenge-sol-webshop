module webshop.shipping.externalcourier {
	requires webshop.shipping.core;
	requires webshop.catalog.core;
	requires webshop.customer.core;
	requires webshop.address.core;
	requires webshop.order.core;
	requires webshop.config.core;

	exports webshop.shipping.externalcourier;
	
	requires vmj.routing.route;
	requires vmj.hibernate.integrator;
	requires vmj.auth;
	requires java.logging;
	// https://stackoverflow.com/questions/46488346/error32-13-error-cannot-access-referenceable-class-file-for-javax-naming-re/50568217
	requires java.naming;
	requires java.net.http;
	requires com.fasterxml.jackson.databind;
	requires com.fasterxml.jackson.core;

	opens webshop.shipping.externalcourier to org.hibernate.orm.core, gson, vmj.hibernate.integrator;
}
