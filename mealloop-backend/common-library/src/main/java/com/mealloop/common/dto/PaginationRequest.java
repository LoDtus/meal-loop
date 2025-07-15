package com.mealloop.common.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class PaginationRequest {
    private int page = 0;
    private int size = 20;
    private String sortBy = "id";
    private String sortDirection = "asc";
}
