package com.example.controller;

import com.example.model.Category;
import com.example.service.CategoryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
public class CategoryController {
    private final CategoryService categoryService;

    public CategoryController (CategoryService categoryService){
        this.categoryService = categoryService;
    }

    @GetMapping
    public List<Category> getAllCategories(){
        return categoryService.getAllCategory();
    }

    @PostMapping
    public Category saveCategory(@RequestBody Category category){
        return categoryService.saveCategory(category);
    }

}
