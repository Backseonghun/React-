package org.mysite.shopbackend.service;

import org.mysite.shopbackend.Entity.Purchase;
import org.mysite.shopbackend.repository.Projection.PurchaseItem;

import java.util.List;

public interface PurchaseService {
    Purchase savePurchase(Purchase purchase);
    List<PurchaseItem> findPurchaseItemsOfUser(Long userId);
}
