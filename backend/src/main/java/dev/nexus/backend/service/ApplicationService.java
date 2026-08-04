package dev.nexus.backend.service;

import dev.nexus.backend.dao.ApplicationRepository;
import dev.nexus.backend.dto.ApplicationResponse;
import dev.nexus.backend.entity.Application;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ApplicationService {

    private final ApplicationRepository applicationRepository;

    public ApplicationService(ApplicationRepository applicationRepository) {
        this.applicationRepository = applicationRepository;
    }

    public List<ApplicationResponse> getAllApplications() {
        return applicationRepository.findAll()
                .stream()
                .map(this::toResponse)
                .toList();
    }

    private ApplicationResponse toResponse(Application application) {
        return new ApplicationResponse(
                application.getId(),
                application.getName(),
                application.getDescription(),
                application.getUrl(),
                application.getIconKey(),
                application.getRepoLink(),
                application.getCategory().getName()
        );
    }
}