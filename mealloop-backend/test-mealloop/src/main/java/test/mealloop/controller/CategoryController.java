package test.mealloop.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/category")
public class CategoryController {


    @PostMapping("/get")
    public ResponseEntity<?> getCategories() {
        return ResponseEntity.ok("");
    }

    @PostMapping("/create")
    public ResponseEntity<?> createCategory() {
        return ResponseEntity.ok("");
    }

    @PutMapping("/add-product")
    public ResponseEntity<?> addProducts() {
        return ResponseEntity.ok("");
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateCategory() {
        return ResponseEntity.ok("");
    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteCategories() {
        return ResponseEntity.ok("");
    }
}
