package webshop.order.core;

import java.util.*;
import vmj.routing.route.Route;
import vmj.routing.route.VMJExchange;

import javax.persistence.OneToOne;
import javax.persistence.MappedSuperclass;
import javax.persistence.CascadeType;
import webshop.customer.core.Customer;
import webshop.address.core.Address;

@MappedSuperclass
public abstract class OrderDecorator extends OrderComponent {

    @OneToOne(cascade = CascadeType.ALL)
    protected OrderComponent record;

    public OrderDecorator(OrderComponent record, UUID orderId) {
    	super();
        this.record = record;
        this.orderId = orderId;
    }
    
    public OrderDecorator(OrderComponent record) {
        super();
        this.record = record;
        this.orderId = UUID.randomUUID();
    }

    public OrderDecorator() {
        super();
        this.record = new OrderImpl();
        this.orderId = UUID.randomUUID();
    }


    public OrderComponent getRecord() { return this.record; }
    public void setRecord(OrderComponent record) { this.record = record; }

    public UUID getId() { return this.record.getOrderId(); }
    public void setId(UUID orderId) { this.record.setOrderId(orderId); }

    public String getStatus() { return this.record.getStatus(); }
    public void setStatus(String status) { this.record.setStatus(status); }

    public Date getDate() { return this.record.getDate(); }
    public void setDate(Date date) { this.record.setDate(date); }

    public int getAmount() { return this.record.getAmount(); }
    public void setAmount(int amount) { this.record.setAmount(amount); }

    public Address getAddress() { return this.record.getAddress(); }
    public void setAddress(Address address) { this.record.setAddress(address); }

    public Customer getCustomer() { return this.record.getCustomer(); }
    public void setCustomer(Customer customer) { this.record.setCustomer(customer); }
    
    public HashMap<String, Object> toHashMap() { return this.record.toHashMap(); }
}
