package test.mealloop.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import test.mealloop.entity.Auth;
import test.mealloop.repository.AuthRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {
    private final AuthRepository repository;

    @Override
    public List<Auth> findAll() {
        return repository.findAll();
    }

    @Override
    public Auth findById(String id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public Auth findByUsername(String username) {
        return repository.findByUsername(username).orElse(null);
    }

    @Override
    public Auth save(Auth auth) {
        return repository.save(auth);
    }

    @Override
    public Boolean deleteById(String id) {
        if (!repository.existsById(id)) {
            return false;
        }
        repository.deleteById(id);
        return true;
    }
}
