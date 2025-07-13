package test.mealloop.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/voucher")
public class VoucherController {
    @PostMapping("/get")
    public ResponseEntity<?> getVouchers() {
        return ResponseEntity.ok("");
    }

    @PostMapping("/create")
    public ResponseEntity<?> createVoucher() {
        return ResponseEntity.ok("");
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateVoucher() {
        return ResponseEntity.ok("");
    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteVouchers() {
        return ResponseEntity.ok("");
    }
}
