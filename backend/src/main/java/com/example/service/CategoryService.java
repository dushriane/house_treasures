package com.example.service;

import com.example.model.Category;
import com.example.repository.CategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {
    private final CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository){
        this.categoryRepository = categoryRepository;
    }

    public List<Category> getAllCategory(){
        return categoryRepository.findAll();
    }

    public Category saveCategory(Category category){
        return categoryRepository.save(category);
    }
}
