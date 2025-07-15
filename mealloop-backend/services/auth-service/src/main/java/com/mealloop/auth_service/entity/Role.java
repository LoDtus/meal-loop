package com.mealloop.auth_service.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.github.f4b6a3.ulid.UlidCreator;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
@Entity
@Table(name = "role")
public class Role {
    @Id
    @Column(name = "role_id")
    private String id;

    @Column(name = "code")
    private String code;

    @Column(name = "name")
    private String name;

    @Column(name = "hidden")
    private Boolean hidden;

    @Column(name = "description")
    private String description;

    @JsonIgnore
    @ManyToMany(mappedBy = "roles")
    private List<Auth> users;

    @PrePersist
    public void generateId() {
        if (this.id == null) {
            this.id = "role-" + UlidCreator.getUlid().toString();
        }
    }
}
