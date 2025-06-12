module webshop.order.cancel {
	requires webshop.order.core;
    exports webshop.order.cancel;

	requires vmj.routing.route;
	requires vmj.hibernate.integrator;
	requires vmj.auth;
	requires java.logging;
	// https://stackoverflow.com/questions/46488346/error32-13-error-cannot-access-referenceable-class-file-for-javax-naming-re/50568217
	requires java.naming;

	opens webshop.order.cancel to org.hibernate.orm.core, gson, vmj.hibernate.integrator;
}
