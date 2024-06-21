package org.mysite.shopbackend.repository.Projection;

import java.time.LocalDateTime;

public interface PurchaseItem {
    String getName();
    Integer getPrice();
    LocalDateTime getPurchaseTime();

}
