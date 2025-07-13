package com.mealloop.auth_service.entity;

import com.github.f4b6a3.ulid.UlidCreator;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
@Entity
@Table(name = "role")
public class Role {
    @Id
    @Column(name = "role_id")
    private String roleId;

    @Column(name = "code")
    private String code;

    @Column(name = "name")
    private String name;

    @Column(name = "hidden")
    private Boolean hidden;

    @Column(name = "description")
    private String description;

    @PrePersist
    public void generateId() {
        if (this.roleId == null) {
            this.roleId = "role-" + UlidCreator.getUlid().toString();
        }
    }
}
