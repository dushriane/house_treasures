package com.example.controller;

import com.example.model.Item;
import com.example.service.ItemService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
@RequestMapping("/api/items")
public class ItemController {
    private final ItemService itemService;

    public ItemController(ItemService itemService){
        this.itemService = itemService;
    }

    @GetMapping
    public List<Item> getAllItems(){
        return itemService.getAllItems();
    }

    @PostMapping
    public Item saveItem(Item item){
        return itemService.saveItem(item);
    }
}
