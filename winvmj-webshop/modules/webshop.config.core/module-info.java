module webshop.config.core {
    exports webshop.config.core;
	requires java.net.http;
	requires java.logging;
	// https://stackoverflow.com/questions/46488346/error32-13-error-cannot-access-referenceable-class-file-for-javax-naming-re/50568217
	requires java.naming;

	opens webshop.config.core to org.hibernate.orm.core, gson, vmj.hibernate.integrator;
}
