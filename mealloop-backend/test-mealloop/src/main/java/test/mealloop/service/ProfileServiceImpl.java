package test.mealloop.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import test.mealloop.entity.Profile;
import test.mealloop.repository.ProfileRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProfileServiceImpl implements ProfileService {
    private final ProfileRepository repository;

    @Override
    public List<Profile> findAll() {
        return repository.findAll();
    }

    @Override
    public Profile findById(String id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public Profile findByUsernameOrEmail(String usernameOrEmail) {
        return repository.findById(usernameOrEmail).orElse(null);
    }

    @Override
    public Profile save(Profile profile) {
        return repository.save(profile);
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
